/**
 * Announce every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam…).
 * Run it once after deploying the key file, and after any deploy that adds or
 * changes many pages at once:
 *
 *   npm run seo:indexnow
 *
 * Day-to-day trek and blog saves announce their own pages (see lib/indexnow.ts).
 */
import { pingIndexNow } from "../lib/indexnow";
import { SITE_URL } from "../lib/seo";

const response = await fetch(`${SITE_URL}/sitemap.xml`);
if (!response.ok) throw new Error(`sitemap.xml returned ${response.status}`);
const urls = [...(await response.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
if (urls.length === 0) throw new Error("No <loc> entries found in sitemap.xml");

const result = await pingIndexNow(urls);
console.log(`IndexNow answered ${result.status} ${result.statusText} for ${urls.length} URLs`);
if (!result.ok) process.exitCode = 1;
