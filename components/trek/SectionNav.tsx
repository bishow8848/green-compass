"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Route,
  CheckCircle,
  DollarSign,
  Map,
  HelpCircle,
  Mail,
  CalendarDays,
  CalendarCheck,
  Images,
} from "lucide-react";
import { useGalleryLightbox } from "./GalleryContext";

interface SectionNavProps {
  slug: string;
  hasItinerary?: boolean;
  hasInclusions?: boolean;
  hasPricing?: boolean;
  hasFaqs?: boolean;
  hasFixedDepartures?: boolean;
  hasGallery?: boolean;
  sectionOrder?: string[];
}

// Small screens only have room for the four core sections; the rest of the
// nav appears from lg upwards.
const MOBILE_SECTION_IDS = ["itinerary", "inEx", "pricing", "map"];

export function SectionNav({
  slug,
  hasItinerary = true,
  hasInclusions = true,
  hasPricing = true,
  hasFaqs = true,
  hasFixedDepartures = false,
  hasGallery = false,
  sectionOrder,
}: SectionNavProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const { isLightboxOpen } = useGalleryLightbox();

  // Build nav items and sort by the saved section order
  const sections = [
    hasItinerary && { id: "itinerary", label: "Itinerary", icon: Route },
    hasInclusions && { id: "inEx", label: "Inclusions", icon: CheckCircle },
    hasPricing && { id: "pricing", label: "Pricing", icon: DollarSign },
    hasFixedDepartures && { id: "fixedDepartures", label: "Fix Departure", icon: CalendarDays },
    { id: "map", label: "Map", icon: Map },
    hasFaqs && { id: "faqs", label: "FAQs", icon: HelpCircle },
    hasGallery && { id: "gallery", label: "Gallery", icon: Images },
    { id: "contact", label: "Contact", icon: Mail },
  ].filter(Boolean) as { id: string; label: string; icon: any }[];

  // Sort nav items to match the page section order
  if (sectionOrder && sectionOrder.length > 0) {
    const orderMap: Record<string, number> = {};
    sectionOrder.forEach((id, i) => { orderMap[id] = i; });
    sections.sort((a, b) => (orderMap[a.id] ?? 999) - (orderMap[b.id] ?? 999));
  }

  // Split each set around the centered booking CTA
  const splitAroundCta = (items: typeof sections) => {
    const half = Math.ceil(items.length / 2);
    return [items.slice(0, half), items.slice(half)] as const;
  };
  const [desktopLeft, desktopRight] = splitAroundCta(sections);
  const [mobileLeft, mobileRight] = splitAroundCta(
    sections.filter((s) => MOBILE_SECTION_IDS.includes(s.id))
  );

  useEffect(() => {
    // Observe sections for active state
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    // Observe hero to hide nav when hero is visible
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const hero = document.getElementById("hero");
    if (hero) heroObserver.observe(hero);

    // Observe footer to hide nav when visible
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const footer = document.querySelector("footer");
    if (footer) footerObserver.observe(footer);

    return () => {
      sectionObserver.disconnect();
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections.length]);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderItem({ id, label, icon: Icon }: { id: string; label: string; icon: any }) {
    const isActive = activeId === id;
    return (
      <button
        key={id}
        onClick={() => scrollToSection(id)}
        className="group relative flex min-h-[45px] min-w-[45px] flex-1 flex-col items-center justify-center gap-1 px-1 py-1.5 sm:px-2 lg:min-w-0 lg:flex-none lg:px-3"
      >
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 sm:h-8 sm:w-8 ${
            isActive
              ? "-translate-y-0.5 bg-primary text-white shadow-md shadow-primary/30"
              : "text-white/55 group-hover:bg-white/10 group-hover:text-white"
          }`}
        >
          <Icon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={isActive ? 2.25 : 2} />
        </span>
        <span
          className={`w-full truncate text-center text-[8.5px] font-semibold tracking-wide transition-colors duration-300 sm:text-[9.5px] ${
            isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
          }`}
        >
          {label}
        </span>
      </button>
    );
  }

  return (
    <nav
      className={`pointer-events-none fixed bottom-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-out ${
        isHeroVisible || isFooterVisible || isLightboxOpen
          ? "translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* 1fr / auto / 1fr keeps the CTA optically centered: the two side
          columns always resolve to the same width, full-bleed on mobile and
          shrink-to-fit inside the desktop pill. */}
      <div
        className="pointer-events-auto grid w-full grid-cols-[1fr_auto_1fr] items-end gap-0.5 bg-secondary px-1.5 py-2 shadow-[0_-4px_24px_rgba(0,0,0,0.18)] backdrop-blur-md sm:mb-4 sm:w-auto sm:gap-1 sm:rounded-full sm:px-3 sm:py-2 sm:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] sm:ring-1 sm:ring-white/10"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <div className="min-w-0">
          <div className="flex items-end justify-around lg:hidden">
            {mobileLeft.map(renderItem)}
          </div>
          <div className="hidden items-end justify-around lg:flex">
            {desktopLeft.map(renderItem)}
          </div>
        </div>

        {/* Booking CTA — raised out of the bar */}
        <div className="flex shrink-0 flex-col items-center px-1.5 pb-1.5 sm:px-3">
          <Link
            href={`/book/${slug}`}
            aria-label="Book this trip"
            className="-mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 ring-[5px] ring-secondary transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/50 active:scale-95 sm:-mt-8 sm:h-[3.75rem] sm:w-[3.75rem]"
          >
            <CalendarCheck className="h-6 w-6" strokeWidth={2.25} />
          </Link>
          <span className="mt-1 text-center text-[8.5px] font-semibold tracking-wide text-white sm:text-[9.5px]">
            Book Now
          </span>
        </div>

        <div className="min-w-0">
          <div className="flex items-end justify-around lg:hidden">
            {mobileRight.map(renderItem)}
          </div>
          <div className="hidden items-end justify-around lg:flex">
            {desktopRight.map(renderItem)}
          </div>
        </div>
      </div>
    </nav>
  );
}
