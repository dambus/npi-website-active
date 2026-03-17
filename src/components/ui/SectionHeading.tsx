import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', className)}>
      <p className="text-sm uppercase tracking-[0.3em] text-amber-700">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">{description}</p>
      ) : null}
    </div>
  )
}
