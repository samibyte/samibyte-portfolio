"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/ui/SkillCard";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextjs", color: "#FFFFFF", variant: "plain" as const },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css3", color: "#1572B6" },
      { name: "Tailwind", icon: "tailwindcss", color: "#06B6D4" },
      { name: "GSAP", icon: "greensock", color: "#88CE02" },
      { name: "Three.js", icon: "threejs", color: "#FFFFFF", variant: "plain" as const },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Express", icon: "express", color: "#FFFFFF", variant: "plain" as const },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "GraphQL", icon: "graphql", color: "#E10098" },
      { name: "REST APIs", icon: "nodejs", color: "#FFFFFF" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
      { name: "Redis", icon: "redis", color: "#DC382D" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#FFFFFF", variant: "plain" as const },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Linux", icon: "linux", color: "#FCC624" },
      { name: "Figma", icon: "figma", color: "#F24E1E" },
      { name: "Postman", icon: "postman", color: "#FF6C37" },
    ],
  },
];

const SkillsClient = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-matrix-green/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-matrix-green/10 blur-[100px]" />
      </div>

      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="glow-green font-mono text-4xl font-bold text-matrix-green md:text-5xl">
            &lt; Tech Stack /&gt;
          </h1>
          <div className="mt-4 h-1 w-20 bg-matrix-green/50" />
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            A comprehensive list of technologies I use to bring digital ideas to life. 
            From pixel-perfect frontends to robust scalable backends.
          </p>
        </motion.div>

        <div className="space-y-20">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <h2 className="font-mono text-xl font-bold tracking-widest text-matrix-green/80 uppercase">
                  {category.title}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-matrix-green/40 to-transparent" />
              </motion.div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {category.skills.map((skill, index) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsClient;
