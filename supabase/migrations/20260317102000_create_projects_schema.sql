create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  short_description text not null,
  full_description text,
  investor text,
  location text,
  country text,
  year integer check (year is null or year between 1900 and 2100),
  industry text,
  project_phase text,
  featured_image_path text,
  is_featured boolean not null default false,
  is_published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  image_path text not null,
  alt_text text,
  sort_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.project_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.project_category_links (
  project_id uuid not null references public.projects(id) on delete cascade,
  category_id uuid not null references public.project_categories(id) on delete cascade,
  created_at timestamptz not null default timezone('utc', now()),
  primary key (project_id, category_id)
);

create index if not exists idx_projects_is_published on public.projects (is_published);
create index if not exists idx_projects_is_featured on public.projects (is_featured);
create index if not exists idx_projects_year on public.projects (year desc);
create index if not exists idx_projects_sort_order on public.projects (sort_order asc);
create index if not exists idx_project_images_project_id_sort_order on public.project_images (project_id, sort_order);
create index if not exists idx_project_category_links_category_id on public.project_category_links (category_id);

drop trigger if exists set_projects_updated_at on public.projects;
create trigger set_projects_updated_at
before update on public.projects
for each row
execute function public.set_updated_at();

alter table public.projects enable row level security;
alter table public.project_images enable row level security;
alter table public.project_categories enable row level security;
alter table public.project_category_links enable row level security;

create policy "Public can read published projects"
on public.projects
for select
to anon, authenticated
using (is_published = true);

create policy "Public can read images for published projects"
on public.project_images
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.projects
    where projects.id = project_images.project_id
      and projects.is_published = true
  )
);

create policy "Public can read project categories"
on public.project_categories
for select
to anon, authenticated
using (true);

create policy "Public can read category links for published projects"
on public.project_category_links
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.projects
    where projects.id = project_category_links.project_id
      and projects.is_published = true
  )
);

insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do update
set public = excluded.public;
