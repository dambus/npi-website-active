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
import { siteConfig } from '@/data/site'
import { getProjects } from '@/services/projects/getProjects'
import type { Project } from '@/types/project'

const heroLandingImage = '/media/hero-landing.jpg'
const heroFrontImage = '/media/promo pictures/DSC_8772.jpg'
const servicesFeatureImage = '/media/on site pictures/DSC_8729-Edit.jpg'
const processSectionImage = '/media/on site pictures/DSC_8593-Edit.jpg'
const companyFoundedYear = 2008
const companyYearsInOperation = new Date().getFullYear() - companyFoundedYear

const introStats = [
  {
    value: companyYearsInOperation,
    suffix: '',
    eyebrow: 'Founded',
    emphasis: 'Years in operation',
    supporting: 'Founded in 2008, Neopetrol Inzenjering has steadily built its presence in industrial engineering and technical documentation.',
  },
  {
    value: 20,
    suffix: '+',
    eyebrow: 'Team',
    emphasis: 'Engineers',
    supporting: 'A multidisciplinary engineering team working across industrial and energy projects.',
  },
  {
    value: 150,
    suffix: '+',
    eyebrow: 'Portfolio',
    emphasis: 'Completed projects',
    supporting: 'Project experience developed through technical documentation, design, and project support.',
  },
  {
    value: 30,
    suffix: '+',
    eyebrow: 'Network',
    emphasis: 'Clients and partners',
    supporting: 'Experience with investors, EPC contractors, public institutions, and engineering partners.',
  },
  {
    value: 5,
    suffix: '',
    eyebrow: 'Coverage',
    emphasis: 'Engineering disciplines',
    supporting: 'Process, mechanical, electrical, instrumentation and control, and civil engineering.',
  },
]

const introAudience = [
  'National energy companies',
  'Government institutions',
  'International engineering firms',
]

const services = [
  {
    title: 'Conceptual Design and Feasibility Studies',
    description: 'Early-phase engineering support used to define technical direction, scope, and project feasibility.',
    icon: TrophyIcon,
  },
  {
    title: 'Front End Engineering Design',
    description: 'FEED packages prepared to support planning, coordination, and investment-stage decision making.',
    icon: BoltIcon,
  },
  {
    title: 'Basic and Detailed Design',
    description: 'Technical documentation developed from design intent through construction-ready project documentation.',
    icon: CpuChipIcon,
  },
  {
    title: 'Technical Documentation and Studies',
    description: 'Engineering studies and documentation prepared to meet industrial, regulatory, and project requirements.',
    icon: IconBroadcast,
  },
  {
    title: 'Construction Support',
    description: 'Engineering participation continues during construction when coordination and technical clarification are needed.',
    icon: DocumentTextIcon,
  },
]

const processPoints = [
  'Process engineering',
  'Mechanical engineering',
  'Electrical engineering',
  'Instrumentation and control (I&C)',
  'Civil engineering',
]

const performanceStats = [
  { value: 1, suffix: '', label: 'Gas pipelines and gas infrastructure' },
  { value: 2, suffix: '', label: 'Compressor stations and processing facilities' },
  { value: 3, suffix: '', label: 'Measurement and metering stations' },
  { value: 4, suffix: '', label: 'Storage and distribution systems' },
  { value: 5, suffix: '', label: 'Instrumentation and control systems' },
]

const contactHighlights = [
  { label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { label: 'Phone', value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}` },
]
const contactSteps = [
  'Share your project scope or engineering requirement.',
  'We review the request and align on the next technical step.',
  'The conversation continues through the full contact page or direct channels.',
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
                  Neopetrol Inzenjering
                </span>
                <h1 className="mt-8 max-w-5xl text-[clamp(3.2rem,6.2vw,6.1rem)] font-normal leading-[0.95] tracking-[-0.055em] text-white">
                  Engineering and design for oil, gas and process industry
                </h1>
                <p className="mt-7 max-w-2xl text-[1.02rem] leading-7 text-[color:var(--text-on-dark-muted)] sm:text-lg sm:leading-8">
                  Neopetrol Inzenjering is a Serbian engineering company specialized in the design and development of
                  industrial facilities in the oil, gas and process industries.
                </p>
                <p className="mt-5 max-w-2xl text-[1.02rem] leading-7 text-[color:var(--text-on-dark-muted)] sm:text-lg sm:leading-8">
                  Founded in 2008 in Novi Sad, the company provides engineering, consulting and technical
                  documentation services across all phases of project development, from conceptual studies to detailed
                  design and construction support.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <ActionLink to="/references" variant="primary">
                    View References
                  </ActionLink>
                  <ActionLink to="/contact" variant="secondary">
                    Contact Us
                  </ActionLink>
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
                        Engineering profile
                      </p>
                      <p className="mt-3 text-[1.35rem] font-medium leading-[1.12] tracking-[-0.035em] text-white">
                        Our partners include national energy companies, government institutions and international
                        engineering firms.
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
                    Partners
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
                  Neopetrol Inzenjering builds long-term partnerships with investors, EPC companies and technical
                  teams looking for a reliable engineering partner for complex industrial projects.
                </p>
              </div>

              <div>
                <h2 className="max-w-5xl text-[clamp(2.55rem,4.6vw,4.8rem)] font-semibold leading-[1] tracking-[-0.065em] text-[color:var(--text)]">
                  Engineering capacity shaped by experience, coordination and industrial project responsibility.
                </h2>
                <p className="mt-6 max-w-3xl text-[1.02rem] leading-7 text-[color:var(--text-muted)] sm:text-lg sm:leading-8">
                  Founded in Novi Sad in 2008, Neopetrol Inzenjering brings together multidisciplinary engineering
                  knowledge, practical project coordination and years of work on oil, gas and process facilities
                  across the region.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ActionLink to="/about" variant="primary">
                    Learn More
                  </ActionLink>
                </div>
              </div>
              </div>

              <div className="relative z-10 mt-14 grid gap-4 sm:mt-16 sm:auto-rows-fr sm:grid-cols-2 xl:grid-cols-3">
              {introStats.map((item) => (
                <article
                  key={item.emphasis}
                  className="group h-full rounded-[1.05rem] border border-white/75 bg-white/95 p-6 shadow-[0_18px_36px_rgba(11,20,20,0.08)] backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[rgba(15,154,104,0.22)] hover:bg-white hover:shadow-[0_24px_46px_rgba(11,20,20,0.1)]"
                >
                  <div className="flex h-full gap-5">
                    <div className="flex min-w-[6.75rem] flex-col items-start justify-between border-r border-[rgba(15,154,104,0.14)] pr-5">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-strong)]">
                        {item.eyebrow}
                      </p>
                      <p className="[writing-mode:vertical-rl] rotate-180 text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-[color:var(--text)] sm:text-6xl">
                        {item.value}
                        <span className="text-[color:var(--brand)]">{item.suffix}</span>
                      </p>
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <p className="text-[1.15rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[color:var(--text)] sm:text-[1.35rem]">
                        <span className="text-[color:var(--brand-strong)]">{item.emphasis}</span>
                      </p>
                      <p className="mt-4 text-sm leading-[1.55] text-[color:var(--text-muted)] sm:text-[0.98rem] sm:leading-[1.6]">
                        {item.supporting}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
              </div>

              <div className="h-4 sm:h-6" />
            </Container>
            </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex aspect-square flex-col rounded-[1.2rem] bg-[color:var(--brand-soft)] p-8 shadow-[var(--shadow-card)] lg:p-9">
                <div>
                <DocumentTextIcon className="h-14 w-14 stroke-[1.7] text-[color:var(--brand-strong)]" />
                <p className="mt-8 max-w-[12ch] text-[clamp(1.95rem,2.6vw,2.7rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-[color:var(--text)]">
                  Engineering services
                </p>
              </div>
              <p className="mt-auto max-w-[24ch] pt-5 text-[0.98rem] leading-7 text-[color:var(--text-muted)]">
                Neopetrol Inzenjering provides engineering and design services for industrial facilities and energy infrastructure.
              </p>
            </div>

            <div className="flex aspect-square flex-col p-8 lg:p-9">
              <div>
                <span className="section-label">Choose the best fit</span>
                <h2 className="mt-9 max-w-[11ch] text-[clamp(1.95rem,2.8vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-[color:var(--text)]">
                  Work scopes matched to the project phase.
                </h2>
              </div>
              <div className="mt-auto">
                <p className="max-w-[24ch] text-base leading-7 text-[color:var(--text-muted)] sm:text-[1.02rem] sm:leading-8">
                  Depending on the project phase, our work includes concept studies, FEED, detailed design,
                  documentation, and construction support.
                </p>
                <div className="mt-8">
                  <ActionLink to="/services" variant="primary">
                    View Services
                  </ActionLink>
                </div>
              </div>
            </div>

            <div className="flex aspect-square flex-col rounded-[1.2rem] bg-white p-8 shadow-[var(--shadow-card)] lg:p-9">
              <div>
                <IconUsersGroup className="h-14 w-14 stroke-[1.7] text-[color:var(--brand)]" />
                <h3 className="mt-8 max-w-[12ch] text-[clamp(1.95rem,2.5vw,2.55rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[color:var(--text)]">
                  Engineering cooperation
                </h3>
              </div>
              <p className="mt-auto max-w-[24ch] pt-5 text-[1rem] leading-7 text-[color:var(--text-muted)]">
                  Our engineers regularly cooperate with investors, EPC contractors and international engineering companies.
              </p>
            </div>
            {services.slice(0, 2).map((service) => (
              <ServiceHoverCard
                key={service.title}
                description={service.description}
                icon={service.icon}
                title={service.title}
              />
            ))}

            <div className="relative aspect-square overflow-hidden rounded-[1.2rem] bg-[color:var(--surface-inverse)] shadow-[var(--shadow-card)]">
              <img
                alt="NPI industrial plant infrastructure"
                className="h-full w-full object-cover opacity-55"
                src={servicesFeatureImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,20,20,0.84)] via-transparent to-transparent" />
              <div className="absolute left-6 top-6 grid h-20 w-20 place-items-center rounded-full bg-[color:var(--brand)] text-white shadow-[0_16px_36px_var(--brand-glow)]">
                <IconTrendingUp className="h-10 w-10 stroke-[1.8]" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg text-[color:var(--text-on-dark-muted)]">Core disciplines</p>
                <p className="mt-2 text-6xl font-semibold tracking-[-0.08em]">5</p>
              </div>
            </div>
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
                Engineering disciplines
              </span>
              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--text-on-dark-muted)]">
                01.
              </p>
              <h2 className="mt-5 max-w-lg text-[clamp(2.45rem,4vw,3.9rem)] font-semibold leading-[1] tracking-[-0.065em] text-white">
                Engineering disciplines
              </h2>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-7 text-[color:var(--text-on-dark-muted)] sm:text-lg sm:leading-8">
                Projects are developed through coordinated work of multiple engineering disciplines. The
                multidisciplinary approach ensures technical consistency and full coordination of project documentation.
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
                <ActionLink to="/services" variant="primary">
                  Explore Services
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
                <span className="section-label">Industry experience</span>
                <h2 className="mt-7 text-[clamp(2.45rem,4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-[color:var(--text)]">
                  Industry experience
                </h2>
              </div>
              <div className="flex items-center gap-4 self-start rounded-full bg-white/90 px-5 py-4 shadow-[var(--shadow-card)]">
                <div className="min-w-[5.5rem] text-[3rem] font-semibold leading-none tracking-[-0.08em] text-[color:var(--brand-strong)]">17+</div>
                <p className="max-w-xs text-base leading-6 text-[color:var(--text-muted)]">
                  Years of project participation across oil, gas, and industrial infrastructure work.
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
                Selected project references
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-muted)]">
                Neopetrol Inzenjering engineers have participated in projects for national energy companies,
                international contractors and industrial investors in the oil and gas sector.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--text-muted)]">
                A selection of recent projects can be found in the References section.
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

      <section className="pb-10 sm:pb-14">
        <div className="npi-shell">
          <div className="overflow-hidden rounded-[1.4rem] bg-[radial-gradient(circle_at_bottom_right,rgba(30,143,121,0.18),transparent_30%),linear-gradient(135deg,#0b1414_0%,#0d1d1f_65%,#123538_100%)] px-6 py-14 text-[color:var(--text-on-dark)] sm:px-10 lg:px-14 lg:py-16">
            <Container className="px-0" size="wide">
              <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <span className="section-label section-label-dark">
                  Engineering partnership
                </span>
                <h2 className="mt-7 text-[clamp(2.45rem,4vw,4.1rem)] font-semibold leading-[1] tracking-[-0.065em] text-white">
                  Engineering partnership
                </h2>
                <p className="mt-5 max-w-2xl text-[1.02rem] leading-7 text-[color:var(--text-on-dark-muted)] sm:text-lg sm:leading-8">
                  For cooperation inquiries, project participation or engineering support, please contact our team.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ActionLink to="/contact" variant="primary">
                    Contact us
                  </ActionLink>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-6 text-[color:var(--text-on-dark-muted)] sm:text-base sm:leading-7">
                  Contact details remain direct and practical so project conversations can start without delay.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.2rem] border border-white/10 bg-white/7 p-6 backdrop-blur-md sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-soft)]">
                    Direct channels
                  </p>
                  <div className="mt-6 grid gap-4">
                    {contactHighlights.map((item) => (
                      <a
                        key={item.label}
                        className="group flex items-center justify-between gap-4 rounded-[1rem] border border-white/10 bg-white/8 px-5 py-4 transition duration-300 hover:border-white/20 hover:bg-white/12"
                        href={item.href}
                      >
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-on-dark-muted)]">
                            {item.label}
                          </p>
                          <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                            {item.value}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-[color:var(--brand-soft)] transition duration-300 group-hover:translate-x-1">
                          Reach out
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-soft)]">
                    Next step
                  </p>
                  <ol className="mt-5 grid gap-3">
                    {contactSteps.map((step, index) => (
                      <li
                        key={step}
                        className="flex items-start gap-4 rounded-[0.95rem] border border-white/8 bg-black/10 px-4 py-4"
                      >
                        <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-[color:var(--text-on-dark-muted)] sm:text-base">{step}</p>
                      </li>
                    ))}
                  </ol>
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
    <article className="group relative flex aspect-square overflow-hidden rounded-[0.95rem] border border-transparent bg-white p-8 shadow-[var(--shadow-card)] transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[color:var(--brand-strong)] hover:shadow-[0_22px_50px_rgba(15,154,104,0.18)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--brand)_0%,var(--brand-strong)_100%)] opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_36%)] opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
      <div className="relative z-10 flex flex-1 flex-col">
        <span className="inline-flex">
          <Icon className="npi-hover-bounce-icon h-14 w-14 text-[color:var(--brand)] transition duration-300 ease-out group-hover:text-white" />
        </span>
        <h3 className="mt-8 max-w-[12ch] text-[1.75rem] font-semibold leading-[1.04] tracking-[-0.05em] text-[color:var(--text)] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
          {title}
        </h3>
        <p className="mt-auto pt-5 text-base leading-7 text-[color:var(--text-muted)] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
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
