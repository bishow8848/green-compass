"use client";

import { useState, useCallback } from "react";
import { Star, Quote, X } from "lucide-react";

interface Review {
  id: string;
  author: string;
  rating: number;
  heading: string | null;
  text: string;
  createdAt: string;
  trek: {
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
}: {
  reviews: Review[];
  heading?: string | null;
  description?: string | null;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedReview, setExpandedReview] = useState<Review | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % reviews.length) + reviews.length) % reviews.length);
  }, [reviews.length]);

  if (!reviews.length) return null;
  const current = reviews[activeIndex];
  const isLong = current.text.length > MAX_PREVIEW_LENGTH;
  const previewText = isLong ? current.text.slice(0, MAX_PREVIEW_LENGTH) : current.text;

  return (
    <>
      <section className="bg-background py-12 sm:py-16" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center">
            <h2 id="reviews-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
              {heading || "What Our Trekkers Say"}
            </h2>
            <p className="mt-3 text-base text-text-muted">
              {description || "Real experiences shared by our happy trekkers."}
            </p>
          </div>

          {/* Review Card */}
          <div className="mt-12">
            <div className="relative rounded-[40px] bg-gradient-to-br from-primary/10 to-secondary/10 p-1">
              <div className="relative overflow-hidden rounded-[38px] bg-surface shadow-xl shadow-secondary/5">
                
                <div className="relative p-8 sm:p-12">
                  <Quote size={100} className="absolute -right-4 -top-4 rotate-12 text-primary/5" />

                  {/* Rating */}
                  <div className="flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${i < current.rating ? "fill-primary text-primary" : "text-border"}`}
                      />
                    ))}
                  </div>

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
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          {reviews.length > 1 && (
            <div className="mt-10 flex items-center justify-center gap-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 h-2.5 bg-primary shadow-sm shadow-primary/40"
                      : "w-2.5 h-2.5 bg-secondary/25 ring-1 ring-inset ring-secondary/20 hover:bg-secondary/40 hover:ring-secondary/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full Review Modal */}
      {expandedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setExpandedReview(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-surface p-8 shadow-2xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
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
          </div>
        </div>
      )}
    </>
  );
}
