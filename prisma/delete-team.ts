import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DIRECT_DATABASE_URL! }),
});
const deleted = await prisma.teamMember.deleteMany({
  where: { slug: { in: ["rajesh-gurung", "maya-sherpa", "david-thapa"] } }
});
console.log("Deleted", deleted.count, "team members");
await prisma.$disconnect();
