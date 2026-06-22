"use client";

/**
 * ProjectDetails.tsx — Detailed view for a specific project
 * 
 * Features:
 * - Dynamic route handling
 * - Case study sections (Problem, Solution, Results)
 * - Tech stack visualization with icons
 * - Link back to projects
 */

import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ id: string }>;
}

const ProjectDetails = ({ params }: Props) => {
  const { id } = use(params);
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    router.replace("/projects");
    return null;
  }

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,var(--color-matrix-green)_0%,transparent_70%)]" />
      </div>

      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/projects"
            className="group mb-8 inline-flex items-center gap-2 font-mono text-sm tracking-widest text-text-muted transition-all hover:text-matrix-green"
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            BACK TO PROJECTS
          </Link>

          <div className="mb-12">
            <h1 className="glow-green font-mono text-4xl font-extrabold text-matrix-green md:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <div className="mt-4 h-1 w-32 bg-matrix-green/50" />
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-text-primary md:text-2xl">
              {project.description}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content: Case Study */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Overview */}
            <section className="glass-card p-8 md:p-10">
              <h2 className="mb-6 font-mono text-xl font-bold tracking-widest text-matrix-green uppercase">
                // OVERVIEW
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                {project.longDescription}
              </p>
            </section>

            {/* Case Study Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <section className="glass-card p-8">
                <h2 className="mb-4 font-mono text-sm font-bold tracking-widest text-red-400 uppercase opacity-80">
                  ! PROBLEM
                </h2>
                <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                  {project.caseStudy.problem}
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="mb-4 font-mono text-sm font-bold tracking-widest text-matrix-green uppercase opacity-80">
                  * SOLUTION
                </h2>
                <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                  {project.caseStudy.solution}
                </p>
              </section>
            </div>

            {/* Results */}
            <section className="glass-card p-8 md:p-10">
              <h2 className="mb-6 font-mono text-xl font-bold tracking-widest text-matrix-green uppercase">
                # RESULTS & KEY ACHIEVEMENTS
              </h2>
              <ul className="space-y-4">
                {project.caseStudy.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-4 text-text-secondary">
                    <FiCheckCircle className="mt-1 flex-shrink-0 text-matrix-green" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>

          {/* Sidebar: Details & Actions */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="mb-6 font-mono text-sm font-bold tracking-widest text-text-muted uppercase">
                TECHNOLOGIES
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {project.tech.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2">
                    <item.icon className="text-3xl text-matrix-green shadow-[0_0_10px_rgba(0,255,65,0.2)]" />
                    <span className="font-mono text-[10px] text-text-muted">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 space-y-4 text-center">
              <h3 className="mb-6 font-mono text-sm font-bold tracking-widest text-text-muted uppercase">
                LINKS
              </h3>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-md border border-matrix-green/30 bg-matrix-green/5 py-4 font-mono text-sm font-bold tracking-widest text-matrix-green transition-all hover:bg-matrix-green/10"
              >
                <FiGithub className="text-lg" />
                SOURCE CODE
              </a>
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-matrix-green py-4 font-mono text-sm font-bold tracking-widest text-space-black transition-all hover:bg-matrix-bright hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
              >
                <FiExternalLink className="text-lg" />
                LIVE PREVIEW
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

