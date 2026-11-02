import { brand } from "../data"

export function Story() {
  return (
    <section id="story" className="bio-stage">
      <h1>{brand.short}</h1>
      <p>
        Wilson Hair Saloon & Türk Berber is a barbershop on Wilson Avenue in North York. The work is professional
        barbering — a precise cut, a considered beard, a chair that is ready when you sit down.
      </p>
      <p>
        Guests come for attention to detail and a straightforward welcome. Traditional barbering, modern precision, and
        a place that is open to everyone in the neighbourhood.
      </p>
      <p>{brand.statement}</p>
    </section>
  )
}
