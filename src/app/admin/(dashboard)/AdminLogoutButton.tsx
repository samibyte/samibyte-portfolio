"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogoutButton() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh(); 
    } catch (e) {
      console.error("Logout failed", e);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoggingOut}
      className="rounded border border-red-500/30 bg-red-500/5 px-4 py-1.5 font-mono text-[10px] font-bold tracking-widest text-red-400 uppercase transition-all hover:bg-red-500 hover:text-white"
    >
      {isLoggingOut ? "Ending..." : "Sign Out"}
    </button>
  );
}
