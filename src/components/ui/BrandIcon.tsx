"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGreensock,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiFigma,
  SiPostman,
  SiPrisma,
  SiSocketdotio,
  SiRedux,
  SiFramer,
  SiShadcnui,
  SiMysql,
  SiVercel,
  SiGithubactions,
  SiWordpress,
  SiZod,
  SiJsonwebtokens,
  SiVscodium,
} from "react-icons/si";
import { IconCpu } from "@/components/ui/Icons";

interface BrandIconProps {
  icon: string;
  color?: string;
  className?: string;
  size?: string;
  variant?: "original" | "plain" | "plain-wordmark";
}

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  react: SiReact,
  reactjs: SiReact,
  nextjs: SiNextdotjs,
  nextdotjs: SiNextdotjs,
  "next.js": SiNextdotjs,
  typescript: SiTypescript,
  ts: SiTypescript,
  javascript: SiJavascript,
  js: SiJavascript,
  html5: SiHtml5,
  html: SiHtml5,
  css3: SiCss,
  css: SiCss,
  tailwindcss: SiTailwindcss,
  tailwind: SiTailwindcss,
  greensock: SiGreensock,
  gsap: SiGreensock,
  threejs: SiThreedotjs,
  three: SiThreedotjs,
  "three.js": SiThreedotjs,
  threejslogo: SiThreedotjs,
  nodejs: SiNodedotjs,
  node: SiNodedotjs,
  "node.js": SiNodedotjs,
  express: SiExpress,
  expressjs: SiExpress,
  python: SiPython,
  py: SiPython,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  mongo: SiMongodb,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  firebase: SiFirebase,
  redis: SiRedis,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  linux: SiLinux,
  figma: SiFigma,
  postman: SiPostman,
  prisma: SiPrisma,
  socketio: SiSocketdotio,
  "socket.io": SiSocketdotio,
  socketdotio: SiSocketdotio,
  redux: SiRedux,
  reduxtoolkit: SiRedux,
  framer: SiFramer,
  framermotion: SiFramer,
  shadcn: SiShadcnui,
  shadcnui: SiShadcnui,
  mysql: SiMysql,
  vercel: SiVercel,
  gitactions: SiGithubactions,
  githubactions: SiGithubactions,
  wordpress: SiWordpress,
  zod: SiZod,
  jwt: SiJsonwebtokens,
  vscode: SiVscodium,
  vscodium: SiVscodium,
};

const BrandIcon = ({ icon, color, className = "", size = "text-xl" }: BrandIconProps) => {
  const normalizedKey = icon.toLowerCase().replace(/[^a-z0-9]/g, "");
  const IconComponent = iconMap[normalizedKey] || IconCpu;

  const sizeMap: Record<string, string> = {
    "text-xs": "0.75rem",
    "text-sm": "0.875rem",
    "text-md": "1rem",
    "text-lg": "1.125rem",
    "text-xl": "1.25rem",
    "text-2xl": "1.5rem",
    "text-3xl": "1.875rem",
    "text-4xl": "2.25rem",
    "text-5xl": "3rem",
  };

  const cssSize = sizeMap[size] || size;

  return (
    <IconComponent
      className={`inline-block shrink-0 transition-all duration-300 ${className}`}
      style={{
        width: cssSize,
        height: cssSize,
        color: color || "currentColor",
      }}
    />
  );
};

export default BrandIcon;
