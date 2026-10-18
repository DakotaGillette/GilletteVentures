// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

import { execSync } from "node:child_process";
import { site } from "./src/config/site.ts";

// Sitemap lastmod: the last commit that touched the page's source file.
// Uncommitted pages fall back to the build time.
/** @param {string} url */
function lastmod(url) {
  const path = new URL(url).pathname.replace(/\/$/, "") || "/index";
  try {
    const date = execSync(`git log -1 --format=%cI -- "src/pages${path}.astro"`, { encoding: "utf8" }).trim();
    return date || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export default defineConfig({
  site: site.url,
  output: "server",
  adapter: cloudflare({
    // Build-time sharp. 'cloudflare' would use paid request-time transformations.
    imageService: "compile",
  }),
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        item.lastmod = lastmod(item.url);
        return item;
      },
    }),
    partytown({ config: { forward: ["dataLayer.push", "gtag"] } }),
  ],
  fonts: [
    {
      name: "Geist",
      cssVariable: "--font-geist",
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ["normal"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      GA_MEASUREMENT_ID: envField.string({ context: "client", access: "public", default: "G-GPXWKKWZHS" }),
    },
  },
});
