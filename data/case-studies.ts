import { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  {
    projectId: "consulting-case-simulator",
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
  }
];
