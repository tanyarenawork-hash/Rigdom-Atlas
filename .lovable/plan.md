## Change

Convert `/guides` from an article list to a financial literacy glossary.

### Edits (single file: `src/routes/guides.tsx`)

1. Update `head()` meta: title "Financial Glossary — Rigdom Atlas"; description around plain-language definitions of essential personal-finance terms; matching og:title/og:description.
2. Update `PageHero`: eyebrow "Financial Glossary", title "Essential terms in personal finance, defined plainly.", intro about clear reference definitions across the eight pillars.
3. Replace the `guides` array with a `terms` array of ~24 entries shaped `{ cat, term, definition }` spanning Budgeting, Credit, Saving, Investing, Taxes, Real Estate, Entrepreneurship, Financial Planning. Examples:
   - Budgeting — "Zero-Based Budget": Every dollar of income is assigned to a category so income minus allocations equals zero.
   - Credit — "APR": The yearly cost of borrowing, expressed as a percentage that includes interest and certain fees.
   - Investing — "Index Fund": A fund that mirrors a market index, offering broad diversification at low cost.
   - Taxes — "Marginal Tax Rate": The tax rate applied to your next dollar of income, not your entire income.
   - Real Estate — "Escrow": A neutral account holding funds or documents until the terms of a transaction are met.
   - Entrepreneurship — "Pass-Through Entity": A business whose profits are taxed on the owner's personal return rather than at the entity level.
   - Financial Planning — "Term Life Insurance": Coverage for a fixed period that pays a benefit only if death occurs within that term.
   (Full set drafted at build time; ~3 per pillar.)
4. Replace the article row markup: keep the same rounded bordered list container, but each row shows category eyebrow, `term` as the serif headline, and the `definition` as a paragraph beneath it. Remove the read-time span and the `ArrowUpRight` circular affordance (and its import) — glossary entries are not linked.
5. Keep `Section`, `Disclaimer`, and overall spacing unchanged.

### Out of scope

No routing, nav, or palette changes. No new files.
