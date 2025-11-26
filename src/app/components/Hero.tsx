"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const phrases = [
  "Architecting Digital Dominance",
  "Eliminating Tech Debt",
  "Scaling Business Logic",
  "Engineering the Future",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setTypingSpeed(40);
      } else {
        setTypingSpeed(100);
      }

      if (!isDeleting && updatedText === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-[calc(100dvh-93px)] flex flex-col justify-start md:justify-center overflow-hidden bg-slate-950 px-4 pt-24 md:pt-0 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950"></div>
      <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[80px]"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-2 text-white drop-shadow-2xl leading-tight">
          Apex<span className="text-[#3b82f6]">Byte</span>
        </h1>

        {/* Typing Container */}
        <div className="h-16 md:h-24 mb-2 flex items-center justify-center">
          <p className="text-xl md:text-4xl font-medium text-slate-300">
            We are <span className="font-bold text-[#3b82f6]">{text}</span>
            <span className="inline-block w-[2px] h-6 md:h-10 ml-1 bg-[#3b82f6] animate-blink align-middle"></span>
          </p>
        </div>

        {/* Description Text */}
        <div className="max-w-3xl mx-auto mb-6 w-full">
          <p className="text-xl md:text-xl text-slate-400 leading-relaxed font-light px-2 py-4 md:py-6">
            We don't just write code; we engineer competitive advantages. We
            deliver{" "}
            <span className="text-white font-semibold">
              production-grade software
            </span>{" "}
            that is rigorously tested, architected for scale, and deployed on
            time. No bloat. No excuses.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 border-y border-slate-800 py-3 md:py-6 bg-slate-900/50 backdrop-blur-sm rounded-xl mx-2">
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-bold text-white">
                50+
              </span>
              <span className="text-[10px] md:text-sm text-slate-500 uppercase tracking-wider">
                Projects
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-bold text-white">
                100%
              </span>
              <span className="text-[10px] md:text-base text-slate-500 uppercase tracking-wider">
                On-Time
              </span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-3xl font-bold text-white">24/7</span>
              <span className="text-base text-slate-500 uppercase tracking-wider">
                Support
              </span>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        {/* CHANGED: flex-row instead of flex-col so they sit side-by-side on mobile */}
        <div className="flex flex-row gap-3 w-full sm:w-auto px-4 sm:px-0 mt-4">
          <Link
            href="/#services"
            // CHANGED: w-1/2 to make it half width
            className="w-1/2 sm:w-auto px-4 py-3.5 rounded-xl text-white text-base md:text-lg font-bold flex justify-center items-center transition-transform active:scale-95 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 text-center leading-tight"
          >
            Explore Services
          </Link>

          <Link
            href="/contact"
            // CHANGED: w-1/2 to make it half width
            className="relative group w-1/2 sm:w-auto px-4 py-3.5 rounded-xl text-slate-200 text-base md:text-lg font-semibold flex justify-center items-center bg-slate-900 border border-slate-700/50 shadow-lg active:bg-slate-800 transition-colors overflow-hidden text-center leading-tight"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50"></div>
            <span className="relative z-10">Get a Quote</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
