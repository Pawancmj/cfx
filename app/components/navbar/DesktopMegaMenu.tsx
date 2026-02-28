import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, LayoutGrid } from "lucide-react";
import { MegaCategory, toSlug } from "@/app/constants/navigation";

interface DesktopMegaMenuProps {
    label: string;
    href: string;
    categories: MegaCategory[];
    exploreLinkPrefix: string;
    exploreText: string;
    isActive: boolean;
}

export default function DesktopMegaMenu({
    label,
    href,
    categories,
    exploreLinkPrefix,
    exploreText,
    isActive
}: DesktopMegaMenuProps) {
    const [activeCategory, setActiveCategory] = useState(categories[0]?.title || "");

    return (
        <div className="group h-full flex items-center">
            <Link
                href={href}
                className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${isActive ? "text-primary" : "text-zinc-400 hover:text-white"
                    }`}
            >
                {label}
                <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : ""
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
                            <div
                                className="absolute left-0 w-0.5 h-12 bg-primary rounded-r-full transition-all duration-300"
                                style={{
                                    top: `calc(${categories.findIndex(c => c.title === activeCategory) * (48 + 8)}px + 0.5rem)`,
                                    opacity: activeCategory ? 1 : 0,
                                }}
                            ></div>

                            {categories.map((category) => {
                                const isActiveCategory = activeCategory === category.title;
                                return (
                                    <button
                                        key={category.title}
                                        onMouseEnter={() => setActiveCategory(category.title)}
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
                                            <LayoutGrid
                                                className={`w-4 h-4 transition-colors ${isActiveCategory ? "text-primary" : "text-zinc-600 group-hover/catbtn:text-zinc-400"
                                                    }`}
                                            />
                                            <span className="truncate">{category.title}</span>
                                        </span>
                                        <ChevronDown
                                            className={`w-4 h-4 -rotate-90 transition-transform relative z-10 shrink-0 ${isActiveCategory
                                                ? "text-primary translate-x-1"
                                                : "opacity-0 group-hover/catbtn:opacity-50 group-hover/catbtn:translate-x-1"
                                                }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Pane: Subcategories */}
                        <div className="w-2/3 flex flex-col pt-2">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                                <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-3">
                                    {activeCategory}
                                </h3>
                                <Link
                                    href={`/${exploreLinkPrefix}/${categories.find((c) => c.title === activeCategory)?.slug || toSlug(activeCategory)}`}
                                    className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-colors flex items-center gap-2 group/viewall"
                                >
                                    {exploreText}
                                    <ArrowRight className="w-4 h-4 group-hover/viewall:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-x-6 gap-y-3 flex-grow content-start">
                                {categories.find((c) => c.title === activeCategory)?.links.map((subLink) => (
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
