import { criteria } from '../data/content'

export function Criteria() {
  return (
    <section id="criteria" className="section-y bg-iw-deep text-white">
      <div className="container-iw">
        <div className="section-intro">
          <p className="section-label">{criteria.eyebrow}</p>
          <h2 className="section-heading-inverse mt-3">{criteria.headline}</h2>
          <p className="section-intro-body section-body-inverse">{criteria.intro}</p>
        </div>

        <div className="section-block-spacing grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.items.map((item) => (
            <article
              key={item.title}
              className="border border-white/10 bg-white/5 p-8 transition-colors hover:border-iw-gold/30 hover:bg-white/[0.07] md:p-9"
            >
              <h3 className="card-heading-inverse">{item.title}</h3>
              <p className="card-body-inverse mt-4">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
