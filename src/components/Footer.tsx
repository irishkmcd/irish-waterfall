import { site } from '../data/content'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-iw-deep py-10">
      <div className="container-iw flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <Logo variant="footer" />
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
