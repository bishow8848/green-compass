/**
 * Flush every cache layer after writing to the database directly.
 *
 * Saving through the admin panel invalidates the caches as a side effect. A
 * script that writes to Postgres does not, so the site keeps serving the old
 * data — which looks exactly like the write having silently failed.
 *
 * There are three layers, and clearing only one is not enough:
 *
 *   1. Redis (Upstash)          — `getCachedOrFetch`, namespaced per site.
 *   2. Next.js Data Cache       — `unstable_cache` entries in .next/cache/fetch-cache.
 *   3. Next.js full-route cache — the trek page sets `revalidate = 604800`,
 *                                 so a built page is static for seven days.
 *
 * Layers 2 and 3 live on the machine running the server. Locally that means
 * deleting the cache directory and restarting; in production it means calling
 * /api/revalidate, which is what --revalidate-url does.
 *
 * Refreshed remotely: the whole site, via the root layout — see
 * `revalidateRemote`. Exits non-zero when the deployed site was not refreshed,
 * so a caller chaining this after a content script can tell.
 *
 *   npx tsx scripts/refresh-site-cache.mts
 *   npx tsx scripts/refresh-site-cache.mts --revalidate-url https://example.com
 */
import "dotenv/config";
import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { Redis } from "@upstash/redis";

/** Cache directories belong to the project, not to wherever this was invoked from. */
const PROJECT_ROOT = fileURLToPath(new URL("..", import.meta.url));

const args = process.argv.slice(2);
const REVALIDATE_URL_FLAG = "--revalidate-url";

/**
 * Accept both `--revalidate-url <url>` and `--revalidate-url=<url>`, and fail
 * loudly on a typo: the earlier version silently fell through to the local-only
 * path, which reads exactly like a successful run against production.
 */
function readRevalidateUrl(): string | null {
  const i = args.findIndex(
    (a) => a === REVALIDATE_URL_FLAG || a.startsWith(`${REVALIDATE_URL_FLAG}=`)
  );
  if (i === -1) return null;

  const raw = args[i].startsWith(`${REVALIDATE_URL_FLAG}=`)
    ? args[i].slice(REVALIDATE_URL_FLAG.length + 1)
    : args[i + 1];
  if (!raw || raw.startsWith("--")) {
    throw new Error(
      `${REVALIDATE_URL_FLAG} needs a URL, e.g. ${REVALIDATE_URL_FLAG} https://greencompasstreks.com`
    );
  }

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(`${REVALIDATE_URL_FLAG}: "${raw}" is not a valid URL`);
  }

  // REVALIDATION_SECRET travels in an Authorization header, so it must not go
  // out in cleartext to anything but a local host.
  const isLocalhost = url.hostname === "localhost" || url.hostname === "127.0.0.1";
  if (url.protocol !== "https:" && !isLocalhost) {
    throw new Error(
      `${REVALIDATE_URL_FLAG}: refusing to send REVALIDATION_SECRET over ${url.protocol}// — use https://`
    );
  }

  return url.origin + url.pathname.replace(/\/+$/, "");
}

/**
 * Mirrors `resolveCacheSiteKey()` in lib/redis.ts (scripts/cache-reset.mjs
 * carries the same copy). The namespace cleared here has to be the one the
 * running site reads from, character for character — derive it differently and
 * the script reports "cleared 0 key(s)" as though the cache had been empty,
 * while every stale entry stays exactly where it was. lib/redis.ts is the
 * source of truth; keep these in step.
 */
function siteKey(): string {
  const override = process.env.REDIS_CACHE_NAMESPACE;
  if (override) {
    return override
      .trim()
      .replace(/^:+|:+$/g, "")
      .replace(/[^a-zA-Z0-9._-]/g, "_");
  }

  const siteUrl = process.env.SITE_URL || "https://greencompasstreks.com";
  try {
    return new URL(siteUrl).hostname.replace(/^www\./, "").toLowerCase() || "default";
  } catch {
    return "default";
  }
}

async function clearRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) { console.log("Redis: not configured — skipped"); return; }

  const redis = new Redis({ url, token });
  const pattern = `mardi:cache:v2:${siteKey()}:*`;
  let cursor = "0";
  const keys: string[] = [];
  do {
    const [next, batch] = await redis.scan(cursor, { match: pattern, count: 500 });
    cursor = String(next);
    keys.push(...batch);
  } while (cursor !== "0");

  if (keys.length) {
    for (let i = 0; i < keys.length; i += 100) await redis.del(...keys.slice(i, i + 100));
  }
  console.log(`Redis: cleared ${keys.length} key(s) under ${pattern}`);
}

function clearNextCache(isRemote: boolean) {
  let removed = 0;
  for (const dir of [
    join(PROJECT_ROOT, ".next", "cache", "fetch-cache"),
    join(PROJECT_ROOT, ".next", "dev", "cache"),
  ]) {
    if (existsSync(dir)) { rmSync(dir, { recursive: true, force: true }); removed++; console.log(`Next: removed ${dir}`); }
  }
  if (!removed) console.log("Next: no local cache directories present");
  // Only the Data Cache lives in those directories. A local `next start` also
  // holds prerendered HTML in .next/server/app, which no restart rebuilds — run
  // a fresh `next build`, or point --revalidate-url at the local server. The
  // deployed site is refreshed over HTTP below, so the hint would only mislead.
  if (!isRemote) console.log("Next: restart the dev server for the local change to take effect");
}

/** Ask a running site to drop its cached pages, for hosts we cannot touch on disk. */
async function revalidateRemote(base: string): Promise<boolean> {
  const secret = process.env.REVALIDATION_SECRET;
  if (!secret) {
    console.error("Revalidate: REVALIDATION_SECRET not set — the deployed site was NOT refreshed");
    return false;
  }

  // One request for the whole site, which is what every admin save already does
  // (`revalidatePath("/", "layout")` in app/admin/*/actions.ts): the `_N_T_/layout`
  // tag is attached to every prerendered page and to /sitemap.xml, so this drops
  // all of them, along with the `unstable_cache` entries read while rendering them.
  //
  // Enumerating paths instead looks more precise and is worse on three counts.
  // It kept missing pages the writer scripts touch — the category listings,
  // /about, /contact, and the header and footer that every page renders. A
  // dynamic route also has to carry its route group ("/(marketing)/blog/[slug]",
  // never "/blog/[slug]"), because Next derives the cache tag from the route file
  // path; without the group it matches nothing and fails silently. And
  // /api/revalidate is rate limited to 10 requests per 10s, which a few hundred
  // trek and blog paths exhaust in seconds — the rest come back 429.
  const endpoint = `${base}/api/revalidate`;
  try {
    const r = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${secret}` },
      body: JSON.stringify({ path: "/", type: "layout" }),
    });
    if (!r.ok) {
      const detail = (await r.text().catch(() => "")).trim().slice(0, 200);
      console.error(`Revalidate: ${endpoint} -> ${r.status}${detail ? ` ${detail}` : ""}`);
      return false;
    }
    console.log(`Revalidate: every cached page and route dropped on ${base}`);
    return true;
  } catch (e) {
    console.error(`Revalidate: ${endpoint} -> ${e instanceof Error ? e.message : String(e)}`);
    return false;
  }
}

async function main() {
  const site = readRevalidateUrl();

  console.log(`Refreshing caches for site "${siteKey()}"\n`);
  await clearRedis();
  clearNextCache(Boolean(site));

  if (!site) {
    console.log(`\n(pass ${REVALIDATE_URL_FLAG} https://yoursite.com to refresh a deployed site too)`);
    return;
  }
  if (!(await revalidateRemote(site))) process.exitCode = 1;
}

main().catch((e) => { console.error(e instanceof Error ? e.message : e); process.exitCode = 1; });
