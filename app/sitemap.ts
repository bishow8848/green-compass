import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { SITE_URL, seoImageUrl } from "@/lib/seo";

const baseUrl = SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, treks, blogPosts, siteSettings, homeSettings, pageSettings, pages] = await Promise.all([
    prisma.category.findMany({
      where: { status: "published" },
      select: { slug: true, heroImage: true, updatedAt: true },
    }),
    prisma.trek.findMany({
      where: { status: "published" },
      select: {
        slug: true,
        category: { select: { slug: true } },
        heroImage: true,
        updatedAt: true,
        fixedDepartureDays: true,
        customStartDates: true,
      },
    }),
    prisma.blogPost.findMany({
      where: { status: "published" },
      select: { slug: true, heroImage: true, ogImage: true, updatedAt: true },
    }),
    prisma.siteSetting.findUnique({
      where: { id: "site-settings" },
      select: { updatedAt: true },
    }),
    prisma.homePageSettings.findUnique({
      where: { id: "home-settings" },
      select: { updatedAt: true, heroImage: true },
    }),
    prisma.siteSetting.findUnique({
      where: { id: "site-settings" },
      select: { pageContent: true, updatedAt: true },
    }),
    prisma.page.findMany({
      where: { status: "published" },
      select: { slug: true, updatedAt: true, heroImage: true, ogImage: true },
    }),
  ]);

  const pageContent = (() => {
    try {
      return pageSettings?.pageContent ? JSON.parse(pageSettings.pageContent) : null;
    } catch {
      return null;
    }
  })();
  const contentTimestamps = [
    siteSettings?.updatedAt,
    homeSettings?.updatedAt,
    pageSettings?.updatedAt,
    pageContent?.about?.updatedAt,
    pageContent?.contact?.updatedAt,
    pageContent?.blog?.updatedAt,
  ].filter(Boolean) as Date[];
  const staticLastModified = contentTimestamps.length
    ? new Date(Math.max(...contentTimestamps.map((d) => d.getTime())))
    : new Date();

  // Static pages
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: staticLastModified,
      changeFrequency: "weekly" as const,
      priority: 1.0,
      images: [seoImageUrl(homeSettings?.heroImage || pageContent?.home?.hero?.backgroundImage)].filter(Boolean) as string[],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
      images: [seoImageUrl(pageContent?.blog?.hero?.backgroundImage)].filter(Boolean) as string[],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      images: [seoImageUrl(pageContent?.about?.hero?.backgroundImage)].filter(Boolean) as string[],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      images: [seoImageUrl(pageContent?.contact?.hero?.backgroundImage)].filter(Boolean) as string[],
    },
  ];

  // Category listing pages (e.g., /treks, /tour, /climbing)
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: cat.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    images: [seoImageUrl(cat.heroImage)].filter(Boolean) as string[],
  }));

  // Product detail pages (e.g., /treks/everest-base-camp)
  const trekRoutes = treks.map((trek) => ({
    url: `${baseUrl}/${trek.category?.slug || "treks"}/${trek.slug}`,
    lastModified: trek.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [seoImageUrl(trek.heroImage)].filter(Boolean) as string[],
  }));

  // Fix Departure pages — per-trek only (e.g. /treks/mardi-himal-trek/fix-departure),
  // and only for treks that actually have a fix-departure config.
  const fixDepartureRoutes = treks
    .filter((trek: any) => {
      const days = trek.fixedDepartureDays;
      const dates = trek.customStartDates;
      return (days && days !== "[]") || (dates && dates !== "[]");
    })
    .map((trek: any) => ({
      url: `${baseUrl}/${trek.category?.slug || "treks"}/${trek.slug}/fix-departure`,
      lastModified: trek.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  // Blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: [seoImageUrl(post.ogImage || post.heroImage)].filter(Boolean) as string[],
  }));

  const reservedSlugs = new Set([
    "about", "contact", "blog", "search", "admin", "dashboard", "api", "author", "book", "payment",
  ]);
  const categorySlugs = new Set(categories.map((category) => category.slug));
  const pageRoutes = pages
    .filter((page) => !reservedSlugs.has(page.slug) && !categorySlugs.has(page.slug))
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: page.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [seoImageUrl(page.ogImage || page.heroImage)].filter(Boolean) as string[],
    }));

  return [...staticRoutes, ...categoryRoutes, ...trekRoutes, ...fixDepartureRoutes, ...blogRoutes, ...pageRoutes];
}
