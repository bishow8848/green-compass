/**
 * Stage 1b: collect candidate photos from Wikimedia Commons CATEGORIES.
 *
 * Free-text search returns too much noise — Kathmandu street photography and
 * 1920s expedition book scans outrank actual trail photography. Commons
 * categories are curated by hand and give a much cleaner pool, so each trek is
 * mapped to the categories that cover the ground it actually walks.
 *
 *   npx tsx scripts/images/commons-categories.mts [out.json]
 *   npx tsx scripts/images/commons-categories.mts [out.json] --only=slug-a,slug-b
 *
 * --only=<a,b,c> restricts the run to those slugs. Every trek and tour already
 * carries its images, so re-fetching their categories costs several hundred
 * Commons requests to produce a manifest nothing downstream reads.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const OUT = args.find((a) => !a.startsWith("--")) ?? "/tmp/commons-cat-candidates.json";
const ONLY = new Set(
  (args.find((a) => a.startsWith("--only="))?.slice(7) ?? "")
    .split(",").map((v) => v.trim()).filter(Boolean),
);
const API = "https://commons.wikimedia.org/w/api.php";
const UA = "MardiTreks-ContentBot/1.0 (trek site image sourcing) node";

/** Commons categories per trek, most specific first. */
const CATEGORIES: Record<string, string[]> = {
  "everest-base-camp-trek": ["Everest Base Camp", "Kala Patthar", "Namche Bazaar", "Tengboche", "Dingboche", "Khumbu", "Lukla"],
  "everest-three-pass-trek": ["Cho La (Nepal)", "Gokyo", "Everest Base Camp", "Kala Patthar", "Namche Bazaar", "Khumbu", "Chhukhung"],
  "everest-view-trek": ["Namche Bazaar", "Khumjung", "Tengboche", "Mount Everest", "Lukla", "Khumbu"],
  "gokyo-lake-trek": ["Gokyo", "Gokyo Ri", "Ngozumpa Glacier", "Machhermo", "Namche Bazaar", "Khumbu"],
  "rolwaling-valley-trek": ["Rolwaling", "Tsho Rolpa", "Gaurishankar", "Thame", "Namche Bazaar", "Khumbu"],

  "annapurna-circuit-trek": ["Annapurna Circuit", "Thorong La", "Manang", "Tilicho Lake", "Muktinath", "Annapurna"],
  "annapurna-circuit-with-tilicho-lake-trek": ["Tilicho Lake", "Annapurna Circuit", "Thorong La", "Manang", "Muktinath"],
  "short-annapurna-circuit-trek": ["Annapurna Circuit", "Thorong La", "Manang", "Muktinath", "Annapurna"],
  "tilicho-lake-trek": ["Tilicho Lake", "Manang", "Annapurna Circuit", "Annapurna"],
  "short-tilicho-lake-trek": ["Tilicho Lake", "Manang", "Annapurna Circuit", "Annapurna"],

  "annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara": ["Mardi Himal", "Annapurna Base Camp", "Machapuchare", "Annapurna", "Pokhara"],
  "mardi-himal-trek": ["Mardi Himal", "Machapuchare", "Annapurna", "Pokhara"],
  "mardi-himal-trek-from-pokhara": ["Mardi Himal", "Machapuchare", "Annapurna", "Pokhara"],
  "poonhill-trek": ["Poon Hill", "Ghorepani", "Ghandruk", "Annapurna", "Dhaulagiri"],
  "poonhill-trek-from-pokhara": ["Poon Hill", "Ghorepani", "Ghandruk", "Annapurna", "Dhaulagiri"],
  "khopra-danda-trek": ["Khopra", "Poon Hill", "Ghandruk", "Annapurna", "Dhaulagiri"],
  "khopra-danda-trek-from-pokhara": ["Khopra", "Poon Hill", "Ghandruk", "Annapurna", "Dhaulagiri"],
  "mohare-danda-trek": ["Poon Hill", "Ghorepani", "Annapurna", "Dhaulagiri", "Myagdi District"],
  "mohare-danda-trek-from-pokhara": ["Poon Hill", "Ghorepani", "Annapurna", "Dhaulagiri", "Myagdi District"],
  "khori-himal-trek": ["Annapurna", "Lamjung District", "Machapuchare", "Pokhara"],
  "khori-himal-trek-from-pokhara": ["Annapurna", "Lamjung District", "Machapuchare", "Pokhara"],
  "lamjung-himal-trek": ["Lamjung District", "Annapurna", "Machapuchare", "Pokhara"],

  "jomsom-muktinath-trek": ["Muktinath", "Jomsom", "Kagbeni", "Marpha", "Mustang District"],
  "jomsom-muktinath-trek-from-pokhara": ["Muktinath", "Jomsom", "Kagbeni", "Marpha", "Mustang District"],
  "lower-mustang-trek": ["Kagbeni", "Jomsom", "Muktinath", "Marpha", "Mustang District"],
  "lower-mustang-trek-from-pokhara": ["Kagbeni", "Jomsom", "Muktinath", "Marpha", "Mustang District"],
  "upper-mustang-trek": ["Upper Mustang", "Lo Manthang", "Mustang District", "Kagbeni", "Jomsom"],
  "upper-mustang-trek-from-pokhara": ["Upper Mustang", "Lo Manthang", "Mustang District", "Kagbeni", "Jomsom"],

  "langtang-valley-trek": ["Langtang National Park", "Langtang", "Kyanjin Gompa", "Langtang Lirung"],
  "langtang-ganja-la-pass-trek": ["Langtang National Park", "Langtang", "Kyanjin Gompa", "Helambu"],
  "langtang-gosaikunda-lake-trek": ["Gosaikunda", "Langtang National Park", "Langtang", "Kyanjin Gompa"],
  "gosaikunda-lake-trek": ["Gosaikunda", "Langtang National Park", "Dhunche", "Rasuwa District"],
  "helambu-trek": ["Helambu", "Langtang National Park", "Sindhupalchowk District"],
  "ama-yangri-trek": ["Helambu", "Langtang National Park", "Sindhupalchowk District"],
  "tamang-heritage-trek": ["Rasuwa District", "Langtang National Park", "Gatlang", "Langtang"],
  "ganesh-himal-trek": ["Ganesh Himal", "Rasuwa District", "Dhading District", "Langtang National Park"],
  "ruby-valley-circuit-trek": ["Ganesh Himal", "Dhading District", "Rasuwa District"],

  "kanchenjunga-circuit-trek": ["Kangchenjunga", "Taplejung District", "Ghunsa"],
  "Kanchenjunga-north-base-camp-trek": ["Kangchenjunga", "Taplejung District", "Ghunsa"],
  "kanchenjunga-south-base-camp-trek": ["Kangchenjunga", "Taplejung District"],
  "makalu-base-camp-trek": ["Makalu", "Barun Valley", "Makalu Barun National Park", "Sankhuwasabha District"],
  "mundum-trek": ["Khotang District", "Bhojpur District", "Solukhumbu District"],

  "lower-dolpo-trek": ["Dolpo", "Phoksundo Lake", "Shey Phoksundo National Park", "Dolpa District"],
  "upper-dolpo-trek": ["Dolpo", "Shey Gompa", "Phoksundo Lake", "Shey Phoksundo National Park", "Dolpa District"],
  "humla-limi-valley-trek": ["Humla District", "Limi Valley", "Simikot", "Karnali Province"],

  // --- treks added in the remote-region batch ---
  "dhaulagiri-circuit-trek": ["Dhaulagiri", "French Pass", "Myagdi District", "Hidden Valley (Nepal)", "Marpha", "Jomsom"],
  "churen-himal-base-camp-trek": ["Dhorpatan Hunting Reserve", "Dhaulagiri", "Myagdi District", "Baglung District"],
  "guerrilla-trek": ["Dhorpatan Hunting Reserve", "Rolpa District", "Rukum District", "Myagdi District"],
  "larke-pass-trek": ["Manaslu", "Larkya La", "Samagaun", "Manaslu Conservation Area", "Gorkha District"],
  "lower-manaslu-trek": ["Barpak", "Gorkha District", "Manaslu", "Manaslu Conservation Area"],
  "rupina-la-pass-trek": ["Gorkha District", "Manaslu", "Barpak", "Manaslu Conservation Area"],
  "serang-gompa-trek": ["Manaslu Conservation Area", "Manaslu", "Gorkha District", "Nubri"],
  "tsho-rolpa-trek": ["Tsho Rolpa", "Rolwaling", "Gaurishankar", "Dolakha District"],
  "tashi-lapcha-pass-trek": ["Rolwaling", "Tsho Rolpa", "Thame", "Khumbu", "Gaurishankar"],
  "tilman-pass-trek": ["Langtang National Park", "Langtang", "Kyanjin Gompa", "Jugal Himal", "Sindhupalchowk District"],
  "panch-pokhari-trek": ["Sindhupalchowk District", "Jugal Himal", "Langtang National Park", "Helambu"],
  "sherpani-col-passes-trek": ["Makalu", "Makalu Barun National Park", "Baruntse", "Khumbu", "Sankhuwasabha District"],
  "shey-phoksundo-lake-trek": ["Phoksundo Lake", "Shey Phoksundo National Park", "Dolpo", "Dolpa District"],
  "jomsom-dolpo-trek": ["Dolpo", "Phoksundo Lake", "Shey Phoksundo National Park", "Jomsom", "Kagbeni", "Dolpa District"],
  "saribung-pass-trek": ["Upper Mustang", "Lo Manthang", "Nar Phu", "Mustang District", "Damodar Kunda"],
  "teri-la-pass-trek": ["Upper Mustang", "Lo Manthang", "Nar Phu", "Mustang District", "Manang District"],
  "api-himal-base-camp-trek": ["Api Himal", "Darchula District", "Api Nampa Conservation Area", "Sudurpashchim Province"],
  "badimalika-trek": ["Bajura District", "Saipal", "Sudurpashchim Province", "Karnali Province"],
  "ramaroshan-lakes-trek": ["Achham District", "Sudurpashchim Province", "Karnali Province"],
  "red-panda-trail-trek": ["Ilam District", "Panchthar District", "Red panda", "Sandakphu", "Kangchenjunga"],

  // --- the hand-written reference treks, re-sourced off their original
  // hand-uploaded photos. Machhapuchchhre is the spelling Commons files the
  // Fishtail under; "Machapuchare", used by the older entries above, is empty.
  "annapurna-base-camp-trek": ["Annapurna Base Camp", "Machhapuchchhre", "Annapurna South", "Hiunchuli", "Modi Khola", "Annapurna Conservation Area"],
  "annapurna-base-camp-trek-from-pokhara": ["Annapurna Base Camp", "Machhapuchchhre", "Annapurna South", "Hiunchuli", "Modi Khola"],
  "abc-trek-nepal": ["Annapurna Base Camp", "Machhapuchchhre", "Annapurna South", "Hiunchuli", "Annapurna Conservation Area"],
  "annapurna-base-camp-trek-with-ghorepani-poonhill-trek": ["Annapurna Base Camp", "Poon Hill", "Ghorepani", "Ghandruk", "Machhapuchchhre", "Annapurna South"],
  "annapurna-base-camp-with-ghorepani-poonhill-from-pokhara": ["Annapurna Base Camp", "Poon Hill", "Ghorepani", "Ghandruk", "Machhapuchchhre", "Hiunchuli"],
  "mardi-himal-trek-with-annapurna-base-camp": ["Mardi Himal", "Machhapuchchhre", "Annapurna Base Camp", "Annapurna South", "Annapurna Conservation Area"],
  "manaslu-circuit-trek": ["Manaslu", "Larkya La", "Samagaun", "Manaslu Conservation Area", "Gorkha District"],
  "tsum-valley-trek": ["Tsum Valley", "Manaslu Conservation Area", "Manaslu", "Gorkha District"],
  "tsum-valley-and-manaslu-circuit-trek": ["Tsum Valley", "Manaslu", "Larkya La", "Samagaun", "Manaslu Conservation Area", "Gorkha District"],

  // --- products added to fill the ranking gaps: new treks, peaks and tours ---
  "everest-base-camp-trek-with-helicopter-return": ["Kala Patthar", "Khumbu Glacier", "Mount Everest", "Dingboche", "Tengboche", "Namche Bazaar"],
  "everest-base-camp-trek-with-gokyo-lakes-and-cho-la-pass": ["Gokyo", "Ngozumpa Glacier", "Kala Patthar", "Khumbu Glacier", "Machhermo", "Namche Bazaar"],
  "nar-phu-valley-trek": ["Manang District, Nepal", "Manang", "Pisang Peak", "Annapurna Conservation Area"],
  "pikey-peak-trek": ["Numbur", "Solukhumbu District", "Junbesi", "Mount Everest"],
  "rara-lake-trek": ["Rara Lake", "Rara National Park", "Mugu District", "Jumla District"],
  "yala-peak-climbing": ["Kyanjin Gompa", "Langtang Lirung", "Langtang National Park", "Langtang"],
  "naya-kanga-peak-climbing": ["Kyanjin Gompa", "Langtang Lirung", "Langtang National Park", "Langtang"],
  "paldor-peak-climbing": ["Ganesh Himal", "Rasuwa District", "Gatlang", "Langtang National Park"],
  "nagarkot-sunrise-tour": ["Nagarkot", "Changunarayan", "Bhaktapur Durbar Square", "Bhaktapur"],
  "dhulikhel-namobuddha-hike": ["Dhulikhel", "Panauti", "Namobuddha", "Kavrepalanchok District"],
  "lumbini-tour": ["Lumbini", "Tilaurakot", "Rupandehi District"],

  // --- the Activities category ---
  // Several rivers and hills have no Commons category of their own, so these
  // fall back to the district, the activity, or the range the trip looks at.
  "rafting-in-kali-gandaki-river": ["Whitewater rafting", "Rafting in Nepal", "Myagdi District", "Dhaulagiri"],
  "rafting-in-marsyangdi-river": ["Marsyangdi River", "Whitewater rafting", "Rafting in Nepal", "Lamjung District"],
  "rafting-in-bhote-koshi-river": ["Whitewater rafting", "Rafting in Nepal", "Sindhupalchok District"],
  "bungee-jump-in-bhote-koshi": ["Bungee jumping", "Sindhupalchok District"],
  "bungee-jump-in-kushma": ["Bungee jumping", "Parbat District"],
  "zip-flyer-in-kushma": ["Parbat District", "Bungee jumping"],
  "cross-country-paragliding-in-pokhara": ["Paragliding in Nepal", "Phewa Lake", "Machhapuchchhre"],
  "parahawking-in-pokhara": ["Parahawking", "Paragliding in Nepal", "Phewa Lake"],
  "mountain-flight-from-pokhara": ["Machhapuchchhre", "Annapurna I", "Dhaulagiri", "Annapurna South"],
  "pokhara-helicopter-sightseeing-tour": ["Phewa Lake", "Machhapuchchhre", "Annapurna South", "Annapurna Conservation Area"],
  "1-night-2-days-chitwan-trip": ["Chitwan National Park", "Sauraha", "Rhinoceros unicornis"],
  "2-night-3-days-bardia-tour": ["Bardiya National Park", "Rhinoceros unicornis"],
  "koshi-tappu-wildlife-reserve-tour": ["Koshi Tappu Wildlife Reserve", "Bubalus arnee"],
  "bird-watching-in-kathmandu-valley": ["Birds of Nepal", "Lalitpur District"],
  "bird-watching-in-chitwan-national-park": ["Birds of Nepal", "Chitwan National Park", "Sauraha"],
  "bird-watching-in-pokhara-lakes": ["Begnas Lake", "Phewa Lake", "Rupa Lake", "Birds of Nepal"],

  // --- climbing peaks and expeditions ---
  // Every category below was checked against the Commons API for a non-empty
  // file listing before it was written down. Several peaks the site sells have
  // no category of their own — Chulu, Dhampus Peak, Tharpu Chuli, Saribung —
  // so those fall back to the valley or the massif they stand in, which is the
  // ground the trip actually walks.
  "ama-dablam-expedition": ["Ama Dablam", "Dingboche", "Tengboche", "Namche Bazaar", "Khumbu"],
  "short-ama-dablam-expedition": ["Ama Dablam", "Dingboche", "Namche Bazaar", "Khumbu"],
  "ama-dablam-expedition-with-helicopter-return": ["Ama Dablam", "Tengboche", "Dingboche", "Namche Bazaar"],
  "ama-dablam-expedition-and-island-peak-climbing": ["Ama Dablam", "Island Peak", "Dingboche", "Namche Bazaar"],
  "everest-expedition": ["Mount Everest", "Kala Patthar", "Khumbu Glacier", "Lhotse", "Namche Bazaar"],
  "everest-and-lhotse-expedition": ["Mount Everest", "Lhotse", "Kala Patthar", "Khumbu Glacier", "Namche Bazaar"],
  "lhotse-expedition": ["Lhotse", "Mount Everest", "Kala Patthar", "Khumbu Glacier", "Namche Bazaar"],
  "pumori-expedition": ["Pumori", "Kala Patthar", "Khumbu Glacier", "Mount Everest", "Namche Bazaar"],
  "cholatse-expedition": ["Cholatse", "Gokyo", "Namche Bazaar", "Tengboche", "Khumbu"],
  "thamserku-expedition": ["Thamserku", "Namche Bazaar", "Tengboche", "Khumbu"],
  "island-peak-climbing": ["Island Peak", "Imja Tse", "Dingboche", "Tengboche", "Namche Bazaar"],
  "island-peak-climbing-from-chhukung": ["Island Peak", "Imja Tse", "Dingboche", "Namche Bazaar"],
  "island-peak-climbing-with-helicopter-return": ["Island Peak", "Imja Tse", "Dingboche", "Namche Bazaar"],
  "lobuche-east-peak-climbing": ["Lobuche", "Kala Patthar", "Dingboche", "Khumbu Glacier", "Namche Bazaar"],
  "lobuche-peak-and-island-peak-climbing": ["Lobuche", "Island Peak", "Kala Patthar", "Dingboche", "Namche Bazaar"],
  "pokalde-peak-climbing": ["Pokalde", "Kala Patthar", "Dingboche", "Khumbu Glacier", "Namche Bazaar"],
  "pokalde-island-and-lobuche-climbing": ["Pokalde", "Island Peak", "Lobuche", "Kala Patthar", "Dingboche"],
  "three-peaks-climbing-island-lobuche-kyajo-ri": ["Island Peak", "Lobuche", "Kyajo Ri", "Namche Bazaar", "Khumbu"],
  "kyajo-ri-peak-climbing": ["Kyajo Ri", "Namche Bazaar", "Thame", "Khumbu"],
  "kwangde-peak-climbing": ["Kongde Ri", "Namche Bazaar", "Thame", "Khumbu"],
  "kusum-kanguru-peak-climbing": ["Kusum Kangguru", "Lukla", "Namche Bazaar", "Khumbu"],
  "nirekha-peak-climbing": ["Nirekha", "Gokyo", "Cholatse", "Namche Bazaar"],
  "phari-lapcha-peak-climbing": ["Kyajo Ri", "Gokyo", "Namche Bazaar", "Khumbu"],
  "mera-peak-climbing": ["Mera Peak", "Lukla", "Khumbu"],
  "short-mera-peak-climbing": ["Mera Peak", "Lukla", "Khumbu"],
  "mera-peak-amphu-lapcha": ["Mera Peak", "Island Peak", "Baruntse", "Dingboche"],
  "mera-and-island-peak-climbing": ["Mera Peak", "Island Peak", "Lukla", "Namche Bazaar"],
  "mera-island-and-lobuche-peak-climbing": ["Mera Peak", "Island Peak", "Lobuche", "Kala Patthar"],
  "island-mera-peak-climbing-with-gokyo-ebc": ["Island Peak", "Mera Peak", "Gokyo", "Kala Patthar", "Khumbu Glacier"],
  "baruntse-expedition": ["Baruntse", "Mera Peak", "Chamlang", "Makalu Barun National Park"],
  "baruntse-expedition-with-mera-peak-climbing": ["Baruntse", "Mera Peak", "Chamlang", "Makalu Barun National Park"],
  "chamlang-expedition": ["Chamlang", "Makalu", "Baruntse", "Makalu Barun National Park"],
  "makalu-expedition": ["Makalu", "Makalu Barun National Park", "Sankhuwasabha District"],
  "makalu-base-camp-with-sherpani-col-and-mera-peak-climbing": ["Makalu", "Mera Peak", "Baruntse", "Makalu Barun National Park", "Sankhuwasabha District"],
  "pachermo-peak-climbing": ["Parchamo", "Rolwaling Himal", "Tengi Ragi Tau", "Gaurishankar", "Thame"],
  "pachermo-and-kyajo-ri-peak-climbing": ["Parchamo", "Kyajo Ri", "Rolwaling Himal", "Tengi Ragi Tau", "Thame"],
  "yalung-ri-and-pachermo-peak-climbing": ["Rolwaling Himal", "Parchamo", "Gaurishankar", "Tengi Ragi Tau"],
  "annapurna-expedition": ["Annapurna I", "Annapurna Base Camp", "Annapurna South", "Annapurna Conservation Area"],
  "annapurna-south-expedition": ["Annapurna South", "Annapurna Base Camp", "Annapurna I", "Annapurna Conservation Area"],
  "singu-chuli-peak-climbing": ["Annapurna Base Camp", "Annapurna South", "Annapurna I", "Annapurna Conservation Area"],
  "tharpu-chuli-and-singu-chuli-two-peaks-climbing": ["Annapurna Base Camp", "Annapurna South", "Annapurna I", "Annapurna Conservation Area"],
  "gangapurna-expedition": ["Gangapurna", "Manang", "Annapurna I", "Tilicho Lake"],
  "tilicho-peak-expedition": ["Tilicho Peak", "Tilicho Lake", "Manang", "Gangapurna"],
  "chulu-east-peak-climbing": ["Manang", "Gangapurna", "Manang District, Nepal", "Annapurna Conservation Area"],
  "chulu-west-peak-climbing": ["Manang", "Gangapurna", "Manang District, Nepal", "Annapurna Conservation Area"],
  "chulu-far-east-climbing": ["Manang", "Gangapurna", "Manang District, Nepal", "Annapurna Conservation Area"],
  "pisang-peak-climbing": ["Pisang Peak", "Manang", "Manang District, Nepal", "Annapurna Conservation Area"],
  "manaslu-expedition": ["Manaslu", "Samagaun", "Larkya La", "Manaslu Conservation Area", "Gorkha District"],
  "larkya-peak-climbing": ["Larkya La", "Manaslu", "Samagaun", "Manaslu Conservation Area"],
  "samdo-peak-climbing": ["Samagaun", "Manaslu", "Larkya La", "Manaslu Conservation Area"],
  "himlung-himal-expedition": ["Manang District, Nepal", "Manaslu Conservation Area", "Manang", "Manaslu"],
  "kang-guru-expedition": ["Manang District, Nepal", "Manaslu Conservation Area", "Manang", "Manaslu"],
  "langtang-lirung-expedition": ["Langtang Lirung", "Langtang", "Langtang National Park"],
  "langshisha-ri-expedition": ["Langshisa Ri", "Langtang", "Langtang National Park", "Langtang Lirung"],
  "dorje-lakpa-expedition": ["Jugal Himal", "Langtang National Park", "Langtang", "Sindhupalchok District"],
  "jugal-himal-gyalzen-peak-climbing": ["Jugal Himal", "Sindhupalchok District", "Langtang National Park", "Helambu"],
  "tukuche-peak-expedition": ["Tukuche Peak", "Dhaulagiri", "Myagdi District"],
  "dhampus-peak-climbing": ["Tukuche Peak", "Dhaulagiri", "Myagdi District"],
  "putha-hiunchuli-expedition": ["Putha Hiunchuli", "Dhaulagiri", "Myagdi District"],
  "abi-peak-climbing": ["Upper Mustang", "Lo Manthang", "Mustang District"],
  "saribung-peak-climbing": ["Upper Mustang", "Lo Manthang", "Mustang District"],
  "bokta-peak-climbing": ["Kangchenjunga", "Ghunsa", "Taplejung District"],
  "kanjirowa-expedition": ["Kanjiroba", "Phoksundo Lake", "Dolpo", "Dolpa District"],
  "api-himal-expedition": ["Darchula District", "Api Nampa Conservation Area"],
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function api(params: Record<string, string>): Promise<any> {
  const qs = new URLSearchParams({ format: "json", ...params });
  for (let attempt = 0; attempt < 6; attempt++) {
    const r = await fetch(`${API}?${qs}`, { headers: { "User-Agent": UA } });
    const text = await r.text();
    if (text.startsWith("You are making too many requests")) {
      await sleep(4000 * (attempt + 1));
      continue;
    }
    try { return JSON.parse(text); }
    catch { await sleep(2000 * (attempt + 1)); }
  }
  throw new Error("commons api gave up");
}

/** Files that are never a usable trek photograph. */
const REJECT =
  /\b(map|karte|carte|topo|diagram|chart|logo|flag|coat of arms|seal|stamp|banner|icon|plot|graph|scan|document|poster|sign|book|cover|page \d+|reconnaissance|1921|1922|1933|1953 |trophy|portrait|passport|licence|license|screenshot|locator|satellite|from space|sketch|drawing|painting|engraving|postage|coin|banknote|plaque|memorial tablet|chart of)\b/i;

async function fileInfo(titles: string[]) {
  const out: any[] = [];
  for (let i = 0; i < titles.length; i += 40) {
    const batch = titles.slice(i, i + 40);
    const info = await api({
      action: "query", titles: batch.join("|"), prop: "imageinfo",
      iiprop: "url|size|mime|extmetadata", iiurlwidth: "2000",
    });
    for (const pg of Object.values<any>(info?.query?.pages ?? {})) {
      const ii = pg.imageinfo?.[0];
      if (!ii) continue;
      if (!/^image\/(jpeg|png|webp)$/.test(ii.mime ?? "")) continue;
      if (ii.width < 1400 || ii.height < 800) continue;
      if (ii.width / ii.height < 1.25) continue;
      const name = String(pg.title).replace(/^File:/, "");
      if (REJECT.test(name)) continue;
      const strip = (v: any) => (v?.value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
      out.push({
        file: name, width: ii.width, height: ii.height, url: ii.url,
        descriptionUrl: ii.descriptionurl,
        licence: strip(ii.extmetadata?.LicenseShortName),
        artist: strip(ii.extmetadata?.Artist).slice(0, 140),
        description: strip(ii.extmetadata?.ImageDescription).slice(0, 400),
      });
    }
    await sleep(700);
  }
  return out;
}

async function main() {
  const manifest: Record<string, any> = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
  const catCache: Record<string, any[]> = {};

  for (const [slug, cats] of Object.entries(CATEGORIES)) {
    if (ONLY.size && !ONLY.has(slug)) continue;
    if (manifest[slug]) { console.log(`${slug} — cached`); continue; }
    const seen = new Set<string>();
    const found: any[] = [];

    for (const cat of cats) {
      if (!catCache[cat]) {
        const r = await api({
          action: "query", list: "categorymembers", cmtitle: `Category:${cat}`,
          cmtype: "file", cmlimit: "60",
        });
        const titles: string[] = (r?.query?.categorymembers ?? []).map((x: any) => x.title);
        await sleep(700);
        catCache[cat] = titles.length ? await fileInfo(titles) : [];
        console.log(`   cat ${cat.padEnd(34)} ${catCache[cat].length} usable`);
      }
      for (const f of catCache[cat]) {
        if (seen.has(f.file)) continue;
        seen.add(f.file);
        found.push({ ...f, category: cat });
      }
    }

    manifest[slug] = found;
    console.log(`${slug.padEnd(58)} ${found.length} candidates`);
    writeFileSync(OUT, JSON.stringify(manifest, null, 1));
  }

  const short = Object.entries(manifest).filter(([, v]: any) => v.length < 7);
  console.log(`\nWrote ${OUT}. Treks: ${Object.keys(manifest).length}.`);
  if (short.length) console.log(`Under 7: ${short.map(([k, v]: any) => `${k}(${v.length})`).join(", ")}`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
