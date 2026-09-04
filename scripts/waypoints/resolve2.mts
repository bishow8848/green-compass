/**
 * Stage 3: a second pass over the names Nominatim could not place.
 *
 * Three things make the difference on small Nepali settlements: collapsing
 * spelling variants first, adding the district as a hint so the query is not
 * competing with every same-named village in the country, and dropping the
 * generic suffixes ("Village", "Gaun", "Bazar", "Phedi") that are part of the
 * itinerary wording rather than the map name.
 */
import "dotenv/config";
import { readFileSync, writeFileSync } from "node:fs";
import { ALIASES, REGION_HINT } from "./aliases";

const NEEDED = "scripts/waypoints/needed.json";
const RESOLVED = "scripts/waypoints/resolved.json";
const API = "https://nominatim.openstreetmap.org/search";
const UA = "GreenCompassTreks-ContentBot/1.0 (trek itinerary geocoding; contact via greencompasstreks.com)";
const MAX_KM = 120;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const km = (a: [number, number], b: [number, number]) => {
  const R = 6371, r = Math.PI / 180;
  const dLat = (b[1] - a[1]) * r, dLng = (b[0] - a[0]) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * r) * Math.cos(b[1] * r) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
const KIND_RANK: Record<string, number> = {
  town: 5, village: 5, hamlet: 4, suburb: 4, isolated_dwelling: 3, administrative: 3,
  locality: 2, alpine_hut: 3, guest_house: 2, camp_site: 3, saddle: 2, peak: 1, water: 3,
};

async function geocode(q: string): Promise<any[]> {
  const qs = new URLSearchParams({ q, format: "jsonv2", limit: "8", countrycodes: "np", "accept-language": "en" });
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch(`${API}?${qs}`, { headers: { "User-Agent": UA } });
      if (r.status === 429 || r.status >= 500) { await sleep(5000 * (attempt + 1)); continue; }
      const body = await r.text();
      if (!body.trimStart().startsWith("[")) { await sleep(5000 * (attempt + 1)); continue; }
      return JSON.parse(body).map((h: any) => ({ lng: Number(h.lon), lat: Number(h.lat), kind: h.type ?? "?", display: h.display_name }));
    } catch { await sleep(3000 * (attempt + 1)); }
  }
  return [];
}

/** Strip the wording that belongs to the itinerary rather than the map. */
const bare = (n: string) =>
  n.replace(/\b(village|gaun|gaon|bazar|bazaar|camp|phedi|base camp|high camp)\b/gi, " ")
   .replace(/\s{2,}/g, " ").trim();

async function main() {
  const { names, perTrek } = JSON.parse(readFileSync(NEEDED, "utf8"));
  const store = JSON.parse(readFileSync(RESOLVED, "utf8"));
  const resolved: Record<string, any> = store.resolved;

  // Region per name, from the treks that use it.
  const regionOf = new Map<string, string>();
  for (const t of perTrek) for (const d of t.days) {
    const k = d.name.toLowerCase();
    if (!regionOf.has(k)) regionOf.set(k, REGION_HINT[t.region] ?? "");
  }

  const stillMissing: string[] = [];
  const todo = names.filter((n: any) => !resolved[n.name.toLowerCase()]);
  console.log(`second pass over ${todo.length} names`);

  for (const [i, n] of todo.entries()) {
    const key = n.name.toLowerCase();
    // An alias may already be resolved under its canonical spelling.
    const canonical = ALIASES[key];
    if (canonical && resolved[canonical.toLowerCase()]) {
      resolved[key] = { ...resolved[canonical.toLowerCase()], name: n.name, source: `alias of ${canonical}` };
      continue;
    }
    const anchor: [number, number] | null = n.anchors.length ? n.anchors[0] : null;
    const district = regionOf.get(key) ?? "";
    const base = canonical ?? n.name;
    const queries = [
      district ? `${base}, ${district}, Nepal` : "",
      `${base}, Nepal`,
      bare(base) !== base ? `${bare(base)}, Nepal` : "",
    ].filter(Boolean);

    let best: any = null;
    for (const q of queries) {
      const cands = await geocode(q);
      await sleep(1100);
      const scored = cands
        .map((c: any) => ({ ...c, d: anchor ? km(anchor, [c.lng, c.lat]) : 0 }))
        .filter((c: any) => !anchor || c.d <= MAX_KM)
        .sort((a: any, x: any) => (KIND_RANK[x.kind] ?? 0) - (KIND_RANK[a.kind] ?? 0) || a.d - x.d);
      if (scored.length) { best = { ...scored[0], q }; break; }
    }
    if (best) {
      resolved[key] = {
        name: n.name, lng: best.lng, lat: best.lat,
        source: `nominatim ${best.kind}`, query: best.q,
        kmFromTrekCentre: Number(best.d.toFixed(1)),
        display: String(best.display ?? "").slice(0, 90),
      };
    } else stillMissing.push(n.name);
    if ((i + 1) % 20 === 0) console.log(`  ${i + 1}/${todo.length} — ${Object.keys(resolved).length} resolved`);
  }

  writeFileSync(RESOLVED, JSON.stringify({ resolved, unresolved: stillMissing }, null, 1));
  console.log(`\nresolved ${Object.keys(resolved).length} / ${names.length}`);
  console.log(`still unresolved (${stillMissing.length}): ${stillMissing.join(", ")}`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
