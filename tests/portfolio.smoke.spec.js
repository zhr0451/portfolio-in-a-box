import { test, expect } from "@playwright/test";

test.describe("portfolio smoke", () => {
  test("renders the core page at the GitHub Pages base path", async ({ page }) => {
    await page.goto(".");

    await expect(page).toHaveTitle(/Zakhar Samokhvalov/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByText("welcome")).toBeVisible();
    await expect(page.getByText("Experience")).toBeVisible();
    await expect(page.getByText("Education")).toBeVisible();
    await expect(page.getByText("Projects")).toBeVisible();
    await expect(page.getByText("Currently available for hire")).toBeVisible();
  });

  test("serves hero and social assets from the configured base path", async ({ page }) => {
    await page.goto(".");

    const heroImage = page.locator('img[alt="Portrait of Zakhar Samokhvalov"]');
    await expect(heroImage).toHaveAttribute("src", /\/portfolio-in-a-box\/media\/photo_2026-03-15_19-53-33\.jpg$/);

    const socialIcons = page.locator(".action-button img");
    await expect(socialIcons).toHaveCount(4);

    for (const icon of await socialIcons.all()) {
      const src = await icon.getAttribute("src");
      expect(src).toMatch(/^\/portfolio-in-a-box\/buttons\//);
    }
  });

  test("switches locale to Russian and persists it across reloads", async ({ page }) => {
    await page.goto(".");

    const ruSwitch = page.locator('[data-switch-lang="ru"]');
    await ruSwitch.click();

    await expect(page.locator("html")).toHaveAttribute("lang", "ru");
    await expect(page.getByText("привет")).toBeVisible();
    await expect(page.getByText("Опыт")).toBeVisible();
    await expect(page.getByText("Сейчас открыт для предложений")).toBeVisible();

    await page.reload();

    await expect(page.locator("html")).toHaveAttribute("lang", "ru");
    await expect(page.getByText("привет")).toBeVisible();
    await expect(page.locator('[data-switch-lang="ru"]')).toHaveAttribute("aria-pressed", "true");
  });
});
