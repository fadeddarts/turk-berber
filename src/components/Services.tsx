import { services } from "../data"
import { useInquire } from "../context/InquireContext"

export function Services() {
  const { openInquire } = useInquire()

  return (
    <section id="services" className="page-block">
      <h2 className="page-title">Services</h2>
      <p className="mb-10 max-w-xl text-[13px] leading-relaxed text-mute">
        A suggested hospitality menu. Services and prices are placeholders until the shop confirms them. Call to ask
        what is available today.
      </p>
      <ul className="tour-list">
        {services.map((item) => (
          <li key={item.id} className="tour-row">
            <div className="tour-date">{item.name}</div>
            <div className="tour-meta">
              {item.description}
              <span className="mt-1 block">
                {item.price} · {item.duration}
              </span>
            </div>
            <button type="button" onClick={() => openInquire(item.name)}>
              Book
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
