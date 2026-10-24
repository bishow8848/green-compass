"use client";

import { createContext, useContext, useState } from "react";

const MarkSignedUpContext = createContext<() => void>(() => undefined);

/**
 * Swaps the whole sign-up page for the "check your email" screen once the
 * account exists. Both screens are rendered on the server and passed in; this
 * only holds the switch, which the form flips through `useMarkSignedUp`.
 */
export function SignupFlow({ children, done }: { children: React.ReactNode; done: React.ReactNode }) {
  const [signedUp, setSignedUp] = useState(false);
  if (signedUp) return done;
  return <MarkSignedUpContext.Provider value={() => setSignedUp(true)}>{children}</MarkSignedUpContext.Provider>;
}

export function useMarkSignedUp() {
  return useContext(MarkSignedUpContext);
}
