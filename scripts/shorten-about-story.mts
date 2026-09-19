/**
 * Shorten the About page's "Our Story" copy.
 *
 * Touches only `pageContent.about.companyStory.description`, so the heading,
 * badge, image and everything else the owner has edited in the admin stay as
 * they are. The About page reads this from `siteSetting.pageContent` only —
 * there is no `homePageSettings` column for it.
 *
 * CompanyStory renders plain text and splits paragraphs on blank lines, so no
 * HTML here.
 *
 *   npx tsx scripts/shorten-about-story.mts            # dry run
 *   npx tsx scripts/shorten-about-story.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

// Same copy as companyStoryDescription in scripts/write-site-content.mts —
// keep the two in step if either is edited again.
const companyStoryDescription = [
  "Green Compass Treks was registered in Lakeside, Pokhara in 2026, but our team is not new. Our guides and porters have walked Nepal's trails for up to two decades, most of them with Big Sky Treks, the government-registered company that is still our parent.",
  "We stay small on purpose. The person who answers your first email walks the mountain with you, and with no agents in between, the price stays honest. What we never cut: insured porters, fair wages for guides, and itineraries paced for acclimatisation.",
].join("\n\n");

async function main() {
  const settings = await prisma.siteSetting.findUnique({ where: { id: "site-settings" } });
  if (!settings) throw new Error("site-settings row not found");

  const pc = JSON.parse(settings.pageContent || "{}");
  const before: string = pc.about?.companyStory?.description || "";
  const paragraphs = (text: string) => text.split("\n\n").filter(Boolean).length;

  console.log("\nAbout · Our Story");
  console.log(`  ${paragraphs(before)} paragraphs, ${before.length} chars  →  ${paragraphs(companyStoryDescription)} paragraphs, ${companyStoryDescription.length} chars\n`);
  console.log(companyStoryDescription.replace(/^/gm, "  "));

  if (!APPLY) {
    console.log("\nNothing written. Re-run with --apply to save.\n");
    return;
  }

  pc.about = pc.about || {};
  pc.about.companyStory = { ...(pc.about.companyStory || {}), description: companyStoryDescription };
  await prisma.siteSetting.update({
    where: { id: "site-settings" },
    data: { pageContent: JSON.stringify(pc) },
  });

  // A direct Postgres write invalidates nothing by itself, and /about sets
  // `revalidate`, so the site keeps serving the old copy until it is dropped.
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
