## Change

Remove the office and editorial contact details from the `/contact` page without changing anything else.

### Edits (single file: `src/routes/contact.tsx`)

1. Remove the entire `<aside>` element containing the Editorial email and Office address blocks.
2. Remove the now-unused `Mail` and `MapPin` imports from `lucide-react`.
3. Keep the `PageHero`, contact form, and `Disclaimer` exactly as they are.

### Out of scope

No other pages, navigation, or content changes.