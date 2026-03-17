import heroImage from '@/assets/hero.png'
import * as React from 'react'

import { Grid } from '@/components/Grid'
import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/Badge'
import { LinkButton } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getProjects } from '@/services/projects/getProjects'
import type { Project } from '@/types/project'

const quickFacts = [
  { value: '20+', label: 'years around industrial project environments' },
  { value: '4', label: 'core delivery areas across engineering and support' },
  { value: 'v1', label: 'references-first digital structure for credibility' },
]

const services = [
  {
    title: 'Engineering coordination',
    description: 'Structured support for multidisciplinary industrial and energy project workflows.',
  },
  {
    title: 'Technical documentation',
    description: 'Clear documentation packages for planning, communication, and project delivery readiness.',
  },
  {
    title: 'Execution support',
    description: 'Practical participation in the path from concept decisions to site delivery coordination.',
  },
]

const processSteps = [
  { step: '01', title: 'Define scope', description: 'Clarify project need, context, and technical priorities early.' },
  { step: '02', title: 'Coordinate inputs', description: 'Align engineering, documentation, and delivery expectations.' },
  { step: '03', title: 'Prepare execution', description: 'Reduce ambiguity before implementation reaches site conditions.' },
  { step: '04', title: 'Support delivery', description: 'Keep technical decisions connected to practical project progress.' },
]

const qualityPoints = [
  'Structured engineering communication',
  'Documentation discipline and traceability',
  'Technology-aware project coordination',
]

export function HomePage() {
  const [featuredProjects, setFeaturedProjects] = React.useState<Project[]>([])
  const [isLoadingFeaturedProjects, setIsLoadingFeaturedProjects] = React.useState(true)

  React.useEffect(() => {
    let isActive = true

    async function loadFeaturedProjects() {
      try {
        setIsLoadingFeaturedProjects(true)
        const projectData = await getProjects({ featuredOnly: true, limit: 3 })

        if (isActive) {
          setFeaturedProjects(projectData)
        }
      } catch {
        if (isActive) {
          setFeaturedProjects([])
        }
      } finally {
        if (isActive) {
          setIsLoadingFeaturedProjects(false)
        }
      }
    }

    void loadFeaturedProjects()

    return () => {
      isActive = false
    }
  }, [])

  return (
    <div>
      <Section spacing="lg" containerSize="wide">
        <Card className="overflow-hidden border-stone-800 bg-stone-950 px-8 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Badge className="bg-white/10 text-amber-200" tone="muted">
                Industrial engineering and delivery support
              </Badge>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
                Structured project support for industrial and energy systems.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
                NPI is building a concise public presentation focused on services, delivery clarity, and references
                that demonstrate practical engineering capability.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton to="/references" variant="secondary">
                  Explore references
                </LinkButton>
                <LinkButton
                  className="bg-white/10 text-white hover:bg-white/20"
                  to="/contact"
                  variant="ghost"
                >
                  Start a project conversation
                </LinkButton>
              </div>
            </div>
            <Card tone="muted" className="grid gap-6 border-white/10 bg-white/5 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">Focus</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                  References-first corporate presentation
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{fact.value}</p>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{fact.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Card>
      </Section>

      <Section spacing="sm">
        <Grid columns="3">
          {quickFacts.map((fact) => (
            <Card key={fact.label} tone="muted">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Quick Fact</p>
              <p className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-stone-950">{fact.value}</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">{fact.label}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section spacing="sm">
        <SectionHeading
          as="h2"
          className="max-w-3xl"
          eyebrow="Services Snapshot"
          title="Clear service groups for complex project environments"
          description="The site keeps the offer concise, but the structure makes it clear that NPI can support engineering-led work across several project stages."
        />
        <Grid className="mt-10" columns="3">
          {services.map((service) => (
            <Card key={service.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Service</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-stone-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">{service.description}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section spacing="sm">
        <Grid columns="sidebar">
          <SectionHeading
            as="h2"
            className="max-w-2xl"
            eyebrow="Process"
            title="From concept questions to delivery-ready coordination"
            description="The homepage should show a calm, structured workflow rather than a long narrative."
          />
          <div className="grid gap-4">
            {processSteps.map((step) => (
              <Card key={step.step} tone="muted" className="flex gap-5 p-5 sm:items-start">
                <div className="text-2xl font-semibold tracking-[-0.04em] text-amber-700">{step.step}</div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-stone-600">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Grid>
      </Section>

      <Section spacing="sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            as="h2"
            className="max-w-3xl"
            eyebrow="Featured References"
            title="Selected project examples that reinforce credibility"
            description="Mock data is used here to shape the listing and content rhythm before Supabase integration starts."
          />
          <LinkButton to="/references" variant="secondary">
            View all references
          </LinkButton>
        </div>
        <Grid className="mt-10" columns="3">
          {isLoadingFeaturedProjects
            ? Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="min-h-80 animate-pulse bg-stone-100" />
              ))
            : featuredProjects.length > 0
            ? featuredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden p-0">
                  <div className="aspect-[4/3] bg-stone-200">
                    <img
                      alt={project.title}
                      className="h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.src = heroImage
                      }}
                      src={project.featuredImage}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.categories.slice(0, 2).map((category) => (
                        <Badge key={category} tone="brand">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-stone-950">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{project.shortDescription}</p>
                  </div>
                </Card>
              ))
            : (
              <Card className="md:col-span-2 xl:col-span-3">
                <p className="text-sm leading-7 text-stone-600">
                  Featured project data is ready to come from Supabase, but no featured records are currently available.
                </p>
              </Card>
            )}
        </Grid>
      </Section>

      <Section spacing="sm">
        <Card className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            as="h2"
            className="max-w-xl"
            eyebrow="Quality and Technology"
            title="Technical discipline, not visual noise"
            description="The visual system and content structure are built to support engineering credibility, concise communication, and future CMS-backed references."
          />
          <div className="grid gap-4">
            {qualityPoints.map((point) => (
              <Card key={point} tone="muted" className="p-5">
                <p className="text-lg font-semibold tracking-[-0.02em] text-stone-950">{point}</p>
              </Card>
            ))}
          </div>
        </Card>
      </Section>

      <Section spacing="md">
        <Card className="border-stone-900 bg-stone-950 px-8 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Ready to discuss a project scope or technical requirement?
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-300">
                The contact page is designed to stay direct, practical, and easy to act on.
              </p>
            </div>
            <LinkButton to="/references" variant="secondary">
              Review references
            </LinkButton>
            <LinkButton className="bg-white/10 text-white hover:bg-white/20" to="/contact" variant="ghost">
              Contact NPI
            </LinkButton>
          </div>
        </Card>
      </Section>
    </div>
  )
}

export default HomePage
