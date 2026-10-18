import type { APIRoute } from "astro";
import { site } from "../config/site";

export const prerender = true;

/** Cheap to generate and harmless. It does not affect ranking. */
export const GET: APIRoute = async () => {
  const pages = Object.keys(import.meta.glob("./**/*.astro"))
    .map((p) => p.replace(/^\.\//, "").replace(/\.astro$/, "").replace(/(^|\/)index$/, ""))
    .filter((p) => !p.startsWith("404"))
    .sort();

  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Pages",
    ...pages.map((p) => `- [${p || "Home"}](${site.url}/${p})`),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
