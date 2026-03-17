import { LinkButton } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'

export function NotFoundPage() {
  return (
    <Container className="py-20 lg:py-28">
      <div className="rounded-[2rem] border border-stone-200 bg-white px-8 py-14 shadow-sm">
        <SectionHeading
          eyebrow="404"
          title="Page not found"
          description="The page you are looking for does not exist yet or the link is no longer valid."
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <LinkButton to="/">Back to homepage</LinkButton>
          <LinkButton to="/contact" variant="secondary">
            Contact us
          </LinkButton>
        </div>
      </div>
    </Container>
  )
}

export default NotFoundPage
