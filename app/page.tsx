"use client"
import { ModeToggle } from "@/components/mode-toggle"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home as HomeIcon, Mail, User, Code, Briefcase, GraduationCap, BookOpen, School, Award, Trophy, ShieldCheck } from "lucide-react"
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

export default function Home() {

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
]

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
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
          imageSrc="/myphoto.png"
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

      {/* My Projects */}
      <h2 className="text-center text-4xl md:text-6xl font-bold mt-30 mb-10">My Projects</h2>
      <ProjectsShowcase
        projects={[
          {
            title: "QR-Based Restaurant Ordering System (MERN Stack)",
            description: "Developed a full-stack QR-based restaurant ordering application enabling customers to view menus, place orders and track orders status in real time  Includes an admin dashboard for order and menu management",
            technologies: ["React.js", "Node.js", " Express.js", "MongoDB", "RESTful APIs", "Tailwind CSS"],
            liveUrl: "https://resturentfinalproject.onrender.com/",
            githubUrl: "https://github.com/username/project1",
            image: "/project1.png",
            // imageFit: "contain",
            // imageContainerClassName: "bg-black/5 p-6",
          },
          
        ]}
      />
      
      <ProjectsShowcase
        projects={[
          
          {
            title: "Tod-AI– Interactive Alphabet Learning Platform",
            description: "Createdaninteractive educational platform to help toddlers learn alphabets using visuals and phonetic audio cues. Implemented responsive UI with animations to ensure smooth performance across devices",
            technologies: [" Next.js", "Node.js", "MongoDB","Shadcn UI", "Tailwind CSS"],
            liveUrl: "https://tod-ai-teal.vercel.app/",
            githubUrl: "https://github.com/Gauravmrjatt/tod-ai",
            image: "/project2.png",
            // imageFit: "contain",
            // imageContainerClassName: "bg-black/5 p-6",
          },
          
        ]}
      />

      <ProjectsShowcase
        projects={[
          
          {
            title: "LoanFlow– Modern Loan Management System",
            description: " Built a full-stack loan management system with separate user and admin portals. Implemented JWT-based authentication, document uploads, and real-time loan status tracking.",
            technologies: [
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "JWT Authentication",
                    "Tailwind CSS"
                  ],
            liveUrl: "https://loanapp-vdpl.onrender.com/login",
            image: "/project3.png",
            githubUrl: "https://github.com/Abhaykauahal21/loanflowfinal",
          },
          
        ]}
      />

      {/* Education Journey */}

     <section className="w-full min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-7xl px-6 md:px-10 lg:px-16">
      <h2 className="
        text-center 
        font-extrabold 
        mb-16
        text-4xl 
        sm:text-5xl 
        md:text-6xl 
        lg:text-7xl
      ">
        Education Journey
      </h2>

    <div className="w-full flex items-center justify-center">
  <div className="
    w-full
    max-w-6xl
    px-4
    sm:px-6
    md:px-10
    lg:px-16
  ">
    <TrackingTimeline
      items={[
        {
          id: 1,
          title: "10th Grade (Secondary School)",
          date: "March 2019",
          status: "completed",
          icon: <School className="h-5 w-5 text-foreground/80" />,
        },
        {
          id: 2,
          title: "12th Grade (Higher Secondary)",
          date: "March 2021",
          status: "completed",
          icon: <BookOpen className="h-5 w-5 text-foreground/80" />,
        },
        {
          id: 3,
          title: "B.Tech in Computer Science",
          date: "2023 – 2027 (Expected)",
          status: "in-progress",
          icon: <GraduationCap className="h-5 w-5 text-foreground/80" />,
        },
      ]}
    />
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

      {/* Certificates & Achievements */}

      <div className="w-full max-w-7xl px-6 md:px-10 lg:px-16 py-20">
        <h2 className="text-center font-extrabold mb-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Certificates & Achievements
        </h2>

        <div className="mx-auto w-full max-w-5xl space-y-6">
          {[
            {
              id: 1,
              year: "2025",
              title: "Google Cybersecurity Professional Certificate",
              org: "Google",
              icon: <ShieldCheck className="h-5 w-5 text-foreground/80" />,
            },
            {
              id: 2,
              year: "2024",
              title: "Software Engineering",
              org: "NPTEL (IIT Kharagpur)",
              icon: <Award className="h-5 w-5 text-foreground/80" />,
            },
            {
              id: 3,
              year: "2025",
              title: "E-Business",
              org: "NPTEL (IIT Kharagpur)",
              icon: <Award className="h-5 w-5 text-foreground/80" />,
            },
            {
              id: 4,
              year: "2025",
              title: "Management Information Systems (MIS)",
              org: "NPTEL (IIT Kharagpur)",
              icon: <Award className="h-5 w-5 text-foreground/80" />,
            },
            {
              id: 5,
              year: "2025",
              title: "CodeForge Hackathon 2025",
              org: "Participation Certificate (Microsoft Office, Gurugram)",
              icon: <Trophy className="h-5 w-5 text-foreground/80" />,
            },
            {
              id: 6,
              year: "2025",
              title: "Top 7 Rank in CodeForge Hackathon",
              org: "Project: Tod-AI",
              icon: <Trophy className="h-5 w-5 text-foreground/80" />,
            },
          ].map((item) => (
            <div
              key={item.id}
              className={cn(
                "group w-full rounded-2xl border border-border/60 bg-card/40 px-7 py-6 backdrop-blur-md",
                "shadow-[0_24px_60px_rgba(0,0,0,0.35)]",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.55)] hover:border-primary/40 hover:bg-card/55"
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 ring-1 ring-border/50",
                    "transition-colors duration-300",
                    "group-hover:bg-primary/15 group-hover:ring-primary/40"
                  )}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <span className="inline-flex w-fit rounded-full border border-border/60 bg-background/40 px-3 py-1 text-sm font-medium text-foreground/80 transition-colors duration-300 group-hover:border-primary/40 group-hover:text-foreground">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {item.org}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <TestimonialsSection
      title="Trusted by developers worldwide"
      description="Join thousands of developers who are already building the future with our AI platform"
      testimonials={testimonials}
    />


    {/* CTA section */}
    <FeatureSection
    />

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
