"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowNarrowRight, IconGithub, IconLinkedin, IconTwitter } from "@/components/ui/Icons";
import Link from "next/link";
import GlitchText from "@/components/ui/GlitchText";

const HeroSection = () => {
  const [subtitle, setSubtitle] = useState("");
  const fullSubtitle = "Full-Stack Web Developer";

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setSubtitle(fullSubtitle.slice(0, i));
        i++;
        if (i > fullSubtitle.length) clearInterval(interval);
      }, 70);
      return () => clearInterval(interval);
    }, 1500); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Grid / Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020408_100%)]" />
        <div className="scanlines absolute inset-0 opacity-20" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(var(--color-matrix-green) 1px, transparent 1px), linear-gradient(90deg, var(--color-matrix-green) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="section-container relative z-20 flex w-full flex-col justify-center pt-8 lg:py-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Intro Text */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="mb-4 font-mono text-sm tracking-[0.3em] text-text-secondary uppercase">
                Hello, I&apos;m
              </p>

              <GlitchText 
                text="SAMI ADNAN" 
                className="glow-green mb-2 font-mono text-4xl font-extrabold tracking-tighter text-matrix-green sm:text-5xl md:text-6xl lg:text-7xl"
              />

              <div className="mb-8 min-h-[1.5rem]">
                <p className="font-mono text-xl text-text-primary md:text-2xl">
                  {subtitle}
                  <span className="ml-1 inline-block h-5 w-1 animate-pulse bg-matrix-green" />
                </p>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="mx-auto lg:mx-0 mb-12 max-w-lg text-lg text-text-secondary md:text-xl px-4 lg:px-0 font-sans"
              >
                I build full-stack applications with modern tools and thoughtful engineering practices, focusing on performance, maintainability, and user experience.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
                className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-6 sm:flex-row"
              >
                <Link    
                  href="/projects"
                  className="group relative overflow-hidden rounded-md border border-matrix-green/50 px-8 py-3 font-mono text-sm font-medium tracking-widest text-matrix-green transition-all hover:bg-matrix-green/10 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]"
                >
                  Projects
                </Link>

                <a 
                  href="https://drive.google.com/file/d/1ie1hDAg067E3UA4QIzTW2S5lDkT-kf93/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-md bg-matrix-green px-8 py-3 font-mono text-sm font-bold tracking-widest text-space-black transition-all hover:scale-105 hover:bg-matrix-bright hover:shadow-[0_0_25px_rgba(0,255,65,0.4)]"
                >
                  Resume
                  <IconArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.1, duration: 0.8 }}
                className="mt-8 flex items-center justify-center lg:justify-start gap-4"
              >
                <div className="h-px w-8 bg-matrix-green/20 hidden sm:block" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase">CONNECT</span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://github.com/samibyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-10 h-10 rounded border border-matrix-green/25 bg-space-deep/40 text-text-secondary transition-all duration-300 hover:border-matrix-green hover:text-matrix-green hover:bg-matrix-green/10 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]"
                    aria-label="GitHub"
                  >
                    <IconGithub size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/samibyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-10 h-10 rounded border border-matrix-green/25 bg-space-deep/40 text-text-secondary transition-all duration-300 hover:border-matrix-green hover:text-matrix-green hover:bg-matrix-green/10 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]"
                    aria-label="LinkedIn"
                  >
                    <IconLinkedin size={18} />
                  </a>
                  <a 
                    href="https://x.com/samibyt3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-10 h-10 rounded border border-matrix-green/25 bg-space-deep/40 text-text-secondary transition-all duration-300 hover:border-matrix-green hover:text-matrix-green hover:bg-matrix-green/10 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]"
                    aria-label="Twitter"
                  >
                    <IconTwitter size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Tech details background glow */}
            <div className="absolute -inset-4 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.08)_0%,transparent_70%)] blur-2xl pointer-events-none" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[360px] md:h-[360px] p-2 bg-space-deep/90 border border-matrix-green/20 rounded-lg group shadow-[0_0_30px_rgba(0,255,65,0.05)] transition-all duration-500 hover:border-matrix-green/50 hover:shadow-[0_0_40px_rgba(0,255,65,0.15)]"
            >
              {/* Corner brackets */}
              {/* Top-Left Bracket */}
              <span className="absolute -top-[2px] -left-[2px] w-5 h-5 border-t-2 border-l-2 border-matrix-green transition-all duration-300 group-hover:w-8 group-hover:h-8" />
              {/* Top-Right Bracket */}
              <span className="absolute -top-[2px] -right-[2px] w-5 h-5 border-t-2 border-r-2 border-matrix-green transition-all duration-300 group-hover:w-8 group-hover:h-8" />
              {/* Bottom-Left Bracket */}
              <span className="absolute -bottom-[2px] -left-[2px] w-5 h-5 border-b-2 border-l-2 border-matrix-green transition-all duration-300 group-hover:w-8 group-hover:h-8" />
              {/* Bottom-Right Bracket */}
              <span className="absolute -bottom-[2px] -right-[2px] w-5 h-5 border-b-2 border-r-2 border-matrix-green transition-all duration-300 group-hover:w-8 group-hover:h-8" />

              {/* Inner wrapper for image */}
              <div className="relative w-full h-full overflow-hidden rounded-md bg-space-black/50 flex items-center justify-center">
                
                {/* Tech scanline running vertically */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[2px] bg-matrix-green/50 shadow-[0_0_10px_rgba(0,255,65,0.8)] opacity-30 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none z-10"
                />

                {/* Subtitle matrix background behind the profile */}
                <div 
                  className="absolute inset-0 opacity-[0.04] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500" 
                  style={{
                    backgroundImage: `linear-gradient(var(--color-matrix-green) 1px, transparent 1px), linear-gradient(90deg, var(--color-matrix-green) 1px, transparent 1px)`,
                    backgroundSize: '25px 25px'
                  }}
                />

                {/* Image */}
                <Image
                  src="/headshot-adnan.png"
                  alt="Sami Adnan"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 360px"
                  priority
                  className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              {/* Monospace Tech Tag at the bottom of the card */}
              <div className="absolute -bottom-4 right-6 bg-space-black border border-matrix-green/30 px-3 py-0.5 font-mono text-[9px] text-matrix-green/80 uppercase tracking-widest transition-all duration-300 group-hover:text-matrix-bright group-hover:border-matrix-green/60">
                SAMI_ADNAN
              </div>

              {/* Dynamic decorative tech numbers */}
              <div className="absolute -left-3 top-10 font-mono text-[8px] text-matrix-green/30 select-none flex flex-col gap-1 pointer-events-none">
                <span>01.LOC: BGD</span>
                <span>02.STATUS: OK</span>
                <span>03.SYS: ALIVE</span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll indicator at the bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute -bottom-35 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">Initiating sequence</span>
            <div className="h-12 w-[2px] overflow-hidden rounded-full bg-white/10">
              <motion.div 
                animate={{ y: [0, 48, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-1/3 w-full bg-gradient-to-b from-transparent via-matrix-green to-transparent"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      
    </section>
  );
};

export default HeroSection;
