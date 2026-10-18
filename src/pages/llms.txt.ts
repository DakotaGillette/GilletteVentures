import type { APIRoute } from "astro";
import { site } from "../config/site";

export const prerender = true;

const pages = [
  {
    path: "/",
    title: "Home",
    about:
      "What the company is, how we work, company details and common questions.",
  },
  {
    path: "/contact/",
    title: "Contact",
    about: "Email address and principal address.",
  },
  {
    path: "/privacy/",
    title: "Privacy policy",
    about:
      "What the site collects (analytics, email) and how to ask for deletion.",
  },
  {
    path: "/terms/",
    title: "Terms of use",
    about: "Terms for using this website.",
  },
];

/** Cheap to generate and harmless. It does not affect ranking. Facts come from site.ts. */
export const GET: APIRoute = async () => {
  const { street, city, region, postal, country } = site.address;
  const facts = [
    `- Legal name: ${site.legalName}`,
    "- Entity type: Limited liability company",
    site.jurisdiction && `- Formed in: ${site.jurisdiction}`,
    street &&
      `- Principal address: ${street}, ${city}, ${region} ${postal}, ${country}`,
    `- Email: ${site.email}`,
    `- Website: ${site.url}`,
  ].filter(Boolean);

  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.legalName} is the parent company of a group of independently branded products. It starts, builds and runs its own products and does not take client work. To confirm that a product belongs to the company, email ${site.email}.`,
    "",
    "## Company details",
    "",
    ...facts,
    "",
    "## Pages",
    "",
    ...pages.map(
      (p) => `- [${p.title}](${new URL(p.path, site.url).href}): ${p.about}`,
    ),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
