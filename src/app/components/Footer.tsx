import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* Copyright */}
        <p className="text-slate-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-white">
            Apex<span className="text-[#3b82f6]">Byte</span>
          </span>
          . All Rights Reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-slate-500 font-medium">
          <Link
            href="/privacy"
            className="hover:text-[#3b82f6] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[#3b82f6] transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
