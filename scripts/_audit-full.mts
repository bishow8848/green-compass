/** One-pass audit: itinerary heading elevations, description depth, hero, gallery, similar treks, SEO. */
import "dotenv/config";
import { writeFileSync } from "node:fs";
import { prisma } from "../lib/prisma";

const OUT = process.argv[2] ?? "/tmp/audit-full.json";
const plain = (h?: string | null) => (h ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

/** Count place-like tokens in a title (capitalised words outside parens). */
const STOP = new Set(["Day","Trek","Trekking","Drive","Fly","Flight","Hike","Walk","Arrival","Arrive","Departure","Depart","Final","Early","Morning","Afternoon","Evening","Rest","Acclimatization","Acclimatisation","Exploration","Explore","Visit","Return","Back","Trip","Tour","Sightseeing","Preparation","From","To","And","Via","In","At","Or","The","Of","Nepal","Transfer","Hotel","Free","Over","Toward","Towards","Your","Cross","Crossing","Descend","Continue","Begin","Start","Today","International","Airport","Night","Overnight","Stay","Then","After","Onward","Farewell","Home","Optional","Full","Half","Side","Same","Next"]);

function headingStats(title: string) {
  // strip parenthetical groups, count remaining capitalised place tokens
  const noParen = title.replace(/\([^)]*\)/g, "@");
  const tokens: string[] = [];
  for (const raw of noParen.split(/[^A-Za-z'’-]+/)) {
    if (raw.length < 3 || !/^[A-Z]/.test(raw) || STOP.has(raw)) continue;
    tokens.push(raw);
  }
  const elevs = (title.match(/\(\s*[\d,]{3,6}\s*m\s*[^)]*\)|\d{3,5}\s*m\b/gi) ?? []).length;
  return { places: tokens.length, elevs, tokens };
}

async function main() {
  const treks = await prisma.trek.findMany({
    include: {
      itinerary: { orderBy: [{ dayNumber: "asc" }, { id: "asc" }] },
      galleryImages: true,
      faqs: true,
      category: { select: { slug: true, name: true } },
    },
    orderBy: { slug: "asc" },
  });

  const rows = treks.map((t) => {
    const days = t.itinerary.map((d) => {
      const txt = plain(d.description);
      const hs = headingStats(d.title);
      return {
        id: d.id, dayNumber: d.dayNumber, title: d.title, elevation: d.elevation,
        accommodation: d.accommodation, placeDescription: d.placeDescription,
        words: txt ? txt.split(" ").length : 0, chars: txt.length,
        headPlaces: hs.places, headElevs: hs.elevs, headTokens: hs.tokens,
        needsElev: hs.places > hs.elevs,
        html: d.description ?? "",
      };
    });
    let similar: string[] = [];
    try { similar = JSON.parse(t.similarTrekIds ?? "[]"); } catch {}
    return {
      id: t.id, slug: t.slug, title: t.title, status: t.status,
      category: t.category?.slug ?? null, duration: t.duration, difficulty: t.difficulty,
      region: t.region, maxAltitude: t.maxAltitude,
      heroImage: t.heroImage, gallery: t.galleryImages.map((g) => ({ id: g.id, imageId: g.imageId, alt: g.alt, caption: g.caption })),
      similarCount: similar.length, similar,
      metaTitle: t.metaTitle, metaDescription: t.metaDescription,
      keywords: t.keywords, tags: t.tags,
      overviewWords: plain(t.overview).split(" ").filter(Boolean).length,
      faqCount: t.faqs.length,
      dayCount: days.length,
      daysNeedingElev: days.filter((d) => d.needsElev).length,
      thinDays: days.filter((d) => d.words < 120).length,
      minWords: Math.min(...days.map((d) => d.words)),
      avgWords: Math.round(days.reduce((n, d) => n + d.words, 0) / (days.length || 1)),
      days,
    };
  });

  writeFileSync(OUT, JSON.stringify(rows, null, 1));

  console.log(`treks=${rows.length}`);
  console.log("\nslug".padEnd(62) + "days  elevMissing  thin(<120w)  avgW  hero  gal  similar  meta");
  for (const r of rows) {
    console.log(
      r.slug.padEnd(62) +
      String(r.dayCount).padStart(4) +
      String(r.daysNeedingElev).padStart(13) +
      String(r.thinDays).padStart(13) +
      String(r.avgWords).padStart(6) +
      (r.heroImage ? "  yes" : "   NO") +
      String(r.gallery.length).padStart(5) +
      String(r.similarCount).padStart(9) +
      (r.metaTitle ? "   ok" : "   NO"),
    );
  }
  const tot = (f: (r: typeof rows[0]) => number) => rows.reduce((n, r) => n + f(r), 0);
  console.log(`\nTOTAL days=${tot(r=>r.dayCount)} elevMissing=${tot(r=>r.daysNeedingElev)} thin=${tot(r=>r.thinDays)} noHero=${rows.filter(r=>!r.heroImage).length} galleryLt6=${rows.filter(r=>r.gallery.length<6).length} noSimilar=${rows.filter(r=>r.similarCount===0).length}`);
  console.log(`Wrote ${OUT}`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
