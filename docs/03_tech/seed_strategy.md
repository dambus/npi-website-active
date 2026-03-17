# Seed Strategy

## Phase 4 Seed Decision

- Seed from the current mock references first.
- Preserve the existing public slugs where possible so route verification remains stable.
- Seed enough projects and categories to validate listing, detail, featured ordering, and category filter behavior.

## Initial Seed Scope

- 4 published projects
- 4 reusable categories
- join-table links between projects and categories
- ordered gallery image rows for at least one project

## Content Rules

- Keep content clean, realistic, and concise.
- Use route-safe slugs already present in the mock UI.
- Prefer production-minded structure over long placeholder narratives.

## Future Real Data Import

Likely next-step options once real project data is ready:

1. manual CSV-to-SQL import for an initial controlled dataset
2. admin-side structured entry after auth and CRUD are implemented
3. one-off import script if source material arrives in spreadsheets or internal documents

## Phase 4 Note

Seeded image paths follow the storage naming convention, but actual file uploads remain a later admin/storage task. The frontend should tolerate missing uploaded assets gracefully during this transition period.
