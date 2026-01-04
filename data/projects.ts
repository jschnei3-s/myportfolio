import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "rentelligence",
    title: "RENTELLIGENCE",
    description: "Machine learning rental pricing tool for short-term rentals using XGBoost model trained on 48,000+ Paris Airbnb listings with 60.7% R² accuracy.",
    tags: ["Next.js", "Machine Learning", "XGBoost", "Python", "Analytics"],
    links: {
      live: "https://rentelligence.onrender.com",
    },
    featured: true,
    image: "/images/rentelligence.jpeg",
    category: "Analytics & Modeling",
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
  },
  {
    id: "fixed-income-portfolio",
    title: "Fixed Income Portfolio / Analytics Site",
    description: "A comprehensive analytics platform for fixed income portfolio management and analysis.",
    tags: ["Next.js", "Analytics", "Finance", "Data Visualization"],
    links: {
      live: "https://fixed-income-portfolio-f3tc.vercel.app/",
    },
    featured: true,
    image: "/images/fixed-income-portfolio.png",
    category: "Finance & Capital Markets",
  },
  // Add more projects here as needed
];

