export interface CaseStudy {
  projectId: string;
  role: string;
  stack: string[];
  timeline: string;
  status: string;
  overview: string;
  problem: string;
  goals: {
    goals: string[];
    nonGoals: string[];
  };
  approach: {
    title: string;
    description: string;
  }[];
  technicalDecisions: {
    title: string;
    description: string;
  }[];
  tradeoffs: string;
  results: string[];
  nextSteps: string[];
  reflection: string;
}
