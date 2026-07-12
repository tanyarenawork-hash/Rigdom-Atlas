## Redesign: Editorial Institution

Move Rigdom Atlas from generic minimalism to a nonpartisan-institute editorial voice — deep emerald + champagne gold, Instrument Serif display + Work Sans body, full-width stacked bands with quiet gold hairlines.

### 1. Design tokens (`src/styles.css`)

Replace the ivory/navy/soft-gold palette with the locked Emerald Prestige values, and swap font families:

- `--ivory` → `#f5f0e0` (paper cream)
- `--emerald` → `#064e3b` (primary, foreground)
- `--emerald-soft` → `#0d7a5f` (secondary bands, hover)
- `--gold` → `#c9a84c`, `--gold-soft` → `#d4b96a`
- Remove `--navy` / `--navy-soft`; migrate existing references to `--emerald` / `--emerald-soft`.
- `--background: var(--ivory)`, `--foreground: var(--emerald)`, `--primary: var(--emerald)`, `--accent: var(--gold)`, `--muted: color-mix(in oklab, var(--emerald) 6%, var(--ivory))`.
- `--font-serif: "Instrument Serif", "Iowan Old Style", Georgia, serif` (allow italic 0/1 axis).
- `--font-sans: "Work Sans", ui-sans-serif, system-ui, sans-serif`.
- Tune `h1/h2/h3` letter-spacing to `-0.01em` and remove `ss01`/`cv11` OpenType features (Instrument Serif ignores them; Work Sans has no `ss01`).
- Keep `container-page`, `eyebrow`, `gold-rule` utilities; retune `eyebrow` color to `--emerald-soft`.

### 2. Fonts (`src/routes/__root.tsx` head)

Swap the Fraunces + Inter `<link>` for:
`https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600;700&display=swap`

Update the `<title>` and og tags to lean into "Institute for Financial Literacy" phrasing.

### 3. Global chrome

- **`Nav.tsx`** — replace the round navy "R" mark with a serif "R · A" monogram in emerald, thin hairline under the header, subscribe button becomes gold on emerald text. Active link uses a 1px gold underline instead of color swap.
- **`Footer.tsx`** — restructure to editorial masthead: oversized "Rigdom Atlas" wordmark in Instrument Serif, columns (Sections / Learn / Institute / Legal), roman-numeral copyright line and disclaimer in the small uppercase caption style from the prototype.
- **`Section.tsx`** — replace with two variants matched to the prototype: `<Band>` (full-width stacked section, optional `tone="emerald" | "cream" | "paper"`) and keep `PageHero` but restyle to the centered display treatment.

### 4. Homepage (`src/routes/index.tsx`) — mirrors prototype exactly

Bands in order, each edge-to-edge with hairline dividers:

1. **Hero** — centered eyebrow "Established for the Public Good", oversized Instrument Serif "Rigdom Atlas" (text-6xl → text-9xl), single subhead paragraph. Two ghost CTAs beneath (Start Learning / Explore the Journal).
2. **Eight Pillars** — cream ground, section title with 24px gold rule, 4-column grid (2 on tablet, 1 mobile), each pillar: italic gold numeral, uppercase Work Sans heading, small emerald/70 description. Reuse existing eight topics, retitled to match prototype's institutional voice (Financial Mindset, Budgeting & Flow, Saving & Liquidity, Credit & Debt, Investment Strategy, Risk Management, Tax Optimization, Legacy Planning).
3. **The Atlas Journal** — deep emerald band, cream text, header row with title + "View Full Archive" gold-underline link, 4 square outlined tiles (Peer-Reviewed Articles, Financial Calculators, Professional Certifications, The Atlas Dispatch) with hover→gold border and arrow.
4. **Editorial Mission** — centered italic Instrument Serif pull quote, followed by the 501(c)(3) mission paragraph.
5. **Newsletter + Disclaimer** — emerald-soft (`#0d7a5f`) block with inline email input + gold "Enroll" button; below it, two-column uppercase 10px caption row with disclaimer left and MMXXIV copyright right.

### 5. Interior route restyling (pass, not rewrite)

Apply the new tokens + `<Band>` component to `about`, `guides`, `learning-paths`, `resources`, `tools`, `newsletter`, `contact`. Replace `PageHero` usages with the new centered treatment. Convert existing card grids to the outlined-square tile pattern where appropriate (guides index, resources). Keep tool calculator logic untouched — only restyle the surrounding chrome, inputs, and result blocks (emerald border-bottom inputs, gold accent for computed values).

### 6. Disclaimer component

Restyle `Disclaimer.tsx` to the small-uppercase caption style (10px, 0.2em tracking, emerald/50) so it reads as institutional footnote across every page.

### Technical notes

- All colors flow through the `@theme inline` tokens — no `bg-[#...]` literals in components.
- The prototype's inline `style="font-family: …"` becomes the global `font-serif` / body defaults; components use `font-serif` class only where display type is needed.
- Header stays sticky; hairline below turns from `border-b` to `border-b border-emerald/10` via the `--border` token remap.
- No new packages, no route changes, no calculator logic edits.
