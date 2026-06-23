"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IconZap, IconAlertTriangle } from "@/components/ui/Icons";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/login");
        const data = await res.json();
        if (data.isLoggedIn) router.push("/admin");
      } catch (e) {
        // Silently fail if not logged in
      }
    };
    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin");
      } else {
        setError("AUTHENTICATION FAILED: Invalid access key.");
      }
    } catch (err) {
      setError("SYSTEM ERROR: Uplink interrupted.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-matrix-green blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card w-full max-w-md overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-matrix-border/20 bg-white/[0.03] px-6 py-4">
          <div className="flex items-center gap-2">
            <IconZap className="text-matrix-green" size={16} />
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-matrix-green/80 uppercase">
              Secure Terminal
            </span>
          </div>
          <div className="h-2 w-2 rounded-full bg-red-500/40 animate-pulse" />
        </div>

        <div className="p-8">
          <div className="mb-8 text-center">
            <h1 className="glow-green font-mono text-2xl font-black tracking-tighter text-matrix-green">
              &gt; ACCESS_GATE
            </h1>
            <p className="mt-2 font-mono text-[10px] text-text-muted uppercase tracking-[0.2em]">
              Authorization Required to Proceed
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                Admin Entry Key
              </label>
              <input
                type="password"
                required
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••••••"
                className="w-full rounded-md border border-matrix-border bg-space-deep/50 px-4 py-4 font-mono text-center text-xl tracking-[0.5em] text-matrix-green outline-none transition-all focus:border-matrix-green focus:shadow-[0_0_20px_rgba(0,255,65,0.15)] placeholder:text-matrix-green/20"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 rounded border border-red-500/20 bg-red-500/5 p-4 text-center text-xs font-mono text-red-400"
              >
                <IconAlertTriangle size={16} className="shrink-0" />
                <p>{error}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full overflow-hidden rounded-md bg-matrix-green py-4 font-mono text-sm font-black tracking-[0.3em] text-space-black transition-all hover:bg-matrix-bright hover:shadow-[0_0_25px_rgba(0,255,65,0.4)] disabled:opacity-50"
            >
              {isLoading ? "VALIDATING..." : "INITIATE SESSION"}
            </button>
          </form>
        </div>

        <div className="border-t border-matrix-border/10 bg-white/[0.01] px-8 py-4">
          <p className="text-center font-mono text-[8px] text-text-muted uppercase tracking-[0.1em]">
            Warning: Unauthorized access attempts are logged and reported.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
