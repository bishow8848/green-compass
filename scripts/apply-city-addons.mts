/**
 * Sells what the retired "complete package" pages added as add-ons on the
 * city-to-city trip instead.
 *
 * A package was the same trip plus hotel nights and, for trips out of Pokhara,
 * the journey from Kathmandu. Each city-to-city page that had a package
 * (scripts/retire-packages-and-guides.mts) gets:
 *
 *   Extra Hotel Night in <City>            USD 50 per room per night, breakfast included.
 *                                          Kathmandu on every trip; Pokhara, Chitwan and
 *                                          Lumbini where the trip starts, ends or stays there.
 *   Kathmandu–Pokhara Flight (One Way)     per person, one way   } only on trips that start
 *   Kathmandu–Pokhara Tourist Bus (One Way) per person, one way  } or end in Pokhara
 *
 * The flight and the bus are priced one way, so a traveller adds one for each
 * direction: two people going both ways add four. A trip that listed the
 * flight separately for each direction has those two lines replaced by the
 * single one-way line. Every other add-on (porter, upgrades) is left as it is.
 *
 * Safe to re-run: the lines it writes are replaced, not duplicated. Change a
 * price below and run it again to reprice every page.
 *
 *   npx tsx scripts/apply-city-addons.mts --dry-run
 *   npx tsx scripts/apply-city-addons.mts
 */
import "dotenv/config";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";
import { PACKAGE_SLUG_SUFFIX, startCity } from "@/lib/package-variants";

const DRY_RUN = process.argv.includes("--dry-run");
const BACKUP_DIR = fileURLToPath(new URL("./.backups/", import.meta.url));

/** USD per room per night, breakfast included. */
const HOTEL_NIGHT = 50;
/** USD per person, one way. */
const FLIGHT_KATHMANDU_POKHARA = 115;
/** USD per person, one way, by route. */
const TOURIST_BUS: Record<string, number> = { "Kathmandu–Pokhara": 15 };

const HOTEL_TITLE = (city: string) => `Extra Hotel Night in ${city}`;
const FLIGHT_TITLE = "Kathmandu–Pokhara Flight (One Way)";
const BUS_TITLE = "Kathmandu–Pokhara Tourist Bus (One Way)";

/** Cities a hotel night is sold in, in the order they are listed. */
const HOTEL_CITIES: Array<{ city: string; mention: RegExp; toursOnly: boolean }> = [
  { city: "Kathmandu", mention: /Kathmandu/, toursOnly: false },
  { city: "Pokhara", mention: /Pokhara/, toursOnly: false },
  { city: "Chitwan", mention: /Chitwan|Sauraha/, toursOnly: true },
  { city: "Lumbini", mention: /Lumbini/, toursOnly: true },
];

/** The flight between Kathmandu and Pokhara, listed once per direction on older pages. */
const DIRECTIONAL_FLIGHT = /^(?:Flight f(?:ro|or)m (?:Kathmandu to Pokhara|Pokhara to Kath(?:ma|am)ndu)|Kathmandu–Pokhara Flight)$/i;

type Addon = { title: string; description?: string; unit?: string; pricePerUnit?: number };

const ownLine = (a: Addon) => a.title === FLIGHT_TITLE || a.title === BUS_TITLE || a.title.startsWith("Extra Hotel Night in ");

async function main() {
  const all = await prisma.trek.findMany({
    select: {
      id: true, slug: true, status: true, subtitle: true, addons: true,
      category: { select: { slug: true } },
      itinerary: { select: { title: true, accommodation: true } },
    },
  });
  const packages = new Set(all.filter((t) => t.slug.endsWith(PACKAGE_SLUG_SUFFIX)).map((t) => t.slug));
  const targets = all.filter((t) => t.status === "published" && packages.has(`${t.slug}${PACKAGE_SLUG_SUFFIX}`));

  const changes: Array<{ id: string; slug: string; before: string | null; after: string; summary: string }> = [];
  for (const t of targets) {
    let existing: Addon[] = [];
    try {
      const parsed = JSON.parse(t.addons || "[]");
      if (Array.isArray(parsed)) existing = parsed;
    } catch {
      console.warn(`  ! ${t.slug}: add-ons are not valid JSON — skipped`);
      continue;
    }

    const kind = t.category?.slug === "tours" ? "tour" : "trek";
    const start = startCity(t.subtitle);
    const end = t.subtitle?.split(" to ")[1]?.trim() ?? null;
    const viaPokhara = start === "Pokhara" || end === "Pokhara";
    const stays = t.itinerary.map((d) => `${d.title} ${d.accommodation ?? ""}`).join(" ");

    const kept = existing.filter((a) => !ownLine(a) && !(viaPokhara && DIRECTIONAL_FLIGHT.test(a.title.trim())));
    const added: Addon[] = [];
    if (viaPokhara) {
      added.push({
        title: FLIGHT_TITLE,
        description:
          "A scheduled flight of about 25 minutes between Kathmandu and Pokhara, in either direction, in place of a full day on the road. " +
          "The price is per person, one way. Add it once for each traveller and each direction: two people flying both ways add it four times.",
        unit: "person, one way",
        pricePerUnit: FLIGHT_KATHMANDU_POKHARA,
      });
      added.push({
        title: BUS_TITLE,
        description:
          "A reserved seat on a tourist bus between Kathmandu and Pokhara, in either direction; the drive takes six to eight hours. " +
          "The price is per person, one way. Add it once for each traveller and each direction: two people travelling both ways add it four times.",
        unit: "person, one way",
        pricePerUnit: TOURIST_BUS["Kathmandu–Pokhara"],
      });
    }
    for (const { city, mention, toursOnly } of HOTEL_CITIES) {
      const onRoute = city === start || city === end || mention.test(stays);
      if (city !== "Kathmandu" && (!onRoute || (toursOnly && kind !== "tour"))) continue;
      added.push({
        title: HOTEL_TITLE(city),
        description:
          `An extra night in a good-quality hotel in ${city}, in a twin or double room with breakfast included. ` +
          `The price is per room per night, so two people sharing pay it once. Add one for every extra night you want in ${city}, before or after the ${kind}.`,
        unit: "room per night",
        pricePerUnit: HOTEL_NIGHT,
      });
    }

    const after = JSON.stringify([...kept, ...added]);
    if (after === t.addons) continue;
    const dropped = existing.filter((a) => !kept.includes(a) && !ownLine(a)).map((a) => a.title);
    changes.push({
      id: t.id,
      slug: t.slug,
      before: t.addons,
      after,
      summary: `${t.subtitle ?? "-"} | + ${added.map((a) => a.title.replace("Extra Hotel Night in ", "night:").replace(/ \(One Way\)/, "")).join(", ")}${dropped.length ? ` | replaces: ${dropped.join(", ")}` : ""}`,
    });
  }

  console.log(`City-to-city trips that had a package: ${targets.length}; to update: ${changes.length}`);
  for (const c of changes) console.log(`  ${c.slug} | ${c.summary}`);
  if (DRY_RUN) return console.log("Dry run — nothing written.");
  if (changes.length === 0) return;

  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = `${BACKUP_DIR}city-addons-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  writeFileSync(backupFile, JSON.stringify(changes.map(({ id, slug, before }) => ({ id, slug, addons: before }))));
  for (const c of changes) await prisma.trek.update({ where: { id: c.id }, data: { addons: c.after } });
  console.log(`Updated ${changes.length} trip(s). Before-values: ${backupFile}\nNext: npm run cache:refresh -- --revalidate-url https://greencompasstreks.com`);
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
