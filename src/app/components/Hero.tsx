"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const phrases = [
  "Peak Performance Software",
  "Scalable Web & Mobile Apps",
  "AI-Powered Solutions",
  "Built for Growth",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      // Speed control
      if (!isDeleting && updatedText === currentPhrase) {
        setTypingSpeed(2000); // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100); // Type next phrase fast
      } else {
        setTypingSpeed(isDeleting ? 50 : 100); // Delete faster than type
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative h-[calc(100vh-93px)] flex items-center justify-center overflow-hidden px-6">
      {/* Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-lightblue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="text-white">Apex</span>
          <span className="text-blue">Byte</span>
        </h1>

        <p className="text-2xl md:text-4xl text-gray mb-10 h-16">
          <span className="inline-block border-r-4 border-blue animate-blink">
            {text || "\u00A0"}
          </span>
        </p>

        <div className="text-lg md:text-xl text-gray mb-12 max-w-3xl ml-auto leading-relaxed space-y-2 text-left">
    <p>
      We deliver <span className="text-blue font-bold">production-grade software </span>
      on time, under budget, and built to scale.
    </p>
    <p>No excuses. No tech debt. No surprises.</p>
    <p>Just clean, fast, future-proof apps that grow with your business.</p>
    <p>
      <span className="text-lightblue font-semibold">50+ projects launched.</span> 
      <span className="text-lightblue font-semibold">100% on-time delivery.</span>
    </p>
    <p>
      <strong>Your vision. Our code. One goal: results.</strong>
    </p>
  </div>

        <div className="flex gap-6 justify-center">
          <Link
            href="/#services"
            className="bg-blue hover:bg-lightblue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="border border-blue/50 text-blue hover:bg-blue/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all backdrop-blur"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}