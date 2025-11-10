const services = [
  {
    title: "Web Development",
    desc: "React, Next.js, Node.js — scalable, SEO-optimized apps",
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    desc: "React Native & Flutter — iOS + Android, one codebase",
    icon: "📱",
  },
  {
    title: "Cloud & AI",
    desc: "AWS, Docker, LLMs — smart, secure, auto-scaling",
    icon: "☁️",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What We <span className="text-blue">Build</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-navy border border-blue/20 rounded-xl p-8 hover:border-blue transition"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}