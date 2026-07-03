"use client";

import { motion } from "framer-motion";
import { IconDownload, IconCpu, IconZap, IconTarget, IconArrowNarrowRight, IconAward, IconFilm, IconPlay } from "@/components/ui/Icons";
import SectionHeader from "@/components/ui/SectionHeader";

// ─── Custom SVG Icons ────────────────────────────────────────
function IconBook({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="15" y2="11" />
    </svg>
  );
}

function IconChess({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="18" width="18" height="3" rx="1" />
      <rect x="7" y="15" width="10" height="3" rx="0.5" />
      <path d="M9 15V9m6 6V9" />
      <path d="M7 9h10" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
      <circle cx="12" cy="5" r="1.5" />
    </svg>
  );
}

function IconController({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none" />
      <rect x="2" y="8" width="20" height="10" rx="4" />
    </svg>
  );
}

function IconBrain({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.66z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-4.66z" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────

const cognitiveTraits = [
  { label: "System Depth", value: 94, desc: "Prefers understanding how things work at the root level" },
  { label: "Precision Quotient", value: 91, desc: "Precision over speed. Methodical over reactive." },
  { label: "Disciplined Learning", value: 88, desc: "Consistent, long-term investment in skill development" },
  { label: "Analytical Clarity", value: 90, desc: "Evidence-driven decisions, no assumptions without data" },
];

const journeyEvents = [
  {
    year: "MAY 2026 – PRESENT",
    title: "Next Level Software Engineering",
    subtitle: "Programming Hero · Advanced Program",
    desc: "Studying system design, clean architecture, and production-grade engineering. The focus is on building maintainable systems that scale, not just features that ship.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    type: "learning",
    credential: null
  },
  {
    year: "DEC 2025 – FEB 2026",
    title: "Frontend Developer at Softvence Agency",
    subtitle: "Full-Time · On-site",
    desc: "Built and maintained client-facing web applications. Worked on UI components, API integration, and authentication flows. Operated in a structured environment where requirements were defined, deadlines were firm, and code quality was non-negotiable.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress"],
    type: "work",
    credential: null
  },
  {
    year: "JUL 2025 – JAN 2026",
    title: "Complete Web Development",
    subtitle: "Programming Hero · Foundation Program",
    desc: "Covered the full stack: frontend fundamentals, server-side logic, database modeling, auth systems, and deployment pipelines. The program was structured exactly how learning should be.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    type: "learning",
    credential: "https://drive.google.com/file/d/1DbQea4pUBkOFazffpep1QpmKz7YLgTRE/view"
  },
  {
    year: "2023 – JUL 2025",
    title: "Self-Directed Study",
    subtitle: "Independent",
    desc: "Started with the fundamentals out of curiosity. Learned HTML, CSS, and JavaScript by building small projects to understand how things actually worked rather than just following tutorials.",
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    type: "learning",
    credential: null
  }
];

const workEnjoyedItems = [
  {
    icon: <IconCpu className="text-matrix-green" size={26} />,
    title: "Building Full Stack Features",
    desc: "Taking a feature from database schema to API endpoint to UI component. I enjoy owning the full picture and making sure each layer communicates cleanly with the next."
  },
  {
    icon: <IconTarget className="text-matrix-green" size={26} />,
    title: "Designing Clean APIs",
    desc: "Writing REST or GraphQL endpoints that are predictable, well-typed, and easy to consume. Good API design saves time for everyone, including future me."
  },
  {
    icon: <IconZap className="text-matrix-green" size={26} />,
    title: "Interactive UI Development",
    desc: "Building responsive interfaces that feel good to use. I pay close attention to layout, state transitions, and small details that users notice even if they cannot name them."
  },
  {
    icon: <IconBrain className="text-matrix-green" size={26} />,
    title: "Debugging and Root Cause Analysis",
    desc: "Tracing a bug to its actual source rather than patching around it. I find this kind of work satisfying because fixing the real problem makes the codebase more trustworthy."
  },
  {
    icon: <IconAward className="text-matrix-green" size={26} />,
    title: "Authentication and Security",
    desc: "Implementing secure login flows, token handling, and role-based access control correctly. Security is not an afterthought in any project I work on."
  },
  {
    icon: <IconArrowNarrowRight className="text-matrix-green" size={26} />,
    title: "Refactoring for Clarity",
    desc: "Revisiting old code and making it easier to understand and extend. Good structure pays off over time, and I prefer working in codebases I can be proud of months later."
  },
];

const hobbies = [
  {
    icon: <IconChess size={36} className="text-matrix-green" />,
    title: "Chess",
    tag: "STRATEGY · PATIENCE",
    color: "from-matrix-green/10 to-transparent",
    border: "border-matrix-green/30",
  },
  {
    icon: <IconBook size={36} className="text-cyan-400" />,
    title: "Books",
    tag: "NON-FICTION · HISTORY",
    color: "from-cyan-500/10 to-transparent",
    border: "border-cyan-500/30",
  },
  {
    icon: <IconController size={36} className="text-purple-400" />,
    title: "Gaming",
    tag: "STRATEGY · SIMULATION",
    color: "from-purple-500/10 to-transparent",
    border: "border-purple-500/30",
  },
  {
    icon: <IconFilm size={36} className="text-rose-400" />,
    title: "Movies",
    tag: "CINEMA · STORYTELLING",
    color: "from-rose-500/10 to-transparent",
    border: "border-rose-500/30",
  },
  {
    icon: <IconPlay size={36} className="text-amber-400" />,
    title: "Anime",
    tag: "SERIES · ANIMATION",
    color: "from-amber-500/10 to-transparent",
    border: "border-amber-500/30",
  },
];

// ─── Sub-components ────────────────────────────────────────────

function AboutSectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-matrix-green animate-pulse" />
        <span className="font-mono text-xs text-matrix-green uppercase tracking-[0.3em]">{label}</span>
      </div>
      <h2 className="glow-green font-mono text-2xl font-bold text-matrix-green md:text-3xl">
        &gt; {title}
      </h2>
      <div className="h-px w-20 bg-matrix-green/50" />
      {desc && <p className="text-sm text-text-secondary max-w-xl mt-2">{desc}</p>}
    </div>
  );
}

function TraitBar({ label, value, desc, index }: { label: string; value: number; desc: string; index: number }) {
  const filled = Math.round(value / 5);
  const empty = 20 - filled;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="text-text-secondary uppercase tracking-wider">{label}</span>
        <span className="text-matrix-green font-bold">{value}%</span>
      </div>
      <div className="flex items-center gap-2 font-mono text-[11px]">
        <span className="text-matrix-green/40 select-none">[</span>
        <span className="text-matrix-green tracking-tighter select-none">{"█".repeat(filled)}</span>
        <span className="text-matrix-green/20 tracking-tighter select-none">{"░".repeat(empty)}</span>
        <span className="text-matrix-green/40 select-none">]</span>
      </div>
      <p className="font-sans text-[11px] text-text-muted leading-relaxed">{desc}</p>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────

const AboutClient = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[5%] h-[500px] w-[500px] rounded-full bg-matrix-green/5 blur-[130px]" />
        <div className="absolute bottom-[20%] left-[-5%] h-[600px] w-[600px] rounded-full bg-matrix-green/4 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `linear-gradient(var(--color-matrix-green) 1px, transparent 1px), linear-gradient(90deg, var(--color-matrix-green) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="page-container relative z-10 space-y-28">

        {/* ── SECTION 1: Bio + Cognitive Analysis ──────────────── */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">

          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
                <SectionHeader title="About Me" />
            </div>

            <div className="space-y-5 font-sans text-[16.5px] leading-relaxed text-text-secondary">
              <p>
                Hi, I&apos;m <span className="text-matrix-green font-semibold">Adnan Sami</span>, a full-stack developer from Dhaka, Bangladesh. I go by <span className="font-mono text-matrix-green">samibyte</span> online.
              </p>
              <p>
                I started with HTML and CSS out of curiosity, built small things to understand how they worked, and kept going. What I found appealing wasn&apos;t just building; it was figuring out <em>why</em> something worked, or didn&apos;t.
              </p>
              <p>
                I work with React, Next.js, TypeScript, and Node.js on the full stack. I care about type safety, schema integrity, and code that&apos;s readable six months from now by someone who isn&apos;t me.
              </p>
              <p>
                My approach to engineering is methodical. I gather information before decisions, prefer precision over speed, and invest in understanding systems deeply rather than treating them as black boxes.
              </p>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { label: "Years Learning", value: "3+" },
                { label: "Projects Shipped", value: "10+" },
                { label: "Focus", value: "∞" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="rounded-lg border border-matrix-border/30 bg-white/2 p-4 text-center hover:border-matrix-green/40 hover:bg-matrix-green/5 transition-all duration-300"
                >
                  <div className="glow-green font-mono text-2xl font-bold text-matrix-green">{stat.value}</div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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

          {/* Right: Cognitive Core Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="glass-card rounded-xl border border-matrix-border bg-space-deep p-6 shadow-2xl relative overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-matrix-border/20 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-matrix-green animate-pulse" />
                  <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">Cognitive Core Analysis</span>
                </div>
                <span className="font-mono text-[9px] text-text-muted border border-matrix-border/40 px-2 py-0.5 rounded">PROFILE_SCAN v1.0</span>
              </div>

              {/* Terminal identity block */}
              <div className="mb-6 rounded-lg bg-black/40 border border-matrix-green/10 p-4 font-mono text-[11px] space-y-1">
                <div className="flex gap-3">
                  <span className="text-text-muted w-24 shrink-0">OPERATOR</span>
                  <span className="text-matrix-green">Adnan Sami (samibyte)</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-text-muted w-24 shrink-0">LOCATION</span>
                  <span className="text-text-primary">Dhaka, Bangladesh</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-text-muted w-24 shrink-0">DESIGNATION</span>
                  <span className="text-text-primary">Full-Stack Developer</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-text-muted w-24 shrink-0">MODE</span>
                  <span className="text-amber-400">Analytical · Methodical · Disciplined</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-text-muted w-24 shrink-0">STATUS</span>
                  <span className="text-matrix-green flex items-center gap-1.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-matrix-green animate-pulse" />
                    Available for work
                  </span>
                </div>
              </div>

              {/* Trait bars */}
              <div className="space-y-5">
                {cognitiveTraits.map((trait, i) => (
                  <TraitBar key={trait.label} {...trait} index={i} />
                ))}
              </div>

              {/* Personality quote */}
              <div className="mt-6 rounded-lg border border-matrix-green/10 bg-matrix-green/5 p-4">
                <p className="font-mono text-[10px] text-matrix-green/60 leading-relaxed italic">
                  &ldquo;Communication style favours clarity, restraint, and substance over charisma or hype. Approaches decisions methodically after gathering sufficient evidence.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── SECTION 2: Programming Journey ────────────────────── */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutSectionHeader
              label="OPERATIONAL LOG"
              title="Programming Journey"
              desc="A timeline of structured learning and professional work, each step adding meaningful depth, not just breadth."
            />
          </motion.div>

          <div className="relative border-l border-matrix-border ml-4 md:ml-6 space-y-10 pl-6 md:pl-8 py-2">
            {journeyEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group space-y-3"
              >
                {/* Timeline Marker */}
                <div className="absolute left-[-30px] md:left-[-38px] top-2 h-4 w-4 rounded-full border border-matrix-green bg-space-black transition-all group-hover:bg-matrix-green group-hover:shadow-[0_0_10px_rgba(0,255,65,0.8)]" />

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-xs font-bold text-matrix-green/75 tracking-wider bg-matrix-green/5 border border-matrix-green/20 px-3 py-1 rounded">
                    {event.year}
                  </span>
                  <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded border ${
                    event.type === "work"
                      ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                      : "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
                  }`}>
                    {event.type === "work" ? "Work" : "Learning"}
                  </span>
                </div>

                <div className="glass-card border border-matrix-border bg-white/1 p-6 rounded-xl hover:bg-matrix-green/2 hover:border-matrix-green/40 transition-all duration-300">
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

                  {event.credential && (
                    <div className="mt-5 pt-4 border-t border-matrix-border/20">
                      <a
                        href={event.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-matrix-green border border-matrix-green/30 bg-matrix-green/5 px-4 py-2 rounded hover:bg-matrix-green/15 hover:border-matrix-green/60 hover:shadow-[0_0_12px_rgba(0,255,65,0.15)] transition-all duration-300 group"
                      >
                        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                          <circle cx="12" cy="8" r="7" />
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                        </svg>
                        View Credential
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SECTION 3: Work I Enjoy ────────────────────────────── */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutSectionHeader
              label="SPECIALIZATION"
              title="Work I Enjoy"
              desc="The kinds of engineering problems that hold my attention, where getting it right matters more than getting it done."
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workEnjoyedItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card border border-matrix-border bg-white/1 p-6 rounded-xl relative hover:bg-matrix-green/3 hover:border-matrix-green/50 transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4 opacity-25 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="font-mono text-[9px] text-text-muted uppercase tracking-widest mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-mono text-sm font-bold text-text-primary uppercase tracking-wide mb-3 group-hover:text-matrix-green transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: Hobbies & Interests ───────────────────── */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutSectionHeader
              label="SUBNET OPERATIONS"
              title="Outside the Terminal"
              desc="What I do when not writing code. Interests that reinforce the same values: patience, depth, and strategic thinking."
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {hobbies.map((hobby, i) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative rounded-xl border ${hobby.border} bg-linear-to-b ${hobby.color} to-space-deep/60 p-6 overflow-hidden group hover:shadow-[0_0_20px_rgba(0,255,65,0.07)] transition-all duration-500`}
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                  {hobby.icon}
                </div>
                <h3 className="font-mono text-base font-bold text-text-primary mb-1 group-hover:text-matrix-green transition-colors duration-300">
                  {hobby.title}
                </h3>
                <span className="font-mono text-[9px] tracking-[0.2em] text-text-muted uppercase">{hobby.tag}</span>

                {/* Scanline effect on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,65,0.8) 3px, rgba(0,255,65,0.8) 4px)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <div className="text-center pt-4">
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
