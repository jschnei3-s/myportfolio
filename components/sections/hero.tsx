"use client";

import Link from "next/link";
import { ArrowRight, FileText, Camera, BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = ["Builder", "Applied ML", "Finance"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <motion.div
        className="absolute inset-0 bg-grid bg-grid-mask pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[480px] glow-orb pointer-events-none animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background to-background pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Production systems · Finance · AI
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient">Jonathan Schneider</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {skills.map((skill, i) => (
              <span key={skill} className="flex items-center gap-2">
                <span className="rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-sm font-medium text-foreground/90 backdrop-blur-sm">
                  {skill}
                </span>
                {i < skills.length - 1 && (
                  <span className="text-muted-foreground/50 hidden sm:inline">
                    ·
                  </span>
                )}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Applying machine learning and analytics to power{" "}
            <span className="text-foreground font-medium">real-world products</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#projects"
              className={cn(
                "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5",
                "text-sm font-semibold text-primary-foreground shadow-glow",
                "transition-all hover:brightness-110 hover:shadow-glow hover:-translate-y-0.5",
                "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background"
              )}
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/thinking"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-6 py-3.5",
                "text-sm font-semibold backdrop-blur-sm",
                "transition-all hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5",
                "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
              )}
            >
              <BookOpen className="h-4 w-4 text-primary" />
              How I Think
            </Link>
            <a
              href="https://jsphotography629.squarespace.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-6 py-3.5",
                "text-sm font-semibold backdrop-blur-sm",
                "transition-all hover:border-primary/40 hover:bg-muted/50 hover:-translate-y-0.5"
              )}
            >
              <Camera className="h-4 w-4 text-muted-foreground" />
              Photography
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-6 py-3.5",
                "text-sm font-semibold backdrop-blur-sm",
                "transition-all hover:border-primary/40 hover:bg-muted/50 hover:-translate-y-0.5"
              )}
            >
              <FileText className="h-4 w-4 text-muted-foreground" />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
