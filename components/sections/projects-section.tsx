"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github, Users, Brain, Banknote, Zap } from "lucide-react"
import Link from "next/link"
import { useRef, memo, useMemo } from "react"

const featuredProjects = [
  {
    title: "Alumni Data System",
    description:
      "Comprehensive alumni management system built with Next.js and RESTful APIs for efficient data management and networking.",
    image: "/alumni-data.png?height=200&width=300",
    technologies: ["Next.js", "MongoDB", "RESTful APIs"],
    icon: Users,
    liveUrl: "https://hsst-alumni-frontend.vercel.app/",
    githubUrl: "https://github.com/Hridesh-Srivastava/Alumni-data-frontend",
  },
  {
    title: "AI Quiz Application",
    description:
      "Intelligent quiz application with automatic submission and performance tracking using MERN stack and machine learning.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB", "AI"],
    icon: Brain,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blink Bank Pro",
    description:
      "Advanced finance tracker with real-time visualizations and AI-powered insights using Next.js and Firebase.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "Firebase", "AI", "Charts"],
    icon: Banknote,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smart Analytics Dashboard",
    description:
      "Real-time analytics platform with interactive charts, data visualization, and performance monitoring capabilities.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "D3.js", "Node.js", "WebSocket"],
    icon: Zap,
    liveUrl: "#",
    githubUrl: "#",
  },
]

// Ultra-optimized projects background with enhanced visuals but maximum performance
const UltraOptimizedProjectsBackground = memo(() => {
  const shouldReduceMotion = useReducedMotion()

  // Memoized stars generation for performance
  const stars = useMemo(
    () =>
      [...Array(40)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 1.8 + 0.5,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 3,
      })),
    [],
  )

  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-8"></div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0">
      {/* Optimized stars with CSS animations */}
      <div className="absolute inset-0" style={{ contain: "layout style paint" }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
              willChange: "opacity, transform",
            }}
          />
        ))}
      </div>

      {/* CSS-only animations for maximum performance */}
      <div className="absolute inset-0">
        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.2); }
          }
          @keyframes projectsShootingOrbit1 {
            0% { transform: translateX(-120px) translateY(0px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(200px) translateY(-60px); opacity: 0; }
          }
          @keyframes projectsShootingOrbit2 {
            0% { transform: translateX(-100px) translateY(30px); opacity: 0; }
            15% { opacity: 0.8; }
            85% { opacity: 0.8; }
            100% { transform: translateX(180px) translateY(-40px); opacity: 0; }
          }
          @keyframes projectsFlowH {
            0% { transform: translateX(-130px); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateX(130px); opacity: 0; }
          }
          @keyframes projectsFlowV {
            0% { transform: translateY(-130px); opacity: 0; }
            50% { opacity: 0.4; }
            100% { transform: translateY(130px); opacity: 0; }
          }
          .projects-shooting-orbit-1 {
            animation: projectsShootingOrbit1 6s ease-in-out infinite;
          }
          .projects-shooting-orbit-2 {
            animation: projectsShootingOrbit2 7s ease-in-out infinite;
          }
          .projects-flow-h {
            animation: projectsFlowH 5.5s ease-in-out infinite;
          }
          .projects-flow-v {
            animation: projectsFlowV 6.5s ease-in-out infinite;
          }
        `}</style>

        {/* Enhanced shooting orbits */}
        <div className="absolute top-8 left-0 w-4 h-4 bg-[#00ffcc] rounded-full projects-shooting-orbit-1 shadow-lg shadow-[#00ffcc]/60" />
        <div
          className="absolute top-16 left-0 w-3.5 h-3.5 bg-[#00ccff] rounded-full projects-shooting-orbit-2 shadow-lg shadow-[#00ccff]/60"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-12 left-0 w-3 h-3 bg-[#0099ff] rounded-full projects-shooting-orbit-1 shadow-lg shadow-[#0099ff]/60"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-0 w-3.5 h-3.5 bg-[#00e6ff] rounded-full projects-shooting-orbit-2 shadow-lg shadow-[#00e6ff]/60"
          style={{ animationDelay: "3s" }}
        />

        {/* Enhanced flowing lines */}
        <div className="absolute top-20 left-0 w-48 h-0.5 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent projects-flow-h" />
        <div
          className="absolute top-40 left-0 w-44 h-0.5 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent projects-flow-h"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-0 w-46 h-0.5 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent projects-flow-h"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 left-0 w-42 h-0.5 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent projects-flow-h"
          style={{ animationDelay: "3s" }}
        />

        {/* Enhanced vertical flowing lines */}
        <div className="absolute top-0 left-20 w-0.5 h-48 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent projects-flow-v" />
        <div
          className="absolute top-0 right-20 w-0.5 h-44 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent projects-flow-v"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-0 left-1/2 w-0.5 h-46 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent projects-flow-v"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-0 right-1/3 w-0.5 h-42 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent projects-flow-v"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Enhanced geometric elements with CSS animations */}
      <div className="absolute inset-0">
        <div
          className="absolute w-4 h-4 border border-[#00ffcc]/40 rotate-45"
          style={{
            top: "15%",
            left: "10%",
            animation: "twinkle 3s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-3 h-3 bg-[#00ccff]/50 rounded-full"
          style={{
            top: "65%",
            right: "15%",
            animation: "twinkle 4s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-5 h-0.5 bg-gradient-to-r from-[#00ffcc] to-transparent"
          style={{
            top: "45%",
            right: "25%",
            animation: "twinkle 2s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        />
        <div
          className="absolute w-2.5 h-2.5 border border-[#0099ff]/35 rounded-full"
          style={{
            bottom: "25%",
            left: "20%",
            animation: "twinkle 2.5s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute w-3.5 h-3.5 border border-[#00e6ff]/30"
          style={{
            top: "75%",
            left: "75%",
            animation: "twinkle 3.5s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-2 h-2 bg-[#00ffcc]/60 rounded-full"
          style={{
            bottom: "55%",
            right: "55%",
            animation: "twinkle 2.8s ease-in-out infinite",
            animationDelay: "2.5s",
          }}
        />
      </div>

      {/* Enhanced nebula effects with CSS animations */}
      <div className="absolute top-16 left-16 w-96 h-96 bg-[#00ffcc]/6 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-16 right-16 w-80 h-80 bg-[#00ccff]/6 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#0099ff]/4 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-8"></div>
    </div>
  )
})

UltraOptimizedProjectsBackground.displayName = "UltraOptimizedProjectsBackground"

// Memoized project card component with performance optimizations
const ProjectCard = memo(({ project, index, isInView }: { project: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    whileHover={{ scale: 1.02, y: -5 }}
    className="group h-full"
    style={{ willChange: "transform" }}
  >
    <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden transition-all duration-500 hover:border-[#00ffcc]/30 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />

        {/* Enhanced category badge */}
        <div className="absolute top-4 left-4">
          <motion.div
            className="p-2 rounded-xl bg-[#00ffcc]/20 backdrop-blur-sm border border-[#00ffcc]/30 relative overflow-hidden"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ willChange: "transform" }}
          >
            <project.icon className="h-5 w-5 text-[#00ffcc] relative z-10" />
            <div className="absolute inset-0 bg-[#00ffcc]/10 rounded-xl animate-pulse" />
          </motion.div>
        </div>

        {/* Enhanced action buttons overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-[#0a0a0a]/60 flex items-center justify-center space-x-4"
        >
          <Button
            asChild
            size="sm"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0 text-white font-medium relative overflow-hidden"
          >
            <Link href={project.liveUrl} target="_blank">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              <ExternalLink className="w-4 h-4 mr-2 relative z-10" />
              <span className="relative z-10">Demo</span>
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white font-medium"
          >
            <Link href={project.githubUrl} target="_blank">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Link>
          </Button>
        </motion.div>
      </div>

      <CardHeader className="pb-4 relative z-10">
        <CardTitle className="group-hover:text-[#00ffcc] transition-colors text-xl font-bold text-white">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 relative z-10">
        <p className="text-[#999999] leading-relaxed">{project.description}</p>

        {/* Enhanced Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, techIndex: number) => (
            <motion.div
              key={techIndex}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
              style={{ willChange: "transform" }}
            >
              <Badge
                variant="secondary"
                className="text-xs font-medium bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30 hover:border-[#00ffcc]/50 transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffcc]/10 to-transparent animate-pulse" />
                <span className="relative z-10">{tech}</span>
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Action buttons */}
        <div className="flex gap-3 pt-4">
          <Button
            asChild
            size="sm"
            className="flex-1 bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25 relative overflow-hidden"
          >
            <Link href={project.liveUrl} target="_blank">
              <motion.div
                animate={{
                  x: [-100, 100],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <ExternalLink className="h-4 w-4 mr-2 relative z-10" />
              <span className="relative z-10">Demo</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffcc] font-medium hover:shadow-lg hover:shadow-[#00ffcc]/20"
          >
            <Link href={project.githubUrl} target="_blank">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
))

ProjectCard.displayName = "ProjectCard"

export const ProjectsSection = memo(() => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Memoized animation variants for better performance
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8 } },
    }),
    [],
  )

  const headerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }),
    [],
  )

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] relative overflow-hidden"
    >
      <UltraOptimizedProjectsBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Enhanced Section header */}
          <motion.div variants={headerVariants} className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="text-white">Featured </span>
              <motion.span
                className="text-[#00ffcc]"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(0, 255, 204, 0.5)",
                    "0 0 20px rgba(0, 255, 204, 0.8)",
                    "0 0 10px rgba(0, 255, 204, 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{ willChange: "filter" }}
              >
                Projects
              </motion.span>
            </h2>
            <motion.p
              className="text-lg sm:text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A showcase of my recent work spanning full-stack applications, AI solutions, and innovative web
              experiences that push boundaries and deliver exceptional results.
            </motion.p>
          </motion.div>

          {/* Enhanced Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isInView={isInView} />
            ))}
          </div>

          {/* Enhanced View all button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="group bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25 relative overflow-hidden"
            >
              <Link href="/projects">
                <motion.div
                  animate={{
                    x: [-100, 100],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative z-10">View All Projects</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

ProjectsSection.displayName = "ProjectsSection"
