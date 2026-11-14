/**
 * Removes wording left over from the retired "complete package" pages that
 * contradicts the city-to-city trip now sold on the page: an accommodation
 * section that still says you stay in a Kathmandu hotel, when hotel nights in
 * the cities are an add-on (scripts/apply-city-addons.mts) and are listed
 * under What's Excluded.
 *
 * Each entry is an exact sentence and its replacement; a sentence that is no
 * longer found is reported and skipped. Before-values go to scripts/.backups/.
 *
 *   npx tsx scripts/fix-city-to-city-wording.mts --dry-run
 *   npx tsx scripts/fix-city-to-city-wording.mts
 */
import "dotenv/config";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";

const DRY_RUN = process.argv.includes("--dry-run");
const BACKUP_DIR = fileURLToPath(new URL("./.backups/", import.meta.url));

const addOn = (cities: string) => ` Hotel nights in ${cities} before and after the trek are not part of the price; add them as an extra when you book.`;
const KTM = addOn("Kathmandu");

/** Accommodation sections: slug -> [sentence as stored, sentence as it should read]. */
const SECTIONS: Record<string, [string, string]> = {
  "kanchenjunga-south-base-camp-trek": [
    "You stay in a tourist-standard hotel in Kathmandu, a simple hotel in Taplejung, and village teahouses at Yarsang, Tortong, and Cheram.",
    `You stay in a simple hotel in Taplejung and in village teahouses at Yarsang, Tortong, and Cheram.${KTM}`,
  ],
  "everest-base-camp-trek": [
    "You stay in a comfortable tourist-standard hotel in Kathmandu and in Sherpa-run teahouses throughout the trek.",
    `You stay in Sherpa-run teahouses throughout the trek.${KTM}`,
  ],
  "ganesh-himal-trek": [
    "You stay in a tourist-standard hotel in Kathmandu at either end, in simple homestays and village lodges at Trishuli Bazar, Gotlang, and Syabrubesi, and in tented camps through the high sections where no permanent accommodation exists.",
    `You stay in simple homestays and village lodges at Trishuli Bazar, Gotlang, and Syabrubesi, and in tented camps through the high sections where no permanent accommodation exists.${KTM}`,
  ],
  "ama-yangri-trek": [
    "You stay in a tourist-standard hotel in Kathmandu for the first two nights and in a village lodge or homestay at Tarkeghyang for two nights.",
    `You stay in a village lodge or homestay at Tarkeghyang for two nights.${KTM}`,
  ],
  "churen-himal-base-camp-trek": [
    "Apart from hotel nights in Kathmandu and Pokhara and simple lodging at Darbang, this is a <strong>camping trek</strong>",
    "Apart from simple lodging at Darbang, this is a <strong>camping trek</strong>",
  ],
  "langtang-valley-trek": [
    "You stay in a tourist-standard hotel in Kathmandu and in teahouses at Syabru Besi, Lama Hotel, Langtang Valley, and Kyanjin Gompa.",
    `You stay in teahouses at Syabru Besi, Lama Hotel, Langtang Valley, and Kyanjin Gompa.${KTM}`,
  ],
  "helambu-trek": [
    "You stay in a tourist-standard hotel in Kathmandu at either end and in teahouses along the trail at Chisapani, Khutumsang, Tharepati, and Tarke Ghyang.",
    `You stay in teahouses along the trail at Chisapani, Khutumsang, Tharepati, and Tarke Ghyang.${KTM}`,
  ],
  "tilicho-lake-trek": [
    "You stay in a tourist-standard hotel in Kathmandu and in teahouses throughout the trek.",
    `You stay in teahouses throughout the trek.${KTM}`,
  ],
  "ruby-valley-circuit-trek": [
    "You stay in a tourist-standard hotel in Kathmandu and in homestays and very simple village lodges along the trail.",
    `You stay in homestays and very simple village lodges along the trail.${KTM}`,
  ],
  "mundum-trek": [
    "You stay in a tourist-standard hotel in Kathmandu and in village homestays for every night of the trek.",
    `You stay in village homestays for every night of the trek.${KTM}`,
  ],
  "gosaikunda-lake-trek": [
    "You stay in a tourist-standard hotel in Kathmandu and in teahouses at Dhunche, Sing Gompa, and Gosaikunda.",
    `You stay in teahouses at Dhunche, Sing Gompa, and Gosaikunda.${KTM}`,
  ],
  "gokyo-lake-trek": [
    "You stay in a tourist-standard Kathmandu hotel and in teahouses throughout the trek.",
    `You stay in teahouses throughout the trek.${KTM}`,
  ],
  "kanchenjunga-north-base-camp-trek": [
    "You stay in a tourist-standard hotel in Kathmandu, in simple hotels at Bhadrapur and Taplejung, and in village teahouses at Amjilosa, Ghunsa, Khambachen, and Lhonak.",
    `You stay in simple hotels at Bhadrapur and Taplejung, and in village teahouses at Amjilosa, Ghunsa, Khambachen, and Lhonak.${KTM}`,
  ],
  "annapurna-circuit-trek": [
    "You stay in a tourist-standard hotel in Kathmandu and Pokhara at either end and in teahouses throughout the trek.",
    `You stay in teahouses throughout the trek.${addOn("Kathmandu and Pokhara")}`,
  ],
  "everest-view-trek": [
    "You stay in a tourist-standard hotel in Kathmandu and in Sherpa teahouses at Phakding, Namche Bazaar, and Lukla.",
    `You stay in Sherpa teahouses at Phakding, Namche Bazaar, and Lukla.${KTM}`,
  ],
  "everest-three-pass-trek": [
    "Lodging is in teahouses for the whole trek, with a tourist-standard hotel in Kathmandu at either end.",
    `Lodging is in teahouses for the whole trek.${KTM}`,
  ],
};

/** FAQ answers: [question, text as stored, text as it should read]. */
const FAQS: Array<[string, string, string]> = [
  [
    "How long does the Makalu Base Camp Trek take?",
    "The standard itinerary takes 15 days, including the arrival and departure days, domestic flights,",
    "The standard itinerary takes 15 days from Kathmandu to Kathmandu, including the domestic flights,",
  ],
];

/** Itinerary days: [slug, day, text as stored, text as it should read]. */
const DAYS: Array<[string, number, string, string]> = [
  [
    "ama-yangri-trek", 3,
    "Depending on your international flight time, you will either transfer directly to Tribhuvan International Airport or spend a final night in the city.",
    "The trek ends in Kathmandu; a hotel night in the city can be added to your booking if you are not flying out the same evening.",
  ],
  ["ama-yangri-trek", 3, "delivers an unusual amount for five days", "delivers an unusual amount for three days"],
];

async function main() {
  const backup: { treks: unknown[]; faqs: unknown[]; days: unknown[] } = { treks: [], faqs: [], days: [] };
  const writes: Array<() => Promise<unknown>> = [];

  for (const [slug, [stored, next]] of Object.entries(SECTIONS)) {
    const trek = await prisma.trek.findUnique({ where: { slug }, select: { id: true, customSections: true } });
    // Inside the JSON column, quotes in the HTML are escaped.
    const from = JSON.stringify(stored).slice(1, -1);
    const to = JSON.stringify(next).slice(1, -1);
    if (!trek?.customSections?.includes(from)) {
      console.log(`  skip  ${slug}: sentence not found`);
      continue;
    }
    console.log(`  fix   ${slug}: accommodation section`);
    backup.treks.push({ id: trek.id, customSections: trek.customSections });
    const customSections = trek.customSections.replace(from, to);
    writes.push(() => prisma.trek.update({ where: { id: trek.id }, data: { customSections } }));
  }

  for (const [question, stored, next] of FAQS) {
    const faq = await prisma.trekFaq.findFirst({ where: { question, answer: { contains: stored } }, select: { id: true, answer: true } });
    if (!faq) {
      console.log(`  skip  FAQ "${question}": text not found`);
      continue;
    }
    console.log(`  fix   FAQ "${question}"`);
    backup.faqs.push(faq);
    writes.push(() => prisma.trekFaq.update({ where: { id: faq.id }, data: { answer: faq.answer.replace(stored, next) } }));
  }

  for (const [slug, dayNumber, stored, next] of DAYS) {
    const day = await prisma.itineraryDay.findFirst({ where: { trek: { slug }, dayNumber }, select: { id: true, description: true, accommodation: true } });
    if (!day?.description?.includes(stored)) {
      console.log(`  skip  ${slug} day ${dayNumber}: text not found`);
      continue;
    }
    console.log(`  fix   ${slug} day ${dayNumber}`);
    if (!backup.days.some((d) => (d as { id: string }).id === day.id)) backup.days.push(day);
    writes.push(async () => {
      const current = await prisma.itineraryDay.findUnique({ where: { id: day.id }, select: { description: true, accommodation: true } });
      return prisma.itineraryDay.update({
        where: { id: day.id },
        data: {
          description: (current?.description ?? "").replace(stored, next),
          // The last night was listed as the airport; the trek ends in the city.
          ...(current?.accommodation?.includes("Airport") ? { accommodation: null } : {}),
        },
      });
    });
  }

  if (DRY_RUN) return console.log(`Dry run — ${writes.length} change(s), nothing written.`);
  if (writes.length === 0) return console.log("Nothing to change.");
  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = `${BACKUP_DIR}city-to-city-wording-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  writeFileSync(backupFile, JSON.stringify(backup));
  for (const write of writes) await write();
  console.log(`${writes.length} change(s) written. Before-values: ${backupFile}`);
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
