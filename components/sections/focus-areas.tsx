"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const focusAreas = [
  {
    title: "Finance & Capital Markets",
    description: "Deep expertise in fixed income, portfolio analytics, and capital markets",
  },
  {
    title: "Analytics & Modeling",
    description: "Building data-driven solutions and predictive models",
  },
  {
    title: "Product & Engineering",
    description: "Full-stack development of production applications",
  },
  {
    title: "Strategy & Systems Thinking",
    description: "Holistic approach to problem-solving and system design",
  },
];

export function FocusAreas() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Focus Areas
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          What ties my work together
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "rounded-lg border border-border bg-background p-6",
              "transition-all hover:border-accent hover:shadow-md"
            )}
          >
            <h3 className="text-lg font-semibold">{area.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {area.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

