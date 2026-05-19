"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  BarChart3,
  Layers,
  Brain,
} from "lucide-react";

const focusAreas = [
  {
    title: "Finance & Capital Markets",
    description:
      "Deep expertise in fixed income, portfolio analytics, and capital markets",
    icon: TrendingUp,
  },
  {
    title: "Analytics & Modeling",
    description: "Building data-driven solutions and predictive models",
    icon: BarChart3,
  },
  {
    title: "Product & Engineering",
    description: "Full-stack development of production applications",
    icon: Layers,
  },
  {
    title: "Strategy & Systems Thinking",
    description: "Holistic approach to problem-solving and system design",
    icon: Brain,
  },
];

export function FocusAreas() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="section-label mb-4">Capabilities</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Focus Areas
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            What ties my work together
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-6",
                  "transition-all duration-300 hover:border-primary/25 hover:shadow-card hover:-translate-y-0.5"
                )}
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary/15">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
