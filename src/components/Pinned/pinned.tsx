import { RepositoryPinned } from './repository-pinned'

export function Pinned() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-end justify-between">
        <h2 className="text-git-light">Pinned</h2>
        <p className="cursor-pointer text-blue-500 text-xs hover:underline">
          Customize your pins
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <RepositoryPinned
          title="amazon_clone_twcss"
          description="Projeto de um clone da página da Amazon do Curso de TailwindCSS"
          colorPin="bg-orange-600"
          language="HTML"
        />

        <RepositoryPinned
          title="in_orbit"
          description="Repositório com o código da aplicação desenvolvida na NLW Pocket JavaScript da Rocketseat de 09 a 12 de Setembro"
          colorPin="bg-blue-500"
          language="TypeScript"
        />

        <RepositoryPinned
          title="kodiak_api"
          description="Repositório do projeto do 5º Semestre de DSM"
          colorPin="bg-blue-500"
          language="TypeScript"
        />

        <RepositoryPinned
          title="tailwind-next"
          description="Repositório do curso Masterizando o Tailwind da Rocketseat"
          colorPin="bg-blue-500"
          language="TypeScript"
        />

        <RepositoryPinned
          title="reactGram"
          description="Repositório com o projeto reactGram do Curso de React"
          colorPin="bg-yellow-300"
          language="JavaScript"
        />

        <RepositoryPinned
          title="portfolio"
          description=""
          colorPin="bg-blue-500"
          language="TypeScript"
        />
      </div>
    </section>
  )
}
