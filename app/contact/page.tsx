"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
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
} from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hrideshsrivastava@outlook.com",
    href: "mailto:hrideshsrivastava@outlook.com",
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
    href: "https://linkedin.com/in/HridayeshSrivastava",
    username: "HridayeshSrivastava",
    color: "#00ccff",
  },
  {
    icon: ExternalLink,
    title: "Vercel",
    href: "https://vercel.com/hridesh-srivastava",
    username: "hridesh-srivastava",
    color: "#0099ff",
  },
]

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
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Get API URL from environment or use default
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    (typeof window !== "undefined" && window.location.hostname === "localhost"
      ? "http://localhost:8080/api"
      : "https://portfolio-backend-plum-nine.vercel.app/api")

  // Check backend connection
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
        console.log(`✅ Connected to backend:`, data)
        setConnectionStatus("connected")
      } else {
        console.error(`❌ Backend connection failed with status: ${response.status}`)
        setConnectionStatus("disconnected")
      }
    } catch (error) {
      console.error("❌ Connection check failed:", error)
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

      console.log("🚀 Submitting to:", endpoint)
      console.log("📋 Form data:", formData)

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("📥 Response status:", response.status)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()
      console.log("📥 Response data:", data)

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
      console.error("❌ Submission error:", error)
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

        {/* Contact Page Flowing Lines System */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <defs>
            {/* Enhanced Flowing Gradients */}
            <linearGradient id="contactFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
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

            <linearGradient id="contactFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
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

            <linearGradient id="contactFlow3" x1="0%" y1="0%" x2="0%" y2="100%">
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

            <filter id="contactGlow">
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
            stroke="url(#contactFlow1)"
            strokeWidth="3"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="400"
            x2="1920"
            y2="400"
            stroke="url(#contactFlow2)"
            strokeWidth="2.5"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="650"
            x2="1920"
            y2="650"
            stroke="url(#contactFlow1)"
            strokeWidth="2.8"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="900"
            x2="1920"
            y2="900"
            stroke="url(#contactFlow2)"
            strokeWidth="2.2"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 1.5, ease: "easeInOut" }}
          />

          {/* Vertical Flowing Lines */}
          <motion.line
            x1="300"
            y1="0"
            x2="300"
            y2="1200"
            stroke="url(#contactFlow3)"
            strokeWidth="2.5"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="600"
            y1="0"
            x2="600"
            y2="1200"
            stroke="url(#contactFlow3)"
            strokeWidth="2.8"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2.5, delay: 2.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="960"
            y1="0"
            x2="960"
            y2="1200"
            stroke="url(#contactFlow3)"
            strokeWidth="2.3"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3, delay: 3, ease: "easeInOut" }}
          />

          <motion.line
            x1="1320"
            y1="0"
            x2="1320"
            y2="1200"
            stroke="url(#contactFlow3)"
            strokeWidth="2.6"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 3.5, ease: "easeInOut" }}
          />

          {/* Enhanced Circuit Nodes */}
          <motion.circle
            cx="300"
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
            cx="960"
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
            cx="1320"
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

          {/* Additional Circuit Nodes */}
          <motion.circle
            cx="450"
            cy="275"
            r="5.8"
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
            <animate attributeName="r" values="5.8;7.8;5.8" dur="2.8s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="780"
            cy="525"
            r="6.2"
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
            <animate attributeName="r" values="6.2;8.2;6.2" dur="3s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="1140"
            cy="775"
            r="5.3"
            fill="#0099ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <animate
              attributeName="fill"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="2.7s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5.3;7.3;5.3" dur="3.3s" repeatCount="indefinite" />
          </motion.circle>

          {/* Enhanced Flowing Data Particles */}
          <motion.circle
            r="4"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            animate={{
              cx: [0, 300, 600, 960, 1320, 1920],
              cy: [150, 150, 400, 650, 900, 900],
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
              cx: [1920, 1320, 960, 600, 300, 0],
              cy: [400, 400, 650, 400, 150, 150],
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
              cx: [300, 300, 450, 600, 600, 780, 960, 960, 1140, 1320],
              cy: [0, 150, 275, 400, 400, 525, 650, 650, 775, 900],
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
            x="280"
            y="130"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#contactGlow)"
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
            filter="url(#contactGlow)"
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
            x="940"
            y="630"
            width="40"
            height="40"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#contactGlow)"
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
            x="1300"
            y="880"
            width="40"
            height="40"
            fill="none"
            stroke="#00e6ff"
            strokeWidth="2"
            filter="url(#contactGlow)"
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

          {/* Additional Circuit Patterns */}
          <motion.rect
            x="430"
            y="255"
            width="35"
            height="35"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#contactGlow)"
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
            x="760"
            y="505"
            width="45"
            height="45"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#contactGlow)"
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

          <motion.rect
            x="1120"
            y="755"
            width="38"
            height="38"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.7 }}
          >
            <animate
              attributeName="stroke"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="2.7s"
              repeatCount="indefinite"
            />
          </motion.rect>

          {/* Additional Flowing Connection Lines */}
          <motion.line
            x1="320"
            y1="150"
            x2="580"
            y2="400"
            stroke="url(#contactFlow1)"
            strokeWidth="1.5"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 2.9 }}
          />

          <motion.line
            x1="620"
            y1="400"
            x2="940"
            y2="650"
            stroke="url(#contactFlow2)"
            strokeWidth="1.5"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.1 }}
          />

          <motion.line
            x1="980"
            y1="650"
            x2="1300"
            y2="900"
            stroke="url(#contactFlow1)"
            strokeWidth="1.5"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.3 }}
          />

          <motion.line
            x1="450"
            y1="275"
            x2="760"
            y2="525"
            stroke="url(#contactFlow1)"
            strokeWidth="1.5"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.5 }}
          />

          <motion.line
            x1="800"
            y1="525"
            x2="1120"
            y2="775"
            stroke="url(#contactFlow2)"
            strokeWidth="1.5"
            filter="url(#contactGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 3.7 }}
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
          className="space-y-16"
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
              <span className="text-white">Get In </span>
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
                Touch
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-[#cccccc] max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life with
              cutting-edge technology and innovative solutions.
            </motion.p>

            {/* Connection Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center gap-2 text-sm"
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 255, 204, 0.1)",
              }}
            >
              <Card className="bg-[#111111] border border-[#222222] shadow-2xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ffcc]/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center gap-3 text-white">
                    <motion.div
                      className="p-2 rounded-xl bg-[#00ffcc]/20 border border-[#00ffcc]/30"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Send className="h-6 w-6 text-[#00ffcc]" />
                    </motion.div>
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2 text-white">
                          <User className="h-4 w-4 text-[#00ffcc]" />
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          disabled={isSubmitting}
                          className="bg-[#1a1a1a] border-[#333333] text-white placeholder:text-[#666666] focus:border-[#00ffcc] focus:ring-[#00ffcc]/20 transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2 text-white">
                          <Mail className="h-4 w-4 text-[#00ffcc]" />
                          Email *
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
                          className="bg-[#1a1a1a] border-[#333333] text-white placeholder:text-[#666666] focus:border-[#00ffcc] focus:ring-[#00ffcc]/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2 text-white">
                          <Phone className="h-4 w-4 text-[#00ffcc]" />
                          Phone (Optional)
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          disabled={isSubmitting}
                          className="bg-[#1a1a1a] border-[#333333] text-white placeholder:text-[#666666] focus:border-[#00ffcc] focus:ring-[#00ffcc]/20 transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedinProfile" className="flex items-center gap-2 text-white">
                          <Linkedin className="h-4 w-4 text-[#00ffcc]" />
                          LinkedIn Profile
                        </Label>
                        <Input
                          id="linkedinProfile"
                          name="linkedinProfile"
                          type="url"
                          value={formData.linkedinProfile}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          disabled={isSubmitting}
                          className="bg-[#1a1a1a] border-[#333333] text-white placeholder:text-[#666666] focus:border-[#00ffcc] focus:ring-[#00ffcc]/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2 text-white">
                        <MessageSquare className="h-4 w-4 text-[#00ffcc]" />
                        Message *
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
                        className="resize-none bg-[#1a1a1a] border-[#333333] text-white placeholder:text-[#666666] focus:border-[#00ffcc] focus:ring-[#00ffcc]/20 transition-all duration-300"
                      />
                      <p className="text-xs text-[#999999]">{formData.message.length}/1000 characters</p>
                    </div>

                    {/* Status Message */}
                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg flex items-center gap-3 ${
                          submitStatus.type === "success"
                            ? "bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30"
                            : "bg-red-500/10 text-red-400 border border-red-500/30"
                        }`}
                      >
                        {submitStatus.type === "success" ? (
                          <CheckCircle className="h-5 w-5 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        )}
                        <p className="text-sm">{submitStatus.message}</p>
                      </motion.div>
                    )}

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
                            Sending...
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

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 204, 255, 0.1)",
                }}
              >
                <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm hover:border-[#00ccff]/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ccff]/5 via-transparent to-[#0099ff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl text-white flex items-center gap-3">
                      <motion.div
                        className="p-2 rounded-xl bg-[#00ccff]/20 border border-[#00ccff]/30"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Globe className="h-6 w-6 text-[#00ccff]" />
                      </motion.div>
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
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
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300 group"
                      >
                        <motion.div
                          className="p-3 rounded-xl border"
                          style={{
                            backgroundColor: `${info.color}20`,
                            borderColor: `${info.color}30`,
                          }}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <info.icon className="h-5 w-5" style={{ color: info.color }} />
                        </motion.div>
                        <div>
                          <p className="font-medium text-white group-hover:text-[#00ffcc] transition-colors">
                            {info.title}
                          </p>
                          {info.href !== "#" ? (
                            <Link href={info.href} className="text-[#cccccc] hover:text-[#00ffcc] transition-colors">
                              {info.value}
                            </Link>
                          ) : (
                            <p className="text-[#cccccc]">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 153, 255, 0.1)",
                }}
              >
                <Card className="bg-[#111111] border border-[#222222] shadow-xl overflow-hidden relative backdrop-blur-sm hover:border-[#0099ff]/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0099ff]/5 via-transparent to-[#00e6ff]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl text-white flex items-center gap-3">
                      <motion.div
                        className="p-2 rounded-xl bg-[#0099ff]/20 border border-[#0099ff]/30"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Zap className="h-6 w-6 text-[#0099ff]" />
                      </motion.div>
                      Connect With Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 relative z-10">
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
                      >
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#1a1a1a] transition-all duration-300 group"
                        >
                          <motion.div
                            className="p-3 rounded-xl border group-hover:scale-105 transition-transform"
                            style={{
                              backgroundColor: `${social.color}20`,
                              borderColor: `${social.color}30`,
                            }}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <social.icon className="h-5 w-5" style={{ color: social.color }} />
                          </motion.div>
                          <div className="flex-1">
                            <p className="font-medium text-white group-hover:text-[#00ffcc] transition-colors">
                              {social.title}
                            </p>
                            <p className="text-[#999999] text-sm">{social.username}</p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-[#999999] group-hover:text-[#00ffcc] transition-colors ml-auto" />
                        </Link>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Call to Action */}
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

              <CardContent className="p-8 sm:p-12 relative z-10 text-center space-y-6">
                <motion.div
                  className="p-4 rounded-xl bg-[#00ffcc]/10 border border-[#00ffcc]/30 w-fit mx-auto"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="h-10 w-10 text-[#00ffcc]" />
                </motion.div>

                <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
                <p className="text-xl text-[#cccccc] max-w-3xl mx-auto">
                  Whether you need a full-stack application, a stunning website, or technical consultation, I'm here to
                  help bring your vision to life with cutting-edge technology and innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25 group"
                    >
                      <Link href="mailto:hrideshsrivastava@outlook.com">
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
                      className="border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffcc] bg-[#111111] hover:shadow-lg hover:shadow-[#00ffcc]/20"
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
