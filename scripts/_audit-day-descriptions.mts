/**
 * Detect itinerary days whose description belongs to a different day.
 *
 * Method: pull the place names out of each day's title, then score how many of
 * them the description mentions. If a day's description matches the PREVIOUS
 * day's title better than its own, the descriptions have drifted out of step
 * with the titles.
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const STOP = new Set([
  "Day", "Trek", "Trekking", "Drive", "Fly", "Flight", "Hike", "Walk", "Arrival", "Arrive",
  "Departure", "Depart", "Final", "Early", "Morning", "Afternoon", "Evening", "Rest",
  "Acclimatization", "Acclimatisation", "Exploration", "Explore", "Visit", "Return",
  "Back", "Trip", "Tour", "Sightseeing", "Preparation", "From", "To", "And", "Via",
  "In", "At", "Or", "The", "Of", "Nepal", "Transfer", "Hotel", "Camp", "Base", "Pass",
  "Valley", "Village", "Lake", "Hill", "Peak", "Danda", "Kharka", "Gompa", "Bazar",
  "Bazaar", "Himal", "Ri", "La", "Free", "Over", "Toward", "Towards", "Your", "Cross",
  "Crossing", "Descend", "Continue", "Begin", "Start", "Today", "International", "Airport",
]);

/** Place-name-ish tokens from a title. */
function places(title: string): Set<string> {
  const out = new Set<string>();
  for (const raw of title.replace(/\([^)]*\)/g, " ").split(/[^A-Za-z]+/)) {
    if (raw.length < 4) continue;
    if (!/^[A-Z]/.test(raw)) continue;
    if (STOP.has(raw)) continue;
    out.add(raw.toLowerCase());
  }
  return out;
}

function score(desc: string, title: string): number {
  const p = places(title);
  if (!p.size) return -1; // no signal
  const d = desc.toLowerCase();
  let hits = 0;
  for (const name of p) if (d.includes(name)) hits++;
  return hits / p.size;
}

async function main() {
  const treks = await prisma.trek.findMany({
    include: { itinerary: { orderBy: [{ dayNumber: "asc" }, { id: "asc" }] } },
    orderBy: { slug: "asc" },
  });

  const report: { slug: string; drifted: number; total: number; detail: string[] }[] = [];

  for (const t of treks) {
    const days = t.itinerary;
    const detail: string[] = [];
    let drifted = 0;

    for (let i = 0; i < days.length; i++) {
      const desc = (days[i].description ?? "").replace(/<[^>]*>/g, " ");
      if (desc.trim().length < 40) continue;

      const own = score(desc, days[i].title);
      const prev = i > 0 ? score(desc, days[i - 1].title) : -1;
      if (own < 0) continue;

      // Description matches the previous day's title clearly better than its own.
      if (prev > own && prev >= 0.5 && own < 0.5) {
        drifted++;
        detail.push(
          `      entry ${i + 1} (D${days[i].dayNumber}) own=${own.toFixed(2)} prev=${prev.toFixed(2)}\n` +
          `        title: ${days[i].title}\n` +
          `        desc:  ${desc.trim().slice(0, 110)}…`,
        );
      }
    }

    if (drifted) report.push({ slug: t.slug, drifted, total: days.length, detail });
  }

  report.sort((a, b) => b.drifted - a.drifted);
  console.log(`=== TREKS WHERE DESCRIPTIONS DRIFTED OFF THEIR TITLES (${report.length}) ===\n`);
  for (const r of report) {
    console.log(`  ${r.slug}  —  ${r.drifted} of ${r.total} days`);
    r.detail.slice(0, 3).forEach((d) => console.log(d));
    if (r.detail.length > 3) console.log(`      … and ${r.detail.length - 3} more`);
    console.log("");
  }
  const totalDrift = report.reduce((n, r) => n + r.drifted, 0);
  console.log(`Total drifted days: ${totalDrift} across ${report.length} treks.`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
