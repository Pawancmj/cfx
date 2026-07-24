import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "CyberForenX & Associates | Digital Forensics, Web Development & IT Security",
    template: "%s | CyberForenX & Associates"
  },
  description: "CyberForenX & Associates is a premier digital forensics and web development firm. We provide expert cybersecurity, data recovery, and custom software solutions to secure your digital vision.",
  keywords: ["CyberForenX", "CyberForenX & Associates", "Digital Forensics", "Cybersecurity", "Web Development", "App Development", "IT Consulting", "Data Recovery", "India"],
  authors: [{ name: "CyberForenX & Associates" }],
  creator: "CyberForenX & Associates",
  publisher: "CyberForenX & Associates",
  metadataBase: new URL("https://www.cyberforenx.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CyberForenX & Associates - Digital Forensics & Web Development",
    description: "Securing your digital future with cutting-edge web development and forensic intelligence.",
    url: "https://www.cyberforenx.in",
    siteName: "CyberForenX & Associates",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberForenX & Associates | Securing Your Digital Vision",
    description: "Expert Digital Forensics, Web Development, and Cybersecurity solutions.",
    creator: "@cyberforenx",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
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
        className={`${inter.variable} antialiased bg-background text-foreground selection:bg-accent/20 selection:text-accent relative`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
