/**
 * Single source of truth for turning a trek's group-size pricing tiers into a
 * per-person price.
 *
 * This used to be implemented three times — once in the pricing calculator,
 * once in the booking page, and not at all on the server, which simply charged
 * the flat `trek.price`. The client quoted the tier price and the server stored
 * the base price, so every booking on a trek with tiers was written to the
 * database at the wrong total.
 */

export type PricingTierLike = {
  groupSize: string;
  pricePerPerson: number;
};

/** Parses tier labels like "5-7", "15-100" or "1" into a numeric range. */
export function parseTierRange(label: string): { min: number; max: number } {
  const range = label.match(/(\d+)\s*-\s*(\d+)/);
  if (range) return { min: parseInt(range[1], 10), max: parseInt(range[2], 10) };
  const single = label.match(/(\d+)/);
  if (single) {
    const value = parseInt(single[1], 10);
    return { min: value, max: value };
  }
  return { min: 1, max: 1 };
}

/**
 * Resolves the per-person price for `groupSize`, falling back to `basePrice`
 * when the trek has no tiers configured.
 */
export function getPriceForGroupSize(
  tiers: PricingTierLike[] | null | undefined,
  groupSize: number,
  basePrice: number
): number {
  if (!tiers?.length) return basePrice;

  for (const tier of tiers) {
    const { min, max } = parseTierRange(tier.groupSize);
    if (groupSize >= min && groupSize <= max) return tier.pricePerPerson;
  }

  // No tier covers this size. Tiers reach us ordered by a STRING sort of the
  // label ("1-1", "11-14", "15-100", "2-4", "5-7", "8-10"), so the last element
  // is not the top tier — pick the one with the widest upper bound instead.
  const widest = tiers.reduce((best, tier) =>
    parseTierRange(tier.groupSize).max > parseTierRange(best.groupSize).max ? tier : best
  );
  return widest.pricePerPerson;
}
