export interface ServiceDetail {
    title: string;
    slug: string;
    heroTitle?: string;
    heroDescription: string;
    heroImage?: string;
    details?: string;
    features: { icon: string; title: string; desc: string }[];
    process?: { step: string; title: string; desc: string }[];
    portfolio?: { title: string; metrics: { label: string; value: string }[] }[];
    challengesVsSolutions?: { challenge: string; solution: string }[];
}

export interface ServiceCategory {
    title: string;
    slug: string;
    heroDescription: string;
    heroImage?: string;
    overview: string;
    whyChooseUs?: { title: string; desc: string; icon: string }[];
    testimonials?: { content: string; author: string; role: string; rating: number }[];
    process?: { step: string; title: string; desc: string }[];
    technologies?: Record<string, { name: string; desc: string }[]>;
    metrics?: { value: string; label: string }[];
    certifications?: string[];
    subcategories: ServiceDetail[];
}
