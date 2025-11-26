export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Selected <span className="text-[#3b82f6]">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We operate as a stealth partner for many clients. While much of our
            enterprise work is under NDA, our reputation speaks for itself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: The "Stealth/Upwork" Card */}
          <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 hover:border-[#3b82f6]/50 transition-all duration-300 flex flex-col items-start h-full">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

            <div className="relative z-10 w-full">
              {/* Icon/Badge */}
              <div className="w-12 h-12 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Verified Excellence
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We are currently building{" "}
                <span className="text-white">
                  enterprise-grade architectures
                </span>{" "}
                and SaaS platforms. Check our client reviews and verified
                project history on Upwork.
              </p>
            </div>

            <div className="mt-auto relative z-10 w-full">
              <a
                href="https://www.upwork.com/agencies/1987633811629156401/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 bg-white text-slate-950 px-6 py-4 rounded-xl font-bold transition-transform active:scale-95 hover:bg-slate-200"
              >
                Read Client Reviews
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: The "Fiverr/Services" Card */}
          <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 hover:border-[#3b82f6]/50 transition-all duration-300 flex flex-col items-start h-full">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

            <div className="relative z-10 w-full">
              {/* Icon/Badge */}
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Managed Dev Sprints
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Need a dedicated squad? We offer modular software development
                packages led by an{" "}
                <span className="text-white">8+ year Project Manager</span>.
                From prototypes to full-stack scaling.
              </p>
            </div>

            <div className="mt-auto relative z-10 w-full">
              <a
                href="https://www.fiverr.com/s/YRZbDgQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 bg-[#3b82f6] text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-transform active:scale-95 hover:bg-blue-600"
              >
                View Service Packages
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
