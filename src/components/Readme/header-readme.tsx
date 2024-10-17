import { Pencil } from 'lucide-react'

export function HeaderReadme() {
  return (
    <div className="flex items-end justify-between">
      <span className="text-git-light text-sm">
        <span className="cursor-pointer hover:text-blue-500">
          LuisFelipeSalvarani
        </span>{' '}
        <span className="font-light text-xs opacity-60">/</span>{' '}
        <span className="text-xs">
          README <span className="font-light opacity-60">.md</span>
        </span>
      </span>
      <Pencil className="size-4 cursor-pointer text-git-light/50 hover:text-blue-500" />
    </div>
  )
}
