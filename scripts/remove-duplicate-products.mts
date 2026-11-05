/**
 * Deletes trips that duplicate another product, and sends everything that
 * pointed at them to the product that stays.
 *
 * Every trek and multi-day tour is meant to be sold exactly twice — city to
 * city and as a complete package (lib/package-variants.ts). A trip that is the
 * same journey as another one (a "short" version with the same days, a tour one
 * day longer) splits its searches and reviews with it, so it goes, in order:
 *
 *   1. A permanent redirect from each removed URL to its replacement (proxy.ts
 *      reads legacy_redirects; the trip page redirects too), with chains
 *      collapsed onto the final page.
 *   2. Similar Treks lists, the header dropdown and the home page's featured
 *      treks swap the removed trip for its replacement.
 *   3. Links in blog posts and trip pages follow it. A table row that would now
 *      repeat a product the table already lists is dropped instead.
 *      The local blog sources (scripts/blog-content, lib/blog-related.json)
 *      get the same change, so re-running those scripts keeps it.
 *   4. The trip is deleted, with its itinerary, prices, FAQs, gallery rows and
 *      reviews. Its Cloudinary images stay: other pages and posts use them.
 *
 * Everything removed or changed is saved to scripts/.backups/ first, and
 * --restore puts it all back (records keep their ids).
 *
 *   npx tsx scripts/remove-duplicate-products.mts --dry-run
 *   npx tsx scripts/remove-duplicate-products.mts
 *   npx tsx scripts/remove-duplicate-products.mts --restore scripts/.backups/remove-duplicates-<stamp>.json
 */
import "dotenv/config";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";
import { normalizeLegacyPath } from "@/lib/legacy-redirect-path";

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const RESTORE = args.includes("--restore") ? args[args.indexOf("--restore") + 1] : undefined;
const PROJECT_ROOT = fileURLToPath(new URL("..", import.meta.url));
const BACKUP_DIR = join(PROJECT_ROOT, "scripts", ".backups");

/** [removed, kept]: a city-to-city trip goes to a city-to-city trip, a package to a package. */
const MERGES: Array<[string, string]> = [
  ["short-tilicho-lake-trek", "tilicho-lake-trek"],
  ["short-tilicho-lake-trek-package", "tilicho-lake-trek-package"],
  // A complete package with no city-to-city version: the same days as Glimpse of Nepal's package.
  ["kathmandu-valley-tour", "glimpse-of-nepal-tour-package"],
  ["chitwan-national-park-tour-4-days", "chitwan-national-park-tour-3-days"],
  ["chitwan-national-park-tour-4-days-package", "chitwan-national-park-tour-3-days-package"],
  ["bardia-national-park-tour-4-days", "bardia-jungle-safari-tour-5-days"],
  ["bardia-national-park-tour-4-days-package", "bardia-jungle-safari-tour-5-days-package"],
  ["short-annapurna-circuit-trek", "annapurna-circuit-trek"],
  ["short-annapurna-circuit-trek-package", "annapurna-circuit-trek-package"],
  ["kathmandu-pokhara-honeymoon-tour", "nepal-honeymoon-tour"],
  ["kathmandu-pokhara-honeymoon-tour-package", "nepal-honeymoon-tour-package"],
  ["pokhara-honeymoon-tour", "nepal-honeymoon-tour"],
  ["pokhara-honeymoon-tour-package", "nepal-honeymoon-tour-package"],
];

type Move = { fromId: string; toId: string; fromSlug: string; toSlug: string; fromPath: string; toPath: string };

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Repoints links to removed trips. Inside a table that already links the trip
 * that stays, the removed trip's row is dropped rather than repeated.
 */
export function rewriteHtml(html: string, moves: Move[]): { text: string; count: number } {
  let count = 0;
  let out = html.replace(/<table[\s\S]*?<\/table>/g, (table) => {
    let t = table;
    for (const m of moves) {
      if (!t.includes(`href="${m.fromPath}"`) || !t.includes(`href="${m.toPath}"`)) continue;
      t = t.replace(new RegExp(`<tr>(?:(?!</tr>)[\\s\\S])*?href="${escapeRe(m.fromPath)}"(?:(?!</tr>)[\\s\\S])*</tr>`, "g"), () => {
        count++;
        return "";
      });
    }
    return t;
  });
  for (const m of moves) {
    out = out.replace(new RegExp(`href="${escapeRe(m.fromPath)}([?#"])`, "g"), (_, end: string) => {
      count++;
      return `href="${m.toPath}${end}`;
    });
  }
  return { text: out, count };
}

/** The blog sources' `[[trek:slug|text]]` markup and slug lists, with the same row rule. */
export function rewriteSource(text: string, moves: Move[]): { text: string; count: number } {
  let count = 0;
  const lines = text.split("\n");
  const out: string[] = [];
  lines.forEach((line, i) => {
    const neighbourhood = lines.slice(Math.max(0, i - 15), i + 16).join("\n");
    const move = moves.find((m) => line.includes(`[[trek:${m.fromSlug}|`));
    // A table row (an array literal on its own line) next to a row for the trip that stays.
    if (move && /^\s*\[\s*"\[\[trek:/.test(line) && neighbourhood.includes(`[[trek:${move.toSlug}|`)) {
      count++;
      return;
    }
    let next = line;
    for (const m of moves) {
      next = next.split(`[[trek:${m.fromSlug}|`).join(`[[trek:${m.toSlug}|`).split(`"${m.fromSlug}"`).join(`"${m.toSlug}"`);
    }
    if (next !== line) count++;
    out.push(next);
  });
  return { text: out.join("\n"), count };
}

function remapIds(json: string | null, map: Map<string, string>, self?: string): string | null {
  if (!json) return json;
  try {
    const parsed = JSON.parse(json);
    const swap = (ids: unknown) =>
      Array.isArray(ids) ? [...new Set(ids.map((id) => (typeof id === "string" ? map.get(id) ?? id : id)))].filter((id) => id !== self) : ids;
    const next = Array.isArray(parsed) ? swap(parsed) : Object.fromEntries(Object.entries(parsed).map(([k, v]) => [k, swap(v)]));
    const out = JSON.stringify(next);
    return out === JSON.stringify(parsed) ? json : out;
  } catch {
    return json;
  }
}

type Backup = {
  removed: Array<Record<string, unknown> & { id: string }>;
  treks: Array<{ id: string; similarTrekIds: string | null; overview: string; customSections: string | null; faqs: Array<{ id: string; answer: string }> }>;
  posts: Array<{ id: string; content: string }>;
  dropdown: string | null;
  featured: string | null;
  redirects: { created: string[]; updated: Array<{ id: string; newPath: string }> };
  sources: Record<string, string>;
};

async function restore(file: string) {
  const b = JSON.parse(readFileSync(file, "utf8")) as Backup;
  for (const r of b.removed) {
    const { itinerary, pricingTiers, faqs, galleryImages, availableDates, reviews, category: _category, ...scalars } = r as Record<string, any>;
    await prisma.$transaction(async (tx) => {
      await tx.trek.create({ data: scalars as never });
      const strip = (rows: Record<string, unknown>[]) => rows.map(({ id: _id, ...rest }) => rest);
      if (itinerary?.length) await tx.itineraryDay.createMany({ data: strip(itinerary) as never });
      if (pricingTiers?.length) await tx.pricingTier.createMany({ data: strip(pricingTiers) as never });
      if (faqs?.length) await tx.trekFaq.createMany({ data: strip(faqs) as never });
      if (galleryImages?.length) await tx.trekGalleryImage.createMany({ data: strip(galleryImages) as never });
      if (availableDates?.length) await tx.availableDate.createMany({ data: strip(availableDates) as never });
      if (reviews?.length) await tx.trekReview.createMany({ data: reviews as never });
    }, { timeout: 60_000 });
  }
  for (const t of b.treks) {
    await prisma.trek.update({ where: { id: t.id }, data: { similarTrekIds: t.similarTrekIds, overview: t.overview, customSections: t.customSections } });
    for (const q of t.faqs) await prisma.trekFaq.update({ where: { id: q.id }, data: { answer: q.answer } }).catch(() => {});
  }
  for (const p of b.posts) await prisma.blogPost.update({ where: { id: p.id }, data: { content: p.content } });
  await prisma.siteSetting.update({ where: { id: "site-settings" }, data: { categoryDropdownTreks: b.dropdown } });
  await prisma.homePageSettings.updateMany({ data: { featuredSectionTrekIds: b.featured } });
  await prisma.legacyRedirect.deleteMany({ where: { id: { in: b.redirects.created } } });
  for (const r of b.redirects.updated) await prisma.legacyRedirect.update({ where: { id: r.id }, data: { newPath: r.newPath } });
  for (const [file, text] of Object.entries(b.sources)) writeFileSync(join(PROJECT_ROOT, file), text);
  console.log(`Restored ${b.removed.length} trip(s) and every reference from ${file}. Refresh the site's cache.`);
}

async function main() {
  if (RESTORE) return restore(RESTORE);

  const slugs = MERGES.flat();
  const found = await prisma.trek.findMany({ where: { slug: { in: slugs } }, select: { id: true, slug: true, status: true, category: { select: { slug: true } } } });
  const bySlug = new Map(found.map((t) => [t.slug, t]));
  const moves: Move[] = [];
  for (const [from, to] of MERGES) {
    const a = bySlug.get(from);
    const b = bySlug.get(to);
    if (!a) {
      console.log(`  ${from}: already gone`);
      continue;
    }
    if (!b || b.status !== "published") throw new Error(`${to} must exist and be published (it replaces ${from})`);
    moves.push({
      fromId: a.id,
      toId: b.id,
      fromSlug: from,
      toSlug: to,
      fromPath: `/${a.category?.slug}/${from}`,
      toPath: `/${b.category?.slug}/${to}`,
    });
  }
  if (moves.length === 0) return console.log("Nothing to remove.");
  const idMap = new Map(moves.map((m) => [m.fromId, m.toId]));
  const removedIds = moves.map((m) => m.fromId);

  const [posts, treks, settings, home] = await Promise.all([
    prisma.blogPost.findMany({ select: { id: true, slug: true, content: true } }),
    prisma.trek.findMany({ where: { id: { notIn: removedIds } }, select: { id: true, slug: true, similarTrekIds: true, overview: true, customSections: true, faqs: { select: { id: true, answer: true } } } }),
    prisma.siteSetting.findUnique({ where: { id: "site-settings" }, select: { categoryDropdownTreks: true } }),
    prisma.homePageSettings.findFirst({ select: { featuredSectionTrekIds: true } }),
  ]);

  const postChanges = posts.map((p) => ({ p, r: rewriteHtml(p.content, moves) })).filter((x) => x.r.count > 0);
  const trekChanges = treks
    .map((t) => {
      const overview = rewriteHtml(t.overview, moves);
      const sections = rewriteHtml(t.customSections ?? "", moves);
      const faqs = t.faqs.map((q) => ({ id: q.id, r: rewriteHtml(q.answer, moves) })).filter((q) => q.r.count > 0);
      const similar = remapIds(t.similarTrekIds, idMap, t.id);
      return { t, overview, sections, faqs, similar };
    })
    .filter((x) => x.overview.count + x.sections.count + x.faqs.length > 0 || x.similar !== x.t.similarTrekIds);
  const dropdown = remapIds(settings?.categoryDropdownTreks ?? null, idMap);
  const featured = remapIds(home?.featuredSectionTrekIds ?? null, idMap);

  const sourceFiles = [
    ...readdirSync(join(PROJECT_ROOT, "scripts", "blog-content")).filter((f) => f.endsWith(".ts")).map((f) => join("scripts", "blog-content", f)),
    join("lib", "blog-related.json"),
  ];
  const sourceChanges = sourceFiles
    .map((file) => {
      const before = readFileSync(join(PROJECT_ROOT, file), "utf8");
      let { text, count } = rewriteSource(before, moves);
      if (file.endsWith(".json") && count > 0) {
        const relations = JSON.parse(text) as Record<string, { treks?: string[] }>;
        for (const r of Object.values(relations)) if (Array.isArray(r.treks)) r.treks = [...new Set(r.treks)];
        text = `${JSON.stringify(relations, null, 2)}\n`;
      }
      return { file, before, text, count };
    })
    .filter((s) => s.text !== s.before);

  console.log(`Removing ${moves.length} page(s):`);
  for (const m of moves) console.log(`  ${m.fromPath} → ${m.toPath}`);
  console.log(
    `Blog posts: ${postChanges.length} (${postChanges.reduce((n, x) => n + x.r.count, 0)} links or rows) | trip pages: ${trekChanges.length} | ` +
      `header dropdown: ${dropdown !== (settings?.categoryDropdownTreks ?? null) ? "updated" : "no change"} | featured: ${featured !== (home?.featuredSectionTrekIds ?? null) ? "updated" : "no change"} | ` +
      `local sources: ${sourceChanges.length} file(s)`
  );
  if (DRY_RUN) {
    for (const { p } of postChanges) {
      for (const m of moves) {
        for (const [anchor] of p.content.matchAll(new RegExp(`<a\\b[^>]*href="${escapeRe(m.fromPath)}"[^>]*>[\\s\\S]*?</a>`, "g"))) {
          console.log(`  ${p.slug}: "${anchor.replace(/<[^>]+>/g, "").trim()}" → ${m.toPath}`);
        }
      }
    }
    console.log("Dry run — nothing written.");
    return;
  }

  const removed = await prisma.trek.findMany({
    where: { id: { in: removedIds } },
    include: { itinerary: true, pricingTiers: true, faqs: true, galleryImages: true, availableDates: true, reviews: true },
  });
  const backup: Backup = {
    removed: removed as never,
    treks: trekChanges.map(({ t }) => ({ id: t.id, similarTrekIds: t.similarTrekIds, overview: t.overview, customSections: t.customSections, faqs: t.faqs })),
    posts: postChanges.map(({ p }) => ({ id: p.id, content: p.content })),
    dropdown: settings?.categoryDropdownTreks ?? null,
    featured: home?.featuredSectionTrekIds ?? null,
    redirects: { created: [], updated: [] },
    sources: Object.fromEntries(sourceChanges.map((s) => [s.file, s.before])),
  };
  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = join(BACKUP_DIR, `remove-duplicates-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
  const save = () => writeFileSync(backupFile, JSON.stringify(backup));
  save();
  console.log(`Backup: ${backupFile}`);

  // 1. Redirects, then chains collapsed onto the final page.
  for (const m of moves) {
    const oldPath = normalizeLegacyPath(m.fromPath);
    const existing = await prisma.legacyRedirect.findUnique({ where: { oldPath } });
    if (existing) {
      backup.redirects.updated.push({ id: existing.id, newPath: existing.newPath });
      await prisma.legacyRedirect.update({ where: { id: existing.id }, data: { newPath: m.toPath, permanent: true, active: true } });
    } else {
      backup.redirects.created.push((await prisma.legacyRedirect.create({ data: { oldPath, newPath: m.toPath, permanent: true, active: true } })).id);
    }
  }
  const all = await prisma.legacyRedirect.findMany({ where: { active: true } });
  const target = new Map(all.map((r) => [normalizeLegacyPath(r.oldPath), r.newPath]));
  for (const r of all) {
    let to = r.newPath;
    for (let hops = 0; target.has(normalizeLegacyPath(to)) && hops < 5; hops++) to = target.get(normalizeLegacyPath(to))!;
    if (to !== r.newPath) {
      if (!backup.redirects.updated.some((u) => u.id === r.id)) backup.redirects.updated.push({ id: r.id, newPath: r.newPath });
      await prisma.legacyRedirect.update({ where: { id: r.id }, data: { newPath: to } });
    }
  }
  save();

  // 2–3. References and links.
  for (const x of trekChanges) {
    await prisma.trek.update({
      where: { id: x.t.id },
      data: { similarTrekIds: x.similar, overview: x.overview.text, ...(x.sections.count ? { customSections: x.sections.text } : {}) },
    });
    for (const q of x.faqs) await prisma.trekFaq.update({ where: { id: q.id }, data: { answer: q.r.text } });
  }
  for (const { p, r } of postChanges) await prisma.blogPost.update({ where: { id: p.id }, data: { content: r.text } });
  if (dropdown !== (settings?.categoryDropdownTreks ?? null)) await prisma.siteSetting.update({ where: { id: "site-settings" }, data: { categoryDropdownTreks: dropdown } });
  if (featured !== (home?.featuredSectionTrekIds ?? null)) await prisma.homePageSettings.updateMany({ data: { featuredSectionTrekIds: featured } });
  for (const s of sourceChanges) writeFileSync(join(PROJECT_ROOT, s.file), s.text);

  // 4. The trips themselves (children cascade).
  await prisma.trek.deleteMany({ where: { id: { in: removedIds } } });
  console.log(
    `Deleted ${removedIds.length} page(s); ${postChanges.length} blog post(s), ${trekChanges.length} trip page(s) and ${sourceChanges.length} source file(s) updated.\n` +
      `Next: npm run cache:refresh -- --revalidate-url https://greencompasstreks.com\nUndo: npx tsx scripts/remove-duplicate-products.mts --restore ${backupFile}`
  );
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
