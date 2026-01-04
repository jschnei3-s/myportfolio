import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { FocusAreas } from "@/components/sections/focus-areas";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <FocusAreas />
    </Layout>
  );
}
