import { SCHOOLS } from "@/lib/schools";
import { SchoolLogo } from "./SchoolLogo";

export function LogoMarquee() {
  const loop = [...SCHOOLS, ...SCHOOLS];
  return (
    <section aria-labelledby="aim" className="py-12">
      <h2 id="aim" className="mb-6 text-center text-sm font-semibold text-fg-3">
        Where IvyUp students are aiming
      </h2>
      <div className="marquee-wrap overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="marquee flex w-max gap-4">
          {loop.map((s, i) => (
            <li key={`${s.slug}-${i}`} aria-hidden={i >= SCHOOLS.length}>
              <SchoolLogo school={s} className="h-24 w-44" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
