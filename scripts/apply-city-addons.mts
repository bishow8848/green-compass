/**
 * Sells what the retired "complete package" pages added as add-ons on the
 * city-to-city trip instead.
 *
 * A package was the same trip plus airport transfers, hotel nights and, for
 * trips out of Pokhara, the journey from Kathmandu. Each city-to-city page
 * that had a package (scripts/retire-packages-and-guides.mts) gets:
 *
 *   Airport Arrival & Departure Transfer   USD 50 for up to 6 people, both transfers: airport
 *                                          to hotel on arrival, hotel to airport on departure.
 *                                          A larger group adds one per 6 people or part of 6
 *                                          (20 people: four). Left off a trip that already
 *                                          includes them.
 *   Extra Night in City                    USD 50 per room per night, breakfast included.
 *                                          One line for every city: its description names
 *                                          the cities the trip touches — Kathmandu always;
 *                                          Pokhara, Chitwan and Lumbini where the trip
 *                                          starts, ends or stays there.
 *   Kathmandu–Pokhara Flight (One Way)     per person, one way   } only on trips that start
 *   Kathmandu–Pokhara Tourist Bus (One Way) per person, one way  } or end in Pokhara
 *
 * The flight and the bus are priced one way, so a traveller adds one for each
 * direction: two people going both ways add four. A trip that listed the
 * flight separately for each direction has those two lines replaced by the
 * single one-way line. Every other add-on (porter, upgrades) is left as it is.
 *
 * It also keeps the sentence that points to these extras — "Airport
 * transfers, hotel nights and … can be added as extras when you book." — in
 * step with what the trip offers, where it appears: at the end of the
 * overview's paragraph on what is included, and in the "What is not included
 * in …?" answer.
 *
 * Safe to re-run: the lines it writes are replaced, not duplicated. Change a
 * price in lib/city-addons.ts and run it again to reprice every page.
 *
 *   npx tsx scripts/apply-city-addons.mts --dry-run
 *   npx tsx scripts/apply-city-addons.mts
 */
import "dotenv/config";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";
import {
  AIRPORT_GROUP_SIZE, AIRPORT_PRICE, AIRPORT_TITLE, BUS_PRICE, airportTransfersFor, BUS_TITLE, CITY_NIGHT_PRICE, CITY_NIGHT_TITLE, EXTRAS_SENTENCE, FLIGHT_PRICE, FLIGHT_TITLE, extrasSentence,
} from "@/lib/city-addons";
import { PACKAGE_SLUG_SUFFIX, startCity } from "@/lib/package-variants";

const DRY_RUN = process.argv.includes("--dry-run");
const BACKUP_DIR = fileURLToPath(new URL("./.backups/", import.meta.url));

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

/** The lines this script writes, including the one-per-city hotel nights of its first version. */
const ownLine = (a: Addon) =>
  [AIRPORT_TITLE, FLIGHT_TITLE, BUS_TITLE, CITY_NIGHT_TITLE].includes(a.title) || a.title.startsWith("Extra Hotel Night in ");

/** A trip whose own inclusions already have the Kathmandu airport transfers is not sold them again. */
const INCLUDES_AIRPORT = /airport pick-?up and drop-?off/i;

/** "Kathmandu", "Kathmandu or Pokhara", "Kathmandu, Pokhara or Chitwan". */
const either = (cities: string[]) => (cities.length <= 1 ? cities.join("") : `${cities.slice(0, -1).join(", ")} or ${cities[cities.length - 1]}`);

async function main() {
  const all = await prisma.trek.findMany({
    select: {
      id: true, slug: true, status: true, subtitle: true, addons: true, inclusions: true, overview: true,
      category: { select: { slug: true } },
      faqs: { where: { question: { startsWith: "What is not included" } }, select: { id: true, answer: true } },
      itinerary: { select: { title: true, accommodation: true } },
    },
  });
  const packages = new Set(all.filter((t) => t.slug.endsWith(PACKAGE_SLUG_SUFFIX)).map((t) => t.slug));
  const targets = all.filter((t) => t.status === "published" && packages.has(`${t.slug}${PACKAGE_SLUG_SUFFIX}`));

  type Change = { id: string; slug: string; before: { addons: string | null; overview: string }; data: { addons?: string; overview?: string }; faqs: Array<{ id: string; before: string; after: string }>; summary: string };
  const changes: Change[] = [];
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
    if (!INCLUDES_AIRPORT.test(t.inclusions)) {
      added.push({
        title: AIRPORT_TITLE,
        description:
          `A private transfer in both directions, in one price, for up to ${AIRPORT_GROUP_SIZE} people travelling together. ` +
          "When you land at Tribhuvan International Airport in Kathmandu, our driver meets you in the arrivals hall and takes you to your hotel; " +
          "on the day you fly home, we collect you from your hotel and take you back to the airport. " +
          `One add-on covers both the arrival and the departure transfer for a group of up to ${AIRPORT_GROUP_SIZE} people, so do not add it again for the way back. ` +
          `For a larger group, add it once for every ${AIRPORT_GROUP_SIZE} people or part of ${AIRPORT_GROUP_SIZE}: ` +
          `1 to ${AIRPORT_GROUP_SIZE} people add it once, ${AIRPORT_GROUP_SIZE + 1} to ${AIRPORT_GROUP_SIZE * 2} twice, ` +
          `${AIRPORT_GROUP_SIZE * 2 + 1} to ${AIRPORT_GROUP_SIZE * 3} three times, and a group of 20 adds it ${["", "once", "twice", "three times", "four times"][airportTransfersFor(20)]}. ` +
          "Send us your flight numbers and arrival and departure times when you book.",
        unit: `group of up to ${AIRPORT_GROUP_SIZE}, arrival and departure`,
        pricePerUnit: AIRPORT_PRICE,
      });
    }
    if (viaPokhara) {
      added.push({
        title: FLIGHT_TITLE,
        description:
          "A scheduled flight of about 25 minutes between Kathmandu and Pokhara, in either direction, in place of a full day on the road. " +
          "The price is per person, one way. Add it once for each traveller and each direction: two people flying both ways add it four times.",
        unit: "person, one way",
        pricePerUnit: FLIGHT_PRICE,
      });
      added.push({
        title: BUS_TITLE,
        description:
          "A reserved seat on a tourist bus between Kathmandu and Pokhara, in either direction; the drive takes six to eight hours. " +
          "The price is per person, one way. Add it once for each traveller and each direction: two people travelling both ways add it four times.",
        unit: "person, one way",
        pricePerUnit: BUS_PRICE,
      });
    }
    const cities = HOTEL_CITIES.filter(({ city, mention, toursOnly }) => {
      if (city === "Kathmandu") return true;
      const onRoute = city === start || city === end || mention.test(stays);
      return onRoute && !(toursOnly && kind !== "tour");
    }).map(({ city }) => city);
    const others = cities.filter((city) => city !== "Kathmandu");
    added.push({
      title: CITY_NIGHT_TITLE,
      description:
        `An extra hotel night in ${either(cities)}, before or after the ${kind}. ` +
        "You stay in a good-quality hotel in the city, in a private twin or double room for one or two people, and breakfast is included. " +
        "The price is per room per night, not per person, so two people sharing a room pay it once. " +
        `Add one for every night you need: the night you land in Kathmandu, ${others.length > 0 ? `a night in ${either(others)} before or after the ${kind}, ` : `the night the ${kind} ends, `}` +
        "or a spare night before your flight home. " +
        `Tell us under Special Requests when you book which ${cities.length > 1 ? "city and " : ""}dates each night is for, and we reserve the room and confirm it with your booking.`,
      unit: "room per night",
      pricePerUnit: CITY_NIGHT_PRICE,
    });

    const lines = [...kept, ...added];
    const addons = JSON.stringify(lines);

    // The sentence pointing to the extras, wherever it already stands.
    const sentence = extrasSentence(lines.map((a) => a.title));
    const resync = (text: string) => (sentence ? text.replace(EXTRAS_SENTENCE, sentence) : text);
    const overview = resync(t.overview);
    const faqs = t.faqs.map((f) => ({ id: f.id, before: f.answer, after: resync(f.answer) })).filter((f) => f.after !== f.before);

    const data: Change["data"] = {};
    if (addons !== t.addons) data.addons = addons;
    if (overview !== t.overview) data.overview = overview;
    if (Object.keys(data).length === 0 && faqs.length === 0) continue;
    const dropped = existing.filter((a) => !kept.includes(a) && !ownLine(a)).map((a) => a.title);
    changes.push({
      id: t.id,
      slug: t.slug,
      before: { addons: t.addons, overview: t.overview },
      data,
      faqs,
      summary:
        `${t.subtitle ?? "-"} | ${added.map((a) => a.title.replace(/ \(One Way\)/, "").replace("Airport Arrival & Departure Transfer", "Airport")).join(", ")} [${cities.join(", ")}]` +
        `${dropped.length ? ` | replaces: ${dropped.join(", ")}` : ""}${data.overview ? " | overview" : ""}${faqs.length ? " | faq" : ""}`,
    });
  }

  console.log(`City-to-city trips that had a package: ${targets.length}; to update: ${changes.length}`);
  for (const c of changes) console.log(`  ${c.slug} | ${c.summary}`);
  const sample = changes.find((c) => c.data.overview);
  if (sample) console.log(`  e.g. overview: …${sample.data.overview!.match(EXTRAS_SENTENCE)?.[0]}`);
  if (DRY_RUN) return console.log("Dry run — nothing written.");
  if (changes.length === 0) return;

  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = `${BACKUP_DIR}city-addons-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  writeFileSync(backupFile, JSON.stringify(changes.map(({ id, slug, before, faqs }) => ({ id, slug, ...before, faqs: faqs.map((f) => ({ id: f.id, answer: f.before })) }))));
  for (const c of changes) {
    if (Object.keys(c.data).length > 0) await prisma.trek.update({ where: { id: c.id }, data: c.data });
    for (const f of c.faqs) await prisma.trekFaq.update({ where: { id: f.id }, data: { answer: f.after } });
  }
  console.log(`Updated ${changes.length} trip(s). Before-values: ${backupFile}\nNext: npm run cache:refresh -- --revalidate-url https://greencompasstreks.com`);
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
