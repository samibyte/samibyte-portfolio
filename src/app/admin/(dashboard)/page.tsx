"use client";

import { useState, useEffect } from "react";
import { Reorder, motion, AnimatePresence } from "framer-motion";
import { getProjects } from "@/lib/projectStore";
import type { Project } from "@/data/projects";
import ProjectForm from "./ProjectForm";
import { IconZap, IconMaximize, IconMaximize as IconPlus, IconAlertTriangle } from "@/components/ui/Icons";

const AdminDashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isEditing, setIsEditing] = useState<Project | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/projects");
      const data = await res.json();
      setProjects(data);
    } catch (e) {
      console.error("Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReorder = async (newOrder: Project[]) => {
    setProjects(newOrder);
    try {
      await fetch("/api/admin/reorder", {
        method: "PATCH",
        body: JSON.stringify({ ids: newOrder.map(p => p.id) }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.error("Reorder save failed");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you SURE you want to delete this project sequence? This cannot be undone.")) return;

    try {
      const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProjects(projects.filter(p => p.id !== id));
      }
    } catch (e) {
      console.error("Delete failed");
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center font-mono text-sm tracking-widest text-matrix-green">
        <span className="animate-pulse">SYNCHRONIZING_DATA...</span>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="glow-green font-mono text-4xl font-black tracking-tighter text-matrix-green uppercase">
            // Mission_Logs
          </h2>
          <p className="mt-2 font-mono text-xs text-text-muted uppercase tracking-[0.2em]">
            Manage project deployment sequences and technical logs.
          </p>
        </div>
        
        <button
          onClick={() => setIsAdding(true)}
          className="group flex items-center gap-3 rounded-md bg-matrix-green px-6 py-3 font-mono text-xs font-bold tracking-widest text-space-black transition-all hover:bg-matrix-bright hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
        >
          <IconPlus size={14} /> NEW_MISSION
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="border-b border-matrix-border/20 bg-white/[0.03] px-6 py-3">
          <span className="font-mono text-[9px] font-bold tracking-widest text-text-secondary uppercase">
            Active Deployments (Drag to Reorder)
          </span>
        </div>

        <Reorder.Group axis="y" values={projects} onReorder={handleReorder} className="divide-y divide-matrix-border/10">
          {projects.map((project) => (
            <Reorder.Item
              key={project.id}
              value={project}
              className="group flex cursor-grab items-center justify-between bg-space-deep/40 px-6 py-4 active:cursor-grabbing transition-colors hover:bg-matrix-green/[0.02]"
            >
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="h-0.5 w-4 bg-matrix-green mb-1" />
                  <div className="h-0.5 w-4 bg-matrix-green mb-1" />
                  <div className="h-0.5 w-4 bg-matrix-green" />
                </div>
                
                <div>
                  <h3 className="font-mono text-lg font-bold text-white transition-colors group-hover:text-matrix-green">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[9px] text-text-muted uppercase tracking-widest">
                    ID: {project.id}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsEditing(project)}
                  className="rounded border border-matrix-border/30 px-4 py-2 font-mono text-[10px] font-bold tracking-widest text-text-secondary uppercase hover:border-matrix-green hover:text-matrix-green transition-all"
                >
                  Edit_Log
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="rounded border border-red-900/30 px-4 py-2 font-mono text-[10px] font-bold tracking-widest text-red-900/60 uppercase hover:border-red-500 hover:text-red-500 transition-all"
                >
                  Delete
                </button>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>

        {projects.length === 0 && (
          <div className="flex flex-col items-center justify-center p-20 text-center">
            <IconAlertTriangle size={32} className="text-text-muted mb-4" />
            <p className="font-mono text-sm text-text-muted max-w-xs uppercase tracking-widest">
              Zero active projects detected in the grid.
            </p>
          </div>
        )}
      </div>

      {/* Editor Overlays */}
      <AnimatePresence>
        {(isAdding || isEditing) && (
          <ProjectForm
            project={isEditing || undefined}
            onClose={() => {
              setIsAdding(false);
              setIsEditing(null);
            }}
            onSave={() => {
              setIsAdding(false);
              setIsEditing(null);
              fetchProjects();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
