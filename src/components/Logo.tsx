import { site } from '../data/content'
import { waterfallIcon } from '../data/images'

type LogoProps = {
  className?: string
  variant?: 'header' | 'footer'
}

export function Logo({ className = '', variant = 'header' }: LogoProps) {
  const iconClass =
    variant === 'footer' ? 'h-9 w-auto' : 'h-10 w-auto md:h-11'
  const titleClass =
    variant === 'footer'
      ? 'font-display text-[1.35rem] leading-none tracking-[0.02em] text-white'
      : 'font-display text-[1.35rem] leading-none tracking-[0.02em] text-white md:text-[1.55rem]'
  const taglineClass =
    variant === 'footer'
      ? 'shrink-0 text-[0.55rem] font-medium uppercase leading-none tracking-[0.28em] text-iw-gold'
      : 'shrink-0 text-[0.58rem] font-medium uppercase leading-none tracking-[0.3em] text-iw-gold md:text-[0.62rem]'

  return (
    <span className={`inline-flex items-center gap-2.5 md:gap-3 ${className}`}>
      <img
        src={waterfallIcon.src}
        alt=""
        aria-hidden="true"
        className={`${iconClass} shrink-0 self-center object-contain`}
      />

      <span className="flex min-w-0 flex-col items-center justify-center text-center">
        <span className={titleClass}>{site.name}</span>

        <span className="mt-1 flex w-full min-w-[9.5rem] items-center justify-center gap-2 md:min-w-[10.5rem]">
          <span className="h-px flex-1 bg-iw-gold/55" aria-hidden="true" />
          <span className={taglineClass}>{site.tagline}</span>
          <span className="h-px flex-1 bg-iw-gold/55" aria-hidden="true" />
        </span>
      </span>
    </span>
  )
}
