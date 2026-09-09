# Portfolio Letting Experts — Design System

Design system for **Portfolio Letting Experts (PLE)**, a residential letting & property management agency serving landlords in Bournemouth, Christchurch & Poole (BCP), UK.

## Sources

- Live site: https://www.portfoliolettingexperts.co.uk/ (Home + About pages, fetched 9 Jul 2026)
- Contact: 01202 082023 · help@portfoliolettingexperts.co.uk
- Address: Oxford Point, 19 Oxford Road, Bournemouth, BH8 8GS
- Social: [Instagram](http://instagram.com/portfoliolettingexperts) · [LinkedIn](https://www.linkedin.com/company/portfolio-letting-experts/) · [Facebook](http://facebook.com/Portfoliolettingexperts) · [YouTube](http://youtube.com/@timconstable83)

No codebase, Figma file, or brand guideline deck was attached — everything here is derived from the public Squarespace site (copy, logo, and photography) plus standard component conventions for the parts the site doesn't define (this is a **brand-guidelines-only** design system: the marketing site is a single template, not a component library, so the primitive component set below is the standard authored set, not one enumerated from a source).

## Company context

PLE is a small, local, founder-led lettings agency (not a national franchise or PropTech product). The one product surface is the marketing/lead-gen website — there is no customer portal, app, or dashboard in scope. Copy centers on a tight audience (landlords with 3–10 properties in BCP) and three service tiers: Basic (tenant find), Premium (rent collection), VIP (fully managed).

## Content fundamentals

- **Audience**: landlords with 3–10 rental properties in Bournemouth/Christchurch/Poole — an established, cautious audience, not first-time buy-to-letters.
- **Voice**: direct, plain-English, reassuring. First person plural ("We help Landlords...", "We can help today with..."), addressing the reader as "you"/"your" — e.g. "We help Landlords with 3 - 10 properties in BCP grow their portfolio profitably with zero hassle."
- **Tone**: warm but no-nonsense; leans on trust and protection rather than hype. The About page frames the mission emotionally: "Our mission is to find you the best tenant because we want to protect your family's inheritance for years to come."
- **Casing**: sentence case for headings and body copy; occasional Title Case for nav/section labels ("Book A Call", "Meet the team" is actually lowercase — mixed, so don't over-systematize it). Numerals + "%" used plainly for pricing (50%, 8%, 10%).
- **Structure**: short benefit-led headline → bullet list of concrete problems solved (rental valuations, finding tenants, switching agents, bad-tenant eviction advice, compliance) → single clear CTA ("Book A Call").
- **Social proof**: light-touch, round-number claims — "100's of happy customers!" — no fabricated testimonials or star ratings.
- **Emoji**: none used anywhere on-site. Do not introduce emoji into PLE materials.
- **CTAs**: singular and consistent — "Book A Call" is the one recurring action, always linking to the Acuity booking page. Don't invent alternate CTA phrasing casually.
- **Legal/pricing caveat**: prices are always shown "+ VAT" — carry that caveat whenever quoting a percentage fee.

## Visual foundations

- **Color**: three-color brand system straight off the logomark — magenta-pink (`#DE1867`), cyan-teal (`#55C4D7`), and deep navy (`#201C4E`/`#28235B`). Pink is the primary action color; navy is the dominant dark/text/footer color; teal is a bright accent (secondary CTA, highlights, focus rings). Neutrals are warm and navy-tinted rather than pure gray/black.
- **Type**: no brand font files were available (Squarespace serves its template fonts, which aren't redistributable) — see "Fonts" note below for the substitution. The live site's headings read as a bold, confident geometric sans; body copy is a plain, highly legible sans. Headline sizes are large and few-worded ("We help Landlords... grow their portfolio profitably with zero hassle"); body copy is short, scannable, never dense paragraphs.
- **Spacing**: generous whitespace between sections (the live site uses Squarespace's large default section padding); a simple 4px-based scale is defined for consistency across new work.
- **Backgrounds**: mostly flat white/near-white sections, alternating with the deep navy for the footer and one full-bleed photographic hero. No gradients, no repeating patterns/textures, no hand-drawn illustrations anywhere on-site.
- **Imagery**: a single full-bleed aerial photo of Bournemouth beach as the homepage hero (warm sand, teal-green sea — coincidentally echoes the teal brand color) and plain circular headshot photography for the team section. Photography is real, warm-toned, coastal/local — not stock-corporate or heavily stylized. No filters/grain/duotone treatment observed.
- **Animation**: the live site has no visible custom animation beyond default Squarespace scroll fades. This system defines a short, standard ease (`--ease-standard`, ~120–320ms) for components but the brand is not animation-forward — keep motion subtle and functional (hover/press feedback only).
- **Hover states**: buttons darken one step (pink → darker pink) rather than lighten; ghost/outline buttons gain a soft tinted background. No underline-on-hover link style was observed on-site; this system uses a simple color shift for links.
- **Press states**: buttons scale down slightly (~0.97) for tactile feedback — not part of the source site but a sensible, restrained addition.
- **Borders**: thin (1–1.5px), low-contrast, navy-tinted gray — never black. Used sparingly, mostly on form fields and outline buttons.
- **Shadows**: soft, low-opacity, navy-tinted (never pure black) — a small sm/md/lg scale for cards and the booking dialog.
- **Corner radii**: soft and moderate (8–16px on cards/buttons) — confident but not pill-happy; badges/tags are the only fully-rounded (pill) elements.
- **Cards**: white surface, 1px subtle border, soft shadow, 16px radius; the "Popular" (VIP) service tier gets a 2px pink border and a small pink pill label instead of any left-border accent stripe.
- **Layout rules**: single-column marketing layout, sticky-feeling header (logo left, nav + CTA right), centered max-width content (~1200px), footer always dark navy with contact info + address.
- **Transparency/blur**: none observed on the live site. This system uses one subtle navy scrim gradient over the hero photo for text legibility — not a blur/glass effect.

## Iconography

The live Squarespace site uses no custom icon system — only a plain checkmark bullet list and the logomark. No icon font, SVG sprite, or icon library exists in the source to copy.

**Substitution**: this design system links the [Lucide](https://lucide.dev) icon set from CDN (`unpkg.com/lucide`) wherever a component needs a glyph (e.g. `IconButton`, phone/mail icons in the UI kit). Lucide was chosen for its plain, geometric, medium-stroke style that won't visually clash with the brand's clean, uncluttered look. **This is a flagged substitution** — if PLE has a preferred icon set, let us know and we'll swap it in `IconButton.jsx` and the CDN `<script>` tag.

No emoji or Unicode-glyph icons are used anywhere in this system, matching the source site.

## Fonts — flagged substitution

The live site is built on Squarespace and serves Squarespace's own licensed template fonts, which are not available as redistributable files. **Manrope** (display/headings) and **Public Sans** (body/UI) were chosen as the nearest open-license substitutes — both are clean geometric/grotesque sans faces in the same spirit as the site's look. Loaded via Google Fonts `@import` in `tokens/fonts.css`.

**Ask**: if you can share PLE's actual brand typeface files (or confirm the exact Squarespace template in use), send them over and we'll swap `tokens/fonts.css` to real `@font-face` rules.

## Components

Standard primitive set (brand-guidelines-only run — no component source to enumerate from):

- **Core** (`components/core/`): Button, IconButton, Badge, Tag, Card
- **Forms** (`components/forms/`): Input, Select, Checkbox, Radio, Switch
- **Feedback** (`components/feedback/`): Dialog, Toast, Tooltip
- **Navigation** (`components/navigation/`): Tabs

## UI kits

- **Website** (`ui_kits/website/`) — click-through recreation of the live 2-page marketing site (Home + About): header/nav, photographic hero, landlord-needs list, 3-tier service pricing, team section, contact bar, footer, and a "Book A Call" booking dialog.

## Index

- `styles.css` — root stylesheet, imports every token file (link this one file from consumers)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`
- `assets/` — `logo-raw.png` (logomark, transparent), `hero-1.jpg` (homepage hero photo), `team-1.png` / `team-2.jpg` / `team-3.png` (headshots)
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand) shown in the Design System tab
- `components/` — reusable primitives, grouped by concern (see above)
- `ui_kits/website/` — marketing website recreation
- `SKILL.md` — portable skill file for use in Claude Code / other agent contexts

## Intentional additions

- **IconButton** — not defined by any source (there is no source component library); added because icon-only actions (call, close, next) are a common need and Lucide is already loaded for the UI kit's phone/mail glyphs.
