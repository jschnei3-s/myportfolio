import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/project-card";

export function AllProjectsGrid() {
  const allProjects = getAllProjects();

  // Don't show if we only have featured projects
  if (allProjects.length <= 3) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          All Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Additional work including academic projects, analytics models, and experiments
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="small"
          />
        ))}
      </div>
    </section>
  );
}

