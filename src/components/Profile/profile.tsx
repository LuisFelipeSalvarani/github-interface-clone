import { Smile, UsersRound } from 'lucide-react'
import { ButtonHeader } from '../Header/button-header'
import { Achievements } from './achievements'
import { Avatar } from './avatar'
import { Infos } from './infos'

export function Profile() {
  return (
    <div className="flex w-full min-w-64 flex-col gap-4 md:w-fit">
      <Avatar />

      <ButtonHeader className="order-2 py-1.5 text-sm hover:bg-git-light/0 md:hidden">
        <span className="group flex gap-2 hover:text-blue-500">
          <Smile className="size-5 text-git-light/70 group-hover:text-blue-500" />
          Set status
        </span>
      </ButtonHeader>

      <ButtonHeader className="order-3 justify-center border-git-light/15 bg-git-gray/20 py-1 font-semibold text-git-light/100 hover:bg-git-gray/25">
        Edit profile
      </ButtonHeader>

      <div className="order-6 flex items-center gap-1 text-git-light/70 text-sm md:order-4">
        <span className="group flex cursor-pointer items-center gap-1 hover:text-blue-500">
          <UsersRound className="size-4" />
          <span className="font-semibold text-git-light/100 group-hover:text-blue-500">
            8
          </span>
          fallowers
        </span>
        <span className="size-[2px] rounded-full bg-git-light" />
        <span className="group flex cursor-pointer items-center gap-1 hover:text-blue-500">
          <span className="font-semibold text-git-light/100 group-hover:text-blue-500">
            7
          </span>
          following
        </span>
      </div>

      <Infos />

      <div className="order-7 h-px w-full bg-git-gray/30" />

      <Achievements />
    </div>
  )
}
