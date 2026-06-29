import { asset } from '../lib/asset'

export const waterfallIcon = {
  src: asset('assets/iw-waterfall-icon.png'),
  alt: '',
} as const

export const siteLogo = {
  src: asset('assets/iw-logo-transparent.png'),
  alt: 'Irish Waterfall Private Capital',
} as const

export const propertyImages = [
  {
    src: asset('assets/real-estate/office-tower.webp'),
    alt: 'Modern office tower with glass facade',
    label: 'Office',
  },
  {
    src: asset('assets/real-estate/retail-storefront.png'),
    alt: 'Modern strip mall retail space with commercial storefronts',
    label: 'Retail',
  },
  {
    src: asset('assets/real-estate/industrial.webp'),
    alt: 'Income-producing industrial warehouse facility',
    label: 'Industrial',
  },
] as const

export const approachImage = {
  src: asset('assets/real-estate/approach-office.png'),
  alt: 'Professional commercial conference room with durable tenancy',
} as const

export const principalHeadshot = {
  src: asset('assets/bill-oconnor.png'),
  alt: "Bill O'Connor, Founder & Principal of Irish Waterfall Private Capital",
} as const
