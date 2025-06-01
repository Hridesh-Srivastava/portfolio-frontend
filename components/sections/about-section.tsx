"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Globe, Smartphone, Brain } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const skills = [
  {
    icon: Globe,
    name: "Frontend Development",
    techs: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Database,
    name: "Backend Development",
    techs: ["Node.js", "Express", "MongoDB"],
  },
  {
    icon: Code,
    name: "Programming Languages",
    techs: ["JavaScript", "Python", "HTML/CSS"],
  },
  {
    icon: Smartphone,
    name: "Tools & Technologies",
    techs: ["Git", "VS Code", "Postman"],
  },
]

const stats = [
  { number: "4+", label: "Projects Completed" },
  { number: "2+", label: "Years Learning" },
  { number: "8+", label: "Technologies" },
  { number: "1", label: "Patent Filed" },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] relative overflow-hidden"
    >
      {/* Flowing Lines Background for About */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* About Section Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-50">
          <defs>
            <linearGradient id="aboutFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
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

            <linearGradient id="aboutFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
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

            <linearGradient id="aboutFlow3" x1="0%" y1="0%" x2="0%" y2="100%">
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

            <filter id="aboutGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Horizontal Flowing Lines */}
          <motion.line
            x1="0"
            y1="150"
            x2="1920"
            y2="150"
            stroke="url(#aboutFlow1)"
            strokeWidth="2.5"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="350"
            x2="1920"
            y2="350"
            stroke="url(#aboutFlow2)"
            strokeWidth="2.2"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="0"
            y1="550"
            x2="1920"
            y2="550"
            stroke="url(#aboutFlow1)"
            strokeWidth="2.8"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
          />

          {/* Vertical Flowing Lines */}
          <motion.line
            x1="200"
            y1="0"
            x2="200"
            y2="800"
            stroke="url(#aboutFlow3)"
            strokeWidth="2.3"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="800"
            y1="0"
            x2="800"
            y2="800"
            stroke="url(#aboutFlow3)"
            strokeWidth="2.6"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
          />

          <motion.line
            x1="1400"
            y1="0"
            x2="1400"
            y2="800"
            stroke="url(#aboutFlow3)"
            strokeWidth="2.4"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3.5, delay: 2.5, ease: "easeInOut" }}
          />

          {/* Circuit Nodes with Pulsing */}
          <motion.circle
            cx="200"
            cy="150"
            r="5"
            fill="#00ffcc"
            filter="url(#aboutGlow)"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="800"
            cy="350"
            r="6"
            fill="#00ccff"
            filter="url(#aboutGlow)"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 3.2 }}
          >
            <animate
              attributeName="fill"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="6;8;6" dur="3.5s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            cx="1400"
            cy="550"
            r="5.5"
            fill="#0099ff"
            filter="url(#aboutGlow)"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 3.4 }}
          >
            <animate
              attributeName="fill"
              values="#0099ff;#00ffcc;#00e6ff;#00ccff;#0099ff"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="5.5;7.5;5.5" dur="4s" repeatCount="indefinite" />
          </motion.circle>

          {/* Flowing Particles */}
          <motion.circle
            r="4"
            fill="#00ffcc"
            filter="url(#aboutGlow)"
            animate={{
              cx: [0, 200, 800, 1400, 1920],
              cy: [150, 150, 350, 550, 550],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <animate
              attributeName="fill"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
          </motion.circle>

          <motion.circle
            r="3.5"
            fill="#00ccff"
            filter="url(#aboutGlow)"
            animate={{
              cx: [1920, 1400, 800, 200, 0],
              cy: [350, 350, 150, 550, 150],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 3,
            }}
          >
            <animate
              attributeName="fill"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="r" values="3.5;5.5;3.5" dur="1.8s" repeatCount="indefinite" />
          </motion.circle>

          {/* Circuit Patterns */}
          <motion.rect
            x="180"
            y="130"
            width="40"
            height="40"
            fill="none"
            stroke="#00ffcc"
            strokeWidth="2"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 4 }}
          >
            <animate
              attributeName="stroke"
              values="#00ffcc;#00e6ff;#0099ff;#00ccff;#00ffcc"
              dur="3s"
              repeatCount="indefinite"
            />
          </motion.rect>

          <motion.rect
            x="780"
            y="330"
            width="40"
            height="40"
            fill="none"
            stroke="#00ccff"
            strokeWidth="2"
            filter="url(#aboutGlow)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 4.2 }}
          >
            <animate
              attributeName="stroke"
              values="#00ccff;#0099ff;#00ffcc;#00e6ff;#00ccff"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </motion.rect>
        </svg>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-8"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
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
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl text-[#cccccc] leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I'm a passionate full-stack developer currently pursuing BCA at Swami Rama Himalayan University. With
                hands-on experience in MERN stack and modern web technologies, I love creating innovative solutions that
                solve real-world problems.
              </motion.p>

              <motion.p
                className="text-[#999999] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From building comprehensive alumni management systems to developing AI-powered applications, I'm
                constantly learning and pushing the boundaries of what's possible with code. Let's create something
                extraordinary together!
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(0, 255, 204, 0.15)",
                  }}
                  className="text-center p-3 sm:p-4 bg-[#111111] rounded-xl border border-[#222222] relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold text-[#00ffcc] mb-1">{stat.number}</div>
                  <div className="text-xs text-[#999999] font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                asChild
                size="lg"
                className="group bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25"
              >
                <Link href="/about">
                  <Brain className="mr-2 h-5 w-5" />
                  <span>Learn More About Me</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 255, 204, 0.1)",
                }}
                className="group"
              >
                <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full transition-all duration-500 hover:border-[#00ffcc]/30 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 text-center space-y-4">
                    <motion.div
                      className="p-3 rounded-xl bg-[#00ffcc]/10 w-fit mx-auto border border-[#00ffcc]/20"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <skill.icon className="h-6 w-6 text-[#00ffcc]" />
                    </motion.div>

                    <h3 className="font-bold text-lg text-white">{skill.name}</h3>

                    <div className="space-y-2">
                      {skill.techs.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs font-medium border border-[#333333] text-[#cccccc] bg-[#1a1a1a] hover:border-[#00ffcc]/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
