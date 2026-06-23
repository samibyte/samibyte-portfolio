"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import Counter from "@/components/ui/Counter";

const AboutClient = () => {
  const [typedJson, setTypedJson] = useState("");
  const fullJson = `{
  "name": "Sami Adnan",
  "role": "Full-Stack Developer",
  "location": "\ud83c\udf0d Earth",
  "available": true,
  "coffee_per_day": "\u221e"
}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedJson(fullJson.slice(0, i));
      i++;
      if (i > fullJson.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [fullJson]);

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 h-full w-1/3 opacity-5">
        <div className="h-full w-full bg-matrix-green blur-[150px] rounded-full" />
      </div>

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          
          {/* Left Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="glow-green font-mono text-4xl font-bold text-matrix-green md:text-5xl">
              &gt; WHO AM I?
            </h1>
            <div className="mt-4 h-1 w-20 bg-matrix-green/50" />

            <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-text-secondary">
              <p>
                A passionate <span className="text-matrix-green font-semibold">full-stack developer</span> who loves building
                things that live on the internet. I thrive at the intersection of clean code and great design.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open-source, or searching for the perfect cup of coffee. 
                I believe great software is both functional and beautiful.
              </p>
            </div>

            <motion.div 
              className="mt-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://drive.google.com/file/d/1ie1hDAg067E3UA4QIzTW2S5lDkT-kf93/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-matrix-green bg-matrix-green/5 px-8 py-3 font-mono text-sm font-bold tracking-widest text-matrix-green transition-all hover:bg-matrix-green hover:text-space-black hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
              >
                <HiDownload className="text-lg" />
                DOWNLOAD CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Terminal & Stats */}
          <div className="space-y-12">
            {/* Terminal Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden rounded-xl border border-matrix-border bg-space-deep shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-matrix-border/30 bg-white/5 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                </div>
                <span className="ml-2 font-mono text-xs text-text-muted">profile.json \u2014 samibyte@earth</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed whitespace-pre font-medium text-matrix-green/90">
                {typedJson}
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-matrix-green" />
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { label: "Years Exp", value: "2+" },
                { label: "Projects Built", value: "10+" },
                { label: "Cups of Coffee", value: "\u221e" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="rounded-lg border border-matrix-border/50 bg-matrix-green/5 p-6 text-center backdrop-blur-sm transition-all hover:border-matrix-green hover:bg-matrix-green/10"
                >
                  <h3 className="glow-green font-mono text-3xl font-bold text-matrix-green">
                    <Counter value={stat.value} />
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutClient;
