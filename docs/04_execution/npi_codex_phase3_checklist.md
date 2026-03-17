# NPI Website — Codex Phase 3 Checklist

Purpose of this document:
Implement the public-facing website UI based on previously defined documentation.

This phase is focused on:
- building real UI from homepage blueprint
- creating reusable components
- implementing references UI with mock data
- ensuring responsive, clean, corporate design
- NOT implementing CMS logic yet

Codex must:
- follow this checklist sequentially
- mark completed tasks
- avoid overengineering
- use Tailwind + custom UI only

---

# Phase 1 — UI Foundations

Goal: establish visual system before page building

- [x] Create basic layout spacing system (container, section spacing)
- [x] Define max-width container and padding rules
- [x] Refine typography scale (headings, paragraphs, small text)
- [x] Define base color tokens (background, text, muted, border, brand)
- [x] Improve global CSS variables if needed

Expected result:
Consistent visual baseline across all pages

---

# Phase 2 — Reusable UI Components

Goal: create building blocks before composing pages

Create in `components/ui/`:

- [x] Button (primary, secondary)
- [x] SectionHeading (already exists, refine if needed)
- [x] Card (generic container)
- [x] Badge / Tag (for categories)
- [x] Input (for search later)
- [x] Container (verify spacing consistency)

Create in `components/`:

- [x] Section wrapper component
- [x] Grid layout helper

Expected result:
Reusable UI primitives ready

---

# Phase 3 — Homepage Implementation

Goal: build homepage using blueprint

Update:
- [x] HomePage.tsx

Implement sections:

- [x] Hero section
- [x] Quick facts (stats block)
- [x] Services snapshot
- [x] Process / workflow section
- [x] Featured references (mock data)
- [x] Quality / technology section
- [x] Contact CTA

Rules:
- keep text short
- use placeholders where needed
- focus on layout and hierarchy

Expected result:
Fully structured homepage (not final design polish)

---

# Phase 4 — About Page

- [x] Implement AboutPage structure
- [x] Add company overview section
- [x] Add key facts block
- [x] Add organization/capabilities section
- [x] Add “why NPI” section

Expected result:
Clean, readable company presentation page

---

# Phase 5 — Services Page

- [x] Implement ServicesPage structure
- [x] Add services intro
- [x] Add grouped services blocks
- [x] Add lifecycle/process support section

Expected result:
Clear overview of services without heavy text

---

# Phase 6 — Contact Page

- [x] Implement ContactPage structure
- [x] Add contact details block
- [x] Add CTA section
- [x] Add optional map placeholder

Expected result:
Simple and functional contact page

---

# Phase 7 — References Listing (Mock)

Goal: build most important module UI

- [x] Create mock data in `data/`
- [x] Implement ReferencesPage layout
- [x] Create reference card component
- [x] Implement grid layout
- [x] Add filter UI (non-functional)
- [x] Add search input (non-functional)
- [x] Add empty state placeholder

Expected result:
Fully working UI with static data

---

# Phase 8 — Reference Detail Page (Mock)

- [x] Create route `/references/:slug`
- [x] Implement detail page layout
- [x] Add hero image/cover
- [x] Add summary facts block
- [x] Add description section
- [x] Add gallery layout (static)
- [x] Add back navigation

Expected result:
Complete project detail page

---

# Phase 9 — Navigation & UX Polish

- [x] Improve header navigation UX
- [x] Add active link states
- [x] Improve mobile navigation placeholder
- [x] Ensure footer links are correct

Expected result:
Navigation feels complete and usable

---

# Phase 10 — Responsive Pass

- [x] Check mobile layout for all pages
- [x] Adjust spacing and typography
- [x] Ensure grids collapse correctly
- [x] Fix overflow or layout issues

Expected result:
Fully responsive UI

---

# Phase 11 — Visual Polish

- [x] Improve spacing consistency
- [x] Refine typography hierarchy
- [x] Add subtle hover states
- [x] Ensure consistent card styling
- [x] Improve visual rhythm between sections

Expected result:
Professional, clean corporate feel

---

# Phase 12 — Verification

- [x] Run dev server
- [x] Test all routes
- [x] Check console for errors
- [x] Build project successfully

Commands:

npm run dev
npm run build

---

# Phase 3 Complete

Project is ready for:

- Supabase integration
- Data wiring
- Admin authentication
- CMS CRUD implementation
