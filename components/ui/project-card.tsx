"use client";

import Image from "next/image";
import { Github, FileText, BookOpen, ArrowUpRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className={cn("group relative", className)}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl border border-border/60 bg-background/80",
          "shadow-card transition-all duration-500",
          "hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-1"
        )}
      >
        <div className="absolute inset-0 card-shine opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            isLarge ? "aspect-[16/10] h-56 sm:h-64" : "aspect-video h-48"
          )}
        >
          {!imageError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes={
                isLarge
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 100vw, 33vw"
              }
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
              <span className="text-sm">Image not available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
          {project.category && (
            <span className="absolute left-4 top-4 rounded-full border border-primary/20 bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md">
              {project.category}
            </span>
          )}
        </div>

        <div className={cn("relative p-6", isLarge ? "space-y-4" : "space-y-3")}>
          <div>
            <h3
              className={cn(
                "font-semibold text-foreground group-hover:text-primary transition-colors",
                isLarge ? "text-xl md:text-2xl" : "text-lg"
              )}
            >
              {project.title}
            </h3>
            <p
              className={cn(
                "mt-2 text-muted-foreground leading-relaxed",
                isLarge ? "text-sm md:text-base line-clamp-3" : "text-sm line-clamp-2"
              )}
            >
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="rounded-md px-2 py-0.5 text-xs text-muted-foreground">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground",
                  "transition-all hover:brightness-110"
                )}
              >
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.hasCaseStudy && onCaseStudyClick && (
              <button
                onClick={() => onCaseStudyClick(project.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold",
                  "transition-colors hover:border-primary/40 hover:bg-primary/5"
                )}
              >
                <BookOpen className="h-3.5 w-3.5" />
                Case Study
              </button>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            {(project.links.deck || project.links.writeup) && (
              <a
                href={project.links.deck || project.links.writeup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileText className="h-3.5 w-3.5" />
                {project.links.deck ? "Deck" : "Write-up"}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
