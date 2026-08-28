/**
 * Stage 4: pull each planned photo from Wikimedia Commons at a sensible width
 * and push it into Cloudinary under mardi-treks/<slug>/.
 *
 * Downloads go through Special:FilePath with a width parameter rather than
 * fetching the original, which is often 10-20 MB and far larger than any slot
 * on the page needs.
 *
 * Resumable: anything already recorded in the output file is skipped.
 *
 *   npx tsx scripts/images/upload.mts <plan.json> <uploaded.json>
 */
import "dotenv/config";
import { existsSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";
import { cloudinary } from "../../lib/cloudinary";

const PLAN = process.argv[2] ?? "/tmp/image-plan.json";
const OUT = process.argv[3] ?? "/tmp/uploaded.json";
const UA = "MardiTreks-ContentBot/1.0 (trek site image sourcing)";
const WIDTH = 2200;
/** Cloudinary rejects anything over 10 MB, and some Commons PNGs are 20 MB. */
const MAX_BYTES = 9_000_000;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Build a Wikimedia CDN thumbnail URL from the original file URL.
 *
 * Two things matter here. Special:FilePath goes through the wiki application
 * servers and is throttled to 429 within a few dozen bulk requests, whereas
 * upload.wikimedia.org is a plain CDN. And arbitrary widths are rejected —
 * Wikimedia only renders a fixed set, of which 1920 and 1280 are the useful
 * large ones, so a request for 2200px comes back 400.
 */
const ALLOWED_WIDTHS = [1920, 1280];

function thumbUrls(originalUrl: string): string[] {
  const clean = originalUrl.split("?")[0];
  const m = clean.match(/^(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons)\/([0-9a-f])\/([0-9a-f]{2})\/(.+)$/);
  if (!m) return [clean];
  const [, base, a, ab, name] = m;
  return [
    ...ALLOWED_WIDTHS.map((w) => `${base}/thumb/${a}/${ab}/${name}/${w}px-${name}`),
    clean, // last resort: the original, which may be large but is always present
  ];
}

/** Cloudinary public ids must be predictable so a re-run overwrites, not duplicates. */
function publicId(slug: string, file: string, i: number): string {
  const stem = file
    .replace(/\.[a-z0-9]+$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
  return `${slug}-${String(i).padStart(2, "0")}-${stem}`;
}

/**
 * Hand Cloudinary the Commons URL and let it fetch the file itself.
 *
 * Commons throttles bulk media downloads from a single client hard — pulling
 * 300 files locally hits HTTP 429 within a few minutes. Cloudinary's remote
 * fetch does the download from its own infrastructure, which avoids the limit
 * entirely and is far quicker. Falls back to a local download when the remote
 * fetch fails, which in practice means a file over Cloudinary's 10 MB cap.
 */
async function uploadRemote(url: string, folder: string, id: string) {
  return cloudinary.uploader.upload(url, {
    folder, public_id: id, overwrite: true, resource_type: "image",
  });
}

async function download(url: string, dest: string): Promise<number> {
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": UA } });
      if (r.status === 429 || r.status >= 500) {
        // Commons throttles hard on bulk media fetches; wait it out properly.
        await sleep(15_000 * (attempt + 1));
        continue;
      }
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      let buf = Buffer.from(await r.arrayBuffer());
      if (buf.length < 20_000) throw new Error(`suspiciously small (${buf.length} bytes)`);

      // Re-encode anything oversized (usually a large PNG) into a JPEG that
      // fits Cloudinary's upload limit with no visible loss of quality.
      if (buf.length > MAX_BYTES) {
        buf = await sharp(buf)
          .resize({ width: WIDTH, withoutEnlargement: true })
          .jpeg({ quality: 82, mozjpeg: true })
          .toBuffer();
      }
      await writeFile(dest, buf);
      return buf.length;
    } catch (e) {
      if (attempt === 3) throw e;
      await sleep(1500 * (attempt + 1));
    }
  }
  throw new Error("unreachable");
}

async function main() {
  const plan = JSON.parse(readFileSync(PLAN, "utf8"));
  const done: Record<string, any> = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};

  let uploaded = 0;
  let failed = 0;

  for (const trek of plan) {
    done[trek.slug] ??= { slug: trek.slug, id: trek.id, images: [] };
    const record = done[trek.slug];
    const already = new Set(record.images.map((x: any) => x.file));

    for (let i = 0; i < trek.images.length; i++) {
      const im = trek.images[i];
      if (already.has(im.file)) continue;

      const tmp = join(tmpdir(), `commons-${Date.now()}-${i}.jpg`);
      const folder = `mardi-treks/${trek.slug}`;
      const id = publicId(trek.slug, im.file, i);
      try {
        let res;
        let how = "";
        const urls = thumbUrls(im.url);
        for (const u of urls) {
          try {
            res = await uploadRemote(u, folder, id);
            how = u.includes("/thumb/") ? u.match(/(\d+)px-/)?.[1] ?? "thumb" : "orig";
            break;
          } catch { /* try the next width, then the original */ }
        }
        if (!res) {
          // Everything remote failed — usually a file over Cloudinary's 10 MB
          // cap. Pull it down and re-encode locally.
          how = "local";
          await download(urls[0], tmp);
          res = await cloudinary.uploader.upload(tmp, {
            folder, public_id: id, overwrite: true, resource_type: "image",
          });
        }
        record.images.push({
          role: im.role,
          file: im.file,
          publicId: res.public_id,
          width: res.width,
          height: res.height,
          licence: im.licence,
          artist: im.artist,
          descriptionUrl: im.descriptionUrl,
          hits: im.hits,
        });
        uploaded++;
        console.log(`  ok  ${trek.slug}/${im.role.padEnd(7)} ${how.padEnd(6)} ${res.width}x${res.height}  ${res.public_id}`);
      } catch (e: any) {
        failed++;
        console.log(`  FAIL ${trek.slug} ${im.file}: ${e.message}`);
      } finally {
        try { unlinkSync(tmp); } catch {}
      }
      writeFileSync(OUT, JSON.stringify(done, null, 1));
      await sleep(300);
    }
    console.log(`${trek.slug.padEnd(58)} ${record.images.length}/7`);
  }

  const total = Object.values(done).reduce((n: number, t: any) => n + t.images.length, 0);
  console.log(`\nUploaded ${uploaded} this run (${failed} failed). ${total} images across ${Object.keys(done).length} treks.`);
  const short = Object.values(done).filter((t: any) => t.images.length < 7);
  if (short.length) console.log(`Under 7: ${short.map((t: any) => `${t.slug}(${t.images.length})`).join(", ")}`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
