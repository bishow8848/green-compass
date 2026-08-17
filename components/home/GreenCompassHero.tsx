"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Undo2, ZoomIn, ZoomOut } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface HeroCta {
  label: string;
  href: string;
}

interface GreenCompassHeroProps {
  title?: string;
  titleHighlight?: string;
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
  const compassWrapRef = useRef<HTMLDivElement | null>(null);
  const compassRef = useRef<HTMLCanvasElement | null>(null);

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

    // Grow the globe canvas with zoom (mirrors the compass): the canvas expands
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

  /* ─────────────────────────────────────────────────────────────
     COMPASS — crisp 2D canvas, always visible, draggable housing.
     ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    const wrap = compassWrapRef.current!;
    const canvas = compassRef.current!;

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    // Half-size compass on small screens (100px vs 200px on desktop).
    const SIZE = window.innerWidth < 640 ? 100 : 200;
    canvas.width = SIZE * DPR;
    canvas.height = SIZE * DPR;
    canvas.style.width = SIZE + "px";
    canvas.style.height = SIZE + "px";
    const ctx = canvas.getContext("2d")!;

    // Colors from the global.css theme.
    const ink = readVar("--color-foreground", "#1f2937");
    const brand = readVar("--color-primary", "#fe4100");
    const brandLight = readVar("--color-primary-light", "#ff6a33");
    const gold = readVar("--color-accent", "#e9d5b4");
    const goldLight = readVar("--color-accent-light", "#f4e6cf");

    ctx.scale(DPR, DPR);

    let needleAngle = 0;
    let housingAngle = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartAngle = 0;
    let targetHousing = 0;
    // The compass slowly revolves on its own (outer cover + dial together).
    const REVOLVE_SPEED = 0.45; // radians per second (~26°/s, full turn ~14s)

    function onPointerDown(e: PointerEvent) {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartAngle = housingAngle;
      try {
        wrap.setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      wrap.style.cursor = "grabbing";
    }
    function onPointerMove(e: PointerEvent) {
      if (!isDragging) return;
      targetHousing = dragStartAngle + (e.clientX - dragStartX) * 0.013;
    }
    function stopDrag() {
      isDragging = false;
      wrap.style.cursor = "grab";
    }
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      targetScale = Math.max(0.5, Math.min(1.2, targetScale + (e.deltaY > 0 ? -0.08 : 0.08)));
    }

    wrap.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", stopDrag);
    window.addEventListener("pointercancel", stopDrag);
    wrap.addEventListener("wheel", onWheel, { passive: false });

    let scale = 1;
    let targetScale = 1;

    function drawCompass(hAngle: number, nAngle: number, z: number) {
      // Grow the canvas to match zoom so the compass is never clipped. The
      // wrapper keeps its fixed footprint so growing never moves the copy below.
      const dim = Math.round(SIZE * z);
      const bw = Math.round(dim * DPR);
      if (canvas.width !== bw) {
        canvas.width = bw;
        canvas.height = bw;
        canvas.style.width = dim + "px";
        canvas.style.height = dim + "px";
      }
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      ctx.clearRect(0, 0, dim, dim);
      const CX = dim / 2;
      const CY = dim / 2;
      const R = dim / 2 - 4 * z;
      ctx.save();
      ctx.translate(CX, CY);

      // Soft drop shadow behind the dial.
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.shadowColor = "rgba(31,41,55,0.16)";
      ctx.shadowBlur = 12 * z;
      ctx.shadowOffsetY = 4 * z;
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.fill();
      ctx.restore();

      // Housing — outer cover + dial, revolves together.
      ctx.save();
      ctx.rotate(hAngle);

      const dialR = R * 0.84; // dial sits inside the outer cover

      // ── Outer cover — metallic bezel casing that turns with the housing ──
      const bezel = ctx.createRadialGradient(0, -R * 0.05, R * 0.55, 0, 0, R);
      bezel.addColorStop(0, goldLight);
      bezel.addColorStop(0.72, gold);
      bezel.addColorStop(1, "#c9a86a");
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.fillStyle = bezel;
      ctx.fill();

      // Outer rim of the cover.
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(122,90,44,0.6)";
      ctx.lineWidth = 2 * z;
      ctx.stroke();

      // Knurled notches around the bezel so the revolution reads clearly.
      ctx.strokeStyle = "rgba(122,90,44,0.45)";
      ctx.lineWidth = 1.3 * z;
      for (let d = 0; d < 360; d += 12) {
        const na = ((d - 90) * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(Math.cos(na) * (R - 0.8 * z), Math.sin(na) * (R - 0.8 * z));
        ctx.lineTo(Math.cos(na) * (R - 4.5 * z), Math.sin(na) * (R - 4.5 * z));
        ctx.stroke();
      }

      // Inner shadow lip where the cover meets the dial.
      ctx.beginPath();
      ctx.arc(0, 0, dialR + 1.5 * z, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(122,90,44,0.35)";
      ctx.lineWidth = 2 * z;
      ctx.stroke();

      // Dial face — clean warm white, inside the cover.
      const face = ctx.createRadialGradient(0, -dialR * 0.12, dialR * 0.05, 0, 0, dialR);
      face.addColorStop(0, "#ffffff");
      face.addColorStop(0.7, "#fdfbf6");
      face.addColorStop(1, goldLight);
      ctx.beginPath();
      ctx.arc(0, 0, dialR, 0, Math.PI * 2);
      ctx.fillStyle = face;
      ctx.fill();

      // Thin gold hairline ring at the dial's edge.
      ctx.beginPath();
      ctx.arc(0, 0, dialR - 1 * z, 0, Math.PI * 2);
      ctx.strokeStyle = gold;
      ctx.lineWidth = 2 * z;
      ctx.stroke();

      // Inner hairline ring.
      ctx.beginPath();
      ctx.arc(0, 0, dialR * 0.8, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(31,41,55,0.12)";
      ctx.lineWidth = 1 * z;
      ctx.stroke();

      // Clean tick marks — major every 30°, minor every 6°. No numbers.
      for (let d = 0; d < 360; d += 6) {
        const da = ((d - 90) * Math.PI) / 180;
        const major = d % 30 === 0;
        const ro = dialR * 0.97;
        const ri = major ? dialR * 0.85 : dialR * 0.91;
        ctx.save();
        ctx.rotate(da);
        ctx.beginPath();
        ctx.moveTo(ro, 0);
        ctx.lineTo(ri, 0);
        ctx.strokeStyle = major ? ink : "rgba(31,41,55,0.35)";
        ctx.lineWidth = major ? 1.6 * z : 0.9 * z;
        ctx.stroke();
        ctx.restore();
      }

      // Cardinal letters — N in brand orange, E/S/W in ink.
      const cardinals: Array<[string, number, string, number]> = [
        ["N", 0, brand, 1],
        ["E", 90, ink, 0.7],
        ["S", 180, ink, 0.7],
        ["W", 270, ink, 0.7],
      ];
      cardinals.forEach((cv) => {
        const ca = ((cv[1] - 90) * Math.PI) / 180;
        const cr = dialR * 0.56;
        ctx.save();
        ctx.translate(Math.cos(ca) * cr, Math.sin(ca) * cr);
        ctx.globalAlpha = cv[3];
        ctx.font = "500 " + (17 * z).toFixed(1) + "px var(--font-serif), serif";
        ctx.fillStyle = cv[2];
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(cv[0], 0, 1);
        ctx.restore();
      });

      // Subtle crosshair across the dial.
      ctx.strokeStyle = "rgba(31,41,55,0.07)";
      ctx.lineWidth = 1 * z;
      ctx.beginPath();
      ctx.moveTo(0, -dialR * 0.32);
      ctx.lineTo(0, dialR * 0.32);
      ctx.moveTo(-dialR * 0.32, 0);
      ctx.lineTo(dialR * 0.32, 0);
      ctx.stroke();

      ctx.restore(); // end housing rotate

      // Needle — always points "north", fixed relative to the world.
      ctx.save();
      ctx.rotate(nAngle);

      // North half — brand orange.
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-4 * z, -R * 0.46);
      ctx.lineTo(0, -R * 0.8);
      ctx.lineTo(4 * z, -R * 0.46);
      ctx.closePath();
      const ng = ctx.createLinearGradient(0, -R * 0.8, 0, 0);
      ng.addColorStop(0, brandLight);
      ng.addColorStop(1, brand);
      ctx.fillStyle = ng;
      ctx.fill();

      // South half — ink / slate.
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-4 * z, R * 0.46);
      ctx.lineTo(0, R * 0.8);
      ctx.lineTo(4 * z, R * 0.46);
      ctx.closePath();
      ctx.fillStyle = ink;
      ctx.fill();

      ctx.restore();

      // Centre pivot — gold dot with ink centre.
      ctx.beginPath();
      ctx.arc(0, 0, 5 * z, 0, Math.PI * 2);
      ctx.fillStyle = gold;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, 0, 2 * z, 0, Math.PI * 2);
      ctx.fillStyle = ink;
      ctx.fill();

      ctx.restore(); // end translate
    }

    let last = 0;
    let rafId = 0;
    function loop(ts: number) {
      rafId = requestAnimationFrame(loop);
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;
      if (!isDragging) {
        if (!rm) {
          // Constant, stately revolution of the whole compass.
          targetHousing += REVOLVE_SPEED * dt;
        }
      }
      housingAngle += (targetHousing - housingAngle) * (isDragging ? 0.35 : 0.06);
      if (rm) {
        needleAngle = 0;
      } else {
        const phase = (ts % 1250) / 1250;
        const pulse = (at: number, width: number) => {
          const x = (phase - at) / width;
          return Math.exp(-x * x);
        };
        needleAngle = (pulse(0.1, 0.025) - pulse(0.16, 0.028) + pulse(0.24, 0.032) - pulse(0.31, 0.038)) * 0.13;
      }
      scale += (targetScale - scale) * 0.1;
      drawCompass(housingAngle, needleAngle, scale);
    }
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      wrap.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", stopDrag);
      window.removeEventListener("pointercancel", stopDrag);
      wrap.removeEventListener("wheel", onWheel);
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

      {/* Copy — pointer-transparent so the globe hitzone behind it stays draggable/zoomable */}
      <div className="pointer-events-none relative mx-auto flex min-h-full w-full max-w-[1400px] flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-12 lg:justify-center lg:px-14 lg:pb-0">
        <div className="w-full max-w-xl lg:max-w-2xl">
          {/* Compass */}
          <div
            ref={compassWrapRef}
            className="pointer-events-auto relative z-30 h-[100px] w-[100px] cursor-grab touch-none active:cursor-grabbing sm:h-[200px] sm:w-[200px]"
            aria-hidden="true"
          >
            <canvas
              ref={compassRef}
              className="absolute bottom-0 left-0"
            />
          </div>

          {/* Headline */}
          <h1 className="mt-2 font-display text-[2.6rem] leading-[1.03] tracking-tight text-foreground sm:mt-3 sm:text-6xl lg:text-[4.75rem]">
            {heroTitle}{" "}
            <em className="font-serif font-medium italic text-primary">{heroHighlight}</em>
          </h1>

          {/* CTA row — dynamic buttons (name + link) */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-8">
            <Link
              href={primaryCta.href || "/search"}
              className="pointer-events-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-dark sm:px-8 sm:py-3.5 sm:text-base"
            >
              {primaryCta.label || "Start exploring"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={secondaryCta.href || "/blog"}
              className="pointer-events-auto group inline-flex items-center gap-1 text-sm font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary sm:text-base"
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
