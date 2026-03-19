import { Link } from 'react-router-dom'

import { siteConfig } from '@/data/site'

import { Container } from './Container'

const services = [
  'Process and mechanical systems',
  'Electrical and instrumentation support',
  'Technical documentation',
  'Execution readiness',
]

export function SiteFooter() {
  return (
    <footer className="pb-6 pt-20">
      <div className="npi-shell">
        <div className="overflow-hidden rounded-[1.4rem] bg-[color:var(--surface-alt)] shadow-[var(--shadow-card)]">
          <div className="npi-soft-lines px-6 py-14 sm:px-10 lg:px-14">
            <Container className="relative grid gap-10 px-0 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr]" size="wide">
              <div className="max-w-sm">
                <p className="text-3xl font-semibold tracking-[-0.06em] text-[color:var(--text)]">{siteConfig.companyName}</p>
                <p className="mt-5 text-base leading-8 text-[color:var(--text-muted)]">
                  NPI presents engineering capability through clear services, selected references, and direct contact
                  paths for industrial and infrastructure stakeholders.
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--brand)]">
                  Engineering-first communication
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Company</h2>
                <ul className="mt-6 grid gap-3 text-[0.98rem] text-[color:var(--text-muted)]">
                  {siteConfig.footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link className="transition hover:text-[color:var(--text)]" to={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Services</h2>
                <ul className="mt-6 grid gap-3 text-[0.98rem] text-[color:var(--text-muted)]">
                  {services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">Office</h2>
                <div className="mt-6 space-y-4 text-[0.98rem] leading-8 text-[color:var(--text-muted)]">
                  <p>{siteConfig.legalName}</p>
                  <div>
                    {siteConfig.contact.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <p className="font-semibold text-[color:var(--text)]">P: {siteConfig.contact.phone}</p>
                  <p className="font-semibold text-[color:var(--text)]">E: {siteConfig.contact.email}</p>
                </div>
              </div>
            </Container>
          </div>

          <div className="bg-[color:var(--brand)] px-6 py-5 text-white sm:px-10 lg:px-14">
            <Container className="flex flex-col gap-4 px-0 text-sm sm:flex-row sm:items-center sm:justify-between" size="wide">
              <p>{siteConfig.footerNote}</p>
              <div className="flex gap-5">
                <Link className="transition hover:text-[color:var(--surface-alt)]" to="/about">
                  Privacy
                </Link>
                <Link className="transition hover:text-[color:var(--surface-alt)]" to="/contact">
                  Contact
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
