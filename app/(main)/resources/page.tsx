import { constructMetadata } from "@/app/constants/seo";
import ResourcesClient from "./ResourcesClient";

export const metadata = constructMetadata({
  title: "Resources Hub | Insights & Intelligence",
  description: "Explore the latest in cybersecurity, forensics, and enterprise technology. Whitepapers, case studies, and industry intelligence from CyberForenX & Associates experts.",
  keywords: ["Whitepapers", "Technical Guides", "Cybersecurity Reports", "BPO Insights", "IT Resources", "Threat Intelligence"],
});

export default function ResourcesPage() {
  return <ResourcesClient />;
}
