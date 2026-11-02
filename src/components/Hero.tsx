import { craft, gallery, heroDetail, heroShot, storyShot, teamShot } from "../data"

type Tile = {
  id: string
  title: string
  meta: string
  src: string
  size: "large" | "wide" | "tall" | "square"
  href: string
  position?: string
}

/** Ordered for dense 5-column packing like Resonance. */
const tiles: Tile[] = [
  {
    id: "hero",
    title: "The perfect cut",
    meta: "Home · Wilson Ave",
    src: heroShot.src,
    size: "large",
    href: "#story",
    position: "25% 15%",
  },
  {
    id: "detail",
    title: "In the chair",
    meta: "Craft · Detail",
    src: heroDetail.src,
    size: "wide",
    href: "#services",
    position: "40% 20%",
  },
  {
    id: "story",
    title: "Atelier light",
    meta: "Story · Editorial",
    src: storyShot.src,
    size: "tall",
    href: "#story",
    position: "50% 10%",
  },
  {
    id: "fade",
    title: craft[0].title,
    meta: "Craft · Fade",
    src: craft[0].image.src,
    size: "square",
    href: "#services",
  },
  {
    id: "razor",
    title: craft[1].title,
    meta: "Craft · Razor",
    src: craft[1].image.src,
    size: "square",
    href: "#barbers",
  },
  {
    id: "gallery-01",
    title: gallery[0].caption,
    meta: "Gallery",
    src: gallery[0].src,
    size: "wide",
    href: "#reviews",
  },
  {
    id: "ritual",
    title: craft[2].title,
    meta: "Craft · Ritual",
    src: craft[2].image.src,
    size: "tall",
    href: "#barbers",
    position: "50% 0%",
  },
  {
    id: "beard",
    title: craft[3].title,
    meta: "Craft · Beard",
    src: craft[3].image.src,
    size: "square",
    href: "#services",
  },
  {
    id: "tools",
    title: craft[4].title,
    meta: "Craft · Tools",
    src: craft[4].image.src,
    size: "square",
    href: "#contact",
  },
  {
    id: "team",
    title: "The team",
    meta: "Barbers",
    src: teamShot.src,
    size: "wide",
    href: "#barbers",
    position: "50% 40%",
  },
  {
    id: "gallery-04",
    title: gallery[3].caption,
    meta: "Gallery",
    src: gallery[3].src,
    size: "large",
    href: "#story",
    position: "40% 15%",
  },
  {
    id: "gallery-02",
    title: gallery[1].caption,
    meta: "Gallery",
    src: gallery[1].src,
    size: "square",
    href: "#services",
  },
  {
    id: "gallery-05",
    title: gallery[4].caption,
    meta: "Gallery",
    src: gallery[4].src,
    size: "square",
    href: "#contact",
  },
  {
    id: "gallery-03",
    title: gallery[2].caption,
    meta: "Gallery",
    src: gallery[2].src,
    size: "square",
    href: "#reviews",
  },
  {
    id: "gallery-06",
    title: gallery[5].caption,
    meta: "Atelier",
    src: gallery[5].src,
    size: "wide",
    href: "#reviews",
  },
]

export function Hero() {
  return (
    <section id="top" className="media-grid" aria-label="Portfolio">
      <div className="grid-container">
        {tiles.map((tile) => (
          <a
            key={tile.id}
            href={tile.href}
            className={`grid-item grid-item--${tile.size}`}
            aria-label={`${tile.title}. ${tile.meta}`}
          >
            <div
              className="inner"
              style={{
                backgroundImage: `url(${tile.src})`,
                backgroundPosition: tile.position ?? "50% 20%",
              }}
            />
            <div className="overview">
              <h3 className="title">{tile.title}</h3>
              <p className="timestamp">{tile.meta}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
