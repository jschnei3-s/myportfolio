"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const pillars: {
  title: string;
  lead: string;
  body: string[];
  pullQuote?: string;
}[] = [
  {
    title: "Risk as probabilistic structure",
    lead: "Risk is not a single metric; it is a distribution across states of the world.",
    body: [
      "I think in terms of tail exposure, capital response, liquidity fragility, and how uncertainty propagates through balance sheets. The objective is not point prediction, but structural understanding under stress.",
    ],
    pullQuote:
      "Most failures in finance are not forecasting errors — they are failures to model second-order effects.",
  },
  {
    title: "Markets as adaptive systems",
    lead: "Markets are adaptive networks shaped by incentives, regulation, and information flow.",
    body: [
      "Prices reflect expectations under constraint. Liquidity is conditional. Feedback loops matter. Stability often depends less on fundamentals than on positioning and confidence.",
    ],
    pullQuote:
      "The goal is to design tools that surface system-level dynamics rather than assume equilibrium.",
  },
  {
    title: "Machine learning as disciplined signal extraction",
    lead: "In financial contexts, machine learning is most powerful when applied with domain structure.",
    body: [
      "Its role is to extract signal from noise — from disclosures, time series, and cross-sectional data — while remaining anchored to economic intuition.",
    ],
    pullQuote:
      "Models should augment judgment, not substitute for it. The danger is not underfitting; it is false confidence.",
  },
  {
    title: "Building as an intellectual filter",
    lead: "Theory suggests what might matter. Implementation reveals what survives contact with reality.",
    body: [
      "Turning ideas into working systems forces clarity around assumptions, edge cases, and failure modes. Building is how I pressure-test how I think.",
    ],
    pullQuote:
      "This perspective shapes how I approach analytics, product, and system design in finance.",
  },
];

export function ThinkingContent() {
  return (
    <article className="min-h-screen">
      <div className="relative border-b border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-mask opacity-30 pointer-events-none" />
        <div className="absolute inset-0 glow-orb pointer-events-none" />
        <div className="container relative mx-auto px-4 py-14 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <p className="section-label mb-4">Perspective</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl max-w-3xl text-gradient">
            How I Think About Financial Systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A framework for how I approach risk, markets, and building.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-20 md:space-y-24">
          {pillars.map((pillar, index) => (
            <motion.section
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="border-b border-border/30 pb-20 md:pb-24 last:border-0 last:pb-0"
            >
              <div className="flex gap-6 md:gap-10">
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    <span className="text-primary/60">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-muted-foreground/50 mx-2">—</span>
                    {pillar.title}
                  </h2>
                  <p className="mt-5 text-lg font-medium text-foreground/95 leading-snug">
                    {pillar.lead}
                  </p>
                  <div className="mt-6 space-y-4">
                    {pillar.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {pillar.pullQuote && (
                    <p className="mt-8 pt-6 border-l-2 border-primary/40 pl-5 text-foreground/90 italic text-base leading-relaxed">
                      {pillar.pullQuote}
                    </p>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-24 pt-12 border-t border-border/50 text-center"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition-all"
          >
            View projects
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
