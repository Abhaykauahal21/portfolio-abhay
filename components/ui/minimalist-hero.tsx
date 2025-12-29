"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { SparklesText } from "@/components/ui/sparkles-text"
import { Great_Vibes } from "next/font/google"
import { Typewriter } from "@/components/ui/typewriter"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

interface MinimalistHeroProps {
  logoText: string
  mainText: string
  readMoreLink: string
  imageSrc: string
  imageAlt: string
  overlayText: {
    part1: string
    part2: string
  }
  locationText: string
  className?: string
}

export const MinimalistHero = ({
  logoText,
  mainText,
  imageSrc,
  imageAlt,
  overlayText,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden min-h-screen w-full bg-background px-4 pt-24 pb-10 sm:px-8 md:px-12",
        className
      )}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-30 text-lg sm:text-xl font-bold tracking-wider"
      >
        {logoText}
      </motion.div>

      {/* Main Content */}
      <div className="relative mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-3 md:gap-8">
        
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="order-2 relative z-20 text-center md:order-1 md:text-left md:justify-self-start md:-translate-x-6 lg:-translate-x-10"
        >
          {/* Name */}
          <SparklesText
            text={mainText}
            className={`${greatVibes.className} font-normal text-4xl sm:text-5xl md:text-6xl tracking-wider`}
          />

          {/* Typewriter subtitle */}
          <div className="mt-4 flex justify-center md:justify-start">
            <p className="flex items-center gap-2 whitespace-nowrap text-sm sm:text-base md:text-lg">
              <span>I am</span>
              <Typewriter
                text={["Full Stack Developer", "Freelancer"]}
                speed={70}
                deleteSpeed={40}
                waitTime={1500}
                cursorChar="_"
                className="text-yellow-500"
              />
            </p>
          </div>
        </motion.div>

        {/* Center Image */}
        <div className="relative order-1 flex items-center justify-center md:order-2">
          {/* Circle */}
          <motion.div
            className="absolute z-0 h-[240px] w-[240px] rounded-full bg-yellow-400/90 sm:h-[300px] sm:w-[300px] md:h-[600px] md:w-[600px]"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Image */}
         <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="
            relative z-10
            w-48 sm:w-60 md:w-96 lg:w-[28rem]
            scale-[1.15] sm:scale-[1.25] md:scale-[1.4] lg:scale-[1.6]
            object-cover
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        />
        </div>

        {/* Right Big Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="order-3 relative z-30 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
            {overlayText.part1}
            {overlayText.part2 && <><br />{overlayText.part2}</>}
          </h1>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 mt-12 flex justify-center md:justify-end">
        <span className="text-xs sm:text-sm text-foreground/70">
          {locationText}
        </span>
      </footer>
    </section>
  )
}
