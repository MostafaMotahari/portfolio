import PixelHero from "@/components/pixel-hero"
import AboutSection from "@/components/about-section"
import CVSection from "@/components/cv-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PixelHero />
      <div className="container mx-auto px-4 py-8">
        <AboutSection />
        <CVSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </div>
    </main>
  )
}
