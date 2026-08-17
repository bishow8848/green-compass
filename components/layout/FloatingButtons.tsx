"use client";

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navOffset, setNavOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lift the buttons above the SectionNav on small screens (product pages)
  // while the nav is visible. On larger screens the buttons sit at the bottom,
  // alongside the centered section nav. The section nav can mount *after* this
  // component (route change / hydration), so we watch the DOM for it instead of
  // querying once on mount.
  useEffect(() => {
    let sectionNav: HTMLElement | null = null;
    let attrObserver: MutationObserver | null = null;

    const applyOffset = () => {
      if (!sectionNav) {
        setNavOffset(0);
        return;
      }
      // Desktop: keep the buttons on the bottom row, next to the centered nav.
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const isHidden = sectionNav.classList.contains("translate-y-full");
      if (isDesktop || isHidden) {
        setNavOffset(0);
      } else {
        const navHeight = sectionNav.getBoundingClientRect().height;
        setNavOffset(Math.max(navHeight + 16, 88));
      }
    };

    const watch = (nav: HTMLElement) => {
      attrObserver?.disconnect();
      sectionNav = nav;
      attrObserver = new MutationObserver(applyOffset);
      attrObserver.observe(nav, { attributes: true, attributeFilter: ["class"] });
      applyOffset();
    };

    // React to the nav being added, removed, or replaced (hydration, route changes)
    const domObserver = new MutationObserver(() => {
      const nav = document.querySelector("nav.fixed.bottom-0");
      if (nav && nav !== sectionNav) {
        watch(nav as HTMLElement);
      } else if (!nav && sectionNav) {
        attrObserver?.disconnect();
        attrObserver = null;
        sectionNav = null;
        setNavOffset(0);
      }
    });
    domObserver.observe(document.body, { childList: true, subtree: true });

    const initial = document.querySelector("nav.fixed.bottom-0");
    if (initial) watch(initial as HTMLElement);

    const onResize = () => applyOffset();
    window.addEventListener("resize", onResize);

    return () => {
      domObserver.disconnect();
      attrObserver?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed right-4 bottom-4 z-40 flex flex-col items-center gap-3 transition-all duration-300 sm:right-6 sm:bottom-6"
      style={{ bottom: navOffset > 0 ? `${navOffset}px` : undefined }}
    >
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:-translate-y-0.5 ${
          showScrollTop
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/9779864379436"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:bg-[#22c35e] hover:shadow-xl hover:-translate-y-0.5"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
