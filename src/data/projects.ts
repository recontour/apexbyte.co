// src/data/projects.ts

export const projects = [
  {
    slug: "prive-muse",
    title: "PriveMuse",
    subtitle: "The Digital Atelier for Luxury Brands",
    category: "Fashion Tech & SaaS",
    tag: "Luxury SaaS",
    tagColor: "rose",
    desc: "The Digital Atelier for independent luxury designers. A platform that combines AI-driven visual management with high-converting editorial storytelling.",
    description:
      "A specialized SaaS platform designed for the high-fashion industry. PriveMuse acts as a 'Digital Atelier,' allowing designers to manage collections with editorial-grade 9:16 imagery and generate brand-aligned narratives using our custom 'AI Composer'.",
    image: "/projects/privemuse.png",
    heroImage: "/projects/privemuse.png",
    link: "https://privemuse.art",
    liveLink: "https://privemuse.art",
    gradient: "from-rose-500 to-pink-600",
    tech: ["Next.js", "AI Composer", "Glassmorphism", "SaaS"],
    features: [
      {
        title: "Visual Management",
        desc: "Optimized for vertical 9:16 editorial imagery to ensure maximum impact on modern mobile displays.",
        icon: "layout",
      },
      {
        title: "AI Composer",
        desc: "Transforms simple brand keywords into sophisticated, high-converting fashion narratives and product descriptions.",
        icon: "lightbulb",
      },
      {
        title: "Glassmorphic UI",
        desc: "A fully immersive interface designed with 'Dark Glass' aesthetics to match the standards of luxury fashion houses.",
        icon: "smartphone",
      },
      {
        title: "Global Showcase",
        desc: "A curated community stream where designers can publish their portfolios to a global audience.",
        icon: "globe",
      },
    ],
    techStack: {
      Frontend: [
        "Next.js 15",
        "Framer Motion",
        "Tailwind CSS",
        "Glassmorphism UI",
      ],
      Backend: ["Firebase", "Node.js", "Cloud Functions"],
      "AI Engine": ["Google Gemini 1.5 Flash", "Imagen 3"],
    },
  },
  {
    slug: "neoarth",
    title: "NeoArth",
    subtitle: "AI-Powered Paper Trading Platform",
    category: "Fintech Platform",
    tag: "Fintech",
    tagColor: "purple",
    desc: "A risk-free stock market simulation platform designed to democratize financial literacy. Features virtual capital, AI analysis, and real-time market data.",
    description:
      "A comprehensive paper trading solution helping users learn stock market investing without financial risk. We implemented real-time data fetching and an AI financial analyst to provide instant, actionable market insights using live technical indicators.",
    image: "/projects/neoarth.png",
    heroImage: "/projects/neoarth.png",
    link: "https://neoarth.in/",
    liveLink: "https://neoarth.in/",
    gradient: "from-blue-600 to-purple-600",
    tech: ["Next.js", "Supabase", "Gemini AI", "Fintech"],
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
        desc: "Robust email authentication and user session management powered by Supabase, ensuring persistent portfolio data.",
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
  {
    slug: "refine-rack",
    title: "Refine Rack",
    subtitle: "AI Product Photography & Inventory System",
    category: "AI & E-commerce",
    tag: "Generative AI SaaS",
    tagColor: "indigo",
    desc: "Transforming raw phone photos into studio-quality e-commerce assets using Generative AI. A mobile-first platform that automates product photography and listing creation.",
    description:
      "A sophisticated mobile-first web application that leverages Google's Imagen 3 and Gemini Pro to democratize product photography. It features a parallel AI pipeline that simultaneously refines images and generates SEO-ready descriptions.",
    image: "/projects/refinerack.png",
    heroImage: "/projects/refinerack.png",
    link: "https://refinerack.com/",
    liveLink: "https://refinerack.com/",
    gradient: "from-[#3b82f6] to-[#6366f1]",
    tech: ["Next.js", "Firebase", "Gemini AI", "Imagen 3"],
    features: [
      {
        title: "Parallel AI Pipeline",
        desc: "Simultaneous execution of image refinement (via Imagen 3) and product data extraction (via Gemini 1.5 Pro) for instant results.",
        icon: "cpu",
      },
      {
        title: "Mobile-First Capture",
        desc: "Native-like camera integration with client-side auto-cropping, compression, and an immersive edge-to-edge UI.",
        icon: "smartphone",
      },
      {
        title: "SaaS Credit System",
        desc: "Built-in monetization logic with user credits, waitlist management, and a secure 'Admin Console' for user approval.",
        icon: "credit-card",
      },
      {
        title: "Global Showcase",
        desc: "A public-facing gallery that allows users to publish their best AI-generated assets to a shared community stream.",
        icon: "globe",
      },
    ],
    techStack: {
      Frontend: [
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide React",
      ],
      "Backend & Data": [
        "Firebase Firestore",
        "Firebase Authentication",
        "Firebase Storage",
        "Node.js (API Routes)",
      ],
      "AI & Infrastructure": [
        "Google Vertex AI (Imagen 3)",
        "Google Gemini 1.5 Pro",
        "Firebase App Hosting",
        "Sharp (Image Processing)",
      ],
    },
  },
];
