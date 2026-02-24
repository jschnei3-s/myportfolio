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
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent" />
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Focus Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            What ties my work together
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {focusAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "group relative rounded-lg border border-border/50 bg-background p-6",
              "transition-all hover:border-foreground/20 hover:bg-muted/30",
              "backdrop-blur-sm"
            )}
          >
            <h3 className="text-base font-semibold tracking-tight group-hover:text-foreground transition-colors">{area.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {area.description}
            </p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}

