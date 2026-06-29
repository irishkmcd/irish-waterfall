import { hero } from '../data/content'
import { HeroMedia } from './HeroMedia'

export function Hero() {
  return (
    <section className="bg-iw-deep md:relative md:flex md:min-h-screen md:items-end md:overflow-hidden md:pb-20 md:pt-36">
      <div className="relative w-full md:hidden" aria-hidden="true">
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/11]">
          <HeroMedia
            className="h-full w-full translate-y-2 object-cover sm:translate-y-3"
            objectPosition="center 30%"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-iw-deep via-iw-deep/30 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-full max-w-[min(52rem,72vw)] md:block"
        aria-hidden="true"
      >
        <HeroMedia className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-iw-deep via-iw-deep/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-iw-deep/60 via-transparent to-transparent" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[58%] bg-gradient-to-t from-iw-deep via-iw-deep/80 to-transparent md:block"
        aria-hidden="true"
      />

      <div className="container-iw relative z-10 pb-16 pt-8 md:pb-20 md:pt-0">
        <h1 className="hero-title">{hero.headline}</h1>
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
