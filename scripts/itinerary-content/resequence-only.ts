import type { TrekDays } from "./types";

/**
 * Treks whose day text is already correct but whose dayNumber column is not.
 *
 * short-annapurna-circuit-trek was numbered [2, 2, 3, 4, 5, 6, 7] — the first
 * two entries shared day 2 and there was no day 1 — so the itinerary rendered
 * with a duplicate heading and no opening day. The walking order itself was
 * right, so only the numbering is rewritten, to 1..n by position.
 */
export const resequenceOnlyTreks: TrekDays[] = [
  { slug: "short-annapurna-circuit-trek", resequence: true, days: [] },
];
