/**
 * Make sure a trek that has gallery images actually renders them.
 *
 * The trek page builds its layout by walking sectionOrder and rendering only
 * the ids it finds there, so a trek whose sectionOrder omits "gallery" shows no
 * gallery at all no matter how many images are attached. Two treks were in that
 * state after images were added.
 *
 *   npx tsx scripts/fix-gallery-section-order.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

async function main() {
  const treks = await prisma.trek.findMany({
    select: { id: true, slug: true, sectionOrder: true, galleryImages: { select: { id: true } } },
    orderBy: { slug: "asc" },
  });

  let changed = 0;
  for (const t of treks) {
    if (!t.galleryImages.length || !t.sectionOrder) continue;
    let order: string[];
    try { order = JSON.parse(t.sectionOrder); } catch { continue; }
    if (!Array.isArray(order) || order.includes("gallery")) continue;

    // Slot it where the other treks keep it: after the FAQs, before the
    // fixed-departure block and the similar-treks row at the end.
    const anchor = order.indexOf("fixedDepartures");
    const at = anchor >= 0 ? anchor : Math.max(order.indexOf("similarTreks"), 0) || order.length;
    const next = [...order.slice(0, at), "gallery", ...order.slice(at)];

    changed++;
    console.log(`${t.slug}\n   + "gallery" at position ${at} of ${order.length}`);
    if (APPLY) {
      await prisma.trek.update({ where: { id: t.id }, data: { sectionOrder: JSON.stringify(next) } });
    }
  }

  console.log(`\n${changed} treks ${APPLY ? "updated" : "would change"}.`);
  if (!APPLY) console.log("Dry run — re-run with --apply to write.");
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
