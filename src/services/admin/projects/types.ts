export type AdminProjectListItem = {
  id: string
  title: string
  year: number | null
  categories: string[]
  isFeatured: boolean
  isPublished: boolean
}

export type AdminProjectRecord = {
  id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  investor: string
  location: string
  country: string
  year: string
  industry: string
  projectPhase: string
  featuredImagePath: string
  isFeatured: boolean
  isPublished: boolean
  sortOrder: string
  categoryIds: string[]
  gallery: Array<{
    id: string
    path: string
    altText: string
  }>
}

export type ProjectFormValues = {
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  investor: string
  location: string
  country: string
  year: string
  industry: string
  projectPhase: string
  featuredImagePath: string
  isFeatured: boolean
  isPublished: boolean
  sortOrder: string
  categoryIds: string[]
}
