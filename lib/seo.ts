import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

// Single source of truth for the site's canonical origin, driven by env so the
// same codebase works for local dev, staging, and production. NEXT_PUBLIC_* is
// inlined into client bundles at build time; SITE_URL is available to Node-side
// config (e.g. next-sitemap). Falls back to the production domain.
const envSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://greencompasstreks.com"
).replace(/\/+$/, "");

export const SITE_URL = envSiteUrl;
export const SITE_NAME = "Green Compass Treks";
const CLOUDINARY_IMAGE_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/`;

/** Keep SEO copy readable when the source is rich text or legacy CMS data. */
export function plainText(value?: string | null): string {
  return (value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function seoDescription(value: string | null | undefined, fallback: string, maxLength = 160): string {
  const text = plainText(value) || fallback;
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).replace(/\s+\S*$/, "").trim()}…`;
}

/** Avoid duplicated brand suffixes while keeping titles explicit and unique. */
export function brandedTitle(value: string): { absolute: string } {
  const title = plainText(value);
  // Only append the brand when the title does not already carry it. This used to
  // test a hardcoded company name, which silently double-branded every title the
  // moment the name changed — so it is derived from SITE_NAME instead.
  const brand = SITE_NAME.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    absolute: new RegExp(`\\b${brand}\\b`, "i").test(title) ? title : `${title} | ${SITE_NAME}`,
  };
}

export function absoluteUrl(path = "/"): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function seoImageUrl(source?: string | null, transform = "c_fill,w_1200,h_630,q_auto,f_auto"): string | undefined {
  if (!source) return undefined;
  if (/^https?:\/\//i.test(source)) return source;
  if (source.startsWith("/")) return absoluteUrl(source);
  return `${CLOUDINARY_IMAGE_BASE}${transform}/${source}`;
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
