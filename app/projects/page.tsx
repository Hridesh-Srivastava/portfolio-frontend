"use client"

import { useState, useRef, useMemo, memo, useCallback, useEffect } from "react"
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter, Globe, Brain, Banknote, Users, Package, Award, Star, Zap, Sprout, Pen } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Alumni Data System",
    description:
      "Built a comprehensive alumni management system for HSST using Next.js, Tailwind CSS, and RESTful APIs. Created a responsive database solution to efficiently store, search, and manage alumni records.",
    image: "/sst-alumni.png?height=300&width=500",
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
    title: "Oddiant TechLabs",
    description:
      "A clean corporate website for Oddiant Techlabs that showcases their core offerings—IT consulting, HR consulting, recruitment & staffing, Assessment Portal and personality development—with clear CTAs, trust metrics, and lead-capture to drive enquiries.",
    image: "/oddiant-img.png?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Next.js","Shadcn ui", "RESTful APIs","Tailwind CSS"],
    category: "Full-Stack",
    liveUrl: "https://www.oddiant.com/",
    githubUrl: "https://github.com/Hridesh-Srivastava/oddiant-techLabs.git",
    featured: true,
    icon: Brain,
    color: "#00ccff",
  },
  {
    id: 3,
    title: "Blink Bank",
    description:
      "Developed a finance tracker using Next.js, Firebase, and Recharts providing real-time visualizations of spending patterns. Integrated Gemini API and Fetch AI for intelligent financial insights and natural language query capabilities.",
    image: "/blink-bank.png?height=300&width=500",
    technologies: ["React", "Next.js", "Firebase", "Recharts", "Gemini API","REST APIs", "Fetch AI"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "https://github.com/Hridesh-Srivastava/finance-track.git",
    featured: false,
    icon: Banknote,
    color: "#0099ff",
  },
  {
    id: 4,
    title: "SST TechQuiz Hub",
    description:
      "This project is a full-stack quiz platform for SST College, helping students practice and evaluate their knowledge in computer science. It provides an interactive, responsive interface with quizzes across multiple categories and ensures smooth performance with accurate scoring.",
    image: "/quiz.png?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "RESTful APIs","Tailwind CSS"],
    category: "Full-Stack",
    liveUrl: "https://frontend-quiz-tau.vercel.app/",
    githubUrl: "https://github.com/Hridesh-Srivastava/quiz-app-frontend.git",
    featured: true,
    icon: Globe,
    color: "#00e6ff",
  },
    {
    id: 5,
    title: "SmartAgro AI",
    description:
      "SmartAgro is an agriculture-based project leveraging AI to provide smart solutions for farmers. This project aims to enhance agricultural productivity through precision farming and sustainable practices",
    image: "/SmartAgro.png?height=300&width=500",
    technologies: [
  "HTML/CSS",
  "React",
  "Python",
  "Flask",
  "scikit-learn",
  "NumPy",
  "SciPy",
  "joblib",
  "Tailwind CSS",
  "Material UI",
  "Three.js",
  "RESTful APIs",
  "Vite",
  "Git"
],
  category: ["Full-Stack", "AI/ML"],
    liveUrl: "https://agro-smart-ai.vercel.app",
    githubUrl: "https://github.com/Hridesh-Srivastava/SmartAgro-AI.git",
    featured: false,
    icon: Sprout,
    color: "#00e6ff",
  },
    {
    id: 6,
    title: "blogWise",
    description:
      "blogWise is a full-featured blog platform built with modern web technologies, providing a dynamic and customizable environment for creating and managing blog posts. The application leverages EJS for templating, CSS for styling, and is powered by a robust backend using Node.js, Express, and MongoDB.",
    image: "/blogWise.png?height=300&width=500",
    technologies: ["EJS", "CSS","Node.js", "Express", "MongoDB"],
    category: "Full-Stack",
    liveUrl: "https://blog-website-nu-topaz.vercel.app/",
    githubUrl: "https://github.com/Hridesh-Srivastava/Blog-Website.git",
    featured: false,
    icon: Pen,
    color: "#0099ff",
  },
  {
    id: 7,
    title: "Geo Spot Finder",
    description:
      "Created a package to retrieve user geolocation (latitude/longitude) via browser, with a simple API for easy integration in location-based web apps.",
    image: "/geo-spot-finder.png?height=300&width=500",
    technologies: ["JavaScript", "Browser Geolocation API", "Node.js", "npm"],
    category: "Package",
    liveUrl: "https://www.npmjs.com/package/geo-spot-finder",
    githubUrl: "https://github.com/Hridesh-Srivastava/Find-Location",
    featured: false,
    icon: Package,
    color: "#00ffcc",
  },
  {
    id: 8,
    title: "Clipboard Transform",
    description:
      "Built a utility package to transform text into various formats (uppercase, lowercase, camel case) with clipboard integration for direct copying.",
    image: "/clipboard-transform.png?height=300&width=500",
    technologies: ["JavaScript", "Clipboard API", "Node.js", "npm"],
    category: "Package",
    liveUrl: "https://www.npmjs.com/package/clipboard-transform",
    githubUrl: "https://github.com/Hridesh-Srivastava/clipboard-text-transform",
    featured: false,
    icon: Package,
    color: "#00ccff",
  },
  {
    id: 9,
    title: "Virtual Plant Care Assistant",
    description:
      "Developed a Node.js package for plant care tracking with watering schedules, care tips, and both CLI and module interfaces for flexible integration.",
    image: "/virtual-plantcare-assistant.png?height=300&width=500",
    technologies: ["JavaScript", "Command-Line Interface (CLI)", "Node.js", "File System (JSON persistence)", "npm"],
    category: "Package",
    liveUrl: "https://www.npmjs.com/package/virtual-plant-care-assistant",
    githubUrl: "https://github.com/Hridesh-Srivastava/virtual-plant-care-assistant",
    featured: false,
    icon: Package,
    color: "#0099ff",
  },
  {
    id: 10,
    title: "Currency Conversion",
    description:
      "Developed an npm package for currency conversion using real-time exchange rates, with a simple API for accurate use in financial and e-commerce apps.",
    image: "/currency-conversion.png?height=300&width=500",
    technologies: ["JavaScript", "Node.js", "HTTP / API Integration", "npm"],
    category: "Package",
    liveUrl: "https://www.npmjs.com/package/currency-conversion-v1.1.2",
    githubUrl: "https://github.com/Hridesh-Srivastava/currency-conversion",
    featured: false,
    icon: Package,
    color: "#00e6ff",
  },
]

const categories = ["All", "Full-Stack", "AI/ML", "Package"]


const ProjectStar = memo(({ star }: { star: any }) => (
  <div
    className="absolute bg-white rounded-full pointer-events-none animate-pulse"
    style={{
      left: `${star.left}%`,
      top: `${star.top}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      animationDuration: `${star.duration}s`,
      animationDelay: `${star.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "opacity",
      opacity: star.opacity,
    }}
  />
))

ProjectStar.displayName = "ProjectStar"


const ProjectOrb = memo(({ orb }: { orb: any }) => (
  <div
    className="absolute rounded-full pointer-events-none opacity-42"
    style={{
      left: `${orb.left}%`,
      top: `${orb.top}%`,
      width: `${orb.size}px`,
      height: `${orb.size}px`,
      background: `radial-gradient(circle, ${orb.color}58 0%, ${orb.color}28 38%, transparent 78%)`,
      animation: `projectFloat ${orb.duration}s ease-in-out infinite`,
      animationDelay: `${orb.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
      filter: "blur(1px)",
    }}
  />
))

ProjectOrb.displayName = "ProjectOrb"


const DataParticle = memo(({ particle }: { particle: any }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      background: particle.color,
      boxShadow: `0 0 ${particle.size * 2.5}px ${particle.color}`,
      animation: `dataFlow ${particle.duration}s linear infinite`,
      animationDelay: `${particle.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
    }}
  />
))

DataParticle.displayName = "DataParticle"


const ProjectCodeParticle = memo(({ particle }: { particle: any }) => (
  <div
    className="absolute pointer-events-none"
    style={{
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      background: particle.color,
      borderRadius: particle.type === "square" ? "2px" : "50%",
      boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
      animation: `projectCodeFlow ${particle.duration}s linear infinite`,
      animationDelay: `${particle.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
    }}
  />
))

ProjectCodeParticle.displayName = "ProjectCodeParticle"


const ProjectGear = memo(({ gear }: { gear: any }) => (
  <div
    className="absolute pointer-events-none border-2 rounded-full"
    style={{
      left: `${gear.left}%`,
      top: `${gear.top}%`,
      width: `${gear.size}px`,
      height: `${gear.size}px`,
      borderColor: gear.color,
      animation: `projectGearRotate ${gear.duration}s linear infinite`,
      animationDelay: `${gear.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
      opacity: 0.6,
    }}
  >
    <div className="absolute inset-2 border rounded-full" style={{ borderColor: gear.color }} />
    <div
      className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 -translate-y-1/2"
      style={{ backgroundColor: gear.color }}
    />
  </div>
))

ProjectGear.displayName = "ProjectGear"


const UltraOptimizedProjectsBackground = memo(() => {
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  
  const stars = useMemo(
    () =>
      [...Array(160)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.9 + 0.3,
      })),
    [],
  )

 
  const orbs = useMemo(
    () =>
      [...Array(9)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 90 + 55,
        duration: Math.random() * 20 + 14,
        delay: Math.random() * 4,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff", "#00d9ff", "#00f0ff", "#00c7ff", "#00a3ff"][i],
      })),
    [],
  )

  
  const dataParticles = useMemo(
    () =>
      [...Array(12)].map((_, i) => ({
        id: i,
        size: Math.random() * 4.5 + 2,
        duration: Math.random() * 14 + 10,
        delay: Math.random() * 4,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff", "#00d9ff"][Math.floor(Math.random() * 6)],
      })),
    [],
  )

  
  const projectCodeParticles = useMemo(
    () =>
      [...Array(6)].map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 16 + 12,
        delay: Math.random() * 5,
        type: Math.random() > 0.5 ? "circle" : "square",
        color: ["#00ffcc", "#00ccff", "#0099ff"][Math.floor(Math.random() * 3)],
      })),
    [],
  )

 
  const projectGears = useMemo(
    () =>
      [...Array(5)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 40 + 20,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 3,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff"][i],
      })),
    [],
  )

  if (shouldReduceMotion || !mounted) {
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-10"></div>
      </div>
    )
  }

  return (
    <>
      <style jsx>{`
        @keyframes projectFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          25% { transform: translate3d(20px, -18px, 0) scale(1.12); }
          50% { transform: translate3d(-12px, 14px, 0) scale(0.88); }
          75% { transform: translate3d(15px, -8px, 0) scale(1.06); }
        }
        @keyframes slideRightProjects {
          0% { transform: translateX(-140px); opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes slideDownProjects {
          0% { transform: translateY(-140px); opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes dataFlow {
          0% { transform: translate3d(-60px, -60px, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate3d(100vw, 100vh, 0) rotate(360deg); opacity: 0; }
        }
        @keyframes projectCodeFlow {
          0% { transform: translate3d(-80px, -40px, 0) rotate(0deg); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translate3d(100vw, 60vh, 0) rotate(180deg); opacity: 0; }
        }
        @keyframes projectGearRotate {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          100% { transform: translate3d(0, 0, 0) rotate(360deg); }
        }
        @keyframes diagonalProjectFlow {
          0% { transform: translate(-90px, -90px) rotate(0deg); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translate(calc(100vw + 90px), calc(100vh + 90px)) rotate(270deg); opacity: 0; }
        }
        @keyframes zigzagProjectFlow {
          0% { transform: translate(-60px, 20vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          25% { transform: translate(25vw, 10vh) rotate(90deg); }
          50% { transform: translate(50vw, 30vh) rotate(180deg); }
          75% { transform: translate(75vw, 15vh) rotate(270deg); }
          90% { opacity: 1; }
          100% { transform: translate(calc(100vw + 60px), 25vh) rotate(360deg); opacity: 0; }
        }
        .flow-line-h-projects {
          animation: slideRightProjects 8.5s linear infinite;
        }
        .flow-line-v-projects {
          animation: slideDownProjects 10.5s linear infinite;
        }
        .flow-diagonal-projects {
          animation: diagonalProjectFlow 13s linear infinite;
        }
        .flow-zigzag-projects {
          animation: zigzagProjectFlow 16s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
     
        <div className="absolute inset-0" style={{ contain: "layout style paint" }}>
          {stars.map((star) => (
            <ProjectStar key={star.id} star={star} />
          ))}
        </div>

       
        <div className="absolute inset-0">
          {orbs.map((orb) => (
            <ProjectOrb key={orb.id} orb={orb} />
          ))}
        </div>

      
        <div className="absolute inset-0">
          {dataParticles.map((particle) => (
            <DataParticle key={particle.id} particle={particle} />
          ))}
        </div>

        
        <div className="absolute inset-0">
          {projectCodeParticles.map((particle) => (
            <ProjectCodeParticle key={particle.id} particle={particle} />
          ))}
        </div>

     
        <div className="absolute inset-0">
          {projectGears.map((gear) => (
            <ProjectGear key={gear.id} gear={gear} />
          ))}
        </div>

       
        <div className="absolute inset-0 opacity-55">
          
          <div
            className="absolute h-0.5 w-30 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-line-h-projects"
            style={{ top: "12%", animationDelay: "0s" }}
          />
          <div
            className="absolute h-0.5 w-34 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-line-h-projects"
            style={{ top: "18%", animationDelay: "1s" }}
          />
          <div
            className="absolute h-0.5 w-26 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-line-h-projects"
            style={{ top: "24%", animationDelay: "2s" }}
          />
          <div
            className="absolute h-0.5 w-38 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-line-h-projects"
            style={{ top: "30%", animationDelay: "3s" }}
          />
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#00b3ff] to-transparent flow-line-h-projects"
            style={{ top: "36%", animationDelay: "4s" }}
          />
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent flow-line-h-projects"
            style={{ top: "42%", animationDelay: "5s" }}
          />
          <div
            className="absolute h-0.5 w-36 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent flow-line-h-projects"
            style={{ top: "48%", animationDelay: "6s" }}
          />
          <div
            className="absolute h-0.5 w-30 bg-gradient-to-r from-transparent via-[#00c7ff] to-transparent flow-line-h-projects"
            style={{ top: "54%", animationDelay: "7s" }}
          />
          <div
            className="absolute h-0.5 w-34 bg-gradient-to-r from-transparent via-[#00a3ff] to-transparent flow-line-h-projects"
            style={{ top: "60%", animationDelay: "1.5s" }}
          />
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-line-h-projects"
            style={{ top: "66%", animationDelay: "2.5s" }}
          />
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-line-h-projects"
            style={{ top: "72%", animationDelay: "3.5s" }}
          />
          <div
            className="absolute h-0.5 w-36 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-line-h-projects"
            style={{ top: "78%", animationDelay: "4.5s" }}
          />
          <div
            className="absolute h-0.5 w-30 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-line-h-projects"
            style={{ top: "84%", animationDelay: "5.5s" }}
          />
          <div
            className="absolute h-0.5 w-34 bg-gradient-to-r from-transparent via-[#00b3ff] to-transparent flow-line-h-projects"
            style={{ top: "90%", animationDelay: "6.5s" }}
          />

        
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-line-v-projects"
            style={{ left: "8%", animationDelay: "0.5s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-line-v-projects"
            style={{ left: "14%", animationDelay: "1.5s" }}
          />
          <div
            className="absolute w-0.5 h-26 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-line-v-projects"
            style={{ left: "20%", animationDelay: "2.5s" }}
          />
          <div
            className="absolute w-0.5 h-38 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-line-v-projects"
            style={{ left: "26%", animationDelay: "3.5s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-line-v-projects"
            style={{ left: "32%", animationDelay: "4.5s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#00d9ff] to-transparent flow-line-v-projects"
            style={{ left: "38%", animationDelay: "5.5s" }}
          />
          <div
            className="absolute w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent flow-line-v-projects"
            style={{ left: "44%", animationDelay: "6.5s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00c7ff] to-transparent flow-line-v-projects"
            style={{ left: "50%", animationDelay: "7.5s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00a3ff] to-transparent flow-line-v-projects"
            style={{ left: "56%", animationDelay: "1s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-line-v-projects"
            style={{ left: "62%", animationDelay: "2s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-line-v-projects"
            style={{ left: "68%", animationDelay: "3s" }}
          />
          <div
            className="absolute w-0.5 h-36 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-line-v-projects"
            style={{ left: "74%", animationDelay: "4s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-line-v-projects"
            style={{ left: "80%", animationDelay: "5s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-line-v-projects"
            style={{ left: "86%", animationDelay: "6s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00d9ff] to-transparent flow-line-v-projects"
            style={{ left: "92%", animationDelay: "7s" }}
          />

          
          <div
            className="absolute w-0.5 h-26 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-diagonal-projects"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute w-0.5 h-22 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-diagonal-projects"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-diagonal-projects"
            style={{ animationDelay: "5s" }}
          />
          <div
            className="absolute w-0.5 h-24 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-diagonal-projects"
            style={{ animationDelay: "7s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-diagonal-projects"
            style={{ animationDelay: "9s" }}
          />

         
          <div
            className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-zigzag-projects"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-zigzag-projects"
            style={{ animationDelay: "6s" }}
          />
          <div
            className="absolute h-0.5 w-22 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-zigzag-projects"
            style={{ animationDelay: "10s" }}
          />
          <div
            className="absolute h-0.5 w-26 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-zigzag-projects"
            style={{ animationDelay: "14s" }}
          />
        </div>

     
        <div className="absolute inset-0 opacity-75">
          <div
            className="absolute w-2 h-2 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/68 animate-pulse"
            style={{ top: "12%", left: "8%" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/68 animate-pulse"
            style={{ top: "18%", left: "14%", animationDelay: "0.3s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/68 animate-pulse"
            style={{ top: "24%", left: "20%", animationDelay: "0.6s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00e6ff] rounded-full shadow-lg shadow-[#00e6ff]/68 animate-pulse"
            style={{ top: "30%", left: "26%", animationDelay: "0.9s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00b3ff] rounded-full shadow-lg shadow-[#00b3ff]/68 animate-pulse"
            style={{ top: "36%", left: "32%", animationDelay: "1.2s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00d9ff] rounded-full shadow-lg shadow-[#00d9ff]/68 animate-pulse"
            style={{ top: "42%", left: "38%", animationDelay: "1.5s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00f0ff] rounded-full shadow-lg shadow-[#00f0ff]/68 animate-pulse"
            style={{ top: "48%", left: "44%", animationDelay: "1.8s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00c7ff] rounded-full shadow-lg shadow-[#00c7ff]/68 animate-pulse"
            style={{ top: "54%", left: "50%", animationDelay: "2.1s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00a3ff] rounded-full shadow-lg shadow-[#00a3ff]/68 animate-pulse"
            style={{ top: "60%", left: "56%", animationDelay: "2.4s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/68 animate-pulse"
            style={{ top: "66%", left: "62%", animationDelay: "2.7s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/68 animate-pulse"
            style={{ top: "72%", left: "68%", animationDelay: "3s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/68 animate-pulse"
            style={{ top: "78%", left: "74%", animationDelay: "3.3s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00e6ff] rounded-full shadow-lg shadow-[#00e6ff]/68 animate-pulse"
            style={{ top: "84%", left: "80%", animationDelay: "3.6s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00b3ff] rounded-full shadow-lg shadow-[#00b3ff]/68 animate-pulse"
            style={{ top: "90%", left: "86%", animationDelay: "3.9s" }}
          />
        </div>

       
        <div className="absolute top-6 left-6 w-[430px] h-[430px] bg-[#00ffcc]/6 rounded-full blur-3xl pointer-events-none opacity-65" />
        <div className="absolute bottom-6 right-6 w-[410px] h-[410px] bg-[#00ccff]/6 rounded-full blur-3xl pointer-events-none opacity-65" />
        <div className="absolute top-1/3 right-1/4 w-[370px] h-[370px] bg-[#0099ff]/4 rounded-full blur-3xl pointer-events-none opacity-55" />
        <div className="absolute bottom-1/3 left-1/4 w-[420px] h-[420px] bg-[#00e6ff]/5 rounded-full blur-3xl pointer-events-none opacity-60" />
        <div className="absolute top-2/3 left-1/6 w-[390px] h-[390px] bg-[#00b3ff]/4 rounded-full blur-3xl pointer-events-none opacity-52" />
        <div className="absolute bottom-2/3 right-1/6 w-[440px] h-[440px] bg-[#00d9ff]/5 rounded-full blur-3xl pointer-events-none opacity-58" />

       
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-10"></div>
      </div>
    </>
  )
})

UltraOptimizedProjectsBackground.displayName = "UltraOptimizedProjectsBackground"


const ProjectCard = memo(({ project, index, isInView }: { project: any; index: number; isInView: boolean }) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{
      scale: 1.02,
      y: -2,
    }}
    className="group"
    style={{ willChange: "transform" }}
  >
    <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/3 via-transparent to-[#00ccff]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
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
            transition={{ duration: 0.2 }}
          >
            <project.icon className="h-4 w-4" style={{ color: project.color }} />
          </motion.div>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-[#111111]/80 backdrop-blur-sm border-[#333333] text-[#cccccc]">
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
          {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
            <motion.div
              key={techIndex}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.2, delay: index * 0.1 + techIndex * 0.02 }}
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
))

ProjectCard.displayName = "ProjectCard"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects
    return projects.filter((project) => {
      const cat = (project as any).category
      return Array.isArray(cat) ? cat.includes(selectedCategory) : cat === selectedCategory
    })
  }, [selectedCategory])

  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), [])
  const packageProjects = useMemo(() =>
    projects.filter((p) => {
      const cat = (p as any).category
      return Array.isArray(cat) ? cat.includes("Package") : cat === "Package"
    })
  , [])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <UltraOptimizedProjectsBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
   
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
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
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A showcase of my work spanning full-stack applications, AI solutions, and open-source packages that
              demonstrate my passion for creating innovative digital experiences.
            </motion.p>
          </motion.div>

   
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="h-8 w-8 text-[#00ffcc]" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                  }}
                  className="group"
                  style={{ willChange: "transform" }}
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/3 via-transparent to-[#00ccff]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
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
                          transition={{ duration: 0.2 }}
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
                        {project.technologies.map((tech: string, techIndex: number) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.2, delay: 0.6 + index * 0.1 + techIndex * 0.02 }}
                            whileHover={{ scale: 1.03 }}
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

          {/* Featured npm Packages Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-[#00e6ff]/20 border border-[#00e6ff]/30"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Package className="h-6 w-6 text-[#00e6ff]" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white">Featured npm Packages</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packageProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-[#00ccff]/20 border border-[#00ccff]/30"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Filter className="h-6 w-6 text-[#00ccff]" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white">All Projects</h2>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.2, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
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

     
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
            </motion.div>
          </AnimatePresence>

     
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{
              scale: 1.01,
            }}
            style={{ willChange: "transform" }}
          >
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/3 via-transparent to-[#00ccff]/3 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Award className="h-8 w-8 text-[#00ffcc]" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-white">Patent Achievement</h3>
                    <h4 className="text-lg font-semibold text-[#00ffcc] mb-3">Smart Bandage (App No. 202511011591)</h4>
                    <p className="text-[#cccccc] leading-relaxed">
                      I am proud to have patented the Smart Bandage with Integrated Biosensors and AI-powered Drug Delivery System, published by the Indian Patent Office. This innovation represents a significant leap in wound care management by integrating biosensors, artificial intelligence, and automated medication delivery into a single compact device.

The Smart Bandage offers:

Real-time Monitoring – Continuously tracks wound parameters such as temperature, pH, oxygen levels, and bacterial presence.

AI-Powered Analysis – Uses embedded AI to process biosensor data in real time, enabling accurate, data-driven treatment decisions.

Adaptive Drug Delivery – Automatically administers appropriate medication from built-in reservoirs, ensuring timely and precise treatment.

Protective Layer – Designed with a breathable, waterproof membrane to safeguard the wound while allowing optimal gas exchange.

Remote Healthcare Access – Paired with a mobile application that enables doctors and caregivers to monitor wounds remotely and intervene when necessary.

This project reflects my passion for applying technology to healthcare challenges, aiming to improve patient outcomes, reduce complications, and make advanced wound treatment more accessible.
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

    
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{
              scale: 1.01,
            }}
            style={{ willChange: "transform" }}
          >
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/3 via-transparent to-[#00ccff]/3 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <CardContent className="p-8 sm:p-12 relative z-10 text-center space-y-6">
                <motion.div
                  className="p-4 rounded-xl bg-[#00ffcc]/10 border border-[#00ffcc]/30 w-fit mx-auto"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
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

  
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.4 }}
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                  }}
                  className="group"
                  style={{ willChange: "transform" }}
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-300 text-center">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${stat.color}03 0%, transparent 50%, ${stat.color}03 100%)`,
                      }}
                    />

                    <CardContent className="p-6 relative z-10">
                      <motion.div
                        className="p-3 rounded-xl mx-auto w-fit mb-4 border"
                        style={{
                          backgroundColor: `${stat.color}20`,
                          borderColor: `${stat.color}30`,
                        }}
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
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
