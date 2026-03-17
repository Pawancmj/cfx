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
    default: "Cyberforenx | Digital Forensics, Web Development & IT Security",
    template: "%s | Cyberforenx"
  },
  description: "Cyberforenx is a premier digital forensics and web development firm. We provide expert cybersecurity, data recovery, and custom software solutions to secure your digital vision.",
  keywords: ["Cyberforenx", "Digital Forensics", "Cybersecurity", "Web Development", "App Development", "IT Consulting", "Data Recovery", "India"],
  authors: [{ name: "Cyberforenx Team" }],
  creator: "Cyberforenx",
  publisher: "Cyberforenx",
  metadataBase: new URL("https://cyberforenx.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cyberforenx - Digital Forensics & Web Development",
    description: "Securing your digital future with cutting-edge web development and forensic intelligence.",
    url: "https://cyberforenx.com",
    siteName: "Cyberforenx",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberforenx | Securing Your Digital Vision",
    description: "Expert Digital Forensics, Web Development, and Cybersecurity solutions.",
    creator: "@cyberforenx",
  },
  robots: {
    index: true,
    follow: true,
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
