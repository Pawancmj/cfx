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
    title: "Custom Software Development",
    description: "Scalable web applications, mobile apps, CRM, ERP, and custom software solutions designed to meet your business goals.",
    links: findByTitle("Web & App Development"),
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics & Investigation",
    description: "Expert digital evidence analysis, cyber investigations, forensic reporting, and secure data recovery with industry best practices.",
    links: findByTitle("Digital Forensics"),
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Protect your business with vulnerability assessments, penetration testing, incident response, security consulting, and compliance support.",
    links: findByTitle("Cybersecurity"),
  },
  {
    id: "data-annotation",
    title: "Intelligent Data Annotation",
    description: "High-quality image, text, audio, video, document, and AI data annotation services for machine learning and computer vision projects.",
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
    description: "Grow your online presence through SEO, social media marketing, performance marketing, branding, content strategy, and lead generation.",
    links: findByTitle("Digital Marketing"),
  },
  {
    id: "training",
    title: "Training & Internship Programs",
    description: "Industry-oriented training, live projects, mentorship, certification, and internship programs to develop future-ready professionals.",
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
    title: "Talent Acquisition & Staffing",
    description: "End-to-end recruitment and staffing solutions, connecting organizations with skilled technical and non-technical professionals.",
    links: [
      { name: "Technical Recruitment & Staffing", href: "/services/talent-acquisition/technical-recruitment" },
      { name: "Executive Search & Headhunting", href: "/services/talent-acquisition/executive-search" },
      { name: "Contract & Temporary Staffing", href: "/services/talent-acquisition/contract-staffing" },
      { name: "Recruitment Process Outsourcing", href: "/services/talent-acquisition/recruitment-process-outsourcing" },
      { name: "Campus Recruitment & Graduate Hiring", href: "/services/talent-acquisition/campus-recruitment" },
      { name: "Workforce Planning & Talent Strategy", href: "/services/talent-acquisition/workforce-planning" },
    ],
  },
];
