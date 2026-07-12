## Change

Remove the office and editorial contact details from the `/contact` page without changing anything else.

### Edits (single file: `src/routes/contact.tsx`)

1. Remove the entire `<aside>` element containing the Editorial email and Office address blocks.
2. Remove the now-unused `Mail` and `MapPin` imports from `lucide-react`.
3. Remove the `lg:grid-cols-12` wrapper and `lg:col-span-8` class from the form so the contact form fills the available width after the aside is removed.
4. Keep the `PageHero`, form fields, submit behavior, and `Disclaimer` exactly as they are.

### Out of scope

No other pages, navigation, or content changes.