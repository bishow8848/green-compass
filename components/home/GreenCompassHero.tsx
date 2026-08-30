"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Undo2, ZoomIn, ZoomOut } from "lucide-react";
import * as THREE from "three";
import { SearchBar } from "@/components/search/SearchBar";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface HeroCta {
  label: string;
  href: string;
}

interface GreenCompassHeroProps {
  title?: string;
  titleHighlight?: string;
  /** Letterspaced kicker above the headline. Pass "" to hide it. */
  eyebrow?: string;
  /** Primary CTA button (name + link) shown under the headline. */
  primaryCta?: HeroCta;
  /** Secondary CTA button (name + link) shown under the headline. */
  secondaryCta?: HeroCta;
  /** Extra absolutely-positioned content rendered inside the hero (e.g. carousel nav). */
  children?: React.ReactNode;
}

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
  eyebrow = "Nepal · Himalaya",
  primaryCta = { label: "Start exploring", href: "/search" },
  secondaryCta = { label: "View field notes", href: "/blog" },
  children,
}: GreenCompassHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const globeRef = useRef<HTMLCanvasElement | null>(null);
  const hitzoneRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLParagraphElement | null>(null);
  const zoomInRef = useRef<HTMLButtonElement | null>(null);
  const zoomOutRef = useRef<HTMLButtonElement | null>(null);
  const zoomResetRef = useRef<HTMLButtonElement | null>(null);

  const heroTitle = title || "Go where the world feels";
  const heroHighlight = titleHighlight || "wild.";

  /* ─────────────────────────────────────────────────────────────
     GLOBE — Three.js scene, built entirely on the client.
     ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    const canvas = globeRef.current!;
    const hitzone = hitzoneRef.current!;
    const hero = sectionRef.current!;

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    const hint = hintRef.current;
    const dp = cam.position.clone();
    const dt2 = new THREE.Vector3();
    const oc = new OrbitControls(cam, hitzone);
    oc.target.copy(dt2);
    oc.enablePan = false;
    oc.enableDamping = true;
    oc.dampingFactor = 0.08;
    oc.rotateSpeed = 0.45;
    oc.zoomSpeed = 0.6;
    oc.minDistance = 8.4;
    oc.maxDistance = 15;
    oc.autoRotate = false;
    oc.autoRotateSpeed = 0.5;
    oc.update();

    function hideHint() {
      hint?.classList.add("is-hidden");
    }
    ["pointerdown", "wheel"].forEach((ev) =>
      hitzone.addEventListener(ev, hideHint, { once: true, passive: true })
    );

    function zb(f: number) {
      const o = cam.position.clone().sub(oc.target);
      o.setLength(THREE.MathUtils.clamp(o.length() * f, 8.4, 15));
      cam.position.copy(oc.target).add(o);
      oc.update();
    }
    zoomInRef.current?.addEventListener("click", () => {
      hideHint();
      zb(0.8);
    });
    zoomOutRef.current?.addEventListener("click", () => {
      hideHint();
      zb(1.25);
    });
    zoomResetRef.current?.addEventListener("click", () => {
      hideHint();
      oc.autoRotate = false;
      cam.position.copy(dp);
      oc.target.copy(dt2);
      oc.update();
    });

    // Grow the globe canvas with zoom: the canvas expands
    // around the globe's centre so the globe is never clipped, and the fov opens
    // as you zoom so the sphere always fits the frustum.
    let baseW = 0;
    let baseH = 0;
    let cx = 0;
    let cy = 0;
    let lastW = 0;
    let lastH = 0;
    function measureBase() {
      const hr = hero.getBoundingClientRect();
      if (hr.width <= 720) {
        baseW = hr.width;
        baseH = hr.height * 0.62;
        cx = hr.width * 0.5;
        cy = hr.height * 0.29;
      } else {
        baseW = hr.width * 0.58;
        baseH = hr.height;
        cx = hr.width * 0.71;
        cy = hr.height * 0.5;
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

    let raf = 0;
    function loop() {
      raf = requestAnimationFrame(loop);
      // Ambient rotation only at (or beyond) the original zoom level.
      if (!rm && cam.position.distanceTo(oc.target) >= CAM_BASE - 0.02) {
        gg.rotateY(0.0015);
      }
      oc.update();
      fitGlobe();
      rend.render(scene, cam);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
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

  return (
    <section
      ref={sectionRef}
      className="relative h-dvh min-h-[560px] w-full overflow-hidden bg-background text-foreground sm:min-h-[640px]"
    >
      {/* 3D globe canvas — positioned/sized by the globe effect */}
      <canvas ref={globeRef} className="absolute" aria-hidden="true" />

      {/* Film-grain noise veil */}
      <div className="noise-veil" aria-hidden="true" />

      {/* Invisible hitzone that catches orbit/zoom gestures */}
      <div ref={hitzoneRef} className="globe-hitzone absolute" aria-hidden="true" />

      {/* Globe zoom controls */}
      <div className="absolute right-3 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2 sm:right-6">
        <button
          ref={zoomInRef}
          type="button"
          aria-label="Zoom in on the globe"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background/70 text-foreground shadow-sm backdrop-blur-md transition-all hover:border-primary/40 hover:bg-surface hover:text-primary sm:h-11 sm:w-11"
        >
          <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          ref={zoomOutRef}
          type="button"
          aria-label="Zoom out of the globe"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background/70 text-foreground shadow-sm backdrop-blur-md transition-all hover:border-primary/40 hover:bg-surface hover:text-primary sm:h-11 sm:w-11"
        >
          <ZoomOut className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          ref={zoomResetRef}
          type="button"
          aria-label="Reset globe view"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background/70 text-foreground shadow-sm backdrop-blur-md transition-all hover:border-primary/40 hover:bg-surface hover:text-primary sm:h-11 sm:w-11"
        >
          <Undo2 className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Globe interaction hint — fades out on first touch */}
      <p
        ref={hintRef}
        className="globe-hint absolute bottom-5 right-4 z-30 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted sm:bottom-8 sm:right-8 sm:block"
      >
        Drag to rotate · scroll to zoom
      </p>

      {/* ── Copy — the headline and the trek search that is this page's main
             action. Pointer-transparent so the globe hitzone behind it stays
             draggable/zoomable; interactive bits opt back in. ── */}
      <div className="pointer-events-none relative z-20 mx-auto flex min-h-full w-full max-w-[1400px] flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-12 lg:justify-center lg:px-14 lg:pb-0">
        <div className="relative w-full max-w-xl lg:max-w-2xl">
          {/* Rhumb lines — the bearing lines that radiate from a compass rose on
              an old chart. The origin sits off the left edge, so the copy reads
              as sitting on the chart rather than next to a diagram. */}
          <svg
            viewBox="-550 -550 1100 1100"
            className="pointer-events-none absolute -left-[760px] top-1/2 hidden h-[1100px] w-[1100px] -translate-y-1/2 text-primary/[0.10] lg:block"
            aria-hidden="true"
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
          </svg>

          {/* Eyebrow */}
          {eyebrow && (
            <div className="relative flex items-center gap-2.5 sm:gap-3">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true">
                <path d="M12 1 L13.6 10.4 L23 12 L13.6 13.6 L12 23 L10.4 13.6 L1 12 L10.4 10.4 Z" fill="currentColor" />
              </svg>
              <span className="h-px w-7 shrink-0 bg-primary/40 sm:w-11" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-text-muted sm:text-xs sm:tracking-[0.3em]">
                {eyebrow}
              </p>
            </div>
          )}

          {/* Headline */}
          <h1 className="relative mt-4 font-display text-[2.6rem] leading-[1.05] tracking-[-0.02em] text-foreground sm:mt-5 sm:text-6xl lg:text-[4.75rem]">
            {heroTitle}{" "}
            <em className="font-serif font-medium italic text-primary">{heroHighlight}</em>
          </h1>

          {/* Search — the same autocomplete bar the category and trek pages use */}
          <div className="pointer-events-auto relative mt-6 w-full max-w-md sm:mt-8">
            <SearchBar />
          </div>

          {/* CTA row — dynamic buttons (name + link). Quieter than the search,
              which is now this hero's primary action. */}
          <div className="relative mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-7">
            <Link
              href={primaryCta.href || "/search"}
              className="pointer-events-auto group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary sm:text-base"
            >
              {primaryCta.label || "Start exploring"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={secondaryCta.href || "/blog"}
              className="pointer-events-auto group inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted underline-offset-4 transition-colors hover:text-primary sm:text-base"
            >
              {secondaryCta.label || "View field notes"}
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}
