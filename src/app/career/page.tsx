"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// --- JOB DATA ---
const jobs = [
  {
    id: 1,
    title: "Project Manager",
    department: "Management",
    type: "Full-Time",
    icon: "briefcase",
    shortDesc:
      "Lead cross-functional teams to deliver enterprise-grade software on time and under budget.",
    fullDesc:
      "We are looking for a detail-oriented Project Manager to oversee our software development lifecycle. You will be the bridge between our clients and our engineering squads, ensuring requirements are clear and sprints are executed without friction.",
    responsibilities: [
      "Manage project timelines, scope, and resources using Agile/Scrum methodologies.",
      "Act as the primary point of contact for enterprise clients.",
      "Conduct sprint planning, stand-ups, and retrospectives.",
      "Identify risks early and implement mitigation strategies.",
    ],
    requirements: [
      "3+ years of experience in technical project management.",
      "Proficiency with JIRA, Linear, or similar tools.",
      "Strong understanding of the SDLC (Software Development Life Cycle).",
      "Excellent written and verbal communication skills.",
    ],
  },
  {
    id: 2,
    title: "UI/UX Developer",
    department: "Design & Frontend",
    type: "Full-Time",
    icon: "palette",
    shortDesc:
      "Bridge the gap between design and code. Build pixel-perfect, responsive interfaces using React & Tailwind.",
    fullDesc:
      "We need a developer with a designer's eye. You will not just implement designs but actively improve them. You will work closely with our backend team to ensure the frontend is performant, accessible, and beautiful.",
    responsibilities: [
      "Translate Figma designs into high-quality React/Next.js components.",
      "Ensure UI consistency across mobile and desktop devices.",
      "Collaborate with the design team to create interactive prototypes.",
      "Optimize applications for maximum speed and scalability.",
    ],
    requirements: [
      "Proficiency in React, Next.js, and Tailwind CSS.",
      "Experience with Framer Motion or similar animation libraries.",
      "Ability to work with Figma files and design systems.",
      "Strong portfolio showcasing attention to micro-interactions.",
    ],
  },
  {
    id: 3,
    title: "Business Dev. Manager",
    department: "Sales",
    type: "Full-Time",
    icon: "chart",
    shortDesc:
      "Drive growth by identifying new opportunities and building relationships with enterprise clients.",
    fullDesc:
      "ApexByte is scaling, and we need a BDM to fuel that growth. You will be responsible for the entire sales cycle, from lead generation to closing high-ticket software development deals.",
    responsibilities: [
      "Identify and prospect potential clients in Fintech and Real Estate sectors.",
      "Conduct product demos and capability presentations.",
      "Negotiate contracts and close deals to meet quarterly targets.",
      "Maintain long-term relationships with key accounts.",
    ],
    requirements: [
      "Proven track record in B2B tech sales or agency sales.",
      "Strong negotiation and presentation skills.",
      "Understanding of the software development market.",
      "Self-starter with a hunter mentality.",
    ],
  },
  {
    id: 4,
    title: "Python AI Developer",
    department: "Engineering",
    type: "Remote / Hybrid",
    icon: "brain",
    shortDesc:
      "Build the next generation of AI-powered applications using LLMs, RAG, and Python.",
    fullDesc:
      "We are pushing the boundaries of what's possible with AI. You will work on integrating Large Language Models into business applications, building custom chatbots, and optimizing data pipelines.",
    responsibilities: [
      "Develop and deploy AI models using Python (PyTorch/TensorFlow).",
      "Implement RAG (Retrieval-Augmented Generation) systems.",
      "Integrate OpenAI/Gemini APIs into Next.js applications.",
      "Optimize model performance and latency.",
    ],
    requirements: [
      "Strong proficiency in Python and AI/ML libraries.",
      "Experience with Vector Databases (Pinecone, Milvus).",
      "Knowledge of LLM architectures and prompting strategies.",
      "Basic understanding of containerization (Docker).",
    ],
  },
];

// --- ICON HELPER ---
const JobIcon = ({ name }: { name: string }) => {
  const className = "w-6 h-6 text-[#3b82f6]";
  switch (name) {
    case "briefcase":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "palette":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="13.5" cy="6.5" r=".5" />
          <circle cx="17.5" cy="10.5" r=".5" />
          <circle cx="8.5" cy="7.5" r=".5" />
          <circle cx="6.5" cy="12.5" r=".5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      );
    case "chart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      );
    case "brain":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedJob]);

  return (
    <main className="bg-slate-950 min-h-screen relative overflow-hidden flex flex-col">
      <Header />

      {/* --- BACKGROUNDS --- */}
      <div className="absolute inset-0 bg-slate-950"></div>
      <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[80px]"></div>

      <section className="relative px-6 py-20 max-w-7xl mx-auto z-10 flex-grow w-full">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the <span className="text-[#3b82f6]">Squad</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We are always looking for exceptional talent. If you are obsessed
            with clean code, scalability, and innovation, you belong here.
          </p>
        </div>

        {/* Job Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 cursor-pointer hover:border-[#3b82f6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.99]"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <JobIcon name={job.icon} />
                </div>
                <span className="text-xs font-medium text-slate-500 bg-slate-950 border border-slate-800 px-3 py-1 rounded-full uppercase tracking-wider">
                  {job.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                {job.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4">{job.department}</p>

              <p className="text-slate-400 leading-relaxed mb-6 line-clamp-2">
                {job.shortDesc}
              </p>

              <div className="flex items-center text-[#3b82f6] text-sm font-bold gap-2 group-hover:gap-3 transition-all">
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- JOB DETAIL MODAL --- */}
      {selectedJob && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedJob(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-scale-in">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-slate-800 flex justify-between items-start bg-slate-900/50">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {selectedJob.title}
                </h2>
                <div className="flex gap-3 text-sm">
                  <span className="text-slate-400">
                    {selectedJob.department}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-[#3b82f6] font-medium">
                    {selectedJob.type}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                {selectedJob.fullDesc}
              </p>

              <div className="mb-8">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                  Responsibilities
                </h3>
                <ul className="space-y-3">
                  {selectedJob.responsibilities.map(
                    (item: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-400"
                      >
                        <svg
                          className="w-5 h-5 text-slate-600 shrink-0 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {selectedJob.requirements.map((item: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-400"
                    >
                      <svg
                        className="w-5 h-5 text-slate-600 shrink-0 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer (Right Aligned Button) */}
            <div className="p-6 border-t border-slate-800 bg-slate-900 flex justify-end">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center gap-2"
              >
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
