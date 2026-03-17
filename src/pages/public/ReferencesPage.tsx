import * as React from 'react'
import { useState } from 'react'

import { Grid } from '@/components/Grid'
import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ReferenceCard } from '@/components/references/ReferenceCard'
import { getProjectCategories } from '@/services/projects/getProjectCategories'
import { getProjects } from '@/services/projects/getProjects'
import type { ProjectCategory } from '@/services/projects/types'
import type { Project } from '@/types/project'

export function ReferencesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [projects, setProjects] = useState<Project[]>([])
  const [categories, setCategories] = useState<ProjectCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  React.useEffect(() => {
    let isActive = true

    async function loadReferences() {
      try {
        setIsLoading(true)
        setErrorMessage(null)

        const [projectData, categoryData] = await Promise.all([getProjects(), getProjectCategories()])

        if (!isActive) {
          return
        }

        setProjects(projectData)
        setCategories(categoryData)
      } catch (error) {
        if (!isActive) {
          return
        }

        setErrorMessage(error instanceof Error ? error.message : 'Unable to load references.')
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    void loadReferences()

    return () => {
      isActive = false
    }
  }, [])

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' ? true : project.categories.includes(selectedCategory)
    const query = searchTerm.trim().toLowerCase()
    const matchesSearch =
      query.length === 0 ? true : `${project.title} ${project.shortDescription}`.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })

  return (
    <div>
      <Section spacing="lg">
        <SectionHeading
          className="max-w-3xl"
          as="h1"
          eyebrow="References"
          title="Selected projects shaped as the core credibility module"
          description="This listing is built with mock data only, but the structure already reflects the future filtering, search, and detail-page logic documented in the planning phase."
        />
      </Section>

      <Section spacing="sm">
        <Grid columns="sidebar">
          <Card className="h-fit space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Filters</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Category filtering and search are wired to local mock data only in this phase.
              </p>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500" htmlFor="reference-search">
                Search
              </label>
              <Input
                className="mt-3"
                id="reference-search"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search projects"
                value={searchTerm}
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Categories</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['All', ...categories.map((category) => category.name)].map((category) => {
                  const isActive = category === selectedCategory

                  return (
                    <button
                      key={category}
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                        isActive
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                      type="button"
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
          </Card>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-stone-500">
                {isLoading
                  ? 'Loading projects...'
                  : `${filteredProjects.length} project${filteredProjects.length === 1 ? '' : 's'} shown`}
              </p>
              <div className="flex items-center gap-2">
                <Badge tone="muted">Grid default</Badge>
                <Badge tone="muted">Supabase data</Badge>
              </div>
            </div>

            {isLoading ? (
              <Grid className="mt-8" columns="3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Card key={index} className="min-h-80 animate-pulse bg-stone-100" />
                ))}
              </Grid>
            ) : errorMessage ? (
              <Card className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Error</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-stone-950">
                  References could not be loaded.
                </h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">{errorMessage}</p>
              </Card>
            ) : filteredProjects.length > 0 ? (
              <Grid className="mt-8" columns="3">
                {filteredProjects.map((project) => (
                  <ReferenceCard key={project.id} project={project} />
                ))}
              </Grid>
            ) : (
              <Card className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Empty State</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-stone-950">
                  No references match the current filter.
                </h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Try resetting the category selection or clearing the search term to return to the full mock dataset.
                </p>
              </Card>
            )}
          </div>
        </Grid>
      </Section>
    </div>
  )
}

export default ReferencesPage
