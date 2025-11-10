import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-blue/20 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray">
        <p>
          © 2025 <span className="text-blue">ApexByte.co</span> • All Rights Reserved
        </p>
        <p className="mt-2 flex justify-center gap-4 flex-wrap">
          <Link href="/privacy" className="hover:text-blue transition">Privacy Policy</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-blue transition">Terms of Service</Link>
          <span>•</span>
          <a href="https://upwork.com/agencies/apexbyte" target="_blank" className="hover:text-blue transition">
            Upwork Profile
          </a>
        </p>
      </div>
    </footer>
  );
}