import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

const buttonVariants = {
  primary: 'bg-stone-950 text-white hover:bg-stone-800',
  secondary: 'bg-white text-stone-950 ring-1 ring-inset ring-stone-200 hover:bg-stone-50',
  ghost: 'bg-transparent text-stone-700 hover:bg-stone-100',
} as const

type Variant = keyof typeof buttonVariants

type BaseProps = {
  children: ReactNode
  className?: string
  variant?: Variant
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>

type LinkButtonProps = BaseProps & {
  to: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonBaseClassName, buttonVariants[variant], className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export function LinkButton({
  children,
  className,
  to,
  variant = 'primary',
  ...props
}: LinkButtonProps) {
  return (
    <Link className={cn(buttonBaseClassName, buttonVariants[variant], className)} to={to} {...props}>
      {children}
    </Link>
  )
}

const buttonBaseClassName =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 disabled:pointer-events-none disabled:opacity-60'
