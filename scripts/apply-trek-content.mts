/**
 * Write page content for every trek that currently has only an itinerary and pricing.
 *
 * Writes:  overview, inclusions, exclusions, customSections (Trip Highlights + 5
 *          detail sections), sectionData, sectionOrder, addons (porter + any
 *          Kathmandu-Pokhara flight legs), 10 FAQs, fixedDepartureDays,
 *          and SEO fields / bestTime where they are currently empty.
 *
 * Never touches: itinerary, pricing tiers, title, slug, hero/gallery images,
 *          map fields, duration, difficulty, similarTrekIds, status.
 *
 * Usage:
 *   npx tsx scripts/apply-trek-content.mts            # dry run (default)
 *   npx tsx scripts/apply-trek-content.mts --apply    # write to the database
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
  PORTER_RATE_PER_DAY,
  type TrekContent,
} from "./trek-content/build";
import { everestTreks } from "./trek-content/everest";
import { annapurnaTreksA } from "./trek-content/annapurna-a";
import { annapurnaTreksB } from "./trek-content/annapurna-b";
import { langtangTreks } from "./trek-content/langtang";
import { mustangTreks } from "./trek-content/mustang";
import { remoteTreks } from "./trek-content/remote";

const ALL: TrekContent[] = [
  ...everestTreks,
  ...annapurnaTreksA,
  ...annapurnaTreksB,
  ...langtangTreks,
  ...mustangTreks,
  ...remoteTreks,
];

const APPLY = process.argv.includes("--apply");

/** Treks whose content was already written by hand — never touched by this script. */
const REFERENCE_SLUGS = new Set([
  "manaslu-circuit-trek",
  "tsum-valley-trek",
  "tsum-valley-and-manaslu-circuit-trek",
  "annapurna-base-camp-trek",
  "annapurna-base-camp-trek-with-ghorepani-poonhill-trek",
  "annapurna-base-camp-trek-from-pokhara",
  "mardi-himal-trek-with-annapurna-base-camp",
  "abc-trek-nepal",
  "annapurna-base-camp-with-ghorepani-poonhill-from-pokhara",
  "makalu-base-camp-trek",
]);

const WEEKDAYS = new Set([
  "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
]);

const plain = (html: string | null | undefined) =>
  (html ?? "").replace(/<[^>]*>/g, "").trim();

function validate(content: TrekContent[], errors: string[]) {
  const seen = new Set<string>();
  for (const c of content) {
    const at = `[${c.slug}]`;
    if (seen.has(c.slug)) errors.push(`${at} duplicate slug in content files`);
    seen.add(c.slug);

    if (c.highlights.length !== 5) errors.push(`${at} expected 5 highlights, got ${c.highlights.length}`);
    if (c.sections.length !== 5) errors.push(`${at} expected 5 detail sections, got ${c.sections.length}`);
    if (c.faqs.length !== 10) errors.push(`${at} expected 10 FAQs, got ${c.faqs.length}`);
    if (!WEEKDAYS.has(c.fixedDepartureDay)) errors.push(`${at} bad fixedDepartureDay "${c.fixedDepartureDay}"`);
    if (!Number.isInteger(c.porterDays) || c.porterDays < 1) errors.push(`${at} bad porterDays ${c.porterDays}`);

    const paras = (c.overview.match(/<p>/g) ?? []).length;
    if (paras < 2) errors.push(`${at} overview has ${paras} paragraph(s), expected at least 2`);

    const ids = new Set(buildCustomSections(c).map((s) => s.id));
    if (ids.size !== 6) errors.push(`${at} custom section ids collided (${ids.size}/6 unique)`);

    for (const q of c.faqs) {
      if (!q.question.trim() || !q.answer.trim()) errors.push(`${at} empty FAQ entry`);
    }
  }
}

async function main() {
  const errors: string[] = [];
  validate(ALL, errors);

  const treks = await prisma.trek.findMany({
    select: {
      id: true, slug: true, title: true, duration: true, overview: true,
      bestTime: true, metaTitle: true, metaDescription: true, keywords: true,
      tags: true, fixedDepartureDays: true, customSections: true,
      _count: { select: { itinerary: true } },
    },
  });
  const bySlug = new Map(treks.map((t) => [t.slug, t]));

  // Every pending trek must be covered, and every content entry must match a trek.
  const pending = treks.filter((t) => !REFERENCE_SLUGS.has(t.slug)).map((t) => t.slug);
  const covered = new Set(ALL.map((c) => c.slug));
  for (const slug of pending) {
    if (!covered.has(slug)) errors.push(`[${slug}] trek needs content but no entry was written`);
  }
  for (const c of ALL) {
    if (!bySlug.has(c.slug)) errors.push(`[${c.slug}] no trek with this slug in the database`);
    if (REFERENCE_SLUGS.has(c.slug)) errors.push(`[${c.slug}] is a reference trek and must not be overwritten`);
  }

  // Porter days can never exceed the trek duration.
  for (const c of ALL) {
    const t = bySlug.get(c.slug);
    if (t && c.porterDays > t.duration) {
      errors.push(`[${c.slug}] porterDays ${c.porterDays} > duration ${t.duration}`);
    }
  }

  if (errors.length) {
    console.error("VALIDATION FAILED:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exitCode = 1;
    return;
  }
  console.log(`Validation passed for ${ALL.length} treks.\n`);

  let written = 0;
  const keptOverviews: string[] = [];

  for (const c of ALL) {
    const t = bySlug.get(c.slug)!;
    const addons = buildAddons(c);
    const customSections = buildCustomSections(c);

    // Preserve an overview that was already written by hand.
    const hasOverview = plain(t.overview).length > 200;
    if (hasOverview) keptOverviews.push(c.slug);

    const data: Record<string, unknown> = {
      inclusions: buildInclusions(c),
      exclusions: buildExclusions(c),
      customSections: JSON.stringify(customSections),
      sectionData: JSON.stringify(buildSectionData(c)),
      sectionOrder: JSON.stringify(buildSectionOrder(c)),
      addons: JSON.stringify(addons),
      fixedDepartureDays: JSON.stringify([c.fixedDepartureDay]),
    };
    if (!hasOverview) data.overview = c.overview;
    if (!t.bestTime) data.bestTime = c.bestTime;
    if (!plain(t.metaTitle)) data.metaTitle = c.meta.title;
    if (!plain(t.metaDescription)) data.metaDescription = c.meta.description;
    if (!plain(t.keywords)) data.keywords = c.meta.keywords;
    if (!plain(t.tags)) data.tags = c.meta.tags;

    const porter = addons[0];
    const flights = addons.slice(1).map((a) => `${a.title} $${a.pricePerUnit}`).join(", ");
    console.log(
      `${APPLY ? "WRITE" : "DRY  "}  ${c.slug.padEnd(58)} ` +
        `porter ${String(c.porterDays).padStart(2)}d x $${PORTER_RATE_PER_DAY} = $${String(porter.pricePerUnit).padEnd(4)} ` +
        `dep=${c.fixedDepartureDay.padEnd(9)}${flights ? " | " + flights : ""}`,
    );

    if (APPLY) {
      await prisma.$transaction(async (tx) => {
        await tx.trek.update({ where: { id: t.id }, data });
        await tx.trekFaq.deleteMany({ where: { trekId: t.id } });
        await tx.trekFaq.createMany({
          data: c.faqs.map((f) => ({ trekId: t.id, question: f.question, answer: f.answer })),
        });
      });
      written++;
    }
  }

  console.log("");
  if (keptOverviews.length) {
    console.log("Existing overviews preserved (not overwritten): " + keptOverviews.join(", "));
  }
  console.log(
    APPLY
      ? `\n✅ Updated ${written} treks.`
      : `\nDry run only — ${ALL.length} treks ready. Re-run with --apply to write.`,
  );
}

main()
  .catch((e) => {
    console.error("ERROR:", e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
