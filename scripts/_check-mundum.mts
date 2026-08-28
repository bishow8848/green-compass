import "dotenv/config";
import { prisma } from "../lib/prisma";
const t = await prisma.trek.findUnique({ where:{slug:"mundum-trek"}, select:{slug:true,status:true,heroImage:true,sectionOrder:true,category:{select:{slug:true}},galleryImages:{select:{imageId:true}}} });
console.log("status:", t?.status, "| category:", t?.category?.slug);
console.log("hero:", t?.heroImage);
console.log("gallery:", t?.galleryImages.length);
t?.galleryImages.forEach(g=>console.log("   "+g.imageId));
console.log("order has gallery:", JSON.parse(t?.sectionOrder??"[]").includes("gallery"));
await prisma.$disconnect();
