"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAVIGATION_START } from "@/lib/navigation-start";

/** After this long a navigation is assumed lost, and the page is uncovered. */
const GIVE_UP_AFTER = 15000;

/**
 * Covers the page with the loading screen (`children`) while a link click or
 * router.push waits for the next page, so a slow page change never looks like
 * a click that did nothing. The sticky header stays above it.
 *
 * It fades in only once the wait passes a quarter second (the delay on its
 * fadeIn), so a prefetched page still swaps in without a flash. A change to
 * the query string alone, such as a category filter, keeps the page and
 * shows nothing.
 */
export function NavigationLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [pending, setPending] = useState(false);

  // The new page is on screen. (Set while rendering: React's pattern for
  // state that follows a value from above.)
  const [shownPath, setShownPath] = useState(pathname);
  if (pathname !== shownPath) {
    setShownPath(pathname);
    setPending(false);
  }

  useEffect(() => {
    let giveUp: ReturnType<typeof setTimeout> | undefined;

    const start = (event: Event) => {
      const url = new URL((event as CustomEvent<string>).detail, location.href);
      const here = new URL(pathname, location.href);
      // A link to the page already shown, or to a #section on it, ends any wait instead.
      const leaving = url.origin === here.origin && url.pathname !== here.pathname;
      // The router calls this from inside its transition, which would hold the
      // update back until the next page is ready. Made just after, it shows now.
      queueMicrotask(() => setPending(leaving));
      clearTimeout(giveUp);
      if (leaving) giveUp = setTimeout(() => setPending(false), GIVE_UP_AFTER);
    };
    // Back from a page that was reached by a full load: the browser can
    // restore this one as it was left, loading screen and all.
    const restored = (event: PageTransitionEvent) => {
      if (event.persisted) setPending(false);
    };

    window.addEventListener(NAVIGATION_START, start);
    window.addEventListener("pageshow", restored);
    return () => {
      clearTimeout(giveUp);
      window.removeEventListener(NAVIGATION_START, start);
      window.removeEventListener("pageshow", restored);
    };
  }, [pathname]);

  if (!pending) return null;

  return (
    <div
      role="status"
      aria-label="Loading page"
      className="fixed inset-0 z-[45] flex items-center justify-center bg-background animate-[fadeIn_0.2s_ease-out_0.25s_both]"
    >
      {children}
    </div>
  );
}
