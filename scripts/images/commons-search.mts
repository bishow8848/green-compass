/**
 * Stage 1 of the image pipeline: find candidate photos on Wikimedia Commons.
 *
 * For every trek that still has no hero/gallery, search Commons for the place
 * names that actually appear in its itinerary, then keep the results that look
 * like usable landscape photography. Writes a manifest; downloads nothing.
 *
 *   npx tsx scripts/images/commons-search.mts [out.json]
 */
import "dotenv/config";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { prisma } from "../../lib/prisma";

const OUT = process.argv[2] ?? "/tmp/commons-candidates.json";
const API = "https://commons.wikimedia.org/w/api.php";
const UA = "MardiTreks-ContentBot/1.0 (https://marditreks.com; contact via site) node-fetch";

/** Capitalised words in titles that are never a searchable place. */
const NOISE = new Set(["Day","Trek","Trekking","Drive","Fly","Flight","Hike","Walk","Arrival","Arrive","Departure","Depart","Final","Early","Morning","Afternoon","Evening","Rest","Acclimatization","Acclimatisation","Exploration","Explore","Visit","Return","Back","Trip","Tour","Sightseeing","Preparation","From","To","And","Via","In","At","Or","The","Of","Transfer","Hotel","Free","Over","Toward","Towards","Your","Cross","Crossing","Descend","Continue","Begin","Start","Today","Night","Overnight","Stay","Then","After","Onward","Farewell","Home","Optional","Full","Half","Side","Same","Next","Jeep","Bus","Car","Nepal","Sunrise","Sunset","Tribhuvan","International","Airport","Springs","Hot","Village","Trip","Excursion","Board","Take","Enjoy","Reach","Head","Meet","Prepare","Briefing","Welcome","Leisure","With","For","On","By","Up","Down","Along","Through","Into","Onto","Between","Around","Near","Beyond","Past","Before","Until","While","During"]);

/** Filenames that are almost never a usable trek photo. */
const BAD_FILE = /\b(map|karte|carte|topograph|diagram|chart|logo|flag|coat of arms|seal|stamp|banner|icon|svg|plot|graph|scan|document|poster|sign|signboard|book|cover|portrait of|passport|licence|license|screenshot|panorama of the world|locator)\b/i;
const GOOD_HINT = /\b(mountain|himal|peak|view|valley|trail|trek|village|lake|glacier|pass|summit|range|landscape|panorama|monastery|gompa|stupa|river|forest|snow|camp|base camp|yak|bridge|terrace|sunrise|sunset)\b/i;

async function api(params: Record<string, string>): Promise<any> {
  const qs = new URLSearchParams({ format: "json", origin: "*", ...params });
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const r = await fetch(`${API}?${qs}`, { headers: { "User-Agent": UA } });
      if (r.status === 429 || r.status >= 500) { await sleep(1500 * (attempt + 1)); continue; }
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } catch (e) {
      if (attempt === 3) throw e;
      await sleep(1200 * (attempt + 1));
    }
  }
}
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Search Commons for files matching a term, returning enriched image metadata. */
async function searchImages(term: string, limit = 12) {
  const s = await api({
    action: "query", list: "search", srsearch: `${term} filetype:bitmap`,
    srnamespace: "6", srlimit: String(limit),
  });
  const titles: string[] = (s?.query?.search ?? []).map((x: any) => x.title);
  if (!titles.length) return [];

  const info = await api({
    action: "query", titles: titles.join("|"), prop: "imageinfo",
    iiprop: "url|size|mime|extmetadata",
    iiurlwidth: "2000",
  });
  const pages: any[] = Object.values(info?.query?.pages ?? {});
  const out: any[] = [];
  for (const p of pages) {
    const ii = p.imageinfo?.[0];
    if (!ii) continue;
    if (!/^image\/(jpeg|png|webp)$/.test(ii.mime ?? "")) continue;
    if (ii.width < 1200 || ii.height < 700) continue;          // needs to survive a 1920-wide hero
    if (ii.width / ii.height < 1.15) continue;                 // portrait crops badly in 4:3 / 16:9 slots
    const name = String(p.title).replace(/^File:/, "");
    if (BAD_FILE.test(name)) continue;
    const em = ii.extmetadata ?? {};
    const strip = (v: any) => (v?.value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    out.push({
      file: name,
      term,
      width: ii.width,
      height: ii.height,
      url: ii.url,
      thumb: ii.thumburl,
      descriptionUrl: ii.descriptionurl,
      licence: strip(em.LicenseShortName),
      licenceUrl: strip(em.LicenseUrl),
      artist: strip(em.Artist).slice(0, 120),
      credit: strip(em.Credit).slice(0, 120),
      caption: strip(em.ImageDescription).slice(0, 300),
      score: (GOOD_HINT.test(name) ? 2 : 0) + (ii.width >= 2400 ? 1 : 0),
    });
  }
  return out;
}

const NOISE_RE = new RegExp(`\\b(${[...NOISE].join("|")})\\b`, "g");

/** Place phrases mentioned across a trek's itinerary titles, most frequent first. */
function placesOf(titles: string[]): string[] {
  const freq = new Map<string, number>();
  for (const raw of titles) {
    const t = raw.replace(/^\s*Day\s+\d+\s*[:–-]\s*/i, "").replace(/\([^)]*\)/g, " ");
    for (const seg of t.split(/\s+(?:from|to|and|via|in|at|or|then|back)\s+|[,/–—-]/i)) {
      const cleaned = seg.replace(NOISE_RE, " ").replace(/[^A-Za-z' ]/g, " ").replace(/\s+/g, " ").trim();
      if (cleaned.length < 4) continue;
      const words = cleaned.split(" ").filter((w) => /^[A-Z]/.test(w) && w.length > 2);
      if (!words.length) continue;
      const phrase = words.join(" ");
      freq.set(phrase, (freq.get(phrase) ?? 0) + 1);
    }
  }
  return [...freq.entries()].sort((a, b) => b[1] - a[1]).map(([p]) => p);
}

async function main() {
  const treks = await prisma.trek.findMany({
    where: { OR: [{ heroImage: null }, { galleryImages: { none: {} } }] },
    select: {
      id: true, slug: true, title: true, region: true,
      heroImage: true,
      itinerary: { orderBy: { dayNumber: "asc" }, select: { title: true } },
      galleryImages: { select: { id: true } },
    },
    orderBy: { slug: "asc" },
  });

  // Resume: keep whatever a previous run already collected.
  const manifest: any[] = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
  const done = new Set(manifest.map((m: any) => m.slug));
  console.log(`Treks needing images: ${treks.length} (${done.size} already collected)\n`);

  for (const t of treks) {
    if (done.has(t.slug)) continue;
    const places = placesOf(t.itinerary.map((d) => d.title));
    // Trek title first (best single shot at a hero), then the distinctive places.
    const terms = [
      t.title.replace(/\btrek(king)?\b/gi, "").replace(/\bfrom Pokhara\b/gi, "").trim(),
      ...places.slice(0, 10).map((p) => `${p} Nepal`),
      t.region ? `${t.region} Nepal mountains` : "Nepal Himalaya trekking",
    ];

    const seen = new Set<string>();
    const found: any[] = [];
    for (const term of terms) {
      if (found.length >= 26) break;
      let res: any[] = [];
      try { res = await searchImages(term); }
      catch (e: any) { console.log(`   ! ${term}: ${e.message}`); }
      for (const r of res) {
        if (seen.has(r.file)) continue;
        seen.add(r.file);
        found.push(r);
      }
      await sleep(220);
    }
    found.sort((a, b) => b.score - a.score || b.width - a.width);
    manifest.push({
      id: t.id, slug: t.slug, title: t.title, region: t.region,
      hasHero: !!t.heroImage, galleryCount: t.galleryImages.length,
      terms, candidates: found,
    });
    console.log(`${t.slug.padEnd(58)} ${String(found.length).padStart(3)} candidates`);
    writeFileSync(OUT, JSON.stringify(manifest, null, 1));
  }

  console.log(`\nWrote ${OUT} — ${manifest.length} treks, ${manifest.reduce((n, m) => n + m.candidates.length, 0)} candidate images.`);
  const thin = manifest.filter((m) => m.candidates.length < 7);
  if (thin.length) console.log(`Under 7 candidates: ${thin.map((m) => `${m.slug}(${m.candidates.length})`).join(", ")}`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
