export type ProjectSection =
  | "intelligence-systems"
  | "quantitative-finance"
  | "applied-ai";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
    deck?: string;
    writeup?: string;
  };
  featured: boolean;
  image: string;
  category?: string;
  hasCaseStudy?: boolean;
  section: ProjectSection;
}

