import { SITE_URL } from "@/lib/seo";

/**
 * IndexNow pushes changed URLs to Bing — and, through the shared protocol, to
 * Yandex, Seznam, Naver and others — the moment they are published, instead of
 * waiting for the next crawl. Google does not take part; it reads the sitemap.
 *
 * The key is public by design: engines confirm ownership by fetching it back
 * from public/<key>.txt, so that file must keep matching this value.
 */
export const INDEXNOW_KEY = "399b53586a8ea5512cba87259c771612";

/** Submit site paths or absolute URLs in a single request (up to 10,000). */
export async function pingIndexNow(paths: string[]): Promise<Response> {
  const urlList = [...new Set(paths.map((path) => new URL(path, SITE_URL).toString()))];
  return fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
    signal: AbortSignal.timeout(10_000),
  });
}

/**
 * Best-effort announcement for CMS saves. Only the production deployment may
 * announce URLs — previews and local dev would otherwise submit pages that are
 * not live — and a failed ping must never fail the save that triggered it.
 */
export async function submitToIndexNow(paths: string[]): Promise<void> {
  if (process.env.VERCEL_ENV !== "production" || paths.length === 0) return;
  try {
    const response = await pingIndexNow(paths);
    if (!response.ok) console.error(`[indexnow] submission rejected with ${response.status}`);
  } catch (error) {
    console.error("[indexnow] submission failed:", error);
  }
}
