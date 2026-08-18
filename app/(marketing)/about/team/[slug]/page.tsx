import type { Metadata } from "next";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Users } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { PageHero } from "@/components/layout/PageHero";
import { sanitizeRichText } from "@/lib/sanitize";

// Team member content is cached for 7 days and refreshed on-demand after CMS edits (revalidatePath)
export const revalidate = 604800;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = await prisma.teamMember.findUnique({ where: { slug } });
  if (!member) return {};
  return {
    title: `${member.name} - ${member.role}`,
    description: member.shortBio || `Meet ${member.name}, ${member.role} at Mardi Treks.`,
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await getCachedOrFetch(
    cacheKeys.teamMember(slug),
    () => prisma.teamMember.findUnique({ where: { slug, status: "published" } }),
    CACHE_TTL.YEARLY
  );
  if (!member) notFound();

  // Fetch independent data in parallel
  const [otherMembers, latestPosts, allTreksForSearch] = await Promise.all([
    getCachedOrFetch(
      cacheKeys.teamMembers,
      () => prisma.teamMember.findMany({
        where: { status: "published", id: { not: member.id } },
        orderBy: { sort: "asc" },
        select: { name: true, slug: true, role: true, image: true, shortBio: true },
      }),
      CACHE_TTL.YEARLY
    ),
    getCachedOrFetch(
      cacheKeys.blogPosts,
      () => prisma.blogPost.findMany({
        where: { status: "published" },
        orderBy: { publishedDate: "desc" },
        select: { slug: true, title: true, excerpt: true, publishedDate: true, heroImage: true, tags: true },
        take: 3,
      }),
      CACHE_TTL.YEARLY
    ),
    getCachedOrFetch(
      cacheKeys.treksListAll,
      () => prisma.trek.findMany({
        where: { status: "published" },
        select: { id: true, title: true, slug: true, region: true, difficulty: true, duration: true, category: { select: { slug: true } } },
        orderBy: { title: "asc" },
      }),
      CACHE_TTL.YEARLY
    ),
  ]);
  const sidebarMembers = otherMembers.slice(0, 3);

  const heroImageUrl = member.image
    ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_1200,q_auto,f_auto/${member.image}`
    : null;

  const socialLinks: { platform: string; url: string }[] = (() => {
    try { return JSON.parse(member.socialLinks || "[]"); } catch { return []; }
  })();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[clamp(420px,70vh,720px)] flex-col overflow-hidden">
        {heroImageUrl ? (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImageUrl})`, transform: "scale(1.02)" }} />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-primary-dark/20 to-gray-900" />
        )}
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(180deg, rgba(15,12,8,0.02) 0%, rgba(12,10,7,0.15) 25%, rgba(12,10,7,0.55) 55%, rgba(12,10,7,0.88) 100%), linear-gradient(90deg, rgba(12,10,7,0.45) 0%, rgba(12,10,7,0) 55%)" }} />

        <div className="relative z-10 mt-auto w-full">
          <div className="mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6 pb-[clamp(40px,6vw,72px)]">
            <div className="max-w-[720px]">
              <nav className="mb-5 flex items-center gap-2 text-sm text-white/50">
                <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
                <span className="text-white/30">/</span>
                <Link href="/about" className="transition-colors hover:text-white/80">About</Link>
                <span className="text-white/30">/</span>
                <span className="text-white/80 truncate max-w-[250px]">{member.name}</span>
              </nav>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm">
                  {member.image ? (
                    <Image src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_120,h_120,q_auto,f_auto/${member.image}`} alt={member.name} width={64} height={64} className="rounded-full object-cover" />
                  ) : (
                    <User className="h-7 w-7 text-white/70" />
                  )}
                </div>
                <div>
                  <h1 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight text-white">
                    {member.name}
                  </h1>
                  <p className="mt-1 text-lg text-white/70">{member.role}</p>
                </div>
              </div>

              {/* Social links */}
              {socialLinks.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
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

      {/* ── Content + Sidebar (matching blog detail layout) ── */}
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6 py-8 pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* ── MAIN CONTENT ── */}
          <div className="lg:col-span-2">
            <div className="prose-custom rich-text max-w-none" dangerouslySetInnerHTML={{ __html: sanitizeRichText(member.bio) }} />

            {/* Back link */}
            <div className="mt-16 border-t border-border pt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to About
              </Link>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="space-y-8 lg:sticky lg:top-24">
              {/* Know More About Our Team */}
              {sidebarMembers.length > 0 && (
                <div className="rounded-2xl border border-border/40 shadow-sm overflow-hidden">
                  <div className="border-b border-border/40 px-5 py-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">
                      Our Team
                    </h3>
                  </div>
                  <div className="divide-y divide-border/40">
                    {sidebarMembers.map((other) => (
                      <Link
                        key={other.slug}
                        href={`/about/team/${other.slug}`}
                        className="flex items-center gap-3 px-5 py-4 transition-colors hover:opacity-70"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          {other.image ? (
                            <Image src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_80,h_80,q_auto,f_auto/${other.image}`} alt={other.name} width={40} height={40} className="rounded-full object-cover" />
                          ) : (
                            <User className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-foreground truncate">{other.name}</p>
                          <p className="text-xs text-text-muted truncate">{other.role}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-text-muted" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Latest Articles ── */}
              {latestPosts.length > 0 && (
                <div className="rounded-2xl border border-border/40 shadow-sm overflow-hidden">
                  <div className="border-b border-border/40 px-5 py-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">
                      Latest Articles
                    </h3>
                  </div>
                  <div className="divide-y divide-border/40">
                    {latestPosts.map((post) => {
                      const tags: string[] = (() => {
                        try { const t = JSON.parse(post.tags); return Array.isArray(t) ? t : []; } catch { return []; }
                      })();
                      return (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-3 px-5 py-4 transition-colors hover:opacity-70"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 overflow-hidden">
                            {post.heroImage ? (
                              <Image
                                src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_80,h_80,q_auto,f_auto/${post.heroImage}`}
                                alt={post.title}
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <span className="text-xs font-bold text-primary">
                                {post.title?.charAt(0)?.toUpperCase() || "?"}
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">{post.title}</p>
                            <div className="mt-1 flex flex-wrap gap-1">
                              {tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary/80">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
