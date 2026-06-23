const Footer = () => {
  return (
  <footer className=" max-w-7xl w-full mx-auto py-10 border-t border-matrix-border/5 bg-space-black/40 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
          <p className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} SAMIBYTE // SECTOR_B_ACCESS
          </p>
          <div className="flex items-center gap-8 font-mono text-[10px] tracking-widest uppercase">
            <a href="https://github.com/samibyte" target="_blank" rel="noopener noreferrer" className="hover:text-matrix-green transition-all hover:glow-green">Github</a>
            <a href="https://www.linkedin.com/in/samibyte" target="_blank" rel="noopener noreferrer" className="hover:text-matrix-green transition-all hover:glow-green">LinkedIn</a>
            <a href="https://x.com/samibyt3" target="_blank" rel="noopener noreferrer" className="hover:text-matrix-green transition-all hover:glow-green">Twitter</a>
          </div>
        </div>
      </footer>
      )
}

export default Footer