"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X, Send, Sparkles, User, AtSign, Building2, MessageSquare } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    industry: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setIsSuccess(false);
      setErrorMsg("");
    }
  }, [isOpen]);

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

      if (res.ok) {
        setIsSuccess(true);
        setFormState({ name: "", email: "", industry: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error?.message || "Something went wrong.");
      }
    } catch {
      setErrorMsg("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.95, y: isOpen ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-lg glass-card p-8 rounded-[2rem] z-10 border border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 blur-3xl rounded-full" />

        <div className="flex items-center justify-between mb-6 relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Let's Talk</h3>
            <p className="text-zinc-400 text-sm font-medium mt-1">We'll respond within 24 hours</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-12 text-center relative z-10">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Message Received!</h4>
            <p className="text-zinc-400 font-medium">
              Thank you for reaching out. One of our specialists will analyze your request and get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                  <User className="w-3.5 h-3.5" /> Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/40 transition-colors font-medium text-sm"
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                  <AtSign className="w-3.5 h-3.5" /> Email *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/40 transition-colors font-medium text-sm"
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5" /> Industry *
              </label>
              <select
                required
                value={formState.industry}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/40 transition-colors font-medium text-sm appearance-none cursor-pointer"
                onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
              >
                <option value="" className="bg-zinc-900 text-zinc-500" disabled>Select your sector</option>
                <option value="finance" className="bg-zinc-900">Banking & Finance</option>
                <option value="healthcare" className="bg-zinc-900">Healthcare & Life Sciences</option>
                <option value="ecommerce" className="bg-zinc-900">E-commerce & Retail</option>
                <option value="tech" className="bg-zinc-900">Technology & SaaS</option>
                <option value="government" className="bg-zinc-900">Public Sector & Legal</option>
                <option value="other" className="bg-zinc-900">Other Enterprises</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5" /> Message *
              </label>
              <textarea
                required
                rows={4}
                value={formState.message}
                placeholder="Tell us about your project or inquiry..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/40 transition-colors resize-none font-medium text-sm"
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold text-center">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-xs"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>Send Message <Send className="w-4 h-4" /></>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>,
    document.body
  );
}
