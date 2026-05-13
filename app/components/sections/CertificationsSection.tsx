"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    name: "ISO 27001",
    description: "Information Security Management System. Ensures the highest standards in protecting sensitive data and mitigating cyber threats.",
    image: "/images/certifications/iso-27001.webp",
    color: "text-blue-400",
  },
  {
    name: "ISO 9001",
    description: "Quality Management System. Demonstrates our commitment to consistent quality, customer satisfaction, and continuous improvement.",
    image: "/images/certifications/iso-9001.webp",
    color: "text-cyan-400",
  },
  {
    name: "ISO 20000-1",
    description: "IT Service Management System. Validates our excellence in IT service delivery, support, and operational efficiency.",
    image: "/images/certifications/iso-20000-1.webp",
    color: "text-indigo-400",
  },
  {
    name: "CMMI Level 3 / 5",
    description: "Capability Maturity Model Integration. Demonstrated high maturity in software development and service delivery processes.",
    image: "/images/certifications/cmmi.webp",
    color: "text-purple-400",
  },
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control. Stringent independent audits verifying our security, availability, and processing integrity.",
    image: "/images/certifications/soc2.webp",
    color: "text-emerald-400",
  },
  {
    name: "ISO 17025",
    description: "Testing and Calibration Laboratories. Proven competence, impartiality, and consistent operation in laboratory results.",
    image: "/images/certifications/iso-17025.webp",
    color: "text-amber-400",
  },
];

export default function CertificationsSection() {
  return (
    <section className="relative py-6 md:py-8 section-bg-gradient overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Accreditations</h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Industry-Leading Certifications
          </h3>
          <p className="text-zinc-400 text-lg font-medium mt-6">
            Our team maintains the highest standards of compliance and security through globally recognized certifications.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-3 sm:p-4 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.15)]"
              title={cert.name}
            >
              <Image
                src={cert.image}
                alt={cert.name}
                width={200}
                height={200}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
