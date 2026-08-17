"use client";

import { useEffect, useRef, useState } from "react";
import { Leaf, Heart, Shield, Globe, CheckCircle, Mountain, Users, ShieldCheck, HeartHandshake, Recycle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Leaf, Heart, Shield, Globe, CheckCircle, Mountain, Users, ShieldCheck, HeartHandshake, Recycle,
};
const defaultIcon = Leaf;

const defaultItems = [
  { title: "Sustainable Practices", description: "We follow Leave No Trace principles on every trek, minimize waste, and partner with eco-friendly lodges.", icon: "Leaf" },
  { title: "Community Support", description: "A portion of every booking goes toward community projects — schools, health posts, and trail maintenance.", icon: "Heart" },
  { title: "Fair Employment", description: "We pay fair wages, provide proper gear, and ensure insurance for all our guides, porters, and staff.", icon: "Shield" },
  { title: "Carbon Offsetting", description: "We offset carbon emissions from vehicle transfers and domestic flights through reforestation programs.", icon: "Globe" },
];

function CommitmentCard({ item, index }: { item: { title?: string; description?: string; icon?: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = iconMap[item.icon || ""] || defaultIcon;

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
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
      className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {/* corner accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125"
      />

      <div className="relative flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-inset ring-primary/15 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/30">
          <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
        </div>
        <span
          aria-hidden="true"
          className="h-px flex-1 origin-left scale-x-0 bg-border transition-transform duration-500 group-hover:scale-x-100"
        />
      </div>

      <h3 className="relative mt-6 text-lg font-semibold text-foreground">
        {item.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-text-muted">
        {item.description}
      </p>
    </div>
  );
}

interface CommitmentProps {
  heading?: string;
  description?: string;
  items?: { title?: string; description?: string; icon?: string }[];
  badge?: string;
}

export function Commitment({ heading, description, items, badge }: CommitmentProps) {
  const resolvedItems = items && items.length > 0 ? items : defaultItems;

  return (
    <section className="relative bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-secondary" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
            {badge || "Responsible Tourism"}
          </span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {heading || "Our Commitment to Responsible Tourism"}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resolvedItems.map((item, i) => (
            <CommitmentCard key={item.title || i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
