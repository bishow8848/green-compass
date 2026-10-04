/** Reading time from the stored HTML — the figure the article header and the cards show. */
export function readTimeMinutes(html: string | null): number {
  return Math.max(1, Math.round((html?.split(/\s+/).length || 0) / 200));
}
