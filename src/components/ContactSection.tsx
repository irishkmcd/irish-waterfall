import { principal } from '../data/content'
import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    <section id="contact" className="bg-iw-deep py-20 text-white md:py-28">
      <div className="container-iw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Contact</p>
          <h2 className="section-heading-inverse mt-4">{principal.cta}</h2>
          <p className="section-body-inverse mt-5">{principal.ctaSubtext}</p>
        </div>

        <div className="mx-auto mt-12 max-w-xl bg-iw-cream p-8 text-iw-deep md:mt-16 md:p-10">
          <h3 className="form-heading text-center">Send a message</h3>
          <p className="card-body mt-2 text-center text-sm">
            We typically respond within one business day.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
