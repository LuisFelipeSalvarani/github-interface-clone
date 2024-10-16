import type { ElementType } from 'react'

interface NavLinkProps {
  icon: ElementType
  label: string
  qtd?: string
  isActive?: boolean
  className?: string
}

export function NavLink({
  icon: Icon,
  label,
  qtd,
  isActive = false,
  className,
}: NavLinkProps) {
  return (
    <li
      className={`after:-bottom-2 relative rounded-md px-1.5 py-0.5 transition-colors after:absolute after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-orange-500/80 hover:bg-git-light/10 ${isActive ? 'after:visible' : 'after:invisible'} ${className && className}`}
    >
      <button
        type="button"
        className={`flex items-center gap-2 ${isActive && 'font-semibold'}`}
      >
        <Icon className="size-4 text-git-light/70" />
        {label}
        {qtd && (
          <span className="rounded-full bg-git-light/5 px-2 py-1 font-semibold text-xs/none">
            {qtd}
          </span>
        )}
      </button>
    </li>
  )
}
