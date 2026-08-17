import Image from "next/image";
import { Quote, User } from "lucide-react";

const CLOUDINARY_BASE = "https://res.cloudinary.com/dk7ggjvlw/image/upload/";

interface FounderMessageProps {
  heading?: string;
  message?: string;
  founderName?: string;
  founderRole?: string;
  founderImage?: string;
  badge?: string;
}

export function FounderMessage({ heading, message, founderName, founderRole, founderImage, badge }: FounderMessageProps) {
  if (!message) return null;

  const resolvedImage = founderImage
    ? `${CLOUDINARY_BASE}c_fill,w_800,h_1000,q_auto,f_auto/${founderImage}`
    : null;

  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-border bg-surface shadow-lg lg:grid-cols-5">
          {/* ── Left: Full photo with gradient overlay and name/role at bottom ── */}
          <div className="relative min-h-[300px] lg:col-span-2 lg:min-h-[500px]">
            {resolvedImage ? (
              <>
                <Image
                  src={resolvedImage}
                  alt={founderName || "Founder"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Gradient shadow from bottom to top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" aria-hidden="true" />
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/5">
                <User className="h-20 w-20 text-primary/30" />
              </div>
            )}

            {/* Founder name & role at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              {founderName && (
                <p className="text-xl font-bold text-white">{founderName}</p>
              )}
              {founderRole && (
                <p className="mt-1 text-sm text-white/80">{founderRole}</p>
              )}
              {!founderName && !founderRole && (
                <>
                  <p className="text-xl font-bold text-white">Rajesh Gurung</p>
                  <p className="mt-1 text-sm text-white/80">Founder & Lead Guide, Mardi Treks</p>
                </>
              )}
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="relative flex flex-col justify-center px-6 py-10 sm:px-10 lg:col-span-3 lg:px-14 lg:py-16">
            {/* Decorative quote icon */}
            <Quote className="absolute right-6 top-6 h-16 w-16 text-primary/10" aria-hidden="true" />

            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
              {badge || "Founder&apos;s Note"}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {heading || "A Message from Our Founder"}
            </h2>

            {message && (
              <div className="mt-8 text-base leading-relaxed text-text-muted sm:text-lg sm:leading-8">
                &ldquo;{message}&rdquo;
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
