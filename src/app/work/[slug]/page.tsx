import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import { projects } from "@/data/projects";

// --- ICON HELPER ---
const FeatureIcon = ({ name }: { name: string }) => {
  const props = { className: "w-6 h-6", strokeWidth: 2 };
  // Simple SVG mapping based on the name in data
  switch (name) {
    case "shield":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "layout":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case "zap":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "target":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "lock":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "chart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    case "credit-card":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

// --- THE COMPONENT ---
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="bg-slate-950 min-h-screen relative overflow-x-hidden selection:bg-blue-500/30">
      {/* Navbar Placeholder */}
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-900/10 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="animate-fade-in-up">
              <div
                className={`inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-6 ${
                  project.tagColor === "orange"
                    ? "bg-orange-500/10 border-orange-500/20 text-orange-500"
                    : "bg-blue-500/10 border-blue-500/20 text-blue-500"
                }`}
              >
                {project.tag}
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r ${project.gradient} shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center gap-2`}
                >
                  Visit Live Site
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
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative group perspective-1000">
              <div className="relative overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-video transform transition-transform duration-700 group-hover:rotate-1">
                {/* Dynamic Image */}
                <Image
                  src={project.heroImage}
                  alt={`${project.title} Interface`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -inset-4 bg-[#3b82f6]/20 blur-2xl -z-10 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY FEATURES --- */}
      <section className="py-20 px-6 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-[#3b82f6] rounded-full"></span>
            Key Engineering Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {project.features.map((feature: any, idx: number) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#3b82f6]/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Under the Hood
            </h2>
            <p className="text-slate-400">
              Robust architecture designed for scale.
            </p>
          </div>

          <div className="space-y-6">
            {Object.entries(project.techStack).map(
              ([category, techs]: [string, any]) => (
                <div
                  key={category}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center"
                >
                  <div className="w-32 shrink-0 text-slate-400 font-semibold uppercase text-sm tracking-wider">
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-900/20 text-blue-200 border border-blue-500/20 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center bg-slate-900 rounded-3xl p-12 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Need a platform like {project.title}?
          </h2>
          <p className="text-slate-400 mb-8 text-lg max-w-xl mx-auto relative z-10">
            We specialize in building complex, data-driven applications like
            this.
          </p>
          <div className="relative z-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-white bg-[#3b82f6] hover:bg-blue-600 transition-colors shadow-lg"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
