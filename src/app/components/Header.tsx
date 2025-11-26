"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Reusable External Link Arrow Icon
  const ExternalArrow = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-1"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );

  return (
    <>
      {/* Updated Background to bg-slate-950/80 to match the new Hero 
        Added backdrop-blur-md for the glass effect
      */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 h-[93px] transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="ApexByte Logo"
                width={50}
                height={50}
                className="rounded-lg group-hover:scale-105 transition duration-300"
                priority
              />
              <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
            {/* Optional: Add Text Logo next to image if you want */}
            {/* <span className="font-bold text-xl text-white hidden md:block">Apex<span className="text-blue-500">Byte</span></span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-medium text-lg text-slate-300 items-center">
            {isHome ? (
              <>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/#portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </>
            )}

            {/* Desktop Blog Link */}
            <a
              href="https://apexbyte.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 group/blog"
            >
              Blog
              <span className="group-hover/blog:-translate-y-0.5 group-hover/blog:translate-x-0.5 transition-transform duration-200 text-blue-500">
                <ExternalArrow />
              </span>
            </a>

            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex gap-4 items-center">
            <a
              href="https://www.upwork.com/agencies/1987633811629156401/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-5 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 border border-white/10 hover:border-white/20"
            >
              Upwork
            </a>
            <a
              href="https://www.fiverr.com/s/YRZbDgQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3b82f6] text-white px-5 py-2 rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Hire Us
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-500 ease-in-out ${
                mobileMenuOpen ? "rotate-45 translate-y-2 bg-blue-500" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-500 ease-in-out ${
                mobileMenuOpen ? "opacity-0 translate-x-3" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-500 ease-in-out ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-blue-500" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY 
        Using CSS classes for state instead of removing from DOM 
      */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center space-y-8 text-2xl font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          mobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5 pointer-events-none"
        }`}
      >
        {isHome ? (
          <>
            <Link
              href="#services"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              Services
            </Link>
            <Link
              href="#about"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              Portfolio
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/#services"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              Services
            </Link>
            <Link
              href="/#about"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/#portfolio"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              Portfolio
            </Link>
          </>
        )}

        <a
          href="https://apexbyte.blog"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="text-slate-300 hover:text-blue-400 hover:scale-110 transition-all duration-300 flex items-center gap-2"
        >
          Blog <ExternalArrow />
        </a>

        <Link
          href="/contact"
          onClick={toggleMenu}
          className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
        >
          Contact
        </Link>

        {/* Mobile CTAs */}
        <div className="flex flex-col gap-4 mt-8 w-64">
          <a
            href="https://www.upwork.com/agencies/1987633811629156401/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="text-center px-6 py-3 rounded-xl font-medium border border-white/10 text-white hover:bg-white/5 transition-all"
          >
            Upwork Profile
          </a>
          <a
            href="https://www.fiverr.com/s/YRZbDgQ"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="text-center bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all"
          >
            Hire on Fiverr
          </a>
        </div>
      </div>
    </>
  );
}
