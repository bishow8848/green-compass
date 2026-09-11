import relations from "./blog-related.json";

/**
 * Related trips and further reading for a blog post.
 *
 * Articles from the blog-content pipeline have curated lists, generated into
 * blog-related.json by scripts/apply-blog-content.mts. A post written in the
 * admin has no entry, so its lists fall back to the products and articles it
 * links to in its own text.
 */
export type BlogRelations = {
  /** Candidate trek slugs, most relevant first — not yet checked against the catalogue. */
  trekSlugs: string[];
  /** Candidate article slugs, most relevant first. */
  postSlugs: string[];
  /** Lead-in for the Related Treks section. */
  note: string | null;
};

type CuratedRelation = { treks: string[]; posts: string[]; note?: string };

const CURATED: Record<string, CuratedRelation> = relations;

/** Internal links with two path segments: /blog/<post> or /<category>/<trek>. */
const LINK_RE = /href="\/([a-z0-9-]+)\/([a-z0-9-]+)\/?"/g;

/** Most links followed from a post body, so a link-heavy post stays cheap to resolve. */
const MAX_LINKED = 12;

export function getBlogRelations(slug: string, html: string): BlogRelations {
  const curated = CURATED[slug];
  if (curated) {
    return { trekSlugs: curated.treks, postSlugs: curated.posts, note: curated.note ?? null };
  }

  // Links to other sections (/author/..., /about/...) land in trekSlugs too;
  // they match no trek, so the catalogue lookup drops them.
  const trekSlugs: string[] = [];
  const postSlugs: string[] = [];
  for (const [, root, target] of html.matchAll(LINK_RE)) {
    const list = root === "blog" ? postSlugs : trekSlugs;
    if (target !== slug && !list.includes(target) && list.length < MAX_LINKED) list.push(target);
  }
  return { trekSlugs, postSlugs, note: null };
}
