import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ReferencesPage() {
  return (
    <Container className="py-16 lg:py-24">
      <SectionHeading
        className="max-w-3xl"
        eyebrow="References"
        title="Selected projects"
        description="This section will highlight featured references, industries, and project outcomes pulled from the future CMS and Supabase data layer."
      />
    </Container>
  )
}

export default ReferencesPage
