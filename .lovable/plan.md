## Change

Hide the Lovable "Edit with Lovable" badge on the published website.

### Implementation

1. Call `publish_settings--set_badge_visibility` with `hide_badge: true` to remove the Lovable icon/badge from the published site.
2. Verify the badge is gone by taking a fresh screenshot of the live homepage.

### Out of scope

No component, route, style, or content changes.