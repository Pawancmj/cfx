import { Metadata } from "next";
import CertificationClient from "./CertificationClient";

export const metadata: Metadata = {
  title: "Compliance & Certifications | Security Standards",
  description: "Cyberforenx is committed to the highest security standards. Explore our elite international certifications including ISO 27001, ISO 9001, SOC 2 Type II, and more.",
  keywords: ["Cyberforenx Certifications", "ISO 27001", "ISO 9001", "SOC 2 Type II", "Security Compliance", "Quality Management"],
};

export default function CertificationPage() {
  return <CertificationClient />;
}
