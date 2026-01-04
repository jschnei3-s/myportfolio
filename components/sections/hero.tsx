"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Jonathan Schneider
        </h1>
        <p className="mt-6 text-xl text-muted-foreground sm:text-2xl">
          Builder + Finance + Analytics
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className={cn(
              "inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3",
              "text-sm font-medium text-background",
              "transition-all hover:scale-105 hover:opacity-90",
              "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            )}
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-md border border-border px-6 py-3",
              "text-sm font-medium bg-background",
              "transition-all hover:bg-muted",
              "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            )}
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

