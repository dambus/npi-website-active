# Storage Strategy

## Starting Buckets

- `project-images`
- `news-images` reserved for later if the news module becomes active

## Path Naming Conventions

- `projects/{project-slug}/cover/{filename}`
- `projects/{project-slug}/gallery/{filename}`
- `news/{news-slug}/cover/{filename}`

## Bucket Usage

- `project-images` stores project covers and project gallery assets
- `news-images` remains deferred until `news` is implemented

## Public vs Protected Strategy

- Public website imagery should start in public buckets for simpler v1 delivery.
- Protected/private media is out of scope for v1 public content needs.
- If admin uploads later require moderation or draft-only visibility, policy strategy can evolve without changing path conventions.

## Phase 4 Implementation Note

- `project-images` should be created now as a public bucket through migration.
- `news-images` does not need to be created yet; documenting the bucket name is enough for future work.

## Phase 5 Upload Flow

- Admin uploads write directly into the `project-images` bucket.
- Cover uploads use `projects/{project-slug}/cover/{filename}`.
- Gallery uploads use `projects/{project-slug}/gallery/{filename}`.
- Upload permissions are currently granted to authenticated users so the first admin CMS flow can work.
- This policy is intentionally temporary and should be narrowed once role-aware auth hardening starts.

## Policy Notes

- Future upload policies should restrict writes to authenticated admin roles only.
- Future delete/update policies should align with admin role enforcement once Supabase auth is implemented.
- Naming should stay slug-based to keep content traceable and predictable.
