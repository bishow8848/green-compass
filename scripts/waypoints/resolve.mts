/**
 * Stage 2: resolve each place name to a coordinate.
 *
 * Two sources, in order of trust:
 *   1. Coordinates already used by a waypoint elsewhere in this database —
 *      these were set by hand and are the site's own answer for that place.
 *   2. OpenStreetMap, queried by exact name inside Nepal.
 *
 * Nepal reuses village names heavily ("Ramche" exists five times), so where a
 * name has several OSM matches the one nearest the trek's own map centre wins,
 * and anything more than 120 km from it is discarded rather than guessed at.
 */
import "dotenv/config";
import { readFileSync, writeFileSync } from "node:fs";
import { prisma } from "../../lib/prisma";

const IN = process.argv[2] ?? "scripts/waypoints/needed.json";
const OUT = process.argv[3] ?? "scripts/waypoints/resolved.json";
const API = "https://nominatim.openstreetmap.org/search";
const UA = "GreenCompassTreks-ContentBot/1.0 (trek itinerary geocoding; contact via greencompasstreks.com)";
const MAX_KM_FROM_TREK = 120;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const km = (a: [number, number], b: [number, number]) => {
  const R = 6371, r = Math.PI / 180;
  const dLat = (b[1] - a[1]) * r, dLng = (b[0] - a[0]) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * r) * Math.cos(b[1] * r) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
const esc = (s: string) => s.replace(/["\\]/g, "\\$&");

/**
 * Geocode one place name inside Nepal.
 *
 * Nominatim is the right tool here rather than Overpass: it is built for
 * name lookups, ranks results by importance, and returns a class/type we can
 * use to prefer a village over, say, a shop of the same name. Its usage policy
 * allows one request per second, which the caller respects.
 */
async function geocode(name: string): Promise<any[]> {
  const qs = new URLSearchParams({
    q: `${name}, Nepal`, format: "jsonv2", limit: "8",
    countrycodes: "np", "accept-language": "en",
  });
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const r = await fetch(`${API}?${qs}`, { headers: { "User-Agent": UA } });
      if (r.status === 429 || r.status >= 500) { await sleep(5000 * (attempt + 1)); continue; }
      const body = await r.text();
      if (!body.trimStart().startsWith("[")) { await sleep(5000 * (attempt + 1)); continue; }
      return JSON.parse(body).map((h: any) => ({
        lng: Number(h.lon), lat: Number(h.lat),
        kind: h.type ?? h.category ?? "?",
        display: h.display_name,
      }));
    } catch {
      await sleep(3000 * (attempt + 1));
    }
  }
  return [];
}

/** How much a node type is trusted as "somewhere a trekking group sleeps". */
const KIND_RANK: Record<string, number> = {
  town: 5, village: 5, hamlet: 4, suburb: 4, isolated_dwelling: 3,
  locality: 2, alpine_hut: 3, guest_house: 3, camp_site: 3, saddle: 2, peak: 1,
};

async function main() {
  const { names, perTrek } = JSON.parse(readFileSync(IN, "utf8"));

  // 1. Waypoints already recorded anywhere in the database.
  const known = new Map<string, { lng: number; lat: number }>();
  for (const t of await prisma.trek.findMany({ select: { waypoints: true } })) {
    if (!t.waypoints) continue;
    for (const w of JSON.parse(t.waypoints) as any[]) {
      const label = String(w?.label ?? "").trim().toLowerCase();
      if (!label || !Number.isFinite(w?.lat) || !Number.isFinite(w?.lng)) continue;
      if (!known.has(label)) known.set(label, { lng: w.lng, lat: w.lat });
    }
  }

  const resolved: Record<string, any> = {};
  const unresolved: string[] = [];

  const pending = names.filter((n: any) => !known.has(n.name.toLowerCase()) && !n.generic);
  for (const n of names) {
    const hit = known.get(n.name.toLowerCase());
    if (hit) resolved[n.name.toLowerCase()] = { ...hit, name: n.name, source: "existing waypoint" };
  }
  console.log(`${Object.keys(resolved).length} resolved from waypoints already in the database`);

  // 2. Nominatim, one name per second per its usage policy.
  for (const [i, b] of pending.entries()) {
    const cands = await geocode(b.name);
    const anchor: [number, number] | null = b.anchors.length ? b.anchors[0] : null;
    const scored = cands
      .map((c: any) => ({ ...c, d: anchor ? km(anchor, [c.lng, c.lat]) : 0 }))
      .filter((c: any) => !anchor || c.d <= MAX_KM_FROM_TREK)
      .sort((a: any, x: any) => (KIND_RANK[x.kind] ?? 0) - (KIND_RANK[a.kind] ?? 0) || a.d - x.d);
    if (scored.length) {
      const best = scored[0];
      resolved[b.name.toLowerCase()] = {
        name: b.name, lng: best.lng, lat: best.lat,
        source: `nominatim ${best.kind}`, candidates: cands.length,
        kmFromTrekCentre: Number(best.d.toFixed(1)),
        display: String(best.display ?? "").slice(0, 90),
      };
    } else {
      unresolved.push(b.name);
    }
    if ((i + 1) % 20 === 0) console.log(`  ${i + 1}/${pending.length} looked up — ${Object.keys(resolved).length} resolved, ${unresolved.length} unresolved`);
    await sleep(1100);
  }

  writeFileSync(OUT, JSON.stringify({ resolved, unresolved }, null, 1));
  console.log(`\nresolved ${Object.keys(resolved).length} / ${names.length}`);
  console.log(`unresolved (${unresolved.length}): ${unresolved.join(", ")}`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
