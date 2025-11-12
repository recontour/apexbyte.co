import Image from "next/image";

const services = [
  {
    title: "Web Development",
    desc: "Blazing-fast, SEO-optimized web apps using Next.js, React, and modern stacks. From landing pages to complex SaaS dashboards.",
    tech: "Next.js • React • Node.js • Tailwind • PostgreSQL",
    image: "/services/web.jpg",        // ← LOCAL
    reverse: false,
  },
  {
    title: "Mobile App Development",
    desc: "Native iOS & Android apps with one codebase. React Native & Flutter for smooth performance, App Store readiness, and offline support.",
    tech: "React Native • Flutter • Firebase • Stripe • Push Notifications",
    image: "/services/mobile.jpg",     // ← LOCAL
    reverse: true,
  },
  {
    title: "Cloud & AI Solutions",
    desc: "Scalable cloud architecture with AWS, Firebase, and AI integration. From serverless APIs to machine learning models in production.",
    tech: "AWS • Firebase • Python • TensorFlow • Docker • CI/CD",
    image: "/services/cloud.jpg",      // ← LOCAL
    reverse: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What We <span className="text-blue">Build</span>
        </h2>

        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid md:grid-cols-2 gap-12 items-center mb-24 ${
              s.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={`${s.reverse ? "md:order-2" : ""}`}>
              <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray mb-6 leading-relaxed">{s.desc}</p>
              <p className="text-sm font-mono text-lightblue mb-6">{s.tech}</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-blue hover:text-lightblue font-medium transition"
              >
                Start Your Project →
              </a>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}