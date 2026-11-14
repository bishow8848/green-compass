import Image from "next/image";
import { Map as MapIcon } from "lucide-react";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

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
 */
export function MapPlaceholder({ image, alt = "Route map" }: { image?: string; alt?: string }) {
  const src = mapImageSrc(image);
  return (
    <div className="relative aspect-[21/9] overflow-hidden rounded-xl bg-surface-alt" role="img" aria-label={alt}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 1200px" className="object-cover" />
      ) : (
        <div className="flex h-full w-full animate-pulse items-center justify-center" aria-hidden="true">
          <MapIcon className="h-8 w-8 text-text-muted/50" />
        </div>
      )}
    </div>
  );
}
