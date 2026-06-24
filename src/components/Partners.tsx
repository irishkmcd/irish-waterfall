import { partners } from '../data/content'

export function Partners() {
  return (
    <section id="partners" className="bg-iw-stone py-24 md:py-32">
      <div className="container-iw">
        <div className="mx-auto max-w-3xl text-center md:max-w-4xl">
          <p className="section-label">{partners.eyebrow}</p>
          <h2 className="section-heading mt-4">{partners.headline}</h2>
          <p className="section-body mx-auto mt-6 max-w-2xl">{partners.intro}</p>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 lg:grid-cols-3 lg:gap-8">
          {partners.audiences.map((audience) => (
            <article
              key={audience.numeral}
              className="flex flex-col items-center bg-iw-cream px-8 py-12 text-center lg:px-10 lg:py-14"
            >
              <span className="card-numeral-featured" aria-hidden="true">
                {audience.numeral}
              </span>
              <h3 className="card-heading mt-8 min-h-[4.5rem] md:min-h-[5rem]">
                {audience.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="card-body mt-5">{audience.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-iw-deep px-8 py-14 md:mt-20 md:px-12 md:py-16">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {partners.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="stat-value">{stat.value}</span>
                <p className="stat-label mx-auto mt-4 max-w-[14rem]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
