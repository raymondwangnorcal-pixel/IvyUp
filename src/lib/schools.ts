export type School = {
  slug: string;
  name: string;
  short: string;
  location: string;
  isIvy: boolean;
};

// Logos live in public/logos/<slug>.svg, pulled from each school's Wikipedia infobox.
export const SCHOOLS: School[] = [
  { slug: "harvard", name: "Harvard University", short: "Harvard", location: "Cambridge, MA", isIvy: true },
  { slug: "yale", name: "Yale University", short: "Yale", location: "New Haven, CT", isIvy: true },
  { slug: "princeton", name: "Princeton University", short: "Princeton", location: "Princeton, NJ", isIvy: true },
  { slug: "columbia", name: "Columbia University", short: "Columbia", location: "New York, NY", isIvy: true },
  { slug: "penn", name: "University of Pennsylvania", short: "Penn", location: "Philadelphia, PA", isIvy: true },
  { slug: "brown", name: "Brown University", short: "Brown", location: "Providence, RI", isIvy: true },
  { slug: "dartmouth", name: "Dartmouth College", short: "Dartmouth", location: "Hanover, NH", isIvy: true },
  { slug: "cornell", name: "Cornell University", short: "Cornell", location: "Ithaca, NY", isIvy: true },
  { slug: "stanford", name: "Stanford University", short: "Stanford", location: "Stanford, CA", isIvy: false },
  { slug: "mit", name: "Massachusetts Institute of Technology", short: "MIT", location: "Cambridge, MA", isIvy: false },
  { slug: "duke", name: "Duke University", short: "Duke", location: "Durham, NC", isIvy: false },
  { slug: "caltech", name: "California Institute of Technology", short: "Caltech", location: "Pasadena, CA", isIvy: false },
];

export function getLogoSrc(slug: string) {
  return `/logos/${slug}.svg`;
}
