"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  Database,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
  Palette,
  Cpu,
  Layers,
  Workflow,
  Rocket,
  Brain,
} from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Complete web applications using MERN stack, Next.js, and modern technologies",
    features: [
      "React & Next.js Frontend",
      "Node.js & Express Backend",
      "MongoDB & PostgreSQL",
      "RESTful API Development",
      "Authentication & Authorization",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Express"],
    highlight: true,
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description: "Mobile-first, responsive designs that work perfectly on all devices",
    features: [
      "Mobile-First Approach",
      "Cross-Browser Compatibility",
      "Performance Optimization",
      "Modern UI/UX Design",
      "Accessibility Standards",
    ],
    technologies: ["HTML5", "CSS3", "TailwindCSS", "JavaScript"],
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Efficient database design and seamless API integrations",
    features: [
      "Database Schema Design",
      "Data Migration",
      "API Integration",
      "Performance Optimization",
      "Data Security",
    ],
    technologies: ["MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    icon: Cpu,
    title: "Technical Consultation",
    description: "Expert advice on technology stack and architecture decisions",
    features: [
      "Technology Stack Analysis",
      "Architecture Planning",
      "Performance Optimization",
      "Scalability Solutions",
      "Best Practices Implementation",
    ],
    technologies: ["System Design", "Security"],
  },
  {
    icon: Layers,
    title: "Project Collaboration",
    description: "Collaborative development for academic and open-source projects",
    features: ["Team Collaboration", "Version Control", "Code Reviews", "Documentation", "Agile Development"],
    technologies: ["Git", "GitHub"],
  },
]

const expertise = [
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "Quick development of functional prototypes to validate ideas and concepts",
  },
  {
    icon: Shield,
    title: "Best Practices",
    description: "Implementation of industry standards and best practices for robust applications",
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    description: "Always learning and implementing the latest technologies and frameworks",
  },
]

export default function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Enhanced Flowing Lines Background */}
      <div className="absolute inset-0">
        {/* Enhanced Star field */}
        {[...Array(400)].map((_, i) => (
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

        {/* Services Page Flowing Lines System */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <defs>
            {/* Flowing Gradients with Animation */}
            <linearGradient id="servicesFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
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

            <linearGradient id="servicesFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
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

            <linearGradient id="servicesFlow3" x1="0%" y1="0%" x2="0%" y2="100%">
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

            <filter id="servicesGlow">
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

          {/* Horizontal Flowing Lines */}
          <motion.line
            x1="0"
            y1="150"
            x2="1920"
            y2="150"
            stroke="url(#servicesFlow1)"
            strokeWidth="3"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="400"
            x2="1920"
            y2="400"
            stroke="url(#servicesFlow2)"
            strokeWidth="2.5"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="650"
            x2="1920"
            y2="650"
            stroke="url(#servicesFlow1)"
            strokeWidth="2.8"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="900"
            x2="1920"
            y2="900"
            stroke="url(#servicesFlow2)"
            strokeWidth="2.2"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 1.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="1150"
            x2="1920"
            y2="1150"
            stroke="url(#servicesFlow1)"
            strokeWidth="2.6"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
          />

          {/* Vertical Flowing Lines */}
          <motion.line
            x1="250"
            y1="0"
            x2="250"
            y2="1500"
            stroke="url(#servicesFlow3)"
            strokeWidth="2.5"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="600"
            y1="0"
            x2="600"
            y2="1500"
            stroke="url(#servicesFlow3)"
            strokeWidth="2.8"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2.5, delay: 2.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="950"
            y1="0"
            x2="950"
            y2="1500"
            stroke="url(#servicesFlow3)"
            strokeWidth="2.3"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3, delay: 3, ease: "easeInOut" }}
          />

          <motion.line
            x1="1300"
            y1="0"
            x2="1300"
            y2="1500"
            stroke="url(#servicesFlow3)"
            strokeWidth="2.6"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 3.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="1650"
            y1="0"
            x2="1650"
            y2="1500"
            stroke="url(#servicesFlow3)"
            strokeWidth="2.4"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 4, delay: 4, ease: "easeInOut" }}
          />

          {/* Circuit Nodes/Junctions with Pulsing */}
          <motion.circle
            cx="250"
            cy="150"
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
            cx="600"
            cy="400"
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
            cx="950"
            cy="650"
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
            cx="1300"
            cy="900"
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
            cx="1650"
            cy="1150"
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

          {/* Additional Circuit Nodes */}
          <motion.circle
            cx="425"
            cy="275"
            r="5.8"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 2 }}
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
            cx="775"
            cy="525"
            r="6.2"
            fill="#00ccff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 2.2 }}
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
            cx="1125"
            cy="775"
            r="5.3"
            fill="#0099ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 2.4 }}
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
            cx="1475"
            cy="1025"
            r="6.8"
            fill="#00e6ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 2.6 }}
          >
            <animate
              attributeName="fill"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.6s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6.8;8.8;6.8" dur="3.1s" repeatCount="indefinite" />
          </motion.circle>

          {/* Enhanced Flowing Data Particles */}
          <motion.circle
            r="4"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            animate={{
              cx: [0, 250, 600, 950, 1300, 1650, 1920],
              cy: [150, 150, 400, 650, 900, 1150, 1150],
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
              cx: [1920, 1650, 1300, 950, 600, 250, 0],
              cy: [400, 400, 650, 900, 650, 400, 400],
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
              cx: [250, 250, 425, 600, 600, 775, 950, 950, 1125, 1300, 1300, 1475, 1650],
              cy: [0, 150, 275, 400, 400, 525, 650, 650, 775, 900, 900, 1025, 1150],
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
            x="230"
            y="130"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#servicesGlow)"
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
            x="580"
            y="380"
            width="40"
            height="40"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#servicesGlow)"
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
            x="930"
            y="630"
            width="40"
            height="40"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#servicesGlow)"
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
            x="1280"
            y="880"
            width="40"
            height="40"
            fill="none"
            stroke="#00e6ff"
            strokeWidth="2"
            filter="url(#servicesGlow)"
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
            x="1630"
            y="1130"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#servicesGlow)"
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

          {/* Additional Circuit Patterns */}
          <motion.rect
            x="405"
            y="255"
            width="35"
            height="35"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <animate
              attributeName="stroke"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="755"
            y="505"
            width="45"
            height="45"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.7 }}
          >
            <animate
              attributeName="stroke"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="2.3s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1105"
            y="755"
            width="38"
            height="38"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.9 }}
          >
            <animate
              attributeName="stroke"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="2.7s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1455"
            y="1005"
            width="42"
            height="42"
            fill="none"
            stroke="#00e6ff"
            strokeWidth="2"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 3.1 }}
          >
            <animate
              attributeName="stroke"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </motion.rect>

          {/* Additional Flowing Connection Lines */}
          <motion.line
            x1="270"
            y1="150"
            x2="580"
            y2="400"
            stroke="url(#servicesFlow1)"
            strokeWidth="1.5"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.3 }}
          />

          <motion.line
            x1="620"
            y1="400"
            x2="930"
            y2="650"
            stroke="url(#servicesFlow2)"
            strokeWidth="1.5"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.5 }}
          />

          <motion.line
            x1="970"
            y1="650"
            x2="1280"
            y2="900"
            stroke="url(#servicesFlow1)"
            strokeWidth="1.5"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.7 }}
          />

          <motion.line
            x1="1320"
            y1="900"
            x2="1630"
            y2="1150"
            stroke="url(#servicesFlow2)"
            strokeWidth="1.5"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.9 }}
          />

          <motion.line
            x1="425"
            y1="275"
            x2="755"
            y2="525"
            stroke="url(#servicesFlow1)"
            strokeWidth="1.5"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 4.1 }}
          />

          <motion.line
            x1="795"
            y1="525"
            x2="1105"
            y2="775"
            stroke="url(#servicesFlow2)"
            strokeWidth="1.5"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 4.3 }}
          />

          <motion.line
            x1="1145"
            y1="775"
            x2="1455"
            y2="1025"
            stroke="url(#servicesFlow1)"
            strokeWidth="1.5"
            filter="url(#servicesGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 4.5 }}
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
                Services
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-[#cccccc] max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive web development solutions to bring your ideas to life with modern technologies and best
              practices. I specialize in creating dynamic, responsive, and user-friendly applications.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 255, 204, 0.1)",
                }}
                className="group"
              >
                <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-500">
                  {service.highlight && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="p-3 rounded-xl bg-[#00ffcc]/10 border border-[#00ffcc]/30 group-hover:bg-[#00ffcc]/20 transition-colors"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon className="h-8 w-8 text-[#00ffcc]" />
                      </motion.div>
                      <CardTitle className="text-2xl text-white group-hover:text-[#00ffcc] transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-[#cccccc]">{service.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-white">
                        <CheckCircle className="h-4 w-4 text-[#00ffcc]" />
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                            className="flex items-center gap-2 text-sm text-[#999999]"
                          >
                            <CheckCircle className="h-3 w-3 text-[#00ffcc] flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-white">
                        <Code className="h-4 w-4 text-[#00ffcc]" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs font-medium border border-[#333333] text-[#cccccc] bg-[#1a1a1a] hover:border-[#00ffcc]/50 hover:text-[#00ffcc] transition-colors"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* My Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center space-y-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">My Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0, 255, 204, 0.1)",
                  }}
                  className="group"
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-6 relative z-10 space-y-4">
                      <motion.div
                        className="p-4 rounded-xl bg-[#00ffcc]/10 border border-[#00ffcc]/30 w-fit mx-auto"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="h-8 w-8 text-[#00ffcc]" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#00ffcc] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#999999]">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Collaboration Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
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
                  <Workflow className="h-10 w-10 text-[#00ffcc]" />
                </motion.div>

                <h2 className="text-3xl font-bold text-white">Let's Collaborate</h2>
                <p className="text-xl text-[#cccccc] max-w-3xl mx-auto">
                  I'm passionate about bringing ideas to life through code. Whether you need a full-stack application, a
                  responsive website, or technical consultation, I'm here to help turn your vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25 group"
                    >
                      <Link href="/contact">
                        Start a Conversation
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffcc] bg-[#111111] hover:shadow-lg hover:shadow-[#00ffcc]/20"
                    >
                      <Link href="/projects">View My Projects</Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning Journey */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">My Learning Journey</h2>
            <p className="text-lg text-[#cccccc] max-w-3xl mx-auto">
              As a student and developer, I'm constantly expanding my skills and knowledge. Here are some technologies
              I'm currently exploring:
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {[
                "HTML5",
                "CSS",
                "Tailwind CSS",
                "JavaScript",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Rest APIs",
                "Postman",
                "PostgreSQL",
                "Git",
                "GitHub",
                "EJS",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge className="px-4 py-2 text-sm bg-[#111111] border border-[#333333] text-[#cccccc] hover:border-[#00ffcc]/50 hover:text-[#00ffcc] transition-colors">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
