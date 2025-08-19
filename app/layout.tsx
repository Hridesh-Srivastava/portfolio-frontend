import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hridayesh-srivastava.me"),
  title: {
    default: "Hridayesh Srivastava - Full Stack Developer",
    template: "%s | Hridayesh Srivastava"
  },
  description:
    "Full‑stack developer portfolio showcasing Next.js, MERN, AI/ML experiments and open‑source npm packages.",
  keywords: [
    "Hridayesh", "Srivastava", "Full Stack Developer", "Next.js", "React", "Node.js", "MongoDB", "TypeScript", "Portfolio"
  ],
  authors: [{ name: "Hridayesh Srivastava" }],
  creator: "Hridayesh Srivastava",
  publisher: "Hridayesh Srivastava",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "https://www.hridayesh-srivastava.me/",
    siteName: "Hridayesh Srivastava",
    title: "Hridayesh Srivastava - Full Stack Developer",
    description:
      "Full‑stack developer portfolio showcasing Next.js, MERN, AI/ML experiments and open‑source npm packages.",
    images: [
      {
        url: "/preview.png", 
        width: 1200,
        height: 630,
        alt: "Hridayesh Srivastava Portfolio Preview"
      },
      {
        url: "/pfp-my.jpeg",
        width: 800,
        height: 800,
        alt: "Profile Photo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/Hrideshhhh", 
    creator: "Hridayesh Srivastava",
    title: "Hridayesh Srivastava - Full Stack Developer",
    description:
      "Full‑stack developer portfolio showcasing Next.js, MERN, AI/ML experiments and open‑source npm packages.",
    images: ["/preview.png"]
  },
  icons: {
    icon: "/favicon.ico"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1
    }
  },
  category: "technology"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
