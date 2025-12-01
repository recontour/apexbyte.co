import Link from "next/link";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

export default function NotFound() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col relative overflow-hidden">
      <Header />

      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 bg-slate-950"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* --- CONTENT --- */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-6 text-center -mt-10">
        {/* Large 404 Text */}
        <h1 className="text-8xl md:text-[10rem] font-black text-white tracking-tighter mb-2 drop-shadow-2xl opacity-90">
          4<span className="text-[#3b82f6]">0</span>4
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
          The page you are looking for has been moved, deleted, or possibly
          never existed in this timeline.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            Return to Base
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl font-bold text-slate-300 border border-slate-700 hover:border-[#3b82f6] hover:text-white hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
          >
            Report Issue
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
