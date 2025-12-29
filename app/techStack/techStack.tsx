"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { forwardRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
// All your categories fully integrated
const techFolders = [
  {
    title: "LANGUAGES",
    techs: [
      { id: "js", icon: "skill-icons:javascript", title: "JavaScript" },
      { id: "ts", icon: "skill-icons:typescript", title: "TypeScript" },
      { id: "php", icon: "logos:php", title: "PHP" },
      { id: "cpp", icon: "skill-icons:cpp", title: "C++" },
      { id: "java", icon: "logos:java", title: "Java" },
      { id: "python", icon: "logos:python", title: "Python" },
      { id: "bash", icon: "logos:bash-icon", title: "Bash" },
    ]
  },
  {
    title: "FRONTEND",
    techs: [
      { id: "html", icon: "logos:html-5", title: "HTML5" },
      { id: "css", icon: "skill-icons:css", title: "CSS3" },
      { id: "tailwind", icon: "skill-icons:tailwindcss-dark", title: "Tailwind CSS" },
      { id: "js", icon: "skill-icons:javascript", title: "JavaScript" },
      { id: "ts", icon: "skill-icons:typescript", title: "TypeScript" },
      { id: "react", icon: "logos:react", title: "React" },
      { id: "next", icon: "logos:nextjs-icon", title: "Next.js" },
      { id: "jquery", icon: "skill-icons:jquery", title: "jQuery" },
      { id: "redux", icon: "logos:redux", title: "Redux" },
      { id: "pug", icon: "logos:pug", title: "Pug" },
      { id: "three", icon: "skill-icons:threejs-dark", title: "Three.js" },
      { id: "shadcn", icon: "simple-icons:shadcnui", title: "shadcn/ui" },
      { id: "mui", icon: "logos:material-ui", title: "Material UI" },
      { id: "zustand", icon: "devicon:zustand", title: "Zustand" },
      { id: "nextui", icon: "simple-icons:nextui", title: "Next UI" },
    ]
  },
  {
    title: "BACKEND",
    techs: [
      { id: "node", icon: "logos:nodejs-icon", title: "Node.js" },
      { id: "express", icon: "skill-icons:expressjs-dark", title: "Express.js" },
      { id: "rest", icon: "vscode-icons:file-type-rest", title: "REST API" },
      { id: "graphql", icon: "material-icon-theme:graphql", title: "GraphQL" },
      { id: "socket", icon: "logos:socket-io", title: "Socket.io" },
      { id: "jwt", icon: "logos:jwt-icon", title: "JWT" },
      { id: "pwa", icon: "logos:pwa", title: "PWA" },
    ]
  },
  {
    title: "DATABASES",
    techs: [
      { id: "mongo", icon: "logos:mongodb-icon", title: "MongoDB" },
      { id: "postgres", icon: "logos:postgresql", title: "PostgreSQL" },
      { id: "mysql", icon: "logos:mysql", title: "MySQL" },
      { id: "redis", icon: "devicon:redis", title: "Redis" },
    ]
  },
  {
    title: "ORMs / ODMs / Validation",
    techs: [
      { id: "mongoose", icon: "devicon:mongoose-wordmark", title: "Mongoose" },
      { id: "prisma", icon: "material-icon-theme:prisma", title: "Prisma" },
      { id: "zod", icon: "logos:zod", title: "Zod" },
    ]
  },
  {
    title: "DEVOPS & CLOUD",
    techs: [
      { id: "docker", icon: "material-icon-theme:docker", title: "Docker" },
      { id: "nginx", icon: "material-icon-theme:nginx", title: "Nginx" },
      { id: "githubactions", icon: "devicon:githubactions", title: "GitHub Actions" },
      { id: "vercel", icon: "skill-icons:vercel-dark", title: "Vercel" },
      { id: "aws", icon: "skill-icons:aws-dark", title: "AWS" },
      { id: "coolify", icon: "skill-icons:docker", title: "Coolify" }, // Placeholder (no official Iconify yet)
      { id: "ci", icon: "carbon:continuous-integration", title: "CI/CD" },
    ]
  },
  {
    title: "MONITORING & LOGGING",
    techs: [
      { id: "grafana", icon: "devicon:grafana", title: "Grafana" },
      { id: "prometheus", icon: "devicon:prometheus", title: "Prometheus" },
      { id: "loki", icon: "devicon:grafana", title: "Loki" }, // Placeholder (no official yet)
      { id: "sentry", icon: "material-icon-theme:sentry", title: "Sentry" },
      { id: "bugsink", icon: "simple-icons:bugsnag", title: "Bugsink" }, // Closest alternative
    ]
  },
  {
    title: "TOOLS & UTILITIES",
    techs: [
      { id: "git", icon: "skill-icons:git", title: "Git" },
      { id: "github", icon: "skill-icons:github-light", title: "GitHub" },
      { id: "vscode", icon: "material-icon-theme:vscode", title: "VS Code" },
      { id: "postman", icon: "devicon:postman", title: "Postman" },
      { id: "figma", icon: "logos:figma", title: "Figma" },
      { id: "firebase", icon: "vscode-icons:file-type-firebase", title: "Firebase" },
      { id: "auth0", icon: "simple-icons:auth0", title: "Auth0" },
      { id: "json", icon: "material-icon-theme:json", title: "JSON" },
    ]
  },
]

export default function TechStackFolders() {
  return (
    
    <main id="skills" className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-16 pb-10">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-center mb-20 tracking-tight"
        >
          My Tech Stack
        </motion.h1>
        
{/* <ParallaxHeroExample /> */}
        {/* Zigzag / Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-32 md:gap-y-40">
          {techFolders.map((folder, index) => (
            
            <motion.div
              key={folder.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              className={cn(
                "relative",
                // Odd indices (1st, 3rd, 5th, etc.) move down for zigzag effect
                index % 2 === 1 && "top-16 md:top-24"
              )}
            >
         
              <AnimatedFolder
                title={folder.title}
                projects={folder.techs.map(tech => ({
                  id: tech.id,
                  image: <Icon icon={tech.icon} className="w-full h-full" />,
                  title: tech.title,
                  fullIcon: tech.icon
                }))}
              />
             
            </motion.div>
          ))}
        </div>
      </div>
    </main>

  )
}

// AnimatedFolder & TechCard remain unchanged (perfect as they are)
interface Project {
  id: string
  image: React.ReactElement
  title: string
  fullIcon: string
}

export function AnimatedFolder({ title, projects, className }: { title: string; projects: Project[]; className?: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null)
  const [hiddenCardId, setHiddenCardId] = useState<string | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const folderRef = useRef<HTMLDivElement | null>(null)
  
  // Use hover state directly - folders open only on hover
  const isActive = isHovered

  const handleProjectClick = (project: Project, index: number) => {
    const cardEl = cardRefs.current[index] as HTMLDivElement | null
    if (cardEl) setSourceRect(cardEl.getBoundingClientRect())
    setSelectedIndex(index)
    setHiddenCardId(project.id)
  }

  const handleCloseLightbox = () => {
    setSelectedIndex(null)
    setSourceRect(null)
  }

  const handleCloseComplete = () => setHiddenCardId(null)

  const handleNavigate = (newIndex: number) => {
    setSelectedIndex(newIndex)
    setHiddenCardId(projects[newIndex]?.id || null)
  }

  return (
    <>
      <div
        ref={(el) => { folderRef.current = el }}
        className={cn(
          "relative flex flex-col items-center justify-center p-8 rounded-2xl cursor-pointer",
          " transition-all duration-500 ease-out",
          "hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 group",
          isActive && "shadow-2xl shadow-primary/20 border-primary/40",
          className
        )}
        style={{ minWidth: "300px", minHeight: "360px", perspective: "1000px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cn(
          "absolute inset-0 rounded-2xl transition-opacity duration-700",
          isActive ? "opacity-20" : "opacity-0"
        )}
          style={{ background: "radial-gradient(circle at 50% 70%, var(--primary) 0%, transparent 70%)" }}
        />

        <div 
          className="relative flex items-center justify-center mb-6" 
          style={{ height: "190px", width: "230px" }}
        >
          {/* Back layer */}
          <div className="absolute w-40 h-32 bg-gradient-to-b from-muted to-muted/80 rounded-3xl shadow-xl pointer-events-none"
            style={{ transform: isActive ? "rotateX(-18deg)" : "rotateX(0deg)", transition: "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)", zIndex: 10 }}
          />

          {/* Tab */}
          <div className="absolute w-16 h-6 bg-primary/20 rounded-3xl backdrop-blur-sm border-t border-primary/30 pointer-events-none"
            style={{ top: "22px", left: "56px", transform: isActive ? "rotateX(-30deg)" : "rotateX(0deg)", transition: "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)", zIndex: 11 }}
          />

          {/* Tech cards */}
          <div 
            className="absolute inset-0 flex items-center justify-center z-20" 
            style={{ pointerEvents: isActive ? "auto" : "none" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {projects.slice(0, 3).map((project, index) => (
            
              <TechCard
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el }}
                icon={project.image}
                title={project.title}
                delay={index * 100}
                isVisible={isActive}
                index={index}
                onClick={() => handleProjectClick(project, index)}
                isSelected={hiddenCardId === project.id}
              />
          
            ))}
          </div>

          {/* Front layer */}
          <div className="absolute w-40 h-32 bg-card border border-border rounded-3xl shadow-2xl pointer-events-none"
            style={{ top: "38px", transform: isActive ? "rotateX(28deg) translateY(14px)" : "rotateX(0deg)", transition: "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)", zIndex: 30 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-black/20 dark:from-white/10 dark:to-transparent pointer-events-none" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mt-4 tracking-wide">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{projects.length} technologies</p>
      </div>

      <TechLightbox
        projects={projects}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={handleCloseLightbox}
        sourceRect={sourceRect}
        onCloseComplete={handleCloseComplete}
        onNavigate={handleNavigate}
      />
    </>
  )
}

interface TechCardProps {
  icon: React.ReactElement
  title: string
  delay: number
  isVisible: boolean
  index: number
  onClick: () => void
  isSelected: boolean
}

const TechCard = forwardRef<HTMLDivElement, TechCardProps>(({ icon, title, delay, isVisible, index, onClick, isSelected }, ref) => {
  const offsets = [-70, 0, 70]
  const rotates = [-18, 0, 18]

  return (
    <div
      ref={ref}
      className={cn(
        "absolute w-28 h-36 rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card/90 backdrop-blur-sm cursor-pointer transition-all hover:ring-4 hover:ring-primary/40",
        isSelected && "opacity-0"
      )}
      style={{
        transform: isVisible
          ? `translateX(${offsets[index]}px) translateY(-110px) rotate(${rotates[index]}deg) scale(1)`
          : "translateX(0px) translateY(0) rotate(0deg) scale(0.6)",
        opacity: isVisible ? 1 : 0,
        transition: `all 700ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
        zIndex: 30 - index
      }}
      onClick={(e: React.MouseEvent) => { e.stopPropagation(); onClick() }}
    >
      <div className="w-full h-full flex items-center justify-center -mt-5 p-8 bg-gradient-to-br from-card to-card/50">
        {icon}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <p className="text-xs font-semibold text-white text-center  truncate">{title}</p>
        <p className="text-xs bg-muted p-1 border border-border rounded-full mt-2 font-semibold text-muted-foreground text-center truncate ">View all</p>
      </div>
    </div>
  )
})
TechCard.displayName = "TechCard"
interface TechLightboxProps {
  projects: Project[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  sourceRect: DOMRect | null
  onCloseComplete?: () => void
  onNavigate: (index: number) => void
}

export function TechLightbox({ projects, currentIndex, isOpen, onClose, sourceRect, onCloseComplete, onNavigate }: TechLightboxProps) {
  const [isClosing, setIsClosing] = useState(false)
  const shouldRender = isOpen || isClosing

  const currentProject = projects[currentIndex]

  const navigateNext = () => currentIndex < projects.length - 1 && onNavigate(currentIndex + 1)
  const navigatePrev = () => currentIndex > 0 && onNavigate(currentIndex - 1)

  const handleClose = () => {
    if (isClosing) return
    setIsClosing(true)
    onClose()
    setTimeout(() => { setIsClosing(false); onCloseComplete?.() }, 400)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowRight") navigateNext()
      if (e.key === "ArrowLeft") navigatePrev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, currentIndex])

  if (!shouldRender || !currentProject) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-8" onClick={handleClose}
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(16px)" }}
    >
      <div className="relative max-w-3xl w-full" onClick={(e: React.MouseEvent) => e.stopPropagation()}
        style={{ transform: isOpen ? "scale(1)" : "scale(0.5)", transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div className="bg-card/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
          <div className="p-16 flex flex-col items-center gap-10">
            <div className="w-64 h-64 flex items-center justify-center">
              <Icon icon={currentProject.fullIcon} className="w-56 h-56" />
            </div>
            <h3 className="text-4xl font-bold text-foreground">{currentProject.title}</h3>
          </div>

          {currentIndex > 0 && (
            <button onClick={navigatePrev} className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-muted/80 backdrop-blur flex items-center justify-center hover:bg-muted">
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          {currentIndex < projects.length - 1 && (
            <button onClick={navigateNext} className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-muted/80 backdrop-blur flex items-center justify-center hover:bg-muted">
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_project, i) => (
              <div key={i} className={cn("w-2 h-2 rounded-full transition-all", i === currentIndex ? "bg-primary w-10" : "bg-muted-foreground/40")} />
            ))}
          </div>
        </div>

        <button onClick={handleClose} className="absolute top-8 right-8 w-12 h-12 rounded-full bg-muted/80 backdrop-blur flex items-center justify-center hover:bg-muted">
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
