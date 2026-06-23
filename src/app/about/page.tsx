import AboutClient from "./AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sami Adnan",
  description: "Learn more about Sami Adnan, a full-stack developer passionate about building high-performance web applications and creative digital experiences.",
};

const About = () => {
  return <AboutClient />;
};

export default About;

