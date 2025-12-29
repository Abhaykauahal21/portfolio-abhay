"use client"

import * as React from "react"
import Lenis from "lenis"

export function LenisProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return
      if (e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      const target = e.target as HTMLElement | null
      const anchor = target?.closest("a") as HTMLAnchorElement | null
      if (!anchor) return
      if (anchor.target && anchor.target !== "_self") return
      if (anchor.hasAttribute("download")) return

      const hrefAttr = anchor.getAttribute("href")
      if (!hrefAttr || !hrefAttr.includes("#")) return

      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (url.pathname !== window.location.pathname) return
      if (!url.hash) return

      const el = document.querySelector<HTMLElement>(url.hash)
      if (!el) return

      e.preventDefault()
      lenis.scrollTo(el, { offset: 0 })
      window.history.pushState(null, "", url.hash)
    }

    document.addEventListener("click", onClick, true)

    const initialHash = window.location.hash
    if (initialHash) {
      const el = document.querySelector<HTMLElement>(initialHash)
      if (el) lenis.scrollTo(el, { immediate: true })
    }

    return () => {
      document.removeEventListener("click", onClick, true)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return children
}
