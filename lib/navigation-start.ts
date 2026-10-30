/**
 * Fired on window, with the destination URL as its detail, when a client-side
 * navigation begins (instrumentation-client.ts). The navigation loading screen
 * (components/layout/NavigationLoader.tsx) listens for it.
 */
export const NAVIGATION_START = "greencompass:navigation-start";
