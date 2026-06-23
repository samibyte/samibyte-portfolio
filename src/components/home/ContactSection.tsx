"use client";

import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import Link from "next/link";
import BrandIcon from "@/components/ui/BrandIcon";

import { 
  SiGithub 
} from "react-icons/si";
import { 
  FaLinkedin, FaTwitter 
} from "react-icons/fa";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const socials = [
    { name: "Github", icon: SiGithub, href: "https://github.com/samibyte", color: "#FFFFFF" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/samibyte", color: "#0A66C2" },
    { name: "Twitter", icon: FaTwitter, href: "https://x.com/samibyt3", color: "#1DA1F2" },
  ];

  
  const [binaryStrings, setBinaryStrings] = useState<string[]>([]);
    
  useEffect(() => {
    // Generate 24 unique binary strings on the client only
    const strings = Array(24).fill(0).map(() => 
      Array(200).fill(0).map(() => (Math.random() > 0.5 ? "1" : "0")).join("")
    );
    setBinaryStrings(strings);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Terminal Card */}
          <div className="glass-card relative overflow-hidden rounded-2xl border border-matrix-border/30 bg-space-deep/60 backdrop-blur-xl">
            {/* Scanlines Effect */}
            <div className="scanlines pointer-events-none absolute inset-0 opacity-[0.05]" />
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-matrix-border/20 bg-white/[0.03] px-8 py-5">
              <div className="flex items-center gap-3">
                <div className="relative h-2 w-2">
                  <div className="absolute inset-0 animate-ping rounded-full bg-matrix-green opacity-75" />
                  <div className="relative h-2 w-2 rounded-full bg-matrix-green" />
                </div>
                <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-matrix-green uppercase">
                  Uplink Status: Active
                </span>
              </div>
              <span className="hidden sm:block font-mono text-[9px] text-text-muted uppercase tracking-widest">
                System_ID: ADX-9000
              </span>
            </div>

            {/* Card Content */}
            <div className="flex flex-col lg:flex-row items-center gap-12 px-8 py-12 lg:px-16">
              {/* Left Column: Heading & Text */}
              <div className="flex-1 text-center lg:text-left">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glow-green mb-6 font-mono text-3xl font-bold tracking-tight text-matrix-green md:text-4xl"
                >
                  &gt; CONNECT_NODE
                </motion.h2>
                
                <p className="mx-auto lg:mx-0 max-w-xl text-lg leading-relaxed text-text-secondary">
                  Ready to initiate new collaborative sequences. My bandwidth is currently optimized for innovative digital engineering and high-impact architectures.
                </p>
              </div>

              {/* Right Column: Actions */}
              <div className="flex flex-col items-center lg:items-end gap-10">
                <Link 
                  href="/contact" 
                  className="group relative flex h-14 w-full max-w-sm items-center justify-center overflow-hidden rounded-md bg-matrix-green px-12 transition-all hover:bg-matrix-bright sm:w-auto"
                >
                  <div className="relative z-10 flex items-center gap-3 font-mono text-sm font-black tracking-[0.25em] text-space-black uppercase">
                    <HiMail className="text-xl transition-transform group-hover:scale-125" />
                    Open Transmission
                  </div>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </Link>

                {/* Social Nodes */}
                <div className="flex items-center justify-around w-full">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-matrix-border/30 bg-white/[0.02] transition-all group-hover:border-matrix-green group-hover:bg-matrix-green/5 group-hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                        <BrandIcon 
                          Icon={social.icon} 
                          color={social.color} 
                          size="text-xl"
                          className="opacity-70 group-hover:opacity-100 group-hover:scale-110"
                        />
                      </div>
                      <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-text-muted transition-colors group-hover:text-matrix-green">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Decoration */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-matrix-green/20 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Ambient Background Decoration */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-matrix-green/5 blur-[120px]" />
      
      {/* Background binary rain effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none font-mono text-matrix-green text-[10px] overflow-hidden select-none">
        {binaryStrings.map((str, i) => (
          <div key={i} className="whitespace-nowrap animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
            {str}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;

