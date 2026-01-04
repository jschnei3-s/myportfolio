import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AllProjectsGrid } from "@/components/sections/all-projects-grid";
import { FocusAreas } from "@/components/sections/focus-areas";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <AllProjectsGrid />
      <FocusAreas />
    </Layout>
  );
}
