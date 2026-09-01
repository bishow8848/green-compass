/**
 * Stage 5: attach the uploaded photos to their treks.
 *
 * Sets heroImage and rebuilds the gallery, writing alt text and a caption for
 * every image. Alt text describes what is actually in the frame — derived from
 * the Commons filename, which names the places and peaks — rather than repeating
 * the trek name six times, which helps nobody using a screen reader.
 *
 * Captions describe what the photo shows and carry no photographer credit.
 * The CC BY / CC BY-SA attribution requirement is met by the credits list at
 * scripts/gallery-content/PHOTO-CREDITS.md, not by text under every image.
 *
 *   npx tsx scripts/images/write-to-db.mts <uploaded.json>            # dry run
 *   npx tsx scripts/images/write-to-db.mts <uploaded.json> --apply
 */
import "dotenv/config";
import { readFileSync } from "node:fs";
import { prisma } from "../../lib/prisma";

const IN = process.argv[2] ?? "/tmp/uploaded.json";
const APPLY = process.argv.includes("--apply");

/** Named features worth calling out in alt text, longest first so phrases win. */
const FEATURES = [
  "Annapurna Base Camp", "Machhapuchhre Base Camp", "Mardi Himal Base Camp",
  "Everest Base Camp", "Manaslu Base Camp", "Makalu Base Camp", "Tilicho Base Camp",
  "Kanchenjunga Base Camp", "Thorong La Pass", "Larkya La Pass", "Cho La Pass",
  "Renjo La Pass", "Kongma La Pass", "Ganja La Pass", "Tashi Lapcha Pass",
  "Nara La Pass", "Thorong La", "Larkya La", "Cho La", "Renjo La", "Kongma La",
  "Phoksundo Lake", "Gosaikunda Lake", "Tilicho Lake", "Gokyo Lake", "Birendra Lake",
  "Khayer Lake", "Tsho Rolpa", "Phewa Lake",
  "Kala Patthar", "Gokyo Ri", "Kyanjin Ri", "Tsergo Ri", "Poon Hill", "Muldai",
  "Ama Yangri", "Khopra Danda", "Mohare Danda", "Badal Danda", "Kori Danda",
  "Namche Bazaar", "Kyanjin Gompa", "Mu Gompa", "Rachen Gompa", "Tengboche",
  "Dingboche", "Pheriche", "Lobuche", "Gorakshep", "Machhermo", "Khumjung",
  "Lukla", "Phakding", "Monjo", "Thame", "Dole", "Chhukung", "Dzongla",
  "Lo Manthang", "Kagbeni", "Jomsom", "Marpha", "Muktinath", "Chhoser", "Ghami",
  "Charang", "Dhakmar", "Ghiling", "Chele", "Chhusang", "Syangboche",
  "Manang", "Chame", "Pisang", "Besisahar", "Yak Kharka", "Thorong Phedi",
  "Jhinu Danda", "Chhomrong", "Sinuwa", "Bamboo", "Deurali", "Ghandruk",
  "Ghorepani", "Tadapani", "Kande", "Forest Camp", "Low Camp", "High Camp",
  "Sama Gaun", "Samdo", "Bimthang", "Namrung", "Lho", "Shyala", "Jagat",
  "Machha Khola", "Chumling", "Chekampar", "Lokpa", "Philim", "Nile",
  "Syabrubesi", "Syabru Besi", "Lama Hotel", "Langtang Village", "Langtang",
  "Dhunche", "Sing Gompa", "Chandanbari", "Laurebina", "Tharepati", "Chisapani",
  "Tarkeghyang", "Tarke Ghyang", "Sermathang", "Khutumsang", "Melamchi",
  "Gatlang", "Briddim", "Thuman", "Nagthali", "Tatopani", "Somdang", "Tipling",
  "Ghunsa", "Khambachen", "Lhonak", "Pangpema", "Cheram", "Tseram", "Ramche",
  "Sekathum", "Amjilosa", "Gyabla", "Taplejung", "Yamphudin",
  "Num", "Seduwa", "Tashigaon", "Khongma", "Yangle Kharka", "Langmale Kharka",
  "Dunai", "Juphal", "Ringmo", "Shey Gompa", "Dho Tarap", "Saldang", "Tarakot",
  "Simikot", "Kermi", "Yalbang", "Hilsa", "Halji", "Til", "Limi Valley",
  "Bedding", "Simigaon", "Rolwaling", "Tumlingtar", "Pokhara", "Kathmandu",
  "Sundarijal", "Nayapul", "Birethanti", "Siding",
  // Places on the remote-region treks added later.
  "Italian Base Camp", "Dhaulagiri Base Camp", "Churen Himal Base Camp",
  "Api Himal Base Camp", "Glacier Camp", "Hidden Valley", "French Pass",
  "Dhampus Pass", "Jaljala Pass", "Rupina La", "Teri La", "Saribung La",
  "Sherpani Col", "West Col", "Amphu Labtsa", "Tilman Pass", "Sangda La",
  "Niwar La", "Numa La", "Baga La", "Mola La", "Shipton La", "Namaskar Pass",
  "Panch Pokhari", "Damodar Kunda", "Ramaroshan", "Badimalika",
  "Dhorpatan", "Darbang", "Dharapani", "Muri", "Boghara", "Dobang", "Lumsum",
  "Gurjaghat", "Pelma", "Maikot", "Thabang", "Sulichaur",
  "Barpak", "Laprak", "Gumda", "Nyak", "Bihi", "Prok", "Serang Gompa",
  "Yak Kharka", "Sanduwa", "Chhepka", "Shyanta", "Charka Bhot", "Tokyu",
  "Yara", "Tange", "Luri", "Ghuma Thanti", "Phalyak", "Sangda",
  "Nar", "Phu", "Meta", "Kyang", "Koto", "Nagoru", "Dhalung",
  "Simigaon", "Beding", "Dongang", "Gongar", "Singati", "Na",
  "Langshisa Kharka", "Nasempati", "Kami Kharka", "Tempathang", "Deep Gaun",
  "Ghusa", "Martadi", "Kolti", "Mangalsen", "Darchula", "Dhangadhi",
  "Nepalgunj", "Ilam", "Bhadrapur", "Sandakphu", "Chintapu", "Chyangthapu",
  "Hangetham", "Maimajhuwa", "Singalila",
];

/** Peaks — described as mountains rather than places. */
const PEAKS = [
  "Mount Everest", "Everest", "Lhotse", "Nuptse", "Makalu", "Cho Oyu",
  "Ama Dablam", "Thamserku", "Kangtega", "Pumori", "Kongde", "Khumbila",
  "Annapurna South", "Annapurna I", "Annapurna II", "Annapurna III",
  "Annapurna IV", "Annapurna", "Machhapuchhre", "Machapuchare", "Fishtail",
  "Hiunchuli", "Gangapurna", "Tilicho Peak", "Nilgiri", "Dhaulagiri",
  "Manaslu", "Himal Chuli", "Ganesh Himal", "Baudha", "Himlung", "Cheo Himal",
  "Langtang Lirung", "Dorje Lakpa", "Ganchenpo", "Naya Kanga", "Gaurishankar",
  "Kangchenjunga", "Kanchenjunga", "Jannu", "Kumbhakarna",
  "Mardi Himal", "Lamjung Himal", "Khori Himal", "Nemjung", "Kang Guru",
  // Peaks on the remote-region treks added later.
  "Dhaulagiri I", "Dhaulagiri II", "Churen Himal", "Gurja Himal",
  "Putha Hiunchuli", "Tukuche Peak", "Sita Chuchura", "Api", "Nampa", "Saipal",
  "Baruntse", "Chamlang", "Tengi Ragi Tau", "Pachermo", "Yalung Ri",
  "Langshisa Ri", "Jugal Himal", "Phurbi Chyachu", "Himlung Himal",
  "Ngadi Chuli", "Kanjiroba", "Saribung", "Damodar Himal", "Nilgiri North",
];

const ALL_NAMES = [...FEATURES, ...PEAKS].sort((a, b) => b.length - a.length);
const PEAK_SET = new Set(PEAKS.map((p) => p.toLowerCase()));

/** Strip the parts of a Commons filename that describe the file, not the scene. */
function cleanName(file: string): string {
  return file
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/\b(19|20)\d{2}(\d{4})?\b/g, " ")          // years and yyyymmdd stamps
    .replace(/\b(IMG|DSC|DSCN|P|ZH|IMGP)[-_ ]?\d+\b/gi, " ")
    .replace(/\b(cropped|unedited|edited|retouched|stitch|panorama of|version)\b/gi, " ")
    .replace(/\b[a-z]{2,4}\d{3,}\b/gi, " ")             // camera/photographer codes
    .replace(/[_"']/g, " ")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[-–—]/g, " ")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Named places and peaks that appear in a filename, in order, without overlaps. */
function subjects(file: string): { name: string; isPeak: boolean }[] {
  const text = cleanName(file);
  const found: { name: string; isPeak: boolean; at: number }[] = [];
  const taken: [number, number][] = [];
  for (const name of ALL_NAMES) {
    const at = text.toLowerCase().indexOf(name.toLowerCase());
    if (at < 0) continue;
    const end = at + name.length;
    if (taken.some(([s, e]) => at < e && end > s)) continue;
    taken.push([at, end]);
    found.push({ name, isPeak: PEAK_SET.has(name.toLowerCase()), at });
  }
  return found.sort((a, b) => a.at - b.at).map(({ name, isPeak }) => ({ name, isPeak }));
}

const list = (items: string[]) =>
  items.length <= 1 ? items[0] ?? "" :
  items.length === 2 ? `${items[0]} and ${items[1]}` :
  `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

/** What kind of thing a name refers to, so the wording suits it. */
type Kind = "peak" | "lake" | "pass" | "viewpoint" | "basecamp" | "monastery" | "place";

function kindOf(name: string, isPeak: boolean): Kind {
  if (isPeak) return "peak";
  if (/\bLake$|^Tsho|Pokhari/i.test(name)) return "lake";
  if (/\bLa( Pass)?$|\bPass$/i.test(name)) return "pass";
  // Jhinu Danda is a village with hot springs, not a ridge viewpoint like the others.
  if (/^Jhinu Danda$/i.test(name)) return "place";
  if (/\bRi$|\bDanda$|Patthar|Poon Hill|Muldai/i.test(name)) return "viewpoint";
  if (/Base Camp/i.test(name)) return "basecamp";
  if (/Gompa|Monastery/i.test(name)) return "monastery";
  return "place";
}

/** Shorter, readable form of a trek title for use inside a sentence. */
function shortTrek(title: string): string {
  return title
    .replace(/\s*[-–—|].*$/, "")
    .replace(/\s+from Pokhara\b/i, "")
    .replace(/\s+Trek(king)?\b/i, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/**
 * Alt text describes what is in the frame. Six images on one page must not
 * share a description, so the phrasing is varied by slot and then checked for
 * collisions by the caller.
 */
function altFor(file: string, trekTitle: string, role: string, slot: number): string {
  const subs = subjects(file);
  const peaks = subs.filter((s) => s.isPeak).map((s) => s.name);
  const places = subs.filter((s) => !s.isPeak).map((s) => s.name);
  const trek = shortTrek(trekTitle);
  const primary = places[0] ?? peaks[0];
  const kind = primary ? kindOf(primary, !places.length) : "place";

  if (peaks.length && places.length) {
    const views = [
      `${list(peaks)} seen from ${list(places)} on the ${trek} trek in Nepal.`,
      `The view of ${list(peaks)} from ${list(places)}, ${trek} trek, Nepal.`,
      `Trekkers' view of ${list(peaks)} above ${list(places)} in the Nepal Himalaya.`,
    ];
    return views[slot % views.length];
  }

  if (peaks.length) {
    const views = [
      `${list(peaks)} rising above the ${trek} trekking route in Nepal.`,
      `The snow-covered summit of ${list(peaks)} in the Nepal Himalaya.`,
      `${list(peaks)} seen from the trail on the ${trek} trek.`,
    ];
    return views[slot % views.length];
  }

  if (places.length) {
    const where = list(places);
    const byKind: Record<Kind, string[]> = {
      lake: [
        `The turquoise water of ${where} on the ${trek} trek in Nepal.`,
        `${where} held in a bowl of bare rock, ${trek} trek, Nepal.`,
      ],
      pass: [
        `Prayer flags and mountain views at ${where} on the ${trek} trek.`,
        `The high crossing at ${where} in the Nepal Himalaya.`,
      ],
      viewpoint: [
        `The Himalayan panorama from ${where} on the ${trek} trek in Nepal.`,
        `Sunrise over the mountains seen from ${where}, Nepal.`,
      ],
      basecamp: [
        `${where} ringed by Himalayan peaks on the ${trek} trek in Nepal.`,
        `Teahouses and glacial moraine at ${where}, Nepal Himalaya.`,
      ],
      monastery: [
        `The Buddhist monastery at ${where} on the ${trek} trek in Nepal.`,
        `Prayer flags and monastery buildings at ${where}, Nepal.`,
      ],
      place: [
        `Stone houses and mountain scenery at ${where} on the ${trek} trek.`,
        `The trail passing through ${where} in the Nepal Himalaya.`,
        `Teahouses and terraced hillsides at ${where}, ${trek} trek, Nepal.`,
      ],
      peak: [`${where} in the Nepal Himalaya.`],
    };
    const opts = byKind[kind];
    return role === "hero" ? opts[0] : opts[slot % opts.length];
  }

  // Nothing in the gazetteer matched. The filename still describes the scene
  // ("Bhote Koshi Valley, Trail", "Mayun danda from chakhewa bhanzyang"), so use
  // it — that keeps the text specific and, crucially, unique within a gallery.
  const detail = cleanName(file)
    .replace(/\s*,\s*/g, ", ")
    .replace(/\bNepal\b/gi, "")
    .replace(/[,\s]+$/, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  if (detail.length > 3) {
    const phrased = detail.charAt(0).toUpperCase() + detail.slice(1);
    const shaped = [
      `${phrased} on the ${trek} trek in Nepal.`,
      `${phrased}, seen along the ${trek} trekking route in Nepal.`,
      `${phrased} — ${trek} trek, Nepal Himalaya.`,
    ];
    return shaped[slot % shaped.length];
  }

  const generic = [
    `Himalayan mountain scenery on the ${trek} trek in Nepal.`,
    `Snow peaks and open trail on the ${trek} trekking route, Nepal.`,
    `Mountain landscape along the ${trek} trek in the Nepal Himalaya.`,
  ];
  return generic[slot % generic.length];
}

/** Caption sits under the image and describes what is in the frame. */
function captionFor(file: string, trekTitle: string, slot: number): string {
  const subs = subjects(file);
  const peaks = subs.filter((s) => s.isPeak).map((s) => s.name);
  const places = subs.filter((s) => !s.isPeak).map((s) => s.name);
  const primary = places[0] ?? peaks[0];
  const kind = primary ? kindOf(primary, !places.length) : "place";

  let sentence: string;
  if (peaks.length && places.length) {
    sentence = `${list(peaks)} from ${list(places)}.`;
  } else if (peaks.length) {
    sentence = `${list(peaks)} above the trail.`;
  } else if (places.length) {
    const where = list(places);
    const byKind: Record<Kind, string> = {
      lake: `The still water of ${where}.`,
      pass: `Crossing ${where}.`,
      viewpoint: `Looking out from ${where}.`,
      basecamp: `Arriving at ${where}.`,
      monastery: `The monastery at ${where}.`,
      place: slot % 2 ? `Passing through ${where}.` : `${where}, on the route.`,
      peak: `${where}.`,
    };
    sentence = byKind[kind];
  } else {
    const detail = cleanName(file).replace(/\bNepal\b/gi, "").replace(/[,\s]+$/, "").replace(/\s{2,}/g, " ").trim();
    sentence = detail.length > 3
      ? `${detail.charAt(0).toUpperCase() + detail.slice(1)}.`
      : `On the ${shortTrek(trekTitle)} trek.`;
  }

  return sentence;
}

async function main() {
  const uploaded = JSON.parse(readFileSync(IN, "utf8"));
  const treks = await prisma.trek.findMany({ select: { id: true, slug: true, title: true } });
  const bySlug = new Map(treks.map((t) => [t.slug, t]));

  const errors: string[] = [];
  let written = 0;

  for (const rec of Object.values<any>(uploaded)) {
    const trek = bySlug.get(rec.slug);
    if (!trek) { errors.push(`no trek with slug ${rec.slug}`); continue; }
    if (rec.images.length < 7) { errors.push(`[${rec.slug}] only ${rec.images.length} images — skipped`); continue; }

    const hero = rec.images.find((i: any) => i.role === "hero") ?? rec.images[0];
    const gallery = rec.images.filter((i: any) => i !== hero).slice(0, 6);

    const usedAlt = new Set<string>([altFor(hero.file, trek.title, "hero", 0)]);
    const rows = gallery.map((im: any, slot: number) => {
      let alt = altFor(im.file, trek.title, "gallery", slot);
      // Two photos of the same place would otherwise get identical alt text,
      // which is useless to a screen reader and reads as duplication to a crawler.
      for (let bump = 1; usedAlt.has(alt) && bump < 12; bump++) {
        alt = altFor(im.file, trek.title, "gallery", slot + bump);
      }
      usedAlt.add(alt);
      return {
        trekId: trek.id,
        imageId: im.publicId,
        alt,
        caption: captionFor(im.file, trek.title, slot),
      };
    });

    console.log(`\n### ${rec.slug}`);
    console.log(`  HERO ${hero.publicId}`);
    console.log(`       alt: ${altFor(hero.file, trek.title, "hero", 0)}`);
    for (const r of rows) {
      console.log(`   gal  alt: ${r.alt}`);
      console.log(`        cap: ${r.caption}`);
    }

    if (APPLY) {
      await prisma.$transaction(async (tx) => {
        await tx.trek.update({ where: { id: trek.id }, data: { heroImage: hero.publicId } });
        await tx.trekGalleryImage.deleteMany({ where: { trekId: trek.id } });
        await tx.trekGalleryImage.createMany({ data: rows });
      });
      written++;
    }
  }

  if (errors.length) console.log("\nSkipped:\n" + errors.map((e) => "  - " + e).join("\n"));
  console.log(`\n${APPLY ? `✅ Wrote ${written} treks.` : "Dry run — re-run with --apply to write."}`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
