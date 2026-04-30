"use client"
import React, { useEffect } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home as HomeIcon, Mail, User, Code, Briefcase, GraduationCap, BookOpen, School, Award, Trophy, ShieldCheck, ArrowUpRight, Github, Download } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const CustomCursor = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{
        left: mouseX,
        top: mouseY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed size-8 rounded-full border border-primary/30 pointer-events-none z-[9999] hidden md:block"
    >
      <div className="absolute inset-0 size-1 bg-primary rounded-full m-auto animate-ping" />
    </motion.div>
  )
}
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { MinimalistHero } from "@/components/ui/minimalist-hero"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { SocialConnect } from "@/components/connect-with-us";

import AboutSection from "@/app/about/page"
import TechStackFolders from "@/app/techStack/techStack"
import { ProjectsShowcase } from "@/components/ui/projects-showcase"
import TrackingTimeline from "@/components/ui/tracking-timeline"
import { DottedSurface } from "@/components/dotted-surface"
import { TestimonialsSection } from "@/components/testimonials-with-marquee"
import FeatureSection from "@/components/stack-feature-section";
import { Globe } from "@/components/ui/globe"
import { cn } from "@/lib/utils"
import { Syne } from "next/font/google"
import { PremiumLoader } from "@/components/ui/loader"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
})

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-[500px] w-full rounded-[2.5rem] border border-border/50 bg-card/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Background Number */}
      <div className="absolute top-4 right-8 pointer-events-none select-none">
        <span className={cn(syne.className, "text-9xl font-black text-foreground/[0.03] italic tracking-tighter")}>
          {project.number}
        </span>
      </div>

      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full w-full flex flex-col p-8"
      >
        {/* Image Frame */}
        <div className="relative w-full h-[60%] rounded-[2rem] overflow-hidden border border-white/5 shadow-inner mb-6">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />

          <div className="absolute bottom-6 right-6 z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-2xl scale-90 hover:scale-100 transition-all"
            >
              <span className="text-sm">Visit Project</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-8 bg-primary/40" />
              <p className={cn(syne.className, "text-[10px] font-bold tracking-[0.3em] text-primary uppercase")}>
                {project.subtitle}
              </p>
            </div>
            <h3 className={cn(syne.className, "text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors")}>
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground/70 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-bold tracking-widest text-primary uppercase">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <Github className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Corner Glow */}
      <div className="absolute -top-24 -left-24 size-48 bg-primary/10 blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-colors" />
    </motion.div>
  )
}

export default function Home() {


  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <PremiumLoader />
      <CustomCursor />
      {/* NavBar – Top Center */}
      <NavBar
        items={[
          { name: "Home", url: "#home", icon: HomeIcon },
          { name: "About", url: "#about", icon: User },
          { name: "Skills", url: "#skills", icon: Code },
          { name: "Projects", url: "#projects", icon: Briefcase },
          { name: "Contact", url: "#contact", icon: Mail },
        ]}
        className="sm:top-6"
      />

      {/* Theme Toggle – Top Right */}
      <div className="fixed top-6 right-6 z-50 position-sticky">
        <AnimatedThemeToggler />
      </div>


      {/* // hero page  */}
      <section id="home">
        <MinimalistHero
          logoText="Abhay."
          mainText="Abhay Kaushal"
          readMoreLink="#about"
          imageSrc="/abhay.png"
          imageAlt="Minimal portrait photography"
          overlayText={{
            part1: "Full Stack Developer",
            part2: "",
          }}
          locationText="Scroll to Explore"
        />
      </section>

      {/* Animated row */}

      <section className="relative z-50 w-full border-y border-border/60 bg-background py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12">
          <InfiniteSlider
            className="rounded-xl bg-background"
            gap={28}
            duration={18}
            durationOnHover={40}
          >
            <div className="rounded-full border border-border bg-card px-6 py-4 text-sm font-medium whitespace-nowrap">
              Clean & modern UI
            </div>
            <div className="rounded-full border border-border bg-card px-6 py-4 text-sm font-medium whitespace-nowrap">
              Fast loading websites
            </div>
            <div className="rounded-full border border-border bg-card px-6 py-4 text-sm font-medium whitespace-nowrap">
              Mobile-first design
            </div>
            <div className="rounded-full border border-border bg-card px-6 py-4 text-sm font-medium whitespace-nowrap">
              SEO-friendly structure
            </div>
            <div className="rounded-full border border-border bg-card px-6 py-4 text-sm font-medium whitespace-nowrap">
              Maintainable codebase
            </div>

          </InfiniteSlider>
        </div>
      </section>

      {/* About page */}

      <AboutSection />

      {/* Tech Stack */}
      <TechStackFolders />

      {/* My Projects Grid */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h4 className={cn(syne.className, "text-xs font-bold tracking-[0.5em] text-primary/60 uppercase mb-3")}>
              Selected Work
            </h4>
            <h2 className={cn(syne.className, "text-4xl md:text-5xl font-bold tracking-tight mb-4")}>
              Digital Craftsmanship
            </h2>
            <div className="h-px w-24 bg-primary/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Timely Group",
                subtitle: "Automotive Excellence",
                description: "A high-end digital experience for professional automotive spraying and luxury garage solutions.",
                tech: ["Next.js", "Tailwind", "Framer"],
                link: "https://timelygroup.vercel.app/",
                github: "https://github.com/Abhaykauahal21/timely-group",
                image: "/timely.png",
                number: "01"
              },
              {
                title: "QR Restaurant System",
                subtitle: "Digital Dining",
                description: "Seamless MERN-based ordering system with real-time tracking and advanced admin analytics.",
                tech: ["React", "Node.js", "MongoDB"],
                link: "https://resturentfinalproject.onrender.com/",
                github: "https://github.com/username/project1",
                image: "/project1.png",
                number: "02"
              },
              {
                title: "Tod-AI Platform",
                subtitle: "Educational AI",
                description: "Interactive learning platform for toddlers using AI-driven visuals and phonetics.",
                tech: ["Next.js", "MongoDB", "Framer"],
                link: "https://tod-ai-teal.vercel.app/",
                github: "https://github.com/Gauravmrjatt/tod-ai",
                image: "/project2.png",
                number: "03"
              },
              {
                title: "LoanFlow",
                subtitle: "Fintech Management",
                description: "Secure loan management system with document processing and real-time status tracking.",
                tech: ["React", "Node.js", "JWT"],
                link: "https://loanapp-vdpl.onrender.com/login",
                github: "https://github.com/Abhaykauahal21/loanflowfinal",
                image: "/project3.png",
                number: "04"
              }
            ].map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Journey */}

      {/* Education Journey - Advanced Edition */}
      <section id="education" className="py-40 relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-20 -left-20 pointer-events-none select-none rotate-90 origin-top-left">
          <span className={cn(syne.className, "text-[12rem] font-black text-foreground/[0.02] tracking-tighter uppercase")}>
            Evolution
          </span>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center mb-24">
            <h4 className={cn(syne.className, "text-xs font-bold tracking-[0.5em] text-primary/60 uppercase mb-3")}>
              Academic Evolution
            </h4>
            <h2 className={cn(syne.className, "text-5xl md:text-7xl font-extrabold tracking-tighter mb-4")}>
              The Path
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>

          <div className="relative">
            {/* Central Drawing Line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
              />
            </div>

            <div className="space-y-24">
              {[
                {
                  title: "B.Tech Computer Science",
                  school: "University Institute of Technology",
                  date: "2023 – 2027",
                  description: "Focusing on Cloud Architecture, AI systems, and Full-Stack Scalability. Actively participating in research and hackathons.",
                  year: "2027",
                  icon: <GraduationCap className="size-6" />,
                  skills: ["Software Engineering", "AI/ML", "Cloud"]
                },
                {
                  title: "Higher Secondary Education",
                  school: "Science & Mathematics Stream",
                  date: "2019 – 2021",
                  description: "Achieved academic excellence in Physics, Chemistry, and Mathematics. Developed analytical problem-solving skills.",
                  year: "2021",
                  icon: <BookOpen className="size-6" />,
                  skills: ["Physics", "Mathematics", "Logic"]
                },
                {
                  title: "Secondary Schooling",
                  school: "Foundation of Excellence",
                  date: "2018 – 2019",
                  description: "Laid the groundwork for technical studies with a focus on core sciences and mathematics.",
                  year: "2019",
                  icon: <School className="size-6" />,
                  skills: ["Science", "Math", "Foundations"]
                }
              ].map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  {/* Floating Year - Desktop Only */}
                  <div className={cn(syne.className, "hidden md:block absolute top-0 text-[6rem] font-black text-foreground/[0.04] italic tracking-tighter md:group-odd:-right-20 md:group-even:-left-20 transition-all duration-700 group-hover:text-primary/10")}>
                    {item.year}
                  </div>

                  {/* Timeline Node */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-border bg-background shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-20 transition-all duration-500 group-hover:border-primary group-hover:scale-110 group-hover:shadow-primary/20">
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                    className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] p-8 rounded-[2.5rem] border border-border/50 bg-card/5 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 relative overflow-hidden group/card"
                  >
                    {/* Card Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase">
                          {item.date}
                        </span>
                      </div>

                      <h3 className={cn(syne.className, "text-2xl font-bold mb-2 group-hover/card:text-primary transition-colors")}>
                        {item.title}
                      </h3>
                      <p className="text-sm font-bold text-muted-foreground/60 mb-4 tracking-tight uppercase">
                        {item.school}
                      </p>

                      <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed italic mb-6">
                        &ldquo;{item.description}&rdquo;
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((s) => (
                          <span key={s} className="text-[10px] font-bold text-primary/40 group-hover/card:text-primary/80 transition-colors uppercase tracking-widest">
                            #{s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-screen bg-background overflow-hidden transform-gpu flex items-center justify-center">
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

        {/* Certificates & Achievements Overhaul */}
        <section id="certificates" className="py-32 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-20">
              <h4 className={cn(syne.className, "text-xs font-bold tracking-[0.5em] text-primary/60 uppercase mb-3")}>
                Recognition
              </h4>
              <h2 className={cn(syne.className, "text-4xl md:text-5xl font-bold tracking-tight mb-4")}>
                Certificates & Achievements
              </h2>
              <div className="h-px w-24 bg-primary/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  year: "2025",
                  title: "Cybersecurity Professional",
                  org: "Google Career Certificates",
                  icon: <ShieldCheck className="size-6" />,
                  color: "from-blue-500/20 to-transparent"
                },
                {
                  year: "2024",
                  title: "Software Engineering",
                  org: "NPTEL | IIT Kharagpur",
                  icon: <Award className="size-6" />,
                  color: "from-orange-500/20 to-transparent"
                },
                {
                  year: "2025",
                  title: "E-Business Specialist",
                  org: "NPTEL | IIT Kharagpur",
                  icon: <Award className="size-6" />,
                  color: "from-purple-500/20 to-transparent"
                },
                {
                  year: "2025",
                  title: "MIS Professional",
                  org: "NPTEL | IIT Kharagpur",
                  icon: <Award className="size-6" />,
                  color: "from-emerald-500/20 to-transparent"
                },
                {
                  year: "2025",
                  title: "Hackathon Top 7",
                  org: "CodeForge | Microsoft Gurugram",
                  icon: <Trophy className="size-6" />,
                  color: "from-yellow-500/20 to-transparent"
                },
                {
                  year: "2025",
                  title: "Tod-AI Project Lead",
                  org: "Innovation Award",
                  icon: <Trophy className="size-6" />,
                  color: "from-primary/20 to-transparent"
                }
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative p-8 rounded-[2rem] border border-border/50 bg-card/10 backdrop-blur-md overflow-hidden hover:border-primary/40 transition-all duration-500"
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700", cert.color)} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-background/50 border border-border group-hover:border-primary/30 group-hover:text-primary transition-all">
                        {cert.icon}
                      </div>
                      <span className={cn(syne.className, "text-xs font-bold text-muted-foreground/60")}>{cert.year}</span>
                    </div>

                    <h3 className={cn(syne.className, "text-xl font-bold mb-2 group-hover:text-primary transition-colors")}>
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 font-medium">{cert.org}</p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -bottom-2 -right-2 size-24 bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>



      {/* Enhanced Simple Resume Section */}
      <section id="resume" className="py-48 relative overflow-hidden">
        {/* Subtle Background Marquee */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none opacity-[0.02] select-none overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className={cn(syne.className, "text-[15vw] font-black uppercase tracking-tighter")}
          >
            Professional Archive • Technical Evolution • Academic Path • Professional Archive • Technical Evolution • Academic Path
          </motion.div>
        </div>

        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <div className="flex flex-col items-center">
            {/* Staggered Content */}
            <motion.h2
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
              className={cn(syne.className, "text-4xl md:text-7xl font-bold tracking-tighter mb-8")}
            >
              Curated <span className="text-primary italic">Professional</span> History
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-lg md:text-xl text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed mb-16"
            >
              A comprehensive look into my technical journey, academic milestones, and professional contributions in the digital space.
            </motion.p>

            {/* Magnetic Download Button Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                className="group relative flex items-center gap-6 px-14 py-7 rounded-full border border-primary/20 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-700 overflow-hidden shadow-2xl shadow-primary/5"
              >
                <span className="text-sm font-black tracking-[0.4em] uppercase relative z-10">Download CV</span>
                <Download className="size-5 relative z-10 transition-transform group-hover:translate-y-1" />

                {/* Dynamic Hover Fill */}
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              {/* Floating Indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2"
              >
                <span className="text-[10px] font-black tracking-[0.6em] text-primary/30 uppercase italic">
                  PDF // 2026
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section id="contact" className="w-full bg-background py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur-md sm:p-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-3 max-w-xl text-sm font-medium text-muted-foreground sm:text-base">
                Send a message and I’ll get back to you soon.
              </p>

              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="h-11 w-full rounded-xl border border-border/60 bg-background/50 px-4 text-sm text-foreground outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="h-11 w-full rounded-xl border border-border/60 bg-background/50 px-4 text-sm text-foreground outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                  >
                    Send message
                  </button>
                  <a
                    href="mailto:"
                    className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-border/60 bg-background/40 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted sm:w-auto"
                  >
                    Email me
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section> */}

      <SocialConnect />;


      {/* Footer */}








    </main>
  )
}
