import { GraduationCap } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { education } from "@/lib/portfolio-data"

export function Education() {
  return (
    <section id="education" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <Reveal>
          <article className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <GraduationCap className="size-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {education.institution}
                  </h3>
                  <p className="mt-1 text-base text-muted-foreground">
                    {education.degree}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {education.status}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-muted/50 px-5 py-3 text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  CGPA
                </p>
                <p className="mt-0.5 text-2xl font-semibold text-foreground">
                  {education.cgpa}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
