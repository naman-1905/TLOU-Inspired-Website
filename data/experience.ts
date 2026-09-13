// Placeholder experience — replace with your real roles (content swap).
export interface ExperienceEntry {
  role: string;
  org: string;
  start: string; // e.g. "2024" or "Jan 2024"
  end?: string; // e.g. "Present" or "2024"
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Role Title", // TODO
    org: "Company / Studio", // TODO
    start: "2024", // TODO
    end: "Present",
    points: [
      "One-line achievement or responsibility — lead with impact.", // TODO
      "A second bullet describing a concrete result or scope.", // TODO
    ],
  },
  {
    role: "Previous Role", // TODO
    org: "Company", // TODO
    start: "2022", // TODO
    end: "2024", // TODO
    points: [
      "What you owned and the outcome.", // TODO
      "Another concrete point.", // TODO
    ],
  },
];

// Optional education block (rendered under experience when non-empty).
export interface EducationEntry {
  degree: string;
  org: string;
  year: string;
}

export const education: EducationEntry[] = [
  { degree: "Degree / Program", org: "Institution", year: "2022" }, // TODO
];
