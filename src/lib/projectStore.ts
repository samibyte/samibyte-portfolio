import { prisma } from "./prisma";
import { Project, TechItem } from "@/data/projects";

/**
 * Service layer for managing projects via Prisma.
 * Handles mapping between DB model and frontend Project type.
 */

export async function getProjects(): Promise<Project[]> {
  const data = await prisma.project.findMany({
    orderBy: { order: "asc" },
  });

  return data.map(mapDbProjectToProject);
}

export async function getProject(id: string): Promise<Project | null> {
  const data = await prisma.project.findUnique({
    where: { id },
  });

  if (!data) return null;
  return mapDbProjectToProject(data);
}

export async function saveProject(project: Project): Promise<Project> {
  const { tech, caseStudy, id, ...rest } = project;

  const data = await prisma.project.upsert({
    where: { id },
    update: {
      ...rest,
      techStack: tech as any,
      problem: caseStudy.problem,
      solution: caseStudy.solution,
      challenges: caseStudy.challenges,
      learnings: caseStudy.learnings,
      results: caseStudy.results as any,
    },
    create: {
      id,
      ...rest,
      techStack: tech as any,
      problem: caseStudy.problem,
      solution: caseStudy.solution,
      challenges: caseStudy.challenges,
      learnings: caseStudy.learnings,
      results: caseStudy.results as any,
    },
  });

  return mapDbProjectToProject(data);
}

export async function deleteProject(id: string): Promise<void> {
  await prisma.project.delete({
    where: { id },
  });
}

export async function reorderProjects(ids: string[]): Promise<void> {
  await prisma.$transaction(
    ids.map((id, index) =>
      prisma.project.update({
        where: { id },
        data: { order: index },
      })
    )
  );
}

// ─── Mapping Helper ───────────────────────────────────────────

function mapDbProjectToProject(dbProject: any): Project {
  return {
    id: dbProject.id,
    title: dbProject.title,
    description: dbProject.description,
    longDescription: dbProject.longDescription,
    videoUrl: dbProject.videoUrl,
    githubUrl: dbProject.githubUrl,
    demoUrl: dbProject.demoUrl,
    order: dbProject.order,
    tech: dbProject.techStack as TechItem[],
    caseStudy: {
      problem: dbProject.problem,
      solution: dbProject.solution,
      challenges: dbProject.challenges,
      learnings: dbProject.learnings,
      results: dbProject.results as string[],
    },
  };
}
