/**
 * Replace the credit-bearing gallery captions with descriptive ones.
 *
 * Each fix is matched by TrekGalleryImage id, and the caption currently in the
 * database must still be a credit-bearing one ("… Photo: X, CC …"). A caption
 * that has already been rewritten is skipped rather than overwritten, so the
 * script is safe to re-run.
 *
 *   npx tsx scripts/apply-gallery-captions.mts            # dry run
 *   npx tsx scripts/apply-gallery-captions.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import { CAPTION_FIXES } from "./gallery-content/captions";

const APPLY = process.argv.includes("--apply");
const isCredit = (s: string) => /Photo:\s*\S/i.test(s);

async function main() {
  const errors: string[] = [];
  const seen = new Set<string>();
  for (const f of CAPTION_FIXES) {
    if (seen.has(f.id)) errors.push(`duplicate id ${f.id}`);
    seen.add(f.id);
    if (/\bCC\b|Photo:|GFDL|public domain/i.test(f.caption)) errors.push(`${f.id}: new caption still carries a credit`);
    if (f.caption.trim().length < 40) errors.push(`${f.id}: new caption too short`);
    if (!/[.!?]$/.test(f.caption.trim())) errors.push(`${f.id}: new caption should end in a full stop`);
  }

  const rows = await prisma.trekGalleryImage.findMany({
    where: { id: { in: CAPTION_FIXES.map((f) => f.id) } },
    select: { id: true, caption: true, trek: { select: { slug: true } } },
  });
  const byId = new Map(rows.map((r) => [r.id, r]));

  const updates: { id: string; slug: string; from: string; to: string }[] = [];
  const skipped: string[] = [];

  for (const f of CAPTION_FIXES) {
    const row = byId.get(f.id);
    if (!row) { errors.push(`${f.id}: no such gallery image`); continue; }
    const cur = row.caption ?? "";
    if (!isCredit(cur)) { skipped.push(`${row.trek.slug}: ${f.id} already rewritten`); continue; }
    updates.push({ id: f.id, slug: row.trek.slug, from: cur, to: f.caption });
  }

  // Nothing anywhere in the gallery should keep a credit after this runs.
  const remaining = await prisma.trekGalleryImage.count({ where: { caption: { contains: "Photo:" } } });
  if (remaining !== CAPTION_FIXES.length && !skipped.length) {
    errors.push(`${remaining} captions in the DB carry a credit but ${CAPTION_FIXES.length} fixes are defined`);
  }

  if (errors.length) {
    console.error("VALIDATION FAILED:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exitCode = 1;
    return;
  }

  let slug = "";
  for (const u of updates) {
    if (u.slug !== slug) { slug = u.slug; console.log(`\n### ${slug}`); }
    console.log(`  - ${u.from}\n  + ${u.to}`);
  }
  if (skipped.length) console.log(`\n${skipped.length} already rewritten, skipped.`);
  console.log(`\n${updates.length} captions to rewrite.`);

  if (!APPLY) { console.log("Dry run — re-run with --apply to write."); return; }

  for (const u of updates) {
    await prisma.trekGalleryImage.update({ where: { id: u.id }, data: { caption: u.to } });
  }
  const left = await prisma.trekGalleryImage.count({ where: { caption: { contains: "Photo:" } } });
  console.log(`✅ Rewrote ${updates.length} captions. Captions still carrying a credit: ${left}`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
