// Shared resolution for the left-side photo shown on all auth pages
// (login, signup, forgot-password, change-password, verify-email).
// Admin can set a single image in Site Settings -> Auth tab; it's stored as
// either a full URL or a Cloudinary public ID (falls back to a default image).

export const DEFAULT_AUTH_IMAGE =
  "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/skbvgh6m1wszvntb8zt9";

export const CLOUDINARY_BASE = `https://res.cloudinary.com/${
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dk7ggjvlw"
}/image/upload/`;

/** Accepts a full URL or a Cloudinary public ID; always returns a usable URL. */
export function resolveImageUrl(value?: string | null): string {
  if (!value) return DEFAULT_AUTH_IMAGE;
  if (/^https?:\/\//i.test(value)) return value;
  return `${CLOUDINARY_BASE}f_auto,q_auto/${value}`;
}
