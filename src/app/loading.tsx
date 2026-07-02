"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "SYSTEM: INITIALIZING QUANTUM CORE...",
  "GRAVITY: SYNCHRONIZING GRAVITATIONAL ANCHORS [OK]",
  "WARP-DRIVE: CHARGING DEFLECTOR ARRAY... 34%",
  "NEURAL-NET: ALIGNING COGNITIVE Blueprints [OK]",
  "COMMS: SHIELDING SUB-SPACE DATA TRANSPONDERS...",
  "WARP-DRIVE: CHARGING DEFLECTOR ARRAY... 88%",
  "GEOMETRY: GENERATING CELESTIAL NAV-GRID [OK]",
  "SECURITY: RUNNING DEEP HULL SCAN: NO ANOMALIES FOUND",
  "SYSTEM: TERMINATING WARP COIL LOCKS...",
  "WARP-DRIVE: WARP FIELD STABLE. PREPARING TRANSLATION...",
];

export default function Loading() {
  const [logIndex, setLogIndex] = useState(0);
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  // Cycle boot logs
  useEffect(() => {
    if (logIndex < BOOT_LOGS.length) {
      const delay = Math.random() * 600 + 300; // random delay between logs
      const timeout = setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, BOOT_LOGS[logIndex]].slice(-4)); // keep last 4 logs
        setLogIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      // Loop logs once finished to keep loading live if slow connection
      const timeout = setTimeout(() => {
        setDisplayedLogs([]);
        setLogIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [logIndex]);

  // Update progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next >= 100 ? 0 : next; // Reset at 100 to keep it moving loop
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden py-12 px-4 select-none">
      {/* Background Star Lines / Warp Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-linear-to-b from-transparent via-matrix-green to-transparent"
            style={{
              width: "1.5px",
              height: "150px",
              left: `${15 + i * 16}%`,
              top: "-150px",
            }}
            animate={{
              y: ["0vh", "120vh"],
            }}
            transition={{
              duration: 1.5 + i * 0.4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
        {/* Spaceship Wrapper */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Outer Shield Glow Rings */}
          <motion.div
            className="absolute w-32 h-32 rounded-full border border-matrix-green/10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-36 h-36 rounded-full border border-matrix-green/5 border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating Spaceship */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]"
            >
              {/* Propulsion/Fire Flame */}
              <motion.path
                d="M 45 68 L 50 88 L 55 68 Z"
                fill="url(#thrustGradient)"
                animate={{
                  scaleY: [1, 1.3, 0.9, 1.2, 1],
                  opacity: [0.8, 1, 0.7, 1, 0.8],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Side Booster Trails */}
              <motion.path
                d="M 30 73 L 32 82 L 34 73 Z"
                fill="#39FF14"
                opacity="0.6"
                animate={{ scaleY: [0.8, 1.2, 0.8] }}
                transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}
              />
              <motion.path
                d="M 66 73 L 68 82 L 70 73 Z"
                fill="#39FF14"
                opacity="0.6"
                animate={{ scaleY: [0.8, 1.2, 0.8] }}
                transition={{ duration: 0.3, repeat: Infinity, delay: 0.2 }}
              />

              {/* Wing Backing Panel */}
              <path
                d="M 32 50 L 15 75 L 32 70 Z"
                fill="#050a12"
                stroke="#00FF41"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M 68 50 L 85 75 L 68 70 Z"
                fill="#050a12"
                stroke="#00FF41"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Main Fuselage Body */}
              <path
                d="M 50 12 L 68 70 L 50 61 L 32 70 Z"
                fill="#020408"
                stroke="#00FF41"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Cockpit Canopy */}
              <path
                d="M 50 22 L 57 44 L 50 49 L 43 44 Z"
                fill="rgba(0, 255, 65, 0.25)"
                stroke="#39FF14"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Wing Panel Trims */}
              <line x1="28" y1="58" x2="20" y2="70" stroke="#00FF41" strokeWidth="1" />
              <line x1="72" y1="58" x2="80" y2="70" stroke="#00FF41" strokeWidth="1" />

              {/* Gradients */}
              <defs>
                <radialGradient id="thrustGradient" cx="50%" cy="20%" r="50%">
                  <stop offset="0%" stopColor="#39FF14" />
                  <stop offset="50%" stopColor="#00FF41" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0a5f1a" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Warp Drive Loading Title */}
        <h2 className="mt-6 text-sm font-mono tracking-[0.25em] text-matrix-bright glow-green uppercase">
          WARPDRIVE_ACTIVE
        </h2>

        {/* Custom Progress Bar */}
        <div className="w-full max-w-xs mt-3 h-[3px] bg-matrix-dim/20 rounded-full overflow-hidden border border-matrix-border/10 relative">
          <motion.div
            className="h-full bg-matrix-green shadow-[0_0_8px_#39FF14]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Real-time Diagnostics Terminal */}
        <div className="w-full mt-8 font-mono text-xs text-left glass-card p-4 min-h-[140px] relative overflow-hidden scanlines">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between border-b border-matrix-border/20 pb-2 mb-3">
            <span className="text-[10px] text-text-secondary tracking-wider font-semibold">
              TELEMETRY LOGS (V1.6.2.9)
            </span>
            <div className="flex space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-matrix-green/30" />
              <span className="w-2 h-2 rounded-full bg-matrix-bright animate-pulse" />
            </div>
          </div>

          {/* Logs Output */}
          <div className="space-y-1.5 min-h-[90px] flex flex-col justify-end">
            <AnimatePresence initial={false}>
              {displayedLogs.map((log, index) => (
                <motion.div
                  key={log + index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`leading-relaxed tracking-wide ${
                    log.includes("[OK]")
                      ? "text-matrix-bright font-bold"
                      : "text-text-secondary"
                  }`}
                >
                  <span className="text-matrix-green mr-1.5">&gt;</span>
                  {log}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Blinking input cursor line */}
            <div className="flex items-center text-text-muted mt-0.5">
              <span className="text-matrix-green mr-1.5">&gt;</span>
              <span className="w-2 h-3.5 bg-matrix-green/70 animate-[pulse_1s_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}