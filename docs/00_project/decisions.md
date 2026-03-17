# Decisions

## 2026-03-17

### Public scope

- V1 public navigation is locked to `Home`, `About`, `Services`, `References`, and `Contact`.
- `News` remains part of v1 as a reusable homepage/content module, not a top-level navigation page.
- References/projects are the highest-priority dynamic content area because they carry the strongest proof of capability and credibility.

### Homepage direction

- The homepage should stay concise and presentation-led.
- The planned homepage sequence is hero, quick facts, services snapshot, process, featured references, quality/technology, contact CTA, and optional news snippet.
- Real homepage implementation is intentionally deferred until the content, UX, and schema docs are aligned.

### CMS and admin boundaries

- Current `/admin` protection is scaffold-only and uses a temporary `ProtectedRoute`.
- Real admin authentication must be replaced with Supabase auth later.
- V1 CMS planning covers schema, storage, and admin rules only; real CRUD implementation does not start in this phase.

### Design direction

- V1 design direction should feel premium industrial, clean corporate, and technically credible.
- Content should stay short, factual, and non-boastful, with references and delivery clarity doing most of the persuasive work.
