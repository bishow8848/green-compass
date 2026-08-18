/**
 * Pure, dependency-free helpers for legacy redirects.
 *
 * Kept separate from `lib/legacy-redirects.ts` so client components can import
 * `normalizeLegacyPath` without pulling the Prisma/pg stack into the browser
 * bundle.
 */

export interface LegacyRedirectEntry {
  newPath: string;
  permanent: boolean;
}

/**
 * Normalizes a legacy path for storage and lookup:
 * - strips surrounding whitespace
 * - if a full URL is pasted (e.g. "https://greencompass.com/abc"), keeps only the pathname
 * - ensures the path starts with "/"
 * - removes trailing slashes
 * - lowercases (legacy slugs are matched case-insensitively)
 */
export function normalizeLegacyPath(input: string): string {
  let value = input.trim();

  if (/^https?:\/\//i.test(value)) {
    try {
      value = new URL(value).pathname;
    } catch {
      // not a parseable URL — fall through and normalize as a plain path
    }
  }

  if (!value.startsWith("/")) value = `/${value}`;
  value = value.replace(/\/+$/, "").toLowerCase();
  return value || "/";
}
