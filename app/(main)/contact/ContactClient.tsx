"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, Building2, Linkedin, Instagram, Twitter, Sparkles, ArrowRight, CheckCircle2, XCircle, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../lib/utils";

export default function ContactClient() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        industry: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isIndustryOpen, setIsIndustryOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");

        try {
            const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
            const res = await fetch(`${strapiUrl}/api/contact-submissions`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: formState }),
            });

            const data = await res.json();
            if (res.ok) {
                setIsSuccess(true);
                setFormState({ name: "", email: "", industry: "", message: "" });
            } else {
                setErrorMsg(data.error?.message || "Something went wrong.");
            }
        } catch (error) {
            setErrorMsg("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="relative min-h-screen section-bg-dark pt-20 sm:pt-24 pb-10 overflow-hidden text-zinc-100">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute left-1/3 top-1/4 -z-10 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[160px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] bg-secondary/10 blur-[140px] rounded-full"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Strategic Engagement</span>
                        </motion.div>
                        <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-bold tracking-tight text-white mb-10 leading-[1.15]">
                            Architecting the <br />
                            <span className="text-gradient inline-block text-[calc(1em-3px)]">Future</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-zinc-400 max-w-4xl mx-auto font-medium">
                            Partner with CyberForenX & Associates&apos; global experts to drive innovation through secure, scalable, and mission-critical technology solutions tailored for enterprise success.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-card p-6 sm:p-8 rounded-[2rem] border-white/10 shadow-3xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>

                        {/* Success/Error Toast */}
            <AnimatePresence>
                {(isSuccess || errorMsg) && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-md pointer-events-none"
                    >
                        <div className={cn(
                            "glass-card p-4 rounded-2xl flex items-center gap-4 border shadow-2xl backdrop-blur-xl pointer-events-auto",
                            isSuccess ? "border-primary/40 bg-slate-900/90" : "border-red-500/40 bg-red-950/90"
                        )}>
                            <div className={cn(
                                "h-10 w-10 rounded-full flex items-center justify-center shrink-0",
                                isSuccess ? "bg-primary/20 text-primary" : "bg-red-500/20 text-red-500"
                            )}>
                                {isSuccess ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                            </div>
                            <div className="flex-grow">
                                <h4 className="text-white font-bold text-sm uppercase tracking-tight">
                                    {isSuccess ? "Message Received!" : "Submission Failed"}
                                </h4>
                                <p className="text-zinc-400 text-xs font-medium italic mt-0.5 leading-relaxed">
                                    {isSuccess 
                                        ? "One of our specialists will analyze your request and reach out within 24 hours." 
                                        : errorMsg || "An unexpected error occurred. Please try again later."}
                                </p>
                            </div>
                            <button 
                                onClick={() => { setIsSuccess(false); setErrorMsg(""); }}
                                className="p-2 rounded-lg hover:bg-white/5 text-zinc-500 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
                        {isSuccess ? (
                            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[450px] pb-28">
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/30">
                                    <Sparkles className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Request Received</h3>
                                <p className="text-zinc-400 font-medium max-w-sm mb-8">
                                    Thank you reaching out. Our strategy team will review your inquiry and get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-widest text-white"
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-primary uppercase tracking-[0.3em] flex items-center gap-3">
                                            <User className="w-4 h-4" /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            placeholder="Enter your full name"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all font-medium"
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-primary uppercase tracking-[0.3em] flex items-center gap-3">
                                            <AtSign className="w-4 h-4" /> Email Address
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formState.email}
                                            placeholder="Enter your email address"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all font-medium"
                                            onChange={(e) => {
                                                setFormState({ ...formState, email: e.target.value });
                                                if (e.target.validity.typeMismatch) {
                                                    e.target.setCustomValidity("Enter valid email address");
                                                } else {
                                                    e.target.setCustomValidity("");
                                                }
                                            }}
                                            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Enter valid email address")}
                                            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-xs font-black text-primary uppercase tracking-[0.3em] flex items-center gap-3">
                                        <Building2 className="w-4 h-4" /> Industry Focus
                                    </label>
                                    <div className="relative">
                                        <select
                                            required
                                            value={formState.industry}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all appearance-none font-medium cursor-pointer"
                                            onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                                            onFocus={() => setIsIndustryOpen(true)}
                                            onBlur={() => setIsIndustryOpen(false)}
                                        >
                                            <option value="" className="bg-zinc-900 text-zinc-500 font-bold" disabled>-- Choose Your Sector --</option>
                                            <option value="finance" className="bg-zinc-900">Banking & Finance</option>
                                            <option value="healthcare" className="bg-zinc-900">Healthcare & Life Sciences</option>
                                            <option value="ecommerce" className="bg-zinc-900">E-commerce & Retail</option>
                                            <option value="tech" className="bg-zinc-900">Technology & SaaS</option>
                                            <option value="government" className="bg-zinc-900">Public Sector & Legal</option>
                                            <option value="other" className="bg-zinc-900">Other Enterprises</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 transition-transform duration-300" style={{ transform: isIndustryOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)' }}>
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-xs font-black text-primary uppercase tracking-[0.3em] flex items-center gap-3">
                                        <MessageSquare className="w-4 h-4" /> Project Brief
                                    </label>
                                    <textarea
                                        required
                                        rows={6}
                                        value={formState.message}
                                        placeholder="Tell us about your requirements..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none font-medium"
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    ></textarea>
                                </div>

                                {errorMsg && (
                                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold text-center">
                                        {errorMsg}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-white text-zinc-950 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_15px_30px_rgba(255,255,255,0.1)] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <>Submit Request <Send className="w-4 h-4" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-1 gap-8"
                        >
                            <ContactInfoCard
                                icon={<Mail className="w-7 h-7" />}
                                title="Corporation Email"
                                description="Our dedicated team is ready to assist."
                                value="contact@cyberforenx.in"
                                href="mailto:contact@cyberforenx.in"
                                accentColor="text-primary"
                                shadowColor="rgba(0,242,255,0.2)"
                            />
                            <ContactInfoCard
                                icon={<Phone className="w-7 h-7" />}
                                title="Direct Line"
                                description="Global Support: Mon-Fri"
                                value="+91 9990751991"
                                href="tel:+919990751991"
                                accentColor="text-secondary"
                                shadowColor="rgba(112,0,255,0.2)"
                            />
                            <ContactInfoCard
                                icon={<MapPin className="w-7 h-7" />}
                                title="Global HQ"
                                description="Engineering & Strategy Hub"
                                value="74A, Avni Vihar, Near Guldhar Metro Station, Meerut Road, Ghaziabad, Uttar Pradesh, India"
                                href="https://www.google.com/maps/search/?api=1&query=74A,+Avni+Vihar,+Ghaziabad,+Uttar+Pradesh,+India"
                                accentColor="text-accent"
                                shadowColor="rgba(0,255,204,0.2)"
                            />
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="glass-card p-6 sm:p-8 rounded-[2rem] border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-dots opacity-10"></div>
                            <h3 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6 sm:mb-8 relative z-10 break-words">Corporate Presence</h3>
                            <div className="flex flex-wrap gap-4 sm:gap-6 relative z-10">
                                {[
                                    { icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />, href: "https://www.linkedin.com/company/cyberforenx-associate/?viewAsMember=true", name: "LinkedIn" },
                                    { icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />, href: "https://x.com/Cyber_ForenX", name: "Twitter" },
                                    { icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />, href: "https://www.instagram.com/cyberforenx/", name: "Instagram" },
                                ].map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-500 shadow-inner group shrink-0"
                                    >
                                        <div className="group-hover:scale-110 transition-transform">
                                            {social.icon}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function ContactInfoCard({
    icon, title, description, value, href, accentColor, shadowColor
}: {
    icon: React.ReactNode, title: string, description: string, value: string, href: string, accentColor: string, shadowColor: string
}) {
    return (
        <div className="block group glass-card p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 border-white/5 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                <div className={cn(
                    "p-4 sm:p-5 bg-white/5 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-inner shrink-0 w-max",
                    `group-hover:shadow-[0_0_20px_${shadowColor}]`
                )}>
                    <div className={cn("transition-colors duration-500", accentColor)}>
                        {icon}
                    </div>
                </div>
                <div className="min-w-0 flex-1">
                    <h3 className="text-[10px] sm:text-xs font-black text-zinc-500 uppercase tracking-[0.3em] mb-2 break-words">{title}</h3>
                    <p className="text-zinc-400 font-medium text-xs mb-2 italic break-words">{description}</p>
                    {href.startsWith('tel:') ? (
                        <span className="text-white font-black text-sm sm:text-lg md:text-xl tracking-normal sm:tracking-tight transition-colors break-words leading-relaxed sm:leading-snug">
                            {value}
                        </span>
                    ) : (
                        <a 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white font-black text-sm sm:text-lg md:text-xl tracking-normal sm:tracking-tight group-hover:text-primary transition-colors break-words leading-relaxed sm:leading-snug"
                        >
                            {value}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
