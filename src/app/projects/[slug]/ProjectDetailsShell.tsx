"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  IconArrowLeft, IconGithub, IconExternalLink, IconTarget, IconZap,
  IconAlertTriangle, IconAward, IconCpu, IconPlay, IconCheckCircle,
} from "@/components/ui/Icons";
import Link from "next/link";
import BrandIcon from "@/components/ui/BrandIcon";
import type { Project } from "@/data/projects";
import { getProject } from "@/lib/projectStore";

interface Props {
  project: Project;
}

const chapters = [
  { id: "overview",  label: "The Problem",   num: "01", icon: <IconTarget />,          color: "red"    as const },
  { id: "journey",   label: "The Solution",  num: "02", icon: <IconZap />,             color: "green"  as const },
  { id: "hurdle",    label: "The Challenge", num: "03", icon: <IconAlertTriangle />,   color: "yellow" as const },
  { id: "triumph",   label: "The Outcome",   num: "04", icon: <IconAward />,           color: "green"  as const },
];

const ProjectDetailsShell = ({ project: initialProject }: Props) => {
  const [project, setProject] = useState<Project>(initialProject);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    getProject(initialProject.id)
      .then((data) => {
        if (data) {
          setProject(data);
        }
      })
      .catch((err) => console.error("Error updating project details from backend:", err));
  }, [initialProject.id]);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;
      const threshold = 200; // Pixels from top of viewport to trigger active change
      for (const { id } of chapters) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > threshold) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    // Initialize active state on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      isScrolling.current = true;
      setActiveSection(id);
      
      const navbarOffset = 96;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Clear scroll lock after transition finishes
      setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    }
  };

  // Safely format any YouTube link (watch, share, shorts) to an embeddable URL
  const getYouTubeEmbedUrl = (url: string | null | undefined) => {
    if (!url) return null;
    if (url.includes("/embed/")) return url;
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?rel=0&modestbranding=1`;
    }
    return url;
  };

  const videoEmbedUrl = getYouTubeEmbedUrl(project.videoUrl);

  return (
    <div className="relative min-h-screen bg-space-black/70 text-white selection:bg-matrix-green/20 selection:text-white">

      {/* ── Ambient Background ────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,65,0.03),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(0,255,65,0.015),transparent)]" />
      </div>

      {/* ── Fixed Bottom Bar ───────────────────────────────── */}
      <div className="fixed bottom-0 left-0 z-[100] w-full bg-space-black/90 backdrop-blur-2xl border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-3 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/projects"
              className="group flex items-center gap-2.5 text-text-muted hover:text-white transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] group-hover:border-matrix-green/30 group-hover:bg-matrix-green/[0.05] transition-all">
                <IconArrowLeft className="text-xs" />
              </span>
              <span className="hidden sm:block font-mono text-[10px] tracking-widest uppercase">Projects</span>
            </Link>
            <span className="text-white/[0.08] text-lg">/</span>
            <span className="font-mono text-sm font-bold text-white">{project.title}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/[0.08] px-3.5 py-2 font-mono text-[10px] font-bold tracking-widest text-text-muted uppercase hover:border-white/20 hover:text-white transition-all"
            >
              <IconGithub size={14} /> <span className="hidden sm:inline">Source</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-matrix-green/90 px-3.5 py-2 font-mono text-[10px] font-bold tracking-widest text-space-black uppercase hover:bg-matrix-green transition-all"
            >
              Live Demo <IconExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Hero Header ─────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pt-12 pb-10 lg:pt-16 lg:pb-12 border-b border-white/[0.04]"
        >
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-matrix-green/20 bg-matrix-green/[0.05] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-matrix-green animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-matrix-green/80 uppercase">
                  Case Study
                </span>
              </span>
            </div>

            <h1 className="mb-5 font-mono text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
              <span className="text-matrix-green">.</span>
            </h1>

            <p className="text-base leading-relaxed text-text-secondary md:text-lg max-w-2xl">
              {project.description}
            </p>
          </div>
        </motion.header>
      </div>

      {/* ── Three-Column Layout ─────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-6 lg:px-8 pt-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_320px] xl:grid-cols-[240px_1fr_360px] gap-8 xl:gap-12">

          {/* ═══ LEFT SIDEBAR — Navigation ═══════════════════ */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">

              {/* Chapter Navigation */}
              <nav>
                <p className="mb-3 font-mono text-[9px] font-bold tracking-[0.35em] text-text-muted/60 uppercase">
                  Navigate
                </p>
                <div className="space-y-0.5">
                  {chapters.map(({ id, label, num }) => {
                    const isActive = activeSection === id;
                    return (
                      <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => scrollToSection(e, id)}
                        className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 ${
                          isActive
                            ? "bg-matrix-green/[0.08] text-matrix-green"
                            : "text-text-muted hover:bg-white/[0.03] hover:text-white"
                        }`}
                      >
                        {/* Active indicator line */}
                        {isActive && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-5 rounded-full bg-matrix-green"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                        <span className={`font-mono text-[10px] ${isActive ? "text-matrix-green/60" : "opacity-30"}`}>
                          {num}
                        </span>
                        <span className="text-[13px] font-medium">{label}</span>
                      </a>
                    );
                  })}
                </div>
              </nav>

              <div className="h-px bg-white/[0.04]" />

              {/* Tech Stack (compact) */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <IconCpu className="text-text-muted/60 text-xs" />
                  <p className="font-mono text-[9px] font-bold tracking-[0.35em] text-text-muted/60 uppercase">
                    Stack
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center gap-2 rounded-md border border-white/[0.05] bg-white/[0.02] px-2.5 py-1.5 hover:border-matrix-green/20 transition-colors"
                      title={t.name}
                    >
                      <BrandIcon icon={t.icon} color={t.color} variant={t.variant} size="text-sm" />
                      <span className="font-mono text-[10px] text-text-muted">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ═══ CENTER — Main Content ═══════════════════════ */}
          <main className="min-w-0">

            {/* Mobile-only nav pills */}
            <nav className="mb-10 flex gap-2 overflow-x-auto pb-2 lg:hidden scrollbar-none">
              {chapters.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  className={`flex-none rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold tracking-widest uppercase transition-all ${
                    activeSection === id
                      ? "border-matrix-green bg-matrix-green/10 text-matrix-green"
                      : "border-white/10 text-text-muted hover:border-white/20 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Chapter I — Problem */}
            <section id="overview" className="mb-16 scroll-mt-24">
              <ChapterHeader num="01" label="The Problem" color="red" icon={<IconTarget />} />
              <div className="mt-6 space-y-5">
                <p className="text-[15px] leading-[1.85] text-text-secondary">
                  {project.caseStudy?.problem}
                </p>
                <blockquote className="relative border-l-2 border-red-500/30 pl-5 py-1">
                  <p className="text-[15px] italic leading-relaxed text-text-muted">
                    {project.longDescription}
                  </p>
                </blockquote>
              </div>
            </section>

            {/* Chapter II — Solution */}
            <section id="journey" className="mb-16 scroll-mt-24">
              <ChapterHeader num="02" label="The Solution" color="green" icon={<IconZap />} />
              <p className="mt-6 text-[15px] leading-[1.85] text-text-secondary">
                {project.caseStudy?.solution}
              </p>
            </section>

            {/* Chapter III — Challenge */}
            <section id="hurdle" className="mb-16 scroll-mt-24">
              <ChapterHeader num="03" label="The Challenge" color="yellow" icon={<IconAlertTriangle />} />
              <div className="mt-6 rounded-xl border border-yellow-500/10 bg-yellow-500/[0.02] p-6">
                <p className="text-[15px] leading-[1.85] text-text-secondary">
                  {project.caseStudy?.challenges}
                </p>
              </div>
            </section>

            {/* Chapter IV — Outcome */}
            <section id="triumph" className="mb-16 scroll-mt-24">
              <ChapterHeader num="04" label="The Outcome" color="green" icon={<IconAward />} />
              <div className="mt-6 space-y-6">
                {/* Results */}
                <ul className="space-y-2.5">
                  {project.caseStudy?.results.map((result: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-lg border border-white/[0.05] bg-white/[0.015] p-4 hover:border-matrix-green/15 hover:bg-matrix-green/[0.02] transition-all"
                    >
                      <IconCheckCircle className="mt-0.5 flex-none text-matrix-green text-sm" />
                      <p className="text-[14px] leading-relaxed text-text-secondary">{result}</p>
                    </li>
                  ))}
                </ul>
                {/* Key Takeaway */}
                <div className="rounded-xl border border-matrix-green/10 bg-matrix-green/[0.025] p-6">
                  <p className="mb-2 font-mono text-[9px] font-bold tracking-widest text-matrix-green/50 uppercase">
                    Key Takeaway
                  </p>
                  <p className="text-[15px] italic leading-relaxed text-text-secondary">
                    {project.caseStudy?.learnings}
                  </p>
                </div>
              </div>
            </section>

            {/* Mobile tech stack & actions */}
            <div className="lg:hidden space-y-6 mt-8">
              {/* Tech Stack */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <IconCpu className="text-text-muted text-xs" />
                  <p className="font-mono text-[9px] font-bold tracking-[0.35em] text-text-muted uppercase">
                    Tech Stack
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2"
                    >
                      <BrandIcon icon={t.icon} color={t.color} variant={t.variant} size="text-base" />
                      <span className="font-mono text-[11px] text-text-secondary">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* ═══ RIGHT SIDEBAR — Video & Actions ═════════════ */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-5">

              {/* Demo Walkthrough Video */}
              <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-black/40">
                <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
                  <IconPlay className="text-matrix-green text-xs" />
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-text-muted uppercase">
                    Project Walkthrough
                  </span>
                </div>
                {videoEmbedUrl ? (
                  <div className="aspect-video">
                    <iframe
                      src={videoEmbedUrl}
                      title={`${project.title} Demo`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video flex flex-col items-center justify-center bg-white/[0.02]">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/[0.08] bg-white/[0.03] mb-3">
                      <IconPlay className="text-text-muted text-lg" />
                    </div>
                    <p className="font-mono text-[10px] tracking-widest text-text-muted/50 uppercase">
                      Coming Soon
                    </p>
                  </div>
                )}
              </div>

              {/* Quick Links */}
              <div className="space-y-2.5">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-matrix-green/90 py-3.5 font-mono text-[11px] font-bold tracking-widest text-space-black uppercase hover:bg-matrix-green transition-all"
                >
                  Live Demo <IconExternalLink className="transition-transform group-hover:translate-x-0.5 text-xs" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/[0.08] py-3.5 font-mono text-[11px] font-bold tracking-widest text-text-muted uppercase hover:border-white/15 hover:text-white transition-all"
                >
                  <IconGithub className="text-sm" /> View Source
                </a>
              </div>

              {/* Project Info Card */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="mb-4 font-mono text-[9px] font-bold tracking-[0.35em] text-text-muted/60 uppercase">
                  About this project
                </p>
                <p className="text-[13px] leading-relaxed text-text-muted">
                  {project.longDescription}
                </p>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

/* ── Chapter Header Component ─────────────────────────── */
type ChapterColor = "red" | "green" | "yellow";

const colorMap: Record<ChapterColor, { label: string; heading: string; line: string }> = {
  red:    { label: "text-red-400/50",          heading: "text-red-400",       line: "bg-red-400/20" },
  green:  { label: "text-matrix-green/50",     heading: "text-matrix-green",  line: "bg-matrix-green/20" },
  yellow: { label: "text-yellow-400/50",       heading: "text-yellow-400",    line: "bg-yellow-400/20" },
};

function ChapterHeader({
  num, label, color, icon,
}: {
  num: string; label: string; color: ChapterColor; icon: React.ReactNode;
}) {
  const c = colorMap[color];
  return (
    <div className="space-y-2">
      <div className={`flex items-center gap-2.5 ${c.label}`}>
        <span className="font-mono text-[11px] font-bold tracking-widest uppercase">{num}</span>
        <span className="text-sm">{icon}</span>
      </div>
      <h2 className={`font-mono text-2xl font-black tracking-tight md:text-3xl ${c.heading}`}>
        {label}
      </h2>
      <div className={`h-px w-10 ${c.line}`} />
    </div>
  );
}

export default ProjectDetailsShell;
