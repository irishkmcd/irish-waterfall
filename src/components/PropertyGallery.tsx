import { propertyImages } from '../data/images'

export function PropertyGallery() {
  return (
    <section aria-label="Property sectors" className="bg-iw-deep">
      <div className="grid md:grid-cols-3">
        {propertyImages.map((image) => (
          <figure key={image.label} className="group relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-72 lg:h-80">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-iw-deep/70 via-iw-deep/10 to-transparent" />
            <figcaption className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.35em] text-white/80">
              {image.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
