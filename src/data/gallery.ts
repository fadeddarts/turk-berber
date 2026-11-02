import { photo, type Shot } from "./media"

export const heroShot: Shot = {
  src: photo("hero-cut.jpg"),
  alt: "Editorial photograph of a barber finishing a cut with product. Temporary image until shop photography is supplied.",
  width: 1600,
  height: 2400,
  position: "object-[center_18%]",
}

export const heroDetail: Shot = {
  src: photo("hero-detail.jpg"),
  alt: "Editorial photograph of scissors shaping a beard and haircut in profile. Temporary image until shop photography is supplied.",
  width: 1400,
  height: 2100,
  position: "object-[center_22%]",
}

export const storyShot: Shot = {
  src: photo("story-atelier.jpg"),
  alt: "Editorial close-up of a fade being lined with a comb. Temporary image — not a photograph of the Wilson Avenue shop.",
  width: 1600,
  height: 2400,
  position: "object-[center_30%]",
}

export const archShot: Shot = {
  src: photo("story-arch.jpg"),
  alt: "Warm architectural interior with a glass atrium, used as an editorial texture. Not a photograph of the shop.",
  width: 1600,
  height: 2000,
  position: "object-center",
}

export const barberShot: Shot = {
  src: photo("barber-work.jpg"),
  alt: "Editorial photograph of clippers working a neckline. Portrait of Ziya to be supplied by the shop.",
  width: 1500,
  height: 1000,
  position: "object-[center_40%]",
}

export const teamShot: Shot = {
  src: photo("team-chairs.jpg"),
  alt: "Editorial photograph of barbers at work in a shop. Not a photograph of the Wilson Avenue premises or its team.",
  width: 1600,
  height: 1067,
  position: "object-[center_40%]",
}

export type CraftFrame = {
  index: string
  title: string
  body: string
  image: Shot
}

export const craft: CraftFrame[] = [
  {
    index: "01",
    title: "The fade",
    body: "Length comes off in passes. The blend has to hold in daylight, not only under the station lamp.",
    image: {
      src: photo("craft-fade.jpg"),
      alt: "Editorial photograph of a comb setting a hard part through a short fade.",
      width: 1600,
      height: 1067,
      position: "object-[center_35%]",
    },
  },
  {
    index: "02",
    title: "The razor",
    body: "Straight-razor work for the hairline and the shave — slow, exact, and finished by hand.",
    image: {
      src: photo("craft-shave.jpg"),
      alt: "Editorial photograph of a straight razor shave along the cheek.",
      width: 1600,
      height: 1067,
      position: "object-[center_40%]",
    },
  },
  {
    index: "03",
    title: "The ritual",
    body: "A stropped blade, a steady hand. Traditional barbering is still a craft of patience.",
    image: {
      src: photo("craft-towel.jpg"),
      alt: "Editorial photograph of a barber in a waistcoat preparing a straight razor.",
      width: 1400,
      height: 2100,
      position: "object-[center_20%]",
    },
  },
  {
    index: "04",
    title: "The beard",
    body: "Cheek, jaw, and neck brought into one line so the cut and the beard sit together.",
    image: {
      src: photo("craft-beard.jpg"),
      alt: "Editorial photograph of a beard being lined with a straight razor.",
      width: 1600,
      height: 1067,
      position: "object-[center_25%]",
    },
  },
  {
    index: "05",
    title: "The tools",
    body: "Shears within reach. The station is set before the cape goes on.",
    image: {
      src: photo("craft-tools.jpg"),
      alt: "Editorial photograph of barber shears hanging against wood.",
      width: 1600,
      height: 1067,
      position: "object-[center_40%]",
    },
  },
]

export type GalleryItem = Shot & {
  caption: string
  span: string
}

export const gallery: GalleryItem[] = [
  {
    src: photo("gallery-01.jpg"),
    alt: "Editorial photograph of a textured crop being finished with a comb.",
    width: 1500,
    height: 1000,
    position: "object-[center_30%]",
    caption: "Finished cuts",
    span: "md:col-span-7 md:row-span-2 min-h-[280px] md:min-h-[520px]",
  },
  {
    src: photo("gallery-02.jpg"),
    alt: "Editorial photograph of a hairline being refined with clippers.",
    width: 1600,
    height: 1067,
    position: "object-[center_30%]",
    caption: "The hairline",
    span: "md:col-span-5 min-h-[240px]",
  },
  {
    src: photo("gallery-03.jpg"),
    alt: "Editorial photograph of classic barber chairs. Not a photograph of the Wilson Avenue interior.",
    width: 1800,
    height: 1196,
    position: "object-center",
    caption: "The chair",
    span: "md:col-span-5 min-h-[240px]",
  },
  {
    src: photo("gallery-04.jpg"),
    alt: "Editorial photograph of a barber studying the shape of a beard and haircut.",
    width: 1400,
    height: 2100,
    position: "object-[center_20%]",
    caption: "In the chair",
    span: "md:col-span-6 min-h-[280px] md:min-h-[420px]",
  },
  {
    src: photo("gallery-05.jpg"),
    alt: "Editorial still life of clippers and a dryer in a wooden drawer.",
    width: 1400,
    height: 2100,
    position: "object-center",
    caption: "The kit",
    span: "md:col-span-6 min-h-[280px] md:min-h-[420px]",
  },
  {
    src: photo("gallery-06.jpg"),
    alt: "Editorial still life of clippers, shears, and pomade on a slate board.",
    width: 1500,
    height: 1000,
    position: "object-center",
    caption: "Atelier details",
    span: "md:col-span-12 min-h-[240px] md:min-h-[360px]",
  },
]
