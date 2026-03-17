# NPI Website — Codex Setup Checklist

Purpose of this document:
Track progress of the initial project setup.  
Codex should complete tasks **in order**, marking items as done.

---

# Phase 1 — Core Dependencies

Goal: install essential libraries needed for routing, Supabase, and utilities.

- [x] Install React Router

npm install react-router-dom

- [x] Install Supabase client

npm install @supabase/supabase-js

- [x] Install utility library for class management

npm install clsx

- [x] Install development formatting tools

npm install -D prettier prettier-plugin-tailwindcss

- [x] Verify project compiles successfully

npm run dev

Expected result:
Project runs without errors.

---

# Phase 2 — Project Folder Structure

Goal: create scalable architecture for public website and admin CMS.

Create the following folders inside `src/`:

- [x] app
- [x] components
- [x] components/layout
- [x] components/ui
- [x] layouts
- [x] pages
- [x] pages/public
- [x] pages/admin
- [x] sections
- [x] services
- [x] lib
- [x] hooks
- [x] types
- [x] data
- [x] assets
- [x] routes

Expected result:
Clean architecture ready for expansion.

---

# Phase 3 — Core Application Files

Create the main application files.

- [x] src/main.tsx
- [x] src/app/App.tsx
- [x] src/routes/router.tsx

Tasks:

- [x] configure React Router
- [x] mount router in App.tsx
- [x] verify application renders

Expected result:
App renders using router.

---

# Phase 4 — Layout System

Goal: separate public site layout from admin layout.

Create:

- [x] layouts/PublicLayout.tsx
- [x] layouts/AdminLayout.tsx

Create layout components:

- [x] components/layout/SiteHeader.tsx
- [x] components/layout/SiteFooter.tsx
- [x] components/layout/Container.tsx

PublicLayout should contain:

- header
- page content
- footer

AdminLayout should contain:

- placeholder admin navigation
- page content area

Expected result:
Pages render inside layouts.

---

# Phase 5 — Public Pages

Create placeholder pages.

- [x] pages/public/HomePage.tsx
- [x] pages/public/AboutPage.tsx
- [x] pages/public/ServicesPage.tsx
- [x] pages/public/ReferencesPage.tsx
- [x] pages/public/ContactPage.tsx

Each page must include:

- page title
- short description
- simple section structure

HomePage should contain placeholder sections:

- Hero
- Company Intro
- Services Snapshot
- Featured References
- Contact CTA

Expected result:
All routes render successfully.

---

# Phase 6 — Admin Pages

Create admin structure.

- [x] pages/admin/AdminLoginPage.tsx
- [x] pages/admin/AdminDashboardPage.tsx

Admin pages should contain simple placeholder content.

Expected result:
Admin pages render.

---

# Phase 7 — Route Protection

Goal: prepare protected admin routes.

Create:

- [x] routes/ProtectedRoute.tsx

Tasks:

- [x] create simple auth guard
- [x] use placeholder boolean authentication
- [x] redirect unauthenticated users to `/admin/login`

Expected result:

/admin → redirects to login when not authenticated.

---

# Phase 8 — Supabase Integration

Create environment helpers.

- [x] lib/env.ts
- [x] lib/supabase.ts

Tasks:

- [x] read VITE_SUPABASE_URL
- [x] read VITE_SUPABASE_ANON_KEY
- [x] create Supabase client
- [x] throw error if variables are missing

Expected result:
Supabase client ready for use.

---

# Phase 9 — Base Types

Prepare TypeScript types.

Create:

- [x] types/project.ts

Project type must include:

- id
- title
- slug
- shortDescription
- client
- location
- year
- industry
- featuredImage
- isFeatured

Expected result:
Types ready for Supabase integration.

---

# Phase 10 — Static Site Data

Create placeholder site configuration.

- [x] data/site.ts

Include:

- company name
- navigation items
- footer links
- contact placeholder data

Expected result:
Centralized site data.

---

# Phase 11 — Docs Structure

Create project documentation directories.

- [x] docs/00_project
- [x] docs/01_content
- [x] docs/02_design
- [x] docs/03_tech
- [x] docs/04_execution

Create starter documentation files:

- [x] docs/00_project/brief.md
- [x] docs/00_project/roadmap.md
- [x] docs/00_project/decisions.md
- [x] docs/01_content/sitemap.md
- [x] docs/01_content/content_inventory.md
- [x] docs/02_design/design_direction.md
- [x] docs/03_tech/architecture.md
- [x] docs/03_tech/supabase_schema.md
- [x] docs/03_tech/deployment.md
- [x] docs/04_execution/backlog.md
- [x] docs/04_execution/current_sprint.md
- [x] docs/04_execution/changelog.md
- [x] docs/04_execution/prompts_codex.md

Expected result:
Project documentation ready.

---

# Phase 12 — Code Quality Improvements

Refine the project.

- [x] create `cn` utility using clsx
- [x] add path alias `@` for src
- [x] update imports to use alias
- [x] create basic Button component
- [x] create SectionHeading component
- [x] create NotFound page
- [x] add route for 404 page

Expected result:
Cleaner developer experience.

---

# Phase 13 — Environment Files

Create environment example.

- [x] .env.example

Content:

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

Expected result:
Environment variables documented.

---

# Phase 14 — Verification

Before moving forward:

- [ ] run dev server
- [x] verify all routes
- [x] verify admin redirect works
- [x] confirm TypeScript has no errors
- [x] confirm Tailwind styles work
- [x] confirm project builds successfully

Command:

npm run dev

---

# Setup Complete

If all steps are completed:

The project foundation is ready for:

Next phase:
- Homepage design
- References CMS
- Supabase schema
- Admin CRUD interface
