export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-navy/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our <span className="text-blue">Work</span>
        </h2>

        <div className="text-center py-12">
          <div className="bg-gray-800/50 border-2 border-dashed border-blue/30 rounded-xl p-16 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Projects Launching Soon</h3>
            <p className="text-gray mb-6">
              We're currently building <span className="text-blue">enterprise-grade</span> solutions for clients.
            </p>
            <a
              href="https://upwork.com/agencies/apexbyte"
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue hover:bg-lightblue text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-card"
            >
              See Our Upwork Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}