import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "We build blazing-fast, SEO-optimized web architectures using Next.js and React. Whether it's a complex SaaS dashboard or a high-conversion landing page, we ensure pixel-perfect implementation.",
    tech: ["Next.js", "React", "Node.js", "Tailwind", "PostgreSQL"],
    image: "/services/web.jpg",
    reverse: false,
  },
  {
    id: "02",
    title: "Mobile App Development",
    desc: "Native-grade performance with the efficiency of a single codebase. We use React Native and Flutter to deploy robust apps to both iOS and Android, complete with offline support and push notifications.",
    tech: ["React Native", "Flutter", "Firebase", "Stripe", "Mobile CI/CD"],
    image: "/services/mobile.jpg",
    reverse: true,
  },
  {
    id: "03",
    title: "Cloud & AI Solutions",
    desc: "Future-proof your infrastructure. We design scalable cloud architectures on AWS and integrate custom AI models to automate workflows and process data at scale.",
    tech: ["AWS", "Python", "TensorFlow", "Docker", "OpenAI API"],
    image: "/services/cloud.jpg",
    reverse: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We <span className="text-[#3b82f6]">Build</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We don't just write code. We architect digital ecosystems designed
            for scale, security, and speed.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((s) => (
            <div
              key={s.title}
              className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center group ${
                s.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 relative">
                {/* Giant Background Number */}
                <span className="absolute -top-20 -left-10 text-[120px] font-black text-slate-800/20 select-none z-0">
                  {s.id}
                </span>

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {s.desc}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-900/20 border border-blue-500/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#3b82f6] font-semibold hover:text-blue-400 transition-colors group/link"
                  >
                    Start Your Project
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group-hover:border-[#3b82f6]/30 transition-colors duration-500">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
