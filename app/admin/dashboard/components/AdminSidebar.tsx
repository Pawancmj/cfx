"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, GraduationCap, LogOut, LayoutDashboard, ShieldCheck } from "lucide-react";

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        {
            name: "Contact Inquiries",
            icon: <Mail className="w-5 h-5" />,
            href: "/admin/dashboard/contact",
        },
        {
            name: "Internship Apps",
            icon: <GraduationCap className="w-5 h-5" />,
            href: "/admin/dashboard/internships",
        },
        {
            name: "Manage Vacancies",
            icon: <LayoutDashboard className="w-5 h-5" />,
            href: "/admin/dashboard/vacancies",
        },
    ];

    const handleLogout = async () => {
        try {
            await fetch("/api/admin/logout", { method: "POST" });
            router.push("/admin/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col justify-between border-r border-white/5 bg-white/[0.02] backdrop-blur-xl h-full shadow-[4px_0_24px_rgba(0,0,0,0.5)] z-20">
            {/* Top Logo Area */}
            <div className="p-6 border-b border-white/5">
                <Link href="/admin/dashboard" className="flex items-center gap-3 group">
                    <div className="bg-primary/20 p-2.5 rounded-xl border border-primary/30 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-lg font-extrabold text-white uppercase tracking-tight">Console</h2>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">CFX Admin Panel</p>
                    </div>
                </Link>
            </div>

            {/* Navigation Menus */}
            <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
                <p className="px-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4">Dashboards</p>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative group overflow-hidden ${isActive
                                ? "text-white font-bold"
                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-sidebar-bg"
                                    className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <div className="relative z-10 flex items-center gap-3">
                                <span className={isActive ? "text-primary" : "group-hover:text-primary transition-colors"}>
                                    {item.icon}
                                </span>
                                <span className="text-sm tracking-wide">{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-white/5">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-all font-medium group"
                >
                    <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-wider">Logout</span>
                </button>
            </div>
        </aside>
    );
}
