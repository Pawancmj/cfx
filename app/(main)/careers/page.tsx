import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Join the Cyberforenx Team",
  description: "Explore career opportunities at Cyberforenx. Join a global team of experts in digital forensics, web development, and cyber security. Scale your potential with us.",
  keywords: ["Cyberforenx Careers", "Digital Forensics Jobs", "Web Development Careers", "Cyber Security Internship", "Tech Jobs India"],
};

export default function CareersPage() {
  return <CareersClient />;
}
