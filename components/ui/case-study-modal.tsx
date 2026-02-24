"use client";

import { X } from "lucide-react";
import { CaseStudy } from "@/types/case-study";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectById } from "@/lib/projects";

interface CaseStudyModalProps {
  caseStudy: CaseStudy;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudy, isOpen, onClose }: CaseStudyModalProps) {
  const project = getProjectById(caseStudy.projectId);

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
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={cn(
                "relative w-full max-w-4xl my-8",
                "rounded-xl border border-border bg-background shadow-2xl",
                "overflow-hidden"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className={cn(
                  "absolute right-4 top-4 z-10 rounded-md p-2",
                  "hover:bg-muted transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-accent"
                )}
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Header */}
                <div className="border-b border-border bg-muted/30 px-8 py-8">
                  <div className="pr-8">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Case Study</p>
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    {caseStudy.subtitle && (
                      <p className="text-lg text-muted-foreground mb-6">
                        {caseStudy.subtitle}
                      </p>
                    )}
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground mb-1">Role</p>
                        <p className="font-medium">{caseStudy.role}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Stack</p>
                        <p className="font-medium">{caseStudy.stack.join(" · ")}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Timeline</p>
                        <p className="font-medium">{caseStudy.timeline}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Status</p>
                        <p className="font-medium">{caseStudy.status}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-8 py-8 space-y-12">
                  {/* Overview */}
                  <section>
                    <h3 className="text-2xl font-bold mb-4">Overview</h3>
                    <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                      {caseStudy.overview.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </section>

                  {/* The Problem */}
                  <section>
                    <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                    <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                      {caseStudy.problem.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </section>

                  {/* Goals & Success Criteria */}
                  <section>
                    <h3 className="text-2xl font-bold mb-4">Goals & Success Criteria</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Goals</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {caseStudy.goals.goals.map((goal, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-foreground mt-1">•</span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Non-Goals</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {caseStudy.goals.nonGoals.map((goal, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-foreground mt-1">•</span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Approach */}
                  <section>
                    <h3 className="text-2xl font-bold mb-6">Approach</h3>
                    <div className="space-y-8">
                      {caseStudy.approach.map((item, i) => (
                        <div key={i} className="border-l-2 border-border pl-6">
                          <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                            {item.description.split("\n\n").map((paragraph, j) => (
                              <p key={j} className="mb-3">{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Technical Decisions */}
                  <section>
                    <h3 className="text-2xl font-bold mb-6">Technical Decisions</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {caseStudy.technicalDecisions.map((decision, i) => (
                        <div key={i} className="rounded-lg border border-border p-4 bg-muted/20">
                          <h4 className="font-semibold mb-2">{decision.title}</h4>
                          <p className="text-sm text-muted-foreground">{decision.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Tradeoffs */}
                  <section>
                    <h3 className="text-2xl font-bold mb-4">Tradeoffs & What I Cut</h3>
                    <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                      {caseStudy.tradeoffs.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </section>

                  {/* Results */}
                  <section>
                    <h3 className="text-2xl font-bold mb-4">Results (Early)</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-foreground mt-1">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Next Steps */}
                  <section>
                    <h3 className="text-2xl font-bold mb-4">What I&apos;d Do Next</h3>
                    <p className="text-muted-foreground mb-4">
                      If I continued iterating, I would focus on:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      {caseStudy.nextSteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-foreground mt-1">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Reflection */}
                  <section className="border-t border-border pt-8">
                    <h3 className="text-2xl font-bold mb-4">Reflection</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {caseStudy.reflection}
                    </p>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
