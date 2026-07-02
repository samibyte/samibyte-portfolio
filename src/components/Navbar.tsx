"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu, IconX } from "@/components/ui/Icons";
import { AnimatePresence, motion } from "framer-motion";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Track scroll position for frosted glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileOpen(false);
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "nav-frosted" : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="group relative font-mono text-2xl font-bold tracking-wider"
            aria-label="Sami Adnan - Home"
          >
            <span className="text-matrix-green glow-green transition-all duration-300 group-hover:brightness-125">
              {"<SAMIBYTE />"}
            </span>
            <span
              className="absolute -bottom-1 left-0 h-[2px] w-0 bg-matrix-green transition-all duration-300 group-hover:w-full"
              aria-hidden="true"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-8 md:flex" role="list">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`relative font-mono text-sm tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-matrix-green"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                    {/* Active underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-matrix-green transition-all duration-300 ${
                        isActive ? "w-full shadow-[0_0_8px_rgba(0,255,65,0.6)]" : "w-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 text-2xl text-text-primary transition-colors duration-300 hover:text-matrix-green md:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-space-deep/95 px-8 pt-24 shadow-2xl backdrop-blur-2xl md:hidden"
              style={{
                borderLeft: "1px solid rgba(0, 255, 65, 0.15)",
              }}
            >
              <ul className="flex flex-col gap-2" role="list">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index + 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.path}
                        className={`block rounded-lg px-4 py-3 font-mono text-lg tracking-wide transition-all duration-300 ${
                          isActive
                            ? "bg-matrix-glow text-matrix-green"
                            : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Drawer bottom decoration */}
              <div className="mt-auto pb-8">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-matrix-green/30 to-transparent" />
                <p className="mt-4 text-center font-mono text-xs text-text-muted" suppressHydrationWarning>
                  &copy; {new Date().getFullYear()} Sami Adnan
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

