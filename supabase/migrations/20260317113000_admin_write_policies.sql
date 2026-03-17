create policy "Authenticated users can read all projects"
on public.projects
for select
to authenticated
using (true);

create policy "Authenticated users can insert projects"
on public.projects
for insert
to authenticated
with check (true);

create policy "Authenticated users can update projects"
on public.projects
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated users can delete projects"
on public.projects
for delete
to authenticated
using (true);

create policy "Authenticated users can read all project images"
on public.project_images
for select
to authenticated
using (true);

create policy "Authenticated users can insert project images"
on public.project_images
for insert
to authenticated
with check (true);

create policy "Authenticated users can update project images"
on public.project_images
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated users can delete project images"
on public.project_images
for delete
to authenticated
using (true);

create policy "Authenticated users can read all category links"
on public.project_category_links
for select
to authenticated
using (true);

create policy "Authenticated users can insert category links"
on public.project_category_links
for insert
to authenticated
with check (true);

create policy "Authenticated users can delete category links"
on public.project_category_links
for delete
to authenticated
using (true);

create policy "Authenticated users can read categories"
on public.project_categories
for select
to authenticated
using (true);

create policy "Authenticated users can manage project image objects"
on storage.objects
for all
to authenticated
using (bucket_id = 'project-images')
with check (bucket_id = 'project-images');
