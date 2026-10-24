"use client";

import { Fragment, useState, useEffect, startTransition } from "react";
import { AnimatePresence, stagger } from "framer-motion";
import * as m from "framer-motion/m";
import { Reveal } from "@/components/motion";
import { EASE_OUT, SPRING_SNAPPY, SPRING_SOFT } from "@/components/motion/presets";

type TocItem = {
  id: string;
  title: string;
  level?: number;
};

type BlogSidebarProps = {
  tocItems?: TocItem[];
};

export default function BlogSidebar({ tocItems: providedItems }: BlogSidebarProps) {
  const [autoItems, setAutoItems] = useState<TocItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  // If no tocItems prop is passed, build the TOC from the article's own
  // headings plus the page sections that opt in with data-toc (FAQs, related
  // treks, contact form, further reading), in page order.
  useEffect(() => {
    if (providedItems) return;

    const elements = document.querySelectorAll<HTMLElement>("article.blog-content h2, [data-toc]");
    const items: TocItem[] = [];

    elements.forEach((el) => {
      const title = el.dataset.toc || el.textContent || "";
      const id = el.id || title.toLowerCase().replace(/\s+/g, "-");
      if (!el.id) el.id = id;
      items.push({ id, title });
    });

    startTransition(() => setAutoItems(items));
  }, [providedItems]);

  const tocItems = providedItems ?? autoItems;

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!tocItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  if (!tocItems.length) return null;

  return (
    <>
      {/* Menu Button - Hidden on lg and above, positioned left, slightly below top */}
      <m.button
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0, transition: { ...SPRING_SNAPPY, delay: 0.4 } }}
        whileTap={{ scale: 0.9 }}
        className="lg:hidden fixed top-[5.5rem] left-4 flex items-center justify-center h-10 w-10 rounded-lg border border-border/40 backdrop-blur-md shadow-sm transition-opacity duration-300 hover:opacity-70 z-40"
        aria-label="Open table of contents"
        title="Table of Contents"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 text-foreground"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </m.button>

      {/* Desktop sidebar - Hidden below lg */}
      <Reveal from="right" className="hidden lg:flex lg:flex-col rounded-2xl border border-border/40 shadow-sm overflow-hidden max-h-[70vh]">
        <div className="shrink-0 px-6 py-6 border-b border-border/40">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-6 rounded-full bg-primary" />
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">
              Contents
            </h3>
          </div>
        </div>
        <nav className="flex-1 min-h-0 overflow-y-auto p-3">
          <TocList tocItems={tocItems} activeId={activeId} onItemClick={handleItemClick} />
        </nav>
      </Reveal>

      {/* Mobile modal */}
      <AnimatePresence>
      {isOpen && (
        <Fragment key="toc-modal">
          <m.div
            key="toc-backdrop"
            className="fixed inset-0 bg-black/50 lg:hidden z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <m.div
            key="toc-drawer"
            className="fixed top-0 left-0 h-screen w-80 max-w-[90vw] bg-surface border-r border-border/60 shadow-2xl overflow-hidden lg:hidden z-50 flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: SPRING_SOFT }}
            exit={{ x: "-100%", transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] } }}
          >
            <div className="shrink-0 px-6 py-6 border-b border-border/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-6 rounded-full bg-primary" />
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">
                  Contents
                </h3>
              </div>

              <m.button
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.85, rotate: 90 }}
                className="flex items-center justify-center h-8 w-8 rounded-lg transition-opacity duration-300 hover:opacity-70"
                aria-label="Close table of contents"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 text-foreground"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </m.button>
            </div>

            <nav className="flex-1 min-h-0 overflow-y-auto p-3">
              <TocList tocItems={tocItems} activeId={activeId} onItemClick={handleItemClick} staggered />
            </nav>
          </m.div>
        </Fragment>
      )}
      </AnimatePresence>
    </>
  );
}

function TocList({
  tocItems,
  activeId,
  onItemClick,
  staggered = false,
}: {
  tocItems: TocItem[];
  activeId: string;
  onItemClick: (id: string) => void;
  /** Cascade the entries in (the mobile drawer, each time it opens). */
  staggered?: boolean;
}) {
  return (
    <m.div
      className="flex flex-col gap-1"
      initial={staggered ? "hidden" : false}
      animate="visible"
      variants={{ visible: { transition: { delayChildren: stagger(0.03, { startDelay: 0.15 }) } } }}
    >
      {tocItems.map((item, index) => {
        const isActive = activeId === item.id;
        return (
          <m.a
            key={`${item.id}-${index}`}
            variants={{
              hidden: { opacity: 0, x: -12 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE_OUT } },
            }}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              onItemClick(item.id);
            }}
            className={`toc-link group relative px-4 py-3 flex items-center gap-3 rounded-xl transition-opacity duration-300 hover:opacity-70 ${
              isActive ? "opacity-80" : ""
            }`}
          >
            <div
              className={`absolute left-0 w-1 rounded-r-full bg-primary transition-[height] duration-300 ${
                isActive ? "h-1/2" : "h-0 group-hover:h-1/3"
              }`}
            />
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-black transition-all duration-300 group-hover:scale-110 ${
                isActive ? "bg-primary/20 text-primary" : "text-foreground/60"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={`text-sm leading-snug transition-colors duration-300 group-hover:translate-x-1 flex-1 ${
                isActive ? "font-semibold text-foreground" : "font-medium text-text-muted"
              }`}
            >
              {item.title}
            </span>
          </m.a>
        );
      })}
    </m.div>
  );
}