import Link from "next/link";
import { Clock, Mountain } from "lucide-react";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

/** The trek fields a card shows — query with this select so the shapes match. */
export const trekCardSelect = {
  id: true,
  title: true,
  slug: true,
  heroImage: true,
  difficulty: true,
  duration: true,
  price: true,
  category: { select: { slug: true } },
} as const;

export type TrekCardData = {
  id: string;
  title: string;
  slug: string;
  heroImage: string | null;
  difficulty: string;
  duration: number;
  price: number;
  category: { slug: string } | null;
};

/** Trip card used by the Similar Treks and Related Treks grids. */
export function TrekCard({ trek, href }: { trek: TrekCardData; href: string }) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.25)]"
    >
      {trek.heroImage ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_600,q_auto,f_auto/${trek.heroImage}`}
            alt={trek.title}
            width={600}
            height={450}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-surface">
          <Mountain className="h-12 w-12 text-text-muted" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            {trek.difficulty}
          </span>
        </div>
        <h3 className="text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
          {trek.title}
        </h3>
        <div className="mt-auto pt-6 flex items-end justify-between">
          <div className="flex flex-col gap-1 text-xs text-text-muted font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {trek.duration} Days
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">From</span>
            <span className="text-xl font-black text-foreground">${trek.price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
