"use client";

import { IconArrowNarrowRight } from "@/components/ui/Icons";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Project } from "@/data/projects";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="py-20 relative bg-matrix-green/[0.01]">
       {/* Background blend */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#020408] to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#020408] to-transparent opacity-30" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="glow-green font-mono text-3xl font-bold text-matrix-green uppercase">Featured Projects</h2>
            <p className="mt-4 text-text-secondary text-sm max-w-xl font-sans">A selection of web applications and projects I have built.</p>
          </div>
          <Link href="/projects" className="flex items-center gap-2 font-mono text-xs font-bold text-matrix-green hover:underline tracking-widest uppercase">
            View All Projects <IconArrowNarrowRight size={14} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
