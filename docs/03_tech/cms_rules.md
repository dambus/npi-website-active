# CMS Rules

## Admin Route

- `/admin` is a hidden route and must not appear in public navigation.

## Intended Login Method

- V1 should use email/password authentication through Supabase Auth.

## First Real Auth Tasks

- session detection on app load
- login
- logout
- real route protection for `/admin`

## Initial Roles

- `super_admin`: full access to content, settings, and user administration once implemented
- `editor`: content management access for projects and news without broader system control

## Enforcement Approach

- V1 role checks remain app-level in practice.
- For this phase, any authenticated admin user is treated as trusted inside the hidden `/admin` area.
- Role enforcement should later expand into database and RLS policy strategy as the CMS matures.

## Minimum Admin Capabilities For V1

- sign in and sign out
- create, edit, publish, unpublish, and order projects
- upload and manage project images
- create and edit optional news items

## Explicitly Out Of Scope In Phase 5

- advanced role matrix enforcement
- full RLS hardening by role
- news CMS
- portfolio PDF export
- a broad admin design system rewrite

## Temporary Hardening Note

- Minimal authenticated write policies may be used so the first admin CMS flow can function.
- This is a conscious shortcut for v1 and must be tightened later with role-aware policies.

## Temporary Scaffold Note

- Current `ProtectedRoute` is temporary scaffold-only logic and must be replaced during real Supabase auth implementation.
