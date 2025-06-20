"use client";

import { motion } from "framer-motion";
import { ArrowUp, MapPin, Phone, MailPlus } from "lucide-react";
import Link from "next/link";
import { memo, useCallback, useMemo } from "react";
import Image from "next/image";

const VercelIcon = memo(({ className }: { className?: string }) => (
  <svg
    data-testid="geist-icon"
    height="16"
    width="16"
    viewBox="0 0 16 16"
    style={{ color: "currentColor" }}
    className={className}
    strokeLinejoin="round"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1L16 15H0L8 1Z"
      fill="currentColor"
    />
  </svg>
));

const NpmIcon = memo(({ className }: { className?: string }) => (
  <Image
    src="/icons/npm.svg"
    alt="npm"
    width={20}
    height={20}
    className={className}
  />
));

const XIcon = memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
));

const GitHubIcon = memo(({ className }: { className?: string }) => (
  <Image
    src="/icons/github.svg"
    alt="GitHub"
    width={22}
    height={22}
    className={className}
  />
));

const LinkedInIcon = memo(({ className }: { className?: string }) => (
  <Image
    src="/icons/linkedin.svg"
    alt="LinkedIn"
    width={20}
    height={20}
    className={className}
  />
));


const socialLinks = [
  {
    href: "https://github.com/Hridesh-Srivastava",
    icon: GitHubIcon,
    label: "GitHub",
    hoverColor: "hover:text-gray-400",
    bgHover: "hover:bg-gray-900/20",
  },
  {
    href: "https://www.linkedin.com/in/hridayesh-srivastava-9575901bb/",
    icon: LinkedInIcon,
    label: "LinkedIn",
    hoverColor: "hover:text-blue-500",
    bgHover: "hover:bg-blue-500/10",
  },
  {
    href: "https://vercel.com/hridesh-srivastavas-projects",
    icon: VercelIcon,
    label: "Vercel",
    hoverColor: "hover:text-gray-300",
    bgHover: "hover:bg-gray-800/20",
  },
  {
    href: "https://www.npmjs.com/~hrideshhhh",
    icon: NpmIcon,
    label: "npm",
    hoverColor: "hover:text-red-600",
    bgHover: "hover:bg-red-600/10",
  },
  {
    href: "https://x.com/Hrideshhhh",
    icon: XIcon,
    label: "X",
    hoverColor: "hover:text-gray-400",
    bgHover: "hover:bg-gray-900/20",
  },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];


const UltraOptimizedFooterBackground = memo(() => {

  const stars = useMemo(
    () =>
      [...Array(35)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <div className="absolute inset-0">
      
      <div
        className="absolute inset-0"
        style={{ contain: "layout style paint" }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
              willChange: "opacity, transform",
            }}
          />
        ))}
      </div>

    
      <div className="absolute inset-0">
        <style jsx>{`
          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.2);
            }
          }
          @keyframes footerShootingOrbit1 {
            0% {
              transform: translateX(-100px) translateY(0px);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateX(180px) translateY(-50px);
              opacity: 0;
            }
          }
          @keyframes footerShootingOrbit2 {
            0% {
              transform: translateX(-80px) translateY(20px);
              opacity: 0;
            }
            15% {
              opacity: 0.8;
            }
            85% {
              opacity: 0.8;
            }
            100% {
              transform: translateX(160px) translateY(-30px);
              opacity: 0;
            }
          }
          @keyframes footerFlowH {
            0% {
              transform: translateX(-100px);
              opacity: 0;
            }
            50% {
              opacity: 0.4;
            }
            100% {
              transform: translateX(100px);
              opacity: 0;
            }
          }
          @keyframes footerFlowV {
            0% {
              transform: translateY(-100px);
              opacity: 0;
            }
            50% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(100px);
              opacity: 0;
            }
          }
          .footer-shooting-orbit-1 {
            animation: footerShootingOrbit1 8s ease-in-out infinite;
          }
          .footer-shooting-orbit-2 {
            animation: footerShootingOrbit2 9s ease-in-out infinite;
          }
          .footer-flow-h {
            animation: footerFlowH 8s ease-in-out infinite;
          }
          .footer-flow-v {
            animation: footerFlowV 9s ease-in-out infinite;
          }
        `}</style>

       
        <div className="absolute top-6 left-0 w-3.5 h-3.5 bg-[#00ffcc] rounded-full footer-shooting-orbit-1 shadow-lg shadow-[#00ffcc]/60" />
        <div
          className="absolute top-12 left-0 w-3 h-3 bg-[#00ccff] rounded-full footer-shooting-orbit-2 shadow-lg shadow-[#00ccff]/60"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-8 left-0 w-2.5 h-2.5 bg-[#0099ff] rounded-full footer-shooting-orbit-1 shadow-lg shadow-[#0099ff]/60"
          style={{ animationDelay: "1s" }}
        />

        
        <div className="absolute top-20 left-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent footer-flow-h" />
        <div
          className="absolute top-40 left-0 w-36 h-0.5 bg-gradient-to-r from-transparent via-[#00ccff] to-transparent footer-flow-h"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-0 w-38 h-0.5 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent footer-flow-h"
          style={{ animationDelay: "2s" }}
        />

        
        <div className="absolute top-0 left-20 w-0.5 h-40 bg-gradient-to-b from-transparent via-[#00ffcc] to-transparent footer-flow-v" />
        <div
          className="absolute top-0 right-20 w-0.5 h-36 bg-gradient-to-b from-transparent via-[#00ccff] to-transparent footer-flow-v"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-0 left-1/2 w-0.5 h-38 bg-gradient-to-b from-transparent via-[#0099ff] to-transparent footer-flow-v"
          style={{ animationDelay: "3s" }}
        />
      </div>

      
      <div className="absolute inset-0">
        <div
          className="absolute w-3 h-3 border border-[#00ffcc]/35 rotate-45"
          style={{
            top: "25%",
            left: "20%",
            animation: "twinkle 3s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-2.5 h-2.5 bg-[#00ccff]/40 rounded-full"
          style={{
            top: "60%",
            right: "25%",
            animation: "twinkle 4s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-4 h-0.5 bg-gradient-to-r from-[#00ffcc] to-transparent"
          style={{
            top: "40%",
            left: "75%",
            animation: "twinkle 2s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        />
        <div
          className="absolute w-2 h-2 border border-[#0099ff]/30 rounded-full"
          style={{
            bottom: "40%",
            left: "30%",
            animation: "twinkle 2.5s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
      </div>

      
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#00ffcc]/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-[#00ccff]/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f] to-[#0a0a0a]" />

      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:100px_100px] opacity-6"></div>
    </div>
  );
});

UltraOptimizedFooterBackground.displayName = "UltraOptimizedFooterBackground";

export const Footer = memo(() => {
  const currentYear = useCallback(() => new Date().getFullYear(), []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }),
    []
  );

  return (
    <footer className="relative bg-[#0f0f0f] border-t border-[#222222] overflow-hidden">
      <UltraOptimizedFooterBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
        
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-12 h-12 rounded-full bg-[#111111] border border-[#333333] flex items-center justify-center relative overflow-hidden"
                  whileHover={{ rotate: 360, scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  style={{ willChange: "transform" }}
                >
                  <span className="text-white font-bold text-lg relative z-10">
                    H
                  </span>
              
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border border-[#00ffcc]/30 rounded-full"
                    style={{ willChange: "transform" }}
                  />
                  
                  <div className="absolute inset-0 bg-[#00ffcc]/10 rounded-full animate-pulse" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Hridayesh Srivastava
                  </h3>
                  <p className="text-sm text-[#999999]">
                    Full-Stack Web Developer
                  </p>
                </div>
              </div>

              <p className="text-[#cccccc] leading-relaxed max-w-md">
                Passionate about creating innovative digital solutions that make
                a difference. Let's build something extraordinary together and
                transform ideas into reality.
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
                    style={{ willChange: "transform" }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-[#1a1a1a] rounded-xl transition-all duration-300 text-[#999999] hover:text-white group relative overflow-hidden border border-[#333333] hover:border-[#00ffcc]/30 ${social.hoverColor} ${social.bgHover}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                      <div className="absolute inset-0 bg-[#00ffcc]/5 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                Quick Links
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="w-1 h-1 bg-[#00ffcc] rounded-full"
                  style={{ willChange: "transform" }}
                />
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ willChange: "transform" }}
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
                     
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#00ffcc] rounded-full opacity-0 group-hover:opacity-100 animate-pulse" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                Get In Touch
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1.5 h-1.5 bg-[#00ffcc] rounded-full"
                  style={{ willChange: "transform, opacity" }}
                />
              </h4>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-3 text-[#999999] group"
                  whileHover={{ x: 5 }}
                  style={{ willChange: "transform" }}
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    style={{ willChange: "transform" }}
                  >
                    <MapPin className="w-5 h-5 text-[#00ffcc] flex-shrink-0" />
                  </motion.div>
                  <a
                    href="https://maps.app.goo.gl/BqSR1hi12SW4K5jC7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-white transition-colors"
                  >
                    Dehradun, India
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-[#999999] group"
                  whileHover={{ x: 5 }}
                  style={{ willChange: "transform" }}
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    style={{ willChange: "transform" }}
                  >
                    <Phone className="w-5 h-5 text-[#00ccff] flex-shrink-0" />
                  </motion.div>
                  <a
                    href="tel:+919634883306"
                    className="group-hover:text-white transition-colors"
                  >
                    +919634883306
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3 text-[#999999] group"
                  whileHover={{ x: 5 }}
                  style={{ willChange: "transform" }}
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-0.5"
                    style={{ willChange: "transform" }}
                  >
                    <MailPlus className="w-5 h-5 text-[#0099ff] flex-shrink-0" />
                  </motion.div>
                  <a
                    href="mailto:hrideshsrivastavaa@outlook.com"
                    className="group-hover:text-white transition-colors text-sm leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] sm:max-w-none sm:whitespace-normal"
                    title="hrideshsrivastavaa@outlook.com"
                  >
                    hrideshsrivastavaa@outlook.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[#222222] py-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-[#999999]">
              <span>
                © {currentYear()} Hridayesh Srivastava. All Rights Reserved.
              </span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-1 bg-[#00ffcc] rounded-full"
                style={{ willChange: "transform, opacity" }}
              />
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-[#1a1a1a] rounded-xl hover:bg-[#222222] transition-all duration-300 group relative overflow-hidden border border-[#333333] hover:border-[#00ffcc]/30"
              aria-label="Scroll to top"
              style={{ willChange: "transform" }}
            >
              <ArrowUp className="w-5 h-5 text-[#999999] group-hover:text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ccff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 animate-pulse">
                <div className="w-1 h-1 bg-[#00ffcc] rounded-full" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
