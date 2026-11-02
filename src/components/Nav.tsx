import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { brand, facebookUrl, mapsUrl, navLinks, phoneHref } from "../data"
import { useInquire } from "../context/InquireContext"
import { useActiveSection } from "../lib/useActiveSection"
import { trapFocus } from "../lib/focusTrap"

const EASE = [0.22, 1, 0.36, 1] as const

export function Nav() {
  const [menu, setMenu] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    if (!menu) return
    const close = () => setMenu(false)
    window.addEventListener("hashchange", close)
    return () => window.removeEventListener("hashchange", close)
  }, [menu])

  return (
    <>
      <nav className="sidebar" aria-label="Primary">
        <div className="sidebar-top">
          <a href="#top" className="sidebar-brand">
            {brand.wordmark}
          </a>
          <ul className="sidebar-nav sidebar-nav--desktop">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} aria-current={active === link.id ? "true" : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-bottom sidebar-bottom--desktop">
          <div className="sidebar-socials">
            <a className="sidebar-social-link" href={phoneHref} aria-label="Call">
              <PhoneIcon />
            </a>
            <a className="sidebar-social-link" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Map">
              <PinIcon />
            </a>
            <a
              className="sidebar-social-link"
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <SocialIcon />
            </a>
            <BookIconButton />
          </div>
        </div>

        <button
          type="button"
          className="sidebar-hamburger"
          aria-expanded={menu}
          aria-controls="site-menu"
          onClick={() => setMenu((open) => !open)}
        >
          {menu ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>{menu ? <MobileMenu onClose={() => setMenu(false)} active={active} /> : null}</AnimatePresence>
    </>
  )
}

function BookIconButton() {
  const { openInquire } = useInquire()
  return (
    <button type="button" className="sidebar-social-link" aria-label="Book" onClick={() => openInquire()}>
      <MailIcon />
    </button>
  )
}

function MobileMenu({ onClose, active }: { onClose: () => void; active: string }) {
  const panel = useRef<HTMLDivElement>(null)
  const { openInquire } = useInquire()
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!panel.current) return
    return trapFocus(panel.current, onClose)
  }, [onClose])

  return (
    <div id="site-menu" ref={panel} role="dialog" aria-modal="true" aria-label="Contents" className="sidebar-mobile">
      <div className="flex items-center justify-between">
        <a href="#top" className="sidebar-brand" onClick={onClose}>
          {brand.wordmark}
        </a>
        <button type="button" className="sidebar-hamburger" style={{ display: "flex" }} onClick={onClose}>
          Close
        </button>
      </div>
      <ul className="sidebar-nav mt-10">
        {navLinks.map((link, index) => (
          <motion.li
            key={link.id}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.45, ease: EASE }}
          >
            <a
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              onClick={onClose}
              style={{ fontSize: "1.35rem", padding: "16px 10px" }}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-auto inline-flex min-h-12 items-center justify-center bg-cream px-6 font-mono text-[11px] tracking-[0.16em] text-night uppercase"
        onClick={() => {
          onClose()
          openInquire()
        }}
      >
        Book a chair
      </button>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 3.5h3l1.2 4-2 1.2a12.5 12.5 0 0 0 5.6 5.6l1.2-2 4 1.2v3c0 1.1-.9 2-2.1 1.8A16.5 16.5 0 0 1 3.7 5.6c-.2-1.2.7-2.1 1.8-2.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function SocialIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 8h3V5h-3a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h2.5L16 11h-3V9a1 1 0 0 1 1-1Z" fill="currentColor" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
