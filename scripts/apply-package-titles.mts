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
 * Pattern, first variant that fits in 60 characters:
 *   multi-day  "<Trip> – <N> Days: Itinerary & Cost"   (climbs add "(6,812 m)" if it fits)
 *   day trip   "<Trip>: Price & Booking"
 * The duration is not repeated when the trip name already carries one
 * ("Pokhara Honeymoon Tour – 4 Days"). The page adds the brand only when the
 * result still fits (brandedTitle's maxLength), as Google shows the site name
 * above each result anyway.
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

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const RESTORE = args.includes("--restore") ? args[args.indexOf("--restore") + 1] : undefined;
const BACKUP_DIR = fileURLToPath(new URL("./.backups/", import.meta.url));
const MAX_LENGTH = 60;

const TREKS_CATEGORY = {
  slug: "treks",
  metaTitle: "Nepal Trekking Packages — Everest, Annapurna & Manaslu Treks",
  metaDescription:
    "Guided treks in Nepal — Everest Base Camp, Annapurna, Langtang, Manaslu, Mustang and Dolpo — with day-by-day itineraries, group prices and fixed departures.",
};

/** "14 Days", "2 Night", "3 Hours", "20 Minutes" already in the name. */
const DURATION_IN_NAME = /\b\d+\s*-?\s*(?:days?|nights?|hours?|hrs?|minutes?|mins?)\b/i;
/** "(6,097 m)" or "6812m" already in the name. */
const ALTITUDE_IN_NAME = /\d,?\d{3}\s?m\b/i;

type TripForTitle = {
  title: string;
  duration: number;
  maxAltitude: number | null;
  category: { slug: string } | null;
};

/** A trailing " – 3 Hours" / " – 1 Day" on the name. */
const TRAILING_DURATION = /\s*[–-]\s*\d+\s*(?:hours?|hrs?|minutes?|mins?|days?|nights?)\s*$/i;

function tidy(name: string): string {
  return name.replace(/\s+(From|With)\s+/g, (_, word: string) => ` ${word.toLowerCase()} `).replace(/\s+/g, " ").trim();
}

export function packageTitle(trip: TripForTitle): string {
  const name = tidy(trip.title);
  let options: string[];

  if (trip.duration <= 1) {
    // For a long name, the words people search with ("price") outrank the
    // flight time, which the page states anyway.
    const base = name.replace(TRAILING_DURATION, "");
    options = [`${name}: Price & Booking`, `${base}: Price & Booking`, `${name} | Price`];
  } else {
    const days = DURATION_IN_NAME.test(name) ? "" : ` – ${trip.duration} Days`;
    const shortDays = DURATION_IN_NAME.test(name) ? "" : ` ${trip.duration} Days`;
    const altitude =
      trip.category?.slug === "climbing" && trip.maxAltitude && !ALTITUDE_IN_NAME.test(name)
        ? ` (${Math.round(trip.maxAltitude).toLocaleString("en-US")} m)`
        : "";
    options = [
      `${name}${altitude}${days}: Itinerary & Cost`,
      `${name}${days}: Itinerary & Cost`,
      `${name}${shortDays}: Itinerary & Cost`,
      `${name}${days}: Cost`,
      `${name}${days}`,
    ];
  }

  return options.find((t) => t.length <= MAX_LENGTH) ?? name;
}

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
      select: { id: true, slug: true, title: true, metaTitle: true, duration: true, maxAltitude: true, category: { select: { slug: true } } },
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
