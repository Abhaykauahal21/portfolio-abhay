"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check, Circle, CircleDot } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  id: string | number
  title: string
  date: string
  status: "completed" | "in-progress" | "pending"
  icon?: React.ReactNode
}

interface TrackingTimelineProps {
  items: TimelineItem[]
  className?: string
}

const StatusIcon = ({ status, customIcon }: { status: TimelineItem["status"]; customIcon?: React.ReactNode }) => {
  if (customIcon) {
    return <>{customIcon}</>
  }

  switch (status) {
    case "completed":
      return <Check className="h-4 w-4 text-white" />
    case "in-progress":
      return <CircleDot className="h-4 w-4 text-primary" />
    default:
      return <Circle className="h-4 w-4 text-muted-foreground/50" />
  }
}

const TrackingTimeline = ({ items, className }: TrackingTimelineProps) => {
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
    },
  }

  return (
    <motion.ol
      className={cn("relative mx-auto max-w-3xl", className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="pointer-events-none absolute left-5 top-0 h-full w-px bg-border/40" />
      {items.map((item) => (
        <motion.li
          key={item.id}
          className="relative flex gap-8 pb-10"
          variants={itemVariants}
          aria-current={item.status === "in-progress" ? "step" : undefined}
        >
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted/60 shadow-lg ring-1 ring-border/50">
            {item.status === "in-progress" && (
              <span className="absolute h-full w-full animate-ping rounded-full bg-primary/40 opacity-60" />
            )}
            <div className="relative">
              <StatusIcon status={item.status} customIcon={item.icon} />
            </div>
          </div>

          <div
            className={cn(
              "w-full rounded-2xl border border-border/60 bg-card/40 px-7 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md",
              item.status === "in-progress" && "ring-1 ring-primary/40"
            )}
          >
            <h3 className="text-lg md:text-xl font-semibold text-foreground">{item.title}</h3>
            <time className="mt-2 block text-sm font-medium text-muted-foreground">{item.date}</time>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}

export default TrackingTimeline
