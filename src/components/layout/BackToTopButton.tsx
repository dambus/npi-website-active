import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      aria-label="Back to top"
      className={cn(
        'fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/92 text-[color:var(--brand-strong)] shadow-[0_18px_38px_rgba(11,20,20,0.12)] backdrop-blur-md transition-[transform,opacity,box-shadow,color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] hover:shadow-[0_22px_44px_rgba(15,154,104,0.16)]',
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      type="button"
    >
      <ArrowUpIcon className="h-5 w-5 stroke-[2.2]" />
    </button>
  )
}

export default BackToTopButton
