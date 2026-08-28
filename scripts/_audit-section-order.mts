import "dotenv/config";
import { prisma } from "../lib/prisma";
const treks = await prisma.trek.findMany({
  select:{slug:true,sectionOrder:true,galleryImages:{select:{id:true}}}, orderBy:{slug:"asc"},
});
const missing:string[]=[]; const noOrder:string[]=[];
for (const t of treks) {
  if (!t.galleryImages.length) continue;
  if (!t.sectionOrder) { noOrder.push(t.slug); continue; }
  let order:string[]=[]; try { order = JSON.parse(t.sectionOrder); } catch {}
  if (!order.includes("gallery")) missing.push(t.slug);
}
console.log(`treks with gallery images: ${treks.filter(t=>t.galleryImages.length).length}`);
console.log(`sectionOrder missing "gallery": ${missing.length}`);
missing.forEach(s=>console.log("   "+s));
console.log(`no sectionOrder at all: ${noOrder.length}`, noOrder.join(", "));
await prisma.$disconnect();
