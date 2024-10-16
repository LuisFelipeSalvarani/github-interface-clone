import {
  BookMarked,
  BookOpen,
  Box,
  ChevronDown,
  CircleDot,
  Ellipsis,
  GitPullRequestArrow,
  Inbox,
  Menu,
  PanelsTopLeft,
  Plus,
  Search,
  SquareSlash,
  Star,
} from 'lucide-react'
import { GithubSvg } from '../github-svg'
import { ButtonHeader } from './button-header'
import { NavLink } from './navigation-link'

export function Header() {
  return (
    <header className="flex w-full flex-col gap-3 border-git-light/30 border-b bg-git-dark px-5 pt-4">
      <div className="flex flex-1 justify-between">
        <div className="flex items-center gap-5">
          <ButtonHeader className="hover:bg-transparent">
            <Menu className="size-5" />
          </ButtonHeader>

          <GithubSvg className="size-8" />

          <span className="font-semibold text-white">User</span>
        </div>

        <div className="flex items-center gap-2">
          <ButtonHeader>
            <Search className="size-4" />
            <span className="hidden items-center gap-1 pr-32 text-sm/none lg:flex">
              Type <SquareSlash className="inline-flex size-4" /> to search
            </span>
          </ButtonHeader>

          <span className="mx-1 hidden h-5 w-px bg-git-light/50 md:flex" />

          <ButtonHeader className="hidden md:flex">
            <Plus className="size-4" />
            <ChevronDown className="size-4" />
          </ButtonHeader>

          <ButtonHeader className="hidden md:flex">
            <CircleDot className="size-4" />
          </ButtonHeader>

          <ButtonHeader className="hidden md:flex">
            <GitPullRequestArrow className="size-4" />
          </ButtonHeader>

          <ButtonHeader>
            <Inbox className="size-4" />
          </ButtonHeader>

          <div className="size-8 rounded-full bg-white" />
        </div>
      </div>
      <div className="flex flex-1 items-baseline justify-between py-2">
        <ul className="flex gap-3 text-git-light">
          <NavLink icon={BookOpen} label="Overview" isActive />

          <NavLink
            icon={BookMarked}
            label="Repositories"
            qtd="56"
            className="xs:flex hidden"
          />

          <NavLink
            icon={PanelsTopLeft}
            label="Projects"
            className="2xs:flex hidden"
          />

          <NavLink icon={Box} label="Packages" className="3xs:flex hidden" />

          <NavLink
            icon={Star}
            label="Stars"
            qtd="2"
            className="hidden sm:flex"
          />
        </ul>

        <ButtonHeader className="border-git-light/20 bg-git-gray/20 p-[5px] sm:hidden">
          <Ellipsis className="size-5" />
        </ButtonHeader>
      </div>
    </header>
  )
}
