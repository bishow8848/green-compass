/**
 * Corrects data-entry errors on trip pages, each checked against the trip's
 * own itinerary or price list:
 *
 *   - Itinerary days whose elevation and accommodation were entered in each
 *     other's boxes ("Elevation: Chame", "Accommodation: 2,670 m"). A day
 *     with no readable elevation drops out of the altitude chart.
 *   - Route-map stops named only by a height ("2,670 m") or with a broken
 *     bracket ("Thorong Phedi (4,450 m"); the name shows on the map and in
 *     its alt text.
 *   - Route-map stops placed at the wrong place of the same name, or at the
 *     wrong night's stop, which bent the drawn route hundreds of kilometres
 *     off course. Positions are copied from the same place on other trips, or
 *     from OpenStreetMap (Gyabla: node 12287363632; Dobato, Annapurna-11:
 *     28.4233, 83.7369; Jagat on the Tamakoshi, Bigu-1, Dolakha: 27.8246,
 *     86.2274, where the Rolwaling trek had the Jagat on the Manaslu trail). Chistibung, on the Khopra ridge, is in neither, so
 *     its pin (which sat in Langtang) is removed rather than guessed.
 *   - Two nights the itinerary text places elsewhere ("Overnight in
 *     Muktinath", "Overnight in Gyabla") while the boxes said Jomsom and Ghunsa.
 *   - Group-size labels that overlap or run backwards ("8-10" then "10-14",
 *     "14-10"), which the price calculator reads to pick a tier.
 *   - With --fix-prices only, and only once the owner has confirmed it: one
 *     price that breaks its own list. The 8–10 person rate of the Annapurna
 *     Circuit with Tilicho Lake is USD 585 in a list that otherwise falls by
 *     USD 25 per tier (760, 735, 710, …, 660, 635), which looks like a typo
 *     for USD 685; the trip's "from" price would follow the corrected list.
 *
 * Each correction is skipped, and reported, if the stored value is no longer
 * the one it expects. Before-values go to scripts/.backups/.
 *
 *   npx tsx scripts/fix-trip-data-errors.mts --dry-run
 *   npx tsx scripts/fix-trip-data-errors.mts
 *   npx tsx scripts/fix-trip-data-errors.mts --fix-prices   # also the price above
 */
import "dotenv/config";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";

const DRY_RUN = process.argv.includes("--dry-run");
/** Prices are the owner's decision: they change only when asked for. */
const FIX_PRICES = process.argv.includes("--fix-prices");
const BACKUP_DIR = fileURLToPath(new URL("./.backups/", import.meta.url));

type DayFix = { slug: string; day: number; expect: { elevation?: string | null; accommodation?: string | null }; set: { elevation?: string; accommodation?: string; placeDescription?: string } };
const DAYS: DayFix[] = [
  {
    slug: "lower-mustang-trek", day: 1,
    expect: { elevation: "2,800 mKagbeni is an ancient Himalayan village known for its traditional mud-brick houses, narrow alleys, and Tibetan Buddhist heritage." },
    set: { elevation: "2,800 m", accommodation: "Kagbeni" },
  },
  { slug: "upper-dolpo-trek", day: 4, expect: { elevation: "Sulighat", accommodation: "3,180 m" }, set: { elevation: "3,180 m", accommodation: "Sulighat" } },
  { slug: "kanchenjunga-circuit-trek", day: 13, expect: { elevation: "Cheram ", accommodation: "3,868 m" }, set: { elevation: "3,870 m", accommodation: "Cheram" } },
  { slug: "annapurna-circuit-trek", day: 3, expect: { elevation: "Chame ", accommodation: "2,670 m" }, set: { elevation: "2,670 m", accommodation: "Chame" } },
  { slug: "manaslu-circuit-trek", day: 13, expect: { elevation: "1,400" }, set: { elevation: "1,400 m" } },
  { slug: "rolwaling-valley-trek", day: 11, expect: { elevation: "Tashi Puk", accommodation: "Pachermo High Camp " }, set: { elevation: "5,300 m", accommodation: "Pachermo High Camp (Tashi Puk)" } },
  { slug: "makalu-base-camp-trek", day: 10, expect: { accommodation: "Makalu Base Camp (4,870 m" }, set: { accommodation: "Makalu Base Camp" } },
  { slug: "annapurna-circuit-with-tilicho-lake-trek", day: 8, expect: { accommodation: "Thorong Phedi (4,450 m" }, set: { accommodation: "Thorong Phedi" } },
  { slug: "annapurna-circuit-with-tilicho-lake-trek", day: 9, expect: { elevation: "2,720 m", accommodation: "Jomsom" }, set: { elevation: "3,800 m", accommodation: "Muktinath" } },
  { slug: "kanchenjunga-circuit-trek", day: 5, expect: { elevation: "3,415 m", accommodation: "Ghunsa" }, set: { elevation: "2,725 m", accommodation: "Gyabla" } },
];

/** Stops moved to the right place: [slug, day, label as stored, rounded longitude as stored, the stop as it should be]. */
const MOVES: Array<[string, number, string, number, { label: string; lat: number; lng: number }]> = [
  ["annapurna-circuit-trek", 9, "Yak Kharka", 83.651, { label: "Yak Kharka", lat: 28.7181, lng: 83.9903 }],
  ["annapurna-circuit-with-tilicho-lake-trek", 7, "Yak Kharka", 83.651, { label: "Yak Kharka", lat: 28.7181, lng: 83.9903 }],
  ["annapurna-circuit-with-tilicho-lake-trek", 9, "Jomsom", 83.731, { label: "Muktinath", lat: 28.8169164, lng: 83.8714547 }],
  ["kanchenjunga-circuit-trek", 5, "Ghunsa", 87.936, { label: "Gyabla", lat: 27.6140293, lng: 87.8734311 }],
  ["khopra-danda-trek", 3, "Dobato", 87.21, { label: "Dobato", lat: 28.423317, lng: 83.736942 }],
  ["rolwaling-valley-trek", 1, "Jagat", 84.896, { label: "Jagat", lat: 27.8245885, lng: 86.2273713 }],
];

/** Stops removed: [slug, day, label as stored, rounded longitude as stored]. */
const REMOVALS: Array<[string, number, string, number]> = [["khopra-danda-trek", 4, "Chistibung", 85.459]];

/** Route-map stops: [slug, label as stored, label as it should read]. */
const STOPS: Array<[string, string, string]> = [
  ["makalu-base-camp-trek", "Makalu Base Camp (4,870 m", "Makalu Base Camp"],
  ["upper-dolpo-trek", "3,180 m", "Sulighat"],
  ["kanchenjunga-circuit-trek", "3,868 m", "Cheram"],
  ["annapurna-circuit-trek", "2,670 m", "Chame"],
  ["annapurna-circuit-with-tilicho-lake-trek", "Thorong Phedi (4,450 m", "Thorong Phedi"],
];

/** Group-size labels: [slug, label as stored, label as it should read]. */
const TIER_LABELS: Array<[string, string, string]> = [
  ["lower-dolpo-trek", "10-14", "11-14"],
  ["helambu-trek", "10-14", "11-14"],
  ["helambu-trek", "14-10", "15-100"],
  ["humla-limi-valley-trek", "5-10", "8-10"],
  ["manaslu-circuit-trek", "10-14", "11-14"],
];

/** Tier prices: [slug, group size, price as stored, price as it should be]. */
const TIER_PRICES: Array<[string, string, number, number]> = [["annapurna-circuit-with-tilicho-lake-trek", "8-10", 585, 685]];

async function main() {
  const backup: Record<string, unknown[]> = { days: [], waypoints: [], tiers: [], prices: [] };
  const writes: Array<() => Promise<unknown>> = [];
  const skip = (what: string) => console.log(`  skip  ${what}: stored value is not the one expected`);

  for (const f of DAYS) {
    const day = await prisma.itineraryDay.findFirst({
      where: { trek: { slug: f.slug }, dayNumber: f.day },
      select: { id: true, elevation: true, accommodation: true, placeDescription: true },
    });
    const matches = day && Object.entries(f.expect).every(([k, v]) => day[k as "elevation" | "accommodation"] === v);
    if (!day || !matches) {
      skip(`${f.slug} day ${f.day}`);
      continue;
    }
    console.log(`  fix   ${f.slug} day ${f.day}: ${JSON.stringify({ elevation: day.elevation, accommodation: day.accommodation })} -> ${JSON.stringify(f.set)}`);
    backup.days.push(day);
    writes.push(() => prisma.itineraryDay.update({ where: { id: day.id }, data: f.set }));
  }

  const slugsWithStops = [...new Set([...STOPS, ...MOVES, ...REMOVALS].map(([slug]) => slug))];
  for (const slug of slugsWithStops) {
    const trek = await prisma.trek.findUnique({ where: { slug }, select: { id: true, waypoints: true } });
    if (!trek?.waypoints) {
      skip(`${slug} route stops`);
      continue;
    }
    let stops = JSON.parse(trek.waypoints) as Array<{ label: string; lat: number; lng: number; dayNumber?: number; description?: string }>;
    let changed = 0;
    const at = (day: number, label: string, lng: number) =>
      stops.find((w) => w.dayNumber === day && w.label === label && Math.abs(w.lng - lng) < 0.002);
    for (const [s, day, label, lng, to] of MOVES) {
      if (s !== slug) continue;
      const stop = at(day, label, lng);
      if (!stop) {
        skip(`${slug} day ${day} stop "${label}"`);
        continue;
      }
      // A stop renamed to another place keeps no description written for the old one.
      if (to.label !== stop.label) delete stop.description;
      Object.assign(stop, to);
      changed++;
      console.log(`  fix   ${slug} day ${day} stop "${label}" -> "${to.label}" at ${to.lat}, ${to.lng}`);
    }
    for (const [s, day, label, lng] of REMOVALS) {
      if (s !== slug) continue;
      const stop = at(day, label, lng);
      if (!stop) {
        skip(`${slug} day ${day} stop "${label}"`);
        continue;
      }
      stops = stops.filter((w) => w !== stop);
      changed++;
      console.log(`  fix   ${slug} day ${day} stop "${label}" removed (wrong place, no verified position)`);
    }
    for (const [s, from, to] of STOPS) {
      if (s !== slug) continue;
      const stop = stops.find((w) => w.label === from);
      if (!stop) {
        skip(`${slug} stop "${from}"`);
        continue;
      }
      stop.label = to;
      changed++;
      console.log(`  fix   ${slug} stop "${from}" -> "${to}"`);
    }
    if (changed === 0) continue;
    backup.waypoints.push({ id: trek.id, waypoints: trek.waypoints });
    const waypoints = JSON.stringify(stops);
    writes.push(() => prisma.trek.update({ where: { id: trek.id }, data: { waypoints } }));
  }

  for (const [slug, from, to] of TIER_LABELS) {
    const tier = await prisma.pricingTier.findFirst({ where: { trek: { slug }, groupSize: from }, select: { id: true, groupSize: true } });
    if (!tier) {
      skip(`${slug} tier "${from}"`);
      continue;
    }
    console.log(`  fix   ${slug} tier "${from}" -> "${to}"`);
    backup.tiers.push(tier);
    writes.push(() => prisma.pricingTier.update({ where: { id: tier.id }, data: { groupSize: to } }));
  }

  for (const [slug, groupSize, from, to] of FIX_PRICES ? TIER_PRICES : []) {
    const trek = await prisma.trek.findUnique({ where: { slug }, select: { id: true, price: true, pricingTiers: { select: { id: true, groupSize: true, pricePerPerson: true } } } });
    const tier = trek?.pricingTiers.find((t) => t.groupSize === groupSize && t.pricePerPerson === from);
    if (!trek || !tier) {
      skip(`${slug} ${groupSize} price ${from}`);
      continue;
    }
    // The trip's "from" price is its lowest tier, recomputed with the correction.
    const price = Math.min(...trek.pricingTiers.map((t) => (t.id === tier.id ? to : t.pricePerPerson)));
    console.log(`  fix   ${slug} ${groupSize}: USD ${from} -> ${to}; from-price USD ${trek.price} -> ${price}`);
    backup.prices.push({ trekId: trek.id, price: trek.price, tierId: tier.id, pricePerPerson: from });
    writes.push(() =>
      prisma.$transaction([
        prisma.pricingTier.update({ where: { id: tier.id }, data: { pricePerPerson: to } }),
        prisma.trek.update({ where: { id: trek.id }, data: { price } }),
      ])
    );
  }

  if (DRY_RUN) return console.log(`Dry run — ${writes.length} change(s), nothing written.`);
  if (writes.length === 0) return console.log("Nothing to change.");
  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = `${BACKUP_DIR}trip-data-errors-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
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
