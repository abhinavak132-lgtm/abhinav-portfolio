import { Briefcase } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <Reveal>
          <article className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <Briefcase className="size-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {experience.role}
                </h3>
                <p className="mt-1 text-base font-medium text-primary">
                  {experience.company}
                </p>
                <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
