import "dotenv/config";
import { prisma } from "../lib/prisma";
const rows = await prisma.$queryRawUnsafe<any[]>(
  `select t.slug, g.alt, count(*) c from trek_gallery g join treks t on t.id=g."trekId" group by t.slug, g.alt having count(*) > 1 order by t.slug`
);
for (const r of rows) console.log(`${r.slug}  x${r.c}\n   ${r.alt}`);
await prisma.$disconnect();
