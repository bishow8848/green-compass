import "dotenv/config";
import { prisma } from "../lib/prisma";
const cats = await prisma.category.findMany({ select: { id: true, name: true, slug: true, _count: { select: { treks: true } } } });
console.log("categories:"); for (const c of cats) console.log(` ${c.slug.padEnd(12)} ${c.name.padEnd(12)} treks=${c._count.treks}`);
const regions = await prisma.categoryRegion.findMany({ select: { name: true, slug: true, category: { select: { slug: true } } } });
console.log("\nregions:"); for (const r of regions) console.log(` ${(r.category?.slug ?? "-").padEnd(8)} ${r.name}`);
await prisma.$disconnect();
