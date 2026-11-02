/**
 * Public facts for Wilson Hair Saloon & Türk Berber, North York.
 * Unverified details are marked as placeholders.
 */

export const brand = {
  name: "WILSON HAIR SALOON & Türk Berber",
  short: "Wilson Hair Saloon",
  wordmark: "Wilson",
  descriptor: "Hair Saloon & Türk Berber",
  statement: "Traditional barbering. Modern precision. A welcoming place for everyone.",
}

export const phoneDisplay = "(647) 621-2518"
export const phoneHref = "tel:+16476212518"
export const smsHref = "sms:+16476212518"

export const address = {
  street: "893 Wilson Ave",
  city: "North York",
  region: "ON",
  postal: "M3K 1E6",
  country: "CA",
  neighbourhood: "Wilson Avenue",
  metro: "Toronto, Ontario",
}

export const addressLine = `${address.street}, ${address.city}, ${address.region} ${address.postal}`
export const addressFull = `${address.street}, ${address.city}, ${address.region} ${address.postal}, ${address.metro}, Canada`

const mapsQuery = `${brand.name}, ${addressLine}`

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=16&output=embed`
export const reviewsUrl = `https://www.google.com/search?q=${encodeURIComponent("Wilson Hair Saloon Türk Berber 893 Wilson Ave Google reviews")}`

/**
 * Facebook presence is confirmed; the direct profile URL is not.
 * This search is a stand-in until the shop supplies the page.
 */
export const facebookUrl = `https://www.google.com/search?q=${encodeURIComponent("Wilson Hair Saloon Türk Berber 893 Wilson Ave Facebook")}`
export const facebookNote = "Direct profile URL to confirm"

export const socials = [{ label: "Facebook", href: facebookUrl, note: facebookNote }]

export const rating = {
  value: "4.5",
  count: 132,
  label: "4.5 from 132 Google reviews",
}

export const navLinks = [
  { id: "top", label: "Home" },
  { id: "services", label: "Services" },
  { id: "story", label: "Story" },
  { id: "barbers", label: "Barbers" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Visit" },
]

export type HoursRow = {
  day: string
  note: string
  confirmed: boolean
}

export const hours: HoursRow[] = [
  { day: "Monday", note: "Opens 9:30 a.m. · closing time to confirm", confirmed: true },
  { day: "Tuesday", note: "Hours to confirm", confirmed: false },
  { day: "Wednesday", note: "Hours to confirm", confirmed: false },
  { day: "Thursday", note: "Hours to confirm", confirmed: false },
  { day: "Friday", note: "Hours to confirm", confirmed: false },
  { day: "Saturday", note: "Hours to confirm", confirmed: false },
  { day: "Sunday", note: "Hours to confirm", confirmed: false },
]

export const reviews = [
  {
    name: "Volodymyr G",
    quote: "Good place with really good professionals. Ziya is a master of haircut.",
  },
  {
    name: "Mert Karanfil",
    quote: "His skills, attention to detail, and professionalism are unmatched.",
  },
  {
    name: "Ali Guzel",
    quote: "It was a very good experience. The haircut was very nice.",
  },
]
