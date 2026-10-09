/**
 * Contextual links from product-page sections to the planning article on the
 * same subject: a product's "Packing List" section points readers at the
 * packing list guide, its "Travel Insurance" section at the insurance guide,
 * and so on.
 *
 * A link is only added where it genuinely belongs:
 *   - the section heading has to name the article's topic,
 *   - the product has to be the kind of trip the article is written for — a
 *     trekking packing list does not belong on a city tour, nor the
 *     trekking-peak gear list on an 8,000 m expedition,
 *   - and each article is linked at most once per page.
 * Every other section is left exactly as it is.
 *
 * A link is one closing sentence in its own paragraph, marked with the
 * `guide-link` class so a re-run replaces it instead of adding a second one.
 */

export type ProductInfo = {
  slug: string;
  /** Category slug: treks | climbing | tours | activities. */
  category: string;
  region: string | null;
  maxAltitude: number | null;
};

export type TopicLink = { heading: string; article: string };

type Rule = {
  heading: RegExp;
  /** The article for this product and section, or null when none fits. */
  article: (p: ProductInfo, html: string, heading: string) => string | null;
};

/** Climbing products above trekking-peak level. */
const isExpedition = (p: ProductInfo) => p.slug.includes("expedition");

/** Everest-region treks that reach the upper Khumbu: Base Camp, Gokyo, the passes. */
const isHighKhumbu = (p: ProductInfo) =>
  p.region === "Everest Region" && (p.maxAltitude ?? 0) >= 5000;

/**
 * The heading decides the topic: the first rule whose heading matches is the
 * only one consulted, so more specific headings come first.
 */
const RULES: Rule[] = [
  {
    // "Packing List", "Packing List & Climbing Equipment", "Trekking Gear & Packing", ...
    heading: /^(packing list|trekking gear|trekking equipment)/i,
    article: (p) => {
      if (p.category === "treks") {
        return isHighKhumbu(p) ? "everest-base-camp-packing-list" : "nepal-trekking-packing-list";
      }
      if (p.category === "climbing" && !isExpedition(p)) return "peak-climbing-gear-list";
      return null;
    },
  },
  {
    heading: /insurance/i,
    // The guide covers trekking cover and the mountaineering clause a
    // trekking peak needs; expedition insurance is a different product.
    article: (p) =>
      p.category === "treks" || (p.category === "climbing" && !isExpedition(p))
        ? "travel-insurance-for-trekking-in-nepal"
        : null,
  },
  {
    heading: /^best time to trek/i,
    article: (p) => {
      if (p.category !== "treks") return null;
      return isHighKhumbu(p)
        ? "best-time-for-everest-base-camp-trek"
        : "best-time-to-visit-nepal-trekking-seasons";
    },
  },
  {
    heading: /^altitude/i,
    article: (p) =>
      p.category === "treks" ? "altitude-sickness-in-nepal-prevention-and-treatment" : null,
  },
  {
    heading: /permit/i,
    article: (p, html) => {
      if (p.category === "climbing") return "nma-peak-permits-and-fees";
      if (p.category !== "treks") return null;
      if (/restricted/i.test(html)) return "restricted-area-trekking-permits-in-nepal";
      if (p.region === "Annapurna Region" || /\bACAP\b|Annapurna Conservation/i.test(html)) {
        return "annapurna-region-permits-acap-guide";
      }
      return "nepal-trekking-permits-explained";
    },
  },
  {
    // "Accommodation, Food & Drinking Water", "Food & Meals", "Accommodation", ...
    // Only teahouse routes — the lodge guide says nothing about camping.
    heading: /^(accommodation|food)/i,
    article: (p, html) =>
      (p.category === "treks" || p.category === "climbing") && /tea ?houses?/i.test(html)
        ? "teahouse-trekking-in-nepal-explained"
        : null,
  },
  {
    // Camping and homestay routes: "Camping, Food & Drinking Water", ...
    heading: /drinking water/i,
    article: (p) => (p.category === "treks" ? "drinking-water-while-trekking-in-nepal" : null),
  },
  {
    heading: /difficulty|fitness|experience|training/i,
    article: (p, _html, heading) => {
      if (p.category === "treks") {
        return /fitness/i.test(heading)
          ? "how-to-train-for-a-nepal-trek"
          : "nepal-trek-difficulty-grades-explained";
      }
      if (p.category !== "climbing") return null;
      // An expedition's experience bar, and a trekking peak's technical
      // grade, are about rope work. A trekking peak's experience section is
      // about whether you are ready for a first summit.
      if (isExpedition(p) || !/experience|training/i.test(heading)) {
        return "fixed-rope-and-jumar-skills-for-nepal-peaks";
      }
      return "peak-climbing-in-nepal-beginners-guide";
    },
  },
];

/** The closing sentence for each article, written to end the section it follows. */
const COPY: Record<string, (link: (text: string) => string) => string> = {
  "nepal-trekking-packing-list": (a) =>
    `For the complete kit list, organised by the altitude you will reach, see our ${a("Nepal trekking packing list")}.`,
  "everest-base-camp-packing-list": (a) =>
    `Every item is covered in more detail, from layering to sleeping bag ratings, in our ${a("Everest Base Camp packing list")}.`,
  "peak-climbing-gear-list": (a) =>
    `Our ${a("peak climbing gear list")} covers each item in more detail, including which to buy, hire or bring from home.`,
  "travel-insurance-for-trekking-in-nepal": (a) =>
    `Our guide to ${a("travel insurance for trekking in Nepal")} explains the altitude limits, evacuation terms and common exclusions to check before you buy.`,
  "best-time-to-visit-nepal-trekking-seasons": (a) =>
    `For a month-by-month look at weather and trail conditions, see our guide to the ${a("best time to trek in Nepal")}.`,
  "best-time-for-everest-base-camp-trek": (a) =>
    `Our guide to the ${a("best time for the Everest Base Camp trek")} compares every season and month in the Khumbu.`,
  "altitude-sickness-in-nepal-prevention-and-treatment": (a) =>
    `Prevention, symptoms and treatment are covered in depth in our ${a("guide to altitude sickness in Nepal")}.`,
  "nepal-trekking-permits-explained": (a) =>
    `Our ${a("Nepal trekking permits guide")} explains what each permit covers and what we arrange on your behalf.`,
  "annapurna-region-permits-acap-guide": (a) =>
    `Our guide to ${a("Annapurna region permits")} explains the ACAP permit and the checkpoints where it is inspected.`,
  "restricted-area-trekking-permits-in-nepal": (a) =>
    `The fees and conditions for every restricted area are set out in our guide to ${a("restricted area permits in Nepal")}.`,
  "nma-peak-permits-and-fees": (a) =>
    `How climbing permits are priced, including the seasonal fees, is explained in our guide to ${a("NMA peak permits and fees")}.`,
  "teahouse-trekking-in-nepal-explained": (a) =>
    `What the lodges are really like, from rooms and meals to showers and charging, is covered in our guide to ${a("teahouse trekking in Nepal")}.`,
  "drinking-water-while-trekking-in-nepal": (a) =>
    `The ways to treat water on the trail are compared side by side in our ${a("guide to drinking water while trekking")}.`,
  "how-to-train-for-a-nepal-trek": (a) =>
    `To build that fitness step by step, follow our ${a("12-week training plan for a Nepal trek")}.`,
  "nepal-trek-difficulty-grades-explained": (a) =>
    `To see where this trek sits among Nepal's routes, read our guide to ${a("Nepal trek difficulty grades")}.`,
  "peak-climbing-in-nepal-beginners-guide": (a) =>
    `If this would be your first Himalayan summit, our ${a("beginner's guide to peak climbing in Nepal")} covers the skills you need and how to judge whether you are ready.`,
  "fixed-rope-and-jumar-skills-for-nepal-peaks": (a) =>
    `The rope techniques used on the climb are explained step by step in our guide to ${a("fixed rope and jumar skills")}.`,
};

/** Every article a topic link can point at — validated against the blog. */
export const TOPIC_ARTICLES = Object.keys(COPY);

const GUIDE_LINK_RE = /<p class="guide-link">[\s\S]*?<\/p>/g;

function linkParagraph(article: string): string {
  const sentence = COPY[article]((text) => `<a href="/blog/${article}">${text}</a>`);
  return `<p class="guide-link">${sentence}</p>`;
}

/** Append before the empty trailing paragraphs and headings the admin editor leaves behind. */
function appendParagraph(html: string, paragraph: string): string {
  const trailing = html.match(/(?:<(?:p|h[1-6])>\s*<\/(?:p|h[1-6])>\s*)+$/);
  if (!trailing || trailing.index === undefined) return html + paragraph;
  return html.slice(0, trailing.index) + paragraph + trailing[0];
}

/**
 * Return the product's custom sections with topic links applied, plus the
 * links that were placed. Sections are copied, never mutated; a section the
 * rules do not touch is returned as the same object.
 */
export function addTopicLinks(
  sections: any[],
  product: ProductInfo,
  skipHeading: string,
): { sections: any[]; links: TopicLink[] } {
  const linked = new Set<string>();
  const links: TopicLink[] = [];

  const out = sections.map((section) => {
    const heading = String(section?.data?.heading ?? "").trim();
    const content = section?.data?.content;
    if (typeof content !== "string" || heading === skipHeading) return section;

    // Drop the sentence a previous run added, so the rules decide afresh.
    let html = content.replace(GUIDE_LINK_RE, "");
    const rule = RULES.find((r) => r.heading.test(heading));
    const article = rule?.article(product, html, heading) ?? null;
    if (article && !linked.has(article) && !html.includes(`href="/blog/${article}"`)) {
      html = appendParagraph(html, linkParagraph(article));
      linked.add(article);
      links.push({ heading, article });
    }

    return html === content ? section : { ...section, data: { ...section.data, content: html } };
  });

  return { sections: out, links };
}
