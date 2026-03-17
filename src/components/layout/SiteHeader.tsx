import { NavLink } from 'react-router-dom'

import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

import { Container } from './Container'

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <NavLink className="text-lg font-semibold tracking-[0.2em] text-stone-900" to="/">
          {siteConfig.companyName}
        </NavLink>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  className={({ isActive }) => cn(baseLinkClassName, isActive && activeLinkClassName)}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

const baseLinkClassName = 'rounded-full px-4 py-2 transition hover:bg-stone-100 hover:text-stone-900'

const activeLinkClassName = 'bg-amber-100 font-medium text-stone-950'

export default SiteHeader
