with inserted_projects as (
  insert into public.projects (
    title,
    slug,
    short_description,
    full_description,
    investor,
    location,
    country,
    year,
    industry,
    project_phase,
    featured_image_path,
    is_featured,
    is_published,
    sort_order
  )
  values
    (
      'Modernization of Thermal Process Unit',
      'modernization-of-thermal-process-unit',
      'Concept support, technical coordination, and delivery planning for a brownfield thermal systems upgrade.',
      'NPI supported the project team through concept validation, multidisciplinary coordination, and execution preparation for a thermal process unit upgrade in an active industrial environment.',
      'Industrial Energy Partner',
      'Belgrade',
      'Serbia',
      2024,
      'Energy',
      'Concept to execution support',
      'projects/modernization-of-thermal-process-unit/cover/cover-01.jpg',
      true,
      true,
      10
    ),
    (
      'Gas Infrastructure Expansion Package',
      'gas-infrastructure-expansion-package',
      'Engineering coordination package focused on staged gas network expansion and site readiness.',
      'The engagement covered engineering coordination, interface management, and phased delivery support for a gas infrastructure expansion program with multiple stakeholders.',
      'Regional Utility Operator',
      'Novi Sad',
      'Serbia',
      2023,
      'Gas',
      'Engineering support',
      'projects/gas-infrastructure-expansion-package/cover/cover-01.jpg',
      true,
      true,
      20
    ),
    (
      'Process Facility Revamp Documentation',
      'process-facility-revamp-documentation',
      'Technical documentation, coordination, and delivery sequencing for a process facility revamp.',
      'NPI prepared engineering documentation inputs and supported project sequencing decisions to reduce interruption risk during a facility revamp program.',
      'Process Industry Client',
      'Pancevo',
      'Serbia',
      2022,
      'Process',
      'Documentation and planning',
      'projects/process-facility-revamp-documentation/cover/cover-01.jpg',
      false,
      true,
      30
    ),
    (
      'Industrial Utility Systems Upgrade',
      'industrial-utility-systems-upgrade',
      'Utility systems upgrade support covering technical review, coordination, and phased site implementation.',
      'The project included structured technical review, engineering coordination, and practical delivery support across a live industrial site utility upgrade.',
      'Private Industrial Operator',
      'Kragujevac',
      'Serbia',
      2021,
      'Industrial Infrastructure',
      'Execution support',
      'projects/industrial-utility-systems-upgrade/cover/cover-01.jpg',
      false,
      true,
      40
    )
  on conflict (slug) do update
  set
    title = excluded.title,
    short_description = excluded.short_description,
    full_description = excluded.full_description,
    investor = excluded.investor,
    location = excluded.location,
    country = excluded.country,
    year = excluded.year,
    industry = excluded.industry,
    project_phase = excluded.project_phase,
    featured_image_path = excluded.featured_image_path,
    is_featured = excluded.is_featured,
    is_published = excluded.is_published,
    sort_order = excluded.sort_order
  returning id, slug
),
inserted_categories as (
  insert into public.project_categories (name, slug)
  values
    ('Termoenergetika', 'termoenergetika'),
    ('Gasni sistemi', 'gasni-sistemi'),
    ('Procesna postrojenja', 'procesna-postrojenja'),
    ('Projektovanje', 'projektovanje')
  on conflict (slug) do update
  set name = excluded.name
  returning id, slug
)
insert into public.project_category_links (project_id, category_id)
select projects.id, categories.id
from (
  values
    ('modernization-of-thermal-process-unit', 'termoenergetika'),
    ('modernization-of-thermal-process-unit', 'projektovanje'),
    ('gas-infrastructure-expansion-package', 'gasni-sistemi'),
    ('process-facility-revamp-documentation', 'procesna-postrojenja'),
    ('process-facility-revamp-documentation', 'projektovanje'),
    ('industrial-utility-systems-upgrade', 'procesna-postrojenja')
) as links(project_slug, category_slug)
join inserted_projects as projects
  on projects.slug = links.project_slug
join inserted_categories as categories
  on categories.slug = links.category_slug
on conflict (project_id, category_id) do nothing;

insert into public.project_images (project_id, image_path, alt_text, sort_order)
select projects.id, gallery.image_path, gallery.alt_text, gallery.sort_order
from (
  values
    ('modernization-of-thermal-process-unit', 'projects/modernization-of-thermal-process-unit/gallery/gallery-01.jpg', 'Thermal process unit overview', 10),
    ('modernization-of-thermal-process-unit', 'projects/modernization-of-thermal-process-unit/gallery/gallery-02.jpg', 'Engineering detail view', 20),
    ('gas-infrastructure-expansion-package', 'projects/gas-infrastructure-expansion-package/gallery/gallery-01.jpg', 'Gas infrastructure corridor overview', 10)
) as gallery(project_slug, image_path, alt_text, sort_order)
join public.projects as projects
  on projects.slug = gallery.project_slug
where not exists (
  select 1
  from public.project_images as existing
  where existing.project_id = projects.id
    and existing.image_path = gallery.image_path
);
