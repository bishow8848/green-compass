import "dotenv/config";
import { prisma } from "../lib/prisma";
async function main() {
  const s = await prisma.siteSetting.findUnique({ where: { id: "site-settings" }, select: { navigation: true, categoryDropdownTreks: true } });
  console.log("NAV:", s?.navigation);
  const cdt = JSON.parse(s?.categoryDropdownTreks || "{}");
  for (const [k, v] of Object.entries(cdt)) console.log("DROPDOWN", k, (v as string[]).length);
}
main().catch(console.error).finally(() => prisma.$disconnect());
