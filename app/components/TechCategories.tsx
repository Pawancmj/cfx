"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code2, Shield, Search, Activity,
    Hexagon, ShieldAlert, Network, ShieldCheck,
    PieChart, Cloud, Globe, Info
} from "lucide-react";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5,
    SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGraphql,
    SiDocker, SiKubernetes, SiVercel,
    SiFlutter, SiSwift, SiKotlin,
    SiSplunk, SiKalilinux, SiWireshark,
    SiZendesk, SiSalesforce, SiHubspot, SiTwilio, SiJira, SiAsana, SiSlack,
    SiLooker, SiSnowflake, SiApachespark, SiPython, SiR, SiTensorflow, SiPytorch,
    SiGoogleads, SiMeta, SiTiktok, SiMailchimp, SiDatabricks, SiGooglecloud
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface TechItem {
    name: string;
    desc: string;
}

interface TechCategoriesProps {
    technologies?: Record<string, TechItem[]>;
}

// Map tech names to exact brand icons where possible, fallback to Lucide 
const getIconForTech = (name: string) => {
    const n = name.toLowerCase();

    // Frontend
    if (n.includes("react")) return SiReact;
    if (n.includes("next")) return SiNextdotjs;
    if (n.includes("typescript")) return SiTypescript;
    if (n.includes("tailwind")) return SiTailwindcss;
    if (n.includes("html5")) return SiHtml5;
    if (n.includes("css3")) return Code2;

    // Backend
    if (n.includes("node")) return SiNodedotjs;
    if (n.includes("express")) return SiExpress;
    if (n.includes("postgres")) return SiPostgresql;
    if (n.includes("mongo")) return SiMongodb;
    if (n.includes("graphql")) return SiGraphql;

    // Cloud & DevOps
    if (n.includes("aws") && !n.includes("security")) return FaAws;
    if (n.includes("azure")) return Cloud;
    if (n.includes("gcp") || n.includes("google cloud")) return SiGooglecloud;
    if (n.includes("docker")) return SiDocker;
    if (n.includes("kubernetes")) return SiKubernetes;
    if (n.includes("vercel")) return SiVercel;

    // Mobile
    if (n.includes("flutter")) return SiFlutter;
    if (n.includes("swift")) return SiSwift;
    if (n.includes("kotlin")) return SiKotlin;

    // Sec & Forensics
    if (n.includes("splunk")) return SiSplunk;
    if (n.includes("kali")) return SiKalilinux;
    if (n.includes("wireshark")) return SiWireshark;

    // CRM / Biz
    if (n.includes("zendesk")) return SiZendesk;
    if (n.includes("salesforce")) return SiSalesforce;
    if (n.includes("hubspot")) return SiHubspot;
    if (n.includes("twilio")) return SiTwilio;
    if (n.includes("jira")) return SiJira;
    if (n.includes("asana")) return SiAsana;
    if (n.includes("slack")) return SiSlack;

    // Data / ML
    if (n.includes("tableau")) return PieChart;
    if (n.includes("power bi")) return PieChart;
    if (n.includes("looker")) return SiLooker;
    if (n.includes("snowflake")) return SiSnowflake;
    if (n.includes("spark")) return SiApachespark;
    if (n.includes("python")) return SiPython;
    if (n.includes(" r ") || n === "r") return SiR;
    if (n.includes("tensorflow")) return SiTensorflow;
    if (n.includes("pytorch")) return SiPytorch;
    if (n.includes("databricks")) return SiDatabricks;

    // Ads / Marketing
    if (n.includes("google ads")) return SiGoogleads;
    if (n.includes("meta")) return SiMeta;
    if (n.includes("tiktok")) return SiTiktok;
    if (n.includes("mailchimp")) return SiMailchimp;
    if (n.includes("klaviyo")) return Globe;

    // Fallbacks
    if (n.includes("code")) return Code2;
    if (n.includes("security") || n.includes("threat") || n.includes("protect")) return ShieldCheck;
    if (n.includes("network") || n.includes("snort") || n.includes("zeek")) return Network;
    if (n.includes("malware") || n.includes("yara")) return ShieldAlert;
    if (n.includes("penetration") || n.includes("nmap")) return Search;
    if (n.includes("forensic") || n.includes("encase") || n.includes("cellebrite")) return Shield;
    if (n.includes("analytics") || n.includes("data")) return PieChart;
    if (n.includes("ci/cd") || n.includes("automation")) return Activity;

    return Hexagon;
};

export default function TechCategories({ technologies }: TechCategoriesProps) {
    const [hoveredTechs, setHoveredTechs] = useState<Record<string, TechItem | null>>({});

    if (!technologies || Object.keys(technologies).length === 0) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col gap-6"
        >
            {Object.entries(technologies).map(([category, techs], rowIdx) => (
                <motion.div
                    key={category}
                    variants={rowVariants}
                    className="relative group/row flex flex-col lg:flex-row items-stretch"
                >
                    {/* hardware-style row background */}
                    <div className="absolute inset-0 bg-white/[0.01] border border-white/5 backdrop-blur-[2px] pointer-events-none group-hover/row:bg-white/[0.03] transition-colors duration-500"
                        style={{ clipPath: "polygon(1.5rem 0, 100% 0, 100% calc(100% - 1.5rem), calc(100% - 1.5rem) 100%, 0 100%, 0 1.5rem)" }}
                    />

                    {/* Column 1: Category Segment (20%) */}
                    <div className="lg:w-1/5 shrink-0 flex flex-col justify-center px-8 py-10 z-10 border-r border-white/5 relative">
                        <span className="text-[10px] font-black tracking-[0.4em] text-primary/40 uppercase mb-2">Module_{rowIdx + 1}</span>
                        <h3 className="text-xl font-display font-bold text-white tracking-[0.1em] uppercase group-hover/row:text-primary transition-colors duration-500">
                            {category}
                        </h3>
                        <div className="h-0.5 w-12 bg-primary/20 group-hover/row:w-20 group-hover/row:bg-primary/60 transition-all duration-500 mt-4" />
                    </div>

                    {/* Column 2: Honeycomb Grid (50%) */}
                    <div className="lg:w-1/2 flex flex-wrap gap-4 px-8 py-10 z-10 items-center justify-start lg:justify-center border-r border-white/5">
                        {techs.map((tech) => {
                            const IconCmp = getIconForTech(tech.name);
                            return (
                                <div
                                    key={tech.name}
                                    className="relative group/hex"
                                    onMouseEnter={() => setHoveredTechs(prev => ({ ...prev, [category]: tech }))}
                                    onMouseLeave={() => setHoveredTechs(prev => ({ ...prev, [category]: null }))}
                                >
                                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 rounded-full" />
                                    <div className="relative w-[56px] h-[64px] md:w-[60px] md:h-[68px] cursor-pointer group-hover/hex:-translate-y-1 transition-all duration-300">
                                        <div
                                            className="absolute inset-0 bg-white/10 group-hover/hex:bg-primary transition-colors"
                                            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                        />
                                        <div
                                            className="absolute inset-[1.5px] bg-zinc-950 flex items-center justify-center overflow-hidden"
                                            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                        >
                                            <IconCmp className="w-6 h-6 md:w-7 md:h-7 text-zinc-500 group-hover/hex:text-primary transition-all duration-300 group-hover/hex:scale-110" />
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/hex:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Column 3: Dynamic Info Panel (30%) */}
                    <div className="lg:w-[30%] shrink-0 px-8 py-10 z-10 flex flex-col justify-center min-h-[140px] relative overflow-hidden backdrop-blur-md">
                        <AnimatePresence mode="wait">
                            {hoveredTechs[category] ? (
                                <motion.div
                                    key={hoveredTechs[category]!.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-1.5 h-6 bg-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
                                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                                            {hoveredTechs[category]!.name}
                                        </h4>
                                    </div>
                                    <p className="text-sm text-zinc-400 leading-relaxed font-medium italic pr-4">
                                        {hoveredTechs[category]!.desc}
                                    </p>
                                    <div className="mt-4 flex gap-1 opacity-50">
                                        {[1, 2, 3, 4].map(i => <div key={i} className="w-4 h-1 bg-primary/20" />)}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.4 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center text-center py-4"
                                >
                                    <Info className="w-6 h-6 text-primary mb-2 opacity-50 animate-pulse" />
                                    <p className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">Hover icon to decrypt_</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Decorative corner brackets for info panel */}
                        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10" />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
