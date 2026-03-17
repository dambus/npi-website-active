import { supabase } from '@/lib/supabase'

import type { AdminProjectListItem } from './types'

export async function fetchProjectsForAdmin(): Promise<AdminProjectListItem[]> {
  const { data, error } = await supabase
    .from('projects')
    .select(
      `
        id,
        title,
        year,
        is_featured,
        is_published,
        project_category_links (
          project_categories (
            name
          )
        )
      `,
    )
    .order('year', { ascending: false })
    .order('sort_order', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return (data ?? []).map((project) => ({
    id: project.id,
    title: project.title,
    year: project.year,
    categories:
      project.project_category_links
        ?.map((link) => link.project_categories?.name)
        .filter((name): name is string => Boolean(name)) ?? [],
    isFeatured: project.is_featured,
    isPublished: project.is_published,
  }))
}
