import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Decor - Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-850"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            About Apex<span className="text-[#3b82f6]">Byte</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We are a boutique software agency obsessed with{" "}
            <span className="text-white font-medium">
              performance, scalability, and clean code.
            </span>{" "}
            We don't just build apps; we build business engines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                Engineered for Velocity
                <span className="h-1 w-12 bg-[#3b82f6] rounded-full inline-block ml-2"></span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                From MVPs to enterprise platforms, we architect solutions that
                scale with your business. No bloat. No tech debt. Just results.
              </p>
              <p className="text-slate-400 mt-4 leading-relaxed">
                Our team brings{" "}
                <strong className="text-white">
                  battle-tested engineering expertise
                </strong>{" "}
                to every project. We apply the same rigorous standards used by
                top tech firms to your specific business needs.
              </p>
            </div>

            {/* Feature List with Real Icons */}
            <ul className="space-y-4">
              {/* Item 1 */}
              <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-[#3b82f6]/50 transition-colors">
                <div className="mt-1 bg-[#3b82f6]/10 p-2 rounded-lg text-[#3b82f6]">
                  {/* Infinite Icon */}
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
                    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    End-to-End Architecture
                  </h4>
                  <p className="text-sm text-slate-500">
                    From database design to frontend polish.
                  </p>
                </div>
              </li>

              {/* Item 2 */}
              <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-[#3b82f6]/50 transition-colors">
                <div className="mt-1 bg-[#3b82f6]/10 p-2 rounded-lg text-[#3b82f6]">
                  {/* Shield Icon */}
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    99.9% Uptime Focus
                  </h4>
                  <p className="text-sm text-slate-500">
                    Robust systems built for reliability.
                  </p>
                </div>
              </li>

              {/* Item 3 */}
              <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-[#3b82f6]/50 transition-colors">
                <div className="mt-1 bg-[#3b82f6]/10 p-2 rounded-lg text-[#3b82f6]">
                  {/* Rocket Icon */}
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
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Post-Launch Support
                  </h4>
                  <p className="text-sm text-slate-500">
                    We don't disappear after deployment.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: 1:1 Square Image */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl group border border-slate-800">
            {/* Main Image */}
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
              alt="ApexByte Development"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
