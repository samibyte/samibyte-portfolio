import SkillsClient from "./SkillsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Sami Adnan",
  description: "Explore the technical stack and tools Sami Adnan uses to build modern, high-performance web applications, spanning frontend, backend, and DevOps.",
};

const Skills = () => {
  return <SkillsClient />;
};

export default Skills;

