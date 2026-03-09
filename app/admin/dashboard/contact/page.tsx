"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Building2, Calendar, Search } from "lucide-react";

interface ContactSub {
    id: number;
    name: string;
    email: string;
    industry: string;
    message: string;
    created_at: string;
}

export default function ContactSubmissionsPage() {
    const [contacts, setContacts] = useState<ContactSub[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch("/api/admin");
                const json = await res.json();
                if (json.success) {
                    setContacts(json.data.contacts);
                } else {
                    setError(json.error || "Failed to fetch data.");
                }
            } catch (err) {
                console.error(err);
                setError("An error occurred while fetching data.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchContacts();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-white uppercase tracking-tight">Contact Inquiries</h1>
                    <p className="text-zinc-500 text-sm mt-1">Manage all 'Get Started' form submissions</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3 w-full md:w-auto">
                    <Search className="w-5 h-5 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search inquiries..."
                        className="bg-transparent border-none outline-none text-white text-sm w-full md:w-48 placeholder:text-zinc-600 focus:ring-0"
                    />
                </div>
            </header>

            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-64">
                    <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-500">Loading Database...</p>
                </div>
            ) : error ? (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-6 rounded-2xl text-center">
                    <p className="font-bold">{error}</p>
                    <p className="text-xs mt-2 opacity-80">Please check your database connection or try again.</p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-[2rem] border-white/5 overflow-hidden shadow-2xl relative"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 uppercase text-[10px] tracking-widest text-zinc-500 border-b border-white/10">
                                    <th className="p-6 font-bold">Contact Person</th>
                                    <th className="p-6 font-bold">Industry Focus</th>
                                    <th className="p-6 font-bold">Message Brief</th>
                                    <th className="p-6 font-bold">Date Received</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {contacts.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="p-10 text-center text-zinc-500 italic">No inquiries found in the database.</td>
                                    </tr>
                                ) : contacts.map((sub) => (
                                    <tr key={sub.id} className="hover:bg-white/5 transition-colors group cursor-pointer">
                                        <td className="p-6">
                                            <p className="font-bold text-white group-hover:text-primary transition-colors">{sub.name}</p>
                                            <a href={`mailto:${sub.email}`} className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 mt-1 transition-colors">
                                                <Mail className="w-3 h-3" /> {sub.email}
                                            </a>
                                        </td>
                                        <td className="p-6">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/5 text-xs font-medium text-zinc-300 capitalize">
                                                <Building2 className="w-3 h-3 text-secondary" /> {sub.industry}
                                            </span>
                                        </td>
                                        <td className="p-6 max-w-md">
                                            <p className="text-sm text-zinc-400 line-clamp-2">{sub.message}</p>
                                        </td>
                                        <td className="p-6 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-mono group-hover:text-zinc-300 transition-colors">
                                                <Calendar className="w-3 h-3" /> {formatDate(sub.created_at)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
