import { supabase } from '@/lib/supabase'

import { saveProjectCategories } from './saveProjectCategories'
import type { ProjectFormValues } from './types'

export async function updateProject(projectId: string, values: ProjectFormValues) {
  const { error } = await supabase
    .from('projects')
    .update({
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
    .eq('id', projectId)

  if (error) {
    throw new Error(error.message)
  }

  await saveProjectCategories(projectId, values.categoryIds)
}
