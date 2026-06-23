import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sami Adnan | Full-Stack Web Developer",
  description: "Specializing in building high-performance, immersive web applications with clean code and innovative design.",
  openGraph: {
    title: "Sami Adnan | Full-Stack Web Developer",
    description: "Creative engineering at the intersection of design and code.",
    type: "website",
    url: "https://samibyte.dev",
  },
};

import { getProjects } from "@/lib/projectStore";

const Home = async () => {
  const projects = await getProjects();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Global Background Decorations */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20">
        <div className="absolute top-[10%] left-[10%] h-[500px] w-[500px] rounded-full bg-matrix-green/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[600px] w-[600px] rounded-full bg-matrix-green/5 blur-[150px]" />
      </div>

      {/* Modular Sections */}
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;


