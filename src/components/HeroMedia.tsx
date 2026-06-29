import { useEffect, useState } from 'react'
import { asset } from '../lib/asset'

type HeroMediaProps = {
  className?: string
  objectPosition?: string
}

export function HeroMedia({ className = '', objectPosition = 'center' }: HeroMediaProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    syncPreference()
    mediaQuery.addEventListener('change', syncPreference)
    return () => mediaQuery.removeEventListener('change', syncPreference)
  }, [])

  if (prefersReducedMotion) {
    return (
      <img
        src={asset('assets/hero-waterfall.png')}
        alt=""
        className={className}
        style={{ objectPosition }}
      />
    )
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={asset('assets/hero-waterfall.png')}
      className={className}
      style={{ objectPosition }}
    >
      <source src={asset('assets/hero-waterfall.mp4')} type="video/mp4" />
    </video>
  )
}
