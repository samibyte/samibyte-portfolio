"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiArrowNarrowRight, HiDownload } from "react-icons/hi";
import Link from "next/link";
import Counter from "@/components/ui/Counter";

const AboutSection = () => {
  const [typedJson, setTypedJson] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 1 });
  
  const fullJson = `{
  "name": "Sami Adnan",
  "role": "Full-Stack Developer",
  "location": "Bangladesh",
  "passion": "Creative Engineering",
  "available": true
}`;

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedJson(fullJson.slice(0, i));
      i++;
      if (i > fullJson.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [fullJson, isInView]);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Subtle blend top/bottom */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#020408] to-transparent opacity-50" />
      
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-full w-1/3 opacity-[0.03]">
        <div className="h-full w-full bg-matrix-green blur-[150px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          
          {/* Left Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="glow-green font-mono text-3xl font-bold text-matrix-green md:text-4xl">
              &gt; ABOUT_ME.EXE
            </h2>
            <div className="mt-4 h-1 w-20 bg-matrix-green/50" />

            <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-text-secondary">
              <p>
                A passionate <span className="text-matrix-green font-semibold">full-stack developer</span> who loves building things that live on the internet. I thrive at the intersection of clean code and great design.
              </p>
              <p>
                My mission is to craft digital experiences that are not only high-performing but also visually stunning, ensuring every pixel serves a purpose.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link href="/about" className="inline-flex items-center gap-2 font-mono text-md font-bold text-matrix-green hover:underline">
                Read full story <HiArrowNarrowRight />
              </Link>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#" className="inline-flex items-center gap-3 rounded-md border border-matrix-green/30 bg-matrix-green/5 px-6 py-2.5 font-mono text-md font-bold tracking-widest text-matrix-green transition-all hover:bg-matrix-green hover:text-space-black">
                  <HiDownload className="text-sm" />
                  DOWNLOAD CV
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Terminal & Stats */}
          <div className="flex flex-col justify-between h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden rounded-xl border border-matrix-border bg-space-deep shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-matrix-border/30 bg-white/5 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-500/40" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                  <div className="h-2 w-2 rounded-full bg-green-500/40" />
                </div>
                <span className="ml-2 font-mono text-[10px] text-text-muted uppercase tracking-wider">identity_matrix.json</span>
              </div>
              <div className="p-6 font-mono text-md leading-relaxed whitespace-pre text-matrix-green/90 min-h-[160px]">
                {typedJson}
                <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-matrix-green" />
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Exp", value: "2+" },
                { label: "Done", value: "10+" },
                { label: "Fuel", value: "∞" },
              ].map((stat, i) => (
                <div key={stat.label} className="rounded-lg border border-matrix-border/30 bg-white/[0.02] p-4 text-center backdrop-blur-sm">
                  <h3 className="glow-green font-mono text-xl font-bold text-matrix-green">
                    <Counter value={stat.value} delay={200 + i * 100} />
                  </h3>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-widest text-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
