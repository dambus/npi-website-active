# Changelog

## 2026-03-17

- completed base app scaffold through setup phases
- connected the project to Supabase CLI and documented schema workflow
- added `@` path alias support in Vite and TypeScript
- introduced shared `cn`, `Button`, and `SectionHeading` utilities
- added `NotFoundPage` and catch-all routing
- documented current execution status and next steps
- refined semantic heading usage and updated temporary NPI site configuration
- locked v1 sitemap, content inventory, homepage blueprint, and design direction
- documented references UX, Supabase schema draft, storage strategy, and CMS rules
- aligned brief, roadmap, backlog, sprint focus, and reusable Codex prompts with the next implementation phase
- implemented the first real public UI pass across homepage, About, Services, Contact, and references
- added reusable UI primitives, improved navigation UX, and introduced a mock reference detail route
- kept the phase scoped to static/mock data without starting CMS CRUD or real auth integration
- reviewed the references schema against the live UI and deferred the news table from the first migration
- added the first real Supabase migrations for projects, project images, categories, links, and seed data
- regenerated database types and replaced mock references listing/detail data with live Supabase reads
- implemented the first real admin auth provider, protected admin routing, and admin login screen
- added admin project list/create/edit routes with practical CMS service functions and upload helpers
- documented the temporary authenticated write-policy shortcut and the remaining admin-user provisioning gap
- improved admin contrast, field readability, navigation states, and form/list usability without changing public-site styling
- verified admin auth still works with a real CMS login, admin project queries still load, and production build still succeeds
