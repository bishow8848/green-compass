export interface Heading {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function parseHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h([2-3])(?:\s[^>]*)?>(.+?)<\/h\1>/gi;
  let match;
  const seen = new Map<string, number>();

  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    if (!text) continue;

    let id = slugify(text);
    if (seen.has(id)) {
      seen.set(id, seen.get(id)! + 1);
      id = `${id}-${seen.get(id)}`;
    } else {
      seen.set(id, 1);
    }

    headings.push({ id, text, level });
  }

  return headings;
}

export function injectHeadingIds(html: string): string {
  const headings = parseHeadings(html);
  let result = html;

  for (const h of headings) {
    const pattern = new RegExp(
      `(<h${h.level})(\\s[^>]*)?>(${escapeRegex(h.text)})`,
      "i"
    );
    result = result.replace(pattern, `$1 id="${h.id}"$2>$3`);
  }

  return result;
}

/**
 * Rich text renders beneath the page's own <h1>, so any h1 authored in the
 * editor is demoted to h2 — two h1s on a page blur its topic for search
 * engines and screen readers alike.
 */
export function demoteH1(html: string): string {
  return html.replace(/<(\/?)h1(?=[\s>])/gi, "<$1h2");
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
