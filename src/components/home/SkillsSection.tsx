"use client";

import { motion } from "framer-motion";
import { IconArrowNarrowRight } from "@/components/ui/Icons";
import Link from "next/link";
import SkillCard from "@/components/ui/SkillCard";

const SkillsSection = () => {
  const featuredSkills = [
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "Node.js", icon: "nodejs", color: "#339933" },
    { name: "Tailwind", icon: "tailwindcss", color: "#06B6D4" },
    { name: "Next.js", icon: "nextjs", color: "#FFFFFF", variant: "plain" as const },
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
    { name: "Python", icon: "python", color: "#3776AB" },
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "Docker", icon: "docker", color: "#2496ED" },
    { name: "Figma", icon: "figma", color: "#F24E1E" },
  ];

  return (
    <section className="py-20 relative">
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-green font-mono text-3xl font-bold text-matrix-green"
          >
            &lt; TECH_STACK /&gt;
          </motion.h2>
          <p className="mt-4 text-text-secondary text-sm font-sans">Core technologies powering my development pipeline.</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {featuredSkills.map((skill, index) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              icon={skill.icon} 
              index={index} 
              color={skill.color}
              variant={skill.variant}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/skills" className="inline-flex items-center gap-2 rounded-md border border-matrix-green/20 px-6 py-2 font-mono text-[10px] text-matrix-green hover:bg-matrix-green/5 transition-all tracking-widest uppercase font-bold">
            EXPAND SYSTEM SKILLS <IconArrowNarrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
