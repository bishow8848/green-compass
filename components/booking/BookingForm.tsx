"use client";

import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Loader2, Minus, Users, Calendar, Package, AlertCircle } from "lucide-react";
import { travelerDetailSchema } from "@/lib/validations";
import { getPriceForGroupSize } from "@/lib/pricing";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { Reveal } from "@/components/motion";
import { EASE_OUT } from "@/components/motion/presets";

/** Validation messages slide open under their field. */
const fieldErrorMotion = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.2, ease: EASE_OUT },
};

interface TravelerForm {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  emergencyContact: string;
  age: string;
}

interface AvailableDate {
  startDate: string;
  seatsLeft: number;
}

/** The trek fields the booking form needs; the page queries exactly these. */
export interface BookingTrek {
  id: string;
  title: string;
  slug: string;
  price: number;
  duration: number;
  difficulty: string;
  maxGroupSize: number;
  addons: string | null;
  category: { slug: string; name: string } | null;
  pricingTiers: { groupSize: string; pricePerPerson: number }[];
  availableDates: AvailableDate[];
}

export interface SelectedAddon {
  title: string;
  qty: number;
  pricePerUnit: number;
}

/** The largest party the trek's pricing tiers allow ("10-15" → 15). */
function largestTierSize(trek: BookingTrek): number {
  if (!trek.pricingTiers.length) return trek.maxGroupSize || 20;
  return Math.max(
    ...trek.pricingTiers.map((tier) => {
      const range = tier.groupSize.match(/(\d+)\s*-\s*(\d+)/);
      if (range) return Number(range[2]);
      return Number(tier.groupSize.match(/(\d+)/)?.[1] || 1);
    })
  );
}

function leadTraveler(name?: string | null, email?: string | null): TravelerForm {
  return { fullName: name || "", email: email || "", phone: "", nationality: "", emergencyContact: "", age: "" };
}

/**
 * The booking form. The page resolves the trek and anything carried over
 * from the trek page's calculator (?travelers, ?startDate, ?addons) on the
 * server and hands them in.
 */
export function BookingForm({
  trek,
  initialTravelers,
  initialStartDate,
  initialAddons,
}: {
  trek: BookingTrek;
  initialTravelers: number;
  initialStartDate: string;
  initialAddons: SelectedAddon[];
}) {
  const { data: session, status: sessionStatus } = useSession();
  const [continueAsGuest, setContinueAsGuest] = useState(false);
  const slug = trek.slug;
  const [startDate, setStartDate] = useState(initialStartDate);
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddon[]>(initialAddons);
  const [travelerCount, setTravelerCount] = useState(() => Math.min(initialTravelers, largestTierSize(trek)));
  const [travelers, setTravelers] = useState<TravelerForm[]>(() => [leadTraveler(session?.user?.name, session?.user?.email)]);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  // Parse available addons from trek data
  const trekAddons: { title: string; description: string; unit: string; pricePerUnit: number }[] =
    trek?.addons ? (() => { try { return JSON.parse(trek.addons); } catch { return []; } })() : [];

  // Pre-fill the lead traveller from the account once the session is known,
  // and again if the visitor signs in or out. Keyed on the email so a session
  // refetch can't wipe a half-filled form.
  const sessionEmail = session?.user?.email ?? "";
  const [prefilledFor, setPrefilledFor] = useState(sessionEmail);
  if (prefilledFor !== sessionEmail) {
    setPrefilledFor(sessionEmail);
    setTravelers([leadTraveler(session?.user?.name, session?.user?.email)]);
  }

  // Lowering the group size drops the extra traveller cards, so the booking can
  // never carry more travellers than the party being paid for.
  useEffect(() => {
    setTravelers((prev) => (prev.length > travelerCount ? prev.slice(0, travelerCount) : prev));
  }, [travelerCount]);

  // Derive max group size from pricing tiers so the counter matches the highest tier
  const effectiveMaxGroupSize = useMemo(() => {
    if (trek?.pricingTiers?.length) {
      const tierMax = Math.max(
        ...trek.pricingTiers.map((t) => {
          const parts = t.groupSize.match(/(\d+)\s*-\s*(\d+)/);
          if (parts) return parseInt(parts[2]);
          const single = t.groupSize.match(/(\d+)/);
          return single ? parseInt(single[1]) : 0;
        })
      );
      return Math.max(tierMax, trek.maxGroupSize || 20);
    }
    return trek?.maxGroupSize || 20;
  }, [trek]);

  // Same helper the server prices the booking with, so the quote on screen and
  // the total written to the database can never disagree.
  const pricePerPerson = getPriceForGroupSize(trek?.pricingTiers, travelerCount, trek?.price || 0);
  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.qty * a.pricePerUnit, 0);
  const totalPrice = pricePerPerson * travelerCount + addonsTotal;

  const availableDates: { date: string; seatsLeft: number }[] = trek?.availableDates
    ? trek.availableDates
        .filter((ad) => ad.seatsLeft > 0 && new Date(ad.startDate) > new Date())
        .map((ad) => ({
          date: new Date(ad.startDate).toISOString().split("T")[0],
          seatsLeft: ad.seatsLeft,
        }))
    : [];

  // Travellers beyond the lead are optional: the booker adds as many as they
  // actually have details for, up to the group size they are paying for.
  const canAddTraveler = travelers.length < travelerCount;

  function addTraveler() {
    if (!canAddTraveler) return;
    setTravelers((prev) => [
      ...prev,
      { fullName: "", email: "", phone: "", nationality: "", emergencyContact: "", age: "" },
    ]);
  }

  // Errors and touched flags are keyed by traveller index, so removing a card
  // would leave them pointing at whoever shifted down into that slot. Drop the
  // traveller-scoped entries and let blur/submit re-derive them.
  function forgetTravelerFieldState() {
    setFormErrors((prev) =>
      Object.fromEntries(Object.entries(prev).filter(([k]) => !k.startsWith("travelers.")))
    );
    setTouchedFields((prev) => new Set([...prev].filter((k) => !k.startsWith("travelers."))));
  }

  function removeTraveler(index: number) {
    // The lead traveller is the booking contact and can never be removed.
    if (index === 0 || travelers.length <= 1) return;
    setTravelers((prev) => prev.filter((_, i) => i !== index));
    forgetTravelerFieldState();
  }

  function updateTraveler(index: number, field: keyof TravelerForm, value: string) {
    const updated = [...travelers];
    updated[index] = { ...updated[index], [field]: value };
    setTravelers(updated);
    // Clear the error for this field when user types
    const errorKey = `travelers.${index}.${field}`;
    setFormErrors((prev) => {
      const next = { ...prev };
      delete next[errorKey];
      return next;
    });
  }

  function getFieldError(index: number, field: keyof TravelerForm): string | undefined {
    return formErrors[`travelers.${index}.${field}`];
  }

  function isFieldTouched(index: number, field: keyof TravelerForm): boolean {
    return touchedFields.has(`travelers.${index}.${field}`);
  }

  // Age is an optional field stored as a string in the form but a number in the
  // validation schema. Returns an error message, or null when valid/empty.
  function validateAgeValue(raw: string): string | null {
    if (!raw) return null; // optional field — empty is allowed
    const age = parseInt(raw, 10);
    if (isNaN(age) || age < 1 || age > 120) {
      return "Age must be between 1 and 120";
    }
    return null;
  }

  function markFieldTouched(index: number, field: keyof TravelerForm) {
    setTouchedFields((prev) => {
      const next = new Set(prev);
      next.add(`travelers.${index}.${field}`);
      return next;
    });

    // Age is stored as a string in the form, but the schema expects a number.
    // Validate it separately so a typed value like "12" isn't rejected as a string.
    if (field === "age") {
      const ageError = validateAgeValue(travelers[index].age);
      setFormErrors((prev) => {
        const next = { ...prev };
        if (ageError) {
          next[`travelers.${index}.age`] = ageError;
        } else {
          delete next[`travelers.${index}.age`];
        }
        return next;
      });
      return;
    }

    // Validate the single field
    const traveler = travelers[index];
    const result = travelerDetailSchema.shape[field as keyof typeof travelerDetailSchema.shape]?.safeParse(
      traveler[field]
    );
    if (!result?.success) {
      const issue = result?.error?.issues?.[0];
      setFormErrors((prev) => ({
        ...prev,
        [`travelers.${index}.${field}`]: issue?.message || "Invalid value",
      }));
    } else {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[`travelers.${index}.${field}`];
        return next;
      });
    }
  }

  function validateForm(): boolean {
    const errors: Record<string, string> = {};
    const allTouched = new Set(touchedFields);

    // Validate start date
    if (!startDate) {
      errors.startDate = "Please select a start date";
    } else {
      const selected = new Date(startDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errors.startDate = "Start date cannot be in the past";
      }
    }

    // Validate each traveler
    travelers.forEach((traveler, i) => {
      const fields: (keyof TravelerForm)[] = ["fullName", "email", "phone", "nationality"];
      fields.forEach((field) => {
        const errorKey = `travelers.${i}.${field}`;
        allTouched.add(errorKey);
        const result = travelerDetailSchema.shape[field].safeParse(traveler[field]);
        if (!result.success) {
          errors[errorKey] = result.error.issues[0]?.message || "This field is required";
        }
      });

      // Validate email separately with full email schema
      if (traveler.email) {
        const emailResult = travelerDetailSchema.shape.email.safeParse(traveler.email);
        if (!emailResult.success) {
          errors[`travelers.${i}.email`] = emailResult.error.issues[0]?.message || "Invalid email";
        }
      }

      // Optional fields — only flag if they have a value that's invalid
      const ageError = validateAgeValue(traveler.age);
      if (ageError) {
        errors[`travelers.${i}.age`] = ageError;
      }
    });

    setFormErrors(errors);
    setTouchedFields(allTouched);
    return Object.keys(errors).length === 0;
  }

  function scrollToFirstError() {
    const firstErrorField = document.querySelector('[data-error="true"]');
    if (firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      (firstErrorField as HTMLElement).focus();
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) {
      scrollToFirstError();
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trekSlug: slug,
          trekTitle: trek.title,
          trekPrice: pricePerPerson,
          trekDuration: trek.duration,
          startDate,
          groupSize: travelerCount,
          addons: selectedAddons,
          specialRequests,
          travelers: travelers.map((t) => ({
            fullName: t.fullName,
            email: t.email,
            phone: t.phone,
            nationality: t.nationality,
            emergencyContact: t.emergencyContact || undefined,
            age: t.age ? parseInt(t.age) : null,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create booking");
        return;
      }

      window.location.assign(
        session
          ? `/payment/${data.booking.id}`
          : `/book/confirmation?booking=${encodeURIComponent(data.booking.id)}`
      );
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (sessionStatus === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center" style={{ backgroundColor: "var(--color-background)" }}>
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: "var(--color-primary)" }} />
      </div>
    );
  }

  const inputStyle = {
    borderColor: "var(--color-border)",
    backgroundColor: "var(--color-surface)",
    color: "var(--color-foreground)",
  };

  const travelerInputStyle = {
    borderColor: "var(--color-border)",
    backgroundColor: "white",
    color: "var(--color-foreground)",
  };

  if (!session && !continueAsGuest) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <Link
            href={`/${trek.category?.slug || "treks"}/${slug}`}
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {trek.title}
          </Link>

          <Reveal as="section" from="scale"
            className="rounded-3xl border p-7 shadow-sm sm:p-10"
            style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <div className="text-center">
              <h1 className="text-3xl font-bold" style={{ color: "var(--color-secondary)" }}>
                How would you like to book?
              </h1>
              <p className="mx-auto mt-3 max-w-xl" style={{ color: "var(--color-text-muted)" }}>
                Sign in now, or continue as a guest and receive account credentials with your confirmation.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href={`/login?callbackUrl=${encodeURIComponent(`/book/${slug}`)}`}
                className="rounded-2xl border p-6 text-left transition hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span className="text-lg font-bold" style={{ color: "var(--color-foreground)" }}>
                  Sign in
                </span>
                <span className="mt-2 block text-sm" style={{ color: "var(--color-text-muted)" }}>
                  Save the booking to your dashboard and view its status online.
                </span>
              </Link>

              <m.button
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => setContinueAsGuest(true)}
                className="rounded-2xl border p-6 text-left transition hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "var(--color-primary)", backgroundColor: "var(--color-primary)" }}
              >
                <span className="text-lg font-bold text-white">Continue as guest</span>
                <span className="mt-2 block text-sm text-white/80">
                  Book using your contact details. We will create an account and email your temporary password.
                </span>
              </m.button>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  // Booking summary card — shown at the top of the page on mobile and in the
  // sticky sidebar on desktop.
  const summaryCard = (
    <Reveal
      className="rounded-3xl border p-6 sm:p-7"
      style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      <h2 className="text-lg font-bold" style={{ color: "var(--color-secondary)" }}>
        Booking Summary
      </h2>
      <div className="mt-4 space-y-3 text-sm">
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--color-border)" }}>
          <span style={{ color: "var(--color-text)" }}>Trek</span>
          <span className="text-right font-medium" style={{ color: "var(--color-foreground)" }}>{trek.title}</span>
        </div>
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--color-border)" }}>
          <span style={{ color: "var(--color-text)" }}>Duration</span>
          <span className="font-medium" style={{ color: "var(--color-foreground)" }}>{trek.duration} days</span>
        </div>
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--color-border)" }}>
          <span style={{ color: "var(--color-text)" }}>Price per person</span>
          <span className="font-medium" style={{ color: "var(--color-foreground)" }}>${pricePerPerson.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--color-border)" }}>
          <span style={{ color: "var(--color-text)" }}>Travelers</span>
          <span className="font-medium" style={{ color: "var(--color-foreground)" }}>{travelerCount}</span>
        </div>
        {selectedAddons.map((addon, i) => (
          <div key={i} className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--color-border)" }}>
            <span style={{ color: "var(--color-text)" }}>{addon.title} &times; {addon.qty}</span>
            <span className="font-medium" style={{ color: "var(--color-foreground)" }}>
              +${(addon.qty * addon.pricePerUnit).toLocaleString()}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-1 text-lg font-bold">
          <span style={{ color: "var(--color-foreground)" }}>Total</span>
          <span style={{ color: "var(--color-primary)" }}>${totalPrice.toLocaleString()}</span>
        </div>
      </div>

      <m.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={isSubmitting}
        className="mt-6 hidden w-full rounded-full px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 lg:block"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        {isSubmitting ? (
          <span className="inline-flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" /> Processing...
          </span>
        ) : (
          `${session ? "Book Now" : "Request Guest Booking"} - $${totalPrice.toLocaleString()}`
        )}
      </m.button>
      <p className="mt-3 text-center text-xs" style={{ color: "var(--color-text-muted)" }}>
        No payment charged yet &mdash; you&apos;ll confirm on the next step
      </p>
    </Reveal>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Reveal from="left">
          <Link
            href={`/${trek.category?.slug || "treks"}/${slug}`}
            className="group mb-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: "var(--color-text-muted)" }}
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to {trek.title}
          </Link>
        </Reveal>

        <Reveal as="h1" delay={0.05} className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--color-secondary)" }}>
          Book Your Trek
        </Reveal>
        <Reveal as="p" delay={0.1} className="mt-2" style={{ color: "var(--color-text-muted)" }}>{trek.title}</Reveal>

        {session ? (
          <Reveal
            className="mt-6 rounded-2xl border px-5 py-4 text-sm"
            style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            This booking will be linked to <strong>{session.user?.email}</strong> and will appear
            in your dashboard.
          </Reveal>
        ) : (
          <Reveal
            className="mt-6 rounded-2xl border px-5 py-4"
            style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <p className="font-semibold" style={{ color: "var(--color-foreground)" }}>
              Booking as a guest
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
              You do not need to sign up. We will create an account from the lead traveler&apos;s
              details and email the booking reference, account email, and a unique temporary password.
            </p>
            <p className="mt-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
              Want to track it online?{" "}
              <Link
                href={`/login?callbackUrl=${encodeURIComponent(`/book/${slug}`)}`}
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--color-primary)" }}
              >
                Sign in before booking
              </Link>
            </p>
          </Reveal>
        )}

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
          {/* Booking Summary — top of the page on mobile, sidebar on desktop */}
          <div className="lg:hidden">
            {summaryCard}
          </div>

          {/* Main column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Date & Travelers */}
            <Reveal
              className="rounded-3xl border p-6 sm:p-7"
              style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
            >
              <h2 className="text-lg font-bold" style={{ color: "var(--color-secondary)" }}>
                Date &amp; Travelers
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--color-foreground)" }}>
                    <Calendar className="h-4 w-4" style={{ color: "var(--color-primary)" }} />
                    Start Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={startDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      setFormErrors((prev) => {
                        const next = { ...prev };
                        delete next.startDate;
                        return next;
                      });
                    }}
                    onBlur={() => {
                      if (!startDate) {
                        setFormErrors((prev) => ({ ...prev, startDate: "Please select a start date" }));
                      } else {
                        const selected = new Date(startDate);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        if (selected < today) {
                          setFormErrors((prev) => ({ ...prev, startDate: "Start date cannot be in the past" }));
                        } else {
                          setFormErrors((prev) => {
                            const next = { ...prev };
                            delete next.startDate;
                            return next;
                          });
                        }
                      }
                    }}
                    className="w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                    style={{
                      ...inputStyle,
                      borderColor: formErrors.startDate ? "var(--color-error)" : "var(--color-border)",
                    }}
                    data-error={formErrors.startDate ? "true" : undefined}
                  />
                  <AnimatePresence initial={false}>
                    {formErrors.startDate && (
                      <m.p {...fieldErrorMotion} className="mt-1.5 flex items-center gap-1 text-xs overflow-hidden" style={{ color: "var(--color-error)" }}>
                        <AlertCircle className="h-3 w-3" />
                        {formErrors.startDate}
                      </m.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--color-foreground)" }}>
                    <Users className="h-4 w-4" style={{ color: "var(--color-primary)" }} />
                    Number of Travelers
                  </label>
                  <div
                    className="flex items-center justify-between rounded-xl border px-4 py-2"
                    style={{ borderColor: "var(--color-border)", backgroundColor: "white" }}
                  >
                    <m.button
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={() => {
                        const newCount = Math.max(1, travelerCount - 1);
                        setTravelerCount(newCount);
                      }}
                      disabled={travelerCount <= 1}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border transition-colors disabled:cursor-not-allowed disabled:opacity-40"
                      style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)", color: "var(--color-secondary)" }}
                    >
                      <Minus className="h-4 w-4" />
                    </m.button>
                    <span className="text-xl font-bold tabular-nums" style={{ color: "var(--color-foreground)" }}>
                      {travelerCount}
                    </span>
                    <m.button
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={() => {
                        const newCount = Math.min(effectiveMaxGroupSize, travelerCount + 1);
                        setTravelerCount(newCount);
                      }}
                      disabled={travelerCount >= effectiveMaxGroupSize}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border transition-colors disabled:cursor-not-allowed disabled:opacity-40"
                      style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)", color: "var(--color-secondary)" }}
                    >
                      <Plus className="h-4 w-4" />
                    </m.button>
                  </div>
                  <p className="mt-1.5 text-xs" style={{ color: "var(--color-text-muted)" }}>
                    Max {effectiveMaxGroupSize} travelers per booking
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Add-ons */}
            {trekAddons.length > 0 && (
              <Reveal
                className="rounded-3xl border p-6 sm:p-7"
                style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
              >
                <h2 className="mb-4 flex items-center gap-1.5 text-lg font-bold" style={{ color: "var(--color-secondary)" }}>
                  <Package className="h-4 w-4" style={{ color: "var(--color-primary)" }} />
                  Add-ons
                </h2>
                <div className="space-y-3">
                  {trekAddons.map((addon, i) => {
                    const qty = selectedAddons.find((a) => a.title === addon.title)?.qty || 0;
                    return (
                      <div
                        key={i}
                        className="rounded-2xl border p-4"
                        style={{ borderColor: "var(--color-border)", backgroundColor: "white" }}
                      >
                        {/* Row 1 — Title */}
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>{addon.title}</p>
                          <span className="shrink-0 text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
                            ${addon.pricePerUnit}/{addon.unit}
                          </span>
                        </div>

                        {/* Row 2 — Description */}
                        {addon.description && (
                          <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                            {addon.description}
                          </p>
                        )}

                        {/* Row 3 — Add-on option (qty controls + price) */}
                        <div
                          className="mt-3 flex items-center justify-between gap-3 border-t pt-3"
                          style={{ borderColor: "var(--color-border)" }}
                        >
                          <div className="flex shrink-0 items-center gap-2">
                            <m.button
                              whileTap={{ scale: 0.97 }}
                              type="button"
                              onClick={() => setSelectedAddons((prev) => {
                                const existing = prev.find((a) => a.title === addon.title);
                                if (existing && existing.qty <= 1) return prev.filter((a) => a.title !== addon.title);
                                return prev.map((a) => a.title === addon.title ? { ...a, qty: a.qty - 1 } : a);
                              })}
                              disabled={qty <= 0}
                              className="flex h-7 w-7 items-center justify-center rounded-md border transition-colors disabled:cursor-not-allowed disabled:opacity-30"
                              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)", color: "var(--color-secondary)" }}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </m.button>
                            <span className="w-6 text-center text-sm font-bold tabular-nums" style={{ color: "var(--color-foreground)" }}>
                              {qty}
                            </span>
                            <m.button
                              whileTap={{ scale: 0.97 }}
                              type="button"
                              onClick={() => setSelectedAddons((prev) => {
                                const existing = prev.find((a) => a.title === addon.title);
                                if (existing) return prev.map((a) => a.title === addon.title ? { ...a, qty: a.qty + 1 } : a);
                                return [...prev, { title: addon.title, qty: 1, pricePerUnit: addon.pricePerUnit }];
                              })}
                              className="flex h-7 w-7 items-center justify-center rounded-md border transition-colors"
                              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)", color: "var(--color-secondary)" }}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </m.button>
                          </div>
                          <span className="shrink-0 text-right text-sm font-semibold tabular-nums" style={{ color: "var(--color-primary)" }}>
                            ${(qty * addon.pricePerUnit).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            )}

            {/* Lead Traveler Details — only one form, the count is used for pricing */}
            <Reveal
              className="rounded-3xl border p-6 sm:p-7"
              style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
            >
              <h2 className="text-lg font-bold" style={{ color: "var(--color-secondary)" }}>
                Traveler Details
              </h2>
              <p className="mt-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
                {travelerCount > 1
                  ? `You're booking for ${travelerCount} travelers. Only the lead traveler's details are required — add the others now if you have them, or send them to us later.`
                  : "We'll need some details for the booking."}
              </p>

              <div className="mt-5 space-y-4">
                <AnimatePresence initial={false}>
                {travelers.map((traveler, index) => (
                  <m.div
                    key={index}
                    className="overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: EASE_OUT }}
                  >
                  <div
                    className="rounded-2xl border-2 p-5"
                    style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>
                        {index === 0 ? "Lead Traveler" : `Traveler ${index + 1}`}
                      </h3>
                      {index > 0 && (
                        <m.button
                          whileTap={{ scale: 0.97 }}
                          type="button"
                          onClick={() => removeTraveler(index)}
                          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-opacity hover:opacity-80"
                          style={{ color: "var(--color-error)" }}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Remove
                        </m.button>
                      )}
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>Full Name *</label>
                        <input
                          type="text"
                          required
                          value={traveler.fullName}
                          onChange={(e) => updateTraveler(index, "fullName", e.target.value)}
                          onBlur={() => markFieldTouched(index, "fullName")}
                          className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                          style={{
                            ...travelerInputStyle,
                            borderColor: getFieldError(index, "fullName") ? "var(--color-error)" : "var(--color-border)",
                          }}
                          data-error={getFieldError(index, "fullName") ? "true" : undefined}
                        />
                        <AnimatePresence initial={false}>
                          {isFieldTouched(index, "fullName") && getFieldError(index, "fullName") && (
                            <m.p {...fieldErrorMotion} className="mt-1 flex items-center gap-1 text-xs overflow-hidden" style={{ color: "var(--color-error)" }}>
                              <AlertCircle className="h-3 w-3" />
                              {getFieldError(index, "fullName")}
                            </m.p>
                          )}
                        </AnimatePresence>
                      </div>
                      <div>
                        <label className="block text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>Email *</label>
                        <input
                          type="email"
                          required
                          value={traveler.email}
                          onChange={(e) => updateTraveler(index, "email", e.target.value)}
                          onBlur={() => markFieldTouched(index, "email")}
                          className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                          style={{
                            ...travelerInputStyle,
                            borderColor: getFieldError(index, "email") ? "var(--color-error)" : "var(--color-border)",
                          }}
                          data-error={getFieldError(index, "email") ? "true" : undefined}
                        />
                        <AnimatePresence initial={false}>
                          {isFieldTouched(index, "email") && getFieldError(index, "email") && (
                            <m.p {...fieldErrorMotion} className="mt-1 flex items-center gap-1 text-xs overflow-hidden" style={{ color: "var(--color-error)" }}>
                              <AlertCircle className="h-3 w-3" />
                              {getFieldError(index, "email")}
                            </m.p>
                          )}
                        </AnimatePresence>
                      </div>
                      <div>
                        <label className="block text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>Phone *</label>
                        <input
                          type="tel"
                          required
                          value={traveler.phone}
                          onChange={(e) => updateTraveler(index, "phone", e.target.value)}
                          onBlur={() => markFieldTouched(index, "phone")}
                          className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                          style={{
                            ...travelerInputStyle,
                            borderColor: getFieldError(index, "phone") ? "var(--color-error)" : "var(--color-border)",
                          }}
                          data-error={getFieldError(index, "phone") ? "true" : undefined}
                        />
                        <AnimatePresence initial={false}>
                          {isFieldTouched(index, "phone") && getFieldError(index, "phone") && (
                            <m.p {...fieldErrorMotion} className="mt-1 flex items-center gap-1 text-xs overflow-hidden" style={{ color: "var(--color-error)" }}>
                              <AlertCircle className="h-3 w-3" />
                              {getFieldError(index, "phone")}
                            </m.p>
                          )}
                        </AnimatePresence>
                      </div>
                      <div>
                        <label className="block text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>Nationality *</label>
                        <input
                          type="text"
                          required
                          value={traveler.nationality}
                          onChange={(e) => updateTraveler(index, "nationality", e.target.value)}
                          onBlur={() => markFieldTouched(index, "nationality")}
                          className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                          style={{
                            ...travelerInputStyle,
                            borderColor: getFieldError(index, "nationality") ? "var(--color-error)" : "var(--color-border)",
                          }}
                          data-error={getFieldError(index, "nationality") ? "true" : undefined}
                        />
                        <AnimatePresence initial={false}>
                          {isFieldTouched(index, "nationality") && getFieldError(index, "nationality") && (
                            <m.p {...fieldErrorMotion} className="mt-1 flex items-center gap-1 text-xs overflow-hidden" style={{ color: "var(--color-error)" }}>
                              <AlertCircle className="h-3 w-3" />
                              {getFieldError(index, "nationality")}
                            </m.p>
                          )}
                        </AnimatePresence>
                      </div>
                      <div>
                        <label className="block text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>Emergency Contact</label>
                        <input
                          type="text"
                          value={traveler.emergencyContact}
                          onChange={(e) => updateTraveler(index, "emergencyContact", e.target.value)}
                          placeholder="Name &amp; phone number"
                          className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                          style={travelerInputStyle}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>Age</label>
                        <input
                          type="number"
                          min={1}
                          max={120}
                          value={traveler.age}
                          onChange={(e) => updateTraveler(index, "age", e.target.value)}
                          onBlur={() => markFieldTouched(index, "age")}
                          className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                          style={{
                            ...travelerInputStyle,
                            borderColor: getFieldError(index, "age") ? "var(--color-error)" : "var(--color-border)",
                          }}
                          data-error={getFieldError(index, "age") ? "true" : undefined}
                        />
                        <AnimatePresence initial={false}>
                          {isFieldTouched(index, "age") && getFieldError(index, "age") && (
                            <m.p {...fieldErrorMotion} className="mt-1 flex items-center gap-1 text-xs overflow-hidden" style={{ color: "var(--color-error)" }}>
                              <AlertCircle className="h-3 w-3" />
                              {getFieldError(index, "age")}
                            </m.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {index === 0 && (
                      <div className="mt-3">
                        <label className="block text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>Special Requests</label>
                        <textarea
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          rows={2}
                          placeholder="Dietary requirements, medical conditions, accommodation preferences..."
                          className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                          style={travelerInputStyle}
                        />
                      </div>
                    )}
                  </div>
                  </m.div>
                ))}
                </AnimatePresence>

                {canAddTraveler && (
                  <m.button
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={addTraveler}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-4 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-primary)" }}
                  >
                    <Plus className="h-4 w-4" />
                    Add traveler {travelers.length + 1} of {travelerCount}
                  </m.button>
                )}
              </div>
            </Reveal>

            <AnimatePresence initial={false}>
              {error && (
                <m.div
                  key="error"
                  className="flex items-start gap-2 rounded-2xl px-4 py-3 text-sm"
                  style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-error)" }}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0, x: [0, -6, 6, -3, 3, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  {error}
                </m.div>
              )}
            </AnimatePresence>

            {/* Submit on mobile (summary card duplicates the button on desktop) */}
            <m.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 lg:hidden"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" /> Processing...
                </span>
              ) : (
                `${session ? "Book Now" : "Request Guest Booking"} - $${totalPrice.toLocaleString()}`
              )}
            </m.button>
          </div>

          {/* Summary sidebar (desktop only) */}
          <div className="hidden lg:block lg:sticky lg:top-6">
            {summaryCard}
          </div>
        </form>
      </div>
    </div>
  );
}
