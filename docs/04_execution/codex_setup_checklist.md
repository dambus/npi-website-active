# NPI Website — Codex Setup Checklist

Purpose of this document:
Track progress of the initial project setup.  
Codex should complete tasks **in order**, marking items as done.

---

# Phase 1 — Core Dependencies

Goal: install essential libraries needed for routing, Supabase, and utilities.

- [ ] Install React Router

npm install react-router-dom

- [ ] Install Supabase client

npm install @supabase/supabase-js

- [ ] Install utility library for class management

npm install clsx

- [ ] Install development formatting tools

npm install -D prettier prettier-plugin-tailwindcss

- [ ] Verify project compiles successfully

npm run dev

Expected result:
Project runs without errors.

---

# Phase 2 — Project Folder Structure

Goal: create scalable architecture for public website and admin CMS.

Create the following folders inside `src/`:

- [ ] app
- [ ] components
- [ ] components/layout
- [ ] components/ui
- [ ] layouts
- [ ] pages
- [ ] pages/public
- [ ] pages/admin
- [ ] sections
- [ ] services
- [ ] lib
- [ ] hooks
- [ ] types
- [ ] data
- [ ] assets
- [ ] routes

Expected result:
Clean architecture ready for expansion.

---

# Phase 3 — Core Application Files

Create the main application files.

- [ ] src/main.tsx
- [ ] src/app/App.tsx
- [ ] src/routes/router.tsx

Tasks:

- [ ] configure React Router
- [ ] mount router in App.tsx
- [ ] verify application renders

Expected result:
App renders using router.

---

# Phase 4 — Layout System

Goal: separate public site layout from admin layout.

Create:

- [ ] layouts/PublicLayout.tsx
- [ ] layouts/AdminLayout.tsx

Create layout components:

- [ ] components/layout/SiteHeader.tsx
- [ ] components/layout/SiteFooter.tsx
- [ ] components/layout/Container.tsx

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

- [ ] pages/public/HomePage.tsx
- [ ] pages/public/AboutPage.tsx
- [ ] pages/public/ServicesPage.tsx
- [ ] pages/public/ReferencesPage.tsx
- [ ] pages/public/ContactPage.tsx

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

- [ ] pages/admin/AdminLoginPage.tsx
- [ ] pages/admin/AdminDashboardPage.tsx

Admin pages should contain simple placeholder content.

Expected result:
Admin pages render.

---

# Phase 7 — Route Protection

Goal: prepare protected admin routes.

Create:

- [ ] routes/ProtectedRoute.tsx

Tasks:

- [ ] create simple auth guard
- [ ] use placeholder boolean authentication
- [ ] redirect unauthenticated users to `/admin/login`

Expected result:

/admin → redirects to login when not authenticated.

---

# Phase 8 — Supabase Integration

Create environment helpers.

- [ ] lib/env.ts
- [ ] lib/supabase.ts

Tasks:

- [ ] read VITE_SUPABASE_URL
- [ ] read VITE_SUPABASE_ANON_KEY
- [ ] create Supabase client
- [ ] throw error if variables are missing

Expected result:
Supabase client ready for use.

---

# Phase 9 — Base Types

Prepare TypeScript types.

Create:

- [ ] types/project.ts

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

- [ ] data/site.ts

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

- [ ] docs/00_project
- [ ] docs/01_content
- [ ] docs/02_design
- [ ] docs/03_tech
- [ ] docs/04_execution

Create starter documentation files:

- [ ] docs/00_project/brief.md
- [ ] docs/00_project/roadmap.md
- [ ] docs/00_project/decisions.md
- [ ] docs/01_content/sitemap.md
- [ ] docs/01_content/content_inventory.md
- [ ] docs/02_design/design_direction.md
- [ ] docs/03_tech/architecture.md
- [ ] docs/03_tech/supabase_schema.md
- [ ] docs/03_tech/deployment.md
- [ ] docs/04_execution/backlog.md
- [ ] docs/04_execution/current_sprint.md
- [ ] docs/04_execution/changelog.md
- [ ] docs/04_execution/prompts_codex.md

Expected result:
Project documentation ready.

---

# Phase 12 — Code Quality Improvements

Refine the project.

- [ ] create `cn` utility using clsx
- [ ] add path alias `@` for src
- [ ] update imports to use alias
- [ ] create basic Button component
- [ ] create SectionHeading component
- [ ] create NotFound page
- [ ] add route for 404 page

Expected result:
Cleaner developer experience.

---

# Phase 13 — Environment Files

Create environment example.

- [ ] .env.example

Content:

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

Expected result:
Environment variables documented.

---

# Phase 14 — Verification

Before moving forward:

- [ ] run dev server
- [ ] verify all routes
- [ ] verify admin redirect works
- [ ] confirm TypeScript has no errors
- [ ] confirm Tailwind styles work
- [ ] confirm project builds successfully

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