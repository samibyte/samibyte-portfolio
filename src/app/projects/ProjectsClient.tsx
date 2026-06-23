"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Project } from "@/data/projects";

interface Props {
  projects: Project[];
}

const ProjectsClient = ({ projects }: Props) => {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-full opacity-10">
        <div className="absolute top-[10%] right-[5%] h-[600px] w-[600px] rounded-full bg-matrix-green/10 blur-[150px]" />
        <div className="absolute bottom-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-matrix-green/5 blur-[120px]" />
      </div>

      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="glow-green font-mono text-4xl font-bold text-matrix-green md:text-5xl">
            // Projects
          </h1>
          <div className="mt-4 h-1 w-20 bg-matrix-green/50" />
          <p className="mt-8 max-w-2xl text-lg text-text-secondary md:text-xl">
            A selection of my recent works where design meets engineering. 
            Each project is built with focus on user experience and code quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA or decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="font-mono text-sm tracking-widest text-text-muted">
            VIEW MORE ON <a href="https://github.com/samibyte" target="_blank" rel="noopener noreferrer" className="text-matrix-green hover:underline">GITHUB</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsClient;
