import Image from "next/image";
import { BookOpen, Star } from "lucide-react";

const CLOUDINARY_BASE = "https://res.cloudinary.com/dk7ggjvlw/image/upload/";

interface CompanyStoryProps {
  heading?: string;
  description?: string;
  image?: string;
  badge?: string;
  highlightLabel?: string;
  highlightTitle?: string;
}

export function CompanyStory({ heading, description, image, badge, highlightLabel, highlightTitle }: CompanyStoryProps) {
  if (!heading && !description) return null;

  const resolvedImage = image
    ? `${CLOUDINARY_BASE}c_fill,w_800,h_600,q_auto,f_auto/${image}`
    : null;

  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16">
      {/* Subtle ambient background glow (No background image) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Image side with layered framing */}
          {resolvedImage && (
            <div className="lg:col-span-6 relative">
              {/* Decorative backdrop shape */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-50 blur-lg" />
              
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src={resolvedImage}
                  alt={heading || "Our Story"}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>

              {/* Floating micro-badge card for extra UI flair */}
              {(highlightLabel || highlightTitle) && (
                <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-xl backdrop-blur-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary shadow-sm">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    {highlightLabel && <p className="text-xs font-medium text-muted-foreground">{highlightLabel}</p>}
                    {highlightTitle && <p className="text-sm font-bold text-foreground">{highlightTitle}</p>}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Content side */}
          <div className={resolvedImage ? "lg:col-span-6" : "lg:col-span-12 max-w-3xl mx-auto text-center"}>
            <div className={`flex items-center gap-3 ${!resolvedImage ? "justify-center" : ""}`}>
              <span className="h-px w-8 bg-secondary" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                {badge || "Our Story"}
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {heading || "Our Story"}
            </h2>

            {description && (
              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}