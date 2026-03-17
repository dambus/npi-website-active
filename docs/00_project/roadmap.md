# Roadmap

## Completed

- project foundation setup
- routing and placeholder public pages
- admin route scaffold
- shared UI primitives and Supabase CLI workflow
- v1 documentation lock for content, UX, schema, storage, and CMS rules
- public UI implementation for homepage, core pages, and references
- first real Supabase-backed references data layer with migrations, seed data, and service queries

## Next Build Sequence

1. Replace scaffold admin auth with real Supabase session handling, login, logout, and route protection.
2. Start the first admin-side content management flow for projects, categories, publish state, and featured state.
3. Add storage upload handling for project cover and gallery assets.
4. Keep role checks app-level for now, then harden later with RLS-aware role enforcement.
5. Refine references filtering foundations with category/year support as needed.
6. Evaluate when to activate the deferred news module.

## Later

- add reference detail pages if needed by the content rollout
- add news listing/detail surfaces if the module becomes active
- introduce storage uploads and admin CRUD flows
- add testing coverage and deployment automation
