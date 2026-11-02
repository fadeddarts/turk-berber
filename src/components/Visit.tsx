import {
  address,
  addressFull,
  brand,
  directionsUrl,
  facebookNote,
  facebookUrl,
  hours,
  mapEmbedUrl,
  mapsUrl,
  phoneDisplay,
  phoneHref,
  rating,
  reviewsUrl,
} from "../data"
import { useInquire } from "../context/InquireContext"

export function Visit() {
  const { openInquire } = useInquire()

  return (
    <section id="contact">
      <div className="page-block pb-10">
        <h2 className="page-title">Visit</h2>
        <p className="mb-10 max-w-xl text-[13px] leading-relaxed text-mute">
          {brand.name} sits on Wilson Avenue in North York — a neighbourhood chair for a precise cut. Call ahead to
          book, or ask who is on the floor.
        </p>

        <ul className="tour-list">
          <li className="tour-row">
            <div className="tour-date">Address</div>
            <div className="tour-meta">
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="text-cream no-underline hover:underline">
                {address.street}
                <br />
                {address.city}, {address.region} {address.postal}
              </a>
            </div>
            <a className="tour-cta" href={directionsUrl} target="_blank" rel="noreferrer">
              Directions
            </a>
          </li>
          <li className="tour-row">
            <div className="tour-date">Phone</div>
            <div className="tour-meta">
              <a href={phoneHref} className="text-cream no-underline hover:underline">
                {phoneDisplay}
              </a>
            </div>
            <button type="button" onClick={() => openInquire()}>
              Book
            </button>
          </li>
          <li className="tour-row">
            <div className="tour-date">Reviews</div>
            <div className="tour-meta">{rating.label}</div>
            <a className="tour-cta" href={reviewsUrl} target="_blank" rel="noreferrer">
              Google
            </a>
          </li>
          <li className="tour-row">
            <div className="tour-date">Facebook</div>
            <div className="tour-meta">{facebookNote}</div>
            <a className="tour-cta" href={facebookUrl} target="_blank" rel="noreferrer">
              Search
            </a>
          </li>
        </ul>
      </div>

      <div className="page-block pt-0">
        <h3 className="mb-8 font-mono text-[15px] font-bold tracking-[0.08em] uppercase">Hours</h3>
        <ul className="tour-list">
          {hours.map((row) => (
            <li key={row.day} className="tour-row">
              <div className="tour-date">{row.day}</div>
              <div className="tour-meta">
                {row.note}
                {row.confirmed ? null : " · placeholder"}
              </div>
              <span />
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl text-[12px] leading-relaxed text-mute">
          Only Monday’s 9:30 a.m. opening is confirmed. Remaining weekly hours will be published once the shop confirms
          them. Please call ahead.
        </p>
      </div>

      <div className="relative min-h-[360px] overflow-hidden border-t border-line bg-panel md:min-h-[520px]">
        <iframe
          title={`Map of ${addressFull}`}
          src={mapEmbedUrl}
          className="absolute inset-0 h-full w-full grayscale contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
