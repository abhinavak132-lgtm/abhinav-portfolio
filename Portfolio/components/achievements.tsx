import { Trophy } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { achievements } from "@/lib/portfolio-data"

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Achievements" title="Milestones & recognition" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal
              key={item}
              as="article"
              delay={(i % 2) * 80}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <Trophy className="size-5" />
              </span>
              <p className="text-pretty font-medium leading-relaxed text-foreground">
                {item}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
