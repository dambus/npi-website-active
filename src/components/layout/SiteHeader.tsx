import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

const logoSrc = '/media/npi-logo.png'

export function SiteHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isPinned, setIsPinned] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const passedThreshold = currentScrollY > 120

      setIsScrolled(passedThreshold)

      if (!passedThreshold) {
        setIsPinned(true)
        lastScrollY = currentScrollY
        return
      }

      const scrollingDown = currentScrollY > lastScrollY
      setIsPinned(!scrollingDown)
      lastScrollY = currentScrollY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isMobileNavOpen) {
      return
    }

    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileNavOpen(false)
      }
    }

    window.addEventListener('resize', closeOnResize)
    return () => {
      window.removeEventListener('resize', closeOnResize)
    }
  }, [isMobileNavOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-transform duration-300',
        isPinned ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="npi-shell">
        <div
          className={cn(
            'border-x border-b bg-white/88 backdrop-blur-xl transition duration-300',
            isScrolled
              ? 'border-[color:var(--border)] shadow-[0_18px_50px_rgba(11,20,20,0.10)]'
              : 'border-white/60 shadow-[0_10px_35px_rgba(11,20,20,0.05)]',
          )}
        >
          <div className="flex min-h-20 items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
            <Link className="flex items-center gap-3" to="/">
              <img alt="NPI" className="h-10 w-auto sm:h-12" src={logoSrc} />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1 text-[0.96rem] font-medium text-[color:var(--text-muted)]">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      className={({ isActive }) =>
                        cn(
                          'rounded-full px-4 py-3 transition hover:text-[color:var(--text)]',
                          isActive && 'text-[color:var(--brand)]',
                        )
                      }
                      to={item.href}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                className="text-[0.98rem] font-semibold text-[color:var(--text)] underline decoration-[color:var(--border-strong)] underline-offset-4 transition hover:text-[color:var(--brand)]"
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              >
                {siteConfig.contact.phone}
              </a>
              <Link className="npi-button npi-button-primary" to="/contact">
                <span>Kontakt</span>
                <span aria-hidden="true" className="npi-button__icon">
                  ↗
                </span>
              </Link>
            </div>

            <button
              aria-expanded={isMobileNavOpen}
              aria-label="Toggle navigation"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text)] transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] lg:hidden"
              onClick={() => setIsMobileNavOpen((value) => !value)}
              type="button"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={cn(
                    'absolute left-0 top-0 h-0.5 w-5 bg-current transition',
                    isMobileNavOpen && 'top-[7px] rotate-45',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 top-[7px] h-0.5 w-5 bg-current transition',
                    isMobileNavOpen && 'opacity-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 top-[14px] h-0.5 w-5 bg-current transition',
                    isMobileNavOpen && 'top-[7px] -rotate-45',
                  )}
                />
              </span>
            </button>
          </div>

          {isMobileNavOpen ? (
            <div className="border-t border-[color:var(--border)] px-5 py-5 lg:hidden">
              <div>
                <nav aria-label="Mobile primary">
                <ul className="grid gap-2">
                  {siteConfig.navigation.map((item) => (
                    <li key={item.href}>
                      <NavLink
                        className={({ isActive }) =>
                          cn(
                            'block rounded-2xl px-4 py-3 text-base font-medium text-[color:var(--text-muted)] transition hover:bg-[color:var(--surface-muted)] hover:text-[color:var(--text)]',
                            isActive && 'bg-[color:var(--surface-muted)] text-[color:var(--brand)]',
                          )
                        }
                        onClick={() => setIsMobileNavOpen(false)}
                        to={item.href}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                </nav>

                <div className="mt-5 flex flex-col gap-3 border-t border-[color:var(--border)] pt-5">
                  <a className="text-sm font-semibold text-[color:var(--text)]" href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}>
                    {siteConfig.contact.phone}
                  </a>
                  <Link
                    className="npi-button npi-button-primary w-full justify-between"
                    onClick={() => setIsMobileNavOpen(false)}
                    to="/contact"
                  >
                    <span>Kontakt</span>
                    <span aria-hidden="true" className="npi-button__icon">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
