export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-navy/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our <span className="text-blue">Work</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-gray-800/50 border-2 border-dashed border-blue/30 rounded-xl p-16 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Projects Launching Soon</h3>
            <p className="text-gray mb-6">
              We're currently building <span className="text-blue">enterprise-grade</span> solutions for clients.
            </p>
            <a
              href="https://www.upwork.com/agencies/1987633811629156401/"
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue hover:bg-lightblue text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-card"
            >
              See Our Upwork Reviews
            </a>
          </div>

          <div className="bg-gray-800/50 border border-blue/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue">Live Gigs on Fiverr</h3>
          <p className="text-gray mb-6">
            Discover our managed software development packages—led by our 8+ year PM with a team of developers. From prototypes to full-stack solutions, all with sprint planning and on-time delivery.
          </p>
          <a
            href="https://www.fiverr.com/s/YRZbDgQ"  
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue hover:bg-lightblue text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-card"
          >
            Explore Fiverr Gigs →
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}