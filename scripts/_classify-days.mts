/* Classify every itinerary day from the JSON dump. No database access. */
import { readFileSync } from "node:fs";

const FILE = process.argv[2];
const DETAILED_MIN = 400; // characters of plain text

type Day = {
  id: string; index: number; dayNumber: number; title: string; text: string;
  len: number; words: number; matchOwn: number; matchPrev: number; duplicated: boolean;
};
type Trek = { slug: string; title: string; duration: number; days: Day[] };

const treks: Trek[] = JSON.parse(readFileSync(FILE, "utf8"));

function verdict(d: Day): "BROKEN" | "THIN" | "OK" {
  if (d.duplicated) return "BROKEN";
  if (d.matchPrev > d.matchOwn && d.matchPrev >= 0.5 && d.matchOwn < 0.5) return "BROKEN";
  if (d.len < DETAILED_MIN) return "THIN";
  return "OK";
}

const rows = treks.map((t) => {
  const v = t.days.map(verdict);
  return {
    slug: t.slug,
    days: t.days.length,
    broken: v.filter((x) => x === "BROKEN").length,
    thin: v.filter((x) => x === "THIN").length,
    ok: v.filter((x) => x === "OK").length,
    minLen: Math.min(...t.days.map((d) => d.len)),
    medLen: t.days.map((d) => d.len).sort((a, b) => a - b)[Math.floor(t.days.length / 2)],
  };
});

rows.sort((a, b) => (b.broken + b.thin) - (a.broken + a.thin));

console.log("slug".padEnd(58) + "days broken thin  ok   min  median");
console.log("-".repeat(96));
for (const r of rows) {
  const flag = r.broken ? " <== has misplaced text" : "";
  console.log(
    r.slug.padEnd(58) +
      String(r.days).padStart(4) + String(r.broken).padStart(7) +
      String(r.thin).padStart(5) + String(r.ok).padStart(5) +
      String(r.minLen).padStart(6) + String(r.medLen).padStart(8) + flag,
  );
}

const tot = rows.reduce((a, r) => ({
  days: a.days + r.days, broken: a.broken + r.broken, thin: a.thin + r.thin, ok: a.ok + r.ok,
}), { days: 0, broken: 0, thin: 0, ok: 0 });

console.log("-".repeat(96));
console.log(`TOTAL`.padEnd(58) + String(tot.days).padStart(4) + String(tot.broken).padStart(7) +
  String(tot.thin).padStart(5) + String(tot.ok).padStart(5));
console.log(`\nNeeds rewriting: ${tot.broken + tot.thin} of ${tot.days} days ` +
  `(${tot.broken} misplaced, ${tot.thin} under ${DETAILED_MIN} chars). Leave alone: ${tot.ok}.`);
console.log(`Treks fully OK: ${rows.filter((r) => !r.broken && !r.thin).length} of ${rows.length}`);
