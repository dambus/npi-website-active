# NPI Website — Codex Phase 4 Checklist

Purpose of this document:
Implement the first real Supabase-backed data layer for the public website, replacing mock reference data with production-minded structure.

This phase is focused on:
- creating database migrations
- defining storage buckets and media rules
- wiring public references pages to Supabase
- keeping admin UI/auth still limited in scope
- documenting future portfolio PDF export without building it yet

Important design note carried from review:
The current public UI concept is acceptable, but it still feels too template-like. In future UI refinement phases, reduce visual clutter, increase whitespace, rely more on full-width section backgrounds, prefer straighter/sharper geometry over excessive rounded cards, and allow selective use of irregular layers, transparency, and more contemporary composition. Do NOT do a full visual redesign in this phase, but avoid adding more cramped card-heavy patterns.

Codex must:
- follow this checklist sequentially
- mark completed tasks
- keep changes production-minded and minimal
- avoid starting full CMS CRUD
- avoid overbuilding admin features
- avoid a broad visual redesign in this phase

---

# Phase 1 — Schema Review and Migration Plan

Goal: finalize the database structure from the existing schema draft before wiring UI to real data.

Create or update:
- [x] `docs/03_tech/supabase_schema.md`
- [x] `supabase/migrations/` initial migration files

Tasks:
- [x] Re-review schema against the current References listing and Reference detail UI
- [x] Confirm `projects` table fields match current public UI needs
- [x] Confirm `project_images` relationship model
- [x] Confirm `project_categories` and `project_category_links`
- [x] Decide whether `news` should be included now or deferred
- [x] Record any field changes in schema docs before writing SQL
- [x] Write initial migration SQL for the approved tables
- [x] Add sensible constraints and defaults
- [x] Add created/updated timestamps where appropriate

Expected result:
A documented and implemented migration plan aligned with the current public references experience.

---

# Phase 2 — Database Tables and Indexing

Goal: create real database structure for references content.

Implement via migration:

- [x] `projects`
- [x] `project_images`
- [x] `project_categories`
- [x] `project_category_links`
- [x] optional `news` if still justified after review

For `projects`, verify fields such as:
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

Tasks:
- [x] Add unique constraint on slug
- [x] Add indexes for frequently queried fields such as slug, is_published, is_featured, year
- [x] Ensure join table relationships are clean
- [x] Keep schema simple and practical for v1

Expected result:
Database is ready to store references content in a production-minded way.

---

# Phase 3 — Storage Strategy Implementation

Goal: prepare Supabase Storage to support project media.

Create or update:
- [x] `docs/03_tech/storage_strategy.md`

Tasks:
- [x] Confirm `project-images` bucket naming
- [x] Confirm optional `news-images` bucket strategy
- [x] Create storage buckets if managed through CLI or document exact dashboard setup if not
- [x] Define path naming conventions in docs:
  - `projects/{project-slug}/cover/...`
  - `projects/{project-slug}/gallery/...`
- [x] Decide whether assets are public in v1 or signed/protected later
- [x] Record policy implications for future admin upload work

Expected result:
Media storage is ready and consistently documented.

---

# Phase 4 — Seed Data Strategy

Goal: move from mock references toward real or semi-real seeded data.

Create or update:
- [x] `docs/03_tech/seed_strategy.md`
- [x] seed SQL or seed script if appropriate

Tasks:
- [x] Decide whether to seed from current mock data first
- [x] Preserve slugs already used in public routes where possible
- [x] Seed enough projects to validate listing/detail/filter behavior
- [x] Seed example categories if categories are implemented now
- [x] Keep seed content clean and realistic
- [x] Document how future real data import could work

Expected result:
A reliable starter dataset exists in Supabase for public page integration.

---

# Phase 5 — Frontend Data Access Layer

Goal: create a clean service layer instead of calling Supabase directly inside pages.

Create or update:
- [x] `src/services/projects/`
- [x] `src/services/projects/getProjects.ts`
- [x] `src/services/projects/getProjectBySlug.ts`
- [x] optional supporting mapper/type helpers

Tasks:
- [x] Create typed fetch function for published projects listing
- [x] Create typed fetch function for project by slug
- [x] Keep Supabase queries out of page components as much as possible
- [x] Normalize returned shapes for UI use
- [x] Handle null/error states cleanly
- [x] Keep implementation simple and readable

Expected result:
Public pages can consume project data through a clean service layer.

---

# Phase 6 — Replace Mock Data on References Listing

Goal: make the References page use real Supabase content.

Update:
- [x] `src/pages/public/ReferencesPage.tsx`
- [x] any supporting components/hooks/types

Tasks:
- [x] Replace static mock project list with Supabase-backed data flow
- [x] Fetch published projects only
- [x] Preserve current page structure and UX as much as possible
- [x] Keep current filters/search UI as placeholder if not implemented yet
- [x] Add loading state
- [x] Add empty state
- [x] Add graceful error state

Expected result:
References listing page reads real project data from Supabase.

---

# Phase 7 — Replace Mock Data on Reference Detail Page

Goal: make the Reference detail page use real Supabase content.

Update:
- [x] `src/pages/public/ReferenceDetailPage.tsx`
- [x] route-level data handling as needed

Tasks:
- [x] Fetch project by slug from Supabase
- [x] Load related gallery images if available
- [x] Render not-found state for missing or unpublished slugs
- [x] Preserve current detail layout unless small adjustments are needed
- [x] Add loading and error states

Expected result:
Reference detail page is fully backed by real data.

---

# Phase 8 — Prepare Category and Filter Foundations

Goal: support future richer filtering without overbuilding UI now.

Tasks:
- [x] Decide whether category data should be fetched now or deferred
- [x] If implemented now, create typed category query helper
- [x] Keep current filter UI simple
- [x] Ensure schema and service layer allow future filters by category/year/industry
- [x] Document the likely next filter set in `docs/02_design/references_ux.md`

Important:
Do not build advanced filtering logic unless necessary for the current references flow.

Expected result:
The project is ready for richer filtering in a later phase without needing schema rework.

---

# Phase 9 — Portfolio PDF Export Planning Note

Goal: document a future feature requested for the references module.

Create or update:
- [x] `docs/03_tech/portfolio_export_plan.md`
- [x] `docs/02_design/references_ux.md`

Tasks:
- [x] Document future feature: user can select multiple references and generate a PDF portfolio
- [x] Record that this is not implemented in Phase 4
- [x] Note likely requirements:
  - selection state in references listing
  - export action/button
  - formatted PDF output
  - curated reference summary content
- [x] Note likely technical directions for later evaluation

Expected result:
The portfolio export feature is captured and will not be forgotten later.

---

# Phase 10 — Minimal Auth Transition Planning

Goal: prepare the codebase for real admin auth soon without implementing full admin features yet.

Create or update:
- [x] `docs/03_tech/cms_rules.md`
- [x] `docs/00_project/roadmap.md`

Tasks:
- [x] Reconfirm `/admin` remains hidden from public navigation
- [x] Reconfirm intended login method: email/password
- [x] Define the first real auth tasks for next phase:
  - session detection
  - login
  - logout
  - route protection
- [x] Keep current scaffold in place unless a tiny refactor is needed for later compatibility
- [x] Do not build CRUD screens yet

Expected result:
Auth direction is ready for the next phase.

---

# Phase 11 — Documentation and Execution Sync

Goal: keep project documentation aligned with implementation.

Create or update:
- [x] `docs/04_execution/backlog.md`
- [x] `docs/04_execution/current_sprint.md`
- [x] `docs/04_execution/changelog.md`
- [x] `docs/04_execution/current_step.md`
- [x] `docs/04_execution/prompts_codex.md`

Tasks:
- [x] Log migration and wiring tasks in backlog
- [x] Update current sprint to reflect real data integration work
- [x] Record completed Supabase integration steps in changelog
- [x] Update current step as work progresses
- [x] Add reusable prompts for migration generation and data wiring

Expected result:
Implementation progress remains easy to track.

---

# Phase 12 — Verification

Goal: confirm data-backed public references flow works correctly.

Tasks:
- [x] Run migrations successfully
- [x] Confirm tables exist in Supabase
- [x] Confirm seeded data is visible
- [x] Run app locally
- [x] Verify references listing loads real data
- [x] Verify at least one reference detail route loads by slug
- [x] Verify loading / empty / error / not-found states behave correctly
- [x] Ensure project still builds successfully

Commands:
```bash
supabase migration up
npm run dev
npm run build
```

If local Supabase workflow differs, document the exact commands used.

Expected result:
References module is backed by real Supabase data and stable enough for the next phase.

---

# Phase 4 Complete

If all steps above are completed, the project is ready for the next implementation phase:
- real admin authentication
- admin-side project management
- media upload flows
- richer references filtering
- eventual portfolio PDF export
