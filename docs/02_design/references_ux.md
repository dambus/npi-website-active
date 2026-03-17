# References UX

## Listing Page Behavior

- Default view should be a grid because project cards need visual scanning and balanced metadata.
- On mobile, the grid should collapse to a single-column card stack.
- Filters should sit above the results on desktop and collapse into a compact control area on mobile.
- Search should be visible near filters and update the listing at the conceptual level without requiring a page reload.
- A sort control is optional; if included in v1, keep it limited to `Newest`, `Oldest`, and `Featured`.
- Empty states should explain that no references match the current query and offer a clear reset action.

## Filter Logic

- Category filters are the primary filter type.
- Filters should support a simple multi-select model conceptually, but v1 UI can launch with single-select if implementation simplicity is needed.
- Featured references should not be a user-facing filter by default; they are primarily editorial logic.
- Country or industry filters can be added later without changing the core information architecture.

## Search Behavior

- Search should match title and short description first.
- Search feedback should feel immediate and practical.
- When search is active, current filter context should remain visible.

## Card Content Hierarchy

1. Cover image
2. Project title
3. Short description
4. Key metadata row
5. Category tags

Recommended metadata order:

- location
- year
- industry or project phase

## Detail Page Content Hierarchy

1. Hero image or cover
2. Project title and short summary
3. Summary facts block
4. Full description area
5. Gallery
6. Related references block as optional later enhancement

## Featured References on Homepage

- Homepage should show a small curated set, ideally two to four items.
- Featured items should come from the same `projects` data model as the main listing.
- Editorial control should rely on `is_featured` plus optional `sort_order`.

## Likely Next Filter Set

- categories first
- year next
- industry after that if the dataset grows

## Future Portfolio Export Note

- A later version should allow users to select multiple references and export a PDF portfolio package.
- This is not part of Phase 4 implementation.
