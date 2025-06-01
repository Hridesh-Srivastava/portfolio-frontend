import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  )
}
