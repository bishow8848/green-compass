/**
 * Create the "Activities" category, its regions, and every activity defined in
 * ./activities/*.ts.
 *
 * Activities reuse the Tour shape and the builders in ./tours/build.ts: an
 * activity page is structurally a short tour — one to ten days, priced per
 * person, built around transport, entrance fees and a guide — so a parallel
 * type would have been the same fields under another name.
 *
 * A slug that already exists in the database is skipped untouched — this
 * script only ever adds. Hero images, gallery photos and the map files
 * (geoJsonUrl / geoJsonData / staticMapImage) are deliberately left empty for
 * the admin to fill in by hand, exactly as create-new-treks.mts does.
 *
 *   npx tsx scripts/create-activities.mts                      # dry run
 *   npx tsx scripts/create-activities.mts --apply
 *   npx tsx scripts/create-activities.mts --apply <slug> ...   # only these
 *   npx tsx scripts/create-activities.mts --apply --publish
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import {
  buildAddons,
  buildCustomSections,
  buildExclusions,
  buildInclusions,
  buildPricingTiers,
  buildSectionData,
  buildSectionOrder,
} from "./tours/build";
import { ALL_ACTIVITIES } from "./activities/index";
import { ACTIVITY_REGIONS } from "./activities/regions";
import type { Tour } from "./tours/types";

const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const PUBLISH = args.includes("--publish");
const only = new Set(args.filter((a) => !a.startsWith("--")));

const CATEGORY = {
  name: "Activities",
  slug: "activities",
  icon: "🪂",
  description: "Rafting, jungle safari, paragliding, bungee, zip lines, mountain flights and bird watching across Nepal",
  metaTitle: "Things to Do in Nepal — Rafting, Jungle Safari, Paragliding & Bungee",
  metaDescription:
    "Adventure activities across Nepal with Green Compass Treks: white water rafting on nine rivers, jungle safaris in Chitwan, Bardia and Koshi Tappu, paragliding and bungee jumping, mountain flights and bird watching.",
  sort: 4,
};

const MAX_GROUP_SIZE = 16;
const WEEKDAYS = new Set(["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]);
const REGION_NAMES = new Set(ACTIVITY_REGIONS.map((r) => r.name));

function validate(t: Tour, errors: string[]) {
  const at = `[${t.content.slug}]`;
  const c = t.content;
  if (!REGION_NAMES.has(t.region)) errors.push(`${at} unknown region "${t.region}"`);
  if (c.highlights.length !== 5) errors.push(`${at} expected 5 highlights, got ${c.highlights.length}`);
  if (c.sections.length !== 4) errors.push(`${at} expected 4 detail sections, got ${c.sections.length}`);
  if (c.faqs.length !== 8) errors.push(`${at} expected 8 FAQs, got ${c.faqs.length}`);
  if (!WEEKDAYS.has(c.fixedDepartureDay)) errors.push(`${at} bad fixedDepartureDay "${c.fixedDepartureDay}"`);
  if ((c.overview.match(/<p>/g) ?? []).length !== 2) errors.push(`${at} overview must be exactly 2 paragraphs`);
  if (!t.days.length) errors.push(`${at} has no days`);
  const faqSeen = new Set<string>();
  for (const f of c.faqs) {
    if (faqSeen.has(f.question)) errors.push(`${at} duplicate FAQ "${f.question}"`);
    faqSeen.add(f.question);
  }
  for (const [i, d] of t.days.entries()) {
    const n = `${at} day ${i + 1}`;
    if (!d.title || !d.html) errors.push(`${n} missing title or description`);
    if (!Number.isFinite(d.lat) || !Number.isFinite(d.lng)) errors.push(`${n} missing coordinates`);
    if (d.lat < 26 || d.lat > 31 || d.lng < 79 || d.lng > 89) errors.push(`${n} coordinates outside Nepal`);
    const words = d.html.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    if (words < 60) errors.push(`${n} description is thin (${words} words)`);
  }
}

async function main() {
  const wanted = ALL_ACTIVITIES.filter((t) => !only.size || only.has(t.content.slug));

  const errors: string[] = [];
  const seen = new Set<string>();
  for (const t of ALL_ACTIVITIES) {
    if (seen.has(t.content.slug)) errors.push(`[${t.content.slug}] duplicate slug in the definitions`);
    seen.add(t.content.slug);
  }
  for (const t of wanted) validate(t, errors);
  if (errors.length) {
    console.error("Definition errors:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exitCode = 1;
    return;
  }

  const clashes = await prisma.trek.findMany({
    where: { slug: { in: [...seen] }, category: { slug: { not: CATEGORY.slug } } },
    select: { slug: true, category: { select: { slug: true } } },
  });
  for (const c of clashes) {
    console.error(`Slug clash: "${c.slug}" already belongs to /${c.category?.slug}`);
  }
  if (clashes.length) {
    process.exitCode = 1;
    return;
  }

  if (!APPLY) {
    const byRegion = new Map<string, Tour[]>();
    for (const t of wanted) byRegion.set(t.region, [...(byRegion.get(t.region) ?? []), t]);
    for (const region of ACTIVITY_REGIONS) {
      const list = byRegion.get(region.name) ?? [];
      console.log(`\n${region.name} — ${list.length} tour(s)`);
      for (const t of list) {
        console.log(
          `  ${t.content.slug}\n` +
            `    ${t.content.title} · ${t.days.length} day(s) · ${t.difficulty} · from $${t.price}`,
        );
      }
    }
    console.log(`\nDry run — ${wanted.length} activity(ies) across ${ACTIVITY_REGIONS.length} regions. Re-run with --apply.`);
    return;
  }

  // ── Category ──
  let category = await prisma.category.findUnique({ where: { slug: CATEGORY.slug } });
  if (!category) {
    category = await prisma.category.create({
      data: {
        name: CATEGORY.name,
        slug: CATEGORY.slug,
        icon: CATEGORY.icon,
        description: CATEGORY.description,
        metaTitle: CATEGORY.metaTitle,
        metaDescription: CATEGORY.metaDescription,
        sort: CATEGORY.sort,
        status: "published",
      },
    });
    console.log(`created category /${CATEGORY.slug}`);
  } else {
    console.log(`category /${CATEGORY.slug} already exists`);
  }

  // ── Regions ──
  const regionIds = new Map<string, string>();
  for (const [i, r] of ACTIVITY_REGIONS.entries()) {
    const row = await prisma.categoryRegion.upsert({
      where: { slug_categoryId: { slug: r.slug, categoryId: category.id } },
      update: { name: r.name, sortOrder: i },
      create: { name: r.name, slug: r.slug, categoryId: category.id, sortOrder: i },
    });
    regionIds.set(r.name, row.id);
    console.log(`  region ${r.name} (${r.slug})`);
  }

  // ── Tours ──
  const existing = new Set((await prisma.trek.findMany({ select: { slug: true } })).map((t) => t.slug));
  const toCreate = wanted.filter((t) => !existing.has(t.content.slug));
  for (const t of wanted.filter((t) => existing.has(t.content.slug))) {
    console.log(`SKIP    ${t.content.slug} — already in the database`);
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
        regionId: regionIds.get(t.region),
        region: t.region,
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
        sectionData: JSON.stringify(buildSectionData(c, t.days.length)),
        sectionOrder: JSON.stringify(buildSectionOrder(c)),
        addons: JSON.stringify(buildAddons(t)),
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
        pricingTiers: { create: buildPricingTiers(t.price) },
        faqs: { create: c.faqs.map((f) => ({ question: f.question, answer: f.answer })) },
      },
    });
    console.log(`  created ${c.slug}`);
  }


  console.log(
    `\nCreated ${toCreate.length} activity(ies) as ${PUBLISH ? "published" : "drafts"}.` +
      " Hero image, gallery photos and the route map file still need adding in the admin.",
  );
}


main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
