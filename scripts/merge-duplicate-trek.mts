/**
 * Fold a duplicate trip into the one that stays, without losing its links.
 *
 * Two published pages for the same product — same itinerary, same prices —
 * compete for the same searches, and Google ranks neither well. This keeps
 * `--into`, retires `--from`, and points everything at the survivor:
 *
 *   1. A permanent redirect from the old URL (proxy.ts reads legacy_redirects),
 *      so links and any ranking the old page earned pass to the survivor.
 *   2. The old trip is archived — not deleted: its itinerary, images and
 *      reviews stay in the database and it can be republished from the admin.
 *   3. Every other trip's "Similar Treks" list and the header's category
 *      dropdown swap the old trip for the survivor (or drop it, when the
 *      survivor is already listed).
 *   4. Blog posts: a table row for the old trip is removed when the same table
 *      already lists the survivor; any other link is repointed. PROSE_FIXES
 *      carries hand-written sentence rewrites where simply repointing a link
 *      would leave the text describing two products that are now one.
 *
 * Mirror the same change in scripts/blog-content and scripts/set-similar-treks
 * so re-running those scripts does not bring the old trip back.
 *
 * Every row it changes is saved first to scripts/.backups/. Run with
 * --dry-run to see the plan, then without it to apply; afterwards refresh the
 * deployed site: npx tsx scripts/refresh-site-cache.mts --revalidate-url <site>
 *
 *   npx tsx scripts/merge-duplicate-trek.mts --from abc-trek-nepal --into annapurna-base-camp-trek-from-pokhara --dry-run
 */
import "dotenv/config";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";
import { normalizeLegacyPath } from "@/lib/legacy-redirect-path";

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const arg = (name: string) => {
  const i = args.indexOf(name);
  return i === -1 ? undefined : args[i + 1];
};
const FROM = arg("--from");
const INTO = arg("--into");
const BACKUP_DIR = fileURLToPath(new URL("./.backups/", import.meta.url));

/** Sentence rewrites, per retired slug: [exact HTML before, HTML after]. */
const PROSE_FIXES: Record<string, Array<[string, string]>> = {
  "abc-trek-nepal": [
    [
      'We run it as a <a href="/treks/annapurna-base-camp-trek">9-day trek from Kathmandu</a>, a <a href="/treks/annapurna-base-camp-trek-from-pokhara">5-day trek from Pokhara</a> for travellers already in the city, and a <a href="/treks/abc-trek-nepal">compact 5-day ABC trek</a>.',
      'We run it as a <a href="/treks/annapurna-base-camp-trek">9-day trek from Kathmandu</a> and a <a href="/treks/annapurna-base-camp-trek-from-pokhara">5-day trek from Pokhara</a> for travellers already in the city.',
    ],
  ],
};

function swapId(ids: string[], oldId: string, newId: string, ownerId: string): string[] {
  if (!ids.includes(oldId)) return ids;
  if (ids.includes(newId) || ownerId === newId) return ids.filter((id) => id !== oldId);
  return ids.map((id) => (id === oldId ? newId : id));
}

function parseIds(value: string | null): string[] | null {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function rewriteContent(html: string, oldPath: string, newPath: string, fixes: Array<[string, string]>): string {
  let out = html;
  for (const [before, after] of fixes) out = out.split(before).join(after);

  // A table that already lists the survivor loses the duplicate's row. The
  // row pattern cannot cross a </tr>, so only the row holding the link goes.
  const escaped = oldPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const oldRow = new RegExp(`<tr>(?:(?!</tr>)[\\s\\S])*?href="${escaped}"(?:(?!</tr>)[\\s\\S])*</tr>`, "g");
  out = out.replace(/<table[\s\S]*?<\/table>/g, (table) =>
    table.includes(`href="${newPath}"`) ? table.replace(oldRow, "") : table
  );

  // Anything left links straight to the survivor.
  return out.split(`href="${oldPath}"`).join(`href="${newPath}"`);
}

async function main() {
  if (!FROM || !INTO || FROM === INTO) {
    throw new Error("Usage: --from <retired-slug> --into <surviving-slug> [--dry-run]");
  }

  const [from, into] = await Promise.all([
    prisma.trek.findUnique({ where: { slug: FROM }, select: { id: true, slug: true, status: true, category: { select: { slug: true } } } }),
    prisma.trek.findUnique({ where: { slug: INTO }, select: { id: true, slug: true, status: true, category: { select: { slug: true } } } }),
  ]);
  if (!from) throw new Error(`No trek "${FROM}"`);
  if (!into || into.status !== "published") throw new Error(`"${INTO}" must exist and be published`);

  const oldPath = `/${from.category?.slug || "treks"}/${from.slug}`;
  const newPath = `/${into.category?.slug || "treks"}/${into.slug}`;
  console.log(`${DRY_RUN ? "[dry run] " : ""}Merging ${oldPath} -> ${newPath}\n`);

  const [treks, settings, posts, existingRedirect] = await Promise.all([
    prisma.trek.findMany({ where: { similarTrekIds: { contains: from.id } }, select: { id: true, slug: true, similarTrekIds: true } }),
    prisma.siteSetting.findUnique({ where: { id: "site-settings" }, select: { categoryDropdownTreks: true } }),
    prisma.blogPost.findMany({ where: { content: { contains: oldPath } }, select: { id: true, slug: true, content: true } }),
    prisma.legacyRedirect.findUnique({ where: { oldPath: normalizeLegacyPath(oldPath) } }),
  ]);

  const similarUpdates = treks.flatMap((t) => {
    const ids = parseIds(t.similarTrekIds);
    if (!ids) return [];
    const next = swapId(ids, from.id, into.id, t.id);
    return [{ id: t.id, slug: t.slug, before: t.similarTrekIds, after: JSON.stringify(next) }];
  });

  let dropdownAfter: string | null = null;
  const dropdownBefore = settings?.categoryDropdownTreks ?? null;
  if (dropdownBefore?.includes(from.id)) {
    const parsed = JSON.parse(dropdownBefore) as Record<string, string[]>;
    for (const [category, ids] of Object.entries(parsed)) {
      if (Array.isArray(ids)) parsed[category] = swapId(ids, from.id, into.id, "");
    }
    dropdownAfter = JSON.stringify(parsed);
  }

  const fixes = PROSE_FIXES[from.slug] ?? [];
  const postUpdates = posts
    .map((p) => ({ id: p.id, slug: p.slug, before: p.content, after: rewriteContent(p.content, oldPath, newPath, fixes) }))
    .filter((p) => p.after !== p.before);

  console.log(`redirect:        ${existingRedirect ? `exists (${existingRedirect.newPath})` : "create"} ${oldPath} -> ${newPath} (308)`);
  console.log(`archive:         ${from.slug} (now ${from.status})`);
  for (const u of similarUpdates) console.log(`similar treks:   ${u.slug}`);
  console.log(`header dropdown: ${dropdownAfter ? "updated" : "no change"}`);
  for (const u of postUpdates) {
    const removed = u.before.length - u.after.length;
    console.log(`blog post:       ${u.slug} (${removed > 0 ? `${removed} chars removed` : "links repointed"}${u.after.includes(oldPath) ? ", STILL LINKS OLD URL" : ""})`);
  }

  if (DRY_RUN) {
    console.log("\nDry run — nothing written.");
    return;
  }

  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = `${BACKUP_DIR}merge-${from.slug}-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  writeFileSync(
    backupFile,
    JSON.stringify(
      {
        from: { id: from.id, slug: from.slug, status: from.status },
        into: { id: into.id, slug: into.slug },
        redirect: existingRedirect,
        similarTreks: similarUpdates.map(({ id, slug, before }) => ({ id, slug, similarTrekIds: before })),
        categoryDropdownTreks: dropdownBefore,
        blogPosts: postUpdates.map(({ id, slug, before }) => ({ id, slug, content: before })),
      },
      null,
      2
    )
  );
  console.log(`\nBackup: ${backupFile}`);

  await prisma.$transaction([
    prisma.legacyRedirect.upsert({
      where: { oldPath: normalizeLegacyPath(oldPath) },
      create: { oldPath: normalizeLegacyPath(oldPath), newPath, permanent: true, active: true },
      update: { newPath, permanent: true, active: true },
    }),
    prisma.trek.update({ where: { id: from.id }, data: { status: "archived" } }),
    ...similarUpdates.map((u) => prisma.trek.update({ where: { id: u.id }, data: { similarTrekIds: u.after } })),
    ...(dropdownAfter
      ? [prisma.siteSetting.update({ where: { id: "site-settings" }, data: { categoryDropdownTreks: dropdownAfter } })]
      : []),
    ...postUpdates.map((u) => prisma.blogPost.update({ where: { id: u.id }, data: { content: u.after } })),
  ]);
  console.log("Applied. Now refresh the deployed site's caches.");
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
