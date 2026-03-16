import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Cyberforenx - Digital Forensics & Web Development",
    template: "%s | Cyberforenx"
  },
  description: "Securing your digital future with cutting-edge web & app development, digital forensics, and BPO solutions. Expert IT consulting and security across the globe.",
  keywords: ["Cyberforenx", "CFX", "Digital Forensics", "Cybersecurity", "Web Development", "App Development", "BPO Solutions", "IT Consulting", "Forensic Investigation", "Data Recovery", "Cyber Investigation India"],
  authors: [{ name: "Cyberforenx Team" }],
  creator: "Cyberforenx",
  publisher: "Cyberforenx",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cyberforenx.com"), // Replace with actual domain when live
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cyberforenx - Digital Forensics & Web Development",
    description: "Securing your digital future with cutting-edge web & app development and digital forensics.",
    url: "https://cyberforenx.com",
    siteName: "Cyberforenx",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberforenx - Digital Forensics & Web Development",
    description: "Securing your digital future with cutting-edge web & app development and digital forensics.",
    creator: "@cyberforenx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary relative`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
