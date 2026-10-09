/** A link to an article: <a href="/blog/<slug>">label</a>. */
const POST_LINK_RE = /<a\b[^>]*\bhref="\/blog\/([a-z0-9-]+)\/?"[^>]*>([\s\S]*?)<\/a>/g;

/**
 * Turn links to articles that are not live into plain text.
 *
 * A series written ahead and scheduled to go out one post a day links between
 * its own articles, and the early ones point at posts that are still waiting
 * for their date. Rendered as they stand those links are 404s. Dropping the
 * anchor and keeping its words leaves the sentence intact, and the link comes
 * back by itself the first time the page is rendered after its target is
 * published — the publish job revalidates every blog page when it runs.
 */
export function unlinkUnpublishedPosts(html: string, published: ReadonlySet<string>): string {
  return html.replace(POST_LINK_RE, (anchor, slug: string, label: string) =>
    published.has(slug) ? anchor : label
  );
}
