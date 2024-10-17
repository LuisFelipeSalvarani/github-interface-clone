export function BadgesContact() {
  return (
    <div className="flex flex-wrap gap-1">
      <a
        href="mailto:felipe_salvarani@hotmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://img.shields.io/static/v1?message=Outlook&logo=microsoft-outlook&label=&color=0078D4&logoColor=white&labelColor=&style=for-the-badge"
          className="h-9"
          alt="microsoft-outlook logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/luis-felipe-salvarani-63846a201/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge"
          className="h-9"
          alt="linkedin logo"
        />
      </a>
    </div>
  )
}
