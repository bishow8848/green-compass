/* Full title + description text for the treks flagged as drifted. */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const SLUGS = process.argv.slice(2).filter((a) => !a.startsWith("-"));

async function main() {
  for (const slug of SLUGS) {
    const t = await prisma.trek.findUnique({
      where: { slug },
      include: { itinerary: { orderBy: [{ dayNumber: "asc" }, { id: "asc" }] } },
    });
    if (!t) { console.log("not found: " + slug); continue; }
    console.log(`\n########## ${slug} (duration=${t.duration}, ${t.itinerary.length} entries) ##########`);
    t.itinerary.forEach((d, i) => {
      const desc = (d.description ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
      console.log(`\n[entry ${i + 1}] D${d.dayNumber}`);
      console.log(`  TITLE: ${d.title}`);
      console.log(`  DESC : ${desc}`);
    });
  }
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
