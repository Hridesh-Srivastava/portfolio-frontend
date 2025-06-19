"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github, Users, Brain, Banknote, Zap } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

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

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] relative overflow-hidden"
    >
      {/* Flowing Lines Background for Projects */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
            }}
          />
        ))}

        {/* Projects Section Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <defs>
            <linearGradient id="projectFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#00ffcc">
                <animate
                  attributeName="stop-color"
                  values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="#00ccff">
                <animate
                  attributeName="stop-color"
                  values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-100 0;100 0;-100 0"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <linearGradient id="projectFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#0099ff">
                <animate
                  attributeName="stop-color"
                  values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="#00e6ff">
                <animate
                  attributeName="stop-color"
                  values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-100 0;100 0;-100 0"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <linearGradient id="projectFlow3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#00ccff">
                <animate
                  attributeName="stop-color"
                  values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="#00ffcc">
                <animate
                  attributeName="stop-color"
                  values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="0 -100;0 100;0 -100"
                dur="4s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <filter id="projectGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main Flowing Grid */}
          <motion.line
            x1="0"
            y1="100"
            x2="1920"
            y2="100"
            stroke="url(#projectFlow1)"
            strokeWidth="3"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="300"
            x2="1920"
            y2="300"
            stroke="url(#projectFlow2)"
            strokeWidth="2.8"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="500"
            x2="1920"
            y2="500"
            stroke="url(#projectFlow1)"
            strokeWidth="2.5"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3.5, delay: 1, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="700"
            x2="1920"
            y2="700"
            stroke="url(#projectFlow2)"
            strokeWidth="2.2"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 4, delay: 1.5, ease: "easeInOut" }}
          />

          {/* Vertical Flowing Lines */}
          <motion.line
            x1="250"
            y1="0"
            x2="250"
            y2="900"
            stroke="url(#projectFlow3)"
            strokeWidth="2.6"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2.5, delay: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="650"
            y1="0"
            x2="650"
            y2="900"
            stroke="url(#projectFlow3)"
            strokeWidth="2.4"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, delay: 2.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="1050"
            y1="0"
            x2="1050"
            y2="900"
            stroke="url(#projectFlow3)"
            strokeWidth="2.7"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3.5, delay: 3, ease: "easeInOut" }}
          />

          <motion.line
            x1="1450"
            y1="0"
            x2="1450"
            y2="900"
            stroke="url(#projectFlow3)"
            strokeWidth="2.3"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 4, delay: 3.5, ease: "easeInOut" }}
          />

          {/* Circuit Nodes with Enhanced Pulsing */}
          <motion.circle
            cx="250"
            cy="100"
            r="6"
            fill="#00ffcc"
            filter="url(#projectGlow)"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 4 }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="650"
            cy="300"
            r="5.5"
            fill="#00ccff"
            filter="url(#projectGlow)"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 4.2 }}
          >
            <animate
              attributeName="fill"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5.5;7.5;5.5" dur="3.5s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="1050"
            cy="500"
            r="6.5"
            fill="#0099ff"
            filter="url(#projectGlow)"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 4.4 }}
          >
            <animate
              attributeName="fill"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="3.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6.5;8.5;6.5" dur="4s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="1450"
            cy="700"
            r="5"
            fill="#00e6ff"
            filter="url(#projectGlow)"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 4.6 }}
          >
            <animate
              attributeName="fill"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5;7;5" dur="3.2s" repeatCount="indefinite" />
          </motion.circle>

          {/* Enhanced Flowing Data Particles */}
          <motion.circle
            r="5"
            fill="#00ffcc"
            filter="url(#projectGlow)"
            animate={{
              cx: [0, 250, 650, 1050, 1450, 1920],
              cy: [100, 100, 300, 500, 700, 700],
            }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            r="4.5"
            fill="#00ccff"
            filter="url(#projectGlow)"
            animate={{
              cx: [1920, 1450, 1050, 650, 250, 0],
              cy: [300, 300, 500, 300, 100, 100],
            }}
            transition={{
              duration: 11,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 2,
            }}
          >
            <animate
              attributeName="fill"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="4.5;6.5;4.5" dur="1.8s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            r="4"
            fill="#0099ff"
            filter="url(#projectGlow)"
            animate={{
              cx: [250, 250, 650, 650, 1050, 1050, 1450, 1450],
              cy: [0, 100, 100, 300, 300, 500, 500, 700],
            }}
            transition={{
              duration: 13,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 4,
            }}
          >
            <animate
              attributeName="fill"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="3.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          </motion.circle>

          {/* Circuit Patterns with Enhanced Flow */}
          <motion.rect
            x="230"
            y="80"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 5 }}
          >
            <animate
              attributeName="stroke"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="630"
            y="280"
            width="40"
            height="40"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 5.2 }}
          >
            <animate
              attributeName="stroke"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1030"
            y="480"
            width="40"
            height="40"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 5.4 }}
          >
            <animate
              attributeName="stroke"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1430"
            y="680"
            width="40"
            height="40"
            fill="none"
            stroke="#00e6ff"
            strokeWidth="2"
            filter="url(#projectGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 5.6 }}
          >
            <animate
              attributeName="stroke"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="4s"
              repeatCount="indefinite"
            />
          </motion.rect>
        </svg>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-8"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
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
              >
                Projects
              </motion.span>
            </h2>
            <p className="text-lg sm:text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work spanning full-stack applications, AI solutions, and innovative web
              experiences that push boundaries and deliver exceptional results.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 255, 204, 0.1)",
                }}
                className="group"
              >
                <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden transition-all duration-500 hover:border-[#00ffcc]/30 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <motion.div
                        className="p-2 rounded-xl bg-[#00ffcc]/20 backdrop-blur-sm border border-[#00ffcc]/30"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <project.icon className="h-5 w-5 text-[#00ffcc]" />
                      </motion.div>
                    </div>

                    {/* Action buttons overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-[#0a0a0a]/60 flex items-center justify-center space-x-4"
                    >
                      <Button
                        asChild
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0 text-white font-medium"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
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

                  <CardHeader className="pb-4">
                    <CardTitle className="group-hover:text-[#00ffcc] transition-colors text-xl font-bold text-white">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-[#999999] leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30 hover:border-[#00ffcc]/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          <span>Demo</span>
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
            ))}
          </div>

          {/* View all button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="group bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25"
            >
              <Link href="/projects">
                <span>View All Projects</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
