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
  videoUrl?: string;
  tech: TechItem[];
  githubUrl: string;
  demoUrl: string;
  caseStudy: {
    problem: string;
    solution: string;
    challenges: string;
    learnings: string;
    results: string[];
  };
}

export const projects: Project[] = [
  {
    id: "devflow",
    title: "DevFlow",
    description: "A developer productivity dashboard with real-time analytics, habit tracking, and ecosystem integration.",
    longDescription: "DevFlow was professionalized to solve the 'fragmented workspace' problem many developers face. It acts as a digital nerve center, aggregating data from disparate sources into a cohesive, actionable stream.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    ],
    githubUrl: "https://github.com/samibyte/devflow",
    demoUrl: "https://devflow.samibyte.dev",
    caseStudy: {
      problem: "Developers frequently lose up to 40% of their productive time due to 'context switching' between project management tools, communication apps, and their IDE.",
      solution: "I engineered a centralized dashboard using a micro-frontend approach that hooks into GitHub, Jira, and Slack APIs to provide a 'single source of truth' for the developer's day.",
      challenges: "Synchronizing real-time data from multiple external APIs without hitting rate limits or slowing down the UI was a massive hurdle. I had to implement a custom caching layer with Redis to serve aggregated data instantly.",
      learnings: "This project taught me the intricate dance of API orchestration and the vital importance of 'optimistic UI' updates for making a dashboard feel truly responsive.",
      results: [
        "Eliminated the need to switch tabs between GH and Jira for 80% of daily tasks.",
        "Implemented a 'Zen Mode' that users reported increased focus retention by 35%.",
        "Successfully managed over 500 API calls per minute using a throttled worker pattern."
      ],
    },
  },
  {
    id: "nexcommerce",
    title: "NexCommerce",
    description: "A high-performance e-commerce platform built for speed and scale.",
    longDescription: "NexCommerce is more than just a store; it's a showcase of modern web engineering. Built to handle massive traffic spikes while maintaining sub-second load times.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
    ],
    githubUrl: "https://github.com/samibyte/nexcommerce",
    demoUrl: "https://shop.samibyte.dev",
    caseStudy: {
      problem: "In e-commerce, every 100ms of latency costs 7% in conversions. Most existing platforms were too bloated to achieve true 'instant' feel on mobile devices.",
      solution: "I utilized Next.js 16's Server Components and partial prerendering (PPR) to deliver dynamic content at the speed of static sites.",
      challenges: "Implementing a complex multi-step checkout flow that was both secure and extremely fast was difficult. Stripe integration required robust webhook handling to ensure data consistency between the payment gateway and the database.",
      learnings: "I mastered the new Next.js caching paradigms and learned how to build resilient, ACID-compliant transaction flows using Prisma and PostgreSQL.",
      results: [
        "Achieved a 100/100 Lighthouse performance score on all product pages.",
        "Reduced initial server response time (TTFB) by over 60%.",
        "Handled 5,000+ simultaneous mock checkout sessions during stress testing."
      ],
    },
  },
  {
    id: "astrochat",
    title: "AstroChat",
    description: "Real-time chat application with astronomical themes.",
    longDescription: "AstroChat is where communication meets cosmic aesthetics. It's a high-concurrency chat platform designed for space enthusiasts to gather and share information in real-time.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
    githubUrl: "https://github.com/samibyte/astrochat",
    demoUrl: "https://astrochat.samibyte.dev",
    caseStudy: {
      problem: "Real-time apps often struggle with 'state drift' and horizontal scaling, especially when user numbers grow rapidly into the thousands.",
      solution: "I built a pub/sub architecture using Redis as a message broker between multiple Node.js instances, ensuring every 'Galaxy' room stayed in sync across the cluster.",
      challenges: "Debugging race conditions in the message delivery pipeline was the hardest part. I had to implement sequence numbering and ack-based verification to ensure no messages were lost.",
      learnings: "This project gave me deep insights into distributed systems and the mechanics of WebSockets vs HTTP polling.",
      results: [
        "Under 30ms latency for global message distribution.",
        "Zero message loss recorded during 24-hour soak tests.",
        "Built a unique Three.js background that responds dynamically to chat activity."
      ],
    },
  },
  {
    id: "codelens",
    title: "CodeLens",
    description: "An AI-powered tool for intelligent code review and optimization.",
    longDescription: "CodeLens acts as a digital pair programmer. It uses advanced machine learning to provide deep insights into code quality that go far beyond standard linting.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tech: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "FastAPI", icon: SiFastapi, color: "#05998B" },
    ],
    githubUrl: "https://github.com/samibyte/codelens",
    demoUrl: "https://codelens.samibyte.dev",
    caseStudy: {
      problem: "Human code reviews are expensive and prone to oversight. Static analysis tools often produce too many false positives and lack the context of 'intent'.",
      solution: "I developed a hybrid system that uses vector embeddings to understand code context and OpenAI's GPT-4o to provide human-like reasoning for optimizations.",
      challenges: "Fine-tuning the prompts to avoid 'hallucinations' in security suggestions was a major engineering challenge. I implemented a secondary 'verification' pass where the AI reviews its own suggestions.",
      learnings: "I learned the intricacies of prompt engineering, vector databases, and how to build high-performance Python APIs with FastAPI.",
      results: [
        "Reduced PR review cycles by an average of 1.5 days.",
        "Caught 15+ critical security flaws during an internal alpha test.",
        "92% developer satisfaction rate for suggested refactorings."
      ],
    },
  },
];
