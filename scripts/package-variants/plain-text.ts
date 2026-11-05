/**
 * Turns the text the first package-variants apply wrote — which presented each
 * trip as one of two versions ("city to city… the 14-day complete package adds
 * them") — into plain product copy: what this trip includes and where it starts
 * and ends, with no mention of, or link to, the other page.
 *
 * Pure and idempotent: text that is already plain passes through unchanged.
 * The planner (plan.ts) now writes this same plain text for new trips, and
 * tests/unit/package-variants-plain-text.test.ts checks the two agree.
 * scripts/plain-package-text.mts applies it to the live catalogue.
 */

const cap = (text: string) => (text ? text[0].toUpperCase() + text.slice(1) : text);

/** The opening paragraph of a city-to-city trip (old wording). */
const CITY_INTRO =
  /<p><strong>(.+?), city to city: (\d+) days, (.+?) to (.+?)\.<\/strong> This version of the (trek|tour) (.+?): (.+?) are included, while (.+?) — which you may already have arranged — are not\. Flying into Nepal and want those taken care of too\? The <a href="[^"]*">\d+-day complete package<\/a> adds them, from arrival to departure\.<\/p>/;

/** The opening of a new complete package (old wording), and its closing pointer to the other page. */
const COMPLETE_INTRO = /<p><strong>The complete (.+?) package covers the whole trip/;
const COMPLETE_POINTER = /<p>Already in [^<?]+, or arranging your own hotel\? The <a href="[^"]*">[^<]*<\/a> is the same [^<]*<\/p>/;

/** The note in front of an existing pair's complete package (old wording). */
const PAIR_NOTE =
  /<p><strong>Complete package: (\d+) days, arrival to departure\.<\/strong> Airport pickup and drop-off, your (.+?) are included\. Only want the (?:trek|tour)\? The <a href="[^"]*">[^<]*<\/a> runs [^<]*\.<\/p>/;

export function plainCityIntro(name: string, days: number, start: string, end: string, noun: string, startsAndEnds: string, included: string, leftOut: string): string {
  return `<p><strong>${name}: ${days} days, ${start} to ${end}.</strong> The ${noun} ${startsAndEnds}. ${cap(included)} are included; ${leftOut} are not.</p>`;
}

export function plainPairNote(days: number, included: string): string {
  return `<p><strong>${days} days, from arrival in Kathmandu to departure.</strong> Airport pickup and drop-off, your ${included} are included.</p>`;
}

export function plainOverview(html: string): string {
  return html
    .replace(CITY_INTRO, (_, name, days, start, end, noun, startsAndEnds, included, leftOut) =>
      plainCityIntro(name, Number(days), start, end, noun, startsAndEnds, included, leftOut)
    )
    .replace(COMPLETE_INTRO, (_, trip) => `<p><strong>The ${trip} Package covers the whole trip`)
    .replace(COMPLETE_POINTER, "")
    .replace(PAIR_NOTE, (_, days, included) => plainPairNote(Number(days), included));
}

/** "Airport pickup and drop-off — both included in the 14-day complete package." */
export const PLAIN_AIRPORT_EXCLUSION = "Airport pickup and drop-off in Kathmandu.";

export function plainExclusions(html: string): string {
  return html.replace(/<li>Airport pickup and drop-off — both included in the \d+-day complete package\.<\/li>/g, `<li>${PLAIN_AIRPORT_EXCLUSION}</li>`);
}

export function plainMetaDescription(text: string | null): string | null {
  return text ? text.replace(/^(.+?) complete package: /, "$1 Package: ") : text;
}

export type FaqText = { question: string; answer: string };

/** FAQs that only made sense next to the other version. */
const DROPPED_QUESTIONS = new Set(["Can I book the complete package instead?", "Is there a version without hotels and airport transfers?"]);

/** null drops the FAQ; otherwise the (possibly reworded) question. */
export function plainQuestion(question: string): string | null {
  if (DROPPED_QUESTIONS.has(question)) return null;
  return question
    .replace(/^Where does the city-to-city (.+) start and finish\?$/, "Where does the $1 start and finish?")
    .replace(/^What is not included in the city-to-city (.+)\?$/, "What is not included in the $1?")
    .replace(/^What does the complete (.+) package include\?$/, "What does the $1 Package include?");
}

export const PLANNING_SECTION_ID = "custom-package-planning";
const COVERS_HEADING_OLD = "What the Complete Package Covers";
export const COVERS_HEADING = "What the Package Covers";
const COVERS_POINTER = /<p>Only the (?:trek|tour)\? The <a href="[^"]*">[^<]*<\/a> is the same [^<]*<\/p>/;

type Section = { id?: string; data?: { heading?: string; content?: string } };

/** The complete package's own sections, without the ones pointing at the other page. */
export function plainSections(customSections: string | null, sectionOrder: string | null): { customSections: string | null; sectionOrder: string | null } {
  let sections: Section[];
  try {
    sections = JSON.parse(customSections || "[]");
    if (!Array.isArray(sections)) return { customSections, sectionOrder };
  } catch {
    return { customSections, sectionOrder };
  }
  const kept = sections
    .filter((s) => s.id !== PLANNING_SECTION_ID)
    .map((s) =>
      s.data?.heading === COVERS_HEADING_OLD || (s.data?.content && COVERS_POINTER.test(s.data.content))
        ? { ...s, data: { ...s.data, heading: s.data?.heading === COVERS_HEADING_OLD ? COVERS_HEADING : s.data?.heading, content: s.data?.content?.replace(COVERS_POINTER, "") } }
        : s
    );
  let order = sectionOrder;
  try {
    const parsed = JSON.parse(sectionOrder || "null");
    if (Array.isArray(parsed) && parsed.includes(PLANNING_SECTION_ID)) order = JSON.stringify(parsed.filter((id) => id !== PLANNING_SECTION_ID));
  } catch {
    // leave the order as it was
  }
  const changed = JSON.stringify(kept) !== JSON.stringify(sections);
  return { customSections: changed ? JSON.stringify(kept) : customSections, sectionOrder: order };
}
