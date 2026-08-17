"use client";

import { useRouter } from "next/navigation";
import { useRef, useEffect, type ReactNode } from "react";
import { decodeFaqData, renderFaqAccordionHtml } from "@/lib/faq-block";

export function RichTextContent({ html }: { html: string }): ReactNode {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  // Hydrate inline FAQ blocks (<div data-faq="...">) into accordions so FAQs
  // can live anywhere in the article — not just at the end. FAQAccordion is
  // built on native <details>/<summary>, so we inject the same markup as
  // static HTML (no React sub-roots, no render races).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.querySelectorAll<HTMLElement>("[data-faq]").forEach((block, i) => {
      const data = decodeFaqData(block.getAttribute("data-faq"));
      if (data.items.length === 0) return;
      block.innerHTML = renderFaqAccordionHtml(data, `faq-inline-${i}`);
    });
  }, [html]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      // Internal link → client-side navigation
      if (href.startsWith("/") && !href.startsWith("//")) {
        e.preventDefault();
        router.push(href);
      }
    };

    el.addEventListener("click", handler);
    return () => el.removeEventListener("click", handler);
  }, [router]);

  return (
    <div
      ref={ref}
      className="prose-custom rich-text"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
