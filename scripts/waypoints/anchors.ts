/**
 * A rough centre for each trek, used only to disambiguate repeated place names.
 *
 * The Trek.centerLat/centerLng columns cannot be used for this: 54 of the treks
 * still carry the default 83.9, 28.5 (central Annapurna), so anchoring on them
 * silently rejects every correct match in the east or the far west.
 *
 * Coordinates are [lng, lat] and only need to be right to the nearest valley.
 */
const REGION: Record<string, [number, number]> = {
  "Everest Region": [86.8, 27.9],
  "Annapurna Region": [83.9, 28.5],
  "Langtang Region": [85.5, 28.15],
  "Manaslu Region": [84.7, 28.5],
  "Mustang Region": [83.85, 28.9],
  "Dolpo Region": [82.95, 29.1],
  "Kanchenjunga Region": [87.9, 27.6],
  "Makalu Region": [87.15, 27.75],
};

/** Treks filed under "Remote Region", which spans the whole country. */
const BY_SLUG: Record<string, [number, number]> = {
  "ganesh-himal-trek": [85.1, 28.3],
  "ruby-valley-circuit-trek": [85.05, 28.25],
  "tamang-heritage-trek": [85.35, 28.2],
  "humla-limi-valley-trek": [81.6, 30.05],
  "lamjung-himal-trek": [84.2, 28.45],
  "mundum-trek": [87.0, 27.3],
  "rolwaling-valley-trek": [86.35, 27.87],
  "khori-himal-trek": [84.1, 28.45],
  "khori-himal-trek-from-pokhara": [84.1, 28.45],
};

export function anchorFor(slug: string, region: string | null): [number, number] {
  return BY_SLUG[slug] ?? REGION[region ?? ""] ?? [84.0, 28.4];
}
