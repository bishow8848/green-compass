import "dotenv/config";
import { prisma } from "../lib/prisma";
const treks = await prisma.trek.findMany({ select:{slug:true,category:{select:{slug:true}}}, orderBy:{slug:"asc"} });
let ok=0; const bad:string[]=[];
for (const t of treks) {
  const url = `http://localhost:3000/${t.category?.slug ?? "treks"}/${t.slug}`;
  try {
    const r = await fetch(url);
    const html = await r.text();
    const imgs = new Set([...html.matchAll(/mardi-treks\/[A-Za-z0-9_\-\/]+/g)].map(m=>m[0].replace(/\.(jpg|png|webp)$/,"")));
    const alts = (html.match(/alt="[^"]{25,}"/g) ?? []).length;
    if (r.status === 200 && imgs.size >= 7 && alts >= 6) ok++;
    else bad.push(`${t.slug}  status=${r.status} imgs=${imgs.size} alts=${alts}`);
  } catch (e:any) { bad.push(`${t.slug}  ERROR ${e.message}`); }
}
console.log(`\nPASS ${ok}/${treks.length}`);
if (bad.length) { console.log("problems:"); bad.forEach(b=>console.log("  "+b)); }
await prisma.$disconnect();
