/**
 * Targeted second pass for the treks Commons serves badly.
 *
 * District-level categories (Lamjung District, Solukhumbu District) pull in
 * village portraits, lizards and photos from entirely different trails. For
 * these routes the fix is a narrow search on the peaks and places the trek
 * actually visits, plus a hard requirement that a candidate names one of them.
 *
 *   npx tsx scripts/images/refine-weak.mts <out.json>
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const OUT = process.argv[2] ?? "/tmp/refined.json";
const API = "https://commons.wikimedia.org/w/api.php";
const UA = "MardiTreks-ContentBot/1.0 (trek site image sourcing)";

/** Search terms, and the words a filename must contain to be accepted. */
const TARGETS: Record<string, { terms: string[]; must: RegExp }> = {
  "lamjung-himal-trek": {
    terms: ["Lamjung Himal", "Rambrong Danda", "Ghanpokhara Lamjung", "Tangting Nepal", "Lamjung Himal peak", "Annapurna II Lamjung"],
    must: /lamjung|rambrong|ghanpokhara|tangting|annapurna\s*(ii|iv)|baglungpani/i,
  },
  "khori-himal-trek": {
    terms: ["Sikles Nepal", "Kori Danda", "Sikles village Nepal", "Madi valley Nepal", "Annapurna II Sikles"],
    must: /sikles|kori|khori|annapurna\s*(ii|iv)|madi|lamjung\s*himal/i,
  },
  "khori-himal-trek-from-pokhara": {
    terms: ["Sikles Nepal", "Kori Danda", "Sikles village Nepal", "Madi valley Nepal", "Annapurna II Sikles"],
    must: /sikles|kori|khori|annapurna\s*(ii|iv)|madi|lamjung\s*himal/i,
  },
  "mundum-trek": {
    terms: ["Khotang Nepal", "Bhojpur Nepal", "Silchung Khotang", "Tyamke Danda", "Salpa Bhanjyang", "Halesi Mahadev"],
    must: /khotang|bhojpur|silchung|tyamke|salpa|halesi|mundum|diktel|dhotre|maiyung/i,
  },
  "humla-limi-valley-trek": {
    terms: ["Limi Valley", "Simikot Humla", "Halji monastery", "Humla Karnali", "Til Limi", "Nara La Humla"],
    must: /limi|simikot|humla|halji|karnali|hilsa|kermi|yalbang|nara\s*la|til\b/i,
  },
  "kanchenjunga-north-base-camp-trek": {
    terms: ["Pangpema", "Ghunsa Nepal", "Jannu Kumbhakarna", "Kangchenjunga north face", "Khambachen", "Kangchenjunga glacier"],
    must: /pangpema|ghunsa|jannu|kumbhakarna|kangchenjunga|kanchenjunga|khambachen|lhonak|amjilosa|gyabla/i,
  },
  "kanchenjunga-south-base-camp-trek": {
    terms: ["Yalung Glacier", "Oktang Kangchenjunga", "Tseram Nepal", "Kangchenjunga south face", "Ramche Kangchenjunga", "Yamphudin"],
    must: /yalung|oktang|tseram|cheram|kangchenjunga|kanchenjunga|ramche|yamphudin|taplejung/i,
  },
  "helambu-trek": {
    terms: ["Helambu Nepal", "Tarkeghyang", "Sermathang", "Melamchi valley Nepal", "Chisapani Nepal trek", "Tharepati"],
    must: /helambu|tarkeghyang|tarke\s*ghyang|sermathang|melamchi|tharepati|chisapani|khutumsang|kutumsang|shivapuri/i,
  },

  // --- remote-region treks added later ---
  "dhaulagiri-circuit-trek": {
    terms: ["Dhaulagiri", "French Pass Nepal", "Hidden Valley Dhaulagiri", "Dhaulagiri base camp", "Myagdi Khola", "Marpha Nepal", "Tukuche Nepal"],
    must: /dhaulagiri|french\s*pass|hidden\s*valley|myagdi|marpha|tukuche|dhampus\s*pass|glacier\s*camp|kali\s*gandaki/i,
  },
  "churen-himal-base-camp-trek": {
    terms: ["Churen Himal", "Dhorpatan", "Gurja Himal", "Putha Hiunchuli", "Dhaulagiri range", "Dhorpatan hunting reserve"],
    must: /churen|dhorpatan|gurja|putha|dhaulagiri|myagdi|jaljala|baglung/i,
  },
  "guerrilla-trek": {
    terms: ["Dhorpatan", "Rolpa Nepal", "Rukum Nepal", "Thabang Rolpa", "Jaljala Rolpa", "Dhorpatan hunting reserve"],
    must: /dhorpatan|rolpa|rukum|thabang|jaljala|sulichaur|maikot|pelma|myagdi/i,
  },
  "larke-pass-trek": {
    terms: ["Larkya La", "Samagaun", "Manaslu", "Bimthang", "Samdo Nepal", "Namrung Nepal"],
    must: /larkya|larke|samagaun|sama\s*gaun|manaslu|bimthang|samdo|namrung|\blho\b|dharapani|jagat\s*nepal|philim|\bdeng\b|budhi\s*gandaki/i,
  },
  "lower-manaslu-trek": {
    terms: ["Barpak", "Laprak", "Gorkha Nepal mountain", "Manaslu Gorkha", "Gumda Gorkha"],
    must: /barpak|laprak|gorkha|manaslu|gumda|machha\s*khola|singla|himalchuli|himal\s*chuli/i,
  },
  "rupina-la-pass-trek": {
    terms: ["Rupina La", "Barpak", "Laprak", "Manaslu Gorkha", "Budhi Gandaki"],
    must: /rupina|barpak|laprak|manaslu|nyak|philim|budhi\s*gandaki|gorkha|himalchuli/i,
  },
  "serang-gompa-trek": {
    terms: ["Serang Gompa", "Bihi Nepal", "Prok Manaslu", "Nubri valley", "Budhi Gandaki Manaslu"],
    must: /serang|\bbihi\b|\bprok\b|nubri|manaslu|budhi\s*gandaki|philim|\bdeng\b|jagat\s*nepal/i,
  },
  "tsho-rolpa-trek": {
    terms: ["Tsho Rolpa", "Rolwaling", "Beding Nepal", "Gaurishankar", "Simigaon", "Rolwaling valley"],
    must: /tsho\s*rolpa|cho\s*rolpa|rolwaling|beding|bedding|simigaon|gaurishankar|dongang|trakarding/i,
  },
  "tashi-lapcha-pass-trek": {
    terms: ["Tashi Lapcha", "Tashi Laptse", "Rolwaling", "Beding Nepal", "Thame Nepal", "Tsho Rolpa"],
    must: /tashi\s*lap|tashi\s*lab|rolwaling|beding|bedding|thame|tsho\s*rolpa|simigaon|drolambau|gaurishankar/i,
  },
  "tilman-pass-trek": {
    terms: ["Langshisa Kharka", "Kyanjin Gompa", "Langtang valley", "Jugal Himal", "Dorje Lakpa", "Langtang Lirung"],
    must: /langshisa|kyanjin|langtang|jugal|dorje\s*lakpa|panch\s*pokhari|syabru|tilman|ganchenpo/i,
  },
  "panch-pokhari-trek": {
    terms: ["Panch Pokhari Sindhupalchok", "Jugal Himal", "Sindhupalchok mountain", "Melamchi valley Nepal", "Dorje Lakpa"],
    must: /panch\s*pokhari|panchpokhari|jugal|sindhupalchok|sindhupalchowk|melamchi|tempathang|dorje\s*lakpa/i,
  },
  "sherpani-col-passes-trek": {
    terms: ["Makalu base camp", "Barun valley", "Amphu Labtsa", "Baruntse", "Makalu Nepal", "Makalu Barun"],
    must: /sherpani|makalu|barun|amphu|baruntse|hongu|chamlang|yangle|langmale|seduwa|tashigaon|\bnum\b|khongma/i,
  },
  "shey-phoksundo-lake-trek": {
    terms: ["Phoksundo Lake", "Ringmo Dolpa", "Shey Phoksundo National Park", "Dolpa Nepal", "Juphal Dolpa"],
    must: /phoksundo|ringmo|dolpa|dolpo|juphal|dunai|chhepka|suli\s*gad|kanjiroba/i,
  },
  "jomsom-dolpo-trek": {
    terms: ["Dolpo", "Phoksundo Lake", "Dho Tarap", "Charka Bhot", "Jomsom Nepal", "Kagbeni"],
    must: /dolpo|dolpa|phoksundo|tarap|charka|jomsom|kagbeni|numa\s*la|baga\s*la|juphal|ringmo|kali\s*gandaki/i,
  },
  "saribung-pass-trek": {
    terms: ["Lo Manthang", "Upper Mustang", "Damodar Kunda", "Nar Phu valley", "Yara Mustang", "Chhoser Mustang"],
    must: /lo\s*manthang|mustang|damodar|nar\s*phu|phu\s*gaon|\byara\b|tange|ghami|charang|chele|kagbeni|saribung|chhoser|dhakmar/i,
  },
  "teri-la-pass-trek": {
    terms: ["Lo Manthang", "Upper Mustang", "Nar Phu valley", "Tange Mustang", "Nar village Nepal", "Ghami Mustang"],
    must: /lo\s*manthang|mustang|nar\s*phu|phu\s*gaon|nar\s*gaon|tange|\byara\b|ghami|charang|chele|kagbeni|teri\s*la|chhoser|dhakmar/i,
  },
  "api-himal-base-camp-trek": {
    terms: ["Api Himal", "Api Nampa Conservation Area", "Darchula Nepal", "Nampa peak Nepal", "Api Himal base camp"],
    must: /\bapi\b|api\s*himal|api\s*nampa|nampa|darchula|chamaliya|byas\s*rural|sudurpaschim|sudurpashchim/i,
  },
  "badimalika-trek": {
    terms: ["Badimalika", "Bajura Nepal", "Saipal Himal", "Martadi Bajura", "Badimalika temple"],
    must: /badimalika|badi\s*malika|bajura|saipal|martadi|kolti|budhiganga/i,
  },
  "ramaroshan-lakes-trek": {
    terms: ["Ramaroshan", "Achham Nepal", "Mangalsen Achham", "Ramaroshan lake Achham", "Sanfebagar"],
    must: /ramaroshan|rama\s*roshan|achham|accham|mangalsen|sanfebagar|budhiganga/i,
  },
  "red-panda-trail-trek": {
    terms: ["Ilam Nepal", "Panchthar Nepal", "Ilam tea garden", "Kanyam Ilam", "Singalila Nepal", "Antu Danda Ilam"],
    must: /\bilam\b|panchthar|red\s*panda|kanyam|singalila|maimajhuwa|chyangthapu|antu|mai\s*pokhari/i,
  },
};

const REJECT =
  /\b(map|karte|diagram|chart|logo|flag|coat of arms|seal|stamp|banner|icon|graph|scan|document|poster|sign|book|cover|page \d+|reconnaissance|portrait|screenshot|locator|sketch|drawing|painting|engraving|coin|plaque|lizard|insect|butterfly|bird of|kid|child|boy|girl|man |woman |people|festival|wedding|dance|food|momo|bus |motorbike|motor bridge|airport terminal)\b/i;
/** Digitised books: "Round Kangchenjunga; a narrative ... (1903) (14773328102).jpg" */
const ARCHIVE = /\((1[6-9]\d{2}|19[0-5]\d)\)|narrative|\bvol\.?\s*\d|\bplate\b|archive\.org/i;
/** Astronaut photography, and views taken from the Indian side of the range. */
const OFF_ROUTE = /\b(?:ISS\d|STS\d)|\b(astronaut|satellite|aerial)\b|from space|\b(sikkim|darjeeling|sandakphu|sandakpur|india|tibet|china)\b/i;
const PEOPLE = /\b(kid|catkid|gurungkid|old man|celebrating|selfie|group photo)\b/i;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function api(params: Record<string, string>): Promise<any> {
  const qs = new URLSearchParams({ format: "json", ...params });
  for (let a = 0; a < 6; a++) {
    const r = await fetch(`${API}?${qs}`, { headers: { "User-Agent": UA } });
    const text = await r.text();
    if (text.startsWith("You are making too many requests")) { await sleep(4000 * (a + 1)); continue; }
    try { return JSON.parse(text); } catch { await sleep(2000 * (a + 1)); }
  }
  throw new Error("commons api gave up");
}

async function search(term: string) {
  const s = await api({
    action: "query", list: "search", srsearch: `${term} filetype:bitmap`,
    srnamespace: "6", srlimit: "30",
  });
  const titles: string[] = (s?.query?.search ?? []).map((x: any) => x.title);
  if (!titles.length) return [];
  const out: any[] = [];
  for (let i = 0; i < titles.length; i += 40) {
    const info = await api({
      action: "query", titles: titles.slice(i, i + 40).join("|"),
      prop: "imageinfo", iiprop: "url|size|mime|extmetadata",
    });
    for (const pg of Object.values<any>(info?.query?.pages ?? {})) {
      const ii = pg.imageinfo?.[0];
      if (!ii) continue;
      if (!/^image\/(jpeg|png|webp)$/.test(ii.mime ?? "")) continue;
      if (ii.width < 1400 || ii.height < 800) continue;
      if (ii.width / ii.height < 1.25) continue;
      const name = String(pg.title).replace(/^File:/, "");
      if (REJECT.test(name) || PEOPLE.test(name)) continue;
      const strip = (v: any) => (v?.value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
      out.push({
        file: name, width: ii.width, height: ii.height, url: ii.url,
        descriptionUrl: ii.descriptionurl,
        licence: strip(ii.extmetadata?.LicenseShortName),
        artist: strip(ii.extmetadata?.Artist).slice(0, 140),
      });
    }
    await sleep(600);
  }
  return out;
}

async function main() {
  const found: Record<string, any[]> = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
  for (const [slug, cfg] of Object.entries(TARGETS)) {
    if (found[slug]?.length >= 7) { console.log(`${slug} — already have ${found[slug].length}`); continue; }
    const seen = new Set<string>();
    const keep: any[] = [];
    for (const term of cfg.terms) {
      let res: any[] = [];
      try { res = await search(term); } catch (e: any) { console.log(`   ! ${term}: ${e.message}`); }
      for (const r of res) {
        if (seen.has(r.file)) continue;
        seen.add(r.file);
        // The filename must actually name something on this trek.
        if (!cfg.must.test(r.file)) continue;
        keep.push(r);
      }
      await sleep(400);
    }
    keep.sort((a, b) => b.width - a.width);
    found[slug] = keep;
    console.log(`${slug.padEnd(46)} ${keep.length} on-route candidates`);
    keep.slice(0, 10).forEach((k) => console.log(`      ${k.file}`));
    writeFileSync(OUT, JSON.stringify(found, null, 1));
  }
  const short = Object.entries(found).filter(([, v]) => v.length < 7);
  console.log(`\nStill short of 7: ${short.map(([k, v]) => `${k}(${v.length})`).join(", ") || "none"}`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
