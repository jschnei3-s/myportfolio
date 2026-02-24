import { Layout } from "@/components/layout/layout";
import { ThinkingContent } from "@/components/sections/thinking-content";

export const metadata = {
  title: "How I Think About Financial Systems | Jonathan Schneider",
  description:
    "A framework for risk as probabilistic structure, markets as adaptive systems, ML as disciplined signal extraction, and building as an intellectual filter.",
};

export default function ThinkingPage() {
  return (
    <Layout>
      <ThinkingContent />
    </Layout>
  );
}
