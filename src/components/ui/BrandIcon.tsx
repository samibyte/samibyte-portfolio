"use client";

import type { IconType } from "react-icons";

interface BrandIconProps {
  Icon: IconType;
  color?: string;
  className?: string;
  size?: string;
}

const BrandIcon = ({ Icon, color, className = "", size = "text-xl" }: BrandIconProps) => {
  return (
    <Icon 
      className={`${size} transition-all duration-300 ${className}`}
      style={{ color: color || "currentColor" }}
    />
  );
};

export default BrandIcon;
