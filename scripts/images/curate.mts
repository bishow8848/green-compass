/**
 * Stage 2: rank the Commons candidates for each trek and shortlist seven —
 * one hero plus six gallery images.
 *
 * Ranking is driven by how specifically a filename names a place that actually
 * appears in that trek's itinerary. Generic Kathmandu street photography and
 * shots from the Tibetan side of the border are pushed down; wide mountain
 * landscape from the trek's own valleys is pushed up.
 */
import "dotenv/config";
import { readFileSync, writeFileSync } from "node:fs";
import { prisma } from "../../lib/prisma";

const IN = process.argv[2] ?? "/tmp/commons-candidates.json";
const OUT = process.argv[3] ?? "/tmp/commons-shortlist.json";

/** Never usable regardless of score. */
const REJECT = /\b(tibet|china|chinese|rongbuk|kailash|india|bhutan|pakistan|k2|karakoram|aerial map|from space|satellite)\b/i;
/** Generic filler — allowed, but only after everything specific is exhausted. */
const GENERIC = /\b(durbar square|thamel|saddhu|sadhu|patan|bhaktapur|boudha|swayambhu|pashupati|kathmandu valley|street|market|festival|temple of|portrait)\b/i;
/** Real landscape signal. */
const SCENIC = /\b(mountain|himal|peak|view|panorama|valley|trail|trek|glacier|lake|pass|summit|range|landscape|village|monastery|gompa|river|forest|snow|camp|yak|bridge|terrace|sunrise|sunset|ridge|meadow)\b/i;

const NOISE = new Set(["Day","Trek","Trekking","Drive","Fly","Flight","Hike","Walk","Arrival","Arrive","Departure","Depart","Final","Early","Morning","Afternoon","Evening","Rest","Acclimatization","Acclimatisation","Exploration","Explore","Visit","Return","Back","Trip","Tour","Sightseeing","Preparation","From","To","And","Via","In","At","Or","The","Of","Transfer","Hotel","Free","Over","Toward","Towards","Your","Cross","Crossing","Descend","Continue","Begin","Start","Today","Night","Overnight","Stay","Nepal","Sunrise","Sunset","Tribhuvan","International","Airport","Jeep","Bus","Car","Village","Camp","Base","Lake","Pass","Danda","Kharka","Gompa","Bazar","Bazaar","Himal","Hill","Peak","Valley"]);

async function main() {
  const manifest = JSON.parse(readFileSync(IN, "utf8"));
  const treks = await prisma.trek.findMany({
    select: { slug: true, itinerary: { orderBy: { dayNumber: "asc" }, select: { title: true } } },
  });
  const placesBySlug = new Map<string, string[]>();
  for (const t of treks) {
    const set = new Set<string>();
    for (const d of t.itinerary) {
      for (const w of d.title.replace(/\([^)]*\)/g, " ").split(/[^A-Za-z']+/)) {
        if (w.length > 3 && /^[A-Z]/.test(w) && !NOISE.has(w)) set.add(w.toLowerCase());
      }
    }
    placesBySlug.set(t.slug, [...set]);
  }

  const out: any[] = [];
  for (const m of manifest) {
    const places = placesBySlug.get(m.slug) ?? [];
    const scored = m.candidates
      .filter((c: any) => !REJECT.test(c.file))
      .map((c: any) => {
        const f = c.file.toLowerCase();
        const hits = places.filter((pl) => f.includes(pl));
        let score = hits.length * 10;                    // names a place on THIS trek
        if (SCENIC.test(f)) score += 4;
        if (GENERIC.test(f)) score -= 12;
        if (c.width >= 3000) score += 2;
        else if (c.width >= 2000) score += 1;
        if (c.width / c.height >= 1.4) score += 2;       // crops cleanly to 16:9 and 4:3
        return { ...c, score, hits };
      })
      .sort((a: any, b: any) => b.score - a.score);

    // Keep the set varied: at most two images matching the same place.
    const perPlace = new Map<string, number>();
    const picked: any[] = [];
    for (const c of scored) {
      const key = c.hits[0] ?? "_generic";
      const n = perPlace.get(key) ?? 0;
      if (n >= 2) continue;
      perPlace.set(key, n + 1);
      picked.push(c);
      if (picked.length >= 7) break;
    }
    for (const c of scored) {                            // top up if variety capped us short
      if (picked.length >= 7) break;
      if (!picked.includes(c)) picked.push(c);
    }

    out.push({
      slug: m.slug, title: m.title, id: m.id,
      hero: picked[0], gallery: picked.slice(1, 7),
      shortfall: Math.max(0, 7 - picked.length),
    });
  }

  writeFileSync(OUT, JSON.stringify(out, null, 1));
  for (const t of out) {
    console.log(`\n### ${t.slug}${t.shortfall ? `   !! ${t.shortfall} SHORT` : ""}`);
    console.log(`  HERO  [${t.hero?.score}] ${t.hero?.file}`);
    for (const g of t.gallery) console.log(`   gal  [${g.score}] ${g.file}`);
  }
  console.log(`\nWrote ${OUT}. Short: ${out.filter((t) => t.shortfall).map((t) => t.slug).join(", ") || "none"}`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
