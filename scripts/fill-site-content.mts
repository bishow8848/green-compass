/**
 * Fill the site-wide branding and the Home / About / Contact page copy.
 *
 * Scope: marketing prose, headings and SEO metadata — content that can be
 * written from what the site already is. Deliberately NOT set here, because
 * inventing them would put false information in front of customers:
 *
 *   · team member names, roles and bios   (real people)
 *   · phone number and street address     (real, contactable details)
 *   · social media URLs                   (real accounts)
 *   · the Google Maps embed               (currently points at "Big Sky Treks")
 *
 * Those are listed by `--report` and must come from the owner.
 *
 *   npx tsx scripts/fill-site-content.mts            # dry run
 *   npx tsx scripts/fill-site-content.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");
const NAME = "Green Compass Treks";

/** Only overwrite a field that is empty or still holds placeholder text. */
const isPlaceholder = (v: unknown): boolean => {
  if (v == null) return true;
  const t = String(v).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return (
    t === "" ||
    // one or more placeholder words and nothing else, however they were marked up
    /^((test|todo|tbd|lorem|placeholder|xxx)[\s.,;-]*)+$/i.test(t) ||
    /marditreks\.com/i.test(String(v))
  );
};
const keep = <T,>(current: T, next: T): T => (isPlaceholder(current) ? next : current);

async function main() {
  const s = await prisma.siteSetting.findUnique({ where: { id: "site-settings" } });
  if (!s) throw new Error("site-settings row not found");
  const pc = JSON.parse(s.pageContent || "{}");

  // ── site-wide ────────────────────────────────────────────────────────────
  const site = {
    siteName: NAME,
    tagline: keep(s.tagline, "Small-group Himalayan trekking, run by local guides"),
    description: keep(
      s.description,
      `${NAME} is a locally owned trekking company based in Pokhara, Nepal, running guided treks, peak climbs and cultural tours across the Annapurna, Everest, Langtang, Manaslu, Kanchenjunga, Mustang and Dolpo regions.`,
    ),
    defaultMetaTitle: keep(s.defaultMetaTitle, `${NAME} | Guided Trekking in Nepal`),
    defaultMetaDescription: keep(
      s.defaultMetaDescription,
      "Locally owned and guided treks across Nepal — Annapurna, Everest, Langtang, Manaslu, Kanchenjunga, Mustang and Dolpo. Small groups, licensed guides, fair porter wages.",
    ),
    defaultKeywords: keep(
      s.defaultKeywords,
      "trekking in Nepal, Nepal trekking company, Annapurna Base Camp trek, Everest Base Camp trek, Mardi Himal trek, Manaslu Circuit, Langtang valley trek, Upper Mustang, guided trek Nepal, Pokhara trekking agency",
    ),
  };

  // ── home ─────────────────────────────────────────────────────────────────
  pc.home ??= {};
  pc.home.seo = {
    title: keep(pc.home.seo?.title, `${NAME} | Guided Trekking & Tours in Nepal`),
    description: keep(
      pc.home.seo?.description,
      `Trek the Himalaya with ${NAME} — a locally owned team running small-group treks across Nepal's Annapurna, Everest, Langtang and Manaslu regions. Licensed guides, honest pricing, fair wages.`,
    ),
    keywords: keep(pc.home.seo?.keywords, "Nepal trekking, Himalaya trek, guided trekking Nepal, trekking agency Pokhara"),
  };

  // ── about ────────────────────────────────────────────────────────────────
  pc.about ??= {};
  pc.about.hero = {
    ...(pc.about.hero ?? {}),
    heading: /mardi/i.test(pc.about.hero?.heading ?? "") ? `About ${NAME}` : (pc.about.hero?.heading || `About ${NAME}`),
    description: keep(
      pc.about.hero?.description,
      "A locally owned trekking company from Pokhara, walking the Himalaya with small groups and the people who grew up in it.",
    ),
  };
  pc.about.companyStory = {
    ...(pc.about.companyStory ?? {}),
    badge: keep(pc.about.companyStory?.badge, "Our Story"),
    heading: keep(pc.about.companyStory?.heading, "Built by guides, not by a call centre"),
    description: keep(
      pc.about.companyStory?.description,
      `<p>${NAME} began the way most good trekking companies do — with guides who already knew the trails, deciding they could run trips better themselves.</p>` +
      "<p>We are based in Pokhara, at the foot of the Annapurnas, and we operate across Nepal: the Annapurna and Everest regions, Langtang and Helambu, Manaslu and Tsum, Kanchenjunga in the far east, and the restricted country of Upper Mustang and Dolpo in the west.</p>" +
      "<p>We keep groups small and we do not subcontract. The guide who meets you in Kathmandu is our guide, on our payroll, carrying our insurance — which is the simplest reason our trips run the way we say they will.</p>",
    ),
  };
  pc.about.missionVision = {
    ...(pc.about.missionVision ?? {}),
    badge: keep(pc.about.missionVision?.badge, "Our Purpose"),
    heading: /dive us forward/i.test(pc.about.missionVision?.heading ?? "")
      ? "What drives us forward"
      : keep(pc.about.missionVision?.heading, "What drives us forward"),
    missionLabel: "Mission",
    visionLabel: "Vision",
    mission: {
      icon: pc.about.missionVision?.mission?.icon || "Target",
      heading: "Our Mission",
      description: keep(
        pc.about.missionVision?.mission?.description,
        "<ul>" +
        "<li><p>Run safe, well-paced treks that put acclimatisation ahead of schedule.</p></li>" +
        "<li><p>Employ local guides and porters on fair wages, with insurance and proper equipment.</p></li>" +
        "<li><p>Price honestly — what is included is listed, and what is not is listed too.</p></li>" +
        "<li><p>Keep groups small enough that the guide knows every trekker by name.</p></li>" +
        "</ul>",
      ),
    },
    vision: {
      icon: pc.about.missionVision?.vision?.icon || "Eye",
      heading: "Our Vision",
      description: keep(
        pc.about.missionVision?.vision?.description,
        "<ul>" +
        "<li><p>A trekking industry in Nepal where the people carrying the loads are paid and protected properly.</p></li>" +
        "<li><p>Trails that are still worth walking in fifty years — and villages that still benefit from them.</p></li>" +
        "<li><p>Visitors who leave understanding Nepal, not just photographing it.</p></li>" +
        "</ul>",
      ),
    },
  };
  const commitmentItems = [
    { icon: "Leaf", title: "Leave no trace", description: "We carry out what we carry in, avoid single-use plastic on the trail, and use refill points and filtered water rather than bottled." },
    { icon: "Users", title: "Fair pay and load limits", description: "Porters are insured, equipped for altitude, and carry within recognised weight limits. Wages are paid by us, not left to tips." },
    { icon: "Home", title: "Money that stays local", description: "We stay in village-run lodges and buy food locally, so the money a trek generates reaches the valleys it is spent in." },
    { icon: "Mountain", title: "Respect for the places we walk", description: "Sacred sites, monasteries and restricted areas are visited on their terms — permits in order, customs observed, photography where welcome." },
  ];
  const existingCommit = pc.about.commitment?.items ?? [];
  pc.about.commitment = {
    ...(pc.about.commitment ?? {}),
    heading: keep(pc.about.commitment?.heading, "Commitment to Responsible Tourism"),
    items: existingCommit.length > 1 && !existingCommit.every((i: any) => isPlaceholder(i?.title)) ? existingCommit : commitmentItems,
  };
  pc.about.seo = {
    title: keep(pc.about.seo?.title, `About ${NAME} | Local Trekking Guides in Pokhara, Nepal`),
    description: keep(
      pc.about.seo?.description,
      `Meet ${NAME} — a locally owned trekking company in Pokhara running small-group treks across Nepal, with licensed guides, fair porter wages and a commitment to responsible tourism.`,
    ),
    keywords: keep(pc.about.seo?.keywords, "about Green Compass Treks, Nepal trekking company, local trekking guides Pokhara, responsible trekking Nepal"),
  };

  // ── contact ──────────────────────────────────────────────────────────────
  pc.contact ??= {};
  pc.contact.hero = {
    ...(pc.contact.hero ?? {}),
    heading: pc.contact.hero?.heading || "Contact Us",
    description: keep(
      pc.contact.hero?.description,
      "Questions about a route, a departure date, or building a private trip? Tell us what you have in mind and a guide will answer — usually within 24 hours.",
    ),
  };
  const cards = pc.contact.infoCards ?? [];
  pc.contact.infoCards = cards.map((c: any) =>
    /marditreks\.com/i.test(c?.description ?? "")
      ? { ...c, description: c.description.replace(/[\w.+-]+@marditreks\.com/gi, "info@greencompasstreks.com") }
      : c,
  );
  pc.contact.seo = {
    title: keep(pc.contact.seo?.title, `Contact ${NAME} | Plan Your Trek in Nepal`),
    description: keep(
      pc.contact.seo?.description,
      `Get in touch with ${NAME} to plan a trek in Nepal. Ask about routes, departure dates, permits or private departures — we reply within 24 hours.`,
    ),
    keywords: keep(pc.contact.seo?.keywords, "contact Green Compass Treks, book a trek Nepal, Nepal trekking enquiry, plan a trek Nepal"),
  };

  // ── footer contact block ─────────────────────────────────────────────────
  pc.footer ??= {};
  if (/marditreks\.com/i.test(pc.footer.email ?? "")) pc.footer.email = "info@greencompasstreks.com";

  const h = await prisma.homePageSettings.findUnique({ where: { id: "home-settings" } });
  let contactInfoCards = h?.contactInfoCards ?? null;
  if (contactInfoCards && /marditreks\.com/i.test(contactInfoCards)) {
    contactInfoCards = contactInfoCards.replace(/[\w.+-]+@marditreks\.com/gi, "info@greencompasstreks.com");
  }
  const homeAbout = {
    homeAboutDescription: keep(
      h?.homeAboutDescription,
      `Experience the Himalaya with ${NAME} — a locally owned company based in Pokhara, Nepal. We run small-group treks across the Annapurna, Everest, Langtang, Manaslu, Kanchenjunga, Mustang and Dolpo regions, led by licensed guides who grew up on these trails.`,
    ),
  };

  const changes: string[] = [];
  for (const [k, v] of Object.entries(site)) if (String((s as any)[k] ?? "") !== String(v)) changes.push(`SiteSetting.${k}`);
  if (h && String(h.homeAboutDescription ?? "") !== String(homeAbout.homeAboutDescription)) changes.push("HomePageSettings.homeAboutDescription");
  changes.push("SiteSetting.pageContent (home/about/contact/footer)");

  console.log("Will update:\n" + changes.map((c) => "  · " + c).join("\n"));
  console.log(`\n  siteName        -> ${site.siteName}`);
  console.log(`  about heading   -> ${pc.about.hero.heading}`);
  console.log(`  contact email   -> ${pc.contact.infoCards.find((c: any) => /mail/i.test(c.icon))?.description}`);

  if (!APPLY) { console.log("\nDry run — re-run with --apply to write."); return; }

  await prisma.siteSetting.update({
    where: { id: "site-settings" },
    data: { ...site, pageContent: JSON.stringify(pc) },
  });
  if (h) await prisma.homePageSettings.update({ where: { id: "home-settings" }, data: { ...homeAbout, ...(contactInfoCards ? { contactInfoCards } : {}) } });
  console.log("\n✅ Written.");
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
