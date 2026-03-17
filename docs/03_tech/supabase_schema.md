# Supabase Schema Workflow

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

Recommended workflow:
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
