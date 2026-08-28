/**
 * Stage 3: choose the seven images each trek will actually use, and record the
 * alt text and caption for every one.
 *
 * Scoring rewards a filename that names a place on THIS trek's itinerary and
 * penalises town-and-temple filler. The output is a plan file that is reviewed
 * before anything is downloaded or uploaded.
 */
import "dotenv/config";
import { readFileSync, writeFileSync } from "node:fs";
import { prisma } from "../../lib/prisma";

const CAT = process.argv[2] ?? "/tmp/commons-cat-candidates.json";
const TEXT = process.argv[3] ?? "/tmp/commons-candidates.json";
const OUT = process.argv[4] ?? "/tmp/image-plan.json";

/** Astronaut and aerial photography — of the right place, but not a trek photo. */
const NOT_GROUND_LEVEL = /\b(?:ISS\d|STS\d)|\b(?:astronaut|satellite|orbit(?:al)?|aerial)\b|from space|from the air|space station/i;
const GENERIC = /\b(durbar|thamel|sadhu|saddhu|patan|bhaktapur|boudha|swayambhu|pashupati|street|market day|festival|kathmandu valley|airport terminal|hotel room|interior|museum|portrait|selfie|group photo|people of|boy of|girl of|woman of|man of|kitchen|food|momo|dal bhat|prayer wheel close)\b/i;
const SCENIC = /\b(mount|mountain|himal|peak|view|panorama|valley|trail|trek|glacier|lake|pass|summit|range|landscape|village|monastery|gompa|river|forest|snow|camp|yak|bridge|terrace|sunrise|sunset|ridge|meadow|massif|face|north|south|from)\b/i;

const NOISE = new Set(["Day","Trek","Trekking","Drive","Fly","Flight","Hike","Walk","Arrival","Arrive","Departure","Depart","Final","Early","Morning","Afternoon","Evening","Rest","Acclimatization","Acclimatisation","Exploration","Explore","Visit","Return","Back","Trip","Tour","Sightseeing","Preparation","From","To","And","Via","In","At","Or","The","Of","Transfer","Hotel","Free","Over","Toward","Towards","Your","Cross","Crossing","Descend","Continue","Begin","Start","Today","Night","Overnight","Stay","Nepal","Sunrise","Sunset","Tribhuvan","International","Airport","Jeep","Bus","Car","Village","Camp","Base","Lake","Pass","Danda","Kharka","Gompa","Bazar","Bazaar","Himal","Hill","Peak","Valley","Kathmandu","Pokhara"]);

async function main() {
  const cat = JSON.parse(readFileSync(CAT, "utf8"));
  const textArr = JSON.parse(readFileSync(TEXT, "utf8"));
  const text: Record<string, any[]> = {};
  for (const m of textArr) text[m.slug] = m.candidates;

  const treks = await prisma.trek.findMany({
    where: { OR: [{ heroImage: null }, { galleryImages: { none: {} } }] },
    select: {
      id: true, slug: true, title: true, region: true,
      itinerary: { orderBy: { dayNumber: "asc" }, select: { title: true } },
    },
    orderBy: { slug: "asc" },
  });

  const plan: any[] = [];
  const usedHeroes = new Set<string>();
  for (const t of treks) {
    const places = new Set<string>();
    for (const d of t.itinerary) {
      for (const w of d.title.replace(/\([^)]*\)/g, " ").split(/[^A-Za-z']+/)) {
        if (w.length > 3 && /^[A-Z]/.test(w) && !NOISE.has(w)) places.add(w.toLowerCase());
      }
    }

    // Category hits are trusted more than free-text hits.
    const pool = [
      ...(cat[t.slug] ?? []).map((c: any) => ({ ...c, source: "category" })),
      ...(text[t.slug] ?? []).map((c: any) => ({ ...c, source: "search" })),
    ];
    const seen = new Set<string>();
    const scored = pool
      .filter((c) => {
        if (seen.has(c.file)) return false;
        seen.add(c.file);
        return !NOT_GROUND_LEVEL.test(c.file);
      })
      .map((c) => {
        const f = c.file.toLowerCase();
        const hits = [...places].filter((pl) => f.includes(pl));
        let score = hits.length * 12;
        if (c.source === "category") score += 6;
        if (SCENIC.test(f)) score += 3;
        if (GENERIC.test(f)) score -= 20;
        if (c.width >= 3000) score += 2; else if (c.width >= 2000) score += 1;
        if (c.width / c.height >= 1.4) score += 2;
        return { ...c, score, hits };
      })
      .filter((c) => c.score > 0)
      .sort((a, b) => b.score - a.score);

    // Spread the set across different places rather than six shots of one lake.
    const perPlace = new Map<string, number>();
    const picked: any[] = [];
    for (const c of scored) {
      const key = c.hits[0] ?? c.category ?? "_";
      const n = perPlace.get(key) ?? 0;
      if (n >= 2 && picked.length < 7) continue;
      perPlace.set(key, n + 1);
      picked.push(c);
      if (picked.length >= 7) break;
    }
    for (const c of scored) {
      if (picked.length >= 7) break;
      if (!picked.some((x) => x.file === c.file)) picked.push(c);
    }

    // A hero already used by another trek is demoted into the gallery, so no two
    // trek cards on a "Similar Treks" row show the same photograph.
    const heroIdx = picked.findIndex((c) => !usedHeroes.has(c.file));
    if (heroIdx > 0) picked.unshift(...picked.splice(heroIdx, 1));
    if (picked[0]) usedHeroes.add(picked[0].file);

    plan.push({
      id: t.id, slug: t.slug, title: t.title,
      shortfall: Math.max(0, 7 - picked.length),
      images: picked.slice(0, 7).map((c, i) => ({
        role: i === 0 ? "hero" : "gallery",
        file: c.file, url: c.url, width: c.width, height: c.height,
        licence: c.licence, artist: c.artist, source: c.source,
        descriptionUrl: c.descriptionUrl,
        hits: c.hits, score: c.score,
      })),
    });
  }

  writeFileSync(OUT, JSON.stringify(plan, null, 1));
  for (const t of plan) {
    console.log(`\n### ${t.slug}${t.shortfall ? `   !! ${t.shortfall} SHORT` : ""}`);
    for (const im of t.images) console.log(`  ${im.role === "hero" ? "HERO" : " gal"} [${String(im.score).padStart(3)}] ${im.file}`);
  }
  const short = plan.filter((t) => t.shortfall);
  console.log(`\nWrote ${OUT}. ${plan.length} treks. Short: ${short.map((t) => `${t.slug}(${7 - t.shortfall})`).join(", ") || "none"}`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
