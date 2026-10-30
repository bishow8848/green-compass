"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";

/** Replaces the emailed temporary password, then opens the dashboard. */
export function ChangePasswordForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    currentPassword?: string[];
    newPassword?: string[];
  }>({});
  const [saving, setSaving] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setFieldErrors({});
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentPassword: form.get("currentPassword"),
        newPassword: form.get("newPassword"),
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      if (data.details && typeof data.details === "object") {
        setFieldErrors(data.details);
      }
      setError(
        data.details
          ? "Please correct the highlighted password fields."
          : typeof data.error === "string"
          ? data.error
          : "Unable to change your password"
      );
      setSaving(false);
      return;
    }
    router.replace("/dashboard");
    router.refresh();
  }


  return (
    <form onSubmit={submit} className="mt-6 space-y-4">
      <label className="block text-sm font-medium text-foreground">
        Temporary password
        <input
          name="currentPassword"
          type="password"
          required
          autoComplete="current-password"
          className="mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        {fieldErrors.currentPassword?.map((message) => (
          <span key={message} className="mt-1 block text-xs text-error">
            {message}
          </span>
        ))}
      </label>
      <label className="block text-sm font-medium text-foreground">
        New password
        <input
          name="newPassword"
          type="password"
          required
          minLength={10}
          autoComplete="new-password"
          className="mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <span className="mt-1 block text-xs text-text-muted">
          Use at least 10 characters, including uppercase, lowercase, and a number.
        </span>
        {fieldErrors.newPassword?.map((message) => (
          <span key={message} className="mt-1 block text-xs text-error">
            {message}
          </span>
        ))}
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
        disabled={saving}
        className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        {saving ? "Saving..." : "Change password"}
      </m.button>
    </form>
  );
}
