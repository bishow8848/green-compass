/**
 * Prints every article in scripts/blog-content as it would be rendered right
 * now: `{ rendered: { <slug>: <html> }, faqs, relations, errors }` as JSON on
 * stdout. Read-only.
 *
 * Scripts that edit the article sources (scripts/retire-packages-and-guides.mts)
 * run it in a child process before and after the edit, because a module that
 * has been imported once keeps its old contents for the life of the process.
 *
 *   npx tsx scripts/blog-content/render-all.mts > rendered.json
 */
import "dotenv/config";
import { prisma } from "../../lib/prisma";
import { buildRelations, renderArticle, type TrekIndex } from "./build";
import { BLOG_IMAGES } from "./images";
import { ALL_POSTS } from "./index";

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
const errors: string[] = [];
const rendered: Record<string, string> = {};
const faqs: Record<string, string> = {};
for (const p of ALL_POSTS) {
  rendered[p.slug] = renderArticle(p, treks, postSlugs, images, errors);
  faqs[p.slug] = JSON.stringify(p.faqs);
}

process.stdout.write(JSON.stringify({ rendered, faqs, relations: buildRelations(ALL_POSTS), errors }));
await prisma.$disconnect();
