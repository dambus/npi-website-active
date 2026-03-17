# Supabase Schema

## Current Workflow Context

Project is linked to Supabase project `vgmtiwzecmthhxoehvqr`.

Current remote state:

- `public` schema has no app tables yet
- base Supabase extensions are present
- local CLI workflow is configured to use `SUPABASE_DB_URL`

Environment variables used for Supabase:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_PROJECT_REF`
- `SUPABASE_DB_PASSWORD`
- `SUPABASE_DB_URL`

Important:

- never store database secrets in variables prefixed with `VITE_`
- `VITE_` variables are exposed to the frontend build

## Phase 4 Review Notes

- Current public references UI needs title, slug, short description, full description, investor/client label, location, country, year, industry, project phase, category labels, cover image path, and ordered gallery images.
- `project_images` remains the correct model for gallery content because the detail page already expects a 1-to-many ordered media set.
- `project_categories` plus `project_category_links` remains the right v1 structure because it supports the current category filter UI without forcing hard-coded enums.
- `news` is deferred from the first real migration. The public site does not yet need live news data, and deferring it keeps the first production schema tighter.
- Public read access is required for published content because the current public frontend reads directly from Supabase with the anon key.

## V1 Schema Draft

### `projects`

Purpose: store public reference/project entries for listings, featured homepage blocks, and future detail pages.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | `uuid` | yes | primary key |
| `title` | `text` | yes | public project title |
| `slug` | `text` | yes | unique route-safe identifier |
| `short_description` | `text` | yes | listing and teaser copy |
| `full_description` | `text` | no | longer project detail content |
| `investor` | `text` | no | client or investor label where publishable; used as the current client field in UI |
| `location` | `text` | no | city or site label |
| `country` | `text` | no | country label for filtering later |
| `year` | `integer` | no | project year or completion year |
| `industry` | `text` | no | simple industry descriptor |
| `project_phase` | `text` | no | concept, design, supervision, execution support, or similar |
| `featured_image_path` | `text` | no | path inside the `project-images` bucket for the main cover image |
| `is_featured` | `boolean` | yes | editorial homepage/reference emphasis |
| `is_published` | `boolean` | yes | public visibility control |
| `sort_order` | `integer` | no | optional manual ordering |
| `created_at` | `timestamptz` | yes | default `now()` |
| `updated_at` | `timestamptz` | yes | maintained on update |

### `project_images`

Purpose: store ordered gallery images per project.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | `uuid` | yes | primary key |
| `project_id` | `uuid` | yes | foreign key to `projects.id` |
| `image_path` | `text` | yes | storage path |
| `alt_text` | `text` | no | accessibility and editorial description |
| `sort_order` | `integer` | no | gallery order |

### `project_categories`

Purpose: provide reusable editorial categories for reference filtering.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | `uuid` | yes | primary key |
| `name` | `text` | yes | display label |
| `slug` | `text` | yes | unique filter key |

### `project_category_links`

Purpose: join projects to one or more categories.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `project_id` | `uuid` | yes | foreign key to `projects.id` |
| `category_id` | `uuid` | yes | foreign key to `project_categories.id` |

### `news`

Status: deferred from the first real migration.

Reason:

- public references are the only required live content module in Phase 4
- deferring `news` keeps schema, seed data, storage, and auth work narrower
- the table can be added later without changing the current references flow

## Relationship Summary

- `projects` 1-to-many `project_images`
- `projects` many-to-many `project_categories` through `project_category_links`
- `news` remains independent from `projects`, but it is deferred for the first real migration

## Required vs Optional Guidance

- Listing-critical fields should be required on `projects`: `title`, `slug`, `short_description`, `is_featured`, `is_published`, `created_at`, `updated_at`
- Detail and enrichment fields can stay optional initially: `full_description`, `investor`, `location`, `country`, `year`, `industry`, `project_phase`, `featured_image_path`
- Gallery images are optional at the project level, but `image_path` is required when an image row exists
- `news` field requirements are postponed until the module becomes active

## Publish and Editorial Fields

- `is_published` controls whether content can appear publicly
- `is_featured` plus `sort_order` controls homepage and curated listing emphasis
- project chronology can be driven by `year` and editorial sort without adding extra date complexity

## Public Read Policies

- `projects`: public `select` for published rows only
- `project_images`: public `select` only when the parent project is published
- `project_categories`: public `select` allowed
- `project_category_links`: public `select` only when the parent project is published

These policies support the current public frontend while keeping write access out of scope until admin auth is implemented.

## Phase 5 Temporary Admin Write Policies

- `authenticated` users can currently read and write `projects`
- `authenticated` users can currently read and write `project_images`
- `authenticated` users can currently read and write `project_category_links`
- `authenticated` users can read `project_categories`

This is an intentional v1 shortcut so the first admin CMS flow can operate before role-aware hardening is implemented.

## Indexing Recommendations

- unique index on `projects.slug`
- unique index on `project_categories.slug`
- index on `projects.is_published`
- index on `projects.is_featured`
- index on `projects.year`
- composite index on `project_images(project_id, sort_order)`
- composite unique key or index on `project_category_links(project_id, category_id)`
- optional later text search index on project title and short description if search complexity grows

## Recommended Workflow

1. Create a new migration with `npx supabase migration new <name>`
2. Edit the SQL in `supabase/migrations`
3. Push schema changes with `npm run supabase:push`
4. Refresh TypeScript types with `npm run supabase:types`

Useful commands:

- `npm run supabase:migrations`
- `npm run supabase:pull`
- `npm run supabase:push`
- `npm run supabase:types`

Notes:

- `supabase db pull` is working via explicit `SUPABASE_DB_URL`
- `supabase gen types --project-id ...` is the most reliable type generation path in this environment
