/**
 * One product page per trip: retires the pages that competed with it.
 *
 *   1. Every "<trip>-package" page (the arrival-to-departure version) is
 *      archived and redirected to the city-to-city page it duplicated. What the
 *      package added — hotel nights, the Kathmandu–Pokhara flight or bus — is
 *      sold on that page as add-ons (scripts/apply-city-addons.mts).
 *   2. Every "<Trip>: The Complete Guide" article listed in
 *      scripts/blog-content/retired.ts is set to draft and redirected to the
 *      product page for that trip.
 *
 * Nothing is deleted: an archived trip keeps its itinerary, prices, gallery
 * and reviews, and a drafted article keeps its text. Around those two changes
 * it also repoints everything that referred to a retired page:
 *
 *   - permanent redirects (proxy.ts reads legacy_redirects), with older
 *     redirects that pointed at a retired page collapsed onto the final page
 *   - Similar Treks lists, the header dropdown, the home page's featured trips
 *   - links in blog posts and trip pages. A link to a package keeps its words
 *     but takes the surviving trip's length and start city ("9-day trek from
 *     Kathmandu" becomes "5-day trek from Pokhara"); a table row that would
 *     repeat a trip the table already lists is dropped; a product page's
 *     "Trekking Guides & Articles" list loses the retired guides
 *   - the article sources (scripts/blog-content/*.ts) and lib/blog-related.json,
 *     so re-running the blog pipeline keeps the change. An article whose
 *     database text matched its source before is written from the source
 *     again afterwards, so the two stay identical.
 *
 * Every row and file it changes is saved to scripts/.backups/ first.
 *
 *   npx tsx scripts/retire-packages-and-guides.mts --dry-run
 *   npx tsx scripts/retire-packages-and-guides.mts
 *   npx tsx scripts/retire-packages-and-guides.mts --restore scripts/.backups/retire-pages-<stamp>.json
 *
 * Afterwards: npm run cache:refresh -- --revalidate-url https://greencompasstreks.com
 */
import "dotenv/config";
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";
import { normalizeLegacyPath } from "@/lib/legacy-redirect-path";
import { PACKAGE_SLUG_SUFFIX, startCity } from "@/lib/package-variants";
import { GUIDES_HEADING } from "./blog-content/build";
import { RETIRED_GUIDES } from "./blog-content/retired";

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const RESTORE = args.includes("--restore") ? args[args.indexOf("--restore") + 1] : undefined;
const PROJECT_ROOT = fileURLToPath(new URL("..", import.meta.url));
const BACKUP_DIR = join(PROJECT_ROOT, "scripts", ".backups");
const RELATIONS_FILE = join("lib", "blog-related.json");

/** A package page and the city-to-city page that replaces it. */
type PackageMove = {
  fromId: string; toId: string; fromSlug: string; toSlug: string; fromPath: string; toPath: string;
  fromDays: number; toDays: number;
  /** Where the surviving trip starts, when that is not Kathmandu. */
  toStart: string | null;
};
/** A retired guide and the product page that replaces it. */
type GuideMove = { postId: string; slug: string; fromPath: string; toPath: string; trekSlug: string };

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const text = (html: string) => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

/** "a 11-day" -> "an 11-day", "an 5-day" -> "a 5-day". */
function article(word: string, days: number): string {
  const an = days === 8 || days === 11 || days === 18 || (days >= 80 && days <= 89);
  const next = an ? "an" : "a";
  return word[0] === word[0].toUpperCase() ? next[0].toUpperCase() + next.slice(1) : next;
}

/** The words of a link to a package, rewritten for the trip that replaces it. */
function fixLabel(label: string, m: PackageMove): string {
  let out = label;
  if (m.fromDays !== m.toDays) {
    out = out.replace(new RegExp(`\\b(?:(an?) )?${m.fromDays}(?=[- ]days?\\b)`, "gi"), (_all, art?: string) =>
      `${art ? `${article(art, m.toDays)} ` : ""}${m.toDays}`
    );
  }
  if (m.toStart) out = out.replace(/\bfrom Kathmandu\b/g, `from ${m.toStart}`);
  return out;
}

type Note = { before: string; after: string };

/**
 * Repoints one link. `open`/`close` wrap the label ("<a …>" and "</a>" in
 * HTML, "[[trek:slug|" and "]]" in the article sources); `lead` is an
 * article standing just before the link and `tail` a " from Kathmandu" just
 * after it, both of which describe the package rather than the surviving trip.
 */
function swapPackageLink(lead: string, label: string, tail: string, m: PackageMove): { lead: string; label: string; tail: string } {
  const nextLabel = fixLabel(label, m);
  const leadsWithDays = new RegExp(`^${m.fromDays}[- ]days?\\b`, "i").test(label);
  return {
    lead: lead && leadsWithDays && m.fromDays !== m.toDays ? `${article(lead.trim(), m.toDays)} ` : lead,
    label: nextLabel,
    tail: tail && m.toStart ? ` from ${m.toStart}` : tail,
  };
}

/**
 * Links in rendered HTML. `selfPath` is the page the HTML belongs to: a link
 * that would now point at its own page is unwrapped to plain text.
 */
function rewriteHtml(html: string, packages: PackageMove[], guides: GuideMove[], selfPath: string | null, notes: Note[]): string {
  if (!html) return html;
  // A table that lists both versions of a trip keeps one row for it.
  let out = html.replace(/<table[\s\S]*?<\/table>/g, (table) => {
    let t = table;
    for (const m of packages) {
      if (!t.includes(`href="${m.fromPath}"`) || !t.includes(`href="${m.toPath}"`)) continue;
      t = t.replace(new RegExp(`<tr>(?:(?!</tr>)[\\s\\S])*?href="${escapeRe(m.fromPath)}"(?:(?!</tr>)[\\s\\S])*</tr>`, "g"), (row) => {
        notes.push({ before: `row: ${text(row)}`, after: "(row removed: the table already lists this trip)" });
        return "";
      });
    }
    return t;
  });

  for (const m of packages) {
    if (!out.includes(m.fromPath)) continue;
    const re = new RegExp(`(\\b[Aa]n? )?<a\\b([^>]*?)href="${escapeRe(m.fromPath)}/?((?:[?#][^"]*)?)"([^>]*)>([\\s\\S]*?)</a>( from Kathmandu\\b)?`, "g");
    out = out.replace(re, (all, lead = "", pre: string, suffix: string, post: string, label: string, tail = "") => {
      const next = swapPackageLink(lead, label, tail, m);
      const replaced =
        selfPath === m.toPath
          ? `${next.lead}${next.label}${next.tail}`
          : `${next.lead}<a${pre}href="${m.toPath}${suffix}"${post}>${next.label}</a>${next.tail}`;
      notes.push({ before: text(all), after: `${text(replaced)}${selfPath === m.toPath ? " (unlinked: own page)" : ` → ${m.toPath}`}` });
      return replaced;
    });
  }

  for (const g of guides) {
    if (!out.includes(g.fromPath)) continue;
    const re = new RegExp(`<a\\b([^>]*?)href="${escapeRe(g.fromPath)}/?((?:[?#][^"]*)?)"([^>]*)>([\\s\\S]*?)</a>`, "g");
    out = out.replace(re, (all, pre: string, _suffix: string, post: string, label: string) => {
      const replaced = selfPath === g.toPath ? label : `<a${pre}href="${g.toPath}"${post}>${label}</a>`;
      notes.push({ before: `guide link: ${text(all)}`, after: selfPath === g.toPath ? "(unlinked: own page)" : `→ ${g.toPath}` });
      return replaced;
    });
  }
  return out;
}

/** A product page's "Trekking Guides & Articles" list, without the retired guides. Null when nothing is left. */
function pruneGuidesList(html: string, guides: GuideMove[]): string | null {
  const retired = new Set(guides.map((g) => g.fromPath));
  const out = html.replace(/<li>[\s\S]*?<\/li>/g, (item) => {
    const href = item.match(/href="([^"]+)"/)?.[1];
    return href && retired.has(href.replace(/\/$/, "")) ? "" : item;
  });
  return /<li>/.test(out) ? out : null;
}

/**
 * The article sources: `[[trek:<package>|label]]` tokens and the
 * `relatedTreks` lists. Image IDs that contain a package slug are left alone:
 * the photographs stay where they are in Cloudinary.
 */
function rewriteSource(source: string, packages: PackageMove[]): string {
  const bySlug = new Map(packages.map((m) => [m.fromSlug, m]));
  const lines = source.split("\n");
  const kept: string[] = [];
  lines.forEach((line, i) => {
    // A table row (an array literal on its own line) beside a row for the trip that stays.
    const rowMove = packages.find((m) => line.includes(`[[trek:${m.fromSlug}|`));
    if (rowMove && /^\s*\[\s*"\[\[trek:/.test(line)) {
      const neighbourhood = lines.slice(Math.max(0, i - 15), i + 16).join("\n");
      if (neighbourhood.includes(`[[trek:${rowMove.toSlug}|`)) return;
    }
    kept.push(line);
  });
  let out = kept.join("\n");

  out = out.replace(/(\b[Aa]n? )?\[\[trek:([a-z0-9-]+)\|([^\]]+)\]\]( from Kathmandu\b)?/g, (all, lead = "", slug: string, label: string, tail = "") => {
    const m = bySlug.get(slug);
    if (!m) return all;
    const next = swapPackageLink(lead, label, tail, m);
    return `${next.lead}[[trek:${m.toSlug}|${next.label}]]${next.tail}`;
  });

  // relatedTreks: package -> trip, each trip once, formatting kept.
  out = out.replace(/relatedTreks:\s*\[([\s\S]*?)\]/g, (all, body: string) => {
    const slugs = [...body.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    const next = [...new Set(slugs.map((s) => bySlug.get(s)?.toSlug ?? s))];
    if (next.length === slugs.length && next.every((s, i) => s === slugs[i])) return all;
    if (!body.includes("\n")) return `relatedTreks: [${next.map((s) => `"${s}"`).join(", ")}]`;
    const indent = body.match(/\n(\s*)"/)?.[1] ?? "      ";
    const closing = body.match(/\n(\s*)$/)?.[1] ?? "    ";
    return `relatedTreks: [\n${next.map((s) => `${indent}"${s}",`).join("\n")}\n${closing}]`;
  });
  return out;
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

type Rendered = { rendered: Record<string, string>; faqs: Record<string, string>; relations: unknown; errors: string[] };

/** The article sources as they render now, from a fresh process (see blog-content/render-all.mts). */
function renderSources(): Rendered {
  const out = execFileSync("npx", ["tsx", "scripts/blog-content/render-all.mts"], {
    cwd: PROJECT_ROOT,
    maxBuffer: 256 * 1024 * 1024,
    stdio: ["ignore", "pipe", "inherit"],
  });
  return JSON.parse(out.toString("utf8"));
}

type Backup = {
  packages: Array<{ id: string; status: string }>;
  guides: Array<{ id: string; status: string }>;
  treks: Array<{ id: string; similarTrekIds: string | null; overview: string; customSections: string | null; sectionOrder: string | null; inclusions: string; exclusions: string }>;
  faqs: Array<{ id: string; answer: string }>;
  days: Array<{ id: string; description: string }>;
  posts: Array<{ id: string; content: string }>;
  dropdown: string | null;
  featured: string | null;
  redirects: { created: string[]; updated: Array<{ id: string; newPath: string; permanent: boolean; active: boolean }> };
  sources: Record<string, string>;
};

async function restore(file: string) {
  const b = JSON.parse(readFileSync(file, "utf8")) as Backup;
  for (const t of b.packages) await prisma.trek.update({ where: { id: t.id }, data: { status: t.status } });
  for (const p of b.guides) await prisma.blogPost.update({ where: { id: p.id }, data: { status: p.status } });
  for (const { id, ...data } of b.treks) await prisma.trek.update({ where: { id }, data });
  for (const q of b.faqs) await prisma.trekFaq.update({ where: { id: q.id }, data: { answer: q.answer } });
  for (const d of b.days) await prisma.itineraryDay.update({ where: { id: d.id }, data: { description: d.description } });
  for (const p of b.posts) await prisma.blogPost.update({ where: { id: p.id }, data: { content: p.content } });
  await prisma.siteSetting.update({ where: { id: "site-settings" }, data: { categoryDropdownTreks: b.dropdown } });
  await prisma.homePageSettings.updateMany({ data: { featuredSectionTrekIds: b.featured } });
  await prisma.legacyRedirect.deleteMany({ where: { id: { in: b.redirects.created } } });
  for (const { id, ...data } of b.redirects.updated) await prisma.legacyRedirect.update({ where: { id }, data });
  for (const [path, contents] of Object.entries(b.sources)) writeFileSync(join(PROJECT_ROOT, path), contents);
  console.log(`Restored ${b.packages.length} package page(s), ${b.guides.length} guide(s) and every reference from ${file}. Refresh the site's cache.`);
}

async function main() {
  if (RESTORE) return restore(RESTORE);

  const [allTreks, allPosts, settings, home] = await Promise.all([
    prisma.trek.findMany({
      select: {
        id: true, slug: true, status: true, duration: true, subtitle: true, similarTrekIds: true, overview: true,
        customSections: true, sectionOrder: true, inclusions: true, exclusions: true,
        category: { select: { slug: true } },
        faqs: { select: { id: true, answer: true } },
        itinerary: { select: { id: true, description: true } },
      },
    }),
    prisma.blogPost.findMany({ select: { id: true, slug: true, status: true, content: true } }),
    prisma.siteSetting.findUnique({ where: { id: "site-settings" }, select: { categoryDropdownTreks: true } }),
    prisma.homePageSettings.findFirst({ select: { featuredSectionTrekIds: true } }),
  ]);
  const trekBySlug = new Map(allTreks.map((t) => [t.slug, t]));
  const postBySlug = new Map(allPosts.map((p) => [p.slug, p]));

  // ── What is retired ──
  const packages: PackageMove[] = [];
  for (const pkg of allTreks.filter((t) => t.slug.endsWith(PACKAGE_SLUG_SUFFIX) && t.status === "published")) {
    const base = trekBySlug.get(pkg.slug.slice(0, -PACKAGE_SLUG_SUFFIX.length));
    if (!base || base.status !== "published") throw new Error(`${pkg.slug}: the city-to-city page must exist and be published`);
    const from = startCity(base.subtitle);
    packages.push({
      fromId: pkg.id, toId: base.id, fromSlug: pkg.slug, toSlug: base.slug,
      fromPath: `/${pkg.category?.slug}/${pkg.slug}`, toPath: `/${base.category?.slug}/${base.slug}`,
      fromDays: pkg.duration, toDays: base.duration,
      toStart: from && from !== "Kathmandu" ? from : null,
    });
  }
  const guides: GuideMove[] = [];
  for (const [slug, trekSlug] of Object.entries(RETIRED_GUIDES)) {
    const post = postBySlug.get(slug);
    const trek = trekBySlug.get(trekSlug);
    if (!post) throw new Error(`retired guide ${slug} is not in the database`);
    if (!trek || trek.status !== "published" || trek.slug.endsWith(PACKAGE_SLUG_SUFFIX)) throw new Error(`${slug}: ${trekSlug} must be a published city-to-city page`);
    guides.push({ postId: post.id, slug, fromPath: `/blog/${slug}`, toPath: `/${trek.category?.slug}/${trekSlug}`, trekSlug });
  }
  const guidesToDraft = guides.filter((g) => postBySlug.get(g.slug)!.status !== "draft");
  if (packages.length === 0 && guidesToDraft.length === 0) return console.log("Nothing to retire.");

  const idMap = new Map(packages.map((m) => [m.fromId, m.toId]));
  const retiredTrekIds = new Set(packages.map((m) => m.fromId));
  const retiredPostSlugs = new Set(guides.map((g) => g.slug));

  // ── Trip pages that stay ──
  type TrekChange = { id: string; slug: string; data: Record<string, string | null>; faqs: Array<{ id: string; answer: string }>; days: Array<{ id: string; description: string }>; notes: Note[]; guidesRemoved: number };
  const trekChanges: TrekChange[] = [];
  for (const t of allTreks) {
    if (retiredTrekIds.has(t.id)) continue;
    const self = `/${t.category?.slug}/${t.slug}`;
    const notes: Note[] = [];
    const data: Record<string, string | null> = {};
    let guidesRemoved = 0;

    const similar = remapIds(t.similarTrekIds, idMap, t.id);
    if (similar !== t.similarTrekIds) data.similarTrekIds = similar;

    for (const field of ["overview", "inclusions", "exclusions"] as const) {
      const before = t[field];
      if (!before) continue;
      const after = rewriteHtml(before, packages, guides, self, notes);
      if (after !== before) data[field] = after;
    }

    if (t.customSections) {
      try {
        let sections = JSON.parse(t.customSections) as Array<{ id?: string; data?: { heading?: string; content?: string } }>;
        let order: string[] | null = null;
        const dropped: string[] = [];
        sections = sections.filter((s) => {
          if (!s?.data?.content) return true;
          if (s.data.heading === GUIDES_HEADING) {
            const before = (s.data.content.match(/<li>/g) ?? []).length;
            const pruned = pruneGuidesList(s.data.content, guides);
            guidesRemoved += before - (pruned ? (pruned.match(/<li>/g) ?? []).length : 0);
            if (pruned === null) {
              if (s.id) dropped.push(s.id);
              return false;
            }
            s.data.content = pruned;
          }
          s.data.content = rewriteHtml(s.data.content, packages, guides, self, notes);
          return true;
        });
        const next = JSON.stringify(sections);
        if (next !== t.customSections) data.customSections = next;
        if (dropped.length > 0 && t.sectionOrder) {
          try {
            order = (JSON.parse(t.sectionOrder) as string[]).filter((id) => !dropped.includes(id));
            data.sectionOrder = JSON.stringify(order);
          } catch {
            // An unreadable order is left as it is; the page ignores ids with no section.
          }
        }
      } catch {
        console.warn(`  ! ${t.slug}: customSections is not valid JSON — left alone`);
      }
    }

    const faqs = t.faqs
      .map((q) => ({ id: q.id, answer: rewriteHtml(q.answer, packages, guides, self, notes), before: q.answer }))
      .filter((q) => q.answer !== q.before)
      .map(({ id, answer }) => ({ id, answer }));
    const days = t.itinerary
      .map((d) => ({ id: d.id, description: rewriteHtml(d.description ?? "", packages, guides, self, notes), before: d.description ?? "" }))
      .filter((d) => d.description !== d.before)
      .map(({ id, description }) => ({ id, description }));

    if (Object.keys(data).length > 0 || faqs.length > 0 || days.length > 0) {
      trekChanges.push({ id: t.id, slug: t.slug, data, faqs, days, notes, guidesRemoved });
    }
  }

  // ── Articles ──
  const postRewrites = allPosts
    .map((p) => {
      const notes: Note[] = [];
      return { p, notes, content: rewriteHtml(p.content, packages, guides, null, notes) };
    })
    .filter((x) => x.content !== x.p.content);

  // ── Article sources ──
  const sourceFiles = readdirSync(join(PROJECT_ROOT, "scripts", "blog-content"))
    .filter((f) => f.endsWith(".ts"))
    .map((f) => join("scripts", "blog-content", f));
  const sourceChanges = sourceFiles
    .map((file) => {
      const before = readFileSync(join(PROJECT_ROOT, file), "utf8");
      return { file, before, after: rewriteSource(before, packages) };
    })
    .filter((s) => s.after !== s.before);

  const dropdown = remapIds(settings?.categoryDropdownTreks ?? null, idMap);
  const featured = remapIds(home?.featuredSectionTrekIds ?? null, idMap);

  // ── Report ──
  console.log(`Package pages to archive: ${packages.length}`);
  console.log(`Guides to set to draft:   ${guidesToDraft.length} (of ${guides.length} listed)`);
  console.log(
    `Articles with links to repoint: ${postRewrites.length} | trip pages changed: ${trekChanges.length} ` +
      `(${trekChanges.reduce((n, c) => n + c.guidesRemoved, 0)} guide links removed from product pages) | ` +
      `header dropdown: ${dropdown !== (settings?.categoryDropdownTreks ?? null) ? "updated" : "no change"} | ` +
      `featured: ${featured !== (home?.featuredSectionTrekIds ?? null) ? "updated" : "no change"} | source files: ${sourceChanges.length}`
  );

  if (DRY_RUN) {
    console.log("\nLinks to package pages in articles that stay published:");
    for (const { p, notes } of postRewrites) {
      if (retiredPostSlugs.has(p.slug)) continue;
      for (const n of notes.filter((n) => !n.before.startsWith("guide link:"))) console.log(`  ${p.slug}\n      "${n.before}"\n   -> "${n.after}"`);
    }
    const guideLinks = postRewrites.filter((x) => !retiredPostSlugs.has(x.p.slug)).flatMap((x) => x.notes.filter((n) => n.before.startsWith("guide link:")));
    console.log(`\nLinks to retired guides in articles that stay published: ${guideLinks.length} (kept, now pointing at the product page)`);
    console.log("\nTrip pages:");
    for (const c of trekChanges) {
      const fields = [...Object.keys(c.data), ...(c.faqs.length ? [`${c.faqs.length} faq`] : []), ...(c.days.length ? [`${c.days.length} day`] : [])];
      if (c.notes.length > 0) console.log(`  ${c.slug}: ${fields.join(", ")}${c.notes.map((n) => `\n      "${n.before}" -> "${n.after}"`).join("")}`);
    }
    console.log("\nDry run — nothing written.");
    return;
  }

  // The articles whose database text is exactly what their source renders:
  // those are written from the source again once it has been edited.
  const before = renderSources();
  const inSync = new Set(allPosts.filter((p) => before.rendered[p.slug] === p.content).map((p) => p.slug));

  const backup: Backup = {
    packages: packages.map((m) => ({ id: m.fromId, status: "published" })),
    guides: guidesToDraft.map((g) => ({ id: g.postId, status: postBySlug.get(g.slug)!.status })),
    treks: trekChanges.map((c) => {
      const t = allTreks.find((x) => x.id === c.id)!;
      return { id: t.id, similarTrekIds: t.similarTrekIds, overview: t.overview, customSections: t.customSections, sectionOrder: t.sectionOrder, inclusions: t.inclusions, exclusions: t.exclusions };
    }),
    faqs: trekChanges.flatMap((c) => c.faqs.map((q) => ({ id: q.id, answer: allTreks.find((x) => x.id === c.id)!.faqs.find((f) => f.id === q.id)!.answer }))),
    days: trekChanges.flatMap((c) => c.days.map((d) => ({ id: d.id, description: allTreks.find((x) => x.id === c.id)!.itinerary.find((f) => f.id === d.id)!.description }))),
    posts: allPosts.map((p) => ({ id: p.id, content: p.content })),
    dropdown: settings?.categoryDropdownTreks ?? null,
    featured: home?.featuredSectionTrekIds ?? null,
    redirects: { created: [], updated: [] },
    sources: {
      ...Object.fromEntries(sourceChanges.map((s) => [s.file, s.before])),
      [RELATIONS_FILE]: readFileSync(join(PROJECT_ROOT, RELATIONS_FILE), "utf8"),
    },
  };
  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = join(BACKUP_DIR, `retire-pages-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
  const save = () => writeFileSync(backupFile, JSON.stringify(backup));
  save();
  console.log(`Backup: ${backupFile}`);

  // 1. Redirects, then chains collapsed onto the final page.
  for (const m of [...packages, ...guides]) {
    const oldPath = normalizeLegacyPath(m.fromPath);
    const existing = await prisma.legacyRedirect.findUnique({ where: { oldPath } });
    if (existing) {
      backup.redirects.updated.push({ id: existing.id, newPath: existing.newPath, permanent: existing.permanent, active: existing.active });
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
      if (!backup.redirects.updated.some((u) => u.id === r.id) && !backup.redirects.created.includes(r.id)) {
        backup.redirects.updated.push({ id: r.id, newPath: r.newPath, permanent: r.permanent, active: r.active });
      }
      await prisma.legacyRedirect.update({ where: { id: r.id }, data: { newPath: to } });
    }
  }
  save();

  // 2. Trip pages, header and home page.
  for (const c of trekChanges) {
    if (Object.keys(c.data).length > 0) await prisma.trek.update({ where: { id: c.id }, data: c.data });
    for (const q of c.faqs) await prisma.trekFaq.update({ where: { id: q.id }, data: { answer: q.answer } });
    for (const d of c.days) await prisma.itineraryDay.update({ where: { id: d.id }, data: { description: d.description } });
  }
  if (dropdown !== (settings?.categoryDropdownTreks ?? null)) await prisma.siteSetting.update({ where: { id: "site-settings" }, data: { categoryDropdownTreks: dropdown } });
  if (featured !== (home?.featuredSectionTrekIds ?? null)) await prisma.homePageSettings.updateMany({ data: { featuredSectionTrekIds: featured } });

  // 3. The retired pages themselves.
  await prisma.trek.updateMany({ where: { id: { in: [...retiredTrekIds] } }, data: { status: "archived" } });
  await prisma.blogPost.updateMany({ where: { id: { in: guidesToDraft.map((g) => g.postId) } }, data: { status: "draft" } });

  // 4. Article sources, then the articles: from the source where the two
  //    matched before, by rewriting the stored HTML where they did not.
  for (const s of sourceChanges) writeFileSync(join(PROJECT_ROOT, s.file), s.after);
  const after = renderSources();
  writeFileSync(join(PROJECT_ROOT, RELATIONS_FILE), `${JSON.stringify(after.relations, null, 2)}\n`);

  const rewritten = new Map(postRewrites.map((x) => [x.p.slug, x.content]));
  let fromSource = 0;
  let fromRewrite = 0;
  const differs: string[] = [];
  for (const p of allPosts) {
    const viaRewrite = rewritten.get(p.slug) ?? p.content;
    const next = inSync.has(p.slug) && after.rendered[p.slug] ? after.rendered[p.slug] : viaRewrite;
    if (inSync.has(p.slug) && after.rendered[p.slug] && after.rendered[p.slug] !== viaRewrite) differs.push(p.slug);
    if (next === p.content) continue;
    await prisma.blogPost.update({ where: { id: p.id }, data: { content: next } });
    if (inSync.has(p.slug)) fromSource++;
    else fromRewrite++;
  }

  console.log(
    `Archived ${packages.length} package page(s), drafted ${guidesToDraft.length} guide(s).\n` +
      `Trip pages updated: ${trekChanges.length}. Articles updated: ${fromSource} from their source, ${fromRewrite} by rewriting stored HTML ` +
      `(${allPosts.length - inSync.size} article(s) differ from their source and were not overwritten).\n` +
      `Source files updated: ${sourceChanges.length} + ${RELATIONS_FILE}.`
  );
  if (differs.length > 0) console.log(`Source render and link rewrite disagreed (source used) for: ${differs.join(", ")}`);
  if (after.errors.length > 0) console.log(`Source validation notes:\n${after.errors.map((e) => `  ${e}`).join("\n")}`);
  console.log(`Next: npm run cache:refresh -- --revalidate-url https://greencompasstreks.com\nUndo: npx tsx scripts/retire-packages-and-guides.mts --restore ${backupFile}`);
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.stack ?? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
