# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking-flow.spec.ts >> Booking Flow >> can browse home page and navigate to a category listing
- Location: tests/e2e/booking-flow.spec.ts:9:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h1').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h1').first()

```

```yaml
- link "Mardi Treks":
  - /url: /
  - img "Mardi Treks"
- text: "Phone: +977 9864379436"
- navigation:
  - link "Treks":
    - /url: /treks
  - menu "Treks submenu":
    - paragraph: Annapurna Region
    - menuitem "Mardi Himal Trek"
    - menuitem "Mardi Himal Trek From Pokhara"
    - menuitem "Short Mardi Himal Trek From Pokhara"
  - link "Blog":
    - /url: /blog
  - link "About":
    - /url: /about
  - link "Contact":
    - /url: /contact
- link "Sign In":
  - /url: /login
- link "Sign Up":
  - /url: /signup
- main:
  - img "Mardi Himal Trek From Pokhara"
  - img "Short Mardi Himal Trek From Pokhara"
  - img "Mardi Himal Trek"
  - heading "Mardi Himal Trek From Pokhara" [level=2]
  - text: 5 Days treks moderate 5.0 (1)
  - paragraph: Starting From
  - heading "$335" [level=2]
  - link "View Details":
    - /url: /treks/mardi-himal-trek-from-pokhara
  - link "Book Now":
    - /url: /book/mardi-himal-trek-from-pokhara
  - heading "Route Overview" [level=3]
  - button "Map Map Detailed Map":
    - region "Map"
    - region "Map"
    - text: Detailed Map
  - heading "Altitude Profile" [level=3]
  - button "Detailed Profile":
    - img
    - text: Detailed Profile
  - button "Previous slide"
  - button "Go to slide 1"
  - button "Go to slide 2"
  - button "Go to slide 3"
  - button "Next slide"
  - heading "Featured Treks" [level=2]
  - paragraph: Handpicked adventures across Nepal's most stunning landscapes.
  - link "Mardi Himal Trek From Pokhara ★★★★★ treks moderate Mardi Himal Trek From Pokhara 5 Days From $335":
    - /url: /treks/mardi-himal-trek-from-pokhara
    - img "Mardi Himal Trek From Pokhara"
    - text: ★★★★★ treks moderate
    - heading "Mardi Himal Trek From Pokhara" [level=3]
    - text: 5 Days From $335
  - link "Short Mardi Himal Trek From Pokhara treks challenging Short Mardi Himal Trek From Pokhara 3 Days From $250":
    - /url: /treks/short-mardi-himal-trek
    - img "Short Mardi Himal Trek From Pokhara"
    - text: treks challenging
    - heading "Short Mardi Himal Trek From Pokhara" [level=3]
    - text: 3 Days From $250
  - link "Mardi Himal Trek treks easy Mardi Himal Trek 9 Days From $430":
    - /url: /treks/mardi-himal-trek
    - img "Mardi Himal Trek"
    - text: treks easy
    - heading "Mardi Himal Trek" [level=3]
    - text: 9 Days From $430
  - region "Plan Your Mardi Himal Trek":
    - text: Annapurna Region · Nepal
    - heading "Plan Your Mardi Himal Trek" [level=2]
    - paragraph: A short Himalayan trek in Nepal's Annapurna region, known for rhododendron forest and close views of Machhapuchhre, Annapurna South and Hiunchuli.
    - heading "Route Map" [level=3]
    - text: Satellite · 3D Terrain
    - button "Map Map Detailed Map":
      - region "Map"
      - region "Map"
      - text: Detailed Map
    - heading "Altitude Profile" [level=3]
    - text: Max 4,500 m
    - button "Detailed Profile":
      - img
      - text: Detailed Profile
    - article:
      - heading "What is the Mardi Himal Trek?" [level=3]
      - paragraph: Mardi Himal sits just east of the Annapurna Base Camp route, with a fraction of the traffic. Most itineraries leave Pokhara, climb through forest to Forest Camp, then break above the tree line at Low Camp and High Camp before reaching the upper viewpoint or base camp itself — the shortest way into the Annapurna high country without a flight or a two-week schedule.
    - article:
      - heading "Why trek with a local operator?" [level=3]
      - list:
        - listitem: Compare short, standard and extended itineraries side by side.
        - listitem: See day-by-day elevation gain and where you'll sleep before booking.
        - listitem: Get clear inclusions, exclusions and group pricing up front.
        - listitem: Ask about acclimatization, insurance and emergency procedures.
    - link "View Mardi Himal Trek":
      - /url: /treks/mardi-himal-trek
    - link "Explore Annapurna Treks":
      - /url: /treks
  - text: Discover the Difference
  - heading "Why Trek With Us?" [level=2]
  - heading "Safety First" [level=3]
  - paragraph: Every guide is wilderness first-aid certified with years of high-altitude experience.
  - heading "Community Impact" [level=3]
  - paragraph: We invest in local communities — fair wages, school support, and sustainable practices.
  - heading "Expert Knowledge" [level=3]
  - paragraph: Our team has decades of combined experience across Nepal's trekking regions.
  - heading "Sustainable Travel" [level=3]
  - paragraph: Leave No Trace principles, eco-friendly lodges, and carbon offset programs.
  - heading "Personalized Service" [level=3]
  - paragraph: Tailored itineraries and dedicated support for every step of your journey.
  - heading "24/7 Assistance" [level=3]
  - paragraph: Round-the-clock support before, during, and after your trek.
  - region "Nepal's Premier Trekking & Adventure Company":
    - text: Who We Are 28.2096° N, 83.9856° E — Pokhara, Nepal
    - heading "Nepal's Premier Trekking & Adventure Company" [level=2]
    - heading "Who We Are" [level=3]
    - paragraph: Mardi Treks is a premier trekking and tour agency based in Pokhara, Nepal. Founded by local trekking experts with a passion for the Himalayas, we specialize in guided trekking expeditions, cultural tours, and climbing adventures across Nepal's most stunning landscapes.
    - heading "What Makes Us Different" [level=3]
    - paragraph: Unlike large, impersonal tour operators, we keep our groups small, our service personal, and our commitment to sustainable tourism unwavering. When you trek with us, you're not just exploring the Himalayas — you're making a positive impact.
    - link "Learn More About Us":
      - /url: /about
    - link "Get in Touch":
      - /url: /contact
    - img "Mardi Treks trekking adventure in Nepal":
      - text: Mardi Himal Trek
      - paragraph: “We pour our local knowledge into every itinerary so you experience the real Nepal.”
      - text: 8+ Years of Experience 100+ Trek Organized 3+ Mardi Himal Packages 15+ Certified Guides
  - text: 0+ Trek Packages 0+ Happy Trekkers 0+ Nepal Regions 0+ Guest Reviews
  - region "Top Rated Treks":
    - heading "Top Rated Treks" [level=2]
    - paragraph: Highly rated experiences with expert guides and unforgettable views.
    - link "Mardi Himal Trek From Pokhara ★★★★★ treks moderate 5.0 Mardi Himal Trek From Pokhara 5 Days From $335":
      - /url: /treks/mardi-himal-trek-from-pokhara
      - img "Mardi Himal Trek From Pokhara"
      - text: ★★★★★ treks moderate 5.0
      - heading "Mardi Himal Trek From Pokhara" [level=3]
      - text: 5 Days From $335
  - region "Guest Reviews":
    - heading "Guest Reviews" [level=2]
    - paragraph: See what our guests have to say about their journeys with us.
    - blockquote: “good trekking experience”
    - text: A
    - heading "Admin" [level=3]
    - link "Mardi Himal Trek From Pokhara":
      - /url: /treks/mardi-himal-trek-from-pokhara
  - region "Latest from Blog":
    - heading "Latest from Blog" [level=2]
    - paragraph: Travel tips, trekking guides, and stories from the Himalayas.
    - article:
      - link "Complete Packing List for the Mardi Himal Trek":
        - /url: /blog/packing-list-for-mardi-himal-trek
        - img "Complete Packing List for the Mardi Himal Trek"
      - text: mardi himal trek packing list 1 min read
      - link "Complete Packing List for the Mardi Himal Trek":
        - /url: /blog/packing-list-for-mardi-himal-trek
        - heading "Complete Packing List for the Mardi Himal Trek" [level=3]
      - paragraph: Everything you need to pack for the Mardi Himal Trek, including essential gear, clothing, and travel tips for a safe and comfortable Himalayan adventure.
      - text: •
      - time: Jul 26, 2026
      - link "Read more about Complete Packing List for the Mardi Himal Trek":
        - /url: /blog/packing-list-for-mardi-himal-trek
        - text: Read More →
    - link "View All Articles":
      - /url: /blog
  - heading "Frequently Asked Questions" [level=2]
  - paragraph: Everything you need to know before your Himalayan adventure.
  - group:
    - text: What is the best time for trekking
    - paragraph: The best trekking seasons in Nepal are spring (March to May) and autumn (September to November). During these months, the weather is stable, temperatures are moderate, and mountain views are at their clearest.
  - group: 2 Do I need a guide for trekking in Nepal?
  - group: 3 What permits are required for trekking?
  - text: Contact Us
  - heading "Get in Touch" [level=2]
  - paragraph: Have questions or ready to plan your next adventure? Our team is here to help every step of the way.
  - paragraph: Email Us
  - paragraph: info@marditreks.com
  - paragraph: Call Us
  - paragraph: +977 9864379436
  - paragraph: Office
  - paragraph: Lakeside, Pokhara, Nepal
  - paragraph: Office Hours
  - paragraph: "Sun-Fri: 9AM-6PM"
  - heading "Send us a message" [level=3]
  - paragraph: Fill in your details below and we'll reach out as soon as possible.
  - text: Full name
  - textbox "Full name":
    - /placeholder: Your full name
  - text: Email address
  - textbox "Email address":
    - /placeholder: you@example.com
  - text: Country
  - textbox "Country":
    - /placeholder: Your country
  - text: Phone number
  - textbox "Phone number":
    - /placeholder: Your phone number
  - text: Subject
  - textbox "Subject":
    - /placeholder: How can we help you?
  - text: Message
  - textbox "Message":
    - /placeholder: Tell us about your travel plan, preferred dates, group size, or any questions you have.
  - button "Send Message"
- contentinfo:
  - text: Trusted & Certified
  - heading "We're Associated With" [level=3]
  - img "Government of Nepal"
  - img "NTB"
  - img "TAAN"
  - img "NMA"
  - link "Mardi Treks":
    - /url: /
    - img "Mardi Treks"
  - heading "Activities" [level=3]
  - list:
    - listitem:
      - link "Treks":
        - /url: /treks
    - listitem:
      - link "Tours":
        - /url: /tours
    - listitem:
      - link "Climbing":
        - /url: /climbing
  - heading "Company" [level=3]
  - list:
    - listitem:
      - link "About Us":
        - /url: /about
    - listitem:
      - link "Travel Blog":
        - /url: /blog
    - listitem:
      - link "Plan Your Trip":
        - /url: /contact
    - listitem:
      - link "Contact Us":
        - /url: /contact
  - heading "Latest Blogs" [level=3]
  - list:
    - listitem:
      - link "Complete Packing List for the Mardi Himal Trek":
        - /url: /blog/packing-list-for-mardi-himal-trek
  - text: "Recommended On:"
  - img "Booking"
  - img "Review Co"
  - text: "Follow Us On:"
  - link "facebook":
    - /url: https://www.facebook.com/
    - img
  - link "instagram":
    - /url: https://www.facebook.com/
    - img
  - link "twitter":
    - /url: https://www.facebook.com/
    - text: 𝕏
  - link "youtube":
    - /url: https://www.facebook.com/
    - img
  - heading "Mardi Treks" [level=4]
  - text: Lakeside, Pokhara, Nepal info@marditreks.com +977 9864379436
  - heading "Speak with a Representative" [level=4]
  - img "Bishow Devkota"
  - text: Bishow Devkota Trip Consultant
  - link "Call":
    - /url: tel:+977 9864379436
  - link "Chat":
    - /url: https://wa.me/+977 9864379436
  - heading "Recognitions" [level=4]
  - img "Traveler's Choice 2026"
  - text: © 2026 Mardi Treks. All rights reserved.
  - link "Contact":
    - /url: /contact
- alert
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Booking Flow", () => {
  4  |   test.describe.configure({ mode: "serial" });
  5  |   const TEST_EMAIL = `e2e-test-${Date.now()}@example.com`;
  6  |   const TEST_PASSWORD = "E2eTestPass123!";
  7  |   const TEST_NAME = "E2E Test User";
  8  | 
  9  |   test("can browse home page and navigate to a category listing", async ({ page }) => {
  10 |     await page.goto("/");
> 11 |     await expect(page.locator("h1").first()).toBeVisible();
     |                                              ^ Error: expect(locator).toBeVisible() failed
  12 | 
  13 |     // Find and click a category link from navigation or hero
  14 |     const categoryLink = page.locator('a[href^="/trek"], a[href^="/tour"], a[href^="/climbing"]').first();
  15 |     if (await categoryLink.count() > 0) {
  16 |       const href = await categoryLink.getAttribute("href");
  17 |       await page.goto(href!);
  18 |       await expect(page).toHaveURL(new RegExp(href!));
  19 |     }
  20 |   });
  21 | 
  22 |   test("can view trek detail page if trek exists", async ({ page }) => {
  23 |     // Navigate to a category first, then find a trek link
  24 |     await page.goto("/treks");
  25 |     const trekLink = page.locator('a[href*="/treks/"]').first();
  26 |     if (await trekLink.count() > 0) {
  27 |       const href = await trekLink.getAttribute("href");
  28 |       await page.goto(href!);
  29 |       await expect(page).toHaveURL(new RegExp(href!));
  30 |       await expect(page.locator("h1")).toBeVisible();
  31 |     }
  32 |   });
  33 | 
  34 |   test("can sign up with unique credentials", async ({ page }) => {
  35 |     await page.goto("/signup");
  36 |     await expect(page.locator("h1").first()).toBeVisible();
  37 | 
  38 |     await page.fill('input[name="name"]', TEST_NAME);
  39 |     await page.fill('input[name="email"]', TEST_EMAIL);
  40 |     await page.fill('input[name="password"]', TEST_PASSWORD);
  41 | 
  42 |     await page.click('button[type="submit"]');
  43 | 
  44 |     await expect(page.getByRole("heading", { name: /Account Created/ })).toBeVisible();
  45 |   });
  46 | 
  47 |   test("shows credential login for verified users", async ({ page }) => {
  48 |     await page.goto("/login");
  49 |     await expect(page.locator("h1").first()).toBeVisible();
  50 | 
  51 |     await page.fill('input[name="email"]', TEST_EMAIL);
  52 |     await page.fill('input[name="password"]', TEST_PASSWORD);
  53 |     await expect(page.getByRole("button", { name: "Sign In" })).toBeEnabled();
  54 |   });
  55 | 
  56 |   test("offers password recovery for credential users", async ({ page }) => {
  57 |     await page.goto("/login");
  58 |     await expect(page.getByRole("link", { name: "Forgot password?" })).toHaveAttribute(
  59 |       "href",
  60 |       "/forgot-password"
  61 |     );
  62 |     await page.goto("/forgot-password");
  63 |     await expect(page).toHaveURL(/\/forgot-password/);
  64 |     await expect(page.getByRole("heading", { name: "Forgot your password?" })).toBeVisible();
  65 |     await expect(page.getByRole("button", { name: "Send temporary password" })).toBeVisible();
  66 |   });
  67 | 
  68 |   test("guest booking pages do not force authentication", async ({ page }) => {
  69 |     await page.goto("/book/mardi-himal-trek");
  70 |     await expect(page).not.toHaveURL(/\/login/);
  71 |     await expect(page.getByText("How would you like to book?")).toBeVisible();
  72 |     await page.getByRole("button", { name: "Continue as guest" }).click();
  73 |     await expect(page.getByText("Booking as a guest")).toBeVisible();
  74 |     await expect(page.getByText(/create an account from the lead traveler/)).toBeVisible();
  75 |   });
  76 | 
  77 |   test("SEO: sitemap and robots.txt are accessible", async ({ page }) => {
  78 |     await page.goto("/robots.txt");
  79 |     await expect(page.locator("body")).toContainText("User-Agent");
  80 | 
  81 |     await page.goto("/sitemap.xml");
  82 |     await expect(page.locator("body")).toContainText("urlset");
  83 |   });
  84 | });
  85 | 
```