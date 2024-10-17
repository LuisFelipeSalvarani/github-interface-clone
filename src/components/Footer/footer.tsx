import { GithubSvg } from '../github-svg'
import { FooterLink } from './footer-link'

export function Footer() {
  return (
    <footer className="mx-auto flex min-w-80 max-w-screen-lg flex-col-reverse items-center gap-4 pt-6 pb-8 lg:flex-row">
      <div className="flex items-center gap-2 font-light text-git-light/60 text-xs tracking-wide">
        <GithubSvg className="size-6 cursor-pointer opacity-70 hover:opacity-20" />
        &copy; 2024 GitHub, Inc.
      </div>
      <ul className="flex flex-wrap justify-center gap-5 font-light text-git-light/60 text-xs tracking-wide">
        <FooterLink>Terms</FooterLink>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Security</FooterLink>
        <FooterLink>Status</FooterLink>
        <FooterLink>Docs</FooterLink>
        <FooterLink>Contact</FooterLink>
        <FooterLink>Manage cookies</FooterLink>
        <FooterLink>Do not share my personal information</FooterLink>
      </ul>
    </footer>
  )
}
