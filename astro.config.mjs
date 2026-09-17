// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["maplibre-gl"],
    },
  },
  i18n: {
    locales: ["en", "it"], // Locales you want to support
    defaultLocale: "en", // Default locale (fallback)

    routing: {
      prefixDefaultLocale: false, // Ensures that your default locale is prefixed aswell
    },
  },
});
