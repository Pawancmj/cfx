import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cyberforenx - Digital Forensics & Web Development",
  description: "Securing your digital future with cutting-edge web & app development, digital forensics, and BPO solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary relative`}
      >
        <Navbar />
        <main className="relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
