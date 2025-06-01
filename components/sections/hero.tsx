"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, ExternalLink, Download, Code2, Database, Globe, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Enhanced Flowing Lines Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
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

        {/* Flowing Lines System */}
        <svg className="absolute inset-0 w-full h-full opacity-70">
          <defs>
            {/* Flowing Gradients with Animation */}
            <linearGradient id="flowingGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
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

            <linearGradient id="flowingGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
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

            <linearGradient id="flowingGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
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

            <filter id="flowGlow">
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
            y1="200"
            x2="1920"
            y2="200"
            stroke="url(#flowingGradient1)"
            strokeWidth="3"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="400"
            x2="1920"
            y2="400"
            stroke="url(#flowingGradient2)"
            strokeWidth="2.5"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="600"
            x2="1920"
            y2="600"
            stroke="url(#flowingGradient1)"
            strokeWidth="2.8"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="800"
            x2="1920"
            y2="800"
            stroke="url(#flowingGradient2)"
            strokeWidth="2.2"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.5, delay: 1.5, ease: "easeInOut" }}
          />

          {/* Vertical Flowing Lines */}
          <motion.line
            x1="300"
            y1="0"
            x2="300"
            y2="1080"
            stroke="url(#flowingGradient3)"
            strokeWidth="2.5"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="600"
            y1="0"
            x2="600"
            y2="1080"
            stroke="url(#flowingGradient3)"
            strokeWidth="2.8"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 2.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="1200"
            y1="0"
            x2="1200"
            y2="1080"
            stroke="url(#flowingGradient3)"
            strokeWidth="2.3"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 3, ease: "easeInOut" }}
          />

          <motion.line
            x1="1500"
            y1="0"
            x2="1500"
            y2="1080"
            stroke="url(#flowingGradient3)"
            strokeWidth="2.6"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.5, delay: 3.5, ease: "easeInOut" }}
          />

          {/* Circuit Nodes/Junctions with Pulsing - Increased quantity and faster animations */}
          <motion.circle
            cx="300"
            cy="200"
            r="6"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
            animate={{ scale: 1, opacity: 1 }}
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
            cx="1200"
            cy="600"
            r="6.5"
            fill="#0099ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
            cx="1500"
            cy="800"
            r="5.5"
            fill="#00e6ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
            cy="300"
            r="5.8"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
            cx="900"
            cy="500"
            r="6.2"
            fill="#00ccff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
            cx="750"
            cy="250"
            r="5.3"
            fill="#0099ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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

          <motion.circle
            cx="1350"
            cy="450"
            r="6.8"
            fill="#00e6ff"
            filter="url(#strongGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            <animate
              attributeName="fill"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.6s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6.8;8.8;6.8" dur="3.1s" repeatCount="indefinite" />
          </motion.circle>

          {/* Enhanced Flowing Data Particles - Faster animations and more particles */}
          <motion.circle
            r="4"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            animate={{
              cx: [0, 300, 600, 1200, 1500, 1920],
              cy: [200, 200, 400, 600, 800, 800],
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
              cx: [1920, 1500, 1200, 600, 300, 0],
              cy: [400, 400, 600, 400, 200, 200],
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
              cx: [300, 300, 600, 600, 1200, 1200, 1500, 1500],
              cy: [0, 200, 200, 400, 400, 600, 600, 800],
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

          {/* Additional Flowing Data Particles */}
          <motion.circle
            r="4.2"
            fill="#00e6ff"
            filter="url(#strongGlow)"
            animate={{
              cx: [0, 450, 900, 1350, 1920],
              cy: [300, 300, 500, 450, 450],
            }}
            transition={{
              duration: 5.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 0.2,
            }}
          >
            <animate
              attributeName="fill"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.2s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="4.2;6.2;4.2" dur="1.3s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            r="3.8"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            animate={{
              cx: [1920, 1350, 900, 450, 750, 0],
              cy: [250, 250, 500, 300, 250, 250],
            }}
            transition={{
              duration: 6.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 0.7,
            }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.7s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="3.8;5.8;3.8" dur="1.4s" repeatCount="indefinite" />
          </motion.circle>

          {/* Circuit Patterns with Flow - Increased quantity and reduced delays */}
          <motion.rect
            x="280"
            y="180"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
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
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
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
            x="1180"
            y="580"
            width="40"
            height="40"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
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
            x="1480"
            y="780"
            width="40"
            height="40"
            fill="none"
            stroke="#00e6ff"
            strokeWidth="2"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
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
            y="280"
            width="35"
            height="35"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
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
            x="880"
            y="480"
            width="45"
            height="45"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
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
            x="730"
            y="230"
            width="38"
            height="38"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 2.7 }}
          >
            <animate
              attributeName="stroke"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="2.7s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1330"
            y="430"
            width="42"
            height="42"
            fill="none"
            stroke="#00e6ff"
            strokeWidth="2"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 2.9 }}
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
            x1="320"
            y1="200"
            x2="580"
            y2="400"
            stroke="url(#flowingGradient1)"
            strokeWidth="1.5"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 6 }}
          />

          <motion.line
            x1="620"
            y1="400"
            x2="1180"
            y2="600"
            stroke="url(#flowingGradient2)"
            strokeWidth="1.5"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 6.5 }}
          />

          <motion.line
            x1="1220"
            y1="600"
            x2="1480"
            y2="800"
            stroke="url(#flowingGradient1)"
            strokeWidth="1.5"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 7 }}
          />

          <motion.line
            x1="450"
            y1="300"
            x2="730"
            y2="250"
            stroke="url(#flowingGradient2)"
            strokeWidth="1.5"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 7.5 }}
          />

          <motion.line
            x1="770"
            y1="250"
            x2="1330"
            y2="450"
            stroke="url(#flowingGradient1)"
            strokeWidth="1.5"
            filter="url(#flowGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 8 }}
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

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-10"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(0, 255, 204, 0.8)",
                      "0 0 0 15px rgba(0, 255, 204, 0)",
                      "0 0 0 0 rgba(0, 255, 204, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-3 h-3 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/50"
                />
                <span className="text-lg font-medium text-[#cccccc]">Available for new projects</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Building the</span>
                <br />
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
                  future of web
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-[#cccccc] leading-relaxed max-w-2xl"
              >
                Full-stack developer passionate about creating exceptional digital experiences. Specializing in modern
                web technologies and scalable solutions that make a real impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: Code2, text: "React & Next.js" },
                  { icon: Database, text: "Node.js & MongoDB" },
                  { icon: Globe, text: "Full-Stack" },
                  { icon: Zap, text: "Performance" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 10px 25px rgba(0, 255, 204, 0.2)",
                    }}
                    className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#111111] rounded-full border border-[#222222] relative overflow-hidden backdrop-blur-sm"
                  >
                    <item.icon className="w-4 h-4 text-[#00ffcc]" />
                    <span className="text-xs sm:text-sm font-medium text-[#cccccc]">{item.text}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium relative overflow-hidden shadow-lg shadow-[#00ffcc]/25"
                >
                  <Link href="/projects" className="flex items-center">
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
                    <span className="relative z-10">View my work</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
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
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center space-x-6"
            >
              {[
                { href: "https://github.com/Hridesh-Srivastava", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/HridayeshSrivastava", icon: Linkedin, label: "LinkedIn" },
                { href: "https://vercel.com/hridesh-srivastava", icon: ExternalLink, label: "Vercel" },
              ].map((social) => (
                <motion.div key={social.href} whileHover={{ scale: 1.1, y: -2 }}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-[#999999] hover:text-white transition-all duration-300 relative group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#111111] rounded-lg opacity-0 group-hover:opacity-100 border border-[#222222] group-hover:border-[#00ffcc]/30"
                      whileHover={{ scale: 1.1 }}
                    />
                    <social.icon className="h-6 w-6 relative z-10" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center space-y-8 order-1 lg:order-2"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              {/* Enhanced orbital rings */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-8 border border-[#00ffcc]/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-12 border border-[#00ccff]/25 rounded-full"
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-16 border border-[#0099ff]/20 rounded-full"
              />

              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-[#111111] to-[#1a1a1a] shadow-2xl border-2 border-[#00ffcc]/40 relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Hridayesh Srivastava - Full Stack Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
              </div>

              {/* Enhanced satellite elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-4 h-4 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/60"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-3 h-3 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/60"
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute top-0 right-8 w-2 h-2 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/60"
              />

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-[#111111] border-2 border-[#00ffcc]/50 px-4 py-2 rounded-full shadow-xl flex items-center space-x-2 backdrop-blur-sm"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(0, 255, 204, 0.8)",
                      "0 0 0 10px rgba(0, 255, 204, 0)",
                      "0 0 0 0 rgba(0, 255, 204, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 bg-[#00ffcc] rounded-full"
                />
                <span className="text-sm font-medium text-[#cccccc]">Available</span>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 text-center w-full max-w-md"
            >
              {[
                { value: "4+", label: "Projects" },
                { value: "2+", label: "Years" },
                { value: "8+", label: "Technologies" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(0, 255, 204, 0.15)",
                  }}
                  className="space-y-2 p-3 sm:p-4 bg-[#111111] rounded-xl border border-[#222222] relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#00ffcc]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-[#999999] font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* Resume download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                className="border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffcc] bg-[#111111] hover:shadow-lg hover:shadow-[#00ffcc]/20"
              >
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-[#999999] font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-[#333333] rounded-full flex justify-center relative"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-[#00ffcc] rounded-full mt-2 shadow-sm shadow-[#00ffcc]/50"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
