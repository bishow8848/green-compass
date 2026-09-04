/**
 * Fill in the map waypoint for every itinerary day that has no coordinate.
 *
 * A day that already carries a coordinate is never touched, so this is safe to
 * re-run as more place names get resolved. Waypoints are written back in day
 * order with the label and description the day already uses, which is the shape
 * the trek map and its popups expect.
 *
 *   npx tsx scripts/apply-waypoints.mts            # dry run
 *   npx tsx scripts/apply-waypoints.mts --apply
 *   npx tsx scripts/apply-waypoints.mts --apply <slug> [<slug>...]
 */
import "dotenv/config";
import { readFileSync } from "node:fs";
import { prisma } from "../lib/prisma";
import { OVERRIDES } from "./waypoints/overrides";

const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const only = new Set(args.filter((a) => !a.startsWith("--")));

const NEEDED = "scripts/waypoints/needed.json";
const RESOLVED = "scripts/waypoints/resolved.json";

async function main() {
  const { perTrek } = JSON.parse(readFileSync(NEEDED, "utf8"));
  const { resolved } = JSON.parse(readFileSync(RESOLVED, "utf8"));

  const coordFor = (name: string) => {
    const key = name.toLowerCase();
    const o = OVERRIDES[key];
    if (o) return { lng: o.lng, lat: o.lat, source: `override — ${o.note}` };
    const r = resolved[key];
    return r ? { lng: r.lng, lat: r.lat, source: r.source } : null;
  };

  let filled = 0, unfilled = 0, treksTouched = 0;
  const stillMissing = new Map<string, number>();

  for (const t of perTrek) {
    if (only.size && !only.has(t.slug)) continue;
    const trek = await prisma.trek.findUnique({
      where: { slug: t.slug },
      select: { id: true, waypoints: true, itinerary: { orderBy: { dayNumber: "asc" }, select: { dayNumber: true, accommodation: true, placeDescription: true } } },
    });
    if (!trek) { console.log(`!! ${t.slug} — no such trek`); continue; }

    const existing: any[] = trek.waypoints ? JSON.parse(trek.waypoints) : [];
    const byDay = new Map<number, any>();
    for (const w of existing) if (Number.isFinite(w?.lat) && Number.isFinite(w?.lng)) byDay.set(w.dayNumber, w);

    let added = 0, missed = 0, approx = 0;
    const unplaced: any[] = [];
    for (const d of t.days) {
      if (byDay.has(d.dayNumber)) continue;         // already has a coordinate
      const hit = d.generic ? null : coordFor(d.name);
      if (!hit) { unplaced.push(d); continue; }
      const day = trek.itinerary.find((x) => x.dayNumber === d.dayNumber);
      byDay.set(d.dayNumber, {
        lng: hit.lng, lat: hit.lat,
        label: (day?.accommodation ?? d.name).trim(),
        description: day?.placeDescription ?? "",
        dayNumber: d.dayNumber,
      });
      added++;
    }

    // Herders' kharkas and pass phedis are often in no gazetteer at all. Rather
    // than leave a hole in the route line, place them between the nights either
    // side — which is the ground the group actually walks — and flag them so a
    // surveyed coordinate can replace them later.
    for (const d of unplaced) {
      const days = [...byDay.keys()].sort((a, b) => a - b);
      const before = days.filter((x) => x < d.dayNumber).pop();
      const after = days.find((x) => x > d.dayNumber);
      const a = before != null ? byDay.get(before) : null;
      const b = after != null ? byDay.get(after) : null;
      let lng: number, lat: number;
      if (a && b) {
        const span = (after as number) - (before as number);
        const w = (d.dayNumber - (before as number)) / span;
        lng = a.lng + (b.lng - a.lng) * w;
        lat = a.lat + (b.lat - a.lat) * w;
      } else if (a || b) {
        ({ lng, lat } = (a ?? b)!);
      } else {
        missed++; stillMissing.set(d.name, (stillMissing.get(d.name) ?? 0) + 1); continue;
      }
      const day = trek.itinerary.find((x) => x.dayNumber === d.dayNumber);
      byDay.set(d.dayNumber, {
        lng: Number(lng.toFixed(5)), lat: Number(lat.toFixed(5)),
        label: (day?.accommodation ?? d.name).trim(),
        description: day?.placeDescription ?? "",
        dayNumber: d.dayNumber,
        approximate: true,
      });
      approx++;
      stillMissing.set(d.name, (stillMissing.get(d.name) ?? 0) + 1);
    }
    added += approx;
    filled += added; unfilled += missed;
    if (!added) continue;
    treksTouched++;

    const waypoints = [...byDay.values()].sort((a, b) => a.dayNumber - b.dayNumber);
    console.log(`${t.slug.padEnd(46)} +${String(added).padStart(2)} waypoints` + (approx ? `   (${approx} interpolated)` : "") + (missed ? `   (${missed} still empty)` : ""));

    if (APPLY) {
      await prisma.trek.update({ where: { id: trek.id }, data: { waypoints: JSON.stringify(waypoints) } });
    }
  }

  console.log(`\n${filled} day(s) given a coordinate across ${treksTouched} trek(s); ${unfilled} still without one.`);
  if (stillMissing.size) {
    console.log("\nplaces with no gazetteer entry, placed by interpolation along the route:");
    for (const [n, c] of [...stillMissing.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${String(c).padStart(2)}  ${n}`);
  }
  if (!APPLY) console.log("\nDry run — nothing written. Re-run with --apply.");
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
