import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight, Mountain } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { SearchBar } from "@/components/search/SearchBar";
import { demoteH1, injectHeadingIds } from "@/lib/headings";
import { sanitizeRichText } from "@/lib/sanitize";
import { extractFaqsFromHtml } from "@/lib/faq-block";
import { getBlogRelations } from "@/lib/blog-related";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { BlogCard } from "@/components/blog/BlogCard";
import { RichTextContent } from "@/components/blog/RichTextContent";
import { TrekCard, trekCardSelect } from "@/components/trek/TrekCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ContactFormSection } from "@/components/home/ContactFormSection";
import { SITE_URL, brandedTitle, ogImages, seoDescription, seoImageUrl, serializeJsonLd } from "@/lib/seo";

// Blog post is cached for 7 days and refreshed on-demand after CMS edits (revalidatePath)
export const revalidate = 604800;

const MAX_RELATED_TREKS = 6;
const MAX_RELATED_POSTS = 3;

/** Reading time from the stored HTML — the figure the article header shows. */
function readTimeMinutes(html: string | null): number {
  return Math.max(1, Math.round((html?.split(/\s+/).length || 0) / 200));
}

function parseTags(json: string): string[] {
  try {
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Put rows back in `slugs` order — that order is the ranking, and findMany drops it. */
function inSlugOrder<T extends { slug: string }>(rows: T[], slugs: string[]): T[] {
  return slugs.flatMap((slug) => rows.filter((row) => row.slug === slug));
}

async function getRelatedTreks(slugs: string[]) {
  if (slugs.length === 0) return [];
  // Keyed by the slug list, so a changed list never reads a stale entry; the
  // treks* prefix is cleared whenever a trek is edited.
  const rows = await getCachedOrFetch(
    `treks:cards:${slugs.join(",")}`,
    () => prisma.trek.findMany({
      where: { slug: { in: slugs }, status: "published", categoryId: { not: null } },
      select: trekCardSelect,
    }),
    CACHE_TTL.MODERATE
  );
  return inSlugOrder(rows, slugs).slice(0, MAX_RELATED_TREKS);
}

async function getRelatedPosts(slugs: string[]) {
  if (slugs.length === 0) return [];
  const rows = await getCachedOrFetch(
    `blog:cards:${slugs.join(",")}`,
    async () => {
      const posts = await prisma.blogPost.findMany({
        where: { slug: { in: slugs }, status: "published" },
        select: {
          slug: true, title: true, excerpt: true, heroImage: true, tags: true,
          publishedDate: true, author: true, authorSlug: true, content: true,
        },
      });
      // The body is only needed for the read time, so it is not cached.
      return posts.map(({ content, ...post }) => ({ ...post, readTime: readTimeMinutes(content) }));
    },
    CACHE_TTL.DAILY
  );
  return inSlugOrder(rows, slugs).slice(0, MAX_RELATED_POSTS);
}

/** A card grid after the article, styled like Similar Treks on a trek page. */
function CardSection({
  id,
  heading,
  description,
  className = "pt-12 sm:pt-16",
  children,
}: {
  id: string;
  heading: string;
  description: string; 
  className?: string;
  children: ReactNode;
}) {
  return (
    // data-toc lists the section in the sidebar's contents
    <section id={id} data-toc={heading} className={className}>
      <div className="mb-10 max-w-2xl">
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: "var(--color-secondary)" }}>
          {heading}
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {description}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{children}</div>
    </section>
  );
}

export async function generateStaticParams() {
  return prisma.blogPost.findMany({
    where: { status: "published" },
    select: { slug: true },
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCachedOrFetch(
    cacheKeys.blogPostMeta(slug),
    () => prisma.blogPost.findUnique({
      where: { slug },
      select: { title: true, excerpt: true, metaTitle: true, metaDescription: true, keywords: true, heroImage: true, ogImage: true, publishedDate: true, updatedAt: true, author: true },
    }),
    CACHE_TTL.DAILY
  );
  if (!post) return {};

  const socialImageUrl = seoImageUrl(post.ogImage || post.heroImage);
  const title = brandedTitle(post.metaTitle || post.title).absolute;
  const description = seoDescription(
    post.metaDescription || post.excerpt,
    `Read ${post.title} and get practical advice for trekking in Nepal.`
  );

  return {
    title: { absolute: title },
    description,
    keywords: post.keywords || undefined,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: "Green Compass Treks",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedDate ? new Date(post.publishedDate).toISOString() : undefined,
      modifiedTime: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
      authors: [post.author || "Green Compass Treks"],
      images: ogImages(socialImageUrl, post.title),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: socialImageUrl ? [socialImageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getCachedOrFetch(
    cacheKeys.blogPost(slug),
    () => prisma.blogPost.findUnique({
      where: { slug, status: "published" },
      include: { authorRef: { select: { name: true, slug: true, avatar: true, role: true } } },
    }),
    CACHE_TTL.DAILY
  );

  if (!post) notFound();

  const relations = getBlogRelations(slug, post.content || "");

  // Keep the blog CTA in sync with the contact form configured for the home
  // page instead of duplicating editable content for every article.
  const [homeSettings, relatedTreks, relatedPosts] = await Promise.all([
    getCachedOrFetch(
      cacheKeys.homeContactSettings,
      () => prisma.homePageSettings.findUnique({
        where: { id: "home-settings" },
        select: {
          contactHeading: true,
          contactDescription: true,
          contactInfoCards: true,
        },
      }),
      CACHE_TTL.MODERATE
    ),
    getRelatedTreks(relations.trekSlugs),
    getRelatedPosts(relations.postSlugs),
  ]);
  let contactInfoCards: { title: string; description: string }[] = [];
  if (homeSettings?.contactInfoCards) {
    try {
      const parsed = JSON.parse(homeSettings.contactInfoCards);
      if (Array.isArray(parsed)) contactInfoCards = parsed;
    } catch {
      // The contact component supplies safe defaults for malformed legacy data.
    }
  }

  const readTime = readTimeMinutes(post.content);
  const tags = parseTags(post.tags);

  const faqs: { question: string; answer: string }[] = (() => {
    try {
      const parsed = JSON.parse(post.faqs || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  })();

  // FAQs placed inline in the article body via FAQ blocks in the rich text editor
  const inlineFaqs = extractFaqsFromHtml(post.content || "");
  // Combined for SEO schema — inline blocks first, then the legacy bottom-of-page field
  const allFaqs = [...inlineFaqs, ...faqs];

  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const heroImageUrl = post.heroImage
    ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_1200,q_auto,f_auto/${post.heroImage}`
    : null;
  const articleDescription = seoDescription(
    post.metaDescription || post.excerpt,
    `Read ${post.title} and get practical advice for trekking in Nepal.`
  );
  // Google asks for Article images in 16:9, 4:3 and 1:1, each at least 1200px
  // wide — the size Discover's large cards require.
  const articleImageSource = post.heroImage || post.ogImage;
  const articleImages = articleImageSource
    ? [...new Set(["w_1200,h_675", "w_1200,h_900", "w_1200,h_1200"].map(
        (size) => seoImageUrl(articleImageSource, `c_fill,${size},q_auto,f_auto`) as string
      ))]
    : undefined;

  const overlayStyle = {
    background: `
      linear-gradient(180deg, rgba(15,12,8,0.02) 0%, rgba(12,10,7,0.15) 25%, rgba(12,10,7,0.55) 55%, rgba(12,10,7,0.88) 100%),
      linear-gradient(90deg, rgba(12,10,7,0.45) 0%, rgba(12,10,7,0) 55%)
    `,
  };

  return (
    <>
      {/* BreadcrumbList + Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: articleDescription,
            author: {
              "@type": "Person",
              // The same entity the author page declares, so every byline
              // resolves to one person.
              ...(post.authorSlug ? { "@id": `${SITE_URL}/author/${post.authorSlug}#person` } : {}),
              name: post.author || "Green Compass Treks",
              url: post.authorSlug ? `${SITE_URL}/author/${post.authorSlug}` : SITE_URL,
            },
            datePublished: post.publishedDate,
            dateModified: post.updatedAt || post.publishedDate,
            image: articleImages,
            url: `${SITE_URL}/blog/${slug}`,
            inLanguage: "en",
            keywords: tags.length > 0 ? tags.join(", ") : undefined,
            wordCount: post.content?.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length || undefined,
            publisher: {
              "@id": `${SITE_URL}/#organization`,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/blog/${slug}`,
            },
          }),
        }}
      />

      {/* FAQPage schema for SEO */}
      {allFaqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: allFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer?.slice(0, 500),
                },
              })),
            }),
          }}
        />
      )}

      {/* ── Hero (matching PageHero design) ── */}
      <section className="relative isolate flex min-h-[clamp(520px,82vh,860px)] flex-col overflow-hidden">
        {/* Background image or gradient fallback */}
      {heroImageUrl ? (
          <Image
            src={heroImageUrl}
            alt={`${post.title} — Green Compass Treks`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-primary-dark/20 to-gray-900" />
        )}

        {/* Decorative circles (only when no image) */}
        {!heroImageUrl && (
          <>
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          </>
        )}

        {/* Dual overlay (matches PageHero exactly) — always on top */}
        <div className="absolute inset-0 z-[1]" style={overlayStyle} />

        {/* Content — bottom-aligned, same wrapper as page content */}
        <div className="relative z-10 mt-auto w-full">
          <div className="mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6 pb-[clamp(48px,7vw,84px)]">
            <div className="max-w-[720px]">
          {/* Tags — transparent frosted style */}
          {tags.length > 0 && (
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title — same size as PageHero */}
          <h1 className="mb-6 text-[clamp(32px,5vw,58px)] font-bold leading-[1.08] tracking-tight text-white">
            {post.title}
          </h1>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/blog" className="transition-colors hover:text-white/80">Blog</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80 truncate max-w-[200px] sm:max-w-[400px]">{post.title}</span>
          </nav>

          {/* Search bar — after title */}
          <div className="mb-8 w-full max-w-xl">
            <SearchBar />
          </div>

          {/* Meta — author, date, read time */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60">
            {post.authorSlug ? (
              <Link
                href={`/author/${post.authorSlug}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white/90"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white/80 backdrop-blur-sm">
                  {post.author?.charAt(0)?.toUpperCase() || "?"}
                </span>
                {post.author}
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white/80 backdrop-blur-sm">
                  {post.author?.charAt(0)?.toUpperCase() || "?"}
                </span>
                {post.author}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {readTime} min read
            </span>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article with sidebar (matching product page layout) ── */}
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6 py-8 pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* ── MAIN CONTENT ──
              min-w-0 lets the grid column shrink below a wide table, so the
              table scrolls inside its wrapper instead of widening the page. */}
          <div className="flex min-w-0 flex-col space-y-0 lg:col-span-2">
            {/* Content */}
            <article className="blog-content">
              <RichTextContent html={sanitizeRichText(injectHeadingIds(demoteH1(post.content || "")))} />
            </article>

            {/* FAQs (like the trek detail page). This and the sections below
                carry data-toc, which adds them to the sidebar's contents. */}
            {faqs.length > 0 && (
              <div id="blog-faq-section" data-toc="Frequently Asked Questions">
                <FAQAccordion
                  items={faqs}
                  heading="Frequently Asked Questions"
                  id="blog-faqs"
                  contained={false}
                  size="lg"
                  className="py-10 sm:py-12"
                />
              </div>
            )}

            {/* Section ids carry a blog- prefix so they can't collide with the
                ids injectHeadingIds gives the article's own h2s. */}
            <div id="blog-contact" data-toc="Contact Us">
              <ContactFormSection
                heading={homeSettings?.contactHeading}
                description={homeSettings?.contactDescription}
                infoCards={contactInfoCards}
                className="mt-12"
                embedded
              />
            </div>

            {/* Trips this article covers — after the contact form */}
            {relatedTreks.length > 0 && (
              <CardSection
                id="blog-related-treks"
                heading="Related Treks"
                description={relations.note || "Trips we run that this article covers."}
              >
                {relatedTreks.map((trek) => (
                  <TrekCard key={trek.id} trek={trek} href={`/${trek.category?.slug}/${trek.slug}`} />
                ))}
              </CardSection>
            )}

            {/* Further reading — last, like Similar Treks on a trek page */}
            {relatedPosts.length > 0 && (
              <CardSection
                id="blog-keep-reading"
                heading="Keep Reading"
                description="More guides to help you plan your trip."
              >
                {relatedPosts.map((related) => (
                  <BlogCard
                    key={related.slug}
                    slug={related.slug}
                    title={related.title}
                    excerpt={related.excerpt}
                    heroImage={related.heroImage}
                    tags={parseTags(related.tags)}
                    date={new Date(related.publishedDate).toISOString().slice(0, 10)}
                    readTime={`${related.readTime} min read`}
                    author={related.author}
                    authorSlug={related.authorSlug}
                  />
                ))}
              </CardSection>
            )}

            {/* Article author/footer — intentionally last */}
            <div className="mt-16 border-t border-border pt-8">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  {post.authorSlug ? (
                    <Link href={`/author/${post.authorSlug}`} className="flex items-center gap-3 group">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        {post.author?.charAt(0)?.toUpperCase() || "?"}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">{post.author}</p>
                        {post.authorRef?.role && <p className="text-xs text-text-muted">{post.authorRef.role}</p>}
                        <p className="text-xs text-text-muted">Published on {formattedDate}</p>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {post.author?.charAt(0)?.toUpperCase() || "?"}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{post.author}</p>
                        <p className="text-xs text-text-muted">Published on {formattedDate}</p>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark"
                >
                  <ArrowLeft className="h-4 w-4" />
                  More Articles
                </Link>
              </div>
            </div>
          </div>

          {/* ── SIDEBAR ──
              NOTE: no "hidden" here anymore. BlogSidebar renders on every
              breakpoint and internally decides what to show:
              - below lg: a fixed hamburger button + slide-in panel
              - lg and up: the docked sidebar panel
              Wrapping it in "hidden lg:block" previously unmounted the
              whole component (hamburger included) on mobile. */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
