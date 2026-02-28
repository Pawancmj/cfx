"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck } from "lucide-react";
import DesktopMegaMenu from "./navbar/DesktopMegaMenu";
import MobileAccordion from "./navbar/MobileAccordion";
import { mainNavLinks, serviceCategories, solutionsCategories } from "@/app/constants/navigation";

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

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-full ${scrolled
          ? "glass-nav h-16 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/20"
          : "bg-transparent h-20 border-transparent"
        } flex items-center justify-between px-4 md:px-8`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group shrink-0 w-auto">
        <div className="bg-primary p-2 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.4)] group-hover:scale-110 transition-transform">
          <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
          Cyberforenx
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8 h-full">
        {mainNavLinks.map((link) => {
          if (link.name === "Services") {
            return (
              <DesktopMegaMenu
                key={link.name}
                label="Services"
                href={link.href}
                categories={serviceCategories}
                exploreLinkPrefix="services"
                exploreText="Explore Hub"
                isActive={isActive(link.href)}
              />
            );
          }

          if (link.name === "Solutions") {
            return (
              <DesktopMegaMenu
                key={link.name}
                label="Solutions"
                href={link.href}
                categories={solutionsCategories}
                exploreLinkPrefix="solutions"
                exploreText="Explore Hubs"
                isActive={isActive(link.href)}
              />
            );
          }

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-widest transition-all relative group h-full flex items-center ${isActive(link.href) ? "text-primary" : "text-zinc-400 hover:text-white"
                }`}
            >
              {link.name}
              <span
                className={`absolute bottom-[calc(50%-1.25rem)] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive(link.href) ? "w-full" : ""
                  }`}
              ></span>
            </Link>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="hidden lg:block shrink-0">
        <Link href="/contact" className="btn-primary text-xs uppercase tracking-widest px-8">
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-zinc-300 hover:text-primary transition-colors shrink-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-4 glass-card p-6 flex flex-col gap-6 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 border border-white/10 rounded-[2rem] max-h-[85vh] overflow-y-auto section-bg-dark">
          {mainNavLinks.map((link) => {
            if (link.name === "Services") {
              return (
                <MobileAccordion
                  key={link.name}
                  label="Services"
                  href={link.href}
                  categories={serviceCategories}
                  exploreLinkPrefix="services"
                  exploreText="Explore Hub"
                  isActive={isActive(link.href)}
                  onNavigate={() => setIsOpen(false)}
                />
              );
            }

            if (link.name === "Solutions") {
              return (
                <MobileAccordion
                  key={link.name}
                  label="Solutions"
                  href={link.href}
                  categories={solutionsCategories}
                  exploreLinkPrefix="solutions"
                  exploreText="Explore Solutions"
                  isActive={isActive(link.href)}
                  onNavigate={() => setIsOpen(false)}
                />
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-bold uppercase tracking-widest transition-colors py-2 border-b border-white/5 ${isActive(link.href) ? "text-primary" : "text-zinc-300 hover:text-primary"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary text-center w-full text-base uppercase tracking-widest font-bold mt-2"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
