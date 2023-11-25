import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/context-reducer-todo/);
});

test.describe("Todo functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByPlaceholder("What needs to be done?").click();
    await page.getByPlaceholder("What needs to be done?").fill("Walk the dog");
    await page.getByRole("button", { name: "Add task" }).click();
  });

  test("Expect todo to be visible", async ({ page }) => {
    await expect(page.getByRole("paragraph")).toContainText("Walk the dog");
    await expect(
      page.getByTestId("app").locator("div").filter({ hasText: "Walk the dog" })
    ).toBeVisible();
  });

  test("Expect todo to be deletable", async ({ page }) => {
    await expect(
      page.getByTestId("app").locator("div").filter({ hasText: "Walk the dog" })
    ).toBeVisible();
    await page.getByRole("button").nth(2).click();
    await expect(
      page.getByTestId("app").locator("div").filter({ hasText: "Walk the dog" })
    ).not.toBeVisible();
  });

  test("Can toggle completed to change styling", async ({ page }) => {
    await expect(page.getByRole("paragraph")).toContainText("Walk the dog");
    await expect(
      page.getByTestId("app").locator("div").filter({ hasText: "Walk the dog" })
    ).toBeVisible();
    await page.getByRole("button").nth(1).click();
    await expect(
      page.getByTestId("app").locator("div").filter({ hasText: "Walk the dog" })
    ).toHaveCSS("text-decoration", /line-through/);
  });
});
