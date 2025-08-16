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
  Laptop,
  Terminal,
  Flag,
  Briefcase
} from "lucide-react"
import Link from "next/link"
import { useRef, useMemo, memo, useEffect, useState } from "react"

const skills = {
  languages: ["JavaScript ES6+", "HTML5", "CSS3", "TypeScript"],
  frameworks: ["React", "Next.js", "TailwindCSS", "Express", "EJS"],
  tools: ["Git", "GitHub", "VS Code", "Node.js", "MongoDB", "PostgreSQL", "Postman", "Rest APIs", "Vercel"],
  soft: ["Attention to Detail", "Teamwork", "Analytical Thinking", "Problem Solving", "Communication"],
}

const education = [
  {
    degree: "BCA",
    institution: "Swami Rama Himalayan University",
    cgpa: "8.58/10",
    year: "2023-26",
    icon: GraduationCap,
    status: "Current",
  },
  {
    degree: "Senior Secondary",
    institution: "OSN (ISC)",
    cgpa: "78%",
    year: "2023",
    icon: GraduationCap,
    status: "Completed",
  },
  {
    degree: "Secondary",
    institution: "OSN (ICSE)",
    cgpa: "90%",
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
    url: "https://www.udemy.com/certificate/UC-b2db07eb-1eb5-4033-b010-1243f9a85363/",
    icon: Globe,
  },
  {
    title: "Node Basic",
    provider: "HackerRank",
    date: "May 2024",
    url: "https://www.hackerrank.com/certificates/8c16c6548984",
    icon: Database,
  },
  {
    title: "JavaScript Intermediate",
    provider: "HackerRank",
    date: "May 2024",
    url: "https://www.hackerrank.com/certificates/cf4549e60a98",
    icon: Code,
  },
  {
    title: "JavaScript Basic",
    provider: "HackerRank",
    date: "May 2024",
    url: "https://www.hackerrank.com/certificates/499cc2d242fa",
    icon: Code,
  },
  {
    title: "CSS Basic",
    provider: "HackerRank",
    date: "June 2024",
    url: "https://www.hackerrank.com/certificates/499cc2d242fa",
    icon: Monitor,
  },
  {
    title: "The Complete JavaScript Course 2024",
    provider: "Udemy",
    date: "September 2024",
    url: "https://www.udemy.com/certificate/UC-a958688c-91ee-4a74-a85b-cebd61d39686/",
    icon: Code,
  },
  {
    title: "Node.js Intermediate",
    provider: "HackerRank",
    date: "March 2025",
    url: "https://www.hackerrank.com/certificates/f0ddd5ec0aea",
    icon: Database,
  },
  {
    title: " Frontend Developer-React",
    provider: "HackerRank",
    date: "May 2025",
    url: "https://www.hackerrank.com/certificates/e9ef8b65c70c",
    icon: Globe,
  },
  {
    title: "CTF Technex'25",
    provider: "Technex, IIT (BHU) Varanasi",
    date: "April 2025",
    url: "https://www.linkedin.com/in/hridayesh-srivastava-9575901bb/overlay/1745605838242/single-media-viewer/?profileId=ACoAADMqSlMBfQ0Njd3-07q7Vlv7XlAvxroEJ_g",
    icon: Flag,
  },
  {
    title: "Hack it out Technex'25",
    provider: "Technex, IIT (BHU) Varanasi",
    date: "April 2025",
    url: "https://www.linkedin.com/in/hridayesh-srivastava-9575901bb/details/certifications/1745606047362/single-media-viewer/?profileId=ACoAADMqSlMBfQ0Njd3-07q7Vlv7XlAvxroEJ_g",
    icon: Terminal,
  },
  {
    title: "Frosthack Xpecto'25",
    provider: "Xpecto Tech, IIT Mandi",
    date: "April 2025",
    url: "https://www.linkedin.com/in/hridayesh-srivastava-9575901bb/details/certifications/1745606294144/single-media-viewer/?profileId=ACoAADMqSlMBfQ0Njd3-07q7Vlv7XlAvxroEJ_g",
    icon: Laptop,
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


const AboutStar = memo(({ star }: { star: any }) => (
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

AboutStar.displayName = "AboutStar"


const AboutOrb = memo(({ orb }: { orb: any }) => (
  <div
    className="absolute rounded-full pointer-events-none opacity-43"
    style={{
      left: `${orb.left}%`,
      top: `${orb.top}%`,
      width: `${orb.size}px`,
      height: `${orb.size}px`,
      background: `radial-gradient(circle, ${orb.color}60 0%, ${orb.color}28 38%, transparent 78%)`,
      animation: `aboutFloat ${orb.duration}s ease-in-out infinite`,
      animationDelay: `${orb.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
      filter: "blur(1px)",
    }}
  />
))

AboutOrb.displayName = "AboutOrb"


const KnowledgeParticle = memo(({ particle }: { particle: any }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      background: particle.color,
      boxShadow: `0 0 ${particle.size * 2.8}px ${particle.color}`,
      animation: `knowledgeFlow ${particle.duration}s linear infinite`,
      animationDelay: `${particle.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
    }}
  />
))

KnowledgeParticle.displayName = "KnowledgeParticle"


const EducationParticle = memo(({ particle }: { particle: any }) => (
  <div
    className="absolute pointer-events-none"
    style={{
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      background: particle.color,
      borderRadius: particle.type === "square" ? "3px" : "50%",
      boxShadow: `0 0 ${particle.size * 2.2}px ${particle.color}`,
      animation: `educationFlow ${particle.duration}s linear infinite`,
      animationDelay: `${particle.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
    }}
  />
))

EducationParticle.displayName = "EducationParticle"


const EducationBook = memo(({ book }: { book: any }) => (
  <div
    className="absolute pointer-events-none border-2 rounded-sm"
    style={{
      left: `${book.left}%`,
      top: `${book.top}%`,
      width: `${book.size}px`,
      height: `${book.size * 0.7}px`,
      borderColor: book.color,
      animation: `educationBookFloat ${book.duration}s ease-in-out infinite`,
      animationDelay: `${book.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
      opacity: 0.7,
    }}
  >
    <div className="absolute inset-1 border rounded-sm" style={{ borderColor: book.color, opacity: 0.6 }} />
    <div
      className="absolute top-1/2 left-1/2 w-0.5 h-0.5 rounded-full transform -translate-x-1/2 -translate-y-1/2"
      style={{ backgroundColor: book.color }}
    />
  </div>
))

EducationBook.displayName = "EducationBook"


const LearningWave = memo(({ wave }: { wave: any }) => (
  <div
    className="absolute rounded-full pointer-events-none border-2"
    style={{
      left: `${wave.left}%`,
      top: `${wave.top}%`,
      width: `${wave.size}px`,
      height: `${wave.size}px`,
      borderColor: wave.color,
      animation: `learningWave ${wave.duration}s ease-out infinite`,
      animationDelay: `${wave.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",
    }}
  />
))

LearningWave.displayName = "LearningWave"


const UltraOptimizedAboutBackground = memo(() => {
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  const stars = useMemo(
    () =>
      [...Array(145)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.9 + 0.35,
      })),
    [],
  )

 
  const orbs = useMemo(
    () =>
      [...Array(8)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 88 + 58,
        duration: Math.random() * 21 + 15,
        delay: Math.random() * 4,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff", "#00d9ff", "#00f0ff", "#00c7ff"][i],
      })),
    [],
  )

 
  const knowledgeParticles = useMemo(
    () =>
      [...Array(10)].map((_, i) => ({
        id: i,
        size: Math.random() * 4.8 + 2,
        duration: Math.random() * 15 + 11,
        delay: Math.random() * 4,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff"][Math.floor(Math.random() * 5)],
      })),
    [],
  )


  const educationParticles = useMemo(
    () =>
      [...Array(6)].map((_, i) => ({
        id: i,
        size: Math.random() * 3.5 + 1.8,
        duration: Math.random() * 17 + 13,
        delay: Math.random() * 5,
        type: Math.random() > 0.6 ? "circle" : "square",
        color: ["#00ffcc", "#00ccff", "#0099ff"][Math.floor(Math.random() * 3)],
      })),
    [],
  )

 
  const educationBooks = useMemo(
    () =>
      [...Array(5)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 35 + 18,
        duration: Math.random() * 22 + 16,
        delay: Math.random() * 3,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff"][i],
      })),
    [],
  )

 
  const learningWaves = useMemo(
    () =>
      [...Array(6)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 70 + 35,
        duration: Math.random() * 7 + 5,
        delay: Math.random() * 3,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff", "#00d9ff"][i],
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
        @keyframes aboutFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          25% { transform: translate3d(22px, -18px, 0) scale(1.15); }
          50% { transform: translate3d(-14px, 16px, 0) scale(0.85); }
          75% { transform: translate3d(12px, -10px, 0) scale(1.08); }
        }
        @keyframes slideRightAbout {
          0% { transform: translateX(-135px); opacity: 0; }
          16% { opacity: 1; }
          84% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes slideDownAbout {
          0% { transform: translateY(-135px); opacity: 0; }
          16% { opacity: 1; }
          84% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes knowledgeFlow {
          0% { transform: translate3d(-65px, -65px, 0) rotate(0deg); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translate3d(100vw, 100vh, 0) rotate(360deg); opacity: 0; }
        }
        @keyframes educationFlow {
          0% { transform: translate3d(-75px, -45px, 0) rotate(0deg); opacity: 0; }
          14% { opacity: 1; }
          86% { opacity: 1; }
          100% { transform: translate3d(100vw, 65vh, 0) rotate(180deg); opacity: 0; }
        }
        @keyframes educationBookFloat {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          33% { transform: translate3d(18px, -12px, 0) rotate(5deg) scale(1.1); }
          66% { transform: translate3d(-10px, 14px, 0) rotate(-3deg) scale(0.9); }
        }
        @keyframes learningWave {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          50% { opacity: 0.7; }
          100% { transform: scale(2.5) rotate(180deg); opacity: 0; }
        }
        @keyframes diagonalAboutFlow {
          0% { transform: translate(-95px, -95px) rotate(0deg); opacity: 0; }
          14% { opacity: 1; }
          86% { opacity: 1; }
          100% { transform: translate(calc(100vw + 95px), calc(100vh + 95px)) rotate(270deg); opacity: 0; }
        }
        @keyframes spiralAboutFlow {
          0% { transform: translate(-70px, 30vh) rotate(0deg); opacity: 0; }
          12% { opacity: 1; }
          25% { transform: translate(20vw, 15vh) rotate(90deg); }
          50% { transform: translate(50vw, 35vh) rotate(180deg); }
          75% { transform: translate(80vw, 20vh) rotate(270deg); }
          88% { opacity: 1; }
          100% { transform: translate(calc(100vw + 70px), 30vh) rotate(360deg); opacity: 0; }
        }
        @keyframes waveAboutFlow {
          0% { transform: translate(-60px, 40vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          20% { transform: translate(20vw, 25vh) rotate(45deg); }
          40% { transform: translate(40vw, 45vh) rotate(90deg); }
          60% { transform: translate(60vw, 20vh) rotate(135deg); }
          80% { transform: translate(80vw, 40vh) rotate(180deg); }
          90% { opacity: 1; }
          100% { transform: translate(calc(100vw + 60px), 35vh) rotate(225deg); opacity: 0; }
        }
        .flow-line-h-about {
          animation: slideRightAbout 9s linear infinite;
        }
        .flow-line-v-about {
          animation: slideDownAbout 11s linear infinite;
        }
        .flow-diagonal-about {
          animation: diagonalAboutFlow 14s linear infinite;
        }
        .flow-spiral-about {
          animation: spiralAboutFlow 18s linear infinite;
        }
        .flow-wave-about {
          animation: waveAboutFlow 15s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
     
        <div className="absolute inset-0" style={{ contain: "layout style paint" }}>
          {stars.map((star) => (
            <AboutStar key={star.id} star={star} />
          ))}
        </div>

       
        <div className="absolute inset-0">
          {orbs.map((orb) => (
            <AboutOrb key={orb.id} orb={orb} />
          ))}
        </div>

       
        <div className="absolute inset-0">
          {knowledgeParticles.map((particle) => (
            <KnowledgeParticle key={particle.id} particle={particle} />
          ))}
        </div>

     
        <div className="absolute inset-0">
          {educationParticles.map((particle) => (
            <EducationParticle key={particle.id} particle={particle} />
          ))}
        </div>

       
        <div className="absolute inset-0">
          {educationBooks.map((book) => (
            <EducationBook key={book.id} book={book} />
          ))}
        </div>

     
        <div className="absolute inset-0">
          {learningWaves.map((wave) => (
            <LearningWave key={wave.id} wave={wave} />
          ))}
        </div>

        
        <div className="absolute inset-0 opacity-54">
         
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-line-h-about"
            style={{ top: "10%", animationDelay: "0s" }}
          />
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-line-h-about"
            style={{ top: "16%", animationDelay: "1s" }}
          />
          <div
            className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-line-h-about"
            style={{ top: "22%", animationDelay: "2s" }}
          />
          <div
            className="absolute h-0.5 w-36 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-line-h-about"
            style={{ top: "28%", animationDelay: "3s" }}
          />
          <div
            className="absolute h-0.5 w-30 bg-gradient-to-r from-transparent via-[#00b3ff] to-transparent flow-line-h-about"
            style={{ top: "34%", animationDelay: "4s" }}
          />
          <div
            className="absolute h-0.5 w-26 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent flow-line-h-about"
            style={{ top: "40%", animationDelay: "5s" }}
          />
          <div
            className="absolute h-0.5 w-34 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent flow-line-h-about"
            style={{ top: "46%", animationDelay: "6s" }}
          />
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#00c7ff] to-transparent flow-line-h-about"
            style={{ top: "52%", animationDelay: "7s" }}
          />
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-line-h-about"
            style={{ top: "58%", animationDelay: "1.5s" }}
          />
          <div
            className="absolute h-0.5 w-30 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-line-h-about"
            style={{ top: "64%", animationDelay: "2.5s" }}
          />
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-line-h-about"
            style={{ top: "70%", animationDelay: "3.5s" }}
          />
          <div
            className="absolute h-0.5 w-34 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-line-h-about"
            style={{ top: "76%", animationDelay: "4.5s" }}
          />
          <div
            className="absolute h-0.5 w-26 bg-gradient-to-r from-transparent via-[#00b3ff] to-transparent flow-line-h-about"
            style={{ top: "82%", animationDelay: "5.5s" }}
          />
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent flow-line-h-about"
            style={{ top: "88%", animationDelay: "6.5s" }}
          />

          
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-line-v-about"
            style={{ left: "7%", animationDelay: "0.5s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-line-v-about"
            style={{ left: "14%", animationDelay: "1.5s" }}
          />
          <div
            className="absolute w-0.5 h-24 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-line-v-about"
            style={{ left: "21%", animationDelay: "2.5s" }}
          />
          <div
            className="absolute w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-line-v-about"
            style={{ left: "28%", animationDelay: "3.5s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-line-v-about"
            style={{ left: "35%", animationDelay: "4.5s" }}
          />
          <div
            className="absolute w-0.5 h-26 bg-gradient-to-b from-transparent via-[#00d9ff] to-transparent flow-line-v-about"
            style={{ left: "42%", animationDelay: "5.5s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent flow-line-v-about"
            style={{ left: "49%", animationDelay: "6.5s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#00c7ff] to-transparent flow-line-v-about"
            style={{ left: "56%", animationDelay: "7.5s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-line-v-about"
            style={{ left: "63%", animationDelay: "1s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-line-v-about"
            style={{ left: "70%", animationDelay: "2s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-line-v-about"
            style={{ left: "77%", animationDelay: "3s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-line-v-about"
            style={{ left: "84%", animationDelay: "4s" }}
          />
          <div
            className="absolute w-0.5 h-26 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-line-v-about"
            style={{ left: "91%", animationDelay: "5s" }}
          />

        
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-diagonal-about"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute w-0.5 h-24 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-diagonal-about"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-diagonal-about"
            style={{ animationDelay: "5s" }}
          />
          <div
            className="absolute w-0.5 h-26 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-diagonal-about"
            style={{ animationDelay: "7s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-diagonal-about"
            style={{ animationDelay: "9s" }}
          />

          
          <div
            className="absolute h-0.5 w-22 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-spiral-about"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute h-0.5 w-26 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-spiral-about"
            style={{ animationDelay: "8s" }}
          />
          <div
            className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-spiral-about"
            style={{ animationDelay: "14s" }}
          />

          
          <div
            className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-wave-about"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-[#00b3ff] to-transparent flow-wave-about"
            style={{ animationDelay: "9s" }}
          />
          <div
            className="absolute h-0.5 w-22 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent flow-wave-about"
            style={{ animationDelay: "15s" }}
          />
        </div>

        
        <div className="absolute inset-0 opacity-74">
          <div
            className="absolute w-2 h-2 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/70 animate-pulse"
            style={{ top: "10%", left: "7%" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/70 animate-pulse"
            style={{ top: "16%", left: "14%", animationDelay: "0.3s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/70 animate-pulse"
            style={{ top: "22%", left: "21%", animationDelay: "0.6s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00e6ff] rounded-full shadow-lg shadow-[#00e6ff]/70 animate-pulse"
            style={{ top: "28%", left: "28%", animationDelay: "0.9s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00b3ff] rounded-full shadow-lg shadow-[#00b3ff]/70 animate-pulse"
            style={{ top: "34%", left: "35%", animationDelay: "1.2s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00d9ff] rounded-full shadow-lg shadow-[#00d9ff]/70 animate-pulse"
            style={{ top: "40%", left: "42%", animationDelay: "1.5s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00f0ff] rounded-full shadow-lg shadow-[#00f0ff]/70 animate-pulse"
            style={{ top: "46%", left: "49%", animationDelay: "1.8s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00c7ff] rounded-full shadow-lg shadow-[#00c7ff]/70 animate-pulse"
            style={{ top: "52%", left: "56%", animationDelay: "2.1s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/70 animate-pulse"
            style={{ top: "58%", left: "63%", animationDelay: "2.4s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/70 animate-pulse"
            style={{ top: "64%", left: "70%", animationDelay: "2.7s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/70 animate-pulse"
            style={{ top: "70%", left: "77%", animationDelay: "3s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00e6ff] rounded-full shadow-lg shadow-[#00e6ff]/70 animate-pulse"
            style={{ top: "76%", left: "84%", animationDelay: "3.3s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00b3ff] rounded-full shadow-lg shadow-[#00b3ff]/70 animate-pulse"
            style={{ top: "82%", left: "91%", animationDelay: "3.6s" }}
          />
        </div>

      
        <div className="absolute top-5 left-5 w-[440px] h-[440px] bg-[#00ffcc]/6 rounded-full blur-3xl pointer-events-none opacity-66" />
        <div className="absolute bottom-5 right-5 w-[420px] h-[420px] bg-[#00ccff]/6 rounded-full blur-3xl pointer-events-none opacity-66" />
        <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-[#0099ff]/4 rounded-full blur-3xl pointer-events-none opacity-56" />
        <div className="absolute bottom-1/3 left-1/4 w-[460px] h-[460px] bg-[#00e6ff]/5 rounded-full blur-3xl pointer-events-none opacity-61" />
        <div className="absolute top-2/3 left-1/6 w-[400px] h-[400px] bg-[#00b3ff]/4 rounded-full blur-3xl pointer-events-none opacity-53" />
        <div className="absolute bottom-2/3 right-1/6 w-[450px] h-[450px] bg-[#00d9ff]/5 rounded-full blur-3xl pointer-events-none opacity-59" />

     
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-10"></div>
      </div>
    </>
  )
})

UltraOptimizedAboutBackground.displayName = "UltraOptimizedAboutBackground"


const EducationCard = memo(({ edu, index, isInView }: { edu: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
    whileHover={{
      scale: 1.02,
      x: 3,
    }}
    className="group w-full"
    style={{ willChange: "transform" }}
  >
    <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ccff]/30 transition-all duration-300 w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff]/3 via-transparent to-[#0099ff]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardContent className="p-4 sm:p-6 relative z-10">
        <div className="flex items-start gap-3 sm:gap-4">
          <motion.div
            className="p-2 sm:p-3 rounded-full bg-[#00ccff]/20 group-hover:bg-[#00ccff]/30 transition-colors border border-[#00ccff]/30 flex-shrink-0"
            whileHover={{ rotate: 180, scale: 1.05 }}
            transition={{ duration: 0.3 }}
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


const SkillCategory = memo(({ category, index, isInView }: { category: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
    whileHover={{
      scale: 1.02,
      y: -2,
    }}
    className="group w-full"
    style={{ willChange: "transform" }}
  >
    <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-300 w-full">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${category.color}03 0%, transparent 50%, ${category.color}03 100%)`,
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
            transition={{ duration: 0.2 }}
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.2, delay: 0.5 + index * 0.1 + skillIndex * 0.02 }}
              whileHover={{ scale: 1.03 }}
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


const CertificationCard = memo(({ cert, index, isInView }: { cert: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
    whileHover={{
      scale: 1.01,
      y: -2,
    }}
    className="group w-full"
    style={{ willChange: "transform" }}
  >
    <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00e6ff]/30 transition-all duration-300 cursor-pointer w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00e6ff]/3 via-transparent to-[#00ccff]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardContent className="p-4 sm:p-6 relative z-10">
        <div className="flex items-start gap-3 sm:gap-4">
          <motion.div
            className="p-2 sm:p-3 rounded-xl bg-[#00e6ff]/20 border border-[#00e6ff]/30 group-hover:bg-[#00e6ff]/30 transition-colors flex-shrink-0"
            whileHover={{ rotate: 180, scale: 1.05 }}
            transition={{ duration: 0.3 }}
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
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6 } },
    }),
    [],
  )

  const headerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }),
    [],
  )

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
      <UltraOptimizedAboutBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20 relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 sm:space-y-16 lg:space-y-20"
        >
          {/* Header */}
          <motion.div variants={headerVariants} className="text-center space-y-4 sm:space-y-6 px-4">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ lineHeight: "1.1" }}
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
              >
                Me
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#cccccc] max-w-4xl mx-auto leading-relaxed px-4 mt-6"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Passionate full-stack developer with hands-on experience in building dynamic applications using MERN,
              Next.js, and RESTful APIs. Transforming ideas into digital reality with cutting-edge technology.
            </motion.p>
          </motion.div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              scale: 1.01,
            }}
            className="w-full"
            style={{ willChange: "transform" }}
          >
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-300 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/3 via-transparent to-[#00ccff]/3 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <CardContent className="p-6 sm:p-8 relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
                  <motion.div
                    className="p-2 sm:p-3 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30 flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
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

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 flex-wrap">
              <motion.div
                className="p-2 sm:p-3 rounded-xl bg-[#00ccff]/20 border border-[#00ccff]/30 flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
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

          {/* Internship Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{
              scale: 1.01,
            }}
            className="w-full"
            style={{ willChange: "transform" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 flex-wrap">
              <motion.div
                className="p-2 sm:p-3 rounded-xl bg-[#00ffaa]/20 border border-[#00ffaa]/30 flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-[#00ffaa]" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Internship</h2>
            </div>
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffaa]/30 transition-all duration-300 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffaa]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <motion.div
                    className="p-3 sm:p-4 rounded-xl bg-[#00ffaa]/20 border border-[#00ffaa]/30 flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-[#00ffaa]" />
                  </motion.div>
                  <div className="flex-1 min-w-0 w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 hover:text-[#00ffaa] transition-colors break-words">
                      Full Stack Web Developer Intern
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 flex-wrap">
                      <Badge
                        variant="secondary"
                        className="text-xs sm:text-sm bg-[#00ffaa]/10 text-[#00ffaa] border border-[#00ffaa]/30 w-fit"
                      >
                        Oddiant TechLabs (Remote)
                      </Badge>
                      <Badge variant="outline" className="text-xs sm:text-sm border-[#666666] text-[#999999] w-fit">
                        Jan 2025 – Jun 2025
                      </Badge>
                      <Badge variant="outline" className="text-xs sm:text-sm border-[#666666] text-[#999999] w-fit">
                        6 Months
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base text-[#cccccc] leading-relaxed break-words mb-6">
                      During my 6‑month remote internship at Oddiant TechLabs I worked end‑to‑end across the MERN + Next.js
                      stack to build and optimize production‑grade web applications. I engineered reusable, accessible UI
                      components with Tailwind CSS, refactored API integration layers for cleaner data flow, and improved
                      perceived performance through code‑splitting and careful state management. I collaborated closely with
                      founders and designers in an agile rhythm (weekly deliverables & reviews), converting loosely defined
                      feature ideas into shipped functionality, strengthening my judgment around trade‑offs, scalability, and
                      developer experience. Beyond feature delivery I focused on maintainability—introducing naming
                      conventions, organizing folder structure, and reviewing pull requests to uphold code quality. The role
                      deepened my understanding of deploying and monitoring live Next.js applications while reinforcing
                      disciplined problem solving and clear asynchronous communication. (Total stipend: ₹18,000.)
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffaa] hover:shadow-lg hover:shadow-[#00ffaa]/20 transition-all duration-300 w-full sm:w-auto"
                      >
                        {/* TODO: Replace # with certificate link when available */}
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Check Here
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="bg-[#00ffaa]/20 border border-[#00ffaa]/30 text-[#00ffaa] hover:bg-[#00ffaa]/30 hover:text-white transition-colors w-full sm:w-auto"
                      >
                        <Link href="https://www.oddiant.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Project
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 flex-wrap">
              <motion.div
                className="p-2 sm:p-3 rounded-xl bg-[#0099ff]/20 border border-[#0099ff]/30 flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
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

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 flex-wrap">
              <motion.div
                className="p-2 sm:p-3 rounded-xl bg-[#00e6ff]/20 border border-[#00e6ff]/30 flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
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

          {/* Position of Responsibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{
              scale: 1.01,
            }}
            className="w-full"
            style={{ willChange: "transform" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 flex-wrap">
              <motion.div
                className="p-2 sm:p-3 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30 flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-[#00ffcc]" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">
                Position of Responsibility
              </h2>
            </div>
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-300 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/3 via-transparent to-[#00e6ff]/3 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <motion.div
                    className="p-3 sm:p-4 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30 flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
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

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                  }}
                  className="group w-full"
                  style={{ willChange: "transform" }}
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-300 text-center w-full">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${stat.color}03 0%, transparent 50%, ${stat.color}03 100%)`,
                      }}
                    />

                    <CardContent className="p-4 sm:p-6 relative z-10">
                      <motion.div
                        className="p-2 sm:p-3 rounded-xl mx-auto w-fit mb-3 sm:mb-4 border"
                        style={{
                          backgroundColor: `${stat.color}20`,
                          borderColor: `${stat.color}30`,
                        }}
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
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
