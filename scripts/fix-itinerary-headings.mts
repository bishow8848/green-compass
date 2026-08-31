/**
 * Put an elevation after every place named in an itinerary heading, and make
 * the same place read the same height on every trek that passes through it.
 *
 * Two problems are fixed together:
 *   1. Places with no height at all — "Trek from Deurali to Annapurna Base Camp".
 *   2. The same place quoted at different heights on different treks — Jomsom
 *      appeared as 2,700 m, 2,715 m and 2,720 m; Pokhara as 822 m and 830 m.
 *
 * Also repairs unclosed "(3,415 m" brackets and the "Departure form Nepal" typo.
 *
 *   npx tsx scripts/fix-itinerary-headings.mts            # dry run
 *   npx tsx scripts/fix-itinerary-headings.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

/**
 * The height each place is quoted at, site-wide. Where the itineraries already
 * agreed, that value is kept; where they disagreed the commonly published
 * figure wins so the numbers stay defensible.
 */
const ELEVATION: Record<string, string> = {
  // --- Cities / gateways ---
  "Kathmandu": "1,400", "Pokhara": "822", "Bhadrapur": "91", "Ilam": "1,206",
  "Tumlingtar": "518", "Nepalgunj": "150", "Simikot": "2,910", "Juphal": "2,320",
  "Jhupal": "2,320", "Besisahar": "830", "Dhading Bensi": "634", "Nayapul": "1,070",
  "Birethanti": "1,025", "Kande": "1,770", "Syabrubesi": "1,467",
  "Dhunche": "1,950", "Taplejung": "1,820", "Bhojpur": "1,600", "Diktel Bazar": "1,650",
  "Lukla": "2,860", "Jomsom": "2,700", "Muktinath": "3,800", "Beni": "830",
  "Galeshwar": "1,170", "Siding Village": "1,280", "Siding": "1,280",

  // --- Annapurna sanctuary / Poon Hill ---
  "Jhinu Danda": "1,780", "Lower Sinuwa": "2,340", "Upper Sinuwa": "2,360",
  "Sinuwa": "2,340", "Chhomrong": "2,170", "Bamboo": "2,310", "Dovan": "2,600",
  "Himalaya": "2,920", "Deurali": "3,230", "Machhapuchhre Base Camp": "3,700",
  "Annapurna Base Camp": "4,130", "Ghandruk": "2,012", "Tadapani": "2,630",
  "Ghorepani": "2,874", "Poon Hill": "3,210", "Ulleri": "1,960", "Tikhedhunga": "1,540",
  "Hille": "1,495", "Chhomrong Khola": "1,900", "Jhinu": "1,780",

  // --- Mardi Himal ---
  "Pitam Deurali": "2,100", "Forest Camp": "2,600", "Low Camp": "2,970",
  "Badal Danda": "3,210", "High Camp": "3,580", "Mardi Himal Base Camp": "4,500",
  "Mardi Himal View Point": "4,200", "Australian Camp": "2,060",

  // --- Khopra / Mohare / Muldai ---
  "Khopra Danda": "4,020", "Chistibung": "3,000", "Muldai Viewpoint": "3,637",
  "Muldai View Point": "3,637", "Khayer Lake": "4,827",
  "Mohare Danda": "3,300", "Danda Kharka": "2,700", "Nangi Village": "2,300",
  "Nangi": "2,300", "Bans Kharka": "1,450", "Swanta": "2,200", "Swanta Village": "2,200",

  // --- Annapurna circuit / Tilicho ---
  "Tal": "1,700", "Tal Village": "1,700", "Danakyu": "2,300", "Chame": "2,670",
  "Pisang": "3,250", "Upper Pisang": "3,300", "Manang": "3,540", "Khangsar": "3,734",
  "Tilicho Base Camp": "4,150", "Tilicho Lake": "4,919", "Shree Kharka": "4,050",
  "Yak Kharka": "4,050", "Thorong Phedi": "4,450", "Thorong High Camp": "4,880",
  "Thorong La Pass": "5,416", "Thorong La": "5,416", "Dharapani": "1,860",
  "Kagbeni": "2,800", "Marpha": "2,670", "Chhusang": "3,050", "Jagat": "1,340",

  // --- Mustang ---
  "Chele": "3,050", "Ghiling": "3,860", "Ghami": "3,500",
  "Dhakmar": "3,800", "Charang": "3,560", "Lo Manthang": "3,770", "Chhoser Cave": "3,800",
  "Chhoser": "3,800", "Yara": "3,650", "Tangge": "3,240", "Tetang": "3,040",
  "Lubra": "2,920", "Samar": "3,660",

  // --- Everest ---
  "Phakding": "2,651", "Namche Bazaar": "3,440", "Namche": "3,440",
  "Tengboche": "3,956", "Dingboche": "4,380", "Lobuche": "4,938",
  "Gorakshep": "5,160", "Kala Patthar": "5,545", "Everest Base Camp": "5,364",
  "Pheriche": "4,371", "Dzongla": "4,830", "Cho La Pass": "5,420",
  "Kongma La Pass": "5,535", "Renjo La Pass": "5,360", "Gokyo": "4,800",
  "Gokyo Ri": "5,357", "Machhermo": "3,870", "Dole": "4,110", "Thame": "3,820",
  "Marlung": "4,210", "Monjo": "2,835", "Khumjung": "3,790", "Everest View Hotel": "3,880",
  "Fourth Gokyo Lake": "4,870", "Fifth Gokyo Lake": "4,980", "Chhukung": "4,730",

  // --- Langtang / Helambu / Gosaikunda ---
  "Lama Hotel": "2,470", "Langtang Village": "3,450", "Kyanjin Gompa": "3,870",
  "Kyanjin Ri": "4,850", "Tserko Ri": "4,984", "Ganja La Pass": "5,130",
  "Keldang": "4,270", "Dhukpa": "4,040", "Tarkeghyang": "2,590", "Sermathang": "2,610",
  "Chisapani": "2,165", "Kutumsang": "2,470", "Khutumsang": "2,470", "Ghopte": "3,430",
  "Sing Gompa": "3,330", "Chandanbari": "3,330", "Gosaikunda": "4,380",
  "Gosaikunda Lake": "4,380", "Laurebina Pass": "4,610", "Laurebina": "3,910",
  "Thadepati": "3,690", "Melamchi Gaun": "2,530", "Ama Yangri Peak": "3,800",
  "Ama Yangri": "3,800", "Gatlang": "2,238", "Briddim": "2,229", "Thuman": "2,338",
  "Timure": "1,762", "Nagthali": "3,165", "Tatopani Tamang": "1,700",

  // --- Manaslu / Tsum ---
  "Machha Khola": "930", "Jagat Manaslu": "1,340", "Deng": "1,804",
  "Namrung": "2,630", "Lho": "3,180", "Shyala": "3,500", "Sama Gaun": "3,530",
  "Samagaun": "3,530", "Samdo": "3,865", "Dharamsala": "4,460", "Dharmasala": "4,460",
  "Larkya La Pass": "5,106", "Bimthang": "3,720", "Tilije": "2,300", "Gorkha": "1,135",
  "Soti Khola": "700", "Chumling": "2,386", "Chekampar": "3,031",
  "Chokhangparo": "3,031", "Nile": "3,361", "Mu Gompa": "3,700", "Rachen Gompa": "3,240",
  "Lokpa": "2,240", "Philim": "1,570", "Manaslu Base Camp": "4,800", "Birendra Lake": "3,691",

  // --- Kanchenjunga ---
  "Sekathum": "1,650", "Amjilosa": "2,510", "Amjilasa": "2,510", "Gyabla": "2,725",
  "Ghunsa": "3,415", "Khambachen": "4,050", "Kambachen": "4,145", "Lhonak": "4,792",
  "Pangpema": "5,143", "Kanchenjunga North Base Camp": "5,143", "Cheram": "3,870",
  "Tseram": "3,870", "Ramche": "4,580", "Yalung Base Camp": "4,500",
  "Kanchenjunga South Base Camp": "4,580", "Torontan": "2,995", "Yamphudin": "2,080",
  "Sele La Camp": "4,240", "Sele La": "4,290", "Mitlung": "921", "Chirwa": "1,270",
  "Helok": "1,270", "Tortong": "2,995",

  // --- Makalu ---
  "Num": "1,560", "Seduwa": "1,500", "Tashigaon": "2,100", "Khongma": "3,760",
  "Dobate": "3,800", "Langmale Kharka": "4,410",
  "Makalu Base Camp": "4,870", "Sherpani Col": "6,180", "Mumbuk": "3,550",

  // --- Dolpo ---
  "Dunai": "2,140", "Chhepka": "2,838", "Phoksundo Lake": "3,612",
  "Ringmo": "3,600", "Shey Gompa": "4,500", "Namgung": "4,360", "Saldang": "3,903",
  "Yangze Gompa": "4,960", "Sibu": "3,942", "Jeng La Phedi": "4,845",
  "Jeng La Pass": "5,090", "Dho Tarap": "4,090", "Numa La Pass": "5,190",
  "Baga La Pass": "5,070", "Tarakot": "2,543", "Laini": "3,160", "Nawarpani": "3,545",
  "Kagmara La": "5,115", "Sumduwa": "2,900", "Kakkot": "2,500",

  // --- Humla / Limi ---
  "Kermi": "2,629", "Dharapuri": "2,270", "Yalbang": "3,020", "Tumkot": "3,380",
  "Yari": "3,700", "Hilsa": "3,740",
  "Halji": "3,670", "Jang": "4,070", "Nara La Pass": "4,620",
  "Nyalu La Pass": "4,990", "Sallikhola": "3,000",

  // --- Rolwaling / Ruby Valley / Ganesh Himal / Lamjung / Mundum ---
  "Bedding": "3,690", "Na": "4,180", "Tsho Rolpa": "4,580",
  "Tashi Lapcha Pass": "5,755", "Pachermo High Camp": "5,300", "Tashi Puk": "5,300",
  "Simigaun": "2,000", "Dolakha": "1,600", "Gongar": "1,440", "Chetchet": "1,400",
  "Somdang Phedi": "3,300", "Somdang": "3,320", "Pangsang Pass": "3,850", "Borang Village": "1,500",
  "Chalish Village": "1,600", "Dondure Khola": "1,500", "Tipling": "2,078",
  "Baglungpani": "1,650", "Ghanpokhara": "2,158", "Kori Danda": "3,850",
  "Rambrong West Summit": "4,384", "Khori Danda": "3,850", "Deurali Bhanjyang": "1,700",
  "Chakhewa Village": "2,300", "Dhotre": "2,752", "Hyakule": "2,962",
  "Hanspokhari": "2,962", "Karpu Kharka": "2,980", "Bhaisi Kharka": "2,300",
  "Ankhe": "2,896", "Gyalche": "2,890", "Khanigaun": "2,550", "Kharani Odar": "2,800",
  "Gotlang": "1,800", "Chumsa Khola": "3,400", "Dajok Tang": "4,080",
  "Chyukyoma": "4,870", "Silchung Hill": "4,200", "Khori Himal": "3,850",
};

/** Places that are not a point on the map and must never get a height. */
const NEVER: RegExp[] = [
  /^Nepal$/i, /^Hotel$/i, /Tribhuvan/i, /^Airport$/i, /^Sunrise$/i, /^Sunset$/i,
  /^Hot Springs?$/i, /^Trishuli$/i, /^Tibet Border$/i, /^Everest$/i, /^Annapurna$/i,
  /^Himalaya[ns]?$/i, /^Khumbu$/i, /^Sanctuary$/i,
];

/** Multi-word phrases that must win over the shorter name inside them. */
const EXTRA_PHRASES: Record<string, string> = {
  "Gokyo Valley": "4,800", "Langtang Valley": "3,550", "Chumsa Khola Valley": "3,400",
  "Sing Gompa/Chandanbari": "3,330", "Chekampar / Chokhangparo": "3,031",
  "Sing Gompa / Chandanbari": "3,330", "Tilicho Base Camp": "4,150",
  "Pachermo High Camp / Tashi Puk": "5,300", "Tashi Lapcha Phedi": "5,010",
  "Fourth Gokyo Lake": "4,870", "Thulo Syabru": "2,250",
};
Object.assign(ELEVATION, EXTRA_PHRASES);

/**
 * Places whose height genuinely disagreed between treks, so the canonical value
 * replaces whatever a heading currently says. Any place NOT listed here keeps an
 * existing height untouched and only gets one added when it has none — several
 * names (Tatopani, Dobato, Syangboche, Jagat) belong to two different places in
 * two different regions, and overwriting those would introduce errors.
 */
const NORMALIZE = new Set([
  "Kathmandu", "Pokhara", "Besisahar", "Lukla", "Phakding", "Namche Bazaar",
  "Bimthang", "Chame", "Cheram", "Manang", "Deurali", "Dunai", "Ghandruk",
  "Ghorepani", "High Camp", "Hyakule", "Jomsom", "Kagbeni", "Kyanjin Gompa",
  "Lama Hotel", "Langtang Village", "Lhonak", "Lower Sinuwa", "Muktinath",
  "Samdo", "Sekathum", "Sermathang", "Shyala", "Syabrubesi", "Tadapani",
  "Tarakot", "Tarkeghyang", "Thorong Phedi", "Tilicho Base Camp", "Yak Kharka",
  "Amjilasa", "Amjilosa", "Ilam", "Marpha", "Bhadrapur", "Seduwa", "Ghunsa",
  "Dole",
]);

/** Longest names first so "Lower Sinuwa" wins over "Sinuwa". */
const NAMES = Object.keys(ELEVATION).sort((a, b) => b.length - a.length);
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const PLACE_RE = new RegExp(`\\b(?:${NAMES.map(esc).join("|")})\\b`, "g");
/** A height bracket sitting straight after a place name. */
const TRAILING_ELEV = /^\s*\(\s*[\d,]+\s*\+?\s*m\s*\)?/;

function fixTitle(title: string): string {
  // Repair unclosed brackets and stray "+" before anything else is matched.
  let t = title
    .replace(/\(\s*([\d,]+)\s*\+?\s*m(?!\s*\))/g, "($1 m)")
    .replace(/\bDeparture form\b/gi, "Departure from")
    // The bracket here is a second name, not a height — rewrite it before scanning.
    .replace(/Pachermo High Camp\s*\(\s*Tashi Puk\s*\)/gi, "Pachermo High Camp / Tashi Puk")
    .replace(/\s{2,}/g, " ")
    .trim();

  // Collect non-overlapping place matches, longest first at each position.
  type Hit = { start: number; end: number; name: string };
  const hits: Hit[] = [];
  PLACE_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = PLACE_RE.exec(t)) !== null) {
    const hit = { start: m.index, end: m.index + m[0].length, name: m[0] };
    // The regex alternation is longest-first, so an earlier hit already covers
    // anything that starts inside it.
    if (hits.length && hit.start < hits[hits.length - 1].end) continue;
    if (NEVER.some((re) => re.test(hit.name))) continue;
    hits.push(hit);
  }

  let out = "";
  let cursor = 0;
  for (const hit of hits) {
    const existing = t.slice(hit.end).match(TRAILING_ELEV);
    // A height already there is only replaced for a place on the NORMALIZE list.
    const keep = existing && !NORMALIZE.has(hit.name);
    const height = keep ? existing![0].trim() : `(${ELEVATION[hit.name]} m)`;
    out += t.slice(cursor, hit.start) + hit.name + " " + height;
    cursor = hit.end + (existing ? existing[0].length : 0);
  }
  out += t.slice(cursor);

  // Drop a stray height left stranded after a non-place word, e.g. the trailing
  // one in "Kathmandu (1,400 m) Sightseeing and Trek Preparation (1,400 m)".
  // Only these known non-place words trigger it — an unrecognised word is far
  // more likely to be a place this gazetteer simply does not list yet, and its
  // height must survive untouched.
  const STRANDED = /\b(Preparation|Sightseeing|Trek|Trekking|Hike|Drive|Departure|Arrival|Rest|Exploration|Acclimatization|Acclimatisation|Day|Tour|Transfer|Overnight)\s*\(\s*[\d,]+\s*m\s*\)/g;
  out = out.replace(STRANDED, (_match, word) => word);

  return out.replace(/\s{2,}/g, " ").replace(/\s+([,.;:])/g, "$1").trim();
}

async function main() {
  const days = await prisma.itineraryDay.findMany({
    orderBy: [{ trekId: "asc" }, { dayNumber: "asc" }],
    select: { id: true, trekId: true, dayNumber: true, title: true, elevation: true },
  });
  const treks = await prisma.trek.findMany({ select: { id: true, slug: true } });
  const slugOf = new Map(treks.map((t) => [t.id, t.slug]));

  const changes: { id: string; slug: string; day: number; from: string; to: string }[] = [];
  for (const d of days) {
    const next = fixTitle(d.title);
    if (next !== d.title) {
      changes.push({ id: d.id, slug: slugOf.get(d.trekId) ?? d.trekId, day: d.dayNumber, from: d.title, to: next });
    }
  }

  let current = "";
  for (const c of changes) {
    if (c.slug !== current) { current = c.slug; console.log(`\n### ${current}`); }
    console.log(`  D${c.day}`);
    console.log(`    -  ${c.from}`);
    console.log(`    +  ${c.to}`);
  }
  console.log(`\n${changes.length} of ${days.length} headings change.`);

  if (APPLY) {
    for (const c of changes) {
      await prisma.itineraryDay.update({ where: { id: c.id }, data: { title: c.to } });
    }
    console.log(`✅ Applied ${changes.length} heading updates.`);
  } else {
    console.log("Dry run — re-run with --apply to write.");
  }
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
