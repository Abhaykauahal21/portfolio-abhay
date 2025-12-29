"use client";

import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { DottedSurface } from "@/components/dotted-surface";

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

  // Update current project based on scroll progress - one project per scroll segment
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Clamp the progress between 0 and 1
    const clampedProgress = Math.max(0, Math.min(1, latest));
    // Divide scroll progress into equal segments, one for each project
    const segmentSize = 1 / projects.length;
    // Calculate which segment we're in
    let index = Math.floor(clampedProgress / segmentSize);
    // Ensure index is within bounds
    index = Math.min(index, projects.length - 1);
    index = Math.max(0, index);
    
    if (index !== currentProjectIndex) {
      setCurrentProjectIndex(index);
    }
  });

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // Animation values based on full scroll progress - smooth continuous animation
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const currentProject = projects[currentProjectIndex] || projects[0];

  return (
    <section id="projects" className="relative overflow-hidden bg-background py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <DottedSurface className="absolute inset-0" />
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
            "blur-[30px]"
          )}
        />
      </div>
      <div
        className="relative z-10 h-[20rem] md:h-[50rem] flex items-center justify-center p-2 md:p-20"
        ref={containerRef}
      >
        <div
          className="py-10 md:py-40 w-full relative"
          style={{
            perspective: "1000px",
          }}
        >
        

          <ProjectCard 
            rotate={rotate} 
            // translate={translate} 
            scale={scale}
            project={currentProject}
            index={currentProjectIndex}
            totalProjects={projects.length}
          />

          {/* Project Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentProjectIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  rotate,
  scale,
  project,
  index,
  totalProjects,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  project: Project;
  index: number;
  totalProjects: number;
}) => {
  return (
    <motion.div
      key={index}
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={cn(
        "max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full",
        "border-4 border-border p-2 md:p-6 bg-card rounded-[30px] shadow-2xl"
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-background md:rounded-2xl md:p-6 flex flex-col">
        {/* Project Image/Placeholder */}
        <div
          className={cn(
            "flex-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center overflow-hidden",
            project.imageContainerClassName
          )}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className={cn(
                "w-full h-full rounded-lg",
                project.imageFit === "contain" ? "object-contain" : "object-cover"
              )}
            />
          ) : (
            <div className="text-6xl md:text-8xl font-bold text-primary/20">
              {project.title.charAt(0)}
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs md:text-sm bg-muted rounded-full text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

