/**
 * Correct three trek slugs that carry a typo or an uppercase letter into the URL,
 * leaving a permanent redirect behind each one.
 *
 *   /treks/Kanchenjunga-north-base-camp-trek   uppercase — search engines may
 *                                              index it as a separate duplicate
 *   /treks/annapurna-cicuit-with-tilicho-lake-trek   "cicuit"
 *   /treks/tsun-valley-trek                          "tsun" (the valley is Tsum)
 *
 * A 308 redirect is written for the old path first, so existing links and any
 * accumulated ranking follow the page to its new address.
 *
 *   npx tsx scripts/fix-trek-slugs.mts            # dry run
 *   npx tsx scripts/fix-trek-slugs.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

const RENAMES: { from: string; to: string }[] = [
  { from: "Kanchenjunga-north-base-camp-trek", to: "kanchenjunga-north-base-camp-trek" },
  { from: "annapurna-cicuit-with-tilicho-lake-trek", to: "annapurna-circuit-with-tilicho-lake-trek" },
  { from: "tsun-valley-trek", to: "tsum-valley-trek" },
];

async function main() {
  const errors: string[] = [];
  const planned: { id: string; from: string; to: string; oldPath: string; newPath: string }[] = [];

  for (const r of RENAMES) {
    const trek = await prisma.trek.findUnique({
      where: { slug: r.from },
      select: { id: true, slug: true, category: { select: { slug: true } } },
    });
    if (!trek) { errors.push(`no trek with slug ${r.from}`); continue; }
    const taken = await prisma.trek.findUnique({ where: { slug: r.to }, select: { id: true } });
    if (taken) { errors.push(`slug ${r.to} is already used by another trek`); continue; }

    const cat = trek.category?.slug ?? "treks";
    planned.push({
      id: trek.id, from: r.from, to: r.to,
      oldPath: `/${cat}/${r.from}`, newPath: `/${cat}/${r.to}`,
    });
  }

  if (errors.length) {
    console.error("VALIDATION FAILED:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exitCode = 1;
    return;
  }

  for (const p of planned) {
    console.log(`${p.from}\n   -> ${p.to}\n   redirect 308  ${p.oldPath}  ->  ${p.newPath}`);
  }

  // Any existing redirect that points AT an old path has to follow the rename too,
  // otherwise it becomes a redirect chain or a 404.
  const stale = await prisma.legacyRedirect.findMany({
    where: { newPath: { in: planned.map((p) => p.oldPath) } },
    select: { id: true, oldPath: true, newPath: true },
  });
  for (const s of stale) {
    const target = planned.find((p) => p.oldPath === s.newPath)!;
    console.log(`\nexisting redirect repointed:\n   ${s.oldPath}\n   -> ${s.newPath}  becomes  ${target.newPath}`);
  }

  if (!APPLY) { console.log("\nDry run — re-run with --apply to write."); return; }

  for (const p of planned) {
    await prisma.$transaction(async (tx) => {
      // Redirect first, so the old URL is never live without one.
      await tx.legacyRedirect.upsert({
        where: { oldPath: p.oldPath },
        create: { oldPath: p.oldPath, newPath: p.newPath, permanent: true, active: true },
        update: { newPath: p.newPath, permanent: true, active: true },
      });
      await tx.trek.update({ where: { id: p.id }, data: { slug: p.to } });
    });
  }
  for (const s of stale) {
    const target = planned.find((p) => p.oldPath === s.newPath)!;
    await prisma.legacyRedirect.update({ where: { id: s.id }, data: { newPath: target.newPath } });
  }

  console.log(`\n✅ Renamed ${planned.length} slugs, wrote ${planned.length} redirects, repointed ${stale.length}.`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
