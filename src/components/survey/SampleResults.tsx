import { SCHOOLS } from "@/lib/schools";
import { MatchCard } from "@/components/MatchCard";

const CAREERS = [
  { title: "Software Engineer", match: 92, salary: "$110k start", outlook: "High demand" },
  { title: "Biomedical Engineer", match: 84, salary: "$75k start", outlook: "Growing" },
  { title: "Product Designer", match: 78, salary: "$85k start", outlook: "Steady" },
];

const MATCHES = [
  { slug: "brown", fit: 91, tag: "Strong fit" },
  { slug: "duke", fit: 88, tag: "Target" },
  { slug: "cornell", fit: 86, tag: "Target" },
  { slug: "mit", fit: 77, tag: "Reach" },
];

type SampleResultsProps = { onRestart: () => void };

// Placeholder output until PathU's matching workflow is ported. Labeled so it never reads as a real prediction.
export function SampleResults({ onRestart }: SampleResultsProps) {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-8 sm:py-16">
      <p className="inline-block rounded-full border border-accent/60 px-3 py-1 text-xs font-semibold text-accent">
        Sample results · matching is coming soon
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Here&apos;s where you could go</h1>

      <h2 className="mt-10 text-xl font-semibold">Careers that fit you</h2>
      <ul className="mt-4 grid gap-3 md:grid-cols-3">
        {CAREERS.map((c) => (
          <li key={c.title} className="rounded-2xl border border-line bg-surface p-5">
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold">{c.title}</h3>
              <span className="text-sm font-semibold">{c.match}%</span>
            </div>
            <p className="mt-2 text-sm text-fg-2">
              {c.salary} · {c.outlook}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-xl font-semibold">Schools, ranked by fit</h2>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        {MATCHES.map((m) => (
          <MatchCard key={m.slug} school={SCHOOLS.find((s) => s.slug === m.slug)!} fit={m.fit} tag={m.tag} />
        ))}
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-12 rounded-xl border border-fg px-6 py-3 font-semibold hover:bg-fg hover:text-bg"
      >
        Start over
      </button>
    </main>
  );
}
