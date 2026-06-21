import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-8">
        <Reveal className="order-2 md:order-1">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Available for opportunities
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            AI &amp; Data Science Undergraduate, Full-Stack Developer and DSA
            enthusiast building practical, reliable software.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Contact me
            </a>
          </div>
        </Reveal>

        <Reveal className="order-1 flex justify-center md:order-2 md:justify-end" delay={120}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-accent/60"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-muted shadow-sm">
              <Image
                src={profile.photo || "/placeholder.svg"}
                alt={`Portrait of ${profile.name}`}
                width={420}
                height={520}
                priority
                className="h-[360px] w-[300px] object-cover sm:h-[440px] sm:w-[360px]"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  )
}
