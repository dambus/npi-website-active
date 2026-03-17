import { Container } from '@/components/layout/Container'
import { LinkButton } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

const sections = [
  'Hero',
  'Company Intro',
  'Services Snapshot',
  'Featured References',
  'Contact CTA',
]

export function HomePage() {
  return (
    <div className="py-16 lg:py-24">
      <Container>
        <section className="rounded-[2rem] bg-stone-950 px-8 py-14 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Industrial Projects</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Building the next version of the NPI public website.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            This placeholder home page maps the key public sections and gives us a clear
            base for content, design, and CMS integration.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton to="/references" variant="secondary">
              Explore references
            </LinkButton>
            <LinkButton to="/contact" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
              Start a project conversation
            </LinkButton>
          </div>
        </section>
        <section className="mt-12">
          <SectionHeading
            eyebrow="Homepage Sections"
            title="Core content blocks ready for the next design pass"
            description="These placeholders map the key homepage modules we will replace with real content, refined layout, and CMS-backed data."
          />
        </section>
        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <article key={section} className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-700">{section}</p>
              <h2 className="mt-4 text-2xl font-semibold text-stone-950">{section}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Placeholder content block for the {section.toLowerCase()} section.
              </p>
            </article>
          ))}
        </section>
      </Container>
    </div>
  )
}

export default HomePage
