"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck, ChevronDown } from "lucide-react";
import DesktopMegaMenu from "./navbar/DesktopMegaMenu";
import MobileAccordion from "./navbar/MobileAccordion";
import { BrandLogo } from "./BrandLogo";
import { mainNavLinks, serviceCategories, solutionsCategories, resourceCategories, caseStudiesCategories } from "@/app/constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCompanyForceHidden, setIsCompanyForceHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsCompanyForceHidden(true);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsCompanyForceHidden(true);
      setIsOpen(false);
    }
  };

  const companySubLinks = [
    { name: "About Us", href: "/company" },
    { name: "Certification", href: "/certification" },
    { name: "Careers", href: "/careers" },
    { name: "Partner Program", href: "/company/partner-program" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "glass-nav h-16 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-b border-white/10"
        : "bg-transparent h-[72px] border-b border-transparent"
        }`}
    >
      <div className="flex items-center justify-between h-full w-full container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <BrandLogo />

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-7 h-full static">
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

            if (link.name === "Resources") {
              return (
                <DesktopMegaMenu
                  key={link.name}
                  label="Resources"
                  href={link.href}
                  categories={resourceCategories}
                  exploreLinkPrefix="resources"
                  exploreText="Explore Resources"
                  isActive={isActive(link.href)}
                  useQueryForExplore={true}
                />
              );
            }

            if (link.name === "Case Studies") {
              return (
                <DesktopMegaMenu
                  key={link.name}
                  label="Case Studies"
                  href={link.href}
                  categories={caseStudiesCategories}
                  exploreLinkPrefix="case-studies"
                  exploreText="Explore Case Studies"
                  isActive={isActive(link.href)}
                  useQueryForExplore={true}
                />
              );
            }

            if (link.name === "Company") {
              return (
                <div
                  key={link.name}
                  className="group/nav h-full flex items-center"
                  onMouseEnter={() => setIsCompanyForceHidden(false)}
                  onMouseLeave={() => setIsCompanyForceHidden(false)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center gap-1 text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-all relative py-6 ${isActive(link.href) ? "text-primary" : "text-zinc-400 hover:text-white"}`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${!isCompanyForceHidden ? "group-hover/nav:rotate-180" : ""}`} />
                    <span className={`absolute bottom-4 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${isActive(link.href) ? "w-full" : ""}`}></span>
                  </Link>

                  <div className={`absolute top-full left-0 w-full pt-4 opacity-0 translate-y-4 pointer-events-none ${!isCompanyForceHidden ? "group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto" : ""} transition-all duration-300 z-50`}>
                    {/* Invisible bridge to keep hover active */}
                    <div className="absolute top-0 left-0 w-full h-8 bg-transparent"></div>

                    <div className="bg-[#080c10]/95 backdrop-blur-3xl flex w-full max-w-7xl mx-auto rounded-[2.5rem] border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,1),0_0_50px_rgba(0,242,255,0.05)] overflow-hidden relative p-4">

                      {/* Left Featured Column (Webority Style) */}
                      <div className="w-1/3 bg-white/5 rounded-2xl p-10 flex flex-col justify-end relative overflow-hidden group/feat cursor-default border border-white/5">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[60px] rounded-full group-hover/feat:bg-primary/40 transition-colors"></div>
                        <ShieldCheck className="w-12 h-12 text-primary mb-8 relative z-10" />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/80 mb-3 relative z-10">CYBERFORENX & ASSOCIATES</span>
                        <h5 className="text-3xl font-extrabold text-white leading-tight mb-6 relative z-10 text-glow">Leadership That Drives Impact</h5>
                        <p className="text-sm font-medium text-zinc-400 italic leading-relaxed relative z-10">
                          Our experts bring decades of cross-industry intelligence to scale and secure your business globally.
                        </p>
                      </div>

                      {/* Right Links Column */}
                      <div className="w-2/3 p-10 grid grid-cols-2 gap-x-12 gap-y-4">
                        {companySubLinks.map((sub) => (
                            <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={(e) => handleLinkClick(e, sub.href)}
                            className="group/sub flex flex-col p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-lg"
                          >
                            <h6 className="text-sm font-bold text-white tracking-widest uppercase mb-1 flex items-center gap-2">
                              {sub.name}
                            </h6>
                            <span className="text-[10px] text-zinc-500 font-medium tracking-wide">
                              {"Explore perfectly crafted solutions"}
                            </span>
                          </Link>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-all relative group h-full flex items-center ${isActive(link.href) ? "text-primary" : "text-zinc-400 hover:text-white"}`}
              >
                {link.name}
                <span className={`absolute bottom-[calc(50%-1.25rem)] left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${isActive(link.href) ? "w-full" : ""}`}></span>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden xl:block shrink-0">
          <Link href="/contact" className="btn-primary text-xs uppercase tracking-widest px-8">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-zinc-400 hover:text-white/80 transition-colors shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full w-[92%] sm:w-[95%] left-1/2 -translate-x-1/2 mt-2 glass-card p-4 sm:p-6 flex flex-col gap-5 xl:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] max-h-[75vh] overflow-y-auto section-bg-dark scrollbar-hide pb-20">
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

            if (link.name === "Resources") {
              return (
                <MobileAccordion
                  key={link.name}
                  label="Resources"
                  href={link.href}
                  categories={resourceCategories}
                  exploreLinkPrefix="resources"
                  exploreText="Explore Resources"
                  isActive={isActive(link.href)}
                  onNavigate={() => setIsOpen(false)}
                  useQueryForExplore={true}
                />
              );
            }

            if (link.name === "Case Studies") {
              return (
                <MobileAccordion
                  key={link.name}
                  label="Case Studies"
                  href={link.href}
                  categories={caseStudiesCategories}
                  exploreLinkPrefix="case-studies"
                  exploreText="Explore Case Studies"
                  isActive={isActive(link.href)}
                  onNavigate={() => setIsOpen(false)}
                  useQueryForExplore={true}
                />
              );
            }

            return (
              <div key={link.name} className="flex flex-col gap-4 border-b border-white/5 pb-2">
                <Link
                  href={link.href}
                  className={`text-base sm:text-lg font-bold uppercase tracking-widest transition-colors py-2 ${isActive(link.href) ? "text-primary" : "text-zinc-300 hover:text-primary"}`}
                  onClick={(e) => {
                    handleLinkClick(e, link.href);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>

                {link.name === "Company" && (
                  <div className="flex flex-col gap-4 pl-4 border-l-2 border-primary/20 mt-1 pb-2">
                    {companySubLinks.map(sub => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-between ${isActive(sub.href) ? "text-primary" : "text-zinc-400 hover:text-white"}`}
                        onClick={(e) => {
                          handleLinkClick(e, sub.href);
                          setIsOpen(false);
                        }}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary text-center w-full text-base uppercase tracking-widest font-bold mt-2 py-4 shadow-[0_10px_30px_rgba(0,242,255,0.2)] shrink-0"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          {/* Bottom Spacer for rounded corners */}
          <div className="h-4 w-full shrink-0" />
        </div>
      )}
    </nav>
  );
}
