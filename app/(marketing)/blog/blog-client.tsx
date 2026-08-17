import { Mountain } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { Pagination } from "@/components/ui/Pagination";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string | null;
  heroImage: string | null;
  tags: string[];
  date: string;
  readTime: string;
  author?: string;
  authorSlug?: string | null;
}

// Presentational grid + pagination. Posts are already sliced on the server
// (page.tsx queries the DB with skip/take), so this just renders them.
export function BlogClient({
  posts,
  currentPage,
  totalPages,
}: {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
}) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center py-20 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-alt">
          <Mountain className="h-8 w-8 text-text-muted" />
        </div>
        <p className="mt-5 text-lg font-semibold text-foreground">
          {currentPage > 1 ? "This page has no posts yet" : "No published posts yet"}
        </p>
        <p className="mt-1 text-sm text-text-muted">Check back soon for new articles!</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            heroImage={post.heroImage}
            tags={post.tags}
            date={post.date}
            readTime={post.readTime}
            author={post.author}
            authorSlug={post.authorSlug}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
    </>
  );
}
