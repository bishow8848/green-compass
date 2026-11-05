/**
 * Give every published trip a title written for people ready to book.
 *
 * The blog ranks for research searches ("how hard is the Everest Base Camp
 * trek"); a trip page has to win the buying ones — "everest base camp trek
 * cost", "mardi himal trek itinerary", "bungee jump kushma price". The old
 * titles named the trip and a scenic hook ("…| Kala Patthar & Khumbu") but
 * not one of those words, and one even called itself a "Guide", competing
 * with the blog's own guide for the same search.
 *
 * The pattern lives in lib/package-variants.ts (packageTitle), shared with
 * scripts/apply-package-variants.mts so the two never disagree: a complete
 * package reads "<Trip> Package – <N> Days from Kathmandu", a city-to-city trip
 * "<Trip> from Pokhara – <N> Days: Itinerary & Cost", a day trip "<Trip>: Price
 * & Booking". The page adds the brand only when the result still fits
 * (brandedTitle's maxLength), as Google shows the site name above each result.
 *
 * Also fills the /treks listing's meta title and description when the admin
 * has left them empty (the other categories have their own).
 *
 * Every value it replaces is saved to scripts/.backups/ first; --restore
 * <file> puts them back. Refresh the deployed site afterwards:
 *   npx tsx scripts/refresh-site-cache.mts --revalidate-url <site>
 *
 *   npx tsx scripts/apply-package-titles.mts --dry-run
 *   npx tsx scripts/apply-package-titles.mts
 *   npx tsx scripts/apply-package-titles.mts --restore scripts/.backups/package-titles-<stamp>.json
 */
import "dotenv/config";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { packageTitle } from "@/lib/package-variants";

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const RESTORE = args.includes("--restore") ? args[args.indexOf("--restore") + 1] : undefined;
const BACKUP_DIR = fileURLToPath(new URL("./.backups/", import.meta.url));

const TREKS_CATEGORY = {
  slug: "treks",
  metaTitle: "Nepal Trekking Packages — Everest, Annapurna & Manaslu Treks",
  metaDescription:
    "Guided treks in Nepal — Everest Base Camp, Annapurna, Langtang, Manaslu, Mustang and Dolpo — with day-by-day itineraries, group prices and fixed departures.",
};

/**
 * One UPDATE for every row. Two hundred single-row updates in a transaction
 * outlast its 30 s timeout over the link to the database and roll back. This
 * also bumps updatedAt, which the sitemap publishes as <lastmod>, so Google
 * knows these pages changed.
 */
function setTitles(rows: Array<{ id: string; metaTitle: string | null }>) {
  const values = Prisma.join(rows.map((r) => Prisma.sql`(${r.id}, ${r.metaTitle})`));
  return prisma.$executeRaw`
    UPDATE "treks" AS t SET "metaTitle" = v.title, "updatedAt" = now()
    FROM (VALUES ${values}) AS v(id, title)
    WHERE t.id = v.id`;
}

async function restore(file: string) {
  const backup = JSON.parse(readFileSync(file, "utf8")) as {
    treks: Array<{ id: string; metaTitle: string | null }>;
    category: { id: string; metaTitle: string | null; metaDescription: string | null } | null;
  };
  await prisma.$transaction([
    ...(backup.treks.length > 0 ? [setTitles(backup.treks)] : []),
    ...(backup.category
      ? [prisma.category.update({ where: { id: backup.category.id }, data: { metaTitle: backup.category.metaTitle, metaDescription: backup.category.metaDescription } })]
      : []),
  ]);
  console.log(`Restored ${backup.treks.length} trip title(s)${backup.category ? " and the /treks listing" : ""} from ${file}`);
}

async function main() {
  if (RESTORE) return restore(RESTORE);

  const [treks, category] = await Promise.all([
    prisma.trek.findMany({
      where: { status: "published" },
      select: { id: true, slug: true, title: true, subtitle: true, metaTitle: true, duration: true, maxAltitude: true, category: { select: { slug: true } } },
      orderBy: [{ categoryId: "asc" }, { slug: "asc" }],
    }),
    prisma.category.findUnique({
      where: { slug: TREKS_CATEGORY.slug },
      select: { id: true, metaTitle: true, metaDescription: true },
    }),
  ]);

  const changes = treks
    .map((t) => ({ ...t, next: packageTitle(t) }))
    .filter((t) => t.next !== t.metaTitle);

  for (const c of changes) {
    console.log(`${c.category?.slug}/${c.slug}\n   - ${c.metaTitle ?? "(none)"}\n   + ${c.next}  [${c.next.length}]`);
  }

  const titles = treks.map((t) => packageTitle(t).toLowerCase());
  const duplicates = titles.filter((t, i) => titles.indexOf(t) !== i);
  if (duplicates.length > 0) throw new Error(`Duplicate titles would be written: ${[...new Set(duplicates)].join(", ")}`);

  const fillCategory = category && (!category.metaTitle || !category.metaDescription);
  if (TREKS_CATEGORY.metaDescription.length > 160) throw new Error("/treks description is over 160 characters");
  console.log(`\n${changes.length} of ${treks.length} trip title(s) to change; /treks listing: ${fillCategory ? "fill empty meta" : "already set, left alone"}`);

  if (DRY_RUN) {
    console.log("Dry run — nothing written.");
    return;
  }

  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = `${BACKUP_DIR}package-titles-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  writeFileSync(
    backupFile,
    JSON.stringify(
      {
        treks: changes.map(({ id, slug, metaTitle }) => ({ id, slug, metaTitle })),
        category: fillCategory ? category : null,
      },
      null,
      2
    )
  );
  console.log(`Backup: ${backupFile}`);

  await prisma.$transaction([
    ...(changes.length > 0 ? [setTitles(changes.map((c) => ({ id: c.id, metaTitle: c.next })))] : []),
    ...(fillCategory
      ? [
          prisma.category.update({
            where: { id: category.id },
            data: {
              metaTitle: category.metaTitle || TREKS_CATEGORY.metaTitle,
              metaDescription: category.metaDescription || TREKS_CATEGORY.metaDescription,
            },
          }),
        ]
      : []),
  ]);
  console.log("Applied. Now refresh the deployed site's caches.");
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
