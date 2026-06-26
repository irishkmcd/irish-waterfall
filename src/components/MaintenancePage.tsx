import { site } from '../data/content'
import { Logo } from './Logo'

export function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-iw-deep px-6 py-16 text-center text-white">
      <Logo variant="footer" />
      <p className="section-label mt-12">Site Maintenance</p>
      <h1 className="mt-4 max-w-lg font-display text-4xl leading-tight font-medium md:text-5xl">
        Under Construction
      </h1>
      <p className="section-body-inverse mt-6 max-w-md">
        This site is temporarily unavailable while we make updates. Please check back soon.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="mt-10 text-sm font-medium tracking-wide text-iw-gold transition-colors hover:text-iw-gold-light"
      >
        {site.email}
      </a>
    </div>
  )
}
