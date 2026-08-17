import { describe, it, expect } from "vitest";
import {
  signUpSchema,
  loginSchema,
  createBookingSchema,
  contactFormSchema,
  reviewSchema,
  travelerDetailSchema,
  changePasswordSchema,
  forgotPasswordSchema,
} from "@/lib/validations";

describe("forgotPasswordSchema", () => {
  it("normalizes a valid email", () => {
    const result = forgotPasswordSchema.safeParse({ email: " USER@Example.com " });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.email).toBe("user@example.com");
  });

  it("rejects an invalid email", () => {
    expect(forgotPasswordSchema.safeParse({ email: "not-an-email" }).success).toBe(false);
  });
});

describe("changePasswordSchema", () => {
  it("accepts a strong replacement password", () => {
    expect(
      changePasswordSchema.safeParse({
        currentPassword: "temporary-password",
        newPassword: "NewSecure123",
      }).success
    ).toBe(true);
  });

  it("rejects a weak replacement password", () => {
    expect(
      changePasswordSchema.safeParse({
        currentPassword: "temporary-password",
        newPassword: "password",
      }).success
    ).toBe(false);
  });
});

describe("signUpSchema", () => {
  it("accepts valid signup data", () => {
    const result = signUpSchema.safeParse({
      name: "Test User",
      email: "test@example.com",
      password: "Password123",
    });
    expect(result.success).toBe(true);
  });

  it("rejects short name", () => {
    const result = signUpSchema.safeParse({
      name: "A",
      email: "test@example.com",
      password: "Password123",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = signUpSchema.safeParse({
      name: "Test User",
      email: "not-an-email",
      password: "Password123",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short password", () => {
    const result = signUpSchema.safeParse({
      name: "Test User",
      email: "test@example.com",
      password: "123",
    });
    expect(result.success).toBe(false);
  });

  it("rejects password without letter", () => {
    const result = signUpSchema.safeParse({
      name: "Test User",
      email: "test@example.com",
      password: "12345678",
    });
    expect(result.success).toBe(false);
  });

  it("rejects password without number", () => {
    const result = signUpSchema.safeParse({
      name: "Test User",
      email: "test@example.com",
      password: "abcdefgh",
    });
    expect(result.success).toBe(false);
  });
});

describe("loginSchema", () => {
  it("accepts valid login data", () => {
    const result = loginSchema.safeParse({
      email: "test@example.com",
      password: "Password123",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty email", () => {
    const result = loginSchema.safeParse({
      email: "",
      password: "Password123",
    });
    expect(result.success).toBe(false);
  });

  it("rejects empty password", () => {
    const result = loginSchema.safeParse({
      email: "test@example.com",
      password: "",
    });
    expect(result.success).toBe(false);
  });
});

describe("contactFormSchema", () => {
  it("accepts valid contact data", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      subject: "Question about EBC trek",
      message: "I have a question about the Everest Base Camp trek itinerary.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects short message", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      subject: "Question",
      message: "Hi",
    });
    expect(result.success).toBe(false);
  });
});

describe("travelerDetailSchema", () => {
  it("accepts valid traveler data", () => {
    const result = travelerDetailSchema.safeParse({
      fullName: "John Doe",
      email: "john@example.com",
      phone: "+977-9812345678",
      nationality: "Nepal",
      passportNumber: "AB123456",
      age: 30,
    });
    expect(result.success).toBe(true);
  });

  it("accepts traveler without passport and age", () => {
    const result = travelerDetailSchema.safeParse({
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "+977-9812345678",
      nationality: "Nepal",
    });
    expect(result.success).toBe(true);
  });
});

describe("createBookingSchema", () => {
  const validBooking = {
    trekSlug: "everest-base-camp",
    trekTitle: "Everest Base Camp Trek",
    trekPrice: 1899,
    trekDuration: 14,
    startDate: "2026-09-15",
    groupSize: 2,
    travelers: [
      {
        fullName: "John Doe",
        email: "john@example.com",
        phone: "+977-9812345678",
        nationality: "Nepal",
      },
    ],
  };

  it("accepts valid booking data", () => {
    const result = createBookingSchema.safeParse(validBooking);
    expect(result.success).toBe(true);
  });

  it("rejects booking without travelers", () => {
    const result = createBookingSchema.safeParse({
      ...validBooking,
      travelers: [],
    });
    expect(result.success).toBe(false);
  });

  it("rejects booking with negative price", () => {
    const result = createBookingSchema.safeParse({
      ...validBooking,
      trekPrice: -100,
    });
    expect(result.success).toBe(false);
  });
});

describe("reviewSchema", () => {
  it("accepts valid review", () => {
    const result = reviewSchema.safeParse({
      trekId: "trek-123",
      rating: 5,
      heading: "An unforgettable trek",
      text: "Amazing trek! The views were breathtaking and the guide was excellent.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects short review text", () => {
    const result = reviewSchema.safeParse({
      trekId: "trek-123",
      rating: 5,
      heading: "A good experience",
      text: "OK",
    });
    expect(result.success).toBe(false);
  });

  it("rejects rating out of range", () => {
    const result = reviewSchema.safeParse({
      trekId: "trek-123",
      rating: 6,
      heading: "A good experience",
      text: "Good trek!",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a missing review heading", () => {
    const result = reviewSchema.safeParse({
      trekId: "trek-123",
      rating: 5,
      text: "Amazing trek with incredible views.",
    });
    expect(result.success).toBe(false);
  });
});
