## Change

Remove the entire Curricula / Learning Paths section from the website and scrub all references to the word "curricula/curriculum" from published copy.

### Edits

1. Delete `src/routes/learning-paths.tsx` and regenerate the TanStack Router route tree so `/learning-paths` no longer exists.
2. Remove the "Curricula" link from the main navigation in `src/components/site/Nav.tsx`.
3. Remove the "Curriculum" footer column in `src/components/site/Footer.tsx`, merge the Journal link into the Library column, and switch the link grid to two columns. Update the footer description and copyright to use "resources" / "framework" instead of "curricula" / "curriculum".
4. Update the homepage in `src/routes/index.tsx`:
   - Replace the "Enter the Curriculum" hero CTA with a "Read the Journal" primary link and an "Explore Instruments" secondary link.
   - Rename the Eight Pillars eyebrow from "The Core Curriculum" to "The Eight Pillars" and the heading from "The Eight Pillars of Finance" to "Foundations of Finance".
   - Replace "curricula" with "frameworks" in the SEO meta description and OpenGraph description.
5. Remove the `/learning-paths` entry from `src/routes/sitemap[.]xml.ts`.
6. Update `src/routes/__root.tsx` OpenGraph description to say "frameworks" instead of "curricula".
7. Update `src/routes/resources.tsx` ChFC description to say "deep coursework" instead of "deep curriculum".

### Out of scope

No other content or page changes. The `/guides` glossary, `/tools`, `/resources`, and other pages remain as-is.