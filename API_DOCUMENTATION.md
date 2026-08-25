# Mardi Treks API Documentation

> **Base URL:** `https://greencompasstreks.com/api` (production) / `http://localhost:3000/api` (development)

## Overview

This document describes all REST API endpoints for the Mardi Treks web application. The API is built using Next.js App Router route handlers.

### Common Patterns

| Aspect | Convention |
|---|---|
| **Authentication** | NextAuth.js v5 session-based (JWT) |
| **Validation** | Zod schemas defined in `lib/validations.ts` |
| **Rate Limiting** | Upstash Redis-based rate limiter (`lib/rate-limit.ts`) |
| **Origin Check** | `hasTrustedOrigin()` in `lib/request-security.ts` validates `Origin`/`Referer` headers |
| **Response Format** | JSON. Errors return `{ error: string, details?: object }` |
| **HTTP Status Codes** | `200`/`201` success, `400` bad request, `401` unauthorized, `403` forbidden origin, `404` not found, `409` conflict, `429` rate limited, `500` server error |

---

## Table of Contents

1. [Authentication](#1-authentication)
   - [1.1 Sign Up](#11-sign-up)
   - [1.2 Login / Session](#12-login--session)
   - [1.3 Verify Email](#13-verify-email)
   - [1.4 Resend Verification Email](#14-resend-verification-email)
   - [1.5 Forgot Password](#15-forgot-password)
   - [1.6 Change Password](#16-change-password)
2. [Trek Endpoints](#2-trek-endpoints)
   - [2.1 Get Trek by Slug](#21-get-trek-by-slug)
   - [2.2 List All Treks (Lightweight)](#22-list-all-treks-lightweight)
3. [Booking](#3-booking)
   - [3.1 Create Booking](#31-create-booking)
   - [3.2 Get Booking(s)](#32-get-bookings)
4. [Payments](#4-payments)
   - [4.1 Create Stripe Payment Intent](#41-create-stripe-payment-intent)
   - [4.2 Stripe Webhook](#42-stripe-webhook)
   - [4.3 Verify Payment](#43-verify-payment)
5. [Contact](#5-contact)
   - [5.1 Submit Contact Form](#51-submit-contact-form)
6. [Reviews](#6-reviews)
   - [6.1 Submit Review](#61-submit-review)
7. [GeoJSON Proxy](#7-geojson-proxy)
   - [7.1 Fetch GeoJSON](#71-fetch-geojson)
8. [Media Upload](#8-media-upload)
   - [8.1 Upload File](#81-upload-file)
   - [8.2 Delete File](#82-delete-file)
9. [Stripe Key](#9-stripe-key)
   - [9.1 Get Stripe Publishable Key](#91-get-stripe-publishable-key)
10. [Site Logo](#10-site-logo)
    - [10.1 Get Site Logo](#101-get-site-logo)
11. [Cache Revalidation](#11-cache-revalidation)
    - [11.1 Revalidate Cache](#111-revalidate-cache)
12. [CRM](#12-crm)
    - [12.1 Send Email (Admin)](#121-send-email-admin)
    - [12.2 Fetch Inbox Emails (Admin)](#122-fetch-inbox-emails-admin)
    - [12.3 Get IMAP Config (Admin)](#123-get-imap-config-admin)
    - [12.4 Verify SMTP Connection (Admin)](#124-verify-smtp-connection-admin)
    - [12.5 Email Webhook (Inbound)](#125-email-webhook-inbound)
    - [12.6 Delete Cloudinary Image (Admin)](#126-delete-cloudinary-image-admin)

---

## 1. Authentication

### 1.1 Sign Up

Creates a new user account and sends a verification email.

```
POST /api/auth/signup
```

**Rate Limit:** `authRateLimit` — 5 requests per 60 seconds

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "MyPassword123"
}
```

| Field | Type | Validation |
|---|---|---|
| `name` | string | 2–100 chars, trimmed |
| `email` | string | Valid email format, lowercased, trimmed |
| `password` | string | Min 8 chars, at least 1 letter + 1 number |

**Success Response** `201 Created`:

```json
{
  "message": "Account created! Please check your email to verify your account before signing in."
}
```

**Error Responses:**

| Status | Condition |
|---|---|
| `400` | Invalid input (field-level errors in `details`) |
| `409` | Email already exists |
| `429` | Rate limited |
| `403` | Untrusted origin |

---

### 1.2 Login / Session

Handles authentication via NextAuth.js (Credentials + Google OAuth).

```
GET  /api/auth/[...nextauth]  — Session check / sign-in page
POST /api/auth/[...nextauth]  — Sign in (rate-limited)
```

**POST** is rate-limited: 5 requests per 60 seconds.

**Rate Limit Identifiers:** By IP address.

Delegates to NextAuth.js handlers (`lib/auth.ts`). Standard NextAuth.js response formats apply.

---

### 1.3 Verify Email

Verifies a user's email address using a token sent via email.

```
GET /api/auth/verify-email?token=<uuid>
```

**Rate Limit:** `authRateLimit` — 5 requests per 60 seconds

**Query Parameters:**

| Parameter | Type | Required |
|---|---|---|
| `token` | UUID string | Yes |

**Behavior:**

1. Looks up the token in the `verificationToken` table
2. Validates the token has not expired (24-hour validity)
3. Sets `emailVerified` timestamp on the user record
4. Deletes the used token
5. Sends a welcome email
6. Redirects to `/verify-email?status=success` or `?status=error&message=...`

---

### 1.4 Resend Verification Email

Resends the verification email for an unverified account.

```
POST /api/auth/resend-verification
```

**Rate Limit:** `authRateLimit` — 5 requests per 60 seconds

**Request Body:**

```json
{
  "email": "john@example.com"
}
```

**Success Response** `200 OK`:

```json
{
  "message": "If the account exists, a verification email has been sent."
}
```

> Returns the same response whether the email exists or not (prevents email enumeration).

---

### 1.5 Forgot Password

Sends a temporary password to the user's email for password reset.

```
POST /api/auth/forgot-password
```

**Rate Limit:** `authRateLimit` — 5 requests per 60 seconds

**Request Body:**

```json
{
  "email": "john@example.com"
}
```

**Behavior:**

1. Looks up user by email
2. If the user has no `passwordHash` (Google-only account), returns a generic success (no email sent)
3. Generates a random 18-byte temporary password (base64url encoded)
4. Updates the user's `passwordHash` and sets `mustChangePassword: true`
5. Sends the temporary password via email
6. If SMTP fails, rolls back the password change

**Success Response** `200 OK`:

```json
{
  "success": true,
  "message": "If a password account exists for that email, a temporary password has been sent."
}
```

---

### 1.6 Change Password

Changes the password for the currently authenticated user.

```
POST /api/auth/change-password
```

**Rate Limit:** `authRateLimit` — 5 requests per 60 seconds (per user)

**Authentication:** Required (session)

**Request Body:**

```json
{
  "currentPassword": "MyOldPassword123",
  "newPassword": "MyNewPassword456"
}
```

| Field | Validation |
|---|---|
| `currentPassword` | Required |
| `newPassword` | Min 10 chars, must contain lowercase, uppercase, and a digit |

**Success Response** `200 OK`:

```json
{
  "success": true
}
```

**Error Responses:**

| Status | Condition |
|---|---|
| `401` | Not authenticated |
| `400` | Current password is incorrect, or validation failed |
| `429` | Rate limited |

---

## 2. Trek Endpoints

### 2.1 Get Trek by Slug

Fetches detailed information about a single trek for the booking/calculator page.

```
GET /api/trek?slug=<trek-slug>
```

**Rate Limit:** `apiRateLimit` — 10 requests per 10 seconds

**Query Parameters:**

| Parameter | Type | Required |
|---|---|---|
| `slug` | string | Yes |

**Success Response** `200 OK`:

```json
{
  "trek": {
    "id": "clx...",
    "title": "Mardi Himal Trek",
    "slug": "mardi-himal-trek",
    "price": 1200,
    "duration": 12,
    "difficulty": "moderate",
    "maxGroupSize": 12,
    "inclusions": "...",
    "exclusions": "...",
    "addons": "[{\"title\":\"Porters\",\"pricePerUnit\":200}]",
    "bestTime": "Spring & Autumn",
    "maxAltitude": 5580,
    "category": {
      "slug": "trekking",
      "name": "Trekking"
    },
    "pricingTiers": [
      { "groupSize": "1-2", "pricePerPerson": 1400 },
      { "groupSize": "3-5", "pricePerPerson": 1200 }
    ],
    "availableDates": [
      { "startDate": "2026-09-15T00:00:00.000Z", "seatsLeft": 8 }
    ]
  }
}
```

**Error Responses:**

| Status | Condition |
|---|---|
| `400` | `slug` query parameter missing |
| `404` | Trek not found |
| `429` | Rate limited |
| `403` | Untrusted origin |

---

### 2.2 List All Treks (Lightweight)

Returns a lightweight list of all published treks (used for admin selector dropdowns).

```
GET /api/trek/list-all
```

**Rate Limit:** `apiRateLimit` — 10 requests per 10 seconds

**Response Headers:** `Cache-Control: public, s-maxage=1800, stale-while-revalidate=86400`

**Success Response** `200 OK`:

```json
[
  {
    "id": "clx...",
    "title": "Mardi Himal Trek",
    "slug": "mardi-himal-trek",
    "region": "Annapurna",
    "difficulty": "moderate",
    "duration": 12,
    "category": { "slug": "trekking" }
  }
]
```

> Results use a cache-aside flow through Upstash Redis via `getCachedOrFetch()` with `CACHE_TTL.YEARLY` (1 year). CMS edits delete the matching Redis keys and call `revalidatePath` so the next render repopulates them from PostgreSQL.

---

## 3. Booking

### 3.1 Create Booking

Creates a new trek booking. Handles both authenticated and guest users.

```
POST /api/booking
```

**Rate Limit:** `bookingRateLimit` — 3 requests per 60 seconds

**Authentication:** Optional (guest bookings supported)

**Security Notes:**

- **Price is always loaded server-side** from the trek record — client-provided `trekPrice`, `trekTitle`, and `trekDuration` are **ignored** to prevent price-tampering.
- Add-on prices are validated against server-side addon records.
- Group size is validated against pricing tiers / `maxGroupSize`.

**Request Body:**

```json
{
  "trekSlug": "mardi-himal-trek",
  "startDate": "2026-10-15",
  "groupSize": 2,
  "addons": [
    { "title": "Porters", "qty": 1, "pricePerUnit": 200 }
  ],
  "specialRequests": "Window seat please",
  "travelers": [
    {
      "fullName": "John Doe",
      "email": "john@example.com",
      "phone": "+977-9800000000",
      "nationality": "Nepal",
      "emergencyContact": "+977-9800000001",
      "age": 30
    }
  ]
}
```

| Field | Type | Validation |
|---|---|---|
| `trekSlug` | string | Required |
| `startDate` | string (ISO date) | Must be today or in the future |
| `groupSize` | integer | Min 1, max from trek tiers |
| `addons` | array (optional) | Validated against server addon records |
| `specialRequests` | string (optional) | Max 2000 chars |
| `travelers` | array | Min 1 traveler. Each: `fullName` (2-200), `email` (valid), `phone` (6-20), `nationality` (2-100), `emergencyContact` (max 200, optional), `age` (1-120, optional) |

**Guest Booking Flow:**

1. If no session, creates a temporary user account with a random password
2. The temporary credentials are included in the confirmation email
3. Existing emails are not automatically linked (security measure)

**Availability Check:**

- Checks `TrekAvailability` table for the `trekSlug + startDate` combination
- Returns `409 Conflict` if insufficient seats

**Success Response** `201 Created`:

```json
{
  "booking": {
    "id": "cm0...",
    "status": "PENDING_REVIEW",
    "totalPrice": 2600,
    "startDate": "2026-10-15T00:00:00.000Z",
    "groupSize": 2
  }
}
```

**Error Responses:**

| Status | Condition |
|---|---|
| `400` | Invalid booking data, past date, max group size exceeded, user not found |
| `404` | Trek not found |
| `409` | Not enough seats available |
| `429` | Rate limited |
| `403` | Untrusted origin |

**Side Effects:**

- Sends admin notification email
- Sends customer confirmation email (with temporary password for guests)
- Updates/creates CRM contact record
- Updates trek availability seats
- Invalidates homepage cache

---

### 3.2 Get Booking(s)

Fetches booking details for the authenticated user.

```
GET /api/booking
GET /api/booking?id=<booking-id>
```

**Rate Limit:** None (session-gated)

**Authentication:** Required (session)

**Query Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | string (optional) | Specific booking ID. If omitted, returns all bookings. |

**Single Booking Response** `200 OK`:

```json
{
  "booking": {
    "id": "cm0...",
    "trekTitle": "Mardi Himal Trek",
    "trekPrice": 1200,
    "totalPrice": 2600,
    "startDate": "2026-10-15T00:00:00.000Z",
    "groupSize": 2,
    "status": "PENDING_REVIEW",
    "userId": "user_...",
    "addons": "[{\"title\":\"Porters\",\"qty\":1,\"pricePerUnit\":200}]",
    "specialRequests": "Window seat please",
    "travelerDetails": [
      {
        "fullName": "John Doe",
        "email": "john@example.com",
        "phone": "+977-9800000000",
        "nationality": "Nepal",
        "emergencyContact": "+977-9800000001",
        "age": 30
      }
    ],
    "payment": {
      "status": "PENDING",
      "method": "stripe",
      "amount": 520
    }
  }
}
```

**All Bookings Response** `200 OK`:

```json
{
  "bookings": [
    {
      "id": "cm0...",
      "trekTitle": "Mardi Himal Trek",
      "totalPrice": 2600,
      "status": "PENDING_REVIEW",
      "startDate": "2026-10-15T00:00:00.000Z",
      "groupSize": 2,
      "payment": { ... },
      ...
    }
  ]
}
```

**Error Responses:**

| Status | Condition |
|---|---|
| `401` | Not authenticated |
| `403` | Booking belongs to another user |
| `404` | Booking not found |

---

## 4. Payments

### 4.1 Create Stripe Payment Intent

Creates a Stripe payment intent for a booking (advance or full payment).

```
POST /api/payments/stripe
```

**Rate Limit:** `paymentRateLimit` — 5 requests per 60 seconds

**Authentication:** Required (session)

**Request Body:**

```json
{
  "bookingId": "cm0...",
  "paymentType": "ADVANCE"
}
```

| Field | Type | Description |
|---|---|---|
| `bookingId` | string | The booking ID to pay for |
| `paymentType` | `"ADVANCE"` or `"FULL"` | ADVANCE = 20% deposit, FULL = 100% |

**Behavior:**

1. Verifies the booking belongs to the authenticated user
2. Validates booking is in `AWAITING_PAYMENT` or `PENDING_REVIEW` status
3. Calculates amount: ADVANCE = 20% of total, FULL = 100%
4. Creates Stripe PaymentIntent with metadata (`bookingId`, `userId`, `trekSlug`)
5. Upserts a `Payment` record
6. Updates booking status to `AWAITING_PAYMENT`

**Success Response** `200 OK`:

```json
{
  "clientSecret": "pi_..._secret_...",
  "paymentIntentId": "pi_..."
}
```

**Error Responses:**

| Status | Condition |
|---|---|
| `401` | Not authenticated |
| `400` | Missing bookingId, booking not eligible for payment |
| `404` | Booking not found |
| `429` | Rate limited |
| `403` | Untrusted origin |

---

### 4.2 Stripe Webhook

Handles incoming Stripe webhook events.

```
PUT /api/payments/stripe
```

**Rate Limit:** None

**Headers:** `stripe-signature` (required for webhook verification)

**Handled Events:**

| Event | Action |
|---|---|
| `payment_intent.succeeded` | Updates payment to `SUCCEEDED`, booking to `CONFIRMED`. Determines `PARTIALLY_PAID` or `FULLY_PAID` based on amount vs total price. |
| `payment_intent.payment_failed` | Updates payment to `FAILED` |

**Success Response** `200 OK`:

```json
{
  "received": true
}
```

---

### 4.3 Verify Payment

Verifies a payment after Stripe redirects back to the success page. Acts as a fallback in case the webhook hasn't fired yet.

```
POST /api/payments/verify
```

**Rate Limit:** `paymentRateLimit` — 5 requests per 60 seconds

**Authentication:** Required (session)

**Request Body:**

```json
{
  "bookingId": "cm0...",
  "paymentIntentId": "pi_..."
}
```

**Success Response** `200 OK`:

```json
{
  "verified": true,
  "status": "succeeded",
  "paymentStatus": "FULLY_PAID"
}
```

**If Payment Not Yet Succeeded:**

```json
{
  "verified": false,
  "status": "processing",
  "message": "Payment is processing, not yet succeeded"
}
```

---

## 5. Contact

### 5.1 Submit Contact Form

Submits a contact/inquiry form message.

```
POST /api/contact
```

**Rate Limit:** `contactRateLimit` — 2 requests per 300 seconds (5 minutes)

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Trip Inquiry",
  "message": "I'm interested in the Mardi Himal trek..."
}
```

| Field | Validation |
|---|---|
| `name` | 2–200 chars, trimmed |
| `email` | Valid email, lowercased, trimmed |
| `subject` | 5–200 chars, trimmed |
| `message` | 10–5000 chars, trimmed |

**Success Response** `200 OK`:

```json
{
  "success": true
}
```

**Side Effect:** Sends an email notification to the admin via `sendContactEmail()`.

---

## 6. Reviews

### 6.1 Submit Review

Submits a trek review (requires admin approval).

```
POST /api/reviews
```

**Rate Limit:** `apiRateLimit` — 10 requests per 10 seconds

**Authentication:** Required (session)

**Request Body:**

```json
{
  "trekId": "clx...",
  "rating": 5,
  "text": "Amazing trek! The views were breathtaking."
}
```

| Field | Validation |
|---|---|
| `trekId` | Required |
| `rating` | Integer, 1–5 |
| `text` | 10–2000 chars, trimmed |

**Success Response** `201 Created`:

```json
{
  "success": true,
  "review": {
    "id": "...",
    "trekId": "clx...",
    "userId": "user_...",
    "author": "John Doe",
    "rating": 5,
    "text": "Amazing trek! The views were breathtaking.",
    "approved": false,
    ...
  }
}
```

> Reviews are created with `approved: false` by default and require admin moderation.

**Side Effect:** Invalidates homepage cache to update review stats.

---

## 7. GeoJSON Proxy

### 7.1 Fetch GeoJSON

Proxies GeoJSON data from allowed external sources (geojson.io and Cloudinary). Decodes compressed geojson.io share URLs.

```
GET /api/geojson-proxy?url=<encoded-url>
```

**Rate Limit:** `apiRateLimit` — 10 requests per 10 seconds

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | URL (encoded) | Yes | Must be `https://` and hostname in `{geojson.io, res.cloudinary.com}` |

**Supported URL Types:**

1. **geojson.io share URLs** — Decodes base64 → deflate compressed data in the `data=` query param
2. **Regular URLs** — Fetches GeoJSON from the given URL (with automatic fallback from `/image/upload/` to `/raw/upload/` for Cloudinary)

**Success Response** `200 OK`:

Returns raw GeoJSON with `Content-Type: application/json`.

```json
{
  "type": "FeatureCollection",
  "features": [...]
}
```

**Error Responses:**

| Status | Condition |
|---|---|
| `400` | Missing/invalid URL |
| `403` | Hostname not allowed, or non-https URL |
| `502` | Failed to decode or fetch |

---

## 8. Media Upload

### 8.1 Upload File

Uploads files (images, GeoJSON, KML, GPX) to Cloudinary.

```
POST /api/upload
```

**Rate Limit:** None

**Authentication:** Required (admin role)

**Request:** `multipart/form-data`

| Field | Type | Description |
|---|---|---|
| `file` | File | Max 15 MB. Supports images, JSON, GeoJSON, KML, GPX |
| `folder` | string (optional) | Cloudinary folder (default: `mardi-treks`) |
| `oldPublicId` | string (optional) | Deletes this existing Cloudinary file before uploading new one |

**File Type Handling:**

| File Extension | Behavior |
|---|---|
| `.json` / `.geojson` | Stored as GeoJSON. Returned as `content` in response |
| `.kml` / `.gpx` | **Converted to GeoJSON server-side** at upload time using `@tmcw/togeojson`. Returned as `content` in response. Stored as `raw` resource on Cloudinary |
| Images | Stored as `image` resource on Cloudinary |

**Success Response** `200 OK`:

```json
{
  "publicId": "mardi-treks/abc123",
  "url": "https://res.cloudinary.com/...",
  "content": "{ \"type\": \"FeatureCollection\", ... }",
  "width": 1920,
  "height": 1080
}
```

> `content` is only present for route files (GeoJSON/KML/GPX). It contains the converted GeoJSON for inline use on the map.

---

### 8.2 Delete File

Deletes an uploaded file from Cloudinary.

```
DELETE /api/upload?publicId=<id>&url=<cloudinary-url>
```

**Authentication:** Required (admin role)

**Query Parameters (one required):**

| Parameter | Type | Description |
|---|---|---|
| `publicId` | string | Direct Cloudinary public ID |
| `url` | string | Cloudinary URL (public ID is extracted automatically) |

**Success Response** `200 OK`:

```json
{
  "success": true
}
```

> Tries both `raw` and `image` resource types for deletion.

---

## 9. Stripe Key

### 9.1 Get Stripe Publishable Key

Returns the Stripe publishable key at runtime (avoids build-time inlining issues).

```
GET /api/stripe-key
```

**Rate Limit:** None

**Success Response** `200 OK`:

```json
{
  "publishableKey": "pk_live_..."
}
```

**Error Response** `500`:

```json
{
  "error": "Stripe publishable key is not configured"
}
```

---

## 10. Site Logo

### 10.1 Get Site Logo

Returns the site logo URL from the database settings.

```
GET /api/logo
```

**Rate Limit:** None

**Success Response** `200 OK`:

```json
{
  "logo": "mardi-treks/logo.png",
  "url": "https://res.cloudinary.com/dk7ggjvlw/image/upload/mardi-treks/logo.png"
}
```

If no logo is configured:

```json
{
  "logo": null,
  "url": null
}
```

---

## 11. Cache Revalidation

### 11.1 Revalidate Cache

Triggers Next.js cache revalidation by path or tag.

```
POST /api/revalidate
```

**Rate Limit:** None

**Authentication:** Secret-based (not session)

**Headers:**

| Header | Value |
|---|---|
| `Authorization` | `Bearer <REVALIDATION_SECRET>` |

**Request Body:**

```json
{
  "path": "/trek/mardi-himal",
  "tag": "treks"
}
```

| Field | Description |
|---|---|
| `secret` | Alternative to `Authorization` header |
| `path` | Next.js page path to revalidate |
| `tag` | Cache tag to revalidate |

> Either `path` or `tag` must be provided (but not both).

**Success Response** `200 OK`:

```json
{
  "revalidated": true,
  "path": "/trek/mardi-himal",
  "message": "Revalidated path: /trek/mardi-himal"
}
```

---

## 12. CRM

### 12.1 Send Email (Admin)

Sends emails to users and CRM contacts from the admin panel.

```
POST /api/crm/send-email
```

**Authentication:** Required (admin role)

**Request Body:**

```json
{
  "recipientKeys": ["user:user_abc123", "contact:contact_def456"],
  "subject": "Your trek is confirmed, {{name}}!",
  "body": "Dear {{name}},\n\nYour trek booking has been confirmed..."
}
```

| Field | Type | Description |
|---|---|---|
| `recipientKeys` | string[] | Prefixed IDs: `user:<userId>` or `contact:<contactId>` |
| `subject` | string | Supports `{{name}}` placeholder |
| `body` | string | Supports `{{name}}` placeholder, newlines converted to `<br>` |

**Success Response** `200 OK`:

```json
{
  "sent": 5,
  "failed": 0,
  "errors": []
}
```

**Error Responses:**

| Status | Condition |
|---|---|
| `400` | Missing recipients, subject, or body |
| `401` | Not authenticated or not admin |

---

### 12.2 Fetch Inbox Emails (Admin)

Triggers a fetch of recent emails from the configured IMAP inbox and auto-logs CRM communications.

```
POST /api/crm/fetch-emails
```

**Authentication:** Required (admin role)

**Success Response** `200 OK`:

```json
{
  "fetched": 10,
  "logged": 5,
  "skipped": 5,
  "errors": []
}
```

---

### 12.3 Get IMAP Config (Admin)

Returns the IMAP configuration status (without secrets).

```
GET /api/crm/fetch-emails
```

**Authentication:** Required (admin role)

**Success Response** `200 OK`:

```json
{
  "host": "imap.gmail.com",
  "port": 993,
  "user": "admin@greencompasstreks.com",
  "hasPassword": true,
  "fetchDays": 7,
  "status": "configured"
}
```

---

### 12.4 Verify SMTP Connection (Admin)

Tests the SMTP connection for sending CRM emails.

```
POST /api/crm/email-health
```

**Authentication:** Required (admin role)

**Success Response** `200 OK`:

```json
{
  "success": true,
  "connection": { ... }
}
```

---

### 12.5 Email Webhook (Inbound)

Receives forwarded/ingressed emails from external services (SendGrid Inbound Parse, CloudMailin, Mailgun, etc.) and logs them against CRM contacts.

```
POST /api/crm/email/webhook
```

**Security:** `x-webhook-token` or `Authorization: Bearer <CRM_EMAIL_WEBHOOK_SECRET>` header required

**Supported Content Types:** `application/json`, `multipart/form-data`, `application/x-www-form-urlencoded`

**Supported Fields (any format):**

| Field | Aliases |
|---|---|
| `from` | `sender`, `email` |
| `to` | `recipient` |
| `subject` | — |
| `body` | `html`, `text`, `body-html`, `body-plain` |

**Contact Matching:**

1. Checks if `to` address matches pattern `contact+{contactId}@...`
2. Falls back to matching `from` email against `crmContact` table

**Success Response** `200 OK`:

```json
{
  "success": true,
  "received": true
}
```

**No Contact Match:**

```json
{
  "warning": "No matching contact found",
  "received": true
}
```

---

### 12.6 Delete Cloudinary Image (Admin)

Deletes a single image from Cloudinary by its public ID.

```
POST /api/delete-image
```

**Authentication:** Required (admin role)

**Request Body:**

```json
{
  "publicId": "mardi-treks/abc123"
}
```

**Success Response** `200 OK`:

```json
{
  "success": true
}
```

---

## Rate Limiting Summary

| Rate Limiter | Limit | Prefix | Applied To |
|---|---|---|---|
| `apiRateLimit` | 10 req / 10s | `ratelimit:api` | Trek GET, Reviews, GeoJSON Proxy, Trek list-all |
| `authRateLimit` | 5 req / 60s | `ratelimit:auth` | Signup, Login, Forgot Password, Change Password, Verify Email, Resend Verification |
| `bookingRateLimit` | 3 req / 60s | `ratelimit:booking` | Create Booking |
| `paymentRateLimit` | 5 req / 60s | `ratelimit:payment` | Stripe Payment Intent, Verify Payment |
| `contactRateLimit` | 2 req / 300s | `ratelimit:contact` | Contact Form |

All rate-limited endpoints return `429 Too Many Requests` with headers:
- `Retry-After`: seconds until reset
- `X-RateLimit-Remaining`: remaining requests in the window

---

## Security Notes

1. **Origin Validation:** Most endpoints require a trusted `Origin` or `Referer` header matching the configured site URL(s). This is enforced by `hasTrustedOrigin()` in `lib/request-security.ts`.

2. **Price Integrity:** The booking endpoint always loads trek prices from the server database. Client-provided price fields (`trekPrice`, `trekDuration`, `trekTitle`) are explicitly ignored.

3. **Guest Bookings:** Temporary accounts are created with random passwords for guest bookings. The credentials are sent via email only.

4. **Admin Routes:** Upload, delete, CRM, and delete-image endpoints require an admin session role.

5. **Webhook Security:** Stripe webhooks verify signatures. CRM email webhooks use a shared secret.
