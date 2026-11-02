import { barberShot, teamShot } from "../data"
import { useInquire } from "../context/InquireContext"

export function Barbers() {
  const { openInquire } = useInquire()

  return (
    <section id="barbers" className="split-detail">
      <div className="copy">
        <p className="mb-4 text-[11px] tracking-[0.18em] text-mute uppercase">Featured in guest reviews</p>
        <h2 className="page-title mb-6">Ziya</h2>
        <p className="mb-4 max-w-md text-[13px] leading-relaxed text-mute">
          Guests name Ziya for the cut. One Google review calls him “a master of haircut.” His surname, credentials, and
          years in the chair have not been published — this profile stays with what guests have already said.
        </p>
        <p className="mb-8 max-w-md text-[13px] leading-relaxed text-mute">
          Further names, portraits, and specialties will be added when the shop confirms them. Until then, call and ask
          who is on the chair.
        </p>
        <button
          type="button"
          className="inline-flex min-h-11 items-center bg-cream px-5 font-mono text-[11px] tracking-[0.16em] text-night uppercase"
          onClick={() => openInquire("Ask for Ziya")}
        >
          Ask for Ziya
        </button>
      </div>
      <div className="visual">
        <img src={barberShot.src} alt={barberShot.alt} width={barberShot.width} height={barberShot.height} />
      </div>
      <div className="visual order-last md:order-none">
        <img src={teamShot.src} alt={teamShot.alt} width={teamShot.width} height={teamShot.height} />
      </div>
      <div className="copy">
        <p className="mb-4 text-[11px] tracking-[0.18em] text-mute uppercase">The team</p>
        <h2 className="page-title mb-6">A small shop</h2>
        <p className="max-w-md text-[13px] leading-relaxed text-mute">
          A shared chair and a careful cut. Team portraits and specialties will replace this editorial photography once
          the shop supplies them.
        </p>
      </div>
    </section>
  )
}
