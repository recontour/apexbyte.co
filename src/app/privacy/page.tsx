import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Header />
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray mb-4">Last updated: November 11, 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>We only collect information you provide via contact forms (name, email, message).</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use It</h2>
          <p>To respond to your inquiries and improve our services.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security</h2>
          <p>We use industry-standard encryption and never sell your data.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
          <p>Email: <a href="mailto:hello@apexbyte.co" className="text-blue">hello@apexbyte.co</a></p>
        </div>
      </section>
      <Footer />
    </>
  );
}