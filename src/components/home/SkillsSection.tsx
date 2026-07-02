"use client";

import { motion } from "framer-motion";
import { IconArrowNarrowRight } from "@/components/ui/Icons";
import Link from "next/link";
import SkillCard from "@/components/ui/SkillCard";

const categories = [
  {
    label: "Languages",
    prefix: "01",
    skills: [
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Python", icon: "python", color: "#3776AB" },
    ],
  },
  {
    label: "Frontend Stack",
    prefix: "02",
    skills: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextjs", color: "#FFFFFF", variant: "plain" as const },
      { name: "Redux Toolkit", icon: "redux", color: "#764ABC" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "GSAP", icon: "gsap", color: "#88CE02" },
      { name: "Three.js", icon: "threejs", color: "#FFFFFF", variant: "plain" as const },
    ],
  },
  {
    label: "Backend Services",
    prefix: "03",
    skills: [
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Express", icon: "express", color: "#FFFFFF", variant: "plain" as const },
      { name: "Socket.io", icon: "socketio", color: "#FFFFFF", variant: "plain" as const },
      { name: "GraphQL", icon: "graphql", color: "#E10098" },
      { name: "JWT Auth", icon: "jwt", color: "#FF6C37" },
      { name: "Zod", icon: "zod", color: "#3E67B1" },
    ],
  },
  {
    label: "Databases & ORMs",
    prefix: "04",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "Prisma ORM", icon: "prisma", color: "#FFFFFF", variant: "plain" as const },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
      { name: "Redis", icon: "redis", color: "#FF4438" },
    ],
  },
  {
    label: "Tools & Platforms",
    prefix: "05",
    skills: [
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub Actions", icon: "gitactions", color: "#2088FF" },
      { name: "Postman", icon: "postman", color: "#FF6C37" },
      { name: "Linux", icon: "linux", color: "#FCC624" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-green font-mono text-3xl font-bold text-matrix-green"
          >
            &lt; Tech Stack /&gt;
          </motion.h2>
          <p className="mt-4 text-text-secondary text-sm font-sans">
            Core technologies I use to build web applications.
          </p>
        </div>

        {/* Categorized Skills */}
        <div className="space-y-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              {/* Category Label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[10px] text-matrix-green/50 tracking-widest">
                  {category.prefix}
                </span>
                <span className="font-mono text-xs font-bold text-matrix-green tracking-widest uppercase">
                  {category.label}
                </span>
                <div className="flex-1 h-px bg-matrix-green/10" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    index={catIndex * 10 + skillIndex}
                    color={skill.color}
                    variant={skill.variant}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 rounded-md border border-matrix-green/20 px-6 py-2 font-mono text-[10px] text-matrix-green hover:bg-matrix-green/5 transition-all tracking-widest uppercase font-bold"
          >
            View All Skills <IconArrowNarrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

