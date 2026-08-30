"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

interface TimelineEvent {
  year?: string;
  title?: string;
  description?: string;
}

interface TimelineProps {
  heading?: string;
  description?: string;
  events?: TimelineEvent[];
  badge?: string;
}

const defaultEvents: TimelineEvent[] = [
  { year: "2017", title: "Foundation", description: "Green Compass Treks was founded in Pokhara by a team of local trekking experts with a vision to showcase Nepal's beauty." },
  { year: "2018", title: "First Expeditions", description: "Led our first group expeditions to Mardi Himal, Annapurna Base Camp, and Everest View Trek." },
  { year: "2020", title: "Community Initiatives", description: "Launched our community support program, contributing to local schools and trail maintenance projects." },
  { year: "2022", title: "Expansion", description: "Expanded our trek portfolio to include all major Himalayan regions — from Langtang to Kanchenjunga." },
  { year: "2024", title: "2,500+ Trekkers", description: "Celebrated welcoming over 2,500 happy trekkers from around the world with a 4.9★ average rating." },
  { year: "2025", title: "Sustainability Goals", description: "Achieved carbon-neutral status for all our treks and launched reforestation partnerships." },
];

function TimelineCard({ event, index, isLeft }: { event: TimelineEvent; index: number; isLeft: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col gap-4 lg:flex-row lg:items-start ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 z-10 lg:left-1/2 lg:-translate-x-1/2">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background shadow-md transition-all duration-500 ${
            visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <Calendar className="h-5 w-5 text-primary" />
        </div>
      </div>

      {/* Content card */}
      <div
        style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
        className={`ml-16 w-[calc(100%-4rem)] lg:ml-0 lg:w-[calc(50%-3rem)] transition-all duration-600 ease-out ${
          isLeft ? "lg:pr-8 lg:text-right" : "lg:pl-8"
        } ${
          visible
            ? "translate-y-0 opacity-100"
            : `${isLeft ? "-translate-x-8" : "translate-x-8"} opacity-0`
        }`}
      >
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
          {/* Corner accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125"
          />
          <span className="relative inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            {event.year}
          </span>
          <h3 className="relative mt-3 text-xl font-semibold text-foreground">{event.title}</h3>
          <p className="relative mt-2 text-sm leading-relaxed text-text-muted">{event.description}</p>
        </div>
      </div>

      {/* Spacer */}
      <div className="hidden w-[calc(50%-3rem)] lg:block" />
    </div>
  );
}

export function Timeline({ heading, description, events, badge }: TimelineProps) {
  const resolvedEvents = events && events.length > 0 ? events : defaultEvents;

  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-secondary" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">{badge || "Our Journey"}</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {heading || "Company Timeline"}
        </h2>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 h-full w-px bg-border lg:left-1/2 lg:-translate-x-px" aria-hidden="true" />

          <div className="space-y-12">
            {resolvedEvents.map((event, i) => (
              <TimelineCard key={i} event={event} index={i} isLeft={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
