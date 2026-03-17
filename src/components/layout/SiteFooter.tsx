import { Link } from 'react-router-dom'

import { siteConfig } from '@/data/site'

import { Container } from './Container'

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-stone-800 bg-stone-950 py-12 text-stone-300">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">{siteConfig.companyName}</p>
          <p className="mt-3 text-base font-medium text-white">{siteConfig.legalName}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-stone-400">
            {siteConfig.contact.address}
          </p>
          <p className="mt-3 max-w-sm text-sm text-stone-500">{siteConfig.tagline}</p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Contact</h2>
          <p className="mt-3 text-sm">{siteConfig.contact.email}</p>
          <p className="mt-1 text-sm">{siteConfig.contact.phone}</p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Navigate</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-white" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="mt-8 border-t border-stone-800 pt-6">
        <p className="text-sm text-stone-500">{siteConfig.footerNote}</p>
      </Container>
    </footer>
  )
}

export default SiteFooter
