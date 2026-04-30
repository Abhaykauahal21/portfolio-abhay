"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Instagram, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { Syne } from "next/font/google";
import { cn } from "@/lib/utils";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const SocialCard = ({ social, index }: { social: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative block perspective-1000"
    >
      {/* Floating Background Label */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
         <span className={cn(syne.className, "text-[8rem] font-black uppercase tracking-tighter")}>
            {social.name}
         </span>
      </div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn(
          "relative h-72 rounded-[3rem] border border-border/50 bg-card/5 backdrop-blur-2xl p-10 flex flex-col items-center justify-center gap-8 transition-all duration-500 overflow-hidden",
          social.color,
          social.glow,
          "hover:border-transparent"
        )}
      >
        {/* Dynamic Scan Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 -translate-y-full group-hover:translate-y-[72rem] transition-all duration-[2s] ease-in-out" />

        <div 
          style={{ transform: "translateZ(50px)" }}
          className="relative z-10 text-white group-hover:scale-110 transition-transform duration-500"
        >
          <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl group-hover:bg-white/10 group-hover:border-white/20 transition-all">
             {social.icon}
          </div>
        </div>

        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative z-10 flex flex-col items-center gap-3"
        >
          <span className={cn(syne.className, "text-2xl font-black text-foreground group-hover:text-white transition-colors tracking-tight")}>
            {social.name}
          </span>
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
             <span className="text-[10px] font-black tracking-widest text-white uppercase">Join Network</span>
             <ArrowUpRight className="size-3 text-white" />
          </div>
        </div>

        {/* Gloss Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </motion.a>
  );
};

const SocialConnect = () => {
  const socials = [
    {
      name: "Instagram",
      icon: <Instagram className="size-10" />,
      link: "https://www.instagram.com/kaushal_21_09?igsh=MTFjaTIwcWpvcG9rOA==",
      color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
      glow: "group-hover:shadow-[0_0_50px_rgba(238,42,123,0.3)]"
    },
    {
      name: "GitHub",
      icon: <Github className="size-10" />,
      link: "https://github.com/Abhaykauahal21/",
      color: "hover:bg-[#1a1a1a]",
      glow: "group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="size-10" />,
      link: "https://www.linkedin.com/in/abhay-kaushal-b85429248/",
      color: "hover:bg-[#0077b5]",
      glow: "group-hover:shadow-[0_0_50px_rgba(0,119,181,0.3)]"
    }
  ];

  return (
    <section id="contact" className="py-48 relative overflow-hidden bg-background">
      {/* Background Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="px-5 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
           >
              <span className={cn(syne.className, "text-[10px] font-black tracking-[0.4em] text-primary uppercase")}>
                The Connection Hub
              </span>
           </motion.div>
           
           <h2 className={cn(syne.className, "text-5xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12")}>
             Stay <span className="text-primary italic">Aligned.</span>
           </h2>
           
           <p className="text-xl md:text-2xl text-muted-foreground/40 max-w-3xl leading-relaxed italic">
             &ldquo;In the intersection of code and community, <span className="text-foreground not-italic font-bold">real magic happens</span>.&rdquo;
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {socials.map((social, i) => (
            <SocialCard key={social.name} social={social} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { SocialConnect };