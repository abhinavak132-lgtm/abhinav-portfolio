import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { skills } from "@/lib/portfolio-data"

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A versatile toolkit spanning programming fundamentals, full-stack web development, data and AI workflows."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              as="article"
              delay={(i % 3) * 80}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {item}
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
