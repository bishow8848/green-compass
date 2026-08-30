/**
 * Logo shown on the loading screen. Uses the static, background-removed logo
 * from /public/images/logo/bg-removed-logo.png — kept local so the loading
 * screen renders instantly without an extra API round-trip.
 */
export function LoadingLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo/bg-removed-logo.png"
      alt="Green Compass Treks"
      width={80}
      height={80}
      className="h-20 w-auto object-contain animate-revolve"
    />
  );
}
