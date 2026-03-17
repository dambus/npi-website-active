import type { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type ContainerProps = PropsWithChildren<{
  className?: string
  size?: 'default' | 'wide' | 'narrow'
}>

const sizeClassNames = {
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
  narrow: 'max-w-4xl',
} as const

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeClassNames[size], className)}>
      {children}
    </div>
  )
}

export default Container
