import "dotenv/config";
import { writeFileSync } from "node:fs";
import { prisma } from "../lib/prisma";
const OUT = process.argv[2];
const strip = (s: string | null) => String(s || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
async function main() {
  const treks = await prisma.trek.findMany({
    select: {
      slug: true, title: true, duration: true, maxAltitude: true, bestTime: true, difficulty: true,
      itinerary: { select: { dayNumber: true, title: true, description: true, elevation: true, accommodation: true, placeDescription: true }, orderBy: { dayNumber: "asc" } },
    },
    orderBy: { slug: "asc" },
  });
  const chunks: string[][] = [[], [], [], []];
  treks.forEach((t, i) => {
    const block = `
=== ${t.slug} | ${t.title} | ${t.duration}d | max ${t.maxAltitude}m | ${t.bestTime}
${t.itinerary.map((d) => `D${d.dayNumber} ${d.title}${d.elevation ? ` [elev ${d.elevation}]` : ""}${d.accommodation ? ` [stay ${d.accommodation}]` : ""}\n   ${strip(d.description)}`).join("\n")}
`;
    chunks[i % 4].push(block);
  });
  chunks.forEach((c, i) => writeFileSync(`${OUT}/days-${i + 1}.txt`, c.join("")));
  console.log("treks:", treks.length, "-> 4 files");
}
main().catch(console.error).finally(() => prisma.$disconnect());
