import { address, brand, navLinks, phoneDisplay, phoneHref } from "../data"
import { useInquire } from "../context/InquireContext"

export function Footer() {
  const { openInquire } = useInquire()

  return (
    <footer className="border-t border-line bg-ink px-6 py-12 md:px-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-[15px] font-bold tracking-[0.08em] uppercase">{brand.short}</p>
          <p className="mt-4 max-w-sm text-[12px] leading-relaxed text-mute">{brand.statement}</p>
          <p className="mt-6 text-[12px] text-mute">
            {address.street}, {address.city}
            <br />
            <a href={phoneHref} className="text-cream no-underline hover:underline">
              {phoneDisplay}
            </a>
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-mono text-[11px] tracking-[0.14em] text-mute uppercase no-underline hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="font-mono text-[11px] tracking-[0.14em] text-cream uppercase"
            onClick={() => openInquire()}
          >
            Book
          </button>
        </nav>
      </div>
      <p className="mt-12 text-[11px] tracking-[0.08em] text-mute uppercase">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </p>
    </footer>
  )
}
