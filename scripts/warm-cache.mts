/**
 * Re-render a deployed site's pages after their cache was dropped.
 *
 * A site-wide revalidation (scripts/refresh-site-cache.mts, or an admin save
 * that revalidates the root layout) leaves every page cold: the next request
 * for each one waits on a full render. On a site this size that next request
 * is very often Googlebot, which then records a slow page — or, while it
 * crawls several URLs at once, a 500. Walking the sitemap right after the
 * flush means the crawler finds every page already cached.
 *
 * By default only the pages that sell — the home page, category listings and
 * every trip — are warmed; `--all` adds the blog and everything else in the
 * sitemap. Requests go out two at a time so warming never becomes the load
 * spike it exists to prevent. Exits non-zero if any page still fails after a
 * retry, so a broken page is noticed here rather than in Search Console.
 *
 *   npx tsx scripts/warm-cache.mts https://greencompasstreks.com
 *   npx tsx scripts/warm-cache.mts https://greencompasstreks.com --all --concurrency 3
 */
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const PRODUCT_CATEGORIES = new Set(["treks", "tours", "climbing", "activities"]);
const USER_AGENT = "GreenCompassCacheWarmer/1.0";
const TIMEOUT_MS = 60_000;
const RETRY_DELAY_MS = 5_000;

type Result = { url: string; status: number; ms: number; cache: string };

function isSellingPage(url: URL, origin: string): boolean {
  if (url.origin !== origin) return false;
  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length === 0) return true; // home
  return PRODUCT_CATEGORIES.has(segments[0]) && segments.length <= 2; // listing or trip
}

async function sitemapUrls(origin: string): Promise<string[]> {
  const res = await fetch(`${origin}/sitemap.xml`, { headers: { "user-agent": USER_AGENT } });
  if (!res.ok) throw new Error(`sitemap.xml -> ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function warm(url: string): Promise<Result> {
  const started = Date.now();
  try {
    const res = await fetch(url, {
      headers: { "user-agent": USER_AGENT },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    // Read the body: the render is only cached once the response completes.
    await res.arrayBuffer();
    return { url, status: res.status, ms: Date.now() - started, cache: res.headers.get("x-vercel-cache") || "-" };
  } catch (e) {
    return { url, status: 0, ms: Date.now() - started, cache: e instanceof Error ? e.name : "error" };
  }
}

async function warmAll(urls: string[], concurrency: number): Promise<Result[]> {
  const results: Result[] = [];
  let next = 0;
  async function worker() {
    while (next < urls.length) {
      const url = urls[next++];
      let result = await warm(url);
      if (result.status === 0 || result.status >= 500) {
        await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
        result = await warm(url);
      }
      results.push(result);
      const flag = result.status === 200 ? "" : "  <-- FAILED";
      console.log(`${String(result.status).padStart(3)} ${String(result.ms).padStart(6)}ms ${result.cache.padEnd(11)} ${url}${flag}`);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

/** Warm a deployed site. Returns false when any page still failed after a retry. */
export async function warmSite(site: string, options: { all?: boolean; concurrency?: number } = {}): Promise<boolean> {
  const origin = new URL(site).origin;
  const concurrency = Math.max(1, Math.min(options.concurrency ?? 2, 6));
  const urls = (await sitemapUrls(origin)).filter((u) => {
    try {
      const url = new URL(u);
      return options.all ? url.origin === origin : isSellingPage(url, origin);
    } catch {
      return false;
    }
  });

  console.log(`Warm: ${urls.length} page(s) on ${origin}, ${concurrency} at a time\n`);
  const results = await warmAll(urls, concurrency);
  const failed = results.filter((r) => r.status !== 200);
  const slow = results.filter((r) => r.ms > 3000).length;
  const median = results.map((r) => r.ms).sort((a, b) => a - b)[Math.floor(results.length / 2)] ?? 0;
  console.log(`\nWarm: ${results.length - failed.length}/${results.length} OK, median ${median}ms, ${slow} took over 3s`);
  for (const f of failed) console.error(`Warm: FAILED ${f.status || f.cache} ${f.url}`);
  return failed.length === 0;
}

const isMain = Boolean(process.argv[1]) && fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isMain) {
  const args = process.argv.slice(2);
  const site = args.find((a) => /^https?:\/\//.test(a));
  const concurrencyArg = args.indexOf("--concurrency");
  const concurrency = concurrencyArg === -1 ? undefined : Number(args[concurrencyArg + 1]);
  if (!site) {
    console.error("Usage: npx tsx scripts/warm-cache.mts https://yoursite.com [--all] [--concurrency N]");
    process.exitCode = 1;
  } else {
    warmSite(site, { all: args.includes("--all"), concurrency })
      .then((ok) => { if (!ok) process.exitCode = 1; })
      .catch((e) => { console.error(e instanceof Error ? e.message : e); process.exitCode = 1; });
  }
}
