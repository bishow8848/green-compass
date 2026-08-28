import "dotenv/config";
import { prisma } from "../lib/prisma";

const plain = (h?: string|null) => (h ?? "").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();
const t = await prisma.trek.findMany({
  select: { slug:true,title:true,subtitle:true,metaTitle:true,metaDescription:true,keywords:true,tags:true,
            overview:true,heroImage:true,status:true,bestTime:true,maxAltitude:true,duration:true,
            galleryImages:{select:{alt:true,caption:true}}, faqs:{select:{id:true}} },
  orderBy:{slug:"asc"},
});

const issues: Record<string,string[]> = {};
const add = (s:string,m:string)=>{(issues[s]=issues[s]||[]).push(m);};

const TYPO = /\b(form|Annapunra|Cicuit|Tsun|Poonhil|Kathamandu|Everst|Himala|acommodation|reccommend)\b/i;

for (const x of t) {
  // --- slug ---
  if (/[A-Z]/.test(x.slug)) add(x.slug, `slug contains uppercase — breaks canonical URLs and can duplicate-index`);
  if (/--|^-|-$/.test(x.slug)) add(x.slug, `malformed slug`);

  // --- title ---
  if (x.title !== x.title.trim()) add(x.slug, `title has leading/trailing whitespace: "${x.title}"`);
  if (TYPO.test(x.title)) add(x.slug, `title looks misspelled: "${x.title.trim()}"`);
  if (x.title.trim().length > 60) add(x.slug, `title ${x.title.trim().length} chars (long for a link/H1)`);

  // --- meta title ---
  const mt = plain(x.metaTitle);
  if (!mt) add(x.slug, `no metaTitle`);
  else {
    if (mt.length > 60) add(x.slug, `metaTitle ${mt.length} chars — Google truncates past ~60: "${mt}"`);
    if (mt.length < 30) add(x.slug, `metaTitle only ${mt.length} chars — wasting SERP space: "${mt}"`);
    if (TYPO.test(mt)) add(x.slug, `metaTitle looks misspelled: "${mt}"`);
  }

  // --- meta description ---
  const md = plain(x.metaDescription);
  if (!md) add(x.slug, `no metaDescription`);
  else {
    if (md.length > 160) add(x.slug, `metaDescription ${md.length} chars — truncated past ~160`);
    if (md.length < 110) add(x.slug, `metaDescription only ${md.length} chars — under-using the snippet`);
    if (TYPO.test(md)) add(x.slug, `metaDescription looks misspelled`);
  }

  // --- body / structured data ---
  const ov = plain(x.overview).split(" ").filter(Boolean).length;
  if (ov < 120) add(x.slug, `overview only ${ov} words — thin for the main body copy`);
  if (!x.heroImage) add(x.slug, `no hero image — no og:image, and similar-trek cards render an icon`);
  if (x.galleryImages.length < 6) add(x.slug, `gallery has ${x.galleryImages.length} images (want 6)`);
  for (const g of x.galleryImages) {
    if (!g.alt?.trim()) add(x.slug, `gallery image missing alt text`);
    if (!g.caption?.trim()) add(x.slug, `gallery image missing caption`);
  }
  if (!x.faqs.length) add(x.slug, `no FAQs — misses FAQPage rich results`);
  if (!x.keywords?.trim()) add(x.slug, `no keywords`);
  if (!x.bestTime?.trim()) add(x.slug, `no bestTime (shown in overview stats)`);
  if (!x.maxAltitude) add(x.slug, `no maxAltitude (shown in overview stats + TouristTrip schema)`);
}

const order = Object.entries(issues).sort((a,b)=>b[1].length-a[1].length);
for (const [slug, list] of order) { console.log(`\n### ${slug}  (${list.length})`); for (const m of list) console.log("   - "+m); }
console.log(`\n=== ${order.length} treks with issues, ${order.reduce((n,[,l])=>n+l.length,0)} findings ===`);
const counts: Record<string,number> = {};
for (const [,l] of order) for (const m of l) { const k=m.replace(/[:—].*$/,"").replace(/\d+/g,"N").trim(); counts[k]=(counts[k]||0)+1; }
console.log("\nBy type:");
for (const [k,v] of Object.entries(counts).sort((a,b)=>b[1]-a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`);
await prisma.$disconnect();
