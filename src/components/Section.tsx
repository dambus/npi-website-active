import type { HTMLAttributes, PropsWithChildren } from 'react'

import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

type SectionProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    containerClassName?: string
    containerSize?: 'default' | 'wide' | 'narrow'
    surface?: 'default' | 'card' | 'dark'
    spacing?: 'sm' | 'md' | 'lg'
  }
>

const spacingClassNames = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-24 lg:py-28',
} as const

const surfaceClassNames = {
  default: '',
  card: 'bg-white/80',
  dark: 'bg-stone-950 text-white',
} as const

export function Section({
  children,
  className,
  containerClassName,
  containerSize = 'default',
  spacing = 'md',
  surface = 'default',
  ...props
}: SectionProps) {
  return (
    <section className={cn(spacingClassNames[spacing], surfaceClassNames[surface], className)} {...props}>
      <Container className={containerClassName} size={containerSize}>
        {children}
      </Container>
    </section>
  )
}

export default Section
