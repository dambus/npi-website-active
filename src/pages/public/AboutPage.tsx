import { Grid } from '@/components/Grid'
import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'

const facts = [
  { label: 'Profile', value: 'Industrial engineering and delivery support' },
  { label: 'Focus', value: 'Energy, process, and utility-oriented project environments' },
  { label: 'Approach', value: 'Concise, structured, technically grounded communication' },
]

const capabilities = [
  'Multidisciplinary coordination',
  'Technical documentation support',
  'Delivery and implementation readiness',
  'Engineering-led client communication',
]

const reasons = [
  'Projects are presented through scope, delivery context, and references.',
  'The site stays concise so decision-makers can scan it quickly.',
  'Structure is ready for later CMS-backed references and project updates.',
]

export function AboutPage() {
  return (
    <div>
      <Section spacing="lg">
        <SectionHeading
          className="max-w-3xl"
          as="h1"
          eyebrow="About"
          title="A concise company presentation built around capability and trust"
          description="The About page explains who NPI is, what kind of work environment it supports, and why a references-first structure makes sense for the public website."
        />
      </Section>

      <Section spacing="sm">
        <Grid columns="sidebar">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Company Overview</p>
            <p className="mt-4 text-base leading-8 text-stone-600">
              NPI is presented as a focused engineering organization working across industrial and energy-oriented
              project contexts. The tone is practical, technical, and intentionally light on marketing language.
            </p>
          </Card>
          <div className="grid gap-4">
            {facts.map((fact) => (
              <Card key={fact.label} tone="muted" className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{fact.label}</p>
                <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-stone-950">{fact.value}</p>
              </Card>
            ))}
          </div>
        </Grid>
      </Section>

      <Section spacing="sm">
        <SectionHeading
          as="h2"
          className="max-w-3xl"
          eyebrow="Organization and Capabilities"
          title="Structured support instead of broad, unfocused claims"
          description="This section leaves room for future department detail while already showing the kind of capability snapshot expected in v1."
        />
        <Grid className="mt-10" columns="2">
          {capabilities.map((capability) => (
            <Card key={capability}>
              <Badge tone="brand">Capability</Badge>
              <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-stone-950">{capability}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section spacing="sm">
        <Card className="grid gap-6 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={reason} className="border-t border-stone-200 pt-5 first:border-t-0 first:pt-0 lg:border-l lg:border-t-0 lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Why NPI {index + 1}</p>
              <p className="mt-4 text-base leading-8 text-stone-600">{reason}</p>
            </div>
          ))}
        </Card>
      </Section>
    </div>
  )
}

export default AboutPage
