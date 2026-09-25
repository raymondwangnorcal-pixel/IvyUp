const STEPS = [
  { title: "Tell us about you", body: "Interests, how you like to work, what you care about. Not just your GPA." },
  { title: "Find your direction", body: "Careers that fit you, with real salaries, demand, and a day in the life." },
  { title: "Match the right schools", body: "Colleges scored on academic, financial, social, and career fit." },
  { title: "Follow your roadmap", body: "A term-by-term plan that turns the path you chose into next steps." },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-8">
      <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
      <p className="mt-2 text-fg-2">About eight minutes, start to finish.</p>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-line bg-surface p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-sm font-bold">
              {i + 1}
            </span>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-2">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
