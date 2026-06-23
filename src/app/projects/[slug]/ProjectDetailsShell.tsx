"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FiArrowLeft, FiGithub, FiExternalLink, FiTarget, FiZap,
  FiAlertTriangle, FiAward, FiCpu, FiPlay, FiCheckCircle,
} from "react-icons/fi";
import Link from "next/link";
import BrandIcon from "@/components/ui/BrandIcon";
import { projects } from "@/data/projects";

interface Props {
  slug: string;
}

const chapters = [
  { id: "overview",  label: "The Problem",      num: "01" },
  { id: "journey",   label: "The Solution",     num: "02" },
  { id: "hurdle",    label: "The Challenge",    num: "03" },
  { id: "triumph",   label: "The Outcome",      num: "04" },
];

const ProjectDetailsShell = ({ slug }: Props) => {
  const project = useMemo(() => projects.find((p) => p.id === slug), [slug]);
  const [activeSection, setActiveSection] = useState("overview");
  const [showStickyNav, setShowStickyNav] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;
      for (const { id } of chapters) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      }
      setShowStickyNav(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) return null;

  const videoSrc = project.videoUrl
    ? `${project.videoUrl}${project.videoUrl.includes("?") ? "&" : "?"}autoplay=1&mute=0&rel=0`
    : "";

  return (
    <div className="relative min-h-screen bg-space-black text-white selection:bg-matrix-green/20 selection:text-white">

      {/* ── Read Progress Bar ─────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[200] h-[2px] origin-[0%] bg-matrix-green"
        style={{ scaleX }}
      />

      {/* ── Sticky Top Nav ────────────────────────────────── */}
      {showStickyNav && (
        <div className="fixed top-0 left-0 z-[150] w-full bg-space-black/90 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-12">
            <div className="flex items-center gap-4">
              <Link
                href="/projects"
                className="flex items-center gap-2 text-text-muted hover:text-white transition-colors"
              >
                <FiArrowLeft className="text-sm" />
                <span className="font-mono text-[10px] tracking-widest uppercase">Projects</span>
              </Link>
              <span className="text-white/10">/</span>
              <span className="font-mono text-sm font-bold text-matrix-green">{project.title}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 font-mono text-[10px] font-bold tracking-widest text-text-secondary uppercase hover:border-white/20 hover:text-white transition-all"
              >
                <FiGithub /> Repo
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-matrix-green px-4 py-2 font-mono text-[10px] font-bold tracking-widest text-space-black uppercase hover:brightness-110 transition-all"
              >
                Live Demo <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Ambient Background ────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,65,0.04),transparent)]" />
      </div>

      {/* ── Main Layout ───────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-32 lg:px-12">

        {/* Back Link */}
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors"
          >
            <FiArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
            <span className="font-mono text-xs tracking-widest uppercase">All Projects</span>
          </Link>
        </motion.div>

        {/* ── Hero Header ───────────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.4em] text-matrix-green/60 uppercase">
              Case Study
            </span>
            <span className="h-px w-8 bg-matrix-green/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-text-muted uppercase">
              {project.id}
            </span>
          </div>

          <h1 className="mb-6 font-mono text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
            {project.title}
            <span className="text-matrix-green">.</span>
          </h1>

          <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
            {project.description}
          </p>
        </motion.header>

        {/* ── Two-Column Grid ───────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* LEFT — Narrative Content */}
          <div className="lg:col-span-7 xl:col-span-7">

            {/* Chapter nav (mobile) */}
            <nav className="mb-12 flex gap-2 overflow-x-auto pb-2 lg:hidden">
              {chapters.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`flex-none rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold tracking-widest uppercase transition-all ${
                    activeSection === id
                      ? "border-matrix-green text-matrix-green"
                      : "border-white/10 text-text-muted hover:border-white/20 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Chapter I — Problem */}
            <section id="overview" className="mb-20 scroll-mt-24">
              <ChapterHeader num="01" label="The Problem" color="red" icon={<FiTarget />} />
              <div className="mt-8 space-y-6">
                <p className="text-base leading-[1.9] text-text-secondary md:text-[17px]">
                  {project.caseStudy?.problem}
                </p>
                <blockquote className="border-l-2 border-red-500/40 pl-6">
                  <p className="text-base italic leading-relaxed text-text-muted">
                    {project.longDescription}
                  </p>
                </blockquote>
              </div>
            </section>

            {/* Chapter II — Solution */}
            <section id="journey" className="mb-20 scroll-mt-24">
              <ChapterHeader num="02" label="The Solution" color="green" icon={<FiZap />} />
              <p className="mt-8 text-base leading-[1.9] text-text-secondary md:text-[17px]">
                {project.caseStudy?.solution}
              </p>
            </section>

            {/* Chapter III — Challenge */}
            <section id="hurdle" className="mb-20 scroll-mt-24">
              <ChapterHeader num="03" label="The Challenge" color="yellow" icon={<FiAlertTriangle />} />
              <div className="mt-8 rounded-2xl border border-yellow-500/10 bg-yellow-500/[0.03] p-8">
                <p className="text-base leading-[1.9] text-text-secondary md:text-[17px]">
                  {project.caseStudy?.challenges}
                </p>
              </div>
            </section>

            {/* Chapter IV — Outcome */}
            <section id="triumph" className="mb-20 scroll-mt-24">
              <ChapterHeader num="04" label="The Outcome" color="green" icon={<FiAward />} />
              <div className="mt-8 space-y-8">
                {/* Results as cards */}
                <ul className="space-y-4">
                  {project.caseStudy?.results.map((result: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-matrix-green/20 hover:bg-matrix-green/[0.02] transition-all"
                    >
                      <FiCheckCircle className="mt-0.5 flex-none text-matrix-green" />
                      <p className="text-sm leading-relaxed text-text-secondary">{result}</p>
                    </li>
                  ))}
                </ul>
                {/* Learnings */}
                <div className="rounded-2xl border border-matrix-green/10 bg-matrix-green/[0.03] p-8">
                  <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-matrix-green/60 uppercase">
                    Key Takeaway
                  </p>
                  <p className="text-base italic leading-relaxed text-text-secondary">
                    {project.caseStudy?.learnings}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT — Sticky Sidebar */}
          <aside className="lg:col-span-5 xl:col-span-5">
            <div className="sticky top-24 space-y-6">

              {/* Video Player */}
              {project.videoUrl && (
                <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-matrix-green animate-pulse" />
                      <span className="font-mono text-[10px] font-bold tracking-widest text-matrix-green/80 uppercase">
                        Live Demo Feed
                      </span>
                    </div>
                    <FiPlay className="text-text-muted text-xs" />
                  </div>
                  <div className="aspect-video">
                    <iframe
                      src={videoSrc}
                      title={`${project.title} Demo`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Chapter navigation (desktop) */}
              <nav className="hidden lg:block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="mb-4 font-mono text-[9px] font-bold tracking-[0.35em] text-text-muted uppercase">
                  Sections
                </p>
                <div className="space-y-1">
                  {chapters.map(({ id, label, num }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                        activeSection === id
                          ? "bg-matrix-green/10 text-matrix-green"
                          : "text-text-muted hover:bg-white/[0.03] hover:text-white"
                      }`}
                    >
                      <span className="font-mono text-[10px] opacity-40">{num}</span>
                      <span className="text-sm font-medium">{label}</span>
                      {activeSection === id && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-matrix-green" />
                      )}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Tech Stack */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="mb-4 flex items-center gap-2">
                  <FiCpu className="text-text-muted text-xs" />
                  <p className="font-mono text-[9px] font-bold tracking-[0.35em] text-text-muted uppercase">
                    Tech Stack
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {project.tech.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center gap-3 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3 hover:border-matrix-green/20 hover:bg-matrix-green/[0.03] transition-all"
                    >
                      <BrandIcon Icon={t.icon} color={t.color} size="text-lg" />
                      <span className="font-mono text-[11px] text-text-secondary">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-matrix-green py-4 font-mono text-sm font-bold tracking-widest text-space-black uppercase hover:brightness-110 transition-all"
                >
                  Live Demo <FiExternalLink className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 py-4 font-mono text-sm font-bold tracking-widest text-text-secondary uppercase hover:border-white/20 hover:text-white transition-all"
                >
                  <FiGithub /> View Source
                </a>
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
  red:    { label: "text-red-400/60",          heading: "text-red-400",       line: "bg-red-400/20" },
  green:  { label: "text-matrix-green/60",     heading: "text-matrix-green",  line: "bg-matrix-green/20" },
  yellow: { label: "text-yellow-400/60",       heading: "text-yellow-400",    line: "bg-yellow-400/20" },
};

function ChapterHeader({
  num, label, color, icon,
}: {
  num: string; label: string; color: ChapterColor; icon: React.ReactNode;
}) {
  const c = colorMap[color];
  return (
    <div className="space-y-3">
      <div className={`flex items-center gap-3 ${c.label}`}>
        <span className="font-mono text-xs font-bold tracking-widest uppercase">{num} ──</span>
        {icon}
      </div>
      <h2 className={`font-mono text-3xl font-black tracking-tight md:text-4xl ${c.heading}`}>
        {label}
      </h2>
      <div className={`h-px w-12 ${c.line}`} />
    </div>
  );
}

export default ProjectDetailsShell;
