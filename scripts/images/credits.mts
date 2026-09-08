/**
 * Stage 6: append the licence credits for a batch of uploaded photos to
 * scripts/gallery-content/PHOTO-CREDITS.md.
 *
 * Captions on the site carry no photographer credit — write-to-db.mts strips
 * them deliberately, because a credit line under every photograph reads badly
 * and says nothing about the picture. The CC BY / CC BY-SA attribution that
 * those licences do require is therefore met by that file alone, which makes
 * keeping it current a licence obligation rather than bookkeeping.
 *
 * Rows already present are skipped, so a re-run after a partial upload adds
 * only what is new. Unlike the older hand-written rows, heroes are included:
 * a hero is displayed as prominently as any gallery image and is reused under
 * the same terms.
 *
 *   npx tsx scripts/images/credits.mts <uploaded.json> "<section heading>"
 *   npx tsx scripts/images/credits.mts <uploaded.json> Climbing --apply
 */
import { readFileSync, writeFileSync } from "node:fs";

const IN = process.argv[2] ?? "/tmp/uploaded.json";
const HEADING = process.argv.find((a, i) => i > 2 && !a.startsWith("--")) ?? "Additional images";
const APPLY = process.argv.includes("--apply");
const CREDITS = "scripts/gallery-content/PHOTO-CREDITS.md";

/** A pipe in a photographer's name would split the markdown row in two. */
const cell = (v: string) => v.replace(/\|/g, "/").replace(/\s+/g, " ").trim();

async function main() {
  const uploaded = JSON.parse(readFileSync(IN, "utf8"));
  const doc = readFileSync(CREDITS, "utf8");

  const rows: string[] = [];
  let skipped = 0;
  for (const rec of Object.values<any>(uploaded)) {
    for (const im of rec.images) {
      if (doc.includes(im.publicId)) { skipped++; continue; }
      rows.push(
        `| ${cell(rec.slug)} | ${cell(im.publicId)} | ${cell(im.artist || "Unknown")} | ${cell(im.licence || "Unknown")} |`,
      );
    }
  }

  if (!rows.length) {
    console.log(`Nothing to add — all ${skipped} images are already credited.`);
    return;
  }

  const section =
    `\n## ${HEADING}\n\n` +
    "Hero images are listed here alongside the gallery photographs; both are shown\n" +
    "on the page and both are reused under the licence named in the row.\n\n" +
    "| Product | Cloudinary image | Photographer | Licence |\n| --- | --- | --- | --- |\n" +
    rows.join("\n") + "\n";

  console.log(`${rows.length} new rows, ${skipped} already credited.`);
  console.log(section.split("\n").slice(0, 8).join("\n"));
  if (APPLY) {
    writeFileSync(CREDITS, doc.replace(/\s*$/, "\n") + section);
    console.log(`\n✅ Appended to ${CREDITS}.`);
  } else {
    console.log("\nDry run — re-run with --apply to write.");
  }
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
