"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error telemetry
    console.error("Critical spaceship systems collapse:", error);
  }, [error]);

  return (
    <div className="relative min-h-[85vh] w-full flex flex-col items-center justify-center py-12 px-6 overflow-hidden select-none">
      {/* Red Alert warning glow backdrop anim */}
      <motion.div 
        className="absolute inset-0 bg-red-950/10 pointer-events-none"
        animate={{
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center max-w-xl text-center">
        {/* Warning Telemetry System */}
        <div className="relative w-48 h-48 flex items-center justify-center border border-red-500/20 bg-space-black/80 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.05)] mb-8 p-4">
          
          {/* Diagnostic spinning rings */}
          <motion.div
            className="absolute inset-4 rounded-full border border-red-500/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-8 rounded-full border border-red-650/5 border-dashed"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {/* Glitching Damaged Spaceship */}
          <motion.div
            animate={{
              x: [-1.5, 1.5, -1, 1, -1.5, 0],
              y: [1, -1.5, 1.5, -1, 1, 0],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative z-10"
          >
            <svg
              width="90"
              height="90"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_10px_rgba(239,68,68,0.45)]"
            >
              {/* Shorted engine sparks */}
              <motion.circle
                cx="33"
                cy="68"
                r="3.5"
                fill="#ef4444"
                animate={{ scale: [0.5, 1.8, 0.5], opacity: [0, 0.8, 0] }}
                transition={{ duration: 0.18, repeat: Infinity }}
              />
              <motion.circle
                cx="67"
                cy="68"
                r="3"
                fill="#ef4444"
                animate={{ scale: [1.5, 0.6, 1.5], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 0.22, repeat: Infinity }}
              />

              {/* Damaged Wing Parts */}
              <path
                d="M 32 50 L 15 75 L 32 70 Z"
                fill="#050a12"
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeDasharray="2 3"
              />
              <path
                d="M 68 50 L 85 75 L 68 70 Z"
                fill="#050a12"
                stroke="#ef4444"
                strokeWidth="1.5"
              />

              {/* Malfunctioning Main Fuselage */}
              <path
                d="M 50 12 L 68 70 L 50 61 L 32 70 Z"
                fill="#020408"
                stroke="#ef4444"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Warning Cockpit Flashing Neon Red */}
              <motion.path
                d="M 50 22 L 57 44 L 50 49 L 43 44 Z"
                fill="rgba(239,68,68,0.4)"
                stroke="#ef4444"
                strokeWidth="1.5"
                animate={{ fillOpacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </svg>
          </motion.div>

          {/* Alarm symbol flashing overlay */}
          <div className="absolute top-2 right-2 text-red-500 animate-pulse font-mono text-[9px] font-bold">
            🚨 SYSTEMS_FLR
          </div>
        </div>

        {/* Diagnostic console feedback */}
        <div className="font-mono space-y-2">
          <p className="text-red-500 text-xs tracking-[0.3em] font-semibold uppercase animate-pulse">
            [ ALERT: ENGINE TELEMETRY BREACHED ]
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Mainframe Malfunction
          </h1>
          <p className="text-xs text-text-secondary mt-1 tracking-widest uppercase">
            Diagnostic ID: <span className="text-red-400 font-bold">{error.digest || "CORE_DUMP_0X9731"}</span>
          </p>
        </div>

        {/* System Error Trace Dump */}
        <div className="w-full mt-6 bg-red-950/15 border border-red-500/25 p-4 rounded text-left font-mono text-xs text-red-100 max-w-md mx-auto relative overflow-hidden scanlines">
          <div className="flex items-center justify-between border-b border-red-500/20 pb-2 mb-2">
            <span className="text-[10px] text-red-400 tracking-wider">ERROR TELEMETRY DUMP</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          </div>
          <div className="space-y-1 text-red-300 font-mono text-[11px] leading-relaxed wrap-break-word">
            <p>&gt; SYS_STATUS: ENGINE_STALL</p>
            <p className="break-all font-mono">&gt; EXCEPTION: {error.message || "An unexpected error disrupted warp field translation."}</p>
            <p>&gt; RESET_RECOMMENDED: TRUE</p>
          </div>
        </div>

        {/* Recovery Operations */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 font-mono text-xs uppercase tracking-widest text-space-black bg-red-500 border border-red-500 hover:bg-transparent hover:text-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] rounded transition-all duration-300 font-bold cursor-pointer"
          >
            Reboot Mainframe
          </button>
          <Link
            className="w-full sm:w-auto px-6 py-3 font-mono text-xs uppercase tracking-widest text-text-secondary border border-matrix-border/30 hover:bg-matrix-green/5 hover:text-matrix-bright rounded text-center transition-all duration-300"
            href="/"
          >
            Return to orbit
          </Link>
        </div>
      </div>
    </div>
  );
}