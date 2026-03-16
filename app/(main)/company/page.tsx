import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Cyberforenx Systems",
  description: "Learn about the mission, vision, and values of Cyberforenx. We are global pioneers in digital intelligence, providing secure and innovative technological solutions for the modern enterprise.",
  keywords: ["About Cyberforenx", "Digital Intelligence", "Cyberforenx Mission", "Technology Leadership", "Global IT Solutions"],
};

export default function AboutPage() {
  return <AboutClient />;
}
