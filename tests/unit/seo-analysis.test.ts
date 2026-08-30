import { describe, it, expect } from "vitest";
import {
  analyzeSeo,
  computeStats,
  countOccurrences,
  countWords,
  extractHeadings,
  htmlToText,
  slugify,
} from "@/lib/seo-analysis";

const check = (report: ReturnType<typeof analyzeSeo>, id: string) =>
  report.checks.find((c) => c.id === id);

describe("htmlToText", () => {
  it("strips tags and decodes entities", () => {
    expect(htmlToText("<p>Mardi&nbsp;Himal &amp; Poon Hill</p>")).toBe("Mardi Himal & Poon Hill");
  });

  it("drops script and style bodies", () => {
    expect(htmlToText("<style>p{color:red}</style><p>Trek</p>")).toBe("Trek");
  });

  it("keeps a word boundary between adjacent blocks", () => {
    expect(htmlToText("<p>one</p><p>two</p>")).toBe("one two");
  });
});

describe("countWords", () => {
  it("ignores punctuation-only tokens", () => {
    expect(countWords("Base camp — 4,500 m")).toBe(4);
  });
});

describe("extractHeadings", () => {
  it("returns level and text in document order", () => {
    const headings = extractHeadings('<h2 class="x">Best time</h2><h3>Permits</h3>');
    expect(headings).toEqual([
      { level: 2, text: "Best time" },
      { level: 3, text: "Permits" },
    ]);
  });
});

describe("countOccurrences", () => {
  it("matches case-insensitively on word boundaries", () => {
    expect(countOccurrences("Mardi Himal trek and mardi himal TREK", "mardi himal trek")).toBe(2);
  });

  it("does not match inside a longer word", () => {
    expect(countOccurrences("trekking is fun", "trek")).toBe(0);
  });

  it("tolerates any whitespace between keyword words", () => {
    expect(countOccurrences("mardi\n  himal is high", "mardi himal")).toBe(1);
  });

  it("returns 0 for an empty keyword", () => {
    expect(countOccurrences("anything", "")).toBe(0);
  });
});

describe("slugify", () => {
  it("normalises to a lowercase hyphenated slug", () => {
    expect(slugify("Mardi Himal Trek – 5 Days!")).toBe("mardi-himal-trek-5-days");
  });
});

describe("computeStats", () => {
  const html = `
    <h2>Overview</h2>
    <p>The Mardi Himal trek is a short Annapurna trek.</p>
    <img src="a.jpg" alt="Mardi Himal ridge" />
    <img src="b.jpg" />
    <p><a href="/annapurna/poon-hill">Poon Hill</a> and <a href="https://nepal.gov.np">permits</a>.</p>
  `;

  it("counts headings, images and links", () => {
    const stats = computeStats(html, "mardi himal");
    expect(stats.h2).toBe(1);
    expect(stats.images).toBe(2);
    expect(stats.imagesMissingAlt).toBe(1);
    expect(stats.internalLinks).toBe(1);
    expect(stats.externalLinks).toBe(1);
    // Only the body prose matches — alt text is not part of the readable text
    expect(stats.keywordCount).toBe(1);
  });

  it("reports zero density for empty content", () => {
    expect(computeStats("", "trek").keywordDensity).toBe(0);
  });
});

describe("analyzeSeo", () => {
  const longBody = Array.from(
    { length: 40 },
    () => "<p>The Mardi Himal trek climbs a quiet ridge above the Modi Khola valley.</p>"
  ).join("");

  it("flags a missing focus keyword without tanking the keyword checks", () => {
    const report = analyzeSeo({ html: longBody });
    expect(check(report, "keyword-set")?.status).toBe("warn");
    expect(check(report, "keyword-in-title")).toBeUndefined();
  });

  it("passes the keyword checks for well-optimised content", () => {
    const report = analyzeSeo({
      html: `<h2>Mardi Himal trek overview</h2>${longBody}<p><a href="/annapurna">More treks</a> and <a href="https://nepal.gov.np">permit info</a>.</p><img src="a.jpg" alt="Mardi Himal trek ridge" />`,
      title: "Mardi Himal Trek",
      slug: "mardi-himal-trek",
      metaTitle: "Mardi Himal Trek: 5-Day Annapurna Itinerary & Costs",
      metaDescription:
        "Plan the Mardi Himal trek with our day-by-day itinerary, permit costs, best seasons and packing advice from guides who walk this Annapurna ridge every season.",
      focusKeyword: "Mardi Himal trek",
    });

    expect(check(report, "keyword-in-title")?.status).toBe("good");
    expect(check(report, "keyword-in-description")?.status).toBe("good");
    expect(check(report, "keyword-in-slug")?.status).toBe("good");
    expect(check(report, "keyword-in-intro")?.status).toBe("good");
    expect(check(report, "keyword-in-subheading")?.status).toBe("good");
    expect(check(report, "keyword-in-alt")?.status).toBe("good");
    expect(report.score).toBeGreaterThan(70);
  });

  it("calls out keyword stuffing", () => {
    const stuffed = Array.from({ length: 30 }, () => "<p>Mardi Himal trek is great.</p>").join("");
    const report = analyzeSeo({ html: stuffed, focusKeyword: "Mardi Himal trek" });
    expect(check(report, "keyword-density")?.status).toBe("bad");
  });

  it("treats a body H1 as a duplicate when the template owns the H1", () => {
    const withH1 = analyzeSeo({ html: `<h1>Overview</h1>${longBody}` });
    expect(check(withH1, "heading-h1")?.status).toBe("bad");

    const withoutH1 = analyzeSeo({ html: `<h2>Overview</h2>${longBody}` });
    expect(check(withoutH1, "heading-h1")?.status).toBe("good");
  });

  it("does not flag a body H1 when the body owns the H1", () => {
    const report = analyzeSeo({ html: `<h1>Overview</h1>${longBody}`, titleRendersH1: false });
    expect(check(report, "heading-h1")?.status).toBe("good");
  });

  it("flags a skipped heading level", () => {
    const report = analyzeSeo({ html: `<h2>A</h2><p>x</p><h4>B</h4>${longBody}` });
    expect(check(report, "heading-order")?.status).toBe("warn");
  });

  it("grades title and description length", () => {
    const short = analyzeSeo({ html: longBody, metaTitle: "Mardi", metaDescription: "Too short." });
    expect(check(short, "title-length")?.status).toBe("warn");
    expect(check(short, "description-length")?.status).toBe("warn");

    const missing = analyzeSeo({ html: longBody });
    expect(check(missing, "title-length")?.status).toBe("bad");
    expect(check(missing, "description-length")?.status).toBe("bad");
  });

  it("grades content length against the configured minimum", () => {
    const thin = analyzeSeo({ html: "<p>Short trek page.</p>", minWords: 600 });
    expect(check(thin, "word-count")?.status).toBe("bad");

    const okay = analyzeSeo({ html: longBody, minWords: 300 });
    expect(check(okay, "word-count")?.status).toBe("good");
  });

  it("reports missing alt text", () => {
    const report = analyzeSeo({ html: `${longBody}<img src="a.jpg" />` });
    expect(check(report, "image-alt")?.status).toBe("bad");
    expect(check(report, "image-alt")?.message).toContain("1 of 1");
  });

  it("keeps the score inside 0–100", () => {
    const empty = analyzeSeo({ html: "" });
    expect(empty.score).toBeGreaterThanOrEqual(0);
    expect(empty.score).toBeLessThanOrEqual(100);
    expect(empty.grade).toBe("bad");
  });
});
