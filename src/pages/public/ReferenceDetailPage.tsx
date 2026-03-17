import heroImage from '@/assets/hero.png'
import * as React from 'react'
import { Link, useParams } from 'react-router-dom'

import { Grid } from '@/components/Grid'
import { Section } from '@/components/Section'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getProjectBySlug } from '@/services/projects/getProjectBySlug'
import type { Project } from '@/types/project'

export function ReferenceDetailPage() {
  const { slug } = useParams()
  const [project, setProject] = React.useState<Project | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  React.useEffect(() => {
    let isActive = true

    async function loadProject() {
      if (!slug) {
        setProject(null)
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        setErrorMessage(null)
        const projectData = await getProjectBySlug(slug)

        if (!isActive) {
          return
        }

        setProject(projectData)
      } catch (error) {
        if (!isActive) {
          return
        }

        setErrorMessage(error instanceof Error ? error.message : 'Unable to load project.')
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    void loadProject()

    return () => {
      isActive = false
    }
  }, [slug])

  if (isLoading) {
    return (
      <Section spacing="lg">
        <Card className="min-h-80 animate-pulse bg-stone-100" />
      </Section>
    )
  }

  if (errorMessage) {
    return (
      <Section spacing="lg">
        <Card className="p-8 sm:p-10">
          <SectionHeading
            as="h1"
            eyebrow="Reference"
            title="Unable to load project"
            description={errorMessage}
          />
          <Link className="mt-8 inline-flex text-sm font-semibold text-amber-700" to="/references">
            Back to references
          </Link>
        </Card>
      </Section>
    )
  }

  if (!project) {
    return (
      <Section spacing="lg">
        <Card className="p-8 sm:p-10">
          <SectionHeading
            as="h1"
            eyebrow="Reference"
            title="Project not found"
            description="The requested project reference is not available in the current mock dataset."
          />
          <Link className="mt-8 inline-flex text-sm font-semibold text-amber-700" to="/references">
            Back to references
          </Link>
        </Card>
      </Section>
    )
  }

  return (
    <div>
      <Section spacing="lg">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Link className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700" to="/references">
              Back to references
            </Link>
            <SectionHeading
              as="h1"
              className="mt-6 max-w-3xl"
              eyebrow="Reference Detail"
              title={project.title}
              description={project.shortDescription}
            />
          </div>
          <Card tone="muted" className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Client</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">{project.client}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Location</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                {project.location}, {project.country}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Phase</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">{project.projectPhase}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Year</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">{project.year}</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section spacing="sm">
        <Card className="overflow-hidden p-0">
          <div className="aspect-[16/8] bg-stone-200">
            <img
              alt={project.title}
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = heroImage
              }}
              src={project.featuredImage}
            />
          </div>
        </Card>
      </Section>

      <Section spacing="sm">
        <Grid columns="sidebar">
          <Card tone="muted" className="h-fit space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Industry</p>
              <p className="mt-2 text-base font-semibold text-stone-950">{project.industry}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Categories</p>
              <p className="mt-2 text-base font-semibold text-stone-950">{project.categories.join(', ')}</p>
            </div>
          </Card>
          <Card className="space-y-5">
            <SectionHeading
              as="h2"
              eyebrow="Project Summary"
              title="Scope and delivery context"
              description={project.fullDescription}
            />
            <p className="text-base leading-8 text-stone-600">
              This mock detail page is intentionally structured to support later Supabase-backed content without
              introducing real CMS logic in this phase.
            </p>
          </Card>
        </Grid>
      </Section>

      <Section spacing="sm">
        <SectionHeading
          as="h2"
          className="max-w-3xl"
          eyebrow="Gallery"
          title="Project visuals and documentation snapshots"
          description="Static gallery layout for the upcoming data-wired reference detail experience."
        />
        <Grid className="mt-10" columns="3">
          {project.gallery.length > 0 ? (
            project.gallery.map((image) => (
              <Card key={image.id} className="overflow-hidden p-0">
                <div className="aspect-[4/3] bg-stone-200">
                  <img
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.src = heroImage
                    }}
                    src={image.src}
                  />
                </div>
              </Card>
            ))
          ) : (
            <Card className="md:col-span-2 xl:col-span-3">
              <p className="text-sm leading-7 text-stone-600">
                Gallery items are not available for this project yet, but the layout is ready for Supabase-backed media rows.
              </p>
            </Card>
          )}
        </Grid>
      </Section>
    </div>
  )
}

export default ReferenceDetailPage
