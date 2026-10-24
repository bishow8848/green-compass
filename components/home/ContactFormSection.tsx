"use client";

import { useState, type SyntheticEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { EASE_OUT, SPRING_SNAPPY } from "@/components/motion/presets";

/** Validation message that slides open under its field. */
function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <m.span
          key="error"
          className="block overflow-hidden text-xs font-medium text-error"
          initial={{ opacity: 0, height: 0, y: -4 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
        >
          {message}
        </m.span>
      )}
    </AnimatePresence>
  );
}

/** Success / error banner above the submit button. */
function StatusBanner({ tone, children }: { tone: "success" | "error"; children: React.ReactNode }) {
  return (
    <m.div
      className="overflow-hidden"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
    >
      <div
        className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ${
          tone === "success" ? "bg-success/10 text-success" : "bg-error/10 text-error"
        }`}
      >
        <m.span
          className="inline-flex"
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ ...SPRING_SNAPPY, delay: 0.1 }}
        >
          {tone === "success" ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
        </m.span>
        {children}
      </div>
    </m.div>
  );
}

interface InfoCard {
  title: string;
  description: string;
}

export function ContactFormSection({
  heading,
  description,
  infoCards,
  className,
  embedded = false,
}: {
  heading?: string | null;
  description?: string | null;
  infoCards?: InfoCard[] | null;
  className?: string;
  /** Remove the page-level max-width/padding when placed inside a content column. */
  embedded?: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const cards = infoCards && infoCards.length > 0
    ? infoCards
    : [
        { title: "Fast response", description: "We usually reply within 24 hours with the next steps." },
        { title: "Tailor-made support", description: "Share your dates, group size, and ideas. We'll help shape the perfect trip." },
      ];

  // Client-side validation matching the server schema, so users get specific
  // feedback about which field is invalid instead of a generic "Invalid input".
  function validateField(field: string): string | undefined {
    switch (field) {
      case "name":
        if (!name.trim()) return "Full name is required";
        if (name.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!email.trim()) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return "Please enter a valid email address";
        return undefined;
      case "country":
        if (!country.trim()) return "Country is required";
        return undefined;
      case "phone":
        if (!phone.trim()) return "Phone number is required";
        return undefined;
      case "subject":
        if (!subject.trim()) return "Subject is required";
        if (subject.trim().length < 5) return "Subject must be at least 5 characters";
        return undefined;
      case "message":
        if (!message.trim()) return "Message is required";
        if (message.trim().length < 10) return "Message must be at least 10 characters";
        return undefined;
      default:
        return undefined;
    }
  }

  function validateFields(): Record<string, string> {
    const errors: Record<string, string> = {};
    for (const field of ["name", "email", "country", "phone", "subject", "message"]) {
      const error = validateField(field);
      if (error) errors[field] = error;
    }
    return errors;
  }

  function handleFieldChange(field: string, value: string) {
    const setters: Record<string, (v: string) => void> = {
      name: setName,
      email: setEmail,
      country: setCountry,
      phone: setPhone,
      subject: setSubject,
      message: setMessage,
    };
    setters[field]?.(value);
    // Clear this field's error while the user is typing
    setFieldErrors((prev) => {
      if (!(field in prev)) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handleFieldBlur(field: string) {
    const error = validateField(field);
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (error) next[field] = error;
      else delete next[field];
      return next;
    });
  }

  function fieldClassName(field: string): string {
    return `w-full rounded-xl border bg-surface px-4 py-3 text-foreground placeholder:text-text-muted outline-none transition focus:ring-2 focus:ring-primary/10 ${
      fieldErrors[field] ? "border-error focus:border-error" : "border-border focus:border-primary"
    }`;
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setErrorMsg("");

    // Validate before sending so users see exactly what's wrong.
    const errors = validateFields();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setErrorMsg("Please fix the highlighted fields below.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, country, phone, subject, message }),
      });

      if (!res.ok) {
        const err = await res.json();
        // Surface the specific fields the server rejected, if provided.
        const details = err.details as Record<string, string[]> | undefined;
        if (details && Object.keys(details).length > 0) {
          const mapped: Record<string, string> = {};
          for (const [field, messages] of Object.entries(details)) {
            mapped[field] = messages[0] || "Invalid value";
          }
          setFieldErrors(mapped);
          throw new Error("Please fix the highlighted fields below.");
        }
        throw new Error(err.error || "Failed to send message");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCountry("");
      setPhone("");
      setSubject("");
      setMessage("");
      setFieldErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section className={`bg-background ${className || "py-12 sm:py-16"}`}>
      <div className={embedded ? "w-full" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        <Reveal
          className="overflow-hidden rounded-3xl bg-surface"
          style={{ border: "1px solid var(--color-border)", boxShadow: "0 25px 80px rgba(0, 0, 0, 0.08)" }}
        >
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Panel — Info Section */}
            <div
              className="relative overflow-hidden p-8 text-white md:p-10"
              style={{
                background: "linear-gradient(to bottom right, var(--color-secondary), var(--color-secondary-dark))",
              }}
            >
              {/* Primary color bubbles */}
              <Reveal
                from="scale"
                duration={1.2}
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <Reveal
                from="scale"
                duration={1.2}
                delay={0.15}
                className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full opacity-30"
                style={{ backgroundColor: "var(--color-primary)" }}
              />

              <Stagger className="relative">
                <StaggerItem
                  as="span"
                  className="inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  Contact Us
                </StaggerItem>

                <StaggerItem as="h2" className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                  {heading || "Plan your next adventure with confidence."}
                </StaggerItem>

                {(description) && (
                  <StaggerItem as="p" className="mt-4 max-w-md text-sm leading-7 md:text-base" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                    {description}
                  </StaggerItem>
                )}

                {/* Dynamic Info Cards */}
                <div className="mt-8 space-y-4">
                  {cards.map((card, index) => (
                    <StaggerItem
                      key={index}
                      from="left"
                      className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
                    >
                      <p className="text-sm font-semibold">{card.title}</p>
                      <p className="mt-1 text-sm" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                        {card.description}
                      </p>
                    </StaggerItem>
                  ))}
                </div>
              </Stagger>
            </div>

            {/* Right Panel — Form */}
            <div className="p-6 md:p-10">
              <Stagger as="form" gap={0.05} delay={0.15} onSubmit={handleSubmit} className="space-y-5">
                <StaggerItem>
                  <h3 className="text-2xl font-bold" style={{ color: "var(--color-foreground)" }}>
                    Send us a message
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    Fill in your details below and we&apos;ll reach out as soon as possible.
                  </p>
                </StaggerItem>

                {/* Name + Email on one row */}
                <StaggerItem className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="space-y-1.5 text-sm font-medium text-foreground">
                    Full name
                    <input
                      value={name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      onBlur={() => handleFieldBlur("name")}
                      required
                      placeholder="Your full name"
                      className={fieldClassName("name")}
                      aria-invalid={fieldErrors.name ? "true" : undefined}
                    />
                    <FieldError message={fieldErrors.name} />
                  </label>

                  <label className="space-y-1.5 text-sm font-medium text-foreground">
                    Email address
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                      onBlur={() => handleFieldBlur("email")}
                      required
                      placeholder="you@example.com"
                      className={fieldClassName("email")}
                      aria-invalid={fieldErrors.email ? "true" : undefined}
                    />
                    <FieldError message={fieldErrors.email} />
                  </label>
                </StaggerItem>

                {/* Country */}
                <StaggerItem as="label" className="block space-y-1.5 text-sm font-medium text-foreground">
                  Country
                  <input
                    value={country}
                    onChange={(e) => handleFieldChange("country", e.target.value)}
                    onBlur={() => handleFieldBlur("country")}
                    required
                    placeholder="Your country"
                    className={fieldClassName("country")}
                    aria-invalid={fieldErrors.country ? "true" : undefined}
                  />
                  <FieldError message={fieldErrors.country} />
                </StaggerItem>

                {/* Phone */}
                <StaggerItem as="label" className="block space-y-1.5 text-sm font-medium text-foreground">
                  Phone number
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                    onBlur={() => handleFieldBlur("phone")}
                    required
                    placeholder="Your phone number"
                    className={fieldClassName("phone")}
                    aria-invalid={fieldErrors.phone ? "true" : undefined}
                  />
                  <FieldError message={fieldErrors.phone} />
                </StaggerItem>

                {/* Subject */}
                <StaggerItem as="label" className="block space-y-1.5 text-sm font-medium text-foreground">
                  Subject
                  <input
                    value={subject}
                    onChange={(e) => handleFieldChange("subject", e.target.value)}
                    onBlur={() => handleFieldBlur("subject")}
                    required
                    placeholder="How can we help you?"
                    className={fieldClassName("subject")}
                    aria-invalid={fieldErrors.subject ? "true" : undefined}
                  />
                  <FieldError message={fieldErrors.subject} />
                </StaggerItem>

                {/* Message */}
                <StaggerItem as="label" className="block space-y-1.5 text-sm font-medium text-foreground">
                  Message
                  <textarea
                    value={message}
                    onChange={(e) => handleFieldChange("message", e.target.value)}
                    onBlur={() => handleFieldBlur("message")}
                    required
                    rows={6}
                    placeholder="Tell us about your travel plan, preferred dates, group size, or any questions you have."
                    className={`${fieldClassName("message")} resize-y`}
                    aria-invalid={fieldErrors.message ? "true" : undefined}
                  />
                  <FieldError message={fieldErrors.message} />
                </StaggerItem>

                {/* Status messages */}
                <AnimatePresence initial={false} mode="wait">
                  {status === "success" && (
                    <StatusBanner key="success" tone="success">
                      Message sent successfully. We&apos;ll get back to you soon.
                    </StatusBanner>
                  )}
                  {status === "error" && (
                    <StatusBanner key="error" tone="error">
                      {errorMsg || "Something went wrong. Please try again later."}
                    </StatusBanner>
                  )}
                </AnimatePresence>

                <StaggerItem>
                  <m.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={status === "sending" ? undefined : { y: -2 }}
                    whileTap={status === "sending" ? undefined : { scale: 0.98 }}
                    transition={SPRING_SNAPPY}
                    className="group w-full rounded-2xl bg-primary px-6 py-3.5 font-semibold text-white shadow-lg transition-[background-color,box-shadow,opacity] hover:bg-primary-dark hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {status === "sending" ? (
                        <m.span
                          key="sending"
                          className="inline-flex items-center gap-2"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending…
                        </m.span>
                      ) : (
                        <m.span
                          key="idle"
                          className="inline-flex items-center justify-center gap-2"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Send className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:translate-x-0.5" />
                          Send Message
                        </m.span>
                      )}
                    </AnimatePresence>
                  </m.button>
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
