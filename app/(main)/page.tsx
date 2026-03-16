import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Cyberforenx | Digital Forensics & Web Development",
  description: "Global leader in digital forensics, web development, and cyber security. We deliver military-grade precision and innovative technology solutions.",
};

export default function Home() {
  return <HomeClient />;
}
