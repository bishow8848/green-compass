"use client";

import { useEffect, useRef, useState } from "react";
import { Search, ClipboardCheck, Calendar, Backpack, Compass, MessageCircle, Calculator, MousePointerClick, FileText, CreditCard } from "lucide-react";

interface ProcessStep {
  step?: string;
  title?: string;
  description?: string;
  icon?: string;
}

interface ProcessStepsProps {
  heading?: string;
  description?: string;
  steps?: ProcessStep[];
  badge?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Search, ClipboardCheck, Calendar, Backpack, Compass, MessageCircle,
  Calculator, MousePointerClick, FileText, CreditCard,
};
const defaultIcon = Compass;

const defaultSteps: ProcessStep[] = [
  { step: "01", title: "Choose Your Trek", description: "Browse our treks, compare itineraries, difficulty levels, and prices to find the perfect adventure.", icon: "Search" },
  { step: "02", title: "Check Availability", description: "Contact us with your preferred dates and group size. We'll confirm availability within 24 hours.", icon: "Calendar" },
  { step: "03", title: "Book & Prepare", description: "Secure your spot with a deposit. We'll provide a detailed packing list, visa info, and travel tips.", icon: "ClipboardCheck" },
  { step: "04", title: "Arrive in Pokhara", description: "Meet your guide in Lakeside, Pokhara. We'll do a pre-trek briefing and gear check.", icon: "Backpack" },
  { step: "05", title: "Trek the Himalayas", description: "Enjoy a guided trek with expert local knowledge, comfortable teahouse stays, and stunning mountain views.", icon: "Compass" },
  { step: "06", title: "Share Your Experience", description: "After your trek, share your memories and reviews. We'd love to see your photos and hear your stories!", icon: "MessageCircle" },
];

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = iconMap[step.icon || ""] || defaultIcon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
      className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* Corner accent with step number inside */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 flex h-24 w-24 items-center justify-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary/30 transition-transform duration-500 group-hover:scale-125">
          {step.step || String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Icon with ring */}
      <div className="relative flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-inset ring-primary/15 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/30">
          <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
        </div>
        <span
          aria-hidden="true"
          className="h-px flex-1 origin-left scale-x-0 bg-border transition-transform duration-500 group-hover:scale-x-100"
        />
      </div>

      <h3 className="relative mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
    </div>
  );
}

export function ProcessSteps({ heading, description, steps, badge }: ProcessStepsProps) {
  const resolvedSteps = steps && steps.length > 0 ? steps : defaultSteps;

  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-secondary" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">{badge || "How It Works"}</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {heading || "How to Book Your Trek"}
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resolvedSteps.map((step, i) => (
            <ProcessCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
