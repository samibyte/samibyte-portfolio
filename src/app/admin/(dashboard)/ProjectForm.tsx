"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project, TechItem } from "@/data/projects";
import { IconX, IconZap, IconCpu, IconAlertTriangle } from "@/components/ui/Icons";
import BrandIcon from "@/components/ui/BrandIcon";

interface Props {
  project?: Project;
  onClose: () => void;
  onSave: () => void;
}

const ProjectForm = ({ project, onClose, onSave }: Props) => {
  const [formData, setFormData] = useState<Partial<Project>>(
    project || {
      id: "",
      title: "",
      description: "",
      longDescription: "",
      githubUrl: "",
      demoUrl: "",
      videoUrl: "",
      tech: [],
      caseStudy: {
        problem: "",
        solution: "",
        challenges: "",
        learnings: "",
        results: []
      }
    }
  );

  const [newResult, setNewResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const url = project 
        ? `/api/admin/projects/${project.id}` 
        : "/api/admin/projects";
      const method = project ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        onSave();
      } else {
        const data = await res.json();
        setError(data.error || "Uplink failed during transmission.");
      }
    } catch (e) {
      setError("Critical system communication failure.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const addTech = () => {
    const name = prompt("Enter Technology Name (e.g. Next.js)");
    const icon = prompt("Enter Devicon Slug (e.g. nextjs)");
    if (name && icon) {
      const newTech: TechItem = { name, icon };
      setFormData({ ...formData, tech: [...(formData.tech || []), newTech] });
    }
  };

  const removeTech = (index: number) => {
    const updated = [...(formData.tech || [])];
    updated.splice(index, 1);
    setFormData({ ...formData, tech: updated });
  };

  const addResult = () => {
    if (!newResult) return;
    const currentResults = formData.caseStudy?.results || [];
    setFormData({
      ...formData,
      caseStudy: { ...formData.caseStudy!, results: [...currentResults, newResult] }
    });
    setNewResult("");
  };

  const removeResult = (index: number) => {
    const currentResults = [...(formData.caseStudy?.results || [])];
    currentResults.splice(index, 1);
    setFormData({
      ...formData,
      caseStudy: { ...formData.caseStudy!, results: currentResults }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md lg:p-12"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="glass-card relative flex h-full max-h-[900px] w-full max-w-5xl flex-col overflow-hidden bg-space-deep"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-matrix-border/20 bg-white/[0.03] px-8 py-5">
          <div className="flex items-center gap-3">
            <IconZap className="text-matrix-green" size={20} />
            <h2 className="font-mono text-xl font-black tracking-tight text-white uppercase">
              {project ? `Modify_Log: ${project.id}` : "Initiate_New_Mission"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-text-secondary hover:bg-white/10 hover:text-white transition-colors"
          >
            <IconX size={24} />
          </button>
        </div>

        {/* Scrollable Body */}
        <form id="project-form" onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            
            {/* Left: Basic Info */}
            <div className="space-y-8">
              <SectionTitle label="Core Parameters" />
              
              <Field label="Identification ID (Unique Slug)" disabled={!!project}>
                <input
                  required
                  placeholder="e.g. syncora-hq"
                  value={formData.id}
                  disabled={!!project}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  className="input-admin"
                />
              </Field>

              <Field label="Mission Title">
                <input
                  required
                  placeholder="e.g. Syncora Collaboration Hub"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="input-admin"
                />
              </Field>

              <Field label="Brief Status Description">
                <input
                  required
                  placeholder="One sentence summary for the list view..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="input-admin"
                />
              </Field>

              <Field label="Full Narrative (Long Description)">
                <textarea
                  required
                  rows={4}
                  placeholder="Deep dive into the project's background..."
                  value={formData.longDescription}
                  onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                  className="input-admin resize-none"
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="GitHub Uplink">
                  <input
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    placeholder="https://..."
                    className="input-admin"
                  />
                </Field>
                <Field label="Live Beacon (Demo)">
                  <input
                    value={formData.demoUrl}
                    onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                    placeholder="https://..."
                    className="input-admin"
                  />
                </Field>
              </div>

              <Field label="Video Feed URL (YouTube Embed Link)">
                <input
                  value={formData.videoUrl || ""}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  placeholder="https://www.youtube.com/embed/..."
                  className="input-admin"
                />
              </Field>

              {/* Tech Stack */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <SectionTitle label="Integrated Systems (Tech)" />
                  <button type="button" onClick={addTech} className="text-[10px] font-bold text-matrix-green hover:underline uppercase tracking-widest">+ Link_System</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tech?.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 rounded bg-white/5 border border-matrix-border/20 px-3 py-2 group">
                      <BrandIcon icon={t.icon} size="text-sm" />
                      <span className="font-mono text-[10px] text-text-secondary">{t.name}</span>
                      <button type="button" onClick={() => removeTech(i)} className="ml-2 text-red-500/50 hover:text-red-500"><IconX size={12} /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Case Study Info */}
            <div className="space-y-8 pb-8">
              <SectionTitle label="Operational Analysis (Case Study)" />
              
              <Field label="The Problem Analysis">
                <textarea
                  required
                  rows={3}
                  value={formData.caseStudy?.problem}
                  onChange={(e) => setFormData({ ...formData, caseStudy: { ...formData.caseStudy!, problem: e.target.value } })}
                  className="input-admin resize-none"
                />
              </Field>

              <Field label="The Engineered Solution">
                <textarea
                  required
                  rows={3}
                  value={formData.caseStudy?.solution}
                  onChange={(e) => setFormData({ ...formData, caseStudy: { ...formData.caseStudy!, solution: e.target.value } })}
                  className="input-admin resize-none"
                />
              </Field>

              <Field label="Primary Challenges">
                <textarea
                  required
                  rows={3}
                  value={formData.caseStudy?.challenges}
                  onChange={(e) => setFormData({ ...formData, caseStudy: { ...formData.caseStudy!, challenges: e.target.value } })}
                  className="input-admin resize-none"
                />
              </Field>

              <Field label="Key Technical Learnings">
                <textarea
                  required
                  rows={3}
                  value={formData.caseStudy?.learnings}
                  onChange={(e) => setFormData({ ...formData, caseStudy: { ...formData.caseStudy!, learnings: e.target.value } })}
                  className="input-admin resize-none"
                />
              </Field>

              {/* Results */}
              <div className="space-y-4">
                <SectionTitle label="Validated Outcomes (Results)" />
                <div className="space-y-2">
                  {formData.caseStudy?.results.map((r, i) => (
                    <div key={i} className="flex items-center justify-between rounded border border-white/10 bg-white/[0.02] p-3 text-xs text-text-secondary">
                      <span>{r}</span>
                      <button type="button" onClick={() => removeResult(i)} className="text-red-500/50 hover:text-red-500"><IconX size={14} /></button>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <input
                      placeholder="Add result outcome..."
                      value={newResult}
                      onChange={(e) => setNewResult(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addResult())}
                      className="input-admin flex-1"
                    />
                    <button type="button" onClick={addResult} className="rounded bg-matrix-green/10 border border-matrix-green/30 p-3 text-matrix-green hover:bg-matrix-green/20"><IconCpu size={16} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-matrix-border/20 bg-white/[0.03] px-8 py-6">
          <div className="text-red-400 font-mono text-[10px] max-w-md">
            {error && <div className="flex items-center gap-2"><IconAlertTriangle size={14} /> {error}</div>}
          </div>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 font-mono text-xs font-bold tracking-widest text-text-secondary uppercase hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              form="project-form"
              type="submit"
              disabled={isSubmitting}
              className="rounded bg-matrix-green px-8 py-3 font-mono text-xs font-black tracking-widest text-space-black transition-all hover:bg-matrix-bright hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] disabled:opacity-50"
            >
              {isSubmitting ? "UPLOADING..." : "COMMIT_CHANGES"}
            </button>
          </div>
        </div>

        <style jsx>{`
          .input-admin {
            width: 100%;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(0, 255, 65, 0.1);
            border-radius: 6px;
            padding: 12px 16px;
            color: #E8F5E9;
            font-family: var(--font-jetbrains-mono);
            font-size: 14px;
            outline: none;
            transition: all 0.2s ease;
          }
          .input-admin:focus {
            border-color: #00FF41;
            background: rgba(0, 255, 65, 0.05);
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.1);
          }
          .input-admin:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
};

const SectionTitle = ({ label }: { label: string }) => (
  <h3 className="font-mono text-[10px] font-bold tracking-[0.3em] text-matrix-green/60 uppercase">
    // {label}
  </h3>
);

const Field = ({ label, children, disabled }: { label: string; children: React.ReactNode; disabled?: boolean }) => (
  <div className={`space-y-2 ${disabled ? "opacity-60" : ""}`}>
    <label className="font-mono text-[9px] uppercase tracking-widest text-text-muted">{label}</label>
    {children}
  </div>
);

export default ProjectForm;
