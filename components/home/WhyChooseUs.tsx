import { Shield, Users, Leaf, Heart, Tag, CreditCard, Map, Star, Mountain, Compass, Globe, Award, Smile, Sun } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const iconComponentMap: Record<string, React.ElementType> = {
  Shield, Users, Leaf, Heart, Tag, CreditCard,
  Map, Star, Mountain, Compass, Globe, Award, Smile, Sun,
};

const defaultIcon = Shield;

const defaultItems = [
  { icon: "Shield", title: "Safety First", description: "Certified, first-aid trained guides carrying satellite communication." },
  { icon: "Users", title: "Expert Local Guides", description: "Decades of combined experience across Nepal's trekking regions." },
  { icon: "Leaf", title: "Responsible Tourism", description: "Low-impact trekking that supports local communities and Nepal's heritage." },
  { icon: "Heart", title: "Supporting Local Communities", description: "A Nepali-owned company giving back to the villages we walk through." },
  { icon: "Tag", title: "No Hidden Charges", description: "What the itinerary lists is what you pay — nothing added later." },
  { icon: "CreditCard", title: "We Cater to All Budgets", description: "Custom options so every trekker finds a trip that fits their budget." },
];

const iconColors = ["text-primary", "text-secondary", "text-success", "text-primary", "text-secondary", "text-success"];

export function WhyChooseUs({
  subtitle,
  heading,
  items,
  bgImage,
}: {
  subtitle?: string | null;
  heading?: string | null;
  items?: { icon: string; title: string; description: string }[] | null;
  bgImage?: string | null;
}) {
  const resolvedItems = items && items.length > 0 ? items : defaultItems;
  const resolvedBg = bgImage || "/images/home/why-choose-us-bg.webp";

  return (
    <section
      className="relative bg-background bg-cover bg-center bg-no-repeat py-12 sm:py-16"
      style={{ backgroundImage: `url('${resolvedBg}')` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger>
          {/* Subtitle with decorative line */}
          <StaggerItem from="left" className="flex items-center gap-3">
            <span className="h-px w-8 bg-secondary" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
              {subtitle || "Discover the Difference"}
            </span>
          </StaggerItem>

          {/* Heading */}
          <StaggerItem as="h2" className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading || "Why Trek With Us?"}
          </StaggerItem>
        </Stagger>

        {/* Grid */}
        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {resolvedItems.map((item, index) => {
            const Icon = iconComponentMap[item.icon] || defaultIcon;
            const colorClass = iconColors[index % iconColors.length];
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.08} className="group flex items-start gap-5">
                <div className="flex h-14 w-14 min-w-14 items-center justify-center rounded-2xl bg-surface shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg]">
                  <Icon className={`h-6 w-6 ${colorClass}`} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
