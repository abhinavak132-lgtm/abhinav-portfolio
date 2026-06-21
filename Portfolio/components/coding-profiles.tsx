import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/brand-icons"
import { codingProfiles } from "@/lib/portfolio-data"

const icons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  LeetCode: LeetcodeIcon,
} as const

export function CodingProfiles() {
  return (
    <section id="coding-profiles" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Where I build and practice."
          description="Explore my work, professional profile and problem-solving across these platforms."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((profile) => {
            const Icon = icons[profile.label as keyof typeof icons]
            return (
              <Reveal key={profile.label}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold tracking-tight text-foreground">
                        {profile.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">{profile.handle}</p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {profile.description}
                  </p>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Visit Profile
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
