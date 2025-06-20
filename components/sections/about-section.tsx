"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Globe, Smartphone, Brain } from "lucide-react"
import Link from "next/link"
import { useRef, memo } from "react"

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
    techs: ["JavaScript", "HTML/CSS"],
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


const EnhancedOptimizedAboutBackground = memo(() => {
  return (
    <div className="absolute inset-0">
      
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.8 + 0.5}px`,
              height: `${Math.random() * 1.8 + 0.5}px`,
              animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      
      <div className="absolute inset-0">
        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.2); }
          }
          @keyframes aboutShootingOrbit1 {
            0% { transform: translateX(-100px) translateY(0px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(180px) translateY(-50px); opacity: 0; }
          }
          @keyframes aboutShootingOrbit2 {
            0% { transform: translateX(-80px) translateY(20px); opacity: 0; }
            15% { opacity: 0.8; }
            85% { opacity: 0.8; }
            100% { transform: translateX(160px) translateY(-30px); opacity: 0; }
          }
          @keyframes aboutFlowH {
            0% { transform: translateX(-80px); opacity: 0; }
            50% { opacity: 0.4; }
            100% { transform: translateX(80px); opacity: 0; }
          }
          @keyframes aboutFlowV {
            0% { transform: translateY(-80px); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateY(80px); opacity: 0; }
          }
          .about-shooting-orbit-1 {
            animation: aboutShootingOrbit1 5s ease-in-out infinite;
          }
          .about-shooting-orbit-2 {
            animation: aboutShootingOrbit2 6s ease-in-out infinite;
          }
          .about-flow-h {
            animation: aboutFlowH 5s ease-in-out infinite;
          }
          .about-flow-v {
            animation: aboutFlowV 6s ease-in-out infinite;
          }
        `}</style>

     
        <div className="absolute top-6 left-0 w-3.5 h-3.5 bg-[#00ffcc] rounded-full about-shooting-orbit-1 shadow-lg shadow-[#00ffcc]/60" />
        <div
          className="absolute top-12 left-0 w-3 h-3 bg-[#00ccff] rounded-full about-shooting-orbit-2 shadow-lg shadow-[#00ccff]/60"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-8 left-0 w-2.5 h-2.5 bg-[#0099ff] rounded-full about-shooting-orbit-1 shadow-lg shadow-[#0099ff]/60"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-16 left-0 w-3 h-3 bg-[#00e6ff] rounded-full about-shooting-orbit-2 shadow-lg shadow-[#00e6ff]/60"
          style={{ animationDelay: "3s" }}
        />

      
        <div className="absolute top-24 left-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent about-flow-h" />
        <div
          className="absolute top-48 left-0 w-36 h-0.5 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent about-flow-h"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-24 left-0 w-38 h-0.5 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent about-flow-h"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-48 left-0 w-34 h-0.5 bg-gradient-to-r from-transparent via-[#00e6ff] to-transparent about-flow-h"
          style={{ animationDelay: "3s" }}
        />

     
        <div className="absolute top-0 left-24 w-0.5 h-40 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent about-flow-v" />
        <div
          className="absolute top-0 right-24 w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent about-flow-v"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-0 left-1/2 w-0.5 h-38 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent about-flow-v"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-0 right-1/3 w-0.5 h-34 bg-gradient-to-b from-transparent via-[#00e6ff] to-transparent about-flow-v"
          style={{ animationDelay: "4s" }}
        />
      </div>


      <div className="absolute inset-0">
        <div
          className="absolute w-3 h-3 border border-[#00ffcc]/35 rotate-45"
          style={{
            top: "20%",
            left: "15%",
            animation: "twinkle 3s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-2.5 h-2.5 bg-[#00ccff]/40 rounded-full"
          style={{
            top: "60%",
            right: "20%",
            animation: "twinkle 4s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-4 h-0.5 bg-gradient-to-r from-[#00ffcc] to-transparent"
          style={{
            top: "40%",
            right: "30%",
            animation: "twinkle 2s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        />
        <div
          className="absolute w-2 h-2 border border-[#0099ff]/30 rounded-full"
          style={{
            bottom: "30%",
            left: "25%",
            animation: "twinkle 2.5s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute w-2.5 h-2.5 border border-[#00e6ff]/25"
          style={{
            top: "70%",
            left: "70%",
            animation: "twinkle 3.5s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-[#00ffcc]/50 rounded-full"
          style={{
            bottom: "60%",
            right: "60%",
            animation: "twinkle 2.8s ease-in-out infinite",
            animationDelay: "2.5s",
          }}
        />
      </div>

    
      <div className="absolute top-16 left-16 w-80 h-80 bg-[#00ffcc]/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-16 right-16 w-72 h-72 bg-[#00ccff]/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#0099ff]/4 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />

     
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-6"></div>
    </div>
  )
})

EnhancedOptimizedAboutBackground.displayName = "EnhancedOptimizedAboutBackground"


const SkillCard = memo(({ skill, index, isInView }: { skill: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ scale: 1.02, y: -5 }}
    className="group h-full"
  >
    <Card className="bg-[#111111] border border-[#222222] shadow-xl h-full transition-all duration-500 hover:border-[#00ffcc]/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-4 sm:p-6 text-center space-y-4 relative z-10">
        <motion.div
          className="p-3 rounded-xl bg-[#00ffcc]/10 w-fit mx-auto border border-[#00ffcc]/20"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <skill.icon className="h-6 w-6 text-[#00ffcc]" />
        </motion.div>

        <h3 className="font-bold text-lg text-white group-hover:text-[#00ffcc] transition-colors">{skill.name}</h3>

        <div className="space-y-2">
          {skill.techs.map((tech: string, techIndex: number) => (
            <motion.div
              key={techIndex}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.15 + techIndex * 0.1 }}
            >
              <Badge
                variant="outline"
                className="text-xs font-medium border border-[#333333] text-[#cccccc] bg-[#1a1a1a] hover:border-[#00ffcc]/50 hover:text-[#00ffcc] transition-colors"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
))

SkillCard.displayName = "SkillCard"


const StatCard = memo(({ stat, index, isInView }: { stat: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
    whileHover={{ scale: 1.05, y: -2 }}
    className="text-center p-3 sm:p-4 bg-[#111111] rounded-xl border border-[#222222] relative overflow-hidden backdrop-blur-sm group"
  >
    <div className="text-xl sm:text-2xl font-bold text-[#00ffcc] mb-1">{stat.number}</div>
    <div className="text-xs text-[#999999] font-medium">{stat.label}</div>
    <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
))

StatCard.displayName = "StatCard"

export const AboutSection = memo(() => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] relative overflow-hidden"
    >
      <EnhancedOptimizedAboutBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
         
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

           
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} isInView={isInView} />
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
                className="group bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-medium shadow-lg shadow-[#00ffcc]/25 relative overflow-hidden"
              >
                <Link href="/about">
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
                  <Brain className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Learn More About Me</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

     
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} isInView={isInView} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
