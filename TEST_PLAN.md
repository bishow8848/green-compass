# Mardi Treks — Test Plan & Strategy

| **Document Version** | 1.0 |
|---|---|
| **Application** | Mardi Treks (greencompasstreks.com) |
| **Prepared By** | QA Engineering |
| **Last Updated** | 2026-07-29 |

---

## 1. Project Overview

**Application Name:** Mardi Treks
**Description:** A full-stack trekking tour booking platform built with Next.js (App Router). Users can browse treks, read blogs, submit contact inquiries, create accounts, book treks, make payments via Stripe, leave reviews, and administrators manage all content through a Payload CMS admin panel. The backend uses Prisma (PostgreSQL), Redis (Upstash) for caching/rate-limiting, Cloudinary for media, and integrates with Stripe for payments, Resend/Nodemailer for email, and IMAP for CRM inbox fetching.

**Tech Stack:**
- **Framework:** Next.js 16 (App Router)
- **CMS:** Payload CMS 3
- **Database:** PostgreSQL + Prisma 7
- **Auth:** NextAuth.js v5 (Credentials + Google OAuth)
- **Payments:** Stripe
- **Caching & Rate Limiting:** Upstash Redis
- **Media:** Cloudinary
- **Email:** Resend + Nodemailer (SMTP/IMAP for CRM)
- **UI:** Tailwind CSS, Lucide Icons, TipTap (rich text), MapLibre GL / Mapbox
- **Testing:** Vitest (unit), Playwright (E2E)
- **Deployment:** Vercel

---

## 2. Scope

### 2.1 Features / Modules to Be Tested

| # | Module | Description |
|---|---|---|
| M1 | **Public Marketing Pages** | Home page, category/trek listing pages, about, blog, contact, search |
| M2 | **Authentication & Accounts** | Signup, login (credentials + Google OAuth), email verification, forgot/change password, session management |
| M3 | **Trek Detail & Booking** | Trek detail page (itinerary, pricing tiers, dates, gallery, FAQ, map), booking calculator, guest & authenticated booking flow |
| M4 | **Payments** | Stripe PaymentIntent creation (advance/full), Stripe webhook handling, payment verification |
| M5 | **Reviews** | Submit review, admin approval workflow, display on trek pages |
| M6 | **Contact & Inquiries** | Contact form submission, admin email notifications |
| M7 | **Admin CMS (Payload)** | Manage treks, categories, blog posts, pages, media, users, bookings, reviews, site settings, navigation, CRM |
| M8 | **CRM** | Send bulk emails, fetch IMAP inbox, verify SMTP/IMAP config |
| M9 | **API Endpoints** | All REST API routes — authentication, bookings, payments, reviews, contact, media upload, GeoJSON proxy, revalidation, CRM |
| M10 | **SEO & Metadata** | Sitemap, robots.txt, Open Graph tags, canonical URLs, JSON-LD structured data |
| M11 | **Security** | Rate limiting, origin/referer validation, CSP headers, authentication guards, input validation (Zod), price-tampering prevention |
| M12 | **Media & File Upload** | Image upload to Cloudinary, GeoJSON/KML/GPX upload & conversion |

### 2.2 Out of Scope

- Third-party service reliability (Stripe, Cloudinary, Upstash, Resend — assume these are independently tested)
- Infrastructure / load balancer configuration
- Mobile native apps (this is a responsive web app only)
- Performance under 10,000+ concurrent users (covered at a smoke level only)
- Database migration rollback testing
- Accessibility audits for admin/Payload CMS panel (covered for public-facing pages only)

### 2.3 Supported Browsers, Devices & OS

| Category | Supported |
|---|---|
| **Desktop Browsers** | Chrome (latest 2 major versions), Firefox (latest 2), Safari (latest 2), Edge (latest) |
| **Mobile Browsers** | Chrome for Android, Safari for iOS |
| **Devices / Screen Sizes** | Desktop (1920×1080, 1366×768), Tablet (768×1024 — iPad portrait), Mobile (375×667 — iPhone SE, 390×844 — iPhone 14 Pro, 412×915 — Samsung Galaxy) |
| **Operating Systems** | Windows 10+, macOS Ventura+, iOS 16+, Android 12+ |

---

## 3. Test Objectives

### 3.1 Success Criteria for Release

1. **All critical and high-priority test cases pass** at a rate of ≥ 95%.
2. **Zero critical/blocker bugs** remain open.
3. **Core booking flow** (browse → book → pay → confirmation) works end-to-end without errors.
4. **Payment processing** (Stripe) correctly handles success, failure, and webhook edge cases.
5. **Authentication** (signup, login, verification, password reset) operates reliably.
6. **Admin CMS** CRUD operations function without data loss or corruption.
7. **API security** measures (rate limiting, origin checks, input validation) are enforced.
8. **SEO basics** verify: sitemap accessible, robots.txt correct, key pages return 200.

### 3.2 Key Risk Areas

| Risk | Impact | Likelihood |
|---|---|---|
| Price tampering in booking flow | High financial risk — users could alter prices client-side | Low (server-side validation in place) |
| Stripe webhook delivery failures | Booking status not updated after successful payment | Medium (verify endpoint as fallback) |
| Email delivery failures (verification, booking confirmation, password reset) | Users cannot complete auth/booking flow | Medium |
| Rate limiting blocking legitimate users | Poor UX / false positives | Low |
| Concurrent booking race conditions | Overbooking / seat oversell | Medium |
| Guest booking → account linking issues | Lost bookings / data inconsistency | Medium |
| Redis cache serving stale data | Users see outdated prices, dates, or content | Low (TTLs configured) |
| CSP / security headers blocking legitimate resources | Broken UI (maps, images, Stripe iframe) | Low |

---

## 4. Test Types

### 4.1 Functional Testing

**Approach:** Feature-by-feature manual and automated testing against acceptance criteria. Each API endpoint is tested with valid, invalid, boundary, and missing inputs. UI flows are tested via E2E automation.

**Coverage Targets:**
- API endpoints: 100% of defined routes (see `API_DOCUMENTATION.md`)
- UI user journeys: All major flows (booking, auth, payment, admin CRUD)
- Form validation: All Zod schemas (`lib/validations.ts`)

### 4.2 Regression Testing

**Approach:** Automated regression suite executed on every PR merge (CI pipeline). Includes:
- Previously passing E2E tests (Playwright)
- Unit tests (Vitest) for critical business logic (booking price calculation, validation schemas, auth helpers)
- Smoke test of top 5 API endpoints

**Tools:** Playwright (E2E), Vitest (unit), GitHub Actions / CI

### 4.3 UI/UX Testing

**Approach:** Visual inspection and automated visual regression tests for key pages (home, trek detail, booking form, payment, admin dashboard). Verify:
- Layout responsiveness across breakpoints
- Loading states, empty states, error states
- Form validation feedback (inline errors, success messages)
- Mobile touch targets, scroll behavior, hamburger menu
- Rich text rendering (itinerary, blog content)

**Tools:** Playwright (responsive testing, screenshot comparison), manual device lab

### 4.4 Cross-Browser / Cross-Device Testing

**Approach:** Run the full Playwright test suite against Chrome, Firefox, and Safari (via BrowserStack or Playwright's built-in browser binaries). Manual spot-check on real mobile devices for:
- Touch interactions (booking calendar, map gestures)
- Font rendering
- Payment iframe behavior (Stripe)

**Tools:** Playwright (cross-browser projects), BrowserStack for manual checks

### 4.5 Performance / Load Testing

**Approach:** Smoke-level load testing focused on the booking and payment endpoints. Verify:
- API response times stay under 500ms (p95) under moderate load (50 concurrent users)
- Rate limiting kicks in as configured (e.g., 5 requests/60s for auth, 3 requests/60s for booking)
- Redis caching reduces DB load for repeated reads
- Image optimization (Cloudinary) delivers acceptable load times

**Tools:** k6 or autocannon (CLI), Lighthouse (browser perf), Upstash Redis console

### 4.6 Security Testing

**Approach:** Verify the following security controls:
- **Authentication guards:** Protected routes reject unauthenticated requests (401)
- **Role-based access:** Admin-only endpoints reject non-admin users (401/403)
- **Origin validation:** `hasTrustedOrigin()` blocks requests from untrusted domains (403)
- **Rate limiting:** Excessive requests return 429
- **Input validation:** Zod schemas reject malformed input (400)
- **Price tampering:** Server ignores client-provided price fields
- **CSP headers:** Present and restrict inline scripts, frame sources, etc.
- **SQL injection:** Attempt injection in string fields
- **IDOR (Insecure Direct Object Reference):** Verify user A cannot access user B's booking

**Tools:** Playwright (automated security checks), manual OWASP top-10 spot checks

### 4.7 Accessibility Testing (WCAG)

**Approach:** Audit all public-facing pages against **WCAG 2.1 Level AA**:
- Semantic HTML structure (headings, landmarks, alt text)
- Keyboard navigation (tab order, focus indicators, skip links)
- Color contrast ratios
- Screen reader compatibility (aria labels, live regions)
- Form error announcements

**Tools:** axe-core (Playwright integration), Lighthouse accessibility audit, manual keyboard-only testing

### 4.8 API Testing

**Approach:** All endpoints in `API_DOCUMENTATION.md` tested via automated requests:
- Happy path: Expected input → expected output
- Negative: Missing/invalid fields → appropriate 4xx
- Edge cases: Boundary values, special characters, large payloads
- Auth scenarios: No auth, wrong auth, expired session
- Rate limiting: Burst requests → 429

**Tools:** Vitest (API integration tests with fetch), Postman / Bruno (ad-hoc)

### 4.9 Usability Testing

**Approach:** Informal sessions with 3–5 internal stakeholders. Focus on:
- Booking flow clarity (pricing display, date selection, traveler info)
- Payment flow UX (Stripe Checkout redirect, success/error feedback)
- Admin workflow efficiency (CRUD operations, media management)
- Mobile navigation (filtering, search, menu)

**Tools:** Session recording (optional), feedback form

---

## 5. Test Environment

### 5.1 Environments

| Environment | URL | Purpose |
|---|---|---|
| **Local Development** | `http://localhost:3000` | Unit tests, component-level testing, Playwright E2E |
| **Staging** | `https://staging.greencompasstreks.com` | Integration testing, regression, UAT |
| **Production** | `https://greencompasstreks.com` | Smoke tests post-deployment, monitoring |

### 5.2 Test Data Requirements

| Data Set | Description | Source |
|---|---|---|
| Trek catalog | 5–10 treks with varied categories, pricing tiers, dates, add-ons | Prisma seed (`prisma/seed.ts`) |
| Test users | 2 customer accounts (verified + unverified), 1 admin account | Seed script |
| Test bookings | Mix of PENDING_REVIEW, AWAITING_PAYMENT, CONFIRMED, CANCELLED | Seed / API |
| Stripe test data | Test card numbers (success, decline, 3D Secure) | Stripe docs |
| Blog posts | 3–5 published + 1 draft post with varied tags/authors | Seed script |
| Media | Test images (valid format, oversized, corrupt), KML/GPX/GeoJSON files | Manual upload |
| Reviews | 2 approved + 1 pending review | Seed / API |

### 5.3 Tools Required

| Tool | Purpose |
|---|---|
| **Playwright** | E2E browser tests, visual regression, cross-browser testing |
| **Vitest** | Unit tests, integration tests |
| **Stripe CLI** | Webhook forwarding for local payment testing |
| **k6 / autocannon** | Load testing |
| **BrowserStack** | Cross-browser/device manual testing (optional) |
| **Lighthouse / axe-core** | Accessibility & performance audits |
| **Postman / Bruno** | Manual API exploration |
| **Sentry** | Error monitoring & debugging during test execution |

---

## 6. Entry & Exit Criteria

### 6.1 Entry Criteria

- [ ] Code is deployed to the staging environment
- [ ] All unit tests pass with ≥ 90% coverage on critical modules (auth, booking, payments)
- [ ] Test environment is stable (database seeded, Redis connected, Stripe keys configured)
- [ ] Test data is seeded and verified
- [ ] All blocker/critical bugs identified in the previous test cycle are fixed and verified
- [ ] QA has access to credentials for all test user roles (customer, admin)
- [ ] API documentation is up-to-date

### 6.2 Exit Criteria

- [ ] **≥ 95%** of planned test cases executed
- [ ] **≥ 95%** pass rate for executed test cases
- [ ] **Zero** critical/blocker bugs open
- [ ] **≤ 5** high-priority bugs open (all with documented workarounds)
- [ ] All payment flows tested successfully (advance + full payment)
- [ ] Core booking E2E flow passes in Chrome, Firefox, Safari
- [ ] Security scan (rate limiting, auth guards, CSP) passes
- [ ] Performance benchmarks met (p95 API response < 500ms for key endpoints)
- [ ] Test report is generated and shared with stakeholders

---

## 7. Test Cases & Scenarios

Below are sample test cases focusing on the **Booking & Payment Flow** (modules M3 & M4) — the highest-risk area of the application.

### 7.1 Booking Flow — Test Cases

| Test ID | Description | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| **BOK-001** | Happy path — Authenticated user books a trek with advance payment | User is logged in with a verified account; trek has available dates and pricing tiers | 1. Navigate to trek detail page<br>2. Select available date<br>3. Select group size (within tier)<br>4. Add optional add-ons<br>5. Fill traveler details<br>6. Submit booking<br>7. Proceed to payment<br>8. Pay 20% advance via Stripe<br>9. Complete Stripe Checkout | Booking created with status `AWAITING_PAYMENT` → after Stripe success → status `CONFIRMED` / `PARTIALLY_PAID`. Confirmation email sent. | **High** |
| **BOK-002** | Happy path — Guest user books and receives temp credentials | Trek has available seats; guest has valid email | 1. Visit trek detail page<br>2. Select "Continue as guest"<br>3. Enter traveler details with valid email<br>4. Submit booking<br>5. Verify email inbox | Booking created. Guest receives email with temporary password and booking confirmation. | **High** |
| **BOK-003** | Full payment flow | User is logged in; booking in `AWAITING_PAYMENT` | 1. From booking, select "Pay in Full"<br>2. Complete Stripe payment for 100% of total price | Booking status updated to `CONFIRMED` / `FULLY_PAID`. Payment record marked `SUCCEEDED`. | **High** |
| **BOK-004** | Price tampering — Client modifies price field | Intercept booking request | 1. Open DevTools<br>2. Modify any price-related field in the request payload (e.g., `trekPrice`)<br>3. Submit booking | Server ignores client-provided `trekPrice`, `trekTitle`, `trekDuration`. Price is loaded server-side. | **High** |
| **BOK-005** | Insufficient seats — Booking when no seats available | Trek date has 0 seats left | 1. Select a trek date with no availability<br>2. Attempt to book with group size ≥ 1 | API returns `409 Conflict` with an appropriate error message. Booking not created. | **High** |
| **BOK-006** | Over-max group size | Trek `maxGroupSize` = 12; pricing tier caps at 10 | 1. Attempt to book with group size > max tier size (e.g., 15) | Validation error (400) — "Group size exceeds maximum allowed". | **Medium** |
| **BOK-007** | Invalid traveler data | Booking form | 1. Submit booking with missing traveler name<br>2. Submit with invalid email<br>3. Submit with negative age<br>4. Submit with phone number < 6 chars | Inline form validation errors. API returns 400 with field-level `details`. | **Medium** |
| **BOK-008** | Past start date | Trek detail page | 1. Attempt to book with a start date in the past | API returns `400` — start date must be today or in the future. | **Medium** |
| **BOK-009** | Unauthenticated booking retrieval | API endpoint | 1. Call `GET /api/booking` without session | Returns `401 Unauthorized`. | **Medium** |
| **BOK-010** | IDOR — User A views User B's booking | Two authenticated users | 1. User A gets booking ID for User B's booking<br>2. Call `GET /api/booking?id=<user-b-booking-id>` | Returns `403 Forbidden`. | **High** |
| **BOK-011** | Stripe payment failure — Card declined | Authenticated user; booking created | 1. Proceed to Stripe Checkout<br>2. Use test card number that declines<br>3. Complete checkout | Payment fails. Booking remains in `AWAITING_PAYMENT` (or `PENDING_REVIEW`). User sees failure message. Payment record marked `FAILED`. | **High** |
| **BOK-012** | Stripe 3D Secure authentication | Authenticated user; booking created | 1. Proceed to Stripe Checkout<br>2. Use test card that requires 3D Secure<br>3. Complete authentication | Payment succeeds after 3DS. Booking status updated to `CONFIRMED`. | **High** |
| **BOK-013** | Stripe webhook delayed — Verify endpoint fallback | Payment succeeded but webhook not yet received | 1. Complete payment<br>2. Immediately call `POST /api/payments/verify` with bookingId and paymentIntentId | Returns `verified: false, status: "processing"` if webhook hasn't fired. Returns `verified: true` if it has. | **Medium** |
| **BOK-014** | Rate limiting on booking endpoint | API | 1. Send 4 rapid POST requests to `/api/booking` | First 3 succeed (or return appropriate responses). 4th returns `429 Rate Limited`. | **Medium** |

### 7.2 Authentication — Test Cases

| Test ID | Description | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| **AUTH-001** | Sign up with valid data | New email not in system | 1. Fill signup form with valid name, email, password<br>2. Submit | Account created. Verification email sent. User redirected to success page. | **High** |
| **AUTH-002** | Sign up with duplicate email | Email already registered | 1. Submit signup with existing email | Returns `409 Conflict`. | **High** |
| **AUTH-003** | Sign up with weak password | — | 1. Submit with password < 8 chars or no number | Validation error (400) with field-level details. | **Medium** |
| **AUTH-004** | Email verification with valid token | User registered but unverified | 1. Click verification link in email | Token validated. `emailVerified` set. Redirect to success page. Welcome email sent. | **High** |
| **AUTH-005** | Email verification with expired token | Token older than 24 hours | 1. Click expired verification link | Redirect to error page with appropriate message. | **Medium** |
| **AUTH-006** | Login with verified credentials | User registered and email verified | 1. Submit email + password | Login successful. Session created. Redirect to home/dashboard. | **High** |
| **AUTH-007** | Login with unverified email | User registered but not verified | 1. Submit email + password | Login blocked. Prompt to verify email. Option to resend verification. | **High** |
| **AUTH-008** | Forgot password — existing credential user | User has passwordHash | 1. Submit email on forgot-password form<br>2. Check email inbox | Temporary password sent via email. `mustChangePassword` set to `true`. | **High** |
| **AUTH-009** | Change password with valid data | User logged in; knows current password | 1. Submit current password + new valid password | Password changed successfully. Session remains valid. | **High** |
| **AUTH-010** | Google OAuth login | Google account not yet linked | 1. Click "Sign in with Google"<br>2. Authorize | Account created/linked. Session established. | **High** |

### 7.3 Admin CMS — Test Cases

| Test ID | Description | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| **ADM-001** | Create a new trek with all fields | Admin logged in | 1. Navigate to Treks collection<br>2. Fill all fields (title, price, duration, itinerary, pricing tiers, dates, gallery, FAQ, SEO, map)<br>3. Save as "published" | Trek created with correct slug. Visible on public listing. All relations created correctly. | **High** |
| **ADM-002** | Moderate a pending review | Admin logged in; review exists with `approved: false` | 1. Navigate to Reviews<br>2. Approve the review | Review.`approved` = `true`. Review appears on public trek page. | **Medium** |
| **ADM-003** | Update booking status | Admin logged in; booking exists | 1. Navigate to Bookings<br>2. Change status to "CONFIRMED" | Booking status updated. Customer notification email sent (if configured). | **Medium** |
| **ADM-004** | Delete a published trek | Admin logged in; trek has bookings | 1. Navigate to Treks<br>2. Delete a trek that has associated bookings | System prevents deletion or handles cascading gracefully (soft-delete or warning). | **High** |

### 7.4 API / Security — Test Cases

| Test ID | Description | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| **SEC-001** | Rate limiting on auth endpoints | — | 1. Send 6 rapid POST requests to `/api/auth/signup` | 6th request returns `429 Too Many Requests`. | **Medium** |
| **SEC-002** | Untrusted origin blocked | — | 1. Send request to any API endpoint with `Origin: https://evil.com` | Returns `403 Forbidden`. | **High** |
| **SEC-003** | Admin-only endpoint accessed by customer | Customer session | 1. Call `/api/crm/send-email` with customer session | Returns `401` or `403`. | **High** |
| **SEC-004** | CSP headers present | — | 1. Inspect response headers on any page | `Content-Security-Policy` header present with correct directives. | **Medium** |
| **SEC-005** | Stripe publishable key exposed | — | 1. Check page source and network responses | Key appears only in `/api/stripe-key` response. Not inlined in HTML. | **High** |

---

## 8. Bug Reporting Process

### 8.1 Severity & Priority Classification

| Severity | Definition |
|---|---|
| **Critical** | System crash, data loss, security breach, payment incorrect, core flow completely broken |
| **High** | Major feature broken, no workaround available, significant data integrity issue |
| **Medium** | Feature works but with limitations; workaround exists |
| **Low** | Cosmetic issue, minor UI glitch, typo, non-critical edge case |

| Priority | Definition |
|---|---|
| **P0 — Blocker** | Must fix before any further testing or release |
| **P1 — High** | Should fix before release; significant impact |
| **P2 — Medium** | Should fix after release or in next sprint |
| **P3 — Low** | Nice-to-have; cosmetic or minor enhancement |

### 8.2 Bug Report Template

```markdown
**Title:** [Module] Brief description of the issue

**Environment:** Local / Staging / Production
**Browser & OS:** Chrome 126 / Windows 11
**Test Data:** [Any relevant IDs or test accounts used]

**Preconditions:**
- [List any setup required before reproducing]

**Steps to Reproduce:**
1. Go to ...
2. Click on ...
3. Scroll to ...
4. Observe

**Expected Result:**
What should happen.

**Actual Result:**
What actually happens.

**Screenshots / Logs:**
[Attach screenshot, console logs, HAR file, or network trace]

**Severity:** Critical / High / Medium / Low
**Priority:** P0 / P1 / P2 / P3

**Additional Notes:**
- Occurs intermittently? (Yes/No)
- Workaround: [If any]
```

---

## 9. Roles & Responsibilities

| Role | Responsibilities |
|---|---|
| **QA Lead** | Define test strategy, review test cases, triage bugs, sign-off on release readiness |
| **QA Engineer (Manual)** | Execute manual test cases, exploratory testing, cross-browser/device testing, usability testing, bug reporting |
| **QA Engineer (Automation)** | Develop and maintain Playwright E2E tests, Vitest unit tests, API integration tests, CI pipeline integration |
| **Developer** | Fix bugs, provide test data, support root-cause analysis, participate in code reviews of test code |
| **Product Manager** | Define acceptance criteria, prioritize features, sign-off on feature completeness |
| **DevOps** | Maintain test environments, CI/CD pipeline, database seeding, secrets management |

---

## 10. Timeline & Milestones

| Phase | Activities | Estimated Duration |
|---|---|---|
| **Test Planning** | Create test plan, identify test data needs, set up environments | Week 1 |
| **Test Case Design** | Write detailed test cases for all modules, review with team | Week 2 |
| **Test Environment Setup** | Seed staging DB, configure Stripe webhooks, verify Playwright setup, configure CI | Week 2–3 |
| **Automation Development** | Write Playwright E2E tests for core flows (booking, auth, payment) | Week 3–4 |
| **Manual Testing — Sprint 1** | Auth, public pages, trek detail, contact form | Week 3 |
| **Manual Testing — Sprint 2** | Booking, payments, reviews, admin CMS, CRM | Week 4 |
| **Security & Performance** | Rate limit verification, origin checks, load smoke tests | Week 4 |
| **Cross-Browser & Accessibility** | Cross-browser run, WCAG audit, mobile testing | Week 5 |
| **Regression & Bug Fix Verification** | Full regression suite, verify resolved bugs | Week 5 |
| **UAT / Stakeholder Review** | Demo to stakeholders, gather feedback, final sign-off | Week 6 |
| **Production Smoke Test** | Post-deployment sanity check on production | Release Day |

---

## 11. Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| **Environment instability** (staging DB/Redis down) | Testing blocked | Medium | Maintain local dev environment as fallback; automate environment health check |
| **Stripe test mode differences** | Payment tests may not exactly mirror production | Low | Use Stripe test cards matching production scenarios; document known differences |
| **Incomplete test data** | Some edge cases cannot be verified | Low | Seed script covers all entity types; add migration for missing data scenarios |
| **Flaky E2E tests** (timing-dependent) | False failures, CI distrust | Medium | Use `waitFor`/`toEventually` patterns; retry flaky tests (Playwright retries: 2); tag flaky tests |
| **Third-party API rate limits** (Stripe, Resend, Cloudinary) | Test failures in CI | Low | Use mocked responses for unit tests; dedicated test API keys for staging |
| **Unclear or changing requirements** | Test cases become outdated | Medium | Maintain test cases in version control alongside code; update on each PR |
| **CSP restrictions blocking test automation** | E2E tests fail on resource loading | Low | Add test environment CSP overrides only for non-production |
| **Responsive design issues on untested devices** | Poor mobile UX | Medium | Cover top 3 breakpoints in automation; manual spot-check on real devices |

---

## Appendix A: Automated Test Suite Structure

```
tests/
├── unit/                          # Vitest unit tests
│   ├── validations.test.ts        # Zod schema tests
│   ├── stripe.test.ts             # Stripe helper logic
│   └── stripe-api.test.ts         # Stripe API integration tests
├── e2e/                           # Playwright E2E tests
│   └── booking-flow.spec.ts       # Existing booking flow tests
└── integration/                   # API integration tests (Vitest)
    ├── auth.test.ts               # Signup, login, verification, password reset
    ├── booking.test.ts            # Create booking, get bookings, validation
    ├── payment.test.ts            # Payment intent, webhook, verify
    ├── review.test.ts             # Submit review, admin approval
    ├── contact.test.ts            # Contact form submission
    └── security.test.ts           # Rate limiting, origin check, auth guards
```

## Appendix B: Key Test Accounts

| Role | Email | Notes |
|---|---|---|
| Admin | (seeded in `prisma/seed.ts`) | Full CMS access |
| Customer (verified) | (seeded in `prisma/seed.ts`) | Email verified, can book |
| Customer (unverified) | (seeded in `prisma/seed.ts`) | Cannot log in until verified |
| Guest | N/A | Guest booking flow uses random temp account |

---

*End of Test Plan — Mardi Treks v1.0*
