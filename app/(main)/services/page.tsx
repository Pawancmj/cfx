import { constructMetadata } from "@/app/constants/seo";
import ServicesClient from "./ServiceClient";

export const metadata = constructMetadata({
  title: "Professional Services | Enterprise Solutions",
  description: "Explore Cyberforenx core capabilities: Web & App Development, Digital Forensics, BPO, Cybersecurity, and more. Precision-engineered for global success.",
});

export default function ServicesPage() {
  return <ServicesClient />;
}
