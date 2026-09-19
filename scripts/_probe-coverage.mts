import "dotenv/config";
import { prisma } from "../lib/prisma";
import { ALL_POSTS } from "./blog-content/index";

async function main() {
  const treks = await prisma.trek.findMany({
    select: { slug: true, title: true, duration: true, price: true, difficulty: true, category: { select: { slug: true, name: true } } },
    orderBy: { title: "asc" },
  });
  console.log("TOTAL TREKS:", treks.length);
  // primary = first entry of relatedTreks
  const primary = new Map<string, string[]>();
  for (const p of ALL_POSTS) {
    const first = p.relatedTreks[0];
    if (!first) continue;
    if (!primary.has(first)) primary.set(first, []);
    primary.get(first)!.push(p.slug);
  }
  const anyMention = new Set<string>();
  for (const p of ALL_POSTS) for (const t of p.relatedTreks) anyMention.add(t);

  const missing = treks.filter((t) => !primary.has(t.slug));
  console.log("\n=== NO PRIMARY ARTICLE (" + missing.length + ") ===");
  for (const t of missing) {
    console.log([t.category?.slug ?? "-", t.slug, t.duration + "d", t.difficulty, anyMention.has(t.slug) ? "mentioned" : "ORPHAN"].join(" | "));
  }
  console.log("\n=== HAS PRIMARY (" + (treks.length - missing.length) + ") ===");
  for (const t of treks) if (primary.has(t.slug)) console.log(t.slug, "->", primary.get(t.slug)!.join(", "));
}
main().catch(console.error).finally(() => prisma.$disconnect());
