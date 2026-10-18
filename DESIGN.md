---
name: Gillette Ventures
description: The public home of Gillette Ventures LLC. A dark, precise company page where verifiable facts come first.
colors:
  brand-300: "oklch(0.8 0.1 278)"
  brand-400: "oklch(0.72 0.15 278)"
  brand-500: "oklch(0.64 0.19 278)"
  surface: "oklch(0.145 0.004 270)"
  surface-muted: "oklch(0.175 0.005 270)"
  surface-raised: "oklch(0.2 0.006 270)"
  ink: "oklch(0.97 0.003 270)"
  ink-muted: "oklch(0.68 0.01 270)"
  ink-faint: "oklch(0.62 0.01 270)"
  line: "oklch(0.24 0.006 270)"
  line-strong: "oklch(0.31 0.008 270)"
typography:
  display:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
    fontFeature: '"ss01", "cv11"'
  page-title:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "2.25rem (3rem from 640px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.875rem (2.25rem from 640px)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
  lead:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
rounded:
  focus: "6px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "24px"
  container: "72rem"
  header: "56px"
  target: "44px"
  section: "7rem"
  section-sm: "9rem"
  heading-gap: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    height: "44px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.surface}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    height: "44px"
    padding: "0 20px"
  button-ghost-hover:
    backgroundColor: "{colors.surface-muted}"
  button-copy:
    backgroundColor: "transparent"
    textColor: "{colors.ink-faint}"
    rounded: "{rounded.md}"
    size: "44px"
  button-copy-hover:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
  button-copy-copied:
    textColor: "{colors.brand-300}"
  nav-pill:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: "32px"
    padding: "0 12px"
  nav-pill-current:
    textColor: "{colors.brand-300}"
  panel:
    backgroundColor: "{colors.surface-muted}"
    rounded: "{rounded.xl}"
    padding: "24px (40px from 640px)"
---

# Design System: Gillette Ventures

## Overview

**Creative North Star: "The Lit Ledger"**

A near-black company page at Linear, Stripe and Raycast craft. The ground is one dark, faintly cool neutral; panels sit a step lighter behind hairline borders; type is Geist throughout, set large and tight. A single blue-violet hue (278) is held back for live signal, so it reads as the system answering you rather than as decoration.

Density is low and the rhythm is generous: big section gaps, left-aligned headlines, plain-text principles under thin rules instead of cards. The verifiable facts (legal name, address, email) are the working centrepiece, set in a copyable table with tabular numerals. The site is dark only. There is no light theme and no theme switch.

Motion is quiet and mostly one-shot. Content rises and unblurs on load, later sections fade up once as they scroll in, pages cross-fade with the header held still, the hero light field drifts on a long loop, the copy control morphs its icon and flashes its row, and the closing panel carries a pointer spotlight. Under reduced motion the fades and color changes stay and all movement goes.

**Key Characteristics:**

- Dark only, one neutral family at hue 270 stepped by lightness.
- One accent hue (278), reserved for signal.
- Geist for everything, negative tracking that tightens as size grows.
- Hairline borders and tonal steps carry depth. No drop shadows.
- Every interactive target is at least 44px.
- Contact is email only. No forms.

## Colors

A cool near-black neutral ramp with one blue-violet signal hue; the neutrals share hue 270 and differ only in lightness, the accent sits at 278.

### Primary

- **Signal Violet** (brand-500): the light-source hue. Feeds the hero glow, the pointer spotlight and text selection, always at low alpha (0.16 to 0.35), never as a flat fill.
- **Focus Violet** (brand-400): the focus ring, the text caret, the current-page border (at 60% alpha) and the hover underline on legal-page links.
- **Confirmed Violet** (brand-300): text-level signal. The copied state of a copy button and the current-page label in the header.

### Neutral

- **Ground** (surface): the page background and the text color on white buttons.
- **Panel** (surface-muted): raised panels, usually at 60% alpha over the ground; also the ghost button hover fill.
- **Lifted** (surface-raised): the header contact pill, the copy button hover, table row hover at 50%.
- **Ink** (ink): headings, primary text, and the primary button fill.
- **Muted ink** (ink-muted): lead paragraphs, body copy, the second line of the hero headline, secondary nav.
- **Faint ink** (ink-faint): labels, metadata, footer text, idle copy icons, hover border on ghost controls.
- **Hairline** (line): panel borders, row dividers, the footer rule.
- **Strong hairline** (line-strong): ghost button borders, principle top rules, link underlines, the scrollbar thumb.

### Named Rules

**The Signal Only Rule.** The accent marks state, never decoration: focus, caret and selection, copied, current page, and the two light sources (hero glow, spotlight). No accent buttons, accent headings or accent fills.

**The One Neutral Rule.** Every neutral is the same hue (270) at a different lightness. Depth is a lightness step, not a new color.

## Typography

**Display Font:** Geist (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Geist (same stack)

**Character:** One family at 400, 500 and 600, loaded through the Astro Fonts API with stylistic sets ss01 and cv11 on. Hierarchy comes from size, weight and tracking, not from a second face.

### Hierarchy

- **Display** (600, clamp(2.75rem, 7vw, 5.25rem), 1.02, -0.04em): the home hero only, two lines, the second in muted ink, balanced.
- **Page title** (600, 2.25rem rising to 3rem, -0.035em): the h1 on contact, privacy, terms and 404.
- **Headline** (600, 1.875rem rising to 2.25rem, -0.03em): section headings. The closing contact panel steps up to 3rem.
- **Title** (500, 1rem): principle names and question text.
- **Lead** (400, 1.125rem, 1.625): the sentence under a heading, in muted ink, max about 36rem.
- **Body** (400, 15px, 1.625): principle and answer text in muted ink, held to max-w-prose. Legal pages run 1rem at 1.75.
- **Label** (400 or 500, 0.875rem): table labels and panel labels in faint ink; button and nav text at 500.

### Named Rules

**The Tighter At Scale Rule.** Tracking tightens with size: -0.01em at 1.0625 to 1.5rem, -0.03em on headlines, -0.035em on page titles, -0.04em on display. Body text stays at normal tracking.

**The Tabular Facts Rule.** Address and company data (the details table, the contact address, the footer) set tabular numerals.

## Layout

A single centered column, max 72rem, with 16px gutters (24px from 640px). The sticky header is 56px tall. Main content has 4rem top and bottom padding (5rem from 640px).

Sections are separated by 7rem (9rem from 640px); the first section after the hero sits closer at 4 to 5rem. A heading sits 2.5rem above its content, a lead sentence 1rem below its heading. Headlines are left aligned throughout.

Responsive changes use Tailwind's default 640px and 1024px breakpoints. The principles grid goes 1, 2, then 4 columns. The questions section becomes a two-column split (1fr to 1.6fr) at 1024px with the heading on the left. The details table moves from a stacked label-over-value row to a 13rem label column at 640px. The contact page panel splits into two halves at 640px.

## Elevation & Depth

Flat. No box shadows anywhere. Depth comes from three neutral steps (ground, panel, lifted), hairline borders, and light: the hero dot grid (1px dots on a 24px pitch at 9% white, masked to an ellipse) lit by one blurred accent glow, and the pointer spotlight inside panels. The sticky header uses a 75% ground fill with a strong backdrop blur and saturation boost.

### Named Rules

**The Light Not Shadow Rule.** Things come forward by getting lighter or lit, never by casting a shadow.

## Shapes

Soft, small radii on everything rectangular: a 6px radius on the focus ring and on small controls (md: copy buttons, header nav, skip link), 8px (lg) on 44px buttons, 12px (xl) on panels and the details table. Radius grows with the size of the thing it holds. The only full circle is the hero glow. Borders are 1px hairlines. The principles use a top rule only, no box.

## Components

### Buttons

Precise and plain: white or outlined, never accent-colored.

- **Shape:** gently rounded (8px), 44px tall, 20px side padding, 0.875rem text at 500.
- **Primary:** ink fill with ground-colored text, a 16px arrow icon trailing. Hover goes to pure white; press scales to 0.98. Transitions run 200ms.
- **Ghost:** transparent with a strong hairline border and ink text. Hover lifts the border to faint ink and fills with the panel tone.
- **Focus:** the global 2px Focus Violet outline at 3px offset with a 6px radius.

### Copy button (signature)

- 44px square, 6px radius, faint ink copy icon. Hover fills with the lifted tone and brightens the icon to ink.
- On click it writes the value to the clipboard and morphs: the copy icon scales to 50% and fades while a check scales in, both over 200ms in the same grid cell. The button turns Confirmed Violet for 1.6s and its table row flashes Signal Violet at 14% and fades out over 700ms on the expo ease-out. A polite live region announces "Copied".
- If the clipboard is blocked it does nothing; the value stays selectable.

### Details table

- One 12px panel with a hairline border on the panel tone at 60%. Rows are separated by hairlines, 16px vertical padding, and lift to the raised tone at 50% on hover.
- Label in faint ink, value in ink, copy button trailing. Linked values get a strong-hairline underline at 4px offset.

### Cards / Containers

- **Corner Style:** 12px.
- **Background:** panel tone at 60% over the ground.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px hairline.
- **Internal Padding:** 24px rising to 40px on the contact page; 24px by 56px rising to 48px by 80px on the home closing panel.

### Navigation

- Sticky 56px header with a hairline bottom border at 70%, translucent ground and backdrop blur.
- Left: the wordmark (see Brand mark). There is no icon.
- Right: a muted text link and a 32px Contact pill (lifted fill, strong hairline, 6px radius) whose hit area extends to 44px. On the contact page the pill shows the current state: Focus Violet border at 60% and Confirmed Violet text.
- Footer: faint ink at 0.875rem, tabular numerals, links brighten to ink on hover with hit areas padded out to 44px.

### Motion

- **Rise:** content rises 10px, fades in and clears a 6px blur over 900ms on the expo ease-out (cubic-bezier(0.16, 1, 0.3, 1)), staggered 70ms per step after an 80ms lead.
- **Light field:** the dot grid fades in over 1600ms (200ms delay) and the glow over 2000ms (300ms delay), both on the expo ease-out; the glow then drifts on an 18s ease-in-out alternate loop.
- **Reveal:** below-the-fold blocks on the home page fade up once from 14px over 800ms on the expo ease-out, staggered 80ms per step, when they cross 10% above the viewport bottom. Revealing one block reveals every block above it, so anchor jumps never leave a section hidden. Blocks are hidden only after script marks the page, so content is visible without JavaScript.
- **Page transitions:** cross-document view transitions. The old page fades out over 140ms (ease-in), the new one fades in and rises 6px over 320ms on the expo ease-out. The header carries its own transition name so it stays put.
- **Pause offscreen:** the glow drift pauses while the hero is out of view.
- **Spotlight:** a 600px accent radial follows the pointer inside the panel; it rests at 60% opacity and goes to full on hover over 300ms.
- **Reduced motion:** movement goes, fades stay. Rise becomes a 400ms opacity fade, the glow fades in over 600ms with no drift, reveals fade without the 14px travel, page transitions fade without the 6px rise, the copy icons swap by fade without scaling, the primary press scale is off, and smooth scrolling is off. Color transitions, the spotlight opacity and the row flash are kept.

### Brand mark
- **Wordmark:** "GilletteVentures" set as one word at 16px with -0.03em tracking: "Gillette" in ink at 600, "Ventures" in muted ink at 400. The link carries the accessible name "Gillette Ventures". No icon or symbol accompanies it.
- **Favicon:** a Geist 600 "G" in near-white (#f4f5f7) on a full-bleed square of #121318, shipped as PNG (favicon.ico at 32 and 48, a 180px apple touch icon, 192 and 512 app icons). The web manifest uses #121318 for theme and background. These two hex values belong to the raster icon only; on the page, use the oklch tokens.

## Do's and Don'ts

### Do:

- **Do** keep the accent to signal: focus, caret, selection, copied, current page, glow and spotlight.
- **Do** step neutrals by lightness at hue 270 for any new surface.
- **Do** make every interactive target at least 44px, padding the hit area with a pseudo-element when the visible control is smaller.
- **Do** set company and address data in tabular numerals.
- **Do** tighten tracking as type grows, per the Tighter At Scale Rule.
- **Do** give every motion a reduced-motion form that keeps the fade and drops the movement, and keep content visible without JavaScript.
- **Do** keep contact to email. A mailto button and the visible address are the whole contact surface.

### Don't:

- **Don't** add a light theme or a theme switch.
- **Don't** use drop shadows; use a lighter step or light.
- **Don't** fill buttons, headings or panels with the accent.
- **Don't** add a contact form.
- **Don't** add a second typeface.
