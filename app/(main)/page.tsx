import { constructMetadata } from "@/app/constants/seo";
import HomeClient from "./HomeClient";

export const metadata = constructMetadata({
  title: "Digital Forensics & Web Development",
  description: "Global leader in digital forensics, web development, and IT security solutions. We deliver military-grade precision and innovative technology to secure your digital vision.",
});

export default function Home() {
  return <HomeClient />;
}
