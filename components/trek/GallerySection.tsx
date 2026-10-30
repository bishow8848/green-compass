"use client";

import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { Reveal } from "@/components/motion";
import { EASE_OUT, SPRING_SNAPPY } from "@/components/motion/presets";
import { useGalleryLightbox } from "./GalleryContext";

/** Lightbox photos slide in from the side you are browsing towards. */
const photoVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 60, scale: 0.98 }),
  center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.35, ease: EASE_OUT } },
  exit: (direction: number) => ({ opacity: 0, x: direction * -60, transition: { duration: 0.2 } }),
};

interface GalleryImage {
  id?: string;
  imageId: string;
  alt: string | null;
  caption: string | null;
}

interface GallerySectionProps {
  images: GalleryImage[];
  title?: string;
  heading?: string;
  description?: string;
  trekTitle?: string;
  className?: string;
}

export default function GallerySection({
  images,
  heading = "Gallery",
  description,
  trekTitle = "",
  className,
}: GallerySectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // +1 when moving forward through the photos, -1 when moving back.
  const [direction, setDirection] = useState(1);
  const { setLightboxOpen } = useGalleryLightbox();

  /** Move one photo forward (+1) or back (-1), wrapping at the ends. */
  const step = (delta: 1 | -1) => {
    setDirection(delta);
    setLightboxIndex((prev) => (prev === null ? null : (prev + delta + images.length) % images.length));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      // Same as step(), inlined so the listener only depends on the photo count.
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const delta = e.key === "ArrowRight" ? 1 : -1;
        setDirection(delta);
        setLightboxIndex((prev) => (prev === null ? null : (prev + delta + images.length) % images.length));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    setLightboxOpen(lightboxIndex !== null);
  }, [lightboxIndex, setLightboxOpen]);

  // Prevent the page from scrolling while the lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [lightboxIndex]);

  // Swipe support for the mobile lightbox (arrows are hidden on small screens)
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      step(deltaX < 0 ? 1 : -1);
    }
    touchStartX.current = null;
  };

  if (!images?.length) return null;

  return (
    <section id="gallery" className={className || "py-16"}>
      <Reveal
        as="h2"
        className="mb-2 text-2xl font-bold"
        style={{ color: "var(--color-secondary)" }}
      >
        {heading}
      </Reveal>
      {description && (
        <Reveal as="p" delay={0.06} className="mb-6 text-sm" style={{ color: "var(--color-text-muted)" }}>
          {description}
        </Reveal>
      )}

      {/* Swipeable strip on mobile, grid on larger screens */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 sm:snap-none lg:grid-cols-3">
        {images.map((img: GalleryImage, idx: number) => (
          <Reveal
            key={img.id || idx}
            from="scale"
            delay={(idx % 3) * 0.07}
            className="w-[80%] shrink-0 snap-start sm:w-auto sm:snap-none"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-full w-full overflow-hidden rounded-2xl text-left cursor-zoom-in"
              style={{
                backgroundColor: "var(--color-surface-alt)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${img.imageId}`}
                  alt={img.alt || `${trekTitle} photo`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {img.caption && (
                <div className="px-3 py-2">
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    {img.caption}
                  </p>
                </div>
              )}
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
      {lightboxIndex !== null && (
        <m.div
          key="lightbox"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90"
          onClick={() => setLightboxIndex(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {/* Close button */}
          <m.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={SPRING_SNAPPY}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </m.button>

          {/* Previous button */}
          <m.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={SPRING_SNAPPY}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </m.button>

          {/* Next button */}
          <m.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={SPRING_SNAPPY}
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </m.button>

          {/* Image container */}
          <div
            className="relative flex h-full w-full max-w-5xl flex-col items-center justify-center px-4 py-16"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-full w-full overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <m.div
                  key={lightboxIndex}
                  custom={direction}
                  variants={photoVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${images[lightboxIndex].imageId}`}
                    alt={images[lightboxIndex].alt || `${trekTitle} photo`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </m.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              {images[lightboxIndex].caption && (
                <m.p
                  key={lightboxIndex}
                  className="mt-4 text-center text-sm text-white/80"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {images[lightboxIndex].caption}
                </m.p>
              )}
            </AnimatePresence>
          </div>
        </m.div>
      )}
      </AnimatePresence>
    </section>
  );
}
