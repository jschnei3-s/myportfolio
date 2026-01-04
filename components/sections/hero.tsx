"use client";

import Link from "next/link";
import { ArrowRight, FileText, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="container relative mx-auto px-4 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Jonathan Schneider
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6"
          >
            <p className="text-xl font-medium text-foreground/90 sm:text-2xl md:text-3xl">
              Builder + Applied Machine Learning + Finance
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4"
          >
            <p className="text-base text-muted-foreground sm:text-lg md:text-xl max-w-2xl mx-auto">
              Applying machine learning and analytics powering real-world products
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#projects"
              className={cn(
                "group inline-flex items-center gap-2 rounded-lg bg-foreground px-8 py-4",
                "text-base font-semibold text-background",
                "transition-all hover:scale-105 hover:shadow-lg",
                "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              )}
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://jsphotography629.squarespace.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group inline-flex items-center gap-2 rounded-lg border-2 border-border px-8 py-4",
                "text-base font-semibold bg-background",
                "transition-all hover:border-foreground hover:bg-muted/50",
                "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              )}
            >
              <Camera className="h-4 w-4" />
              Photography
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group inline-flex items-center gap-2 rounded-lg border-2 border-border px-8 py-4",
                "text-base font-semibold bg-background",
                "transition-all hover:border-foreground hover:bg-muted/50",
                "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              )}
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

