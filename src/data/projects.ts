// src/data/projects.ts

export const projects = [
  {
    slug: "neoarth", // Acts as the ID
    title: "NeoArth",
    subtitle: "AI-Powered Paper Trading Platform",
    category: "Fintech Platform", // Used in Portfolio Card
    tag: "Fintech", // Used in Case Study Hero
    tagColor: "purple",
    desc: "A risk-free stock market simulation platform designed to democratize financial literacy. Features virtual capital, AI analysis, and real-time market data.",
    description:
      "A comprehensive paper trading solution helping users learn stock market investing without financial risk. We implemented real-time data fetching and an AI financial analyst to provide instant, actionable market insights using live technical indicators.",
    image: "/projects/neoarth.png",
    heroImage: "/projects/neoarth.png",
    link: "https://neoarth.in/",
    liveLink: "https://neoarth.in/",
    gradient: "from-blue-600 to-purple-600",
    tech: ["Next.js", "Supabase", "Gemini AI", "Fintech"], // Short list for card
    features: [
      {
        title: "AI Financial Advisor",
        desc: "Integrated Google Gemini 2.5 Flash model to analyze stock fundamentals and provide instant, simplified investment verdicts.",
        icon: "lightbulb",
      },
      {
        title: "Live Market Simulation",
        desc: "Real-time stock data fetching via Yahoo Finance API with dynamic interactive charts and time-range filtering.",
        icon: "chart",
      },
      {
        title: "Portfolio Analytics",
        desc: "Automated Profit & Loss (P&L) calculation, net worth tracking, and visual breakdown of asset allocation.",
        icon: "pie-chart",
      },
      {
        title: "Secure Authentication",
        desc: " robust email authentication and user session management powered by Supabase, ensuring persistent portfolio data.",
        icon: "lock",
      },
    ],
    techStack: {
      Frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts"],
      Backend: ["Supabase (PostgreSQL)", "Next.js API Routes", "Yahoo Finance"],
      "AI & Data": ["Google Gemini AI", "Vercel Edge Functions"],
    },
  },
  {
    slug: "vastulogic",
    title: "VastuLogic",
    subtitle: "Real Estate CRM & Investment Portal",
    category: "Real Estate & Architecture",
    tag: "Real Estate Tech",
    tagColor: "blue",
    desc: "A logic-driven approach to Vastu Shastra. We built a modern, algorithm-based platform that connects users with ancient architectural wisdom through a clean, tech-forward interface.",
    description:
      "A full-stack real estate CRM and investment portal bridging the gap between property browsing and data-driven investing. It features a sophisticated Role-Based Access Control (RBAC) system serving Investors, Agents, and Admins.",
    image: "/projects/vastulogic.png",
    heroImage: "/projects/vastulogic.png",
    link: "https://www.vastulogic.in/",
    liveLink: "https://www.vastulogic.in/",
    gradient: "from-[#3b82f6] to-[#2563eb]",
    tech: ["Next.js", "Algorithm Design", "Tailwind", "UI/UX"],
    features: [
      {
        title: "Role-Based Security (RBAC)",
        desc: "Custom auth flow serving Investors, Agents, and Admins. Only verified 'Clients' see sensitive financial ROI data.",
        icon: "shield",
      },
      {
        title: "Admin Command Center",
        desc: "Comprehensive dashboard for managing listings (CRUD), approving users, and tracking lead lifecycles.",
        icon: "layout",
      },
      {
        title: "Performance & SEO",
        desc: "Built on Next.js Server Components, Cloudinary image optimization, and GPU-accelerated gestures.",
        icon: "zap",
      },
      {
        title: "Lead Generation Engine",
        desc: "Inquiry forms automatically populate the internal CRM, notifying agents of opportunities instantly.",
        icon: "target",
      },
    ],
    techStack: {
      Frontend: [
        "Next.js 16",
        "React",
        "Tailwind",
        "Lucide React",
        "Framer Motion",
      ],
      "Backend & Data": [
        "PostgreSQL (Neon)",
        "Prisma ORM",
        "Next.js API Routes",
      ],
      Infrastructure: ["NextAuth v5", "Cloudinary", "Vercel Edge"],
    },
  },
];
