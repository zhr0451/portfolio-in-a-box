import { defineConfig } from "@playwright/test";

const PORT = 4173;
const BASE_PATH = "/portfolio-in-a-box/";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://127.0.0.1:${PORT}${BASE_PATH}`,
    trace: "on-first-retry",
    browserName: "chromium",
    headless: true,
  },
  webServer: {
    command: "pnpm preview:ci",
    url: `http://127.0.0.1:${PORT}${BASE_PATH}`,
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    stderr: "pipe",
    timeout: 120000,
  },
});
