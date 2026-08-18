import type { Metadata } from "next";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import dynamic from "next/dynamic";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Mountain, Shield, Heart, Award, Globe, Users, Clock } from "lucide-react";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AboutUsSection } from "@/components/home/AboutUsSection";
import GallerySection from "@/components/trek/GallerySection";
import { PageHero } from "@/components/layout/PageHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { MissionVision } from "@/components/about/MissionVision";
import { Commitment } from "@/components/about/Commitment";
import { Timeline } from "@/components/about/Timeline";
import { ProcessSteps } from "@/components/about/ProcessSteps";
import { FounderMessage } from "@/components/about/FounderMessage";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { SITE_URL, seoImageUrl } from "@/lib/seo";

const ReviewCarousel = dynamic(
  () => import("@/components/home/ReviewCarousel").then((m) => ({ default: m.ReviewCarousel })),
  {
    loading: () => <div className="min-h-[520px] bg-background sm:min-h-[580px]" aria-hidden="true" />,
  }
);

const ContactFormSection = dynamic(
  () => import("@/components/home/ContactFormSection").then((m) => ({ default: m.ContactFormSection })),
  {
    loading: () => <div className="min-h-[900px] bg-background sm:min-h-[760px] lg:min-h-[620px]" aria-hidden="true" />,
  }
);

// About content is cached for 7 days and refreshed on-demand after CMS edits (revalidatePath)
export const revalidate = 604800;

async function getPageContent() {
  return getCachedOrFetch<Record<string, any> | null>(
    cacheKeys.pageContent,
    async () => {
      const settings = await prisma.siteSetting.findUnique({
        where: { id: "site-settings" },
        select: { pageContent: true },
      });
      if (!settings?.pageContent) return null;
      try { return JSON.parse(settings.pageContent); } catch { return null; }
    },
    CACHE_TTL.DAILY
  );
}

const iconMap: Record<string, any> = { Shield, Heart, Award, Globe, Users, Mountain };

// Calculate years of experience from the year a team member started working.
// Returns "" when startYear is missing/invalid so we can fall back to a stored value.
function computeExperienceYears(startYear?: string | number): string {
  const year = Number(startYear);
  const currentYear = new Date().getFullYear();
  if (!year || Number.isNaN(year) || year < 1900 || year > currentYear) return "";
  return String(currentYear - year);
}

export async function generateMetadata(): Promise<Metadata> {
  const pc = await getPageContent();
  const about = pc?.about;
  const seo = about?.seo;
  const heroImage = seoImageUrl(about?.hero?.backgroundImage);
  return {
    title: seo?.title || "About Us",
    description: seo?.description || "Learn about Mardi Treks — Nepal's premier trekking and tour agency.",
    keywords: seo?.keywords || undefined,
    alternates: { canonical: `${SITE_URL}/about` },
    openGraph: {
      title: seo?.title || "About Us",
      description: seo?.description || "Learn about Mardi Treks — Nepal's premier trekking and tour agency.",
      url: `${SITE_URL}/about`,
      siteName: "Mardi Treks",
      locale: "en_US",
      type: "website",
      images: heroImage ? [{ url: heroImage, width: 1200, height: 630, alt: "About Mardi Treks" }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.title || "About Us",
      description: seo?.description || "Learn about Mardi Treks — Nepal's premier trekking and tour agency.",
      images: heroImage ? [heroImage] : undefined,
    },
  };
}

export default async function AboutPage() {
  // Fetch independent data in parallel
  const [pc, homeSettings, allTreksForSearch, latestReviews] = await Promise.all([
    getPageContent(),
    getCachedOrFetch(
      cacheKeys.homeSettings,
      () => prisma.homePageSettings.findUnique({ where: { id: "home-settings" } }),
      CACHE_TTL.DAILY
    ),
    getCachedOrFetch(
      cacheKeys.searchTreks,
      () => prisma.trek.findMany({
        where: { status: "published" },
        select: { id: true, title: true, slug: true, heroImage: true, region: true, difficulty: true, duration: true, category: { select: { slug: true } } },
        orderBy: { title: "asc" },
      }),
      CACHE_TTL.DAILY
    ),
    getCachedOrFetch(
      cacheKeys.latestReviews,
      () => prisma.trekReview.findMany({
        where: { approved: true },
        orderBy: { createdAt: "desc" },
        take: 9,
        include: { trek: { select: { title: true, slug: true, category: { select: { slug: true } } } } },
      }),
      CACHE_TTL.DAILY
    ),
  ]);

  const about = pc?.about || {};
  const hero = about.hero || {};
  const sections = about.sections || [];
  const team = about.team || [];
  const gallery = about.gallery || [];

  // New about section data
  const companyStory = about.companyStory || {};
  const missionVision = about.missionVision || {};
  const commitment = about.commitment || {};
  const timeline = about.timeline || {};
  const process = about.process || {};
  const founder = about.founder || {};

  // Home section settings (reused on about page)
  const hs = homeSettings as any;

  const whyChooseUsEnabled = hs?.whyChooseUsEnabled ?? true;
  const whyChooseUsHeading = hs?.whyChooseUsHeading;
  const whyChooseUsSubtitle = hs?.whyChooseUsSubtitle;
  const whyChooseUsItems = hs?.whyChooseUsItems
    ? JSON.parse(hs.whyChooseUsItems)
    : null;
  const whyChooseUsBgImage = hs?.whyChooseUsBgImage;

  // About Us / Who We Are (same data as home page)
  const homeAboutEnabled = hs?.homeAboutEnabled ?? true;
  const homeAboutHeading = hs?.homeAboutHeading;
  const homeAboutSubheading = hs?.homeAboutSubheading;
  const homeAboutImage = hs?.homeAboutImage || pc?.home?.aboutUs?.image || hero.backgroundImage;
  const homeAboutContent = hs?.homeAboutContent
    ? JSON.parse(hs.homeAboutContent)
    : null;
  const homeAboutData = pc?.home?.aboutUs || {};
  const homeAboutTrekId = homeAboutData.trekId || "";
  const homeAboutTrek = homeAboutTrekId
    ? (allTreksForSearch as any[]).find((t: any) => t.id === homeAboutTrekId)
    : (allTreksForSearch as any[]).find((t: any) => t.heroImage) || null;
  const homeAboutQuote = homeAboutData.quote || null;
  const homeAboutStats = homeAboutData.stats || null;
  const homeAboutPrimaryCta = homeAboutData.primaryCta || null;
  const homeAboutSecondaryCta = homeAboutData.secondaryCta || null;

  // Reviews heading/description
  const reviewsHeading = hs?.reviewsHeading;
  const reviewsDescription = hs?.reviewsDescription;

  // Contact section (reuses Home page settings)
  const contactHeading = hs?.contactHeading;
  const contactDescription = hs?.contactDescription;
  const contactInfoCards: { title: string; description: string }[] = hs?.contactInfoCards
    ? JSON.parse(hs.contactInfoCards)
    : [];

  // Only show CMS-managed team members
  const teamBadge = team.badge || "Our Team";
  const teamHeading = team.heading || "Meet the Experts";
  const teamMembers: any[] = (team.members || (Array.isArray(team) ? team : [])).map((m: any) => ({
    name: m.name,
    slug: m.slug || m.name.toLowerCase().replace(/\s+/g, "-"),
    role: m.role,
    image: m.image || "",
    // Derive experience from start year when available (keeps it current each year);
    // otherwise fall back to the legacy stored value.
    experience: computeExperienceYears(m.startYear) || m.experience || "",
    label: m.label || "",
  }));

  return (
    <div className="overflow-x-clip">
      {/* BreadcrumbList + AboutPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/about` },
                ],
              },
              {
                "@type": "AboutPage",
                "@id": `${SITE_URL}/about#page`,
                name: "About Mardi Treks",
                description: "Learn about Mardi Treks — Nepal's premier trekking and tour agency.",
                isPartOf: { "@id": `${SITE_URL}/#website` },
              },
            ],
          }),
        }}
      />

      <PageHero
        heading={hero.heading || "About Mardi Treks"}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
        treks={allTreksForSearch}
        breadcrumbLabel="About Us"
      />

      {/* ── Custom Sections (from About tab in Page Manager) ── */}
      {sections.map((sec: any, i: number) => (
        <section key={sec.id || i} className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-3 sm:px-4 lg:px-6">
            {sec.heading && <h2 className="text-2xl font-bold text-foreground">{sec.heading}</h2>}
            {sec.description && (
              <div className="mt-4 space-y-4 text-text leading-relaxed">
                <p>{sec.description}</p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ── Company Story ── */}
      <CompanyStory
        heading={companyStory.heading}
        description={companyStory.description}
        image={companyStory.image}
        badge={companyStory.badge}
        highlightLabel={companyStory.highlightLabel}
        highlightTitle={companyStory.highlightTitle}
      />

      {/* ── Mission & Vision ── */}
      <MissionVision
        badge={missionVision.badge}
        heading={missionVision.heading}
        missionLabel={missionVision.missionLabel}
        visionLabel={missionVision.visionLabel}
        mission={missionVision.mission}
        vision={missionVision.vision}
      />

      {/* ── About Us / Who We Are (reuses Home page data) ── */}
      <AboutUsSection
        enabled={homeAboutEnabled}
        heading={homeAboutHeading}
        subheading={homeAboutSubheading}
        image={homeAboutImage}
        content={homeAboutContent}
        trekTitle={homeAboutTrek?.title || null}
        trekHeroImage={homeAboutTrek?.heroImage || null}
        quote={homeAboutQuote}
        stats={homeAboutStats}
        primaryCta={homeAboutPrimaryCta}
        secondaryCta={homeAboutSecondaryCta}
      />

      {/* ── Why Choose Us (reuses Home page settings) ── */}
      {whyChooseUsEnabled && (
        <WhyChooseUs
          heading={whyChooseUsHeading || "Why Trek With Us?"}
          subtitle={whyChooseUsSubtitle || "Discover the Difference"}
          items={whyChooseUsItems || []}
          bgImage={whyChooseUsBgImage}
        />
      )}

      {/* ── Company Timeline ── */}
      <Timeline
        heading={timeline.heading}
        events={timeline.events}
        badge={timeline.badge}
      />

      {/* ── Our Commitment to Responsible Tourism ── */}
      <Commitment
        heading={commitment.heading}
        items={commitment.items}
        badge={commitment.badge}
      />

      {/* ── How to Book / Our Process ── */}
      <ProcessSteps
        heading={process.heading}
        steps={process.steps}
        badge={process.badge}
      />

      {/* ── Team ── */}
      {teamMembers.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-secondary" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                {teamBadge}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {teamHeading}
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member: any, i: number) => (
                <Link
                  key={i}
                  href={`/about/team/${member.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.25)]"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {member.image ? (
                      <Image
                        src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_500,h_375,q_auto,f_auto/${member.image}`}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                        <Users className="h-16 w-16 text-primary/40" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    {/* Role badge */}
                    <span className="mb-2 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {member.role}
                    </span>
                    <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">{member.name}</h3>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted">
                        <Clock className="h-3.5 w-3.5" />
                        {member.experience ? `${member.experience} Year${member.experience === "1" ? "" : "s"} Experience` : "1+ Year Experience"}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[0.08em] text-primary/70">{member.label || "Expert"}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Founder Message ── */}
      <FounderMessage
        heading={founder.heading}
        message={founder.message}
        founderName={founder.founderName}
        founderRole={founder.founderRole}
        founderImage={founder.founderImage}
        badge={founder.badge}
      />

      {/* ── Reviews Carousel (reuses Home page data) ── */}
      <ReviewCarousel
        reviews={JSON.parse(JSON.stringify(latestReviews))}
        heading={reviewsHeading}
        description={reviewsDescription}
      />

      {/* ── Gallery / Legal Documents ── */}
      {gallery.length > 0 && (
        <section className="bg-surface py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
            <GallerySection
              images={gallery}
              heading="Legal Documents"
              trekTitle="Mardi Treks"
              className="py-0"
            />
          </div>
        </section>
      )}

      {/* ── Contact Form ── */}
      <ContactFormSection
        heading={contactHeading}
        description={contactDescription}
        infoCards={contactInfoCards}
      />
    </div>
  );
}
