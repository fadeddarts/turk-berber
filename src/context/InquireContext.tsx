import { createContext, useContext, useMemo, useState, type ReactNode } from "react"

type InquireContextValue = {
  open: boolean
  service: string | null
  openInquire: (service?: string) => void
  closeInquire: () => void
}

const InquireContext = createContext<InquireContextValue | null>(null)

export function InquireProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [service, setService] = useState<string | null>(null)

  const value = useMemo<InquireContextValue>(
    () => ({
      open,
      service,
      openInquire: (next?: string) => {
        setService(next ?? null)
        setOpen(true)
      },
      closeInquire: () => setOpen(false),
    }),
    [open, service],
  )

  return <InquireContext.Provider value={value}>{children}</InquireContext.Provider>
}

export function useInquire() {
  const context = useContext(InquireContext)
  if (!context) throw new Error("useInquire must be used within InquireProvider")
  return context
}
