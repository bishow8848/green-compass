/**
 * Tidy the on-page SEO text: trek titles, meta titles and meta descriptions.
 *
 * Nothing here changes a URL. Three kinds of fix:
 *   - titles with stray whitespace or a misspelling ("form Pokhara", "Annapunra")
 *   - meta titles over ~60 characters, which Google truncates in results
 *   - meta descriptions over ~160 characters, truncated in the snippet
 *
 *   npx tsx scripts/fix-seo-text.mts            # dry run
 *   npx tsx scripts/fix-seo-text.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

/** Titles rendered as the page H1 and in every similar-trek card. */
const TITLES: Record<string, string> = {
  "annapurna-base-camp-trek-from-pokhara": "Annapurna Base Camp Trek from Pokhara",
  "mardi-himal-trek-with-annapurna-base-camp": "Annapurna Base Camp Trek with Mardi Himal Trek",
  "tsum-valley-trek": "Tsum Valley Trek",
};

/** Rewritten to sit inside the ~60 character limit without losing the hook. */
const META_TITLES: Record<string, string> = {
  "annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara": "Mardi Himal & Annapurna Base Camp Trek – 10 Days",
  "humla-limi-valley-trek": "Humla Limi Valley Trek – 20 Days | Nepal's Remotest",
  "jomsom-muktinath-trek": "Jomsom Muktinath Trek – 9 Days | Kali Gandaki",
  "kanchenjunga-south-base-camp-trek": "Kanchenjunga South Base Camp Trek – 11 Days",
  "tamang-heritage-trek": "Tamang Heritage Trek – 13 Days | Village Homestays",
  "annapurna-circuit-with-tilicho-lake-trek": "Annapurna Circuit with Tilicho Lake – 14 Days",
  "everest-three-pass-trek": "Everest Three Pass Trek – 17 Days | Cho La & Renjo La",
  "gosaikunda-lake-trek": "Gosaikunda Lake Trek – 7 Days | Sacred Alpine Lakes",
  "lower-mustang-trek-from-pokhara": "Lower Mustang Trek from Pokhara – 7 Days | Muktinath",
  "mardi-himal-trek-from-pokhara": "Mardi Himal Trek from Pokhara – 5 Days | 4,500 m",
  "rolwaling-valley-trek": "Rolwaling Valley Trek – 17 Days | Tashi Lapcha Pass",
  "ruby-valley-circuit-trek": "Ruby Valley Circuit Trek – 11 Days | Ganesh Himal",
  "tilicho-lake-trek": "Tilicho Lake Trek – 12 Days | World's Highest Lakes",
  "upper-mustang-trek": "Upper Mustang Trek – 16 Days | Lo Manthang",
};

/** Rewritten to sit inside the ~160 character snippet limit. */
const META_DESCRIPTIONS: Record<string, string> = {
  "abc-trek-nepal":
    "Walk the ABC Trek Nepal to Annapurna Base Camp (4,130 m) in 5 days from Pokhara, through Gurung villages, rhododendron forest and the Annapurna Sanctuary.",
  "annapurna-base-camp-trek-with-ghorepani-poonhill-trek":
    "A 12-day Annapurna trek combining the Poon Hill sunrise with Annapurna Base Camp (4,130 m), Gurung villages, rhododendron forest and the Jhinu hot springs.",
  "annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara":
    "Combine Mardi Himal Base Camp (4,500 m) and Annapurna Base Camp (4,130 m) on a 10-day Pokhara-to-Pokhara trek through ridge trails and sanctuary gorges.",
  "annapurna-base-camp-with-ghorepani-poonhill-from-pokhara":
    "Trek from Pokhara to Annapurna Base Camp via Ghorepani and Poon Hill in 8 days, with sunrise views, Gurung villages and the Annapurna Sanctuary.",
  "annapurna-circuit-trek":
    "Walk the classic Annapurna Circuit in 15 days with the Tilicho Lake detour (4,919 m), an acclimatisation day in Manang and the Thorong La Pass at 5,416 m.",
  "everest-base-camp-trek":
    "Trek to Everest Base Camp (5,364 m) in 14 days via Namche Bazaar and Tengboche, with sunrise on Kala Patthar, two acclimatisation days and Lukla flights.",
  "humla-limi-valley-trek":
    "Fly to Simikot and trek the Limi Valley — Halji, Til and Jang — through Nepal's most isolated district, with high passes and ancient Tibetan monasteries.",
  "kanchenjunga-north-base-camp-trek":
    "Trek the Ghunsa valley to Pangpema (5,143 m) below Kanchenjunga's north face, with acclimatisation days at Ghunsa and Khambachen on this 14-day route.",
  "kanchenjunga-south-base-camp-trek":
    "Trek the Simbua Khola to Cheram and the Yalung Glacier moraine to Oktang (4,730 m), facing Kanchenjunga's south face on an 11-day restricted-area route.",
  "makalu-base-camp-trek":
    "Trek to Makalu Base Camp (4,870 m) in 17 days through the Barun valley, crossing high passes and remote villages below the world's fifth-highest peak.",
  "mundum-trek":
    "Trek the new Mundum trail through Kirat Rai homestay villages in Khotang, climbing Silchung Hill (4,200 m) for Everest, Makalu and Kanchenjunga views.",
  "short-tilicho-lake-trek":
    "Reach Tilicho Lake (4,919 m), one of the highest lakes on earth, on a 9-day out-and-back trek from Chame with an acclimatisation day in Manang.",
  "tamang-heritage-trek":
    "Trek the Tamang villages of the Nepal-Tibet borderlands with homestays, the hot springs at Tatopani and a finish at Kyanjin Gompa in the Langtang valley.",
  "tsum-valley-trek":
    "Trek the remote Tsum Valley in 13 days — a hidden Himalayan sanctuary of Tibetan Buddhist villages, ancient gompas at Mu and Rachen, and Ganesh Himal views.",
};

async function main() {
  const treks = await prisma.trek.findMany({
    select: { id: true, slug: true, title: true, metaTitle: true, metaDescription: true, duration: true },
  });
  const bySlug = new Map(treks.map((t) => [t.slug, t]));

  const errors: string[] = [];
  for (const map of [TITLES, META_TITLES, META_DESCRIPTIONS]) {
    for (const slug of Object.keys(map)) {
      if (!bySlug.has(slug)) errors.push(`unknown slug: ${slug}`);
    }
  }
  for (const [slug, v] of Object.entries(META_TITLES)) {
    if (v.length > 60) errors.push(`[${slug}] replacement metaTitle is still ${v.length} chars`);
  }
  for (const [slug, v] of Object.entries(META_DESCRIPTIONS)) {
    if (v.length > 160) errors.push(`[${slug}] replacement metaDescription is still ${v.length} chars`);
    if (v.length < 110) errors.push(`[${slug}] replacement metaDescription is only ${v.length} chars`);
  }
  if (errors.length) {
    console.error("VALIDATION FAILED:\n" + errors.map((e) => "  - " + e).join("\n"));
    process.exitCode = 1;
    return;
  }

  let n = 0;
  for (const t of treks) {
    const data: Record<string, string> = {};
    // Every title gets whitespace-trimmed; a few also get a spelling fix.
    const title = (TITLES[t.slug] ?? t.title).trim();
    if (title !== t.title) data.title = title;
    if (META_TITLES[t.slug] && META_TITLES[t.slug] !== t.metaTitle) data.metaTitle = META_TITLES[t.slug];
    if (META_DESCRIPTIONS[t.slug] && META_DESCRIPTIONS[t.slug] !== t.metaDescription) {
      data.metaDescription = META_DESCRIPTIONS[t.slug];
    }
    if (!Object.keys(data).length) continue;

    n++;
    console.log(`\n${t.slug}`);
    for (const [k, v] of Object.entries(data)) {
      console.log(`   ${k}:`);
      console.log(`     - ${JSON.stringify(k === "title" ? t.title : k === "metaTitle" ? t.metaTitle : t.metaDescription)}`);
      console.log(`     + ${JSON.stringify(v)}  (${v.length})`);
    }
    if (APPLY) await prisma.trek.update({ where: { id: t.id }, data });
  }

  console.log(`\n${n} treks ${APPLY ? "updated" : "would change"}.`);
  if (!APPLY) console.log("Dry run — re-run with --apply to write.");
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
