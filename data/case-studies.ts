import { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  {
    projectId: "consulting-case-simulator",
    subtitle: "Designing an AI-assisted system to practice structured thinking under ambiguity",
    role: "Product · Design · Engineering",
    stack: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Vercel"],
    timeline: "2–3 weeks",
    status: "Active, iterating",
    overview: "Consulting case interviews test how candidates think — not just whether they reach the right answer. Yet most preparation tools focus on memorized frameworks, static case books, or expensive coaching, making it difficult to practice independently and get objective feedback.\n\nI built the Consulting Case Simulator to replicate the experience of a real case interview: guiding users through structured problem-solving, evaluating their reasoning, and delivering clear, actionable feedback.",
    problem: "Aspiring consultants face three main challenges when preparing for case interviews:\n\n• Lack of structure: Practice often jumps straight to analysis without clarifying objectives or constraints.\n\n• Limited feedback: Solo practice provides no signal on why an answer was strong or weak.\n\n• Accessibility: High-quality prep resources are expensive and difficult to scale.\n\nMost tools optimize for correctness. I wanted to optimize for clarity of thinking.",
    goals: {
      goals: [
        "Enable users to practice consulting cases independently",
        "Emphasize structured thinking over \"right answers\"",
        "Provide interviewer-style feedback that is specific and constructive",
        "Create an end-to-end experience that mirrors a real interview"
      ],
      nonGoals: [
        "Replacing live mock interviews",
        "Teaching industry trivia or trick cases",
        "Optimizing for speed or gamification"
      ]
    },
    approach: [
      {
        title: "Case Flow Design",
        description: "I structured each case to follow the natural progression of a real interview:\n\n• Clarifying the objective — Users must ask the right questions before analyzing anything.\n\n• Market sizing / demand estimation — Focus on assumptions and logic rather than exact numbers.\n\n• Revenue and cost drivers — Identify what actually matters to the business.\n\n• Risks and tradeoffs — Demonstrate judgment and business intuition.\n\n• Final recommendation — Synthesize insights clearly and confidently.\n\nThis flow reinforces disciplined thinking and prevents users from jumping ahead prematurely."
      },
      {
        title: "Scoring Philosophy",
        description: "Rather than grading answers as \"correct\" or \"incorrect,\" responses are evaluated across four dimensions:\n\n• Structure: Clear, MECE thinking and logical organization\n\n• Logic: Step-by-step reasoning and defensible assumptions\n\n• Business Insight: Relevance of drivers and risks identified\n\n• Communication: Clarity and conciseness of explanation\n\nThis mirrors how interviewers actually assess candidates."
      },
      {
        title: "AI Feedback Strategy",
        description: "The AI acts as a case interviewer, not a tutor.\n\nKey design principles:\n\n• Feedback is framed in a consulting tone\n\n• Explanations focus on why something worked or didn't\n\n• Generic praise is avoided in favor of concrete suggestions\n\n• Emphasis is placed on framing and prioritization\n\nPrompting was iterated to balance consistency with nuanced evaluation."
      }
    ],
    technicalDecisions: [
      {
        title: "Next.js (App Router)",
        description: "Enabled clean separation of client and server logic"
      },
      {
        title: "Server-side AI calls",
        description: "Prevented API key exposure and improved reliability"
      },
      {
        title: "PostgreSQL",
        description: "Structured storage for cases, responses, and scoring"
      },
      {
        title: "Vercel deployment",
        description: "Fast iteration and production-ready hosting"
      }
    ],
    tradeoffs: "To ship a focused MVP, I intentionally deferred several features:\n\n• Voice-based mock interviews\n\n• Adaptive difficulty based on past performance\n\n• Peer benchmarking and leaderboards\n\nI chose depth over breadth — ensuring a complete, polished core experience rather than a wide but shallow feature set.",
    results: [
      "Users can complete a full case end-to-end independently",
      "Feedback latency averages under a few seconds",
      "The system consistently highlights structural strengths and weaknesses",
      "Early users report clearer understanding of how interviewers evaluate responses"
    ],
    nextSteps: [
      "Adaptive case difficulty based on prior performance",
      "Voice input to simulate live interviews",
      "Benchmarking against anonymized peer performance",
      "More granular rubric calibration for scoring"
    ],
    reflection: "Building this project forced me to formalize instincts I had developed through consulting experience and coursework. Translating \"good thinking\" into a system made clear how much of problem-solving is about framing, not answers."
  },
  {
    projectId: "capital-markets-ai-lab",
    subtitle: "AI-Driven Stress Intelligence & Risk Analytics Platform",
    role: "Product · Design · Engineering",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "Supabase", "Tailwind CSS", "Recharts"],
    timeline: "Ongoing",
    status: "Active",
    overview: "Capital Markets AI Lab is an AI-powered decision engine designed to simulate financial fragility under macroeconomic stress and translate complex financial disclosures into actionable risk intelligence.\n\nThe platform combines quantitative modeling (Monte Carlo simulations, stress testing, capital ratio impact) with AI-driven disclosure analysis to generate executive-level risk briefings.\n\nThis project sits at the intersection of Financial Services Risk & Regulatory, Capital Markets Transformation, Quantitative Finance, and Applied AI.",
    problem: "Financial institutions and investors rely on fragmented systems to assess risk:\n\n• Excel-based stress testing\n\n• Manual review of 10-K risk disclosures\n\n• Separate dashboards for liquidity, capital, and earnings\n\nThese workflows are time-consuming and siloed. More importantly, they lack an integrated intelligence layer that connects quantitative stress modeling with qualitative disclosure analysis.\n\nAs macro volatility increases and regulatory scrutiny tightens, the ability to quickly assess capital fragility and disclosure risk becomes critical. I wanted to build a system that bridges that gap.",
    goals: {
      goals: [
        "Provide a unified interface for stress testing, disclosure analysis, and executive briefings",
        "Bridge quantitative stress modeling with qualitative disclosure analysis",
        "Transform static financial data into forward-looking risk insight",
        "Enable capital fragility and disclosure risk assessment in seconds"
      ],
      nonGoals: [
        "Replacing dedicated regulatory reporting systems",
        "Full Basel-style capital adequacy modeling (initially)",
        "Real-time market data integration in MVP"
      ]
    },
    approach: [
      {
        title: "Stress Testing Engine",
        description: "The engine supports interest rate shock simulation, revenue contraction modeling, debt servicing capacity recalculation, and liquidity runway analysis.\n\n• Monte Carlo Value-at-Risk simulation\n\n• Fragility scoring (0–100 risk index)\n\nUsers can run macro stress scenarios (e.g., rate shocks, revenue contraction, liquidity freezes) and simulate capital deterioration and liquidity burn."
      },
      {
        title: "AI Disclosure Analysis",
        description: "The platform parses 10-K risk factors and applies sentiment analysis of regulatory language.\n\n• Litigation and compliance keyword clustering\n\n• Earnings quality red flag detection\n\n• Disclosure density scoring\n\nThis layer turns complex disclosures into structured risk signals."
      },
      {
        title: "Executive Brief Generator",
        description: "Generates board-ready risk summaries in seconds.\n\n• Capital ratio impact visualization\n\n• Liquidity deterioration charts\n\n• AI-generated strategic recommendations\n\nThe goal is to make complex risk intelligence decision-ready for leadership."
      }
    ],
    technicalDecisions: [
      {
        title: "Frontend (Next.js, TypeScript)",
        description: "Tailwind CSS for styling; Recharts for interactive visualizations. Clean separation of UI and data flow."
      },
      {
        title: "Backend (Python, FastAPI)",
        description: "Pandas / NumPy for financial modeling; Monte Carlo simulation engine; NLP processing for disclosure analysis."
      },
      {
        title: "Database (Supabase / Postgres)",
        description: "Structured storage for scenarios, results, and disclosure metadata. Designed to scale into peer benchmarking and portfolio-level aggregation."
      }
    ],
    tradeoffs: "The system is structured to scale into peer benchmarking, Basel-style capital modeling, and portfolio-level aggregation. The MVP prioritizes a single-entity stress and disclosure workflow over multi-entity or real-time market data integration.",
    results: [
      "Practical application of risk modeling concepts (VaR, duration, capital adequacy)",
      "Integration of AI into financial analytics workflows",
      "Demonstrated understanding of regulatory and capital markets infrastructure",
      "Ability to design institutional-grade systems from first principles",
      "Tools that reframe how risk is understood and communicated"
    ],
    nextSteps: [
      "Peer benchmarking and comparative analytics",
      "Basel-style capital modeling expansion",
      "Portfolio-level aggregation",
      "Tighter integration of disclosure signals with stress scenarios"
    ],
    reflection: "Building this platform deepened my understanding of the relationship between macro shocks and capital fragility, how disclosure language signals underlying operational risk, and the gap between quantitative finance theory and real-world implementation. It reinforced that AI can augment, but not replace, human financial judgment — and that I care deeply about building tools that make complex systems more transparent and decision-ready."
  }
];
