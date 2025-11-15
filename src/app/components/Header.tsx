"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur-xl border-b border-blue/20 h-[93px]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="ApexByte Logo"
                width={60}
                height={60}
                className="rounded-lg group-hover:scale-105 transition"
                priority
              />
              <div className="absolute inset-0 bg-blue/40 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-xl">
            {isHome ? (
              <>
                <Link href="#services" className="hover:text-blue transition">Services</Link>
                <Link href="#about" className="hover:text-blue transition">About</Link>
                <Link href="#portfolio" className="hover:text-blue transition">Portfolio</Link>
              </>
            ) : (
              <>
                <Link href="/#services" className="hover:text-blue transition">Services</Link>
                <Link href="/#about" className="hover:text-blue transition">About</Link>
                <Link href="/#portfolio" className="hover:text-blue transition">Portfolio</Link>
              </>
            )}
            <Link href="/contact" className="hover:text-blue transition">Contact</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex gap-4 items-center">
            <a
              href="https://www.upwork.com/agencies/1987633811629156401/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue to-lightblue text-white px-5 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-card hover:scale-105"
            >
              Hire on Upwork
            </a>
            <a
              href="https://www.fiverr.com/s/YRZbDgQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue to-lightblue text-white px-5 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-card hover:scale-105"
            >
              Hire on Fiverr
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-navy/98 backdrop-blur-lg z-40 md:hidden flex flex-col items-center justify-center space-y-10 text-2xl font-medium">
          {isHome ? (
            <>
              <Link href="#services" onClick={toggleMenu} className="hover:text-blue transition">Services</Link>
              <Link href="#about" onClick={toggleMenu} className="hover:text-blue transition">About</Link>
              <Link href="#portfolio" onClick={toggleMenu} className="hover:text-blue transition">Portfolio</Link>
            </>
          ) : (
            <>
              <Link href="/#services" onClick={toggleMenu} className="hover:text-blue transition">Services</Link>
              <Link href="/#about" onClick={toggleMenu} className="hover:text-blue transition">About</Link>
              <Link href="/#portfolio" onClick={toggleMenu} className="hover:text-blue transition">Portfolio</Link>
            </>
          )}
          <Link href="/contact" onClick={toggleMenu} className="hover:text-blue transition">Contact</Link>
          <div className="flex gap-4">
            <a
              href="https://www.upwork.com/agencies/1987633811629156401/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue to-lightblue text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-card"
              onClick={toggleMenu}
            >
              Upwork
            </a>
            <a
              href="https://www.fiverr.com/s/YRZbDgQ" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-md"
              onClick={toggleMenu}
            >
              Fiverr
            </a>
          </div>
        </div>
      )}
    </>
  );
}