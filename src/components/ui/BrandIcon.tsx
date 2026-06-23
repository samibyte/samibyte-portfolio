"use client";

/**
 * Renders a Devicon CDN icon.
 * 
 * Usage:
 *   <BrandIcon icon="react" color="#61DAFB" />
 *   <BrandIcon icon="nextjs" variant="plain" />
 * 
 * The `icon` prop maps to devicon class names, e.g. "react" → "devicon-react-original".
 * Use `variant` to choose between "original", "plain", or "plain-wordmark".
 */

interface BrandIconProps {
  icon: string;
  color?: string;
  className?: string;
  size?: string;
  variant?: "original" | "plain" | "plain-wordmark";
}

const BrandIcon = ({ icon, color, className = "", size = "text-xl", variant = "original" }: BrandIconProps) => {
  return (
    <i 
      className={`devicon-${icon}-${variant} ${size} transition-all duration-300 ${className}`}
      style={{ color: color || "currentColor" }}
      aria-hidden="true"
    />
  );
};

export default BrandIcon;
