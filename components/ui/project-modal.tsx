"use client";

import { X, ExternalLink, Github, FileText } from "lucide-react";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={cn(
                "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                "rounded-lg border border-border bg-background shadow-xl",
                "p-6 md:p-8"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className={cn(
                  "absolute right-4 top-4 rounded-md p-2",
                  "hover:bg-muted transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-accent"
                )}
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                  {project.category && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {project.category}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Links</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2",
                          "text-sm font-medium text-background",
                          "transition-all hover:opacity-90",
                          "focus:outline-none focus:ring-2 focus:ring-accent"
                        )}
                      >
                        Live Demo
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2",
                          "text-sm font-medium bg-background",
                          "transition-all hover:bg-muted",
                          "focus:outline-none focus:ring-2 focus:ring-accent"
                        )}
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                    {project.links.deck && (
                      <a
                        href={project.links.deck}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2",
                          "text-sm font-medium bg-background",
                          "transition-all hover:bg-muted",
                          "focus:outline-none focus:ring-2 focus:ring-accent"
                        )}
                      >
                        <FileText className="h-4 w-4" />
                        Deck
                      </a>
                    )}
                    {project.links.writeup && (
                      <a
                        href={project.links.writeup}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2",
                          "text-sm font-medium bg-background",
                          "transition-all hover:bg-muted",
                          "focus:outline-none focus:ring-2 focus:ring-accent"
                        )}
                      >
                        <FileText className="h-4 w-4" />
                        Write-up
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

