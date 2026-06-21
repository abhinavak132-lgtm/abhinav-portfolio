import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"

const socials = [
  { label: "GitHub", href: profile.social.github, icon: GithubIcon, handle: "abhinavak132-lgtm" },
  { label: "LinkedIn", href: profile.social.linkedin, icon: LinkedinIcon, handle: "Abhinav K" },
  { label: "LeetCode", href: profile.social.leetcode, icon: LeetcodeIcon, handle: "Abhi_2836" },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Open to internships, full-time software roles and collaborative projects. Reach out through any of the channels below."
        />

        <Reveal>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <social.icon className="size-5" />
                  </span>
                  <span>
                    <span className="flex items-center gap-1 font-medium text-foreground">
                      {social.label}
                      <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {social.handle}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>AI &amp; Data Science · Sri Eshwar College of Engineering</p>
        </footer>
      </div>
    </section>
  )
}
