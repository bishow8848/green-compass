"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";

/** Requests a temporary password; swaps to a confirmation once it is sent. */
export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");
    setEmailError("");
    setMessage("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        setEmailError(data.details?.email?.[0] || "");
        setError(data.error || "Unable to send a temporary password");
        return;
      }
      setMessage(data.message);
    } catch {
      setError("Unable to send the request. Please try again.");
    } finally {
      setSending(false);
    }
  }


  return (
    <>
      {message ? (
        <m.div
          className="mt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-800">{message}</p>
          <Link
            href="/login"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Return to sign in
          </Link>
        </m.div>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-foreground">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              className="mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {emailError && (
              <span className="mt-1 block text-xs text-error">{emailError}</span>
            )}
          </label>
          <AnimatePresence initial={false}>
            {error && (
              <m.p
                key={error}
                className="text-sm text-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {error}
              </m.p>
            )}
          </AnimatePresence>
          <m.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={sending}
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send temporary password"}
          </m.button>
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 text-sm text-text-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to sign in
          </Link>
        </form>
      )}
    </>
  );
}
