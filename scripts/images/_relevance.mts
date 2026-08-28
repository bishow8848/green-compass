import "dotenv/config";
import { prisma } from "../../lib/prisma";
const NOISE = new Set(["Day","Trek","Trekking","Drive","Fly","Flight","Hike","Walk","Arrival","Arrive","Departure","Depart","Final","Early","Morning","Rest","Acclimatization","Exploration","Explore","Visit","Return","Back","Trip","Tour","Sightseeing","Preparation","From","To","And","Via","In","At","Or","The","Of","Transfer","Hotel","Nepal","Sunrise","Tribhuvan","International","Airport","Jeep","Village","Camp","Base","Lake","Pass","Danda","Kharka","Gompa","Bazar","Bazaar","Himal","Hill","Valley","Kathmandu","Pokhara","Night","Overnight","Stay","Free","Your","Cross","Today"]);
const treks = await prisma.trek.findMany({
  select:{ slug:true, itinerary:{select:{title:true}}, heroImage:true, galleryImages:{select:{imageId:true}} },
  orderBy:{slug:"asc"},
});
const rows:any[] = [];
for (const t of treks) {
  const places = new Set<string>();
  for (const d of t.itinerary) for (const w of d.title.replace(/\([^)]*\)/g," ").split(/[^A-Za-z']+/))
    if (w.length>3 && /^[A-Z]/.test(w) && !NOISE.has(w)) places.add(w.toLowerCase());
  const ids = [t.heroImage, ...t.galleryImages.map(g=>g.imageId)].filter(Boolean) as string[];
  const matched = ids.filter(id => [...places].some(pl => id.toLowerCase().includes(pl))).length;
  rows.push({ slug:t.slug, matched, total: ids.length });
}
rows.sort((a,b)=> a.matched/a.total - b.matched/b.total);
console.log("gallery images naming a place on that trek's own itinerary:\n");
for (const r of rows) {
  const bar = "#".repeat(r.matched) + ".".repeat(r.total - r.matched);
  console.log(`  ${r.slug.padEnd(50)} ${String(r.matched).padStart(2)}/${r.total}  ${bar}`);
}
const weak = rows.filter(r => r.matched / r.total < 0.5);
console.log(`\n${weak.length} treks under 50% place-name match (Commons coverage is thin for these regions).`);
await prisma.$disconnect();
