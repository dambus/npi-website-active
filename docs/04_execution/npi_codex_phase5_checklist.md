# NPI Website — Codex Phase 5 Checklist

Purpose of this document:
Implement the first real admin/CMS foundation for managing project references inside the same application.

This phase is focused on:
- replacing scaffold auth with real Supabase auth
- building a practical hidden `/admin` area
- creating project management CRUD foundation
- supporting category assignment and publish state
- supporting cover and gallery image upload
- keeping scope tight and production-minded

Important scope note:
This phase is about **admin authentication + project CMS foundation**.
Do NOT build a complete design system for admin.
Do NOT build advanced permissions/RLS complexity unless clearly needed.
Do NOT build news CMS yet.
Do NOT build portfolio PDF export yet.

Codex must:
- follow this checklist sequentially
- mark completed tasks
- keep the code simple and maintainable
- avoid overengineering
- prefer practical admin UX over decorative UI

---

# Phase 1 — Auth Strategy Lock

Goal: confirm the exact authentication approach before implementation.

Create or update:
- [x] `docs/03_tech/cms_rules.md`
- [x] `docs/00_project/roadmap.md`

Tasks:
- [x] Confirm admin login method for v1: Supabase email/password
- [x] Confirm `/admin` stays hidden from public navigation
- [x] Confirm initial roles remain conceptual only for now:
  - super admin
  - editor
- [x] Decide whether role checks are app-level only in v1
- [x] Record what is explicitly out of scope for this phase
- [x] Document future RLS/role-hardening direction without implementing full complexity now

Expected result:
The admin auth direction is locked and documented.

---

# Phase 2 — Supabase Auth Setup

Goal: enable real authentication in the app.

Create or update:
- [x] `src/lib/supabase.ts`
- [x] auth-related helpers/hooks/context as needed

Tasks:
- [x] Add real login flow using Supabase auth
- [x] Add session detection on app load
- [x] Add logout capability
- [x] Add auth state listener if needed
- [x] Keep implementation minimal and readable
- [x] Avoid spreading auth logic chaotically across pages

Recommended structure:
- [x] `src/services/auth/`
- [x] `src/hooks/` or small auth provider if needed

Expected result:
The app can sign in and sign out real admin users.

---

# Phase 3 — Replace ProtectedRoute Scaffold

Goal: replace placeholder auth guard with real session-aware protection.

Create or update:
- [x] `src/routes/ProtectedRoute.tsx`

Tasks:
- [x] Remove hardcoded `isAuthenticated = false`
- [x] Redirect unauthenticated users to `/admin/login`
- [x] Allow authenticated users into `/admin`
- [x] Add loading state while auth status is resolving
- [x] Prevent route flicker if possible
- [x] Ensure logic stays simple and dependable

Expected result:
Admin routes are protected by real auth state.

---

# Phase 4 — Admin Login Flow

Goal: build a working admin login page.

Create or update:
- [x] `src/pages/admin/AdminLoginPage.tsx`

Tasks:
- [x] Create email field
- [x] Create password field
- [x] Add submit action
- [x] Show loading state during login
- [x] Show friendly error message on failed login
- [x] Redirect authenticated user to `/admin`
- [x] Redirect already-authenticated visitors away from login page
- [x] Keep UI simple, clear, and practical

Expected result:
Admins can log in from `/admin/login`.

---

# Phase 5 — Admin Layout Foundation

Goal: make the admin area usable for real content work.

Create or update:
- [x] `src/layouts/AdminLayout.tsx`
- [x] admin navigation components as needed

Tasks:
- [x] Add simple admin header/sidebar/nav structure
- [x] Add link to Projects section
- [x] Add logout action
- [x] Add clear page content area
- [x] Keep admin styling restrained and utility-focused
- [x] Ensure responsive usability for laptop-sized screens

Expected result:
Admin area feels like a practical internal tool.

---

# Phase 6 — Admin Route Structure

Goal: prepare route structure for project management.

Create or update:
- [x] `src/routes/router.tsx`

Add routes such as:
- [x] `/admin`
- [x] `/admin/projects`
- [x] `/admin/projects/new`
- [x] `/admin/projects/:id/edit`

Tasks:
- [x] Ensure all admin routes are protected
- [x] Keep structure easy to expand later
- [x] Add placeholder breadcrumb/title patterns if helpful

Expected result:
Admin project management routes are defined and navigable.

---

# Phase 7 — Project CMS Data Layer

Goal: create reusable admin-side project service functions.

Create or update:
- [x] `src/services/admin/projects/` or equivalent

Tasks:
- [x] Add fetchProjectsForAdmin
- [x] Add fetchProjectByIdForAdmin
- [x] Add createProject
- [x] Add updateProject
- [x] Add fetchProjectCategories
- [x] Keep service layer separate from page components
- [x] Use typed inputs/outputs
- [x] Reuse database types where possible

Expected result:
Admin pages can manage projects through a clean service layer.

---

# Phase 8 — Projects List Page

Goal: build the main admin list for references/projects.

Create or update:
- [x] `src/pages/admin/AdminProjectsPage.tsx` or equivalent

Tasks:
- [x] Display list of projects from Supabase
- [x] Show key fields:
  - title
  - year
  - category summary
  - publish state
  - featured state
- [x] Add button/link to create new project
- [x] Add edit action for each row/card
- [x] Add loading state
- [x] Add empty state
- [x] Add simple error state

UI note:
Prefer a clean table-like or list-like admin presentation.
Do not over-style with too many decorative cards.

Expected result:
Admin can see and navigate all managed projects.

---

# Phase 9 — Create/Edit Project Form Foundation

Goal: enable creation and editing of projects.

Create or update:
- [x] `src/pages/admin/AdminProjectNewPage.tsx`
- [x] `src/pages/admin/AdminProjectEditPage.tsx`
- [x] shared form component(s) if useful

Tasks:
- [x] Create a reusable project form
- [x] Include fields for:
  - title
  - slug
  - short_description
  - full_description
  - investor
  - location
  - country
  - year
  - industry
  - project_phase
  - featured_image_path or upload target
  - is_featured
  - is_published
  - sort_order
- [x] Load existing data in edit mode
- [x] Validate required fields at basic app level
- [x] Show save/loading/error/success states
- [x] Keep the form practical and not overcomplicated

Expected result:
Admin can create and update projects.

---

# Phase 10 — Category Assignment

Goal: support project categorization in admin forms.

Tasks:
- [x] Fetch project categories for form use
- [x] Add category multi-select or simple checkbox/tag selection UI
- [x] Save selected categories via join table
- [x] Load existing category selections in edit mode
- [x] Keep the UI functional and clear

Expected result:
Projects can be assigned to categories in admin.

---

# Phase 11 — Publish and Featured Controls

Goal: make basic content state manageable.

Tasks:
- [x] Add `is_published` control in form
- [x] Add `is_featured` control in form
- [x] Add sort order field if still useful
- [x] Ensure public pages only use published content
- [x] Verify homepage featured references only use featured + published content as intended

Expected result:
Content state is controllable from admin and respected by the public site.

---

# Phase 12 — Media Upload Foundation

Goal: support project cover and gallery uploads.

Create or update:
- [x] storage-related helpers/services
- [x] admin form upload handling

Tasks:
- [x] Implement cover image upload to `project-images`
- [x] Implement gallery image upload for a project
- [x] Follow documented storage path conventions
- [x] Save image paths in database
- [x] Display existing uploaded images in edit mode where practical
- [x] Add upload loading/error feedback
- [x] Keep gallery management basic in v1

Important:
Do not overbuild asset management.
A simple and reliable upload flow is enough for this phase.

Expected result:
Admin can upload and attach project images.

---

# Phase 13 — Basic Form Quality and UX

Goal: make the admin CMS practical for daily use.

Tasks:
- [x] Add form field grouping for readability
- [x] Add basic inline validation messages
- [x] Add success feedback after save
- [x] Prevent accidental broken submissions where possible
- [x] Ensure edit flow is understandable without extra explanation
- [x] Keep admin UX clean and efficient

Expected result:
The project form is usable by internal staff.

---

# Phase 14 — Minimal Hardening

Goal: avoid obvious mistakes while keeping scope under control.

Tasks:
- [x] Confirm anon/public queries still work correctly for public pages
- [x] Confirm admin-only write operations are not exposed in public components
- [x] If using policies now, keep them minimal and documented
- [x] Document any temporary security shortcuts that must be hardened later
- [x] Avoid pretending security is “done” if it is not

Expected result:
The app is honest and stable in its current security posture.

---

# Phase 15 — Documentation Sync

Goal: keep docs aligned with the implemented CMS foundation.

Create or update:
- [x] `docs/03_tech/cms_rules.md`
- [x] `docs/03_tech/storage_strategy.md`
- [x] `docs/03_tech/supabase_schema.md`
- [x] `docs/04_execution/backlog.md`
- [x] `docs/04_execution/current_sprint.md`
- [x] `docs/04_execution/current_step.md`
- [x] `docs/04_execution/changelog.md`
- [x] `docs/04_execution/prompts_codex.md`

Tasks:
- [x] Document implemented auth flow
- [x] Document implemented admin routes
- [x] Document upload flow decisions
- [x] Record any schema changes made during form implementation
- [x] Update sprint/backlog/changelog accordingly

Expected result:
Docs remain a reliable source of truth.

---

# Phase 16 — Verification

Goal: confirm the first real admin CMS workflow works end-to-end.

Tasks:
- [x] Run app locally
- [ ] Verify unauthenticated access to `/admin` redirects to `/admin/login`
- [ ] Verify valid login succeeds
- [ ] Verify logout works
- [ ] Verify projects list loads
- [ ] Verify a new project can be created
- [ ] Verify an existing project can be edited
- [ ] Verify category assignment persists
- [ ] Verify cover image upload works
- [ ] Verify gallery upload works
- [x] Verify publish state affects public visibility
- [x] Verify featured state affects homepage featured references as intended
- [x] Verify build succeeds

Commands:
```bash
npm run dev
npm run build
```

Document any Supabase CLI or dashboard steps required for auth/storage verification.

Expected result:
Admin/CMS foundation is operational for managing projects.

---

# Phase 5 Complete

If all steps above are completed, the project is ready for the next implementation phase:
- admin UX refinement
- richer references filtering
- visual refinement of the public site
- news module later
- portfolio PDF export later
