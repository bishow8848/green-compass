/**
 * Create the trek pages defined in ./new-treks/*.ts.
 *
 * A slug that already exists in the database is skipped untouched — this script
 * only ever adds treks. Hero images, gallery photos, and the map fields
 * (geoJsonUrl / geoJsonData / staticMapImage) are deliberately left empty for
 * the admin to fill in by hand.
 *
 *   npx tsx scripts/create-new-treks.mts                      # dry run
 *   npx tsx scripts/create-new-treks.mts --apply
 *   npx tsx scripts/create-new-treks.mts --apply <slug> ...   # only these
 *   npx tsx scripts/create-new-treks.mts --apply --publish
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import {
  buildAddons,
  buildCustomSections,
  buildExclusions,
  buildInclusions,
  buildSectionData,
  buildSectionOrder,
} from "./trek-content/build";
import { ALL_NEW_TREKS } from "./new-treks/index";
import type { NewTrek } from "./new-treks/types";

const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const PUBLISH = args.includes("--publish");
const only = new Set(args.filter((a) => !a.startsWith("--")));

const CATEGORY_SLUG = "treks";
const REGION = "Remote Region";
const MAX_GROUP_SIZE = 12;

/** Per-person price steps above the base, matching every other trek in the catalogue. */
const TIER_STEPS: [string, number][] = [
  ["1-1", 125],
  ["2-4", 100],
  ["5-7", 75],
  ["8-10", 50],
  ["11-14", 25],
  ["15-100", 0],
];

const WEEKDAYS = new Set(["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]);

function validate(t: NewTrek, errors: string[]) {
  const at = `[${t.content.slug}]`;
  const c = t.content;
  if (c.highlights.length !== 5) errors.push(`${at} expected 5 highlights, got ${c.highlights.length}`);
  if (c.sections.length !== 5) errors.push(`${at} expected 5 detail sections, got ${c.sections.length}`);
  if (c.faqs.length !== 10) errors.push(`${at} expected 10 FAQs, got ${c.faqs.length}`);
  if (!WEEKDAYS.has(c.fixedDepartureDay)) errors.push(`${at} bad fixedDepartureDay "${c.fixedDepartureDay}"`);
  if (!Number.isInteger(c.porterDays) || c.porterDays < 1) errors.push(`${at} bad porterDays ${c.porterDays}`);
  if ((c.overview.match(/<p>/g) ?? []).length !== 2) errors.push(`${at} overview must be exactly 2 paragraphs`);
  if (t.days.length < 5) errors.push(`${at} only ${t.days.length} days`);
  if (!/^Arrival in Nepal/.test(t.days[0].title)) errors.push(`${at} day 1 is not an arrival day: "${t.days[0].title}"`);
  if (!/^Departure from Nepal/.test(t.days[t.days.length - 1].title)) {
    errors.push(`${at} last day is not a departure day: "${t.days[t.days.length - 1].title}"`);
  }
  for (const [i, d] of t.days.entries()) {
    const n = `${at} day ${i + 1}`;
    if (!d.title || !d.html) errors.push(`${n} missing title or description`);
    if (!Number.isFinite(d.lat) || !Number.isFinite(d.lng)) errors.push(`${n} missing coordinates`);
    if (d.lat < 26 || d.lat > 31 || d.lng < 79 || d.lng > 89) errors.push(`${n} coordinates outside Nepal`);
    const words = d.html.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    if (words < 90) errors.push(`${n} description is thin (${words} words)`);
  }
}

async function main() {
  const wanted = ALL_NEW_TREKS.filter((t) => !only.size || only.has(t.content.slug));

  const errors: string[] = [];
  const seen = new Set<string>();
  for (const t of wanted) {
    if (seen.has(t.content.slug)) errors.push(`[${t.content.slug}] duplicate slug in the definitions`);
    seen.add(t.content.slug);
    validate(t, errors);
  }
  if (errors.length) {
    console.error("Definition errors:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exitCode = 1;
    return;
  }

  const category = await prisma.category.findUnique({ where: { slug: CATEGORY_SLUG }, select: { id: true } });
  if (!category) throw new Error(`no "${CATEGORY_SLUG}" category`);

  const existing = new Set(
    (await prisma.trek.findMany({ select: { slug: true } })).map((t) => t.slug),
  );

  const toCreate = wanted.filter((t) => !existing.has(t.content.slug));
  const skipped = wanted.filter((t) => existing.has(t.content.slug));

  for (const t of skipped) console.log(`SKIP    ${t.content.slug} — already in the database`);

  for (const t of toCreate) {
    const days = t.days.length;
    console.log(
      `CREATE  ${t.content.slug}\n` +
        `        ${t.content.title} · ${days} days · ${t.difficulty} · max ${t.maxAltitude} m · from $${t.price}\n` +
        `        ${t.content.faqs.length} FAQs · ${buildCustomSections(t.content).length} sections · ` +
        `add-ons: ${buildAddons(t.content).map((a) => `${a.title} $${a.pricePerUnit}`).join(", ")}`,
    );
  }

  if (!toCreate.length) {
    console.log("\nNothing to create.");
    return;
  }
  if (!APPLY) {
    console.log(`\nDry run — ${toCreate.length} trek(s) would be created. Re-run with --apply.`);
    return;
  }

  for (const t of toCreate) {
    const c = t.content;
    const waypoints = t.days.map((d, i) => ({
      lng: d.lng,
      lat: d.lat,
      label: d.accommodation,
      description: d.placeDescription,
      dayNumber: i + 1,
    }));

    await prisma.trek.create({
      data: {
        title: c.title,
        slug: c.slug,
        categoryId: category.id,
        region: REGION,
        price: t.price,
        duration: t.days.length,
        difficulty: t.difficulty,
        maxGroupSize: MAX_GROUP_SIZE,
        maxAltitude: t.maxAltitude,
        bestTime: c.bestTime,
        overview: c.overview,
        inclusions: buildInclusions(c),
        exclusions: buildExclusions(c),
        customSections: JSON.stringify(buildCustomSections(c)),
        sectionData: JSON.stringify(buildSectionData(c)),
        sectionOrder: JSON.stringify(buildSectionOrder(c)),
        addons: JSON.stringify(buildAddons(c)),
        fixedDepartureDays: JSON.stringify([c.fixedDepartureDay]),
        customStartDates: JSON.stringify([]),
        waypoints: JSON.stringify(waypoints),
        centerLng: t.center[0],
        centerLat: t.center[1],
        zoom: t.zoom,
        pitch: 45,
        metaTitle: c.meta.title,
        metaDescription: c.meta.description,
        keywords: c.meta.keywords,
        tags: c.meta.tags,
        status: PUBLISH ? "published" : "draft",
        ...(PUBLISH ? { publishedAt: new Date() } : {}),
        itinerary: {
          create: t.days.map((d, i) => ({
            dayNumber: i + 1,
            title: d.title,
            description: d.html,
            elevation: d.elevation,
            accommodation: d.accommodation,
            placeDescription: d.placeDescription,
          })),
        },
        pricingTiers: {
          create: TIER_STEPS.map(([groupSize, step]) => ({ groupSize, pricePerPerson: t.price + step })),
        },
        faqs: { create: c.faqs.map((f) => ({ question: f.question, answer: f.answer })) },
      },
    });
    console.log(`  created ${c.slug}`);
  }

  console.log(
    `\nCreated ${toCreate.length} trek(s) as ${PUBLISH ? "published" : "drafts"}.` +
      " Hero image, gallery photos, and the route map file still need adding in the admin.",
  );
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
