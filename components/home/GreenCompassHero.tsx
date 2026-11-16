"use client";

import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import { ArrowRight, Undo2, ZoomIn, ZoomOut } from "lucide-react";
import * as THREE from "three";
import { AnimatePresence, stagger } from "framer-motion";
import * as m from "framer-motion/m";
import { SearchBar } from "@/components/search/SearchBar";
import { MotionLink, Stagger, StaggerItem } from "@/components/motion";
import { EASE_OUT, SPRING_SNAPPY, SPRING_SOFT } from "@/components/motion/presets";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { cn } from "@/lib/utils";
import { loadHeroMapData, loadHeroMapModule, warmMapConnection } from "./hero-map-data";
import type { GlobeOrigin, HeroMapEntry, HeroMapLevel, HeroNepalMapApi, HeroNepalMapProps } from "./hero-map-types";

/**
 * The map of Nepal is not part of the page: no HTML, no script, no styles,
 * no data until someone shows they mean to zoom in. Then its module, the trek
 * routes and a connection to Mapbox are fetched (once; later dives reuse them).
 */
let mapModule: Promise<ComponentType<HeroNepalMapProps>> | null = null;
/** The map component once downloaded, so a dive after a preload can mount it straight away. */
let loadedMapView: ComponentType<HeroNepalMapProps> | null = null;
function loadMapView(): Promise<ComponentType<HeroNepalMapProps>> {
  mapModule ??= loadHeroMapModule()
    .then((m) => (loadedMapView = m.default))
    .catch((err) => {
      mapModule = null;
      throw err;
    });
  void loadHeroMapData();
  warmMapConnection();
  return mapModule;
}

/**
 * Camera distances. The globe used to stop at 8.4; it now zooms on past that,
 * and crossing ENTER_DIST dives into the map of Nepal.
 */
const PRELOAD_DIST = 9.2;
const ENTER_DIST = 8.0;
const MIN_DIST = 7.2;
const NO_MAP_MIN_DIST = 8.4;
const MAX_DIST = 15;
/** How long the globe takes to swing Nepal round to face the camera. */
const DIVE_MS = 600;

type HeroView = "globe" | "diving" | "map";

interface GlobeApi {
  zoom: (factor: number) => void;
  reset: () => void;
  /** Back from the map: default view, Nepal facing, drawing again. */
  resume: () => void;
  /** The map cannot run: go back to the plain globe and stop diving. */
  disableMap: () => void;
  /** Someone means to zoom in: get the map ready behind the globe. */
  warm: () => void;
}

/** A map prepared on intent but never dived into is removed after this long. */
const STANDBY_MS = 30000;

interface HeroCta {
  label: string;
  href: string;
}

interface GreenCompassHeroProps {
  title?: string;
  titleHighlight?: string;
  /** Letterspaced kicker above the headline. Pass "" to hide it. */
  eyebrow?: string;
  /** Supporting line under the headline. Empty hides it. */
  description?: string;
  /** Primary CTA button (name + link) shown under the headline. */
  primaryCta?: HeroCta;
  /** Secondary CTA button (name + link) shown under the headline. */
  secondaryCta?: HeroCta;
  /** Extra absolutely-positioned content rendered inside the hero (e.g. carousel nav). */
  children?: React.ReactNode;
}

/** Side-by-side layout — the `split:` variant in globals.css; keep the two in step. */
const SPLIT_MQ = "(min-width: 40rem) and (min-aspect-ratio: 4/5)";

/** Globe zoom controls slide in from the edge once the globe is up. */
const controlVariants = {
  hidden: { opacity: 0, x: 18 },
  visible: { opacity: 1, x: 0, transition: SPRING_SNAPPY },
};

/** Read a CSS custom property from the theme (globals.css) with a hex fallback. */
function readVar(name: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

/** Convert a "#rrggbb" (or "#rgb") string into a number for three.js materials. */
function hexToNum(hex: string): number {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h.split("").map((c) => c + c).join("")
      : h;
  const n = parseInt(full, 16);
  return Number.isNaN(n) ? 0xfe4100 : n;
}

export function GreenCompassHero({
  title,
  titleHighlight,
  eyebrow = "Locally owned · Pokhara, Nepal",
  description,
  primaryCta = { label: "Start exploring", href: "/search" },
  secondaryCta = { label: "View field notes", href: "/blog" },
  children,
}: GreenCompassHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const globeRef = useRef<HTMLCanvasElement | null>(null);
  const hitzoneRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const [hintVisible, setHintVisible] = useState(true);
  const globeApiRef = useRef<GlobeApi | null>(null);
  const mapApiRef = useRef<HeroNepalMapApi | null>(null);
  const [view, setView] = useState<HeroView>("globe");
  /** Set while a dive is under way or the map is up; cleared (unmounting the map) once it closes. */
  const [entry, setEntry] = useState<HeroMapEntry | null>(null);
  /** The map component, once its module has downloaded. */
  const [MapView, setMapView] = useState<ComponentType<HeroNepalMapProps> | null>(null);
  /**
   * Set on a sign of intent (zooming in begins): the map is created hidden
   * behind the globe, at its place, and loads its first tiles, so the dive
   * itself has nothing left to wait for. Cleared if no dive follows.
   */
  const [warmEntry, setWarmEntry] = useState<HeroMapEntry | null>(null);
  const [mapLevel, setMapLevel] = useState<HeroMapLevel>("nepal");

  const heroTitle = title || "Trek the Himalaya with";
  const heroHighlight = titleHighlight || "Green Compass Treks.";

  /* ─────────────────────────────────────────────────────────────
     GLOBE — Three.js scene, built entirely on the client.
     ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    const canvas = globeRef.current!;
    const hitzone = hitzoneRef.current!;
    const hero = sectionRef.current!;
    // The copy block (Stagger) — its ref is taken by the reveal hook, so reach it via the wrapper.
    const copy = copyRef.current!.firstElementChild as HTMLElement;

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const split = window.matchMedia(SPLIT_MQ);

    // Colors from the global.css theme.
    const brand = hexToNum(readVar("--color-primary", "#fe4100"));
    const brandLight = hexToNum(readVar("--color-primary-light", "#ff6a33"));
    const gold = hexToNum(readVar("--color-accent", "#e9d5b4"));

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    cam.position.set(0, 0.4, 9.5);

    const rend = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    rend.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const gg = new THREE.Group();
    scene.add(gg);
    const R = 2.6;

    const tl = new THREE.TextureLoader();
    const globeMat = new THREE.MeshBasicMaterial({ map: null, color: 0xffffff });
    const dt = tl.load(
      "/images/earth_atmos_2048.jpg",
      undefined,
      undefined,
      // Fallback if the texture ever fails to load: keep the sphere visible in
      // the brand color instead of an empty black sphere.
      () => {
        globeMat.color.setHex(brand);
      }
    );
    dt.anisotropy = 4;
    globeMat.map = dt;
    gg.add(new THREE.Mesh(new THREE.SphereGeometry(R, 64, 48), globeMat));
    gg.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(R * 1.025, 48, 32),
        new THREE.MeshBasicMaterial({ color: brand, transparent: true, opacity: 0.06, side: THREE.BackSide })
      )
    );

    function ll(lat: number, lon: number, r: number) {
      const p = ((90 - lat) * Math.PI) / 180;
      const t = ((lon + 180) * Math.PI) / 180;
      return new THREE.Vector3(
        -r * Math.sin(p) * Math.cos(t),
        r * Math.cos(p),
        r * Math.sin(p) * Math.sin(t)
      );
    }

    // Nepal (basecamp: Pokhara / Kathmandu) + arcs to featured cities.
    const NA = ll(27.7, 85.3, R * 1.01);
    const nm = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), new THREE.MeshBasicMaterial({ color: brand }));
    nm.position.copy(ll(27.7, 85.3, R));
    gg.add(nm);

    const cities: Array<[number, number]> = [
      [40.7, -74], // NYC
      [-23.5, -46.6], // São Paulo
      [51.5, -0.1], // London
      [-1.3, 36.8], // Nairobi
      [35.7, 139.7], // Tokyo
      [-33.9, 151.2], // Sydney
      [-75.3, 0], // Antarctica-ish
    ];
    cities.forEach((c) => {
      const p = ll(c[0], c[1], R);
      const pa = ll(c[0], c[1], R * 1.01);
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 12), new THREE.MeshBasicMaterial({ color: brandLight }));
      dot.position.copy(p);
      gg.add(dot);
      const mid = pa.clone().add(NA).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(R * (1.2 + 0.16 * pa.distanceTo(NA)));
      const tm = new THREE.MeshBasicMaterial({ color: brandLight, transparent: true, opacity: 0.6 });
      gg.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(pa, mid, NA), 48, 0.011, 8, false), tm));
    });

    // Face Nepal toward the camera, north pole pointing up.
    const nepDir = ll(27.7, 85.3, 1).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(up, nepDir).normalize();
    const up2 = new THREE.Vector3().crossVectors(nepDir, right).normalize();
    const orient = new THREE.Matrix4().makeBasis(right, up2, nepDir).transpose();
    gg.quaternion.setFromRotationMatrix(orient);

    // Starfield.
    const sp = new Float32Array(2100);
    for (let i = 0; i < 700; i++) {
      const sr = 40 + Math.random() * 40;
      const st = Math.random() * Math.PI * 2;
      const sph = Math.acos(Math.random() * 2 - 1);
      sp[i * 3] = sr * Math.sin(sph) * Math.cos(st);
      sp[i * 3 + 1] = sr * Math.sin(sph) * Math.sin(st);
      sp[i * 3 + 2] = sr * Math.cos(sph);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute("position", new THREE.BufferAttribute(sp, 3));
    scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: gold, size: 0.05, transparent: true, opacity: 0.22 })));

    const dp = cam.position.clone();
    const dt2 = new THREE.Vector3();
    const oc = new OrbitControls(cam, hitzone);
    oc.target.copy(dt2);
    oc.enablePan = false;
    oc.enableDamping = true;
    oc.dampingFactor = 0.08;
    oc.rotateSpeed = 0.45;
    oc.zoomSpeed = 0.6;
    oc.minDistance = MIN_DIST;
    oc.maxDistance = MAX_DIST;
    oc.autoRotate = false;
    oc.autoRotateSpeed = 0.5;
    oc.update();

    function hideHint() {
      setHintVisible(false);
    }
    ["pointerdown", "wheel"].forEach((ev) =>
      hitzone.addEventListener(ev, hideHint, { once: true, passive: true })
    );

    function zb(f: number) {
      const o = cam.position.clone().sub(oc.target);
      o.setLength(THREE.MathUtils.clamp(o.length() * f, oc.minDistance, oc.maxDistance));
      cam.position.copy(oc.target).add(o);
      oc.update();
    }

    /* ── The dive into the map ──────────────────────────────────────
       Zooming in past ENTER_DIST freezes the controls, swings Nepal round
       to face the camera, and hands the map the globe's on-screen centre
       and radius so it can start as the same globe and fly in. */
    // No token, no map: the globe keeps its old zoom limit and never dives.
    let mapAllowed = Boolean(process.env.NEXT_PUBLIC_MAPBOX_TOKEN);
    if (!mapAllowed) oc.minDistance = NO_MAP_MIN_DIST;
    let preloaded = false;
    // Zooming in (not out) or a pinch starting on the globe: fetch the map now.
    const onWheelIntent = (e: WheelEvent) => {
      if (e.deltaY < 0) warmUp();
    };
    const onTouchIntent = (e: TouchEvent) => {
      if (e.touches.length >= 2) warmUp();
    };
    hitzone.addEventListener("wheel", onWheelIntent, { passive: true });
    hitzone.addEventListener("touchstart", onTouchIntent, { passive: true });
    let diving = false;
    let paused = false;
    let diveStart = 0;
    const diveMs = rm ? 1 : DIVE_MS;
    const qFrom = new THREE.Quaternion();
    const qTo = new THREE.Quaternion();

    /** The globe turned so Nepal faces the camera wherever it has been orbited to, north up. */
    function nepalTowardCamera(): THREE.Quaternion {
      const camDir = cam.position.clone().sub(oc.target).normalize();
      // Looking straight down a pole, "up" has to come from somewhere else.
      const worldUp = Math.abs(camDir.y) > 0.98 ? new THREE.Vector3(0, 0, -Math.sign(camDir.y)) : new THREE.Vector3(0, 1, 0);
      const r = new THREE.Vector3().crossVectors(worldUp, camDir).normalize();
      const u = new THREE.Vector3().crossVectors(camDir, r).normalize();
      // `orient` turns Nepal to +z with north up; this then turns +z to the camera.
      const toCamera = new THREE.Matrix4().makeBasis(r, u, camDir).multiply(orient);
      return new THREE.Quaternion().setFromRotationMatrix(toCamera);
    }

    /** Where the globe is on screen right now: its centre, and its projected radius (focal length × tan of its angular radius). */
    function globeOrigin(): GlobeOrigin {
      const d = cam.position.distanceTo(oc.target);
      const focal = lastH / 2 / Math.tan((cam.fov * Math.PI) / 360);
      return {
        x: canvasLeft + lastW / 2,
        y: canvasTop + lastH / 2,
        radius: focal * Math.tan(Math.asin(Math.min(R / d, 1))),
      };
    }

    /**
     * A sign someone means to zoom in — scrolling in over the globe, a
     * two-finger touch on it, a hover, focus or touch on the zoom-in button
     * (just dragging the globe round does not count): fetch the map and set it
     * up hidden behind the globe, so the dive has nothing left to wait for.
     */
    function warmUp() {
      if (!mapAllowed || diving) return;
      loadMapView()
        .then((component) => {
          if (!mapAllowed) return;
          setMapView(() => component);
          setWarmEntry((prev) => prev ?? { id: 0, origin: globeOrigin() });
        })
        .catch(() => {});
    }

    function startDive() {
      diving = true;
      oc.enabled = false;
      qFrom.copy(gg.quaternion);
      qTo.copy(nepalTowardCamera());
      diveStart = performance.now();
      const origin = globeOrigin();
      setView("diving");
      setEntry((prev) => ({ id: (prev?.id ?? 0) + 1, origin }));
      // Already downloaded (the usual case after a preload): mount the map in this same render.
      if (loadedMapView) {
        const component = loadedMapView;
        setMapView(() => component);
        return;
      }
      loadMapView()
        .then((component) => setMapView(() => component))
        .catch((err) => {
          // Offline, or the chunk failed: carry on with the plain globe.
          console.error("Map of Nepal could not load:", err);
          setView("globe");
          setEntry(null);
          globeApiRef.current?.disableMap();
        });
    }

    globeApiRef.current = {
      zoom: (f) => {
        if (!diving) zb(f);
      },
      reset: () => {
        if (diving) return;
        oc.autoRotate = false;
        cam.position.copy(dp);
        oc.target.copy(dt2);
        oc.update();
      },
      resume: () => {
        diving = false;
        cam.position.copy(dp);
        oc.target.copy(dt2);
        // Nepal facing, as the map was when it zoomed back out.
        gg.quaternion.setFromRotationMatrix(orient);
        oc.enabled = true;
        oc.update();
        if (paused) {
          paused = false;
          if (!raf) raf = requestAnimationFrame(loop);
        }
      },
      disableMap: () => {
        mapAllowed = false;
        oc.minDistance = NO_MAP_MIN_DIST;
        globeApiRef.current?.resume();
      },
      warm: warmUp,
    };

    // Grow the globe canvas with zoom: the canvas expands
    // around the globe's centre so the globe is never clipped, and the fov opens
    // as you zoom so the sphere always fits the frustum.
    let baseW = 0;
    let baseH = 0;
    let cx = 0;
    let cy = 0;
    let lastW = 0;
    let lastH = 0;
    let canvasLeft = 0;
    let canvasTop = 0;
    function measureBase() {
      const hr = hero.getBoundingClientRect();
      if (split.matches) {
        // Side by side: the copy holds the left half, the globe the right half —
        // no taller than it is wide, so the whole sphere fits its column.
        baseW = hr.width * 0.5;
        baseH = Math.min(hr.height, baseW * 1.15);
        cx = hr.width * 0.75;
        cy = hr.height * 0.5;
      } else if (hr.width >= 640) {
        // Portrait tablet: stack the globe above the copy, in whatever room the
        // copy leaves (headline length is CMS-driven, so measure, don't guess).
        const room = copy.getBoundingClientRect().top - hr.top - 16;
        baseW = hr.width;
        baseH = Math.min(room, hr.width * 1.15);
        cx = hr.width * 0.5;
        cy = room * 0.5;
      } else {
        baseW = hr.width;
        baseH = hr.height * 0.62;
        cx = hr.width * 0.5;
        cy = hr.height * 0.29;
      }
    }
    measureBase();
    const CAM_BASE = dp.distanceTo(dt2);
    const FILL_MAX = 0.75;
    const KMAX = 1.14;
    function fitGlobe() {
      const d = cam.position.distanceTo(oc.target);
      const k = Math.min(Math.max(CAM_BASE / d, 1), KMAX);
      const want = (2 * Math.atan(Math.tan(Math.asin(Math.min(R / d, 1))) / FILL_MAX) * 180) / Math.PI;
      cam.fov = want > 42 ? want : 42;
      const w = Math.round(baseW * k);
      const h = Math.round(baseH * k);
      if (w !== lastW || h !== lastH) {
        lastW = w;
        lastH = h;
        const left = Math.round(cx - w / 2);
        const top = Math.round(cy - h / 2);
        canvasLeft = left;
        canvasTop = top;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        canvas.style.left = left + "px";
        canvas.style.top = top + "px";
        hitzone.style.width = w + "px";
        hitzone.style.height = h + "px";
        hitzone.style.left = left + "px";
        hitzone.style.top = top + "px";
        rend.setSize(w, h, false);
      }
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    }
    const onResize = () => {
      measureBase();
      lastW = 0;
      lastH = 0;
      fitGlobe();
    };
    window.addEventListener("resize", onResize);
    // Re-fit when the copy reflows (web fonts landing, headline re-wrapping).
    const copyObserver = new ResizeObserver(onResize);
    copyObserver.observe(copy);

    let raf = 0;
    function loop() {
      // Hidden under the map: stop drawing altogether until resume().
      if (paused) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
      let diveDone = false;
      if (diving) {
        const t = Math.min(1, (performance.now() - diveStart) / diveMs);
        const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
        gg.quaternion.slerpQuaternions(qFrom, qTo, eased);
        diveDone = t >= 1;
      } else {
        const d = cam.position.distanceTo(oc.target);
        // Ambient rotation only at (or beyond) the original zoom level.
        if (!rm && d >= CAM_BASE - 0.02) {
          gg.rotateY(0.0015);
        }
        oc.update();
        if (mapAllowed) {
          // Zooming in at all: start fetching the map so the dive does not wait on it.
          if (!preloaded && d < PRELOAD_DIST) {
            preloaded = true;
            warmUp();
          }
          if (d < ENTER_DIST) startDive();
        }
      }
      fitGlobe();
      rend.render(scene, cam);
      // Nepal now faces the camera and nothing moves until the map takes over:
      // keep this frame on screen and stop drawing, leaving the device to the map.
      if (diveDone) paused = true;
    }
    raf = requestAnimationFrame(loop);

    return () => {
      globeApiRef.current = null;
      hitzone.removeEventListener("wheel", onWheelIntent);
      hitzone.removeEventListener("touchstart", onTouchIntent);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      copyObserver.disconnect();
      oc.dispose();
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else if (mat) mat.dispose();
      });
      rend.dispose();
    };
  }, []);

  // Back on the globe: once the map has faded out, remove it entirely (its
  // WebGL context, tiles and DOM). Diving again builds a fresh one.
  useEffect(() => {
    if (view !== "globe" || !entry) return;
    const timer = setTimeout(() => {
      setEntry(null);
      setWarmEntry(null);
    }, 750);
    return () => clearTimeout(timer);
  }, [view, entry]);

  // Got ready on intent but never dived into: take the hidden map away again.
  useEffect(() => {
    if (!warmEntry || entry) return;
    const timer = setTimeout(() => setWarmEntry(null), STANDBY_MS);
    return () => clearTimeout(timer);
  }, [warmEntry, entry]);

  const handleMapReady = useCallback(() => setView("map"), []);
  const handleMapExit = useCallback(() => {
    setView("globe");
    setMapLevel("nepal");
    globeApiRef.current?.resume();
  }, []);
  const handleMapFail = useCallback(() => {
    setView("globe");
    setEntry(null);
    setWarmEntry(null);
    globeApiRef.current?.disableMap();
  }, []);
  const warmMap = useCallback(() => globeApiRef.current?.warm(), []);
  const mapEntry = entry ?? warmEntry;

  const inMap = view === "map";
  function zoomIn() {
    setHintVisible(false);
    if (inMap) mapApiRef.current?.zoomIn();
    else globeApiRef.current?.zoom(0.8);
  }
  function zoomOut() {
    setHintVisible(false);
    if (inMap) mapApiRef.current?.zoomOut();
    else globeApiRef.current?.zoom(1.25);
  }
  function stepBack() {
    setHintVisible(false);
    if (inMap) mapApiRef.current?.back();
    else globeApiRef.current?.reset();
  }
  const backLabel = !inMap ? "Reset globe view" : mapLevel === "region" ? "Back to all of Nepal" : "Back to the globe";

  return (
    <section
      ref={sectionRef}
      className="relative h-dvh min-h-[560px] w-full overflow-hidden bg-background text-foreground sm:min-h-[640px]"
    >
      {/* 3D globe canvas — positioned/sized by the globe effect. It is blank
          until the scene boots, so it fades and settles in rather than popping. */}
      <m.canvas
        ref={globeRef}
        className="absolute"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={
          inMap
            ? // The map has taken over: the globe swells and fades as the map flies in.
              { opacity: 0, scale: 1.35, transition: { duration: 0.9, ease: EASE_OUT } }
            : { opacity: 1, scale: 1, transition: { duration: entry ? 0.8 : 1.4, delay: entry ? 0 : 0.15, ease: EASE_OUT } }
        }
      />

      {/* Film-grain noise veil */}
      <div className="noise-veil" aria-hidden="true" />

      {/* Invisible hitzone that catches orbit/zoom gestures */}
      <div ref={hitzoneRef} className="globe-hitzone absolute" aria-hidden="true" />

      {/* The map of Nepal the globe dives into. Exists only from a dive until
          it closes: no markup, script or data otherwise. */}
      {mapEntry && MapView && (
        <div
          className={cn(
            "absolute inset-0 z-[25] transition-opacity duration-700 ease-out",
            inMap ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          inert={!inMap}
        >
          <MapView
            entry={mapEntry}
            standby={!entry}
            apiRef={mapApiRef}
            onReady={handleMapReady}
            onFail={handleMapFail}
            onExit={handleMapExit}
            onLevelChange={setMapLevel}
          />
        </div>
      )}

      {/* First dive only: the map is still downloading. */}
      <AnimatePresence>
        {view === "diving" && (
          <m.p
            key="map-loading"
            role="status"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.4, ease: EASE_OUT } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="pointer-events-none absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-foreground/10 bg-background/85 px-4 py-2 text-xs font-medium text-text-muted shadow-sm backdrop-blur-md"
          >
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary/25 border-t-primary" aria-hidden="true" />
            Loading the map of Nepal…
          </m.p>
        )}
      </AnimatePresence>

      {/* Zoom controls — they drive the globe, or the map once it is up */}
      <m.div
        className={cn(
          "absolute right-3 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2 sm:right-6",
          // Phones and tablets pinch to zoom, and the map has its own back and close: give it the room.
          inMap && "max-lg:hidden"
        )}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { delayChildren: stagger(0.08, { startDelay: 0.9 }) } } }}
      >
        <m.button
          variants={controlVariants}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={zoomIn}
          onPointerEnter={warmMap}
          onFocus={warmMap}
          onTouchStart={warmMap}
          type="button"
          aria-label={inMap ? "Zoom in on the map" : "Zoom in on the globe"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background/70 text-foreground shadow-sm backdrop-blur-md transition-colors hover:border-primary/40 hover:bg-surface hover:text-primary sm:h-11 sm:w-11"
        >
          <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5" />
        </m.button>
        <m.button
          variants={controlVariants}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={zoomOut}
          type="button"
          aria-label={inMap ? "Zoom out of the map" : "Zoom out of the globe"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background/70 text-foreground shadow-sm backdrop-blur-md transition-colors hover:border-primary/40 hover:bg-surface hover:text-primary sm:h-11 sm:w-11"
        >
          <ZoomOut className="h-4 w-4 sm:h-5 sm:w-5" />
        </m.button>
        <m.button
          variants={controlVariants}
          whileHover={{ scale: 1.08, rotate: -20 }}
          whileTap={{ scale: 0.92 }}
          onClick={stepBack}
          type="button"
          aria-label={backLabel}
          title={inMap ? backLabel : undefined}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background/70 text-foreground shadow-sm backdrop-blur-md transition-colors hover:border-primary/40 hover:bg-surface hover:text-primary sm:h-11 sm:w-11"
        >
          <Undo2 className="h-4 w-4 sm:h-5 sm:w-5" />
        </m.button>
      </m.div>

      {/* Globe interaction hint — fades out on first touch */}
      <AnimatePresence>
        {hintVisible && view === "globe" && (
          <m.p
            key="globe-hint"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.6, duration: 0.6, ease: EASE_OUT } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="absolute bottom-5 right-4 z-30 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted sm:bottom-8 sm:right-8 split:block"
          >
            Drag to rotate · <span className="pointer-coarse:hidden">scroll</span>
            <span className="hidden pointer-coarse:inline">pinch</span> to zoom into Nepal
          </m.p>
        )}
      </AnimatePresence>

      {/* ── Copy — the headline and the trek search that is this page's main
             action. Pointer-transparent so the globe hitzone behind it stays
             draggable/zoomable; interactive bits opt back in. Side by side it
             holds the left half; stacked it sits under the globe,
             padded up by the sticky header's height (the header pushes this
             full-height hero that far below the fold). ── */}
      <div
        ref={copyRef}
        // Out of the way (and out of the tab order) while the dive and the map run.
        inert={view !== "globe"}
        className={cn(
          "pointer-events-none relative z-20 mx-auto flex min-h-full w-full max-w-[1400px] flex-col justify-end px-5 pb-24 transition-opacity duration-500 sm:px-8 sm:pb-28 lg:px-14 lg:pb-40 split:justify-center split:pb-0",
          view !== "globe" && "opacity-0"
        )}
      >
        <Stagger className="relative w-full max-w-xl split:max-w-[50%]">
          {/* Rhumb lines — the bearing lines that radiate from a compass rose on
              an old chart. The origin sits off the left edge, so the copy reads
              as sitting on the chart rather than next to a diagram. */}
          <m.svg
            viewBox="-550 -550 1100 1100"
            className="pointer-events-none absolute -left-[760px] top-1/2 hidden h-[1100px] w-[1100px] -translate-y-1/2 text-primary/[0.10] lg:split:block"
            aria-hidden="true"
            initial={{ opacity: 0, rotate: -14 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 2.2, ease: EASE_OUT }}
          >
            {Array.from({ length: 32 }, (_, i) => {
              const a = (i * 11.25 * Math.PI) / 180;
              const r = 778; // reaches the corners of the viewBox
              return (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={(Math.sin(a) * r).toFixed(2)}
                  y2={(-Math.cos(a) * r).toFixed(2)}
                  stroke="currentColor"
                  strokeWidth={i % 4 === 0 ? 1.6 : 0.7}
                />
              );
            })}
            <circle cx="0" cy="0" r="420" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="0" cy="0" r="700" fill="none" stroke="currentColor" strokeWidth="0.7" />
          </m.svg>

          {/* Eyebrow */}
          {eyebrow && (
            <StaggerItem className="relative flex items-center gap-2.5 sm:gap-3">
              {/* Compass star swings round to north as the page wakes up */}
              <m.svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 shrink-0 text-primary"
                aria-hidden="true"
                initial={{ rotate: -135, scale: 0.4, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ ...SPRING_SOFT, delay: 0.25 }}
              >
                <path d="M12 1 L13.6 10.4 L23 12 L13.6 13.6 L12 23 L10.4 13.6 L1 12 L10.4 10.4 Z" fill="currentColor" />
              </m.svg>
              <m.span
                className="h-px w-7 shrink-0 bg-primary/40 sm:w-11"
                aria-hidden="true"
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: EASE_OUT }}
              />
              <p className="text-balance text-[10px] font-semibold uppercase tracking-[0.26em] text-text-muted sm:text-xs sm:tracking-[0.3em]">
                {eyebrow}
              </p>
            </StaggerItem>
          )}

          {/* Headline — sized to the viewport so the highlight (an unbreakable
              inline-block) always fits its column on one line. */}
          <StaggerItem as="h1" className="relative mt-4 font-display text-[min(2.6rem,9.4vw)] leading-[1.05] tracking-[-0.02em] text-foreground sm:mt-5 sm:text-6xl split:text-[min(4.25rem,4.8vw)]">
            {heroTitle}{" "}
            <em className="relative inline-block font-serif font-medium italic text-primary">
              {heroHighlight}
              {/* Hand-drawn trail under the highlight, wiped in once the page is
                  live. A clip, not pathLength: the dash maths behind pathLength
                  breaks up under a non-scaling stroke once the highlight is wide. */}
              <m.svg
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-primary/45 sm:-bottom-2 sm:h-3.5"
                aria-hidden="true"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.1, delay: 0.7, ease: EASE_OUT }}
              >
                <path
                  d="M2 8 C 22 3, 48 2.5, 70 5 S 92 8, 98 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </m.svg>
            </em>
          </StaggerItem>

          {/* Supporting line — from sm up; on phones it would push the copy into the globe */}
          {description?.trim() && (
            <StaggerItem as="p" className="relative mt-6 hidden max-w-lg text-lg leading-relaxed text-text-muted sm:block">
              {description}
            </StaggerItem>
          )}

          {/* Search — the same autocomplete bar the category and trek pages use */}
          <StaggerItem className="pointer-events-auto relative z-10 mt-6 w-full max-w-md sm:mt-8">
            <SearchBar />
          </StaggerItem>

          {/* CTA row — dynamic buttons (name + link). Quieter than the search,
              which is now this hero's primary action. */}
          <StaggerItem className="relative mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-7">
            <MotionLink
              lift={0}
              href={primaryCta.href || "/search"}
              className="pointer-events-auto group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary sm:text-base"
            >
              {primaryCta.label || "Start exploring"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MotionLink>
            <MotionLink
              lift={0}
              href={secondaryCta.href || "/blog"}
              className="pointer-events-auto group inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted underline-offset-4 transition-colors hover:text-primary sm:text-base"
            >
              {secondaryCta.label || "View field notes"}
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </MotionLink>
          </StaggerItem>
        </Stagger>
      </div>

      {children}
    </section>
  );
}
