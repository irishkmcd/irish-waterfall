import { hero } from '../data/content'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-iw-deep pb-20 pt-32 md:pb-28 md:pt-40">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-[min(52rem,72vw)]"
        aria-hidden="true"
      >
        <img
          src="/assets/hero-waterfall.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-iw-deep via-iw-deep/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-iw-deep/60 via-transparent to-transparent" />
      </div>

      <div className="container-iw relative z-10">
        <h1 className="hero-title">{hero.headline}</h1>
        <p className="section-body-inverse mt-6 max-w-xl">{hero.intro}</p>
        <p className="mt-6 max-w-xl text-sm font-medium uppercase tracking-[0.2em] text-iw-gold md:text-base md:tracking-[0.25em]">
          {hero.tagline}
        </p>
        <div className="mt-10">
          <a
            href="#approach"
            className="inline-flex w-fit items-center gap-2 border-b border-iw-gold pb-1 text-sm font-medium uppercase tracking-[0.25em] text-iw-gold transition-colors hover:text-iw-gold-light"
          >
            Our Approach
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
