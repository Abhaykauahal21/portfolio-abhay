"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { CpuArchitecture } from "@/components/ui/cpu-architecture"
import { usePathname } from "next/navigation"

export default function AboutSection() {
  const pathname = usePathname()

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden min-h-screen bg-background px-6 py-24 text-foreground dark:bg-black dark:text-white"
    >
      {pathname === "/about" && (
        <div className="absolute top-6 right-6 z-50">
          <ModeToggle />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.06),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.04),transparent_55%)] dark:hidden" />
        <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.8),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.85),transparent_55%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <CpuArchitecture className="h-[140%] w-[140%] text-neutral-300/20 opacity-10 dark:text-neutral-900/90 dark:opacity-10" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/20 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-transparent dark:from-white/10" />
              <div className="relative flex h-[360px] items-center justify-center md:h-[520px]">
                <div className="pointer-events-none absolute h-[70%] w-[70%] rounded-full bg-foreground/10 blur-3xl dark:bg-black" />
                <img
                  src="/abhay2.png"
                  alt="About portrait"
                  className="relative z-10 h-[85%] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Hi, I&apos;m Abhay
            </h2>
            <p className="mt-3 text-lg text-foreground/70 dark:text-white/70">
              Passionate Full-Stack Developer
            </p>

            <div className="mt-7 space-y-4 text-foreground/80 leading-relaxed dark:text-white/75">
              <p>
                I&apos;m focused on building modern, high-performance web
                applications that feel great to use and stay reliable in
                production.
              </p>
              <p>
                I work across the stack — crafting responsive UI, clean APIs,
                and scalable architecture with attention to performance and UX
                details.
              </p>
              <p className="text-foreground font-semibold dark:text-white">
                I turn complex problems into elegant, efficient, and scalable
                solutions.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/90 dark:border-white/10 dark:bg-white/5 dark:text-white/90">
                MERN Stack
              </span>
              <span className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/90 dark:border-white/10 dark:bg-white/5 dark:text-white/90">
                LAMP Stack
              </span>
              <span className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/90 dark:border-white/10 dark:bg-white/5 dark:text-white/90">
                Next.js
              </span>
              <span className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/90 dark:border-white/10 dark:bg-white/5 dark:text-white/90">
                Docker
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
