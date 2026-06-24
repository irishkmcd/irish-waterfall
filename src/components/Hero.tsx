import { asset } from '../lib/asset'
import { hero } from '../data/content'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-iw-deep pb-16 pt-28 md:pb-20 md:pt-36">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[58%] sm:w-[65%] md:w-full md:max-w-[min(52rem,72vw)]"
        aria-hidden="true"
      >
        <img
          src={asset('assets/hero-waterfall.png')}
          alt=""
          className="h-full w-full object-cover object-center md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-iw-deep via-iw-deep/50 to-transparent md:via-iw-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-iw-deep via-iw-deep/75 to-transparent to-45% md:via-transparent md:to-transparent" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-iw-deep via-iw-deep/95 to-transparent md:h-[58%] md:via-iw-deep/80"
        aria-hidden="true"
      />

      <div className="container-iw relative z-10">
        <h1 className="hero-title">{hero.headline}</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg md:text-white/65">
          {hero.intro}
        </p>
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
