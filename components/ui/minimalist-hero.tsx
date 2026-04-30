"use client";

import React, { useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue 
} from "framer-motion";
import { Syne, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700"],
});

export const MinimalistHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Magnetic effect for the name
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center pt-32 md:pt-48 px-4 md:px-0"
    >
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] size-[60%] rounded-full bg-primary/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] size-[60%] rounded-full bg-primary/10 blur-[150px]" 
        />
      </div>

      {/* Content Container */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 flex items-center gap-3 px-5 py-2 rounded-full border border-border/40 bg-card/5 backdrop-blur-xl shadow-xl shadow-black/5"
        >
          <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-foreground/80">
            Available for new projects
          </span>
        </motion.div>

        {/* Main Name - Magnetic Interaction */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative cursor-default py-4 px-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any, delay: 0.4 }}
            className={cn(
              syne.className,
              "text-[clamp(2.5rem,14vw,8.5rem)] font-black leading-[0.8] tracking-tighter text-foreground perspective-1000"
            )}
          >
            ABHAY <br />
            KAUSHAL
          </motion.h1>
          
          {/* Floating Role Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="absolute -top-8 -right-4 md:-right-24 rotate-6"
          >
            <span className={cn(playfair.className, "text-3xl md:text-6xl text-primary font-bold italic drop-shadow-2xl")}>
              Digital Architect
            </span>
          </motion.div>
        </motion.div>

        {/* Sophisticated Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 flex flex-col items-center gap-8"
        >
           <p className="max-w-2xl text-lg md:text-2xl text-muted-foreground/50 font-medium leading-relaxed px-6 italic">
            &ldquo;Crafting ultra-premium digital interfaces where <span className="text-foreground font-bold not-italic">vision meets code</span>.&rdquo;
          </p>
          
          {/* Call to Action - Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 mt-8"
          >
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-muted-foreground/30">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Symmetrical Vertical Strips - Modern Aesthetic */}
      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 h-64 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 h-64 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-4">
         <span className="text-[10px] font-black tracking-[0.4em] text-muted-foreground/20 uppercase whitespace-nowrap">Portfolio Volume 2025</span>
      </div>
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-4">
         <span className="text-[10px] font-black tracking-[0.4em] text-muted-foreground/20 uppercase whitespace-nowrap">Full-Stack Excellence</span>
      </div>
    </section>
  );
};
