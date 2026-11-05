/**
 * Rewrites the trip pages' package text as plain product copy (see
 * scripts/package-variants/plain-text.ts): overviews, the airport exclusion,
 * meta descriptions, FAQs and the complete package's sections stop mentioning
 * or linking the other version.
 *
 *   npx tsx scripts/plain-package-text.mts --dry-run
 *   npx tsx scripts/plain-package-text.mts
 *   npx tsx scripts/plain-package-text.mts --restore scripts/.backups/plain-package-text-<stamp>.json
 *
 * Every value it replaces is saved to scripts/.backups/ first. Refresh the
 * deployed site afterwards:
 *   npm run cache:refresh -- --revalidate-url https://greencompasstreks.com
 */
import "dotenv/config";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";
import { plainExclusions, plainMetaDescription, plainOverview, plainQuestion, plainSections } from "./package-variants/plain-text";

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const RESTORE = args.includes("--restore") ? args[args.indexOf("--restore") + 1] : undefined;
const BACKUP_DIR = join(fileURLToPath(new URL("..", import.meta.url)), "scripts", ".backups");

/** Wording that only belongs next to the other version — none should survive. */
const LEFTOVER = /city to city|city-to-city|complete package|this version|both versions|-package"/i;

type Row = {
  id: string;
  slug: string;
  overview: string;
  exclusions: string;
  metaDescription: string | null;
  customSections: string | null;
  sectionOrder: string | null;
  faqs: Array<{ id: string; question: string; answer: string }>;
};

type Change = {
  id: string;
  slug: string;
  data: Partial<Pick<Row, "overview" | "exclusions" | "metaDescription" | "customSections" | "sectionOrder">>;
  renamed: Array<{ id: string; question: string }>;
  dropped: string[];
  before: Row;
};

function plan(row: Row): Change | null {
  const data: Change["data"] = {};
  const overview = plainOverview(row.overview);
  if (overview !== row.overview) data.overview = overview;
  const exclusions = plainExclusions(row.exclusions);
  if (exclusions !== row.exclusions) data.exclusions = exclusions;
  const meta = plainMetaDescription(row.metaDescription);
  if (meta !== row.metaDescription) data.metaDescription = meta;
  const sections = plainSections(row.customSections, row.sectionOrder);
  if (sections.customSections !== row.customSections) data.customSections = sections.customSections;
  if (sections.sectionOrder !== row.sectionOrder) data.sectionOrder = sections.sectionOrder;

  const renamed: Change["renamed"] = [];
  const dropped: string[] = [];
  for (const faq of row.faqs) {
    const question = plainQuestion(faq.question);
    if (question === null) dropped.push(faq.id);
    else if (question !== faq.question) renamed.push({ id: faq.id, question });
  }
  if (Object.keys(data).length === 0 && renamed.length === 0 && dropped.length === 0) return null;
  return { id: row.id, slug: row.slug, data, renamed, dropped, before: row };
}

function leftovers(change: Change): string[] {
  const after = {
    overview: change.data.overview ?? change.before.overview,
    exclusions: change.data.exclusions ?? change.before.exclusions,
    sections: change.data.customSections ?? change.before.customSections ?? "",
    faqs: change.before.faqs
      .filter((f) => !change.dropped.includes(f.id))
      .map((f) => `${change.renamed.find((r) => r.id === f.id)?.question ?? f.question} ${f.answer}`)
      .join(" "),
  };
  return Object.entries(after)
    .filter(([, text]) => LEFTOVER.test(text))
    .map(([field, text]) => `${field}: …${text.slice(Math.max(0, text.search(LEFTOVER) - 60), text.search(LEFTOVER) + 60).replace(/\s+/g, " ")}…`);
}

async function restore(file: string) {
  const backup = JSON.parse(readFileSync(file, "utf8")) as Row[];
  for (const row of backup) {
    await prisma.$transaction([
      prisma.trek.update({
        where: { id: row.id },
        data: {
          overview: row.overview,
          exclusions: row.exclusions,
          metaDescription: row.metaDescription,
          customSections: row.customSections,
          sectionOrder: row.sectionOrder,
        },
      }),
      prisma.trekFaq.deleteMany({ where: { trekId: row.id } }),
      prisma.trekFaq.createMany({ data: row.faqs.map((f) => ({ trekId: row.id, question: f.question, answer: f.answer })) }),
    ]);
  }
  console.log(`Restored ${backup.length} trip(s) from ${file}. Refresh the site's cache.`);
}

async function main() {
  if (RESTORE) return restore(RESTORE);

  const rows: Row[] = await prisma.trek.findMany({
    where: { status: "published" },
    select: {
      id: true,
      slug: true,
      overview: true,
      exclusions: true,
      metaDescription: true,
      customSections: true,
      sectionOrder: true,
      faqs: { select: { id: true, question: true, answer: true } },
    },
  });
  const changes = rows.map(plan).filter((c): c is Change => c !== null);

  const count = (pick: (c: Change) => boolean) => changes.filter(pick).length;
  console.log(
    `${changes.length} of ${rows.length} trip page(s) to rewrite: ` +
      `${count((c) => "overview" in c.data)} overviews, ${count((c) => "exclusions" in c.data)} exclusion lists, ` +
      `${count((c) => "metaDescription" in c.data)} descriptions, ${count((c) => "customSections" in c.data)} section sets, ` +
      `${changes.reduce((n, c) => n + c.renamed.length, 0)} FAQs reworded, ${changes.reduce((n, c) => n + c.dropped.length, 0)} FAQs removed`
  );
  const missed = changes.flatMap((c) => leftovers(c).map((l) => `  ${c.slug} — ${l}`));
  const untouched = rows.filter((r) => !changes.some((c) => c.id === r.id) && LEFTOVER.test(`${r.overview} ${r.customSections ?? ""}`));
  for (const r of untouched) missed.push(`  ${r.slug} — not matched, still mentions the other version`);
  console.log(missed.length ? `Still mentioning the other version after the rewrite:\n${missed.join("\n")}` : "Nothing mentions the other version after the rewrite.");

  for (const slug of ["everest-base-camp-trek", "everest-base-camp-trek-package"]) {
    const c = changes.find((x) => x.slug === slug);
    if (c?.data.overview) console.log(`\n${slug} opens:\n  ${c.data.overview.slice(0, 520).replace(/<[^>]+>/g, "")}…`);
  }

  if (DRY_RUN) {
    console.log("\nDry run — nothing written.");
    return;
  }

  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = join(BACKUP_DIR, `plain-package-text-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
  writeFileSync(backupFile, JSON.stringify(changes.map((c) => c.before)));
  console.log(`\nBackup: ${backupFile}`);

  for (const [i, c] of changes.entries()) {
    await prisma.$transaction([
      ...(Object.keys(c.data).length ? [prisma.trek.update({ where: { id: c.id }, data: c.data })] : []),
      ...(c.dropped.length ? [prisma.trekFaq.deleteMany({ where: { id: { in: c.dropped } } })] : []),
      ...c.renamed.map((r) => prisma.trekFaq.update({ where: { id: r.id }, data: { question: r.question } })),
    ]);
    if ((i + 1) % 25 === 0 || i + 1 === changes.length) console.log(`  ${i + 1}/${changes.length}`);
  }
  console.log("Applied. Now refresh the deployed site's caches.");
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
