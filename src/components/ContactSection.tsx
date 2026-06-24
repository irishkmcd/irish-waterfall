import { principal } from '../data/content'
import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    <section id="contact" className="section-y bg-iw-deep text-white">
      <div className="container-iw">
        <div className="section-intro max-w-2xl">
          <p className="section-label">Contact</p>
          <h2 className="section-heading-inverse mt-3">{principal.cta}</h2>
          <p className="section-intro-body section-body-inverse">{principal.ctaSubtext}</p>
        </div>

        <div className="section-block-spacing mx-auto max-w-xl bg-iw-cream p-8 text-iw-deep md:p-10">
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
