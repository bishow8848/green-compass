/* Audit every trek itinerary: duplicate/missing day numbers, count vs duration, empty descriptions. */
import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  const treks = await prisma.trek.findMany({
    include: { itinerary: { orderBy: { dayNumber: "asc" } } },
    orderBy: { slug: "asc" },
  });

  const numbering: string[] = [];
  const descIssues: string[] = [];

  for (const t of treks) {
    const days = t.itinerary;
    const nums = days.map((d) => d.dayNumber);

    const dupes = [...new Set(nums.filter((n, i) => nums.indexOf(n) !== i))];
    const expected = Array.from({ length: days.length }, (_, i) => i + 1);
    const missing = expected.filter((n) => !nums.includes(n));

    const problems: string[] = [];
    if (dupes.length) problems.push(`duplicate day numbers: ${dupes.join(", ")}`);
    if (missing.length) problems.push(`missing day numbers: ${missing.join(", ")}`);
    if (days.length !== t.duration) problems.push(`${days.length} entries but duration=${t.duration}`);
    if (problems.length) {
      numbering.push(`${t.slug}\n    ${problems.join("\n    ")}\n    nums: [${nums.join(", ")}]`);
    }

    const empty = days.filter((d) => !(d.description ?? "").replace(/<[^>]*>/g, "").trim());
    const short = days.filter((d) => {
      const len = (d.description ?? "").replace(/<[^>]*>/g, "").trim().length;
      return len > 0 && len < 150;
    });
    const noTitle = days.filter((d) => !d.title.trim());
    if (empty.length || short.length || noTitle.length) {
      descIssues.push(
        `${t.slug.padEnd(58)} days=${String(days.length).padStart(2)}  empty=${String(empty.length).padStart(2)}  short(<150)=${String(short.length).padStart(2)}  blankTitle=${noTitle.length}`,
      );
    }
  }

  console.log("=== NUMBERING PROBLEMS (" + numbering.length + " treks) ===");
  numbering.forEach((n) => console.log("  " + n));

  console.log("\n=== DESCRIPTION COVERAGE PROBLEMS (" + descIssues.length + " treks) ===");
  descIssues.forEach((d) => console.log("  " + d));

  const total = treks.reduce((n, t) => n + t.itinerary.length, 0);
  const totalEmpty = treks.reduce(
    (n, t) => n + t.itinerary.filter((d) => !(d.description ?? "").replace(/<[^>]*>/g, "").trim()).length, 0);
  console.log(`\nTotal itinerary days: ${total}, of which ${totalEmpty} have no description.`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
