import "dotenv/config";
import { prisma } from "../lib/prisma";
const t = await prisma.trek.findMany({ select:{slug:true,heroImage:true}, orderBy:{slug:"asc"} });
const pre = t.filter(x => x.heroImage && !x.heroImage.includes("/"+x.slug+"-"));
console.log("treks whose hero was NOT uploaded by this run:", pre.length);
pre.forEach(x=>console.log("   "+x.slug.padEnd(56)+x.heroImage));
await prisma.$disconnect();
