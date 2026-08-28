/**
 * Ask the running site to drop its cached copy of every trek page.
 *
 * Writing to the database with Prisma bypasses the revalidation the admin UI
 * fires on save, so trek pages keep serving the pre-edit version until their
 * Next.js cache entry is invalidated (revalidate = 604800, i.e. seven days).
 *
 *   npx tsx scripts/revalidate-treks.mts [baseUrl]
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const BASE = process.argv[2] ?? "http://localhost:3000";
const SECRET = process.env.REVALIDATION_SECRET;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function revalidate(path: string): Promise<string> {
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(`${BASE}/api/revalidate`, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${SECRET}` },
      body: JSON.stringify({ path }),
    });
    if (res.status === 429) {
      // The endpoint is rate limited to stop cache-stampede; just wait it out.
      await sleep(5000 * (attempt + 1));
      continue;
    }
    return res.ok ? "ok" : `HTTP ${res.status} ${(await res.text()).slice(0, 80)}`;
  }
  return "rate limited";
}

async function main() {
  if (!SECRET) { console.error("REVALIDATION_SECRET is not set in .env"); process.exitCode = 1; return; }

  const treks = await prisma.trek.findMany({
    where: { status: "published" },
    select: { slug: true, category: { select: { slug: true } } },
    orderBy: { slug: "asc" },
  });

  // The listing pages and home page show hero images too.
  const paths = [
    "/",
    ...new Set(treks.map((t) => `/${t.category?.slug ?? "treks"}`)),
    ...treks.map((t) => `/${t.category?.slug ?? "treks"}/${t.slug}`),
  ];

  let ok = 0;
  for (const path of paths) {
    const result = await revalidate(path);
    if (result === "ok") ok++;
    else console.log(`  ${result.padEnd(24)} ${path}`);
    await sleep(400);
  }
  console.log(`\nRevalidated ${ok}/${paths.length} paths on ${BASE}.`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
