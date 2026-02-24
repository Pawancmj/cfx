"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";


const testimonials = [
    {
        content: "Cyberforenx transformed our customer support operations. Their dedicated team integrated seamlessly, and we saw a 40% reduction in response times within the first quarter.",
        author: "Sarah Chen",
        role: "Operations Director, GlobalTech Innovations",
        image: "/avatar-1.png",
    },
    {
        content: "The level of data security and compliance Cyberforenx provides is unparalleled. We now have complete peace of mind knowing our sensitive information is handled with the utmost care.",
        author: "Mark Johnson",
        role: "Chief Security Officer, Apex Financial",
        image: "/avatar-2.png",
    },
    {
        content: "Their flexible staffing model allowed us to scale up our back-office teams during peak demand without any overhead. A true partner in efficiency!",
        author: "Maria Rodriguez",
        role: "VP of HR, Innovate Pharma",
        image: "/avatar-3.png",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Trusted by Innovative Companies
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative rounded-2xl bg-zinc-900/80 p-8 ring-1 ring-white/10 hover:ring-blue-500/40 transition duration-300 backdrop-blur-sm"
                            >
                                {/* Decorative Quote Mark */}
                                <div className="absolute top-4 right-8 text-6xl text-blue-500/10 font-serif leading-none">
                                    &rdquo;
                                </div>

                                <div className="flex gap-1 text-yellow-500 mb-6 relative">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current drop-shadow-lg" />
                                    ))}
                                </div>
                                <blockquote className="text-zinc-300 leading-relaxed relative z-10 italic">
                                    &quot;{testimonial.content}&quot;
                                </blockquote>
                                <div className="mt-8 flex items-center gap-x-4">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg ring-2 ring-zinc-900">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white tracking-wide">{testimonial.author}</div>
                                        <div className="text-xs text-blue-400 uppercase tracking-wider font-semibold">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
