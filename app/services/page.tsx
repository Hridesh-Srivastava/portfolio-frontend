"use client"

import { useRef, useMemo, memo, useEffect, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Database,
  Globe,
  Cpu,
  Layers,
  ExternalLink,
  CheckCircle,
  Star,
  Zap,
  Code,
  Palette,
  Shield,
  Rocket,
} from "lucide-react"
import Link from "next/link"

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
    color: "#00ffcc",
    popular: true,
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
    color: "#00ccff",
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
    color: "#0099ff",
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
    color: "#00e6ff",
  },
  {
    icon: Layers,
    title: "Project Collaboration",
    description: "Collaborative development for academic and open-source projects",
    features: ["Team Collaboration", "Version Control", "Code Reviews", "Documentation", "Agile Development"],
    technologies: ["Git", "GitHub", "Documentation"],
    color: "#00b3ff",
  },
  {
    icon: Code,
    title: "Custom Solutions",
    description: "Tailored development solutions for unique business requirements",
    features: [
      "Custom Web Applications",
      "Third-party Integrations",
      "Legacy System Modernization",
      "Performance Audits",
      "Technical Support",
    ],
    technologies: ["Custom Development", "Integration"],
    color: "#00d9ff",
  },
]


const ServiceStar = memo(({ star }: { star: any }) => (
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

ServiceStar.displayName = "ServiceStar"


const ServiceOrb = memo(({ orb }: { orb: any }) => (
  <div
    className="absolute rounded-full pointer-events-none opacity-46"
    style={{
      left: `${orb.left}%`,
      top: `${orb.top}%`,
      width: `${orb.size}px`,
      height: `${orb.size}px`,
      background: `radial-gradient(circle, ${orb.color}62 0%, ${orb.color}30 35%, transparent 75%)`,
      animation: `serviceFloat ${orb.duration}s ease-in-out infinite`,
      animationDelay: `${orb.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
      filter: "blur(1px)",
    }}
  />
))

ServiceOrb.displayName = "ServiceOrb"


const ServiceDataParticle = memo(({ particle }: { particle: any }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      background: particle.color,
      boxShadow: `0 0 ${particle.size * 3.2}px ${particle.color}`,
      animation: `serviceDataFlow ${particle.duration}s linear infinite`,
      animationDelay: `${particle.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
    }}
  />
))

ServiceDataParticle.displayName = "ServiceDataParticle"


const ServiceBusinessParticle = memo(({ particle }: { particle: any }) => (
  <div
    className="absolute pointer-events-none"
    style={{
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      background: particle.color,
      borderRadius: particle.type === "square" ? "3px" : "50%",
      boxShadow: `0 0 ${particle.size * 2.5}px ${particle.color}`,
      animation: `serviceBusinessFlow ${particle.duration}s linear infinite`,
      animationDelay: `${particle.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
    }}
  />
))

ServiceBusinessParticle.displayName = "ServiceBusinessParticle"


const ServiceGear = memo(({ gear }: { gear: any }) => (
  <div
    className="absolute pointer-events-none border-2 rounded-full"
    style={{
      left: `${gear.left}%`,
      top: `${gear.top}%`,
      width: `${gear.size}px`,
      height: `${gear.size}px`,
      borderColor: gear.color,
      animation: `serviceGearRotate ${gear.duration}s linear infinite`,
      animationDelay: `${gear.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
      opacity: 0.65,
    }}
  >
    <div className="absolute inset-2 border rounded-full" style={{ borderColor: gear.color }} />
    <div
      className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 -translate-y-1/2"
      style={{ backgroundColor: gear.color }}
    />
  
    <div
      className="absolute top-0 left-1/2 w-0.5 h-2 transform -translate-x-1/2 -translate-y-1"
      style={{ backgroundColor: gear.color }}
    />
    <div
      className="absolute bottom-0 left-1/2 w-0.5 h-2 transform -translate-x-1/2 translate-y-1"
      style={{ backgroundColor: gear.color }}
    />
    <div
      className="absolute left-0 top-1/2 w-2 h-0.5 transform -translate-y-1/2 -translate-x-1"
      style={{ backgroundColor: gear.color }}
    />
    <div
      className="absolute right-0 top-1/2 w-2 h-0.5 transform -translate-y-1/2 translate-x-1"
      style={{ backgroundColor: gear.color }}
    />
  </div>
))

ServiceGear.displayName = "ServiceGear"


const ServiceConnectionWave = memo(({ wave }: { wave: any }) => (
  <div
    className="absolute rounded-full pointer-events-none border-2"
    style={{
      left: `${wave.left}%`,
      top: `${wave.top}%`,
      width: `${wave.size}px`,
      height: `${wave.size}px`,
      borderColor: wave.color,
      animation: `serviceConnectionWave ${wave.duration}s ease-out infinite`,
      animationDelay: `${wave.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",
    }}
  />
))

ServiceConnectionWave.displayName = "ServiceConnectionWave"


const UltraOptimizedServicesBackground = memo(() => {
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  
  const stars = useMemo(
    () =>
      [...Array(155)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.2 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.9 + 0.35,
      })),
    [],
  )

 
  const orbs = useMemo(
    () =>
      [...Array(9)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 92 + 60,
        duration: Math.random() * 22 + 15,
        delay: Math.random() * 5,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff", "#00d9ff", "#00f0ff", "#00c7ff", "#00a3ff"][i],
      })),
    [],
  )

 
  const dataParticles = useMemo(
    () =>
      [...Array(12)].map((_, i) => ({
        id: i,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 16 + 12,
        delay: Math.random() * 5,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff", "#00d9ff"][Math.floor(Math.random() * 6)],
      })),
    [],
  )

 
  const serviceBusinessParticles = useMemo(
    () =>
      [...Array(6)].map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 18 + 14,
        delay: Math.random() * 5,
        type: Math.random() > 0.5 ? "circle" : "square",
        color: ["#00ffcc", "#00ccff", "#0099ff"][Math.floor(Math.random() * 3)],
      })),
    [],
  )

  
  const serviceGears = useMemo(
    () =>
      [...Array(6)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 45 + 25,
        duration: Math.random() * 25 + 18,
        delay: Math.random() * 3,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff", "#00d9ff"][i],
      })),
    [],
  )

  
  const serviceConnectionWaves = useMemo(
    () =>
      [...Array(7)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 75 + 40,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 4,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff", "#00d9ff", "#00f0ff"][i],
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
        @keyframes serviceFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          25% { transform: translate3d(25px, -22px, 0) scale(1.18); }
          50% { transform: translate3d(-18px, 18px, 0) scale(0.82); }
          75% { transform: translate3d(15px, -12px, 0) scale(1.1); }
        }
        @keyframes slideRightServices {
          0% { transform: translateX(-145px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes slideDownServices {
          0% { transform: translateY(-145px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes serviceDataFlow {
          0% { transform: translate3d(-70px, -70px, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate3d(100vw, 100vh, 0) rotate(360deg); opacity: 0; }
        }
        @keyframes serviceBusinessFlow {
          0% { transform: translate3d(-85px, -50px, 0) rotate(0deg); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translate3d(100vw, 70vh, 0) rotate(180deg); opacity: 0; }
        }
        @keyframes serviceGearRotate {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          100% { transform: translate3d(0, 0, 0) rotate(360deg); }
        }
        @keyframes serviceConnectionWave {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          50% { opacity: 0.8; }
          100% { transform: scale(3) rotate(180deg); opacity: 0; }
        }
        @keyframes diagonalServicesFlow {
          0% { transform: translate(-100px, -100px) rotate(0deg); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translate(calc(100vw + 100px), calc(100vh + 100px)) rotate(270deg); opacity: 0; }
        }
        @keyframes networkServicesFlow {
          0% { transform: translate(-75px, 25vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          25% { transform: translate(25vw, 10vh) rotate(90deg); }
          50% { transform: translate(50vw, 40vh) rotate(180deg); }
          75% { transform: translate(75vw, 15vh) rotate(270deg); }
          90% { opacity: 1; }
          100% { transform: translate(calc(100vw + 75px), 30vh) rotate(360deg); opacity: 0; }
        }
        @keyframes businessServicesFlow {
          0% { transform: translate(-65px, 45vh) rotate(0deg); opacity: 0; }
          8% { opacity: 1; }
          20% { transform: translate(20vw, 30vh) rotate(45deg); }
          40% { transform: translate(40vw, 50vh) rotate(90deg); }
          60% { transform: translate(60vw, 25vh) rotate(135deg); }
          80% { transform: translate(80vw, 45vh) rotate(180deg); }
          92% { opacity: 1; }
          100% { transform: translate(calc(100vw + 65px), 40vh) rotate(225deg); opacity: 0; }
        }
        .flow-line-h-services {
          animation: slideRightServices 8s linear infinite;
        }
        .flow-line-v-services {
          animation: slideDownServices 10s linear infinite;
        }
        .flow-diagonal-services {
          animation: diagonalServicesFlow 13s linear infinite;
        }
        .flow-network-services {
          animation: networkServicesFlow 17s linear infinite;
        }
        .flow-business-services {
          animation: businessServicesFlow 16s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
       
        <div className="absolute inset-0" style={{ contain: "layout style paint" }}>
          {stars.map((star) => (
            <ServiceStar key={star.id} star={star} />
          ))}
        </div>

       
        <div className="absolute inset-0">
          {orbs.map((orb) => (
            <ServiceOrb key={orb.id} orb={orb} />
          ))}
        </div>

       
        <div className="absolute inset-0">
          {dataParticles.map((particle) => (
            <ServiceDataParticle key={particle.id} particle={particle} />
          ))}
        </div>

       
        <div className="absolute inset-0">
          {serviceBusinessParticles.map((particle) => (
            <ServiceBusinessParticle key={particle.id} particle={particle} />
          ))}
        </div>

       
        <div className="absolute inset-0">
          {serviceGears.map((gear) => (
            <ServiceGear key={gear.id} gear={gear} />
          ))}
        </div>

       
        <div className="absolute inset-0">
          {serviceConnectionWaves.map((wave) => (
            <ServiceConnectionWave key={wave.id} wave={wave} />
          ))}
        </div>

       
        <div className="absolute inset-0 opacity-57">
          
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-line-h-services"
            style={{ top: "8%", animationDelay: "0s" }}
          />
          <div
            className="absolute h-0.5 w-36 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-line-h-services"
            style={{ top: "14%", animationDelay: "0.8s" }}
          />
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-line-h-services"
            style={{ top: "20%", animationDelay: "1.6s" }}
          />
          <div
            className="absolute h-0.5 w-40 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-line-h-services"
            style={{ top: "26%", animationDelay: "2.4s" }}
          />
          <div
            className="absolute h-0.5 w-34 bg-gradient-to-r from-transparent via-[#00b3ff] to-transparent flow-line-h-services"
            style={{ top: "32%", animationDelay: "3.2s" }}
          />
          <div
            className="absolute h-0.5 w-30 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent flow-line-h-services"
            style={{ top: "38%", animationDelay: "4s" }}
          />
          <div
            className="absolute h-0.5 w-38 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent flow-line-h-services"
            style={{ top: "44%", animationDelay: "4.8s" }}
          />
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#00c7ff] to-transparent flow-line-h-services"
            style={{ top: "50%", animationDelay: "5.6s" }}
          />
          <div
            className="absolute h-0.5 w-36 bg-gradient-to-r from-transparent via-[#00a3ff] to-transparent flow-line-h-services"
            style={{ top: "56%", animationDelay: "6.4s" }}
          />
          <div
            className="absolute h-0.5 w-34 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-line-h-services"
            style={{ top: "62%", animationDelay: "1.2s" }}
          />
          <div
            className="absolute h-0.5 w-30 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-line-h-services"
            style={{ top: "68%", animationDelay: "2s" }}
          />
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-line-h-services"
            style={{ top: "74%", animationDelay: "2.8s" }}
          />
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-line-h-services"
            style={{ top: "80%", animationDelay: "3.6s" }}
          />
          <div
            className="absolute h-0.5 w-36 bg-gradient-to-r from-transparent via-[#00b3ff] to-transparent flow-line-h-services"
            style={{ top: "86%", animationDelay: "4.4s" }}
          />
          <div
            className="absolute h-0.5 w-34 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent flow-line-h-services"
            style={{ top: "92%", animationDelay: "5.2s" }}
          />

         
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-line-v-services"
            style={{ left: "6%", animationDelay: "0.4s" }}
          />
          <div
            className="absolute w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-line-v-services"
            style={{ left: "12%", animationDelay: "1.2s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-line-v-services"
            style={{ left: "18%", animationDelay: "2s" }}
          />
          <div
            className="absolute w-0.5 h-40 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-line-v-services"
            style={{ left: "24%", animationDelay: "2.8s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-line-v-services"
            style={{ left: "30%", animationDelay: "3.6s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00d9ff] to-transparent flow-line-v-services"
            style={{ left: "36%", animationDelay: "4.4s" }}
          />
          <div
            className="absolute w-0.5 h-38 bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent flow-line-v-services"
            style={{ left: "42%", animationDelay: "5.2s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00c7ff] to-transparent flow-line-v-services"
            style={{ left: "48%", animationDelay: "6s" }}
          />
          <div
            className="absolute w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00a3ff] to-transparent flow-line-v-services"
            style={{ left: "54%", animationDelay: "0.8s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-line-v-services"
            style={{ left: "60%", animationDelay: "1.6s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-line-v-services"
            style={{ left: "66%", animationDelay: "2.4s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-line-v-services"
            style={{ left: "72%", animationDelay: "3.2s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-line-v-services"
            style={{ left: "78%", animationDelay: "4s" }}
          />
          <div
            className="absolute w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-line-v-services"
            style={{ left: "84%", animationDelay: "4.8s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00d9ff] to-transparent flow-line-v-services"
            style={{ left: "90%", animationDelay: "5.6s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent flow-line-v-services"
            style={{ left: "96%", animationDelay: "6.4s" }}
          />

         
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-diagonal-services"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute w-0.5 h-26 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-diagonal-services"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-diagonal-services"
            style={{ animationDelay: "5s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-diagonal-services"
            style={{ animationDelay: "7s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-diagonal-services"
            style={{ animationDelay: "9s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00d9ff] to-transparent flow-diagonal-services"
            style={{ animationDelay: "11s" }}
          />

         
          <div
            className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-network-services"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-network-services"
            style={{ animationDelay: "8s" }}
          />
          <div
            className="absolute h-0.5 w-26 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-network-services"
            style={{ animationDelay: "14s" }}
          />

          
          <div
            className="absolute h-0.5 w-22 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-business-services"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute h-0.5 w-26 bg-gradient-to-r from-transparent via-[#00b3ff] to-transparent flow-business-services"
            style={{ animationDelay: "9s" }}
          />
          <div
            className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent flow-business-services"
            style={{ animationDelay: "15s" }}
          />
        </div>

        
        <div className="absolute inset-0 opacity-76">
          <div
            className="absolute w-2 h-2 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/72 animate-pulse"
            style={{ top: "8%", left: "6%" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/72 animate-pulse"
            style={{ top: "14%", left: "12%", animationDelay: "0.25s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/72 animate-pulse"
            style={{ top: "20%", left: "18%", animationDelay: "0.5s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00e6ff] rounded-full shadow-lg shadow-[#00e6ff]/72 animate-pulse"
            style={{ top: "26%", left: "24%", animationDelay: "0.75s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00b3ff] rounded-full shadow-lg shadow-[#00b3ff]/72 animate-pulse"
            style={{ top: "32%", left: "30%", animationDelay: "1s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00d9ff] rounded-full shadow-lg shadow-[#00d9ff]/72 animate-pulse"
            style={{ top: "38%", left: "36%", animationDelay: "1.25s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00f0ff] rounded-full shadow-lg shadow-[#00f0ff]/72 animate-pulse"
            style={{ top: "44%", left: "42%", animationDelay: "1.5s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00c7ff] rounded-full shadow-lg shadow-[#00c7ff]/72 animate-pulse"
            style={{ top: "50%", left: "48%", animationDelay: "1.75s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00a3ff] rounded-full shadow-lg shadow-[#00a3ff]/72 animate-pulse"
            style={{ top: "56%", left: "54%", animationDelay: "2s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/72 animate-pulse"
            style={{ top: "62%", left: "60%", animationDelay: "2.25s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/72 animate-pulse"
            style={{ top: "68%", left: "66%", animationDelay: "2.5s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/72 animate-pulse"
            style={{ top: "74%", left: "72%", animationDelay: "2.75s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00e6ff] rounded-full shadow-lg shadow-[#00e6ff]/72 animate-pulse"
            style={{ top: "80%", left: "78%", animationDelay: "3s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00b3ff] rounded-full shadow-lg shadow-[#00b3ff]/72 animate-pulse"
            style={{ top: "86%", left: "84%", animationDelay: "3.25s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00d9ff] rounded-full shadow-lg shadow-[#00d9ff]/72 animate-pulse"
            style={{ top: "92%", left: "90%", animationDelay: "3.5s" }}
          />
        </div>

        
        <div className="absolute top-4 left-4 w-[460px] h-[460px] bg-[#00ffcc]/7 rounded-full blur-3xl pointer-events-none opacity-68" />
        <div className="absolute bottom-4 right-4 w-[440px] h-[440px] bg-[#00ccff]/7 rounded-full blur-3xl pointer-events-none opacity-68" />
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-[#0099ff]/5 rounded-full blur-3xl pointer-events-none opacity-58" />
        <div className="absolute bottom-1/4 left-1/3 w-[480px] h-[480px] bg-[#00e6ff]/6 rounded-full blur-3xl pointer-events-none opacity-63" />
        <div className="absolute top-2/3 left-1/6 w-[420px] h-[420px] bg-[#00b3ff]/4 rounded-full blur-3xl pointer-events-none opacity-53" />
        <div className="absolute bottom-2/3 right-1/6 w-[470px] h-[470px] bg-[#00d9ff]/5 rounded-full blur-3xl pointer-events-none opacity-60" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#00f0ff]/3 rounded-full blur-3xl pointer-events-none opacity-48" />

        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-10"></div>
      </div>
    </>
  )
})

UltraOptimizedServicesBackground.displayName = "UltraOptimizedServicesBackground"

// Optimized Service Card Component
const ServiceCard = memo(({ service, index, isInView }: { service: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{
      scale: 1.02,
      y: -3,
    }}
    className="group relative"
    style={{ willChange: "transform" }}
  >
    <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/3 via-transparent to-[#00ccff]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {service.popular && (
        <div className="absolute -top-2 -right-2 z-20">
          <Badge className="bg-[#00ffcc] text-[#0a0a0a] font-semibold px-3 py-1 shadow-lg">Popular</Badge>
        </div>
      )}

      <CardHeader className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            className="p-3 rounded-xl border"
            style={{
              backgroundColor: `${service.color}20`,
              borderColor: `${service.color}30`,
            }}
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <service.icon className="h-6 w-6" style={{ color: service.color }} />
          </motion.div>
          <div className="flex-1">
            <CardTitle className="text-xl text-white group-hover:text-[#00ffcc] transition-colors">
              {service.title}
            </CardTitle>
          </div>
        </div>
        <p className="text-[#999999] text-sm leading-relaxed">{service.description}</p>
      </CardHeader>

      <CardContent className="space-y-4 relative z-10">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#cccccc] mb-3">Key Features:</h4>
          {service.features.map((feature: string, featureIndex: number) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.2, delay: index * 0.1 + featureIndex * 0.05 }}
              className="flex items-center gap-2"
            >
              <CheckCircle className="h-4 w-4 text-[#00ffcc] flex-shrink-0" />
              <span className="text-[#cccccc] text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>

        <div className="pt-4">
          <h4 className="text-sm font-semibold text-[#cccccc] mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech: string, techIndex: number) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.2, delay: index * 0.1 + techIndex * 0.03 }}
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
        </div>

        <div className="pt-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
))

ServiceCard.displayName = "ServiceCard"

export default function ServicesPage() {
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

  return (
    <div ref={ref} className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <UltraOptimizedServicesBackground />

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
              <span className="text-white">My </span>
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
                Services
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#cccccc] max-w-4xl mx-auto leading-relaxed px-4 mt-6"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Comprehensive web development services tailored to bring your digital vision to life. From full-stack
              applications to custom solutions, I deliver quality results that exceed expectations.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} isInView={isInView} />
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 flex-wrap">
              <motion.div
                className="p-2 sm:p-3 rounded-xl bg-[#00ccff]/20 border border-[#00ccff]/30 flex-shrink-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-[#00ccff]" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">My Process</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your requirements and project goals",
                  icon: Palette,
                  color: "#00ffcc",
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "Creating detailed project roadmap and architecture",
                  icon: Code,
                  color: "#00ccff",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building your solution with best practices",
                  icon: Cpu,
                  color: "#0099ff",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Testing, deployment, and ongoing support",
                  icon: Shield,
                  color: "#00e6ff",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  className="group"
                  style={{ willChange: "transform" }}
                >
                  <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full overflow-hidden relative backdrop-blur-sm group-hover:border-[#00ffcc]/30 transition-all duration-300 text-center">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${process.color}03 0%, transparent 50%, ${process.color}03 100%)`,
                      }}
                    />

                    <CardContent className="p-6 relative z-10">
                      <div className="text-4xl font-bold mb-4" style={{ color: process.color }}>
                        {process.step}
                      </div>
                      <motion.div
                        className="p-3 rounded-xl mx-auto w-fit mb-4 border"
                        style={{
                          backgroundColor: `${process.color}20`,
                          borderColor: `${process.color}30`,
                        }}
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <process.icon className="h-6 w-6" style={{ color: process.color }} />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
                      <p className="text-sm text-[#999999] leading-relaxed">{process.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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

                <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
                <p className="text-xl text-[#cccccc] max-w-3xl mx-auto">
                  Let's discuss your requirements and create something amazing together. I'm here to help bring your
                  ideas to life with cutting-edge technology and exceptional quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25 group"
                    >
                      <Link href="/contact">
                        Get Started Today
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
                { value: "6+", label: "Services Offered", icon: Globe, color: "#00ffcc" },
                { value: "100%", label: "Client Satisfaction", icon: Star, color: "#00ccff" },
                { value: "24/7", label: "Support Available", icon: Shield, color: "#0099ff" },
                { value: "Fast", label: "Delivery Time", icon: Zap, color: "#00e6ff" },
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
