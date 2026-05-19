"use client";

import { useState } from "react";
import { getProjectsBySection, PROJECT_SECTIONS } from "@/lib/projects";
import type { ProjectSection } from "@/types/project";
import { ProjectCard } from "@/components/ui/project-card";
import { CaseStudyModal } from "@/components/ui/case-study-modal";
import { getCaseStudyByProjectId } from "@/lib/case-studies";
import { motion } from "framer-motion";

export function FeaturedProjects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const caseStudy = selectedCaseStudy
    ? getCaseStudyByProjectId(selectedCaseStudy)
    : null;

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-border/50"
    >
      <div className="absolute inset-0 bg-grid bg-grid-mask opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background pointer-events-none" />

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <p className="section-label mb-4">Selected Work</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            Production systems at the intersection of finance, analytics, and AI
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {PROJECT_SECTIONS.map((section, sectionIndex) => {
            const sectionProjects = getProjectsBySection(
              section.id as ProjectSection
            );
            if (sectionProjects.length === 0) return null;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
                className="scroll-mt-24"
              >
                <div className="mb-10 flex items-end gap-4">
                  <span className="text-4xl font-bold text-primary/20 tabular-nums">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {section.title}
                    </h3>
                    <div className="mt-3 h-0.5 w-12 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sectionProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      variant="large"
                      onCaseStudyClick={setSelectedCaseStudy}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {caseStudy && (
        <CaseStudyModal
          caseStudy={caseStudy}
          isOpen={!!selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}
