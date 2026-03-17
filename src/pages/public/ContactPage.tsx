import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/data/site'

export function ContactPage() {
  return (
    <Container className="py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation"
          description="This page will become the contact hub for inquiries, partnerships, and project discussions."
        />
        <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-stone-500">Email</p>
          <p className="mt-2 text-lg font-medium text-stone-950">{siteConfig.contact.email}</p>
          <p className="mt-5 text-sm text-stone-500">Phone</p>
          <p className="mt-2 text-lg font-medium text-stone-950">{siteConfig.contact.phone}</p>
          <p className="mt-5 text-sm text-stone-500">Address</p>
          <p className="mt-2 text-lg font-medium text-stone-950">{siteConfig.contact.address}</p>
        </div>
      </div>
    </Container>
  )
}

export default ContactPage
