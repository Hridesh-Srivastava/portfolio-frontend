"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter, Globe, Brain, Banknote, Users, Package, Award, Star, Zap } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Alumni Data System",
    description:
      "Built a comprehensive alumni management system for HSST using Next.js, Tailwind CSS, and RESTful APIs. Created a responsive database solution to efficiently store, search, and manage alumni records.",
    image: "/alumni-data.png?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "RESTful APIs", "MongoDB", "Node.js"],
    category: "Full-Stack",
    liveUrl: "https://hsst-alumni-frontend.vercel.app/",
    githubUrl: "https://github.com/Hridesh-Srivastava/Alumni-data-frontend",
    featured: true,
    icon: Users,
    color: "#00ffcc",
  },
  {
    id: 2,
    title: "Quiz App",
    description:
      "Engineered a timed quiz application for my college HSST using MERN stack with automatic submission functionality. Implemented user authentication and database storage for tracking quiz responses and participant performance.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: Brain,
    color: "#00ccff",
  },
  {
    id: 3,
    title: "Blink Bank",
    description:
      "Developed a finance tracker using Next.js, Firebase, and Recharts providing real-time visualizations of spending patterns. Integrated Gemini API and Fetch AI for intelligent financial insights and natural language query capabilities.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Firebase", "Recharts", "Gemini API", "Fetch AI"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: Banknote,
    color: "#0099ff",
  },
  {
    id: 4,
    title: "AgroSmart AI",
    description:
      "Developed an AI-powered crop recommendation system using MERN stack, Three.js, Python, and Flask that predicts optimal crops based on environmental conditions and soil parameters.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["MERN", "Three.js", "Python", "Flask", "AI/ML"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: Globe,
    color: "#00e6ff",
  },
  {
    id: 5,
    title: "Geo Spot Finder",
    description:
      "Created a package to retrieve user geolocation (latitude/longitude) via browser, with a simple API for easy integration in location-based web apps.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "NPM", "Geolocation API"],
    category: "Package",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: Package,
    color: "#00ffcc",
  },
  {
    id: 6,
    title: "Clipboard Transform",
    description:
      "Built a utility package to transform text into various formats (uppercase, lowercase, camel case) with clipboard integration for direct copying.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "NPM", "Clipboard API"],
    category: "Package",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: Package,
    color: "#00ccff",
  },
  {
    id: 7,
    title: "Virtual Plant Care Assistant",
    description:
      "Developed a Node.js package for plant care tracking with watering schedules, care tips, and both CLI and module interfaces for flexible integration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "CLI", "NPM"],
    category: "Package",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: Package,
    color: "#0099ff",
  },
  {
    id: 8,
    title: "Currency Conversion",
    description:
      "Developed an npm package for currency conversion using real-time exchange rates, with a simple API for accurate use in financial and e-commerce apps.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "NPM", "Exchange Rate API"],
    category: "Package",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: Package,
    color: "#00e6ff",
  },
]

const categories = ["All", "Full-Stack", "Frontend", "AI/ML", "Package"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category))
    }
  }

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div ref={ref} className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Enhanced Flowing Lines Background */}
      <div className="absolute inset-0">
        {/* Enhanced Star field */}
        {[...Array(500)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.3, 1],
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
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
            }}
          />
        ))}

        {/* Projects Page Flowing Lines System */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <defs>
            {/* Enhanced Flowing Gradients */}
            <linearGradient id="projectsFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#00ffcc">
                <animate
                  attributeName="stop-color"
                  values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="#00ccff">
                <animate
                  attributeName="stop-color"
                  values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-100 0;100 0;-100 0"
                dur="3s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <linearGradient id="projectsFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#0099ff">
                <animate
                  attributeName="stop-color"
                  values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="#00e6ff">
                <animate
                  attributeName="stop-color"
                  values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-100 0;100 0;-100 0"
                dur="4s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <linearGradient id="projectsFlow3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#00ccff">
                <animate
                  attributeName="stop-color"
                  values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="#00ffcc">
                <animate
                  attributeName="stop-color"
                  values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="0 -100;0 100;0 -100"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <filter id="projectsGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="strongGlow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main Horizontal Flowing Lines */}
          <motion.line
            x1="0"
            y1="120"
            x2="1920"
            y2="120"
            stroke="url(#projectsFlow1)"
            strokeWidth="3"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="350"
            x2="1920"
            y2="350"
            stroke="url(#projectsFlow2)"
            strokeWidth="2.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="580"
            x2="1920"
            y2="580"
            stroke="url(#projectsFlow1)"
            strokeWidth="2.8"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="810"
            x2="1920"
            y2="810"
            stroke="url(#projectsFlow2)"
            strokeWidth="2.2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 1.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="1040"
            x2="1920"
            y2="1040"
            stroke="url(#projectsFlow1)"
            strokeWidth="2.6"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="1270"
            x2="1920"
            y2="1270"
            stroke="url(#projectsFlow2)"
            strokeWidth="2.4"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 4.5, delay: 2.5, ease: "easeInOut" }}
          />

          {/* Vertical Flowing Lines */}
          <motion.line
            x1="200"
            y1="0"
            x2="200"
            y2="1500"
            stroke="url(#projectsFlow3)"
            strokeWidth="2.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="480"
            y1="0"
            x2="480"
            y2="1500"
            stroke="url(#projectsFlow3)"
            strokeWidth="2.8"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2.5, delay: 2.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="760"
            y1="0"
            x2="760"
            y2="1500"
            stroke="url(#projectsFlow3)"
            strokeWidth="2.3"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3, delay: 3, ease: "easeInOut" }}
          />

          <motion.line
            x1="1040"
            y1="0"
            x2="1040"
            y2="1500"
            stroke="url(#projectsFlow3)"
            strokeWidth="2.6"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 3.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="1320"
            y1="0"
            x2="1320"
            y2="1500"
            stroke="url(#projectsFlow3)"
            strokeWidth="2.4"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 4, delay: 4, ease: "easeInOut" }}
          />

          <motion.line
            x1="1600"
            y1="0"
            x2="1600"
            y2="1500"
            stroke="url(#projectsFlow3)"
            strokeWidth="2.7"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 4.5, delay: 4.5, ease: "easeInOut" }}
          />

          {/* Enhanced Circuit Nodes */}
          <motion.circle
            cx="200"
            cy="120"
            r="6"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="480"
            cy="350"
            r="7"
            fill="#00ccff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <animate
              attributeName="fill"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="7;9;7" dur="3.5s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="760"
            cy="580"
            r="6.5"
            fill="#0099ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <animate
              attributeName="fill"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6.5;8.5;6.5" dur="4s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="1040"
            cy="810"
            r="5.5"
            fill="#00e6ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <animate
              attributeName="fill"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.8s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5.5;7.5;5.5" dur="3.2s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="1320"
            cy="1040"
            r="6.2"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.2s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6.2;8.2;6.2" dur="2.8s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="1600"
            cy="1270"
            r="6.8"
            fill="#00ccff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <animate
              attributeName="fill"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="2.3s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6.8;8.8;6.8" dur="3s" repeatCount="indefinite" />
          </motion.circle>

          {/* Additional Circuit Nodes */}
          <motion.circle
            cx="340"
            cy="235"
            r="5.8"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.2s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5.8;7.8;5.8" dur="2.8s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="620"
            cy="465"
            r="6.2"
            fill="#00ccff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            <animate
              attributeName="fill"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="2.3s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6.2;8.2;6.2" dur="3s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="900"
            cy="695"
            r="5.3"
            fill="#0099ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 2.6 }}
          >
            <animate
              attributeName="fill"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="2.7s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5.3;7.3;5.3" dur="3.3s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="1180"
            cy="925"
            r="6.8"
            fill="#00e6ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 2.8 }}
          >
            <animate
              attributeName="fill"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.6s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6.8;8.8;6.8" dur="3.1s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="1460"
            cy="1155"
            r="5.5"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5.5;7.5;5.5" dur="2.9s" repeatCount="indefinite" />
          </motion.circle>

          {/* Enhanced Flowing Data Particles */}
          <motion.circle
            r="4"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            animate={{
              cx: [0, 200, 480, 760, 1040, 1320, 1600, 1920],
              cy: [120, 120, 350, 580, 810, 1040, 1270, 1270],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            r="3.5"
            fill="#00ccff"
            filter="url(#strongGlow)"
            animate={{
              cx: [1920, 1600, 1320, 1040, 760, 480, 200, 0],
              cy: [350, 350, 580, 810, 580, 350, 120, 120],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 0.5,
            }}
          >
            <animate
              attributeName="fill"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="3.5;5.5;3.5" dur="1.2s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            r="5"
            fill="#0099ff"
            filter="url(#strongGlow)"
            animate={{
              cx: [200, 200, 340, 480, 480, 620, 760, 760, 900, 1040, 1040, 1180, 1320, 1320, 1460, 1600],
              cy: [0, 120, 235, 350, 350, 465, 580, 580, 695, 810, 810, 925, 1040, 1040, 1155, 1270],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 1,
            }}
          >
            <animate
              attributeName="fill"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
          </motion.circle>

          {/* Circuit Patterns with Flow */}
          <motion.rect
            x="180"
            y="100"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <animate
              attributeName="stroke"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="3s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="460"
            y="330"
            width="40"
            height="40"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <animate
              attributeName="stroke"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="740"
            y="560"
            width="40"
            height="40"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.9 }}
          >
            <animate
              attributeName="stroke"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="4s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1020"
            y="790"
            width="40"
            height="40"
            fill="none"
            stroke="#00e6ff"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.1 }}
          >
            <animate
              attributeName="stroke"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1300"
            y="1020"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.3 }}
          >
            <animate
              attributeName="stroke"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1580"
            y="1250"
            width="40"
            height="40"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <animate
              attributeName="stroke"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="2.3s"
              repeatCount="indefinite"
            />
          </motion.rect>

          {/* Additional Circuit Patterns */}
          <motion.rect
            x="320"
            y="215"
            width="35"
            height="35"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.7 }}
          >
            <animate
              attributeName="stroke"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="600"
            y="445"
            width="45"
            height="45"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.9 }}
          >
            <animate
              attributeName="stroke"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="2.3s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="880"
            y="675"
            width="38"
            height="38"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 3.1 }}
          >
            <animate
              attributeName="stroke"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="2.7s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1160"
            y="905"
            width="42"
            height="42"
            fill="none"
            stroke="#00e6ff"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 3.3 }}
          >
            <animate
              attributeName="stroke"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1440"
            y="1135"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 3.5 }}
          >
            <animate
              attributeName="stroke"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </motion.rect>

          {/* Additional Flowing Connection Lines */}
          <motion.line
            x1="220"
            y1="120"
            x2="460"
            y2="350"
            stroke="url(#projectsFlow1)"
            strokeWidth="1.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.7 }}
          />

          <motion.line
            x1="500"
            y1="350"
            x2="740"
            y2="580"
            stroke="url(#projectsFlow2)"
            strokeWidth="1.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.9 }}
          />

          <motion.line
            x1="780"
            y1="580"
            x2="1020"
            y2="810"
            stroke="url(#projectsFlow1)"
            strokeWidth="1.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 4.1 }}
          />

          <motion.line
            x1="1060"
            y1="810"
            x2="1300"
            y2="1040"
            stroke="url(#projectsFlow2)"
            strokeWidth="1.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 4.3 }}
          />

          <motion.line
            x1="1340"
            y1="1040"
            x2="1580"
            y2="1270"
            stroke="url(#projectsFlow1)"
            strokeWidth="1.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 4.5 }}
          />

          <motion.line
            x1="340"
            y1="235"
            x2="600"
            y2="465"
            stroke="url(#projectsFlow1)"
            strokeWidth="1.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 4.7 }}
          />

          <motion.line
            x1="640"
            y1="465"
            x2="880"
            y2="695"
            stroke="url(#projectsFlow2)"
            strokeWidth="1.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 4.9 }}
          />

          <motion.line
            x1="920"
            y1="695"
            x2="1160"
            y2="925"
            stroke="url(#projectsFlow1)"
            strokeWidth="1.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 5.1 }}
          />

          <motion.line
            x1="1200"
            y1="925"
            x2="1440"
            y2="1155"
            stroke="url(#projectsFlow2)"
            strokeWidth="1.5"
            filter="url(#projectsGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 5.3 }}
          />
        </svg>

        {/* Enhanced Nebula Effects */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-[#00ffcc]/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-[#00ccff]/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0099ff]/8 rounded-full blur-3xl"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-white">My </span>
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
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-[#cccccc] max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A showcase of my work spanning full-stack applications, AI solutions, and open-source packages that
              demonstrate my passion for creating innovative digital experiences.
            </motion.p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Star className="h-8 w-8 text-[#00ffcc]" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: `0 20px 40px ${project.color}20`,
                  }}
                  className="group"
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />

                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#00ffcc] text-[#0a0a0a] font-medium">Featured</Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <motion.div
                          className="p-2 rounded-xl border"
                          style={{
                            backgroundColor: `${project.color}20`,
                            borderColor: `${project.color}30`,
                          }}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <project.icon className="h-5 w-5" style={{ color: project.color }} />
                        </motion.div>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-xl text-white group-hover:text-[#00ffcc] transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className="border-[#333333] text-[#cccccc] bg-[#1a1a1a] hover:border-[#00ffcc]/50 transition-colors"
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 relative z-10">
                      <p className="text-[#999999] text-sm leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
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

                      <div className="flex gap-3 pt-2">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button
                            asChild
                            size="sm"
                            className="w-full bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25"
                          >
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffcc] hover:shadow-lg hover:shadow-[#00ffcc]/20"
                          >
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-[#00ccff]/20 border border-[#00ccff]/30"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Filter className="h-6 w-6 text-[#00ccff]" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white">All Projects</h2>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => handleCategoryChange(category)}
                    className={
                      selectedCategory === category
                        ? "bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25"
                        : "border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffcc] bg-[#111111] hover:shadow-lg hover:shadow-[#00ffcc]/20"
                    }
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                    boxShadow: `0 15px 30px ${project.color}15`,
                  }}
                  className="group"
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3">
                        <motion.div
                          className="p-2 rounded-xl border"
                          style={{
                            backgroundColor: `${project.color}20`,
                            borderColor: `${project.color}30`,
                          }}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <project.icon className="h-4 w-4" style={{ color: project.color }} />
                        </motion.div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant="outline"
                          className="bg-[#111111]/80 backdrop-blur-sm border-[#333333] text-[#cccccc]"
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-white group-hover:text-[#00ffcc] transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4 relative z-10">
                      <p className="text-[#999999] text-sm leading-relaxed line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs font-medium bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button
                            asChild
                            size="sm"
                            className="w-full text-xs bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25"
                          >
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Demo
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full text-xs border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffcc] hover:shadow-lg hover:shadow-[#00ffcc]/20"
                          >
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3 mr-1" />
                              Code
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Patent Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 255, 204, 0.1)",
            }}
          >
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="h-8 w-8 text-[#00ffcc]" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-white">Patent Achievement</h3>
                    <h4 className="text-lg font-semibold text-[#00ffcc] mb-3">Smart Bandage (App No. 202511011591)</h4>
                    <p className="text-[#cccccc] leading-relaxed">
                      Patented a "Smart Bandage" integrating biosensors, AI, and automated drug delivery for real-time
                      wound monitoring. Tracks key parameters (temperature, pH, oxygen, bacteria) and delivers
                      medication autonomously. Enables remote monitoring and timely interventions via a mobile app.
                    </p>
                    <a
  href="https://www.linkedin.com/posts/hridayesh-srivastava-9575901bb_smart-bandage-patent-activity-7302186969986482176-AfFi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADMqSlMBfQ0Njd3-07q7Vlv7XlAvxroEJ_g"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg bg-[#00ffcc]/10 border border-[#00ffcc]/30 text-[#00ffcc] font-semibold hover:bg-[#00ffcc]/20 transition"
>
  Check here
  <ExternalLink className="w-5 h-5" />
</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 255, 204, 0.1)",
            }}
          >
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 sm:p-12 relative z-10 text-center space-y-6">
                <motion.div
                  className="p-4 rounded-xl bg-[#00ffcc]/10 border border-[#00ffcc]/30 w-fit mx-auto"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="h-10 w-10 text-[#00ffcc]" />
                </motion.div>

                <h2 className="text-3xl font-bold text-white">Interested in Working Together?</h2>
                <p className="text-xl text-[#cccccc] max-w-3xl mx-auto">
                  Let's discuss your project requirements and create something amazing together. I'm always excited to
                  collaborate on innovative ideas and bring them to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25 group"
                    >
                      <Link href="/contact">
                        Start a Project
                        <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "4+", label: "Projects Built", icon: Package, color: "#00ffcc" },
                { value: "4", label: "Featured Works", icon: Star, color: "#00ccff" },
                { value: "1", label: "Patent Filed", icon: Award, color: "#0099ff" },
                { value: "8+", label: "Technologies", icon: Zap, color: "#00e6ff" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: `0 15px 30px ${stat.color}20`,
                  }}
                  className="group"
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-500 text-center">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${stat.color}05 0%, transparent 50%, ${stat.color}05 100%)`,
                      }}
                    />

                    <CardContent className="p-6 relative z-10">
                      <motion.div
                        className="p-3 rounded-xl mx-auto w-fit mb-4 border"
                        style={{
                          backgroundColor: `${stat.color}20`,
                          borderColor: `${stat.color}30`,
                        }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
                      </motion.div>
                      <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#999999] font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
