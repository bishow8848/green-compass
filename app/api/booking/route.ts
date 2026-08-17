import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createBookingSchema } from "@/lib/validations";
import { bookingRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { sendBookingNotification, sendBookingReceivedEmail } from "@/lib/email";
import { getClientIp, hasTrustedOrigin, rateLimitIdentifier } from "@/lib/request-security";
import { invalidateCachePattern, cacheKeys } from "@/lib/redis";
import { hash } from "bcryptjs";
import { randomBytes } from "crypto";

export async function POST(request: NextRequest) {
  try {
    if (!hasTrustedOrigin(request)) {
      return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
    }
    const session = await auth();
    // Rate limiting by IP
    const ip = getClientIp(request);
    const rateCheck = await checkRateLimit(
      bookingRateLimit,
      rateLimitIdentifier(ip, session?.user?.id)
    );
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateCheck.reset),
            "X-RateLimit-Remaining": String(rateCheck.remaining),
          },
        }
      );
    }

    const body = await request.json();

    // Validate input with Zod
    const validated = createBookingSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          error: "Invalid booking data",
          details: validated.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const {
      trekSlug,
      startDate,
      groupSize,
      addons,
      specialRequests,
      travelers,
    } = validated.data;

    // Validate start date is not in the past
    const parsedDate = new Date(startDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (parsedDate < today) {
      return NextResponse.json(
        { error: "Start date cannot be in the past" },
        { status: 400 }
      );
    }

    // Fetch the actual trek to validate against trek-specific constraints
    // ⚠️ SECURITY: Price and duration are loaded from the server-side trek record,
    // NOT from the client request. This prevents price-tampering attacks.
    const trek = await prisma.trek.findUnique({
      where: { slug: trekSlug },
      select: {
        id: true,
        title: true,
        price: true,
        duration: true,
        maxGroupSize: true,
        pricingTiers: { orderBy: { groupSize: "asc" } },
        addons: true,
      },
    });
    if (!trek) {
      return NextResponse.json(
        { error: "Trek not found" },
        { status: 404 }
      );
    }

    // Use server-side price and duration — NEVER trust client values
    const serverTrekPrice = trek.price;
    const serverTrekDuration = trek.duration;
    const serverTrekTitle = trek.title;

    // Validate group size doesn't exceed max group size — derive from pricing tiers
    // to keep in sync with the UI calculator and the admin-configured tiers.
    const effectiveMaxGroupSize = trek.pricingTiers?.length
      ? Math.max(
          ...trek.pricingTiers.map((t) => {
            const parts = t.groupSize.match(/(\d+)\s*-\s*(\d+)/);
            if (parts) return parseInt(parts[2]);
            const single = t.groupSize.match(/(\d+)/);
            return single ? parseInt(single[1]) : 0;
          })
        )
      : trek.maxGroupSize;
    if (groupSize > effectiveMaxGroupSize) {
      return NextResponse.json(
        {
          error: `Maximum ${effectiveMaxGroupSize} travelers allowed for this trek`,
        },
        { status: 400 }
      );
    }

    // Validate addon prices against server-side addon records
    const serverAddons: Array<{ title: string; pricePerUnit: number }> = (() => {
      try {
        return trek.addons ? JSON.parse(trek.addons) : [];
      } catch {
        return [];
      }
    })();

    const addonsTotal = (addons || []).reduce((sum: number, a: any) => {
      const serverAddon = serverAddons.find(
        (sa) => sa.title === a.title && sa.pricePerUnit === a.pricePerUnit
      );
      if (!serverAddon) {
        throw new Error(`Invalid add-on: "${a.title}" does not match server records`);
      }
      return sum + a.qty * serverAddon.pricePerUnit;
    }, 0);

    const totalPrice = serverTrekPrice * groupSize + addonsTotal;

    // Check availability (Prisma read, could also check Payload CMS date)
    // Check TrekAvailability table
    const availability = await prisma.trekAvailability.findUnique({
      where: {
        trekSlug_startDate: {
          trekSlug,
          startDate: new Date(startDate),
        },
      },
    });

    if (availability) {
      const seatsAvailable = availability.seatsTotal - availability.seatsBooked;
      if (seatsAvailable < groupSize) {
        return NextResponse.json(
          {
            error: `Only ${seatsAvailable} seat(s) available for this date`,
          },
          { status: 409 }
        );
      }
    }

    const userId = session?.user?.id || null;

    // Verify authenticated users still exist. Guests intentionally have no User row.
    const userExists = userId
      ? await prisma.user.findUnique({ where: { id: userId } })
      : null;
    if (userId && !userExists) {
      console.error(`Booking FK error: userId ${userId} not found in users table`);
      return NextResponse.json(
        { error: "User account not found. Please sign out and sign in again." },
        { status: 400 }
      );
    }

    const temporaryPassword = userId ? null : randomBytes(18).toString("base64url");
    const temporaryPasswordHash = temporaryPassword
      ? await hash(temporaryPassword, 12)
      : null;

    // Create a new account for a new guest email and link it atomically.
    // Existing emails are deliberately not linked without authentication.
    const result = await prisma.$transaction(async (tx) => {
      const leadTraveler = travelers[0];
      let bookingUserId = userId;
      let createdTemporaryAccount = false;
      let linkedExistingAccount = false;

      if (!bookingUserId && temporaryPasswordHash) {
        const created = await tx.user.createMany({
          data: [{
            name: leadTraveler.fullName,
            email: leadTraveler.email,
            passwordHash: temporaryPasswordHash,
            emailVerified: new Date(),
            phone: leadTraveler.phone,
            nationality: leadTraveler.nationality,
            role: "customer",
            mustChangePassword: true,
          }],
          skipDuplicates: true,
        });
        const guestUser = await tx.user.findUniqueOrThrow({
          where: { email: leadTraveler.email },
          select: { id: true },
        });
        bookingUserId = guestUser.id;
        createdTemporaryAccount = created.count === 1;
        linkedExistingAccount = created.count === 0;
      }

      // Create the booking
      const newBooking = await tx.booking.create({
        data: {
          userId: bookingUserId,
          trekSlug,
          trekTitle: serverTrekTitle,
          trekPrice: serverTrekPrice,
          trekDuration: serverTrekDuration,
          startDate: new Date(startDate),
          groupSize,
          totalPrice,
          addons: addons && addons.length > 0 ? JSON.stringify(addons) : null,
          specialRequests: specialRequests || null,
          status: "PENDING_REVIEW",
          travelerDetails: {
            create: travelers.map((t) => ({
              fullName: t.fullName,
              email: t.email,
              phone: t.phone,
              nationality: t.nationality,
              emergencyContact: t.emergencyContact || null,
              age: t.age || null,
            })),
          },
        },
        include: {
          travelerDetails: true,
        },
      });

      // Update or create availability counter
      if (availability) {
        await tx.trekAvailability.update({
          where: { id: availability.id },
          data: {
            seatsBooked: availability.seatsBooked + groupSize,
          },
        });
      }

      if (bookingUserId) {
        await tx.crmContact.upsert({
          where: { userId: bookingUserId },
          create: {
            userId: bookingUserId,
            name: userExists?.name || leadTraveler.fullName,
            email: userExists?.email || leadTraveler.email,
            phone: userExists?.phone || leadTraveler.phone,
            country: userExists?.nationality || leadTraveler.nationality,
            source: "online_booking",
            type: "customer",
            status: "active",
            lastContactedAt: new Date(),
          },
          update: linkedExistingAccount
            ? { lastContactedAt: new Date() }
            : {
                name: userExists?.name || leadTraveler.fullName,
                email: userExists?.email || leadTraveler.email,
                phone: userExists?.phone || leadTraveler.phone,
                country: userExists?.nationality || leadTraveler.nationality,
                lastContactedAt: new Date(),
              },
        });
      } else {
        await tx.crmContact.create({
          data: {
            name: leadTraveler.fullName,
            email: leadTraveler.email,
            phone: leadTraveler.phone,
            country: leadTraveler.nationality,
            source: "guest_booking",
            type: "customer",
            status: "active",
            lastContactedAt: new Date(),
          },
        });
      }

      return { booking: newBooking, createdTemporaryAccount, linkedExistingAccount };
    });
    const { booking, createdTemporaryAccount, linkedExistingAccount } = result;

    // Send email notification (non-blocking)
    try {
      const customer = userExists || {
        name: travelers[0].fullName,
        email: travelers[0].email,
      };
      if (customer) {
        const adminNotification = sendBookingNotification({
          customerName: customer.name || "Unknown",
          customerEmail: customer.email,
          trekTitle: serverTrekTitle,
          startDate,
          travelers: travelers.map((t) => ({
            fullName: t.fullName,
            email: t.email,
            phone: t.phone,
            nationality: t.nationality,
            emergencyContact: t.emergencyContact,
            age: t.age,
          })),
          groupSize,
          totalPrice,
          addons: addons || [],
          specialRequests,
        }).catch((err) => console.error("Failed to send admin booking email:", err));
        const customerConfirmation = sendBookingReceivedEmail({
          name: customer.name || "there",
          email: customer.email,
          trekTitle: serverTrekTitle,
          startDate,
          bookingId: booking.id,
          temporaryAccount:
            createdTemporaryAccount && temporaryPassword
              ? { email: travelers[0].email, password: temporaryPassword }
              : undefined,
          linkedExistingAccount,
        }).catch((err) => console.error("Failed to send customer booking email:", err));
        void Promise.allSettled([adminNotification, customerConfirmation]);
      }
    } catch (err) {
      console.error("Failed to send booking notification:", err);
    }

    // Invalidate homepage stats cache since booking counts changed
    await invalidateCachePattern(cacheKeys.pattern.home);

    return NextResponse.json(
      {
        booking: {
          id: booking.id,
          status: booking.status,
          totalPrice: booking.totalPrice,
          startDate: booking.startDate,
          groupSize: booking.groupSize,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET — fetch booking(s) for the current user
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const bookingId = searchParams.get("id");

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Single booking by ID (for payment page)
    if (bookingId) {
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
        select: {
          id: true,
          trekTitle: true,
          trekPrice: true,
          totalPrice: true,
          startDate: true,
          groupSize: true,
          status: true,
          userId: true,
          addons: true,
          specialRequests: true,
          travelerDetails: {
            select: { fullName: true, email: true, phone: true, nationality: true, emergencyContact: true, age: true },
          },
          payment: { select: { status: true, method: true, amount: true } },
        },
      });

      if (!booking) {
        return NextResponse.json({ error: "Booking not found" }, { status: 404 });
      }

      if (booking.userId !== session.user.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
      }

      return NextResponse.json({ booking });
    }

    // All bookings for the current user (dashboard)
    const bookings = await prisma.booking.findMany({
      where: { userId: session.user.id },
      include: { payment: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("Booking GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
