import "dotenv/config";
import { prisma } from "../lib/prisma";

const slug = process.argv[2] || "lamjung-himal-trek";
const categorySlug = process.argv[3] || "treks";

console.log(`\n=== findUnique({ slug: "${slug}", status: "published" }) — what ProductDetailPage does ===`);
const trek = await prisma.trek.findUnique({
  where: { slug, status: "published" },
  include: { category: true },
});
if (!trek) {
  console.log("→ NULL (page will call notFound())\n");
  const any = await prisma.trek.findUnique({
    where: { slug },
    include: { category: true },
  });
  console.log("findUnique({ slug }) ignoring status:", any
    ? { id: any.id, title: any.title, slug: any.slug, status: any.status, categorySlug: any.category?.slug }
    : "NULL — trek does not exist at all");
} else {
  console.log("→ FOUND:", { id: trek.id, title: trek.title, slug: trek.slug, status: trek.status, categorySlug: trek.category?.slug });
  console.log(`categorySlug === "${categorySlug}" ?`, trek.category?.slug === categorySlug);
}

console.log("\n=== all treks (id / slug / status / category slug) ===");
const all = await prisma.trek.findMany({
  select: {
    id: true,
    title: true,
    slug: true,
    status: true,
    category: { select: { slug: true, name: true } },
  },
  orderBy: { createdAt: "desc" },
});
for (const t of all) {
  // JSON.stringify reveals invisible characters (trailing spaces, zero-width)
  console.log(`- slug=${JSON.stringify(t.slug)}  [${t.status}]  cat=${JSON.stringify(t.category?.slug)}  title=${JSON.stringify(t.title)}`);
}

console.log("\n=== raw SQL byte inspection for 'lamjung%' slugs ===");
const rows = await prisma.$queryRawUnsafe(
  `SELECT slug, length(slug) AS len, octet_length(slug) AS bytes, status
   FROM "Trek" WHERE slug LIKE 'lamjung%'`
);
for (const r of rows as any[]) {
  console.log(JSON.stringify({ slug: r.slug, len: r.len, bytes: r.bytes, status: r.status }));
}

console.log("\n=== all categories ===");
const cats = await prisma.category.findMany({ select: { id: true, name: true, slug: true, status: true } });
for (const c of cats) {
  console.log(`- ${c.slug}  [${c.status}]  ${c.name}`);
}

await prisma.$disconnect();
