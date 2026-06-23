"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle, 
  FiTarget, FiZap, FiCpu, FiBookOpen, FiVideo, FiMenu, FiX 
} from "react-icons/fi";
import Link from "next/link";
import { projects } from "@/data/projects";
import BrandIcon from "@/components/ui/BrandIcon";

interface ProjectDetailsClientProps {
  slug: string;
}

const ProjectDetailsClient = ({ slug }: ProjectDetailsClientProps) => {
  const project = projects.find((p) => p.id === slug);
  const [activeSection, setActiveSection] = useState("brief");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the middle of the viewport
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ["brief", "mission", "crucible", "aftermath", "video"];
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  if (!project) return null;

  const videoSrc = project.videoUrl 
    ? `${project.videoUrl}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&enablejsapi=1` 
    : "";

  const jumpLinks = [
    { id: "brief", label: "I. BRIEF", icon: FiTarget },
    { id: "mission", label: "II. MISSION", icon: FiZap },
    { id: "crucible", label: "III. CRUCIBLE", icon: FiCpu },
    { id: "aftermath", label: "IV. AFTERMATH", icon: FiBookOpen },
    ...(project.videoUrl ? [{ id: "video", label: "V. DEBRIEF", icon: FiVideo }] : []),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-space-black selection:bg-matrix-green/30 selection:text-white">
      
      {/* GLOBAL PROGRESS BAR (Fixed at the very top) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-[1000] h-1.5 bg-matrix-green origin-left shadow-[0_0_20px_rgba(0,255,65,0.6)]" 
        style={{ scaleX }}
      >
        <div className="absolute inset-0 scanlines opacity-30" />
      </motion.div>

      {/* DESKTOP SIDEBAR NAVIGATION (Pinned to view) */}
      <nav className="fixed left-6 top-1/2 z-[100] hidden -translate-y-1/2 flex-col gap-6 lg:flex" aria-label="Section Navigation">
        {jumpLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`group relative flex items-center justify-center`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(link.id);
              if (el) {
                const offset = 100;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = el.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 ${
              activeSection === link.id 
                ? "border-matrix-green bg-matrix-green/20 shadow-[0_0_15px_rgba(0,255,65,0.4)] scale-110" 
                : "border-white/10 bg-space-deep/50 hover:border-matrix-green/40 hover:bg-matrix-green/5"
            }`}>
              <link.icon className={`text-lg transition-colors duration-500 ${
                activeSection === link.id ? "text-matrix-green" : "text-text-muted group-hover:text-matrix-green/70"
              }`} />
            </div>
            
            {/* Label Tooltip */}
            <span className={`absolute left-14 whitespace-nowrap rounded-lg bg-space-black/90 px-4 py-2 font-mono text-[10px] font-black tracking-widest text-matrix-green border border-matrix-green/30 backdrop-blur-md opacity-0 transition-all pointer-events-none group-hover:opacity-100 group-hover:translate-x-2 ${
               activeSection === link.id ? "opacity-100 translate-x-1" : ""
            }`}>
              {link.label}
            </span>
          </a>
        ))}
      </nav>

      {/* MOBILE FLOATING JUMP MENU */}
      <div className="fixed bottom-8 right-8 z-[200] lg:hidden">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-20 right-0 mb-4 flex flex-col gap-3 items-end"
            >
              {jumpLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-4 rounded-full border px-6 py-4 backdrop-blur-xl transition-all ${
                    activeSection === link.id 
                      ? "border-matrix-green bg-matrix-green/20 text-matrix-green" 
                      : "border-white/10 bg-space-deep/90 text-text-muted"
                  }`}
                >
                  <span className="font-mono text-[10px] font-black tracking-widest uppercase">{link.label}</span>
                  <link.icon className="text-sm" />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-matrix-green text-space-black shadow-[0_0_30px_rgba(0,255,65,0.4)] active:scale-95 transition-transform"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 border-b border-matrix-border/10 overflow-hidden">
        <div className="page-container relative z-10 px-6 lg:pl-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link 
              href="/projects"
              className="group mb-12 inline-flex items-center gap-3 font-mono text-xs font-bold tracking-[0.3em] text-matrix-green/60 transition-all hover:text-matrix-green"
            >
              <FiArrowLeft className="transition-transform group-hover:-translate-x-2" />
              ARCHIVE_INDEX
            </Link>
            
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <h1 className="glow-green font-mono text-6xl font-black text-matrix-green md:text-8xl lg:text-9xl italic uppercase tracking-tighter leading-[0.85]">
                  {project.title}
                </h1>
                <div className="mt-8 flex items-center gap-6">
                  <div className="h-0.5 w-24 bg-matrix-green/30" />
                  <span className="font-mono text-[10px] font-bold tracking-[0.5em] text-matrix-green/40 uppercase">
                    DEPLOYMENT_ID // {project.id}
                  </span>
                </div>
              </div>
              <div className="hidden lg:block">
                <p className="max-w-xs text-right font-mono text-[10px] leading-relaxed text-text-muted uppercase tracking-widest">
                  Authentication verified. <br />
                  Data retrieval in progress... <br />
                  <span className="text-matrix-green/60">Success.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Atmosphere */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-matrix-green/5 blur-[150px] rounded-full pointer-events-none opacity-50" />
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full bg-matrix-green/5 blur-[120px] rounded-full pointer-events-none opacity-30" />
      </header>

      <div className="page-container relative z-10 px-6 py-24 lg:pl-32">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
          
          {/* Main Content Flow */}
          <motion.main 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-40"
          >
            
            <section id="brief" className="scroll-mt-48">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-matrix-green/50 flex items-center gap-4">
                    <span className="h-px w-12 bg-matrix-green/20" /> 01 // THE_BRIEF
                  </h2>
                  <p className="text-3xl leading-[1.3] text-text-primary md:text-4xl font-light italic">
                    {project.description}
                  </p>
                </div>

                <div className="glass-card relative overflow-hidden p-10 bg-matrix-green/[0.01] border-white/5">
                  <div className="absolute top-0 left-0 w-1 h-full bg-matrix-green" />
                  <p className="text-xl leading-relaxed text-text-secondary font-light">
                    {project.longDescription}
                  </p>
                </div>
              </div>
            </section>

            <section id="mission" className="scroll-mt-48">
              <div className="space-y-12">
                <h2 className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-matrix-green/50 flex items-center gap-4">
                  <span className="h-px w-12 bg-matrix-green/20" /> 02 // THE_MISSION
                </h2>
                
                <div className="grid grid-cols-1 gap-12">
                  <div className="space-y-6 relative">
                    <div className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                      <p className="font-mono text-[10px] text-red-500 uppercase tracking-[0.3em] font-black">! THE PROBLEM</p>
                    </div>
                    <p className="text-2xl leading-relaxed text-text-secondary border-l-2 border-red-500/20 pl-8 font-light">
                      {project.caseStudy.problem}
                    </p>
                  </div>

                  <div className="space-y-6 relative">
                    <div className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-matrix-green shadow-[0_0_10px_rgba(0,255,65,0.5)]" />
                      <p className="font-mono text-[10px] text-matrix-green uppercase tracking-[0.3em] font-black">* THE SOLUTION</p>
                    </div>
                    <p className="text-2xl leading-relaxed text-text-secondary border-l-2 border-matrix-green/20 pl-8 font-light">
                      {project.caseStudy.solution}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="crucible" className="scroll-mt-48">
              <div className="space-y-12">
                <h2 className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-matrix-green/50 flex items-center gap-4">
                  <span className="h-px w-12 bg-matrix-green/20" /> 03 // THE_CRUCIBLE
                </h2>
                
                <div className="glass-card relative p-12 bg-red-500/[0.02] border-red-500/10 rounded-3xl overflow-hidden group">
                  <div className="absolute -right-8 -top-8 p-6 opacity-[0.03] rotate-12 transition-all group-hover:scale-110 group-hover:opacity-10 pointer-events-none">
                     <FiZap className="text-[14rem] text-red-500" />
                  </div>
                  <h3 className="text-2xl font-black text-text-primary mb-8 italic tracking-tight uppercase">SYSTEM_CONFLICT // CHALLENGES</h3>
                  <p className="text-xl leading-relaxed text-text-secondary font-light relative z-10">
                    {project.caseStudy.challenges}
                  </p>
                </div>
              </div>
            </section>

            <section id="aftermath" className="scroll-mt-48 pb-10">
              <div className="space-y-12">
                <h2 className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-matrix-green/50 flex items-center gap-4">
                  <span className="h-px w-12 bg-matrix-green/20" /> 04 // THE_AFTERMATH
                </h2>
                
                <div className="grid grid-cols-1 gap-8">
                  <div className="space-y-6">
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-matrix-green/60">IMPACT_ASSESSMENT</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {project.caseStudy.results.map((result, i) => (
                        <div key={i} className="flex gap-6 p-6 border border-matrix-green/10 rounded-2xl bg-matrix-green/[0.02] hover:bg-matrix-green/5 transition-all group">
                           <FiCheckCircle className="mt-1 text-matrix-green shrink-0 text-xl group-hover:scale-110 transition-transform" />
                           <p className="text-lg text-text-secondary leading-relaxed font-light">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-12 bg-gradient-to-br from-matrix-bright/5 via-space-deep to-transparent border-matrix-green/20 rounded-3xl relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1.5 h-full bg-matrix-green shadow-[0_0_15px_rgba(0,255,65,0.3)]" />
                     <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-matrix-green mb-8 font-black">EVOLUTIONARY_LEARNINGS</h4>
                     <p className="text-2xl text-text-primary italic leading-relaxed font-light">
                       "{project.caseStudy.learnings}"
                     </p>
                  </div>
                </div>
              </div>
            </section>

          </motion.main>

          {/* Sticky Sidebar (Tech + Interaction) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-12">
              
              {/* Sticky Video Deck (Top of Sidebar) */}
              {project.videoUrl && (
                <div className="group relative aspect-video overflow-hidden rounded-2xl border-2 border-matrix-green/20 bg-space-black shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <iframe
                    src={videoSrc}
                    className="h-full w-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    title="Project Walkthrough"
                    allowFullScreen
                  />
                  
                  {/* Status Overlay */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full bg-space-black/80 px-3 py-1 backdrop-blur-md border border-white/10">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-matrix-green" />
                    <span className="font-mono text-[8px] font-black uppercase tracking-[0.2em] text-white/70">
                      Live Feed
                    </span>
                  </div>
                </div>
              )}
              
              {/* Launcher */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="glass-card p-1 group"
              >
                <div className="bg-matrix-green/10 p-6 border-b border-matrix-green/10">
                  <h3 className="font-mono text-[10px] font-black tracking-[0.4em] text-matrix-green uppercase flex items-center gap-3">
                    COMMAND_CENTER
                  </h3>
                </div>
                <div className="p-8 space-y-4">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-between group/link rounded-xl bg-matrix-green px-8 py-5 font-mono text-xs font-black tracking-[0.3em] text-space-black transition-all hover:bg-matrix-bright hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]">
                    DEPLOY_LIVE <FiExternalLink className="transition-transform group-hover/link:translate-x-1" />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-5 font-mono text-xs font-bold tracking-[0.2em] text-text-secondary transition-all hover:bg-white/10 hover:border-white/20">
                    <FiGithub /> SOURCE_ARCHIVE
                  </a>
                </div>
              </motion.div>

              {/* Tech Ecosystem */}
              <div className="glass-card overflow-hidden">
                <div className="bg-white/5 p-6 border-b border-white/5">
                  <h3 className="font-mono text-[10px] font-black tracking-[0.4em] text-text-muted uppercase flex items-center gap-3">
                    SYSTEM_STARCHART
                  </h3>
                </div>
                <div className="p-10 grid grid-cols-2 gap-10">
                  {project.tech.map((pt) => (
                    <div key={pt.name} className="flex flex-col items-center gap-4 group/tech">
                      <div className="relative h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 transition-all duration-300 group-hover/tech:scale-110 group-hover/tech:border-matrix-green/30 group-hover/tech:bg-matrix-green/5">
                        <BrandIcon Icon={pt.icon} color={pt.color} size="text-3xl" className="opacity-60 group-hover/tech:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-matrix-green/10 opacity-0 group-hover/tech:opacity-100 blur-xl transition-opacity animate-pulse" />
                      </div>
                      <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-text-muted uppercase transition-colors group-hover/tech:text-matrix-green">
                        {pt.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal Status Card */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center sm:text-left">
                <p className="font-mono text-[9px] leading-relaxed text-text-muted uppercase tracking-widest italic">
                  &gt; Documentation revision 4.2.0 <br />
                  &gt; Integrity check: PASS <br />
                  &gt; Encrypted transport active
                </p>
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* Dossier Footer */}
      <footer className="page-container py-40 border-t border-matrix-border/10 flex flex-col items-center gap-16 text-center lg:pl-32">
          <div className="space-y-6">
            <h3 className="font-mono text-sm uppercase tracking-[1em] text-text-muted">SESSION_TERMINATED</h3>
            <div className="flex h-1.5 w-80 mx-auto rounded-full bg-white/5 overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "circOut" }}
                 className="h-full bg-matrix-green shadow-[0_0_20px_rgba(0,255,65,0.8)]" 
               />
            </div>
          </div>
          
          <Link 
              href="/projects"
              className="group relative flex items-center gap-6 rounded-2xl border-2 border-matrix-green/30 px-16 py-6 transition-all hover:bg-matrix-green hover:border-matrix-green active:scale-95 shadow-xl"
            >
              <FiArrowLeft className="text-matrix-green text-xl transition-transform group-hover:-translate-x-3 group-hover:text-space-black" />
              <span className="font-mono text-base font-black uppercase tracking-[0.3em] text-matrix-green group-hover:text-space-black">CLOSE_DOSSIER</span>
              <div className="absolute -inset-1 border border-matrix-green/20 rounded-2xl animate-pulse group-hover:hidden" />
          </Link>
      </footer>
    </div>
  );
};

export default ProjectDetailsClient;
