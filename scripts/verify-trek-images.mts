/**
 * Fetch every published trek page and confirm the hero and all six gallery
 * images actually reach the rendered HTML.
 *
 * Checking the database is not enough: the page renders sections by walking
 * sectionOrder, and both Redis and the Next.js data cache sit in front of it,
 * so an image can be attached correctly and still not appear.
 *
 *   npx tsx scripts/verify-trek-images.mts [baseUrl]
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const BASE = process.argv[2] ?? "http://localhost:3000";

async function main() {
  const treks = await prisma.trek.findMany({
    where: { status: "published" },
    select: {
      slug: true, heroImage: true,
      category: { select: { slug: true } },
      galleryImages: { select: { imageId: true } },
    },
    orderBy: { slug: "asc" },
  });

  const bad: string[] = [];
  for (const t of treks) {
    const path = `/${t.category?.slug ?? "treks"}/${t.slug}`;
    let html = "";
    try {
      const r = await fetch(`${BASE}${path}`);
      if (!r.ok) { bad.push(`${t.slug}: HTTP ${r.status}`); continue; }
      html = await r.text();
    } catch (e: any) { bad.push(`${t.slug}: ${e.message}`); continue; }

    const heroOk = !!t.heroImage && html.includes(t.heroImage);
    const galleryFound = t.galleryImages.filter((g) => html.includes(g.imageId)).length;
    const ok = heroOk && galleryFound === t.galleryImages.length && galleryFound === 6;

    console.log(
      `  ${ok ? "ok  " : "FAIL"} ${t.slug.padEnd(52)} hero:${heroOk ? "y" : "n"} gallery:${galleryFound}/${t.galleryImages.length}`,
    );
    if (!ok) bad.push(`${t.slug} (hero ${heroOk}, gallery ${galleryFound}/${t.galleryImages.length})`);
  }

  console.log(`\n${treks.length - bad.length}/${treks.length} trek pages render hero + 6 gallery images.`);
  if (bad.length) { console.log("Problems:\n" + bad.map((b) => "  - " + b).join("\n")); process.exitCode = 1; }
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
