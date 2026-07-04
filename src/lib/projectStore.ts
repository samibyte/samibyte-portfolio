import type { Project, TechItem } from "@/data/projects";
import fallbackProjects from "@/data/projects.json";

export interface RawProject {
  id: string;
  title?: string;
  description?: string;
  longDescription?: string;
  videoUrl?: string | null;
  githubUrl?: string;
  demoUrl?: string;
  order?: number;
  tech?: TechItem[];
  techStack?: TechItem[];
  problem?: string;
  solution?: string;
  challenges?: string;
  learnings?: string;
  results?: string[];
  caseStudy?: {
    problem?: string;
    solution?: string;
    challenges?: string;
    learnings?: string;
    results?: string[];
  };
}

// Helper to map flat project structures to the nested case study structure
export function normalizeProject(data: RawProject): Project {
  return {
    id: data.id,
    title: data.title || "",
    description: data.description || "",
    longDescription: data.longDescription || "",
    videoUrl: data.videoUrl,
    githubUrl: data.githubUrl || "",
    demoUrl: data.demoUrl || "",
    order: typeof data.order === 'number' ? data.order : 0,
    tech: data.tech || data.techStack || [],
    caseStudy: {
      problem: data.caseStudy?.problem || data.problem || "",
      solution: data.caseStudy?.solution || data.solution || "",
      challenges: data.caseStudy?.challenges || data.challenges || "",
      learnings: data.caseStudy?.learnings || data.learnings || "",
      results: data.caseStudy?.results || data.results || [],
    },
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function getProjects(): Promise<Project[]> {
  // If compiling on server, or if URL is not configured
  if (typeof window === "undefined" || !API_URL) {
    const rawList = fallbackProjects as RawProject[];
    return rawList.map(normalizeProject);
  }

  try {
    const res = await fetch(`${API_URL}/api/projects`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      throw new Error(`Uplink fail: ${res.status}`);
    }
    const data = (await res.json()) as RawProject[];
    return data.map(normalizeProject);
  } catch (error) {
    console.warn("Backend server request failed. Falling back to local static JSON data.", error);
    const rawList = fallbackProjects as RawProject[];
    return rawList.map(normalizeProject);
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  // If compiling on server, or if URL is not configured
  if (typeof window === "undefined" || !API_URL) {
    const rawList = fallbackProjects as RawProject[];
    const item = rawList.find((p) => p.id === slug);
    return item ? normalizeProject(item) : null;
  }

  try {
    const res = await fetch(`${API_URL}/api/projects/${encodeURIComponent(slug)}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Uplink fail: ${res.status}`);
    }
    const data = (await res.json()) as RawProject;
    return normalizeProject(data);
  } catch (error) {
    console.warn(`Backend request for slug ${slug} failed. Falling back to local static JSON data.`, error);
    const rawList = fallbackProjects as RawProject[];
    const item = rawList.find((p) => p.id === slug);
    return item ? normalizeProject(item) : null;
  }
}
