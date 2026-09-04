import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  const cats = await prisma.category.findMany({
    orderBy: { sort: "asc" },
    include: { regions: { orderBy: { sortOrder: "asc" } }, _count: { select: { treks: true } } },
  });
  for (const c of cats) {
    console.log(`\nCATEGORY ${c.name} (${c.slug}) sort=${c.sort} status=${c.status} treks=${c._count.treks}`);
    console.log(`  icon=${c.icon} hero=${c.heroImage}`);
    console.log(`  desc=${c.description?.slice(0,120)}`);
    console.log(`  metaTitle=${c.metaTitle}`);
    console.log(`  metaDesc=${c.metaDescription?.slice(0,120)}`);
    for (const r of c.regions) {
      const n = await prisma.trek.count({ where: { regionId: r.id } });
      console.log(`    REGION ${r.name} (${r.slug}) sort=${r.sortOrder} treks=${n}`);
    }
  }
}
main().catch(console.error).finally(() => prisma.$disconnect());
