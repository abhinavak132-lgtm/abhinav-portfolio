"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks, profile } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = () => setOpen(false)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        <a
          href="#home"
          onClick={handleNav}
          className="justify-self-start text-sm font-semibold tracking-tight text-foreground"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center justify-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden justify-self-end whitespace-nowrap rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNav}
                  className="block rounded-lg px-2 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
