"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  IconMail, 
  IconArrowNarrowRight, 
  IconChevronRight,
  IconGithub,
  IconLinkedin,
  IconTwitter,
} from "@/components/ui/Icons";

const socialLinks = [
  {
    name: "Email",
    value: "samibyte.web@gmail.com",
    icon: IconMail,
    href: "mailto:samibyte.web@gmail.com",
    color: "text-matrix-green"
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/samibyte",
    icon: IconLinkedin,
    href: "https://www.linkedin.com/in/samibyte",
    color: "text-blue-400"
  },
  {
    name: "GitHub",
    value: "github.com/samibyte",
    icon: IconGithub,
    href: "https://github.com/samibyte",
    color: "text-text-primary"
  },
  {
    name: "Twitter",
    value: "@samibyt3",
    icon: IconTwitter,
    href: "https://x.com/samibyt3",
    color: "text-cyan-400"
  }
];

const ContactClient = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission delay
    setTimeout(() => {
      console.log("Form Submitted:", formState);
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/2 opacity-10">
        <div className="h-full w-full bg-matrix-green blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="glow-green font-mono text-4xl font-bold text-matrix-green md:text-5xl">
            &gt; Get in Touch
          </h1>
          <div className="mt-4 h-1 w-20 bg-matrix-green/50" />
          
          <div className="mt-8 flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-matrix-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-matrix-green"></span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-matrix-green animate-pulse">
              Available for work
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-text-muted">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full rounded-md border border-matrix-border bg-space-deep/50 px-4 py-3 font-sans text-text-primary outline-none transition-all focus:border-matrix-green/50 focus:shadow-[0_0_15px_rgba(0,255,65,0.1)]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-text-muted">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full rounded-md border border-matrix-border bg-space-deep/50 px-4 py-3 font-sans text-text-primary outline-none transition-all focus:border-matrix-green/50 focus:shadow-[0_0_15px_rgba(0,255,65,0.1)]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-text-muted">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Let's build something awesome..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full rounded-md border border-matrix-border bg-space-deep/50 px-4 py-3 font-sans text-text-primary outline-none transition-all focus:border-matrix-green/50 focus:shadow-[0_0_15px_rgba(0,255,65,0.1)] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-md bg-matrix-green py-4 font-mono text-sm font-bold tracking-widest text-space-black transition-all hover:bg-matrix-bright hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] disabled:opacity-50"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? "SENDING..." : isSent ? "MESSAGE SENT" : "SEND MESSAGE"}
                  {!isSubmitting && !isSent && <IconArrowNarrowRight className="transition-transform group-hover:translate-x-1" />}
                </span>
              </button>

              {isSent && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center font-mono text-xs text-matrix-green"
                >
                  Message sent. I&apos;ll get back to you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right: Social Links */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="mb-8 font-mono text-xl font-bold tracking-widest text-text-muted uppercase">
                Links
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center justify-between rounded-lg border border-matrix-border/50 bg-space-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-matrix-green/40 hover:bg-matrix-green/5 hover:shadow-[0_0_20px_rgba(0,255,65,0.05)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`text-2xl ${link.color} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]`}>
                        <link.icon />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted group-hover:text-matrix-green/60">{link.name}</span>
                        <span className="font-sans text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{link.value}</span>
                      </div>
                    </div>
                    <IconChevronRight className="text-xl text-text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-matrix-green" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Matrix Decorative Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="rounded-lg border border-matrix-border/30 bg-matrix-green/5 p-8 text-center"
            >
              <p className="font-mono text-[10px] leading-relaxed text-matrix-green/40">
                01001001 00100000 01101100 01101111 01110110 01100101 00100000 01100010 01110101 01101001 01101100 01100100 01101001 01101110 01100111 00100000 01110100 01101000 01101001 01101110 01100111 01110011
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactClient;
