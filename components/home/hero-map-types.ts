/**
 * Shapes shared by the hero (GreenCompassHero) and the map it dives into
 * (HeroNepalMap). Kept apart so the hero never imports the map module itself,
 * not even for types: the map, and maplibre with it, must only download once
 * someone zooms in.
 */

/** Where the 3D globe sat in the hero as the dive began: its centre and radius, in px from the hero's top-left. */
export interface GlobeOrigin {
  x: number;
  y: number;
  radius: number;
}

/** One trip from the globe into the map. A new id starts a new fly-in. */
export interface HeroMapEntry {
  id: number;
  origin: GlobeOrigin;
}

/** What the hero's zoom buttons drive while the map is up. */
export interface HeroNepalMapApi {
  zoomIn(): void;
  zoomOut(): void;
  /** From a region back to all of Nepal; from all of Nepal back to the globe. */
  back(): void;
}

export type HeroMapLevel = "nepal" | "region";

export interface HeroNepalMapProps {
  entry: HeroMapEntry;
  /**
   * Prepared ahead of the dive: the map loads, sits hidden at the globe's
   * place and fetches its first tiles, but does not fly in or report ready
   * until this turns false (with a new entry) when the dive actually starts.
   */
  standby: boolean;
  apiRef: React.RefObject<HeroNepalMapApi | null>;
  /** The map has its first tiles and is flying in: fade it up. */
  onReady: () => void;
  /** The map cannot run here (no token, no WebGL, never loaded): stay on the globe. */
  onFail: () => void;
  /** Zoomed back out past Nepal, or closed: hand over to the globe. */
  onExit: () => void;
  onLevelChange: (level: HeroMapLevel) => void;
}
