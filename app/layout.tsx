import type { Metadata } from "next";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SessionProvider } from "@/components/layout/SessionProvider";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { getPageContent } from "@/lib/page-content";
import { sanitizeInlineHtml } from "@/lib/sanitize";
import { PreloadResources } from "./preload-resources";
import { DEFAULT_OG_IMAGE, serializeJsonLd, SITE_URL } from "@/lib/seo";

// Site chrome (header/footer) rarely changes. Cache for 1 year and refresh
// on-demand after CMS edits (revalidatePath). The effective route cache is
// the LOWEST revalidate across the route tree.
export const revalidate = 31536000;

const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/`;

/** Separate cache key — intentionally different from cacheKeys.siteSettings
 *  so generateMetadata doesn't overwrite the full settings cache that
 *  RootLayout relies on for navigation, topBarContent, and dropdown treks. */
const METADATA_SETTINGS_KEY = "layout:metadata";

/** "Lakeside, Pokhara, Nepal" → street, town and country for a PostalAddress. */
function postalAddress(address: string) {
  const parts = address.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length > 1 && /^nepal$/i.test(parts[parts.length - 1])) parts.pop();
  const locality = parts.pop();
  return {
    "@type": "PostalAddress",
    ...(parts.length > 0 ? { streetAddress: parts.join(", ") } : {}),
    ...(locality ? { addressLocality: locality } : {}),
    addressCountry: "NP",
  };
}

/** Placeholder numbers such as "+977-1-4XXXXXX" must never reach structured data. */
function isRealPhone(value?: string | null): value is string {
  return !!value && !/[xX]{3,}/.test(value) && value.replace(/\D/g, "").length >= 7;
}

/** A profile URL — not a bare network homepage like "https://www.facebook.com/". */
function isProfileUrl(url: string): boolean {
  try {
    const { protocol, pathname } = new URL(url);
    return (protocol === "https:" || protocol === "http:") && pathname.replace(/\/+$/, "") !== "";
  } catch {
    return false;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getCachedOrFetch(
    METADATA_SETTINGS_KEY,
    () => prisma.siteSetting.findUnique({
      where: { id: "site-settings" },
      select: {
        siteName: true,
        defaultMetaTitle: true,
        defaultMetaDescription: true,
        defaultKeywords: true,
        defaultOgImage: true,
      },
    }),
    CACHE_TTL.YEARLY
  );

  // Icons come only from the file conventions — app/favicon.ico, app/icon.png
  // and app/apple-icon.png: same-origin, square, and exactly the size they
  // declare. The CMS logo used to be listed here as well, but Cloudinary's
  // f_auto served it as WebP under a false "192x192" label (the file is
  // 500x500), and as a WebP apple-touch-icon, which iOS ignores — muddying
  // which icon search engines should show beside the site.
  const ogImageUrl = settings?.defaultOgImage
    ? settings.defaultOgImage.startsWith("http")
      ? settings.defaultOgImage
      : `${CLOUDINARY_BASE}c_fill,w_1200,h_630,q_auto,f_auto/${settings.defaultOgImage}`
    : undefined;
  // Every brand string below reads from siteSetting.siteName so the company name
  // lives in one place; the literal is only a fallback for an unseeded database.
  const siteName = settings?.siteName?.trim() || "Green Compass Treks";
  const defaultTitle =
    settings?.defaultMetaTitle ||
    `${siteName} | Premier Trekking & Tour Agency in Nepal`;
  const defaultDescription =
    settings?.defaultMetaDescription ||
    `Experience the Himalayas with ${siteName}. Expert-guided trekking and tour packages in Nepal.`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: defaultTitle,
      template: `%s | ${siteName}`,
    },
    description: defaultDescription,
    keywords: settings?.defaultKeywords || undefined,
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: SITE_URL,
      siteName,
      locale: "en_US",
      type: "website",
      images: ogImageUrl
        ? [{ url: ogImageUrl, width: 1200, height: 630, alt: siteName }]
        : [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      // No `images`: Next copies them from the page's own og:image, so a page
      // that only sets openGraph still gets a matching card.
      // No `site` handle: X handles are at most 15 characters, so the old
      // "@GreenCompassTreks" could not exist. Add the real one if the brand
      // opens an account.
    },
    robots: {
      index: true,
      follow: true,
      // Allow large image previews and full-length snippets; large previews
      // are also what makes pages eligible for Discover's big-image cards.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    verification: {
      google: [
        "3g8ld_Z_hk7Fz6wMkMzRKvDHlDN1WhudtQdb0yi9j54",
        "BZ1rmPBIC5KctAkorFrZiXz6qcSZJJ3kuKcZQzz9iZw",
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch independent data in parallel — cuts cold-start latency by ~3×
  const [categories, settingsData, allRegions, pageContent] = await Promise.all([
    getCachedOrFetch(
      cacheKeys.categories,
      () => prisma.category.findMany({
        where: { status: "published" },
        orderBy: { sort: "asc" },
        select: { id: true, name: true, slug: true, icon: true },
      }),
      CACHE_TTL.YEARLY
    ),
    getCachedOrFetch(
      cacheKeys.siteSettings,
      () => prisma.siteSetting.findUnique({
        where: { id: "site-settings" },
        select: {
          siteName: true,
          tagline: true,
          logo: true,
          description: true,
          email: true,
          phone: true,
          address: true,
          socialLinks: true,
          navigation: true,
          categoryDropdownTreks: true,
          topBarContent: true,
        },
      }),
      CACHE_TTL.YEARLY
    ),
    getCachedOrFetch(
      cacheKeys.allRegions,
      () => prisma.categoryRegion.findMany({
        select: { id: true, name: true, slug: true, categoryId: true },
        orderBy: { sortOrder: "asc" },
      }),
      CACHE_TTL.YEARLY
    ),
    // Only the footer section is used — for the Organization's contact details.
    getPageContent().catch(() => null),
  ]);

  const navigation = (() => {
    try {
      const nav = JSON.parse(settingsData?.navigation || "[]");
      return Array.isArray(nav) ? nav : [];
    } catch {
      return [];
    }
  })() as { label: string; href: string }[];

  const categoryDropdownTreks: Record<string, string[]> = (() => {
    try {
      return JSON.parse(settingsData?.categoryDropdownTreks || "{}");
    } catch {
      return {};
    }
  })();

  const socialUrls: string[] = (() => {
    try {
      const links = JSON.parse(settingsData?.socialLinks || "[]");
      if (!Array.isArray(links)) return [];
      return links
        .map((link) => typeof link?.url === "string" ? link.url.trim() : "")
        .filter((url) => /^https?:\/\//i.test(url));
    } catch {
      return [];
    }
  })();

  const siteName = settingsData?.siteName || "Green Compass Treks";
  const siteDescription =
    settingsData?.description ||
    settingsData?.tagline ||
    "Nepal trekking and travel company.";
  const siteUrl = SITE_URL;
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  // The published contact details live in the footer section of the CMS page
  // content; the dedicated site-setting fields win whenever they are filled in.
  // The footer's own phone field is left out on purpose: the number the site
  // actually dials is the representative's.
  const footer = (pageContent?.footer ?? {}) as {
    email?: string;
    address?: string;
    socialLinks?: { url?: string }[];
    representative?: { phone?: string };
  };
  const telephone = [settingsData?.phone, footer.representative?.phone].find(isRealPhone);
  const email = settingsData?.email || footer.email;
  const address = settingsData?.address || footer.address;
  const sameAs = [
    ...new Set([...socialUrls, ...(footer.socialLinks ?? []).map((link) => link?.url?.trim() ?? "")]),
  ].filter(isProfileUrl);

  const organizationSchema = {
    "@type": ["Organization", "TravelAgency", "LocalBusiness"],
    "@id": organizationId,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    // A stable, square, same-origin file generated from the brand mark — what
    // Google's logo guidelines ask for (crawlable, at least 112px).
    logo: { "@type": "ImageObject", url: `${siteUrl}/icon-512.png`, width: 512, height: 512 },
    image: `${siteUrl}${DEFAULT_OG_IMAGE.url}`,
    ...(address ? { address: postalAddress(address) } : {}),
    ...(telephone ? { telephone } : {}),
    ...(email ? { email } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...((telephone || email)
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            ...(telephone ? { telephone } : {}),
            ...(email ? { email } : {}),
            contactType: "customer service",
            availableLanguage: ["English", "Nepali"],
          },
        }
      : {}),
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en",
    publisher: { "@id": organizationId },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // FAQPage schema — will be conditionally rendered on pages with FAQ content

  // Fetch treks that are selected for dropdowns, with region info
  const allSelectedTrekIds = Object.values(categoryDropdownTreks).flat();
  const dropdownTreks = allSelectedTrekIds.length > 0
    ? await getCachedOrFetch(
        cacheKeys.dropdownTreks,
        () => prisma.trek.findMany({
          where: { id: { in: allSelectedTrekIds }, status: "published" },
          select: {
            id: true, title: true, slug: true, categoryId: true,
            region: true,
            regionId: true,
            regionRef: { select: { id: true, name: true, slug: true } },
          },
        }),
        CACHE_TTL.YEARLY
      )
    : [];



  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full scroll-smooth antialiased"
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <PreloadResources />
        <SessionProvider>
          <ScrollToTop />
          <Header
            categories={categories}
            siteLogo={settingsData?.logo || null}
            navigation={navigation}
            categoryDropdownTreks={categoryDropdownTreks}
            dropdownTreks={JSON.parse(JSON.stringify(dropdownTreks))}
            allRegions={JSON.parse(JSON.stringify(allRegions))}
            topBarContent={settingsData?.topBarContent ? sanitizeInlineHtml(settingsData.topBarContent) : null}
          />
          {/* ── Global Structured Data ── */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: serializeJsonLd({
                "@context": "https://schema.org",
                "@graph": [
                  organizationSchema,
                  websiteSchema,
                ],
              }),
            }}
          />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
          <FloatingButtons />
        </SessionProvider>
      </body>
    </html>
  );
}
