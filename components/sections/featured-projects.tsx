"use client";

import { useState } from "react";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { CaseStudyModal } from "@/components/ui/case-study-modal";
import { getCaseStudyByProjectId } from "@/lib/case-studies";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  
  const caseStudy = selectedCaseStudy ? getCaseStudyByProjectId(selectedCaseStudy) : null;

  return (
    <section id="projects" className="relative overflow-hidden border-b border-border/50 bg-muted/20">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.01))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.01))]" />
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Production-deployed applications showcasing real-world impact
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="large"
              onCaseStudyClick={setSelectedCaseStudy}
            />
          ))}
        </div>
      </div>
      
      {/* Case Study Modal */}
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

