import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiNextdotjs, SiPostgresql, SiStripe, SiPrisma,
  SiSocketdotio, SiRedis, SiPython, SiOpenai, SiFastapi
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface TechItem {
  name: string;
  icon: IconType;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: TechItem[];
  githubUrl: string;
  demoUrl: string;
  caseStudy: {
    problem: string;
    solution: string;
    results: string[];
  };
}

export const projects: Project[] = [
  {
    id: "devflow",
    title: "DevFlow",
    description: "A developer productivity dashboard with real-time analytics, habit tracking, and ecosystem integration.",
    longDescription: "DevFlow was conceived to bridge the gap between fragmented developer tools. It provides a centralized hub for tracking coding hours, task progress, and team collaboration status in real-time.",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    ],
    githubUrl: "#",
    demoUrl: "#",
    caseStudy: {
      problem: "Developers often lose track of productivity due to context switching between multiple disconnected platforms.",
      solution: "We integrated APIs from GitHub, Jira, and Slack into a unified dashboard with personalized analytics dashboards.",
      results: [
        "25% reduction in context switching time.",
        "Increased team transparency and communication.",
        "Positive feedback from beta testers on the habit tracking feature."
      ],
    },
  },
  {
    id: "nexcommerce",
    title: "NexCommerce",
    description: "A high-performance e-commerce platform built for speed and scale.",
    longDescription: "NexCommerce is a production-ready e-commerce solution focusing on SEO, lightning-fast load times using Next.js Server Components, and seamless Stripe payment integration.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
    ],
    githubUrl: "#",
    demoUrl: "#",
    caseStudy: {
      problem: "Traditional e-commerce sites often suffer from slow page loads and poor mobile optimization, leading to high bounce rates.",
      solution: "Leveraging Next.js App Router and Edge Functions to serve static assets and dynamic content globally with minimal latency.",
      results: [
        "99/100 Lighthouse score for performance.",
        "30% increase in checkout conversion rates.",
        "Support for 10,000+ concurrent users with zero downtime."
      ],
    },
  },
  {
    id: "astrochat",
    title: "AstroChat",
    description: "Real-time chat application with astronomical themes.",
    longDescription: "AstroChat combines the power of WebSockets with a sleek, space-themed UI. It allows users to join different 'Galaxy' rooms and discuss space exploration in real-time.",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
    githubUrl: "#",
    demoUrl: "#",
    caseStudy: {
      problem: "Real-time communication platforms can be resource-heavy and lack a unique, engaging user experience.",
      solution: "Implemented a lightweight pub/sub architecture using Redis and Socket.io, wrapped in an immersive Three.js-enhanced UI.",
      results: [
        "Under 50ms message latency globally.",
        "Scaleable to 5,000+ simultaneous connections per cluster.",
        "High user retention due to gamified space-themed interactions."
      ],
    },
  },
  {
    id: "codelens",
    title: "CodeLens",
    description: "An AI-powered tool for intelligent code review and optimization.",
    longDescription: "CodeLens uses fine-tuned Large Language Models to analyze pull requests, suggesting improvements in security, performance, and readability before human review.",
    tech: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "FastAPI", icon: SiFastapi, color: "#05998B" },
    ],
    githubUrl: "#",
    demoUrl: "#",
    caseStudy: {
      problem: "Code reviews are time-consuming and often miss subtle performance bottlenecks or security vulnerabilities.",
      solution: "Developed an automated pipeline that scans codebases using vector embeddings and OpenAI models to detect patterns of inefficiency.",
      results: [
        "Identified 40% more edge-case bugs compared to static analyzers.",
        "Reduced average PR review time by 2 hours.",
        "Automated repetitive refactoring suggestions."
      ],
    },
  },
];
