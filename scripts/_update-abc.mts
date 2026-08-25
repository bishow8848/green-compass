/**
 * Align TARGET trek content with the reference "Annapurna Base Camp Trek (ABC Trek Nepal)".
 *
 * Copies ONLY freely-changeable content fields from the reference:
 *   overview, metaTitle, metaDescription, keywords, tags,
 *   customSections, sectionData, sectionOrder, addons, faqs
 *
 * Keeps untouched (per user request): itinerary, inclusions, exclusions,
 * map fields (geoJson*, waypoints, center, zoom, pitch, staticMapImage),
 * and all other details (title, slug, heroImage, gallery, pricing, dates...).
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const TARGET_ID = "cmt1a36pl00002lfj0brc8ne9";
const REF_SLUG = "annapurna-base-camp-trek-from-pokhara";

async function main() {
  const ref = await prisma.trek.findFirst({ where: { slug: REF_SLUG } });
  if (!ref) throw new Error("Reference ABC trek not found by slug: " + REF_SLUG);

  const target = await prisma.trek.findUnique({ where: { id: TARGET_ID } });
  if (!target) throw new Error("Target trek not found: " + TARGET_ID);

  console.log("Reference:", ref.id, "->", ref.title);
  console.log("Target  :", target.id, "->", target.title);
  console.log("");

  const refFaqs = await prisma.trekFaq.findMany({
    where: { trekId: ref.id },
    select: { question: true, answer: true },
    orderBy: { id: "asc" },
  });

  // Fields copied from the reference (freely-changeable content only)
  const updateData = {
    overview: ref.overview,
    metaTitle: ref.metaTitle,
    metaDescription: ref.metaDescription,
    keywords: ref.keywords,
    tags: ref.tags,
    customSections: ref.customSections,
    sectionData: ref.sectionData,
    sectionOrder: ref.sectionOrder,
    addons: ref.addons,
  };

  const result = await prisma.$transaction(async (tx) => {
    const updated = await tx.trek.update({
      where: { id: TARGET_ID },
      data: updateData,
    });

    // Replace target FAQs with reference FAQs
    await tx.trekFaq.deleteMany({ where: { trekId: TARGET_ID } });
    await tx.trekFaq.createMany({
      data: refFaqs.map((f) => ({
        trekId: TARGET_ID,
        question: f.question,
        answer: f.answer,
      })),
    });

    return updated;
  });

  console.log("✅ Trek updated:", result.title);
  console.log("   metaTitle:", result.metaTitle);
  console.log("   customSections length:", result.customSections?.length);
  console.log("   sectionOrder length:", result.sectionOrder?.length);
  console.log("   FAQs replaced with", refFaqs.length, "reference FAQs");

  // Safety: confirm protected fields were NOT changed
  const verify = await prisma.trek.findUnique({ where: { id: TARGET_ID } });
  const protectedChanged = [
    "title", "slug", "inclusions", "exclusions", "itinerary",
    "geoJsonUrl", "geoJsonData", "staticMapImage", "waypoints",
    "centerLat", "centerLng", "zoom", "pitch",
  ].filter((f) => (verify as any)[f] !== (target as any)[f]);
  console.log("   Protected fields changed (should be empty):", protectedChanged);
}

main()
  .catch((e) => {
    console.error("ERROR:", e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
