import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { LogoMarquee } from "@/components/LogoMarquee";
import { HowItWorks } from "@/components/HowItWorks";
import { SampleMatches } from "@/components/SampleMatches";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-4xl px-4 pb-4 pt-20 text-center sm:px-8 sm:pt-28">
          <p className="mb-5 inline-block rounded-full border border-line px-4 py-1.5 text-sm font-semibold text-fg-2">
            Free for high school students
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
            Find your path. <br className="hidden sm:block" />
            Then find your school.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-2">
            Anyone can ask which college to pick. IvyUp starts earlier: the careers that fit you, the schools that get
            you there, and the plan to make it happen.
          </p>
          <Link
            href="/survey"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Start the survey <span aria-hidden>→</span>
          </Link>
          <p className="mt-3 text-sm text-fg-3">About 8 minutes · No account needed</p>
        </section>
        <LogoMarquee />
        <HowItWorks />
        <SampleMatches />
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
          <div className="rounded-3xl border border-line bg-surface px-6 py-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Know where you&apos;re headed by tonight.</h2>
            <Link
              href="/survey"
              className="mt-8 inline-flex rounded-xl border border-fg px-7 py-3.5 font-semibold hover:bg-fg hover:text-bg"
            >
              Start the survey
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
