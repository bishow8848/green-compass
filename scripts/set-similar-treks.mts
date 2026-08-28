/**
 * Fill in the "Similar Treks" block on every trek page.
 *
 * Relations are curated rather than computed: the most useful suggestion for
 * someone reading the Annapurna Base Camp page is the shorter Pokhara-start
 * version of the same trek, not simply another walk of the same difficulty.
 * Each trek gets three to five related treks, ordered most-relevant first.
 *
 *   npx tsx scripts/set-similar-treks.mts            # dry run
 *   npx tsx scripts/set-similar-treks.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

/** slug -> related slugs, most relevant first. Relations are made symmetric below. */
const RELATED: Record<string, string[]> = {
  // --- Annapurna Sanctuary ---
  "annapurna-base-camp-trek": ["abc-trek-nepal", "annapurna-base-camp-trek-from-pokhara", "annapurna-base-camp-trek-with-ghorepani-poonhill-trek", "mardi-himal-trek-with-annapurna-base-camp"],
  "abc-trek-nepal": ["annapurna-base-camp-trek", "annapurna-base-camp-trek-from-pokhara", "annapurna-base-camp-with-ghorepani-poonhill-from-pokhara", "mardi-himal-trek-from-pokhara"],
  "annapurna-base-camp-trek-from-pokhara": ["abc-trek-nepal", "annapurna-base-camp-trek", "annapurna-base-camp-with-ghorepani-poonhill-from-pokhara", "annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara"],
  "annapurna-base-camp-trek-with-ghorepani-poonhill-trek": ["annapurna-base-camp-with-ghorepani-poonhill-from-pokhara", "annapurna-base-camp-trek", "poonhill-trek", "khopra-danda-trek"],
  "annapurna-base-camp-with-ghorepani-poonhill-from-pokhara": ["annapurna-base-camp-trek-with-ghorepani-poonhill-trek", "annapurna-base-camp-trek-from-pokhara", "poonhill-trek-from-pokhara", "abc-trek-nepal"],
  "mardi-himal-trek-with-annapurna-base-camp": ["annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara", "annapurna-base-camp-trek", "mardi-himal-trek", "abc-trek-nepal"],
  "annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara": ["mardi-himal-trek-with-annapurna-base-camp", "annapurna-base-camp-trek-from-pokhara", "mardi-himal-trek-from-pokhara", "abc-trek-nepal"],

  // --- Mardi Himal ---
  "mardi-himal-trek": ["mardi-himal-trek-from-pokhara", "mardi-himal-trek-with-annapurna-base-camp", "annapurna-base-camp-trek", "poonhill-trek"],
  "mardi-himal-trek-from-pokhara": ["mardi-himal-trek", "annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara", "abc-trek-nepal", "poonhill-trek-from-pokhara"],

  // --- Poon Hill / Khopra / Mohare ---
  "poonhill-trek": ["poonhill-trek-from-pokhara", "annapurna-base-camp-trek-with-ghorepani-poonhill-trek", "khopra-danda-trek", "mohare-danda-trek"],
  "poonhill-trek-from-pokhara": ["poonhill-trek", "annapurna-base-camp-with-ghorepani-poonhill-from-pokhara", "khopra-danda-trek-from-pokhara", "mohare-danda-trek-from-pokhara"],
  "khopra-danda-trek": ["khopra-danda-trek-from-pokhara", "mohare-danda-trek", "poonhill-trek", "annapurna-base-camp-trek"],
  "khopra-danda-trek-from-pokhara": ["khopra-danda-trek", "mohare-danda-trek-from-pokhara", "poonhill-trek-from-pokhara", "abc-trek-nepal"],
  "mohare-danda-trek": ["mohare-danda-trek-from-pokhara", "khopra-danda-trek", "poonhill-trek", "annapurna-base-camp-trek-with-ghorepani-poonhill-trek"],
  "mohare-danda-trek-from-pokhara": ["mohare-danda-trek", "khopra-danda-trek-from-pokhara", "poonhill-trek-from-pokhara", "annapurna-base-camp-with-ghorepani-poonhill-from-pokhara"],

  // --- Annapurna Circuit / Tilicho ---
  "annapurna-circuit-trek": ["annapurna-circuit-with-tilicho-lake-trek", "short-annapurna-circuit-trek", "tilicho-lake-trek", "annapurna-base-camp-trek"],
  "annapurna-circuit-with-tilicho-lake-trek": ["annapurna-circuit-trek", "tilicho-lake-trek", "short-annapurna-circuit-trek", "jomsom-muktinath-trek"],
  "short-annapurna-circuit-trek": ["annapurna-circuit-trek", "annapurna-circuit-with-tilicho-lake-trek", "short-tilicho-lake-trek", "jomsom-muktinath-trek"],
  "tilicho-lake-trek": ["short-tilicho-lake-trek", "annapurna-circuit-with-tilicho-lake-trek", "annapurna-circuit-trek", "manaslu-circuit-trek"],
  "short-tilicho-lake-trek": ["tilicho-lake-trek", "annapurna-circuit-with-tilicho-lake-trek", "short-annapurna-circuit-trek", "annapurna-circuit-trek"],

  // --- Lamjung / Khori (Pokhara hill treks) ---
  "khori-himal-trek": ["khori-himal-trek-from-pokhara", "lamjung-himal-trek", "mardi-himal-trek", "mohare-danda-trek"],
  "khori-himal-trek-from-pokhara": ["khori-himal-trek", "lamjung-himal-trek", "mardi-himal-trek-from-pokhara", "poonhill-trek-from-pokhara"],
  "lamjung-himal-trek": ["khori-himal-trek", "khori-himal-trek-from-pokhara", "mardi-himal-trek", "mohare-danda-trek"],

  // --- Mustang ---
  "upper-mustang-trek": ["upper-mustang-trek-from-pokhara", "lower-mustang-trek", "jomsom-muktinath-trek", "annapurna-circuit-trek"],
  "upper-mustang-trek-from-pokhara": ["upper-mustang-trek", "lower-mustang-trek-from-pokhara", "jomsom-muktinath-trek-from-pokhara", "lower-mustang-trek"],
  "lower-mustang-trek": ["lower-mustang-trek-from-pokhara", "upper-mustang-trek", "jomsom-muktinath-trek", "annapurna-circuit-trek"],
  "lower-mustang-trek-from-pokhara": ["lower-mustang-trek", "upper-mustang-trek-from-pokhara", "jomsom-muktinath-trek-from-pokhara", "upper-mustang-trek"],
  "jomsom-muktinath-trek": ["jomsom-muktinath-trek-from-pokhara", "lower-mustang-trek", "upper-mustang-trek", "annapurna-circuit-trek"],
  "jomsom-muktinath-trek-from-pokhara": ["jomsom-muktinath-trek", "lower-mustang-trek-from-pokhara", "upper-mustang-trek-from-pokhara", "poonhill-trek-from-pokhara"],

  // --- Everest ---
  "everest-base-camp-trek": ["gokyo-lake-trek", "everest-three-pass-trek", "everest-view-trek", "annapurna-base-camp-trek"],
  "everest-three-pass-trek": ["everest-base-camp-trek", "gokyo-lake-trek", "rolwaling-valley-trek", "makalu-base-camp-trek"],
  "gokyo-lake-trek": ["everest-base-camp-trek", "everest-three-pass-trek", "everest-view-trek", "rolwaling-valley-trek"],
  "everest-view-trek": ["everest-base-camp-trek", "gokyo-lake-trek", "poonhill-trek", "mardi-himal-trek"],

  // --- Langtang / Helambu / Rasuwa ---
  "langtang-valley-trek": ["langtang-gosaikunda-lake-trek", "langtang-ganja-la-pass-trek", "tamang-heritage-trek", "gosaikunda-lake-trek"],
  "langtang-gosaikunda-lake-trek": ["langtang-valley-trek", "gosaikunda-lake-trek", "langtang-ganja-la-pass-trek", "helambu-trek"],
  "langtang-ganja-la-pass-trek": ["langtang-valley-trek", "langtang-gosaikunda-lake-trek", "helambu-trek", "everest-three-pass-trek"],
  "gosaikunda-lake-trek": ["langtang-gosaikunda-lake-trek", "helambu-trek", "langtang-valley-trek", "ama-yangri-trek"],
  "helambu-trek": ["ama-yangri-trek", "gosaikunda-lake-trek", "langtang-valley-trek", "tamang-heritage-trek"],
  "ama-yangri-trek": ["helambu-trek", "gosaikunda-lake-trek", "tamang-heritage-trek", "langtang-valley-trek"],
  "tamang-heritage-trek": ["langtang-valley-trek", "ganesh-himal-trek", "ruby-valley-circuit-trek", "helambu-trek"],
  "ganesh-himal-trek": ["ruby-valley-circuit-trek", "tamang-heritage-trek", "langtang-valley-trek", "manaslu-circuit-trek"],
  "ruby-valley-circuit-trek": ["ganesh-himal-trek", "tamang-heritage-trek", "langtang-valley-trek", "manaslu-circuit-trek"],

  // --- Manaslu / Tsum ---
  "manaslu-circuit-trek": ["tsum-valley-and-manaslu-circuit-trek", "tsum-valley-trek", "annapurna-circuit-trek", "ganesh-himal-trek"],
  "tsum-valley-and-manaslu-circuit-trek": ["manaslu-circuit-trek", "tsum-valley-trek", "annapurna-circuit-trek", "upper-mustang-trek"],
  "tsum-valley-trek": ["tsum-valley-and-manaslu-circuit-trek", "manaslu-circuit-trek", "ganesh-himal-trek", "upper-mustang-trek"],

  // --- Kanchenjunga / Makalu / eastern Nepal ---
  "kanchenjunga-circuit-trek": ["kanchenjunga-north-base-camp-trek", "kanchenjunga-south-base-camp-trek", "makalu-base-camp-trek", "everest-three-pass-trek"],
  "kanchenjunga-north-base-camp-trek": ["kanchenjunga-circuit-trek", "kanchenjunga-south-base-camp-trek", "makalu-base-camp-trek", "everest-base-camp-trek"],
  "kanchenjunga-south-base-camp-trek": ["kanchenjunga-circuit-trek", "kanchenjunga-north-base-camp-trek", "makalu-base-camp-trek", "mundum-trek"],
  "makalu-base-camp-trek": ["kanchenjunga-circuit-trek", "everest-three-pass-trek", "everest-base-camp-trek", "mundum-trek"],
  "mundum-trek": ["makalu-base-camp-trek", "kanchenjunga-south-base-camp-trek", "everest-view-trek", "helambu-trek"],

  // --- Rolwaling ---
  "rolwaling-valley-trek": ["everest-three-pass-trek", "gokyo-lake-trek", "everest-base-camp-trek", "makalu-base-camp-trek"],

  // --- Dolpo / Humla ---
  "lower-dolpo-trek": ["upper-dolpo-trek", "humla-limi-valley-trek", "upper-mustang-trek", "kanchenjunga-circuit-trek"],
  "upper-dolpo-trek": ["lower-dolpo-trek", "humla-limi-valley-trek", "upper-mustang-trek", "kanchenjunga-circuit-trek"],
  "humla-limi-valley-trek": ["upper-dolpo-trek", "lower-dolpo-trek", "upper-mustang-trek", "kanchenjunga-circuit-trek"],
};

const MAX = 4;

async function main() {
  const treks = await prisma.trek.findMany({
    select: { id: true, slug: true, title: true, status: true, similarTrekIds: true },
  });
  const bySlug = new Map(treks.map((t) => [t.slug, t]));

  const errors: string[] = [];
  for (const [slug, rel] of Object.entries(RELATED)) {
    if (!bySlug.has(slug)) errors.push(`unknown slug in map: ${slug}`);
    for (const r of rel) {
      if (!bySlug.has(r)) errors.push(`[${slug}] unknown related slug: ${r}`);
      if (r === slug) errors.push(`[${slug}] lists itself`);
    }
  }
  for (const t of treks) {
    if (!RELATED[t.slug]) errors.push(`no related treks defined for: ${t.slug}`);
  }
  if (errors.length) {
    console.error("VALIDATION FAILED:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exitCode = 1;
    return;
  }

  // Make every relation two-way, so a trek listed as similar links back.
  const merged = new Map<string, string[]>();
  for (const [slug, rel] of Object.entries(RELATED)) merged.set(slug, [...rel]);
  for (const [slug, rel] of Object.entries(RELATED)) {
    for (const r of rel) {
      const back = merged.get(r)!;
      if (!back.includes(slug)) back.push(slug);
    }
  }

  let changed = 0;
  for (const t of treks) {
    const slugs = merged.get(t.slug)!.slice(0, MAX);
    // Only published treks are rendered, so do not spend a slot on a draft.
    const ids = slugs
      .map((s) => bySlug.get(s)!)
      .filter((x) => x.status === "published")
      .map((x) => x.id);
    const next = JSON.stringify(ids);
    if (next === t.similarTrekIds) continue;
    changed++;
    console.log(`${t.slug}\n    -> ${slugs.map((s) => (bySlug.get(s)!.status === "published" ? s : `${s} (draft, skipped)`)).join(", ")}`);
    if (APPLY) await prisma.trek.update({ where: { id: t.id }, data: { similarTrekIds: next } });
  }

  console.log(`\n${changed} treks ${APPLY ? "updated" : "would change"}.`);
  if (!APPLY) console.log("Dry run — re-run with --apply to write.");
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
