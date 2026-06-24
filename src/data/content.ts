export const site = {
  name: 'Irish Waterfall',
  tagline: 'Private Capital',
  location: 'West Bloomfield, Michigan',
  email: "bill.o'connor2274@outlook.com",
  phone: '248 563 6766',
} as const

export const navLinks = [
  { label: 'Approach', href: '#approach' },
  { label: 'Criteria', href: '#criteria' },
  { label: 'Partners', href: '#partners' },
  { label: 'Principal', href: '#principal' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  headline: 'Disciplined Private Capital for Income-Producing Real Estate',
  intro:
    'Stabilized commercial real estate with contractual income, durable tenancy, and consistent monthly distributions.',
  tagline: 'Private real estate. Structured for income. Underwritten with discipline.',
} as const

export const approach = {
  eyebrow: 'Approach',
  headline: 'Capital placed with conviction, not speculation.',
  headlineAccent: 'not speculation.',
  intro:
    'Irish Waterfall sources and manages stabilized, income-producing commercial real estate — where income is contracted, tenancy is creditworthy, and the downside is understood before a dollar is committed. We acquire cash-flowing assets with durable tenancy, conservative leverage, and a clear path to monthly distributions.',
  pillars: [
    {
      numeral: 'I.',
      title: 'Income First',
      body: 'Every acquisition is underwritten to in-place, contractual cash flow. Distributions are paid from operations, not projections.',
    },
    {
      numeral: 'II.',
      title: 'Conservative Structure',
      body: 'Modest leverage, defined hold periods, and a preferred return that puts investor capital ahead of the sponsor.',
    },
    {
      numeral: 'III.',
      title: 'Aligned Sponsorship',
      body: 'Three decades of execution and personal guarantees on select transactions. We invest beside our partners.',
    },
  ],
} as const

export const criteria = {
  eyebrow: 'Acquisition Criteria',
  headline: 'A narrow, repeatable investment discipline.',
  intro:
    "We're defined by our parameters, not by asset class. We'll consider any property, in any sector, as long as it meets the criteria below — and we decline everything that doesn't.",
  items: [
    {
      title: 'Below Replacement Cost',
      body: 'Acquired on a per-square-foot basis below what the asset would cost to build today.',
    },
    {
      title: 'Below-Market Rents',
      body: 'In-place leases priced under market, with a clear path to mark-to-market upside.',
    },
    {
      title: 'Built-In Upside',
      body: 'Room to add square footage, or to capture additional value from existing in-place space.',
    },
    {
      title: '8%+ Cap on Actual NOI',
      body: 'Minimum eight percent, underwritten to in-place, contractual income — never pro forma.',
    },
    {
      title: 'No Deferred Capital',
      body: 'No repairs or replacements requiring immediate attention at the time of acquisition.',
    },
    {
      title: 'Disciplined, Always',
      body: "If a property clears every parameter, we move decisively. If it doesn't, we pass.",
    },
  ],
} as const

export const partners = {
  eyebrow: 'Our Partners',
  headline: 'Built for serious capital.',
  intro:
    'Irish Waterfall partners with a defined audience that values transparency, structure, and consistent income.',
  audiences: [
    {
      numeral: 'I.',
      titleLines: ['Certified Investment', 'Managers'],
      body: 'Allocators seeking a disciplined, income-producing real estate sleeve with clear reporting and predictable distributions.',
    },
    {
      numeral: 'II.',
      titleLines: ['Accredited', 'Investors'],
      body: 'Individuals positioned to participate in private real estate at meaningful unit sizes, with sponsorship that invests alongside them.',
    },
    {
      numeral: 'III.',
      titleLines: ['Family', 'Offices'],
      body: 'Stewards of multi-generational capital prioritizing stability, downside protection, and tangible, cash-flowing assets.',
    },
  ],
  stats: [
    {
      value: '$100K',
      label: 'Minimum Investment',
    },
    {
      value: '10%',
      label: 'Preferred Return, Monthly',
    },
    {
      value: 'Aligned',
      label: 'Guarantees on Select Deals',
    },
  ],
} as const

export const principal = {
  eyebrow: 'Principal',
  headline: 'Leadership.',
  name: "Bill O'Connor",
  title: 'Founder & Principal',
  bio: [
    "Bill O'Connor founded Irish Waterfall to bring institutional discipline to private commercial real estate. Over a career spanning more than three decades, he has closed in excess of $1 billion in transactions — earning top national rankings at Marcus & Millichap and serving as Senior Vice President at CBRE.",
    'His focus has stayed consistent throughout: stabilized, income-producing assets, acquired below replacement cost with durable tenancy and contractual cash flow. That same conservative, income-first philosophy governs every Irish Waterfall acquisition.',
    'Bill personally guarantees select transactions and invests alongside his partners, ensuring his interests are aligned with the investors he serves.',
  ],
  cta: 'Begin a private conversation.',
  ctaSubtext:
    "For investment inquiries, acquisition opportunities, or partnership discussions, contact Bill O'Connor.",
} as const
