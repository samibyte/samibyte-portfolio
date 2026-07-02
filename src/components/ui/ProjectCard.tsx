"use client";

import { motion } from "framer-motion";
import {
  IconGithub,
  IconExternalLink,
  IconMaximize,
  IconCpu,
  IconGlobe,
  IconDatabase,
  IconLayers,
  IconCode,
  IconTerminal,
} from "@/components/ui/Icons";
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

// ─── Per-card theme config ─────────────────────────────────────────────────
// Cycles for any number of projects (index % themes.length)

const THEMES = [
  {
    // 0 — Matrix green (existing brand feel)
    label: "SYS",
    accent: "#00ff41",
    accentClass: "text-[#00ff41]",
    borderHover: "hover:border-[#00ff41]/50",
    shadowHover: "hover:shadow-[0_0_40px_rgba(0,255,65,0.18)]",
    glowHover: "group-hover:opacity-100",
    gradientFrom: "from-[#00ff41]/15",
    gradientDir: "bg-gradient-to-br",
    headerBg: "bg-[#00ff41]/[0.04]",
    headerBorder: "border-[#00ff41]/10",
    dotA: "bg-[#00ff41]/50",
    dotB: "bg-[#00ff41]/20",
    dotShadow: "shadow-[0_0_5px_rgba(0,255,65,0.5)]",
    dividerColor: "bg-[#00ff41]/30",
    techLabel: "text-[#00ff41]/50",
    cornerAccent: "border-[#00ff41]/20",
    Icon: IconCpu,
    // decorative corner SVG path style
    topLine: "border-t border-r border-[#00ff41]/10 rounded-tr-xl",
  },
  {
    // 1 — Electric cyan / web
    label: "WEB",
    accent: "#00e5ff",
    accentClass: "text-[#00e5ff]",
    borderHover: "hover:border-[#00e5ff]/50",
    shadowHover: "hover:shadow-[0_0_40px_rgba(0,229,255,0.18)]",
    glowHover: "group-hover:opacity-100",
    gradientFrom: "from-[#00e5ff]/12",
    gradientDir: "bg-gradient-to-tl",
    headerBg: "bg-[#00e5ff]/[0.03]",
    headerBorder: "border-[#00e5ff]/10",
    dotA: "bg-[#00e5ff]/50",
    dotB: "bg-[#00e5ff]/20",
    dotShadow: "shadow-[0_0_5px_rgba(0,229,255,0.5)]",
    dividerColor: "bg-[#00e5ff]/30",
    techLabel: "text-[#00e5ff]/50",
    cornerAccent: "border-[#00e5ff]/20",
    Icon: IconGlobe,
    topLine: "border-t border-r border-[#00e5ff]/10 rounded-tr-xl",
  },
  {
    // 2 — Violet / purple
    label: "API",
    accent: "#a855f7",
    accentClass: "text-[#a855f7]",
    borderHover: "hover:border-[#a855f7]/50",
    shadowHover: "hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]",
    glowHover: "group-hover:opacity-100",
    gradientFrom: "from-[#a855f7]/12",
    gradientDir: "bg-gradient-to-bl",
    headerBg: "bg-[#a855f7]/[0.04]",
    headerBorder: "border-[#a855f7]/10",
    dotA: "bg-[#a855f7]/50",
    dotB: "bg-[#a855f7]/20",
    dotShadow: "shadow-[0_0_5px_rgba(168,85,247,0.5)]",
    dividerColor: "bg-[#a855f7]/30",
    techLabel: "text-[#a855f7]/50",
    cornerAccent: "border-[#a855f7]/20",
    Icon: IconDatabase,
    topLine: "border-t border-r border-[#a855f7]/10 rounded-tr-xl",
  },
  {
    // 3 — Amber / orange
    label: "APP",
    accent: "#f59e0b",
    accentClass: "text-[#f59e0b]",
    borderHover: "hover:border-[#f59e0b]/50",
    shadowHover: "hover:shadow-[0_0_40px_rgba(245,158,11,0.18)]",
    glowHover: "group-hover:opacity-100",
    gradientFrom: "from-[#f59e0b]/10",
    gradientDir: "bg-gradient-to-tr",
    headerBg: "bg-[#f59e0b]/[0.04]",
    headerBorder: "border-[#f59e0b]/10",
    dotA: "bg-[#f59e0b]/50",
    dotB: "bg-[#f59e0b]/20",
    dotShadow: "shadow-[0_0_5px_rgba(245,158,11,0.5)]",
    dividerColor: "bg-[#f59e0b]/30",
    techLabel: "text-[#f59e0b]/50",
    cornerAccent: "border-[#f59e0b]/20",
    Icon: IconLayers,
    topLine: "border-t border-r border-[#f59e0b]/10 rounded-tr-xl",
  },
  {
    // 4 — Rose / red
    label: "CLI",
    accent: "#f43f5e",
    accentClass: "text-[#f43f5e]",
    borderHover: "hover:border-[#f43f5e]/50",
    shadowHover: "hover:shadow-[0_0_40px_rgba(244,63,94,0.18)]",
    glowHover: "group-hover:opacity-100",
    gradientFrom: "from-[#f43f5e]/10",
    gradientDir: "bg-gradient-to-br",
    headerBg: "bg-[#f43f5e]/[0.04]",
    headerBorder: "border-[#f43f5e]/10",
    dotA: "bg-[#f43f5e]/50",
    dotB: "bg-[#f43f5e]/20",
    dotShadow: "shadow-[0_0_5px_rgba(244,63,94,0.5)]",
    dividerColor: "bg-[#f43f5e]/30",
    techLabel: "text-[#f43f5e]/50",
    cornerAccent: "border-[#f43f5e]/20",
    Icon: IconTerminal,
    topLine: "border-t border-r border-[#f43f5e]/10 rounded-tr-xl",
  },
  {
    // 5 — Teal
    label: "SDK",
    accent: "#14b8a6",
    accentClass: "text-[#14b8a6]",
    borderHover: "hover:border-[#14b8a6]/50",
    shadowHover: "hover:shadow-[0_0_40px_rgba(20,184,166,0.18)]",
    glowHover: "group-hover:opacity-100",
    gradientFrom: "from-[#14b8a6]/10",
    gradientDir: "bg-gradient-to-tl",
    headerBg: "bg-[#14b8a6]/[0.04]",
    headerBorder: "border-[#14b8a6]/10",
    dotA: "bg-[#14b8a6]/50",
    dotB: "bg-[#14b8a6]/20",
    dotShadow: "shadow-[0_0_5px_rgba(20,184,166,0.5)]",
    dividerColor: "bg-[#14b8a6]/30",
    techLabel: "text-[#14b8a6]/50",
    cornerAccent: "border-[#14b8a6]/20",
    Icon: IconCode,
    topLine: "border-t border-r border-[#14b8a6]/10 rounded-tr-xl",
  },
] as const;

// ─── Dot grid pattern (decorative, unique per card) ────────────────────────

const DOT_PATTERNS = [
  // 0 — 3×3 grid top-right
  [
    [1, 0], [2, 0],
    [0, 1], [2, 1],
    [1, 2],
  ],
  // 1 — diagonal
  [
    [0, 0],
    [1, 1],
    [2, 2],
    [0, 2],
  ],
  // 2 — plus / cross
  [
    [1, 0],
    [0, 1], [1, 1], [2, 1],
    [1, 2],
  ],
  // 3 — corners
  [
    [0, 0], [2, 0],
    [0, 2], [2, 2],
  ],
  // 4 — L-shape
  [
    [0, 0],
    [0, 1],
    [0, 2], [1, 2], [2, 2],
  ],
  // 5 — Z-shape
  [
    [0, 0], [1, 0],
    [1, 1],
    [1, 2], [2, 2],
  ],
];

// ─── Component ─────────────────────────────────────────────────────────────

const ProjectCard = ({ id, title, description, tech, githubUrl, demoUrl, index }: ProjectCardProps) => {
  const theme = THEMES[index % THEMES.length];
  const dots = DOT_PATTERNS[index % DOT_PATTERNS.length];
  const { Icon } = theme;

  const serialNumber = `[${(index + 1).toString().padStart(2, "0")}]`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative flex flex-col h-[440px] overflow-hidden rounded-xl border border-matrix-border/30 bg-space-deep/40 backdrop-blur-md transition-all duration-500 ${theme.borderHover} ${theme.shadowHover}`}
    >
      {/* ── Top corner accent ────────────────────────────────── */}
      <div className={`absolute top-0 right-0 w-16 h-16 pointer-events-none ${theme.topLine} opacity-40`} />

      {/* ── Dot pattern (top-right cluster) ──────────────────── */}
      <div className="absolute top-5 right-5 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className="relative w-7 h-7">
          {dots.map(([col, row], i) => (
            <div
              key={i}
              className={`absolute h-[3px] w-[3px] rounded-full ${theme.dotA}`}
              style={{ left: col * 10, top: row * 10 }}
            />
          ))}
        </div>
      </div>

      {/* ── Header bar ───────────────────────────────────────── */}
      <div className={`flex items-center justify-between border-b ${theme.headerBorder} ${theme.headerBg} px-6 py-4`}>
        <div className="flex items-center gap-2">
          <span className={`font-mono text-[9px] tracking-[0.3em] ${theme.accentClass} opacity-70`}>
            {theme.label}
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-text-muted/40">
            {serialNumber}
          </span>
        </div>
        {/* Window dots */}
        <div className="flex gap-1.5">
          <div className={`h-1.5 w-1.5 rounded-full ${theme.dotA} ${theme.dotShadow}`} />
          <div className={`h-1.5 w-1.5 rounded-full ${theme.dotB}`} />
          <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────── */}
      <div className="relative flex flex-1 flex-col p-6 md:p-8">
        {/* Decorative background icon — unique per theme */}
        <div className="absolute -bottom-6 -right-6 opacity-[0.04] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.09] pointer-events-none">
          <Icon size={160} />
        </div>

        {/* Subtle scan-line overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
          }}
        />

        <h3 className={`font-mono text-2xl font-bold tracking-tight text-text-primary transition-all duration-300 group-hover:${theme.accentClass} lg:text-3xl`}>
          {title}
        </h3>

        {/* Animated accent divider */}
        <div className={`mt-4 h-0.5 w-8 ${theme.dividerColor} transition-all duration-500 group-hover:w-16`} />

        <p className="mt-4 line-clamp-3 font-sans text-sm leading-relaxed text-text-secondary md:text-base">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto pt-4 border-t border-matrix-border/10">
          <p className={`mb-3 font-mono text-[8px] uppercase tracking-widest ${theme.techLabel}`}>
            Tech Stack:
          </p>
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
                <span className={`hidden sm:inline font-mono text-[9px] text-text-muted/60 group-hover/icon:${theme.accentClass} transition-colors`}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Action Footer ─────────────────────────────────────── */}
      <div className="grid grid-cols-3 divide-x divide-matrix-border/10 border-t border-matrix-border/10 bg-white/[0.01]">
        <Link
          href={`/projects/${id}`}
          className={`flex items-center justify-center gap-2 py-4 transition-all hover:bg-white/[0.04] hover:${theme.accentClass}`}
          title="Project Details"
        >
          <IconMaximize className="text-lg" />
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">Details</span>
        </Link>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 py-4 transition-all hover:bg-white/[0.04] hover:${theme.accentClass}`}
          title="GitHub Repository"
        >
          <IconGithub className="text-lg" />
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">Code</span>
        </a>

        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 py-4 transition-all`}
          style={{ color: theme.accent }}
          title="Live Preview"
        >
          <IconExternalLink className="text-lg" />
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">Demo</span>
        </a>
      </div>

      {/* ── Hover radial glow — direction varies per theme ────── */}
      <div
        className={`pointer-events-none absolute inset-0 ${theme.gradientDir} ${theme.gradientFrom} to-transparent opacity-0 transition-opacity duration-700 ${theme.glowHover}`}
      />
    </motion.div>
  );
};

export default ProjectCard;
