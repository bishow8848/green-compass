/**
 * Re-state private transport across every tour already in the database.
 *
 * A private vehicle is now part of every tour rather than something bought on
 * top of it, so the old "Private Vehicle Upgrade" add-on is replaced by a
 * "Luxury Vehicle Upgrade", the inclusions gain the private-transport line,
 * and the exclusions say plainly that only the luxury upgrade costs extra.
 * scripts/create-tours.mts only ever creates, so the tours created before this
 * change need this pass to pick it up.
 *
 * Writes:  inclusions, exclusions, addons, and the addons / inEx descriptions
 *          inside sectionData (the rest of sectionData is left as the admin
 *          left it). FAQ answers that contradict the new promise — the Chitwan
 *          "tourist bus" answer — are rewritten from the definitions.
 *
 * Never touches: itinerary, pricing tiers, images, map fields, SEO, status.
 *
 *   npx tsx scripts/update-tour-transport.mts            # dry run
 *   npx tsx scripts/update-tour-transport.mts --apply
 *   npx tsx scripts/update-tour-transport.mts --apply <slug> ...
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import { buildAddons, buildExclusions, buildInclusions, buildSectionData } from "./tours/build";
import { ALL_TOURS } from "./tours/index";

const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const only = new Set(args.filter((a) => !a.startsWith("--")));

/** Copy written before private transport was guaranteed, and now wrong. */
const CONTRADICTIONS = [/tourist bus or private vehicle/i];

/** Pulls the bullet text out of the `<ul><li><p>…</p></li></ul>` lists we store. */
function bullets(html: string | null): string[] {
  return [...(html ?? "").matchAll(/<li><p>([\s\S]*?)<\/p><\/li>/g)].map((m) => m[1]);
}

function diff(before: string[], after: string[]) {
  const b = new Set(before);
  const a = new Set(after);
  return {
    added: after.filter((x) => !b.has(x)),
    removed: before.filter((x) => !a.has(x)),
  };
}

function parseJson<T>(raw: string | null, fallback: T): T {
  try {
    const v = raw ? JSON.parse(raw) : null;
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

async function main() {
  const wanted = ALL_TOURS.filter((t) => !only.size || only.has(t.content.slug));
  const rows = await prisma.trek.findMany({
    where: {
      slug: { in: wanted.map((t) => t.content.slug) },
      category: { slug: "tours" },
    },
    select: {
      id: true,
      slug: true,
      inclusions: true,
      exclusions: true,
      addons: true,
      sectionData: true,
      faqs: { select: { id: true, question: true, answer: true } },
    },
  });
  const bySlug = new Map(rows.map((r) => [r.slug, r]));

  const missing = wanted.filter((t) => !bySlug.has(t.content.slug)).map((t) => t.content.slug);
  if (missing.length) {
    console.log(`Not in the database (create them with create-tours.mts): ${missing.join(", ")}\n`);
  }

  let written = 0;
  let faqsFixed = 0;

  for (const t of wanted) {
    const row = bySlug.get(t.content.slug);
    if (!row) continue;
    const c = t.content;

    const inclusions = buildInclusions(c);
    const exclusions = buildExclusions(c);
    const addons = buildAddons(t);
    const built = buildSectionData(c, t.days.length);

    // Only the two descriptions that changed are patched, so headings and any
    // other section copy edited in the admin survive.
    const sectionData = parseJson<Record<string, { heading?: string; description?: string }>>(
      row.sectionData,
      {},
    );
    sectionData.addons = { ...built.addons, ...sectionData.addons, description: built.addons.description };
    sectionData.inEx = { ...built.inEx, ...sectionData.inEx, description: built.inEx.description };

    const oldAddons = parseJson<{ title?: string }[]>(row.addons, []);
    const inc = diff(bullets(row.inclusions), bullets(inclusions));
    const exc = diff(bullets(row.exclusions), bullets(exclusions));

    const staleFaqs = row.faqs.filter((f) => CONTRADICTIONS.some((re) => re.test(f.answer)));
    const faqUpdates = staleFaqs
      .map((f) => ({ id: f.id, answer: c.faqs.find((d) => d.question === f.question)?.answer }))
      .filter((u): u is { id: string; answer: string } => Boolean(u.answer));

    console.log(`${APPLY ? "WRITE" : "DRY  "}  ${row.slug}`);
    console.log(
      `        add-ons: ${oldAddons.map((a) => a.title).join(", ") || "none"}` +
        `  ->  ${addons.map((a) => `${a.title} $${a.pricePerUnit}`).join(", ")}`,
    );
    for (const line of inc.added) console.log(`        + inclusion: ${line}`);
    for (const line of inc.removed) console.log(`        - inclusion: ${line}`);
    for (const line of exc.added) console.log(`        + exclusion: ${line}`);
    for (const line of exc.removed) console.log(`        - exclusion: ${line}`);
    for (const u of faqUpdates) console.log(`        ~ faq answer rewritten (${u.id})`);

    if (APPLY) {
      await prisma.$transaction(async (tx) => {
        await tx.trek.update({
          where: { id: row.id },
          data: {
            inclusions,
            exclusions,
            addons: JSON.stringify(addons),
            sectionData: JSON.stringify(sectionData),
          },
        });
        for (const u of faqUpdates) {
          await tx.trekFaq.update({ where: { id: u.id }, data: { answer: u.answer } });
        }
      });
      written++;
      faqsFixed += faqUpdates.length;
    }
  }

  console.log("");
  console.log(
    APPLY
      ? `✅ Updated ${written} tour(s)${faqsFixed ? ` and ${faqsFixed} FAQ answer(s)` : ""}.` +
          " Run `npx tsx scripts/revalidate-treks.mts <baseUrl>` and `npm run cache:reset` so the live pages pick it up."
      : `Dry run only — ${rows.length} tour(s) ready. Re-run with --apply to write.`,
  );
}

main()
  .catch((e) => {
    console.error("ERROR:", e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
