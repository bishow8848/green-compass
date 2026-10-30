// Next.js runs this file in the browser before the app hydrates.
import { NAVIGATION_START } from "@/lib/navigation-start";

/** Every link click, router.push and back/forward, as it starts. */
export function onRouterTransitionStart(url: string) {
  window.dispatchEvent(new CustomEvent(NAVIGATION_START, { detail: url }));
}
