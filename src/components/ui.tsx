import type { ReactNode } from "react"
import { useInquire } from "../context/InquireContext"

const buttonStyles = {
  solid: "bg-cream text-night hover:bg-mute hover:text-cream",
  ghost: "border border-line text-cream hover:border-cream hover:bg-cream hover:text-night",
} as const

export function Button({
  children,
  variant = "solid",
  className = "",
  href,
  onClick,
  type = "button",
}: {
  children: ReactNode
  variant?: keyof typeof buttonStyles
  className?: string
  href?: string
  onClick?: () => void
  type?: "button" | "submit"
}) {
  const styles = `type-button inline-flex min-h-11 items-center justify-center px-5 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors ${buttonStyles[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  )
}

export function BookButton({
  children,
  variant = "solid",
  className = "",
  service,
}: {
  children: ReactNode
  variant?: keyof typeof buttonStyles
  className?: string
  service?: string
}) {
  const { openInquire } = useInquire()
  return (
    <Button variant={variant} onClick={() => openInquire(service)} className={className}>
      {children}
    </Button>
  )
}
