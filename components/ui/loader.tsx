"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Syne } from "next/font/google";
import { cn } from "@/lib/utils";

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
});

export const PremiumLoader = () => {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  // Mouse tilt effect for the loader
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      x.set(e.clientX / innerWidth - 0.5);
      y.set(e.clientY / innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, [x, y]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            scale: 1.1,
            opacity: 0,
            filter: "blur(20px)",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black overflow-hidden perspective-1000"
        >
          {/* Background Animated Gradient */}
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/5 blur-[150px] rounded-full" />
             <div className="absolute inset-0 noise-overlay opacity-[0.05]" />
          </div>

          {/* Interactive Content Container */}
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative flex flex-col items-center z-10"
          >
            {/* The "Glinting" Name */}
            <div className="relative overflow-hidden px-10 mb-8">
              <motion.h1
                className={cn(syne.className, "text-[clamp(3.5rem,18vw,12rem)] font-black tracking-tighter text-white")}
              >
                {/* Outlined Base */}
                <span className="absolute inset-0 text-white/5" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)", color: "transparent" }}>
                  ABHAY.
                </span>
                
                {/* Liquid Fill */}
                <motion.span 
                  className="relative block text-white"
                  style={{ clipPath: `inset(${100 - counter}% 0 0 0)` }}
                >
                  ABHAY.
                  {/* The Glint/Light Sweep */}
                  <motion.div 
                    animate={{ left: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" 
                  />
                </motion.span>
              </motion.h1>
            </div>

            {/* Futuristic Stats Panel */}
            <div className="w-[300px] md:w-[500px] space-y-6 px-10">
               <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                     <div className="flex items-center gap-2">
                        <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Module</span>
                     </div>
                     <motion.span 
                       key={counter}
                       className="text-xs font-bold text-white tracking-widest uppercase"
                     >
                        {counter < 30 ? "System_Init" : counter < 60 ? "Vision_Render" : counter < 90 ? "UI_Symmetry" : "Ready_State"}
                     </motion.span>
                  </div>
                  <div className="flex flex-col items-end">
                     <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase mb-1">Progress</span>
                     <span className={cn(syne.className, "text-4xl font-black text-primary")}>
                        {counter}%
                     </span>
                  </div>
               </div>

               {/* Advanced Progress Bar */}
               <div className="relative group">
                  <div className="absolute -inset-1 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-[4px] w-full bg-white/5 overflow-hidden rounded-full">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${counter}%` }}
                      className="h-full bg-primary relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
               </div>

               {/* Meta Info */}
               <div className="flex justify-between text-[9px] font-bold text-white/20 tracking-[0.2em] uppercase">
                  <span>Architecture v4.0</span>
                  <span>© 2025 ABHAY</span>
               </div>
            </div>
          </motion.div>

          {/* Corner Elements */}
          <div className="absolute top-10 left-10 p-4 border-l border-t border-white/10">
             <div className="size-1 bg-primary rounded-full" />
          </div>
          <div className="absolute bottom-10 right-10 p-4 border-r border-b border-white/10">
             <div className="size-1 bg-primary rounded-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
