"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, FolderOpen, Mail, Menu, X, Info, ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/contact", label: "Contact", icon: Mail },
]

const featuredProjects = [
  {
    id: 1,
    title: "Alumni Data System",
    description: "Comprehensive alumni management system built with Next.js",
    technologies: ["Next.js", "MongoDB", "RESTful APIs"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "AI Quiz Application",
    description: "Intelligent quiz application with automatic submission",
    technologies: ["React", "Node.js", "MongoDB", "AI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  // {
  //   id: 3,
  //   title: "AI Quiz Application",
  //   description: "Intelligent quiz application with automatic submission",
  //   technologies: ["React", "Node.js", "MongoDB", "AI"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: true,
  // },
  {
    id: 4,
    title: "AgroSmart AI",
    description: "AI-powered crop recommendation system using MERN stack",
    technologies: ["MERN", "Three.js", "Python", "Flask", "AI/ML"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const [isMobileProjectsModalOpen, setIsMobileProjectsModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#222222] shadow-2xl"
            : "bg-[#0a0a0a]/85 backdrop-blur-md border-b border-[#222222]/60"
        }`}
      >
        {/* Optimized background effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Reduced star field */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
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

          {/* Single energy line */}
          <motion.div
            animate={{
              x: [0, 150, 0],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#111111] border border-[#333333] flex items-center justify-center shadow-lg relative overflow-hidden"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-bold text-lg relative z-10">H</span>

                    {/* Optimized orbital ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute inset-0 border border-[#00ffcc]/20 rounded-full"
                    />

                    {/* Reduced energy pulse */}
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.15, 0, 0.15],
                      }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute inset-0 bg-[#00ffcc]/8 rounded-full"
                    />
                  </motion.div>

                  {/* Single satellite dot */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-1 -right-1 w-2 h-2 bg-[#00ffcc] rounded-full shadow-lg shadow-[#00ffcc]/50"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">Hridayesh</span>
                  <span className="text-xs text-[#999999] -mt-1">Full-Stack Developer</span>
                </div>
              </Link>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-[#cccccc] hover:text-white transition-all duration-300 group rounded-lg"
                  >
                    <span className="relative z-10">{item.label}</span>

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-[#111111] rounded-lg opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00ffcc] via-[#00e6ff] to-[#00ffcc] rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}

                    {/* Hover underline for non-active tabs */}
                    {!isActive(item.href) && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ffcc]/60 scale-x-0 origin-center group-hover:scale-x-100 rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Projects Info Button */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="relative"
                onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                onMouseLeave={() => setIsProjectsDropdownOpen(false)}
              >
                <button className="relative p-2 text-[#cccccc] hover:text-white transition-all duration-300 group rounded-lg">
                  <Info className="w-5 h-5 relative z-10" />

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-[#111111] rounded-lg opacity-0 group-hover:opacity-100"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>

                {/* Projects Dropdown */}
                <AnimatePresence>
                  {isProjectsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-80 bg-[#111111] border border-[#222222] rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden"
                    >
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <FolderOpen className="w-4 h-4 text-[#00ffcc]" />
                          Featured Projects
                        </h3>
                        <div className="space-y-3">
                          {featuredProjects.map((project, projectIndex) => (
                            <motion.div
                              key={project.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: projectIndex * 0.1 }}
                              className="group p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border border-transparent hover:border-[#00ffcc]/20"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="text-sm font-medium text-white group-hover:text-[#00ffcc] transition-colors">
                                  {project.title}
                                </h4>
                                <div className="flex gap-1">
                                  <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    className="p-1 text-[#999999] hover:text-[#00ffcc] transition-colors"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                  </Link>
                                  <Link
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="p-1 text-[#999999] hover:text-[#00ffcc] transition-colors"
                                  >
                                    <Github className="w-3 h-3" />
                                  </Link>
                                </div>
                              </div>
                              <p className="text-xs text-[#999999] mb-2 line-clamp-2">{project.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="text-xs px-2 py-1 bg-[#00ffcc]/10 text-[#00ffcc] rounded-full border border-[#00ffcc]/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies.length > 3 && (
                                  <span className="text-xs px-2 py-1 bg-[#00ffcc]/10 text-[#00ffcc] rounded-full border border-[#00ffcc]/20">
                                    +{project.technologies.length - 3}
                                  </span>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#222222]">
                          <Link
                            href="/projects"
                            className="block text-center text-sm text-[#00ffcc] hover:text-white transition-colors font-medium"
                          >
                            View All Projects →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#cccccc] hover:text-white transition-colors rounded-lg hover:bg-[#111111]"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-[#111111] border-l border-[#222222] shadow-2xl"
            >
              <div className="flex flex-col h-full pt-16 px-6">
                <nav className="flex-1 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 relative ${
                          isActive(item.href)
                            ? "text-white bg-[#1a1a1a] border-l-2 border-[#00ffcc]"
                            : "text-[#cccccc] hover:text-white hover:bg-[#1a1a1a]"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                        {isActive(item.href) && (
                          <motion.div
                            className="absolute right-2 w-2 h-2 bg-[#00ffcc] rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Featured Projects Button */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.08 }}
                  >
                    <button
                      onClick={() => {
                        setIsMobileProjectsModalOpen(true)
                      }}
                      className="flex items-center w-full space-x-3 px-4 py-3 rounded-lg transition-all duration-300 relative text-[#cccccc] hover:text-white hover:bg-[#1a1a1a]"
                    >
                      <Info className="w-5 h-5" />
                      <span className="font-medium">Featured Projects</span>
                    </button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Projects Full-Screen Modal - Compact Version */}
      <AnimatePresence>
        {isMobileProjectsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0a0a0a] backdrop-blur-xl" />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-0 bg-[#111111] flex flex-col"
            >
              {/* Modal Header - Fixed height */}
              <div className="flex items-center justify-between p-3 border-b border-[#222222] bg-[#111111] flex-shrink-0">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMobileProjectsModalOpen(false)}
                    className="p-2 text-[#cccccc] hover:text-white transition-colors rounded-lg hover:bg-[#1a1a1a]"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-[#00ffcc]" />
                    Featured Projects
                  </h2>
                </div>
                <button
                  onClick={() => setIsMobileProjectsModalOpen(false)}
                  className="p-2 text-[#cccccc] hover:text-white transition-colors rounded-lg hover:bg-[#1a1a1a]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content - Scrollable with compact cards */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-3 space-y-3">
                  {featuredProjects.map((project, projectIndex) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: projectIndex * 0.1 }}
                      className="group p-3 rounded-lg bg-[#1a1a1a] border border-[#222222] hover:border-[#00ffcc]/30 transition-all duration-300"
                    >
                      {/* Compact header with title and buttons */}
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-semibold text-white group-hover:text-[#00ffcc] transition-colors flex-1 pr-2">
                          {project.title}
                        </h3>
                        <div className="flex gap-1 flex-shrink-0">
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            className="p-1.5 text-[#999999] hover:text-[#00ffcc] transition-colors bg-[#222222] rounded-md hover:bg-[#333333]"
                            onClick={() => setIsMobileProjectsModalOpen(false)}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            className="p-1.5 text-[#999999] hover:text-[#00ffcc] transition-colors bg-[#222222] rounded-md hover:bg-[#333333]"
                            onClick={() => setIsMobileProjectsModalOpen(false)}
                          >
                            <Github className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* Compact description */}
                      <p className="text-sm text-[#cccccc] mb-3 leading-relaxed line-clamp-2">{project.description}</p>

                      {/* Compact technology tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-[#00ffcc]/10 text-[#00ffcc] rounded-md border border-[#00ffcc]/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2 py-1 bg-[#00ffcc]/10 text-[#00ffcc] rounded-md border border-[#00ffcc]/20">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* View All Projects Button - Fixed at bottom with proper spacing */}
                <div className="p-3 bg-[#111111] border-t border-[#222222] mt-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: featuredProjects.length * 0.1 }}
                  >
                    <Link
                      href="/projects"
                      onClick={() => {
                        setIsMobileProjectsModalOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                      className="block w-full text-center py-3 px-6 bg-[#00ffcc] hover:bg-[#00e6b8] text-[#0a0a0a] font-semibold rounded-lg transition-colors shadow-lg shadow-[#00ffcc]/25"
                    >
                      View All Projects →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
