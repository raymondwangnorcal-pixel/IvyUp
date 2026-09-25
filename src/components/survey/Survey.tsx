"use client";

import Link from "next/link";
import { useState } from "react";
import { QUESTIONS, type Question } from "@/lib/survey";
import { SampleResults } from "./SampleResults";

type Answers = Record<string, string[]>;

export function Survey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const isDone = step >= QUESTIONS.length;
  const q = QUESTIONS[step];
  const progress = Math.min(step / QUESTIONS.length, 1);

  function toggle(question: Question, value: string) {
    setAnswers((prev) => {
      const cur = prev[question.id] ?? [];
      if (question.kind === "single") return { ...prev, [question.id]: [value] };
      if (question.kind !== "multi") return prev;
      if (cur.includes(value)) return { ...prev, [question.id]: cur.filter((v) => v !== value) };
      if (question.max && cur.length >= question.max) return prev;
      return { ...prev, [question.id]: [...cur, value] };
    });
  }

  const canContinue = q?.kind === "stats" || (answers[q?.id]?.length ?? 0) > 0;

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            Ivy<span className="text-accent">Up</span>
          </Link>
          <Link href="/" className="rounded-full border border-line px-4 py-2 text-sm font-semibold hover:bg-surface-2">
            Exit
          </Link>
        </div>
      </header>

      {isDone ? (
        <SampleResults onRestart={() => { setStep(0); setAnswers({}); }} />
      ) : (
        <>
          <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:py-16">
            <p className="text-sm font-semibold text-fg-3">
              Step {step + 1} of {QUESTIONS.length}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{q.title}</h1>
            <p className="mt-2 text-fg-2">{q.subtitle}</p>

            {q.kind === "stats" ? (
              <StatsFields
                values={answers}
                onChange={(id, v) => setAnswers((p) => ({ ...p, [id]: v ? [v] : [] }))}
              />
            ) : (
              <fieldset className="mt-8">
                <legend className="sr-only">{q.title}</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {q.options.map((o) => {
                    const isOn = answers[q.id]?.includes(o.value) ?? false;
                    return (
                      <label
                        key={o.value}
                        className={`cursor-pointer rounded-2xl border p-5 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-fg ${
                          isOn ? "border-fg bg-surface-2" : "border-line bg-surface hover:border-fg-3"
                        }`}
                      >
                        <input
                          type={q.kind === "single" ? "radio" : "checkbox"}
                          name={q.id}
                          value={o.value}
                          checked={isOn}
                          onChange={() => toggle(q, o.value)}
                          className="sr-only"
                        />
                        <span className="block font-semibold">{o.label}</span>
                        {o.hint && <span className="mt-1 block text-sm text-fg-2">{o.hint}</span>}
                      </label>
                    );
                  })}
                </div>
                {q.kind === "multi" && q.max && (
                  <p className="mt-3 text-sm text-fg-3">
                    {answers[q.id]?.length ?? 0} of {q.max} chosen
                  </p>
                )}
              </fieldset>
            )}
          </main>

          <footer className="sticky bottom-0 border-t border-line bg-bg">
            <div className="h-1 bg-surface-2">
              <div className="h-full bg-fg transition-[width] duration-300" style={{ width: `${progress * 100}%` }} />
            </div>
            <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="rounded-lg px-3 py-2 font-semibold underline underline-offset-4 disabled:invisible"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canContinue}
                className="rounded-xl bg-accent px-7 py-3 font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:bg-surface-2 disabled:text-fg-3"
              >
                {step === QUESTIONS.length - 1 ? "See my results" : "Next"}
              </button>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

type StatsFieldsProps = { values: Answers; onChange: (id: string, value: string) => void };

const STAT_FIELDS = [
  { id: "gpa", label: "Unweighted GPA", placeholder: "3.8", inputMode: "decimal" as const },
  { id: "sat", label: "SAT", placeholder: "1450", inputMode: "numeric" as const },
  { id: "act", label: "ACT", placeholder: "32", inputMode: "numeric" as const },
];

function StatsFields({ values, onChange }: StatsFieldsProps) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {STAT_FIELDS.map((f) => (
        <label key={f.id} className="rounded-2xl border border-line bg-surface p-4 focus-within:border-fg">
          <span className="block text-xs font-semibold text-fg-2">{f.label}</span>
          <input
            inputMode={f.inputMode}
            placeholder={f.placeholder}
            value={values[f.id]?.[0] ?? ""}
            onChange={(e) => onChange(f.id, e.target.value)}
            className="mt-1 w-full bg-transparent text-lg outline-none placeholder:text-fg-3"
          />
        </label>
      ))}
    </div>
  );
}
