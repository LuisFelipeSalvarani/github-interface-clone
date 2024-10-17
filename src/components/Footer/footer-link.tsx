export function FooterLink({ children }: { children: string }) {
  return (
    <li className="cursor-pointer hover:text-blue-500 hover:underline">
      {children}
    </li>
  )
}
