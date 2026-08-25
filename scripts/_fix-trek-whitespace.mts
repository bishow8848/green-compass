import "dotenv/config";
import { prisma } from "../lib/prisma";

const apply = process.argv.includes("--apply");

const treks = await prisma.trek.findMany({
  select: { id: true, slug: true, title: true },
});

const problems: { id: string; field: "slug" | "title"; before: string; after: string }[] = [];
for (const t of treks) {
  const slug = t.slug?.trim();
  if (slug !== t.slug) {
    problems.push({ id: t.id, field: "slug", before: JSON.stringify(t.slug), after: JSON.stringify(slug) });
  }
  const title = t.title?.trim();
  if (title !== t.title) {
    problems.push({ id: t.id, field: "title", before: JSON.stringify(t.title), after: JSON.stringify(title) });
  }
}

console.log(`Trek rows with leading/trailing whitespace: ${problems.length}`);
for (const p of problems) {
  console.log(`- [${p.field}] ${p.id}: ${p.before} -> ${p.after}`);
}

// Collision check on trimmed slugs
const trimmedSlugs = treks.map((t) => t.slug?.trim()).filter(Boolean);
const seen = new Map<string, number>();
for (const s of trimmedSlugs) seen.set(s!, (seen.get(s!) ?? 0) + 1);
const collisions = [...seen.entries()].filter(([, n]) => n > 1);
if (collisions.length) {
  console.log("\n⚠  COLLISION — trimmed slugs would clash, NOT applying:");
  for (const [slug, n] of collisions) console.log(`   "${slug}" appears ${n} times`);
  process.exit(1);
}

if (!apply) {
  console.log("\nDry run — pass --apply to trim these fields in the DB.");
  await prisma.$disconnect();
  process.exit(0);
}

for (const p of problems) {
  await prisma.trek.update({
    where: { id: p.id },
    data: p.field === "slug" ? { slug: p.after } : { title: p.after },
  });
  console.log(`updated ${p.id} ${p.field} -> ${p.after}`);
}

// Verify the exact lookup the page performs
const trek = await prisma.trek.findUnique({
  where: { slug: "lamjung-himal-trek", status: "published" },
  select: { id: true, slug: true, status: true, category: { select: { slug: true } } },
});
console.log("\nVerify page lookup (slug=lamjung-himal-trek, published):", trek ? "FOUND ✓" : "STILL NULL ✗", trek ?? "");

await prisma.$disconnect();
