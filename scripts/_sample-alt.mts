import "dotenv/config";
import { prisma } from "../lib/prisma";
for (const slug of ["mundum-trek","khori-himal-trek"]) {
  const t = await prisma.trek.findUnique({ where:{slug}, select:{galleryImages:{select:{alt:true,caption:true}}} });
  console.log("### "+slug);
  t?.galleryImages.forEach((g,i)=>console.log(`  ${i+1}. ${g.alt}\n     ${g.caption}`));
}
await prisma.$disconnect();
