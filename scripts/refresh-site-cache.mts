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
 *   npx tsx scripts/refresh-site-cache.mts
 *   npx tsx scripts/refresh-site-cache.mts --revalidate-url https://example.com
 */
import "dotenv/config";
import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { Redis } from "@upstash/redis";
import { prisma } from "../lib/prisma";

const args = process.argv.slice(2);
const urlFlag = args.indexOf("--revalidate-url");
const SITE = urlFlag >= 0 ? args[urlFlag + 1] : null;

function siteKey(): string {
  const raw =
    process.env.REDIS_CACHE_NAMESPACE ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "greencompasstreks.com";
  try { return new URL(raw.startsWith("http") ? raw : `https://${raw}`).hostname; }
  catch { return raw.replace(/^https?:\/\//, "").replace(/\/.*$/, ""); }
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

function clearNextCache() {
  let removed = 0;
  for (const dir of [join(".next", "cache", "fetch-cache"), join(".next", "dev", "cache")]) {
    if (existsSync(dir)) { rmSync(dir, { recursive: true, force: true }); removed++; console.log(`Next: removed ${dir}`); }
  }
  if (!removed) console.log("Next: no local cache directories present");
  console.log("Next: restart the dev server (or redeploy) for the change to take effect");
}

/** Ask a running site to drop its cached pages, for hosts we cannot touch on disk. */
async function revalidateRemote(base: string) {
  const secret = process.env.REVALIDATION_SECRET;
  if (!secret) { console.log("Revalidate: REVALIDATION_SECRET not set — skipped"); return; }

  const treks = await prisma.trek.findMany({
    where: { status: "published" },
    select: { slug: true, category: { select: { slug: true } } },
  });
  const paths = ["/", ...treks.map((t) => `/${t.category?.slug ?? "treks"}/${t.slug}`)];

  let ok = 0;
  for (const path of paths) {
    try {
      const r = await fetch(`${base.replace(/\/$/, "")}/api/revalidate`, {
        method: "POST",
        headers: { "content-type": "application/json", authorization: `Bearer ${secret}` },
        body: JSON.stringify({ path }),
      });
      if (r.ok) ok++;
      else console.log(`  ! ${path} -> ${r.status}`);
    } catch (e: any) { console.log(`  ! ${path} -> ${e.message}`); }
    await new Promise((r) => setTimeout(r, 120)); // the endpoint is rate limited
  }
  console.log(`Revalidate: ${ok}/${paths.length} path(s) refreshed on ${base}`);
}

async function main() {
  console.log(`Refreshing caches for site "${siteKey()}"\n`);
  await clearRedis();
  clearNextCache();
  if (SITE) await revalidateRemote(SITE);
  else console.log("\n(pass --revalidate-url https://yoursite.com to refresh a deployed site too)");
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
