import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function AboutPage() {
  return (
    <Container className="py-16 lg:py-24">
      <SectionHeading
        className="max-w-3xl"
        eyebrow="About"
        title="About NPI"
        description="This page will introduce the company story, capabilities, and operating approach for industrial and energy-focused clients."
      />
    </Container>
  )
}

export default AboutPage
