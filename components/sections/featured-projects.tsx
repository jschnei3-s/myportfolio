import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/project-card";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Production-deployed applications showcasing real-world impact
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="large"
          />
        ))}
      </div>
    </section>
  );
}

