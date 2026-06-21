import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/lib/portfolio-data"

const highlights = [
  { value: "7.5", label: "CGPA" },
  { value: "100+", label: "DSA problems solved" },
  { value: "Top 35.8%", label: "Global LeetCode rank" },
  { value: "3rd Year", label: "B.Tech AI & DS" },
]

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Building practical solutions, one problem at a time."
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-pretty text-xl leading-relaxed text-foreground">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal className="md:col-span-2" delay={120}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {highlights.map((item) => (
                <div key={item.label} className="bg-card p-6">
                  <dt className="text-2xl font-semibold tracking-tight text-foreground">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
