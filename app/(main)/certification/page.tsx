import { Metadata } from "next";
import CertificationClient from "./CertificationClient";

export const metadata: Metadata = {
  title: "Careers | Join the Global Intelligence Team",
  description: "Explore career opportunities at Cyberforenx. Join a world-class team of experts in digital forensics, web development, and cybersecurity. Grow your potential with us.",
  keywords: ["Careers", "Jobs", "Hiring", "Cyberforenx", "Tech Opportunities", "Forensics Jobs", "Development Roles"],
};

export default function CertificationPage() {
  return <CertificationClient />;
}
