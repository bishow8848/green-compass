/**
 * Sell every trek and multi-day tour two ways: city to city at its base URL,
 * and as a complete package (arrival to departure) at <base>-package.
 * The rules live in scripts/package-variants/plan.ts; this file reads the
 * catalogue, shows the plan, and writes it.
 *
 *   npx tsx scripts/apply-package-variants.mts --dry-run      plan + review file, writes nothing
 *   npx tsx scripts/apply-package-variants.mts                apply (backs up first)
 *   npx tsx scripts/apply-package-variants.mts --restore scripts/.backups/package-variants-<stamp>.json
 *
 * Applying, in order:
 *   1. Each family in its own transaction — a failure leaves the others done and
 *      the database consistent, and a re-run skips what is already applied.
 *   2. Climbing and activities gain their package label.
 *   3. Redirects for every moved URL, with chains collapsed (an old redirect to
 *      a URL that now redirects points straight at the final page).
 *   4. A pair's complete package hands its place in Similar Treks lists, the
 *      header dropdown and the home page's featured treks to the city-to-city
 *      page, so every internal link points at the base URL.
 *   5. Links in blog posts and trip pages follow the moves; so do the local
 *      sources (scripts/blog-content, lib/blog-related.json,
 *      scripts/set-similar-treks.mts), so re-running those scripts keeps them.
 *
 * Afterwards: npx tsx scripts/apply-package-titles.mts, then
 * npm run cache:refresh -- --revalidate-url https://greencompasstreks.com
 */
import "dotenv/config";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";
import { normalizeLegacyPath } from "@/lib/legacy-redirect-path";
import { planVariants, rewriteLinks, type Family, type LinkRule, type Plan, type TrekPatch, type TrekRow } from "./package-variants/plan";

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const RESTORE = args.includes("--restore") ? args[args.indexOf("--restore") + 1] : undefined;
const PROJECT_ROOT = fileURLToPath(new URL("..", import.meta.url));
const BACKUP_DIR = join(PROJECT_ROOT, "scripts", ".backups");
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const TX = { timeout: 120_000, maxWait: 20_000 };

/** Columns restored from a backup. geoJsonData is never written here, so it is not backed up. */
const RESTORED_COLUMNS = [
  "slug", "title", "subtitle", "duration", "price", "overview", "inclusions", "exclusions", "metaTitle",
  "metaDescription", "waypoints", "customSections", "sectionOrder", "sectionData", "similarTrekIds",
] as const;

async function withRetry<T>(label: string, run: () => Promise<T>): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await run();
    } catch (error) {
      if (attempt >= 4) throw error;
      console.warn(`  ${label}: attempt ${attempt} failed (${error instanceof Error ? error.message.split("\n").pop() : error}), retrying`);
      await new Promise((r) => setTimeout(r, 3000 * attempt));
    }
  }
}

/* ------------------------------------------------------------------ */
/* Reading                                                             */
/* ------------------------------------------------------------------ */

async function loadCatalogue(): Promise<TrekRow[]> {
  const ids = (await prisma.trek.findMany({ where: { status: "published" }, select: { id: true } })).map((t) => t.id);
  const rows: TrekRow[] = [];
  for (let i = 0; i < ids.length; i += 10) {
    const batch = await withRetry("read catalogue", () =>
      prisma.trek.findMany({
        where: { id: { in: ids.slice(i, i + 10) } },
        omit: { geoJsonData: true },
        include: {
          category: { select: { slug: true } },
          itinerary: { orderBy: { dayNumber: "asc" } },
          pricingTiers: true,
          faqs: true,
          galleryImages: true,
          availableDates: true,
        },
      })
    );
    rows.push(...(batch as unknown as TrekRow[]));
  }
  return rows;
}

/** geoJsonData is left out of the snapshot (it is large); a new package copies it from its source here. */
async function geoJsonOf(id: string): Promise<string | null> {
  const row = await prisma.trek.findUnique({ where: { id }, select: { geoJsonData: true } });
  return row?.geoJsonData ?? null;
}

/* ------------------------------------------------------------------ */
/* Review file                                                         */
/* ------------------------------------------------------------------ */

function tiers(rows: Array<{ groupSize: string; pricePerPerson: number }>): string {
  return rows.map((t) => `${t.groupSize}: $${t.pricePerPerson}`).join(", ");
}

function review(plan: Plan): string {
  const lines: string[] = [
    `# Package variants — review (${new Date().toISOString().slice(0, 16)} UTC)`,
    "",
    `${plan.families.length} families · ${plan.labels.length} labels · ${plan.skipped.length} skipped. Prices move $37.50 per day added or dropped, rounded to $5.`,
    "",
  ];
  if (plan.skipped.length) {
    lines.push("## Needs your decision", "");
    for (const s of plan.skipped) lines.push(`- \`${s.slug}\` — ${s.reason}`);
    lines.push("");
  }
  for (const f of plan.families) {
    const complete = "create" in f.complete ? f.complete.create : null;
    const cityPrice = f.city.patch.price ?? f.city.before.price;
    const completePrice = complete ? Number(complete.scalars.price) : "before" in f.complete ? f.complete.before.price : 0;
    lines.push(
      `## ${f.name} (${f.shape})`,
      "",
      `| | URL | Days | From | Title |`,
      `|---|---|---|---|---|`,
      `| City to city, ${f.start} to ${f.end} | /${f.category}/${f.base} | ${f.cityDays} | $${cityPrice} | ${f.city.patch.metaTitle ?? ""} |`,
      `| Complete package | /${f.category}/${f.base}-package | ${f.completeDays} | $${completePrice} | ${complete ? complete.scalars.metaTitle : "patch" in f.complete ? f.complete.patch.metaTitle : ""} |`,
      ""
    );
    if (f.city.patch.pricingTiers) lines.push(`- City-to-city tiers: ${tiers(f.city.patch.pricingTiers)} (were ${tiers(f.city.before.pricingTiers)})`);
    if (complete && complete.pricingTiers !== f.city.before.pricingTiers) lines.push(`- Complete tiers: ${tiers(complete.pricingTiers)}`);
    if (f.city.patch.itinerary) {
      lines.push(`- City-to-city days: ${f.city.patch.itinerary.map((d) => d.title).join(" → ")}`);
    }
    if (complete && f.shape === "add-complete") lines.push(`- Complete days: ${complete.itinerary.map((d) => d.title).join(" → ")}`);
    for (const r of f.redirects) lines.push(`- Redirect ${r.from} → ${r.to}`);
    for (const n of f.notes) lines.push(`- Note: ${n}`);
    lines.push("");
  }
  if (plan.labels.length) {
    lines.push("## Labels only", "");
    for (const l of plan.labels) lines.push(`- \`${l.slug}\`: ${l.subtitle}`);
  }
  return lines.join("\n");
}

/* ------------------------------------------------------------------ */
/* Writing                                                             */
/* ------------------------------------------------------------------ */

type Tx = Parameters<Parameters<typeof prisma.$transaction>[0]>[0];

function rowsWithoutKeys<T extends Record<string, unknown>>(rows: T[], trekId: string) {
  return rows.map((row) => {
    const { id: _id, trekId: _trekId, ...rest } = row as Record<string, unknown>;
    return { ...rest, trekId };
  });
}

async function applyPatch(tx: Tx, id: string, patch: TrekPatch) {
  const { itinerary, pricingTiers, faqs, ...scalars } = patch;
  if (Object.keys(scalars).length > 0) await tx.trek.update({ where: { id }, data: scalars });
  if (itinerary) {
    await tx.itineraryDay.deleteMany({ where: { trekId: id } });
    await tx.itineraryDay.createMany({ data: rowsWithoutKeys(itinerary, id) as never });
  }
  if (pricingTiers) {
    await tx.pricingTier.deleteMany({ where: { trekId: id } });
    await tx.pricingTier.createMany({ data: pricingTiers.map((t) => ({ trekId: id, groupSize: t.groupSize, pricePerPerson: t.pricePerPerson })) });
  }
  if (faqs) {
    await tx.trekFaq.deleteMany({ where: { trekId: id } });
    await tx.trekFaq.createMany({ data: faqs.map((f) => ({ trekId: id, question: f.question, answer: f.answer })) });
  }
}

async function applyFamily(f: Family): Promise<string | null> {
  let createdSlug: string | null = null;
  const geoJson = "create" in f.complete ? await geoJsonOf(f.complete.create.sourceId) : null;
  await prisma.$transaction(async (tx) => {
    if ("create" in f.complete) {
      const c = f.complete.create;
      const trek = await tx.trek.create({
        data: { ...c.scalars, slug: c.slug, geoJsonData: geoJson, publishedAt: new Date() } as Parameters<typeof tx.trek.create>[0]["data"],
        select: { id: true },
      });
      await tx.itineraryDay.createMany({ data: rowsWithoutKeys(c.itinerary, trek.id) as never });
      await tx.pricingTier.createMany({ data: c.pricingTiers.map((t) => ({ trekId: trek.id, groupSize: t.groupSize, pricePerPerson: t.pricePerPerson })) });
      if (c.faqs.length) await tx.trekFaq.createMany({ data: c.faqs.map((q) => ({ trekId: trek.id, question: q.question, answer: q.answer })) });
      if (c.galleryImages.length) await tx.trekGalleryImage.createMany({ data: c.galleryImages.map((g) => ({ trekId: trek.id, imageId: g.imageId, alt: g.alt, caption: g.caption })) });
      if (c.availableDates.length) await tx.availableDate.createMany({ data: c.availableDates.map((d) => ({ trekId: trek.id, startDate: new Date(d.startDate), seatsLeft: d.seatsLeft })) });
      createdSlug = c.slug;
      await applyPatch(tx, f.city.id, f.city.patch);
    } else {
      // A pair: the complete package leaves the base slug before the city-to-city trip takes it.
      await applyPatch(tx, f.complete.id, f.complete.patch);
      await applyPatch(tx, f.city.id, f.city.patch);
    }
  }, TX);
  return createdSlug;
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

/** Slug renames and complete-package links in the local sources the content scripts read. */
function rewriteSources(rules: LinkRule[]): string[] {
  const renames = rules.filter((r) => r.when === "always").map((r) => [r.from.split("/").pop()!, r.to.split("/").pop()!] as const);
  // scripts/set-similar-treks.mts is keyed by slug and already applied; renaming
  // its keys would collide ("x-from-pokhara" -> "x" next to "x"), so it is left
  // as a record of the old lists.
  const files = [
    ...readdirSync(join(PROJECT_ROOT, "scripts", "blog-content")).filter((f) => f.endsWith(".ts")).map((f) => join(PROJECT_ROOT, "scripts", "blog-content", f)),
    join(PROJECT_ROOT, "lib", "blog-related.json"),
  ];
  const changed: string[] = [];
  for (const file of files) {
    const before = readFileSync(file, "utf8");
    let text = rewriteLinks(before, rules).text;
    for (const [from, to] of renames) text = text.split(`"${from}"`).join(`"${to}"`);
    if (file.endsWith(".json") && text !== before) {
      // A list that named both the old and the new slug now names one twice.
      const relations = JSON.parse(text) as Record<string, { treks?: string[] }>;
      for (const r of Object.values(relations)) if (Array.isArray(r.treks)) r.treks = [...new Set(r.treks)];
      text = `${JSON.stringify(relations, null, 2)}\n`;
    }
    if (text !== before) {
      writeFileSync(file, text);
      changed.push(file.slice(PROJECT_ROOT.length));
    }
  }
  return changed;
}

/* ------------------------------------------------------------------ */
/* Restore                                                             */
/* ------------------------------------------------------------------ */

type Backup = {
  created: string[];
  treks: Array<Record<string, unknown> & { id: string; itinerary: Record<string, unknown>[]; pricingTiers: Record<string, unknown>[]; faqs: Record<string, unknown>[] }>;
  similar: Array<{ id: string; similarTrekIds: string | null }>;
  dropdown: string | null;
  featured: string | null;
  posts: Array<{ id: string; content: string }>;
  pages: Array<{ id: string; overview: string; customSections: string | null; faqs: Array<{ id: string; answer: string }> }>;
  redirects: { created: string[]; updated: Array<{ id: string; newPath: string }> };
};

async function restore(file: string) {
  const backup = JSON.parse(readFileSync(file, "utf8")) as Backup;
  for (const slug of backup.created) await withRetry(`delete ${slug}`, () => prisma.trek.deleteMany({ where: { slug } }));
  // Park every restored slug first, so swapped pairs never collide on the unique slug.
  for (const t of backup.treks) await prisma.trek.update({ where: { id: t.id }, data: { slug: `${t.slug as string}--restoring` } });
  for (const t of backup.treks) {
    await prisma.$transaction(async (tx) => {
      const data: Record<string, unknown> = {};
      for (const column of RESTORED_COLUMNS) data[column] = t[column];
      await tx.trek.update({ where: { id: t.id }, data });
      await applyPatch(tx, t.id, {
        itinerary: t.itinerary as never,
        pricingTiers: t.pricingTiers as never,
        faqs: t.faqs as never,
      });
    }, TX);
  }
  for (const s of backup.similar) await prisma.trek.update({ where: { id: s.id }, data: { similarTrekIds: s.similarTrekIds } });
  await prisma.siteSetting.update({ where: { id: "site-settings" }, data: { categoryDropdownTreks: backup.dropdown } });
  await prisma.homePageSettings.updateMany({ data: { featuredSectionTrekIds: backup.featured } });
  for (const p of backup.posts) await prisma.blogPost.update({ where: { id: p.id }, data: { content: p.content } });
  for (const p of backup.pages) {
    await prisma.trek.update({ where: { id: p.id }, data: { overview: p.overview, customSections: p.customSections } });
    for (const q of p.faqs) await prisma.trekFaq.update({ where: { id: q.id }, data: { answer: q.answer } }).catch(() => {});
  }
  await prisma.legacyRedirect.deleteMany({ where: { id: { in: backup.redirects.created } } });
  for (const r of backup.redirects.updated) await prisma.legacyRedirect.update({ where: { id: r.id }, data: { newPath: r.newPath } });
  console.log(`Restored from ${file}. Revert the local source files with git, then refresh the site's cache.`);
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

async function main() {
  if (RESTORE) return restore(RESTORE);

  console.log("Reading the catalogue…");
  const catalogue = await loadCatalogue();
  const plan = planVariants(catalogue);
  const rules = plan.families.flatMap((f) => f.linkRules);

  // Every blog link that would move, listed for review.
  const allPosts = await prisma.blogPost.findMany({ select: { id: true, slug: true, content: true } });
  const moved: string[] = [];
  for (const p of allPosts) {
    for (const [anchor] of p.content.matchAll(/<a\b[^>]*href="\/[^"]+"[^>]*>[\s\S]*?<\/a>/gi)) {
      const r = rewriteLinks(anchor, rules);
      if (r.count > 0) {
        const from = anchor.match(/href="([^"]+)"/)![1];
        const to = r.text.match(/href="([^"]+)"/)![1];
        moved.push(`- ${p.slug}: "${anchor.replace(/<[^>]+>/g, "").trim()}" ${from} → ${to}`);
      }
    }
  }

  mkdirSync(BACKUP_DIR, { recursive: true });
  const reviewFile = join(BACKUP_DIR, `package-variants-review-${stamp}.md`);
  writeFileSync(reviewFile, `${review(plan)}\n\n## Blog links that move (${moved.length})\n\n${moved.join("\n")}\n`);

  const by = (shape: string) => plan.families.filter((f) => f.shape === shape).length;
  console.log(
    `${plan.families.length} families (split ${by("split")}, pair ${by("pair")}, add-complete ${by("add-complete")}), ` +
      `${plan.labels.length} labels, ${plan.skipped.length} skipped. Review: ${reviewFile}`
  );
  for (const s of plan.skipped) console.log(`  skipped ${s.slug}: ${s.reason}`);
  console.log(`Blog links that move: ${moved.length}`);
  if (DRY_RUN) {
    console.log("Dry run — nothing written.");
    return;
  }

  const idMap = new Map(plan.families.filter((f) => f.idRemap).map((f) => [f.idRemap!.from, f.idRemap!.to] as const));

  // Everything this run may change, saved before the first write.
  const [settings, home, redirects] = await Promise.all([
    prisma.siteSetting.findUnique({ where: { id: "site-settings" }, select: { categoryDropdownTreks: true } }),
    prisma.homePageSettings.findFirst({ select: { featuredSectionTrekIds: true } }),
    prisma.legacyRedirect.findMany({ where: { active: true } }),
  ]);
  const posts = allPosts.map(({ id, content }) => ({ id, content }));
  const touched = new Map<string, TrekRow>();
  for (const f of plan.families) {
    touched.set(f.city.id, f.city.before);
    if ("before" in f.complete) touched.set(f.complete.id, f.complete.before);
  }
  const backup: Backup = {
    created: plan.families.flatMap((f) => ("create" in f.complete ? [f.complete.create.slug] : [])),
    treks: [...touched.values()].map((t) => {
      const keep: Record<string, unknown> = { id: t.id };
      for (const column of RESTORED_COLUMNS) keep[column] = t[column];
      return { ...keep, id: t.id, itinerary: t.itinerary, pricingTiers: t.pricingTiers, faqs: t.faqs };
    }),
    similar: catalogue.map((t) => ({ id: t.id, similarTrekIds: (t.similarTrekIds as string | null) ?? null })),
    dropdown: settings?.categoryDropdownTreks ?? null,
    featured: home?.featuredSectionTrekIds ?? null,
    posts: posts.filter((p) => rewriteLinks(p.content, rules).count > 0),
    pages: [],
    redirects: { created: [], updated: [] },
  };
  const backupFile = join(BACKUP_DIR, `package-variants-${stamp}.json`);
  const saveBackup = () => writeFileSync(backupFile, JSON.stringify(backup));
  saveBackup();
  console.log(`Backup: ${backupFile}\n`);

  // 1. Families.
  for (const [i, f] of plan.families.entries()) {
    await withRetry(f.base, () => applyFamily(f));
    console.log(`  [${i + 1}/${plan.families.length}] ${f.shape} ${f.category}/${f.base} (${f.cityDays}/${f.completeDays} days)`);
  }

  // 2. Labels.
  for (const l of plan.labels) await withRetry(l.slug, () => prisma.trek.update({ where: { id: l.id }, data: { subtitle: l.subtitle } }));
  console.log(`Labels: ${plan.labels.length}`);

  // 3. Redirects, then collapse chains onto the final page.
  for (const r of plan.families.flatMap((f) => f.redirects)) {
    const oldPath = normalizeLegacyPath(r.from);
    const existing = await prisma.legacyRedirect.findUnique({ where: { oldPath } });
    if (existing) {
      backup.redirects.updated.push({ id: existing.id, newPath: existing.newPath });
      await prisma.legacyRedirect.update({ where: { id: existing.id }, data: { newPath: r.to, permanent: true, active: true } });
    } else {
      const created = await prisma.legacyRedirect.create({ data: { oldPath, newPath: r.to, permanent: true, active: true } });
      backup.redirects.created.push(created.id);
    }
  }
  const all = await prisma.legacyRedirect.findMany({ where: { active: true } });
  const target = new Map(all.map((r) => [normalizeLegacyPath(r.oldPath), r.newPath]));
  for (const r of all) {
    let to = r.newPath;
    for (let hops = 0; target.has(normalizeLegacyPath(to)) && hops < 5; hops++) to = target.get(normalizeLegacyPath(to))!;
    if (to !== r.newPath) {
      if (!backup.redirects.updated.some((u) => u.id === r.id)) {
        backup.redirects.updated.push({ id: r.id, newPath: redirects.find((x) => x.id === r.id)?.newPath ?? r.newPath });
      }
      await prisma.legacyRedirect.update({ where: { id: r.id }, data: { newPath: to } });
      console.log(`  redirect ${r.oldPath} now goes straight to ${to}`);
    }
  }
  saveBackup();

  // 4. A pair's complete package hands its internal-link slots to the base page.
  if (idMap.size > 0) {
    const lists = await prisma.trek.findMany({ where: { similarTrekIds: { not: null } }, select: { id: true, similarTrekIds: true } });
    for (const t of lists) {
      const next = remapIds(t.similarTrekIds, idMap, t.id);
      if (next !== t.similarTrekIds) await prisma.trek.update({ where: { id: t.id }, data: { similarTrekIds: next } });
    }
    const dropdown = remapIds(settings?.categoryDropdownTreks ?? null, idMap);
    if (dropdown !== (settings?.categoryDropdownTreks ?? null)) {
      await prisma.siteSetting.update({ where: { id: "site-settings" }, data: { categoryDropdownTreks: dropdown } });
    }
    const featured = remapIds(home?.featuredSectionTrekIds ?? null, idMap);
    if (featured !== (home?.featuredSectionTrekIds ?? null)) await prisma.homePageSettings.updateMany({ data: { featuredSectionTrekIds: featured } });
    console.log(`Internal-link slots moved for ${idMap.size} pair(s)`);
  }

  // 5. Links in blog posts and trip pages, then the local sources.
  let postLinks = 0;
  for (const p of backup.posts) {
    const r = rewriteLinks(p.content, rules);
    await prisma.blogPost.update({ where: { id: p.id }, data: { content: r.text } });
    postLinks += r.count;
  }
  const pages = await prisma.trek.findMany({ select: { id: true, overview: true, customSections: true, faqs: { select: { id: true, answer: true } } } });
  let pageLinks = 0;
  for (const p of pages) {
    const overview = rewriteLinks(p.overview, rules);
    const sections = rewriteLinks(p.customSections ?? "", rules);
    const faqs = p.faqs.map((q) => ({ ...q, r: rewriteLinks(q.answer, rules) })).filter((q) => q.r.count > 0);
    if (overview.count + sections.count + faqs.length === 0) continue;
    backup.pages.push({ id: p.id, overview: p.overview, customSections: p.customSections, faqs: p.faqs.filter((q) => faqs.some((f) => f.id === q.id)) });
    await prisma.trek.update({
      where: { id: p.id },
      data: { overview: overview.text, ...(sections.count ? { customSections: sections.text } : {}) },
    });
    for (const q of faqs) await prisma.trekFaq.update({ where: { id: q.id }, data: { answer: q.r.text } });
    pageLinks += overview.count + sections.count + faqs.length;
  }
  saveBackup();
  console.log(`Links repointed: ${postLinks} in ${backup.posts.length} blog post(s), ${pageLinks} on trip pages`);
  const sources = rewriteSources(rules);
  console.log(`Local sources updated: ${sources.length ? sources.join(", ") : "none"} — commit them with this change.`);

  console.log(
    `\nDone. Next:\n  npx tsx scripts/apply-package-titles.mts\n  npm run cache:refresh -- --revalidate-url https://greencompasstreks.com\nUndo: npx tsx scripts/apply-package-variants.mts --restore ${backupFile}`
  );
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
