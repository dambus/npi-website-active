# Prompts For Codex

Use these prompts to keep work aligned with the project path.

## Continue Phase 2 Checklist

Continue from the first unchecked item in `docs/04_execution/npi_codex_phase_2_checklist.md`, complete tasks sequentially by phase, update related docs as you go, mark completed checkboxes, and summarize what changed after each phase.

## Homepage Build

Build the real public homepage using `docs/02_design/homepage_blueprint.md`, `docs/02_design/design_direction.md`, and `docs/01_content/content_inventory.md`. Keep the UI concise, premium industrial, and aligned with the NPI brief. Do not start CMS CRUD in the same pass.

## References Build

Build the references listing experience using `docs/02_design/references_ux.md`, `docs/01_content/content_inventory.md`, and `docs/03_tech/supabase_schema.md`. Start with UI structure and mock data wiring only if real backend work is not explicitly requested.

## Schema Implementation

Implement the first Supabase migration for projects, project images, categories, category links, and optional news using `docs/03_tech/supabase_schema.md` and `docs/03_tech/storage_strategy.md`. Afterward, update schema docs and regenerate TypeScript types.

## References Data Wiring

Replace mock references data with live Supabase reads using the existing schema docs and service-layer pattern in `src/services/projects/`. Keep page components simple, add loading/empty/error states, and avoid starting admin CRUD.

## Admin Auth Start

Implement the first real `/admin` auth flow using Supabase Auth with email/password, session detection, login, logout, and route protection. Keep the scope narrow and do not build broad CRUD screens in the same pass.

## Admin CMS Verification

Verify the admin CMS foundation against Supabase by checking protected routes, project CRUD helpers, category assignment, uploads, and publish/featured state behavior. If a real admin user is not yet provisioned, document that verification gap explicitly instead of pretending it is complete.
