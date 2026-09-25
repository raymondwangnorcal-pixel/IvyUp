import { SCHOOLS } from "@/lib/schools";
import { MatchCard } from "./MatchCard";

const SAMPLE = [
  { slug: "brown", fit: 91, tag: "Strong fit" },
  { slug: "duke", fit: 88, tag: "Target" },
  { slug: "cornell", fit: 86, tag: "Target" },
  { slug: "stanford", fit: 79, tag: "Reach" },
];

export function SampleMatches() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Your matches, ranked by fit</h2>
          <p className="mt-2 text-fg-2">An example for a junior who loves building things. Yours will differ.</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        {SAMPLE.map((m) => {
          const school = SCHOOLS.find((s) => s.slug === m.slug)!;
          return <MatchCard key={m.slug} school={school} fit={m.fit} tag={m.tag} />;
        })}
      </div>
    </section>
  );
}
