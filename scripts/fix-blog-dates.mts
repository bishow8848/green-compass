/**
 * Give every published blog post the date it actually went live.
 *
 * The articles were written to the database in four batches (10 and 19
 * September, 3 and 4 October 2026), but `date` in scripts/blog-content/* was
 * used as a sort key instead of a date: the catalogue was numbered three days
 * apart from 6 January 2026, so by the 249th article "Published on" read
 * 30 April 2028. This puts the real day back, taken from each row's
 * `createdAt`.
 *
 * The order on /blog does not change. The batches were dated one after the
 * other, so sorting by real day keeps them in sequence, and within a day the
 * posts are spaced a minute apart in their existing order.
 *
 * Only posts that are live are touched; a scheduled post's date is its
 * schedule. `updatedAt` is left alone — the articles themselves did not change,
 * and the sitemap's lastmod is read from it.
 *
 * The same dates are written back to the `date:` line of each article in
 * scripts/blog-content/*.ts, so the files and the database agree.
 *
 *   npx tsx scripts/fix-blog-dates.mts            # dry run (default)
 *   npx tsx scripts/fix-blog-dates.mts --apply    # write the database and the files
 */
import "dotenv/config";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { prisma } from "../lib/prisma";
import { utcToNepalLocal } from "../lib/blog-schedule";

const APPLY = process.argv.includes("--apply");
const CONTENT_DIR = fileURLToPath(new URL("./blog-content/", import.meta.url));

/**
 * The newest post of a day is stamped at this hour (17:45 in Nepal) and the
 * rest count back from it, a minute apart. Mid-afternoon keeps the UTC date
 * and the Nepal date the same, so every page shows the same day whichever one
 * it formats with.
 */
const DAY_ANCHOR_UTC = "12:00:00.000Z";

async function main() {
  const now = new Date();
  const posts = await prisma.blogPost.findMany({
    where: { status: "published" },
    orderBy: [{ publishedDate: "asc" }, { createdAt: "asc" }],
    select: { id: true, slug: true, publishedDate: true, createdAt: true },
  });

  // Real day -> its posts, each list already in display order (oldest first).
  const byDay = new Map<string, typeof posts>();
  for (const post of posts) {
    const day = utcToNepalLocal(post.createdAt).slice(0, 10);
    byDay.set(day, [...(byDay.get(day) ?? []), post]);
  }

  const changes: { id: string; slug: string; from: Date; to: Date }[] = [];
  const dateBySlug = new Map<string, string>();
  for (const [day, list] of [...byDay].sort(([a], [b]) => a.localeCompare(b))) {
    const anchor = new Date(`${day}T${DAY_ANCHOR_UTC}`).getTime();
    list.forEach((post, i) => {
      const to = new Date(anchor - (list.length - 1 - i) * 60_000);
      dateBySlug.set(post.slug, day);
      if (to.getTime() !== post.publishedDate.getTime()) {
        changes.push({ id: post.id, slug: post.slug, from: post.publishedDate, to });
      }
    });
    console.log(`${day}  ${String(list.length).padStart(3)} posts  (${list[0].slug} … ${list[list.length - 1].slug})`);
  }

  // The new order must be the old one, or /blog reshuffles.
  const reordered = [...posts]
    .map((post) => ({ slug: post.slug, at: changes.find((c) => c.id === post.id)?.to ?? post.publishedDate }))
    .sort((a, b) => a.at.getTime() - b.at.getTime())
    .map((post) => post.slug);
  if (reordered.join() !== posts.map((post) => post.slug).join()) {
    throw new Error("Re-dating would change the order of the posts — nothing written.");
  }

  const future = posts.filter((post) => post.publishedDate > now).length;
  console.log(`\nPublished posts:  ${posts.length}`);
  console.log(`Dated ahead of today: ${future}`);
  console.log(`To re-date:       ${changes.length}`);

  // ── Content files ──
  // Each article object opens with `slug:` and carries its `date:` a few lines
  // below, before the next article's slug.
  const ENTRY_RE = /(slug:\s*"([a-z0-9-]+)",(?:(?!slug:\s*")[\s\S])*?\bdate:\s*")(\d{4}-\d{2}-\d{2})(")/g;
  let fileEdits = 0;
  const filesChanged: string[] = [];
  for (const name of readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".ts")).sort()) {
    const path = CONTENT_DIR + name;
    const before = readFileSync(path, "utf8");
    const after = before.replace(ENTRY_RE, (whole, head: string, slug: string, date: string, tail: string) => {
      const real = dateBySlug.get(slug);
      if (!real || real === date) return whole;
      fileEdits++;
      return `${head}${real}${tail}`;
    });
    if (after !== before) {
      filesChanged.push(name);
      if (APPLY) writeFileSync(path, after);
    }
  }
  console.log(`Content files:    ${fileEdits} date lines in ${filesChanged.length} files`);

  if (!APPLY) {
    console.log("\nDry run — pass --apply to write the database and the files.");
    await prisma.$disconnect();
    return;
  }

  // Raw SQL so Prisma does not bump updatedAt along with the date.
  for (const change of changes) {
    await prisma.$executeRaw`UPDATE "blog_posts" SET "publishedDate" = ${change.to} WHERE "id" = ${change.id}`;
  }
  console.log(`\nRe-dated ${changes.length} posts. Run \`npm run cache:refresh\` so the site shows the new dates.`);
  await prisma.$disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
