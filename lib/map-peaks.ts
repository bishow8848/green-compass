/**
 * Draws Nepal's named summits, viewpoints and passes on any maplibre map as a
 * small dot plus a collision-managed label, with an optional hover card.
 *
 * Every map in the app (trek page, home hero mini map, admin preview) goes
 * through this so the mountains look and behave the same everywhere. The
 * maplibre module is passed in rather than imported here because the callers
 * load it differently — statically in MapContent, dynamically elsewhere.
 */

import { NEPAL_PEAKS_GEOJSON } from "./nepal-peaks";

export const PEAKS_SOURCE_ID = "nepal-peaks";
export const PEAKS_DOT_LAYER_ID = "peaks-dot";
export const PEAKS_LABEL_LAYER_ID = "peaks-label";
/** Invisible, generously sized circle that catches the pointer. */
export const PEAKS_HIT_LAYER_ID = "peaks-hit";

/**
 * Symbol layers need a glyph endpoint or maplibre drops every label. The app
 * already renders Mapbox raster tiles with this token, so the matching font
 * API keeps the label typography consistent with the rest of the style.
 */
export function mapboxGlyphsUrl(token: string | undefined) {
  return `https://api.mapbox.com/fonts/v1/mapbox/{fontstack}/{range}.pbf?access_token=${token ?? ""}`;
}

const PEAK_FONT = ["DIN Pro Medium", "Arial Unicode MS Regular"];

interface AddPeakLayersOptions {
  /**
   * maplibre's `Popup` constructor. Pass it to get the hover card; leave it
   * out on the small decorative maps, which only need dots and names.
   */
  popupClass?: any;
  /** Hide anything shorter than this so small maps stay readable. */
  minElevation?: number;
  /** Multiplier on the label size, for maps rendered at a small size. */
  labelScale?: number;
  /** Insert the peak layers underneath this existing layer, if present. */
  beforeId?: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function popupHtml(props: Record<string, any>) {
  const name = escapeHtml(String(props.name ?? ""));
  const altName = props.altName ? escapeHtml(String(props.altName)) : "";
  const region = props.region ? escapeHtml(String(props.region)) : "";
  const note = props.note ? escapeHtml(String(props.note)) : "";
  const metres = Number(props.elevation ?? 0).toLocaleString("en-US");
  const feet = Number(props.elevationFt ?? 0).toLocaleString("en-US");
  const kind = String(props.kind ?? "peak");
  const kindLabel = kind === "pass" ? "Mountain pass" : kind === "viewpoint" ? "Viewpoint" : "Summit";
  const lat = Number(props.lat ?? 0).toFixed(4);
  const lng = Number(props.lng ?? 0).toFixed(4);

  // Inline styles rather than utility classes: the popup is injected straight
  // into maplibre's own DOM, which the admin panel and the public site render
  // under different stylesheets.
  return (
    `<div style="max-width:230px;text-align:left;color:#0f172a">` +
    `<strong style="display:block;font-size:13px;line-height:1.25">${name}</strong>` +
    (altName
      ? `<span style="display:block;font-size:11px;font-style:italic;color:#64748b">${altName}</span>`
      : "") +
    `<span style="display:block;margin-top:4px;font-size:12px;font-weight:600;color:var(--color-primary-dark,#00885d)">${metres} m &middot; ${feet} ft</span>` +
    `<span style="display:block;font-size:11px;color:#64748b">${kindLabel}${region ? ` &middot; ${region}` : ""}</span>` +
    (note
      ? `<p style="margin:6px 0 0;font-size:12px;line-height:1.35;color:#475569">${note}</p>`
      : "") +
    `<span style="display:block;margin-top:5px;font-size:10px;color:#94a3b8">${lat}, ${lng}</span>` +
    `</div>`
  );
}

/**
 * Adds the peak source and layers to `map`. Safe to call once per map after
 * the style has loaded; calling it again is a no-op.
 */
export function addPeakLayers(map: any, options: AddPeakLayersOptions = {}) {
  const { popupClass, minElevation = 0, labelScale = 1, beforeId } = options;

  if (!map || map.getSource(PEAKS_SOURCE_ID)) return;

  map.addSource(PEAKS_SOURCE_ID, {
    type: "geojson",
    data: NEPAL_PEAKS_GEOJSON,
    // Feature ids let the dot grow on hover via feature-state.
    generateId: true,
  });

  const heightFilter: any[] = [">=", ["get", "elevation"], minElevation];
  const before = beforeId && map.getLayer(beforeId) ? beforeId : undefined;

  // Soft dark disc under the dot so it stays visible on snow and on rock.
  map.addLayer(
    {
      id: "peaks-dot-halo",
      type: "circle",
      source: PEAKS_SOURCE_ID,
      filter: heightFilter,
      paint: {
        "circle-radius": ["interpolate", ["linear"], ["zoom"], 6, 4, 10, 6.5, 14, 9],
        "circle-color": "#0f172a",
        "circle-opacity": 0.4,
        "circle-blur": 0.7,
      },
    },
    before
  );

  map.addLayer(
    {
      id: PEAKS_DOT_LAYER_ID,
      type: "circle",
      source: PEAKS_SOURCE_ID,
      filter: heightFilter,
      paint: {
        // 8,000ers get an amber dot, other summits white, passes and
        // viewpoints sky blue — readable at a glance without a legend.
        "circle-color": [
          "case",
          [">=", ["get", "elevation"], 8000],
          "#f59e0b",
          ["==", ["get", "kind"], "peak"],
          "#ffffff",
          "#38bdf8",
        ],
        // Zoom has to be the top-level interpolate input — maplibre rejects a
        // "zoom" expression nested inside anything else — so the hover growth
        // is applied per stop instead of as an outer multiplier.
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          ["case", ["boolean", ["feature-state", "hover"], false], 3.8, 2.4],
          10,
          ["case", ["boolean", ["feature-state", "hover"], false], 5.6, 3.6],
          14,
          ["case", ["boolean", ["feature-state", "hover"], false], 7.5, 5],
        ],
        "circle-stroke-width": 1.2,
        "circle-stroke-color": "#0f172a",
        "circle-stroke-opacity": 0.85,
      },
    },
    before
  );

  map.addLayer(
    {
      id: PEAKS_LABEL_LAYER_ID,
      type: "symbol",
      source: PEAKS_SOURCE_ID,
      filter: heightFilter,
      layout: {
        // The height only appears once there is room for it.
        "text-field": [
          "step",
          ["zoom"],
          ["get", "name"],
          10,
          ["concat", ["get", "name"], "\n", ["get", "elevationLabel"]],
        ],
        "text-font": PEAK_FONT,
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          9 * labelScale,
          10,
          11 * labelScale,
          14,
          13 * labelScale,
        ],
        "text-anchor": "bottom",
        "text-offset": [0, -0.9],
        "text-max-width": 9,
        "text-padding": 3,
        "text-line-height": 1.1,
        // Labels are dropped rather than overlapped, and the tallest peak
        // wins whenever two names collide.
        "text-optional": true,
        "symbol-sort-key": ["-", 9000, ["get", "elevation"]],
      },
      paint: {
        "text-color": "#ffffff",
        "text-halo-color": "#0f172a",
        "text-halo-width": 1.4,
        "text-halo-blur": 0.4,
      },
    },
    before
  );

  if (!popupClass) return;

  // Wide invisible target — a 3 px dot is impossible to hover otherwise.
  map.addLayer(
    {
      id: PEAKS_HIT_LAYER_ID,
      type: "circle",
      source: PEAKS_SOURCE_ID,
      filter: heightFilter,
      paint: {
        "circle-radius": ["interpolate", ["linear"], ["zoom"], 6, 8, 10, 11, 14, 14],
        "circle-color": "#000000",
        "circle-opacity": 0,
      },
    },
    before
  );

  const state: {
    popup: any;
    hoveredId: string | number | null;
    /** Set when a tap/click pinned the card open, so mouse-leave keeps it. */
    pinnedId: string | number | null;
  } = { popup: null, hoveredId: null, pinnedId: null };

  const setHover = (id: string | number | null) => {
    if (state.hoveredId !== null) {
      map.setFeatureState({ source: PEAKS_SOURCE_ID, id: state.hoveredId }, { hover: false });
    }
    state.hoveredId = id;
    if (id !== null) {
      map.setFeatureState({ source: PEAKS_SOURCE_ID, id }, { hover: true });
    }
  };

  const closePopup = () => {
    state.popup?.remove();
    state.popup = null;
  };

  const showPopup = (feature: any) => {
    closePopup();
    const [lng, lat] = feature.geometry.coordinates;
    state.popup = new popupClass({
      offset: 12,
      closeButton: false,
      maxWidth: "260px",
      className: "peak-popup",
    })
      .setLngLat([lng, lat])
      .setHTML(popupHtml(feature.properties ?? {}))
      .addTo(map);
  };

  map.on("mousemove", PEAKS_HIT_LAYER_ID, (e: any) => {
    const feature = e.features?.[0];
    if (!feature) return;
    map.getCanvas().style.cursor = "pointer";
    if (state.pinnedId !== null && state.pinnedId !== feature.id) return;
    if (feature.id === state.hoveredId && state.popup) return;
    setHover(feature.id ?? null);
    showPopup(feature);
  });

  map.on("mouseleave", PEAKS_HIT_LAYER_ID, () => {
    map.getCanvas().style.cursor = "";
    if (state.pinnedId !== null) return;
    setHover(null);
    closePopup();
  });

  // Tapping works the same as hovering, and pins the card on touch devices.
  map.on("click", PEAKS_HIT_LAYER_ID, (e: any) => {
    const feature = e.features?.[0];
    if (!feature) return;
    if (state.pinnedId === feature.id) {
      state.pinnedId = null;
      closePopup();
      return;
    }
    state.pinnedId = feature.id ?? null;
    setHover(feature.id ?? null);
    showPopup(feature);
  });

  // A click on bare map dismisses a pinned card.
  map.on("click", (e: any) => {
    const hits = map.queryRenderedFeatures(e.point, { layers: [PEAKS_HIT_LAYER_ID] });
    if (hits.length > 0) return;
    state.pinnedId = null;
    setHover(null);
    closePopup();
  });
}
