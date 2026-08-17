import { Target, Eye, Mountain, Heart, Star, Globe, Shield, Compass, Lightbulb, Zap } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Target, Eye, Mountain, Heart, Star, Globe, Shield, Compass, Lightbulb, Zap,
};

interface MissionVisionProps {
  badge?: string;
  heading?: string;
  missionLabel?: string;
  visionLabel?: string;
  mission?: {
    heading?: string;
    description?: string;
    icon?: string;
  };
  vision?: {
    heading?: string;
    description?: string;
    icon?: string;
  };
}

export function MissionVision({ badge, heading, missionLabel, visionLabel, mission, vision }: MissionVisionProps) {
  if (!mission?.description && !vision?.description) return null;

  const MissionIcon = iconMap[mission?.icon || ""] || Target;
  const VisionIcon = iconMap[vision?.icon || ""] || Eye;

  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header - Left Aligned with line like Why Choose Us */}
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-secondary" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
              {badge || "Purpose & Direction"}
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {heading || "What Drives Us Forward"}
          </h2>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Mission Card */}
          <div className="group relative rounded-3xl border border-border/60 bg-card p-8 sm:p-10 shadow-2xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-8px_rgba(0,0,0,0.2)]">
            {/* Top row with icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              <MissionIcon className="h-8 w-8" />
            </div>

            <div className="mt-8">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {missionLabel || "Core Purpose"}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {mission?.heading || "Our Mission"}
              </h3>
              <div className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-bold [&_h3]:text-lg [&_h3]:font-semibold [&_blockquote]:border-l-4 [&_blockquote]:border-primary/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground/80 [&_a]:text-primary [&_a]:underline">
                <div dangerouslySetInnerHTML={{ __html: mission?.description || "To provide safe, authentic, and unforgettable trekking experiences in Nepal while promoting sustainable tourism and supporting local communities." }} />
              </div>
            </div>

            {/* Decorative bottom line gradient */}
            <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-primary/40 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Vision Card */}
          <div className="group relative rounded-3xl border border-border/60 bg-card p-8 sm:p-10 shadow-2xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_20px_60px_-8px_rgba(0,0,0,0.2)]">
            {/* Top row with icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-transform duration-300 group-hover:scale-110">
              <VisionIcon className="h-8 w-8" />
            </div>

            <div className="mt-8">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                {visionLabel || "Future Outlook"}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {vision?.heading || "Our Vision"}
              </h3>
              <div className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-bold [&_h3]:text-lg [&_h3]:font-semibold [&_blockquote]:border-l-4 [&_blockquote]:border-secondary/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground/80 [&_a]:text-secondary [&_a]:underline">
                <div dangerouslySetInnerHTML={{ __html: vision?.description || "To be Nepal's most trusted trekking company, recognized for excellence in guiding, customer satisfaction, and responsible tourism practices." }} />
              </div>
            </div>

            {/* Decorative bottom line gradient */}
            <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-secondary/40 via-secondary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

        </div>
      </div>
    </section>
  );
}