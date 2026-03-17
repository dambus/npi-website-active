# NPI Website — Codex Phase 2 Checklist

Purpose of this document:
Track progress of the next project phase after foundation setup.

This phase is focused on:
- locking v1 content scope
- defining homepage structure
- defining design direction
- defining initial Supabase CMS schema
- preparing the project for real page implementation

Codex should complete tasks **in order** and mark items as done.

---

# Phase 1 — Small Foundation Corrections

Goal: clean up a few minor implementation details before building real content and UI.

- [x] Update `SectionHeading` so it supports semantic heading levels via prop:
  - `as?: 'h1' | 'h2' | 'h3'`
  - default should be `h2`
- [x] Update all current usages of `SectionHeading` to use correct heading levels
- [x] Replace placeholder `siteConfig` values with more realistic NPI temporary values where known
- [x] Add note in `docs/00_project/decisions.md` that current admin auth is scaffold-only and must be replaced later with real Supabase auth
- [x] Verify app still builds and routes still work after these cleanup changes

Expected result:
Foundation remains stable and semantically cleaner for the next build phase.

---

# Phase 2 — Finalize Sitemap v1

Goal: lock the information architecture for version 1 of the public site.

Create or update:
- [x] `docs/01_content/sitemap.md`

Tasks:
- [x] Define final public navigation for v1
- [x] Keep structure shallow and simple
- [x] Confirm these main pages for v1:
  - Home
  - About
  - Services
  - References
  - Contact
- [x] Record that News remains a module in v1, not a standalone main page
- [x] Define expected future extensibility without adding it to v1 navigation
- [x] Add short reasoning for each page and why it exists

Expected result:
A locked sitemap that supports a concise corporate website focused on references and credibility.

---

# Phase 3 — Content Inventory by Page

Goal: define exactly what content belongs on each public page.

Create or update:
- [x] `docs/01_content/content_inventory.md`

Tasks:
- [x] Create a section for each main page
- [x] For each page, list required content blocks
- [x] Mark each content block as one of:
  - `static`
  - `supabase-driven`
  - `optional`
- [x] Keep copy concise and presentation-focused
- [x] Avoid long-form marketing copy

Minimum page inventory should include:

### Home
- [x] Hero
- [x] Quick facts
- [x] Services snapshot
- [x] Process / delivery model
- [x] Featured references
- [x] Quality / technology block
- [x] Contact CTA
- [x] Optional news module

### About
- [x] Company overview
- [x] Key facts
- [x] Organization / departments overview
- [x] Engineering capacity / expertise snapshot
- [x] Why clients work with NPI

### Services
- [x] Services overview intro
- [x] Main service groups
- [x] Supporting services / capabilities
- [x] Project lifecycle support

### References
- [x] Listing intro
- [x] Filters
- [x] Search
- [x] Featured or latest references
- [x] Grid/list of references

### Contact
- [x] Contact information
- [x] Address/location
- [x] Main inquiry CTA
- [x] Optional map placeholder

Expected result:
Clear page-by-page scope that can be directly used for implementation.

---

# Phase 4 — Homepage Blueprint

Goal: define the exact homepage section order and purpose before final UI implementation.

Create or update:
- [x] `docs/02_design/homepage_blueprint.md`

Tasks:
- [x] Define homepage section order
- [x] Explain purpose of each section
- [x] Define what the user should understand after each section
- [x] Keep the homepage concise, corporate, and visually paced

Recommended order to document:
- [x] Hero
- [x] Quick facts
- [x] Services snapshot
- [x] Process / journey from concept to execution
- [x] Featured references
- [x] Quality / technology / software block
- [x] Contact CTA
- [x] Optional news snippet

For each homepage section include:
- [x] section name
- [x] objective
- [x] approximate content length
- [x] suggested UI pattern
- [x] data source (`static` or `supabase-driven`)

Expected result:
A page-level blueprint that removes ambiguity before design/build work starts.

---

# Phase 5 — Design Direction v1

Goal: define a strong design system direction based on NPI brand and selected corporate template references.

Create or update:
- [x] `docs/02_design/design_direction.md`

Tasks:
- [x] Define the visual tone: premium industrial / clean corporate / technical credibility
- [x] Define brand usage based on NPI logo colors
- [x] Define neutral supporting colors
- [x] Define spacing philosophy
- [x] Define typography rules
- [x] Define section rhythm rules
- [x] Define card style rules for references/services
- [x] Define image usage rules
- [x] Define motion/animation rules (minimal and restrained)
- [x] Define content discipline rules (short, factual, non-boastful)

Document should include:
- [x] design goals
- [x] what to emulate from selected template references at a high level
- [x] what to avoid
- [x] homepage mood
- [x] references page mood
- [x] admin UI mood (simple and practical, not branded-heavy)

Expected result:
A practical visual brief that can guide Codex without forcing pixel-perfect imitation.

---

# Phase 6 — References UX Definition

Goal: define how the most important website module should behave before implementation.

Create or update:
- [x] `docs/02_design/references_ux.md`

Tasks:
- [x] Define references listing page behavior
- [x] Define filter logic at conceptual level
- [x] Define search behavior at conceptual level
- [x] Define card content hierarchy
- [x] Define detail page content hierarchy
- [x] Define featured references behavior on homepage

Reference listing decisions should cover:
- [x] grid vs list default
- [x] mobile behavior
- [x] filter placement
- [x] sort options if needed
- [x] empty state behavior

Reference detail decisions should cover:
- [x] hero image/cover
- [x] summary facts block
- [x] full description area
- [x] gallery behavior
- [x] related references block (optional later)

Expected result:
References module is clearly defined before data wiring starts.

---

# Phase 7 — Supabase CMS Schema Draft v1

Goal: prepare the initial data model for references/projects and optional news.

Create or update:
- [x] `docs/03_tech/supabase_schema.md`

Tasks:
- [x] Define `projects` table
- [x] Define `project_images` table
- [x] Define `project_categories` table
- [x] Define `project_category_links` table
- [x] Define `news` table
- [x] Define key relationships
- [x] Define required fields vs optional fields
- [x] Define publish/visibility fields
- [x] Define featured flags and ordering fields
- [x] Define basic indexing recommendations

For `projects`, include fields such as:
- [x] id
- [x] title
- [x] slug
- [x] short_description
- [x] full_description
- [x] investor
- [x] location
- [x] country
- [x] year
- [x] industry
- [x] project_phase
- [x] featured_image_path
- [x] is_featured
- [x] is_published
- [x] sort_order
- [x] created_at
- [x] updated_at

For `project_images`, include:
- [x] id
- [x] project_id
- [x] image_path
- [x] alt_text
- [x] sort_order

For `project_categories`, include:
- [x] id
- [x] name
- [x] slug

For `project_category_links`, include:
- [x] project_id
- [x] category_id

For `news`, include:
- [x] id
- [x] title
- [x] slug
- [x] excerpt
- [x] body
- [x] cover_image_path
- [x] is_published
- [x] published_at
- [x] created_at
- [x] updated_at

Expected result:
The CMS data model is clearly documented and ready for migration planning.

---

# Phase 8 — Storage Strategy

Goal: define how media files should be organized in Supabase Storage.

Create or update:
- [x] `docs/03_tech/storage_strategy.md`

Tasks:
- [x] Define storage bucket names
- [x] Define path naming conventions
- [x] Define which content types use which bucket
- [x] Define public vs protected asset strategy
- [x] Note future policy requirements

Recommended starting structure:
- [x] `project-images` bucket
- [x] `news-images` bucket

Recommended naming rules:
- [x] `projects/{project-slug}/cover/...`
- [x] `projects/{project-slug}/gallery/...`
- [x] `news/{news-slug}/cover/...`

Expected result:
Media handling is consistent before upload functionality is implemented.

---

# Phase 9 — CMS/Auth Planning Notes

Goal: document the intended auth and admin access approach before implementation.

Create or update:
- [x] `docs/03_tech/cms_rules.md`

Tasks:
- [x] Define that `/admin` is a hidden route, not linked from public navigation
- [x] Define intended login method for v1 (email/password)
- [x] Define initial roles at conceptual level:
  - super admin
  - editor
- [x] Define that role enforcement may begin in app logic and later expand into database/RLS policy strategy
- [x] Define minimum admin capabilities for v1
- [x] Record that current ProtectedRoute is temporary scaffold only

Expected result:
Admin access direction is documented before real auth work begins.

---

# Phase 10 — Update Project Brief and Decisions

Goal: keep project documentation aligned with the decisions made in this phase.

Create or update:
- [x] `docs/00_project/brief.md`
- [x] `docs/00_project/decisions.md`
- [x] `docs/00_project/roadmap.md`

Tasks:
- [x] Update brief to reflect locked v1 scope
- [x] Add decisions made about sitemap, homepage, CMS boundaries, and references priority
- [x] Update roadmap to reflect the next build sequence
- [x] Ensure docs are consistent with one another

Expected result:
Project documentation stays aligned and usable as the source of truth.

---

# Phase 11 — Execution Planning for Next Build

Goal: prepare implementation planning without starting full UI build yet.

Create or update:
- [x] `docs/04_execution/backlog.md`
- [x] `docs/04_execution/current_sprint.md`
- [x] `docs/04_execution/changelog.md`
- [x] `docs/04_execution/prompts_codex.md`

Tasks:
- [x] Add next implementation tasks to backlog
- [x] Create a focused current sprint for the next build phase
- [x] Log this documentation phase in changelog
- [x] Add reusable prompts for homepage build, references build, and schema implementation

Expected result:
The next phase can begin with clear execution planning.

---

# Phase 12 — Verification

Before moving into implementation:

- [x] Review all newly created docs for consistency
- [x] Confirm sitemap and content inventory do not contradict each other
- [x] Confirm homepage blueprint matches the locked content strategy
- [x] Confirm Supabase schema draft matches references UX needs
- [x] Confirm roadmap/backlog/current sprint are aligned
- [x] Run the app and verify no cleanup changes broke anything

Commands:

```bash
npm run dev
npm run build
```

Expected result:
The project is ready to move from planning into real homepage and references implementation.

---

# Phase 2 Complete

If all steps above are completed, the project is ready for the next implementation phase:
- homepage real build
- about/services/contact real build
- references listing UI
- Supabase migration draft
- real CMS/auth implementation planning
