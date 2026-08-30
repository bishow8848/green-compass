import type { Metadata } from "next";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Mountain } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { SITE_URL } from "@/lib/seo";

// Author bio is cached for 7 days and refreshed on-demand after CMS edits (revalidatePath)
export const revalidate = 604800;

export async function generateStaticParams() {
  const authors = await prisma.author.findMany({ select: { slug: true } });
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = await prisma.author.findUnique({
    where: { slug },
    select: { name: true, role: true, bio: true, avatar: true },
  });
  if (!author) return {};

  const avatarUrl = author.avatar
    ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_300,h_300,q_auto,f_auto/${author.avatar}`
    : undefined;

  return {
    title: `${author.name} - Author | Green Compass Treks`,
    description: author.bio
      ? author.bio.replace(/<[^>]*>/g, "").slice(0, 160)
      : `Articles written by ${author.name}${author.role ? `, ${author.role}` : ""}`,
    alternates: { canonical: `${SITE_URL}/author/${slug}` },
    openGraph: {
      title: `${author.name} | Green Compass Treks`,
      description: author.role || `Articles by ${author.name}`,
      url: `${SITE_URL}/author/${slug}`,
      siteName: "Green Compass Treks",
      type: "profile",
      images: avatarUrl ? [{ url: avatarUrl, width: 300, height: 300 }] : undefined,
    },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [author, posts] = await Promise.all([
    getCachedOrFetch(
      `author:${slug}`,
      () => prisma.author.findUnique({ where: { slug } }),
      CACHE_TTL.YEARLY
    ),
    getCachedOrFetch(
      `author:posts:${slug}`,
      () => prisma.blogPost.findMany({
        where: { authorSlug: slug, status: "published" },
        orderBy: { publishedDate: "desc" },
        select: {
          slug: true,
          title: true,
          excerpt: true,
          publishedDate: true,
          heroImage: true,
          tags: true,
        },
      }),
      CACHE_TTL.YEARLY
    ),
  ]);

  if (!author) notFound();

  const avatarUrl = author.avatar
    ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_300,h_300,q_auto,f_auto/${author.avatar}`
    : null;

  const socialLinks: { platform: string; url: string }[] = (() => {
    try { return JSON.parse(author.socialLinks || "[]"); }
    catch { return []; }
  })();

  return (
    <>
      {/* Breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: author.name, item: `${SITE_URL}/author/${slug}` },
            ],
          }),
        }}
      />

      {/* ── Author Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(180,50%,20%,0.15),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white/90"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
            {/* Avatar */}
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={author.name}
                width={144}
                height={144}
                className="h-28 w-28 flex-shrink-0 rounded-full border-4 border-white/10 object-cover shadow-xl sm:h-36 sm:w-36"
              />
            ) : (
              <div className="flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-full border-4 border-white/10 bg-white/10 text-4xl font-bold text-white sm:h-36 sm:w-36">
                {author.name.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {author.name}
              </h1>
              {author.role && (
                <p className="mt-2 text-lg font-medium text-teal-300">{author.role}</p>
              )}
              {author.bio && (
                <div
                  className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 [&_p]:mb-3 [&_p:last-child]:mb-0"
                  dangerouslySetInnerHTML={{ __html: author.bio }}
                />
              )}
              {socialLinks.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Author's Posts ── */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Articles by {author.name}
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            {posts.length} {posts.length === 1 ? "post" : "posts"} published
          </p>

          {posts.length === 0 ? (
            <div className="mt-12 flex flex-col items-center rounded-3xl border border-border/60 bg-card p-12 text-center">
              <Mountain className="h-12 w-12 text-muted-foreground/40" />
              <p className="mt-4 text-sm font-medium text-muted-foreground">No posts yet</p>
              <p className="mt-1 text-xs text-muted-foreground/60">This author hasn&apos;t published any posts yet.</p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const tags: string[] = (() => {
                  try { return JSON.parse(post.tags); }
                  catch { return []; }
                })();
                const postImageUrl = post.heroImage
                  ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_600,q_auto,f_auto/${post.heroImage}`
                  : null;

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {postImageUrl ? (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={postImageUrl}
                          alt={post.title}
                          width={600}
                          height={450}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center bg-muted">
                        <Mountain className="h-10 w-10 text-muted-foreground/30" />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      {tags.length > 0 && (
                        <div className="mb-2 flex flex-wrap gap-1.5">
                          {tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="mt-auto flex items-center pt-4 text-xs text-muted-foreground">
                        <Calendar className="mr-1.5 h-3.5 w-3.5" />
                        {new Date(post.publishedDate).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
