"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Award,
  Code,
  Database,
  Globe,
  Smartphone,
  Brain,
  Users,
  Target,
  Lightbulb,
  ExternalLink,
  Star,
  Zap,
  Cpu,
  Monitor,
} from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const skills = {
  languages: ["JavaScript ES6+", "HTML5", "CSS3", "TypeScript"],
  frameworks: ["React", "Next.js", "TailwindCSS", "Express.js", "EJS"],
  tools: ["Git", "GitHub", "VS Code", "Node.js", "MongoDB", "PostgreSQL", "Postman", "Rest APIs", "Vercel"],
  soft: ["Attention to Detail", "Teamwork", "Analytical Thinking", "Problem Solving", "Communication"],
}

const education = [
  {
    degree: "BCA",
    institution: "Swami Rama Himalayan University",
    cgpa: "8.89/10",
    year: "2023-26",
    icon: GraduationCap,
    status: "Current",
  },
  {
    degree: "Senior Secondary",
    institution: "OSN (ISC)",
    cgpa: "80%",
    year: "2023",
    icon: GraduationCap,
    status: "Completed",
  },
  {
    degree: "Secondary",
    institution: "OSN (ICSE)",
    cgpa: "90.2%",
    year: "2021",
    icon: GraduationCap,
    status: "Completed",
  },
]

const certifications = [
  {
    title: "The Complete 2023 Web development bootcamp",
    provider: "Udemy",
    date: "August 2023",
    url: "https://www.udemy.com/certificate/UC-example1",
    icon: Globe,
  },
  {
    title: "Node Basic",
    provider: "HackerRank",
    date: "May 2024",
    url: "https://www.hackerrank.com/certificates/example2",
    icon: Database,
  },
  {
    title: "JavaScript Intermediate",
    provider: "HackerRank",
    date: "May 2024",
    url: "https://www.hackerrank.com/certificates/example3",
    icon: Code,
  },
  {
    title: "JavaScript Basic",
    provider: "HackerRank",
    date: "May 2024",
    url: "https://www.hackerrank.com/certificates/example4",
    icon: Code,
  },
  {
    title: "CSS Basic",
    provider: "HackerRank",
    date: "June 2024",
    url: "https://www.hackerrank.com/certificates/example5",
    icon: Monitor,
  },
  {
    title: "The Complete JavaScript Course 2024",
    provider: "Udemy",
    date: "September 2024",
    url: "https://www.udemy.com/certificate/UC-example6",
    icon: Code,
  },
  {
    title: "Node.js Intermediate",
    provider: "Online Course",
    date: "March 2025",
    url: "https://example.com/certificate7",
    icon: Database,
  },
]

const skillCategories = [
  {
    title: "Languages",
    icon: Globe,
    skills: skills.languages,
    color: "#00ffcc",
  },
  {
    title: "Frameworks",
    icon: Smartphone,
    skills: skills.frameworks,
    color: "#00ccff",
  },
  {
    title: "Tools",
    icon: Database,
    skills: skills.tools,
    color: "#0099ff",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: skills.soft,
    color: "#00e6ff",
  },
]

export default function AboutPage() {
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

        {/* About Page Flowing Lines System */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <defs>
            {/* Enhanced Flowing Gradients */}
            <linearGradient id="aboutFlowMain1" x1="0%" y1="0%" x2="100%" y2="0%">
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

            <linearGradient id="aboutFlowMain2" x1="0%" y1="0%" x2="100%" y2="0%">
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

            <linearGradient id="aboutFlowVertical" x1="0%" y1="0%" x2="0%" y2="100%">
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

            <filter id="aboutGlow">
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
            y1="150"
            x2="1920"
            y2="150"
            stroke="url(#aboutFlowMain1)"
            strokeWidth="3"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="400"
            x2="1920"
            y2="400"
            stroke="url(#aboutFlowMain2)"
            strokeWidth="2.5"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="650"
            x2="1920"
            y2="650"
            stroke="url(#aboutFlowMain1)"
            strokeWidth="2.8"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="900"
            x2="1920"
            y2="900"
            stroke="url(#aboutFlowMain2)"
            strokeWidth="2.2"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.5, delay: 1.5, ease: "easeInOut" }}
          />

          {/* Vertical Flowing Lines */}
          <motion.line
            x1="200"
            y1="0"
            x2="200"
            y2="1200"
            stroke="url(#aboutFlowVertical)"
            strokeWidth="2.5"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="500"
            y1="0"
            x2="500"
            y2="1200"
            stroke="url(#aboutFlowVertical)"
            strokeWidth="2.8"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 2.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="1000"
            y1="0"
            x2="1000"
            y2="1200"
            stroke="url(#aboutFlowVertical)"
            strokeWidth="2.3"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 3, ease: "easeInOut" }}
          />

          <motion.line
            x1="1400"
            y1="0"
            x2="1400"
            y2="1200"
            stroke="url(#aboutFlowVertical)"
            strokeWidth="2.6"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.5, delay: 3.5, ease: "easeInOut" }}
          />

          {/* Enhanced Circuit Nodes */}
          <motion.circle
            cx="200"
            cy="150"
            r="6"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 4 }}
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
            cx="500"
            cy="400"
            r="7"
            fill="#00ccff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.2 }}
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
            cx="1000"
            cy="650"
            r="6.5"
            fill="#0099ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.4 }}
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
            cx="1400"
            cy="900"
            r="5.5"
            fill="#00e6ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.6 }}
          >
            <animate
              attributeName="fill"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.8s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5.5;7.5;5.5" dur="3.2s" repeatCount="indefinite" />
          </motion.circle>

          {/* Enhanced Flowing Data Particles */}
          <motion.circle
            r="4"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            animate={{
              cx: [0, 200, 500, 1000, 1400, 1920],
              cy: [150, 150, 400, 650, 900, 900],
            }}
            transition={{
              duration: 8,
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
              cx: [1920, 1400, 1000, 500, 200, 0],
              cy: [400, 400, 650, 400, 150, 150],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 2,
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
              cx: [200, 200, 500, 500, 1000, 1000, 1400, 1400],
              cy: [0, 150, 150, 400, 400, 650, 650, 900],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 4,
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

          {/* Circuit Patterns with Enhanced Flow */}
          <motion.rect
            x="180"
            y="130"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
          >
            <animate
              attributeName="stroke"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="3s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="480"
            y="380"
            width="40"
            height="40"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 5.2 }}
          >
            <animate
              attributeName="stroke"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="980"
            y="630"
            width="40"
            height="40"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 5.4 }}
          >
            <animate
              attributeName="stroke"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="4s"
              repeatCount="indefinite"
            />
          </motion.rect>

          {/* Additional Flowing Connection Lines */}
          <motion.line
            x1="220"
            y1="150"
            x2="480"
            y2="400"
            stroke="url(#aboutFlowMain1)"
            strokeWidth="1.5"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 6 }}
          />

          <motion.line
            x1="520"
            y1="400"
            x2="980"
            y2="650"
            stroke="url(#aboutFlowMain2)"
            strokeWidth="1.5"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 6.5 }}
          />

          <motion.line
            x1="1020"
            y1="650"
            x2="1380"
            y2="900"
            stroke="url(#aboutFlowMain1)"
            strokeWidth="1.5"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 7 }}
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
          {/* Enhanced Header */}
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
              <span className="text-white">About </span>
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
                Me
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-[#cccccc] max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate full-stack developer with hands-on experience in building dynamic applications using MERN,
              Next.js, and RESTful APIs. Transforming ideas into digital reality with cutting-edge technology.
            </motion.p>
          </motion.div>

          {/* Enhanced Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 255, 204, 0.1)",
            }}
          >
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-500">
              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-3 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Brain className="h-8 w-8 text-[#00ffcc]" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Summary</h2>
                </div>
                <p className="text-lg text-[#cccccc] leading-relaxed">
                  Full-stack web developer with hands-on experience in building dynamic applications using MERN,
                  Next.js, and RESTful APIs. Passionate about solving real-world problems through clean, scalable code
                  and continuous learning. Currently pursuing BCA with a strong focus on modern web technologies and
                  innovative solutions that push the boundaries of what's possible.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-[#00ccff]/20 border border-[#00ccff]/30"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <GraduationCap className="h-8 w-8 text-[#00ccff]" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    x: 5,
                    boxShadow: "0 20px 40px rgba(0, 204, 255, 0.1)",
                  }}
                  className="group"
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ccff]/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff]/5 via-transparent to-[#0099ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="p-3 rounded-full bg-[#00ccff]/20 group-hover:bg-[#00ccff]/30 transition-colors border border-[#00ccff]/30"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <edu.icon className="h-6 w-6 text-[#00ccff]" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                              <h3 className="text-xl font-semibold text-white group-hover:text-[#00ccff] transition-colors">
                                {edu.degree}
                              </h3>
                              <p className="text-[#cccccc]">{edu.institution}</p>
                            </div>
                            <div className="text-right">
                              <Badge
                                variant="secondary"
                                className="text-sm bg-[#00ccff]/10 text-[#00ccff] border border-[#00ccff]/30 hover:border-[#00ccff]/50 transition-colors"
                              >
                                {edu.cgpa}
                              </Badge>
                              <p className="text-sm text-[#999999] mt-1">{edu.year}</p>
                              <Badge
                                variant="outline"
                                className={`text-xs mt-1 ${
                                  edu.status === "Current"
                                    ? "border-[#00ffcc] text-[#00ffcc]"
                                    : "border-[#666666] text-[#999999]"
                                }`}
                              >
                                {edu.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-[#0099ff]/20 border border-[#0099ff]/30"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Code className="h-8 w-8 text-[#0099ff]" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Skills & Technologies</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: `0 20px 40px ${category.color}20`,
                  }}
                  className="group"
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-500">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}05 0%, transparent 50%, ${category.color}05 100%)`,
                      }}
                    />

                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="p-2 rounded-xl border"
                          style={{
                            backgroundColor: `${category.color}20`,
                            borderColor: `${category.color}30`,
                          }}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <category.icon className="h-6 w-6" style={{ color: category.color }} />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#00ffcc] transition-colors">
                          {category.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs font-medium border border-[#333333] text-[#cccccc] bg-[#1a1a1a] hover:border-[#00ffcc]/50 hover:text-[#00ffcc] transition-colors"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-[#00e6ff]/20 border border-[#00e6ff]/30"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="h-8 w-8 text-[#00e6ff]" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                    boxShadow: "0 15px 30px rgba(0, 230, 255, 0.1)",
                  }}
                  className="group"
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00e6ff]/30 transition-all duration-500 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00e6ff]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="p-3 rounded-xl bg-[#00e6ff]/20 border border-[#00e6ff]/30 group-hover:bg-[#00e6ff]/30 transition-colors"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <cert.icon className="h-6 w-6 text-[#00e6ff]" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-[#00e6ff] transition-colors mb-2">
                            {cert.title}
                          </h3>
                          <div className="flex items-center justify-between mb-3">
                            <Badge
                              variant="secondary"
                              className="text-sm bg-[#00e6ff]/10 text-[#00e6ff] border border-[#00e6ff]/30"
                            >
                              {cert.provider}
                            </Badge>
                            <span className="text-sm text-[#999999]">{cert.date}</span>
                          </div>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00e6ff] hover:shadow-lg hover:shadow-[#00e6ff]/20 transition-all duration-300"
                          >
                            <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Certificate
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Position of Responsibility */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 255, 204, 0.1)",
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Target className="h-8 w-8 text-[#00ffcc]" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Position of Responsibility</h2>
            </div>
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00e6ff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-6">
                  <motion.div
                    className="p-4 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Lightbulb className="h-8 w-8 text-[#00ffcc]" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2 hover:text-[#00ffcc] transition-colors">
                      Web Development Facilitator
                    </h3>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge
                        variant="secondary"
                        className="text-sm bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30"
                      >
                        Creative Cell Bootcamp, SST
                      </Badge>
                      <Badge variant="outline" className="text-sm border-[#666666] text-[#999999]">
                        6 Months
                      </Badge>
                    </div>
                    <p className="text-[#cccccc] leading-relaxed">
                      Served as Web Development Facilitator at Creative Cell Bootcamp, at SST, for a 6-month hands-on
                      training program. Mentored students in modern web technologies, guided project-based learning
                      initiatives, and helped bridge the gap between theoretical knowledge and practical implementation.
                      Successfully trained over 50+ students in full-stack development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "4+", label: "Projects Completed", icon: Cpu, color: "#00ffcc" },
                { value: "2+", label: "Years Learning", icon: Star, color: "#00ccff" },
                { value: "8+", label: "Technologies", icon: Zap, color: "#0099ff" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
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
