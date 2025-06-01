"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, ArrowUp, MapPin, Phone, MailPlus } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    href: "https://github.com/Hridesh-Srivastava",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/HridayeshSrivastava",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:hrideshsrivastava@outlook.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://vercel.com/hridesh-srivastava",
    icon: ExternalLink,
    label: "Vercel",
  },
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export function Footer() {
   const currentYear = () => new Date().getFullYear();

  return (
    <footer className="relative bg-[#0f0f0f] border-t border-[#222222] overflow-hidden">
      {/* Enhanced Flowing Lines Background for Footer */}
      <div className="absolute inset-0">
        {/* Enhanced Star field */}
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.1, 0.7, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
            }}
          />
        ))}

        {/* Footer Flowing Lines System */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <defs>
            <linearGradient id="footerFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#00ffcc">
                <animate
                  attributeName="stop-color"
                  values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="#00ccff">
                <animate
                  attributeName="stop-color"
                  values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
                  dur="3s"
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

            <linearGradient id="footerFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#0099ff">
                <animate
                  attributeName="stop-color"
                  values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="#00e6ff">
                <animate
                  attributeName="stop-color"
                  values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-100 0;100 0;-100 0"
                dur="5s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <linearGradient id="footerFlow3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#00ccff">
                <animate
                  attributeName="stop-color"
                  values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="#00ffcc">
                <animate
                  attributeName="stop-color"
                  values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="0 -100;0 100;0 -100"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <filter id="footerGlow">
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
            y1="80"
            x2="1920"
            y2="80"
            stroke="url(#footerFlow1)"
            strokeWidth="2.8"
            filter="url(#footerGlow)"
            animate={{
              y1: [80, 100, 80],
              y2: [80, 100, 80],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="200"
            x2="1920"
            y2="200"
            stroke="url(#footerFlow2)"
            strokeWidth="2.5"
            filter="url(#footerGlow)"
            animate={{
              y1: [200, 220, 200],
              y2: [200, 220, 200],
            }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />

          <motion.line
            x1="0"
            y1="320"
            x2="1920"
            y2="320"
            stroke="url(#footerFlow1)"
            strokeWidth="3"
            filter="url(#footerGlow)"
            animate={{
              y1: [320, 340, 320],
              y2: [320, 340, 320],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          />

          {/* Vertical Flowing Lines */}
          <motion.line
            x1="250"
            y1="0"
            x2="250"
            y2="400"
            stroke="url(#footerFlow3)"
            strokeWidth="2.6"
            filter="url(#footerGlow)"
            animate={{
              x1: [250, 270, 250],
              x2: [250, 270, 250],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          />

          <motion.line
            x1="600"
            y1="0"
            x2="600"
            y2="400"
            stroke="url(#footerFlow3)"
            strokeWidth="2.8"
            filter="url(#footerGlow)"
            animate={{
              x1: [600, 620, 600],
              x2: [600, 620, 600],
            }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
          />

          <motion.line
            x1="1000"
            y1="0"
            x2="1000"
            y2="400"
            stroke="url(#footerFlow3)"
            strokeWidth="2.4"
            filter="url(#footerGlow)"
            animate={{
              x1: [1000, 1020, 1000],
              x2: [1000, 1020, 1000],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.5 }}
          />

          <motion.line
            x1="1400"
            y1="0"
            x2="1400"
            y2="400"
            stroke="url(#footerFlow3)"
            strokeWidth="2.7"
            filter="url(#footerGlow)"
            animate={{
              x1: [1400, 1420, 1400],
              x2: [1400, 1420, 1400],
            }}
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3.5 }}
          />

          {/* Enhanced Circuit Nodes - Increased quantity and faster animations */}
          <motion.circle
            cx="250"
            cy="80"
            r="6"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            animate={{
              r: [6, 8, 6],
              cx: [250, 270, 250],
              cy: [80, 100, 80],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="3s"
              repeatCount="indefinite"
            />
          </motion.circle>

          <motion.circle
            cx="600"
            cy="200"
            r="7"
            fill="#00ccff"
            filter="url(#strongGlow)"
            animate={{
              r: [7, 9, 7],
              cx: [600, 620, 600],
              cy: [200, 220, 200],
            }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          >
            <animate
              attributeName="fill"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </motion.circle>

          <motion.circle
            cx="1000"
            cy="320"
            r="6.5"
            fill="#0099ff"
            filter="url(#strongGlow)"
            animate={{
              r: [6.5, 8.5, 6.5],
              cx: [1000, 1020, 1000],
              cy: [320, 340, 320],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          >
            <animate
              attributeName="fill"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="4s"
              repeatCount="indefinite"
            />
          </motion.circle>

          <motion.circle
            cx="1400"
            cy="280"
            r="5.8"
            fill="#00e6ff"
            filter="url(#strongGlow)"
            animate={{
              r: [5.8, 7.8, 5.8],
              cx: [1400, 1420, 1400],
              cy: [280, 300, 280],
            }}
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
          >
            <animate
              attributeName="fill"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="3.2s"
              repeatCount="indefinite"
            />
          </motion.circle>

          {/* Additional Circuit Nodes */}
          <motion.circle
            cx="450"
            cy="150"
            r="5.5"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            animate={{
              r: [5.5, 7.5, 5.5],
              cx: [450, 470, 450],
              cy: [150, 170, 150],
            }}
            transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </motion.circle>

          <motion.circle
            cx="800"
            cy="120"
            r="6.2"
            fill="#00ccff"
            filter="url(#strongGlow)"
            animate={{
              r: [6.2, 8.2, 6.2],
              cx: [800, 820, 800],
              cy: [120, 140, 120],
            }}
            transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.8 }}
          >
            <animate
              attributeName="fill"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3.3s"
              repeatCount="indefinite"
            />
          </motion.circle>

          <motion.circle
            cx="1200"
            cy="180"
            r="5.3"
            fill="#0099ff"
            filter="url(#strongGlow)"
            animate={{
              r: [5.3, 7.3, 5.3],
              cx: [1200, 1220, 1200],
              cy: [180, 200, 180],
            }}
            transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.8 }}
          >
            <animate
              attributeName="fill"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="3.7s"
              repeatCount="indefinite"
            />
          </motion.circle>

          <motion.circle
            cx="350"
            cy="280"
            r="6.8"
            fill="#00e6ff"
            filter="url(#strongGlow)"
            animate={{
              r: [6.8, 8.8, 6.8],
              cx: [350, 370, 350],
              cy: [280, 300, 280],
            }}
            transition={{ duration: 6.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3.8 }}
          >
            <animate
              attributeName="fill"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.9s"
              repeatCount="indefinite"
            />
          </motion.circle>

          {/* Enhanced Flowing Data Particles - Faster and more particles */}
          <motion.circle
            r="4.5"
            fill="#00ffcc"
            filter="url(#strongGlow)"
            animate={{
              cx: [0, 250, 600, 1000, 1400, 1920],
              cy: [80, 80, 200, 320, 280, 280],
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
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="4.5;6.5;4.5" dur="1.2s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            r="4"
            fill="#00ccff"
            filter="url(#strongGlow)"
            animate={{
              cx: [1920, 1400, 1000, 600, 250, 0],
              cy: [200, 200, 320, 200, 80, 80],
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
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="4;6;4" dur="1.4s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            r="3.8"
            fill="#0099ff"
            filter="url(#strongGlow)"
            animate={{
              cx: [0, 450, 800, 1200, 1920],
              cy: [150, 150, 120, 180, 180],
            }}
            transition={{
              duration: 5.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 1,
            }}
          >
            <animate
              attributeName="fill"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="3.2s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="3.8;5.8;3.8" dur="1.3s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            r="4.2"
            fill="#00e6ff"
            filter="url(#strongGlow)"
            animate={{
              cx: [1920, 1200, 800, 450, 350, 0],
              cy: [120, 120, 180, 150, 280, 280],
            }}
            transition={{
              duration: 6.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 1.5,
            }}
          >
            <animate
              attributeName="fill"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.7s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="4.2;6.2;4.2" dur="1.5s" repeatCount="indefinite" />
          </motion.circle>

          {/* Circuit Patterns with Enhanced Flow - More patterns and faster animations */}
          <motion.rect
            x="230"
            y="60"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2.5"
            filter="url(#footerGlow)"
            animate={{
              x: [230, 250, 230],
              y: [60, 80, 60],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
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
            y="180"
            width="40"
            height="40"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2.5"
            filter="url(#footerGlow)"
            animate={{
              x: [580, 600, 580],
              y: [180, 200, 180],
            }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
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
            y="300"
            width="40"
            height="40"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2.5"
            filter="url(#footerGlow)"
            animate={{
              x: [980, 1000, 980],
              y: [300, 320, 300],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          >
            <animate
              attributeName="stroke"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="4s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1380"
            y="260"
            width="40"
            height="40"
            fill="none"
            stroke="#00e6ff"
            strokeWidth="2.5"
            filter="url(#footerGlow)"
            animate={{
              x: [1380, 1400, 1380],
              y: [260, 280, 260],
            }}
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
          >
            <animate
              attributeName="stroke"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="3.2s"
              repeatCount="indefinite"
            />
          </motion.rect>

          {/* Additional Circuit Patterns */}
          <motion.rect
            x="430"
            y="130"
            width="35"
            height="35"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#footerGlow)"
            animate={{
              x: [430, 450, 430],
              y: [130, 150, 130],
            }}
            transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
          >
            <animate
              attributeName="stroke"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="780"
            y="100"
            width="45"
            height="45"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#footerGlow)"
            animate={{
              x: [780, 800, 780],
              y: [100, 120, 100],
            }}
            transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.8 }}
          >
            <animate
              attributeName="stroke"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3.3s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="1180"
            y="160"
            width="38"
            height="38"
            fill="none"
            stroke="#0099ff"
            strokeWidth="2"
            filter="url(#footerGlow)"
            animate={{
              x: [1180, 1200, 1180],
              y: [160, 180, 160],
            }}
            transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.8 }}
          >
            <animate
              attributeName="stroke"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="3.7s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="330"
            y="260"
            width="42"
            height="42"
            fill="none"
            stroke="#00e6ff"
            strokeWidth="2"
            filter="url(#footerGlow)"
            animate={{
              x: [330, 350, 330],
              y: [260, 280, 260],
            }}
            transition={{ duration: 6.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3.8 }}
          >
            <animate
              attributeName="stroke"
              values="#00e6ff;#00ccff;#0099ff;#00ffcc;#00e6ff"
              dur="2.9s"
              repeatCount="indefinite"
            />
          </motion.rect>

          {/* Enhanced Flowing Connection Lines */}
          <motion.line
            x1="270"
            y1="80"
            x2="580"
            y2="200"
            stroke="url(#footerFlow1)"
            strokeWidth="1.8"
            filter="url(#footerGlow)"
            animate={{
              x1: [270, 290, 270],
              y1: [80, 100, 80],
              x2: [580, 600, 580],
              y2: [200, 220, 200],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <motion.line
            x1="620"
            y1="200"
            x2="980"
            y2="320"
            stroke="url(#footerFlow2)"
            strokeWidth="1.8"
            filter="url(#footerGlow)"
            animate={{
              x1: [620, 640, 620],
              y1: [200, 220, 200],
              x2: [980, 1000, 980],
              y2: [320, 340, 320],
            }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />

          <motion.line
            x1="1020"
            y1="320"
            x2="1380"
            y2="280"
            stroke="url(#footerFlow1)"
            strokeWidth="1.8"
            filter="url(#footerGlow)"
            animate={{
              x1: [1020, 1040, 1020],
              y1: [320, 340, 320],
              x2: [1380, 1400, 1380],
              y2: [280, 300, 280],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          />

          <motion.line
            x1="450"
            y1="150"
            x2="780"
            y2="120"
            stroke="url(#footerFlow2)"
            strokeWidth="1.5"
            filter="url(#footerGlow)"
            animate={{
              x1: [450, 470, 450],
              y1: [150, 170, 150],
              x2: [780, 800, 780],
              y2: [120, 140, 120],
            }}
            transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
          />

          <motion.line
            x1="820"
            y1="120"
            x2="1180"
            y2="180"
            stroke="url(#footerFlow1)"
            strokeWidth="1.5"
            filter="url(#footerGlow)"
            animate={{
              x1: [820, 840, 820],
              y1: [120, 140, 120],
              x2: [1180, 1200, 1180],
              y2: [180, 200, 180],
            }}
            transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.8 }}
          />
        </svg>

        {/* Enhanced Nebula Effects */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-80 h-80 bg-[#00ffcc]/8 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-[#00ccff]/8 rounded-full blur-3xl"
        />

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f] to-[#0a0a0a]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-8"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-12 h-12 rounded-full bg-[#111111] border border-[#333333] flex items-center justify-center relative overflow-hidden"
                  whileHover={{ rotate: 360, scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-white font-bold text-lg relative z-10">H</span>

                  {/* Orbital ring */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 border border-[#00ffcc]/30 rounded-full"
                  />

                  {/* Energy pulse */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute inset-0 bg-[#00ffcc]/10 rounded-full"
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">Hridayesh Srivastava</h3>
                  <p className="text-sm text-[#999999]">Full-Stack Web Developer</p>
                </div>
              </div>

              <p className="text-[#cccccc] leading-relaxed max-w-md">
                Passionate about creating innovative digital solutions that make a difference. Let's build something
                extraordinary together and transform ideas into reality.
              </p>

              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#1a1a1a] rounded-xl hover:bg-[#222222] transition-all duration-300 text-[#999999] hover:text-white group relative overflow-hidden border border-[#333333] hover:border-[#00ffcc]/30"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="block text-[#999999] hover:text-white transition-colors duration-300 relative group"
                    >
                      {link.label}
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffcc] group-hover:w-full"
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-4">
                <motion.div className="flex items-center space-x-3 text-[#999999]" whileHover={{ x: 5 }}>
                  <MapPin className="w-5 h-5 text-[#00ffcc]" />
                  <span>Dehradun, India</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3 text-[#999999]" whileHover={{ x: 5 }}>
                  <Phone className="w-5 h-5 text-[#00ccff]" />
                  <a href="tel:+919634883306">+919634883306</a>
                </motion.div>
                <motion.div className="flex items-center space-x-3 text-[#999999]" whileHover={{ x: 5 }}>
                  <MailPlus className="w-5 h-5 text-[#0099ff]" />
                  <a href="mailto:hrideshsrivastavaa@outlook.com">hrideshsrivastavaa@outlook.com</a>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[#222222] py-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-[#999999]">
             <span>© {currentYear()} Hridayesh Srivastava. All Rights Reserved.</span>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-[#1a1a1a] rounded-xl hover:bg-[#222222] transition-all duration-300 group relative overflow-hidden border border-[#333333] hover:border-[#00ffcc]/30"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-[#999999] group-hover:text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
