"use client";

import { useState, useCallback } from "react";
import { Star, Quote, X } from "lucide-react";
import { AnimatePresence, stagger } from "framer-motion";
import * as m from "framer-motion/m";
import { Reveal } from "@/components/motion";
import { EASE_OUT, SPRING_SNAPPY, SPRING_SOFT } from "@/components/motion/presets";

/** Reviews slide in from the side you are moving towards. */
const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE_OUT } },
  exit: (direction: number) => ({ opacity: 0, x: direction * -40, transition: { duration: 0.2 } }),
};

const starRowVariants = {
  enter: {},
  center: { transition: { delayChildren: stagger(0.06, { startDelay: 0.15 }) } },
};
const starVariants = {
  enter: { scale: 0, rotate: -45 },
  center: { scale: 1, rotate: 0, transition: SPRING_SNAPPY },
};

interface Review {
  id: string;
  author: string;
  rating: number;
  heading: string | null;
  text: string;
  createdAt?: string;
  trek?: {
    title: string;
    slug: string;
    category: { slug: string } | null;
  } | null;
}

const MAX_PREVIEW_LENGTH = 200;

export function ReviewCarousel({
  reviews,
  heading,
  description,
  variant = "section",
}: {
  reviews: Review[];
  heading?: string | null;
  description?: string | null;
  /**
   * "section" renders the full homepage band (own <section>, container, heading).
   * "bare" renders only the card + dots, for pages that supply their own heading
   * and container — e.g. the trek detail page's Guest Reviews section.
   */
  variant?: "section" | "bare";
}) {
  const [[activeIndex, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [expandedReview, setExpandedReview] = useState<Review | null>(null);

  const goTo = useCallback((index: number) => {
    const next = ((index % reviews.length) + reviews.length) % reviews.length;
    setSlide(([current]) => [next, next >= current ? 1 : -1]);
  }, [reviews.length]);

  if (!reviews.length) return null;
  const current = reviews[activeIndex] ?? reviews[0];
  const isLong = current.text.length > MAX_PREVIEW_LENGTH;
  const previewText = isLong ? current.text.slice(0, MAX_PREVIEW_LENGTH) : current.text;

  const carousel = (
    <>
      {/* Review Card */}
      <Reveal from="scale" className="relative rounded-[40px] bg-gradient-to-br from-primary/10 to-secondary/10 p-1">
        <div className="relative overflow-hidden rounded-[38px] bg-surface shadow-xl shadow-secondary/5">

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <m.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative p-8 sm:p-12"
            >
              <Quote size={100} className="absolute -right-4 -top-4 rotate-12 text-primary/5" />

              {/* Rating */}
              <m.div variants={starRowVariants} className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <m.span key={i} variants={starVariants} className="inline-flex">
                    <Star
                      className={`h-6 w-6 ${i < current.rating ? "fill-primary text-primary" : "text-border"}`}
                    />
                  </m.span>
                ))}
              </m.div>

              {current.heading && (
                <h3 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">
                  {current.heading}
                </h3>
              )}

              {/* Review Text */}
              <blockquote className={`${current.heading ? "mt-4" : "mt-8"} text-xl leading-9 text-text sm:text-2xl font-light italic`}>
                “{previewText}{isLong ? "..." : "”"}
                {isLong && (
                  <button
                    onClick={() => setExpandedReview(current)}
                    className="ml-2 whitespace-nowrap text-base font-semibold not-italic text-primary underline underline-offset-4 transition-colors hover:text-primary-dark"
                  >
                    Read more
                  </button>
                )}
              </blockquote>

              {/* Author */}
              <div className="mt-10 border-t border-border pt-8">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-lg font-semibold text-white">
                    {current.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{current.author}</h3>
                    {current.trek && (
                    <a
                      href={`/${current.trek.category?.slug || "treks"}/${current.trek.slug}`}
                      className="mt-1 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      {current.trek.title}
                    </a>
                    )}
                  </div>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </Reveal>

      {/* Dots Indicator */}
      {reviews.length > 1 && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {reviews.map((_, i) => (
            <m.button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === activeIndex ? "true" : undefined}
              initial={false}
              animate={{ width: i === activeIndex ? 32 : 10 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.85 }}
              transition={SPRING_SNAPPY}
              className={`h-2.5 rounded-full transition-colors duration-300 ${
                i === activeIndex
                  ? "bg-primary shadow-sm shadow-primary/40"
                  : "bg-secondary/25 ring-1 ring-inset ring-secondary/20 hover:bg-secondary/40 hover:ring-secondary/30"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );

  // z-[70] sits above the sticky header and the trek page's SectionNav (both
  // z-50), the floating buttons (z-40) and the mobile nav drawer (z-[60]), so
  // they fall behind the backdrop blur instead of painting sharp on top of it.
  const modal = (
    <AnimatePresence>
    {expandedReview && (
      <m.div
        key="review-modal"
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        onClick={() => setExpandedReview(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <m.div
          role="dialog"
          aria-modal="true"
          className="relative w-full max-w-2xl rounded-2xl bg-surface p-8 shadow-2xl sm:p-10"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1, transition: SPRING_SOFT }}
          exit={{ opacity: 0, y: 16, scale: 0.98, transition: { duration: 0.18 } }}
        >
          <button
            onClick={() => setExpandedReview(null)}
            className="absolute right-4 top-4 rounded-xl p-1.5 text-text-muted transition-colors hover:bg-surface-alt hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Rating */}
          <div className="flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < expandedReview.rating ? "fill-primary text-primary" : "text-border"}`}
              />
            ))}
          </div>

          {expandedReview.heading && (
            <h3 className="mt-5 text-2xl font-bold text-foreground">
              {expandedReview.heading}
            </h3>
          )}

          {/* Full text */}
          <blockquote className={`${expandedReview.heading ? "mt-3" : "mt-6"} text-base leading-8 text-text sm:text-lg`}>
            “{expandedReview.text}”
          </blockquote>

          {/* Author */}
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-base font-semibold text-white">
              {expandedReview.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-foreground">{expandedReview.author}</p>
              {expandedReview.trek && (
                  <a
                    href={`/${expandedReview.trek.category?.slug || "treks"}/${expandedReview.trek.slug}`}
                    className="text-sm font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
                  >
                    {expandedReview.trek.title}
                  </a>
                )}
            </div>
          </div>
        </m.div>
      </m.div>
    )}
    </AnimatePresence>
  );

  if (variant === "bare") {
    return (
      <>
        {carousel}
        {modal}
      </>
    );
  }

  return (
    <>
      <section className="bg-background py-12 sm:py-16" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <Reveal className="text-center">
            <h2 id="reviews-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
              {heading || "What Our Trekkers Say"}
            </h2>
            <p className="mt-3 text-base text-text-muted">
              {description || "Real experiences shared by our happy trekkers."}
            </p>
          </Reveal>

          <div className="mt-12">{carousel}</div>
        </div>
      </section>

      {/* Full Review Modal */}
      {modal}
    </>
  );
}
