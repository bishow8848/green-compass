import "dotenv/config";
import { prisma } from "@/lib/prisma";

const rows = await prisma.trekReview.groupBy({
  by: ["rating"],
  _count: { _all: true },
  orderBy: { rating: "asc" },
});
console.log("ratings:", rows.map((r) => `${r.rating}★=${r._count._all}`).join(" "));

const treks = await prisma.trek.findMany({
  where: { reviews: { some: {} } },
  select: { slug: true, reviews: { where: { approved: true }, select: { rating: true } } },
});

const buckets = new Map<string, number>();
const perTrek = new Map<number, number>();
for (const t of treks) {
  const n = t.reviews.length;
  perTrek.set(n, (perTrek.get(n) ?? 0) + 1);
  const avg = t.reviews.reduce((s, r) => s + r.rating, 0) / n;
  const key = avg.toFixed(1);
  buckets.set(key, (buckets.get(key) ?? 0) + 1);
}
const high = [...buckets.entries()]
  .filter(([k]) => Number(k) >= 4.8)
  .reduce((s, [, v]) => s + v, 0);
const mid = [...buckets.entries()]
  .filter(([k]) => Number(k) >= 4.5 && Number(k) < 4.8)
  .reduce((s, [, v]) => s + v, 0);

console.log(`treks=${treks.length} reviewsPerTrek=${JSON.stringify([...perTrek])}`);
console.log(
  `averages: ${[...buckets.entries()]
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(([k, v]) => `${k}:${v}`)
    .join(" | ")}`
);
console.log(
  `bands: ${((high / treks.length) * 100).toFixed(1)}% in 4.8-5.0, ` +
    `${((mid / treks.length) * 100).toFixed(1)}% in 4.5-4.7, ${treks.length - high - mid} below 4.5`
);

await prisma.$disconnect();
