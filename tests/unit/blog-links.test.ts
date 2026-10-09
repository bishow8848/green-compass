import { describe, expect, it } from "vitest";
import { unlinkUnpublishedPosts } from "@/lib/blog-links";

describe("unlinkUnpublishedPosts", () => {
  const published = new Set(["live-post"]);

  it("keeps a link to a live post", () => {
    const html = '<p>See <a href="/blog/live-post">the guide</a>.</p>';
    expect(unlinkUnpublishedPosts(html, published)).toBe(html);
  });

  it("leaves the words and drops the anchor for a post that is not live", () => {
    expect(
      unlinkUnpublishedPosts('<p>See <a href="/blog/coming-soon">our <strong>Tihar</strong> guide</a>.</p>', published)
    ).toBe("<p>See our <strong>Tihar</strong> guide.</p>");
  });

  it("handles extra attributes and a trailing slash", () => {
    expect(
      unlinkUnpublishedPosts('<a class="x" href="/blog/coming-soon/" rel="noopener">soon</a>', published)
    ).toBe("soon");
  });

  it("does not touch links that are not to articles", () => {
    const html = '<a href="/treks/everest-base-camp-trek">trek</a> <a href="/blog">blog</a> <a href="https://example.com/blog/coming-soon">x</a>';
    expect(unlinkUnpublishedPosts(html, published)).toBe(html);
  });
});
