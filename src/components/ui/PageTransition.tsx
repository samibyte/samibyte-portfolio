"use client";

/**
 * PageTransition.tsx
 *
 * Wraps page content with Framer Motion AnimatePresence for smooth
 * fade/slide transitions between routes.
 */

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      exit={{
        opacity: 0,
        y: -10,
        filter: "blur(4px)",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
