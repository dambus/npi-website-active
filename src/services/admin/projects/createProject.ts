import { supabase } from '@/lib/supabase'

import { saveProjectCategories } from './saveProjectCategories'
import type { ProjectFormValues } from './types'

export async function createProject(values: ProjectFormValues) {
  const { data, error } = await supabase
    .from('projects')
    .insert({
      title: values.title,
      slug: values.slug,
      short_description: values.shortDescription,
      full_description: values.fullDescription || null,
      investor: values.investor || null,
      location: values.location || null,
      country: values.country || null,
      year: values.year ? Number(values.year) : null,
      industry: values.industry || null,
      project_phase: values.projectPhase || null,
      featured_image_path: values.featuredImagePath || null,
      is_featured: values.isFeatured,
      is_published: values.isPublished,
      sort_order: values.sortOrder ? Number(values.sortOrder) : 0,
    })
    .select('id')
    .single()

  if (error) {
    throw new Error(error.message)
  }

  await saveProjectCategories(data.id, values.categoryIds)

  return data.id
}
