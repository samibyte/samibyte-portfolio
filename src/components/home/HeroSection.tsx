"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconArrowNarrowRight } from "@/components/ui/Icons";
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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
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

      <div className="section-container h-[100vh] relative z-20 flex flex-col items-center justify-center text-center">
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
            className="mx-auto mb-12 max-w-lg text-lg text-text-secondary md:text-xl px-4 font-sans"
          >
            Building the future of the web with clean code and innovative design. 
            Currently specializing in high-performance Full-Stack ecosystems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Link    
              href="/projects"
              className="group relative overflow-hidden rounded-md border border-matrix-green/50 px-8 py-3 font-mono text-sm font-medium tracking-widest text-matrix-green transition-all hover:bg-matrix-green/10 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]"
            >
              cd Projects
            </Link>

            <a 
              href="https://drive.google.com/file/d/1ie1hDAg067E3UA4QIzTW2S5lDkT-kf93/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-md bg-matrix-green px-8 py-3 font-mono text-sm font-bold tracking-widest text-space-black transition-all hover:scale-105 hover:bg-matrix-bright hover:shadow-[0_0_25px_rgba(0,255,65,0.4)]"
            >
              cd Resume
              <IconArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
