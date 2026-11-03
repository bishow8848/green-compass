/**
 * Reprice the Everest Base Camp Trek group tiers off a 1-person price of $1450.
 *
 * Each tier is a percentage off the 1-person price, rounded UP to the next
 * multiple of 5 (1363 -> 1365, 1232.5 -> 1235) so prices never drop below the
 * discount and always end in 0 or 5. The trek's base `price` is kept equal to
 * the lowest tier, matching what the admin trek form saves.
 *
 *   npx tsx scripts/set-ebc-pricing.mts
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const SLUG = "everest-base-camp-trek";
const BASE_PRICE = 1450;

// 11-14 was not in the brief; it sits between the 8-10 and 15-100 discounts.
const DISCOUNTS: Record<string, number> = {
  "1-1": 0,
  "2-4": 0.06,
  "5-7": 0.1,
  "8-10": 0.14,
  "11-14": 0.145,
  "15-100": 0.15,
};

const roundUpTo5 = (n: number) => Math.ceil(n / 5) * 5;

async function main() {
  const trek = await prisma.trek.findUnique({
    where: { slug: SLUG },
    select: { id: true, price: true, pricingTiers: { select: { id: true, groupSize: true, pricePerPerson: true } } },
  });
  if (!trek) throw new Error(`Trek ${SLUG} not found`);

  const updates = trek.pricingTiers.map((tier) => {
    const discount = DISCOUNTS[tier.groupSize];
    if (discount === undefined) throw new Error(`No discount defined for tier ${tier.groupSize}`);
    return { ...tier, next: roundUpTo5(BASE_PRICE * (1 - discount)) };
  });
  const lowest = Math.min(...updates.map((u) => u.next));

  await prisma.$transaction([
    ...updates.map((u) => prisma.pricingTier.update({ where: { id: u.id }, data: { pricePerPerson: u.next } })),
    prisma.trek.update({ where: { id: trek.id }, data: { price: lowest } }),
  ]);

  for (const u of updates) console.log(`  ${u.groupSize.padEnd(7)} ${u.pricePerPerson} -> ${u.next}`);
  console.log(`  base    ${trek.price} -> ${lowest}`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
