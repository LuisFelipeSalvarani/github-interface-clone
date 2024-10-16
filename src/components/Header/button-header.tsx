import type { ReactNode } from 'react'

interface ButtonHeaderProps {
  children: ReactNode
  className?: string
}

export function ButtonHeader({ children, className }: ButtonHeaderProps) {
  return (
    <span
      className={`flex cursor-pointer items-center gap-2 rounded-md border border-git-light/50 p-2 text-git-light/50 transition-colors hover:bg-white/10 ${className && className}`}
    >
      {children}
    </span>
  )
}
