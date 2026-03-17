import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

import { Container } from './Container'

export function SiteHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-white/85 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <NavLink className="text-lg font-semibold tracking-[0.24em] text-stone-900" to="/">
          {siteConfig.companyName}
        </NavLink>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  className={({ isActive }) =>
                    cn(baseLinkClassName, item.href !== '/' && 'hover:text-stone-950', isActive && activeLinkClassName)
                  }
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button
          aria-expanded={isMobileNavOpen}
          aria-label="Toggle navigation"
          className="inline-flex h-11 items-center rounded-full border border-[color:var(--border)] px-4 text-sm font-semibold text-stone-800 transition hover:bg-stone-100 md:hidden"
          onClick={() => setIsMobileNavOpen((value) => !value)}
          type="button"
        >
          Menu
        </button>
      </Container>
      {isMobileNavOpen ? (
        <Container className="pb-4 md:hidden">
          <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-white p-3 shadow-[var(--shadow-soft)]">
            <ul className="space-y-1 text-sm text-stone-700">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    className={({ isActive }) => cn(mobileLinkClassName, isActive && activeMobileLinkClassName)}
                    onClick={() => setIsMobileNavOpen(false)}
                    to={item.href}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      ) : null}
    </header>
  )
}

const baseLinkClassName = 'rounded-full px-4 py-2 font-medium transition hover:bg-stone-100'

const activeLinkClassName = 'bg-amber-100 text-stone-950'

const mobileLinkClassName =
  'block rounded-2xl px-4 py-3 font-medium transition hover:bg-stone-100 hover:text-stone-950'

const activeMobileLinkClassName = 'bg-amber-100 text-stone-950'

export default SiteHeader
