import { supabase } from '@/lib/supabase'
import type { Project } from '@/types/project'

import { mapProject } from './mappers'

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
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
        ),
        project_images (
          id,
          image_path,
          alt_text,
          sort_order
        )
      `,
    )
    .eq('slug', slug)
    .eq('is_published', true)
    .order('sort_order', { foreignTable: 'project_images', ascending: true })
    .maybeSingle()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    return null
  }

  return mapProject(data)
}
