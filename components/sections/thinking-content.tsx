"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const paragraphs = [
  "I'm interested in using analytics to better understand how businesses, markets, and people make decisions. What I enjoy most is taking complex or messy information, identifying meaningful patterns, and turning it into insights that are actually actionable.",
  "My projects usually sit at the intersection of data, strategy, and real-world problem solving, with a particular interest in finance, risk, operations, and emerging technologies.",
  "I'm less interested in analytics for the sake of complexity, and more interested in work that helps explain behavior, improve decisions, and create practical impact.",
];

export function ThinkingContent() {
  return (
    <article className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="container mx-auto px-4 py-16 md:py-24 max-w-2xl"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <p className="section-label mb-4">Thinking</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">
          How I approach problems
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 space-y-5 text-muted-foreground leading-relaxed"
        >
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </motion.div>

        <div className="mt-14 pt-10 border-t border-border/50">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition-all"
          >
            View projects
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </motion.div>
    </article>
  );
}
