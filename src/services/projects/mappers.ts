import heroImage from '@/assets/hero.png'
import { supabase } from '@/lib/supabase'
import type { Project } from '@/types/project'

type ProjectCategoryRecord = {
  project_categories: {
    name: string | null
    slug: string
  } | null
}

type ProjectImageRecord = {
  id: string
  image_path: string
  alt_text: string | null
  sort_order: number
}

type ProjectRecord = {
  id: string
  title: string
  slug: string
  short_description: string
  full_description: string | null
  investor: string | null
  location: string | null
  country: string | null
  year: number | null
  industry: string | null
  project_phase: string | null
  featured_image_path: string | null
  is_featured: boolean
  project_category_links?: ProjectCategoryRecord[] | null
  project_images?: ProjectImageRecord[] | null
}

function resolveProjectImage(path: string | null) {
  if (!path) {
    return heroImage
  }

  return supabase.storage.from('project-images').getPublicUrl(path).data.publicUrl
}

export function mapProject(record: ProjectRecord): Project {
  return {
    id: record.id,
    title: record.title,
    slug: record.slug,
    shortDescription: record.short_description,
    fullDescription:
      record.full_description ??
      'Project detail content will be expanded as more production data is added.',
    client: record.investor ?? 'NPI Client',
    location: record.location ?? 'Location to be confirmed',
    country: record.country ?? 'Serbia',
    year: record.year ?? 0,
    industry: record.industry ?? 'Industrial Engineering',
    projectPhase: record.project_phase ?? 'Project support',
    featuredImage: resolveProjectImage(record.featured_image_path),
    gallery:
      record.project_images?.map((image) => ({
        id: image.id,
        src: resolveProjectImage(image.image_path),
        alt: image.alt_text ?? record.title,
        sortOrder: image.sort_order,
      })) ?? [],
    categories:
      record.project_category_links
        ?.map((link) => link.project_categories?.name)
        .filter((name): name is string => Boolean(name)) ?? [],
    isFeatured: record.is_featured,
  }
}
