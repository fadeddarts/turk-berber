import { rating, reviews, reviewsUrl } from "../data"

export function Reviews() {
  return (
    <section id="reviews" className="page-block">
      <h2 className="page-title">Reviews</h2>
      <p className="mb-10 text-[13px] text-mute">{rating.label}</p>
      <ul className="tour-list">
        {reviews.map((item) => (
          <li key={item.name} className="tour-row">
            <div className="tour-date">{item.name}</div>
            <div className="tour-meta">“{item.quote}”</div>
            <span className="text-[11px] tracking-[0.14em] text-mute uppercase">{rating.value}</span>
          </li>
        ))}
      </ul>
      <a
        href={reviewsUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex min-h-11 items-center border border-line px-5 font-mono text-[11px] tracking-[0.16em] text-cream uppercase transition-colors hover:bg-cream hover:text-night"
      >
        Read Google reviews
      </a>
    </section>
  )
}
