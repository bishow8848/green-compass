/**
 * Write the Home and About page copy that the owner specified.
 *
 * Unlike `fill-site-content.mts` (which only fills placeholders), this script
 * sets the fields below outright, because they are the owner's own answers:
 *
 *   Home    · "Why Trek With Us" — 6 cards
 *           · 5 FAQs, about Green Compass Treks specifically
 *           · hero eyebrow (pageContent.home.hero.badge)
 *   About   · company story — one plain paragraph, no HTML
 *           · mission & vision
 *           · Responsible Tourism — 6 commitments
 *           · team — 4 real people (also upserted as TeamMember rows so the
 *             /about/team/<slug> pages resolve)
 *           · Our Journey — a single 2026 founding entry
 *
 * Everything else in pageContent is left untouched.
 *
 *   npx tsx scripts/write-home-about-content.mts            # dry run
 *   npx tsx scripts/write-home-about-content.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

// Experience is derived from startYear at render time so the numbers stay
// current; these are set to match the years the owner gave.
const FOUNDED = "2026";

const whyChooseUsItems = [
  {
    icon: "Heart",
    title: "Nepali-Owned, Pokhara-Based",
    description:
      "Green Compass Treks is owned and run by Nepali guides from Pokhara. You book directly with the people who will be walking the trail beside you — no agency in the middle.",
  },
  {
    icon: "Users",
    title: "Guides With Real Mountain Years",
    description:
      "Our senior guide and porters have spent up to two decades on Nepal's trails. That experience shows in the pace we set, the lodges we choose and the calls we make when the weather turns.",
  },
  {
    icon: "Shield",
    title: "Safety Sets the Pace",
    description:
      "Our itineraries are built around proper acclimatisation rather than the shortest possible schedule. We would rather spend an extra day at altitude than push a group too high, too fast.",
  },
  {
    icon: "Award",
    title: "Fair Work for Guides and Porters",
    description:
      "Everyone who carries a load for us is paid a fair wage, insured, and properly equipped for altitude. Responsible trekking starts with the people doing the hardest work.",
  },
  {
    icon: "Tag",
    title: "No Hidden Charges",
    description:
      "What the itinerary lists is what you pay. Permits, lodges, transport and staff costs are all set out before you book, so nothing new appears once you are on the trail.",
  },
  {
    icon: "Compass",
    title: "Treks Shaped Around You",
    description:
      "Whether you want a short walk on the ridges above Pokhara or a long crossing into Manaslu, we adjust the route, the pace and the budget instead of selling you a fixed departure.",
  },
];

const faqItems = [
  {
    question: "Who are Green Compass Treks?",
    answer:
      "We are a Nepali-owned trekking company based in Pokhara, founded in 2026 by guides who had already spent years working Nepal's trails. We run guided treks, peak climbs and cultural journeys across the Annapurna, Everest, Langtang, Manaslu, Kanchenjunga, Mustang and Dolpo regions.",
  },
  {
    question: "How experienced are your guides and porters?",
    answer:
      "Our senior guide, Bhakti Ram Devkota, has more than twenty years of guiding behind him, and our porter Bishnu Poudel has been working the trails just as long. Rabi Poudel brings eight years, and our founder Bishow Devkota guides as well as running the company. Between them they have walked most of the routes we sell many times over.",
  },
  {
    question: "What does the price of a trek include?",
    answer:
      "Each trek page lists exactly what its price covers and what it does not, including permits, accommodation on the trail, transport and the wages of your guide and porter. We do not add charges later — if something is not in the itinerary, it is not in the price, and we will tell you before you book.",
  },
  {
    question: "Can you customise a trek or run a private departure?",
    answer:
      "Yes. Most of our trips run as private departures for your own group, and we are happy to adjust the route, the number of days, the standard of accommodation or the walking pace to suit you. Tell us how much time you have and what you want from the trek, and we will build the itinerary around it.",
  },
  {
    question: "How do I book a trek with Green Compass Treks?",
    answer:
      "Choose a trek on this site, pick your dates and book online, or send us a message with what you have in mind and we will put an itinerary together first. Either way you will hear back from the team by email to confirm the details before anything is finalised.",
  },
];

// One paragraph, plain text — the About page splits on blank lines and wraps
// each block in its own <p>, so markup here would be shown to visitors as text.
const companyStoryDescription =
  "Green Compass Treks was founded in Pokhara in 2026, but the walking behind it started a long time before that — the guides and porters who make up the team have been working Nepal's trails for as much as two decades. We are deliberately small and entirely Nepali-owned, which means that when you book with us you are dealing with the same people who will be on the mountain with you. We run guided treks, peak climbs and cultural journeys across the Annapurna, Everest, Langtang, Manaslu, Kanchenjunga, Mustang and Dolpo regions, in small groups, at a pace that respects both the altitude and the people carrying the loads.";

const missionVision = {
  badge: "Purpose & Direction",
  heading: "What Drives Us Forward",
  missionLabel: "Core Purpose",
  visionLabel: "Future Outlook",
  mission: {
    icon: "Compass",
    heading: "Our Mission",
    description:
      "To take travellers into the Nepal Himalaya safely and honestly — with licensed local guides, itineraries paced for real acclimatisation, prices that hold no surprises, and fair wages, insurance and proper equipment for every guide and porter who walks with us.",
  },
  vision: {
    icon: "Mountain",
    heading: "Our Vision",
    description:
      "To show that a small, Nepali-owned company can set the standard in the Himalaya: where the people carrying the loads are paid and equipped properly, the mountain villages we walk through share in what the trek earns, and the trails are left in better condition than we found them.",
  },
};

const commitmentItems = [
  {
    icon: "Leaf",
    title: "Leave No Trace",
    description:
      "We carry out what we carry in, including the waste that lodges on the high trails have no way to deal with. Groups are briefed before they set off, and our guides pick up what others leave behind.",
  },
  {
    icon: "ShieldCheck",
    title: "Fair Wages and Insurance",
    description:
      "Every guide and porter working with us is paid a fair wage, insured for altitude and accident, and equipped with boots, jackets and sleeping gear rated for where we are taking them.",
  },
  {
    icon: "HeartHandshake",
    title: "Local Lodges, Local Food",
    description:
      "We stay in family-run teahouses and eat what the valley grows. Keeping that spending in the villages we pass through is the most direct way a trek can be worth something to the people who live there.",
  },
  {
    icon: "Users",
    title: "Small Groups",
    description:
      "Small groups tread more lightly, fill fewer beds in villages with only a handful of them, and let a guide keep a proper eye on how everyone is handling the altitude.",
  },
  {
    icon: "Recycle",
    title: "Plastic-Free Where We Can",
    description:
      "We ask trekkers to bring a refillable bottle and we supply treated water on the trail rather than selling bottles at every stop, which is the single biggest source of plastic on Nepal's popular routes.",
  },
  {
    icon: "Mountain",
    title: "Looking After the Trails",
    description:
      "The routes we sell are the routes we depend on. Our team reports damaged sections and joins local trail and clean-up work in the areas we walk most often.",
  },
];

const teamMembers = [
  {
    name: "Bishow Devkota",
    slug: "bishow-devkota",
    role: "Founder & Trekking Guide",
    startYear: "2022",
    label: "Founder",
    shortBio:
      "Founded Green Compass Treks and still guides on the trail, with four years of guiding across the Annapurna region and beyond.",
    bio: "<p>Bishow Devkota founded Green Compass Treks in Pokhara and continues to guide on the trail rather than running the company from a desk. Four years of leading treks across the Annapurna region and beyond shape how the company works: small groups, honest pricing, and itineraries paced for the altitude rather than the calendar. If you book with Green Compass Treks, there is a good chance Bishow is the one who answers your first email.</p>",
  },
  {
    name: "Bhakti Ram Devkota",
    slug: "bhakti-ram-devkota",
    role: "Senior Trekking Guide",
    startYear: "2006",
    label: "Senior Guide",
    shortBio:
      "More than twenty years guiding in the Nepal Himalaya, and the person we send on the routes that ask the most of a group.",
    bio: "<p>Bhakti Ram Devkota has been guiding in the Nepal Himalaya for more than twenty years, which covers most of the routes Green Compass Treks runs and a good deal of weather besides. He is the guide we send on the trips that ask the most of a group — the long crossings, the high passes, the itineraries where reading the conditions matters more than keeping to the plan. Trekkers tend to remember his pace: unhurried, and always arriving.</p>",
  },
  {
    name: "Bishnu Poudel",
    slug: "bishnu-poudel",
    role: "Senior Porter",
    startYear: "2006",
    label: "Senior Porter",
    shortBio:
      "Twenty years of carrying on Nepal's trails, and a working knowledge of the teahouses and shortcuts that no map records.",
    bio: "<p>Bishnu Poudel has spent twenty years carrying on Nepal's trails. That is two decades of learning which teahouse has room in high season, which side of the valley stays out of the afternoon wind, and how far a group can really go on the second day. Porters are the reason a trek works at all, and Bishnu has been doing it longer than most guides have been guiding.</p>",
  },
  {
    name: "Rabi Poudel",
    slug: "rabi-poudel",
    role: "Porter",
    startYear: "2018",
    label: "Porter",
    shortBio:
      "Eight years on the trail, and the steady presence at the back of the group on a long day up to the pass.",
    bio: "<p>Rabi Poudel has eight years of portering behind him across the regions Green Compass Treks works in. On a long day climbing towards a pass he is usually the one at the back of the group, keeping pace with whoever is finding it hardest. It is quiet work and it is the reason the rest of the trek runs smoothly.</p>",
  },
];

const timelineEvents = [
  {
    year: FOUNDED,
    title: "Green Compass Treks is founded",
    description:
      "Bishow Devkota founds Green Compass Treks in Pokhara, bringing together guides and porters he had already spent years on the trail with. The company starts as it means to continue: Nepali-owned, deliberately small, and built around fair pay for the people carrying the loads.",
  },
];

async function main() {
  const settings = await prisma.siteSetting.findUnique({ where: { id: "site-settings" } });
  if (!settings) throw new Error("site-settings row not found");

  const pc = JSON.parse(settings.pageContent || "{}");

  // ── pageContent: home hero eyebrow + about sections ──────────────────────
  pc.home = pc.home || {};
  pc.home.hero = { ...(pc.home.hero || {}), badge: "Nepal · Himalaya" };

  pc.about = pc.about || {};
  pc.about.companyStory = {
    ...(pc.about.companyStory || {}),
    badge: pc.about.companyStory?.badge || "Our Story",
    heading: pc.about.companyStory?.heading || "Our Story",
    description: companyStoryDescription,
  };
  pc.about.missionVision = { ...(pc.about.missionVision || {}), ...missionVision };
  pc.about.commitment = {
    ...(pc.about.commitment || {}),
    badge: pc.about.commitment?.badge || "Responsible Tourism",
    heading: pc.about.commitment?.heading || "How We Try to Do This Well",
    items: commitmentItems,
  };
  pc.about.team = {
    ...(pc.about.team || {}),
    badge: pc.about.team?.badge || "Our Team",
    heading: pc.about.team?.heading || "The People You Will Be Walking With",
    members: teamMembers.map((m) => ({
      name: m.name,
      slug: m.slug,
      role: m.role,
      startYear: m.startYear,
      label: m.label,
      image: (pc.about.team?.members || []).find((e: any) => e.slug === m.slug)?.image || "",
    })),
  };
  pc.about.timeline = {
    ...(pc.about.timeline || {}),
    badge: pc.about.timeline?.badge || "Our Journey",
    heading: pc.about.timeline?.heading || "Our Journey",
    events: timelineEvents,
  };

  const homeSettings = await prisma.homePageSettings.findFirst();

  // ── report ───────────────────────────────────────────────────────────────
  console.log(`\n${APPLY ? "APPLYING" : "DRY RUN"} — Home & About content\n`);
  console.log(`  home.hero.badge          → "${pc.home.hero.badge}"`);
  console.log(`  whyChooseUsItems         → ${whyChooseUsItems.length} cards`);
  console.log(`  faqItems                 → ${faqItems.length} questions`);
  console.log(`  about.companyStory       → 1 paragraph, ${companyStoryDescription.length} chars, no HTML`);
  console.log(`  about.missionVision      → mission + vision rewritten`);
  console.log(`  about.commitment.items   → ${commitmentItems.length} commitments`);
  console.log(`  about.team.members       → ${teamMembers.length} people`);
  console.log(`  about.timeline.events    → ${timelineEvents.length} entry (${FOUNDED})`);
  console.log(`  TeamMember rows          → ${teamMembers.length} upserted (for /about/team/<slug>)`);
  if (!homeSettings) console.log("\n  ! No homePageSettings row — home fields will be skipped.");
  console.log("");

  if (!APPLY) {
    console.log("Nothing written. Re-run with --apply to save.\n");
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
        whyChooseUsEnabled: true,
        whyChooseUsSubtitle: "Discover the Difference",
        whyChooseUsHeading: "Why Trek With Us?",
        whyChooseUsItems: JSON.stringify(whyChooseUsItems),
        faqEnabled: true,
        faqHeading: "Questions About Trekking With Us",
        faqDescription: "What people ask before booking a trek with Green Compass Treks.",
        faqItems: JSON.stringify(faqItems),
      },
    });
  }

  // Team detail pages read the TeamMember table, not pageContent — keep both
  // in step so every card on the About page resolves to a real page.
  for (const [i, m] of teamMembers.entries()) {
    await prisma.teamMember.upsert({
      where: { slug: m.slug },
      create: {
        name: m.name,
        slug: m.slug,
        role: m.role,
        bio: m.bio,
        shortBio: m.shortBio,
        sort: i,
        status: "published",
      },
      update: {
        name: m.name,
        role: m.role,
        bio: m.bio,
        shortBio: m.shortBio,
        sort: i,
        status: "published",
      },
    });
  }

  console.log("Saved. Run `npm run cache:reset:all` so the public pages pick it up.\n");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
