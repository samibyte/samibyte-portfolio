import { getProject, getProjects } from "@/lib/projectStore";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailsShell from "./ProjectDetailsShell";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Projects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsShell project={project} />;
}
