import { constructMetadata } from "@/app/constants/seo";
import ContactClient from "./ContactClient";

export const metadata = constructMetadata({
  title: "Contact Us | Strategic Engagement",
  description: "Get in touch with CyberForenX & Associates global experts. Partner with us for secure, scalable technology solutions and digital forensics services.",
});

export default function ContactPage() {
  return <ContactClient />;
}
