import type { HTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type GridProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    columns?: '2' | '3' | '4' | 'sidebar'
  }
>

const columnClassNames = {
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-2 xl:grid-cols-3',
  '4': 'sm:grid-cols-2 xl:grid-cols-4',
  sidebar: 'lg:grid-cols-[280px_minmax(0,1fr)]',
} as const

export function Grid({ children, className, columns = '3', ...props }: GridProps) {
  return (
    <div className={cn('grid gap-6 lg:gap-8', columnClassNames[columns], className)} {...props}>
      {children}
    </div>
  )
}

export default Grid
