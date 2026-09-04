import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  const treks = await prisma.trek.findMany({ select: { slug: true, title: true, region: true, regionId: true, categoryId: true, status: true, price: true, duration: true, difficulty: true }, orderBy: { title: "asc" } });
  console.log("total", treks.length);
  const byRegion = new Map<string, number>();
  for (const t of treks) byRegion.set(t.region ?? "NULL", (byRegion.get(t.region ?? "NULL") ?? 0) + 1);
  console.log([...byRegion.entries()]);
  console.log("regionId set:", treks.filter(t=>t.regionId).length);
  console.log(treks.slice(0, 8));
}
main().catch(console.error).finally(() => prisma.$disconnect());
