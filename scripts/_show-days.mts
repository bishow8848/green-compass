/* Print days for given trek slugs from the JSON dump. --raw shows stored HTML. */
import { readFileSync } from "node:fs";

const args = process.argv.slice(2);
const FILE = args[0];
const RAW = args.includes("--raw");
const ONLY_BAD = args.includes("--bad");
const slugs = args.slice(1).filter((a) => !a.startsWith("--"));

type Day = { id: string; index: number; dayNumber: number; title: string; html: string; text: string; len: number; matchOwn: number; matchPrev: number; duplicated: boolean };
type Trek = { slug: string; title: string; duration: number; days: Day[] };

const treks: Trek[] = JSON.parse(readFileSync(FILE, "utf8"));
const bad = (d: Day) => d.duplicated || (d.matchPrev > d.matchOwn && d.matchPrev >= 0.5 && d.matchOwn < 0.5) || d.len < 400;

for (const slug of slugs) {
  const t = treks.find((x) => x.slug === slug);
  if (!t) { console.log("not found: " + slug); continue; }
  console.log(`\n########## ${t.slug}  (duration=${t.duration}, ${t.days.length} entries) ##########`);
  for (const d of t.days) {
    if (ONLY_BAD && !bad(d)) continue;
    const tag = d.duplicated ? "DUP " : (d.matchPrev > d.matchOwn && d.matchPrev >= 0.5 && d.matchOwn < 0.5) ? "DRIFT" : d.len < 400 ? "THIN" : "OK  ";
    console.log(`\n[${tag}] entry ${d.index + 1} / D${d.dayNumber}  (${d.len} chars)`);
    console.log(`  TITLE: ${d.title}`);
    console.log(`  ${RAW ? "HTML " : "TEXT "}: ${RAW ? d.html : d.text}`);
  }
}
