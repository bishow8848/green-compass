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

/** Treks and tours need different wording — "trekking route" suits neither a
 * Kathmandu day tour nor a helicopter flight. */
type Noun = "trek" | "tour";

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
  // Places on the tours, added when the Tours category was created.
  "Kathmandu Durbar Square", "Patan Durbar Square", "Bhaktapur Durbar Square",
  "Durbar Square", "Pottery Square", "Boudhanath", "Swayambhunath",
  "Pashupatinath", "Changunarayan", "Nyatapola", "Kumari Ghar", "Kasthamandap",
  "Budhanilkantha", "Guhyeshwari", "Maya Devi Temple", "Ashoka Pillar",
  "Janaki Mandir", "Krishna Mandir", "Golden Temple", "Rato Machhendranath",
  "World Peace Pagoda", "Bhaleshwor Mahadev", "Asura Cave", "Vajrayogini",
  "Chitwan National Park", "Bardia National Park", "Bis Hazari Tal",
  "Begnas Lake", "Rupa Lake", "Devi's Fall", "Gupteshwor Cave", "Tal Barahi",
  "Bhaktapur", "Patan", "Lalitpur", "Nagarkot", "Dhulikhel", "Panauti",
  "Namobuddha", "Chandragiri", "Pharping", "Dakshinkali", "Bungamati",
  "Khokana", "Bandipur", "Ghalegaun", "Ghanpokhara", "Sirubari", "Chitwan",
  "Bardia", "Lumbini", "Tilaurakot", "Kapilvastu", "Janakpur", "Ramagrama",
  "Barahakshetra", "Devghat", "Sarangkot", "Begnas", "Pumdikot", "Kahun Danda",
  "Sauraha", "Thakurdwara", "Rapti River", "Karnali River", "Trishuli River",
  "Seti River", "Babai Valley", "Ason", "Indra Chowk", "Thamel", "Hemja",
  "Thankot", "Bhairahawa", "Jharkot", "Everest View Hotel",
];

/** The animals a Chitwan or Bardia safari is actually sold on. Naming the one
 * in the frame beats describing the park it stands in. */
const WILDLIFE: [RegExp, string][] = [
  [/one[- ]horned|rhinoceros|\brhinos?\b/i, "A greater one-horned rhinoceros"],
  [/\btigers?\b/i, "A Bengal tiger"],
  [/\belephants?\b/i, "An elephant"],
  [/chital|spotted deer/i, "Spotted deer"],
  [/langur|macaque|monkey/i, "A langur"],
  [/gharial|crocodile|mugger/i, "A gharial crocodile"],
  [/sloth bear/i, "A sloth bear"],
  [/peacock|peafowl/i, "A peacock"],
  [/kingfisher|\bstork\b|\begret\b|\bhornbill\b|\bbirds?\b/i, "Birdlife"],
  [/\bdeers?\b|\bsambar\b/i, "Deer"],
];

const wildlifeIn = (file: string) => WILDLIFE.find(([re]) => re.test(file))?.[1];

/** On an adventure tour the activity is the product, not the backdrop. */
const ACTIVITY: [RegExp, string][] = [
  [/paraglid/i, "Tandem paragliding"],
  [/\brafts?\b|rafting/i, "Rafting"],
  [/zip\s*line|zipline|zip\s*flyer/i, "Ziplining"],
  [/bungee|bungy/i, "A bungee jump"],
  [/ultra\s*light|microlight/i, "An ultralight flight"],
  [/\bkayak/i, "Kayaking"],
];

const activityIn = (file: string) => ACTIVITY.find(([re]) => re.test(file))?.[1];

/** When the frame is of people, saying "pagoda temples and brick courtyards"
 * describes a photograph that is not there. */
const PEOPLE: [RegExp, string][] = [
  [/\bsadd?hus?\b/i, "A sadhu"],
  [/\bpilgrims?\b/i, "Pilgrims"],
  [/\bmonks?\b|\blamas?\b/i, "Monks"],
  [/\bporters?\b/i, "Porters"],
  [/\bartisans?\b|potter(y wheel|s)\b/i, "Artisans"],
  [/\bfarmers?\b/i, "Farmers"],
];

const peopleIn = (file: string) => PEOPLE.find(([re]) => re.test(file))?.[1];

/** Peaks — described as mountains rather than places. */
const PEAKS = [
  "Mount Everest", "Everest", "Lhotse", "Nuptse", "Makalu", "Cho Oyu",
  "Ama Dablam", "Thamserku", "Kangtega", "Pumori", "Kongde", "Khumbila",
  "Annapurna South", "Annapurna I", "Annapurna II", "Annapurna III",
  "Annapurna IV", "Annapurna", "Machhapuchhre", "Machapuchare", "Fishtail",
  "Hiunchuli", "Gangapurna", "Tilicho Peak", "Nilgiri", "Dhaulagiri",
  "Manaslu", "Himal Chuli", "Ganesh Himal", "Baudha", "Himlung", "Cheo Himal",
  "Langtang Lirung", "Lirung", "Dorje Lakpa", "Ganchenpo", "Naya Kanga", "Gaurishankar",
  "Kangchenjunga", "Kanchenjunga", "Jannu", "Kumbhakarna",
  "Mardi Himal", "Lamjung Himal", "Khori Himal", "Nemjung", "Kang Guru",
  // Peaks on the remote-region treks added later.
  "Dhaulagiri I", "Dhaulagiri II", "Churen Himal", "Gurja Himal",
  "Putha Hiunchuli", "Tukuche Peak", "Sita Chuchura", "Api", "Nampa", "Saipal",
  "Baruntse", "Chamlang", "Tengi Ragi Tau", "Pachermo", "Yalung Ri",
  "Langshisa Ri", "Jugal Himal", "Phurbi Chyachu", "Himlung Himal",
  "Ngadi Chuli", "Kanjiroba", "Saribung", "Damodar Himal", "Nilgiri North",
];

/** Different names for one mountain — listing both reads as two peaks. */
const SYNONYM: Record<string, string> = {
  fishtail: "Machhapuchhre",
  lirung: "Langtang Lirung",
  machapuchare: "Machhapuchhre",
  "mount everest": "Everest",
  kanchenjunga: "Kangchenjunga",
  kumbhakarna: "Jannu",
  "syabru besi": "Syabrubesi",
  "tarke ghyang": "Tarkeghyang",
  beding: "Bedding",
  bungmati: "Bungamati",
  lalitpur: "Patan",
  bardiya: "Bardia",
};

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
    .replace(/([a-z]{3,})\d{3,}/gi, "$1 ")               // "Trisuli0168" -> "Trisuli"
    // Photo-contest and archive tags.
    .replace(/\b(WLV|WLM|WLE|WLA)\b/g, " ")
    // German and French words from the big Commons donations read as nonsense
    // in an English caption.
    .replace(/\b(Morgendaemmerung|Morgend[aä]mmerung|Abendd[aä]mmerung|Sonnenaufgang|Sonnenuntergang|Berge|Blick|Aussicht|Gipfel|Kloster|Br[uü]cke|Dorf|Landschaft|Tempel|Kirche|vue|coucher|lever de soleil|paysage)\b/gi, " ")
    // Where the photo was hosted is not part of the scene. These leak straight
    // into a caption otherwise ("An approach to the pass tashi laptse panoramio").
    .replace(/\b(panoramio|flickr|geograph|wikimedia|commons|gje)\b/gi, " ")
    // Bare frame numbers ("Tukuche Village-0662"), but not an altitude ("4186m").
    .replace(/(?<![a-z0-9])\d{3,6}(?![a-z0-9])/gi, " ")
    .replace(/[_"']/g, " ")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[-–—]/g, " ")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s{2,}/g, " ")
    .replace(/[\s,]+\d{1,2}\s*$/, "")                        // "... panoramio (1)" -> trailing "1"
    .trim();
}

const escapeRe = (v: string) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** The filename as a description of the scene, once the site name is removed. */
function detailFrom(file: string): string {
  return cleanName(file)
    .replace(/\s*,\s*/g, ", ")
    .replace(/\bNepal\b/gi, "")
    .replace(/[,\s]+$/, "")
    .replace(/\s{2,}/g, " ")
    // "... and nature of Nepal" leaves a preposition governing nothing.
    .replace(/[,\s]+\b(of|in|at|from|on|and|the|to|near|over)$/i, "")
    .replace(/[,\s]+$/, "")
    .trim();
}

/** Cities that are the setting, not the subject, when a landmark is also named. */
const CITY = new Set(["kathmandu", "pokhara"]);

/** Named places and peaks that appear in a filename, in order, without overlaps. */
function subjects(file: string): { name: string; isPeak: boolean }[] {
  const found = subjectsIn(cleanName(file));
  // "Five storay Temple(Nyatapola Temple).jpg" — cleanName drops the bracket,
  // and with it the only name that identifies the building.
  if (found.length) return found;
  return subjectsIn(cleanName(file.replace(/[()]/g, " ")));
}

function subjectsIn(text: string): { name: string; isPeak: boolean }[] {
  const found: { name: string; isPeak: boolean; at: number }[] = [];
  const taken: [number, number][] = [];
  const hay = text.toLowerCase();
  for (const name of ALL_NAMES) {
    // Whole-word matching only. A plain indexOf lets a two-letter name such as
    // "Na" match inside "Nampa" or "Namche", which puts a village from another
    // valley into the alt text.
    const at = hay.search(new RegExp(`(?<![a-z0-9])${escapeRe(name.toLowerCase())}(?![a-z0-9])`));
    if (at < 0) continue;
    const end = at + name.length;
    if (taken.some(([s, e]) => at < e && end > s)) continue;
    taken.push([at, end]);
    found.push({ name, isPeak: PEAK_SET.has(name.toLowerCase()), at });
  }
  const seen = new Set<string>();
  return found
    .sort((a, b) => a.at - b.at)
    .map(({ name, isPeak }) => ({ name: SYNONYM[name.toLowerCase()] ?? name, isPeak }))
    .filter((s) => !seen.has(s.name) && seen.add(s.name));
}

/** Keep the city only when nothing more specific was found. */
const dropCity = (places: string[]) =>
  places.length > 1 ? places.filter((p) => !CITY.has(p.toLowerCase())) : places;

const list = (items: string[]) =>
  items.length <= 1 ? items[0] ?? "" :
  items.length === 2 ? `${items[0]} and ${items[1]}` :
  `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

/** What kind of thing a name refers to, so the wording suits it. */
type Kind =
  | "peak" | "lake" | "pass" | "viewpoint" | "basecamp" | "monastery" | "place"
  | "temple" | "square" | "park" | "river";

/** Tour sites whose type cannot be read off the name. */
const KIND_BY_NAME: Record<string, Kind> = {
  boudhanath: "temple", swayambhunath: "temple", pashupatinath: "temple",
  changunarayan: "temple", nyatapola: "temple", "kumari ghar": "temple",
  kasthamandap: "temple", budhanilkantha: "temple", guhyeshwari: "temple",
  "maya devi temple": "temple", "ashoka pillar": "temple",
  "janaki mandir": "temple", "krishna mandir": "temple",
  "golden temple": "temple", "rato machhendranath": "temple",
  "world peace pagoda": "temple", "bhaleshwor mahadev": "temple",
  vajrayogini: "temple", dakshinkali: "temple", muktinath: "temple",
  "tal barahi": "temple", namobuddha: "temple", barahakshetra: "temple",
  "kathmandu durbar square": "square", "patan durbar square": "square",
  "bhaktapur durbar square": "square", "durbar square": "square",
  "pottery square": "square",
  "chitwan national park": "park", "bardia national park": "park",
  chitwan: "park", bardia: "park",
  sarangkot: "viewpoint", nagarkot: "viewpoint", chandragiri: "viewpoint",
  pumdikot: "viewpoint",
};

function kindOf(name: string, isPeak: boolean): Kind {
  if (isPeak) return "peak";
  const mapped = KIND_BY_NAME[name.toLowerCase()];
  if (mapped) return mapped;
  if (/\bLake$|^Tsho|Pokhari/i.test(name)) return "lake";
  if (/\bRiver$|\bKhola$|Gandaki$|Koshi$|Kosi$/i.test(name)) return "river";
  if (/\bLa( Pass)?$|\bPass$/i.test(name)) return "pass";
  // Jhinu Danda is a village with hot springs, not a ridge viewpoint like the others.
  if (/^Jhinu Danda$/i.test(name)) return "place";
  if (/\bRi$|\bDanda$|Patthar|Poon Hill|Muldai/i.test(name)) return "viewpoint";
  if (/Base Camp/i.test(name)) return "basecamp";
  if (/Gompa|Monastery/i.test(name)) return "monastery";
  return "place";
}

/** Shorter, readable form of a trek or tour title for use inside a sentence. */
function shortTrek(title: string): string {
  return title
    .replace(/\s*[-–—|].*$/, "")
    .replace(/\s+from (Pokhara|Kathmandu)\b/i, "")
    .replace(/\s+Trek(king)?\b/i, "")
    .replace(/\s+Tour\b/i, "")
    .replace(/,?\s+in Nepal$|,\s*Nepal$/i, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/**
 * Alt text describes what is in the frame. Six images on one page must not
 * share a description, so the phrasing is varied by slot and then checked for
 * collisions by the caller.
 */
function altFor(file: string, trekTitle: string, role: string, slot: number, noun: Noun = "trek"): string {
  const subs = subjects(file);
  const peaks = subs.filter((s) => s.isPeak).map((s) => s.name);
  const places = dropCity(subs.filter((s) => !s.isPeak).map((s) => s.name));
  const trek = shortTrek(trekTitle);
  const isTour = noun === "tour";
  const route = isTour ? "sightseeing route" : "trekking route";
  const primary = places[0] ?? peaks[0];
  const kind = primary ? kindOf(primary, !places.length) : "place";

  if (peaks.length && places.length) {
    const views = [
      `${list(peaks)} seen from ${list(places)} on the ${trek} ${noun} in Nepal.`,
      `The view of ${list(peaks)} from ${list(places)}, ${trek} ${noun}, Nepal.`,
      `${isTour ? "A view" : "Trekkers' view"} of ${list(peaks)} above ${list(places)} in the Nepal Himalaya.`,
    ];
    return views[slot % views.length];
  }

  if (peaks.length) {
    const views = [
      `${list(peaks)} rising above the ${trek} ${route} in Nepal.`,
      `The snow-covered summit of ${list(peaks)} in the Nepal Himalaya.`,
      `${list(peaks)} seen ${isTour ? `on the ${trek} tour` : `from the trail on the ${trek} trek`}.`,
    ];
    return views[slot % views.length];
  }

  if (places.length) {
    const where = list(places);
    // People in the frame are the subject.
    const who = peopleIn(file);
    if (who) {
      // "Artisans at Kathmandu" — a city takes "in", a named site takes "at".
      const at = CITY.has(places[0].toLowerCase()) ? "in" : "at";
      const shots = [
        `${who} ${at} ${where} in Nepal.`,
        `${who} ${at} ${where} on the ${trek} ${noun}.`,
        `${who} photographed ${at} ${where}, Nepal.`,
      ];
      return role === "hero" ? shots[0] : shots[slot % shots.length];
    }

    // On the water or in the air the activity is the subject.
    const activity = isTour ? activityIn(file) : undefined;
    if (activity) {
      const on = ["river", "lake"].includes(kind) ? "on" : "at";
      const shots = [
        `${activity} ${on} ${where}, Nepal.`,
        `${activity} ${on} ${where} on the ${trek} tour in Nepal.`,
        `${activity} on the ${trek} tour, ${where}, Nepal.`,
      ];
      return role === "hero" ? shots[0] : shots[slot % shots.length];
    }

    // In a national park the animal is the subject; the park is the setting.
    const animal = wildlifeIn(file);
    if (animal && kindOf(places[0], false) === "park") {
      const shots = [
        `${animal} in ${where}, Nepal.`,
        `${animal} photographed in ${where} on the ${trek} ${noun}.`,
        `${animal} in the grassland of ${where}, southern Nepal.`,
      ];
      return role === "hero" ? shots[0] : shots[slot % shots.length];
    }
    const byKind: Record<Kind, string[]> = {
      lake: isTour ? [
        `The water of ${where} on the ${trek} tour in Nepal.`,
        `${where}, seen on the ${trek} tour in Nepal.`,
      ] : [
        `The turquoise water of ${where} on the ${trek} trek in Nepal.`,
        `${where} held in a bowl of bare rock, ${trek} trek, Nepal.`,
      ],
      pass: [
        `Prayer flags and mountain views at ${where} on the ${trek} ${noun}.`,
        `The high crossing at ${where} in the Nepal Himalaya.`,
      ],
      viewpoint: [
        `The Himalayan panorama from ${where} on the ${trek} ${noun} in Nepal.`,
        `Sunrise over the mountains seen from ${where}, Nepal.`,
        `The view across the valley from ${where} on the ${trek} ${noun}.`,
        `${where} and the ridges around it, ${trek} ${noun}, Nepal.`,
      ],
      basecamp: isTour ? [
        `${where} ringed by Himalayan peaks, seen on the ${trek} tour in Nepal.`,
        `The peaks above ${where} in the Nepal Himalaya.`,
      ] : [
        `${where} ringed by Himalayan peaks on the ${trek} trek in Nepal.`,
        `Teahouses and glacial moraine at ${where}, Nepal Himalaya.`,
      ],
      river: [
        `The ${where} winding through its valley in Nepal.`,
        `${where} on the ${trek} ${noun}, Nepal.`,
        `The banks of the ${where} in Nepal.`,
      ],
      monastery: [
        `The Buddhist monastery at ${where} on the ${trek} ${noun} in Nepal.`,
        `Prayer flags and monastery buildings at ${where}, Nepal.`,
      ],
      place: isTour ? [
        `${where}, one of the stops on the ${trek} tour in Nepal.`,
        `Streets and local life at ${where} in Nepal.`,
        `${where} seen on the ${trek} tour, Nepal.`,
      ] : [
        `Stone houses and mountain scenery at ${where} on the ${trek} trek.`,
        `The trail passing through ${where} in the Nepal Himalaya.`,
        `Teahouses and terraced hillsides at ${where}, ${trek} trek, Nepal.`,
      ],
      temple: [
        `The temple complex at ${where}, visited on the ${trek} ${noun} in Nepal.`,
        `Pilgrims and shrines at ${where} in Nepal.`,
        `${where}, one of the sacred sites on the ${trek} ${noun}.`,
      ],
      square: [
        `Pagoda temples and brick courtyards at ${where} in the Kathmandu Valley.`,
        `The palace buildings and temples of ${where}, ${trek} ${noun}, Nepal.`,
        `Newar architecture at ${where} in Nepal.`,
      ],
      park: [
        `Grassland and sal forest in ${where}, southern Nepal.`,
        `Wildlife habitat in ${where} on the ${trek} ${noun}.`,
        `Jungle scenery in ${where}, Nepal.`,
      ],
      peak: [`${where} in the Nepal Himalaya.`],
    };
    const opts = byKind[kind];
    return role === "hero" ? opts[0] : opts[slot % opts.length];
  }

  // Nothing in the gazetteer matched. The filename still describes the scene
  // ("Bhote Koshi Valley, Trail", "Mayun danda from chakhewa bhanzyang"), so use
  // it — that keeps the text specific and, crucially, unique within a gallery.
  const detail = detailFrom(file);
  if (detail.length > 3) {
    const phrased = detail.charAt(0).toUpperCase() + detail.slice(1);
    const shaped = [
      `${phrased} on the ${trek} ${noun} in Nepal.`,
      `${phrased}, seen along the ${trek} ${route} in Nepal.`,
      `${phrased} — ${trek} ${noun}, Nepal.`,
    ];
    return shaped[slot % shaped.length];
  }

  const generic = isTour ? [
    `Scenery on the ${trek} tour in Nepal.`,
    `A view along the ${trek} ${route} in Nepal.`,
    `Landscape seen on the ${trek} tour, Nepal.`,
  ] : [
    `Himalayan mountain scenery on the ${trek} trek in Nepal.`,
    `Snow peaks and open trail on the ${trek} trekking route, Nepal.`,
    `Mountain landscape along the ${trek} trek in the Nepal Himalaya.`,
  ];
  return generic[slot % generic.length];
}

/** Caption sits under the image and describes what is in the frame. */
function captionFor(file: string, trekTitle: string, slot: number, noun: Noun = "trek"): string {
  const subs = subjects(file);
  const peaks = subs.filter((s) => s.isPeak).map((s) => s.name);
  const places = dropCity(subs.filter((s) => !s.isPeak).map((s) => s.name));
  const primary = places[0] ?? peaks[0];
  const kind = primary ? kindOf(primary, !places.length) : "place";

  const animal = places.length && kindOf(places[0], false) === "park" ? wildlifeIn(file) : undefined;
  const activity = noun === "tour" && places.length ? activityIn(file) : undefined;
  const who = places.length ? peopleIn(file) : undefined;

  let sentence: string;
  if (who) {
    sentence = slot % 2
      ? `${who} ${CITY.has(places[0].toLowerCase()) ? "in" : "at"} ${list(places)}.`
      : `${who}, ${list(places)}.`;
  } else if (activity) {
    const on = ["river", "lake"].includes(kind) ? "on" : "at";
    sentence = slot % 2 ? `${activity} ${on} ${list(places)}.` : `${activity}, ${list(places)}.`;
  } else if (animal) {
    sentence = `${animal} in ${list(places)}.`;
  } else if (peaks.length && places.length) {
    sentence = `${list(peaks)} from ${list(places)}.`;
  } else if (peaks.length) {
    sentence = [
      `${list(peaks)} above the trail.`,
      `${list(peaks)} from the route.`,
      `The summit of ${list(peaks)}.`,
    ][slot % 3];
  } else if (places.length) {
    const where = list(places);
    const byKind: Record<Kind, string> = {
      lake: slot % 2 ? `The still water of ${where}.` : `${where}.`,
      pass: `Crossing ${where}.`,
      viewpoint: [`Looking out from ${where}.`, `The view from ${where}.`, `${where}.`][slot % 3],
      basecamp: `Arriving at ${where}.`,
      monastery: slot % 2 ? `The monastery at ${where}.` : `${where}.`,
      place: slot % 2 ? `Passing through ${where}.` : `${where}, on the route.`,
      temple: slot % 2 ? `The shrines at ${where}.` : `${where}.`,
      square: slot % 2 ? `Temples around ${where}.` : `${where}.`,
      park: slot % 2 ? `Inside ${where}.` : `${where}.`,
      river: slot % 2 ? `Along the ${where}.` : `The ${where}.`,
      peak: `${where}.`,
    };
    sentence = byKind[kind];
  } else {
    const detail = detailFrom(file);
    const phrased = detail.charAt(0).toUpperCase() + detail.slice(1);
    sentence = detail.length > 3
      ? [`${phrased}.`, `${phrased}, on the route.`, `${phrased} — ${shortTrek(trekTitle)} ${noun}.`][slot % 3]
      : `On the ${shortTrek(trekTitle)} ${noun}.`;
  }

  return sentence;
}

async function main() {
  const uploaded = JSON.parse(readFileSync(IN, "utf8"));
  const treks = await prisma.trek.findMany({
    select: { id: true, slug: true, title: true, category: { select: { slug: true } } },
  });
  const bySlug = new Map(treks.map((t) => [t.slug, t]));

  const errors: string[] = [];
  let written = 0;

  for (const rec of Object.values<any>(uploaded)) {
    const trek = bySlug.get(rec.slug);
    if (!trek) { errors.push(`no trek with slug ${rec.slug}`); continue; }
    if (rec.images.length < 7) { errors.push(`[${rec.slug}] only ${rec.images.length} images — skipped`); continue; }
    const noun: Noun = trek.category?.slug === "tours" ? "tour" : "trek";

    const hero = rec.images.find((i: any) => i.role === "hero") ?? rec.images[0];
    const gallery = rec.images.filter((i: any) => i !== hero).slice(0, 6);

    const usedAlt = new Set<string>([altFor(hero.file, trek.title, "hero", 0, noun)]);
    const usedCaption = new Set<string>();
    const rows = gallery.map((im: any, slot: number) => {
      let alt = altFor(im.file, trek.title, "gallery", slot, noun);
      // Two photos of the same place would otherwise get identical alt text,
      // which is useless to a screen reader and reads as duplication to a crawler.
      for (let bump = 1; usedAlt.has(alt) && bump < 12; bump++) {
        alt = altFor(im.file, trek.title, "gallery", slot + bump, noun);
      }
      // A trek whose photos all name the same one place exhausts the phrasing
      // variants. Fall back to what the filename itself says about this frame.
      if (usedAlt.has(alt)) {
        const detail = detailFrom(im.file);
        if (detail.length > 3) {
          const phrased = detail.charAt(0).toUpperCase() + detail.slice(1);
          alt = `${phrased} on the ${shortTrek(trek.title)} ${noun} in Nepal.`;
        }
      }
      usedAlt.add(alt);

      // Three photographs of the same herd would all caption "Spotted deer in
      // Chitwan National Park", which reads as a mistake under a gallery.
      let caption = captionFor(im.file, trek.title, slot, noun);
      for (let bump = 1; usedCaption.has(caption) && bump < 4; bump++) {
        caption = captionFor(im.file, trek.title, slot + bump, noun);
      }
      if (usedCaption.has(caption)) {
        const detail = detailFrom(im.file);
        if (detail.length > 3) caption = `${detail.charAt(0).toUpperCase() + detail.slice(1)}.`;
      }
      // Seven photographs of one hilltop exhaust every phrasing. The alt text
      // is already unique within the gallery, so fall back to it.
      if (usedCaption.has(caption)) caption = alt;
      usedCaption.add(caption);

      return { trekId: trek.id, imageId: im.publicId, alt, caption };
    });

    console.log(`\n### ${rec.slug}`);
    console.log(`  HERO ${hero.publicId}`);
    console.log(`       alt: ${altFor(hero.file, trek.title, "hero", 0, noun)}`);
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
