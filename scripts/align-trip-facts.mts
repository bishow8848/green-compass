/**
 * Makes each trip's stored text agree with the facts the page now states itself.
 *
 *   1. The trip page opens with a paragraph written from the trip's own data:
 *      length, start and end, height, grade, season and price
 *      (lib/trip-summary.ts). The overview stored for a city-to-city trip
 *      began with the same facts in bold — "<Trip>: 11 days, Kathmandu to
 *      Kathmandu. The trek starts and finishes in Kathmandu." — which would
 *      now be said twice. That opening is removed; the sentence after it, on
 *      what is and is not included, stays, and gains a pointer to the add-ons
 *      that cover what is left out (scripts/apply-city-addons.mts).
 *   2. Three treks are graded "moderate" in the facts box while their own
 *      difficulty section calls them challenging. The facts box follows the
 *      written description.
 *   3. "Max Altitude" was the highest place slept at, not the highest place
 *      reached: 5,160 m for Everest Base Camp, whose itinerary climbs Kala
 *      Patthar at 5,545 m. It is raised to the highest point the itinerary
 *      names, for trips that go above 2,500 m.
 *
 * Before-values go to scripts/.backups/.
 *
 *   npx tsx scripts/align-trip-facts.mts --dry-run
 *   npx tsx scripts/align-trip-facts.mts
 */
import "dotenv/config";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";
import { extrasSentence } from "@/lib/city-addons";

const DRY_RUN = process.argv.includes("--dry-run");
const BACKUP_DIR = fileURLToPath(new URL("./.backups/", import.meta.url));

/** The opening written by scripts/package-variants/plain-text.ts (plainCityIntro), up to the sentence on what is included. */
const INTRO = /^<p><strong>[^<]+: \d+ days?, [^<]+ to [^<]+\.<\/strong> The (?:trek|tour) (?:starts and finishes in [^.]+|starts in [^.]+ and finishes in [^.]+)\. ([\s\S]*?)<\/p>/;

/** Heights given in brackets in a day's title: "Trek to Gorak Shep (5,164 m) and hike Kala Patthar (5,545 m)". */
const heights = (text: string) => [...text.matchAll(/\((\d{1,2},?\d{3}(?:\.\d+)?)\s*m\)/g)].map((m) => Number(m[1].replace(",", "")));
/** Below this, height is not what a trip is chosen for and the stored figure is left alone. */
const HIGH_ALTITUDE = 2500;

/** Slug -> the grade its own difficulty section gives it. */
const GRADES: Record<string, string> = {
  "ganesh-himal-trek": "challenging",
  "lamjung-himal-trek": "challenging",
  "langtang-ganja-la-pass-trek": "challenging",
};

async function main() {
  const treks = await prisma.trek.findMany({
    where: { status: "published" },
    select: { id: true, slug: true, overview: true, difficulty: true, addons: true, maxAltitude: true, itinerary: { select: { title: true, elevation: true } } },
  });

  type Data = { overview?: string; difficulty?: string; maxAltitude?: number };
  const changes: Array<{ id: string; slug: string; data: Data; before: { overview: string; difficulty: string; maxAltitude: number | null } }> = [];
  for (const t of treks) {
    const data: Data = {};

    const intro = t.overview.match(INTRO);
    if (intro) {
      let titles: string[] = [];
      try {
        titles = (JSON.parse(t.addons || "[]") as Array<{ title?: string }>).map((a) => a.title ?? "");
      } catch {
        // No readable add-ons: the sentence simply gets no pointer.
      }
      const sentence = extrasSentence(titles);
      const pointer = sentence ? ` ${sentence}` : "";
      const included = intro[1].trim();
      data.overview = `<p>${included}${pointer}</p>${t.overview.slice(intro[0].length)}`;
    }

    const grade = GRADES[t.slug];
    if (grade && t.difficulty !== grade) data.difficulty = grade;

    const highest = Math.max(0, ...t.itinerary.flatMap((d) => [...heights(d.title), Number((d.elevation ?? "").replace(/[,m\s]/g, "")) || 0]));
    if (highest >= HIGH_ALTITUDE && highest > (t.maxAltitude ?? 0)) data.maxAltitude = highest;

    if (Object.keys(data).length > 0) {
      changes.push({ id: t.id, slug: t.slug, data, before: { overview: t.overview, difficulty: t.difficulty, maxAltitude: t.maxAltitude } });
    }
  }

  const intros = changes.filter((c) => c.data.overview);
  console.log(`Overviews with the repeated opening removed: ${intros.length}`);
  if (intros[0]) console.log(`  e.g. ${intros[0].slug}: ${intros[0].data.overview!.slice(0, 420)}`);
  for (const c of changes.filter((c) => c.data.difficulty)) console.log(`Grade: ${c.slug} ${c.before.difficulty} -> ${c.data.difficulty}`);
  for (const c of changes.filter((c) => c.data.maxAltitude)) console.log(`Max altitude: ${c.slug} ${c.before.maxAltitude} -> ${c.data.maxAltitude}`);
  if (DRY_RUN) return console.log("Dry run — nothing written.");
  if (changes.length === 0) return console.log("Nothing to change.");

  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = `${BACKUP_DIR}align-trip-facts-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  writeFileSync(backupFile, JSON.stringify(changes.map(({ id, slug, before }) => ({ id, slug, ...before }))));
  for (const c of changes) await prisma.trek.update({ where: { id: c.id }, data: c.data });
  console.log(`Updated ${changes.length} trip(s). Before-values: ${backupFile}`);
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
