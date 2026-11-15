import Image from "next/image";
import { Map as MapIcon } from "lucide-react";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import { STILL_SIZES } from "@/lib/static-map";

/** A map image stored as a bare Cloudinary public ID or a full URL. */
export function mapImageSrc(image: string | undefined): string | null {
  if (!image) return null;
  return image.startsWith("http") ? image : `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${image}`;
}

/**
 * What stands in the map's place until the interactive map has loaded — and
 * all a search engine ever sees, because the map draws only in the browser.
 * The trip's still map image when there is one; otherwise a quiet panel of
 * the same size, so nothing below it moves when the map arrives. It carries no
 * "Loading…" wording: that text used to be indexed on every trip page.
 *
 * The panel is 4:3 on phones and 21:9 from the sm breakpoint up, like the
 * map itself. With a `compactImage` drawn for the phone shape, each screen
 * gets the still that fits it; the hidden one is lazy, so it is never fetched.
 */
export function MapPlaceholder({ image, compactImage, alt = "Route map" }: { image?: string; compactImage?: string; alt?: string }) {
  const wide = mapImageSrc(image);
  const compact = mapImageSrc(compactImage);
  // Sized, not `fill`: that keeps each srcset to two entries, and a drawn
  // still's address is long (it carries the whole route).
  const still = (src: string, size: keyof typeof STILL_SIZES, className: string) => (
    <Image src={src} alt={alt} width={STILL_SIZES[size].width} height={STILL_SIZES[size].height} className={`h-full w-full object-cover ${className}`} />
  );
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-alt sm:aspect-[21/9]" role="img" aria-label={alt}>
      {wide && compact && wide !== compact ? (
        <>
          {still(compact, "compact", "sm:hidden")}
          {still(wide, "wide", "hidden sm:block")}
        </>
      ) : wide || compact ? (
        still((wide || compact)!, wide ? "wide" : "compact", "")
      ) : (
        <div className="flex h-full w-full animate-pulse items-center justify-center" aria-hidden="true">
          <MapIcon className="h-8 w-8 text-text-muted/50" />
        </div>
      )}
    </div>
  );
}
