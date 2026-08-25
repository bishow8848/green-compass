import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { GreenCompassHero } from "@/components/home/GreenCompassHero";
import { FeaturedTreksSection } from "@/components/home/FeaturedTreksSection";
import { TopRatedTreks } from "@/components/home/TopRatedTreks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { LatestBlogPosts } from "@/components/home/LatestBlogPosts";
import { AboutUsSection } from "@/components/home/AboutUsSection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SITE_URL, brandedTitle, seoDescription, seoImageUrl, serializeJsonLd } from "@/lib/seo";
import { getPageContent, requirePageSection } from "@/lib/page-content";

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

// Home content is cached for 1 day and refreshed on-demand after CMS edits (revalidatePath)
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const [pageContent, settings] = await Promise.all([
    getPageContent(),
    getCachedOrFetch(
      cacheKeys.homeMetadata,
      () => prisma.homePageSettings.findUnique({
        where: { id: "home-settings" },
        select: { heroImage: true },
      }),
      CACHE_TTL.MODERATE
    ),
  ]);
  const home = requirePageSection<any>(pageContent, "home");
  const homeSeo: { title?: string; description?: string; keywords?: string } = home.seo || {};
  const seoTitle = homeSeo.title?.trim() || "Mardi Himal Trek & Nepal Trekking Tours";
  const socialTitle = brandedTitle(seoTitle).absolute;
  const seoDescriptionText = seoDescription(
    homeSeo.description,
    "Plan a guided Mardi Himal Trek from Pokhara and explore Nepal's Annapurna region with trusted local experts."
  );
  const heroImage = seoImageUrl(settings?.heroImage || home.hero?.backgroundImage);
  return {
    title: { absolute: socialTitle },
    description: seoDescriptionText,
    keywords:
      homeSeo.keywords ||
      "Mardi Himal Trek, Annapurna region trek, trekking company in Nepal, Pokhara trekking company, guided trekking in Nepal",
    alternates: { canonical: SITE_URL },
    openGraph: {
      title: socialTitle,
      description: seoDescriptionText,
      url: SITE_URL,
      type: "website",
      images: heroImage ? [{ url: heroImage, width: 1200, height: 630, alt: "Mardi Treks" }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: seoDescriptionText,
      images: heroImage ? [heroImage] : undefined,
    },
  };
}

export default async function HomePage() {
  const [settings, pageContent] = await Promise.all([
    getCachedOrFetch(
      cacheKeys.homeSettings,
      () => prisma.homePageSettings.findUnique({
        where: { id: "home-settings" },
      }),
      CACHE_TTL.MODERATE
    ),
    getPageContent(),
  ]);
  const homeContent = requirePageSection<any>(pageContent, "home");
  const homeSeo: { title?: string; description?: string } = homeContent.seo || {};
  const homepageTitle = homeSeo.title?.trim() || "Mardi Himal Trek & Nepal Trekking Tours";
  const homepageDescription = seoDescription(
    homeSeo.description,
    "Plan a guided Mardi Himal Trek from Pokhara and explore Nepal's Annapurna region with trusted local experts."
  );

  const featuredSectionIds: string[] = settings?.featuredSectionTrekIds
    ? JSON.parse(settings.featuredSectionTrekIds)
    : [];

  // Start every independent home-page read together. This removes the
  // cache/DB waterfall that previously delayed the initial response.
  const featuredSectionPromise = featuredSectionIds.length > 0
    ? getCachedOrFetch(
      cacheKeys.featuredSectionTreks,
      () => prisma.trek.findMany({
        where: { id: { in: featuredSectionIds }, status: "published" },
        select: {
          id: true, slug: true, title: true, heroImage: true, difficulty: true,
          duration: true, price: true,
          category: { select: { slug: true } },
          reviews: { where: { approved: true }, select: { rating: true } },
        },
      }),
      CACHE_TTL.MODERATE
    )
    : Promise.resolve([]);
  const searchTreksPromise = getCachedOrFetch(
    cacheKeys.searchTreks,
    () => prisma.trek.findMany({
      where: { status: "published" },
      select: { id: true, title: true, slug: true, heroImage: true, region: true, difficulty: true, duration: true, category: { select: { slug: true } } },
      orderBy: { title: "asc" },
    }),
    CACHE_TTL.MODERATE
  );

  // Build hero content for the GreenCompassHero
  // Priority: HomePageSettings table → pageContent JSON (Page Manager form) → fallback undefined
  const pageHero = homeContent.hero || {};
  const heroPrimaryCta = settings?.heroPrimaryCtaLabel
    ? { label: settings.heroPrimaryCtaLabel, href: settings.heroPrimaryCtaHref || "/search" }
    : undefined;
  const heroSecondaryCta = settings?.heroSecondaryCtaLabel
    ? { label: settings.heroSecondaryCtaLabel, href: settings.heroSecondaryCtaHref || "/blog" }
    : undefined;

  // Fetch latest approved reviews for the carousel
  const latestReviewsPromise = getCachedOrFetch(
    cacheKeys.latestReviews,
    () => prisma.trekReview.findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
      take: 9,
      include: { trek: { select: { title: true, slug: true, category: { select: { slug: true } } } } },
    }),
    CACHE_TTL.MODERATE
  );

  const [
    featuredSectionTreks,
    allTreksForSearch,
    latestReviews,
  ] = await Promise.all([
    featuredSectionPromise,
    searchTreksPromise,
    latestReviewsPromise,
  ]);

  featuredSectionTreks.sort((a, b) => featuredSectionIds.indexOf(a.id) - featuredSectionIds.indexOf(b.id));

  // Section content from settings
  const s = settings as any;
  const featuredTreksHeading = s?.featuredTreksHeading;
  const featuredTreksDescription = s?.featuredTreksDescription;
  const topRatedTreksHeading = s?.topRatedTreksHeading;
  const topRatedTreksDescription = s?.topRatedTreksDescription;
  const reviewsHeading = s?.reviewsHeading;
  const reviewsDescription = s?.reviewsDescription;
  const blogHeading = s?.blogHeading;
  const blogDescription = s?.blogDescription;

  // Contact section
  const contactHeading = s?.contactHeading;
  const contactDescription = s?.contactDescription;
  const contactInfoCards: { title: string; description: string }[] = s?.contactInfoCards
    ? JSON.parse(s.contactInfoCards)
    : [];

  // Why Choose Us
  const whyChooseUsEnabled = s?.whyChooseUsEnabled ?? true;
  const whyChooseUsSubtitle = s?.whyChooseUsSubtitle;
  const whyChooseUsHeading = s?.whyChooseUsHeading;
  const whyChooseUsItems = s?.whyChooseUsItems
    ? JSON.parse(s.whyChooseUsItems)
    : null;
  const whyChooseUsBgImage = s?.whyChooseUsBgImage;

  // About Us / Who We Are section
  // NOTE: this resolution must stay in sync with app/(marketing)/about/page.tsx —
  // both feed the SAME <AboutUsSection /> component, so the selected trek's
  // background image must resolve identically on both pages.
  const homeAboutEnabled = s?.homeAboutEnabled ?? true;
  const homeAboutHeading = s?.homeAboutHeading;
  const homeAboutSubheading = s?.homeAboutSubheading;
  const homeAboutImage =
    s?.homeAboutImage || (pageContent as any)?.home?.aboutUs?.image || pageHero.backgroundImage;
  const homeAboutContent = s?.homeAboutContent
    ? JSON.parse(s.homeAboutContent)
    : null;
  const homeAboutData = (pageContent as any)?.home?.aboutUs || {};
  const homeAboutTrekId = homeAboutData.trekId || "";
  const homeAboutTrek = homeAboutTrekId
    ? (allTreksForSearch as any[]).find((t: any) => t.id === homeAboutTrekId)
    : (allTreksForSearch as any[]).find((t: any) => t.heroImage) || null;
  const homeAboutQuote = homeAboutData.quote || null;
  const homeAboutStats = homeAboutData.stats || null;
  const homeAboutPrimaryCta = homeAboutData.primaryCta || null;
  const homeAboutSecondaryCta = homeAboutData.secondaryCta || null;

  // FAQ section
  const faqEnabled = s?.faqEnabled ?? true;
  const faqHeading = s?.faqHeading;
  const faqDescription = s?.faqDescription;
  const faqItems = s?.faqItems
    ? JSON.parse(s.faqItems)
    : null;
  const resolvedFaqs =
    faqItems && faqItems.length > 0
      ? faqItems
      : [
          {
            question: "How difficult is the Mardi Himal Trek?",
            answer:
              "The Mardi Himal Trek is generally considered a moderate trek. It requires several consecutive days of uphill and downhill walking and reaches high altitude, so good fitness, suitable equipment and a sensible itinerary are important.",
          },
          {
            question: "How many days does the Mardi Himal Trek take?",
            answer:
              "Most Mardi Himal Trek itineraries take between 5 and 9 days, depending on the starting point, walking pace, acclimatization schedule and whether the trip begins in Pokhara or includes travel from Kathmandu.",
          },
          {
            question: "What is the highest point of the Mardi Himal Trek?",
            answer:
              "The full route can reach Mardi Himal Base Camp at approximately 4,500 metres. Some itineraries finish at the upper viewpoint at approximately 4,200 metres.",
          },
          {
            question: "What is the best time for the Mardi Himal Trek?",
            answer:
              "Spring, from March to May, and autumn, from September to November, are the most popular seasons because they usually offer more stable trekking conditions and clearer mountain views.",
          },
          {
            question: "Where does the Mardi Himal Trek start?",
            answer:
              "Mardi Himal itineraries normally start with a road transfer from Pokhara to a trailhead such as Kande, Phedi or nearby villages. The exact route depends on the itinerary selected.",
          },
        ];

  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: homepageTitle,
        description:
          homepageDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: [
          { "@type": "Thing", name: "Mardi Himal Trek" },
          { "@type": "Place", name: "Annapurna Region" },
          { "@type": "City", name: "Pokhara" },
        ],
      },
      ...(faqEnabled
        ? [
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
              mainEntity: resolvedFaqs.map(
                (faq: { question: string; answer: string }) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })
              ),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homepageSchema) }}
      />
      {/* Hero — 3D globe + compass */}
      <GreenCompassHero
        title={settings?.heroTitle || pageHero.title || ""}
        titleHighlight={settings?.heroTitleHighlight || pageHero.titleHighlight || ""}
        primaryCta={heroPrimaryCta}
        secondaryCta={heroSecondaryCta}
      />

      {/* Featured Treks */}
      <FeaturedTreksSection
        treks={JSON.parse(JSON.stringify(featuredSectionTreks))}
        heading={featuredTreksHeading}
        description={featuredTreksDescription}
      />

      {/* Why Choose Us */}
      {whyChooseUsEnabled && (
        <WhyChooseUs
          subtitle={whyChooseUsSubtitle}
          heading={whyChooseUsHeading}
          items={whyChooseUsItems}
          bgImage={whyChooseUsBgImage}
        />
      )}

      {/* About Us / Who We Are */}
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

      {/* Top Rated Treks */}
      <TopRatedTreks
        heading={topRatedTreksHeading}
        description={topRatedTreksDescription}
      />

      {/* Reviews Carousel */}
      <ReviewCarousel
        reviews={JSON.parse(JSON.stringify(latestReviews))}
        heading={reviewsHeading}
        description={reviewsDescription}
      />


      {/* FAQ Section */}
      {faqEnabled !== false && resolvedFaqs?.length > 0 && (
        <FAQAccordion
        heading={faqHeading}
        description={faqDescription}
        items={resolvedFaqs}
        id="home-faqs"
        />
      )}
      {/* Latest Blog Posts */}
      <LatestBlogPosts
        heading={blogHeading}
        description={blogDescription}
      />

      {/* Contact Form */}
      <ContactFormSection
        heading={contactHeading}
        description={contactDescription}
        infoCards={contactInfoCards}
      />
    </>
  );
}
