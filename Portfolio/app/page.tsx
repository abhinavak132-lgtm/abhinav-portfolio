import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { CodingProfiles } from "@/components/coding-profiles"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>
    </>
  )
}
