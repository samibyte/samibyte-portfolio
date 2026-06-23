import ProjectsClient from "./ProjectsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sami Adnan",
  description: "Browse a collection of high-performance web applications and projects built by Sami Adnan, featuring creative engineering, clean code, and advanced UX design.",
};

const Projects = () => {
  return <ProjectsClient />;
};

export default Projects;

