import type { School } from "@/lib/schools";
import { SchoolLogo } from "./SchoolLogo";

type MatchCardProps = { school: School; fit: number; tag: string };

export function MatchCard({ school, fit, tag }: MatchCardProps) {
  return (
    <article className="group">
      <div className="relative">
        <SchoolLogo school={school} className="aspect-square w-full transition-transform duration-200 group-hover:-translate-y-0.5" />
        <span className="absolute left-3 top-3 rounded-full bg-bg/85 px-3 py-1 text-xs font-semibold">{tag}</span>
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold">{school.short}</h3>
          <p className="text-sm text-fg-2">{school.location}</p>
        </div>
        <p className="shrink-0 text-sm font-semibold">
          <span className="text-accent">●</span> {fit} fit
        </p>
      </div>
    </article>
  );
}
