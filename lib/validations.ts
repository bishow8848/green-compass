import { z } from "zod";

// ---- Auth ----
export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100)
    .trim(),
  email: z.string().email("Please enter a valid email").trim().toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email").trim().toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(10, "New password must be at least 10 characters")
    .regex(/[a-z]/, "New password must contain a lowercase letter")
    .regex(/[A-Z]/, "New password must contain an uppercase letter")
    .regex(/[0-9]/, "New password must contain a number"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email"),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

// ---- Booking ----
export const travelerDetailSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(200).trim(),
  email: z.string().email("Valid email is required").trim().toLowerCase(),
  phone: z.string().min(6, "Valid phone number is required").max(20).trim(),
  nationality: z.string().min(2, "Nationality is required").max(100).trim(),
  emergencyContact: z.string().max(200).optional().or(z.literal("")),
  age: z.number().int().min(1).max(120).optional().nullable(),
});

const addonItemSchema = z.object({
  title: z.string(),
  qty: z.number().int().min(0),
  pricePerUnit: z.number().min(0),
});

export const createBookingSchema = z.object({
  trekSlug: z.string().min(1, "Trek slug is required"),
  // ⚠️ trekTitle, trekPrice, and trekDuration are accepted but IGNORED on the server
  // to prevent price-tampering attacks. Server always loads authoritative values from DB.
  trekTitle: z.string().optional().default(""),
  trekPrice: z.number().positive().optional(),
  trekDuration: z.number().int().positive().optional(),
  startDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date",
  }),
  groupSize: z.number().int().min(1, "At least 1 traveler"),
  addons: z.array(addonItemSchema).optional().default([]),
  specialRequests: z.string().max(2000).optional().or(z.literal("")),
  travelers: z
    .array(travelerDetailSchema)
    .min(1, "At least one traveler is required"),
});

export const bookingFormSchema = z.object({
  startDate: z.string().min(1, "Please select a start date"),
  travelers: z
    .array(travelerDetailSchema)
    .min(1, "At least one traveler is required"),
});

export type CreateBookingInput = z.infer<typeof createBookingSchema>;

// ---- Payment ----
export const createPaymentSchema = z.object({
  bookingId: z.string().min(1),
  method: z.enum(["stripe"]),
  returnUrl: z.string().url().optional(),
});

export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;

// ---- Contact ----
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required").max(200).trim(),
  email: z.string().email("Valid email is required").trim().toLowerCase(),
  subject: z.string().min(5, "Subject is required").max(200).trim(),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000).trim(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

// ---- Fix Departure Contact ----
export const fixDepartureContactSchema = z.object({
  name: z.string().min(2, "Name is required").max(200).trim(),
  email: z.string().email("Valid email is required").trim().toLowerCase(),
  phone: z.string().min(6, "Valid phone number is required").max(30).trim(),
  numberOfPersons: z.number().int().min(1, "At least 1 person").max(50),
  trekTitle: z.string().min(1, "Trek is required").max(200).trim(),
  startDate: z.string().min(1, "Start date is required").max(50).trim(),
  note: z.string().max(5000).optional().or(z.literal("")),
});

export type FixDepartureContactInput = z.infer<typeof fixDepartureContactSchema>;

// ---- Review ----
export const reviewSchema = z.object({
  trekId: z.string().min(1, "Trek ID is required"),
  rating: z.number().int().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
  heading: z.string().min(3, "Review heading must be at least 3 characters").max(120).trim(),
  text: z.string().min(10, "Review must be at least 10 characters").max(2000).trim(),
});

export type ReviewInput = z.infer<typeof reviewSchema>;
