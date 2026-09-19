/**
 * Shared builders for blog article content.
 *
 * Each article is written as a compact structured object in ./<cluster>.ts and
 * rendered here into the exact rich-text HTML the blog detail page already
 * styles (`.rich-text` in app/globals.css): h2/h3 headings, paragraphs, lists,
 * `.tableWrapper`-wrapped tables, figure/figcaption images, and blockquotes.
 *
 * Internal links are written as tokens rather than raw hrefs:
 *
 *   [[trek:everest-base-camp-trek|the Everest Base Camp trek]]
 *   [[post:altitude-sickness-nepal-prevention-guide|our altitude guide]]
 *
 * The renderer resolves a trek token against the live category slug, so a
 * product link can never point at the wrong `/[category]/[slug]` prefix, and
 * it throws on a token whose target does not exist. That keeps every internal
 * link in the blog valid by construction.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dk7ggjvlw";

// ─── Content shapes ──────────────────────────────────────────────────

export type Figure = {
  /** Cloudinary public ID — must already exist on a trek hero or gallery. */
  image: string;
  alt: string;
  caption?: string;
};

export type Table = {
  /** Column headers. */
  head: string[];
  rows: string[][];
  /** Rendered as a figcaption-style line under the table. */
  note?: string;
};

export type Block =
  | { p: string }
  | { h3: string }
  | { ul: string[] }
  | { ol: string[] }
  | { table: Table }
  | { figure: Figure }
  | { quote: string };

export type Section = {
  h2: string;
  blocks: Block[];
};

export type BlogContent = {
  slug: string;
  title: string;
  /** Grouping label used only for reporting. */
  cluster: string;
  /** ISO date (YYYY-MM-DD) — drives ordering on the blog index. */
  date: string;
  hero: Figure;
  excerpt: string;
  /** Blocks rendered before the first h2. */
  intro: Block[];
  sections: Section[];
  /** Rendered by the blog page as a server-rendered accordion + FAQPage schema. */
  faqs: { question: string; answer: string }[];
  /**
   * Product pages genuinely relevant to this article, most relevant first.
   * Rendered by the blog page as the Related Treks cards AND used in reverse
   * to build the "Trekking Guides & Articles" section on each of those
   * product pages.
   */
  relatedTreks: string[];
  /** One-line lead-in shown under the Related Treks heading. Plain text. */
  tripsNote?: string;
  /** Articles a reader of this one would actually want next — the Keep Reading cards. */
  relatedPosts: string[];
  tags: string[];
  meta: { title: string; description: string; keywords: string };
};

export type TrekInfo = {
  categorySlug: string;
};

export type TrekIndex = Map<string, TrekInfo>;

// ─── Helpers ─────────────────────────────────────────────────────────

export function cloudinaryUrl(publicId: string, w: number, h: number): string {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_fill,w_${w},h_${h},q_auto,f_auto/${publicId}`;
}

const TOKEN_RE = /\[\[(trek|post):([a-z0-9-]+)\|([^\]]+)\]\]/g;

/** Resolve [[trek:...]] / [[post:...]] tokens into real internal anchors. */
export function resolveLinks(
  text: string,
  treks: TrekIndex,
  postSlugs: Set<string>,
  at: string,
  errors: string[],
): string {
  return text.replace(TOKEN_RE, (_m, kind: string, slug: string, label: string) => {
    if (kind === "trek") {
      const trek = treks.get(slug);
      if (!trek) {
        errors.push(`${at} link token points at unknown trek "${slug}"`);
        return label;
      }
      return `<a href="/${trek.categorySlug}/${slug}">${label}</a>`;
    }
    if (!postSlugs.has(slug)) {
      errors.push(`${at} link token points at unknown article "${slug}"`);
      return label;
    }
    return `<a href="/blog/${slug}">${label}</a>`;
  });
}

/** Plain-text word count of rendered HTML, used by the length validator. */
export function wordCount(html: string): number {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

// ─── Block rendering ─────────────────────────────────────────────────

type Ctx = {
  treks: TrekIndex;
  postSlugs: Set<string>;
  at: string;
  errors: string[];
  images: Set<string>;
};

function inline(text: string, ctx: Ctx): string {
  return resolveLinks(text, ctx.treks, ctx.postSlugs, ctx.at, ctx.errors);
}

function renderFigure(fig: Figure, ctx: Ctx): string {
  if (ctx.images.size > 0 && !ctx.images.has(fig.image)) {
    ctx.errors.push(`${ctx.at} figure uses an image ID not present in Cloudinary data: "${fig.image}"`);
  }
  const caption = fig.caption
    ? `<figcaption>${inline(fig.caption, ctx)}</figcaption>`
    : "";
  return (
    `<figure>` +
    `<img src="${cloudinaryUrl(fig.image, 1200, 800)}" alt="${fig.alt}" width="1200" height="800" loading="lazy">` +
    caption +
    `</figure>`
  );
}

function renderTable(table: Table, ctx: Ctx): string {
  const widths = table.head.length;
  for (const row of table.rows) {
    if (row.length !== widths) {
      ctx.errors.push(`${ctx.at} table row has ${row.length} cells, header has ${widths}`);
    }
  }
  // A fact table written with blank headers (a two-column "at a glance" list)
  // should not render an empty header row.
  const head = table.head.every((h) => h.trim() === "")
    ? ""
    : `<thead><tr>${table.head.map((h) => `<th>${inline(h, ctx)}</th>`).join("")}</tr></thead>`;
  const body = `<tbody>${table.rows
    .map((row) => `<tr>${row.map((c) => `<td>${inline(c, ctx)}</td>`).join("")}</tr>`)
    .join("")}</tbody>`;
  const note = table.note ? `<figcaption>${inline(table.note, ctx)}</figcaption>` : "";
  return `<div class="tableWrapper"><table>${head}${body}</table>${note}</div>`;
}

function renderBlock(block: Block, ctx: Ctx): string {
  if ("p" in block) return `<p>${inline(block.p, ctx)}</p>`;
  if ("h3" in block) return `<h3>${inline(block.h3, ctx)}</h3>`;
  if ("ul" in block) return `<ul>${block.ul.map((i) => `<li>${inline(i, ctx)}</li>`).join("")}</ul>`;
  if ("ol" in block) return `<ol>${block.ol.map((i) => `<li>${inline(i, ctx)}</li>`).join("")}</ol>`;
  if ("table" in block) return renderTable(block.table, ctx);
  if ("figure" in block) return renderFigure(block.figure, ctx);
  return `<blockquote><p>${inline(block.quote, ctx)}</p></blockquote>`;
}

// ─── Article rendering ───────────────────────────────────────────────

/**
 * Render one article body to rich-text HTML: the intro blocks, then the
 * authored h2 sections.
 *
 * The related trips and further reading are deliberately not part of the
 * body. The blog page renders them as card sections from the lists
 * buildRelations() writes, so the trip cards always carry live catalogue data.
 */
export function renderArticle(
  c: BlogContent,
  treks: TrekIndex,
  postSlugs: Set<string>,
  images: Set<string>,
  errors: string[],
): string {
  const ctx: Ctx = { treks, postSlugs, at: `[${c.slug}]`, errors, images };
  const parts: string[] = [];

  for (const block of c.intro) parts.push(renderBlock(block, ctx));

  for (const section of c.sections) {
    parts.push(`<h2>${inline(section.h2, ctx)}</h2>`);
    for (const block of section.blocks) parts.push(renderBlock(block, ctx));
  }

  return parts.join("");
}

// ─── Related trips and reading ───────────────────────────────────────

/** What the blog page shows after an article: trip cards and further reading. */
export type BlogRelation = {
  /** Trek slugs, most relevant first. */
  treks: string[];
  /** Article slugs, most relevant first. */
  posts: string[];
  /** Lead-in under the Related Treks heading. */
  note?: string;
};

/**
 * Every article's related trips and reading, keyed by slug. Written to
 * lib/blog-related.json for the blog page, sorted so the file diffs cleanly.
 */
export function buildRelations(posts: BlogContent[]): Record<string, BlogRelation> {
  const out: Record<string, BlogRelation> = {};
  for (const p of [...posts].sort((a, b) => a.slug.localeCompare(b.slug))) {
    out[p.slug] = {
      treks: p.relatedTreks,
      posts: p.relatedPosts,
      ...(p.tripsNote ? { note: p.tripsNote } : {}),
    };
  }
  return out;
}

// ─── Product-page back-links ─────────────────────────────────────────

/**
 * Stable custom-section ID for the "Related Guides" block on a product page.
 *
 * Mirrors the scheme in scripts/trek-content/build.ts (`custom-<stamp>-<hash>`)
 * but offsets the stamp past the six content sections that script writes, so
 * re-running either one can never collide with the other's IDs.
 */
export function guidesSectionId(slug: string): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const stamp = 1787400000000 + (h % 100000000) + 50;
  const suffix = h.toString(36).slice(0, 4).padEnd(4, "0");
  return `custom-${stamp}-${suffix}`;
}

export const GUIDES_HEADING = "Trekking Guides & Articles";

/**
 * Render the product-page "Related Guides" list: the articles that actually
 * reference this trip, newest and most specific first.
 */
export function renderGuidesSection(
  posts: { slug: string; title: string; excerpt: string }[],
): string {
  const items = posts
    .map(
      (p) =>
        `<li><p><a href="/blog/${p.slug}"><strong>${p.title}</strong></a> — ${firstSentence(p.excerpt)}</p></li>`,
    )
    .join("");
  return `<ul>${items}</ul><p></p>`;
}

/**
 * First sentence of an excerpt, used as the one-line blurb on product pages.
 * A long opening sentence is cut at the last clause boundary rather than
 * mid-phrase, so the blurb always reads as a finished thought.
 */
function firstSentence(text: string): string {
  const stripped = text.replace(/<[^>]*>/g, "").trim();
  const match = stripped.match(/^.*?[.!?](?=\s|$)/);
  const out = (match ? match[0] : stripped).trim();
  if (out.length <= 180) return out;
  const head = out.slice(0, 176);
  for (const sep of [" — ", ", "]) {
    const i = head.lastIndexOf(sep);
    if (i > 90) return `${head.slice(0, i)}.`;
  }
  return `${head.slice(0, head.lastIndexOf(" "))}…`;
}
