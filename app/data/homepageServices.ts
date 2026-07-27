import type { NavLink } from "@/app/constants/navigation";
import { serviceCategories } from "@/app/constants/navigation";

export interface HomepageService {
  id: string;
  title: string;
  description: string;
  links: NavLink[];
}

const findByTitle = (title: string): NavLink[] =>
  serviceCategories.find((c) => c.title === title)?.links ?? [];

export const homepageServices: HomepageService[] = [
  {
    id: "custom-software",
    title: "Web & App Development",
    description: "Tailored enterprise applications built with modern architectures to accelerate digital transformation and drive business growth.",
    links: findByTitle("Web & App Development"),
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Military-grade security assessments, penetration testing, and managed defense to protect your critical digital assets.",
    links: findByTitle("Cybersecurity"),
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics & Investigation",
    description: "Comprehensive digital evidence extraction, analysis, and expert testimony for litigation, incident response, and regulatory compliance.",
    links: findByTitle("Digital Forensics"),
  },
  {
    id: "data-annotation",
    title: "Intelligent Data Annotation",
    description: "High-precision data labeling and annotation services powering AI/ML models with accurate, scalable training datasets.",
    links: [
      { name: "Image & Video Annotation", href: "/services/data-annotation/image-video-annotation" },
      { name: "Text & NLP Data Labeling", href: "/services/data-annotation/text-nlp-labeling" },
      { name: "Audio & Speech Annotation", href: "/services/data-annotation/audio-speech-annotation" },
      { name: "3D Point Cloud & LiDAR Annotation", href: "/services/data-annotation/point-cloud-annotation" },
      { name: "Data Validation & Quality Assurance", href: "/services/data-annotation/data-validation-qa" },
      { name: "Custom Annotation Pipelines", href: "/services/data-annotation/custom-annotation-pipelines" },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Solutions",
    description: "Data-driven marketing strategies spanning SEO, paid media, and content to maximize ROI and dominate your market share.",
    links: findByTitle("Digital Marketing"),
  },
  {
    id: "training",
    title: "Training & Internship Programs",
    description: "Hands-on training and internship programs bridging the gap between academic knowledge and industry-ready expertise.",
    links: [
      { name: "Technical Training Programs", href: "/services/training/technical-training-programs" },
      { name: "Cybersecurity Bootcamps", href: "/services/training/cybersecurity-bootcamps" },
      { name: "Digital Forensics Workshops", href: "/services/training/digital-forensics-workshops" },
      { name: "Internship Placements", href: "/services/training/internship-placements" },
      { name: "Corporate Training Solutions", href: "/services/training/corporate-training-solutions" },
      { name: "Certification Preparation", href: "/services/training/certification-preparation" },
    ],
  },
  {
    id: "talent-acquisition",
    title: "Data Analytics & Intelligence",
    description: "Data-driven analytics and business intelligence solutions that transform raw data into actionable insights for strategic decision-making.",
    links: findByTitle("Data Analytics & Intelligence"),
  },
];
