import { CaseStudy } from "@/types/case-study";
import { caseStudies } from "@/data/case-studies";

/**
 * Get a case study by project ID
 */
export function getCaseStudyByProjectId(projectId: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.projectId === projectId);
}
