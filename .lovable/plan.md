## Palette swap + Definitions tile

Two changes, both narrow.

### 1. Palette: Emerald Prestige → Navy Trust

Update the token values in `src/styles.css` only — every component already reads through `--emerald` / `--emerald-soft` / `--emerald-deep` / `--gold` / `--gold-soft` / `--cream` / `--mist`, so remapping the raw hex values propagates site-wide with no component edits.

- `--emerald` → `#0f1b3d` (deep navy, primary/foreground)
- `--emerald-soft` → `#1e3a5f` (mid navy, secondary bands & hover)
- `--emerald-deep` → `#0a1229` (darkest navy, for hover fills on dark tiles)
- `--gold` → `#3b6fa0` (steel-blue accent — the palette's tertiary; replaces gold for links, rules, active underline)
- `--gold-soft` → `#5c8cbf` (lighter steel-blue for hover)
- `--cream` → `#e8edf3` (cool ivory, background)
- `--mist` → `#dbe3ec` (slightly cooler muted band)
- `--card` → `#f2f5f9` (near-cream card surface)

Keep aliases (`--color-navy`, `--color-ivory`) as-is — they already point at the same tokens.

Rename the semantic Tailwind color exports so classnames stay readable:
- Add `--color-navy` → `var(--emerald)` (already there), `--color-navy-soft` → `var(--emerald-soft)` (already there).
- Keep `--color-emerald` / `--color-emerald-soft` / `--color-emerald-deep` / `--color-gold` / `--color-gold-soft` / `--color-cream` names intact so no component needs editing. The names become historical labels for tokens that now carry navy values — acceptable trade-off to keep the diff to a single file.

Also update `::selection` background to the new accent (`#3b6fa0`) with cream text.

### 2. Homepage tile: "Peer-Reviewed Articles" → "Definitions & Glossary"

In `src/routes/index.tsx`, change the first entry of the `journal` array:
- `title: "Definitions & Glossary"`
- `meta: "Reference"`
- `to: "/guides"` (keeps routing to the existing guides page — no new route needed for a one-tile swap)

No other copy changes.

### Technical notes

- Single edit to `src/styles.css` handles the entire color remap.
- Single edit to `src/routes/index.tsx` handles the tile swap.
- No component, route, or dependency changes.
