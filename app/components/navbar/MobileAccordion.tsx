import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { MegaCategory, toSlug } from "@/app/constants/navigation";

interface MobileAccordionProps {
    label: string;
    href: string;
    categories: MegaCategory[];
    exploreLinkPrefix: string;
    exploreText: string;
    isActive: boolean;
    onNavigate: () => void;
}

export default function MobileAccordion({
    label,
    href,
    categories,
    exploreLinkPrefix,
    exploreText,
    isActive,
    onNavigate
}: MobileAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const viewAllPath = href;

    return (
        <div className="flex flex-col border-b border-white/5 pb-4">
            <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span
                    className={`text-lg font-bold tracking-widest uppercase transition-colors ${isActive && !isOpen ? "text-primary" : "text-zinc-300 hover:text-primary"
                        }`}
                >
                    {label}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""
                        }`}
                />
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[2000px] mt-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-6 pl-4 border-l-2 border-white/5 ml-2">
                    <div>
                        <Link
                            href={viewAllPath}
                            className="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-widest"
                            onClick={onNavigate}
                        >
                            View All {label} &rarr;
                        </Link>
                    </div>

                    {categories.map((cat) => {
                        const isCatExpanded = expandedCategory === cat.title;
                        return (
                            <div key={cat.title} className="flex flex-col border-b border-white/5 pb-2 last:border-0">
                                <button
                                    onClick={() => setExpandedCategory(isCatExpanded ? null : cat.title)}
                                    className="flex justify-between items-center py-2 w-full text-left"
                                >
                                    <span
                                        className={`text-[13px] font-bold uppercase tracking-widest transition-colors ${isCatExpanded ? "text-primary bg-primary/10 px-3 py-1.5 rounded-lg -ml-3" : "text-zinc-200"
                                            }`}
                                    >
                                        {cat.title}
                                    </span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${isCatExpanded ? "rotate-180 text-primary" : "text-zinc-500"}`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isCatExpanded ? "max-h-[1000px] mt-2 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-white/5 ml-1 pb-2">
                                        <Link
                                            href={`/${exploreLinkPrefix}/${toSlug(cat.title)}`}
                                            className="text-[11px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2 mb-1"
                                            onClick={onNavigate}
                                        >
                                            {exploreText} <ArrowRight className="w-3 h-3" />
                                        </Link>
                                        {cat.links.map((l) => (
                                            <Link
                                                key={l.name}
                                                href={l.href}
                                                className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors block py-0.5"
                                                onClick={onNavigate}
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
    );
}
