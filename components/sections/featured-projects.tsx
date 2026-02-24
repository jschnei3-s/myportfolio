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
      className="relative overflow-hidden border-b border-border/50 bg-muted/10"
    >
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Production systems at the intersection of finance, analytics, and AI
          </p>
        </div>

        <div className="space-y-20 md:space-y-24">
          {PROJECT_SECTIONS.map((section, sectionIndex) => {
            const sectionProjects = getProjectsBySection(
              section.id as ProjectSection
            );
            if (sectionProjects.length === 0) return null;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-24"
              >
                <div className="mb-8">
                  <h3 className="text-xl font-semibold tracking-tight text-muted-foreground md:text-2xl">
                    {section.title}
                  </h3>
                  <div className="mt-2 h-px w-16 bg-foreground/20" />
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
