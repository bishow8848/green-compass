import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight, Mountain } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { SearchBar } from "@/components/search/SearchBar";
import { injectHeadingIds } from "@/lib/headings";
import { sanitizeRichText } from "@/lib/sanitize";
import { extractFaqsFromHtml } from "@/lib/faq-block";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { RichTextContent } from "@/components/blog/RichTextContent";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ContactFormSection } from "@/components/home/ContactFormSection";
import { SITE_URL, serializeJsonLd } from "@/lib/seo";

// Blog post is cached for 7 days and refreshed on-demand after CMS edits (revalidatePath)
export const revalidate = 604800;

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
      select: { title: true, excerpt: true, metaTitle: true, metaDescription: true, keywords: true, heroImage: true, publishedDate: true, updatedAt: true, author: true },
    }),
    CACHE_TTL.DAILY
  );
  if (!post) return {};

  const heroImageUrl = post.heroImage
    ? `https://res.cloudinary.com/dk7ggjvlw/image/upload/c_fill,w_1200,h_630,q_auto,f_auto/${post.heroImage}`
    : null;

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords || undefined,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: "Mardi Treks",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedDate ? new Date(post.publishedDate).toISOString() : undefined,
      modifiedTime: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
      authors: [post.author || "Mardi Treks"],
      images: heroImageUrl
        ? [{ url: heroImageUrl, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: heroImageUrl ? [heroImageUrl] : undefined,
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

  // Keep the blog CTA in sync with the contact form configured for the home
  // page instead of duplicating editable content for every article.
  const homeSettings = await getCachedOrFetch(
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
  );
  let contactInfoCards: { title: string; description: string }[] = [];
  if (homeSettings?.contactInfoCards) {
    try {
      const parsed = JSON.parse(homeSettings.contactInfoCards);
      if (Array.isArray(parsed)) contactInfoCards = parsed;
    } catch {
      // The contact component supplies safe defaults for malformed legacy data.
    }
  }

  const readTime = Math.max(1, Math.round((post.content?.split(/\s+/).length || 0) / 200));
  const tags: string[] = (() => {
    try {
      const parsed = JSON.parse(post.tags);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  })();

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
    ? `https://res.cloudinary.com/dk7ggjvlw/image/upload/c_fill,w_1200,q_auto,f_auto/${post.heroImage}`
    : null;

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
            description: post.metaDescription || post.excerpt,
            author: {
              "@type": "Person",
              name: post.author || "Mardi Treks",
              url: post.authorSlug ? `${SITE_URL}/author/${post.authorSlug}` : SITE_URL,
            },
            datePublished: post.publishedDate,
            dateModified: post.updatedAt || post.publishedDate,
            image: heroImageUrl || undefined,
            publisher: {
              "@type": "Organization",
              name: "Mardi Treks",
              url: SITE_URL,
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
            alt=""
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
          {/* ── MAIN CONTENT ── */}
          <div className="flex flex-col space-y-0 lg:col-span-2">
            {/* Content */}
            <article className="blog-content">
              <RichTextContent html={sanitizeRichText(injectHeadingIds(post.content || ""))} />
            </article>

            {/* FAQs (like the trek detail page) */}
            {faqs.length > 0 && (
              <FAQAccordion
                items={faqs}
                heading="Frequently Asked Questions"
                id="blog-faqs"
                contained={false}
                className="py-10 sm:py-12"
              />
            )}

            <ContactFormSection
              heading={homeSettings?.contactHeading}
              description={homeSettings?.contactDescription}
              infoCards={contactInfoCards}
              className="mt-12"
              embedded
            />

            {/* Article author/footer — intentionally last, after the contact form */}
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
