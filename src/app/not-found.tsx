"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] w-full flex flex-col items-center justify-center py-12 px-6 overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-matrix-green) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center max-w-xl text-center">
        {/* Radar Simulation System */}
        <div className="relative w-56 h-56 flex items-center justify-center glass-card border-matrix-border/30 rounded-full glow-green-box mb-8 p-1">
          
          {/* Static Concentric Circles */}
          <div className="absolute inset-4 rounded-full border border-matrix-green/10" />
          <div className="absolute inset-12 rounded-full border border-matrix-green/5" />
          <div className="absolute inset-20 rounded-full border border-matrix-green/5 border-dashed" />
          
          {/* Crosshair Lines */}
          <div className="absolute w-full h-px bg-matrix-green/10 left-0 top-1/2 -translate-y-1/2" />
          <div className="absolute h-full w-px bg-matrix-green/10 top-0 left-1/2 -translate-x-1/2" />

          {/* Rotating Radar Sweep beam */}
          <motion.div
            className="absolute inset-4 rounded-full pointer-events-none"
            style={{
              background: "conic-gradient(from 0deg, rgba(0, 255, 65, 0.3) 0%, rgba(0, 255, 65, 0.05) 25%, transparent 60%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />

          {/* Drifting Spaceship Component */}
          <motion.div
            className="absolute z-20"
            initial={{ x: -20, y: -20, rotate: -25 }}
            animate={{
              x: [-20, 15, -10, -20],
              y: [-15, -5, 10, -15],
              rotate: [-20, -32, -18, -20],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_4px_rgba(0,255,65,0.3)] brightness-90"
            >
              {/* Damaged side engine fumes */}
              <motion.path
                d="M 33 65 L 35 73 L 37 65 Z"
                fill="#00FF41"
                opacity="0.4"
                animate={{ scaleY: [0.6, 1.2, 0.6], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <path
                d="M 32 50 L 15 75 L 32 70 Z"
                fill="#020408"
                stroke="#00FF41"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
              <path
                d="M 68 50 L 85 75 L 68 70 Z"
                fill="#020408"
                stroke="#00FF41"
                strokeWidth="1.5"
              />
              {/* Broken hull outlines */}
              <path
                d="M 50 15 L 68 70 L 50 62 L 32 70 Z"
                fill="#020408"
                stroke="#00FF41"
                strokeWidth="2"
              />
              <path
                d="M 50 25 L 56 45 L 50 50 L 44 45 Z"
                fill="rgba(0,255,65,0.05)"
                stroke="#00FF41"
                strokeWidth="1.2"
              />
            </svg>
          </motion.div>

          {/* Faint Red Ping indicating Signal Loss */}
          <motion.div
            className="absolute w-3 h-3 bg-red-500 rounded-full left-[28%] top-[30%]"
            animate={{ scale: [1, 2.5, 1], opacity: [0.9, 0, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Coordinate readings overlay */}
          <div className="absolute bottom-2 font-mono text-[9px] text-text-secondary tracking-widest bg-space-black/90 px-2 py-0.5 rounded border border-matrix-border/10">
            PING_FAIL_0X404
          </div>
        </div>

        {/* Telemetry Display Titles */}
        <div className="font-mono space-y-2">
          <p className="text-red-500 text-xs tracking-[0.3em] font-semibold uppercase animate-pulse">
            [ STATUS: OUT OF RANGE ]
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Lost in Deep Space
          </h1>
          <p className="text-xs text-text-secondary mt-1 tracking-widest uppercase">
            Sector Coordinates: <span className="text-matrix-bright">40:40:40:40</span>
          </p>
        </div>

        {/* Informative description text */}
        <p className="mt-4 text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
          Your navigation device requested a celestial body or orbit route that doesn&apos;t exist in our databanks. The spaceship has drifted off the cosmic edge.
        </p>

        {/* Quick action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 font-mono text-xs uppercase tracking-widest text-space-black bg-matrix-green border border-matrix-green hover:bg-transparent hover:text-matrix-green hover:shadow-[0_0_15px_rgba(0,255,65,0.25)] rounded transition-all duration-300 font-bold text-center"
          >
            Initiate Hyperjump Home
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-3 font-mono text-xs uppercase tracking-widest text-matrix-bright border border-matrix-border hover:bg-matrix-green/5 rounded text-center transition-all duration-300"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
}