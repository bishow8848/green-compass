import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

// Single source of truth for the site's canonical origin, driven by env so the
// same codebase works for local dev, staging, and production. Deliberately not
// NEXT_PUBLIC_: the origin stays server-side and is never inlined into a client
// bundle. Every consumer of this module renders on the server (metadata,
// JSON-LD, sitemap, robots, emails). Falls back to the production domain.
const envSiteUrl = (process.env.SITE_URL || "https://greencompasstreks.com").replace(
  /\/+$/,
  "",
);

export const SITE_URL = envSiteUrl;
export const SITE_NAME = "Green Compass Treks";
const CLOUDINARY_IMAGE_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/`;

/**
 * The branded card drawn by app/opengraph-image.tsx. Next applies that file
 * only to pages that set no openGraph of their own, and a page's openGraph
 * replaces the layout's wholesale — so a page with no image of its own must
 * name this card explicitly (see ogImages) or be shared without a picture.
 */
export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — guided trekking and tours in Nepal`,
};

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
  const cut = text.slice(0, maxLength - 1);
  // Drop the trailing partial word, unless the cut already fell between words.
  const clipped = (/\s/.test(text.charAt(maxLength - 1)) ? cut : cut.replace(/\s+\S*$/, "")).trim();
  // A snippet that stops on a full stop reads as finished, while "regions.…"
  // reads as broken — so end on the last whole sentence when it fills most of
  // the budget, and only fall back to an ellipsis mid-sentence.
  if (/[.!?]$/.test(clipped)) return clipped;
  const sentenceEnd = Math.max(clipped.lastIndexOf(". "), clipped.lastIndexOf("! "), clipped.lastIndexOf("? "));
  if (sentenceEnd >= maxLength * 0.6) return clipped.slice(0, sentenceEnd + 1);
  return `${clipped.replace(/[\s,;:–—-]+$/, "")}…`;
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

/** A page's 1200×630 social image, or the branded site card when it has none. */
export function ogImages(url: string | undefined, alt: string) {
  return url ? [{ url, width: 1200, height: 630, alt }] : [DEFAULT_OG_IMAGE];
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
