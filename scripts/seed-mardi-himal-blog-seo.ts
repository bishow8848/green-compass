import "dotenv/config";
import { prisma } from "../lib/prisma";

const AUTHOR_NAME = "Bishow Devkota";

// 35 Mardi Himal Trek blog topics (full titles)
const TITLES: string[] = [
  "Complete Guide to the Mardi Himal Trek",
  "Best Time for the Mardi Himal Trek: A Seasonal Guide",
  "How Difficult Is the Mardi Himal Trek? A Complete Difficulty Guide",
  "Mardi Himal Trek Cost: Complete Budget & Price Guide",
  "Ultimate Mardi Himal Trek Packing List",
  "Mardi Himal Trek Itinerary: A Day-by-Day Guide",
  "Mardi Himal Trek Weather: Monthly Climate Guide",
  "Mardi Himal Trek Permits: Everything You Need to Know",
  "Mardi Himal Trek Food and Accommodation Guide",
  "Mardi Himal Trek Altitude Sickness: Prevention and Safety Tips",
  "How to Prepare for the Mardi Himal Trek",
  "What to Wear on the Mardi Himal Trek",
  "Mardi Himal Trek Tea Houses: Accommodation Along the Trail",
  "Mardi Himal Trek Map and Route Guide",
  "Mardi Himal Trek vs Annapurna Base Camp Trek: Which Is Better?",
  "Is the Mardi Himal Trek Suitable for Beginners?",
  "Mardi Himal Trek Base Camp: Complete Visitor's Guide",
  "Mardi Himal Trek Photography Guide: Best Photo Spots and Tips",
  "Essential Mardi Himal Trek Tips for First-Time Trekkers",
  "Mardi Himal Trek FAQs: Answers to the Most Common Questions",
  "Mardi Himal Trek for Beginners: Everything You Need to Know",
  "Mardi Himal Trek Fitness Guide: How to Train Before Your Trek",
  "Mardi Himal Trek Distance, Duration, and Elevation Explained",
  "Mardi Himal Trek Trail Conditions: What to Expect",
  "Mardi Himal Trek Safety Guide for Solo and Group Trekkers",
  "Mardi Himal Trek in Spring: What to Expect",
  "Mardi Himal Trek in Autumn: The Best Season to Visit",
  "Mardi Himal Trek in Winter: Challenges and Rewards",
  "Mardi Himal Trek in the Monsoon: Is It Worth It?",
  "Mardi Himal Trek Transportation Guide: Getting to the Trailhead",
  "Mardi Himal Trek Sunrise Guide: Best Views from High Camp",
  "Mardi Himal Trek Flora and Fauna: Nature Along the Trail",
  "Mardi Himal Trek Travel Insurance Guide",
  "Mardi Himal Trek Budget vs Luxury: Which Option Is Right for You?",
  "Mardi Himal Trek Checklist: Everything You Need Before You Go",
];

const TAGS = JSON.stringify([
  "mardi himal trek",
  "nepal trekking",
  "annapurna region",
  "trekking guide",
  "himalayan trek",
]);

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function buildExcerpt(title: string): string {
  return (
    `This article explores ${title.toLowerCase()} with practical advice, expert recommendations, and ` +
    `up-to-date information to help travelers plan a safe, enjoyable, and memorable Mardi Himal Trek. ` +
    `It covers essential details, common questions, and useful tips for first-time and experienced trekkers.`
  );
}

function buildMetaDescription(title: string): string {
  return (
    `Learn about ${title.toLowerCase()} with expert advice, practical tips, and everything you need ` +
    `to plan your Mardi Himal Trek.`
  );
}

function buildKeywords(title: string): string {
  return `Mardi Himal Trek, ${title}, Nepal trekking, Annapurna Region, Mardi Himal guide`;
}

async function main() {
  const author = await prisma.author.findFirst({
    where: { name: { equals: AUTHOR_NAME, mode: "insensitive" } },
  });
  if (!author) {
    throw new Error(`Author "${AUTHOR_NAME}" was not found in the authors table.`);
  }
  console.log(`Author found: ${author.name} (slug: ${author.slug})`);

  let created = 0;
  let skipped = 0;

  for (const title of TITLES) {
    const slug = slugify(title);
    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (existing) {
      console.log(`SKIP (already exists): ${slug}`);
      skipped++;
      continue;
    }

    await prisma.blogPost.create({
      data: {
        title,
        slug,
        author: author.name,
        authorSlug: author.slug,
        publishedDate: new Date(),
        heroImage: null,
        excerpt: buildExcerpt(title),
        content: "", // content added later by the admin
        tags: TAGS,
        status: "draft",
        metaTitle: title,
        metaDescription: buildMetaDescription(title),
        keywords: buildKeywords(title),
        ogImage: null,
      },
    });
    console.log(`CREATED: ${slug}`);
    created++;
  }

  console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
