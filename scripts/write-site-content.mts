/**
 * Write the Home, About, Blog, Contact and Footer copy the owner specified.
 *
 * Unlike `fill-site-content.mts` (which only fills placeholders), this script
 * sets the fields below outright, because they are the owner's own answers.
 * Supersedes the never-applied `write-home-about-content.mts`.
 *
 *   Home    · "Why Trek With Us" — 6 cards
 *           · "Who We Are" — parent company (Big Sky Treks), what makes us
 *             different, cost-effective packages; plus truthful stat tiles
 *           · 13 FAQs about the company itself
 *           · contact block — the literal string "null" replaced, real phone
 *             and office hours
 *   About   · company story — plain text (the component renders text, not HTML)
 *           · timeline — the single 2026 founding entry
 *           · Responsible Tourism — 6 commitments
 *           · How to Book — the owner's 6 steps
 *           · team — the 6 real people, ordered founder → guide →
 *             guide-cum-porter → porter, also synced to TeamMember rows so
 *             /about/team/<slug> resolves. Photos are left to the owner.
 *   Blog    · hero image + short description
 *   Contact · phone, office hours
 *   Footer  · NTB / TAAN / Government of Nepal, Google + TripAdvisor,
 *             real social URLs, real phone, working WhatsApp number
 *
 * Both stores are written, because the Page Manager keeps them in step:
 * `siteSetting.pageContent` (what the admin form loads) and
 * `homePageSettings` (what the public Home/About pages actually read).
 * Writing only one of them would leave the admin form showing stale copy and
 * silently reverting this on the next save.
 *
 * Mission & Vision is deliberately NOT touched: it is already owner-written,
 * and its component renders HTML, so the stored markup there is correct.
 *
 *   npx tsx scripts/write-site-content.mts            # dry run
 *   npx tsx scripts/write-site-content.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

const PHONE = "+977 9864379436";
/** Digits only — wa.me rejects spaces and needs the country code once. */
const WHATSAPP = "9779864379436";
const EMAIL = "info@greencompasstreks.com";
const ADDRESS = "Lakeside, Pokhara, Nepal";
const OFFICE_HOURS = "Sunday – Friday, 9:00 AM – 9:00 PM";

// ─────────────────────────────────────────────────────────────────────────────
// HOME — Why Trek With Us (6 cards)
// Icons must exist in components/home/WhyChooseUs.tsx's iconComponentMap.
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// HOME — Who We Are
// ─────────────────────────────────────────────────────────────────────────────
const homeAboutHeading = "A Pokhara Trekking Company, Backed by Big Sky Treks";
const homeAboutSubheading = "Who We Are";

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

// Grounded in the catalogue and the team as it actually is: 212 published
// trips, 11 Himalayan regions, six staff, and the senior guide's 20 years.
// (The previous values — "8+ years", "15+ certified guides" — could not be
// true for a company founded in 2026 with six people.)
const homeAboutStats = [
  { icon: "Award", label: "Years Guiding Experience", value: "20+" },
  { icon: "Mountain", label: "Himalayan Regions", value: "11" },
  { icon: "Compass", label: "Treks, Tours & Climbs", value: "200+" },
  { icon: "Users", label: "Guides & Porters", value: "6" },
];

const homeAboutQuote =
  "We are the people who will be on the mountain with you — not an office that hands you over to somebody else.";

// ─────────────────────────────────────────────────────────────────────────────
// HOME — FAQs (feed both the accordion and the FAQPage schema)
// ─────────────────────────────────────────────────────────────────────────────
const faqHeading = "Questions About Trekking With Us";
const faqDescription =
  "What people usually want to know about Green Compass Treks before they book.";

const faqItems = [
  {
    question: "Who are Green Compass Treks?",
    answer:
      "Green Compass Treks is a trekking and tour operator based in Lakeside, Pokhara. We are part of the Big Sky Treks family — the government-registered Nepali company our founder and guides have worked under for years — and we run guided treks, peak climbs, cultural tours and day adventures across the Nepal Himalaya.",
  },
  {
    question: "Are you a registered and licensed trekking company?",
    answer:
      "Yes. We operate under Big Sky Treks, which is registered with the Government of Nepal and licensed through the Nepal Tourism Board (NTB) and the Trekking Agencies' Association of Nepal (TAAN). Our guides hold government trekking licences, and we arrange every permit your route requires.",
  },
  {
    question: "What is your relationship with Big Sky Treks?",
    answer:
      "Big Sky Treks is our parent company. It holds the registration, the licensing and a long-standing network in the mountains; Green Compass Treks is the name we run small-group and private trips under. In practice it means you get a small, attentive team with an established operator's paperwork and logistics behind it.",
  },
  {
    question: "Where is your office, and when are you open?",
    answer:
      `We are in Lakeside, Pokhara, about an hour from the Annapurna trailheads. The office is open Sunday to Friday, 9:00 AM to 9:00 PM Nepal time. You can reach us on ${PHONE}, on WhatsApp, or by email at ${EMAIL} — and we answer outside those hours too when one of our groups is on the trail.`,
  },
  {
    question: "How experienced are your guides and porters?",
    answer:
      "Our senior guide, Bhakti Ram Devkota, has more than twenty years of guiding behind him, and our senior porters Bishu Devkota and Durga Devkota have been carrying on these trails just as long. Rabi Poudel and Sankher Poudel work as guide-cum-porters, and our founder Bishow Devkota guides as well as running the company. Everyone is on our own payroll — we do not subcontract staff.",
  },
  {
    question: "Which regions of Nepal do you operate in?",
    answer:
      "We run trips across the Annapurna, Everest, Langtang, Manaslu, Mustang, Dolpo, Kanchenjunga, Makalu, Rolwaling and Dhaulagiri regions, plus cultural and heritage tours, jungle safaris, helicopter flights and day adventures around Pokhara and Kathmandu. Pokhara and the Annapurna region are where we are strongest, because it is home.",
  },
  {
    question: "What does the price of a trek include?",
    answer:
      "Every trek page lists exactly what its price covers and what it does not — typically permits, teahouse accommodation on the trail, the meals stated in the itinerary, ground transport, and the wages, insurance and equipment of your guide and porter. International flights, your Nepal visa, travel insurance, tips and personal gear are normally excluded, and they are named on the page rather than left for you to discover later.",
  },
  {
    question: "Why are your packages cheaper than other companies?",
    answer:
      "Because your booking is not passed down a chain of agents. We hold the permits, book the lodges and run the transport ourselves, so the margin a reseller would add simply is not in the quote. The saving comes out of the middlemen — not out of your guide's wage, your porter's insurance, or the standard of the lodges we use.",
  },
  {
    question: "How do I book a trek, and how much do I pay up front?",
    answer:
      "Pick a trek and your dates on this site and book online, or message us with what you have in mind and we will build the itinerary first. A 10% advance confirms your place, your dates and your guide, and you can pay it by card through our secure checkout or by bank transfer. The balance is settled in Nepal before you set off, and you get everything in writing by email before anything is final.",
  },
  {
    question: "Can you customise a trek or arrange a private departure?",
    answer:
      "Yes, and most of our trips run that way. Tell us how many days you have, how hard you want to walk, what standard of lodge you want and roughly what you want to spend, and we will build the route around it. Solo travellers, families and groups who want a guide to themselves are all normal for us.",
  },
  {
    question: "Do I need a guide, and do you arrange the permits?",
    answer:
      "Nepal requires most foreign trekkers on the main routes to walk with a licensed guide, and restricted areas such as Upper Mustang, Manaslu and Dolpo need permits that only a registered agency can obtain. We handle that paperwork as part of the trip — TIMS cards, national park and conservation area permits, and restricted-area permits.",
  },
  {
    question: "Is it safe to trek with you as a solo or first-time trekker?",
    answer:
      "Yes. A good share of our trekkers come alone, and many have never been at altitude before. Groups stay small, itineraries are paced for acclimatisation rather than speed, your guide is first-aid trained and carries a phone with local coverage — and we will tell you honestly if a route you are looking at is beyond what you have trained for.",
  },
  {
    question: "What happens if I need to change my dates or cancel?",
    answer:
      "Talk to us as early as you can. Dates can usually be moved without penalty while there is still time to release lodges and reassign staff. Cancellation terms depend on how close to departure you are and what has already been paid out for permits and bookings, and we set those terms out in writing when you book, so there is nothing to discover later.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HOME / CONTACT — contact block
// Card titles are the keys the contact page's icon map looks up; don't rename.
// ─────────────────────────────────────────────────────────────────────────────
const contactHeading = "Get in Touch";
const contactDescription =
  "Tell us the dates you have in mind and roughly what you want out of the trek — one of our guides will reply, usually within 24 hours.";

const contactInfoCards = [
  { icon: "Mail", title: "Email Us", description: EMAIL },
  { icon: "Phone", title: "Call Us", description: PHONE },
  { icon: "MapPin", title: "Office", description: ADDRESS },
  { icon: "Clock", title: "Office Hours", description: OFFICE_HOURS },
];

// ─────────────────────────────────────────────────────────────────────────────
// BLOG — hero
// ─────────────────────────────────────────────────────────────────────────────
const blogHeroDescription =
  "Practical guides to trekking in Nepal — permits, costs, seasons, altitude and packing — written by the guides who walk these trails.";
const blogHeroImage = "mardi-treks/ruzwqzqbrckh3a7mkse6";

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT — company story
// CompanyStory renders TEXT and splits on blank lines, so markup here would be
// shown to visitors as literal "<p>" tags. Plain paragraphs only.
// ─────────────────────────────────────────────────────────────────────────────
const companyStoryDescription = [
  "Green Compass Treks was registered in Pokhara in 2026, but almost none of it started that year. The guides and porters who make up the team have been working Nepal's trails for as long as two decades, most of them under Big Sky Treks — the government-registered company that is still our parent today. Green Compass Treks is what happened when that team decided to run trips under its own name, at its own pace.",
  "We are based in Lakeside, Pokhara, about an hour from the Annapurna trailheads, and we are deliberately small. There is no call centre and no chain of agents: the person who answers your first email is one of the people who will be on the mountain with you. We run guided treks, peak climbs, cultural tours and short adventures across the Annapurna, Everest, Langtang, Manaslu, Mustang, Dolpo and Kanchenjunga regions.",
  "Staying small is also how we keep the price down. We hold our own permits, book the lodges ourselves and run our own transport, so the margin a reseller would add is simply not in the quote. What we will not cut is the part that matters: porters are insured, weight-limited and properly equipped, guides are paid a fair wage, and itineraries are built around acclimatisation rather than around the shortest schedule that will fit in a brochure.",
  "That is the whole idea, really — the Himalaya walked properly, by people who live at the foot of it, at a price that is exactly what it says it is.",
].join("\n\n");

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT — timeline (the owner's single entry)
// ─────────────────────────────────────────────────────────────────────────────
const timelineEvents = [
  {
    year: "2026",
    title: "Green Compass Treks is founded",
    description:
      "Bishow Devkota registers Green Compass Treks in Lakeside, Pokhara, bringing together the guides and porters he had already spent years on the trail with under Big Sky Treks. The company starts as it means to continue — Nepali-owned, deliberately small, honestly priced, and built around fair pay for the people carrying the loads.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT — Responsible Tourism (6)
// Icons must exist in components/about/Commitment.tsx's iconMap.
// ─────────────────────────────────────────────────────────────────────────────
const commitmentItems = [
  {
    icon: "Leaf",
    title: "Leave No Trace",
    description:
      "We carry out what we carry in, including the packaging that high teahouses have no way of disposing of. Groups are briefed before they set off, and our guides pick up what others have left behind.",
  },
  {
    icon: "ShieldCheck",
    title: "Fair Wages, Insurance and Kit",
    description:
      "Every guide and porter with us is on our payroll, insured for altitude and accident, and equipped with boots, jackets and sleeping gear rated for where we are going. Loads are kept within recognised weight limits.",
  },
  {
    icon: "HeartHandshake",
    title: "Money That Stays in the Valleys",
    description:
      "We sleep in family-run teahouses and buy food where it is grown. Keeping that spending in the villages we walk through is the most direct way a trek is worth something to the people who live there.",
  },
  {
    icon: "Users",
    title: "Small Groups",
    description:
      "Small groups tread more lightly, fill fewer beds in villages that only have a handful, and let a guide keep a proper eye on how every trekker is handling the altitude.",
  },
  {
    icon: "Recycle",
    title: "Refill Rather Than Buy",
    description:
      "Bottled water is the single biggest source of plastic on Nepal's popular routes. We ask trekkers to bring a refillable bottle and supply treated water on the trail instead of stopping to buy plastic at every village.",
  },
  {
    icon: "Mountain",
    title: "Looking After the Trails",
    description:
      "The routes we sell are the routes we depend on. Our team reports damaged sections and joins local trail repair and clean-up work in the areas we walk most often.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT — How to Book (the owner's 6 steps)
// Icons must exist in components/about/ProcessSteps.tsx's iconMap.
// ─────────────────────────────────────────────────────────────────────────────
const processSteps = [
  {
    step: "01",
    icon: "Search",
    title: "Find Us",
    description:
      "Through a search, a recommendation, or one of our guides' returning trekkers. Everything we run is listed on this site, with real itineraries and real prices.",
  },
  {
    step: "02",
    icon: "MousePointerClick",
    title: "Choose the Adventure You Like",
    description:
      "Browse treks, tours, peak climbs and short adventures. Filter by region, duration and difficulty until something fits the time you actually have.",
  },
  {
    step: "03",
    icon: "FileText",
    title: "See the Detail",
    description:
      "Open the trip and read it properly — day-by-day itinerary, altitude profile, route map, and what the price does and does not include. Ask us about anything that is not clear.",
  },
  {
    step: "04",
    icon: "ClipboardCheck",
    title: "Book a Trek If You Like",
    description:
      "Pick your dates and book online, or send us your plan and we will build a private itinerary first. Either way you get written confirmation from the team before anything is fixed.",
  },
  {
    step: "05",
    icon: "CreditCard",
    title: "Pay the Advance",
    description:
      "A 10% advance holds your place, your dates and your guide. Pay securely by card or by bank transfer; the balance is settled in Nepal before you set off.",
  },
  {
    step: "06",
    icon: "Backpack",
    title: "Your Trek Is Booked",
    description:
      "That is it. Permits, lodges and staff are arranged from our side, and you get your packing list, your arrival details and your guide's number. We will see you in Pokhara.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT — team
// Ordered founder → guide → guide-cum-porter → porter, as the owner asked.
// Experience is derived from startYear at render time so the numbers stay
// current; these are set to match the years the owner gave.
// Photos are deliberately left empty — the owner is adding them.
// ─────────────────────────────────────────────────────────────────────────────
const teamMembers = [
  {
    name: "Bishow Devkota",
    slug: "bishow-devkota",
    role: "Founder & Guide",
    startYear: "2023",
    label: "Founder",
    shortBio:
      "Founded Green Compass Treks and still guides on the trail, with three years leading treks across the Annapurna region and beyond.",
    bio: "<p>Bishow Devkota founded Green Compass Treks in Pokhara, and still guides rather than running the company from behind a desk. Three years of leading treks across the Annapurna region and beyond shape how the company works: small groups, honest pricing, and itineraries paced for the altitude rather than for the calendar.</p><p>If you book with Green Compass Treks there is a good chance Bishow is the one who answers your first email — and a fair chance he is the one who meets you in Pokhara.</p>",
  },
  {
    name: "Bhakti Ram Devkota",
    slug: "bhakti-ram-devkota",
    role: "Senior Guide",
    startYear: "2006",
    label: "Senior Guide",
    shortBio:
      "More than twenty years guiding in the Nepal Himalaya, and the guide we send on the routes that ask the most of a group.",
    bio: "<p>Bhakti Ram Devkota has been guiding in the Nepal Himalaya for more than twenty years, which covers most of the routes Green Compass Treks runs and a great deal of weather besides.</p><p>He is the guide we send on the trips that ask the most of a group — the long crossings, the high passes, the itineraries where reading the conditions matters more than keeping to the plan. Trekkers tend to remember his pace: unhurried, and always arriving.</p>",
  },
  {
    name: "Rabi Poudel",
    slug: "rabi-poudel",
    role: "Guide cum Porter",
    startYear: "2021",
    label: "Guide & Porter",
    shortBio:
      "Five years on the trail as both guide and porter, and the steady presence at the back of the group on a long day.",
    bio: "<p>Rabi Poudel has five years behind him across the regions Green Compass Treks works in, carrying loads and leading groups in roughly equal measure.</p><p>On a long climb towards a pass he is usually the one at the back, keeping pace with whoever is finding it hardest. It is quiet work, and it is a large part of why the rest of the trek runs smoothly.</p>",
  },
  {
    name: "Sankher Poudel",
    slug: "sankher-poudel",
    role: "Guide cum Porter",
    startYear: "2023",
    label: "Guide & Porter",
    shortBio:
      "Three years guiding and carrying across the Annapurna region, and the one who knows which teahouse still has beds.",
    bio: "<p>Sankher Poudel works as both guide and porter, with three years across the Annapurna region and the routes around Pokhara.</p><p>He learned the job the way most good guides in Nepal do — carrying first, leading second — and he is usually the one who knows which teahouse still has beds when a village fills up in high season.</p>",
  },
  {
    name: "Bishu Devkota",
    slug: "bishu-devkota",
    role: "Senior Porter",
    startYear: "2006",
    label: "Senior Porter",
    shortBio:
      "Twenty years of carrying on Nepal's trails, and a working knowledge of the teahouses and shortcuts that no map records.",
    bio: "<p>Bishu Devkota has spent twenty years carrying on Nepal's trails. That is two decades of learning which teahouse has room in high season, which side of the valley stays out of the afternoon wind, and how far a group can really go on its second day.</p><p>Porters are the reason a trek works at all, and Bishu has been doing it for longer than most guides have been guiding.</p>",
  },
  {
    name: "Durga Devkota",
    slug: "durga-devkota",
    role: "Senior Porter",
    startYear: "2006",
    label: "Senior Porter",
    shortBio:
      "Two decades of carrying in the Himalaya, on the high passes and long approaches where it matters most.",
    bio: "<p>Durga Devkota has been carrying in the Nepal Himalaya for over twenty years, on the high passes and the long approach days where a strong porter changes what a group is able to do.</p><p>He works mostly on our longer itineraries — Manaslu, Kanchenjunga, the crossings that take weeks rather than days — and he has walked them enough times to know exactly how much daylight is left.</p>",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// Badges without an uploaded logo now render as a name pill (see Footer.tsx),
// so naming them here is enough to get them on the page; the owner can drop
// artwork in later from the admin without touching this content again.
// ─────────────────────────────────────────────────────────────────────────────
const socialLinks = [
  { platform: "facebook", url: "https://www.facebook.com/Bigskytreks" },
  { platform: "instagram", url: "https://www.instagram.com/bigskytreks/" },
  { platform: "youtube", url: "https://www.youtube.com/@bigskytreks" },
];

const recommendedOn = [
  { name: "Google", src: "" },
  { name: "TripAdvisor", src: "" },
];

async function main() {
  const settings = await prisma.siteSetting.findUnique({ where: { id: "site-settings" } });
  if (!settings) throw new Error("site-settings row not found");

  const pc = JSON.parse(settings.pageContent || "{}");

  // ── pageContent.home ─────────────────────────────────────────────────────
  pc.home = pc.home || {};
  pc.home.whyChooseUs = {
    ...(pc.home.whyChooseUs || {}),
    heading: "Why Trek With Us?",
    subtitle: "Discover the Difference",
    items: whyChooseUsItems,
  };
  pc.home.aboutUs = {
    ...(pc.home.aboutUs || {}),
    enabled: true,
    heading: homeAboutHeading,
    subheading: homeAboutSubheading,
    quote: homeAboutQuote,
    stats: homeAboutStats,
    content: homeAboutContent,
  };
  pc.home.faq = {
    ...(pc.home.faq || {}),
    enabled: true,
    heading: faqHeading,
    description: faqDescription,
    items: faqItems,
  };
  pc.home.contact = {
    ...(pc.home.contact || {}),
    heading: contactHeading,
    description: contactDescription,
    infoCards: contactInfoCards,
  };

  // ── pageContent.contact ──────────────────────────────────────────────────
  pc.contact = pc.contact || {};
  pc.contact.infoCards = contactInfoCards;

  // ── pageContent.blog ─────────────────────────────────────────────────────
  pc.blog = pc.blog || {};
  pc.blog.hero = {
    ...(pc.blog.hero || {}),
    heading: pc.blog.hero?.heading || "Our Blog",
    description: blogHeroDescription,
    backgroundImage: blogHeroImage,
  };

  // ── pageContent.about ────────────────────────────────────────────────────
  pc.about = pc.about || {};
  pc.about.companyStory = {
    ...(pc.about.companyStory || {}),
    badge: "Our Story",
    heading: "Our Story",
    description: companyStoryDescription,
  };
  pc.about.timeline = {
    ...(pc.about.timeline || {}),
    badge: pc.about.timeline?.badge || "Our Journey",
    heading: "Company Timeline",
    events: timelineEvents,
  };
  pc.about.commitment = {
    ...(pc.about.commitment || {}),
    badge: "Responsible Tourism",
    heading: "Commitment to Responsible Tourism",
    items: commitmentItems,
  };
  pc.about.process = {
    ...(pc.about.process || {}),
    badge: "How it works",
    heading: "How to Book",
    steps: processSteps,
  };
  pc.about.team = {
    ...(pc.about.team || {}),
    badge: "Our Team",
    heading: "The People You Will Be Walking With",
    members: teamMembers.map((m) => ({
      name: m.name,
      slug: m.slug,
      role: m.role,
      startYear: m.startYear,
      label: m.label,
      // Keep any photo already attached to this person.
      image: (pc.about.team?.members || []).find((e: any) => e.slug === m.slug)?.image || "",
    })),
  };

  // ── pageContent.footer ───────────────────────────────────────────────────
  pc.footer = pc.footer || {};
  const existingPartners: { name: string; src: string }[] = pc.footer.partners || [];
  // The one logo already uploaded is the NTB mark; carry its image across.
  const ntbSrc = existingPartners.find((p) => /ntb|tourism/i.test(p.name))?.src || "";
  pc.footer = {
    ...pc.footer,
    phone: PHONE,
    email: EMAIL,
    address: ADDRESS,
    trustedBadge: "Trusted & Certified",
    associatedHeading: "Licensed & Certified By",
    partners: [
      { name: "Nepal Tourism Board", src: ntbSrc },
      { name: "TAAN", src: "" },
      { name: "Government of Nepal", src: "" },
    ],
    recommendedLabel: "Recommended On:",
    recommendedOn,
    followUsLabel: "Follow Us On:",
    socialLinks,
    representative: {
      ...(pc.footer.representative || {}),
      phone: PHONE,
      title: "Trip Consultant", // was stored as "Trip Concultant"
      // wa.me needs bare digits — the stored "9777 9864379436" produced a dead link.
      whatsapp: WHATSAPP,
    },
  };

  const homeSettings = await prisma.homePageSettings.findFirst();
  const staleTeam = await prisma.teamMember.findMany({
    where: { slug: { notIn: teamMembers.map((m) => m.slug) } },
    select: { slug: true, name: true },
  });

  // ── report ───────────────────────────────────────────────────────────────
  console.log(`\n${APPLY ? "APPLYING" : "DRY RUN"} — site content\n`);
  console.log(`  home.whyChooseUs.items      → ${whyChooseUsItems.length} cards`);
  console.log(`  home.aboutUs.content        → ${homeAboutContent.length} blocks (parent company, difference, pricing)`);
  console.log(`  home.aboutUs.stats          → ${homeAboutStats.map((s) => `${s.value} ${s.label}`).join(", ")}`);
  console.log(`  home.faq.items              → ${faqItems.length} questions`);
  console.log(`  home.contact.description    → was "${homeSettings?.contactDescription}", now real copy`);
  console.log(`  contact info cards          → phone ${PHONE}, hours "${OFFICE_HOURS}"`);
  console.log(`  blog.hero                   → description + image ${blogHeroImage}`);
  console.log(`  about.companyStory          → ${companyStoryDescription.split("\n\n").length} plain paragraphs, no HTML`);
  console.log(`  about.timeline.events       → ${timelineEvents.length} entry (2026)`);
  console.log(`  about.commitment.items      → ${commitmentItems.length} commitments`);
  console.log(`  about.process.steps         → ${processSteps.length} steps`);
  console.log(`  about.team.members          → ${teamMembers.length} people (${teamMembers.map((m) => m.name.split(" ")[0]).join(", ")})`);
  console.log(`  footer.partners             → NTB${ntbSrc ? " (logo kept)" : ""}, TAAN, Government of Nepal`);
  console.log(`  footer.recommendedOn        → Google, TripAdvisor`);
  console.log(`  footer.socialLinks          → ${socialLinks.map((s) => s.platform).join(", ")}`);
  console.log(`  footer.phone / whatsapp     → ${PHONE} / wa.me/${WHATSAPP}`);
  console.log(`  footer.representative.title → "Trip Consultant" (was "Trip Concultant")`);
  console.log(`  TeamMember rows             → ${teamMembers.length} upserted (for /about/team/<slug>)`);
  if (staleTeam.length > 0) {
    console.log(`  TeamMember rows DELETED     → ${staleTeam.length}: ${staleTeam.map((t) => t.slug).join(", ")}`);
  }
  console.log(`\n  Untouched: mission & vision, founder message, hero images, SEO, map embed.`);
  if (!ntbSrc) console.log("  ! No NTB logo found in the existing partners — it will show as a name.");
  if (!homeSettings) console.log("  ! No homePageSettings row — the public Home/About pages would not pick this up.");
  console.log("");

  if (!APPLY) {
    console.log("Nothing written. Re-run with --apply to save.\n");
    return;
  }

  await prisma.siteSetting.update({
    where: { id: "site-settings" },
    data: { pageContent: JSON.stringify(pc) },
  });

  // The public Home and About pages read these columns, not pageContent.
  if (homeSettings) {
    await prisma.homePageSettings.update({
      where: { id: homeSettings.id },
      data: {
        whyChooseUsEnabled: true,
        whyChooseUsSubtitle: "Discover the Difference",
        whyChooseUsHeading: "Why Trek With Us?",
        whyChooseUsItems: JSON.stringify(whyChooseUsItems),
        homeAboutEnabled: true,
        homeAboutHeading,
        homeAboutSubheading,
        homeAboutContent: JSON.stringify(homeAboutContent),
        faqEnabled: true,
        faqHeading,
        faqDescription,
        faqItems: JSON.stringify(faqItems),
        contactHeading,
        contactDescription,
        contactInfoCards: JSON.stringify(contactInfoCards),
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

  // Placeholder people (Rajesh Gurung, Maya Sherpa, …) are invented names on a
  // live site and still resolve at /about/team/<slug>; remove them outright.
  if (staleTeam.length > 0) {
    await prisma.teamMember.deleteMany({
      where: { slug: { notIn: teamMembers.map((m) => m.slug) } },
    });
  }

  // A direct Postgres write invalidates nothing by itself. Redis alone is not
  // enough either — the Home/About/Contact/Blog pages set `revalidate`, so
  // Next's own caches keep serving the old copy until they are dropped too.
  console.log("\nSaved. Now refresh every cache layer, or the site keeps serving the old copy:");
  console.log("  npm run cache:refresh                                  # local");
  console.log("  npx tsx scripts/refresh-site-cache.mts \\");
  console.log("    --revalidate-url https://greencompasstreks.com      # deployed");
  console.log("  (that script revalidates / and the trek pages — also revalidate");
  console.log("   /about, /contact and /blog, which this content touches.)\n");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
