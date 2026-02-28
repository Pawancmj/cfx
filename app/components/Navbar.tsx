"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck, ChevronDown, ArrowRight, LayoutGrid } from "lucide-react";

// Helper function to generate URL slug for categories
const toSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const serviceCategories = [
  {
    title: "Web & App Development",
    links: [
      { name: "Custom Web Application Development", href: "/services/web-app-development/custom-web-application-development" },
      { name: "Enterprise Software Solutions", href: "/services/web-app-development/enterprise-software-solutions" },
      { name: "Mobile App Development (Android / iOS)", href: "/services/web-app-development/mobile-app-development" },
      { name: "UI/UX Design & Prototyping", href: "/services/web-app-development/ui-ux-design" },
      { name: "SaaS Platform Development", href: "/services/web-app-development/saas-platform-development" },
      { name: "API Development & Integration", href: "/services/web-app-development/api-development-integration" },
      { name: "E-Commerce Solutions", href: "/services/web-app-development/e-commerce-solutions" },
      { name: "Cloud-Based Applications", href: "/services/web-app-development/cloud-based-applications" },
    ],
  },
  {
    title: "Cybersecurity",
    links: [
      { name: "Cyber Risk Assessment", href: "/services/cybersecurity/cyber-risk-assessment" },
      { name: "Vulnerability Assessment & Penetration Testing", href: "/services/cybersecurity/vulnerability-assessment" },
      { name: "Security Architecture Review", href: "/services/cybersecurity/security-architecture-review" },
      { name: "Network & Application Security", href: "/services/cybersecurity/network-application-security" },
      { name: "Compliance & Governance Support", href: "/services/cybersecurity/compliance-governance-support" },
      { name: "Threat Monitoring & Incident Response", href: "/services/cybersecurity/threat-monitoring-incident-response" },
      { name: "Security Policy & Advisory", href: "/services/cybersecurity/security-policy-advisory" },
      { name: "Cloud Security Solutions", href: "/services/cybersecurity/cloud-security-solutions" },
    ],
  },
  {
    title: "Digital Forensics",
    links: [
      { name: "Digital Evidence Collection", href: "/services/digital-forensics/digital-evidence-collection" },
      { name: "Incident Investigation & Analysis", href: "/services/digital-forensics/incident-investigation-analysis" },
      { name: "Data Recovery & Preservation", href: "/services/digital-forensics/data-recovery-preservation" },
      { name: "Malware & Threat Investigation", href: "/services/digital-forensics/malware-threat-investigation" },
      { name: "Cyber Crime Investigation Support", href: "/services/digital-forensics/cyber-crime-investigation-support" },
      { name: "Log Analysis & Event Reconstruction", href: "/services/digital-forensics/log-analysis-event-reconstruction" },
      { name: "Device & Network Forensics", href: "/services/digital-forensics/device-network-forensics" },
      { name: "Legal & Compliance Reporting", href: "/services/digital-forensics/legal-compliance-reporting" },
    ],
  },
  {
    title: "BPO / BPS Services",
    links: [
      { name: "Customer Support Services", href: "/services/bpo/customer-support-services" },
      { name: "Technical Support Operations", href: "/services/bpo/technical-support-operations" },
      { name: "Data Processing & Data Entry", href: "/services/bpo/data-processing-entry" },
      { name: "Back Office Management", href: "/services/bpo/back-office-management" },
      { name: "Document Verification", href: "/services/bpo/document-verification" },
      { name: "Process Automation Support", href: "/services/bpo/process-automation-support" },
      { name: "Email & Chat Support", href: "/services/bpo/email-chat-support" },
      { name: "24/7 Operational Assistance", href: "/services/bpo/operational-assistance" },
    ],
  },
  {
    title: "Data Analytics & Intelligence",
    links: [
      { name: "Business Intelligence Dashboards", href: "/services/analytics/business-intelligence-dashboards" },
      { name: "Data Visualization", href: "/services/analytics/data-visualization" },
      { name: "Performance Reporting", href: "/services/analytics/performance-reporting" },
      { name: "Data Cleaning & Processing", href: "/services/analytics/data-cleaning-processing" },
      { name: "KPI Monitoring Solutions", href: "/services/analytics/kpi-monitoring-solutions" },
      { name: "Customer Behavior Analytics", href: "/services/analytics/customer-behavior-analytics" },
      { name: "Decision Support Systems", href: "/services/analytics/decision-support-systems" },
    ],
  },
  {
    title: "Digital Marketing",
    links: [
      { name: "Search Engine Optimization (SEO)", href: "/services/marketing/seo" },
      { name: "Social Media Marketing", href: "/services/marketing/social-media-marketing" },
      { name: "Performance Marketing & Paid Ads", href: "/services/marketing/performance-marketing" },
      { name: "Content Marketing Strategy", href: "/services/marketing/content-marketing-strategy" },
      { name: "Email Marketing Campaigns", href: "/services/marketing/email-marketing-campaigns" },
      { name: "Brand Awareness & Online Presence", href: "/services/marketing/brand-awareness" },
      { name: "Lead Generation Campaigns", href: "/services/marketing/lead-generation-campaigns" },
      { name: "Analytics & Marketing Performance Reporting", href: "/services/marketing/analytics-marketing-performance" },
    ],
  },
];

const solutionsCategories = [
  {
    title: "Digital Commerce & Platform Businesses",
    links: [
      { name: "Custom Web & Mobile Platforms", href: "/solutions/digital-commerce/custom-web-mobile-platforms" },
      { name: "Client & Vendor Portal Development", href: "/solutions/digital-commerce/client-vendor-portal" },
      { name: "SaaS-Based Business Platforms", href: "/solutions/digital-commerce/saas-platforms" },
      { name: "API Integration & Automation", href: "/solutions/digital-commerce/api-integration" },
      { name: "Multi-User Management Systems", href: "/solutions/digital-commerce/multi-user-management" },
      { name: "Secure Transaction Workflows", href: "/solutions/digital-commerce/secure-transaction-workflows" },
      { name: "Scalable Digital Infrastructure", href: "/solutions/digital-commerce/scalable-digital-infrastructure" },
      { name: "Platform Performance Optimization", href: "/solutions/digital-commerce/platform-performance-optimization" },
    ],
  },
  {
    title: "Government & Regulatory Agencies",
    links: [
      { name: "Digital Evidence Identification & Collection", href: "/solutions/government/digital-evidence-collection" },
      { name: "On-Site Investigation & Forensic Support", href: "/solutions/government/on-site-investigation" },
      { name: "Mobile & Computer Data Extraction", href: "/solutions/government/data-extraction" },
      { name: "Deleted Data Recovery & Analysis", href: "/solutions/government/data-recovery-analysis" },
      { name: "Email & Communication Forensics", href: "/solutions/government/email-communication-forensics" },
      { name: "Financial & Transaction Data Investigation", href: "/solutions/government/financial-data-investigation" },
      { name: "Digital Activity & Evidence Trail Analysis", href: "/solutions/government/evidence-trail-analysis" },
      { name: "Forensic Reporting & Compliance Documentation", href: "/solutions/government/forensic-reporting" },
      { name: "Evidence Preservation & Secure Archival", href: "/solutions/government/evidence-preservation" },
      { name: "Investigation Case Management Systems", href: "/solutions/government/case-management-systems" },
    ],
  },
  {
    title: "Financial & Tax Compliance",
    links: [
      { name: "TDS & Financial Data Examination", href: "/solutions/finance/tds-financial-examination" },
      { name: "Transaction & Fraud Pattern Analysis", href: "/solutions/finance/fraud-pattern-analysis" },
      { name: "Digital Evidence Verification & Validation", href: "/solutions/finance/evidence-verification" },
      { name: "Financial Audit & Compliance Support", href: "/solutions/finance/audit-compliance-support" },
      { name: "Risk Identification & Regulatory Review", href: "/solutions/finance/risk-identification" },
      { name: "Investigation Reporting & Documentation", href: "/solutions/finance/investigation-reporting" },
      { name: "Regulatory Submission Assistance", href: "/solutions/finance/regulatory-submission" },
      { name: "Compliance Workflow & Analysis Systems", href: "/solutions/finance/compliance-workflow" },
    ],
  },
  {
    title: "Security-Sensitive Organizations",
    links: [
      { name: "Security Risk Assessment", href: "/solutions/security/security-risk-assessment" },
      { name: "Vulnerability & Compliance Audits", href: "/solutions/security/vulnerability-audits" },
      { name: "Threat Monitoring & Incident Response", href: "/solutions/security/threat-monitoring" },
      { name: "Access Control & Data Protection", href: "/solutions/security/access-control" },
      { name: "Security Governance Support", href: "/solutions/security/security-governance" },
      { name: "Compliance Tracking Systems", href: "/solutions/security/compliance-tracking" },
      { name: "Risk Reporting Dashboards", href: "/solutions/security/risk-reporting" },
      { name: "Secure Infrastructure Solutions", href: "/solutions/security/secure-infrastructure" },
    ],
  },
  {
    title: "Enterprise & Corporate Operations",
    links: [
      { name: "Business Process Automation", href: "/solutions/enterprise/business-process-automation" },
      { name: "Back Office & Workflow Management", href: "/solutions/enterprise/back-office-management" },
      { name: "Customer Support Operations", href: "/solutions/enterprise/customer-support" },
      { name: "Document & Data Processing Systems", href: "/solutions/enterprise/data-processing" },
      { name: "Workforce & Performance Monitoring", href: "/solutions/enterprise/workforce-monitoring" },
      { name: "Operational Reporting Dashboards", href: "/solutions/enterprise/operational-reporting" },
      { name: "Process Optimization Solutions", href: "/solutions/enterprise/process-optimization" },
      { name: "Enterprise Workflow Platforms", href: "/solutions/enterprise/workflow-platforms" },
    ],
  },
  {
    title: "Data-Driven Enterprises",
    links: [
      { name: "Business Intelligence Dashboards", href: "/solutions/data/bi-dashboards" },
      { name: "Data Analytics & Visualization", href: "/solutions/data/data-analytics" },
      { name: "Performance & KPI Monitoring", href: "/solutions/data/kpi-monitoring" },
      { name: "Predictive Insights & Reporting", href: "/solutions/data/predictive-insights" },
      { name: "Data Processing & Validation", href: "/solutions/data/data-processing" },
      { name: "Executive Decision Support Systems", href: "/solutions/data/decision-support" },
      { name: "Operational Analytics Platforms", href: "/solutions/data/operational-analytics" },
      { name: "Data-Driven Reporting Solutions", href: "/solutions/data/driven-reporting" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState(serviceCategories[0].title);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [activeMegaCategorySolutions, setActiveMegaCategorySolutions] = useState(solutionsCategories[0].title);
  const [expandedMobileCategorySolutions, setExpandedMobileCategorySolutions] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Company", href: "/company" },
  ];

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
        {navLinks.map((link) => {
          if (link.name === "Services") {
            return (
              <div key={link.name} className="group h-full flex items-center">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${isActive(link.href) ? "text-primary" : "text-zinc-400 hover:text-white"
                    }`}
                >
                  {link.name}
                  <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive(link.href) ? "w-full" : ""
                      }`}
                  ></span>
                </Link>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="glass-card p-8 rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10 w-full section-bg-dark backdrop-blur-3xl relative overflow-hidden group/mega">
                    {/* Dynamic Background Effects */}
                    <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none transition-opacity group-hover/mega:opacity-20"></div>
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none transition-all duration-700 ease-out group-hover/mega:translate-y-10 group-hover/mega:-translate-x-10"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="flex gap-10 relative z-10 w-full min-h-[420px]">
                      {/* Left Pane: Categories */}
                      <div className="w-1/3 flex flex-col gap-2 border-r border-white/10 pr-8 py-2 relative">
                        {/* Highlight Indicator */}
                        <div className="absolute left-0 w-0.5 h-12 bg-primary rounded-r-full transition-all duration-300"
                          style={{
                            top: `calc(${serviceCategories.findIndex(c => c.title === activeMegaCategory) * (48 + 8)}px + 0.5rem)`,
                            opacity: activeMegaCategory ? 1 : 0
                          }}>
                        </div>

                        {serviceCategories.map((category) => {
                          const isActiveCategory = activeMegaCategory === category.title;
                          return (
                            <button
                              key={category.title}
                              onMouseEnter={() => setActiveMegaCategory(category.title)}
                              className={`w-full text-left px-5 h-12 rounded-xl text-[13px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-between group/catbtn relative overflow-hidden ${isActiveCategory
                                ? "text-white border-transparent bg-white/5 shadow-inner"
                                : "text-zinc-400 hover:text-zinc-200 border-transparent"
                                }`}
                            >
                              {/* Hover Gradient Background */}
                              {isActiveCategory && (
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"></div>
                              )}

                              <span className="relative z-10 flex items-center gap-3">
                                <LayoutGrid className={`w-4 h-4 transition-colors ${isActiveCategory ? "text-primary" : "text-zinc-600 group-hover/catbtn:text-zinc-400"}`} />
                                {category.title}
                              </span>
                              <ChevronDown className={`w-4 h-4 -rotate-90 transition-transform relative z-10 ${isActiveCategory ? "text-primary translate-x-1" : "opacity-0 group-hover/catbtn:opacity-50 group-hover/catbtn:translate-x-1"}`} />
                            </button>
                          );
                        })}
                      </div>

                      {/* Right Pane: Subcategories */}
                      <div className="w-2/3 flex flex-col pt-2">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                          <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-3">
                            {activeMegaCategory}
                          </h3>
                          <Link
                            href={`/services/${toSlug(activeMegaCategory)}`}
                            className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-colors flex items-center gap-2 group/viewall"
                          >
                            Explore Hub
                            <ArrowRight className="w-4 h-4 group-hover/viewall:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 flex-grow content-start">
                          {serviceCategories.find(c => c.title === activeMegaCategory)?.links.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="group/link p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 flex items-center gap-4 relative overflow-hidden"
                            >
                              {/* Link active gradient */}
                              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 blur-[20px] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></div>

                              <div className="flex-grow">
                                <div className="text-[14px] font-bold text-zinc-200 mb-1 group-hover/link:text-white transition-colors line-clamp-1">
                                  {subLink.name}
                                </div>
                                <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest group-hover/link:text-primary transition-colors flex items-center gap-1">
                                  Discover Solution <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          if (link.name === "Solutions") {
            return (
              <div key={link.name} className="group h-full flex items-center">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${isActive(link.href) ? "text-primary" : "text-zinc-400 hover:text-white"
                    }`}
                >
                  {link.name}
                  <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive(link.href) ? "w-full" : ""
                      }`}
                  ></span>
                </Link>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="glass-card p-8 rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10 w-full section-bg-dark backdrop-blur-3xl relative overflow-hidden group/mega">
                    {/* Dynamic Background Effects */}
                    <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none transition-opacity group-hover/mega:opacity-20"></div>
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none transition-all duration-700 ease-out group-hover/mega:translate-y-10 group-hover/mega:-translate-x-10"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="flex gap-10 relative z-10 w-full min-h-[420px]">
                      {/* Left Pane: Categories */}
                      <div className="w-1/3 flex flex-col gap-2 border-r border-white/10 pr-8 py-2 relative">
                        {/* Highlight Indicator */}
                        <div className="absolute left-0 w-0.5 h-12 bg-primary rounded-r-full transition-all duration-300"
                          style={{
                            top: `calc(${solutionsCategories.findIndex(c => c.title === activeMegaCategorySolutions) * (48 + 8)}px + 0.5rem)`,
                            opacity: activeMegaCategorySolutions ? 1 : 0
                          }}>
                        </div>

                        {solutionsCategories.map((category) => {
                          const isActiveCategory = activeMegaCategorySolutions === category.title;
                          return (
                            <button
                              key={category.title}
                              onMouseEnter={() => setActiveMegaCategorySolutions(category.title)}
                              className={`w-full text-left px-5 h-12 rounded-xl text-[13px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-between group/catbtn relative overflow-hidden ${isActiveCategory
                                ? "text-white border-transparent bg-white/5 shadow-inner"
                                : "text-zinc-400 hover:text-zinc-200 border-transparent"
                                }`}
                            >
                              {/* Hover Gradient Background */}
                              {isActiveCategory && (
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"></div>
                              )}

                              <span className="relative z-10 flex items-center gap-3">
                                <LayoutGrid className={`w-4 h-4 transition-colors ${isActiveCategory ? "text-primary" : "text-zinc-600 group-hover/catbtn:text-zinc-400"}`} />
                                <span className="truncate">{category.title}</span>
                              </span>
                              <ChevronDown className={`w-4 h-4 -rotate-90 transition-transform relative z-10 shrink-0 ${isActiveCategory ? "text-primary translate-x-1" : "opacity-0 group-hover/catbtn:opacity-50 group-hover/catbtn:translate-x-1"}`} />
                            </button>
                          );
                        })}
                      </div>

                      {/* Right Pane: Subcategories */}
                      <div className="w-2/3 flex flex-col pt-2">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                          <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-3">
                            {activeMegaCategorySolutions}
                          </h3>
                          <Link
                            href={`/solutions/${toSlug(activeMegaCategorySolutions)}`}
                            className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-colors flex items-center gap-2 group/viewall"
                          >
                            Explore Hubs
                            <ArrowRight className="w-4 h-4 group-hover/viewall:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 flex-grow content-start">
                          {solutionsCategories.find(c => c.title === activeMegaCategorySolutions)?.links.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="group/link p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 flex items-center gap-4 relative overflow-hidden"
                            >
                              {/* Link active gradient */}
                              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 blur-[20px] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></div>

                              <div className="flex-grow">
                                <div className="text-[14px] font-bold text-zinc-200 mb-1 group-hover/link:text-white transition-colors line-clamp-1">
                                  {subLink.name}
                                </div>
                                <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest group-hover/link:text-primary transition-colors flex items-center gap-1">
                                  Discover <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
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
              className={`text-xs font-bold uppercase tracking-widest transition-all relative group h-full flex items-center ${isActive(link.href) ? "text-primary" : "text-zinc-400 hover:text-white"
                }`}
            >
              {link.name}
              <span className={`absolute bottom-[calc(50%-1.25rem)] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive(link.href) ? "w-full" : ""}`}></span>
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
          {navLinks.map((link) => {
            if (link.name === "Services") {
              return (
                <div key={link.name} className="flex flex-col border-b border-white/5 pb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span className={`text-lg font-bold tracking-widest uppercase transition-colors ${isActive(link.href) && !mobileServicesOpen ? "text-primary" : "text-zinc-300 hover:text-primary"}`}>
                      Services
                    </span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-primary" : ""}`} />
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[2000px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col gap-6 pl-4 border-l-2 border-white/5 ml-2">
                      <div>
                        <Link
                          href="/services"
                          className="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-widest"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Services &rarr;
                        </Link>
                      </div>

                      {serviceCategories.map(cat => {
                        const isCatExpanded = expandedMobileCategory === cat.title;
                        return (
                          <div key={cat.title} className="flex flex-col border-b border-white/5 pb-2 last:border-0">
                            <button
                              onClick={() => setExpandedMobileCategory(isCatExpanded ? null : cat.title)}
                              className="flex justify-between items-center py-2 w-full text-left"
                            >
                              <span className={`text-[13px] font-bold uppercase tracking-widest transition-colors ${isCatExpanded ? "text-primary bg-primary/10 px-3 py-1.5 rounded-lg -ml-3" : "text-zinc-200"}`}>{cat.title}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${isCatExpanded ? "rotate-180 text-primary" : "text-zinc-500"}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${isCatExpanded ? "max-h-[1000px] mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
                              <div className="flex flex-col gap-3 pl-4 border-l-2 border-white/5 ml-1 pb-2">
                                <Link
                                  href={`/services/${toSlug(cat.title)}`}
                                  className="text-[11px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2 mb-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Explore Hub <ArrowRight className="w-3 h-3" />
                                </Link>
                                {cat.links.map(l => (
                                  <Link
                                    key={l.name}
                                    href={l.href}
                                    className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors block py-0.5"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {l.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            if (link.name === "Solutions") {
              return (
                <div key={link.name} className="flex flex-col border-b border-white/5 pb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  >
                    <span className={`text-lg font-bold tracking-widest uppercase transition-colors ${isActive(link.href) && !mobileSolutionsOpen ? "text-primary" : "text-zinc-300 hover:text-primary"}`}>
                      Solutions
                    </span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180 text-primary" : ""}`} />
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? "max-h-[2000px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col gap-6 pl-4 border-l-2 border-white/5 ml-2">
                      <div>
                        <Link
                          href="/solutions"
                          className="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-widest"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Solutions &rarr;
                        </Link>
                      </div>

                      {solutionsCategories.map(cat => {
                        const isCatExpanded = expandedMobileCategorySolutions === cat.title;
                        return (
                          <div key={cat.title} className="flex flex-col border-b border-white/5 pb-2 last:border-0">
                            <button
                              onClick={() => setExpandedMobileCategorySolutions(isCatExpanded ? null : cat.title)}
                              className="flex justify-between items-center py-2 w-full text-left"
                            >
                              <span className={`text-[13px] font-bold uppercase tracking-widest transition-colors ${isCatExpanded ? "text-primary bg-primary/10 px-3 py-1.5 rounded-lg -ml-3" : "text-zinc-200"}`}>{cat.title}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${isCatExpanded ? "rotate-180 text-primary" : "text-zinc-500"}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${isCatExpanded ? "max-h-[1000px] mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
                              <div className="flex flex-col gap-3 pl-4 border-l-2 border-white/5 ml-1 pb-2">
                                <Link
                                  href={`/solutions/${toSlug(cat.title)}`}
                                  className="text-[11px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2 mb-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Explore Solutions <ArrowRight className="w-3 h-3" />
                                </Link>
                                {cat.links.map(l => (
                                  <Link
                                    key={l.name}
                                    href={l.href}
                                    className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors block py-0.5"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {l.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )
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

