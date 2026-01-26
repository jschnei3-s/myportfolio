"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, FileText, BookOpen } from "lucide-react";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  variant?: "large" | "small";
  className?: string;
  onCaseStudyClick?: (projectId: string) => void;
}

export function ProjectCard({
  project,
  variant = "small",
  className,
  onCaseStudyClick,
}: ProjectCardProps) {
  const isLarge = variant === "large";
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn("group relative", className)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-border/50",
          "bg-background transition-all duration-300",
          "hover:border-foreground/30 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1",
          isLarge ? "h-full" : "h-full"
        )}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute right-4 top-4 z-10">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              Featured
            </span>
          </div>
        )}

        {/* Image */}
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            isLarge ? "aspect-video h-64" : "aspect-video h-48"
          )}
        >
          {!imageError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
              <span className="text-sm">Image not available</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={cn("p-6", isLarge ? "space-y-4" : "space-y-3")}>
          {/* Title and Description */}
          <div>
            <h3
              className={cn(
                "font-semibold text-foreground",
                isLarge ? "text-2xl" : "text-xl"
              )}
            >
              {project.title}
            </h3>
            <p
              className={cn(
                "mt-2 text-muted-foreground",
                isLarge ? "text-base" : "text-sm"
              )}
            >
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.hasCaseStudy && onCaseStudyClick && (
              <button
                onClick={() => onCaseStudyClick(project.id)}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium",
                  "text-foreground hover:text-accent-foreground",
                  "transition-colors"
                )}
              >
                <BookOpen className="h-3.5 w-3.5" />
                Case Study
              </button>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium",
                  "text-foreground hover:text-accent-foreground",
                  "transition-colors"
                )}
              >
                Live Demo
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium",
                  "text-muted-foreground hover:text-foreground",
                  "transition-colors"
                )}
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            {project.links.deck && (
              <a
                href={project.links.deck}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium",
                  "text-muted-foreground hover:text-foreground",
                  "transition-colors"
                )}
              >
                <FileText className="h-3.5 w-3.5" />
                Deck
              </a>
            )}
            {project.links.writeup && (
              <a
                href={project.links.writeup}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium",
                  "text-muted-foreground hover:text-foreground",
                  "transition-colors"
                )}
              >
                <FileText className="h-3.5 w-3.5" />
                Write-up
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
