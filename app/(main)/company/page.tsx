import { constructMetadata } from "@/app/constants/seo";
import AboutClient from "./AboutClient";

export const metadata = constructMetadata({
  title: "About Us | Global Intelligence Team",
  description: "Learn about Cyberforenx, a world-class team of experts in digital forensics, web development, and cybersecurity. Excellence in digital defense and innovation.",
});

export default function AboutPage() {
  return <AboutClient />;
}
