/**
 * Write the expanded itinerary day descriptions from ./itinerary-content/*.ts.
 *
 * Each entry is matched to its day by (slug, entry index) and the recorded title
 * is checked against the database first, so a day that has been renamed or
 * reordered since the content was written fails loudly instead of overwriting
 * the wrong day.
 *
 *   npx tsx scripts/apply-itinerary-content.mts            # dry run
 *   npx tsx scripts/apply-itinerary-content.mts --apply
 *   npx tsx scripts/apply-itinerary-content.mts --apply <slug> [<slug>...]
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import type { TrekDays } from "./itinerary-content/types";
import { ALL_ITINERARY_CONTENT } from "./itinerary-content/index";

const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const only = new Set(args.filter((a) => !a.startsWith("--")));

const words = (html: string) =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length;

async function main() {
  const content: TrekDays[] = ALL_ITINERARY_CONTENT.filter(
    (c) => !only.size || only.has(c.slug),
  );

  const treks = await prisma.trek.findMany({
    select: {
      id: true, slug: true,
      itinerary: {
        orderBy: [{ dayNumber: "asc" }, { id: "asc" }],
        select: { id: true, dayNumber: true, title: true, description: true },
      },
    },
  });
  const bySlug = new Map(treks.map((t) => [t.slug, t]));

  const errors: string[] = [];
  const updates: { id: string; html: string; slug: string; day: number; before: number; after: number }[] = [];
  const reseq: { id: string; dayNumber: number }[] = [];

  for (const c of content) {
    const trek = bySlug.get(c.slug);
    if (!trek) { errors.push(`[${c.slug}] no such trek`); continue; }

    const seen = new Set<number>();
    for (const d of c.days) {
      if (seen.has(d.index)) errors.push(`[${c.slug}] duplicate index ${d.index}`);
      seen.add(d.index);

      const day = trek.itinerary[d.index];
      if (!day) { errors.push(`[${c.slug}] index ${d.index} out of range (${trek.itinerary.length} days)`); continue; }
      if (day.title.trim() !== d.title.trim()) {
        errors.push(`[${c.slug}] index ${d.index} title mismatch\n      db:      ${day.title}\n      content: ${d.title}`);
        continue;
      }
      const n = words(d.html);
      if (n < 110) errors.push(`[${c.slug}] index ${d.index} only ${n} words — expected at least 110`);
      if (!/^<p>/.test(d.html)) errors.push(`[${c.slug}] index ${d.index} must be <p>-wrapped HTML`);

      updates.push({
        id: day.id, html: d.html, slug: c.slug, day: day.dayNumber,
        before: words(day.description ?? ""), after: n,
      });
    }

    if (c.resequence) {
      trek.itinerary.forEach((day, i) => {
        if (day.dayNumber !== i + 1) reseq.push({ id: day.id, dayNumber: i + 1 });
      });
    }
  }

  if (errors.length) {
    console.error("VALIDATION FAILED:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exitCode = 1;
    return;
  }

  let slug = "";
  for (const u of updates) {
    if (u.slug !== slug) { slug = u.slug; console.log(`\n### ${slug}`); }
    console.log(`  D${String(u.day).padStart(2)}  ${String(u.before).padStart(3)}w -> ${String(u.after).padStart(3)}w`);
  }
  console.log(`\n${updates.length} day descriptions across ${content.length} treks` +
    (reseq.length ? `, ${reseq.length} day numbers resequenced` : ""));

  if (!APPLY) { console.log("Dry run — re-run with --apply to write."); return; }

  for (const u of updates) {
    await prisma.itineraryDay.update({ where: { id: u.id }, data: { description: u.html } });
  }
  for (const r of reseq) {
    await prisma.itineraryDay.update({ where: { id: r.id }, data: { dayNumber: r.dayNumber } });
  }
  console.log(`✅ Wrote ${updates.length} descriptions.`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
