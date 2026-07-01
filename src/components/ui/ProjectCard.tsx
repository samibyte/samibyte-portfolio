"use client";

import { motion } from "framer-motion";
import { IconGithub, IconExternalLink, IconMaximize, IconCpu } from "@/components/ui/Icons";
import Link from "next/link";
import BrandIcon from "./BrandIcon";
import type { TechItem } from "@/data/projects";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tech: TechItem[];
  githubUrl: string;
  demoUrl: string;
  index: number;
}

const ProjectCard = ({ id, title, description, tech, githubUrl, demoUrl, index }: ProjectCardProps) => {
  // Format index as [01], [02], etc.
  const serialNumber = `[${(index + 1).toString().padStart(2, '0')}]`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      className="group relative flex flex-col h-[420px] overflow-hidden rounded-xl border border-matrix-border/30 bg-space-deep/40 backdrop-blur-md transition-all duration-500 hover:border-matrix-green/50 hover:shadow-[0_0_40px_rgba(0,255,65,0.15)]"
    >
      {/* Dynamic Header */}
      <div className="flex items-center justify-between border-b border-matrix-border/10 bg-white/[0.02] px-6 py-4">
        <span className="font-mono text-[10px] tracking-[0.3em] text-matrix-green/60">
          {serialNumber} PROJECT_LOG
        </span>
        <div className="flex gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-matrix-green/40 shadow-[0_0_5px_rgba(0,255,65,0.4)]" />
          <div className="h-1.5 w-1.5 rounded-full bg-matrix-green/20" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative flex flex-1 flex-col p-6 md:p-8">
        {/* Background Decorative Icon */}
        <div className="absolute -top-4 -right-4 opacity-[0.03] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.08] pointer-events-none">
          <IconCpu size={160} />
        </div>

        <h3 className="font-mono text-2xl font-bold tracking-tight text-text-primary transition-all duration-300 group-hover:text-matrix-green lg:text-3xl">
          {title}
        </h3>
        
        <div className="mt-4 h-0.5 w-12 bg-matrix-green/30" />

        <p className="mt-4 line-clamp-3 font-sans text-sm leading-relaxed text-text-secondary md:text-base">
          {description}
        </p>

        {/* Tech Stack Footer */}
        <div className="mt-auto pt-4 border-t border-matrix-border/10">
          <p className="mb-3 font-mono text-[8px] uppercase tracking-widest text-text-muted">Integrated Systems:</p>
          <div className="flex flex-wrap gap-4">
            {tech.map((item) => (
              <div 
                key={item.name}
                className="group/icon relative flex items-center gap-2"
                title={item.name}
              >
                <BrandIcon 
                  icon={item.icon} 
                  color={item.color} 
                  variant={item.variant}
                  className="group-hover/icon:scale-110" 
                  size="text-xl"
                />
                <span className="hidden sm:inline font-mono text-[9px] text-text-muted/60 group-hover/icon:text-matrix-green transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Overlay / Footer Buttons */}
      <div className="grid grid-cols-3 divide-x divide-matrix-border/10 border-t border-matrix-border/10 bg-white/[0.01]">
        <Link 
          href={`/projects/${id}`}
          className="flex items-center justify-center gap-2 py-4 transition-all hover:bg-matrix-green/5 hover:text-matrix-green"
          title="Project Details"
        >
          <IconMaximize className="text-lg" />
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">Info</span>
        </Link>
        
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 transition-all hover:bg-matrix-green/5 hover:text-matrix-green"
          title="GitHub Repository"
        >
          <IconGithub className="text-lg" />
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">Repo</span>
        </a>

        <a 
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-matrix-green transition-all hover:bg-matrix-green hover:text-space-black"
          title="Live Preview"
        >
          <IconExternalLink className="text-lg" />
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">Live</span>
        </a>
      </div>

      {/* Hover Light Effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-matrix-green/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </motion.div>
  );
};

export default ProjectCard;

