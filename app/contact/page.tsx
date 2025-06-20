"use client"

import type React from "react"

import { useState, useEffect, useRef, useMemo, memo } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  MessageSquare,
  Wifi,
  WifiOff,
  Zap,
  Globe,
  Navigation,
} from "lucide-react"
import Link from "next/link"

const XIcon = memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#d1d5db">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
))

XIcon.displayName = "XIcon"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hrideshsrivastavaa@outlook.com",
    href: "mailto:hrideshsrivastavaa@outlook.com",
    color: "#00ffcc",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-9634883306",
    href: "tel:+919634883306",
    color: "#00ccff",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Dehradun, Uttarakhand, India",
    href: "#",
    color: "#0099ff",
  },
]

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    href: "https://github.com/Hridesh-Srivastava",
    username: "@Hridesh-Srivastava",
    color: "#00ffcc",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/hridayesh-srivastava-9575901bb/",
    username: "hridayesh-srivastava",
    color: "#00ccff",
  },
  {
    icon: XIcon,
    title: "X",
    href: "https://x.com/Hrideshhhh",
    username: "Hrideshhhh",
    color: "#0099ff",
  },
]


const ContactStar = memo(({ star }: { star: any }) => (
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

ContactStar.displayName = "ContactStar"


const ContactOrb = memo(({ orb }: { orb: any }) => (
  <div
    className="absolute rounded-full pointer-events-none opacity-45"
    style={{
      left: `${orb.left}%`,
      top: `${orb.top}%`,
      width: `${orb.size}px`,
      height: `${orb.size}px`,
      background: `radial-gradient(circle, ${orb.color}65 0%, ${orb.color}30 35%, transparent 75%)`,
      animation: `contactFloat ${orb.duration}s ease-in-out infinite`,
      animationDelay: `${orb.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
      filter: "blur(1px)",
    }}
  />
))

ContactOrb.displayName = "ContactOrb"


const CommunicationParticle = memo(({ particle }: { particle: any }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      background: particle.color,
      boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
      animation: `communicationFlow ${particle.duration}s linear infinite`,
      animationDelay: `${particle.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform",
    }}
  />
))

CommunicationParticle.displayName = "CommunicationParticle"


const MessageWave = memo(({ wave }: { wave: any }) => (
  <div
    className="absolute rounded-full pointer-events-none border-2"
    style={{
      left: `${wave.left}%`,
      top: `${wave.top}%`,
      width: `${wave.size}px`,
      height: `${wave.size}px`,
      borderColor: wave.color,
      animation: `messageWave ${wave.duration}s ease-out infinite`,
      animationDelay: `${wave.delay}s`,
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",
    }}
  />
))

MessageWave.displayName = "MessageWave"


const UltraOptimizedContactBackground = memo(() => {
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  const stars = useMemo(
    () =>
      [...Array(180)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.2 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.9 + 0.4,
      })),
    [],
  )


  const orbs = useMemo(
    () =>
      [...Array(10)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 100 + 60,
        duration: Math.random() * 22 + 15,
        delay: Math.random() * 5,
        color: [
          "#00ffcc",
          "#00ccff",
          "#0099ff",
          "#00e6ff",
          "#00b3ff",
          "#00d9ff",
          "#00f0ff",
          "#00c7ff",
          "#00a3ff",
          "#00ffaa",
        ][i],
      })),
    [],
  )


  const communicationParticles = useMemo(
    () =>
      [...Array(15)].map((_, i) => ({
        id: i,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 16 + 12,
        delay: Math.random() * 5,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff", "#00b3ff", "#00d9ff"][Math.floor(Math.random() * 6)],
      })),
    [],
  )


  const messageWaves = useMemo(
    () =>
      [...Array(8)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 80 + 40,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 3,
        color: ["#00ffcc", "#00ccff", "#0099ff", "#00e6ff"][Math.floor(Math.random() * 4)],
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
        @keyframes contactFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          20% { transform: translate3d(25px, -20px, 0) scale(1.15); }
          40% { transform: translate3d(-15px, 15px, 0) scale(0.85); }
          60% { transform: translate3d(20px, -10px, 0) scale(1.1); }
          80% { transform: translate3d(-10px, 20px, 0) scale(0.9); }
        }
        @keyframes slideRightContact {
          0% { transform: translateX(-150px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes slideDownContact {
          0% { transform: translateY(-150px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes communicationFlow {
          0% { transform: translate3d(-70px, -70px, 0) rotate(0deg); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translate3d(100vw, 100vh, 0) rotate(360deg); opacity: 0; }
        }
        @keyframes messageWave {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          50% { opacity: 0.6; }
          100% { transform: scale(3) rotate(180deg); opacity: 0; }
        }
        @keyframes diagonalContactFlow {
          0% { transform: translate(-100px, -100px) rotate(0deg); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translate(calc(100vw + 100px), calc(100vh + 100px)) rotate(270deg); opacity: 0; }
        }
        @keyframes pulseContactFlow {
          0% { transform: translate(-80px, 50vh) scale(1); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translate(50vw, 50vh) scale(1.5); opacity: 0.8; }
          90% { opacity: 1; }
          100% { transform: translate(calc(100vw + 80px), 50vh) scale(1); opacity: 0; }
        }
        .flow-line-h-contact {
          animation: slideRightContact 9s linear infinite;
        }
        .flow-line-v-contact {
          animation: slideDownContact 11s linear infinite;
        }
        .flow-diagonal-contact {
          animation: diagonalContactFlow 14s linear infinite;
        }
        .flow-pulse-contact {
          animation: pulseContactFlow 18s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
     
        <div className="absolute inset-0" style={{ contain: "layout style paint" }}>
          {stars.map((star) => (
            <ContactStar key={star.id} star={star} />
          ))}
        </div>

      
        <div className="absolute inset-0">
          {orbs.map((orb) => (
            <ContactOrb key={orb.id} orb={orb} />
          ))}
        </div>

     
        <div className="absolute inset-0">
          {communicationParticles.map((particle) => (
            <CommunicationParticle key={particle.id} particle={particle} />
          ))}
        </div>

    
        <div className="absolute inset-0">
          {messageWaves.map((wave) => (
            <MessageWave key={wave.id} wave={wave} />
          ))}
        </div>

       
        <div className="absolute inset-0 opacity-58">
      
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-line-h-contact"
            style={{ top: "8%", animationDelay: "0s" }}
          />
          <div
            className="absolute h-0.5 w-36 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-line-h-contact"
            style={{ top: "15%", animationDelay: "1s" }}
          />
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-line-h-contact"
            style={{ top: "22%", animationDelay: "2s" }}
          />
          <div
            className="absolute h-0.5 w-40 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-line-h-contact"
            style={{ top: "29%", animationDelay: "3s" }}
          />
          <div
            className="absolute h-0.5 w-34 bg-gradient-to-r from-transparent via-[#00b3ff] to-transparent flow-line-h-contact"
            style={{ top: "36%", animationDelay: "4s" }}
          />
          <div
            className="absolute h-0.5 w-30 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent flow-line-h-contact"
            style={{ top: "43%", animationDelay: "5s" }}
          />
          <div
            className="absolute h-0.5 w-38 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent flow-line-h-contact"
            style={{ top: "50%", animationDelay: "6s" }}
          />
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#00c7ff] to-transparent flow-line-h-contact"
            style={{ top: "57%", animationDelay: "7s" }}
          />
          <div
            className="absolute h-0.5 w-36 bg-gradient-to-r from-transparent via-[#00a3ff] to-transparent flow-line-h-contact"
            style={{ top: "64%", animationDelay: "8s" }}
          />
          <div
            className="absolute h-0.5 w-34 bg-gradient-to-r from-transparent via-[#00ffaa] to-transparent flow-line-h-contact"
            style={{ top: "71%", animationDelay: "1.5s" }}
          />
          <div
            className="absolute h-0.5 w-30 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-line-h-contact"
            style={{ top: "78%", animationDelay: "2.5s" }}
          />
          <div
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-line-h-contact"
            style={{ top: "85%", animationDelay: "3.5s" }}
          />
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-line-h-contact"
            style={{ top: "92%", animationDelay: "4.5s" }}
          />

       
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-line-v-contact"
            style={{ left: "6%", animationDelay: "0.5s" }}
          />
          <div
            className="absolute w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-line-v-contact"
            style={{ left: "12%", animationDelay: "1.5s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-line-v-contact"
            style={{ left: "18%", animationDelay: "2.5s" }}
          />
          <div
            className="absolute w-0.5 h-40 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-line-v-contact"
            style={{ left: "24%", animationDelay: "3.5s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-line-v-contact"
            style={{ left: "30%", animationDelay: "4.5s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00d9ff] to-transparent flow-line-v-contact"
            style={{ left: "36%", animationDelay: "5.5s" }}
          />
          <div
            className="absolute w-0.5 h-38 bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent flow-line-v-contact"
            style={{ left: "42%", animationDelay: "6.5s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00c7ff] to-transparent flow-line-v-contact"
            style={{ left: "48%", animationDelay: "7.5s" }}
          />
          <div
            className="absolute w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00a3ff] to-transparent flow-line-v-contact"
            style={{ left: "54%", animationDelay: "8.5s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00ffaa] to-transparent flow-line-v-contact"
            style={{ left: "60%", animationDelay: "2s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-line-v-contact"
            style={{ left: "66%", animationDelay: "3s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-line-v-contact"
            style={{ left: "72%", animationDelay: "4s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-line-v-contact"
            style={{ left: "78%", animationDelay: "5s" }}
          />
          <div
            className="absolute w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-line-v-contact"
            style={{ left: "84%", animationDelay: "6s" }}
          />
          <div
            className="absolute w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-line-v-contact"
            style={{ left: "90%", animationDelay: "7s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00d9ff] to-transparent flow-line-v-contact"
            style={{ left: "96%", animationDelay: "8s" }}
          />

       
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent flow-diagonal-contact"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute w-0.5 h-24 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent flow-diagonal-contact"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute w-0.5 h-30 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent flow-diagonal-contact"
            style={{ animationDelay: "5s" }}
          />
          <div
            className="absolute w-0.5 h-26 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent flow-diagonal-contact"
            style={{ animationDelay: "7s" }}
          />
          <div
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-[#00b3ff] to-transparent flow-diagonal-contact"
            style={{ animationDelay: "9s" }}
          />
          <div
            className="absolute w-0.5 h-28 bg-gradient-to-b from-transparent via-[#00d9ff] to-transparent flow-diagonal-contact"
            style={{ animationDelay: "11s" }}
          />

         
          <div
            className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent flow-pulse-contact"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute h-0.5 w-28 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent flow-pulse-contact"
            style={{ animationDelay: "6s" }}
          />
          <div
            className="absolute h-0.5 w-26 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent flow-pulse-contact"
            style={{ animationDelay: "10s" }}
          />
          <div
            className="absolute h-0.5 w-30 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent flow-pulse-contact"
            style={{ animationDelay: "14s" }}
          />
        </div>

       
        <div className="absolute inset-0 opacity-78">
          <div
            className="absolute w-2 h-2 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/70 animate-pulse"
            style={{ top: "8%", left: "6%" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/70 animate-pulse"
            style={{ top: "15%", left: "12%", animationDelay: "0.2s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/70 animate-pulse"
            style={{ top: "22%", left: "18%", animationDelay: "0.4s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00e6ff] rounded-full shadow-lg shadow-[#00e6ff]/70 animate-pulse"
            style={{ top: "29%", left: "24%", animationDelay: "0.6s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00b3ff] rounded-full shadow-lg shadow-[#00b3ff]/70 animate-pulse"
            style={{ top: "36%", left: "30%", animationDelay: "0.8s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00d9ff] rounded-full shadow-lg shadow-[#00d9ff]/70 animate-pulse"
            style={{ top: "43%", left: "36%", animationDelay: "1s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00f0ff] rounded-full shadow-lg shadow-[#00f0ff]/70 animate-pulse"
            style={{ top: "50%", left: "42%", animationDelay: "1.2s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00c7ff] rounded-full shadow-lg shadow-[#00c7ff]/70 animate-pulse"
            style={{ top: "57%", left: "48%", animationDelay: "1.4s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00a3ff] rounded-full shadow-lg shadow-[#00a3ff]/70 animate-pulse"
            style={{ top: "64%", left: "54%", animationDelay: "1.6s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ffaa] rounded-full shadow-lg shadow-[#00ffaa]/70 animate-pulse"
            style={{ top: "71%", left: "60%", animationDelay: "1.8s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/70 animate-pulse"
            style={{ top: "78%", left: "66%", animationDelay: "2s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/70 animate-pulse"
            style={{ top: "85%", left: "72%", animationDelay: "2.2s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/70 animate-pulse"
            style={{ top: "92%", left: "78%", animationDelay: "2.4s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00e6ff] rounded-full shadow-lg shadow-[#00e6ff]/70 animate-pulse"
            style={{ top: "15%", left: "84%", animationDelay: "2.6s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00b3ff] rounded-full shadow-lg shadow-[#00b3ff]/70 animate-pulse"
            style={{ top: "29%", left: "90%", animationDelay: "2.8s" }}
          />
          <div
            className="absolute w-2 h-2 bg-[#00d9ff] rounded-full shadow-lg shadow-[#00d9ff]/70 animate-pulse"
            style={{ top: "43%", left: "96%", animationDelay: "3s" }}
          />
        </div>

      
        <div className="absolute top-5 left-5 w-[450px] h-[450px] bg-[#00ffcc]/7 rounded-full blur-3xl pointer-events-none opacity-68" />
        <div className="absolute bottom-5 right-5 w-[420px] h-[420px] bg-[#00ccff]/7 rounded-full blur-3xl pointer-events-none opacity-68" />
        <div className="absolute top-1/4 right-1/3 w-[380px] h-[380px] bg-[#0099ff]/5 rounded-full blur-3xl pointer-events-none opacity-58" />
        <div className="absolute bottom-1/4 left-1/3 w-[440px] h-[440px] bg-[#00e6ff]/6 rounded-full blur-3xl pointer-events-none opacity-63" />
        <div className="absolute top-2/3 left-1/6 w-[400px] h-[400px] bg-[#00b3ff]/4 rounded-full blur-3xl pointer-events-none opacity-53" />
        <div className="absolute bottom-2/3 right-1/6 w-[460px] h-[460px] bg-[#00d9ff]/5 rounded-full blur-3xl pointer-events-none opacity-60" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00f0ff]/3 rounded-full blur-3xl pointer-events-none opacity-45" />

  
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-10"></div>
      </div>
    </>
  )
})

UltraOptimizedContactBackground.displayName = "UltraOptimizedContactBackground"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedinProfile: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [connectionStatus, setConnectionStatus] = useState<"checking" | "connected" | "disconnected">("checking")

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

 
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    (typeof window !== "undefined" && window.location.hostname === "localhost"
      ? "http://localhost:8080/api"
      : "https://portfolio-backend-plum-nine.vercel.app/api")

 
  const checkConnection = async () => {
    try {
      console.log("🔍 Checking backend connection...")
      console.log("Using API URL:", apiUrl)

      const response = await fetch(`${apiUrl}/health`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      if (response.ok) {
        const data = await response.json()
        console.log(`Connected to backend:`, data)
        setConnectionStatus("connected")
      } else {
        console.error(`Backend connection failed with status: ${response.status}`)
        setConnectionStatus("disconnected")
      }
    } catch (error) {
      console.error("Connection check failed:", error)
      setConnectionStatus("disconnected")
    }
  }

  useEffect(() => {
    checkConnection()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ type: "error", message: "Please fill in all required fields" })
      return
    }

    if (formData.message.trim().length < 10) {
      setSubmitStatus({ type: "error", message: "Message must be at least 10 characters long" })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const endpoint = `${apiUrl}/contact`

      console.log("Submitting to:", endpoint)
      console.log("Form data:", formData)

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()
      console.log("Response data:", data)

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedinProfile: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Submission failed",
        })
      }
    } catch (error: any) {
      console.error("Submission error:", error)
      setSubmitStatus({
        type: "error",
        message: "Unable to submit form. Please try again or contact me directly via email.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div ref={ref} className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <UltraOptimizedContactBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12 sm:space-y-16"
        >
    
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 sm:space-y-6 px-4"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ lineHeight: "1.1" }}
            >
              <span className="text-white">Get In </span>
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
                Touch
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#cccccc] max-w-4xl mx-auto leading-relaxed px-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life with
              cutting-edge technology and innovative solutions.
            </motion.p>

         
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center gap-2 text-sm flex-wrap mt-4"
            >
              {connectionStatus === "checking" && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Loader2 className="h-4 w-4 text-[#00ffcc]" />
                  </motion.div>
                  <span className="text-[#00ffcc]">Checking server...</span>
                </>
              )}
              {connectionStatus === "connected" && (
                <>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Wifi className="h-4 w-4 text-[#00ffcc]" />
                  </motion.div>
                  <span className="text-[#00ffcc]">Server connected</span>
                </>
              )}
              {connectionStatus === "disconnected" && (
                <>
                  <WifiOff className="h-4 w-4 text-red-400" />
                  <span className="text-red-400">Server disconnected</span>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={checkConnection}
                      className="ml-2 border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffcc] bg-[#111111] hover:shadow-lg hover:shadow-[#00ffcc]/20"
                    >
                      Retry
                    </Button>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 255, 204, 0.1)",
              }}
              className="w-full"
            >
              <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-500 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative z-10 px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl flex items-center gap-2 sm:gap-3 text-white flex-wrap">
                    <motion.div
                      className="p-2 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30 flex-shrink-0"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Send className="h-5 w-5 sm:h-6 sm:w-6 text-[#00ffcc]" />
                    </motion.div>
                    <span>Send Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 px-4 sm:px-6">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2 w-full">
                        <Label htmlFor="name" className="flex items-center gap-2 text-white text-sm">
                          <User className="h-4 w-4 text-[#00ffcc] flex-shrink-0" />
                          <span>Name *</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          disabled={isSubmitting}
                          className="bg-[#1a1a1a] border-[#333333] text-white placeholder:text-[#666666] focus:border-[#00ffcc] focus:ring-[#00ffcc]/20 transition-all duration-300 w-full"
                        />
                      </div>
                      <div className="space-y-2 w-full">
                        <Label htmlFor="email" className="flex items-center gap-2 text-white text-sm">
                          <Mail className="h-4 w-4 text-[#00ffcc] flex-shrink-0" />
                          <span>Email *</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          disabled={isSubmitting}
                          className="bg-[#1a1a1a] border-[#333333] text-white placeholder:text-[#666666] focus:border-[#00ffcc] focus:ring-[#00ffcc]/20 transition-all duration-300 w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2 w-full">
                        <Label htmlFor="phone" className="flex items-center gap-2 text-white text-sm">
                          <Phone className="h-4 w-4 text-[#00ffcc] flex-shrink-0" />
                          <span>Phone (Optional)</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          disabled={isSubmitting}
                          className="bg-[#1a1a1a] border-[#333333] text-white placeholder:text-[#666666] focus:border-[#00ffcc] focus:ring-[#00ffcc]/20 transition-all duration-300 w-full"
                        />
                      </div>
                      <div className="space-y-2 w-full">
                        <Label htmlFor="linkedinProfile" className="flex items-center gap-2 text-white text-sm">
                          <Linkedin className="h-4 w-4 text-[#00ffcc] flex-shrink-0" />
                          <span className="truncate">LinkedIn/Professional Profile</span>
                        </Label>
                        <Input
                          id="linkedinProfile"
                          name="linkedinProfile"
                          type="url"
                          value={formData.linkedinProfile}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          disabled={isSubmitting}
                          className="bg-[#1a1a1a] border-[#333333] text-white placeholder:text-[#666666] focus:border-[#00ffcc] focus:ring-[#00ffcc]/20 transition-all duration-300 w-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 w-full">
                      <Label htmlFor="message" className="flex items-center gap-2 text-white text-sm">
                        <MessageSquare className="h-4 w-4 text-[#00ffcc] flex-shrink-0" />
                        <span>Message *</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project requirements..."
                        rows={6}
                        required
                        disabled={isSubmitting}
                        className="resize-none bg-[#1a1a1a] border-[#333333] text-white placeholder:text-[#666666] focus:border-[#00ffcc] focus:ring-[#00ffcc]/20 transition-all duration-300 w-full"
                      />
                      <p className="text-xs text-[#999999]">{formData.message.length}/1000 characters</p>
                    </div>

                   
                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 sm:p-4 rounded-lg flex items-start gap-3 ${
                          submitStatus.type === "success"
                            ? "bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30"
                            : "bg-red-500/10 text-red-400 border border-red-500/30"
                        }`}
                      >
                        {submitStatus.type === "success" ? (
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        )}
                        <p className="text-sm leading-relaxed">{submitStatus.message}</p>
                      </motion.div>
                    )}

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                      <Button
                        type="submit"
                        className="w-full bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25 relative overflow-hidden"
                        size="lg"
                        disabled={isSubmitting || connectionStatus === "disconnected"}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                              <Loader2 className="h-4 w-4 mr-2" />
                            </motion.div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
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
                            <span className="relative z-10">Send Message</span>
                            <Send className="ml-2 h-4 w-4 relative z-10" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

         
            <div className="space-y-6 sm:space-y-8 w-full">
             
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 204, 255, 0.1)",
                }}
                className="w-full"
              >
                <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ccff]/30 transition-all duration-500 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff]/5 via-transparent to-[#0099ff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl text-white flex items-center gap-2 sm:gap-3 flex-wrap">
                      <motion.div
                        className="p-2 rounded-xl bg-[#00ccff]/20 border border-[#00ccff]/30 flex-shrink-0"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-[#00ccff]" />
                      </motion.div>
                      <span>Contact Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 relative z-10 px-4 sm:px-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        whileHover={{
                          x: 5,
                          boxShadow: `0 10px 25px ${info.color}15`,
                        }}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300 group"
                      >
                        <motion.div
                          className="p-2 sm:p-3 rounded-xl border flex-shrink-0"
                          style={{
                            backgroundColor: `${info.color}20`,
                            borderColor: `${info.color}30`,
                          }}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <info.icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: info.color }} />
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-white group-hover:text-[#00ffcc] transition-colors text-sm sm:text-base">
                            {info.title}
                          </p>
                          {info.href !== "#" ? (
                            <Link
                              href={info.href}
                              className="text-[#cccccc] hover:text-[#00ffcc] transition-colors text-sm break-all"
                            >
                              {info.value}
                            </Link>
                          ) : (
                            <p className="text-[#cccccc] text-sm">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

           
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 230, 255, 0.1)",
                }}
                className="w-full"
              >
                <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm hover:border-[#00e6ff]/30 transition-all duration-500 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00e6ff]/5 via-transparent to-[#00b3ff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl text-white flex items-center gap-2 sm:gap-3 flex-wrap">
                      <motion.div
                        className="p-2 rounded-xl bg-[#00e6ff]/20 border border-[#00e6ff]/30 flex-shrink-0"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Navigation className="h-5 w-5 sm:h-6 sm:w-6 text-[#00e6ff]" />
                      </motion.div>
                      <span>Find Me Here</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#333333] hover:border-[#00e6ff]/50 transition-colors duration-300">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99729.41206046149!2d77.93473275408252!3d30.32555080639766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e1!3m2!1sen!2sin!4v1750430015684!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full rounded-lg"
                        title="Dehradun, Uttarakhand Location"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                   
                  </CardContent>
                </Card>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 153, 255, 0.1)",
                }}
                className="w-full"
              >
                <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm hover:border-[#0099ff]/30 transition-all duration-500 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0099ff]/5 via-transparent to-[#00e6ff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl text-white flex items-center gap-2 sm:gap-3 flex-wrap">
                      <motion.div
                        className="p-2 rounded-xl bg-[#0099ff]/20 border border-[#0099ff]/30 flex-shrink-0"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-[#0099ff]" />
                      </motion.div>
                      <span>Connect With Me</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 relative z-10 px-4 sm:px-6">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        whileHover={{
                          x: 5,
                          boxShadow: `0 10px 25px ${social.color}15`,
                        }}
                        className="w-full"
                      >
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300 group w-full"
                        >
                          <motion.div
                            className="p-2 sm:p-3 rounded-xl border group-hover:scale-105 transition-transform flex-shrink-0"
                            style={{
                              backgroundColor: `${social.color}20`,
                              borderColor: `${social.color}30`,
                            }}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <social.icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: social.color }} />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-white group-hover:text-[#00ffcc] transition-colors text-sm sm:text-base">
                              {social.title}
                            </p>
                            <p className="text-[#999999] text-xs sm:text-sm truncate">{social.username}</p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-[#999999] group-hover:text-[#00ffcc] transition-colors flex-shrink-0" />
                        </Link>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

      
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 255, 204, 0.1)",
            }}
            className="w-full"
          >
            <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-500 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-6 sm:p-8 md:p-12 relative z-10 text-center space-y-4 sm:space-y-6">
                <motion.div
                  className="p-3 sm:p-4 rounded-xl bg-[#00ffcc]/10 border border-[#00ffcc]/30 w-fit mx-auto"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-[#00ffcc]" />
                </motion.div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Start Your Project?</h2>
                <p className="text-lg sm:text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
                  Whether you need a full-stack application, a stunning website, or technical consultation, I'm here to
                  help bring your vision to life with cutting-edge technology and innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25 group w-full sm:w-auto"
                    >
                      <Link href="mailto:hrideshsrivastavaa@outlook.com">
                        Email Me Directly
                        <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffcc] bg-[#111111] hover:shadow-lg hover:shadow-[#00ffcc]/20 w-full sm:w-auto"
                    >
                      <Link href="/projects">View My Work</Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
