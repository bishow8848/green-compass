/**
 * Writes article text from scripts/blog-content to the database for the
 * articles whose stored text has drifted from their source, and nothing else:
 * no dates, statuses, FAQs or product pages. For pushing a wording fix made in
 * the sources without running the whole pipeline (scripts/apply-blog-content.mts).
 *
 *   npx tsx scripts/blog-content/sync-articles.mts                      # list what differs
 *   npx tsx scripts/blog-content/sync-articles.mts --apply --except=a,b # write all but a and b
 *
 * --except names articles to leave alone — ones whose source holds edits that
 * are not ready to go out.
 */
import "dotenv/config";
import { prisma } from "../../lib/prisma";
import { renderArticle, type TrekIndex } from "./build";
import { BLOG_IMAGES } from "./images";
import { ALL_POSTS } from "./index";

const APPLY = process.argv.includes("--apply");
const EXCEPT = new Set((process.argv.find((a) => a.startsWith("--except="))?.slice(9) ?? "").split(",").filter(Boolean));

const trekRows = await prisma.trek.findMany({
  select: { slug: true, heroImage: true, category: { select: { slug: true } }, galleryImages: { select: { imageId: true } } },
});
const treks: TrekIndex = new Map();
const images = new Set<string>(BLOG_IMAGES);
for (const t of trekRows) {
  if (!t.category?.slug) continue;
  treks.set(t.slug, { categorySlug: t.category.slug });
  if (t.heroImage) images.add(t.heroImage);
  for (const g of t.galleryImages) images.add(g.imageId);
}
const postSlugs = new Set(ALL_POSTS.map((p) => p.slug));
const stored = new Map((await prisma.blogPost.findMany({ select: { slug: true, status: true, content: true } })).map((p) => [p.slug, p]));

let written = 0;
for (const p of ALL_POSTS) {
  const row = stored.get(p.slug);
  if (!row) continue;
  const html = renderArticle(p, treks, postSlugs, images, []);
  if (html === row.content) continue;
  const skip = EXCEPT.has(p.slug);
  console.log(`${skip ? "skip " : APPLY ? "write" : "diff "} ${p.slug} [${row.status}]`);
  if (!APPLY || skip) continue;
  await prisma.blogPost.update({ where: { slug: p.slug }, data: { content: html } });
  written++;
}
console.log(APPLY ? `${written} article(s) written.` : "Listing only — pass --apply to write.");
await prisma.$disconnect();
