"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { Mountain, Menu, X, User, LogOut, ChevronDown } from "lucide-react";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

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

  // Close mobile menu on route change
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMenuOpen(false);
      setHoveredDropdown(null);
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
  // a top bar to share space with, and only while at the top of the page.
  // No top bar, or scrolled -> always the normal compact header.
  const showExpanded = Boolean(topBarContent) && !isScrolled;

  const logoContent = siteLogo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://res.cloudinary.com/dk7ggjvlw/image/upload/f_auto,q_auto,w_480/${siteLogo}`}
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
    <nav className="ml-14 hidden items-center gap-1 lg:flex">
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
              // Close dropdown when focus leaves the entire dropdown container
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                handleDropdownLeave();
              }
            }}
          >
            <Link
              href={item.href}
              onClick={() => setHoveredDropdown(null)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setHoveredDropdown(null);
                  // Focus the trigger link
                  (e.currentTarget as HTMLElement).focus();
                }
                if (e.key === "ArrowDown" && isHovered) {
                  e.preventDefault();
                  // Focus first trek link in dropdown
                  const firstLink = e.currentTarget
                    .closest("[data-dropdown-container]")
                    ?.querySelector<HTMLElement>('[data-dropdown-item]:first-of-type a, a[data-dropdown-item]');
                  firstLink?.focus();
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

            <div
              data-dropdown-container="true"
              onMouseEnter={() => handleDropdownEnter(item.href)}
              onMouseLeave={handleDropdownLeave}
              role="menu"
              aria-label={`${item.label} submenu`}
              className={`absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-200 ease-out ${
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
              style={{ minWidth: `${Math.max(groupedTreks.length * 208, 220)}px` }}
            >
              {/* Little pointer caret connecting the trigger to the panel */}
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-border bg-surface" aria-hidden="true" />

              <div className="relative flex divide-x divide-border">
                {groupedTreks.map((group) => (
                  <div key={group.region} className="min-w-[200px] flex-1 p-3">
                    <div className="mb-2 flex items-center gap-2 border-b border-border px-1 pb-2">
                      <div className="h-1 w-4 rounded-full bg-primary" aria-hidden="true" />
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">
                        {group.region}
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      {group.treks.map((trek, idx) => {
                        const trekHref = `/${item.href.replace(/^\//, "")}/${trek.slug}`;
                        const isTrekActive = pathname === trekHref;
                        return (
                          <Link
                            key={trek.id}
                            href={trekHref}
                            role="menuitem"
                            data-dropdown-item="true"
                            onClick={() => setHoveredDropdown(null)}
                            onKeyDown={(e) => {
                              if (e.key === "Escape") {
                                setHoveredDropdown(null);
                                // Return focus to the trigger button
                                const trigger = e.currentTarget
                                  .closest("[data-dropdown-container]")
                                  ?.parentElement
                                  ?.querySelector<HTMLElement>("button[aria-haspopup]");
                                trigger?.focus();
                              }
                            }}
                            className={`group/trek relative flex items-center gap-2.5 rounded-xl px-2 py-1.5 transition-all duration-300 hover:bg-primary/10 ${
                              isTrekActive ? "bg-primary/10" : ""
                            }`}
                          >
                            <span
                              className={`absolute left-0 w-1 rounded-r-full bg-primary transition-all duration-300 group-hover/trek:h-1/3 ${
                                isTrekActive ? "h-1/2" : "h-0"
                              }`}
                              aria-hidden="true"
                            />
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[9px] font-black transition-transform duration-300 group-hover/trek:scale-110 group-hover/trek:bg-primary group-hover/trek:text-white ${
                                isTrekActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                              }`}
                              aria-hidden="true"
                            >
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={`truncate text-sm transition-all duration-300 group-hover/trek:translate-x-0.5 group-hover/trek:text-foreground ${
                                isTrekActive ? "font-semibold text-foreground" : "font-medium text-text-muted"
                              }`}
                            >
                              {trek.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );

  const authActions = (
    <div className="ml-auto hidden items-center gap-4 lg:flex">
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
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
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

          <div className="flex items-center justify-end border-b border-slate-100 py-1.5">
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
                src={`https://res.cloudinary.com/dk7ggjvlw/image/upload/f_auto,q_auto,w_480/${siteLogo}`}
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
                        onClick={() => setHoveredDropdown(isOpen ? null : `mobile-${item.href}`)}
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isOpen}
                        className="mr-1 rounded-lg p-3 text-slate-500 transition-colors hover:bg-surface-alt active:bg-surface-alt"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0">
                        <div className="ml-4 mt-1 space-y-3 border-l border-slate-100 py-1 pl-3">
                          {groupedTreks.map((group) => (
                            <div key={group.region}>
                              <p className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                                {group.region}
                              </p>
                              <div className="space-y-0.5">
                                {group.treks.map((trek) => {
                                  const trekHref = `/${item.href.replace(/^\//, "")}/${trek.slug}`;
                                  const isTrekActive = pathname === trekHref;
                                  return (
                                    <Link
                                      key={trek.id}
                                      href={trekHref}
                                      onClick={() => {
                                        setHoveredDropdown(null);
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
                          ))}
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
