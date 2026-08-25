/* Temporary inspection script: dump current state of TARGET and REFERENCE treks from DB */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const TARGET_ID = "cmt1a36pl00002lfj0brc8ne9";
const REF_ID = "cmszqel5x00000xlq8z7wcfv"; // will resolve by slug below

async function getTrek(idOrSlug: string) {
  return prisma.trek.findFirst({
    where: {
      OR: [{ id: idOrSlug }, { slug: idOrSlug }],
    },
    include: {
      itinerary: { orderBy: { dayNumber: "asc" } },
      pricingTiers: true,
      faqs: true,
      galleryImages: true,
      category: true,
      regionRef: true,
    },
  });
}

async function main() {
  const ref = await prisma.trek.findFirst({
    where: { slug: "annapurna-base-camp-trek-from-pokhara" },
  });
  const refId = ref?.id ?? REF_ID;
  const target = await getTrek(TARGET_ID);
  const reference = await getTrek(refId);

  console.log("===== TARGET =====");
  if (target) {
    const { geoJsonData, ...rest } = target as any;
    console.log(JSON.stringify(rest, null, 2));
  } else {
    console.log("NOT FOUND");
  }

  console.log("\n\n===== REFERENCE (ABC) =====");
  if (reference) {
    const { geoJsonData, ...rest } = reference as any;
    console.log(JSON.stringify(rest, null, 2));
  } else {
    console.log("NOT FOUND (id=" + refId + ")");
  }
}

main().finally(() => prisma.$disconnect());
