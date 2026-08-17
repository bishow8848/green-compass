import { prisma } from "@/lib/prisma";
import { CACHE_TTL, cacheKeys, getCachedOrFetch } from "@/lib/redis";

export type PageContent = Record<string, Record<string, any>>;

/**
 * Read CMS page content through the existing Next cache -> Redis -> database
 * chain. Invalid or missing content is rejected so public pages never render
 * a misleading hard-coded shell in place of database content.
 */
export async function getPageContent(): Promise<PageContent> {
  const content = await getCachedOrFetch<PageContent | null>(
    cacheKeys.pageContent,
    async () => {
      const settings = await prisma.siteSetting.findUnique({
        where: { id: "site-settings" },
        select: { pageContent: true },
      });

      if (!settings?.pageContent) return null;

      try {
        const parsed: unknown = JSON.parse(settings.pageContent);
        return parsed !== null && typeof parsed === "object" && !Array.isArray(parsed)
          ? (parsed as PageContent)
          : null;
      } catch {
        return null;
      }
    },
    CACHE_TTL.PAGE_CONTENT
  );

  if (!content) {
    throw new Error("CMS page content is missing or malformed");
  }

  return content;
}

export function requirePageSection<T extends Record<string, any>>(
  content: PageContent,
  section: string
): T {
  const value = content[section];
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`CMS page content for "${section}" is missing or malformed`);
  }
  return value as T;
}
