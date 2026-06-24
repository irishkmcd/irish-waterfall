import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { navLinks } from '../data/content'
import { Logo } from './Logo'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerBarRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(72)

  useEffect(() => {
    const bar = headerBarRef.current
    if (!bar) return

    const syncHeight = () => setHeaderHeight(bar.offsetHeight)

    syncHeight()
    const observer = new ResizeObserver(syncHeight)
    observer.observe(bar)

    window.addEventListener('resize', syncHeight)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncHeight)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault()
    closeMenu()

    window.requestAnimationFrame(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      const id = href.replace('#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const mobileLinks = navLinks.filter((link) => link.href !== '#contact')

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[110] border-b border-white/10 bg-iw-deep/95 backdrop-blur-md">
        <div
          ref={headerBarRef}
          className="container-iw flex min-h-16 items-center justify-between py-3 md:min-h-20 md:py-4"
        >
          <a
            href="#"
            className="transition-opacity hover:opacity-90"
            onClick={(event) => handleNavClick(event, '#')}
          >
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

          <button
            type="button"
            className="relative z-[120] inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white transition-colors hover:border-iw-gold/40 hover:text-iw-gold md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 z-[100] overflow-y-auto overscroll-contain bg-iw-deep transition-[opacity,transform,visibility] duration-200 md:hidden ${
          menuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible pointer-events-none -translate-y-1 opacity-0'
        }`}
        style={{ top: headerHeight, height: `calc(100dvh - ${headerHeight}px)` }}
        aria-hidden={!menuOpen}
      >
        <nav
          className="container-iw flex min-h-full flex-col justify-between py-8"
          aria-label="Mobile"
        >
          <ul>
            {mobileLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block border-b border-white/10 py-4 font-display text-3xl text-white transition-colors hover:text-iw-gold"
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-sm border border-iw-gold/60 px-4 py-3 text-xs font-medium uppercase tracking-[0.2em] text-iw-gold transition-colors hover:bg-iw-gold hover:text-iw-deep"
            onClick={(event) => handleNavClick(event, '#contact')}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  )
}
