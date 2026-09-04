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
import { rejected } from "./rejects";
import { HERO_OVERRIDE } from "./heroes";

const CAT = process.argv[2] ?? "/tmp/commons-cat-candidates.json";
const TEXT = process.argv[3] ?? "/tmp/commons-candidates.json";
const OUT = process.argv[4] ?? "/tmp/image-plan.json";
/** --slugs=<file> replans exactly those products, images or not. */
const SLUG_FILE = process.argv.find((a) => a.startsWith("--slugs="))?.slice(8);
const ONLY = SLUG_FILE
  ? readFileSync(SLUG_FILE, "utf8").split("\n").map((l) => l.trim()).filter(Boolean)
  : null;

/** Astronaut and aerial photography — of the right place, but not a trek photo. */
/** Taken from orbit. Never right for any product, flight tours included. */
const FROM_SPACE = /\b(?:ISS\d|STS\d)|\b(?:astronaut|satellite|orbit(?:al)?)\b|from space|space station/i;
/** Taken from an aircraft — wrong for a trek, but the product on a flight. */
const FROM_AIRCRAFT = /\baerial\b|from the air|from aeroplane|from airplane/i;

/** Products sold from the air — for these the aircraft shot IS the product. */
const FROM_THE_AIR = /helicopter|flight|paraglid|ultra-light|zipline|zip-flyer/;
const GENERIC = /\b(durbar|thamel|sadhu|saddhu|patan|bhaktapur|boudha|swayambhu|pashupati|street|market day|festival|kathmandu valley|airport terminal|hotel room|interior|museum|portrait|selfie|group photo|people of|boy of|girl of|woman of|man of|kitchen|food|momo|dal bhat|prayer wheel close)\b/i;
const SCENIC = /\b(mount|mountain|himal|peak|view|panorama|valley|trail|trek|glacier|lake|pass|summit|range|landscape|village|monastery|gompa|river|forest|snow|camp|yak|bridge|terrace|sunrise|sunset|ridge|meadow|massif|face|north|south|from)\b/i;

// A tour of the Kathmandu Valley wants precisely what GENERIC rejects: the
// durbar squares, Boudha, Patan, Bhaktapur. Only frames that show no place at
// all are unwanted here, and the subject list widens to temples and wildlife.
const GENERIC_TOUR = /\b(portrait|selfie|group photo|peoples? wearing|people of|boy of|girl of|woman of|man of|hotel room|interior|airport terminal|coat of arms|logo|map of|poster|stamp|banknote|signature|plaque|book cover|manuscript)\b/i;
const SCENIC_TOUR = /\b(temple|square|stupa|pagoda|palace|courtyard|shrine|monastery|gompa|statue|carving|window|street|festival|view|panorama|sunrise|sunset|lake|river|valley|village|jungle|forest|grassland|rhino|rhinoceros|tiger|elephant|deer|crocodile|gharial|bird|paraglid|rafting|boat|cable car|mountain|himal|peak|from)\b/i;

/** Words that are pure itinerary boilerplate on a trek but real subjects on a
 * tour — a Kathmandu day tour is about Kathmandu. */
const TOUR_KEEP = new Set(["Kathmandu","Pokhara","Village","Valley","Lake","Hill","Peak","Himal","Sunrise","Sunset","Danda","Gompa","Bazar","Bazaar","Nepal"]);

const NOISE = new Set(["Day","Trek","Trekking","Drive","Fly","Flight","Hike","Walk","Arrival","Arrive","Departure","Depart","Final","Early","Morning","Afternoon","Evening","Rest","Acclimatization","Acclimatisation","Exploration","Explore","Visit","Return","Back","Trip","Tour","Sightseeing","Preparation","From","To","And","Via","In","At","Or","The","Of","Transfer","Hotel","Free","Over","Toward","Towards","Your","Cross","Crossing","Descend","Continue","Begin","Start","Today","Night","Overnight","Stay","Nepal","Sunrise","Sunset","Tribhuvan","International","Airport","Jeep","Bus","Car","Village","Camp","Base","Lake","Pass","Danda","Kharka","Gompa","Bazar","Bazaar","Himal","Hill","Peak","Valley","Kathmandu","Pokhara"]);

async function main() {
  const cat = JSON.parse(readFileSync(CAT, "utf8"));
  const textArr = JSON.parse(readFileSync(TEXT, "utf8"));
  const text: Record<string, any[]> = {};
  for (const m of textArr) text[m.slug] = m.candidates;

  const treks = await prisma.trek.findMany({
    where: ONLY
      ? { slug: { in: ONLY } }
      : { OR: [{ heroImage: null }, { galleryImages: { none: {} } }] },
    select: {
      id: true, slug: true, title: true, region: true,
      category: { select: { slug: true } },
      itinerary: { orderBy: { dayNumber: "asc" }, select: { title: true } },
    },
    orderBy: { slug: "asc" },
  });

  const plan: any[] = [];
  const usedHeroes = new Set<string>();
  const entry = (t: any, picked: any[]) => ({
    id: t.id, slug: t.slug, title: t.title,
    shortfall: Math.max(0, 7 - picked.length),
    images: picked.slice(0, 7).map((c: any, i: number) => ({
      role: i === 0 ? "hero" : "gallery",
      file: c.file, url: c.url, width: c.width, height: c.height,
      licence: c.licence, artist: c.artist, source: c.source,
      descriptionUrl: c.descriptionUrl,
      hits: c.hits, score: c.score,
    })),
  });
  for (const t of treks) {
    const isTour = t.category?.slug === "tours";
    const places = new Set<string>();
    // The tour title names the subject as reliably as the day titles do
    // ("Bhaktapur Day Tour"), and a one-day tour has only one day title.
    const sources = isTour ? [{ title: t.title }, ...t.itinerary] : t.itinerary;
    for (const d of sources) {
      for (const w of d.title.replace(/\([^)]*\)/g, " ").split(/[^A-Za-z']+/)) {
        if (w.length <= 3 || !/^[A-Z]/.test(w)) continue;
        if (NOISE.has(w) && !(isTour && TOUR_KEEP.has(w))) continue;
        places.add(w.toLowerCase());
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
        if (rejected(c.file, t.slug) || FROM_SPACE.test(c.file)) return false;
        return FROM_THE_AIR.test(t.slug) || !FROM_AIRCRAFT.test(c.file);
      })
      .map((c) => {
        const f = c.file.toLowerCase();
        const hits = [...places].filter((pl) => f.includes(pl));
        let score = hits.length * 12;
        if (c.source === "category") score += 6;
        if ((isTour ? SCENIC_TOUR : SCENIC).test(f)) score += 3;
        if ((isTour ? GENERIC_TOUR : GENERIC).test(f)) score -= 20;
        if (c.width >= 3000) score += 2; else if (c.width >= 2000) score += 1;
        if (c.width / c.height >= 1.4) score += 2;
        return { ...c, score, hits };
      })
      .filter((c) => c.score > 0)
      .sort((a, b) => b.score - a.score);

    // "Cable Car in Chandragiri Hills, Nepal 01..04" are four frames of one
    // scene. They caption identically, so the gallery reads as a mistake.
    const stem = (f: string) =>
      f.replace(/\.[a-z0-9]+$/i, "").toLowerCase().replace(/[^a-z]+/g, " ").trim();
    const stems = new Map<string, number>();

    // Spread the set across different places rather than six shots of one lake.
    const perPlace = new Map<string, number>();
    const picked: any[] = [];
    for (const c of scored) {
      const key = c.hits[0] ?? c.category ?? "_";
      const n = perPlace.get(key) ?? 0;
      if (n >= 2 && picked.length < 7) continue;
      if (stems.has(stem(c.file))) continue;
      perPlace.set(key, n + 1);
      stems.set(stem(c.file), 1);
      picked.push(c);
      if (picked.length >= 7) break;
    }
    // Only if that leaves the gallery short do near-duplicates come back, and
    // then no more than two frames of any one scene.
    for (const c of scored) {
      if (picked.length >= 7) break;
      if (picked.some((x) => x.file === c.file)) continue;
      const n = stems.get(stem(c.file)) ?? 0;
      if (n >= 2) continue;
      stems.set(stem(c.file), n + 1);
      picked.push(c);
    }

    // A reviewed hero wins outright — it was chosen by looking at the picture.
    const wanted = HERO_OVERRIDE[t.slug];
    if (wanted) {
      const at = picked.findIndex((c) => c.file === wanted);
      if (at > 0) picked.unshift(...picked.splice(at, 1));
      else if (at < 0) {
        const c = scored.find((x) => x.file === wanted);
        if (c) picked.unshift(c);
        else console.log(`  !! ${t.slug}: hero override "${wanted}" is not a candidate`);
      }
      usedHeroes.add(picked[0].file);
      plan.push(entry(t, picked));
      continue;
    }

    // A hero already used by another trek is demoted into the gallery, so no two
    // trek cards on a "Similar Treks" row show the same photograph.
    const heroIdx = picked.findIndex((c) => !usedHeroes.has(c.file));
    if (heroIdx > 0) picked.unshift(...picked.splice(heroIdx, 1));
    if (picked[0]) usedHeroes.add(picked[0].file);

    plan.push(entry(t, picked));
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
