export function Statistic() {
  return (
    <div className="flex flex-wrap gap-2">
      <picture>
        <source
          srcSet="https://github-readme-stats.vercel.app/api?username=LuisFelipeSalvarani&show_icons=true&theme=github_dark"
          media="(prefers-color-scheme: dark)"
        />
        <source
          srcSet="https://github-readme-stats.vercel.app/api?username=LuisFelipeSalvarani&show_icons=true"
          media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
        />
        <img
          className="h-44"
          src="https://github-readme-stats.vercel.app/api?username=LuisFelipeSalvarani&show_icons=true"
          alt=""
        />
      </picture>

      <picture>
        <source
          srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=LuisFelipeSalvarani&layout=compact&theme=github_dark"
          media="(prefers-color-scheme: dark)"
        />
        <source
          srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=LuisFelipeSalvarani&layout=compact"
          media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
        />
        <img
          className="h-44"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=LuisFelipeSalvarani&layout=compact"
          alt=""
        />
      </picture>
    </div>
  )
}
