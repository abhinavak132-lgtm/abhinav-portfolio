import { FolderGit2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few projects where I applied development, data and problem-solving skills end to end."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              as="article"
              delay={(i % 2) * 100}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <FolderGit2 className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {project.tagline}
              </p>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
