/* Verify TARGET now matches REFERENCE for the copied content fields */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const TARGET_ID = "cmt1a36pl00002lfj0brc8ne9";

async function main() {
  const ref = await prisma.trek.findFirst({ where: { slug: "annapurna-base-camp-trek-from-pokhara" } });
  const target = await prisma.trek.findUnique({ where: { id: TARGET_ID } });
  if (!ref || !target) throw new Error("missing");

  const fields = ["overview", "metaTitle", "metaDescription", "keywords", "tags", "customSections", "sectionData", "sectionOrder", "addons"] as const;
  console.log("FIELD MATCH (target vs reference):");
  for (const f of fields) {
    const same = (target as any)[f] === (ref as any)[f];
    console.log(`  ${f.padEnd(18)} ${same ? "SAME" : "DIFFERENT"}`);
  }

  // Custom section headings
  const tHead = (JSON.parse(target.customSections || "[]") as any[]).map((s) => s.data?.heading);
  const rHead = (JSON.parse(ref.customSections || "[]") as any[]).map((s) => s.data?.heading);
  console.log("\nTarget custom headings:", tHead);
  console.log("Ref   custom headings:", rHead);

  // FAQs
  const tFaqs = await prisma.trekFaq.findMany({ where: { trekId: TARGET_ID }, orderBy: { id: "asc" } });
  const rFaqs = await prisma.trekFaq.findMany({ where: { trekId: ref.id }, orderBy: { id: "asc" } });
  console.log("\nFAQ count target/ref:", tFaqs.length, "/", rFaqs.length);
  const qSame = tFaqs.every((f, i) => f.question === rFaqs[i]?.question && f.answer === rFaqs[i]?.answer);
  console.log("FAQ content identical:", qSame);

  // Protected fields
  const protectedFields = ["title","slug","inclusions","exclusions","geoJsonUrl","geoJsonData","staticMapImage","waypoints","centerLat","centerLng","zoom","pitch","heroImage"] as const;
  console.log("\nTarget key protected values:");
  for (const f of protectedFields) {
    const v = (target as any)[f];
    // Print free-text descriptions (inclusions/exclusions) in full from start to end;
    // keep other large values (e.g. geoJsonData) truncated for readability.
    const showFull = f === "inclusions" || f === "exclusions";
    console.log(`  ${f}: ${showFull ? v : typeof v === "string" && v.length > 80 ? v.slice(0, 80) + "..." : v}`);
  }
  const itinCount = await prisma.itineraryDay.count({ where: { trekId: TARGET_ID } });
  console.log("  itinerary days:", itinCount);
}

main().finally(() => prisma.$disconnect());
