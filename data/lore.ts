// Lore & voice from The Last of Us (Naughty Dog) — scraped from public sources
// (Wikipedia + Wikiquote) to give the site an authentic thematic layer.
// This is presentation content, not personal data: replace or extend freely.

export interface Quote {
  text: string;
  speaker: string;
}

/** Curated iconic lines (verified against Wikiquote). Kept clean of profanity. */
export const quotes: Quote[] = [
  { text: "Endure and survive.", speaker: "Joel" },
  { text: "No matter what… you keep finding something to fight for.", speaker: "Joel" },
  { text: "We're not murderers. We just survive.", speaker: "Ellie" },
  { text: "You have no idea what loss is.", speaker: "Joel" },
  { text: "I will not turn into one of those things.", speaker: "Tess" },
  { text: "Let me tell you a story. Once upon a time, I had somebody that I cared about.", speaker: "Bill" },
  {
    text: "There are a million ways we should've died before today… But we fight for every second we get to spend with each other.",
    speaker: "Riley",
  },
  { text: "I'm still waiting for my turn.", speaker: "Ellie" },
  { text: "You are the most precious thing in this world, and I would kill for you. And I will.", speaker: "Joel" },
];

export interface WorldTerm {
  term: string;
  def: string;
}

/** A short glossary of the world both games take place in. */
export const worldTerms: WorldTerm[] = [
  { term: "The Outbreak", def: "A Cordyceps pandemic that collapses society; by 2013, most of the U.S. is gone." },
  { term: "Cordyceps", def: "A mutated fungus that infects the brain — its infected turn aggressive and cannibalistic." },
  { term: "FEDRA", def: "The militarized authority that seals cities behind walls after the collapse." },
  { term: "Quarantine Zone", def: "Walled safe areas where survivors live under curfew, checkpoints, and control." },
  { term: "The Fireflies", def: "A resistance hunting for a cure — ready to sacrifice the few to save the many." },
  { term: "Jackson", def: "A fortified town in Wyoming; one of the last places that still feels like home." },
  { term: "WLF", def: "The Washington Liberation Front — Abby's militia, at war with a religious cult." },
  { term: "Seraphites", def: "A doomsday cult in Seattle that worships the infected and hunts survivors." },
];

/** The emotional through-line the games keep returning to. */
export const themes: string[] = [
  "Survival",
  "Grief",
  "Empathy",
  "Resilience",
  "The cycle of violence",
  "Endure & survive",
];

/** Franchise meta — used for a small attribution line in the footer. */
export const franchise = {
  title: "The Last of Us",
  studio: "Naughty Dog",
  publisher: "Sony Interactive Entertainment",
  composer: "Gustavo Santaolalla",
  years: "2013–present",
} as const;
