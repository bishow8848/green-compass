import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SessionProvider } from "@/components/layout/SessionProvider";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { sanitizeInlineHtml } from "@/lib/sanitize";
import { PreloadResources } from "./preload-resources";
import { serializeJsonLd, SITE_URL } from "@/lib/seo";

// Site chrome (header/footer) rarely changes. Cache for 1 year and refresh
// on-demand after CMS edits (revalidatePath). The effective route cache is
// the LOWEST revalidate across the route tree.
export const revalidate = 31536000;

const CLOUDINARY_BASE = "https://res.cloudinary.com/dk7ggjvlw/image/upload/";

/** Separate cache key — intentionally different from cacheKeys.siteSettings
 *  so generateMetadata doesn't overwrite the full settings cache that
 *  RootLayout relies on for navigation, topBarContent, and dropdown treks. */
const METADATA_SETTINGS_KEY = "layout:metadata";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getCachedOrFetch(
    METADATA_SETTINGS_KEY,
    () => prisma.siteSetting.findUnique({
      where: { id: "site-settings" },
      select: {
        logo: true,
        defaultMetaTitle: true,
        defaultMetaDescription: true,
        defaultKeywords: true,
        defaultOgImage: true,
      },
    }),
    CACHE_TTL.YEARLY
  );

  const logoUrl = settings?.logo
    ? `${CLOUDINARY_BASE}f_auto,q_auto/${settings.logo}`
    : undefined;
  const ogImageUrl = settings?.defaultOgImage
    ? settings.defaultOgImage.startsWith("http")
      ? settings.defaultOgImage
      : `${CLOUDINARY_BASE}c_fill,w_1200,h_630,q_auto,f_auto/${settings.defaultOgImage}`
    : undefined;
  const defaultTitle =
    settings?.defaultMetaTitle ||
    "Mardi Treks | Premier Trekking & Tour Agency in Nepal";
  const defaultDescription =
    settings?.defaultMetaDescription ||
    "Experience the Himalayas with Mardi Treks. Expert-guided trekking and tour packages in Nepal.";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: defaultTitle,
      template: "%s | Mardi Treks",
    },
    description: defaultDescription,
    keywords: settings?.defaultKeywords || undefined,
    icons: logoUrl
      ? {
          icon: [
            { url: logoUrl, sizes: "any", type: "image/x-icon" },
            { url: logoUrl, sizes: "192x192", type: "image/png" },
          ],
          apple: { url: logoUrl, sizes: "180x180", type: "image/png" },
        }
      : undefined,
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: SITE_URL,
      siteName: "Mardi Treks",
      locale: "en_US",
      type: "website",
      images: ogImageUrl
        ? [{ url: ogImageUrl, width: 1200, height: 630, alt: "Mardi Treks" }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: ogImageUrl ? [ogImageUrl] : undefined,
      site: "@MardiTreks",
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: "3g8ld_Z_hk7Fz6wMkMzRKvDHlDN1WhudtQdb0yi9j54",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch independent data in parallel — cuts cold-start latency by ~3×
  const [categories, settingsData, allRegions] = await Promise.all([
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

  const validPhone =
    settingsData?.phone &&
    !/[xX]{3,}/.test(settingsData.phone) &&
    /\d{7,}/.test(settingsData.phone.replace(/\D/g, ""))
      ? settingsData.phone
      : undefined;
  const siteName = settingsData?.siteName || "Mardi Treks";
  const siteDescription =
    settingsData?.description ||
    settingsData?.tagline ||
    "Nepal trekking and travel company.";
  const siteUrl = SITE_URL;
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

    const organizationSchema = {
    "@type": ["Organization", "TravelAgency", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    ...(settingsData?.logo
      ? {
          logo: {
            "@type": "ImageObject",
            url: `${CLOUDINARY_BASE}w_512,h_512,q_auto,f_auto/${settingsData.logo}`,
          },
        }
      : {}),
    ...(settingsData?.address ? { address: settingsData.address } : {}),
    ...(socialUrls.length > 0 ? { sameAs: socialUrls } : {}),
    ...((validPhone || settingsData?.email)
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            ...(validPhone ? { telephone: validPhone } : {}),
            ...(settingsData?.email ? { email: settingsData.email } : {}),
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

  // BreadcrumbList schema for homepage
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    ],
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
                  breadcrumbSchema,
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
