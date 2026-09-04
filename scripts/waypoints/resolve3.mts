/**
 * Stage 4: the names Nominatim cannot place.
 *
 * Herders' kharkas, pass phedis and small gompas are in OpenStreetMap as plain
 * nodes but rank too low for a Nominatim search to surface them. Overpass finds
 * them by exact name; the trek's own anchor then picks between duplicates.
 */
import "dotenv/config";
import { readFileSync, writeFileSync } from "node:fs";

const NEEDED = "scripts/waypoints/needed.json";
const RESOLVED = "scripts/waypoints/resolved.json";
const API = "https://overpass-api.de/api/interpreter";
const MAX_KM = 120;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const km = (a: [number, number], b: [number, number]) => {
  const R = 6371, r = Math.PI / 180;
  const dLat = (b[1] - a[1]) * r, dLng = (b[0] - a[0]) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * r) * Math.cos(b[1] * r) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
const KIND_RANK: Record<string, number> = {
  town: 5, village: 5, hamlet: 4, isolated_dwelling: 3, locality: 3,
  alpine_hut: 3, wilderness_hut: 3, camp_site: 3, guest_house: 2, saddle: 3, water: 3, peak: 1,
};
const esc = (s: string) => s.replace(/[\\"]/g, "\\$&");

async function overpass(names: string[]): Promise<Record<string, any[]>> {
  const clauses = names.map((n) => `nwr["name"~"^${esc(n)}$",i](26.3,80.0,30.5,88.4);`).join("\n  ");
  const q = `[out:json][timeout:180];\n(\n  ${clauses}\n);\nout center;`;
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const r = await fetch(API, { method: "POST", body: new URLSearchParams({ data: q }) });
      const body = await r.text();
      if (!body.trimStart().startsWith("{")) { await sleep(20_000 * (attempt + 1)); continue; }
      const j: any = JSON.parse(body);
      const out: Record<string, any[]> = {};
      for (const el of j.elements ?? []) {
        const nm = String(el.tags?.name ?? "").toLowerCase();
        const lat = el.lat ?? el.center?.lat, lng = el.lon ?? el.center?.lon;
        if (lat == null || lng == null) continue;
        (out[nm] ??= []).push({
          lng, lat,
          kind: el.tags.place ?? el.tags.tourism ?? el.tags.natural ?? (el.tags.mountain_pass ? "saddle" : "?"),
        });
      }
      return out;
    } catch { await sleep(15_000 * (attempt + 1)); }
  }
  throw new Error("overpass unavailable");
}

async function main() {
  const { names } = JSON.parse(readFileSync(NEEDED, "utf8"));
  const store = JSON.parse(readFileSync(RESOLVED, "utf8"));
  const resolved: Record<string, any> = store.resolved;
  const todo = names.filter((n: any) => !resolved[n.name.toLowerCase()]);
  console.log(`third pass over ${todo.length} names`);

  const stillMissing: string[] = [];
  for (let i = 0; i < todo.length; i += 12) {
    const batch = todo.slice(i, i + 12);
    let res: Record<string, any[]> = {};
    try { res = await overpass(batch.map((b: any) => b.name)); }
    catch (e: any) { console.log(`  batch failed: ${e.message}`); }
    for (const b of batch) {
      const anchor: [number, number] = b.anchors[0] ?? [84, 28.4];
      const scored = (res[b.name.toLowerCase()] ?? [])
        .map((c: any) => ({ ...c, d: km(anchor, [c.lng, c.lat]) }))
        .filter((c: any) => c.d <= MAX_KM)
        .sort((a: any, x: any) => (KIND_RANK[x.kind] ?? 0) - (KIND_RANK[a.kind] ?? 0) || a.d - x.d);
      if (scored.length) {
        const best = scored[0];
        resolved[b.name.toLowerCase()] = {
          name: b.name, lng: best.lng, lat: best.lat,
          source: `osm ${best.kind}`, kmFromTrekCentre: Number(best.d.toFixed(1)),
        };
      } else stillMissing.push(b.name);
    }
    console.log(`  ${Math.min(i + 12, todo.length)}/${todo.length} — ${Object.keys(resolved).length} resolved`);
    await sleep(6000);
  }

  writeFileSync(RESOLVED, JSON.stringify({ resolved, unresolved: stillMissing }, null, 1));
  console.log(`\nresolved ${Object.keys(resolved).length} / ${names.length}`);
  console.log(`still unresolved (${stillMissing.length}): ${stillMissing.join(", ")}`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
