# Gillette Ventures

The public site for Gillette Ventures LLC, an umbrella holding company whose projects run as DBAs.
It exists so banks, payment processors, app stores and vendors can confirm the LLC is real.
The brief is `docs/brief.md`.

## Stack

Astro 7 (`output: "server"`) + Tailwind v4 + React islands, on Cloudflare Workers (worker `gillette-ventures`,
domain gilletteventures.com). GA4 loads via Partytown. There is no contact form
by choice: contact is email only. Every page is prerendered.
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
- Env vars are declared in `astro.config.mjs` (`env.schema`). Pages are prerendered, so values are read at build time;
  `GA_MEASUREMENT_ID` defaults to G-GPXWKKWZHS there.
- schema.org type is `Organization`. There is no phone, hours or geo, and the schema and footer skip empty fields.

## Design

- Full system: `DESIGN.md` and the direction brief in `.impeccable/surfaces/`. Product truth: `PRODUCT.md`.
- Palette: dark only. Near-black surfaces, hairline borders, one blue-violet accent (`--color-brand-*`, hue 278) for signal.
- Type: Geist via the Astro Fonts API. Tight negative tracking on display sizes.
- Voice: the company as "we". Plain and factual. No hype, no exclamation marks.
- References: Linear, Stripe, Raycast for craft level.
- Must: legal name, principal address and email consistent on every page; Privacy and Terms in the footer.
- Must not: list ventures yet; explain the internal structure (DBAs, banking, spin-outs); imply services for hire.

## Gotchas

- Astro sessions need the KV binding `SESSION` (namespace `gillette-ventures-session`, already created).
  The adapter expects it even though nothing uses sessions yet.
- `main` in `wrangler.jsonc` points at `@astrojs/cloudflare/entrypoints/server`, not
  at a path inside `dist/`.

## Out of scope

- `worker-configuration.d.ts` is generated. Do not edit it by hand.
