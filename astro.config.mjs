// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://zhr0451.github.io",
  base: "/portfolio-in-a-box/",
  vite: {
    plugins: [tailwindcss()],
  },
});
