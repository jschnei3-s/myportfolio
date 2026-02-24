import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "capital-markets-ai-lab",
    title: "Capital Markets AI Lab",
    description: "Upload financial data, run stress scenarios, analyze 10-K disclosures, and generate executive briefings—all in one workspace.",
    tags: ["Next.js", "AI/ML", "TypeScript", "Finance", "Vercel"],
    links: {
      live: "https://aicap-mlab-8fqt8nhx6-yoni-schneiders-projects.vercel.app",
    },
    featured: true,
    image: "/images/capital-markets-ai-lab.png",
    category: "Finance & Capital Markets",
    hasCaseStudy: true,
    section: "intelligence-systems",
  },
  {
    id: "consulting-case-simulator",
    title: "Consulting Case Simulator",
    description: "A realistic case interview partner that guides, evaluates, and teaches — anytime. Practice consulting case interviews with AI-powered feedback.",
    tags: ["Next.js", "AI/ML", "TypeScript", "Vercel"],
    links: {
      live: "https://consulting-sim-uvup-32of1zors-yoni-schneiders-projects.vercel.app",
    },
    featured: true,
    image: "/images/consulting-case-simulator.jpg",
    category: "Product & Engineering",
    hasCaseStudy: true,
    section: "intelligence-systems",
  },
  {
    id: "fixed-income-portfolio",
    title: "Fixed Income Risk Engine",
    description: "A comprehensive analytics platform for fixed income portfolio management, risk analytics, and bond investment analysis.",
    tags: ["Next.js", "Analytics", "Finance", "Data Visualization"],
    links: {
      live: "https://fixed-income-portfolio-f3tc.vercel.app/",
    },
    featured: true,
    image: "/images/fixed-income-portfolio.png",
    category: "Finance & Capital Markets",
    section: "quantitative-finance",
  },
  {
    id: "rentelligence",
    title: "RENTelligence",
    description: "Machine learning rental pricing tool for short-term rentals using XGBoost model trained on 48,000+ Paris Airbnb listings with 60.7% R² accuracy.",
    tags: ["Next.js", "Machine Learning", "XGBoost", "Python", "Analytics"],
    links: {
      live: "https://rentelligence.onrender.com",
    },
    featured: true,
    image: "/images/rentelligence.jpeg",
    category: "Analytics & Modeling",
    section: "quantitative-finance",
  },
  {
    id: "ai-journal",
    title: "AI Journaling App",
    description: "An intelligent journaling application that helps users reflect and organize their thoughts with AI-powered insights.",
    tags: ["Next.js", "TypeScript", "AI/ML", "Vercel"],
    links: {
      live: "https://ai-journal-i3hh.vercel.app/login",
    },
    featured: true,
    image: "/images/ai-journal.png",
    category: "Product & Engineering",
    section: "applied-ai",
  },
  {
    id: "task-app",
    title: "Task / Productivity App",
    description: "A modern productivity application for managing tasks and staying organized with an intuitive interface.",
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    links: {
      live: "https://task-app-rosy-three.vercel.app/",
    },
    featured: true,
    image: "/images/task-app.png",
    category: "Product & Engineering",
    section: "applied-ai",
  },
];
