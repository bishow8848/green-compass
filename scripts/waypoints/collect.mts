/**
 * Stage 1: list every place of stay that still needs a coordinate, with the
 * treks it belongs to and a rough anchor for disambiguation.
 *
 * A day already carrying a coordinate is never touched. Names are normalised
 * first because the accommodation column carries a few elevation suffixes
 * ("Thorong Phedi (4,450 m") and some spelling variants between treks.
 */
import "dotenv/config";
import { writeFileSync } from "node:fs";
import { prisma } from "../../lib/prisma";
import { anchorFor } from "./anchors";

const OUT = process.argv[2] ?? "scripts/waypoints/needed.json";

/** Strip elevation suffixes and tidy the raw accommodation string. */
export function normalisePlace(raw: string): string {
  return raw
    .replace(/\(\s*[\d,]+\s*m?\s*\)?/gi, " ")   // "(4,450 m" / "(1,400 m)"
    .replace(/\b[\d,]+\s*m\b/gi, " ")           // bare "3,180 m"
    .replace(/\s*[-–—]\s*$/, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Entries that are not a place at all, or too generic to geocode. */
const NOT_A_PLACE = /^(departure from.*|arrival.*|kharka|valley camp|camp)$/i;

/**
 * Where the accommodation column holds an elevation ("3,180 m") or a generic
 * word ("Kharka"), the day title still names the destination — it is the last
 * "to <Place> (<elevation>)" in the title. Falling back to that recovers the
 * handful of days whose accommodation field was filled in loosely.
 */
function placeFromTitle(title: string): string {
  const matches = [...title.matchAll(/\bto\s+([A-Z][A-Za-z' ]{2,40}?)\s*\(/g)];
  const last = matches[matches.length - 1];
  return last ? last[1].trim() : "";
}

async function main() {
  const treks = await prisma.trek.findMany({
    select: {
      slug: true, centerLat: true, centerLng: true, region: true,
      waypoints: true,
      itinerary: { orderBy: { dayNumber: "asc" }, select: { dayNumber: true, title: true, accommodation: true, placeDescription: true } },
    },
    orderBy: { slug: "asc" },
  });

  const byName = new Map<string, { name: string; treks: string[]; anchors: [number, number][]; generic: boolean }>();
  const perTrek: any[] = [];

  for (const t of treks) {
    const wp: any[] = t.waypoints ? JSON.parse(t.waypoints) : [];
    const have = new Map<number, any>();
    for (const w of wp) if (Number.isFinite(w?.lat) && Number.isFinite(w?.lng)) have.set(w.dayNumber, w);

    const missing = t.itinerary
      .filter((d) => !have.has(d.dayNumber))
      .map((d) => {
        let name = normalisePlace(d.accommodation ?? "");
        if (!name || NOT_A_PLACE.test(name)) name = placeFromTitle(d.title);
        // A name too generic to geocode ("Kharka", "Valley Camp") is still kept:
        // the day needs a dot on the map, and the applier interpolates it from
        // the nights either side rather than dropping it.
        const generic = !name || NOT_A_PLACE.test(name);
        return { dayNumber: d.dayNumber, raw: d.accommodation ?? "", name: name || (d.accommodation ?? "").trim(), place: d.placeDescription ?? "", generic };
      })
      .filter((d) => d.name);

    if (!missing.length) continue;
    perTrek.push({ slug: t.slug, region: t.region, anchor: anchorFor(t.slug, t.region), days: missing });

    for (const d of missing) {
      const key = d.name.toLowerCase();
      const e = byName.get(key) ?? { name: d.name, treks: [], anchors: [], generic: !!d.generic };
      if (!e.treks.includes(t.slug)) e.treks.push(t.slug);
      e.anchors.push(anchorFor(t.slug, t.region));
      byName.set(key, e);
    }
  }

  const names = [...byName.values()].sort((a, b) => a.name.localeCompare(b.name));
  writeFileSync(OUT, JSON.stringify({ names, perTrek }, null, 1));
  console.log(`${names.length} distinct places across ${perTrek.length} treks`);
  console.log(`${perTrek.reduce((n, t) => n + t.days.length, 0)} days need a coordinate`);
  console.log(`wrote ${OUT}`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
