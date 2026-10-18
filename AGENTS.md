# Gillette Ventures

The public site for Gillette Ventures LLC, an umbrella holding company whose projects run as DBAs.
It exists so banks, payment processors, app stores and vendors can confirm the LLC is real.
The brief is `docs/brief.md`.

## Stack

Astro 7 (`output: "server"`) + Tailwind v4 + React islands, on Cloudflare Workers (worker `gillette-ventures`,
domain gilletteventures.com). Contact form email goes through Resend, with Turnstile for spam. GA4 loads via Partytown.
No shadcn components installed yet (`components.json` only).

## Commands

| Command           | Does                                                      |
| ----------------- | --------------------------------------------------------- |
| `pnpm dev`        | Local dev on the workerd runtime                          |
| `pnpm build`      | Production build                                          |
| `pnpm check`      | astro check + tsc                                         |
| `pnpm images`     | Convert and resize images in src/assets and public/images |
| `pnpm cf-typegen` | Regenerate binding types after editing wrangler.jsonc     |

Press F5 in VSCode to start the dev server and open a browser. Astro 7 runs the dev
server as a background process: `astro dev status`, `astro dev logs --follow` and
`astro dev stop` control it.

## Architecture

- `src/config/site.ts` is the single source of truth for business facts. Nothing
  else hardcodes an address, phone number or business name.
- `src/lib/schema.ts` builds the JSON-LD graph from that config.
- `src/components/Seo.astro` owns the document head. Pages pass props to the layout.
- `src/actions/` holds form and mutation endpoints. No API routes.
- Env vars are declared in `astro.config.mjs` (`env.schema`). Public values are in `wrangler.jsonc` `vars`,
  and secrets (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`) go through `wrangler secret put`, locally in `.dev.vars`.
- schema.org type is `Organization`. There is no phone, hours or geo, and the schema and footer skip empty fields.

## Design

- Palette: one indigo accent (`--color-brand-*`, oklch hue 270) on neutral surfaces. No logo yet, so no colors to match.
- Type: one crisp sans for everything. The wordmark is the business name set in type.
- Light/dark: light by default, dark through `prefers-color-scheme`.
- Voice: plain and factual, like a firm stating who it is. No hype, no startup slogans, no exclamation marks.
- References: none given.
- Must: the legal name, registered address and email shown consistently on every page (footer), with Privacy and Terms linked from the footer.
- Must not: list ventures yet; imply services for hire; use stock photos.

## Gotchas

- Astro sessions need the KV binding `SESSION` (namespace `gillette-ventures-session`, already created).
  Without it the contact form submits and shows nothing.
- `main` in `wrangler.jsonc` points at `@astrojs/cloudflare/entrypoints/server`, not
  at a path inside `dist/`.

## Out of scope

- `worker-configuration.d.ts` is generated. Do not edit it by hand.
