/**
 * Bring the three hand-written reference treks in line with the $35/day porter rate.
 *
 * Spans confirmed by the client:
 *   manaslu-circuit-trek                  D2 -> D14  (13 days)
 *   makalu-base-camp-trek                 D2 -> D16  (15 days)
 *   tsum-valley-and-manaslu-circuit-trek  D2 -> D19  (18 days)
 *
 * Touches ONLY the Porter add-on's pricePerUnit. Every other add-on (jeep
 * transfers), the porter's existing description, and all other trek fields
 * are left exactly as they are.
 *
 * Usage:
 *   npx tsx scripts/fix-reference-porter-days.mts            # dry run
 *   npx tsx scripts/fix-reference-porter-days.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import { PORTER_RATE_PER_DAY } from "./trek-content/build";

const APPLY = process.argv.includes("--apply");

/** slug -> [first porter day, last porter day] inclusive */
const SPANS: Record<string, [number, number]> = {
  "manaslu-circuit-trek": [2, 14],
  "makalu-base-camp-trek": [2, 16],
  "tsum-valley-and-manaslu-circuit-trek": [2, 19],
};

async function main() {
  for (const [slug, [from, to]] of Object.entries(SPANS)) {
    const trek = await prisma.trek.findUnique({
      where: { slug },
      include: { itinerary: { orderBy: { dayNumber: "asc" }, select: { dayNumber: true, title: true } } },
    });
    if (!trek) throw new Error("trek not found: " + slug);

    const days = to - from + 1;
    const price = days * PORTER_RATE_PER_DAY;

    // Sanity-check the span against the real itinerary.
    const first = trek.itinerary.find((d) => d.dayNumber === from);
    const last = trek.itinerary.find((d) => d.dayNumber === to);
    if (!first || !last) throw new Error(`${slug}: itinerary has no day ${from} or ${to}`);
    if (to > trek.duration) throw new Error(`${slug}: day ${to} exceeds duration ${trek.duration}`);

    const addons = JSON.parse(trek.addons ?? "[]") as Array<{ title: string; pricePerUnit: number }>;
    const porterIdx = addons.findIndex((a) => a.title.trim().toLowerCase() === "porter");
    if (porterIdx === -1) throw new Error(`${slug}: no Porter add-on to update`);

    const before = addons[porterIdx].pricePerUnit;
    addons[porterIdx] = { ...addons[porterIdx], pricePerUnit: price };

    console.log(`\n${slug}  (${trek.duration}-day trip)`);
    console.log(`  D${from}: ${first.title}`);
    console.log(`  D${to}: ${last.title}`);
    console.log(`  porter ${days}d x $${PORTER_RATE_PER_DAY} = $${price}   (was $${before})`);
    console.log(`  other add-ons kept: ${addons.filter((_, i) => i !== porterIdx).map((a) => `${a.title} $${a.pricePerUnit}`).join(", ") || "none"}`);

    if (APPLY) {
      await prisma.trek.update({ where: { id: trek.id }, data: { addons: JSON.stringify(addons) } });
    }
  }
  console.log(APPLY ? "\n✅ Porter pricing updated." : "\nDry run only — re-run with --apply to write.");
}

main()
  .catch((e) => { console.error("ERROR:", e); process.exitCode = 1; })
  .finally(() => prisma.$disconnect());
