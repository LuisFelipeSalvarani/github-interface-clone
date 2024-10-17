import { Smile } from 'lucide-react'

export function Avatar() {
  return (
    <div className="order-1 flex items-center gap-4 md:flex-col md:items-start">
      <div className="relative aspect-square max-h-28 rounded-full ring ring-git-gray/50 md:max-h-64 md:max-w-64">
        <img
          src="https://github.com/LuisFelipeSalvarani.png"
          alt="Avatar"
          className="aspect-square rounded-full"
        />
        <div className="group absolute right-0 bottom-8 hidden size-10 cursor-pointer items-center justify-center rounded-full border border-git-gray/20 bg-git-medium hover:shadow-md hover:shadow-zinc-900 md:flex">
          <Smile className="size-5 text-git-light/70 group-hover:text-blue-600" />
        </div>
      </div>

      <div>
        <h2 className="text-nowrap font-semibold text-2xl text-git-light">
          Luis Felipe Salvarani
        </h2>
        <h3 className="font-light text-git-gray/80 text-xl">
          LuisFelipeSalvarani
        </h3>
      </div>
    </div>
  )
}
