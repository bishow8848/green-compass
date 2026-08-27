import { prisma } from "@/lib/prisma";
import { normalizeLegacyPath } from "@/lib/legacy-redirect-path";
import type { LegacyRedirectEntry } from "@/lib/legacy-redirect-path";

// Re-exported so server code can keep a single import site. Client components
// must import from "@/lib/legacy-redirect-path" instead (this module imports
// Prisma and cannot be bundled for the browser).
export { normalizeLegacyPath } from "@/lib/legacy-redirect-path";
export type { LegacyRedirectEntry } from "@/lib/legacy-redirect-path";

type RedirectMap = Record<string, LegacyRedirectEntry>;

// Redirect edits take effect within CACHE_TTL_MS — or immediately when
// invalidateLegacyRedirectsCache() runs in the same process.
const CACHE_TTL_MS = 60_000;
// After a failed load, wait this long before trying the database again instead
// of re-querying on every single request while it is down.
const ERROR_BACKOFF_MS = 5_000;

const EMPTY: RedirectMap = Object.freeze({});

let cachedMap: RedirectMap | null = null;
let nextRefreshAt = 0;
// Single-flight guard. This module is called from the proxy, which runs on
// every page request: without it, a cold start or an expired cache lets N
// concurrent requests each open their own database connection at the same
// instant — the fastest way to exhaust the Supabase pooler (EMAXCONNSESSION).
// All concurrent callers share one query instead.
let inFlight: Promise<RedirectMap> | null = null;
// Bumped by invalidateLegacyRedirectsCache(). A load that started before an
// invalidation must not overwrite the cache with pre-write rows afterwards.
let generation = 0;

export function invalidateLegacyRedirectsCache(): void {
  cachedMap = null;
  nextRefreshAt = 0;
  inFlight = null;
  generation += 1;
}

async function loadRedirectMap(): Promise<RedirectMap> {
  const startedAt = generation;

  try {
    const rows = await prisma.legacyRedirect.findMany({
      where: { active: true },
      select: { oldPath: true, newPath: true, permanent: true },
    });

    const map: RedirectMap = {};
    for (const row of rows) {
      const key = normalizeLegacyPath(row.oldPath);
      if (key === "/") continue; // never redirect the homepage
      map[key] = { newPath: row.newPath, permanent: row.permanent };
    }

    // Discard the result if the cache was invalidated while this query was in
    // flight — the rows we just read predate the admin's write.
    if (generation === startedAt) {
      cachedMap = map;
      nextRefreshAt = Date.now() + CACHE_TTL_MS;
    }
    return map;
  } catch (error) {
    // Back off so a database outage doesn't turn into one failed query per
    // request. Any previously cached map keeps being served in the meantime.
    nextRefreshAt = Date.now() + ERROR_BACKOFF_MS;
    console.error("[legacy-redirects] failed to load redirect map:", error);
    throw error;
  }
}

function refresh(): Promise<RedirectMap> {
  inFlight ??= loadRedirectMap().finally(() => {
    inFlight = null;
  });
  return inFlight;
}

/** Returns a map of normalized old path -> redirect entry for all active redirects. */
export async function getLegacyRedirectMap(): Promise<RedirectMap> {
  const now = Date.now();

  if (cachedMap && now < nextRefreshAt) {
    return cachedMap;
  }

  if (cachedMap) {
    // Stale-while-revalidate: keep serving the previous map and refresh in the
    // background, so no visitor ever waits on the database in the proxy.
    void refresh().catch(() => {}); // already logged in loadRedirectMap
    return cachedMap;
  }

  // Nothing cached yet. Respect the error backoff, then fail open — a redirect
  // lookup must never take the site down.
  if (now < nextRefreshAt) return EMPTY;

  try {
    return await refresh();
  } catch {
    return EMPTY;
  }
}
