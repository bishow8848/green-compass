/**
 * Write the Nepal travel blog: one published BlogPost per entry in
 * scripts/blog-content/*, all under the author "Bishow", plus the links
 * between the articles and the product pages they relate to.
 *
 * Internal linking is generated from one source of truth — each article's
 * `relatedTreks` list:
 *   article -> product   the Related Treks cards under the article (+ inline links)
 *   product -> article   a "Trekking Guides & Articles" section on that page
 * A product with no genuinely related article gets no section at all.
 *
 * Product sections whose topic matches a planning article also get one
 * closing sentence linking to it (a Packing List section -> the packing list
 * guide). The rules are in blog-content/topic-links.ts.
 *
 * Each article's related trips and further reading are written to
 * lib/blog-related.json, which the blog page renders as card sections. That
 * file is rewritten on every successful run, dry runs included — commit it
 * together with the content change.
 *
 * Validates before writing: every link token resolves to a real trek or
 * article, every image ID exists in Cloudinary data, no duplicate slugs, and
 * each article meets minimum depth (sections, FAQs, word count).
 *
 * Usage:
 *   npx tsx scripts/apply-blog-content.mts            # dry run (default)
 *   npx tsx scripts/apply-blog-content.mts --apply    # write to the database
 */
import "dotenv/config";
import { writeFileSync } from "node:fs";
import { prisma } from "../lib/prisma";
import {
  GUIDES_HEADING,
  buildRelations,
  guidesSectionId,
  renderArticle,
  renderGuidesSection,
  wordCount,
  type BlogContent,
  type TrekIndex,
} from "./blog-content/build";
import { ALL_POSTS } from "./blog-content/index";
import { TOPIC_ARTICLES, addTopicLinks } from "./blog-content/topic-links";

const APPLY = process.argv.includes("--apply");
const RELATIONS_FILE = new URL("../lib/blog-related.json", import.meta.url);

const AUTHOR = {
  name: "Bishow",
  slug: "bishow",
  role: "Founder & Trek Leader, Green Compass Treks",
  bio:
    "<p>Bishow has been organising treks, peak climbs, and tours across Nepal for over a decade, " +
    "from the teahouse trails of Annapurna and Everest to the restricted valleys of Mustang, Manaslu, " +
    "and Dolpo. He writes the guides on this site from the trail itself — the permit desks, the lodge " +
    "dining rooms, the pass crossings, and the questions guests actually ask before they book.</p>" +
    "<p>Every article here is written to answer a real planning question: when to go, what it costs, " +
    "how hard it is, and which route fits the time you have. If something on the site is out of date " +
    "or you need advice on a specific itinerary, get in touch — the team replies within 24 hours.</p>",
};

/**
 * Minimum depth for an article to count as a detailed guide. Words are counted
 * on the article body alone — the related trips and further reading are card
 * sections rendered by the page, not part of the body.
 */
const MIN_WORDS = 700;
const MIN_SECTIONS = 4;
const MIN_FAQS = 5;
/** Most articles linked from a single product page. */
const MAX_GUIDES_PER_TREK = 6;

function validate(
  posts: BlogContent[],
  treks: TrekIndex,
  rendered: Map<string, string>,
  images: Set<string>,
  errors: string[],
  warnings: string[],
) {
  const allSlugs = new Set(posts.map((p) => p.slug));
  const seenSlug = new Set<string>();
  const seenTitle = new Set<string>();
  for (const p of posts) {
    const at = `[${p.slug}]`;
    if (seenSlug.has(p.slug)) errors.push(`${at} duplicate slug`);
    seenSlug.add(p.slug);
    if (seenTitle.has(p.title)) errors.push(`${at} duplicate title "${p.title}"`);
    seenTitle.add(p.title);

    if (!/^[a-z0-9-]+$/.test(p.slug)) errors.push(`${at} slug is not URL-safe`);
    // The hero is not part of the rendered body, so it is checked here rather
    // than by the renderer's figure validation.
    if (images.size > 0 && !images.has(p.hero.image)) {
      errors.push(`${at} hero uses an image ID not present in Cloudinary data: "${p.hero.image}"`);
    }
    if (!p.hero.alt.trim()) errors.push(`${at} hero image has no alt text`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p.date)) errors.push(`${at} bad date "${p.date}"`);
    if (p.sections.length < MIN_SECTIONS) {
      errors.push(`${at} has ${p.sections.length} sections, expected at least ${MIN_SECTIONS}`);
    }
    if (p.faqs.length < MIN_FAQS) {
      errors.push(`${at} has ${p.faqs.length} FAQs, expected at least ${MIN_FAQS}`);
    }
    for (const f of p.faqs) {
      if (!f.question.trim() || !f.answer.trim()) errors.push(`${at} empty FAQ entry`);
      if (!/[?]$/.test(f.question.trim())) warnings.push(`${at} FAQ question has no "?": ${f.question}`);
    }

    const words = wordCount(rendered.get(p.slug) ?? "");
    if (words < MIN_WORDS) errors.push(`${at} only ${words} words, expected at least ${MIN_WORDS}`);

    if (p.excerpt.length < 80) errors.push(`${at} excerpt is too short (${p.excerpt.length} chars)`);
    if (p.excerpt.length > 320) warnings.push(`${at} excerpt is ${p.excerpt.length} chars (long)`);
    if (p.meta.title.length > 70) warnings.push(`${at} metaTitle is ${p.meta.title.length} chars (>70)`);
    if (p.meta.description.length > 165) {
      warnings.push(`${at} metaDescription is ${p.meta.description.length} chars (>165)`);
    }
    if (p.meta.description.length < 70) {
      warnings.push(`${at} metaDescription is ${p.meta.description.length} chars (short)`);
    }
    if (p.tags.length === 0) errors.push(`${at} has no tags`);

    if (p.relatedPosts.includes(p.slug)) errors.push(`${at} relatedPosts links to itself`);
    if (new Set(p.relatedPosts).size !== p.relatedPosts.length) {
      errors.push(`${at} duplicate entry in relatedPosts`);
    }
    for (const slug of p.relatedPosts) {
      if (!allSlugs.has(slug)) errors.push(`${at} relatedPosts has unknown article "${slug}"`);
    }
    if (new Set(p.relatedTreks).size !== p.relatedTreks.length) {
      errors.push(`${at} duplicate entry in relatedTreks`);
    }
    for (const slug of p.relatedTreks) {
      if (!treks.has(slug)) errors.push(`${at} relatedTreks has unknown trek "${slug}"`);
    }
    if (p.tripsNote?.includes("[[")) {
      errors.push(`${at} tripsNote is shown as plain text and cannot hold link tokens`);
    }
  }
}

async function main() {
  const errors: string[] = [];
  const warnings: string[] = [];

  // ── Live catalogue: trek index, valid Cloudinary IDs ──
  const trekRows = await prisma.trek.findMany({
    select: {
      id: true, slug: true, region: true, maxAltitude: true, heroImage: true,
      customSections: true, sectionOrder: true,
      category: { select: { slug: true } },
      galleryImages: { select: { imageId: true } },
    },
  });

  const treks: TrekIndex = new Map();
  const images = new Set<string>();
  for (const t of trekRows) {
    if (!t.category?.slug) {
      warnings.push(`[trek:${t.slug}] has no category — cannot be linked from an article`);
      continue;
    }
    treks.set(t.slug, { categorySlug: t.category.slug });
    if (t.heroImage) images.add(t.heroImage);
    for (const g of t.galleryImages) images.add(g.imageId);
  }

  const postSlugs = new Set(ALL_POSTS.map((p) => p.slug));
  for (const slug of TOPIC_ARTICLES) {
    if (!postSlugs.has(slug)) errors.push(`[topic-links] points at unknown article "${slug}"`);
  }

  // ── Render every article (collects link/image errors as it goes) ──
  const rendered = new Map<string, string>();
  for (const p of ALL_POSTS) {
    rendered.set(p.slug, renderArticle(p, treks, postSlugs, images, errors));
  }

  validate(ALL_POSTS, treks, rendered, images, errors, warnings);

  // ── Reverse index: product page -> articles about it ──
  const guidesByTrek = new Map<string, BlogContent[]>();
  for (const p of ALL_POSTS) {
    for (const slug of p.relatedTreks) {
      if (!treks.has(slug)) continue;
      const list = guidesByTrek.get(slug) ?? [];
      list.push(p);
      guidesByTrek.set(slug, list);
    }
  }
  // Rank the articles a product page links to, most relevant first:
  //   1. an article whose own slug contains the trip's slug is about this trip
  //   2. each article lists its trips most-relevant-first, so position 0 means
  //      the trip is the article's main subject
  //   3. among equals, the route overview guide leads
  //   4. then articles covering fewer trips, which are the more specific ones
  const isAbout = (postSlug: string, trekSlug: string) => (postSlug.includes(trekSlug) ? 0 : 1);
  const isOverview = (postSlug: string) => (/-guide$/.test(postSlug) ? 0 : 1);
  for (const [slug, list] of guidesByTrek) {
    list.sort(
      (a, b) =>
        isAbout(a.slug, slug) - isAbout(b.slug, slug) ||
        a.relatedTreks.indexOf(slug) - b.relatedTreks.indexOf(slug) ||
        isOverview(a.slug) - isOverview(b.slug) ||
        a.relatedTreks.length - b.relatedTreks.length ||
        a.title.localeCompare(b.title),
    );
    guidesByTrek.set(slug, list.slice(0, MAX_GUIDES_PER_TREK));
  }

  // ── Product pages: topic links in content sections, plus the guides list ──
  const productUpdates: { id: string; data: { customSections: string; sectionOrder?: string } }[] = [];
  const topicLinks: { product: string; heading: string; article: string }[] = [];
  let guidesSections = 0;
  for (const row of trekRows) {
    if (!row.category?.slug) continue;

    let custom: any[];
    try {
      const parsed = JSON.parse(row.customSections || "[]");
      if (!Array.isArray(parsed)) throw new Error("not an array");
      custom = parsed;
    } catch {
      warnings.push(`[trek:${row.slug}] customSections is not valid JSON — skipped`);
      continue;
    }
    let order: string[] = [];
    try {
      const parsed = JSON.parse(row.sectionOrder || "[]");
      if (Array.isArray(parsed)) order = parsed.filter((i: unknown) => typeof i === "string");
    } catch {
      order = [];
    }
    const orderBefore = JSON.stringify(order);

    const linked = addTopicLinks(
      custom,
      { slug: row.slug, category: row.category.slug, region: row.region, maxAltitude: row.maxAltitude },
      GUIDES_HEADING,
    );
    custom = linked.sections;
    for (const l of linked.links) topicLinks.push({ product: row.slug, ...l });

    const posts = guidesByTrek.get(row.slug);
    if (posts) {
      const id = guidesSectionId(row.slug);
      const section = {
        id,
        type: "custom",
        visible: false,
        label: "Custom Section",
        data: { heading: GUIDES_HEADING, content: renderGuidesSection(posts) },
      };

      const idx = custom.findIndex((s) => s?.id === id);
      if (idx >= 0) custom[idx] = section;
      else custom.push(section);

      if (!order.includes(id)) {
        // Sit the guides list after the gallery, so it closes the page content
        // just before the contact form and similar-trips blocks.
        const anchor = order.indexOf("gallery");
        if (anchor >= 0) order.splice(anchor + 1, 0, id);
        else order.push(id);
      }
      guidesSections++;
    }

    const customSections = JSON.stringify(custom);
    const sectionOrder = JSON.stringify(order);
    const orderChanged = sectionOrder !== orderBefore;
    if (customSections !== (row.customSections || "[]") || orderChanged) {
      productUpdates.push({
        id: row.id,
        data: { customSections, ...(orderChanged ? { sectionOrder } : {}) },
      });
    }
  }

  // ── Report ──
  const words = [...rendered.values()].map(wordCount);
  const total = words.reduce((a, b) => a + b, 0);
  console.log(`Articles:        ${ALL_POSTS.length}`);
  console.log(`Words:           ${total.toLocaleString("en-US")} total, ${Math.round(total / ALL_POSTS.length)} average, ${Math.min(...words)} shortest`);
  console.log(`FAQs:            ${ALL_POSTS.reduce((n, p) => n + p.faqs.length, 0)}`);
  console.log(`Article -> trip links: ${ALL_POSTS.reduce((n, p) => n + p.relatedTreks.length, 0)}`);
  console.log(`Product pages receiving a guides section: ${guidesSections} of ${treks.size}`);
  console.log(
    `Topic links in product sections: ${topicLinks.length} across ${new Set(topicLinks.map((l) => l.product)).size} pages`,
  );
  const byTopic = new Map<string, number>();
  for (const l of topicLinks) {
    const key = `${l.heading} -> ${l.article}`;
    byTopic.set(key, (byTopic.get(key) ?? 0) + 1);
  }
  for (const [key, n] of [...byTopic].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(4)}  ${key}`);
  }
  console.log(`Product pages with changes to write: ${productUpdates.length}`);

  const byCluster = new Map<string, number>();
  for (const p of ALL_POSTS) byCluster.set(p.cluster, (byCluster.get(p.cluster) ?? 0) + 1);
  console.log(`Clusters:        ${[...byCluster].map(([c, n]) => `${c} (${n})`).join(", ")}`);

  if (warnings.length > 0) {
    console.log(`\n${warnings.length} warning(s):`);
    for (const w of warnings.slice(0, 40)) console.log(`  ! ${w}`);
    if (warnings.length > 40) console.log(`  ... ${warnings.length - 40} more`);
  }
  if (errors.length > 0) {
    console.error(`\n${errors.length} error(s):`);
    for (const e of errors.slice(0, 60)) console.error(`  x ${e}`);
    if (errors.length > 60) console.error(`  ... ${errors.length - 60} more`);
    console.error("\nNothing was written.");
    process.exit(1);
  }

  // ── Related trips and reading for the blog page (a repo file, not the DB) ──
  const relations = buildRelations(ALL_POSTS);
  writeFileSync(RELATIONS_FILE, `${JSON.stringify(relations, null, 2)}\n`);
  console.log(`\nWrote lib/blog-related.json (${Object.keys(relations).length} articles).`);

  if (!APPLY) {
    console.log("\nDry run — pass --apply to write to the database.");
    await prisma.$disconnect();
    return;
  }

  // ── Author ──
  await prisma.author.upsert({
    where: { slug: AUTHOR.slug },
    update: { name: AUTHOR.name, role: AUTHOR.role, bio: AUTHOR.bio },
    create: { name: AUTHOR.name, slug: AUTHOR.slug, role: AUTHOR.role, bio: AUTHOR.bio },
  });
  console.log(`\nAuthor upserted: ${AUTHOR.name} (/author/${AUTHOR.slug})`);

  // ── Articles ──
  let created = 0;
  let updated = 0;
  for (const p of ALL_POSTS) {
    const data = {
      title: p.title,
      author: AUTHOR.name,
      authorSlug: AUTHOR.slug,
      publishedDate: new Date(`${p.date}T06:00:00.000Z`),
      heroImage: p.hero.image,
      excerpt: p.excerpt,
      content: rendered.get(p.slug)!,
      tags: JSON.stringify(p.tags),
      metaTitle: p.meta.title,
      metaDescription: p.meta.description,
      keywords: p.meta.keywords,
      ogImage: p.hero.image,
      faqs: JSON.stringify(p.faqs),
      status: "published",
    };
    const existing = await prisma.blogPost.findUnique({ where: { slug: p.slug }, select: { id: true } });
    if (existing) {
      await prisma.blogPost.update({ where: { slug: p.slug }, data });
      updated++;
    } else {
      await prisma.blogPost.create({ data: { ...data, slug: p.slug } });
      created++;
    }
  }
  console.log(`Articles: ${created} created, ${updated} updated`);

  // ── Product pages ──
  for (const u of productUpdates) {
    await prisma.trek.update({ where: { id: u.id }, data: u.data });
  }
  console.log(
    `Product pages updated: ${productUpdates.length} (${guidesSections} with a guides section, ${topicLinks.length} topic links)`,
  );

  await prisma.$disconnect();
  console.log("\nDone. Run `npm run cache:reset` so the site serves the new content.");
}

main().catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
