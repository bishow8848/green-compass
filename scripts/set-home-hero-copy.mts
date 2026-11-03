/**
 * Set the Home hero copy (kicker, headline, highlight, supporting line).
 *
 * Touches only the hero text — CTAs, images and every other section are left
 * as the owner last saved them in the admin.
 *
 * Both stores are written, because the Page Manager keeps them in step:
 * `siteSetting.pageContent` (what the admin form loads, and the only home for
 * the kicker and supporting line) and `homePageSettings` (whose heroTitle /
 * heroTitleHighlight win over pageContent on the public page).
 *
 *   npx tsx scripts/set-home-hero-copy.mts            # dry run
 *   npx tsx scripts/set-home-hero-copy.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

// The title and highlight render as one headline: "<title> <highlight>".
const hero = {
  badge: "Locally owned · Pokhara, Nepal",
  title: "Trek the Himalaya with",
  titleHighlight: "Green Compass Treks.",
  description:
    "Private and small-group treks across Annapurna, Everest, Langtang and Manaslu — led by our own licensed guides, priced up front, with no middlemen.",
};

async function main() {
  const settings = await prisma.siteSetting.findUnique({ where: { id: "site-settings" } });
  if (!settings) throw new Error("site-settings row not found");
  const homeSettings = await prisma.homePageSettings.findUnique({ where: { id: "home-settings" } });

  const pc = JSON.parse(settings.pageContent || "{}");
  pc.home = pc.home || {};
  const before = pc.home.hero || {};
  pc.home.hero = { ...before, ...hero };

  const show = (label: string, from: unknown, to: string) =>
    console.log(`  ${label.padEnd(16)} ${JSON.stringify(from ?? null)}\n  ${"".padEnd(16)} → ${JSON.stringify(to)}`);
  console.log("\nHome hero (pageContent)");
  show("kicker", before.badge, hero.badge);
  show("title", before.title, hero.title);
  show("highlight", before.titleHighlight, hero.titleHighlight);
  show("supporting line", before.description, hero.description);
  console.log("Home hero (homePageSettings)");
  show("heroTitle", homeSettings?.heroTitle, hero.title);
  show("heroHighlight", homeSettings?.heroTitleHighlight, hero.titleHighlight);
  if (!homeSettings) console.log("  ! No homePageSettings row — the page falls back to pageContent.");

  if (!APPLY) {
    console.log("\nNothing written. Re-run with --apply to save.\n");
    return;
  }

  await prisma.siteSetting.update({
    where: { id: "site-settings" },
    data: { pageContent: JSON.stringify(pc) },
  });
  if (homeSettings) {
    await prisma.homePageSettings.update({
      where: { id: homeSettings.id },
      data: { heroTitle: hero.title, heroTitleHighlight: hero.titleHighlight },
    });
  }
  // A direct Postgres write invalidates nothing by itself, and the Home page
  // sets `revalidate`, so Next keeps serving the old copy until it is dropped.
  console.log("\nSaved. Now refresh the caches, or the site keeps serving the old copy:");
  console.log("  npm run cache:refresh                                  # local");
  console.log("  npx tsx scripts/refresh-site-cache.mts \\");
  console.log("    --revalidate-url https://greencompasstreks.com      # deployed\n");
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
