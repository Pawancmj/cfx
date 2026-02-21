import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
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
        className={`${outfit.variable} font-sans antialiased bg-black text-white selection:bg-blue-500/30`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
