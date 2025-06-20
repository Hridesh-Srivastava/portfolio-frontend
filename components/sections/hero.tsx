"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRightFromSquare, Code2, Database, Globe, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef, memo } from "react"

const EnhancedOptimizedHeroBackground = memo(() => {
  return (
    <div className="absolute inset-0">

      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.3); }
          }
          @keyframes shootingOrbit1 {
            0% { transform: translateX(-120px) translateY(0px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(220px) translateY(-60px); opacity: 0; }
          }
          @keyframes shootingOrbit2 {
            0% { transform: translateX(-100px) translateY(30px); opacity: 0; }
            15% { opacity: 0.8; }
            85% { opacity: 0.8; }
            100% { transform: translateX(200px) translateY(-40px); opacity: 0; }
          }
          @keyframes shootingOrbit3 {
            0% { transform: translateX(-80px) translateY(-20px); opacity: 0; }
            20% { opacity: 0.6; }
            80% { opacity: 0.6; }
            100% { transform: translateX(180px) translateY(50px); opacity: 0; }
          }
          @keyframes heroFlowH {
            0% { transform: translateX(-100px); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateX(100px); opacity: 0; }
          }
          @keyframes heroFlowV {
            0% { transform: translateY(-100px); opacity: 0; }
            50% { opacity: 0.4; }
            100% { transform: translateY(100px); opacity: 0; }
          }
          .shooting-orbit-1 {
            animation: shootingOrbit1 5s ease-in-out infinite;
          }
          .shooting-orbit-2 {
            animation: shootingOrbit2 6s ease-in-out infinite;
          }
          .shooting-orbit-3 {
            animation: shootingOrbit3 7s ease-in-out infinite;
          }
          .hero-flow-h {
            animation: heroFlowH 4s ease-in-out infinite;
          }
          .hero-flow-v {
            animation: heroFlowV 5s ease-in-out infinite;
          }
        `}</style>


        <div className="absolute top-8 left-0 w-4 h-4 bg-[#00ffcc] rounded-full shooting-orbit-1 shadow-lg shadow-[#00ffcc]/60" />
        <div
          className="absolute top-16 left-0 w-3 h-3 bg-[#00ccff] rounded-full shooting-orbit-2 shadow-lg shadow-[#00ccff]/60"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-24 left-0 w-3.5 h-3.5 bg-[#0099ff] rounded-full shooting-orbit-3 shadow-lg shadow-[#0099ff]/60"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-12 left-0 w-3 h-3 bg-[#00e6ff] rounded-full shooting-orbit-1 shadow-lg shadow-[#00e6ff]/60"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-20 left-0 w-2.5 h-2.5 bg-[#00ffcc] rounded-full shooting-orbit-2 shadow-lg shadow-[#00ffcc]/60"
          style={{ animationDelay: "4s" }}
        />

        <div className="absolute top-32 left-0 w-48 h-0.5 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent hero-flow-h" />
        <div
          className="absolute top-64 left-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent hero-flow-h"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-0 w-44 h-0.5 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent hero-flow-h"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-64 left-0 w-36 h-0.5 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent hero-flow-h"
          style={{ animationDelay: "3s" }}
        />

        <div className="absolute top-0 left-32 w-0.5 h-48 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent hero-flow-v" />
        <div
          className="absolute top-0 right-32 w-0.5 h-40 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent hero-flow-v"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-0 left-1/2 w-0.5 h-44 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent hero-flow-v"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-0 right-1/4 w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent hero-flow-v"
          style={{ animationDelay: "4.5s" }}
        />
      </div>

      <div className="absolute inset-0">
        <div
          className="absolute w-4 h-4 border border-[#00ffcc]/40 rotate-45"
          style={{
            top: "20%",
            left: "15%",
            animation: "twinkle 3s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-3 h-3 bg-[#00ccff]/50 rounded-full"
          style={{
            top: "60%",
            right: "20%",
            animation: "twinkle 4s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-5 h-0.5 bg-gradient-to-r from-[#00ffcc] to-transparent"
          style={{
            top: "40%",
            right: "30%",
            animation: "twinkle 2s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        />
        <div
          className="absolute w-2 h-2 border border-[#0099ff]/35 rounded-full"
          style={{
            bottom: "30%",
            left: "25%",
            animation: "twinkle 2.5s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute w-3 h-3 border border-[#00e6ff]/30"
          style={{
            top: "70%",
            left: "70%",
            animation: "twinkle 3.5s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-[#00ffcc]/60 rounded-full"
          style={{
            bottom: "60%",
            right: "60%",
            animation: "twinkle 2.8s ease-in-out infinite",
            animationDelay: "2.5s",
          }}
        />
      </div>

      {/* Enhanced nebula effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ffcc]/6 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-[#00ccff]/6 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0099ff]/4 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-8"></div>
    </div>
  )
})

EnhancedOptimizedHeroBackground.displayName = "EnhancedOptimizedHeroBackground"

// Memoized components
const TechStackItem = memo(({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center space-x-2 px-3 py-2 bg-[#111111] rounded-full border border-[#222222] relative overflow-hidden backdrop-blur-sm"
  >
    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#00ffcc]" />
    <span className="text-xs sm:text-sm font-medium text-[#cccccc]">{item.text}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
))

TechStackItem.displayName = "TechStackItem"

const StatsItem = memo(({ stat, index }: { stat: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
    whileHover={{ scale: 1.05, y: -2 }}
    className="space-y-1 sm:space-y-2 p-3 sm:p-4 bg-[#111111] rounded-xl border border-[#222222] relative overflow-hidden backdrop-blur-sm"
  >
    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00ffcc]">{stat.value}</div>
    <div className="text-xs sm:text-sm text-[#999999] font-medium">{stat.label}</div>
    <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
))

StatsItem.displayName = "StatsItem"

export const HeroSection = memo(() => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const techStackItems = [
    { icon: Code2, text: "React & Next.js" },
    { icon: Database, text: "Node.js & MongoDB" },
    { icon: Globe, text: "Full-Stack" },
    { icon: Zap, text: "Performance" },
  ]

  const statsItems = [
    { value: "4+", label: "Projects" },
    { value: "2+", label: "Years" },
    { value: "8+", label: "Technologies" },
  ]

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20 pb-16"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <EnhancedOptimizedHeroBackground />
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
                  <TechStackItem key={item.text} item={item} index={index} />
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
{/* ************************************************************************************************************************************** */}
 
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center space-y-6 lg:space-y-8 order-1 lg:order-2 px-4 sm:px-8 lg:px-0"
          >
      
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative flex items-center justify-center w-full max-w-sm lg:max-w-md xl:max-w-lg"
            >

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
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 w-full h-full border border-[#0099ff]/20 rounded-full"
                style={{
                  width: "calc(100% + 64px)",
                  height: "calc(100% + 64px)",
                  left: "-32px",
                  top: "-32px",
                }}
              />


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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
              </div>


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
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute w-3 h-3 bg-[#00ccff] rounded-full shadow-lg shadow-[#00ccff]/60"
                style={{
                  bottom: "8px",
                  left: "8px",
                }}
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute w-2.5 h-2.5 bg-[#0099ff] rounded-full shadow-lg shadow-[#0099ff]/60"
                style={{
                  top: "16px",
                  right: "32px",
                }}
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute w-2 h-2 bg-[#00e6ff] rounded-full shadow-lg shadow-[#00e6ff]/60"
                style={{
                  bottom: "16px",
                  right: "24px",
                }}
              />


              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bg-[#111111] border-2 border-[#00ffcc]/50 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-xl flex items-center space-x-2 backdrop-blur-sm"
                style={{
                  bottom: "-12px",
                  right: "16px",
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

     
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center w-full max-w-sm lg:max-w-md"
            >
              {statsItems.map((stat, index) => (
                <StatsItem key={stat.label} stat={stat} index={index} />
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
                className="border-[#333333] text-[#cccccc] hover:text-white hover:border-[#00ffcc] bg-[#111111] hover:shadow-lg hover:shadow-[#00ffcc]/20 relative overflow-hidden"
              >
                <Link href="/Hridayesh-Srivastava.pdf" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    animate={{
                      x: [-50, 50],
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffcc]/10 to-transparent"
                  />
                  <ArrowUpRightFromSquare className="h-4 w-4 mr-2 relative z-10" />
                  <span className="relative z-10">View Resume</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

 
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
})

HeroSection.displayName = "HeroSection"
