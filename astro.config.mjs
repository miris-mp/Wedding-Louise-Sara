import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["maplibre-gl"],
    },
  },

  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
