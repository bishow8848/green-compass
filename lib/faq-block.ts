/**
 * Shared helpers for the inline FAQ block used inside the rich text editor.
 *
 * A FAQ block is stored in the HTML as a plain <div data-faq="..."> where the
 * attribute holds a base64-encoded JSON payload:
 *
 *   { heading?: string, description?: string, items: { question, answer }[] }
 *
 * These helpers are imported by both the editor (client component) and the
 * blog page (server component) so encoding/decoding stays consistent.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  heading?: string;
  description?: string;
  items: FAQItem[];
}

const DEFAULT_HEADING = "Frequently Asked Questions";

export function defaultFaqData(): FAQData {
  return { heading: DEFAULT_HEADING, items: [] };
}

/** Unicode-safe base64 encoding (btoa alone throws on non-Latin1 chars). */
function toBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary);
}

function fromBase64(b64: string): string {
  const binary = atob(b64);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function encodeFaqData(data: FAQData): string {
  return toBase64(JSON.stringify(data));
}

export function decodeFaqData(raw: string | null): FAQData {
  if (!raw) return defaultFaqData();
  try {
    const parsed = JSON.parse(fromBase64(raw));
    const items = Array.isArray(parsed?.items)
      ? parsed.items.filter(
          (i: unknown): i is FAQItem =>
            !!i &&
            typeof (i as FAQItem).question === "string" &&
            typeof (i as FAQItem).answer === "string"
        )
      : [];
    return {
      heading:
        typeof parsed?.heading === "string" ? parsed.heading : DEFAULT_HEADING,
      description:
        typeof parsed?.description === "string" ? parsed.description : undefined,
      items,
    };
  } catch {
    return defaultFaqData();
  }
}

/**
 * Extract every FAQ item from every inline FAQ block in rich text HTML.
 * Used server-side to keep the FAQPage schema in sync with inline content.
 */
export function extractFaqsFromHtml(html: string): FAQItem[] {
  if (!html) return [];
  const out: FAQItem[] = [];
  const re = /data-faq="([^"]*)"/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    out.push(...decodeFaqData(match[1]).items);
  }
  return out;
}

/** Escape text so it is safe to inject as HTML (mirrors React's text escaping). */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Render an inline FAQ block as static accordion HTML.
 *
 * FAQAccordion is built from native <details>/<summary> elements, so it works
 * with zero JavaScript. The RichTextContent component injects this markup
 * directly into each <div data-faq="..."> — no React sub-roots needed.
 */
export function renderFaqAccordionHtml(data: FAQData, id: string): string {
  const heading = data.heading || "Frequently Asked Questions";
  const items = data.items || [];

  const itemHtml = items
    .map((item, i) => {
      const open = i === 0 ? " open" : "";
      return `
        <details class="group relative rounded-2xl border transition-colors${open}" style="background-color: var(--color-surface); border-color: var(--color-border);">
          <summary class="flex cursor-pointer list-none items-start gap-4 rounded-2xl px-4 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
            <span class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold tabular-nums" style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text-muted);">
              <span class="group-open:hidden">${i + 1}</span>
              <span class="hidden h-2.5 w-2.5 rounded-full group-open:block" style="background-color: var(--color-primary);"></span>
            </span>
            <span class="min-w-0 flex-1 pt-1.5">
              <span class="flex items-center justify-between gap-3">
                <span class="text-sm font-semibold" style="color: var(--color-foreground);">${escapeHtml(item.question)}</span>
                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-open:rotate-45" style="background-color: var(--color-surface-alt);">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </span>
              </span>
            </span>
          </summary>
          <div class="ml-14 mr-4 mb-5 border-t pt-4" style="border-color: var(--color-border);">
            <p class="text-sm leading-relaxed" style="color: var(--color-text);">${escapeHtml(item.answer)}</p>
          </div>
        </details>`;
    })
    .join("");

  const descriptionHtml = data.description
    ? `<p class="mb-8 text-sm" style="color: var(--color-text-muted);">${escapeHtml(data.description)}</p>`
    : "";

  return `
    <section id="${id}" class="bg-background mb-8 sm:mb-10">
      <div class="w-full">
        <h2 id="${id}-heading" class="mb-2 text-2xl font-bold" style="color: var(--color-secondary);">${escapeHtml(heading)}</h2>
        ${descriptionHtml}
        <div class="space-y-3">${itemHtml}</div>
      </div>
    </section>`;
}
