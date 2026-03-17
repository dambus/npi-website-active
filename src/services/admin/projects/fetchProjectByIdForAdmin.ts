import { supabase } from '@/lib/supabase'

import type { AdminProjectRecord } from './types'

export async function fetchProjectByIdForAdmin(id: string): Promise<AdminProjectRecord | null> {
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
        is_published,
        sort_order,
        project_category_links (
          category_id
        ),
        project_images (
          id,
          image_path,
          alt_text,
          sort_order
        )
      `,
    )
    .eq('id', id)
    .maybeSingle()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    return null
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    shortDescription: data.short_description,
    fullDescription: data.full_description ?? '',
    investor: data.investor ?? '',
    location: data.location ?? '',
    country: data.country ?? '',
    year: data.year ? String(data.year) : '',
    industry: data.industry ?? '',
    projectPhase: data.project_phase ?? '',
    featuredImagePath: data.featured_image_path ?? '',
    isFeatured: data.is_featured,
    isPublished: data.is_published,
    sortOrder: String(data.sort_order),
    categoryIds: data.project_category_links?.map((link) => link.category_id) ?? [],
    gallery:
      data.project_images?.map((image) => ({
        id: image.id,
        path: image.image_path,
        altText: image.alt_text ?? '',
      })) ?? [],
  }
}
