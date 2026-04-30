"use client"

import React from "react"
import { motion } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
import { CpuArchitecture } from "@/components/ui/cpu-architecture"
import { usePathname } from "next/navigation"
import { Syne, Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"
import { SparklesText } from "@/components/ui/sparkles-text"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
})

export default function AboutSection() {
  const pathname = usePathname()

  const stats = [
    { label: "Years Exp.", value: "3+" },
    { label: "Projects Done", value: "20+" },
    { label: "Tech Stack", value: "10+" },
    { label: "Cups of Coffee", value: "Infinite" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden min-h-screen bg-background px-6 py-32 flex items-center justify-center"
    >
      {pathname === "/about" && (
        <div className="absolute top-6 right-6 z-50">
          <ModeToggle />
        </div>
      )}

      {/* Background Visual Depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary),0.03),transparent_45%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <CpuArchitecture className="h-[100%] w-[100%] text-primary/5 opacity-10" />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto w-full max-w-6xl relative"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual Side */}
          <motion.div variants={itemVariants} className="relative group flex justify-center lg:justify-start">
            <div className="relative size-72 sm:size-96 rounded-full overflow-hidden border border-border bg-card/5 backdrop-blur-sm shadow-xl transition-all duration-500 group-hover:border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
              <img
                src="/abhay2.png"
                alt="Abhay Portrait"
                className="relative z-10 h-[90%] w-auto mx-auto mt-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Experience Label */}
            <div className="absolute bottom-4 right-4 sm:right-12 px-4 py-2 rounded-full bg-background border border-border shadow-lg">
              <span className={cn(syne.className, "text-sm font-bold")}>3+ Years Exp.</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <h4 className={cn(syne.className, "text-xs font-bold tracking-[0.5em] text-primary/60 uppercase mb-3")}>
                About Me
              </h4>
              <h2 className={cn(syne.className, "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4")}>
                Hi, I&apos;m <span className="text-primary">Abhay Kaushal</span>
              </h2>
              <p className={cn(playfair.className, "text-xl italic text-muted-foreground/80")}>
                Building digital experiences with purpose.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I am a <span className="text-foreground font-semibold">Full-Stack Developer</span> focused on creating clean, efficient, and user-centric web applications.
                I believe in the power of simple code and elegant design to solve complex problems.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My approach combines technical precision with a keen eye for detail, ensuring every project is both functional and beautiful.
              </p>
            </motion.div>

            {/* Simple Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-2"
            >
              <div className="p-4 rounded-xl border border-border/50 bg-card/20">
                <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground/50 mb-1">Projects</p>
                <p className={cn(syne.className, "text-xl font-bold")}>20+ Complete</p>
              </div>
              <div className="p-4 rounded-xl border border-border/50 bg-card/20">
                <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground/50 mb-1">Focus</p>
                <p className={cn(syne.className, "text-xl font-bold")}>Performance</p>
              </div>
            </motion.div>

            {/* Tech Pill Grid */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 mt-2">
              {["React", "Next.js", "Node.js", "TypeScript", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full border border-border bg-background/50 text-[10px] font-bold tracking-widest text-muted-foreground uppercase transition-all hover:border-primary/30 hover:text-primary"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
