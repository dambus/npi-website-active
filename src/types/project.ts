export type Project = {
  id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  client: string
  location: string
  country: string
  year: number
  industry: string
  projectPhase: string
  featuredImage: string
  gallery: Array<{
    id: string
    src: string
    alt: string
    sortOrder: number
  }>
  categories: string[]
  isFeatured: boolean
}
