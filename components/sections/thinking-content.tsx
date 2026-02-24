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
      <div className="border-b border-border/50 bg-muted/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Perspective
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl max-w-3xl">
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
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {String(index + 1).padStart(2, "0")} — {pillar.title}
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
                    <p className="mt-8 pt-6 border-t border-border/40 text-foreground/90 italic text-base leading-relaxed">
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
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
          >
            View projects
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
