"use client";

import { motion } from "framer-motion";
import BrandIcon from "./BrandIcon";

interface SkillCardProps {
  name: string;
  icon: string;
  index: number;
  color?: string;
  variant?: "original" | "plain" | "plain-wordmark";
}

const SkillCard = ({ name, icon, index, color, variant }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-matrix-border bg-space-card p-6 backdrop-blur-md transition-all duration-300 hover:border-matrix-green/40 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-matrix-green/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 group-hover:bg-matrix-green/20 rounded-xl" />
      
      <BrandIcon 
        icon={icon} 
        color={color} 
        size="text-4xl" 
        variant={variant}
        className="group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.8)]"
      />
      
      <span className="font-mono text-xs font-semibold tracking-wider text-text-secondary transition-colors duration-300 group-hover:text-matrix-green">
        {name}
      </span>

      {/* Decorative corner accent */}
      <div className="absolute top-2 right-2 h-1 w-1 rounded-full bg-matrix-green/30 transition-all duration-300 group-hover:bg-matrix-green group-hover:shadow-[0_0_5px_rgba(0,255,65,0.8)]" />
    </motion.div>
  );
};

export default SkillCard;
