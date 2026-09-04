/**
 * Create the "Tours" category, its regions, and every tour page defined in
 * ./tours/*.ts.
 *
 * A slug that already exists in the database is skipped untouched — this
 * script only ever adds. Hero images, gallery photos and the map files
 * (geoJsonUrl / geoJsonData / staticMapImage) are deliberately left empty for
 * the admin to fill in by hand, exactly as create-new-treks.mts does.
 *
 *   npx tsx scripts/create-tours.mts                      # dry run
 *   npx tsx scripts/create-tours.mts --apply
 *   npx tsx scripts/create-tours.mts --apply <slug> ...   # only these
 *   npx tsx scripts/create-tours.mts --apply --publish
 *   npx tsx scripts/create-tours.mts --apply --nav        # + header nav & mega menu
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
import { ALL_TOURS } from "./tours/index";
import { TOUR_REGIONS } from "./tours/regions";
import type { Tour } from "./tours/types";

const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const PUBLISH = args.includes("--publish");
const NAV = args.includes("--nav");
const only = new Set(args.filter((a) => !a.startsWith("--")));

const CATEGORY = {
  name: "Tours",
  slug: "tours",
  icon: "🗺️",
  description: "Sightseeing, hiking, pilgrimage, wildlife and helicopter tours across Nepal",
  metaTitle: "Nepal Tour Packages — Day Tours, Hiking, Pilgrimage & Helicopter Tours",
  metaDescription:
    "Browse Nepal tour packages from Green Compass Treks: Kathmandu and Pokhara day tours, day hikes, pilgrimage journeys, village stays, jungle safaris, adventure activities and helicopter flights.",
  sort: 2,
};

const MAX_GROUP_SIZE = 16;
const WEEKDAYS = new Set(["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]);
const REGION_NAMES = new Set(TOUR_REGIONS.map((r) => r.name));

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
  const wanted = ALL_TOURS.filter((t) => !only.size || only.has(t.content.slug));

  const errors: string[] = [];
  const seen = new Set<string>();
  for (const t of ALL_TOURS) {
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
    for (const region of TOUR_REGIONS) {
      const list = byRegion.get(region.name) ?? [];
      console.log(`\n${region.name} — ${list.length} tour(s)`);
      for (const t of list) {
        console.log(
          `  ${t.content.slug}\n` +
            `    ${t.content.title} · ${t.days.length} day(s) · ${t.difficulty} · from $${t.price}`,
        );
      }
    }
    console.log(`\nDry run — ${wanted.length} tour(s) across ${TOUR_REGIONS.length} regions. Re-run with --apply.`);
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
  for (const [i, r] of TOUR_REGIONS.entries()) {
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

  if (NAV) await updateNavigation(category.id, category.slug);

  console.log(
    `\nCreated ${toCreate.length} tour(s) as ${PUBLISH ? "published" : "drafts"}.` +
      " Hero image, gallery photos and the route map file still need adding in the admin.",
  );
}

/**
 * Adds "Tours" to the header navigation and seeds the mega-menu selection with
 * the first few tours of every region, so the dropdown is populated the moment
 * the category goes live. Existing entries are preserved.
 */
async function updateNavigation(categoryId: string, categorySlug: string) {
  const settings = await prisma.siteSetting.findUnique({
    where: { id: "site-settings" },
    select: { navigation: true, categoryDropdownTreks: true },
  });

  const nav = (() => {
    try {
      const v = JSON.parse(settings?.navigation || "[]");
      return Array.isArray(v) ? (v as { label: string; href: string }[]) : [];
    } catch {
      return [] as { label: string; href: string }[];
    }
  })();

  if (!nav.some((n) => n.href === `/${categorySlug}`)) {
    const treksAt = nav.findIndex((n) => n.href === "/treks");
    nav.splice(treksAt === -1 ? 0 : treksAt + 1, 0, { label: CATEGORY.name, href: `/${categorySlug}` });
  }

  const dropdown = (() => {
    try {
      const v = JSON.parse(settings?.categoryDropdownTreks || "{}");
      return typeof v === "object" && v ? (v as Record<string, string[]>) : {};
    } catch {
      return {} as Record<string, string[]>;
    }
  })();

  // Up to five tours per region, in region order, matching how the mega menu
  // groups its left-hand column.
  const picks: string[] = [];
  for (const region of TOUR_REGIONS) {
    const rows = await prisma.trek.findMany({
      where: { categoryId, region: region.name },
      orderBy: { price: "desc" },
      take: 5,
      select: { id: true },
    });
    picks.push(...rows.map((r) => r.id));
  }
  dropdown[categorySlug] = picks;

  await prisma.siteSetting.update({
    where: { id: "site-settings" },
    data: { navigation: JSON.stringify(nav), categoryDropdownTreks: JSON.stringify(dropdown) },
  });
  console.log(`\nNavigation updated — "${CATEGORY.name}" added to the header, ${picks.length} tours in the mega menu.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
