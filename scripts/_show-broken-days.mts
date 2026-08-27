/* Dump the itinerary rows behind the numbering problems and the blank title. */
import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  for (const slug of ["short-annapurna-circuit-trek", "mundum-trek", "lower-dolpo-trek"]) {
    const t = await prisma.trek.findUnique({
      where: { slug },
      include: { itinerary: { orderBy: [{ dayNumber: "asc" }, { id: "asc" }] } },
    });
    if (!t) continue;
    console.log(`\n######## ${slug}  (duration=${t.duration}, ${t.itinerary.length} entries) ########`);
    for (const d of t.itinerary) {
      const desc = (d.description ?? "").replace(/<[^>]*>/g, "").trim();
      console.log(
        `  D${String(d.dayNumber).padStart(2)} id=${d.id}\n` +
        `      title: ${JSON.stringify(d.title)}\n` +
        `      elev=${JSON.stringify(d.elevation)}  acc=${JSON.stringify(d.accommodation)}\n` +
        `      desc(${desc.length}): ${desc.slice(0, 120)}${desc.length > 120 ? "…" : ""}`,
      );
    }
  }
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
