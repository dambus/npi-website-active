import * as React from 'react'
import {
  BoltIcon,
  CpuChipIcon,
  DocumentTextIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline'
import { IconBroadcast, IconTrendingUp, IconUsersGroup } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { ButtonArrowIcon } from '@/components/ui/ButtonArrowIcon'
import { getProjects } from '@/services/projects/getProjects'
import type { Project } from '@/types/project'

const heroLandingImage = '/media/hero-landing.jpg'
const heroFrontImage = '/media/promo pictures/DSC_8772.jpg'
const servicesFeatureImage = '/media/on site pictures/DSC_8729-Edit.jpg'
const processSectionImage = '/media/on site pictures/DSC_8593-Edit.jpg'

const introStats = [
  { value: 20, suffix: '+', label: 'years in industrial project environments' },
  { value: 4, suffix: '', label: 'core delivery groups across engineering support' },
  { value: 3, suffix: '', label: 'selected references highlighted on the homepage' },
]

const introAudience = [
  'Project owners and investors',
  'EPC and delivery partners',
  'Industrial decision-makers',
]

const services = [
  {
    title: 'Process and Mechanical Systems',
    description: 'Support for plant, utility, and process-oriented scopes that require disciplined technical coordination.',
    icon: TrophyIcon,
  },
  {
    title: 'Electrical Engineering',
    description: 'Technical input for power, distribution, and integration tasks within broader project packages.',
    icon: BoltIcon,
  },
  {
    title: 'Instrumentation and Control',
    description: 'Structured support for control logic, field instrumentation, and project communication between disciplines.',
    icon: CpuChipIcon,
  },
  {
    title: 'Telecom, Fire and Gas',
    description: 'Coordination for systems that depend on reliability, safety alignment, and documentation clarity.',
    icon: IconBroadcast,
  },
  {
    title: 'Technical Documentation',
    description: 'Execution-ready documentation that helps teams move from concept definition to delivery preparation.',
    icon: DocumentTextIcon,
  },
]

const processPoints = [
  'Define the project scope and technical priorities early.',
  'Coordinate multidisciplinary inputs into a clear delivery path.',
  'Prepare documentation and interfaces for execution readiness.',
  'Support communication through the practical realities of delivery.',
]

const performanceStats = [
  { value: 8.5, suffix: 'x', label: 'project scale multiplier reflected through structured delivery support' },
  { value: 20, suffix: '+', label: 'industrial and energy-focused environments informing the presentation' },
  { value: 93, suffix: '%', label: 'of the interface optimized for readability, hierarchy, and fast scanning' },
  { value: 4, suffix: '', label: 'service groups visible before the visitor needs deeper project detail' },
]

const partnerLogos = ['EPC Networks', 'Petrogrid', 'Energo Systems', 'ControlHub', 'Process Line', 'Infra East']

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
    <div className="pb-8">
      <section className="pt-4 sm:pt-5">
        <div className="npi-shell">
          <div className="npi-grid-lines relative overflow-hidden rounded-[1.4rem] bg-[linear-gradient(135deg,#091112_0%,#0c1b1d_46%,#123437_100%)] px-6 py-20 text-[color:var(--text-on-dark)] shadow-[0_40px_120px_rgba(11,20,20,0.22)] sm:px-10 sm:py-24 lg:px-14 lg:py-28">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center opacity-24 blur-[4px]"
              style={{ backgroundImage: `url(${heroLandingImage})` }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,143,121,0.24),transparent_30%),linear-gradient(90deg,rgba(8,14,15,0.84)_0%,rgba(8,14,15,0.55)_42%,rgba(8,14,15,0.28)_100%)]" />
            <Container className="relative z-10 px-0" size="wide">
              <div className="grid gap-12 lg:min-h-[640px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <span className="section-label section-label-dark">
                  Engineering support that stays clear under complexity
                </span>
                <h1 className="mt-8 max-w-5xl text-[clamp(3.2rem,6.2vw,6.1rem)] font-normal leading-[0.95] tracking-[-0.055em] text-white">
                  Engineering clarity for demanding industrial projects.
                </h1>
                <p className="mt-7 max-w-2xl text-[1.02rem] leading-7 text-[color:var(--text-on-dark-muted)] sm:text-lg sm:leading-8">
                  NPI supports project owners, partners, and delivery teams with multidisciplinary engineering,
                  technical documentation, and execution-focused coordination.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <ActionLink to="/references" variant="primary">
                    View References
                  </ActionLink>
                  <p className="max-w-sm text-sm leading-6 text-[color:var(--text-on-dark-muted)] sm:text-base sm:leading-7">
                    Built to help investors, clients, and partners understand capability fast and move directly into
                    contact or references.
                  </p>
                </div>
              </div>

              <div className="relative lg:justify-self-end">
                <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/8 shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-md">
                  <img
                    alt="NPI industrial facility detail"
                    className="h-[360px] w-full object-cover sm:h-[420px] lg:h-[520px] lg:w-[480px]"
                    src={heroFrontImage}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,14,15,0.76)] via-transparent to-[rgba(8,14,15,0.18)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <div className="max-w-sm rounded-[1rem] border border-white/12 bg-[rgba(8,14,15,0.56)] p-5 backdrop-blur-md">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-soft)]">
                        Project delivery focus
                      </p>
                      <p className="mt-3 text-[1.35rem] font-medium leading-[1.12] tracking-[-0.035em] text-white">
                        Technical support shaped for scope definition, coordination, and execution readiness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section className="pt-20 sm:pt-24">
        <div className="npi-shell">
          <div className="npi-soft-lines overflow-hidden rounded-[1.4rem] bg-[linear-gradient(135deg,#b9d9cd_0%,#d7e8e0_48%,#f3f7f5_100%)] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
            <Container className="relative z-10 px-0" size="wide">
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div className="max-w-sm">
                <span className="section-label">Get to know NPI</span>
                <div className="mt-10 rounded-[0.95rem] border border-white/65 bg-white/78 p-5 shadow-[0_16px_28px_rgba(11,20,20,0.08)] backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-strong)]">
                    Who We Support
                  </p>
                  <div className="mt-4 grid gap-3">
                    {introAudience.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-full border border-[rgba(15,154,104,0.16)] bg-white/80 px-4 py-3 text-sm font-medium text-[color:var(--text)] shadow-[0_8px_18px_rgba(11,20,20,0.04)]"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-5 max-w-xs text-lg leading-7 text-[color:var(--text-muted)]">
                  Built for stakeholders who need a serious technical partner, not marketing noise.
                </p>
              </div>

              <div>
                <h2 className="max-w-5xl text-[clamp(2.55rem,4.6vw,4.8rem)] font-semibold leading-[1] tracking-[-0.065em] text-[color:var(--text)]">
                  Coordinated engineering support, measurable project discipline, and communication shaped for
                  industrial decision-makers.
                </h2>
                <p className="mt-6 max-w-3xl text-[1.02rem] leading-7 text-[color:var(--text-muted)] sm:text-lg sm:leading-8">
                  NPI presents its capabilities through clear service groups, selected references, and a practical
                  description of how technical work moves from definition to execution-ready coordination.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ActionLink to="/about" variant="primary">
                    Learn More
                  </ActionLink>
                  <ActionLink to="/services" variant="secondary">
                    Explore Services
                  </ActionLink>
                </div>
              </div>
              </div>

              <div className="relative z-10 mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {introStats.map((item) => (
                <div key={item.label} className="rounded-[1rem] border border-white/70 bg-white/92 p-6 shadow-[0_18px_36px_rgba(11,20,20,0.08)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--brand)]">Proof</p>
                  <p className="mt-4 text-5xl font-semibold tracking-[-0.07em] text-[color:var(--text)]">
                    {item.value}
                    {item.suffix}
                  </p>
                  <p className="mt-3 text-base leading-6 text-[color:var(--text-muted)]">{item.label}</p>
                </div>
              ))}
              </div>
            </Container>
            </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr_0.95fr]">
            <div className="rounded-[1.2rem] bg-[color:var(--brand-soft)] p-8 shadow-[var(--shadow-card)] lg:p-10">
              <ServiceIconCard icon={TrophyIcon} title="Award-worthy discipline" />
              <p className="mt-8 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--text)]">
                Solutions built for engineering-led business needs.
              </p>
              <p className="mt-5 text-base leading-7 text-[color:var(--text-muted)]">
                Service groups stay concise, but each one maps to real technical support used in complex industrial
                environments.
              </p>
            </div>

            <div className="flex flex-col justify-center px-1 lg:px-4">
              <span className="section-label">Choose the best fit</span>
              <h2 className="mt-7 max-w-xl text-[clamp(2.45rem,4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-[color:var(--text)]">
                Service groups that explain capability quickly.
              </h2>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-7 text-[color:var(--text-muted)] sm:text-lg sm:leading-8">
                The homepage highlights selected engineering areas so visitors can identify relevance before diving into
                deeper service detail.
              </p>
              <div className="mt-8">
                <ActionLink to="/services" variant="primary">
                  Learn More
                </ActionLink>
              </div>
            </div>

            <div className="rounded-[1.2rem] bg-white p-8 shadow-[var(--shadow-card)] lg:p-10">
              <ServiceIconCard icon={IconUsersGroup} title="Expert team alignment" />
              <p className="mt-7 text-base leading-7 text-[color:var(--text-muted)]">
                Teams, partners, and decision-makers get a calm overview of what NPI supports and how technical
                communication is structured across project interfaces.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr_0.95fr]">
            {services.slice(0, 2).map((service) => (
              <ServiceHoverCard
                key={service.title}
                description={service.description}
                icon={service.icon}
                title={service.title}
              />
            ))}

            <div className="relative overflow-hidden rounded-[1.2rem] bg-[color:var(--surface-inverse)]">
              <img
                alt="NPI industrial plant infrastructure"
                className="h-full min-h-[320px] w-full object-cover opacity-55"
                src={servicesFeatureImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,20,20,0.84)] via-transparent to-transparent" />
              <div className="absolute left-6 top-6 grid h-20 w-20 place-items-center rounded-full bg-[color:var(--brand)] text-white shadow-[0_16px_36px_var(--brand-glow)]">
                <IconTrendingUp className="h-10 w-10 stroke-[1.8]" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg text-[color:var(--text-on-dark-muted)]">Faster alignment</p>
                <p className="mt-2 text-6xl font-semibold tracking-[-0.08em]">8.5x</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {services.slice(2).map((service) => (
              <ServiceHoverCard
                key={service.title}
                description={service.description}
                icon={service.icon}
                title={service.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="npi-shell">
          <div className="grid overflow-hidden rounded-[1.4rem] bg-[color:var(--surface-inverse)] lg:grid-cols-[0.9fr_1.1fr]">
            <Container className="contents" size="wide">
            <div className="px-8 py-14 text-[color:var(--text-on-dark)] sm:px-10 lg:px-14 lg:py-16">
              <span className="section-label section-label-dark">
                Our process
              </span>
              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--text-on-dark-muted)]">
                01.
              </p>
              <h2 className="mt-5 max-w-lg text-[clamp(2.45rem,4vw,3.9rem)] font-semibold leading-[1] tracking-[-0.065em] text-white">
                From scope definition to execution-ready coordination.
              </h2>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-7 text-[color:var(--text-on-dark-muted)] sm:text-lg sm:leading-8">
                The homepage explains how NPI works without turning the page into a brochure. Clear stages reduce
                ambiguity and make technical capability easier to trust.
              </p>
              <ul className="mt-8 grid gap-4">
                {processPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base leading-6 text-[color:var(--text-on-dark-muted)]">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[color:var(--brand)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ActionLink to="/contact" variant="primary">
                  Discuss a Project
                </ActionLink>
              </div>
            </div>

            <div className="relative min-h-[360px] bg-[color:var(--surface-alt)]">
              <img
                alt="NPI onsite process infrastructure"
                className="h-full w-full object-cover brightness-[1.03] saturate-[0.92]"
                src={processSectionImage}
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,154,104,0.18)_0%,rgba(255,255,255,0.04)_52%,rgba(15,154,104,0.08)_100%)]" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(255,255,255,0.02)] to-[rgba(13,29,31,0.18)]" />
            </div>
            </Container>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="npi-shell">
          <div className="npi-soft-lines overflow-hidden rounded-[1.4rem] bg-[color:var(--surface-alt)] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
            <Container className="relative z-10 px-0" size="wide">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <span className="section-label">Performance facts</span>
                <h2 className="mt-7 text-[clamp(2.45rem,4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-[color:var(--text)]">
                  Numbers that strengthen a calm, credible engineering narrative.
                </h2>
              </div>
              <div className="flex items-center gap-4 self-start rounded-full bg-white/90 px-5 py-4 shadow-[var(--shadow-card)]">
                <div className="min-w-[5.5rem] text-[3rem] font-semibold leading-none tracking-[-0.08em] text-[color:var(--brand-strong)]">
                  92%
                </div>
                <p className="max-w-xs text-base leading-6 text-[color:var(--text-muted)]">
                  Increased clarity in how the company presents capability, services, and references.
                </p>
              </div>
              </div>

              <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {performanceStats.map((stat, index) => (
                <StatCard key={stat.label} index={index + 1} {...stat} />
              ))}
              </div>
            </Container>
            </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container size="wide">
          <div className="flex flex-col gap-5 lg:items-center lg:justify-between xl:flex-row">
            <div className="max-w-3xl">
              <span className="section-label">Featured references</span>
              <h2 className="mt-8 text-[clamp(2.6rem,4.2vw,4.3rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-[color:var(--text)]">
                Selected project references that reinforce technical credibility.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-muted)]">
                The homepage keeps references visible and easy to scan, with concise metadata instead of overloaded
                card content.
              </p>
            </div>
            <ActionLink to="/references" variant="secondary">
              View All References
            </ActionLink>
          </div>

          <div className="mt-12 grid gap-8 xl:grid-cols-3">
            {isLoadingFeaturedProjects
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="min-h-[420px] animate-pulse rounded-[1.75rem] bg-white shadow-[var(--shadow-card)]"
                  />
                ))
              : featuredProjects.length > 0
                ? featuredProjects.map((project) => (
                    <article
                      key={project.id}
                      className="group overflow-hidden rounded-[1.2rem] bg-white shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(11,20,20,0.12)]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--surface-muted)]">
                        <img
                          alt={project.title}
                          className="h-full w-full object-cover"
                          onError={(event) => {
                            event.currentTarget.src = servicesFeatureImage
                          }}
                          src={project.featuredImage}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,154,104,0.16)_0%,rgba(11,20,20,0.26)_100%)] transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%)] opacity-60 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0" />
                      </div>
                      <div className="p-7 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
                        <div className="flex flex-wrap gap-2">
                          {project.categories.slice(0, 2).map((category) => (
                            <span
                              key={category}
                              className="rounded-full bg-[color:var(--surface-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--brand)] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[color:var(--brand-soft)]"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">
                          {project.title}
                        </h3>
                        <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">
                          {project.shortDescription}
                        </p>
                      </div>
                    </article>
                  ))
                : (
                    <div className="rounded-[1.2rem] bg-white p-8 shadow-[var(--shadow-card)] xl:col-span-3">
                      <p className="text-base leading-7 text-[color:var(--text-muted)]">
                        Featured project data is ready, but there are no featured records available yet.
                      </p>
                    </div>
                  )}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="npi-shell">
          <div className="npi-soft-lines overflow-hidden rounded-[1.4rem] bg-[color:var(--surface-alt)] px-6 py-14 sm:px-10 lg:px-14">
            <Container className="relative z-10 px-0" size="wide">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="section-label">Clients and partners</span>
                <h2 className="mt-7 text-[clamp(2.35rem,3.8vw,3.7rem)] font-semibold leading-[1.03] tracking-[-0.065em] text-[color:var(--text)]">
                  A restrained logo strip keeps partnerships visible without stealing attention from projects.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[color:var(--text-muted)]">
                This section is intentionally quiet: it supports trust, but does not compete with references or primary
                calls to action.
              </p>
              </div>

              <div className="relative z-10 mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
              {partnerLogos.map((partner) => (
                <div
                  key={partner}
                  className="grid min-h-[110px] place-items-center rounded-[1rem] bg-white px-6 text-center text-xl font-semibold tracking-[-0.04em] text-[color:var(--text-muted)] grayscale transition duration-200 hover:-translate-y-1 hover:text-[color:var(--text)] hover:grayscale-0"
                >
                  {partner}
                </div>
              ))}
              </div>
            </Container>
            </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="npi-shell">
          <div className="overflow-hidden rounded-[1.4rem] bg-[radial-gradient(circle_at_bottom_right,rgba(30,143,121,0.18),transparent_30%),linear-gradient(135deg,#0b1414_0%,#0d1d1f_65%,#123538_100%)] px-6 py-14 text-[color:var(--text-on-dark)] sm:px-10 lg:px-14 lg:py-16">
            <Container className="px-0" size="wide">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <span className="section-label section-label-dark">
                  Get in touch
                </span>
                <h2 className="mt-7 text-[clamp(2.45rem,4vw,4.1rem)] font-semibold leading-[1] tracking-[-0.065em] text-white">
                  Ready to discuss a project scope or technical requirement?
                </h2>
                <p className="mt-5 max-w-2xl text-[1.02rem] leading-7 text-[color:var(--text-on-dark-muted)] sm:text-lg sm:leading-8">
                  Use the contact route for direct project conversations, reference requests, or early-stage technical
                  inquiries.
                </p>
              </div>

              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <ContactField label="Full name" />
                  <ContactField label="Email address" />
                  <ContactField label="Phone number" />
                  <ContactField label="Service area" placeholder="Engineering support" />
                </div>
                <ContactField className="mt-4" label="Message" multiline placeholder="Briefly describe project context, scope, or timing." />
                <div className="mt-6">
                  <ActionLink to="/contact" variant="primary">
                    Send Inquiry
                  </ActionLink>
                </div>
              </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </div>
  )
}

function ActionLink({
  children,
  to,
  variant,
}: {
  children: React.ReactNode
  to: string
  variant: 'primary' | 'secondary'
}) {
  return (
    <Link className={variant === 'primary' ? 'npi-button npi-button-primary' : 'npi-button npi-button-secondary'} to={to}>
      <span>{children}</span>
      <ButtonArrowIcon />
    </Link>
  )
}

function ContactField({
  className,
  label,
  multiline = false,
  placeholder,
}: {
  className?: string
  label: string
  multiline?: boolean
  placeholder?: string
}) {
  return (
    <div className={className}>
      <p className="mb-3 text-sm font-medium text-[color:var(--text-on-dark-muted)]">{label}</p>
      {multiline ? (
        <div className="min-h-[180px] rounded-[1rem] border border-white/10 bg-white/10 px-4 py-4 text-base text-white/75">
          {placeholder}
        </div>
      ) : (
        <div className="min-h-[56px] rounded-[1rem] border border-white/10 bg-white/10 px-4 py-4 text-base text-white/75">
          {placeholder ?? ''}
        </div>
      )}
    </div>
  )
}

function ServiceIconCard({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
}) {
  return (
    <div>
      <Icon className="h-16 w-16 stroke-[1.7] text-[color:var(--brand)]" />
      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">{title}</h3>
    </div>
  )
}

function ServiceHoverCard({
  description,
  icon: Icon,
  title,
}: {
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
}) {
  return (
    <article className="group relative overflow-hidden rounded-[0.95rem] border border-transparent bg-white p-8 shadow-[var(--shadow-card)] transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[color:var(--brand-strong)] hover:shadow-[0_22px_50px_rgba(15,154,104,0.18)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--brand)_0%,var(--brand-strong)_100%)] opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_36%)] opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
      <div className="relative z-10">
        <span className="inline-flex">
          <Icon className="npi-hover-bounce-icon h-14 w-14 text-[color:var(--brand)] transition duration-300 ease-out group-hover:text-white" />
        </span>
        <h3 className="mt-10 text-2xl font-semibold tracking-[-0.05em] text-[color:var(--text)] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
          {title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
          {description}
        </p>
      </div>
    </article>
  )
}

function StatCard({
  index,
  label,
  suffix,
  value,
}: {
  index: number
  label: string
  suffix: string
  value: number
}) {
  const [ref, displayValue] = useCountUp(value)
  const formattedValue = Number.isInteger(value) ? Math.round(displayValue).toString() : displayValue.toFixed(1)

  return (
    <div ref={ref} className="rounded-[1rem] bg-white p-7 shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[color:var(--surface-muted)] text-[color:var(--brand)]">
          <IconTrendingUp className="h-8 w-8 stroke-[1.7]" />
        </div>
        <p className="text-3xl font-semibold tracking-[-0.06em] text-[color:var(--text-muted)]">
          {String(index).padStart(2, '0')}.
        </p>
      </div>
      <p className="mt-10 text-lg leading-6 text-[color:var(--text-muted)]">{label}</p>
      <p className="mt-4 text-[clamp(3rem,5vw,4.8rem)] font-semibold leading-none tracking-[-0.08em] text-[color:var(--text)]">
        {formattedValue}
        {suffix}
      </p>
    </div>
  )
}

function useCountUp(target: number) {
  const [value, setValue] = React.useState(0)
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    let frameId = 0
    let startTime = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        const duration = 1200

        const tick = (timestamp: number) => {
          if (!startTime) {
            startTime = timestamp
          }

          const progress = Math.min((timestamp - startTime) / duration, 1)
          setValue(target * progress)

          if (progress < 1) {
            frameId = window.requestAnimationFrame(tick)
          }
        }

        frameId = window.requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frameId)
    }
  }, [target])

  return [ref, value] as const
}
export default HomePage
