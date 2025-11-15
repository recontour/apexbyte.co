"use client"; // ← ADD THIS (makes it client-side for useState)

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/mkgknnpd", { // ← REPLACE WITH YOUR ID
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSuccess(true);
        e.currentTarget.reset(); // Clear form
      } else {
        setError("Something went wrong. Try again or email us.");
      }
    } catch (err) {
      setError("Connection error. Check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <Header />
        <section className="h-[calc(100vh-93px)] py-10 px-6 bg-navy flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue">
              Thanks! 🚀
            </h1>
            <p className="text-xl text-gray mb-8">
              We'll review your message and reply within 24 hours.
            </p>
            <Link
              href="/"
              className="bg-blue hover:bg-lightblue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-card"
            >
              Back to Home
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="min-h-screen py-20 px-6 bg-navy">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Let’s Build <span className="text-blue">Together</span>
          </h1>
          <p className="text-center text-gray mb-12 max-w-2xl mx-auto">
            Tell us about your project. We reply within 24 hours.
          </p>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 p-4 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-navy/50 backdrop-blur-md border border-blue/20 rounded-2xl p-8">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                disabled={loading}
                className="w-full px-4 py-3 bg-navy border border-blue/30 rounded-lg focus:border-blue focus:outline-none transition disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                disabled={loading}
                className="w-full px-4 py-3 bg-navy border border-blue/30 rounded-lg focus:border-blue focus:outline-none transition disabled:opacity-50"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                disabled={loading}
                className="w-full px-4 py-3 bg-navy border border-blue/30 rounded-lg focus:border-blue focus:outline-none transition disabled:opacity-50"
                placeholder="I need a custom SaaS platform..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue hover:bg-lightblue text-white py-3 rounded-lg font-medium transition-all hover:shadow-card disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray">
              Or email us directly:{" "}
              <a href="mailto:hello@apexbyte.co" className="text-blue hover:underline">
                ashwin.t@apexbyte.co
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}