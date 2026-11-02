import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react"
import { addressLine, brand, phoneDisplay, phoneHref, services, smsHref } from "../data"
import { useInquire } from "../context/InquireContext"
import { trapFocus } from "../lib/focusTrap"

type Fields = {
  name: string
  phone: string
  service: string
  note: string
}

const empty: Fields = { name: "", phone: "", service: "", note: "" }

export function Inquire() {
  const { open, service, closeInquire } = useInquire()
  if (!open) return null
  return <Dialog preset={service ?? ""} onClose={closeInquire} />
}

function Dialog({ preset, onClose }: { preset: string; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const baseId = useId()
  const [form, setForm] = useState<Fields>({ ...empty, service: preset })
  const [errors, setErrors] = useState<Partial<Fields>>({})
  const [sent, setSent] = useState(false)
  const [message, setMessage] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const node = dialogRef.current
    if (!node) return
    return trapFocus(node, onClose)
  }, [onClose, sent])

  function update(field: keyof Fields, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    const next: Partial<Fields> = {}
    if (form.name.trim().length < 2) next.name = "Please add your name."
    if (form.phone.replace(/\D/g, "").length < 10) next.phone = "Please add a phone number."
    if (!form.service) next.service = "Please choose a service."
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const text = [
      `Hello ${brand.short} — I would like to book an appointment.`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service: ${form.service}`,
      form.note.trim() ? `Note: ${form.note.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    setMessage(text)
    setSent(true)
    window.location.href = `${smsHref}?&body=${encodeURIComponent(text)}`
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const fieldClass =
    "mt-2 w-full border-b border-line bg-transparent py-2.5 font-mono text-sm text-cream outline-none focus:border-cream"
  const smsLink = `${smsHref}?&body=${encodeURIComponent(message)}`
  const labelClass = "font-mono text-[11px] tracking-[0.16em] text-mute uppercase"
  const ctaSolid =
    "inline-flex min-h-11 items-center bg-cream px-5 font-mono text-[11px] tracking-[0.16em] text-night uppercase"
  const ctaGhost =
    "inline-flex min-h-11 items-center border border-line px-5 font-mono text-[11px] tracking-[0.16em] text-cream uppercase"

  return (
    <div
      className="fixed inset-0 z-[120] flex items-end justify-center bg-night/80 p-3 sm:items-center"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${baseId}-title`}
        onMouseDown={(event) => event.stopPropagation()}
        className="max-h-[min(92svh,840px)] w-full max-w-[620px] overflow-y-auto border border-line bg-ink p-6 text-cream sm:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className={labelClass}>Reserve a chair</p>
            <h2 id={`${baseId}-title`} className="mt-3 font-mono text-[2rem] font-bold tracking-[0.06em] uppercase">
              {sent ? "Message ready." : "Call or text the shop."}
            </h2>
          </div>
          <button type="button" onClick={onClose} className={`${labelClass} min-h-11 px-1 text-cream`}>
            Close
          </button>
        </div>

        {sent ? (
          <div className="mt-8">
            <p className="max-w-md text-[13px] leading-relaxed text-mute">
              A text to {phoneDisplay} should be opening. This does not confirm a booking — the shop will reply. If this
              device cannot send it, call instead.
            </p>
            <pre className="mt-6 border-t border-line pt-4 font-mono text-sm leading-relaxed whitespace-pre-wrap">
              {message}
            </pre>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={smsLink} className={ctaSolid}>
                Text the shop
              </a>
              <a href={phoneHref} className={ctaGhost}>
                Call
              </a>
              <button type="button" onClick={copy} className={`${labelClass} min-h-11 px-2 text-cream`}>
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        ) : (
          <form className="mt-8 grid gap-6" onSubmit={submit} noValidate>
            <p className="max-w-md text-[13px] leading-relaxed text-mute">
              {addressLine}. Appointments are arranged by phone. Monday opens at 9:30 a.m.; remaining hours are to be
              confirmed. There is no online calendar yet.
            </p>

            <Field id={`${baseId}-name`} label="Name" error={errors.name} errorId={`${baseId}-name-error`}>
              <input
                id={`${baseId}-name`}
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
                className={fieldClass}
              />
            </Field>

            <Field id={`${baseId}-phone`} label="Phone" error={errors.phone} errorId={`${baseId}-phone-error`}>
              <input
                id={`${baseId}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={form.phone}
                onChange={(event) => update("phone", event.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? `${baseId}-phone-error` : undefined}
                className={fieldClass}
              />
            </Field>

            <Field id={`${baseId}-service`} label="Service" error={errors.service} errorId={`${baseId}-service-error`}>
              <select
                id={`${baseId}-service`}
                name="service"
                value={form.service}
                onChange={(event) => update("service", event.target.value)}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? `${baseId}-service-error` : undefined}
                className={fieldClass}
              >
                <option value="">Choose a service</option>
                {services.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name} — {item.price}
                  </option>
                ))}
                <option value="Haircut with Ziya">Haircut with Ziya — to confirm</option>
              </select>
            </Field>

            <label className="block" htmlFor={`${baseId}-note`}>
              <span className={labelClass}>Note</span>
              <textarea
                id={`${baseId}-note`}
                name="note"
                rows={3}
                value={form.note}
                onChange={(event) => update("note", event.target.value)}
                className={`${fieldClass} resize-none`}
              />
            </label>

            <div className="flex flex-wrap gap-3 pt-2">
              <button type="submit" className={ctaSolid}>
                Text the shop
              </button>
              <a href={phoneHref} className={ctaGhost}>
                Call {phoneDisplay}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({
  id,
  label,
  error,
  errorId,
  children,
}: {
  id: string
  label: string
  error?: string
  errorId: string
  children: ReactNode
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="font-mono text-[11px] tracking-[0.16em] text-mute uppercase">{label}</span>
      {children}
      {error ? (
        <span id={errorId} className="mt-2 block text-sm text-cream">
          {error}
        </span>
      ) : null}
    </label>
  )
}
