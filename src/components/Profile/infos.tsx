import { Building, Clock, Link, MapPin } from 'lucide-react'
import { LinkedinSvg } from '../linkedin-svg'

export function Infos() {
  return (
    <div className="order-5">
      <ul className="flex flex-col gap-2">
        <li className="hidden items-center gap-1 text-git-light text-sm md:flex">
          <Building className="size-[1.15rem] text-git-light/70" /> SESI
        </li>

        <li className="hidden items-center gap-1 text-git-light text-sm md:flex">
          <MapPin className="size-[1.15rem] text-git-light/70" /> Itapira-SP
        </li>

        <li className="hidden items-center gap-1 text-git-light text-sm md:flex">
          <Clock className="size-[1.15rem] text-git-light/70" /> 07:58{' '}
          <span className="text-git-light/70">(UTC -03:00)</span>
        </li>

        <li className="flex items-center gap-1 text-git-light text-sm">
          <Link className="size-[1.15rem] text-git-light/70" />{' '}
          <a className="hover:text-blue-500 hover:underline" href="/">
            https://luisfelipesalvarani.vercel.app/
          </a>
        </li>

        <li className="flex items-center gap-1 text-git-light text-sm">
          <LinkedinSvg className="size-[1.15rem] fill-git-light/70" />{' '}
          <a className="hover:text-blue-500 hover:underline" href="/">
            in/luis-felipe-salvarani-63846a201
          </a>
        </li>
      </ul>
    </div>
  )
}
