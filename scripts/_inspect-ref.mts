/* Dump reference gallery images + faqs + pricing for comparison */
import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  const ref = await prisma.trek.findUnique({
    where: { id: "cmszqel5x0000y0fj9pnetues" },
    include: { galleryImages: true, faqs: true, pricingTiers: true },
  });
  console.log("REFERENCE gallery:");
  for (const g of ref?.galleryImages ?? []) {
    console.log(JSON.stringify({ imageId: g.imageId, alt: g.alt, caption: g.caption }));
  }
  console.log("\nREFERENCE pricingTiers:");
  for (const p of ref?.pricingTiers ?? []) {
    console.log(JSON.stringify({ groupSize: p.groupSize, pricePerPerson: p.pricePerPerson }));
  }
  console.log("\nREFERENCE faqs:");
  for (const f of ref?.faqs ?? []) {
    console.log("Q:", f.question);
    console.log("A:", f.answer);
    console.log("---");
  }
  console.log("\nREFERENCE sectionOrder:", ref?.sectionOrder);
  console.log("REFERENCE fixedDepartureDays:", ref?.fixedDepartureDays);
  console.log("REFERENCE similarTrekIds:", ref?.similarTrekIds);
  console.log("REFERENCE overview:", ref?.overview);
}

main().finally(() => prisma.$disconnect());
