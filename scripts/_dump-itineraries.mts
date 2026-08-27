/**
 * Single-pass dump of every trek itinerary to JSON, plus a classification of
 * each day's description. Everything downstream works from the file, so the
 * database is touched exactly once.
 */
import "dotenv/config";
import { writeFileSync } from "node:fs";
import { prisma } from "../lib/prisma";

const OUT = process.argv[2] ?? "/tmp/itineraries.json";

const STOP = new Set([
  "Day","Trek","Trekking","Drive","Fly","Flight","Hike","Walk","Arrival","Arrive",
  "Departure","Depart","Final","Early","Morning","Afternoon","Evening","Rest",
  "Acclimatization","Acclimatisation","Exploration","Explore","Visit","Return",
  "Back","Trip","Tour","Sightseeing","Preparation","From","To","And","Via","In","At",
  "Or","The","Of","Nepal","Transfer","Hotel","Camp","Base","Pass","Valley","Village",
  "Lake","Hill","Peak","Danda","Kharka","Gompa","Bazar","Bazaar","Himal","Ri","La",
  "Free","Over","Toward","Towards","Your","Cross","Crossing","Descend","Continue",
  "Begin","Start","Today","International","Airport","Night","Overnight","Stay",
]);

function places(title: string): string[] {
  const out = new Set<string>();
  for (const raw of title.replace(/\([^)]*\)/g, " ").split(/[^A-Za-z]+/)) {
    if (raw.length < 4 || !/^[A-Z]/.test(raw) || STOP.has(raw)) continue;
    out.add(raw.toLowerCase());
  }
  return [...out];
}

function overlap(desc: string, title: string): number {
  const p = places(title);
  if (!p.length) return -1;
  const d = desc.toLowerCase();
  return p.filter((n) => d.includes(n)).length / p.length;
}

async function main() {
  const treks = await prisma.trek.findMany({
    select: {
      id: true, slug: true, title: true, duration: true, difficulty: true, region: true,
      itinerary: {
        orderBy: [{ dayNumber: "asc" }, { id: "asc" }],
        select: {
          id: true, dayNumber: true, title: true, description: true,
          elevation: true, accommodation: true, placeDescription: true,
        },
      },
    },
    orderBy: { slug: "asc" },
  });

  const out = treks.map((t) => {
    const days = t.itinerary.map((d, i) => {
      const text = (d.description ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
      const prevTitle = i > 0 ? t.itinerary[i - 1].title : "";
      return {
        id: d.id,
        index: i,
        dayNumber: d.dayNumber,
        title: d.title,
        elevation: d.elevation,
        accommodation: d.accommodation,
        html: d.description ?? "",
        text,
        len: text.length,
        words: text ? text.split(/\s+/).length : 0,
        matchOwn: overlap(text, d.title),
        matchPrev: prevTitle ? overlap(text, prevTitle) : -1,
      };
    });

    // Descriptions repeated verbatim on more than one day.
    const counts = new Map<string, number>();
    for (const d of days) if (d.text) counts.set(d.text, (counts.get(d.text) ?? 0) + 1);

    return {
      id: t.id, slug: t.slug, title: t.title, duration: t.duration,
      difficulty: t.difficulty, region: t.region,
      days: days.map((d) => ({ ...d, duplicated: (counts.get(d.text) ?? 0) > 1 })),
    };
  });

  writeFileSync(OUT, JSON.stringify(out, null, 1));

  const all = out.flatMap((t) => t.days);
  const dup = all.filter((d) => d.duplicated).length;
  const drift = all.filter((d) => d.matchPrev > d.matchOwn && d.matchPrev >= 0.5 && d.matchOwn < 0.5).length;
  console.log(`Wrote ${OUT}`);
  console.log(`treks=${out.length}  days=${all.length}  duplicated=${dup}  drifted=${drift}`);
  console.log("\nDescription length distribution (characters):");
  for (const [label, lo, hi] of [["<200", 0, 199], ["200-399", 200, 399], ["400-599", 400, 599], ["600-899", 600, 899], ["900+", 900, 1e9]] as const) {
    const n = all.filter((d) => d.len >= lo && d.len <= hi).length;
    console.log(`  ${String(label).padEnd(8)} ${String(n).padStart(3)}  ${"#".repeat(Math.round(n / 4))}`);
  }
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
