/**
 * Corrects wording that the trip template repeated across the site:
 *
 *   - the departures section heading "Fix Departure" -> "Fixed Departures"
 *   - "Trip Higlights" -> "Trip Highlights"
 *   - empty headings left behind by the editor ("<h2></h2>"), which a search
 *     engine reads as a section with no title
 *   - section descriptions that were cut off mid-word
 *   - "Machhapuchchhre" -> "Machhapuchhre" in gallery alt text and captions
 *   - add-on titles: "form" -> "from", "Kathamndu" -> "Kathmandu"
 *   - the footer's recognition logos, whose names are used as their alt text
 *
 * Before-values go to scripts/.backups/.
 *
 *   npx tsx scripts/fix-template-text.mts --dry-run
 *   npx tsx scripts/fix-template-text.mts
 */
import "dotenv/config";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";

const DRY_RUN = process.argv.includes("--dry-run");
const BACKUP_DIR = fileURLToPath(new URL("./.backups/", import.meta.url));

/** Descriptions saved cut off, completed: [ending as stored, ending as it should read]. */
const CUT_OFF: Array<[string, string]> = [
  ["for a hassle-free Himalayan adventu", "for a hassle-free Himalayan adventure."],
  ["to make your trek more comfortable and con", "to make your trek more comfortable and convenient."],
  ["before descending back to Pokhar", "before descending back to Pokhara."],
  ["and the challenging Larkya La Pass (5,106 m)", "and the challenging Larkya La Pass (5,106 m)."],
];

/** Footer recognition logos by Cloudinary ID: the name doubles as the image's alt text. */
const RECOGNITIONS: Record<string, string> = {
  "footer/recognitions/yjapbkwva6hxeefzclfh": "Tripadvisor Travelers' Choice Award 2025",
  "footer/recognitions/egck1pdqcjynsrma5ukv": "Tripadvisor Travelers' Choice 2026",
};

async function main() {
  const backup: Record<string, unknown[]> = { treks: [], gallery: [], settings: [] };
  const counts: Record<string, number> = {};
  const bump = (k: string) => (counts[k] = (counts[k] ?? 0) + 1);

  const treks = await prisma.trek.findMany({ select: { id: true, slug: true, sectionData: true, customSections: true, addons: true, overview: true } });
  const trekUpdates: Array<{ id: string; data: Record<string, string> }> = [];
  for (const t of treks) {
    const data: Record<string, string> = {};

    if (t.sectionData) {
      try {
        const sections = JSON.parse(t.sectionData) as Record<string, { heading?: string; description?: string }>;
        for (const s of Object.values(sections)) {
          if (!s) continue;
          if (s.heading === "Fix Departure") {
            s.heading = "Fixed Departures";
            bump("departures heading");
          }
          for (const [stored, full] of CUT_OFF) {
            if (s.description?.trim().endsWith(stored)) {
              s.description = `${s.description.trim().slice(0, -stored.length)}${full}`;
              bump("cut-off description");
            }
          }
        }
        const next = JSON.stringify(sections);
        if (next !== t.sectionData) data.sectionData = next;
      } catch {
        console.warn(`  ! ${t.slug}: sectionData is not valid JSON — left alone`);
      }
    }

    if (t.customSections?.includes("Higlights")) {
      data.customSections = t.customSections.replaceAll("Higlights", "Highlights");
      bump("Highlights heading");
    }

    // "<h2></h2>" in rich text; inside customSections the JSON escapes the slash.
    const emptyHeading = /<h([1-6])>(?:\s|&nbsp;|<br\s*\/?>)*<\\?\/h\1>/g;
    for (const field of ["customSections", "overview"] as const) {
      const before = data[field] ?? t[field];
      if (!before) continue;
      const after = before.replace(emptyHeading, "");
      if (after !== before) {
        data[field] = after;
        bump("empty heading");
      }
    }

    if (t.addons && /\bform\b|Kathamndu/.test(t.addons)) {
      try {
        const addons = JSON.parse(t.addons) as Array<{ title?: string }>;
        for (const a of addons) {
          const fixed = a.title?.replace(/\bform\b/g, "from").replace(/Kathamndu/g, "Kathmandu");
          if (fixed && fixed !== a.title) {
            a.title = fixed;
            bump("add-on title");
          }
        }
        const next = JSON.stringify(addons);
        if (next !== t.addons) data.addons = next;
      } catch {
        // Unreadable add-ons are left as they are.
      }
    }

    if (Object.keys(data).length > 0) {
      trekUpdates.push({ id: t.id, data });
      backup.treks.push({ id: t.id, sectionData: t.sectionData, customSections: t.customSections, addons: t.addons, overview: t.overview });
    }
  }

  const gallery = await prisma.trekGalleryImage.findMany({
    where: { OR: [{ alt: { contains: "Machhapuchchhre" } }, { caption: { contains: "Machhapuchchhre" } }] },
    select: { id: true, alt: true, caption: true },
  });
  for (const g of gallery) {
    backup.gallery.push(g);
    bump("gallery spelling");
  }

  const settings = await prisma.siteSetting.findUnique({ where: { id: "site-settings" }, select: { pageContent: true } });
  let pageContent: string | null = null;
  if (settings?.pageContent) {
    const content = JSON.parse(settings.pageContent as string);
    for (const badge of content?.footer?.recognitions ?? []) {
      const name = RECOGNITIONS[badge.src];
      if (name && badge.name !== name) {
        badge.name = name;
        bump("footer logo name");
      }
    }
    const next = JSON.stringify(content);
    if (next !== JSON.stringify(JSON.parse(settings.pageContent as string))) {
      pageContent = next;
      backup.settings.push({ pageContent: settings.pageContent });
    }
  }

  console.log(counts);
  if (DRY_RUN) return console.log("Dry run — nothing written.");

  mkdirSync(BACKUP_DIR, { recursive: true });
  const backupFile = `${BACKUP_DIR}template-text-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  writeFileSync(backupFile, JSON.stringify(backup));
  for (const u of trekUpdates) await prisma.trek.update({ where: { id: u.id }, data: u.data });
  for (const g of gallery) {
    await prisma.trekGalleryImage.update({
      where: { id: g.id },
      data: { alt: g.alt?.replaceAll("Machhapuchchhre", "Machhapuchhre"), caption: g.caption?.replaceAll("Machhapuchchhre", "Machhapuchhre") },
    });
  }
  if (pageContent) await prisma.siteSetting.update({ where: { id: "site-settings" }, data: { pageContent } });
  console.log(`Updated ${trekUpdates.length} trip(s), ${gallery.length} gallery image(s)${pageContent ? " and the footer" : ""}. Before-values: ${backupFile}`);
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
