export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy to-blue/20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Peak Performance<br />
          <span className="text-blue">Software</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray mb-10 max-w-2xl mx-auto">
          Custom web, mobile, and AI solutions — delivered faster, built better.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue hover:bg-lightblue text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Start Your Project
          </a>
          <a
            href="https://www.upwork.com/agencies/1987633811629156401/"
            target="_blank"
            className="border border-blue text-blue hover:bg-blue/10 px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            View Upwork Profile →
          </a>
        </div>
      </div>
    </section>
  );
}