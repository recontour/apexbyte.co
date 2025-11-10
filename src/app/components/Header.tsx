"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // Detect current page

  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur-xl border-b border-blue/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="ApexByte Logo"
              width={100}
              height={100}
              className="rounded-lg group-hover:scale-105 transition"
              priority
            />
            <div className="absolute inset-0 bg-blue/40 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
          </div>
          {/*<span className="text-2xl font-bold hidden sm:block">
            Apex<span className="text-lightblue">Byte</span>
          </span> */}
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-xl">
          {isHome ? (
            <>
              <a href="#services" className="hover:text-blue transition">Services</a>
              <a href="#portfolio" className="hover:text-blue transition">Portfolio</a>
            </>
          ) : (
            <>
              <Link href="/#services" className="hover:text-blue transition">Services</Link>
              <Link href="/#portfolio" className="hover:text-blue transition">Portfolio</Link>
            </>
          )}
          <Link href="/contact" className="hover:text-blue transition">Contact</Link>
        </nav>

        <a
          href="https://www.upwork.com/agencies/1987633811629156401/"
          target="_blank"
          className="bg-gradient-to-r from-blue to-lightblue text-white px-5 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-card hover:scale-105"
        >
          Hire on Upwork
        </a>
      </div>
    </header>
  );
}