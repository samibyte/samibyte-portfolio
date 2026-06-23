"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink, FiTarget, FiZap, FiBox, FiVideo, FiMaximize2, FiCpu } from "react-icons/fi";
import Link from "next/link";
import BrandIcon from "@/components/ui/BrandIcon";
import { projects } from "@/data/projects";

interface Props {
  slug: string;
}

const ProjectDetailsShell = ({ slug }: Props) => {
  const project = useMemo(() => projects.find((p) => p.id === slug), [slug]);
  const [activeSection, setActiveSection] = useState("overview");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "journey", "hurdle", "triumph", ...(project?.videoUrl ? ["video"] : [])];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [project]);

  if (!project) return null;

  const jumpLinks = [
    ...(project.videoUrl ? [{ id: "video", label: "LAUNCH VIDEO", icon: FiVideo }] : []),
    { id: "overview", label: "I. PROBLEM", icon: FiTarget },
    { id: "journey", label: "II. JOURNEY", icon: FiZap },
    { id: "hurdle", label: "III. HURDLE", icon: FiBox },
    { id: "triumph", label: "IV. TRIUMPH", icon: FiMaximize2 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen pb-32 pt-32 selection:bg-matrix-green/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-[200] h-1.5 origin-[0%] bg-matrix-green shadow-[0_0_15px_rgba(0,255,65,0.5)]" 
        style={{ scaleX }} 
      />

      {/* Floating Jump Links (Sidebar) */}
      <nav className="fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
        {jumpLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`group flex items-center gap-4 transition-all ${
              activeSection === link.id ? "text-matrix-green" : "text-text-muted hover:text-matrix-green/70"
            }`}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
              activeSection === link.id ? "border-matrix-green bg-matrix-green/10 scale-110 shadow-[0_0_15px_rgba(0,255,65,0.2)]" : "border-white/10 bg-white/5"
            }`}>
              <link.icon className="text-sm" />
            </div>
            <span className={`font-mono text-[10px] font-black tracking-widest uppercase transition-all ${
              activeSection === link.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0"
            }`}>
              {link.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Immersive Background Atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--color-matrix-dim)_0%,transparent_50%)] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,var(--color-matrix-dim)_0%,transparent_50%)] opacity-10" />
        <div className="scanlines absolute inset-0 opacity-[0.03]" />
      </div>

      <div className="page-container relative z-10 px-6 lg:pl-32 lg:pr-12">
        <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-12"
            >
              <Link 
                href="/projects"
                className="group inline-flex items-center gap-3 font-mono text-xs font-bold tracking-[0.2em] text-text-muted transition-all hover:text-matrix-green"
              >
                <FiArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
                RETURN TO ARCHIVE
              </Link>
            </motion.div>

            {/* Hero Section */}
            <motion.header 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-8">
                <h1 className="glow-green font-mono text-5xl font-black tracking-tighter text-matrix-green md:text-7xl lg:text-9xl">
                  {project.title}
                </h1>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[2px] w-24 bg-matrix-green/40" />
                  <span className="font-mono text-xs font-bold tracking-[0.4em] text-matrix-green/60 uppercase">
                    EXPEDITION // {project.id}
                  </span>
                </div>
              </div>
              <div className="flex items-end lg:col-span-4">
                <p className="text-xl font-medium leading-relaxed text-text-secondary border-l-2 border-matrix-green/20 pl-8 italic">
                  "{project.description}"
                </p>
              </div>
            </motion.header>

            <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
              {/* Main Content Flow */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="order-1 flex-1 space-y-32 lg:col-span-8"
              >
                {/* Video Walkthrough (Optional) */}
                {project.videoUrl && (
                  <section id="video" className="relative transition-all duration-700">
                    <h2 className="mb-10 font-mono text-sm font-black tracking-[0.4em] text-matrix-green uppercase flex items-center gap-4">
                      <span className="h-px w-8 bg-matrix-green/50" /> MISSION DEBRIEF // VIDEO
                    </h2>
                    <div className="relative aspect-video glass-card overflow-hidden group shadow-2xl">
                      <iframe 
                          src={project.videoUrl}
                          title={`${project.title} Walkthrough`}
                          className="absolute inset-0 h-full w-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-[1.01]"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                      />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                    </div>
                  </section>
                )}

                {/* Content Sections */}
                <section id="overview" className="relative transition-all duration-700">
                  <h2 className="mb-10 font-mono text-sm font-black tracking-[0.4em] text-red-500 uppercase flex items-center gap-4">
                    <span className="h-px w-8 bg-red-500/50" /> I. THE PROBLEM
                  </h2>
                  <div className="space-y-8">
                    <p className="text-2xl font-light leading-relaxed text-text-primary/95">
                      {project.caseStudy?.problem}
                    </p>
                    <div className="p-10 glass-card bg-white/[0.01] border-white/5 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-matrix-green/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <p className="text-lg leading-relaxed text-text-secondary relative z-10 italic">
                        {project.longDescription}
                      </p>
                    </div>
                  </div>
                </section>

                <section id="journey" className="relative transition-all duration-700">
                  <h2 className="mb-10 font-mono text-sm font-black tracking-[0.4em] text-matrix-green uppercase flex items-center gap-4">
                    <span className="h-px w-8 bg-matrix-green/50" /> II. THE JOURNEY
                  </h2>
                  <p className="text-2xl font-light leading-relaxed text-text-primary/95">
                    {project.caseStudy?.solution}
                  </p>
                </section>

                <section id="hurdle" className="relative transition-all duration-700">
                  <h2 className="mb-10 font-mono text-sm font-black tracking-[0.4em] text-yellow-500 uppercase flex items-center gap-4">
                    <span className="h-px w-8 bg-yellow-500/50" /> III. THE HURDLE
                  </h2>
                  <div className="p-12 glass-card bg-yellow-500/[0.02] border-yellow-500/10 rounded-3xl">
                    <p className="text-xl leading-relaxed text-text-secondary">
                      {project.caseStudy?.challenges}
                    </p>
                  </div>
                </section>

                <section id="triumph" className="relative transition-all duration-700">
                  <h2 className="mb-10 font-mono text-sm font-black tracking-[0.4em] text-matrix-green uppercase flex items-center gap-4">
                    <span className="h-px w-8 bg-matrix-green/50" /> IV. THE TRIUMPH
                  </h2>
                  <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="space-y-8">
                      <h4 className="font-mono text-[10px] font-bold text-text-muted tracking-[0.3em] uppercase">IMPACT REPORT</h4>
                      <ul className="space-y-6">
                        {project.caseStudy?.results.map((result: string, i: number) => (
                          <li key={i} className="flex items-start gap-4">
                            <div className="mt-2 h-2 w-2 rounded-full bg-matrix-green glow-green-box" />
                            <span className="text-lg text-text-secondary leading-snug">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="glass-card bg-matrix-green/[0.02] p-10 flex flex-col justify-center">
                       <h4 className="mb-6 font-mono text-[10px] font-bold text-text-muted tracking-[0.3em] uppercase">LESSONS LEARNED</h4>
                       <p className="text-lg italic leading-relaxed text-text-secondary">
                          {project.caseStudy?.learnings}
                       </p>
                    </div>
                  </div>
                </section>
              </motion.div>

              {/* Sidebar */}
              <motion.aside 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="order-2 space-y-12 lg:col-span-4"
              >
                {/* Tech Stack */}
                <div className="glass-card p-1">
                  <div className="bg-white/[0.02] p-6 border-b border-white/5">
                    <h3 className="font-mono text-xs font-black tracking-widest text-text-muted uppercase flex items-center gap-3">
                      <FiCpu /> CORE SYSTEMS
                    </h3>
                  </div>
                  <div className="p-8 grid grid-cols-2 gap-8">
                    {project.tech.map((t) => (
                      <div key={t.name} className="flex flex-col items-center gap-3 group">
                        <div className="h-14 w-14 rounded-full bg-white/5 flex items-center justify-center border border-white/5 transition-all duration-300 group-hover:scale-110 group-hover:border-matrix-green/30 group-hover:bg-matrix-green/5">
                          <BrandIcon Icon={t.icon} color={t.color} size="text-2xl" className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="font-mono text-[9px] font-bold tracking-widest text-text-muted uppercase transition-colors group-hover:text-matrix-green">
                          {t.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Launchpad */}
                <div className="sticky top-32 space-y-8">
                  <div className="glass-card p-1">
                    <div className="bg-matrix-green/10 p-6 border-b border-matrix-green/10">
                       <h3 className="font-mono text-xs font-black tracking-widest text-matrix-green uppercase flex items-center gap-3">
                        COMMAND CENTER
                       </h3>
                    </div>
                    <div className="p-8 space-y-4">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-between group rounded-xl bg-matrix-green px-8 py-5 font-mono text-sm font-black tracking-widest text-space-black transition-all hover:bg-matrix-bright hover:shadow-[0_0_40px_rgba(0,255,65,0.4)]">
                        DEPLOY LIVE <FiExternalLink className="transition-transform group-hover:translate-x-1" />
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-5 font-mono text-xs font-bold tracking-widest text-text-secondary transition-all hover:bg-white/10 hover:border-white/20">
                        <FiGithub /> SOURCE ARCHIVE
                      </a>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </div>
      </div>
    </div>
  );
};

export default ProjectDetailsShell;
