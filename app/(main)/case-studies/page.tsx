import { Suspense } from "react";
import { constructMetadata } from "@/app/constants/seo";
import CaseStudiesClient from "@/app/(main)/case-studies/CaseStudiesClient";

export const metadata = constructMetadata({
  title: "Case Studies | Proven Performance",
  description: "Explore real-world examples of CyberForenX & Associates delivering impact through specialized technology and digital forensics solutions.",
});

export default function CaseStudiesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <CaseStudiesClient />
        </Suspense>
    );
}
