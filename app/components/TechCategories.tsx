"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code2, Shield, Search, Activity,
    Hexagon, ShieldAlert, Network, ShieldCheck,
    PieChart, Cloud, Globe, Info, Cpu, Layers
} from "lucide-react";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5,
    SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGraphql,
    SiDocker, SiKubernetes, SiVercel,
    SiFlutter, SiSwift, SiKotlin,
    SiSplunk, SiKalilinux, SiWireshark,
    SiZendesk, SiSalesforce, SiHubspot, SiTwilio, SiJira, SiAsana, SiSlack,
    SiLooker, SiSnowflake, SiApachespark, SiPython, SiR, SiTensorflow, SiPytorch,
    SiGoogleads, SiMeta, SiTiktok, SiMailchimp, SiDatabricks, SiGooglecloud,
    SiElasticstack, SiBurpsuite, SiMetasploit,
    SiAndroid, SiApple, SiDbt, SiZapier, SiMake
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface TechItem {
    name: string;
    desc: string;
}

interface TechCategoriesProps {
    technologies?: Record<string, TechItem[]>;
}

// Returns { Icon: Component, isBrand: boolean }
const getTechMetadata = (name: string) => {
    const n = name.toLowerCase();

    // Explicit Brand Mappings
    if (n.includes("react")) return { Icon: SiReact, isBrand: true };
    if (n.includes("next")) return { Icon: SiNextdotjs, isBrand: true };
    if (n.includes("typescript")) return { Icon: SiTypescript, isBrand: true };
    if (n.includes("tailwind")) return { Icon: SiTailwindcss, isBrand: true };
    if (n.includes("html5")) return { Icon: SiHtml5, isBrand: true };
    if (n.includes("node")) return { Icon: SiNodedotjs, isBrand: true };
    if (n.includes("express")) return { Icon: SiExpress, isBrand: true };
    if (n.includes("postgres")) return { Icon: SiPostgresql, isBrand: true };
    if (n.includes("mongo")) return { Icon: SiMongodb, isBrand: true };
    if (n.includes("graphql")) return { Icon: SiGraphql, isBrand: true };
    if (n.includes("aws") && !n.includes("security")) return { Icon: FaAws, isBrand: true };
    if (n.includes("google cloud") || n === "gcp") return { Icon: SiGooglecloud, isBrand: true };
    if (n.includes("docker")) return { Icon: SiDocker, isBrand: true };
    if (n.includes("kubernetes")) return { Icon: SiKubernetes, isBrand: true };
    if (n.includes("vercel")) return { Icon: SiVercel, isBrand: true };
    if (n.includes("flutter")) return { Icon: SiFlutter, isBrand: true };
    if (n.includes("swift")) return { Icon: SiSwift, isBrand: true };
    if (n.includes("kotlin")) return { Icon: SiKotlin, isBrand: true };
    if (n.includes("android")) return { Icon: SiAndroid, isBrand: true };
    if (n.includes("apple") || n === "ios") return { Icon: SiApple, isBrand: true };
    if (n.includes("splunk")) return { Icon: SiSplunk, isBrand: true };
    if (n.includes("kali")) return { Icon: SiKalilinux, isBrand: true };
    if (n.includes("wireshark")) return { Icon: SiWireshark, isBrand: true };
    if (n.includes("elastic")) return { Icon: SiElasticstack, isBrand: true };
    if (n.includes("burp suite")) return { Icon: SiBurpsuite, isBrand: true };
    if (n.includes("metasploit")) return { Icon: SiMetasploit, isBrand: true };
    if (n.includes("zendesk")) return { Icon: SiZendesk, isBrand: true };
    if (n.includes("salesforce")) return { Icon: SiSalesforce, isBrand: true };
    if (n.includes("hubspot")) return { Icon: SiHubspot, isBrand: true };
    if (n.includes("twilio")) return { Icon: SiTwilio, isBrand: true };
    if (n.includes("jira")) return { Icon: SiJira, isBrand: true };
    if (n.includes("slack")) return { Icon: SiSlack, isBrand: true };
    if (n.includes("snowflake")) return { Icon: SiSnowflake, isBrand: true };
    if (n.includes("spark")) return { Icon: SiApachespark, isBrand: true };
    if (n.includes("python")) return { Icon: SiPython, isBrand: true };
    if (n.includes(" r ") || n === "r") return { Icon: SiR, isBrand: true };
    if (n.includes("tensorflow")) return { Icon: SiTensorflow, isBrand: true };
    if (n.includes("pytorch")) return { Icon: SiPytorch, isBrand: true };
    if (n.includes("databricks")) return { Icon: SiDatabricks, isBrand: true };
    if (n.includes("google ads")) return { Icon: SiGoogleads, isBrand: true };
    if (n.includes("meta")) return { Icon: SiMeta, isBrand: true };
    if (n.includes("mailchimp")) return { Icon: SiMailchimp, isBrand: true };

    // Modular/Generic Fallbacks (isBrand: false)
    if (n.includes("security") || n.includes("threat") || n.includes("protect")) return { Icon: ShieldCheck, isBrand: false };
    if (n.includes("network") || n.includes("snort") || n.includes("zeek")) return { Icon: Network, isBrand: false };
    if (n.includes("malware") || n.includes("yara")) return { Icon: ShieldAlert, isBrand: false };
    if (n.includes("penetration") || n.includes("nmap")) return { Icon: Search, isBrand: false };
    if (n.includes("forensic") || n.includes("encase") || n.includes("cellebrite")) return { Icon: Shield, isBrand: false };
    if (n.includes("analytics") || n.includes("data")) return { Icon: PieChart, isBrand: false };
    if (n.includes("automation") || n.includes("workflow")) return { Icon: Cpu, isBrand: false };
    if (n.includes("infrastructure") || n.includes("cloud")) return { Icon: Cloud, isBrand: false };
    if (n.includes("logic") || n.includes("process")) return { Icon: Layers, isBrand: false };
    if (n.includes("code") || n.includes("dev")) return { Icon: Code2, isBrand: false };

    return { Icon: Hexagon, isBrand: false };
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
    } as any;

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col gap-6"
        >
            <style jsx global>{`
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    5% { opacity: 1; }
                    95% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
            {Object.entries(technologies).map(([category, techs], rowIdx) => (
                <motion.div
                    key={category}
                    variants={rowVariants}
                    className="relative group/row flex flex-col lg:flex-row items-stretch"
                >
                    {/* hardware-style row background */}
                    <div className="absolute inset-0 bg-white/[0.012] border border-white/[0.05] backdrop-blur-[2px] pointer-events-none group-hover/row:bg-white/[0.02] transition-colors duration-500"
                        style={{ clipPath: "polygon(1rem 0, 100% 0, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0 100%, 0 1rem)" }}
                    />

                    {/* Column 1: Category Segment (20%) */}
                    <div className="lg:w-1/5 shrink-0 flex flex-col justify-center px-8 py-10 z-10 border-r border-white/5 relative bg-white/[0.01]">
                        <span className="text-[9px] font-black tracking-[0.4em] text-primary/30 uppercase mb-2">SEC_{rowIdx + 1}</span>
                        <h3 className="text-xl font-display font-medium text-white/90 tracking-widest uppercase group-hover/row:text-primary transition-colors duration-500">
                            {category}
                        </h3>
                        <div className="h-[1px] w-8 bg-primary/20 group-hover/row:w-16 group-hover/row:bg-primary transition-all duration-500 mt-4" />
                    </div>

                    {/* Column 2: Adaptive Grid (50%) */}
                    <div className="lg:w-1/2 flex flex-wrap gap-4 px-8 py-10 z-10 items-center justify-start lg:justify-center border-r border-white/5">
                        {techs.map((tech) => {
                            const { Icon, isBrand } = getTechMetadata(tech.name);

                            return (
                                <div
                                    key={tech.name}
                                    className="relative"
                                    onMouseEnter={() => setHoveredTechs(prev => ({ ...prev, [category]: tech }))}
                                    onMouseLeave={() => setHoveredTechs(prev => ({ ...prev, [category]: null }))}
                                >
                                    {isBrand ? (
                                        /* 3D HONEYCOMB HEXAGON FOR BRANDS */
                                        <div className="relative group/hex w-[54px] h-[62px] md:w-[60px] md:h-[68px] cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                                            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover/hex:opacity-100 transition-opacity rounded-full scale-150" />
                                            <div
                                                className="absolute inset-0 bg-white/5 group-hover/hex:bg-primary/40 transition-colors border border-white/10"
                                                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                            />
                                            <div
                                                className="absolute inset-[1.5px] bg-zinc-950 flex items-center justify-center overflow-hidden"
                                                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                            >
                                                <Icon className="w-6 h-6 md:w-7 md:h-7 text-zinc-400 group-hover/hex:text-primary transition-all duration-300 group-hover/hex:scale-110 drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]" />
                                            </div>
                                        </div>
                                    ) : (
                                        /* SLEEK RECTANGULAR HUD MODULE FOR GENERIC TOOLS */
                                        <div className="group/mod relative w-[110px] h-[54px] md:w-[130px] md:h-[62px] cursor-pointer bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all duration-300 overflow-hidden flex items-center px-4 gap-2.5">
                                            {/* Scanning Line Animation */}
                                            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/40 opacity-0 group-hover/mod:opacity-100 group-hover/mod:animate-[scan_2s_linear_infinite]" />

                                            <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover/mod:translate-x-0 transition-transform duration-500" />
                                            <div className="w-1.5 h-full bg-primary/10 group-hover/mod:bg-primary group-hover/mod:shadow-[0_0_10px_rgba(0,242,255,0.5)] transition-all shrink-0" />

                                            <div className="flex flex-col min-w-0">
                                                <span className="text-[10px] md:text-[11px] font-bold text-white/50 group-hover/mod:text-white transition-colors truncate mb-0.5">
                                                    {tech.name}
                                                </span>
                                                <div className="flex items-center gap-1.5 opacity-20 group-hover/mod:opacity-80 transition-opacity">
                                                    <div className="w-4 h-[3px] bg-white/[0.4] rounded-full" /> {/* mini barcode */}
                                                    <span className="text-[7px] font-mono tracking-tighter uppercase whitespace-nowrap">ID_{tech.name.substring(0, 3).toUpperCase()}</span>
                                                </div>
                                            </div>
                                            <Icon className="ml-auto w-4 h-4 md:w-5 md:h-5 text-white/10 group-hover/mod:text-primary transition-colors shrink-0" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Column 3: Dynamic Info Panel (30%) */}
                    <div className="lg:w-[30%] shrink-0 px-8 py-10 z-10 flex flex-col justify-center min-h-[160px] relative overflow-hidden backdrop-blur-md bg-white/[0.01]">
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
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-1.5 h-8 bg-primary shadow-[0_0_15px_rgba(0,242,255,0.6)]" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-mono text-primary/60 tracking-tighter mb-0.5">METADATA_EXTRACTED</span>
                                            <h4 className="text-lg font-bold text-white uppercase tracking-widest">
                                                {hoveredTechs[category]!.name}
                                            </h4>
                                        </div>
                                    </div>
                                    <p className="text-sm text-zinc-400 leading-relaxed font-medium italic pr-6 border-l border-white/5 pl-4">
                                        {hoveredTechs[category]!.desc}
                                    </p>
                                    <div className="mt-5 flex gap-1.5 opacity-30">
                                        {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="w-3 h-0.5 bg-primary" />)}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.3 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center text-center py-6 border border-dashed border-white/5"
                                >
                                    <div className="relative mb-3">
                                        <Info className="w-8 h-8 text-primary opacity-40 animate-pulse" />
                                        <div className="absolute inset-0 border border-primary/20 animate-ping rounded-full" />
                                    </div>
                                    <p className="text-[11px] font-black tracking-[0.4em] text-primary/80 uppercase">Select Module to View_</p>
                                    <span className="text-[8px] font-mono text-white/20 mt-2 tracking-tighter">WAITING FOR INPUT...</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Decorative corner brackets for info panel */}
                        <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-white/10" />
                        <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-white/10" />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
