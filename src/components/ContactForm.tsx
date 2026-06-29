import { useState, type FormEvent } from 'react'
import { site } from '../data/content'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full border border-iw-deep/12 bg-white px-4 py-3 text-iw-deep placeholder:text-iw-muted/50 outline-none transition-colors focus:border-iw-forest focus:ring-1 focus:ring-iw-forest/30'

const labelClass =
  'mb-2 block text-xs font-medium uppercase tracking-[0.25em] text-iw-muted'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
        {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        },
      )

      if (!response.ok) throw new Error('Submission failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <input type="hidden" name="_subject" value="Irish Waterfall — New inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-reason" className={labelClass}>
          Reason for Contact
        </label>
        <textarea
          id="contact-reason"
          name="message"
          required
          rows={5}
          placeholder="Investment inquiry, acquisition opportunity, partnership discussion…"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-iw-forest px-8 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-iw-moss disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="rounded-sm border border-iw-forest/20 bg-iw-forest/5 px-4 py-3 text-sm text-iw-forest" role="status">
          Thank you — your message has been sent. Bill will be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  )
}
