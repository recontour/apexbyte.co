import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Header />
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray mb-4">Effective: November 11, 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Services</h2>
          <p>We provide custom software development on a project basis.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Payment</h2>
          <p>50% upfront, 50% on delivery. All payments via Upwork escrow.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Revisions</h2>
          <p>Up to 3 revisions included. Additional at $75/hr.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Ownership</h2>
          <p>You own the final code upon full payment.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact</h2>
          <p>Email: <a href="mailto:hello@apexbyte.co" className="text-blue">hello@apexbyte.co</a></p>
        </div>
      </section>
      <Footer />
    </>
  );
}