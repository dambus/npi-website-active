import { Section } from '@/components/Section'
import { LinkButton } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/data/site'

export function ContactPage() {
  return (
    <div>
      <Section spacing="lg">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionHeading
            as="h1"
            className="max-w-3xl"
            eyebrow="Contact"
            title="Start a direct project conversation"
            description="The contact page stays practical: clear details, a visible CTA, and a placeholder area where location support can expand later."
          />
          <Card className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Email</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">{siteConfig.contact.email}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Phone</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">{siteConfig.contact.phone}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Address</p>
              <div className="mt-2 space-y-1 text-lg font-semibold text-stone-950">
                {siteConfig.contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section spacing="sm">
        <Card className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Inquiry CTA</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-4xl">
              Use the contact route as the clearest next step after reviewing services and references.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-stone-600">
              Final inquiry form logic is intentionally deferred. This phase focuses on structure, clarity, and visual readiness.
            </p>
            <div className="mt-8">
              <LinkButton to="/references">View references first</LinkButton>
            </div>
          </div>
          <Card tone="muted" className="flex min-h-64 items-center justify-center border-dashed">
            <p className="max-w-sm text-center text-sm leading-7 text-stone-500">
              Optional map placeholder. This area can later hold embedded map support, location visuals, or office access notes.
            </p>
          </Card>
        </Card>
      </Section>
    </div>
  )
}

export default ContactPage
