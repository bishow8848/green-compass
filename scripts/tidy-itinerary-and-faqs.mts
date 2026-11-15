/**
 * Small corrections to the trip pages' text:
 *
 *   1. Itinerary day titles: a title that repeats a day number ("Day 10: Trek
 *      from Thorong Phedi…" on day 9) loses it, since the page prints the
 *      day's number itself; stray spaces are trimmed. Accommodation names
 *      lose stray spaces too.
 *   1b. A day's elevation, when its title names where the day ends and how
 *      high it is ("… to Dole (4,110 m)"), the accommodation box names the
 *      same place, and the elevation box says something else (3,680 m). The
 *      altitude chart and the "Elevation" line follow the title. An elevation
 *      that matches any height the title names is left alone: on a summit day
 *      it is the summit, which the chart is meant to show. Days that end
 *      somewhere other than their accommodation are left for a person.
 *   2. "What is not included in …?" answers on city-to-city trips say that
 *      hotel nights (and, for trips via Pokhara, the Kathmandu–Pokhara
 *      journey) are left out. They now also say these can be added when you
 *      book, as the Add-ons section offers (scripts/apply-city-addons.mts).
 *
 * Safe to re-run. Before-values go to scripts/.backups/.
 *
 *   npx tsx scripts/tidy-itinerary-and-faqs.mts --dry-run
 *   npx tsx scripts/tidy-itinerary-and-faqs.mts
 */
import "dotenv/config";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";
import { extrasSentence } from "@/lib/city-addons";

const DRY_RUN = process.argv.includes("--dry-run");
const BACKUP_DIR = fileURLToPath(new URL("./.backups/", import.meta.url));

const DAY_PREFIX = /^\s*Day\s*\d+\s*[:.–-]\s*/i;
/** "… to Dole (4,110 m)": where a day ends and how high. The last one in a title is the night's stop. */
const DESTINATION = /\bto ([^()]+?) \((\d{1,2},?\d{3}|\d{2,3}) m\)/g;
/** Heights this close are the same place measured differently. */
const SAME_HEIGHT = 30;
/** Already says the extras can be added: nothing to do. */
const HAS_POINTER = /can be added/i;

async function main() {
  const days = await prisma.itineraryDay.findMany({
    where: { trek: { status: "published" } },
    select: { id: true, dayNumber: true, title: true, elevation: true, accommodation: true, trek: { select: { slug: true } } },
  });
  type DayData = { title?: string; elevation?: string; accommodation?: string };
  const dayChanges: Array<{ d: (typeof days)[number]; data: DayData }> = [];
  for (const d of days) {
    const data: DayData = {};
    const title = d.title.replace(DAY_PREFIX, "").replace(/\s{2,}/g, " ").trim();
    if (title && title !== d.title) data.title = title;
    const accommodation = d.accommodation?.replace(/\s{2,}/g, " ").trim();
    if (accommodation && accommodation !== d.accommodation) data.accommodation = accommodation;

    const end = [...title.matchAll(DESTINATION)].pop();
    const stored = d.elevation?.match(/^\s*(\d{1,2},?\d{3}|\d{2,3})\s*m?\s*$/);
    if (end && stored && accommodation && accommodation.toLowerCase().startsWith(end[1].trim().toLowerCase())) {
      const height = Number(end[2].replace(",", ""));
      const current = Number(stored[1].replace(",", ""));
      const named = [...title.matchAll(/\((\d{1,2},?\d{3}|\d{2,3}) m\)/g)].map((m) => Number(m[1].replace(",", "")));
      if (!named.some((h) => Math.abs(h - current) <= SAME_HEIGHT)) data.elevation = `${height.toLocaleString("en-US")} m`;
    }
    if (Object.keys(data).length > 0) dayChanges.push({ d, data });
  }

  const faqs = await prisma.trekFaq.findMany({
    where: { trek: { status: "published" }, question: { startsWith: "What is not included" } },
    select: { id: true, answer: true, trek: { select: { slug: true, addons: true } } },
  });
  const faqChanges: Array<{ id: string; slug: string; before: string; after: string }> = [];
  for (const f of faqs) {
    if (HAS_POINTER.test(f.answer)) continue;
    let titles: string[] = [];
    try {
      titles = (JSON.parse(f.trek.addons || "[]") as Array<{ title?: string }>).map((a) => a.title ?? "");
    } catch {
      continue;
    }
    const pointer = extrasSentence(titles);
    if (!pointer) continue;
    // The pointer follows the list of what is left out, before the closing remark on the itinerary.
    const after = /\. Everything on the /.test(f.answer)
      ? f.answer.replace(/\. Everything on the /, `. ${pointer} Everything on the `)
      : `${f.answer.trim()} ${pointer}`;
    faqChanges.push({ id: f.id, slug: f.trek.slug, before: f.answer, after });
  }

  console.log(`Itinerary days: ${dayChanges.length}`);
  for (const { d, data } of dayChanges) {
    const before = Object.fromEntries(Object.keys(data).map((k) => [k, d[k as keyof DayData]]));
    console.log(`  ${d.trek.slug} day ${d.dayNumber}: ${JSON.stringify(before)} -> ${JSON.stringify(data)}`);
  }
  console.log(`"What is not included" answers: ${faqChanges.length}`);
  if (faqChanges[0]) console.log(`  e.g. ${faqChanges[0].slug}: ${faqChanges[0].after}`);
  if (DRY_RUN) return console.log("Dry run — nothing written.");
  if (dayChanges.length + faqChanges.length === 0) return console.log("Nothing to change.");

  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = `${BACKUP_DIR}tidy-itinerary-and-faqs-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  writeFileSync(
    backupFile,
    JSON.stringify({
      days: dayChanges.map(({ d }) => ({ id: d.id, title: d.title, elevation: d.elevation, accommodation: d.accommodation })),
      faqs: faqChanges.map(({ id, before }) => ({ id, answer: before })),
    })
  );
  for (const { d, data } of dayChanges) await prisma.itineraryDay.update({ where: { id: d.id }, data });
  for (const f of faqChanges) await prisma.trekFaq.update({ where: { id: f.id }, data: { answer: f.after } });
  console.log(`Updated ${dayChanges.length} itinerary day(s) and ${faqChanges.length} answer(s). Before-values: ${backupFile}`);
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
