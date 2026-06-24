import { criteria } from '../data/content'

export function Criteria() {
  return (
    <section id="criteria" className="bg-iw-deep py-24 text-white md:py-32">
      <div className="container-iw">
        <div className="max-w-3xl">
          <p className="section-label">{criteria.eyebrow}</p>
          <h2 className="section-heading-inverse mt-4">{criteria.headline}</h2>
          <p className="section-body-inverse mt-6">{criteria.intro}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {criteria.items.map((item) => (
            <article
              key={item.title}
              className="border border-white/10 bg-white/5 p-8 transition-colors hover:border-iw-gold/30 hover:bg-white/[0.07] md:p-10"
            >
              <h3 className="card-heading-inverse">{item.title}</h3>
              <p className="card-body-inverse mt-5">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
