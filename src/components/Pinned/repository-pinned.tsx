import { BookMarked, GripVertical } from 'lucide-react'

interface RepositoryPinnedProps {
  title: string
  description: string
  colorPin: string
  language: string
}

export function RepositoryPinned({
  title,
  description,
  colorPin,
  language,
}: RepositoryPinnedProps) {
  return (
    <div className="flex flex-col justify-around gap-2 rounded-md border border-git-light/40 p-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookMarked className="size-[1.15rem] text-git-light/50" />
          <h3 className="cursor-pointer font-semibold text-blue-500 text-sm hover:underline">
            {title}
          </h3>
          <span className="rounded-xl border border-git-light/40 px-1.5 text-git-light/60 text-sm">
            Public
          </span>
        </div>

        <GripVertical className="size-4 text-git-light/50" />
      </div>

      <p className="flex-1 text-git-light/50 text-xs/5 tracking-wide">
        {description}
      </p>

      <div className="flex items-center gap-1">
        <div
          className={`size-3 rounded-full border border-git-gray/50 ${colorPin}`}
        />
        <span className="text-git-light/50 text-sm">{language}</span>
      </div>
    </div>
  )
}
