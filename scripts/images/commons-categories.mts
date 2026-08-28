/**
 * Stage 1b: collect candidate photos from Wikimedia Commons CATEGORIES.
 *
 * Free-text search returns too much noise — Kathmandu street photography and
 * 1920s expedition book scans outrank actual trail photography. Commons
 * categories are curated by hand and give a much cleaner pool, so each trek is
 * mapped to the categories that cover the ground it actually walks.
 *
 *   npx tsx scripts/images/commons-categories.mts [out.json]
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const OUT = process.argv[2] ?? "/tmp/commons-cat-candidates.json";
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
  "annapurna-cicuit-with-tilicho-lake-trek": ["Tilicho Lake", "Annapurna Circuit", "Thorong La", "Manang", "Muktinath"],
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
  "makalu-base-camp-trek": ["Makalu", "Makalu Barun National Park", "Sankhuwasabha District"],
  "mundum-trek": ["Khotang District", "Bhojpur District", "Solukhumbu District"],

  "lower-dolpo-trek": ["Dolpo", "Phoksundo Lake", "Shey Phoksundo National Park", "Dolpa District"],
  "upper-dolpo-trek": ["Dolpo", "Shey Gompa", "Phoksundo Lake", "Shey Phoksundo National Park", "Dolpa District"],
  "humla-limi-valley-trek": ["Humla District", "Limi Valley", "Simikot", "Karnali Province"],
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
