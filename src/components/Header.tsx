import { navLinks } from '../data/content'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-iw-deep/90 backdrop-blur-md">
      <div className="container-iw flex min-h-16 items-center justify-between py-3 md:min-h-20 md:py-4">
        <a href="#" className="transition-opacity hover:opacity-90">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-iw-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-sm border border-iw-gold/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-iw-gold transition-colors hover:bg-iw-gold hover:text-iw-deep md:inline-block"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
