// @ts-check
import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

import { site } from "./src/config/site.ts";

export default defineConfig({
  site: site.url,
  output: "server",
  adapter: cloudflare({
    // Build-time sharp. 'cloudflare' would use paid request-time transformations.
    imageService: "compile",
  }),
  integrations: [
    react(),
    sitemap(),
    partytown({ config: { forward: ["dataLayer.push", "gtag"] } }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
      TURNSTILE_SECRET_KEY: envField.string({ context: "server", access: "secret", optional: true }),
      TURNSTILE_SITE_KEY: envField.string({ context: "client", access: "public", optional: true }),
      CONTACT_TO: envField.string({ context: "server", access: "public", optional: true }),
      CONTACT_FROM: envField.string({ context: "server", access: "public", optional: true }),
      GA_MEASUREMENT_ID: envField.string({ context: "client", access: "public", optional: true }),
    },
  },
});
