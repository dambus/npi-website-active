import { siteConfig } from '@/data/site'

import { Container } from './Container'

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-stone-950 py-10 text-stone-300">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300">NPI</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-stone-400">
            {siteConfig.contact.address}
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Contact</h2>
          <p className="mt-3 text-sm">{siteConfig.contact.email}</p>
          <p className="mt-1 text-sm">{siteConfig.contact.phone}</p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default SiteFooter
