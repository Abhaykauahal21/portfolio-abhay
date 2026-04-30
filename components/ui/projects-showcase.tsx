"use client";

import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { DottedSurface } from "@/components/dotted-surface";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
})

interface Project {
  title: string;
  description: string;
  image?: string;
  imageFit?: "cover" | "contain";
  imageContainerClassName?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectsShowcaseProps {
  projects: Project[];
}

export const ProjectsShowcase = ({ projects }: ProjectsShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Update current project based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clampedProgress = Math.max(0, Math.min(1, latest));
    const segmentSize = 1 / projects.length;
    let index = Math.floor(clampedProgress / segmentSize);
    index = Math.min(index, projects.length - 1);
    index = Math.max(0, index);
    
    if (index !== currentProjectIndex) {
      setCurrentProjectIndex(index);
    }
  });

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.95] : [1.02, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  const currentProject = projects[currentProjectIndex] || projects[0];

  return (
    <div className="relative w-full py-10 md:py-20" ref={containerRef}>
      <div
        className="w-full relative"
        style={{
          perspective: "1200px",
        }}
      >
        <ProjectCard 
          rotate={rotate} 
          scale={scale}
          project={currentProject}
          index={currentProjectIndex}
        />

        {/* Project Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, index) => (
            <motion.div
              key={index}
              animate={{ 
                width: index === currentProjectIndex ? 32 : 8,
                backgroundColor: index === currentProjectIndex ? "var(--primary)" : "rgba(var(--primary-rgb), 0.2)"
              }}
              className="h-2 rounded-full transition-colors duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  rotate,
  scale,
  project,
  index,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      key={index}
      style={{
        rotateX: rotate,
        scale,
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-5xl mx-auto h-[35rem] md:h-[45rem] w-full relative",
        "border border-border/50 p-2 md:p-4 bg-card/20 backdrop-blur-xl rounded-[40px] shadow-2xl overflow-hidden group"
      )}
    >
      <div className="h-full w-full overflow-hidden rounded-[32px] bg-background/40 flex flex-col">
        {/* Project Image Container */}
        <div
          className={cn(
            "relative h-[55%] md:h-[65%] w-full bg-gradient-to-br from-primary/5 via-transparent to-primary/10 flex items-center justify-center overflow-hidden",
            project.imageContainerClassName
          )}
        >
          {project.image ? (
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              src={project.image}
              alt={project.title}
              className={cn(
                "w-full h-full transition-transform duration-700 group-hover:scale-105",
                project.imageFit === "contain" ? "object-contain p-8" : "object-cover"
              )}
            />
          ) : (
            <div className="text-8xl font-black text-primary/5 uppercase">
              {project.title.charAt(0)}
            </div>
          )}
          
          {/* Overlay Tag */}
          <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest uppercase">
            Featured Project
          </div>
        </div>

        {/* Project Info */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
               <h3 className={cn(syne.className, "text-2xl md:text-4xl font-bold tracking-tight")}>
                 {project.title}
               </h3>
               <div className="flex gap-3">
                 {project.githubUrl && (
                   <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                   >
                     <Github className="size-5" />
                   </a>
                 )}
                 {project.liveUrl && (
                   <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-foreground text-background hover:scale-110 transition-transform"
                   >
                     <ArrowUpRight className="size-5" />
                   </a>
                 )}
               </div>
            </div>
            
            <p className="max-w-2xl text-sm md:text-lg text-muted-foreground/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies Footer */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-[10px] md:text-xs font-bold tracking-wider bg-primary/5 text-primary border border-primary/10 rounded-full uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient Glow */}
      <div className="absolute -bottom-20 -right-20 size-64 bg-primary/10 blur-[100px] pointer-events-none" />
    </motion.div>
  );
};

