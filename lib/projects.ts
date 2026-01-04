import { Project } from "@/types/project";
import { projects } from "@/data/projects";

/**
 * Get all featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Get a project by its ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  const categories = projects
    .map((project) => project.category)
    .filter((category): category is string => Boolean(category));
  return Array.from(new Set(categories));
}

