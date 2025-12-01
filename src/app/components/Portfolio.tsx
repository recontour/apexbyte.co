import Image from "next/image";
import Link from "next/link";
// Import the shared data source
// Ensure this path matches where you saved the file.
// If it's in src/data, then "../data/projects" is correct from src/components
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Decor - Subtle Dark Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#3b82f6]">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We deliver enterprise-grade solutions. Here are a few selected
            projects where we transformed complex requirements into seamless
            digital experiences.
          </p>
        </div>

        {/* Project Cards Grid - Dynamically populated from data */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-2 hover:border-slate-600 transition-all duration-500 flex flex-col"
            >
              {/* Image Container with "Picture Frame" Padding */}
              <div className="relative w-full aspect-video overflow-hidden bg-slate-900 rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-500"></div>

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 text-xs font-bold text-white uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-[#3b82f6] transition-colors">
                    {project.title}
                  </h3>

                  {/* External Link Icon (To Live Site) */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-full text-slate-400 hover:bg-[#3b82f6] hover:text-white transition-all transform hover:rotate-45"
                    title="Visit Live Site"
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
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-900/20 border border-blue-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Case Study Button (Dynamic Link) */}
                <Link
                  href={`/work/${project.slug}`} // <--- This dynamically builds the URL based on the ID
                  className="w-full py-3.5 rounded-xl font-bold text-white text-center transition-all active:scale-[0.98] bg-gradient-to-r from-[#3b82f6] to-[#2563eb] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Links - Upwork / Fiverr */}
        <div className="mt-20 text-center border-t border-slate-800 pt-10">
          <p className="text-slate-500 mb-6">
            Looking for smaller engagements or specific tasks?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://www.upwork.com/agencies/1987633811629156401/"
              target="_blank"
              className="px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-[#3b82f6]/50 hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-slate-300 group-hover:text-white font-medium">
                Verified Upwork Agency
              </span>
            </a>

            <a
              href="https://www.fiverr.com/s/YRZbDgQ"
              target="_blank"
              className="px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-[#3b82f6]/50 hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-slate-300 group-hover:text-white font-medium">
                Fiverr Service Packages
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
