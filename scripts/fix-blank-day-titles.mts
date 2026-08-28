/**
 * Fill in itinerary day titles that were left blank.
 *
 * Matched by (slug, entry index); the day must currently have an empty title,
 * so the script cannot overwrite a day that has since been named.
 *
 *   npx tsx scripts/fix-blank-day-titles.mts            # dry run
 *   npx tsx scripts/fix-blank-day-titles.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

const FIXES: { slug: string; index: number; title: string }[] = [
  { slug: "lower-dolpo-trek", index: 0, title: "Arrival in Kathmandu (1,400 m)" },
];

async function main() {
  const errors: string[] = [];
  const updates: { id: string; slug: string; title: string }[] = [];

  for (const f of FIXES) {
    const trek = await prisma.trek.findUnique({
      where: { slug: f.slug },
      select: { itinerary: { orderBy: [{ dayNumber: "asc" }, { id: "asc" }], select: { id: true, title: true } } },
    });
    if (!trek) { errors.push(`[${f.slug}] no such trek`); continue; }
    const day = trek.itinerary[f.index];
    if (!day) { errors.push(`[${f.slug}] index ${f.index} out of range`); continue; }
    if (day.title.trim()) { console.log(`  skip ${f.slug} idx ${f.index}: already titled "${day.title}"`); continue; }
    updates.push({ id: day.id, slug: f.slug, title: f.title });
  }

  if (errors.length) {
    console.error("VALIDATION FAILED:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exitCode = 1;
    return;
  }
  updates.forEach((u) => console.log(`  ${u.slug}: "" -> "${u.title}"`));
  if (!APPLY) { console.log(`\n${updates.length} titles to set. Dry run — re-run with --apply.`); return; }
  for (const u of updates) await prisma.itineraryDay.update({ where: { id: u.id }, data: { title: u.title } });
  console.log(`✅ Set ${updates.length} titles.`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
