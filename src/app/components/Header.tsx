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

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 h-[93px] transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className="relative">
              <Image
                src="/logo-v2.png"
                alt="ApexByte Logo"
                width={50}
                height={50}
                className="group-hover:scale-105 transition duration-300"
                priority
              />
              <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </Link>

          {/* Desktop Nav - CHANGED: ml-auto pushes it to the right */}
          <nav className="hidden md:flex ml-auto gap-8 font-medium text-lg text-slate-300 items-center">
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
                  href="/career"
                  className="hover:text-white transition-colors"
                >
                  Career
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
                  href="/career"
                  className="hover:text-white transition-colors"
                >
                  Career
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
            </a>

            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

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

      {/* MOBILE MENU OVERLAY */}
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
              href="/career"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              Career
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
              href="/career"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              Career
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
          Blog
        </a>

        <Link
          href="/contact"
          onClick={toggleMenu}
          className="text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
        >
          Contact
        </Link>
      </div>
    </>
  );
}
