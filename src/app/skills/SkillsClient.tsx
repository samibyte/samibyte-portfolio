"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/ui/SkillCard";
import { IconCpu, IconZap, IconTarget, IconAward, IconCheckCircle } from "@/components/ui/Icons";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Python", icon: "python", color: "#3776AB" },
    ],
  },
  {
    title: "Frontend Stack",
    skills: [
      { name: "React.js", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextjs", color: "#FFFFFF", variant: "plain" as const },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Redux Toolkit", icon: "redux", color: "#764ABC" },
      { name: "Framer Motion", icon: "framer", color: "#E10098" },
      { name: "GSAP", icon: "greensock", color: "#88CE02" },
      { name: "Shadcn UI", icon: "shadcn", color: "#FFFFFF", variant: "plain" as const },
    ],
  },
  {
    title: "Backend Services",
    skills: [
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Express.js", icon: "express", color: "#FFFFFF", variant: "plain" as const },
      { name: "Socket.io", icon: "socketio", color: "#FFFFFF" },
      { name: "GraphQL", icon: "graphql", color: "#E10098" },
      { name: "JWT Auth", icon: "jwt", color: "#FF6C37" },
      { name: "Zod", icon: "zod", color: "#3E63DD" },
    ],
  },
  {
    title: "Databases & ORMs",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "Prisma ORM", icon: "prisma", color: "#2D3748" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#FFFFFF", variant: "plain" as const },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "GitHub Actions", icon: "gitactions", color: "#2088FF" },
      { name: "Vercel", icon: "vercel", color: "#FFFFFF" },
      { name: "Surge", icon: "surge", color: "#00ADFF" },
      { name: "VS Code", icon: "vscode", color: "#007ACC" },
      { name: "Postman", icon: "postman", color: "#FF6C37" },
    ],
  },
];

const workflowParadigms = [
  {
    title: "Agile Development",
    metric: "ENVIRONMENT: COLLABORATIVE",
    icon: <IconZap className="text-matrix-green" size={24} />,
    desc: "Active participation in team planning sessions, sprint reviews, and retrospective discussions. Focused on continuous integration and incremental project delivery."
  },
  {
    title: "Clean Architecture",
    metric: "CODEBASE: SCALABLE & MAINTAINABLE",
    icon: <IconCpu className="text-matrix-green" size={24} />,
    desc: "Writing code structured around clear patterns and interfaces. Utilizing strict TypeScript models, solid design principles, and highly decoupled component trees."
  },
  {
    title: "CI/CD & Automation",
    metric: "LOGISTICS: CONTINUOUS DELIVERY",
    icon: <IconCheckCircle className="text-matrix-green" size={24} />,
    desc: "Implementing automated build steps, static code analysis, and testing workflows to verify correctness and safety before pushing to production servers."
  },
  {
    title: "Structured Git Workflow",
    metric: "VERSION CONTROL: MULTI-DEVELOPER",
    icon: <IconTarget className="text-matrix-green" size={24} />,
    desc: "Managing clean version control branches, writing comprehensive pull request documentation, conducting peer group code reviews, and automating deployments."
  }
];

const softSkills = [
  {
    title: "Attention to Detail",
    score: 95,
    gauge: "███████████████████░",
    tag: "QUALITY // 95%",
    icon: <IconCpu className="text-matrix-green" size={26} />,
    desc: "Priding myself on clean implementation. Ensuring pixel-perfect responsive layouts, resolving minor console diagnostics, and keeping type parameters strictly clean."
  },
  {
    title: "Collaboration & Communication",
    score: 92,
    gauge: "██████████████████░░",
    tag: "TEAMWORK // 92%",
    icon: <IconAward className="text-matrix-green" size={26} />,
    desc: "Explaining tech concepts to team members and non-technical stakeholders clearly. Documenting project architectures and onboarding instructions to support others."
  },
  {
    title: "Adaptability & Learning",
    score: 98,
    gauge: "███████████████████░",
    tag: "GROWTH // 98%",
    icon: <IconZap className="text-matrix-green" size={26} />,
    desc: "Rapidly picking up new tools, frameworks, and APIs. Keeping up with modern updates in Next.js features, optimization patterns, and database scaling options."
  },
  {
    title: "Time Management",
    score: 94,
    gauge: "██████████████████░░",
    tag: "PLANNING // 94%",
    icon: <IconTarget className="text-matrix-green" size={26} />,
    desc: "Organizing developer task boards, planning out step-by-step milestones for features, and meeting delivery deadlines through realistic scope estimation."
  }
];

const SkillsClient = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-24">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-matrix-green/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-matrix-green/10 blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(var(--color-matrix-green) 1px, transparent 1px), linear-gradient(90deg, var(--color-matrix-green) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="page-container relative z-10 space-y-24">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="glow-green font-mono text-3xl font-bold text-matrix-green md:text-5xl">
            &lt; TECHNICAL SKILLS &gt;
          </h1>
          <div className="mt-4 h-1 w-24 bg-matrix-green/50" />
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            A structured breakdown of languages, frameworks, backend architectures, storage engines, and tools that I build with.
          </p>
        </motion.div>

        {/* Section 1: Tech Stack Grid */}
        <div className="space-y-16">
          <div className="border-b border-matrix-green/15 pb-4">
            <h2 className="glow-green font-mono text-2xl font-bold text-matrix-green uppercase">
              &gt; Core Stack
            </h2>
            <p className="mt-2 text-xs text-text-secondary uppercase tracking-widest font-mono">Languages and core frameworks in my toolbox.</p>
          </div>

          <div className="space-y-20">
            {skillCategories.map((category) => (
              <div key={category.title} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <h3 className="font-mono text-xs font-bold tracking-widest text-matrix-green/80 uppercase">
                    {category.title}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-matrix-green/45 to-transparent" />
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

        {/* Section 2: Operational Workflow Paradigms */}
        <div className="space-y-12">
          <div className="border-b border-matrix-green/15 pb-4">
            <h2 className="glow-green font-mono text-2xl font-bold text-matrix-green uppercase">
              &gt; Work Practices
            </h2>
            <p className="mt-2 text-xs text-text-secondary uppercase tracking-widest font-mono">Methodical guidelines and workflows that structure my engineering.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {workflowParadigms.map((paradigm, index) => (
              <motion.div
                key={paradigm.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card border border-matrix-border bg-white/[0.01] p-6 rounded-xl hover:bg-matrix-green/[0.02] hover:border-matrix-green/50 transition-all duration-300 relative group"
              >
                <div className="absolute top-4 right-4 opacity-40 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300">
                  {paradigm.icon}
                </div>
                
                <span className="font-mono text-[8.5px] text-matrix-green/75 tracking-wider border border-matrix-green/20 px-2 py-0.5 rounded bg-matrix-green/5 uppercase">
                  {paradigm.metric}
                </span>
                
                <h3 className="font-mono text-md font-bold text-text-primary uppercase tracking-wide mt-4 mb-2">
                  {paradigm.title}
                </h3>
                
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {paradigm.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Cognitive & Soft Skills */}
        <div className="space-y-12">
          <div className="border-b border-matrix-green/15 pb-4">
            <h2 className="glow-green font-mono text-2xl font-bold text-matrix-green uppercase">
              &gt; Professional Qualities
            </h2>
            <p className="mt-2 text-xs text-text-secondary uppercase tracking-widest font-mono">Non-technical abilities and strengths that support complex projects.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card border border-matrix-border bg-white/[0.01] p-6 rounded-xl relative group hover:border-matrix-green/50 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-matrix-green/80 uppercase tracking-widest">
                      {skill.tag}
                    </span>
                    <div className="opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {skill.icon}
                    </div>
                  </div>

                  <h3 className="font-mono text-md font-bold text-text-primary uppercase tracking-wide">
                    {skill.title}
                  </h3>

                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* diagnostics loading bar */}
                <div className="space-y-1.5 font-mono text-[9px] pt-4 border-t border-white/5 mt-4">
                  <div className="flex justify-between text-text-muted">
                    <span>CAPACITY</span>
                    <span>LOAD: {skill.score}%</span>
                  </div>
                  <div className="text-matrix-green tracking-tighter text-[11px] overflow-hidden select-none whitespace-nowrap">
                    [{skill.gauge}]
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsClient;
