import { test, expect } from "@playwright/test";

test.describe("Booking Flow", () => {
  test.describe.configure({ mode: "serial" });
  const TEST_EMAIL = `e2e-test-${Date.now()}@example.com`;
  const TEST_PASSWORD = "E2eTestPass123!";
  const TEST_NAME = "E2E Test User";

  test("can browse home page and navigate to a category listing", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toBeVisible();

    // Find and click a category link from navigation or hero
    const categoryLink = page.locator('a[href^="/trek"], a[href^="/tour"], a[href^="/climbing"]').first();
    if (await categoryLink.count() > 0) {
      const href = await categoryLink.getAttribute("href");
      await page.goto(href!);
      await expect(page).toHaveURL(new RegExp(href!));
    }
  });

  test("can view trek detail page if trek exists", async ({ page }) => {
    // Navigate to a category first, then find a trek link
    await page.goto("/treks");
    const trekLink = page.locator('a[href*="/treks/"]').first();
    if (await trekLink.count() > 0) {
      const href = await trekLink.getAttribute("href");
      await page.goto(href!);
      await expect(page).toHaveURL(new RegExp(href!));
      await expect(page.locator("h1")).toBeVisible();
    }
  });

  test("can sign up with unique credentials", async ({ page }) => {
    await page.goto("/signup");
    await expect(page.locator("h1").first()).toBeVisible();

    await page.fill('input[name="name"]', TEST_NAME);
    await page.fill('input[name="email"]', TEST_EMAIL);
    await page.fill('input[name="password"]', TEST_PASSWORD);

    await page.click('button[type="submit"]');

    await expect(page.getByRole("heading", { name: /Account Created/ })).toBeVisible();
  });

  test("shows credential login for verified users", async ({ page }) => {
    await page.goto("/login");
    await expect(page.locator("h1").first()).toBeVisible();

    await page.fill('input[name="email"]', TEST_EMAIL);
    await page.fill('input[name="password"]', TEST_PASSWORD);
    await expect(page.getByRole("button", { name: "Sign In" })).toBeEnabled();
  });

  test("offers password recovery for credential users", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByRole("link", { name: "Forgot password?" })).toHaveAttribute(
      "href",
      "/forgot-password"
    );
    await page.goto("/forgot-password");
    await expect(page).toHaveURL(/\/forgot-password/);
    await expect(page.getByRole("heading", { name: "Forgot your password?" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Send temporary password" })).toBeVisible();
  });

  test("guest booking pages do not force authentication", async ({ page }) => {
    await page.goto("/book/mardi-himal-trek");
    await expect(page).not.toHaveURL(/\/login/);
    await expect(page.getByText("How would you like to book?")).toBeVisible();
    await page.getByRole("button", { name: "Continue as guest" }).click();
    await expect(page.getByText("Booking as a guest")).toBeVisible();
    await expect(page.getByText(/create an account from the lead traveler/)).toBeVisible();
  });

  test("SEO: sitemap and robots.txt are accessible", async ({ page }) => {
    await page.goto("/robots.txt");
    await expect(page.locator("body")).toContainText("User-Agent");

    await page.goto("/sitemap.xml");
    await expect(page.locator("body")).toContainText("urlset");
  });
});
