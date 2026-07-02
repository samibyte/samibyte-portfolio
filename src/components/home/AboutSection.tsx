"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconArrowNarrowRight, IconDownload } from "@/components/ui/Icons";
import Link from "next/link";

const timeline = [
  {
    year: "2026 — Present",
    title: "Next Level Software Engineering",
    sub: "Programming Hero · Advanced Program",
    type: "learning",
  },
  {
    year: "Dec 2025 — Feb 2026",
    title: "Frontend Developer",
    sub: "Softvence Agency · Full-Time",
    type: "work",
  },
  {
    year: "Jul 2025 — Jan 2026",
    title: "Complete Web Development",
    sub: "Programming Hero · Foundation Program",
    type: "learning",
  },
  {
    year: "2023 — 2025",
    title: "Self-Directed Study",
    sub: "HTML → CSS → JavaScript → React",
    type: "origin",
  },
];

const values = [
  {
    num: "01",
    label: "Thoughtful Engineering",
    desc: "Every technical decision should improve maintainability, reliability, or the overall user experience.",
  },
  {
    num: "02",
    label: "Quality First",
    desc: "I prioritize clean architecture, testing, and maintainable code over quick fixes that create long-term problems.",
  },
  {
    num: "03",
    label: "User-Centered Development",
    desc: "Great software should feel intuitive, accessible, and enjoyable for the people who use it every day.",
  },
  {
    num: "04",
    label: "Growth Mindset",
    desc: "Technology evolves constantly, and I believe continuous learning is essential to building better software.",
  },
];

const typeConfig: Record<string, { label: string; color: string; dot: string; line: string }> = {
  work:     { label: "Work",     color: "text-amber-400 border-amber-500/40 bg-amber-500/10",  dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]",  line: "bg-amber-400/30" },
  learning: { label: "Learning", color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",     dot: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]",    line: "bg-cyan-400/30" },
  origin:   { label: "Origin",   color: "text-text-muted border-white/15 bg-white/5",          dot: "bg-text-secondary shadow-[0_0_6px_rgba(255,255,255,0.2)]", line: "bg-white/10" },
};

const AboutSection = () => {
  const [typedJson, setTypedJson] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const fullJson = `{
  "name":     "Sami Adnan",
  "alias":    "samibyte",
  "role":     "Full-Stack Developer",
  "location": "Dhaka, Bangladesh",
  "focus":    "Systems. Architecture. Depth.",
  "mode":     "Analytical · Disciplined",
  "available": true
}`;

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const interval = setInterval(() => {
      setTypedJson(fullJson.slice(0, i));
      i++;
      if (i > fullJson.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [fullJson, isInView]);

  return (
    <section ref={sectionRef} className="relative py-36 overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020408] to-transparent opacity-70 pointer-events-none" />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-[-10%] -translate-y-1/2 h-[700px] w-[700px] opacity-[0.05]">
        <div className="h-full w-full bg-matrix-green blur-[180px] rounded-full" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-[-5%] h-[400px] w-[400px] opacity-[0.04]">
        <div className="h-full w-full bg-matrix-green blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10 space-y-14">

        {/* ══ SECTION LABEL + HEADING ════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="glow-green font-mono text-4xl font-bold text-matrix-green md:text-5xl">
            &gt; About Me
          </h2>
          <div className="mt-4 h-[2px] w-24 bg-matrix-green/50 rounded-full" />
        </motion.div>

        {/* ══ ROW 1: Bio + Terminal ══════════════════════════════ */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center mb-50">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-3 font-sans text-lg leading-[1.85] text-text-secondary">
              <p>
                My interest in web development began with building user interfaces, but curiosity soon led me to explore what happens behind the scenes. That curiosity evolved into a passion for full-stack development, where I enjoy working across the entire application. From crafting responsive frontend experiences to designing efficient APIs and databases.
              </p>
              <p>
                I believe good software is more than code; it&apos;s about solving real problems with solutions that are performant, maintainable, and enjoyable to use. I&apos;m always learning new technologies, improving my engineering practices, and looking for opportunities to build meaningful products.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://drive.google.com/file/d/1ie1hDAg067E3UA4QIzTW2S5lDkT-kf93/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-matrix-green/40 bg-matrix-green/5 px-7 py-3.5 font-mono text-sm font-bold tracking-widest text-matrix-green transition-all hover:bg-matrix-green hover:text-space-black hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]"
              >
                <IconDownload size={16} />
                DOWNLOAD CV
              </a>
            </motion.div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-card overflow-hidden rounded-xl border border-matrix-border bg-space-deep shadow-[0_0_50px_rgba(0,0,0,0.4)]"
          >
            {/* Titlebar */}
            <div className="flex items-center justify-between border-b border-matrix-border/30 bg-white/[0.03] px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                </div>
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">
                  profile.json
                </span>
              </div>
              <span className="font-mono text-[10px] text-matrix-green/40 tracking-wider">samibyte</span>
            </div>
            {/* Content */}
            <div className="p-7 font-mono text-md leading-[2] whitespace-pre text-matrix-green/90 min-h-[400px]">
              {typedJson}
              <span className="ml-0.5 inline-block h-[14px] w-[7px] animate-pulse bg-matrix-green align-middle" />
            </div>
          </motion.div>
        </div>

        {/* ══ ROW 2: Journey + Values ════════════════════════════ */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 items-start">

          {/* ── Timeline ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <div className="space-y-1.5">
              <p className="font-mono text-xs text-matrix-green/60 uppercase tracking-[0.35em]">
                Programming Journey
              </p>
              <h3 className="font-mono text-3xl font-bold text-text-primary">
                How I got here
              </h3>
            </div>

            {/* Vertical timeline */}
            <div className="relative pl-9">
              {/* Spine */}
              <div className="absolute left-[10px] top-3 bottom-3 w-px bg-matrix-border/50" />

              {timeline.map((item, i) => {
                const cfg = typeConfig[item.type];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="relative group pb-10 last:pb-0"
                  >
                    {/* Dot */}
                    <div className={`absolute left-[-24px] top-2 h-4 w-4 rounded-full border-2 border-space-black ${cfg.dot} transition-all duration-300 group-hover:scale-125`} />

                    <div className="space-y-6">
                      {/* Year + badge */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-mono text-xs text-text-muted tracking-wider">
                          {item.year}
                        </span>
                        <span className={`font-mono text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${cfg.color}`}>
                          {cfg.label}
                        </span>
                      </div>
                      {/* Title */}
                      <div className="text-xl font-mono font-bold text-text-primary group-hover:text-matrix-green transition-colors duration-300 mb-0">
                        {item.title}
                      </div>
                      {/* Subtitle */}
                      <div className="font-sans text-[13px] text-text-muted">
                        {item.sub}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Values ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="space-y-10"
          >
            <div className="space-y-1.5">
              <p className="font-mono text-xs text-matrix-green/60 uppercase tracking-[0.35em]">
                Engineering Principles
              </p>
              <h3 className="font-mono text-3xl font-bold text-text-primary">
                What I value
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group flex flex-col rounded-xl border border-matrix-border/40 bg-space-deep/60 p-6 hover:border-matrix-green/50 hover:bg-matrix-green/5 transition-all duration-300 backdrop-blur-sm"
                >
                  {/* Number */}
                  <span className="font-mono text-4xl font-black text-matrix-green/12 group-hover:text-matrix-green/30 transition-colors duration-300 leading-none mb-5 select-none">
                    {v.num}
                  </span>
                  {/* Label */}
                  <div className="font-mono text-[15px] font-bold text-text-primary group-hover:text-matrix-green transition-colors duration-300 mb-3">
                    {v.label}
                  </div>
                  {/* Description */}
                  <div className="font-sans text-sm text-text-muted leading-relaxed">
                    {v.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ══ CTA ════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center pt-4"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 rounded-md border border-matrix-green/50 bg-matrix-green/5 px-12 py-5 font-mono text-sm font-bold tracking-widest text-matrix-green transition-all duration-300 hover:bg-matrix-green hover:text-space-black hover:shadow-[0_0_35px_rgba(0,255,65,0.3)]"
          >
            View Full Profile
            <IconArrowNarrowRight size={17} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
