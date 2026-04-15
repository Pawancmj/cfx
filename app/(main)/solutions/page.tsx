import { constructMetadata } from "@/app/constants/seo";
import SolutionsClient from "./SolutionsClient";

export const metadata = constructMetadata({
  title: "Industry Solutions | Strategic Digital Transformation",
  description: "Specialized technology solutions for Digital Commerce, Government, Healthcare, and Finance. CyberForenX & Associates delivers secure, scalable innovation across sectors.",
  keywords: ["Government Solutions", "Enterprise Tech", "Financial Security", "Compliance Automation", "Industrial Cybersecurity"],
});

export default function SolutionsPage() {
  return <SolutionsClient />;
}
