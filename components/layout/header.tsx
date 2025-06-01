"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, FolderOpen, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/contact", label: "Contact", icon: Mail },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
        {/* Optimized background effects - reduced quantity */}
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

                    {/* Active indicator - Enhanced */}
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
            </nav>

            {/* Mobile menu button only */}
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
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
