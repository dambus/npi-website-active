import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as = 'h2',
  className,
}: SectionHeadingProps) {
  const HeadingTag = as

  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">{eyebrow}</p>
      <HeadingTag className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-5xl lg:text-6xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
