import { Grid } from '@/components/Grid'
import { Section } from '@/components/Section'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'

const serviceGroups = [
  {
    title: 'Engineering support',
    description: 'Planning support, coordination inputs, and technical clarity for complex project scopes.',
  },
  {
    title: 'Documentation and preparation',
    description: 'Structured materials that help move projects from idea to delivery-ready coordination.',
  },
  {
    title: 'Execution support',
    description: 'Practical support near implementation, with attention to interfaces, sequence, and site reality.',
  },
]

const lifecycle = ['Concept definition', 'Technical alignment', 'Execution preparation', 'Delivery coordination']

export function ServicesPage() {
  return (
    <div>
      <Section spacing="lg">
        <SectionHeading
          className="max-w-3xl"
          as="h1"
          eyebrow="Services"
          title="Service groups shaped for industrial project delivery"
          description="The Services page stays concise and structured so visitors can understand the offer without reading long brochure-style copy."
        />
      </Section>

      <Section spacing="sm">
        <Grid columns="3">
          {serviceGroups.map((group) => (
            <Card key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Service Group</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-stone-950">{group.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">{group.description}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section spacing="sm">
        <Card className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            as="h2"
            className="max-w-xl"
            eyebrow="Lifecycle Support"
            title="Support can extend across more than one project stage"
            description="This block translates the documented project lifecycle support into a simple, readable structure."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {lifecycle.map((item, index) => (
              <Card key={item} tone="muted" className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Stage {index + 1}</p>
                <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-stone-950">{item}</p>
              </Card>
            ))}
          </div>
        </Card>
      </Section>
    </div>
  )
}

export default ServicesPage
