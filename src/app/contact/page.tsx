"use client";

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
      const res = await fetch("https://formspree.io/f/mkgknnpd", {
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
        <section className="min-h-[calc(100vh-93px)] py-10 px-6 bg-slate-950 flex items-center justify-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-xl mx-auto text-center relative z-10 animate-fade-in">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Message Received 🚀
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              We have your details. Our team will review your project
              requirements and reply within 24 hours.
            </p>

            <Link
              href="/"
              className="inline-block bg-[#3b82f6] hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
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
      <section className="min-h-screen py-20 px-6 bg-slate-950 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let’s Build <span className="text-[#3b82f6]">Together</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Tell us about your project. Whether it's a new idea or an
              enterprise scale-up, we are ready to engineer it.
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-8 text-center backdrop-blur-sm">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:outline-none transition-all text-white placeholder-slate-600 disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:outline-none transition-all text-white placeholder-slate-600 disabled:opacity-50"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">
                Project Details
              </label>
              <textarea
                name="message"
                required
                rows={5}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:outline-none transition-all text-white placeholder-slate-600 disabled:opacity-50 resize-none"
                placeholder="I need a custom SaaS platform built with Next.js..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:shadow-lg hover:shadow-blue-500/25 text-white py-4 rounded-xl font-bold text-lg transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-slate-500">
              Or email us directly:{" "}
              <a
                href="mailto:connect@apexbyte.co"
                className="text-[#3b82f6] hover:text-blue-400 font-medium transition-colors"
              >
                connect@apexbyte.co
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
