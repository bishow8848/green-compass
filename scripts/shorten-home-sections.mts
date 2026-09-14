/**
 * Shorten the Home page's "Who We Are" and "Why Trek With Us" copy.
 *
 * The full `write-site-content.mts` rewrites the whole site (footer, team,
 * FAQs, contact…). This one deliberately touches only the two sections whose
 * paragraphs were too long for the layout, so anything the owner has edited
 * in the admin since then is left alone.
 *
 * Both stores are written, because the Page Manager keeps them in step:
 * `siteSetting.pageContent` (what the admin form loads) and
 * `homePageSettings` (what the public Home/About pages actually read).
 *
 *   npx tsx scripts/shorten-home-sections.mts            # dry run
 *   npx tsx scripts/shorten-home-sections.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

// Same copy as the shortened arrays in scripts/write-site-content.mts —
// keep the two in step if either is edited again.
const whyChooseUsItems = [
  {
    icon: "Shield",
    title: "Backed by Big Sky Treks",
    description:
      "Run by the team behind Big Sky Treks — registered with the Government of Nepal, licensed by NTB and TAAN.",
  },
  {
    icon: "Users",
    title: "20+ Years of Guiding",
    description:
      "Our senior guide and porters have spent over two decades on Nepal's trails. It shows in every call they make.",
  },
  {
    icon: "CreditCard",
    title: "Cost-Effective Packages",
    description:
      "We hold the permits and run the trips ourselves, so there is no agent's margin in your quote.",
  },
  {
    icon: "Tag",
    title: "No Hidden Charges",
    description:
      "What the itinerary lists is what you pay. Nothing new appears once you are on the trail.",
  },
  {
    icon: "Heart",
    title: "Nepali-Owned, Pokhara-Based",
    description:
      "Based in Lakeside, an hour from the Annapurna trailheads. You book directly with the people walking beside you.",
  },
  {
    icon: "Compass",
    title: "Treks Shaped Around You",
    description:
      "Most departures are private. Tell us your dates, pace and budget, and we build the route around them.",
  },
];

const homeAboutContent = [
  {
    title: "Who We Are",
    description:
      "A trekking and tour operator in Lakeside, Pokhara, and part of the government-registered Big Sky Treks family. We guide treks, peak climbs and cultural tours across 11 Himalayan regions.",
  },
  {
    title: "What Makes Us Different",
    description:
      "We never subcontract. Your guide is on our payroll, insured, and has walked your route before. Groups stay small and itineraries are paced for acclimatisation, not speed.",
  },
  {
    title: "Cost-Effective, Done Properly",
    description:
      "No chain of agents means the same itinerary costs less with us — the saving comes out of the middlemen, not your guide's wage. Everything is priced up front; 10% holds your place.",
  },
];

async function main() {
  const settings = await prisma.siteSetting.findUnique({ where: { id: "site-settings" } });
  if (!settings) throw new Error("site-settings row not found");

  const pc = JSON.parse(settings.pageContent || "{}");
  pc.home = pc.home || {};
  // Headings, images, stats, quote and CTAs are left exactly as they are.
  pc.home.whyChooseUs = { ...(pc.home.whyChooseUs || {}), items: whyChooseUsItems };
  pc.home.aboutUs = { ...(pc.home.aboutUs || {}), content: homeAboutContent };

  const homeSettings = await prisma.homePageSettings.findUnique({ where: { id: "home-settings" } });

  const before = {
    why: (JSON.parse(homeSettings?.whyChooseUsItems || "null") || []) as typeof whyChooseUsItems,
    about: (JSON.parse(homeSettings?.homeAboutContent || "null") || []) as typeof homeAboutContent,
  };
  const chars = (rows: { description: string }[]) =>
    rows.reduce((n, r) => n + r.description.length, 0);

  console.log("\nWhy Trek With Us");
  console.log(`  ${before.why.length} cards, ${chars(before.why)} chars  →  ${whyChooseUsItems.length} cards, ${chars(whyChooseUsItems)} chars`);
  console.log("Who We Are");
  console.log(`  ${before.about.length} blocks, ${chars(before.about)} chars  →  ${homeAboutContent.length} blocks, ${chars(homeAboutContent)} chars`);
  if (!homeSettings) console.log("  ! No homePageSettings row — the public Home/About pages would not pick this up.");

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
      data: {
        whyChooseUsItems: JSON.stringify(whyChooseUsItems),
        homeAboutContent: JSON.stringify(homeAboutContent),
      },
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
