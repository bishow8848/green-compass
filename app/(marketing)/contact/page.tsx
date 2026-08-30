import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactFormSection } from "@/components/home/ContactFormSection";
import { PageHero } from "@/components/layout/PageHero";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { SITE_URL, brandedTitle, seoDescription, seoImageUrl, serializeJsonLd } from "@/lib/seo";
import { sanitizeIframeHtml } from "@/lib/sanitize";

// Contact content is cached for 7 days and refreshed on-demand after CMS edits (revalidatePath)
export const revalidate = 604800;

async function getPageContent() {
  return getCachedOrFetch<Record<string, any> | null>(
    cacheKeys.pageContent,
    async () => {
      const settings = await prisma.siteSetting.findUnique({ where: { id: "site-settings" } });
      if (!(settings as any)?.pageContent) return null;
      try { return JSON.parse((settings as any).pageContent); } catch { return null; }
    },
    CACHE_TTL.DAILY
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const pc = await getPageContent();
  const contact = pc?.contact;
  const seo = contact?.seo;
  const heroImage = seoImageUrl(contact?.hero?.backgroundImage);
  const title = seo?.title?.trim() || "Contact Green Compass Treks: Plan Your Nepal Trek";
  const description = seoDescription(
    seo?.description,
    "Contact Green Compass Treks for expert help planning your Nepal trek, from Mardi Himal and Annapurna adventures to custom itineraries."
  );
  return {
    title: brandedTitle(title),
    description,
    keywords: seo?.keywords || undefined,
    alternates: { canonical: `${SITE_URL}/contact` },
    openGraph: {
      title: brandedTitle(title).absolute,
      description,
      url: `${SITE_URL}/contact`,
      siteName: "Green Compass Treks",
      locale: "en_US",
      type: "website",
      images: heroImage ? [{ url: heroImage, width: 1200, height: 630, alt: "Contact Green Compass Treks about a Nepal trek" }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle(title).absolute,
      description,
      images: heroImage ? [heroImage] : undefined,
    },
  };
}

export default async function ContactPage() {
  // Fetch independent data in parallel
  const [pc, allTreksForSearch, homeSettings] = await Promise.all([
    getPageContent(),
    getCachedOrFetch(
      cacheKeys.treksListAll,
      () => prisma.trek.findMany({
        where: { status: "published" },
        select: { id: true, title: true, slug: true, region: true, difficulty: true, duration: true, category: { select: { slug: true } } },
        orderBy: { title: "asc" },
      }),
      CACHE_TTL.DAILY
    ),
    getCachedOrFetch(
      cacheKeys.homeSettings,
      () => prisma.homePageSettings.findUnique({
        where: { id: "home-settings" },
      }),
      CACHE_TTL.DAILY
    ),
  ]);

  const contact = pc?.contact || {};
  const contactSeo = contact.seo || {};
  const contactPageTitle = contactSeo.title?.trim() || "Contact Green Compass Treks: Plan Your Nepal Trek";
  const contactPageDescription = seoDescription(
    contactSeo.description,
    "Contact Green Compass Treks for expert help planning your Nepal trek, from Mardi Himal and Annapurna adventures to custom itineraries."
  );
  const hero = contact.hero || {};
  const mapIframe = contact.mapIframe || "";
  const contactInfoCards: { title: string; description: string }[] = (homeSettings as any)?.contactInfoCards
    ? JSON.parse((homeSettings as any).contactInfoCards)
    : [];

  return (
    <>
      {/* BreadcrumbList + ContactPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
                ],
              },
              {
                "@type": "ContactPage",
                "@id": `${SITE_URL}/contact#page`,
                name: contactPageTitle,
                description: contactPageDescription,
                isPartOf: { "@id": `${SITE_URL}/#website` },
              },
            ],
          }),
        }}
      />

      <PageHero
        heading={hero.heading || "Contact Us"}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
        treks={allTreksForSearch}
        breadcrumbLabel="Contact"
      />

      {/* Contact Form — uses same CMS data as home page left panel */}
      <ContactFormSection
        heading="Send us a message"
        description="Fill in the form below and we'll get back to you within 24 hours."
        infoCards={contactInfoCards}
      />

      {/* Map + Contact Info — side by side */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Map (left) */}
            <div className="h-full min-w-0">
              {mapIframe ? (
                <div className="iframe-responsive-container h-full min-h-[400px] overflow-hidden rounded-2xl border border-border shadow-sm [&_iframe]:w-full [&_iframe]:max-w-full [&_iframe]:h-full [&_iframe]:min-h-[400px]" dangerouslySetInnerHTML={{ __html: sanitizeIframeHtml(mapIframe) }} />
              ) : (
                <div className="flex h-full min-h-[400px] items-center justify-center rounded-2xl border border-border bg-surface shadow-sm">
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                    <p className="mt-3 text-sm text-text-muted">Map location</p>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Info (right) — uses same CMS data as home page */}
            <div className="flex h-full flex-col justify-center">
              <div
                className="relative overflow-hidden rounded-2xl p-8"
                style={{
                  background: "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))",
                }}
              >
                {/* Decorative accent */}
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                <div
                  className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full opacity-20"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />

                <div className="relative">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    Contact Details
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-white">Get in touch</h2>
                  <p className="mt-1.5 text-sm text-white/70">
                    We&apos;re here to help plan your Himalayan adventure.
                  </p>

                  <div className="mt-6 space-y-5">
                    {contactInfoCards.map((item, i) => {
                      const iconMap: Record<string, any> = {
                        "Email Us": Mail,
                        "Call Us": Phone,
                        "Office": MapPin,
                        "Office Hours": Clock,
                      };
                      const Icon = iconMap[item.title] || MapPin;
                      return (
                        <div key={i} className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-white/60">{item.title}</p>
                            <p className="text-sm font-medium text-white">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
