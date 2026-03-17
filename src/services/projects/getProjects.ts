import { supabase } from '@/lib/supabase'
import type { Project } from '@/types/project'

import { mapProject } from './mappers'

type GetProjectsOptions = {
  featuredOnly?: boolean
  limit?: number
}

export async function getProjects(options: GetProjectsOptions = {}): Promise<Project[]> {
  let query = supabase
    .from('projects')
    .select(
      `
        id,
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
        project_category_links (
          project_categories (
            name,
            slug
          )
        )
      `,
    )
    .eq('is_published', true)
    .order('is_featured', { ascending: false })
    .order('sort_order', { ascending: true })
    .order('year', { ascending: false })

  if (options.featuredOnly) {
    query = query.eq('is_featured', true)
  }

  if (options.limit) {
    query = query.limit(options.limit)
  }

  const { data, error } = await query

  if (error) {
    throw new Error(error.message)
  }

  return (data ?? []).map((record) => mapProject(record))
}
