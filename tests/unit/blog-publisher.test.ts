import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  findMany: vi.fn(),
  updateMany: vi.fn(),
  revalidatePath: vi.fn(),
  invalidateCachePattern: vi.fn(),
  submitToIndexNow: vi.fn(),
}));

vi.mock("@/lib/prisma", () => ({
  prisma: { blogPost: { findMany: mocks.findMany, updateMany: mocks.updateMany } },
}));
vi.mock("next/cache", () => ({ revalidatePath: mocks.revalidatePath }));
vi.mock("@/lib/redis", () => ({
  invalidateCachePattern: mocks.invalidateCachePattern,
  cacheKeys: { pattern: { blog: "blog:*", home: "home:*", author: "author:*" } },
}));
vi.mock("@/lib/indexnow", () => ({ submitToIndexNow: mocks.submitToIndexNow }));

import { publishDuePosts } from "@/lib/blog-publisher";

describe("publishDuePosts", () => {
  const now = new Date("2026-10-10T03:15:00.000Z");

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("does nothing but one read when no post is due", async () => {
    mocks.findMany.mockResolvedValue([]);

    expect(await publishDuePosts(now)).toEqual([]);

    expect(mocks.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { status: "scheduled", publishedDate: { lte: now } } })
    );
    expect(mocks.updateMany).not.toHaveBeenCalled();
    expect(mocks.revalidatePath).not.toHaveBeenCalled();
    expect(mocks.submitToIndexNow).not.toHaveBeenCalled();
  });

  it("publishes what is due, refreshes the pages and announces the URLs", async () => {
    mocks.findMany.mockResolvedValue([
      { id: "a", slug: "first-post", title: "First", publishedDate: now },
      { id: "b", slug: "second-post", title: "Second", publishedDate: now },
    ]);

    const published = await publishDuePosts(now);

    expect(published.map((post) => post.slug)).toEqual(["first-post", "second-post"]);
    // Guarded on the status, so a post two triggers race for is flipped once.
    expect(mocks.updateMany).toHaveBeenCalledWith({
      where: { id: { in: ["a", "b"] }, status: "scheduled" },
      data: { status: "published" },
    });
    expect(mocks.invalidateCachePattern).toHaveBeenCalledWith("blog:*");
    expect(mocks.revalidatePath).toHaveBeenCalledWith("/", "layout");
    expect(mocks.revalidatePath).toHaveBeenCalledWith("/sitemap.xml");
    // Each URL by name: one visited early holds a cached 404.
    expect(mocks.revalidatePath).toHaveBeenCalledWith("/blog/first-post");
    expect(mocks.revalidatePath).toHaveBeenCalledWith("/blog/second-post");
    expect(mocks.submitToIndexNow).toHaveBeenCalledWith(["/blog/first-post", "/blog/second-post", "/blog"]);
  });
});
