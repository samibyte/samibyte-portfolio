"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconDownload, IconCpu, IconZap, IconTarget, IconArrowNarrowRight } from "@/components/ui/Icons";
import Counter from "@/components/ui/Counter";
import GlitchText from "@/components/ui/GlitchText";

// Type definitions for the blueprint layers
type BlueprintLayerId = "client" | "gateway" | "engine" | "datastore" | "containment";

interface BlueprintLayerData {
  id: BlueprintLayerId;
  name: string;
  shortName: string;
  technologies: string[];
  specs: {
    latency: string;
    typeSafety: string;
    caching: string;
    details: string;
  };
}

const AboutClient = () => {
  const [hoveredLayer, setHoveredLayer] = useState<BlueprintLayerId>("client");

  const blueprintLayers: BlueprintLayerData[] = [
    {
      id: "client",
      name: "FRONTEND",
      shortName: "FRONTEND",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      specs: {
        latency: "Server-side & Static Rendering",
        typeSafety: "TypeScript Strict Mode",
        caching: "CDN & Client State",
        details: "Building responsive, interactive user interfaces with React and Next.js. Focused on clean layouts, smooth animations, and fast page loads."
      }
    },
    {
      id: "gateway",
      name: "API LAYER",
      shortName: "API",
      technologies: ["REST APIs", "GraphQL", "JWT Auth", "Zod Validation"],
      specs: {
        latency: "Edge & Serverless Functions",
        typeSafety: "Input Validation (Zod)",
        caching: "Conditional Revalidation",
        details: "Handling API routes, validating request data, managing authentication, and connecting the frontend to backend services."
      }
    },
    {
      id: "engine",
      name: "BACKEND",
      shortName: "SERVER",
      technologies: ["Node.js", "Express.js", "Prisma ORM", "Python"],
      specs: {
        latency: "Serverless & Traditional",
        typeSafety: "ORM Type Integration",
        caching: "Server-side Caching",
        details: "Processing business logic, running database queries, handling file operations, and managing server-side functionality with Node.js and Express."
      }
    },
    {
      id: "datastore",
      name: "DATABASE",
      shortName: "DATABASE",
      technologies: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
      specs: {
        latency: "Connection Pooling",
        typeSafety: "Schema Enforcement",
        caching: "In-memory Caching",
        details: "Storing and managing application data with relational and document databases. Designing schemas, writing efficient queries, and optimizing read/write performance."
      }
    },
    {
      id: "containment",
      name: "DEVOPS & TOOLS",
      shortName: "DEVOPS",
      technologies: ["Docker", "Git & GitHub Actions", "Linux", "Postman"],
      specs: {
        latency: "Automated Pipelines",
        typeSafety: "Isolated Environments",
        caching: "Build Cache",
        details: "Containerizing applications with Docker, automating builds and deployments with CI/CD, managing version control, and testing APIs."
      }
    }
  ];

  const currentStats = blueprintLayers.find(layer => layer.id === hoveredLayer) || blueprintLayers[0];

  const timelineEvents = [
    {
      year: "MAY 2026 - PRESENT",
      title: "Next Level Software Engineering",
      subtitle: "Programming Hero",
      desc: "Advanced software engineering course covering system design, clean architecture, and production-level development practices.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"]
    },
    {
      year: "DEC 2025 - FEB 2026",
      title: "Frontend Developer — Softvence Agency",
      subtitle: "Full-Time, On-site",
      desc: "Built and maintained responsive web applications using React, Next.js, and TypeScript. Created reusable UI components with Tailwind CSS. Integrated REST APIs and authentication features. Worked directly with clients to gather requirements and deliver solutions.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress"]
    },
    {
      year: "JUL 2025 - JAN 2026",
      title: "Complete Web Development",
      subtitle: "Programming Hero",
      desc: "Comprehensive web development training covering frontend and backend technologies, database management, authentication systems, and deployment workflows.",
      tech: ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
    }
  ];

  const corePhilosophy = [
    {
      icon: <IconCpu className="text-matrix-green" size={28} />,
      title: "Clean & Maintainable Code",
      desc: "Writing well-structured, typed code that is easy to read and update. Using TypeScript and clear patterns to keep projects organized as they grow."
    },
    {
      icon: <IconZap className="text-matrix-green" size={28} />,
      title: "Fast Performance",
      desc: "Optimizing load times, keeping bundle sizes small, and using server-side rendering to deliver fast, responsive user experiences."
    },
    {
      icon: <IconTarget className="text-matrix-green" size={28} />,
      title: "Design That Works",
      desc: "Creating polished interfaces where every animation and layout choice serves the user. Good design should make things easier to use, not harder."
    }
  ];

  const diagnosticBars = [
    { label: "Frontend (React, Next.js, TypeScript)", percentage: 92, blocks: "██████████████████░░░" },
    { label: "Backend (Node.js, Express, PostgreSQL)", percentage: 85, blocks: "████████████████░░░░░" },
    { label: "Tools & DevOps (Docker, Git, CI/CD)", percentage: 76, blocks: "██████████████░░░░░░░" }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-space-black">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[15%] right-[5%] h-[500px] w-[500px] rounded-full bg-matrix-green/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] h-[600px] w-[600px] rounded-full bg-matrix-green/5 blur-[150px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(var(--color-matrix-green) 1px, transparent 1px), linear-gradient(90deg, var(--color-matrix-green) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="page-container relative z-10 space-y-24">
        
        {/* Section 1: Bio + System Architecture */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-matrix-green animate-pulse" />
              <span className="font-mono text-xs text-matrix-green uppercase tracking-[0.3em]">PROFILE</span>
            </div>
            
            <GlitchText 
              text="ABOUT ME" 
              className="glow-green font-mono text-3xl font-extrabold text-matrix-green md:text-5xl"
            />
            <div className="h-1 w-24 bg-matrix-green/50" />

            <div className="space-y-6 font-sans text-[17px] leading-relaxed text-text-secondary">
              <p>
                Hi, I&apos;m <span className="text-matrix-green font-semibold">Adnan Sami</span> — a full stack developer based in Dhaka, Bangladesh. I go by <span className="text-matrix-green font-mono">samibyte</span> online.
              </p>
              <p>
                I build web applications using React, Next.js, TypeScript, and Node.js. I focus on creating responsive interfaces, building secure backend systems, and delivering production-ready solutions.
              </p>
              <p>
                Currently advancing my skills in software engineering, exploring system design, clean architecture, and modern deployment workflows.
              </p>
            </div>

            <motion.div 
              className="pt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="https://drive.google.com/file/d/1ie1hDAg067E3UA4QIzTW2S5lDkT-kf93/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-matrix-green bg-matrix-green/5 px-8 py-3.5 font-mono text-sm font-bold tracking-widest text-matrix-green transition-all hover:bg-matrix-green hover:text-space-black hover:shadow-[0_0_25px_rgba(0,255,65,0.3)]"
              >
                <IconDownload className="text-lg" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Interactive System Architecture Diagram */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="glass-card overflow-hidden rounded-xl border border-matrix-border bg-space-deep shadow-2xl relative p-5"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-matrix-border/20 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded bg-matrix-green inline-block animate-pulse" />
                  <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">Tech Architecture</span>
                </div>
                <span className="font-mono text-[9px] text-text-muted">Hover to explore</span>
              </div>

              {/* Architecture Layers */}
              <div className="flex flex-col items-center gap-2 relative">
                
                {/* 1. Frontend Layer */}
                <button
                  onMouseEnter={() => setHoveredLayer("client")}
                  className={`w-full max-w-[340px] px-4 py-2.5 rounded-lg border font-mono text-left transition-all duration-300 relative group overflow-hidden ${
                    hoveredLayer === "client" 
                      ? "bg-matrix-green/10 border-matrix-green glow-green-box scale-102"
                      : "bg-white/[0.02] border-matrix-border/50 text-text-secondary hover:border-matrix-green/60"
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px]">
                    <span className={hoveredLayer === "client" ? "text-matrix-green font-bold" : "text-text-muted"}>[01]</span>
                    <span className="text-[8px] bg-matrix-green/10 border border-matrix-green/20 px-1 rounded text-matrix-green uppercase">Frontend</span>
                  </div>
                  <div className={`text-[12px] font-bold mt-1 ${hoveredLayer === "client" ? "text-matrix-bright" : "text-text-primary"}`}>Frontend</div>
                </button>

                {/* Connector */}
                <div className="h-4 flex flex-col justify-center items-center pointer-events-none gap-0.5">
                  <span className="h-1.5 w-[1px] bg-matrix-green/30" />
                  <span className="h-1.5 w-[1px] bg-matrix-green/30" />
                  {hoveredLayer === "client" && (
                    <motion.div 
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-matrix-green shadow-[0_0_5px_rgba(0,255,65,0.8)]"
                    />
                  )}
                </div>

                {/* 2. API Layer */}
                <button
                  onMouseEnter={() => setHoveredLayer("gateway")}
                  className={`w-full max-w-[340px] px-4 py-2.5 rounded-lg border font-mono text-left transition-all duration-300 relative group overflow-hidden ${
                    hoveredLayer === "gateway" 
                      ? "bg-matrix-green/10 border-matrix-green glow-green-box scale-102"
                      : "bg-white/[0.02] border-matrix-border/50 text-text-secondary hover:border-matrix-green/60"
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px]">
                    <span className={hoveredLayer === "gateway" ? "text-matrix-green font-bold" : "text-text-muted"}>[02]</span>
                    <span className="text-[8px] bg-sky-500/10 border border-sky-500/20 px-1 rounded text-sky-400 uppercase">API</span>
                  </div>
                  <div className={`text-[12px] font-bold mt-1 ${hoveredLayer === "gateway" ? "text-matrix-bright" : "text-text-primary"}`}>API Layer</div>
                </button>

                {/* Connector */}
                <div className="h-4 flex flex-col justify-center items-center pointer-events-none gap-0.5">
                  <span className="h-1.5 w-[1px] bg-matrix-green/30" />
                  <span className="h-1.5 w-[1px] bg-matrix-green/30" />
                  {hoveredLayer === "gateway" && (
                    <motion.div 
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-matrix-green shadow-[0_0_5px_rgba(0,255,65,0.8)]"
                    />
                  )}
                </div>

                {/* 3. Backend Layer */}
                <button
                  onMouseEnter={() => setHoveredLayer("engine")}
                  className={`w-full max-w-[340px] px-4 py-2.5 rounded-lg border font-mono text-left transition-all duration-300 relative group overflow-hidden ${
                    hoveredLayer === "engine" 
                      ? "bg-matrix-green/10 border-matrix-green glow-green-box scale-102"
                      : "bg-white/[0.02] border-matrix-border/50 text-text-secondary hover:border-matrix-green/60"
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px]">
                    <span className={hoveredLayer === "engine" ? "text-matrix-green font-bold" : "text-text-muted"}>[03]</span>
                    <span className="text-[8px] bg-amber-500/10 border border-amber-500/20 px-1 rounded text-amber-400 uppercase">Server</span>
                  </div>
                  <div className={`text-[12px] font-bold mt-1 ${hoveredLayer === "engine" ? "text-matrix-bright" : "text-text-primary"}`}>Backend</div>
                </button>

                {/* Connector */}
                <div className="h-4 flex flex-col justify-center items-center pointer-events-none gap-0.5">
                  <span className="h-1.5 w-[1px] bg-matrix-green/30" />
                  <span className="h-1.5 w-[1px] bg-matrix-green/30" />
                  {hoveredLayer === "engine" && (
                    <motion.div 
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-matrix-green shadow-[0_0_5px_rgba(0,255,65,0.8)]"
                    />
                  )}
                </div>

                {/* 4. Database Layer */}
                <button
                  onMouseEnter={() => setHoveredLayer("datastore")}
                  className={`w-full max-w-[340px] px-4 py-2.5 rounded-lg border font-mono text-left transition-all duration-300 relative group overflow-hidden ${
                    hoveredLayer === "datastore" 
                      ? "bg-matrix-green/10 border-matrix-green glow-green-box scale-102"
                      : "bg-white/[0.02] border-matrix-border/50 text-text-secondary hover:border-matrix-green/60"
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px]">
                    <span className={hoveredLayer === "datastore" ? "text-matrix-green font-bold" : "text-text-muted"}>[04]</span>
                    <span className="text-[8px] bg-purple-500/10 border border-purple-500/20 px-1 rounded text-purple-400 uppercase">Storage</span>
                  </div>
                  <div className={`text-[12px] font-bold mt-1 ${hoveredLayer === "datastore" ? "text-matrix-bright" : "text-text-primary"}`}>Database</div>
                </button>

                {/* Desktop sidebar DevOps block */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1">
                  <span className="h-6 w-[1px] bg-matrix-green/30" />
                  <button
                    onMouseEnter={() => setHoveredLayer("containment")}
                    className={`w-[110px] px-2 py-3 rounded-lg border font-mono text-center transition-all duration-300 relative group text-[10px] ${
                      hoveredLayer === "containment"
                        ? "bg-matrix-green/10 border-matrix-green glow-green-box scale-102"
                        : "bg-white/[0.02] border-matrix-border/50 text-text-secondary hover:border-matrix-green/60"
                    }`}
                  >
                    <div className="font-bold text-matrix-green text-[8px] mb-1">DEVOPS</div>
                    <div className="font-bold text-text-primary uppercase leading-tight">Tools &</div>
                    <div className="text-[7px] text-text-muted uppercase mt-0.5">Deployment</div>
                  </button>
                  <span className="h-6 w-[1px] bg-matrix-green/30" />
                </div>
              </div>

              {/* Mobile DevOps block */}
              <div className="xl:hidden mt-3 flex justify-center">
                <button
                  onMouseEnter={() => setHoveredLayer("containment")}
                  className={`w-full max-w-[340px] px-4 py-2.5 rounded-lg border font-mono text-left transition-all duration-300 relative ${
                    hoveredLayer === "containment"
                      ? "bg-matrix-green/10 border-matrix-green glow-green-box scale-102"
                      : "bg-white/[0.02] border-matrix-border/50 text-text-secondary hover:border-matrix-green/60"
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px]">
                    <span className={hoveredLayer === "containment" ? "text-matrix-green font-bold" : "text-text-muted"}>[05]</span>
                    <span className="text-[8px] bg-emerald-500/10 border border-emerald-500/20 px-1 rounded text-emerald-400 uppercase">Automation</span>
                  </div>
                  <div className={`text-[12px] font-bold mt-1 ${hoveredLayer === "containment" ? "text-matrix-bright" : "text-text-primary"}`}>DevOps & Tools</div>
                </button>
              </div>

              {/* Details Panel */}
              <div className="border border-matrix-green/10 bg-black/40 rounded-lg p-4 mt-5 relative min-h-[170px] flex flex-col justify-between">
                <span className="absolute top-[2px] right-3 font-mono text-[7px] text-text-muted uppercase">DETAILS</span>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredLayer}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 font-mono text-[11px]"
                  >
                    <div>
                      <span className="text-text-muted uppercase text-[9px]">Layer: </span>
                      <span className="text-matrix-bright font-bold uppercase tracking-wider">{currentStats.name}</span>
                    </div>

                    <div>
                      <span className="text-text-muted uppercase text-[9px]">Technologies: </span>
                      <div className="flex flex-wrap gap-1.5 mt-1 text-[9px] text-text-primary">
                        {currentStats.technologies.map((tech: string) => (
                          <span key={tech} className="bg-white/5 border border-white/5 px-2 py-0.5 rounded uppercase">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-[10px] text-text-secondary border-t border-white/5 pt-2 mt-2">
                      <div>
                        <span className="text-[8px] text-text-muted block uppercase">Rendering</span>
                        <span className="font-bold text-text-primary">{currentStats.specs.latency}</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-text-muted block uppercase">Type Safety</span>
                        <span className="font-bold text-text-primary">{currentStats.specs.typeSafety}</span>
                      </div>
                    </div>

                    <div className="text-[10.5px] text-text-secondary leading-relaxed font-sans border-t border-white/5 pt-2">
                      {currentStats.specs.details}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Years", value: "2+" },
                { label: "Projects", value: "10+" },
                { label: "Motivation", value: "∞" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="rounded-lg border border-matrix-border/30 bg-white/[0.02] p-4 text-center backdrop-blur-sm transition-all hover:bg-matrix-green/5 hover:border-matrix-green/60"
                >
                  <h3 className="glow-green font-mono text-2xl font-bold text-matrix-green">
                    <Counter value={stat.value} />
                  </h3>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Skill Level Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card border border-matrix-border/30 p-8 rounded-xl bg-space-deep relative overflow-hidden"
        >
          <h2 className="glow-green font-mono text-xl font-bold text-matrix-green mb-8 flex items-center gap-2">
            <span>&gt; Skill Level</span>
            <span className="h-[2px] flex-1 bg-matrix-green/20" />
          </h2>

          <div className="space-y-6">
            {diagnosticBars.map((bar) => (
              <div key={bar.label} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between font-mono text-xs text-text-secondary gap-1">
                  <span>{bar.label}</span>
                  <span className="text-matrix-green font-bold">{bar.percentage}%</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm leading-tight text-matrix-green overflow-hidden">
                  <span className="text-matrix-green/45 select-none">[</span>
                  <span className="tracking-tighter select-none break-all">{bar.blocks}</span>
                  <span className="text-matrix-green/45 select-none">]</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: How I Work */}
        <div className="space-y-12">
          <div className="text-center md:text-left">
            <h2 className="glow-green font-mono text-2xl font-bold text-matrix-green">
              &gt; How I Work
            </h2>
            <div className="mt-3 h-1 w-20 bg-matrix-green/50 mx-auto md:mx-0" />
            <p className="mt-4 text-sm text-text-secondary max-w-xl">
              The principles that guide my development approach.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {corePhilosophy.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card border border-matrix-border bg-white/[0.01] p-6 rounded-xl relative hover:bg-matrix-green/[0.02] hover:border-matrix-green/60 transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4 opacity-30 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-mono text-md font-bold text-text-primary uppercase tracking-wide mb-3 mt-4">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: Experience Timeline */}
        <div className="space-y-12">
          <div>
            <h2 className="glow-green font-mono text-2xl font-bold text-matrix-green">
              &gt; Experience
            </h2>
            <div className="mt-3 h-1 w-20 bg-matrix-green/50" />
            <p className="mt-4 text-sm text-text-secondary">
              My work history and professional training.
            </p>
          </div>

          <div className="relative border-l border-matrix-border ml-4 md:ml-6 space-y-10 pl-6 md:pl-8 py-2">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group space-y-3"
              >
                {/* Timeline Marker */}
                <div className="absolute -left-[30px] md:-left-[38px] top-1.5 h-4 w-4 rounded-full border border-matrix-green bg-space-black transition-all group-hover:bg-matrix-green group-hover:shadow-[0_0_10px_rgba(0,255,65,0.8)]" />
                
                <span className="font-mono text-xs font-bold text-matrix-green/75 tracking-wider bg-matrix-green/5 border border-matrix-green/20 px-3 py-1 rounded">
                  {event.year}
                </span>

                <div className="glass-card border border-matrix-border bg-white/[0.01] p-6 rounded-xl hover:bg-matrix-green/[0.015] hover:border-matrix-green/40 transition-all duration-300">
                  <h3 className="font-mono text-lg font-bold text-text-primary group-hover:text-matrix-green transition-colors duration-300">
                    {event.title}
                  </h3>
                  <h4 className="font-mono text-xs text-text-muted mt-1 uppercase tracking-wider">
                    {event.subtitle}
                  </h4>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mt-4">
                    {event.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 font-mono text-[9px] text-text-secondary">
                    {event.tech.map((t) => (
                      <span key={t} className="bg-white/5 border border-white/5 px-2 py-0.5 rounded uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA: View Skills */}
        <div className="text-center pt-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a 
              href="/skills" 
              className="inline-flex items-center gap-3 rounded-md border border-matrix-green/30 bg-matrix-green/5 px-8 py-3.5 font-mono text-xs font-bold tracking-widest text-matrix-green transition-all hover:bg-matrix-green/10 hover:shadow-[0_0_15px_rgba(0,255,65,0.1)]"
            >
              View All Skills
              <IconArrowNarrowRight size={14} />
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AboutClient;
