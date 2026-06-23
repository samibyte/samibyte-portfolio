/**
 * Project type definitions.
 * Data is now stored in PostgreSQL via Prisma.
 * This file exports types only — no data.
 */

export interface TechItem {
  name: string;
  icon: string;    // Devicon slug, e.g. "react", "nodejs", "mongodb"
  color?: string;
  variant?: "original" | "plain" | "plain-wordmark";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  videoUrl?: string | null;
  tech: TechItem[];
  githubUrl: string;
  demoUrl: string;
  order: number;
  caseStudy: {
    problem: string;
    solution: string;
    challenges: string;
    learnings: string;
    results: string[];
  };
}
