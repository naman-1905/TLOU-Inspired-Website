// All swappable identity content lives here. Replace the TODO values with real info.
export const profile = {
  name: "Naman", // TODO: full name
  role: "Creative Frontend Developer", // TODO: your title / role
  tagline:
    "I build quiet, living interfaces — code that grows the way nature reclaims a city.", // TODO: one-line pitch
  location: "Somewhere overgrown", // TODO: real location
  email: "namanoj19@gmail.com", // used by the contact mailto; verify before shipping
  resumeUrl: "/placeholders/resume.pdf",
} as const;

export type Profile = typeof profile;
