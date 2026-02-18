"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/10 h-16 shadow-lg" : "bg-zinc-950/50 backdrop-blur-sm border-b border-white/5 h-20"
        } flex items-center justify-center`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Cyberforenx
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1">
              Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50 group-hover:opacity-100 transition-opacity"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* Dropdown Placeholder */}
            {/* <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
               <div className="p-2 flex flex-col gap-1">
                 <Link href="/services/web" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-zinc-800 rounded-md">Web Dev</Link>
               </div>
            </div> */}
          </div>
          <Link
            href="/case-studies"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Case Studies & Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/audit" className="btn-primary text-sm">
            Free Audit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            className="text-lg font-medium text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-lg font-medium text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="text-lg font-medium text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Case Studies & Contact
          </Link>
          <Link
            href="/audit"
            className="btn-primary text-center w-full"
            onClick={() => setIsOpen(false)}
          >
            Free Audit
          </Link>
        </div>
      )}
    </nav>
  );
}
