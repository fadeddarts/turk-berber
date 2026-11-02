export type Service = {
  id: string
  index: string
  name: string
  description: string
  duration: string
  price: string
  placeholder: boolean
}

/**
 * Suggested menu until the shop confirms offerings and prices.
 * Public listings mention men's haircuts, beard trims, and hot towel shaves.
 */
export const services: Service[] = [
  {
    id: "classic-haircut",
    index: "01",
    name: "Classic Haircut",
    description: "A considered cut with shears or clippers, finished at the neckline and shaped to the head.",
    duration: "Duration to confirm",
    price: "Price to confirm",
    placeholder: true,
  },
  {
    id: "skin-fade",
    index: "02",
    name: "Skin Fade",
    description: "A tight blend to the skin, with enough length on top to hold a clean shape through the week.",
    duration: "Duration to confirm",
    price: "Price to confirm",
    placeholder: true,
  },
  {
    id: "taper-fade",
    index: "03",
    name: "Taper Fade",
    description: "A softer taper through the sides and nape — precise, wearable, and easy to grow out.",
    duration: "Duration to confirm",
    price: "Price to confirm",
    placeholder: true,
  },
  {
    id: "beard-trim",
    index: "04",
    name: "Beard Trim",
    description: "Cheek line, neck line, and length brought into one shape. Listed on public service directories.",
    duration: "Duration to confirm",
    price: "Price to confirm",
    placeholder: true,
  },
  {
    id: "haircut-beard",
    index: "05",
    name: "Haircut & Beard",
    description: "The full chair: cut and beard together so the two read as one.",
    duration: "Duration to confirm",
    price: "Price to confirm",
    placeholder: true,
  },
  {
    id: "traditional-shave",
    index: "06",
    name: "Traditional Shave",
    description: "A close straight-razor shave. Confirm availability with the shop when you call.",
    duration: "Duration to confirm",
    price: "Price to confirm",
    placeholder: true,
  },
  {
    id: "hot-towel",
    index: "07",
    name: "Hot Towel Experience",
    description: "Hot towel preparation with the shave or beard. Listed on public service directories.",
    duration: "Duration to confirm",
    price: "Price to confirm",
    placeholder: true,
  },
]
