import { approach } from '../data/content'
import { approachImage } from '../data/images'

export function Approach() {
  return (
    <section id="approach" className="overflow-hidden bg-iw-cream pt-16 md:pt-22 pb-12 md:pb-14">
      <div className="container-iw">
        <div className="relative lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <div className="relative z-10 lg:col-span-7 xl:col-span-7">
            <div className="border-l-2 border-iw-gold py-1 pl-6 md:pl-8">
              <p className="section-label">{approach.eyebrow}</p>
              <h2 className="section-heading mt-3">
                <span className="block">Capital placed with conviction,</span>
                <span className="block italic text-iw-forest">not speculation.</span>
              </h2>
              <p className="section-body mt-4">{approach.intro}</p>
            </div>
          </div>

          <div className="relative mt-6 lg:col-span-5 lg:mt-0 lg:h-full lg:translate-x-2 xl:translate-x-4">
            <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/11] lg:aspect-auto lg:h-full">
              <img
                src={approachImage.src}
                alt={approachImage.alt}
                className="h-full w-full scale-105 object-cover object-[center_28%] transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>

            <div
              className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 -translate-x-3 translate-y-3 border-b-2 border-l-2 border-iw-gold"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-0 right-0 h-16 w-16 -translate-y-3 translate-x-3 border-r-2 border-t-2 border-iw-gold/70"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-px bg-iw-stone md:mt-10 md:grid-cols-3">
          {approach.pillars.map((pillar) => {
            const [titleLead, titleTail] = pillar.title.split(/ (?=[^ ]+$)/)

            return (
              <article
                key={pillar.title}
                className="bg-iw-cream px-8 py-8 text-center md:px-10 md:py-9 md:text-left"
              >
                <h3 className="card-heading leading-tight">
                  <span className="block">{titleLead}</span>
                  <span className="block">{titleTail}</span>
                </h3>
                <p className="card-body mt-4">{pillar.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
