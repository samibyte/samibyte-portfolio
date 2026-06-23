import ProjectDetailsClient from "./ProjectDetailsClient";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import { notFound } from "next/navigation";
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  
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
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const projectExists = projects.some((p) => p.id === slug);

  if (!projectExists) {
    notFound();
  }

  return <ProjectDetailsClient slug={slug} />;
}

