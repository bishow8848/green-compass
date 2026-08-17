import { describe, it, expect } from "vitest";
import {
  encodeFaqData,
  decodeFaqData,
  extractFaqsFromHtml,
  defaultFaqData,
} from "@/lib/faq-block";
import { sanitizeRichText } from "@/lib/sanitize";

describe("faq-block encoding", () => {
  it("round-trips items including unicode characters", () => {
    const data = {
      heading: "Frequently Asked Questions",
      items: [
        { question: "Best season to trek?", answer: "Spring (March–May) and autumn (Sept–Nov)." },
        { question: "कति दिन लाग्छ?", answer: "७–८ दिन" }, // unicode + devanagari digits
      ],
    };
    const encoded = encodeFaqData(data);
    expect(decodeFaqData(encoded)).toEqual(data);
  });

  it("returns defaults for invalid base64 or malformed JSON", () => {
    expect(decodeFaqData(null)).toEqual(defaultFaqData());
    expect(decodeFaqData("not-base64!!!")).toEqual(defaultFaqData());
    // valid base64 but not an object with items
    expect(decodeFaqData(btoa("just a string"))).toEqual(defaultFaqData());
  });

  it("filters out non-string FAQ items", () => {
    const encoded = encodeFaqData({
      heading: "H",
      items: [
        { question: "Q1", answer: "A1" },
        { question: 123 as unknown as string, answer: null as unknown as string },
      ],
    });
    const decoded = decodeFaqData(encoded);
    expect(decoded.items).toEqual([{ question: "Q1", answer: "A1" }]);
  });
});

describe("extractFaqsFromHtml", () => {
  it("collects FAQs from multiple inline blocks", () => {
    const html = [
      "<p>Intro</p>",
      `<div class="faq-block" data-faq="${encodeFaqData({
        heading: "Section FAQs",
        items: [
          { question: "Q1", answer: "A1" },
          { question: "Q2", answer: "A2" },
        ],
      })}"></div>`,
      "<h2>More</h2>",
      `<div class="faq-block" data-faq="${encodeFaqData({
        heading: "More FAQs",
        items: [{ question: "Q3", answer: "A3" }],
      })}"></div>`,
    ].join("");
    expect(extractFaqsFromHtml(html)).toEqual([
      { question: "Q1", answer: "A1" },
      { question: "Q2", answer: "A2" },
      { question: "Q3", answer: "A3" },
    ]);
  });

  it("returns empty array for html without FAQ blocks", () => {
    expect(extractFaqsFromHtml("<p>Just text</p>")).toEqual([]);
    expect(extractFaqsFromHtml("")).toEqual([]);
  });
});

describe("sanitize keeps FAQ blocks and tables", () => {
  it("preserves data-faq attribute and table structure", () => {
    const encoded = encodeFaqData({
      heading: "H",
      items: [{ question: "Q?", answer: "A." }],
    });
    const html = `
      <div class="faq-block" data-faq="${encoded}"></div>
      <table><thead><tr><th>Col</th></tr></thead><tbody><tr><td>Cell</td></tr></tbody></table>
    `;
    const out = sanitizeRichText(html);
    expect(out).toContain(`data-faq="${encoded}"`);
    expect(out).toContain("<table>");
    expect(out).toContain("<th>");
    expect(out).toContain("<td>");
  });
});
