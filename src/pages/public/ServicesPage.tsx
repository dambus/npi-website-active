import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ServicesPage() {
  return (
    <Container className="py-16 lg:py-24">
      <SectionHeading
        className="max-w-3xl"
        eyebrow="Services"
        title="Engineering services"
        description="This placeholder page outlines where service categories, delivery models, and supporting proof points will be presented."
      />
    </Container>
  )
}

export default ServicesPage
