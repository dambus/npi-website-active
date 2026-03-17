import type { HTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    tone?: 'default' | 'dark' | 'muted'
  }
>

const toneClassNames = {
  default: 'border-stone-200 bg-white text-stone-900 shadow-[var(--shadow-soft)]',
  dark: 'border-stone-800 bg-stone-950 text-white shadow-[var(--shadow-soft)]',
  muted: 'border-[color:var(--border)] bg-[color:var(--surface)] text-stone-900',
} as const

export function Card({ children, className, tone = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[1.75rem] border p-6 sm:p-8',
        toneClassNames[tone],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
