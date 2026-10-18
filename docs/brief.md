# Gillette Ventures: brief

## TBD

- Registered agent street, city, state, ZIP (goes in `src/config/site.ts`, shown in the footer and on contact)
- State of formation (sets governing law on the terms page)
- GA4 measurement ID (`GA_MEASUREMENT_ID` in `wrangler.jsonc`)
- Resend API key, domain verification, and Turnstile keys
- Inbox that `admin@gilletteventures.com` forwards to (Cloudflare Email Routing)
- Confirm the one-line description: "builds and operates independent software and media ventures"

## The business

- Name: Gillette Ventures. Legal name: Gillette Ventures LLC.
- What it is: an umbrella LLC. Each project runs under it as a DBA and spins out into its own entity once it earns enough.
- Location: no storefront. The site shows the registered agent address.
- Contact: admin@gilletteventures.com. No phone.
- schema.org type: `Organization`.

## Purpose and audience

- Main job: legitimacy. The readers are banks, Stripe and other payment processors, app stores, vendors and partners who are checking that the LLC is real.
- So the legal name, address and email must match exactly what's on file with those parties.
- Primary action: email, or the contact form.
- No current site. No references given.

## Brand and look

- No logo yet. Use a type-only wordmark.
- Feel: modern tech. Crisp sans, one accent color, generous spacing.
- Light by default, with dark when the visitor's system prefers it.
- Photos: none needed.

## Pages

- Home: what Gillette Ventures is, a short explanation of the umbrella/DBA model, and a contact block.
- Contact: form (Resend + Turnstile) plus the address and email.
- Privacy policy: what the form collects, GA4 cookies, Resend as processor, how to make requests, effective date.
- Terms of use: short site terms, governed by the law of the state of formation.
- 404 from the template.
- Ventures are not listed yet. When they are, they become a content collection and a list page.

## Plumbing

- Domain: gilletteventures.com, registered on Cloudflare.
- Hosting: Cloudflare Workers, worker `gillette-ventures`.
- Repo: github.com/DakotaGillette/GilletteVentures.
- Form submissions go to admin@gilletteventures.com, from noreply@gilletteventures.com.
- Analytics: GA4 via Partytown.
- Integrations: none.

## Practical

- Launch date: none given.
- Sign-off: Dakota.
