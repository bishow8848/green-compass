"use client";

import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { useSession, signOut } from "next-auth/react";
import { Mountain, Menu, X, User, LogOut, ChevronDown } from "lucide-react";
import { HeaderMegaMenu } from "./HeaderMegaMenu";

interface CategoryNav {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
}

interface DropdownTrek {
  id: string;
  title: string;
  slug: string;
  categoryId: string | null;
  region?: string | null;
  regionId?: string | null;
  regionRef?: { id: string; name: string; slug: string } | null;
}

interface RegionInfo {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
}

/** Capitalizes the first letter of each word in a user's name. */
function titleCaseName(name: string | null | undefined): string {
  if (!name) return "";
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function Header({
  categories,
  siteLogo,
  navigation,
  categoryDropdownTreks,
  dropdownTreks,
  allRegions,
  topBarContent,
}: {
  categories?: CategoryNav[];
  siteLogo?: string | null;
  navigation?: { label: string; href: string }[];
  categoryDropdownTreks?: Record<string, string[]>;
  dropdownTreks?: DropdownTrek[];
  allRegions?: RegionInfo[];
  topBarContent?: string | null;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  // Remember the active mega-menu region per nav href, so each dropdown
  // reopens on the region the visitor was last looking at.
  const [megaRegions, setMegaRegions] = useState<Record<string, string | null>>({});
  // Mobile menu: which region's treks are expanded inside a category. A single
  // value keeps it accordion-style (only one region open at a time).
  const [mobileRegion, setMobileRegion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();
  // Root of the sticky header — used to anchor the full-width mega menu panel
  // and to move focus between the nav trigger and the panel.
  const headerRef = useRef<HTMLDivElement | null>(null);
  // Measured horizontal bounds for the mega menu: from the first nav item
  // (left) to just before the auth actions (right).
  const navRef = useRef<HTMLElement | null>(null);
  const authRef = useRef<HTMLDivElement | null>(null);
  const [megaBox, setMegaBox] = useState<{ left: number; width: number } | null>(null);

  // Scroll tracking with hysteresis + rAF throttling.
  // Wide gap (30px to leave the top, 100px to re-enter) means a scroll
  // position hovering anywhere in between can't cause rapid toggling.
  // rAF coalesces bursts of scroll events into one state check per frame.
  const tickingRef = useRef(false);

  useEffect(() => {
    function evaluate() {
      const y = window.scrollY;
      setIsScrolled((prev) => (prev ? y > 30 : y > 100));
      tickingRef.current = false;
    }
    function handleScroll() {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(evaluate);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    evaluate();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track whether the viewport is desktop (lg = 1024px and up). The expanded
  // header layout (logo spanning the top-bar row) only makes sense on desktop
  // where the top bar is actually shown — on mobile it's always the compact nav.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Close dropdown when hovering away
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleDropdownEnter(href: string) {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setHoveredDropdown(href);
  }

  function handleDropdownLeave() {
    dropdownTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 150);
  }

  // Close the mega menu and return keyboard focus to the nav trigger for
  // `href` (used by the Escape key inside the mega menu panel).
  function closeMegaMenuAndFocusTrigger(href: string) {
    setHoveredDropdown(null);
    requestAnimationFrame(() => {
      headerRef.current
        ?.querySelector<HTMLElement>(`[data-mega-trigger][data-href="${CSS.escape(href)}"]`)
        ?.focus();
    });
  }

  // Measure the mega menu's horizontal extent: it starts at the left edge of
  // the first nav item and ends just before the auth actions (sign in/sign up
  // or the user chip), never overlapping them. Coordinates are relative to the
  // sticky header root, which is the panel's containing block.
  const measureMegaBox = useCallback(() => {
    const root = headerRef.current;
    const nav = navRef.current;
    if (!root || !nav) return;
    const rootRect = root.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const authRect = authRef.current?.getBoundingClientRect();
    const left = navRect.left - rootRect.left;
    const gap = 12;
    const rightBound = authRect
      ? authRect.left - rootRect.left - gap
      : navRect.right - rootRect.left;
    const width = Math.max(rightBound - left, 320);
    setMegaBox((prev) =>
      prev && Math.abs(prev.left - left) < 1 && Math.abs(prev.width - width) < 1
        ? prev
        : { left, width }
    );
  }, []);

  // Measure once on mount and whenever the viewport resizes.
  useEffect(() => {
    measureMegaBox();
    window.addEventListener("resize", measureMegaBox);
    return () => window.removeEventListener("resize", measureMegaBox);
  }, [measureMegaBox]);

  // Re-measure whenever a dropdown opens so the panel is always correctly
  // placed (header height can change between expanded and compact states).
  useEffect(() => {
    if (hoveredDropdown) measureMegaBox();
  }, [hoveredDropdown, measureMegaBox]);

  // While a dropdown is open, re-measure on scroll so the panel width/left
  // track the header as it collapses from expanded (with top bar) to compact.
  // The panel's own transition then animates the change smoothly instead of
  // staying at the stale expanded-header width.
  useEffect(() => {
    if (!hoveredDropdown) return;
    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measureMegaBox);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [hoveredDropdown, measureMegaBox]);

  // Close mobile menu on route change
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMenuOpen(false);
      setHoveredDropdown(null);
      setMobileRegion(null);
    }, 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  // Lock background scroll while the mobile drawer is open, and let Escape close it.
  useEffect(() => {
    if (!isMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Build nav items — always include published categories, merge with saved navigation
  const categoryNavItems = (categories && categories.length > 0
    ? categories.map((cat) => ({ label: cat.name, href: `/${cat.slug}` }))
    : [{ label: "Treks", href: "/treks" }]
  ) as { label: string; href: string }[];

  const extraNavItems = (navigation && navigation.length > 0
    ? navigation.filter((n: { label: string; href: string }) => !n.href.startsWith("/treks") && !categories?.some((c) => `/${c.slug}` === n.href))
    : [
        { label: "Blog", href: "/blog" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]
  ) as { label: string; href: string }[];

  const navItems = [...categoryNavItems, ...extraNavItems];

  function isNavItemActive(href: string): boolean {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  // Group treks by region for a given nav href
  function getTreksGroupedByRegion(href: string): { region: string; treks: DropdownTrek[] }[] {
    const slug = href.replace(/^\//, "");
    const selectedIds = categoryDropdownTreks?.[slug];
    if (!selectedIds || selectedIds.length === 0) return [];

    // Preserve the order from selectedIds
    const trekMap = new Map((dropdownTreks || []).map((t) => [t.id, t]));
    const catTreks = selectedIds.map((id) => trekMap.get(id)).filter(Boolean) as DropdownTrek[];
    const catRegions = (allRegions || []).filter((r) => r.categoryId === categories?.find((c) => c.slug === slug)?.id);

    const grouped: Record<string, DropdownTrek[]> = {};
    for (const trek of catTreks) {
      const regionName = trek.regionRef?.name || trek.region || "Other";
      if (!grouped[regionName]) grouped[regionName] = [];
      grouped[regionName].push(trek);
    }

    const regionOrder = catRegions.map((r) => r.name);
    return Object.entries(grouped)
      .sort(([a], [b]) => {
        const ai = regionOrder.indexOf(a);
        const bi = regionOrder.indexOf(b);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      })
      .map(([region, treks]) => ({ region, treks }));
  }

  // The "tall, logo spans both rows" layout only ever applies when there IS
  // a top bar to share space with, only on desktop (lg+ where the top bar is
  // shown), and only while at the top of the page. Mobile always gets the
  // normal compact header — even when not scrolled.
  const showExpanded = Boolean(topBarContent) && !isScrolled && isDesktop;

  const logoContent = siteLogo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_480/${siteLogo}`}
      alt="Mardi Treks"
      width={240}
      height={160}
      decoding="async"
      className={`object-contain transition-all duration-300 ease-out ${
        showExpanded ? "h-24 max-w-[240px]" : "h-10 max-w-[140px]"
      }`}
    />
  ) : (
    <div className={`flex items-center gap-2 font-bold tracking-tight text-primary transition-all duration-300 ease-out ${showExpanded ? "text-3xl" : "text-xl"}`}>
      <Mountain className={`transition-all duration-300 ease-out ${showExpanded ? "h-10 w-10" : "h-7 w-7"}`} strokeWidth={2.25} />
      <span>Mardi Treks</span>
    </div>
  );

  // Nav is absolutely centered within its row, independent of how wide the
  // logo or the auth actions are — this is what keeps it dead-center in
  // both the expanded (with top bar) and compact (scrolled) layouts.
  const desktopNav = (
    <nav ref={navRef} className="relative ml-14 hidden items-center gap-1 lg:flex">
      {navItems.map((item) => {
        const groupedTreks = getTreksGroupedByRegion(item.href);
        const hasDropdown = groupedTreks.length > 0;
        const isHovered = hoveredDropdown === item.href;
        const isActive = isNavItemActive(item.href);

        if (!hasDropdown) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative rounded-lg px-3.5 py-2 text-[14.5px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                isActive ? "text-primary" : "text-slate-600 hover:text-primary"
              }`}
            >
              {item.label}
              <span
                className={`pointer-events-none absolute inset-x-3 bottom-1 h-px bg-primary transition-transform duration-200 ease-out ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          );
        }

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => handleDropdownEnter(item.href)}
            onMouseLeave={handleDropdownLeave}
            onFocus={() => handleDropdownEnter(item.href)}
            onBlur={(e) => {
              // Keep the menu open when focus moves into the mega panel,
              // which lives under the header root rather than under this item.
              if (
                !e.currentTarget.contains(e.relatedTarget as Node) &&
                !headerRef.current?.contains(e.relatedTarget as Node)
              ) {
                handleDropdownLeave();
              }
            }}
          >
            <Link
              href={item.href}
              data-mega-trigger="true"
              data-href={item.href}
              onClick={() => setHoveredDropdown(null)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setHoveredDropdown(null);
                  // Focus the trigger link
                  (e.currentTarget as HTMLElement).focus();
                }
                if (e.key === "ArrowDown" && isHovered) {
                  e.preventDefault();
                  // Focus the first region tab in the mega menu
                  headerRef.current
                    ?.querySelector<HTMLElement>("[data-mega-panel] [data-region-tab]")
                    ?.focus();
                }
              }}
              aria-expanded={isHovered}
              aria-haspopup="true"
              className={`group inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14.5px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                isActive ? "text-primary" : "text-slate-600 hover:text-primary"
              }`}
            >
              {item.label}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${isHovered ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
              <span
                className={`pointer-events-none absolute inset-x-3 bottom-1 h-px bg-primary transition-transform duration-200 ease-out ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          </div>
        );
      })}
    </nav>
  );

  // Derive the single mega-menu panel from whichever nav item is hovered.
  // Only items backed by region/trek data get a panel; the rest are plain links.
  const megaItem = navItems.find((n) => n.href === hoveredDropdown) ?? null;
  const megaGroups = megaItem ? getTreksGroupedByRegion(megaItem.href) : [];
  const megaOpen = Boolean(megaItem && megaGroups.length > 0);

  const megaMenuPanel = megaItem ? (
    <HeaderMegaMenu
      label={megaItem.label}
      href={megaItem.href}
      groups={megaGroups}
      isOpen={megaOpen}
      activeRegion={megaRegions[megaItem.href] ?? null}
      onRegionChange={(region) =>
        setMegaRegions((prev) => ({ ...prev, [megaItem.href]: region }))
      }
      onNavigate={() => setHoveredDropdown(null)}
      onEscape={() => closeMegaMenuAndFocusTrigger(megaItem.href)}
      pathname={pathname}
      onMouseEnter={() => handleDropdownEnter(megaItem.href)}
      onMouseLeave={handleDropdownLeave}
      left={megaBox?.left ?? 0}
      width={megaBox?.width ?? 320}
    />
  ) : null;

  const authActions = (
    <div ref={authRef} className="ml-auto hidden items-center gap-4 lg:flex">
      {session?.user ? (
        <div className="flex items-center gap-2.5">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl px-1.5 py-1.5 transition-colors hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[15px] font-bold text-primary">
              {(session.user.name || session.user.email || "?").trim().charAt(0).toUpperCase()}
            </span>
            <span className="min-w-0 text-left">
              <span className="block max-w-[160px] truncate text-[15px] font-semibold text-foreground">
                {titleCaseName(session.user.name) || "Your account"}
              </span>
              {session.user.email && (
                <span className="block max-w-[160px] truncate text-[13px] text-text-muted">
                  {session.user.email}
                </span>
              )}
            </span>
          </Link>
          <button
            onClick={() => signOut()}
            aria-label="Sign out"
            title="Sign out"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-surface-alt hover:text-error focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <>
          <Link
            href="/login"
            className="flex items-center gap-1.5 rounded-lg text-[14px] font-medium text-slate-600 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <User className="h-4 w-4" />
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-primary px-4 py-2 text-[14px] font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-primary-dark hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );

  const mobileMenuButton = (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="ml-auto -mr-2 rounded-lg p-2.5 text-slate-600 transition-colors hover:bg-surface-alt active:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 lg:hidden"
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
    >
      <span className="relative block h-6 w-6">
        <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${isMenuOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"}`} />
        <X className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"}`} />
      </span>
    </button>
  );

  // Initials shown in the mobile drawer's account row when signed in.
  const userInitial = (session?.user?.name || session?.user?.email || "?").trim().charAt(0).toUpperCase();

  return (
    <div
      ref={headerRef}
      data-header-root="true"
      className={`relative sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-black/5 bg-white/85 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_16px_-4px_rgba(0,0,0,0.08)] backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      {showExpanded ? (
        // Expanded layout: logo spans both the top-bar row and the nav row.
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr] gap-x-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="row-span-2 flex items-center py-2 focus-visible:outline-none">
            {logoContent}
          </Link>

          {/* Top bar (announcement content) — hidden on mobile, shown from lg up */}
          <div className="hidden items-center justify-end border-b border-slate-100 py-1.5 lg:flex">
            <div
              className="flex flex-wrap items-center justify-end gap-x-3 gap-y-0.5 text-[11.5px] leading-relaxed text-text-muted [&_p]:my-0 [&_a]:font-medium [&_a]:text-primary [&_a]:transition-opacity [&_a]:hover:opacity-75"
              dangerouslySetInnerHTML={{ __html: topBarContent || "" }}
            />
          </div>

          <div className="relative flex items-center py-3.5">
            {desktopNav}
            {authActions}
            {mobileMenuButton}
          </div>
        </div>
      ) : (
        // Compact layout: used when scrolled, OR when there's no top bar at all.
        <div className="relative mx-auto flex max-w-7xl items-center px-4 py-2.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2 focus-visible:outline-none">
            {logoContent}
          </Link>
          {desktopNav}
          {authActions}
          {mobileMenuButton}
        </div>
      )}

      {/* Mega menu — full-width panel shown below the header on hover (desktop) */}
      {megaMenuPanel}

      {/* Mobile backdrop — dims the page and closes the drawer on tap */}
      <div
        className={`fixed inset-0 z-[55] bg-slate-900/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation drawer — full-screen overlay, page scroll is locked while open */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-[60] flex h-[100dvh] w-screen flex-col overflow-y-auto bg-white transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="flex shrink-0 items-center justify-between border-b border-slate-100 px-4 py-3"
          style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
        >
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 focus-visible:outline-none">
            {siteLogo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_480/${siteLogo}`}
                alt="Mardi Treks"
                width={240}
                height={160}
                decoding="async"
                className="h-10 max-w-[140px] object-contain"
              />
            ) : (
              <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary">
                <Mountain className="h-7 w-7" strokeWidth={2.25} aria-hidden="true" />
                <span>Mardi Treks</span>
              </div>
            )}
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full p-2.5 text-slate-500 transition-colors hover:bg-surface-alt active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {session?.user && (
          <Link
            href="/dashboard"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 border-b border-slate-100 px-4 py-3.5 transition-colors hover:bg-surface-alt"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[15px] font-bold text-primary">
              {userInitial}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[15px] font-semibold text-foreground">
                {titleCaseName(session.user.name) || "Your account"}
              </span>
              {session.user.email && (
                <span className="block truncate text-[13px] text-text-muted">{session.user.email}</span>
              )}
            </span>
          </Link>
        )}

        <nav
          className="flex flex-col gap-0.5 px-3 py-3"
          style={{ paddingBottom: "max(1.5rem, calc(env(safe-area-inset-bottom) + 1rem))" }}
        >
          {navItems.map((item) => {
            const groupedTreks = getTreksGroupedByRegion(item.href);
            const hasDropdown = groupedTreks.length > 0;
            const isOpen = hoveredDropdown === `mobile-${item.href}`;
            const isActive = isNavItemActive(item.href);

            return (
              <div key={item.href}>
                {hasDropdown ? (
                  <>
                    <div
                      className={`flex items-center justify-between rounded-xl transition-colors ${
                        isActive ? "bg-primary/5" : ""
                      }`}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex-1 px-3 py-3.5 text-[15px] font-medium ${isActive ? "text-primary" : "text-slate-700"}`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => {
                          if (isOpen) setMobileRegion(null);
                          setHoveredDropdown(isOpen ? null : `mobile-${item.href}`);
                        }}
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isOpen}
                        className="mr-1 rounded-lg p-3 text-slate-500 transition-colors hover:bg-surface-alt active:bg-surface-alt"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {/* Level 1 — region list (only regions, collapsed) */}
                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0">
                        <div className="ml-4 mt-1 space-y-0.5 border-l border-slate-100 py-1 pl-3">
                          {groupedTreks.map((group) => {
                            const regionKey = `${item.href}:${group.region}`;
                            const regionOpen = mobileRegion === regionKey;
                            return (
                              <div key={group.region}>
                                <button
                                  type="button"
                                  onClick={() => setMobileRegion(regionOpen ? null : regionKey)}
                                  aria-expanded={regionOpen}
                                  className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-[14px] font-semibold text-slate-700 transition-colors hover:bg-surface-alt hover:text-primary active:bg-surface-alt"
                                >
                                  <span className="min-w-0 truncate">{group.region}</span>
                                  <ChevronDown
                                    className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                                      regionOpen ? "rotate-180 text-primary" : ""
                                    }`}
                                    aria-hidden="true"
                                  />
                                </button>

                                {/* Level 2 — treks for this region */}
                                <div
                                  className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
                                    regionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                  }`}
                                >
                                  <div className="min-h-0">
                                    <div className="space-y-0.5 pb-1 pl-3">
                                      {group.treks.map((trek) => {
                                        const trekHref = `/${item.href.replace(/^\//, "")}/${trek.slug}`;
                                        const isTrekActive = pathname === trekHref;
                                        return (
                                          <Link
                                            key={trek.id}
                                            href={trekHref}
                                            onClick={() => {
                                              setHoveredDropdown(null);
                                              setMobileRegion(null);
                                              setIsMenuOpen(false);
                                            }}
                                            className={`block rounded-lg px-3 py-2.5 text-[14.5px] transition-colors hover:bg-surface-alt hover:text-primary ${
                                              isTrekActive ? "bg-primary/10 font-semibold text-primary" : "text-slate-600"
                                            }`}
                                          >
                                            {trek.title}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-xl px-3 py-3.5 text-[15px] font-medium transition-colors hover:bg-surface-alt hover:text-primary ${
                      isActive ? "bg-primary/5 text-primary" : "text-slate-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

          <div className="mt-3 border-t border-slate-100 pt-3">
            {session?.user ? (
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  signOut();
                }}
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-3.5 text-left text-[15px] font-medium text-slate-700 transition-colors hover:bg-surface-alt active:bg-surface-alt"
              >
                <LogOut className="h-5 w-5 text-slate-500" />
                Sign Out
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3.5 text-[15px] font-medium text-slate-700 transition-colors hover:bg-surface-alt active:bg-surface-alt"
                >
                  <User className="h-4.5 w-4.5" />
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl bg-primary px-3 py-3.5 text-center text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark active:bg-primary-dark"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
