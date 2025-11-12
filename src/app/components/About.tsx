import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-navy/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Apex<span className="text-blue">Byte</span>
          </h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            We are a boutique software agency obsessed with performance, scalability, and clean code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Crafted for Growth</h3>
            <p className="text-gray mb-4">
              From MVPs to enterprise platforms, we architect solutions that scale with your business. 
              No bloat. No tech debt. Just results.
            </p>
            <p className="text-gray mb-6">
              Our team has delivered <strong>50+ projects</strong> across fintech, e-commerce, healthtech, and AI — 
              always on time and under budget.
            </p>
            <ul className="space-y-3 text-gray">
              <li className="flex items-center gap-3">
                <span className="text-blue">Checkmark</span> Full-cycle development
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue">Checkmark</span> 99.9% uptime guarantee
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue">Checkmark</span> Post-launch support
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}