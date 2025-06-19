"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRightFromSquare, Code2, Database, Globe, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef, useCallback, useMemo } from "react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const starField = useMemo(() => {
    return [...Array(300)].map((_, i) => (
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
    ))
  }, [])

  const techStackItems = useMemo(
    () => [
      { icon: Code2, text: "React & Next.js" },
      { icon: Database, text: "Node.js & MongoDB" },
      { icon: Globe, text: "Full-Stack" },
      { icon: Zap, text: "Performance" },
    ],
    [],
  )

  const statsItems = useMemo(
    () => [
      { value: "4+", label: "Projects" },
      { value: "2+", label: "Years" },
      { value: "8+", label: "Technologies" },
    ],
    [],
  )

  const scrollAnimation = useCallback(
    () => ({
      y: [0, 8, 0],
      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
    }),
    [],
  )

  const scrollDotAnimation = useCallback(
    () => ({
      y: [0, 12, 0],
      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
    }),
    [],
  )

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20 pb-16"
    >
      {/* Enhanced Flowing Lines Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {/* Enhanced Star field */}
        {starField}

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

          {/* Circuit Nodes/Junctions with Pulsing */}
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

          {/* Enhanced Flowing Data Particles */}
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

          {/* Circuit Patterns with Flow */}
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4 lg:space-y-6">
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
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight"
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
                className="text-base sm:text-lg lg:text-xl text-[#cccccc] leading-relaxed max-w-2xl"
              >
                Full-stack developer passionate about creating exceptional digital experiences. Specializing in modern
                web technologies and scalable solutions that make a real impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {techStackItems.map((item, index) => (
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
                    className="flex items-center space-x-2 px-3 py-2 bg-[#111111] rounded-full border border-[#222222] relative overflow-hidden backdrop-blur-sm"
                  >
                    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#00ffcc]" />
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
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
          </motion.div>

          {/* Profile section - Fixed responsive design and positioning */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center space-y-6 lg:space-y-8 order-1 lg:order-2 px-4 sm:px-8 lg:px-0"
          >
            {/* Profile Picture Container - Fixed sizing and spacing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative flex items-center justify-center w-full max-w-sm lg:max-w-md xl:max-w-lg"
            >
              {/* Enhanced orbital rings - Fixed responsive positioning */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 w-full h-full border border-[#00ffcc]/30 rounded-full"
                style={{
                  width: "calc(100% + 32px)",
                  height: "calc(100% + 32px)",
                  left: "-16px",
                  top: "-16px",
                }}
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 w-full h-full border border-[#00ccff]/25 rounded-full"
                style={{
                  width: "calc(100% + 48px)",
                  height: "calc(100% + 48px)",
                  left: "-24px",
                  top: "-24px",
                }}
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 w-full h-full border border-[#0099ff]/20 rounded-full"
                style={{
                  width: "calc(100% + 64px)",
                  height: "calc(100% + 64px)",
                  left: "-32px",
                  top: "-32px",
                }}
              />

              {/* Profile picture - Fixed responsive sizing */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden bg-gradient-to-br from-[#111111] to-[#1a1a1a] shadow-2xl border-2 border-[#00ffcc]/40 relative z-10">
                <Image
                  src="/pfp-my.jpeg"
                  alt="Hridayesh Srivastava - Full Stack Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                  loading="eager"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
              </div>

              {/* Enhanced satellite elements - Fixed responsive positioning */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute w-4 h-4 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/60"
                style={{
                  top: "8px",
                  right: "8px",
                }}
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute w-3 h-3 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/60"
                style={{
                  bottom: "8px",
                  left: "8px",
                }}
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute w-2 h-2 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/60"
                style={{
                  top: "16px",
                  right: "32px",
                }}
              />

              {/* Status badge - Fixed positioning to prevent cutoff */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bg-[#111111] border-2 border-[#00ffcc]/50 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-xl flex items-center space-x-2 backdrop-blur-sm"
                style={{
                  bottom: "-12px",
                  right: "16px",
                  transform: "translateX(0)",
                }}
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
                <span className="text-xs sm:text-sm font-medium text-[#cccccc] whitespace-nowrap">Available</span>
              </motion.div>
            </motion.div>

            {/* Stats - Fixed responsive grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center w-full max-w-sm lg:max-w-md"
            >
              {statsItems.map((stat, index) => (
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
                  className="space-y-1 sm:space-y-2 p-3 sm:p-4 bg-[#111111] rounded-xl border border-[#222222] relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00ffcc]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-[#999999] font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

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
                <Link href="/hridayesh-srivastava.pdf" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRightFromSquare className="h-4 w-4 mr-2" />
                  View Resume
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
              animate={scrollAnimation}
              className="w-6 h-10 border-2 border-[#333333] rounded-full flex justify-center relative"
            >
              <motion.div
                animate={scrollDotAnimation}
                className="w-1 h-3 bg-[#00ffcc] rounded-full mt-2 shadow-sm shadow-[#00ffcc]/50"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
