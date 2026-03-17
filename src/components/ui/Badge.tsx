import type { HTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type BadgeProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    tone?: 'default' | 'brand' | 'muted'
  }
>

const toneClassNames = {
  default: 'bg-stone-100 text-stone-700',
  brand: 'bg-amber-100 text-amber-900',
  muted: 'bg-stone-200/70 text-stone-600',
} as const

export function Badge({ children, className, tone = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]',
        toneClassNames[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
