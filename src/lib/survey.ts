export type Option = { value: string; label: string; hint?: string };

export type Question =
  | { id: string; kind: "single" | "multi"; title: string; subtitle: string; options: Option[]; max?: number }
  | { id: string; kind: "stats"; title: string; subtitle: string };

// Mirrors the inputs PathU collects. Matching logic is ported later; the UI only gathers answers.
export const QUESTIONS: Question[] = [
  {
    id: "grade",
    kind: "single",
    title: "What grade are you in?",
    subtitle: "Your roadmap starts from where you are now.",
    options: [
      { value: "9", label: "9th grade", hint: "Freshman" },
      { value: "10", label: "10th grade", hint: "Sophomore" },
      { value: "11", label: "11th grade", hint: "Junior" },
      { value: "12", label: "12th grade", hint: "Senior" },
    ],
  },
  {
    id: "interests",
    kind: "multi",
    max: 3,
    title: "What pulls you in?",
    subtitle: "Pick up to three. Think about what you'd do on a free afternoon.",
    options: [
      { value: "build", label: "Building things", hint: "Code, robots, apps" },
      { value: "science", label: "How the world works", hint: "Biology, physics, chemistry" },
      { value: "people", label: "Helping people", hint: "Health, teaching, service" },
      { value: "money", label: "Money and markets", hint: "Business, economics" },
      { value: "words", label: "Words and ideas", hint: "Writing, history, law" },
      { value: "make", label: "Making art", hint: "Design, music, film" },
    ],
  },
  {
    id: "style",
    kind: "single",
    title: "How do you like to work?",
    subtitle: "No wrong answer. This shapes the careers we suggest.",
    options: [
      { value: "solo", label: "Deep focus, on my own" },
      { value: "team", label: "With a team, talking it out" },
      { value: "lead", label: "Out front, leading" },
      { value: "hands", label: "Hands-on, in the field" },
    ],
  },
  {
    id: "stats",
    kind: "stats",
    title: "Where do your grades stand?",
    subtitle: "Rough numbers are fine. Leave blank what you don't have yet.",
  },
  {
    id: "budget",
    kind: "single",
    title: "What can your family spend per year?",
    subtitle: "After aid. We use this to score financial fit.",
    options: [
      { value: "20", label: "Under $20k" },
      { value: "40", label: "$20k – $40k" },
      { value: "60", label: "$40k – $60k" },
      { value: "any", label: "Cost isn't the main factor" },
    ],
  },
  {
    id: "setting",
    kind: "single",
    title: "Where do you see yourself?",
    subtitle: "Campus setting matters more than most people think.",
    options: [
      { value: "city", label: "In a city", hint: "Walkable, busy" },
      { value: "town", label: "College town", hint: "Campus is the center" },
      { value: "quiet", label: "Somewhere quiet", hint: "Space and nature" },
      { value: "open", label: "Open to anything" },
    ],
  },
];
