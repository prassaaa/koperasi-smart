"use client"

import { useEffect, useState } from "react"
import { Toaster as Sonner, ToasterProps } from "sonner"

// Custom hook untuk mendeteksi tema aktual (light/dark) dari DOM
const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Deteksi tema dari class di document element
    const detectTheme = () => {
      if (document.documentElement.classList.contains("dark")) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }

    // Deteksi tema saat komponen dimount
    detectTheme()

    // Observer untuk mendeteksi perubahan class
    const observer = new MutationObserver(detectTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return { theme }
}

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
