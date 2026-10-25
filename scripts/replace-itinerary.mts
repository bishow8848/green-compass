/**
 * Replace a trek's whole itinerary — title, elevation, accommodation, place
 * note and description of every day — from ./itinerary-replacements/*.ts.
 *
 * Unlike apply-itinerary-content.mts, which only rewrites descriptions of days
 * whose titles already match, this is for a new day sheet where the route
 * itself has changed. Rows are updated in place by day number, so the day
 * count in the database must match the replacement exactly; adding or removing
 * days is left to the admin, where it can be seen.
 *
 *   npx tsx scripts/replace-itinerary.mts            # dry run
 *   npx tsx scripts/replace-itinerary.mts --apply
 *
 * Then refresh the caches:
 *   npx tsx scripts/refresh-site-cache.mts --revalidate-url https://greencompasstreks.com
 */
import "dotenv/config";
import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { MAKALU_SHERPANI_MERA } from "./itinerary-replacements/makalu-sherpani-mera";

const APPLY = process.argv.includes("--apply");
const REPLACEMENTS = [MAKALU_SHERPANI_MERA];

const words = (html: string) =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length;

async function main() {
  const errors: string[] = [];
  const writes: Prisma.PrismaPromise<unknown>[] = [];

  for (const r of REPLACEMENTS) {
    const trek = await prisma.trek.findUnique({
      where: { slug: r.slug },
      select: {
        id: true, inclusions: true,
        itinerary: {
          orderBy: [{ dayNumber: "asc" }, { id: "asc" }],
          select: { id: true, dayNumber: true, title: true, elevation: true, description: true },
        },
      },
    });
    if (!trek) { errors.push(`[${r.slug}] no such trek`); continue; }

    const rows = trek.itinerary;
    if (rows.length !== r.days.length) {
      errors.push(`[${r.slug}] database has ${rows.length} days, replacement has ${r.days.length}`);
      continue;
    }
    if (rows.some((row, i) => row.dayNumber !== i + 1)) {
      errors.push(`[${r.slug}] day numbers are not 1..${rows.length}`);
      continue;
    }

    console.log(`\n### ${r.slug}`);
    r.days.forEach((d, i) => {
      const row = rows[i];
      const n = words(d.html);
      if (n < 150) errors.push(`[${r.slug}] day ${i + 1} only ${n} words — expected at least 150`);
      if (!/^<p>/.test(d.html)) errors.push(`[${r.slug}] day ${i + 1} must be <p>-wrapped HTML`);

      const renamed = row.title.trim() !== d.title;
      console.log(
        `  D${String(i + 1).padStart(2)} ${renamed ? "*" : " "} ${String(words(row.description ?? "")).padStart(3)}w -> ${String(n).padStart(3)}w` +
          `  ${(row.elevation ?? "—").padStart(8)} -> ${d.elevation.padStart(8)}  ${d.title}` +
          (renamed ? `\n          was: ${row.title}` : ""),
      );
      writes.push(
        prisma.itineraryDay.update({
          where: { id: row.id },
          data: {
            title: d.title,
            elevation: d.elevation,
            accommodation: d.accommodation,
            placeDescription: d.placeDescription,
            description: d.html,
          },
        }),
      );
    });

    let inclusions = trek.inclusions;
    for (const { from, to } of r.inclusions ?? []) {
      if (inclusions.includes(to)) { console.log(`  inclusions: already "${to.slice(0, 60)}…"`); continue; }
      const count = inclusions.split(from).length - 1;
      if (count !== 1) { errors.push(`[${r.slug}] inclusions: "${from.slice(0, 60)}…" found ${count} times`); continue; }
      inclusions = inclusions.replace(from, to);
      console.log(`  inclusions:\n    - ${from}\n    + ${to}`);
    }
    if (inclusions !== trek.inclusions) {
      writes.push(prisma.trek.update({ where: { id: trek.id }, data: { inclusions } }));
    }
  }

  if (errors.length) {
    console.error("\nVALIDATION FAILED:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exitCode = 1;
    return;
  }

  if (!APPLY) { console.log(`\n${writes.length} writes. Dry run — re-run with --apply to write.`); return; }

  await prisma.$transaction(writes);
  console.log(`\n✅ Wrote ${writes.length} rows.`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
