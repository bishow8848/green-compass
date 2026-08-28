/**
 * Correct itinerary headings that describe an impossible leg.
 *
 * On the 9-day Jomsom Muktinath trek, day 4 read "Trek from Jomsom to
 * Muktinath" even though day 3 had already walked to Kagbeni and day 5 starts
 * from Muktinath. The 5-day Pokhara version of the same trek has the leg
 * correct as Kagbeni to Muktinath, which confirms the intended route.
 *
 * On the Gokyo Lakes trek, Dole was quoted at 3,680 m — roughly the height of
 * Phortse Thanga, which the trail passes through earlier the same day. Dole
 * itself sits at 4,110 m.
 *
 *   npx tsx scripts/fix-itinerary-route-errors.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

const FIXES: { slug: string; index: number; from: string; to: string }[] = [
  {
    slug: "jomsom-muktinath-trek",
    index: 4,
    from: "Trek from Jomsom (2,700 m) to Muktinath (3,800 m)",
    to: "Trek from Kagbeni (2,800 m) to Muktinath (3,800 m)",
  },
  {
    slug: "gokyo-lake-trek",
    index: 4,
    from: "Trek from Namche Bazaar (3,440 m) to Dole (3,680 m)",
    to: "Trek from Namche Bazaar (3,440 m) to Dole (4,110 m)",
  },
  {
    slug: "gokyo-lake-trek",
    index: 5,
    from: "Trek from Dole (3,680 m) to Machhermo (3,870 m)",
    to: "Trek from Dole (4,110 m) to Machhermo (3,870 m)",
  },
];

async function main() {
  for (const f of FIXES) {
    const trek = await prisma.trek.findUnique({
      where: { slug: f.slug },
      select: { itinerary: { orderBy: [{ dayNumber: "asc" }, { id: "asc" }], select: { id: true, title: true } } },
    });
    const day = trek?.itinerary[f.index];
    if (!day) { console.error(`[${f.slug}] index ${f.index} not found`); process.exitCode = 1; return; }
    if (day.title.trim() === f.to) { console.log(`${f.slug} D${f.index + 1} already correct`); continue; }
    if (day.title.trim() !== f.from) {
      console.error(`[${f.slug}] index ${f.index} reads ${JSON.stringify(day.title)}, expected ${JSON.stringify(f.from)}`);
      process.exitCode = 1;
      return;
    }
    console.log(`${f.slug} D${f.index + 1}\n  - ${f.from}\n  + ${f.to}`);
    if (APPLY) await prisma.itineraryDay.update({ where: { id: day.id }, data: { title: f.to } });
  }
  console.log(APPLY ? "✅ applied" : "dry run");
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
