import { principal } from '../data/content'
import { principalHeadshot } from '../data/images'
import { ContactSection } from './ContactSection'

export function Principal() {
  return (
    <>
      <section id="principal" className="section-y bg-iw-cream">
        <div className="container-iw">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-14">
            <div className="flex flex-col items-center lg:items-start">
              <div className="h-72 w-72 overflow-hidden">
                <img
                  src={principalHeadshot.src}
                  alt={principalHeadshot.alt}
                  className="h-full w-full scale-[1.12] object-cover object-[center_12%]"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h3 className="profile-name">{principal.name}</h3>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.3em] text-iw-gold">
                  {principal.title}
                </p>
              </div>
            </div>

            <div>
              <p className="section-label">{principal.eyebrow}</p>
              <h2 className="section-heading mt-2">{principal.headline}</h2>
              <div className="mt-5 space-y-4">
                {principal.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="section-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
