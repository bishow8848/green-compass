import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

// Single source of truth for the site's canonical origin, driven by env so the
// same codebase works for local dev, staging, and production. NEXT_PUBLIC_* is
// inlined into client bundles at build time; SITE_URL is available to Node-side
// config (e.g. next-sitemap). Falls back to the production domain.
const envSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.marditreks.com"
).replace(/\/+$/, "");

export const SITE_URL = envSiteUrl;
export const SITE_NAME = "Mardi Treks";
const CLOUDINARY_IMAGE_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/`;

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
