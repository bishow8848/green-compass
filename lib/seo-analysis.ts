/**
 * Live SEO analysis for admin rich-text content.
 *
 * Pure string helpers only — no DOM — so it runs identically in the editor
 * (client), in server actions, and under vitest (node environment).
 */

export type SeoCheckStatus = "good" | "warn" | "bad";
export type SeoCheckGroup = "keyword" | "meta" | "content" | "readability";

export interface SeoCheck {
  id: string;
  group: SeoCheckGroup;
  status: SeoCheckStatus;
  label: string;
  message: string;
  /** Contribution to the overall score (good = full, warn = half, bad = none) */
  weight: number;
}

export interface SeoHeading {
  level: number;
  text: string;
}

export interface SeoStats {
  words: number;
  characters: number;
  readingMinutes: number;
  sentences: number;
  paragraphs: number;
  headings: SeoHeading[];
  h1: number;
  h2: number;
  h3: number;
  images: number;
  imagesMissingAlt: number;
  internalLinks: number;
  externalLinks: number;
  keywordCount: number;
  /** Percentage, e.g. 1.4 means the keyword is 1.4% of all words */
  keywordDensity: number;
  longParagraphs: number;
  longSentences: number;
}

export interface SeoAnalysisInput {
  html: string;
  title?: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  /** Minimum word count expected for this content type. Default 300. */
  minWords?: number;
  /**
   * True when the published page template already renders the title as the
   * page's <h1> — in that case an <h1> inside the body is a duplicate.
   */
  titleRendersH1?: boolean;
}

export interface SeoReport {
  /** 0–100 */
  score: number;
  grade: SeoCheckStatus;
  checks: SeoCheck[];
  stats: SeoStats;
}

// Google truncates around these widths; character counts are the practical proxy.
export const TITLE_MIN = 30;
export const TITLE_MAX = 60;
export const DESCRIPTION_MIN = 120;
export const DESCRIPTION_MAX = 160;
const WORDS_PER_MINUTE = 200;
const LONG_SENTENCE_WORDS = 25;
const LONG_PARAGRAPH_WORDS = 150;

const ENTITIES: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&hellip;": "…",
  "&mdash;": "—",
  "&ndash;": "–",
  "&rsquo;": "’",
  "&lsquo;": "‘",
};

function decodeEntities(value: string): string {
  return value
    .replace(/&[a-z]+;|&#\d+;/gi, (match) => ENTITIES[match.toLowerCase()] ?? match)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

/** Strip tags (and script/style bodies) down to readable text. */
export function htmlToText(html: string): string {
  return decodeEntities(
    (html || "")
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<\/(p|div|li|h[1-6]|tr|blockquote|figcaption)>/gi, " ")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]*>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();
}

export function countWords(text: string): number {
  if (!text) return 0;
  return text.split(/\s+/).filter((word) => /[\p{L}\p{N}]/u.test(word)).length;
}

export function extractHeadings(html: string): SeoHeading[] {
  const headings: SeoHeading[] = [];
  const regex = /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html || "")) !== null) {
    headings.push({ level: Number(match[1]), text: htmlToText(match[2]) });
  }
  return headings;
}

function extractTags(html: string, tag: string): string[] {
  const regex = new RegExp(`<${tag}\\b[^>]*>`, "gi");
  return (html || "").match(regex) || [];
}

function attr(tag: string, name: string): string {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, "i"));
  return match ? match[1] : "";
}

export function slugify(value: string): string {
  return (value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Count case-insensitive occurrences of a phrase, respecting word boundaries. */
export function countOccurrences(haystack: string, phrase: string): number {
  const needle = (phrase || "").trim();
  if (!needle || !haystack) return 0;
  // Allow any whitespace run between the words of a multi-word keyword.
  const pattern = escapeRegExp(needle).replace(/\\?\s+/g, "\\s+");
  const leading = /^[\p{L}\p{N}]/u.test(needle) ? "\\b" : "";
  const trailing = /[\p{L}\p{N}]$/u.test(needle) ? "\\b" : "";
  const matches = haystack.match(new RegExp(`${leading}${pattern}${trailing}`, "giu"));
  return matches ? matches.length : 0;
}

function containsKeyword(haystack: string, keyword: string): boolean {
  return countOccurrences(haystack, keyword) > 0;
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

export function computeStats(html: string, focusKeyword = ""): SeoStats {
  const text = htmlToText(html);
  const words = countWords(text);
  const headings = extractHeadings(html);

  const imageTags = extractTags(html, "img");
  const anchorTags = extractTags(html, "a");
  let internalLinks = 0;
  let externalLinks = 0;
  for (const tag of anchorTags) {
    const href = attr(tag, "href").trim();
    if (!href || href.startsWith("#")) continue;
    if (/^https?:\/\//i.test(href)) externalLinks += 1;
    else internalLinks += 1;
  }

  const paragraphBodies = [...(html || "").matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => htmlToText(match[1]))
    .filter((paragraph) => countWords(paragraph) > 0);

  const sentences = splitSentences(text);
  const keywordCount = countOccurrences(text, focusKeyword);

  return {
    words,
    characters: text.length,
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    sentences: sentences.length,
    paragraphs: paragraphBodies.length,
    headings,
    h1: headings.filter((h) => h.level === 1).length,
    h2: headings.filter((h) => h.level === 2).length,
    h3: headings.filter((h) => h.level === 3).length,
    images: imageTags.length,
    imagesMissingAlt: imageTags.filter((tag) => !attr(tag, "alt").trim()).length,
    internalLinks,
    externalLinks,
    keywordCount,
    keywordDensity: words > 0 ? Number(((keywordCount / words) * 100).toFixed(2)) : 0,
    longParagraphs: paragraphBodies.filter((p) => countWords(p) > LONG_PARAGRAPH_WORDS).length,
    longSentences: sentences.filter((s) => countWords(s) > LONG_SENTENCE_WORDS).length,
  };
}

/** Longest run of words that isn't broken up by a subheading. */
function longestSectionWithoutSubheading(html: string): number {
  const chunks = (html || "").split(/<h[2-6]\b[^>]*>[\s\S]*?<\/h[2-6]>/gi);
  return chunks.reduce((longest, chunk) => Math.max(longest, countWords(htmlToText(chunk))), 0);
}

export function analyzeSeo(input: SeoAnalysisInput): SeoReport {
  const {
    html = "",
    title = "",
    slug = "",
    metaTitle = "",
    metaDescription = "",
    focusKeyword = "",
    minWords = 300,
    titleRendersH1 = true,
  } = input;

  const keyword = focusKeyword.trim();
  const stats = computeStats(html, keyword);
  const text = htmlToText(html);
  const effectiveTitle = (metaTitle || title).trim();
  const description = metaDescription.trim();
  const checks: SeoCheck[] = [];

  const add = (
    id: string,
    group: SeoCheckGroup,
    label: string,
    status: SeoCheckStatus,
    message: string,
    weight = 1
  ) => checks.push({ id, group, label, status, message, weight });

  // ── Focus keyword ────────────────────────────────────────────────
  if (!keyword) {
    add(
      "keyword-set",
      "keyword",
      "Focus keyword",
      "warn",
      "Set a focus keyword to unlock keyword checks (e.g. “mardi himal trek”).",
      2
    );
  } else {
    add("keyword-set", "keyword", "Focus keyword", "good", `Focus keyword: “${keyword}”.`, 2);

    add(
      "keyword-in-title",
      "keyword",
      "Keyword in SEO title",
      containsKeyword(effectiveTitle, keyword) ? "good" : "bad",
      containsKeyword(effectiveTitle, keyword)
        ? "The SEO title contains the focus keyword."
        : "Add the focus keyword to the SEO title — ideally near the start.",
      2
    );

    add(
      "keyword-in-description",
      "keyword",
      "Keyword in meta description",
      containsKeyword(description, keyword) ? "good" : "bad",
      containsKeyword(description, keyword)
        ? "The meta description contains the focus keyword."
        : "Use the focus keyword once in the meta description."
    );

    const slugHasKeyword =
      !!slug && slugify(slug).includes(slugify(keyword)) && slugify(keyword).length > 0;
    add(
      "keyword-in-slug",
      "keyword",
      "Keyword in URL slug",
      slugHasKeyword ? "good" : "warn",
      slugHasKeyword
        ? "The URL slug contains the focus keyword."
        : "The URL slug does not contain the focus keyword."
    );

    const intro = text.split(/\s+/).slice(0, 120).join(" ");
    add(
      "keyword-in-intro",
      "keyword",
      "Keyword in introduction",
      containsKeyword(intro, keyword) ? "good" : "warn",
      containsKeyword(intro, keyword)
        ? "The focus keyword appears in the opening paragraph."
        : "Mention the focus keyword in the first ~120 words."
    );

    const subheadings = stats.headings.filter((h) => h.level >= 2);
    const keywordInSubheading = subheadings.some((h) => containsKeyword(h.text, keyword));
    add(
      "keyword-in-subheading",
      "keyword",
      "Keyword in a subheading",
      keywordInSubheading ? "good" : "warn",
      keywordInSubheading
        ? "At least one subheading contains the focus keyword."
        : subheadings.length === 0
          ? "Add H2 subheadings and use the focus keyword in one of them."
          : "None of the subheadings contain the focus keyword."
    );

    const density = stats.keywordDensity;
    let densityStatus: SeoCheckStatus = "good";
    let densityMessage = `Keyword density ${density}% (${stats.keywordCount}×) — in the healthy 0.5–2.5% range.`;
    if (stats.words < 50) {
      densityStatus = "warn";
      densityMessage = "Too little content to judge keyword density yet.";
    } else if (density > 3) {
      densityStatus = "bad";
      densityMessage = `Keyword density ${density}% (${stats.keywordCount}×) — this reads as keyword stuffing.`;
    } else if (density > 2.5) {
      densityStatus = "warn";
      densityMessage = `Keyword density ${density}% (${stats.keywordCount}×) — slightly high, ease off.`;
    } else if (density < 0.5) {
      densityStatus = "warn";
      densityMessage = `Keyword density ${density}% (${stats.keywordCount}×) — use the keyword a few more times.`;
    }
    add("keyword-density", "keyword", "Keyword density", densityStatus, densityMessage, 2);

    if (stats.images > 0) {
      const altText = [...(html || "").matchAll(/<img\b[^>]*>/gi)]
        .map((match) => attr(match[0], "alt"))
        .join(" ");
      const keywordInAlt = containsKeyword(altText, keyword);
      add(
        "keyword-in-alt",
        "keyword",
        "Keyword in image alt text",
        keywordInAlt ? "good" : "warn",
        keywordInAlt
          ? "An image alt text contains the focus keyword."
          : "No image alt text mentions the focus keyword."
      );
    }
  }

  // ── Meta / SERP ──────────────────────────────────────────────────
  const titleLength = effectiveTitle.length;
  let titleStatus: SeoCheckStatus = "good";
  let titleMessage = `SEO title is ${titleLength} characters — a good length.`;
  if (titleLength === 0) {
    titleStatus = "bad";
    titleMessage = "No SEO title yet. Google will invent one from the page.";
  } else if (titleLength < TITLE_MIN) {
    titleStatus = "warn";
    titleMessage = `SEO title is ${titleLength} characters — short, you have room for more (${TITLE_MIN}–${TITLE_MAX}).`;
  } else if (titleLength > TITLE_MAX) {
    titleStatus = "warn";
    titleMessage = `SEO title is ${titleLength} characters — Google will truncate it past ~${TITLE_MAX}.`;
  }
  add("title-length", "meta", "SEO title length", titleStatus, titleMessage, 2);

  const descriptionLength = description.length;
  let descriptionStatus: SeoCheckStatus = "good";
  let descriptionMessage = `Meta description is ${descriptionLength} characters — a good length.`;
  if (descriptionLength === 0) {
    descriptionStatus = "bad";
    descriptionMessage = "No meta description. Write one — it is your ad copy in search results.";
  } else if (descriptionLength < DESCRIPTION_MIN) {
    descriptionStatus = "warn";
    descriptionMessage = `Meta description is ${descriptionLength} characters — aim for ${DESCRIPTION_MIN}–${DESCRIPTION_MAX}.`;
  } else if (descriptionLength > DESCRIPTION_MAX) {
    descriptionStatus = "warn";
    descriptionMessage = `Meta description is ${descriptionLength} characters — it will be cut off past ~${DESCRIPTION_MAX}.`;
  }
  add("description-length", "meta", "Meta description length", descriptionStatus, descriptionMessage, 2);

  if (slug) {
    const cleanSlug = slug === slugify(slug);
    add(
      "slug-format",
      "meta",
      "URL slug format",
      cleanSlug && slug.length <= 60 ? "good" : "warn",
      cleanSlug && slug.length <= 60
        ? "The slug is short, lowercase and hyphenated."
        : "Keep the slug lowercase, hyphen-separated and under 60 characters."
    );
  }

  // ── Content ──────────────────────────────────────────────────────
  let wordStatus: SeoCheckStatus = "good";
  let wordMessage = `${stats.words} words — enough depth to rank.`;
  if (stats.words < minWords / 2) {
    wordStatus = "bad";
    wordMessage = `${stats.words} words — well under the ${minWords}-word minimum for this page type.`;
  } else if (stats.words < minWords) {
    wordStatus = "warn";
    wordMessage = `${stats.words} words — aim for at least ${minWords}.`;
  }
  add("word-count", "content", "Content length", wordStatus, wordMessage, 2);

  if (titleRendersH1 && stats.h1 > 0) {
    add(
      "heading-h1",
      "content",
      "Single H1",
      "bad",
      `The page title is already the H1, so the ${stats.h1} H1${stats.h1 > 1 ? "s" : ""} in the body compete with it. Use H2 for section headings.`,
      2
    );
  } else {
    add(
      "heading-h1",
      "content",
      "Single H1",
      "good",
      titleRendersH1
        ? "No duplicate H1 in the body — the page title owns it."
        : "Heading levels start correctly.",
      2
    );
  }

  const skipped = (() => {
    let previous = titleRendersH1 ? 1 : 0;
    for (const heading of stats.headings) {
      if (previous && heading.level > previous + 1) return true;
      previous = heading.level;
    }
    return false;
  })();
  add(
    "heading-order",
    "content",
    "Heading hierarchy",
    stats.headings.length === 0 ? "warn" : skipped ? "warn" : "good",
    stats.headings.length === 0
      ? "No headings yet — break the content up with H2s."
      : skipped
        ? "A heading level is skipped (e.g. H2 → H4). Step down one level at a time."
        : `${stats.headings.length} headings, correctly nested.`
  );

  const longestRun = longestSectionWithoutSubheading(html);
  add(
    "subheading-distribution",
    "content",
    "Subheading distribution",
    stats.words < 300 ? "good" : longestRun > 300 ? "warn" : "good",
    stats.words < 300
      ? "Content is short enough not to need more subheadings."
      : longestRun > 300
        ? `${longestRun} words run without a subheading — add one every ~300 words.`
        : "Subheadings are spread evenly through the content."
  );

  add(
    "image-alt",
    "content",
    "Image alt text",
    stats.images === 0 ? "warn" : stats.imagesMissingAlt > 0 ? "bad" : "good",
    stats.images === 0
      ? "No images yet — add at least one to break up the text."
      : stats.imagesMissingAlt > 0
        ? `${stats.imagesMissingAlt} of ${stats.images} images have no alt text.`
        : `All ${stats.images} images have alt text.`,
    2
  );

  add(
    "internal-links",
    "content",
    "Internal links",
    stats.internalLinks > 0 ? "good" : "warn",
    stats.internalLinks > 0
      ? `${stats.internalLinks} internal link${stats.internalLinks > 1 ? "s" : ""} to other pages.`
      : "Add internal links to related treks or blog posts."
  );

  add(
    "outbound-links",
    "content",
    "Outbound links",
    stats.externalLinks > 0 ? "good" : "warn",
    stats.externalLinks > 0
      ? `${stats.externalLinks} outbound link${stats.externalLinks > 1 ? "s" : ""} to external sources.`
      : "Link out to a credible external source where it helps the reader."
  );

  // ── Readability ──────────────────────────────────────────────────
  add(
    "paragraph-length",
    "readability",
    "Paragraph length",
    stats.longParagraphs === 0 ? "good" : stats.longParagraphs > 2 ? "bad" : "warn",
    stats.longParagraphs === 0
      ? "No overlong paragraphs."
      : `${stats.longParagraphs} paragraph${stats.longParagraphs > 1 ? "s exceed" : " exceeds"} ${LONG_PARAGRAPH_WORDS} words — split them up.`
  );

  const longSentenceShare = stats.sentences > 0 ? (stats.longSentences / stats.sentences) * 100 : 0;
  add(
    "sentence-length",
    "readability",
    "Sentence length",
    stats.sentences === 0 ? "warn" : longSentenceShare <= 25 ? "good" : longSentenceShare <= 40 ? "warn" : "bad",
    stats.sentences === 0
      ? "No sentences to analyse yet."
      : `${Math.round(longSentenceShare)}% of sentences are over ${LONG_SENTENCE_WORDS} words (aim for under 25%).`
  );

  // ── Score ────────────────────────────────────────────────────────
  const total = checks.reduce((sum, check) => sum + check.weight, 0);
  const earned = checks.reduce(
    (sum, check) => sum + check.weight * (check.status === "good" ? 1 : check.status === "warn" ? 0.5 : 0),
    0
  );
  const score = total > 0 ? Math.round((earned / total) * 100) : 0;

  return {
    score,
    grade: score >= 80 ? "good" : score >= 55 ? "warn" : "bad",
    checks,
    stats,
  };
}
