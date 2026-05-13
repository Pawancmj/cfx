"use client";

import dynamic from "next/dynamic";
import Hero from "@/app/components/Hero";
import Testimonials from "@/app/components/Testimonials";
import CTA from "@/app/components/CTA";
import Partners from "@/app/components/Partners";

// Dynamically import heavy sections
const StatsSection = dynamic(() => import("@/app/components/sections/StatsSection"), {
  ssr: false, // Optional: if you want them to load only on client. Next.js can SSR them if not using window.
});

const CertificationsSection = dynamic(() => import("@/app/components/sections/CertificationsSection"), {
  ssr: true, 
});

const ExpertiseSection = dynamic(() => import("@/app/components/sections/ExpertiseSection"), {
  ssr: false, // Uses window width
});

const ProcessSection = dynamic(() => import("@/app/components/sections/ProcessSection"), {
  ssr: true,
});

const RecentArticlesSection = dynamic(() => import("@/app/components/sections/RecentArticlesSection"), {
  ssr: false, // Uses window width
});

export default function HomeClient() {
  return (
    <div className="flex flex-col">
      <Hero />
      <RecentArticlesSection />
      <StatsSection />
      <ExpertiseSection />
      <ProcessSection />
      <Testimonials />
      <CertificationsSection />
      <Partners />
      <CTA />
    </div>
  );
}
