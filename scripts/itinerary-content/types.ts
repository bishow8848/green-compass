/**
 * Rewritten itinerary day descriptions.
 *
 * Keyed by trek slug, then by the day's ENTRY INDEX (0-based position in the
 * itinerary as ordered by dayNumber then id) — not by dayNumber, because two
 * treks currently have broken day numbering and index is unambiguous.
 *
 * Only days that are misplaced or thin appear here. Days already written in
 * detail are absent and are left untouched.
 */
export type DayText = {
  /** 0-based entry index within the trek's itinerary. */
  index: number;
  /** Title this text must match — checked against the database before writing. */
  title: string;
  /** Replacement description as HTML paragraphs. */
  html: string;
};

export type TrekDays = {
  slug: string;
  days: DayText[];
  /** Set when the trek's dayNumber column needs resequencing to 1..n by index. */
  resequence?: boolean;
};

/** Wraps paragraphs into the <p>…</p> shape the editor and page already use. */
export const p = (...paras: string[]) => paras.map((t) => `<p>${t}</p>`).join("");
