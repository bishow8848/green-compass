import { prisma } from "@/lib/prisma";
import { normalizeLegacyPath } from "@/lib/legacy-redirect-path";
import type { LegacyRedirectEntry } from "@/lib/legacy-redirect-path";

// Re-exported so server code can keep a single import site. Client components
// must import from "@/lib/legacy-redirect-path" instead (this module imports
// Prisma and cannot be bundled for the browser).
export { normalizeLegacyPath } from "@/lib/legacy-redirect-path";
export type { LegacyRedirectEntry } from "@/lib/legacy-redirect-path";

// Tiny in-process cache so the proxy doesn't hit the database on every
// request. Redirect edits take effect within CACHE_TTL_MS — or immediately
// when invalidateLegacyRedirectsCache() runs in the same process.
const CACHE_TTL_MS = 60_000;
let cachedMap: Record<string, LegacyRedirectEntry> | null = null;
let cachedAt = 0;

export function invalidateLegacyRedirectsCache(): void {
  cachedMap = null;
  cachedAt = 0;
}

/** Returns a map of normalized old path -> redirect entry for all active redirects. */
export async function getLegacyRedirectMap(): Promise<Record<string, LegacyRedirectEntry>> {
  const now = Date.now();
  if (cachedMap && now - cachedAt < CACHE_TTL_MS) {
    return cachedMap;
  }

  const rows = await prisma.legacyRedirect.findMany({
    where: { active: true },
    select: { oldPath: true, newPath: true, permanent: true },
  });

  const map: Record<string, LegacyRedirectEntry> = {};
  for (const row of rows) {
    const key = normalizeLegacyPath(row.oldPath);
    if (key === "/") continue; // never redirect the homepage
    map[key] = { newPath: row.newPath, permanent: row.permanent };
  }

  cachedMap = map;
  cachedAt = now;
  return map;
}
