"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-full ${scrolled
        ? "glass-nav h-16 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/20"
        : "bg-transparent h-20 border-transparent"
        } flex items-center justify-between px-4 md:px-8`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="bg-primary p-2 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.4)] group-hover:scale-110 transition-transform">
          <ShieldCheck className="w-6 h-6 text-background" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
          Cyberforenx
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-xs font-bold uppercase tracking-widest transition-all relative group ${isActive(link.href)
              ? "text-primary"
              : "text-zinc-400 hover:text-white"
              }`}
          >
            {link.name}
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive(link.href) ? "w-full" : ""}`}></span>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link href="/contact" className="btn-primary text-xs uppercase tracking-widest px-8">
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-zinc-300 hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-4 glass-card p-6 flex flex-col gap-6 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-bold transition-colors ${isActive(link.href) ? "text-primary" : "text-zinc-300 hover:text-primary"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary text-center w-full text-base uppercase tracking-widest font-bold"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

