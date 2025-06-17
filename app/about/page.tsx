"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
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
import { useRef, useMemo, memo } from "react"

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

// Optimized Star Component with memoization
const StarComponent = memo(({ star }: { star: any }) => (
  <motion.div
    key={star.id}
    animate={{
      opacity: [0.1, 0.8, 0.1],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: star.duration,
      repeat: Number.POSITIVE_INFINITY,
      delay: star.delay,
      ease: "easeInOut",
    }}
    className="absolute bg-white rounded-full"
    style={{
      left: `${star.left}%`,
      top: `${star.top}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      willChange: "transform, opacity",
      transform: "translate3d(0, 0, 0)", // Hardware acceleration
    }}
  />
))

StarComponent.displayName = "StarComponent"

// Optimized Background Component with better performance
const EnhancedBackground = memo(() => {
  const shouldReduceMotion = useReducedMotion()

  // Memoized stars generation
  const stars = useMemo(
    () =>
      [...Array(400)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 3,
      })),
    [],
  )

  // Memoized animation variants
  const nebulaVariants = useMemo(
    () => ({
      animate: shouldReduceMotion
        ? {}
        : {
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03],
          },
    }),
    [shouldReduceMotion],
  )

  return (
    <div className="absolute inset-0" style={{ willChange: "transform" }}>
      {/* Enhanced Star field with performance optimization */}
      <div className="absolute inset-0" style={{ contain: "layout style paint" }}>
        {stars.map((star) => (
          <StarComponent key={star.id} star={star} />
        ))}
      </div>

      {/* About Page Flowing Lines System - Optimized */}
      <svg className="absolute inset-0 w-full h-full opacity-60" style={{ willChange: "transform" }}>
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
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
          style={{ willChange: "transform" }}
        />
      </svg>

      {/* Enhanced Nebula Effects with performance optimization */}
      <motion.div
        variants={nebulaVariants}
        animate="animate"
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-[#00ffcc]/10 rounded-full blur-3xl"
        style={{ willChange: "transform" }}
      />

      <motion.div
        variants={nebulaVariants}
        animate="animate"
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-[#00ccff]/10 rounded-full blur-3xl"
        style={{ willChange: "transform" }}
      />

      <motion.div
        variants={nebulaVariants}
        animate="animate"
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 10,
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0099ff]/8 rounded-full blur-3xl"
        style={{ willChange: "transform" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-10"></div>
    </div>
  )
})

EnhancedBackground.displayName = "EnhancedBackground"

// Memoized Education Card Component
const EducationCard = memo(({ edu, index, isInView }: { edu: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
    whileHover={{
      scale: 1.02,
      x: 5,
      boxShadow: "0 20px 40px rgba(0, 204, 255, 0.1)",
    }}
    className="group w-full"
    style={{ willChange: "transform" }}
  >
    <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ccff]/30 transition-all duration-500 w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff]/5 via-transparent to-[#0099ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-4 sm:p-6 relative z-10">
        <div className="flex items-start gap-3 sm:gap-4">
          <motion.div
            className="p-2 sm:p-3 rounded-full bg-[#00ccff]/20 group-hover:bg-[#00ccff]/30 transition-colors border border-[#00ccff]/30 flex-shrink-0"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            style={{ willChange: "transform" }}
          >
            <edu.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#00ccff]" />
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#00ccff] transition-colors break-words">
                  {edu.degree}
                </h3>
                <p className="text-sm sm:text-base text-[#cccccc] break-words">{edu.institution}</p>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <Badge
                  variant="secondary"
                  className="text-xs sm:text-sm bg-[#00ccff]/10 text-[#00ccff] border border-[#00ccff]/30 hover:border-[#00ccff]/50 transition-colors"
                >
                  {edu.cgpa}
                </Badge>
                <p className="text-xs sm:text-sm text-[#999999] mt-1">{edu.year}</p>
                <Badge
                  variant="outline"
                  className={`text-xs mt-1 ${
                    edu.status === "Current" ? "border-[#00ffcc] text-[#00ffcc]" : "border-[#666666] text-[#999999]"
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
))

EducationCard.displayName = "EducationCard"

// Memoized Skill Category Component
const SkillCategory = memo(({ category, index, isInView }: { category: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
    whileHover={{
      scale: 1.05,
      y: -5,
      boxShadow: `0 20px 40px ${category.color}20`,
    }}
    className="group w-full"
    style={{ willChange: "transform" }}
  >
    <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-500 w-full">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${category.color}05 0%, transparent 50%, ${category.color}05 100%)`,
        }}
      />

      <CardContent className="p-4 sm:p-6 relative z-10">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
          <motion.div
            className="p-2 rounded-xl border flex-shrink-0"
            style={{
              backgroundColor: `${category.color}20`,
              borderColor: `${category.color}30`,
            }}
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ willChange: "transform" }}
          >
            <category.icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: category.color }} />
          </motion.div>
          <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#00ffcc] transition-colors break-words">
            {category.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill: string, skillIndex: number) => (
            <motion.div
              key={skillIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + skillIndex * 0.05 }}
              whileHover={{ scale: 1.05 }}
              style={{ willChange: "transform" }}
            >
              <Badge
                variant="outline"
                className="text-xs font-medium border border-[#333333] text-[#cccccc] bg-[#1a1a1a] hover:border-[#00ffcc]/50 hover:text-[#00ffcc] transition-colors break-words"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
))

SkillCategory.displayName = "SkillCategory"

// Memoized Certification Card Component
const CertificationCard = memo(({ cert, index, isInView }: { cert: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
    whileHover={{
      scale: 1.02,
      y: -3,
      boxShadow: "0 15px 30px rgba(0, 230, 255, 0.1)",
    }}
    className="group w-full"
    style={{ willChange: "transform" }}
  >
    <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00e6ff]/30 transition-all duration-500 cursor-pointer w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00e6ff]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-4 sm:p-6 relative z-10">
        <div className="flex items-start gap-3 sm:gap-4">
          <motion.div
            className="p-2 sm:p-3 rounded-xl bg-[#00e6ff]/20 border border-[#00e6ff]/30 group-hover:bg-[#00e6ff]/30 transition-colors flex-shrink-0"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            style={{ willChange: "transform" }}
          >
            <cert.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#00e6ff]" />
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#00e6ff] transition-colors mb-2 break-words">
              {cert.title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
              <Badge
                variant="secondary"
                className="text-xs sm:text-sm bg-[#00e6ff]/10 text-[#00e6ff] border border-[#00e6ff]/30 w-fit"
              >
                {cert.provider}
              </Badge>
              <span className="text-xs sm:text-sm text-[#999999]">{cert.date}</span>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00e6ff] hover:shadow-lg hover:shadow-[#00e6ff]/20 transition-all duration-300"
            >
              <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                View Certificate
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
))

CertificationCard.displayName = "CertificationCard"

export default function AboutPage() {
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

  // Memoized stats data
  const statsData = useMemo(
    () => [
      { value: "4+", label: "Projects Completed", icon: Cpu, color: "#00ffcc" },
      { value: "2+", label: "Years Learning", icon: Star, color: "#00ccff" },
      { value: "8+", label: "Technologies", icon: Zap, color: "#0099ff" },
    ],
    [],
  )

  return (
    <div ref={ref} className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <EnhancedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20 relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 sm:space-y-16 lg:space-y-20"
        >
          {/* Enhanced Header */}
          <motion.div variants={headerVariants} className="text-center space-y-4 sm:space-y-6 px-4">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ lineHeight: "1.1", willChange: "transform" }}
            >
              <span className="text-white">About </span>
              <motion.span
                className="text-[#00ffcc] block sm:inline"
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
                Me
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#cccccc] max-w-4xl mx-auto leading-relaxed px-4 mt-6"
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
            className="w-full"
            style={{ willChange: "transform" }}
          >
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-500 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-6 sm:p-8 relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
                  <motion.div
                    className="p-2 sm:p-3 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30 flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{ willChange: "transform" }}
                  >
                    <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-[#00ffcc]" />
                  </motion.div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Summary</h2>
                </div>
                <p className="text-base sm:text-lg text-[#cccccc] leading-relaxed">
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
            className="w-full"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 flex-wrap">
              <motion.div
                className="p-2 sm:p-3 rounded-xl bg-[#00ccff]/20 border border-[#00ccff]/30 flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: "transform" }}
              >
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-[#00ccff]" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="grid gap-4 sm:gap-6">
              {education.map((edu, index) => (
                <EducationCard key={index} edu={edu} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          {/* Enhanced Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 flex-wrap">
              <motion.div
                className="p-2 sm:p-3 rounded-xl bg-[#0099ff]/20 border border-[#0099ff]/30 flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: "transform" }}
              >
                <Code className="h-6 w-6 sm:h-8 sm:w-8 text-[#0099ff]" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Skills & Technologies</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {skillCategories.map((category, index) => (
                <SkillCategory key={index} category={category} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          {/* Enhanced Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 flex-wrap">
              <motion.div
                className="p-2 sm:p-3 rounded-xl bg-[#00e6ff]/20 border border-[#00e6ff]/30 flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: "transform" }}
              >
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-[#00e6ff]" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          {/* Enhanced Position of Responsibility - FIXED RESPONSIVENESS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 255, 204, 0.1)",
            }}
            className="w-full"
            style={{ willChange: "transform" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 flex-wrap">
              <motion.div
                className="p-2 sm:p-3 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30 flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: "transform" }}
              >
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-[#00ffcc]" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">
                Position of Responsibility
              </h2>
            </div>
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-500 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00e6ff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <motion.div
                    className="p-3 sm:p-4 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30 flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{ willChange: "transform" }}
                  >
                    <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-[#00ffcc]" />
                  </motion.div>
                  <div className="flex-1 min-w-0 w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 hover:text-[#00ffcc] transition-colors break-words">
                      Web Development Facilitator
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 flex-wrap">
                      <Badge
                        variant="secondary"
                        className="text-xs sm:text-sm bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30 w-fit"
                      >
                        Creative Cell Bootcamp, SST
                      </Badge>
                      <Badge variant="outline" className="text-xs sm:text-sm border-[#666666] text-[#999999] w-fit">
                        6 Months
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base text-[#cccccc] leading-relaxed break-words">
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
            className="w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {statsData.map((stat, index) => (
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
                  className="group w-full"
                  style={{ willChange: "transform" }}
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-500 text-center w-full">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${stat.color}05 0%, transparent 50%, ${stat.color}05 100%)`,
                      }}
                    />

                    <CardContent className="p-4 sm:p-6 relative z-10">
                      <motion.div
                        className="p-2 sm:p-3 rounded-xl mx-auto w-fit mb-3 sm:mb-4 border"
                        style={{
                          backgroundColor: `${stat.color}20`,
                          borderColor: `${stat.color}30`,
                        }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        style={{ willChange: "transform" }}
                      >
                        <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: stat.color }} />
                      </motion.div>
                      <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-[#999999] font-medium break-words">{stat.label}</div>
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
