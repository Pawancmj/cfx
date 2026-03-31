export interface NavLink {
    name: string;
    href: string;
    image?: string;
    cardImage?: string;
}

export interface MegaCategory {
    title: string;
    slug?: string;
    links: NavLink[];
}

export const toSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const serviceCategories: MegaCategory[] = [
    {
        title: "Web & App Development",
        links: [
            { name: "Custom Web Application Development", href: "/services/web-app-development/custom-web-application-development" },
            { name: "Enterprise Software Solutions", href: "/services/web-app-development/enterprise-software-solutions" },
            { name: "Mobile App Development", href: "/services/web-app-development/mobile-app-development" },
            { name: "UI/UX Design & Prototyping", href: "/services/web-app-development/ui-ux-design-prototyping" },
            { name: "SaaS Platform Development", href: "/services/web-app-development/saas-platform-development" },
            { name: "API Development & Integration", href: "/services/web-app-development/api-development-integration" },
            { name: "E-Commerce Solutions", href: "/services/web-app-development/e-commerce-solutions" },
            { name: "Cloud-Based Applications", href: "/services/web-app-development/cloud-based-applications" },
        ],
    },
    {
        title: "Cybersecurity",
        links: [
            { name: "Security Audits & Vulnerability Assessments", href: "/services/cybersecurity/security-audits" },
            { name: "Penetration Testing (Ethical Hacking)", href: "/services/cybersecurity/penetration-testing" },
            { name: "Managed SOC & 24/7 Monitoring", href: "/services/cybersecurity/managed-soc-monitoring" },
            { name: "Cloud Security Configuration", href: "/services/cybersecurity/cloud-security-configuration" },
            { name: "Identity & Access Management (IAM)", href: "/services/cybersecurity/identity-access-management" },
            { name: "Security Awareness Training", href: "/services/cybersecurity/security-awareness-training" },
        ],
    },
    {
        title: "Digital Forensics",
        links: [
            { name: "Incident Response (IR)", href: "/services/digital-forensics/incident-response" },
            { name: "Malware Analysis & Reverse Engineering", href: "/services/digital-forensics/malware-analysis" },
            { name: "Cyber Crime Investigation Support", href: "/services/digital-forensics/cyber-crime-investigation-support" },
            { name: "Log Analysis & Event Reconstruction", href: "/services/digital-forensics/log-analysis-event-reconstruction" },
            { name: "Device & Network Forensics", href: "/services/digital-forensics/device-network-forensics" },
            { name: "Legal & Compliance Reporting", href: "/services/digital-forensics/legal-compliance-reporting" },
        ],
    },
    {
        title: "BPO / BPS Services",
        slug: "bpo",
        links: [
            { name: "Customer Support Services", href: "/services/bpo/customer-support-services" },
            { name: "Technical Support Operations", href: "/services/bpo/technical-support-operations" },
            { name: "Data Processing & Data Entry", href: "/services/bpo/data-processing-entry" },
            { name: "Back Office Management", href: "/services/bpo/back-office-management" },
            { name: "Document Verification", href: "/services/bpo/document-verification" },
            { name: "Process Automation Support", href: "/services/bpo/process-automation-support" },
            { name: "Email & Chat Support", href: "/services/bpo/email-chat-support" },
            { name: "24/7 Operational Assistance", href: "/services/bpo/operational-assistance" },
        ],
    },
    {
        title: "Data Analytics & Intelligence",
        slug: "analytics",
        links: [
            { name: "Data Engineering & ETL", href: "/services/analytics/data-engineering" },
            { name: "KPI Monitoring Solutions", href: "/services/analytics/kpi-monitoring-solutions" },
            { name: "Customer Behavior Analytics", href: "/services/analytics/customer-behavior-analytics" },
            { name: "Decision Support Systems", href: "/services/analytics/decision-support-systems" },
        ],
    },
    {
        title: "Digital Marketing",
        slug: "marketing",
        links: [
            { name: "Search Engine Optimization (SEO)", href: "/services/marketing/seo" },
            { name: "Social Media Marketing", href: "/services/marketing/social-media-marketing" },
            { name: "Performance Marketing & Paid Ads", href: "/services/marketing/performance-marketing" },
            { name: "Content Marketing Strategy", href: "/services/marketing/content-marketing-strategy" },
            { name: "Email Marketing Campaigns", href: "/services/marketing/email-marketing-campaigns" },
            { name: "Brand Awareness & Online Presence", href: "/services/marketing/brand-awareness" },
            { name: "Lead Generation Campaigns", href: "/services/marketing/lead-generation-campaigns" },
            { name: "Analytics & Marketing Performance", href: "/services/marketing/analytics-marketing-performance" },
        ],
    },
];

export const solutionsCategories: MegaCategory[] = [
    {
        title: "Digital Commerce & Platform Businesses",
        slug: "digital-commerce",
        links: [
            { name: "Custom Web & Mobile Platforms", href: "/solutions/digital-commerce/custom-web-mobile-platforms" },
            { name: "Client & Vendor Portal Development", href: "/solutions/digital-commerce/client-vendor-portal" },
            { name: "SaaS-Based Business Platforms", href: "/solutions/digital-commerce/saas-platforms" },
            { name: "API Integration & Automation", href: "/solutions/digital-commerce/api-integration" },
            { name: "Multi-User Management Systems", href: "/solutions/digital-commerce/multi-user-management" },
            { name: "Secure Transaction Workflows", href: "/solutions/digital-commerce/secure-transaction-workflows" },
            { name: "Scalable Digital Infrastructure", href: "/solutions/digital-commerce/scalable-digital-infrastructure" },
            { name: "Platform Performance Optimization", href: "/solutions/digital-commerce/platform-performance-optimization" },
        ],
    },
    {
        title: "Government & Regulatory Agencies",
        slug: "government",
        links: [
            { name: "Digital Evidence Identification & Collection", href: "/solutions/government/digital-evidence-collection" },
            { name: "On-Site Investigation & Forensic Support", href: "/solutions/government/on-site-investigation" },
            { name: "Mobile & Computer Data Extraction", href: "/solutions/government/data-extraction" },
            { name: "Deleted Data Recovery & Analysis", href: "/solutions/government/data-recovery-analysis" },
            { name: "Email & Communication Forensics", href: "/solutions/government/email-communication-forensics" },
            { name: "Financial & Transaction Data Investigation", href: "/solutions/government/financial-data-investigation" },
            { name: "Digital Activity & Evidence Trail Analysis", href: "/solutions/government/evidence-trail-analysis" },
            { name: "Forensic Reporting & Compliance Documentation", href: "/solutions/government/forensic-reporting" },
            { name: "Evidence Preservation & Secure Archival", href: "/solutions/government/evidence-preservation" },
            { name: "Investigation Case Management Systems", href: "/solutions/government/case-management-systems" },
        ],
    },
    {
        title: "Financial & Tax Compliance",
        slug: "finance",
        links: [
            { name: "TDS & Financial Data Examination", href: "/solutions/finance/tds-financial-examination" },
            { name: "Transaction & Fraud Pattern Analysis", href: "/solutions/finance/fraud-pattern-analysis" },
            { name: "Digital Evidence Verification & Validation", href: "/solutions/finance/evidence-verification" },
            { name: "Financial Audit & Compliance Support", href: "/solutions/finance/audit-compliance-support" },
            { name: "Risk Identification & Regulatory Review", href: "/solutions/finance/risk-identification" },
            { name: "Investigation Reporting & Documentation", href: "/solutions/finance/investigation-reporting" },
            { name: "Regulatory Submission Assistance", href: "/solutions/finance/regulatory-submission" },
            { name: "Compliance Workflow & Analysis Systems", href: "/solutions/finance/compliance-workflow" },
        ],
    },
    {
        title: "Security-Sensitive Organizations",
        slug: "security",
        links: [
            { name: "Security Risk Assessment", href: "/solutions/security/security-risk-assessment" },
            { name: "Vulnerability & Compliance Audits", href: "/solutions/security/vulnerability-audits" },
            { name: "Threat Monitoring & Incident Response", href: "/solutions/security/threat-monitoring" },
            { name: "Access Control & Data Protection", href: "/solutions/security/access-control" },
            { name: "Security Governance Support", href: "/solutions/security/security-governance" },
            { name: "Compliance Tracking Systems", href: "/solutions/security/compliance-tracking" },
            { name: "Risk Reporting Dashboards", href: "/solutions/security/risk-reporting" },
            { name: "Secure Infrastructure Solutions", href: "/solutions/security/secure-infrastructure" },
        ],
    },
    {
        title: "Enterprise & Corporate Operations",
        slug: "enterprise",
        links: [
            { name: "Business Process Automation", href: "/solutions/enterprise/business-process-automation" },
            { name: "Back Office & Workflow Management", href: "/solutions/enterprise/back-office-management" },
            { name: "Customer Support Operations", href: "/solutions/enterprise/customer-support" },
            { name: "Document & Data Processing Systems", href: "/solutions/enterprise/data-processing" },
            { name: "Workforce & Performance Monitoring", href: "/solutions/enterprise/workforce-monitoring" },
            { name: "Operational Reporting Dashboards", href: "/solutions/enterprise/operational-reporting" },
            { name: "Process Optimization Solutions", href: "/solutions/enterprise/process-optimization" },
            { name: "Enterprise Workflow Platforms", href: "/solutions/enterprise/workflow-platforms" },
        ],
    },
    {
        title: "Data-Driven Enterprises",
        slug: "data",
        links: [
            { name: "Business Intelligence Dashboards", href: "/solutions/data/bi-dashboards" },
            { name: "Data Analytics & Visualization", href: "/solutions/data/data-analytics" },
            { name: "Performance & KPI Monitoring", href: "/solutions/data/kpi-monitoring" },
            { name: "Predictive Insights & Reporting", href: "/solutions/data/predictive-insights" },
            { name: "Data Processing & Validation", href: "/solutions/data/data-processing" },
            { name: "Executive Decision Support Systems", href: "/solutions/data/decision-support" },
            { name: "Operational Analytics Platforms", href: "/solutions/data/operational-analytics" },
            { name: "Data-Driven Reporting Solutions", href: "/solutions/data/driven-reporting" },
        ],
    },
];

export const resourceCategories: MegaCategory[] = [
    {
        title: "Latest",
        links: [
            { name: "Digital Forensics & Cyber Investigation", href: "/resources/latest/digital-forensics-cyber-investigation" },
            { name: "How Digital Evidence Supports Government Investigations", href: "/resources/latest/how-digital-evidence-supports" },
            { name: "Best Practices for Secure Evidence Collection & Reporting", href: "/resources/latest/best-practices-secure-evidence" },
            { name: "Cybersecurity & Risk Management", href: "/resources/latest/cybersecurity-risk-management" },
            { name: "Modern Cyber Threats Every Business Should Prepare For", href: "/resources/latest/modern-cyber-threats" },
            { name: "Enterprise Security Strategies for 2026 and Beyond", href: "/resources/latest/enterprise-security-strategies" },
        ],
    },
    {
        title: "Blogs",
        links: [
            { name: "Digital Forensics in Government Investigations: Process & Best Practices", href: "/resources/blogs/digital-forensics-government" },
            { name: "Cybersecurity Essentials for Modern Enterprises", href: "/resources/blogs/cybersecurity-essentials" },
            { name: "Data Analytics for Smarter Business Decisions", href: "/resources/blogs/data-analytics-business-decisions" },
            { name: "How BPO/BPS Services Improve Operational Efficiency", href: "/resources/blogs/how-bpo-bps-improve-efficiency" },
            { name: "Building Scalable Web & App Platforms for Growing Businesses", href: "/resources/blogs/scalable-web-app-platforms" },
            { name: "Compliance, Risk & Digital Investigation in Financial Sectors", href: "/resources/blogs/compliance-risk-financial-sectors" },
            { name: "Secure Digital Transformation for Enterprises", href: "/resources/blogs/secure-digital-transformation" },
            { name: "The Role of Automation in Business Operations", href: "/resources/blogs/role-automation-business" },
        ],
    },
    {
        title: "Articles / Insights",
        links: [
            { name: "Understanding Digital Evidence & Chain of Custody", href: "/resources/articles/understanding-digital-evidence" },
            { name: "Web Security Best Practices for Business Platforms", href: "/resources/articles/web-security-best-practices" },
            { name: "Data-Driven Decision Making for Enterprises", href: "/resources/articles/data-driven-decision-making" },
            { name: "Why Organizations Need Continuous Cyber Risk Assessment", href: "/resources/articles/continuous-cyber-risk-assessment" },
            { name: "Modern Business Process Automation Strategies", href: "/resources/articles/modern-bpa-strategies" },
            { name: "Digital Compliance & Regulatory Intelligence Explained", href: "/resources/articles/digital-compliance-explained" },
        ],
    },
    {
        title: "News & Updates",
        links: [
            { name: "New Digital Investigation Engagements with Regulatory Agencies", href: "/resources/news/new-digital-investigation-engagements" },
            { name: "Enterprise Cybersecurity Audit Projects Delivered", href: "/resources/news/enterprise-cybersecurity-audit" },
            { name: "Expansion of BPO / Business Process Services", href: "/resources/news/expansion-bpo-bps" },
            { name: "Launch of New Digital Platform Solutions", href: "/resources/news/launch-new-digital-platform" },
            { name: "Technology & Innovation Updates from Our Team", href: "/resources/news/technology-innovation-updates" },
        ],
    },
];

const caseStudiesLinks: NavLink[] = [
    { name: "Government Digital Investigation & Evidence Analysis", href: "/case-studies/case-studies/government-digital-investigation" },
    { name: "Financial Compliance & Tax Investigation Support", href: "/case-studies/case-studies/financial-compliance-tax-investigation" },
    { name: "Enterprise Cybersecurity Risk Assessment Projects", href: "/case-studies/case-studies/enterprise-cybersecurity-risk-assessment" },
    { name: "Zero-Trust Architecture & Secure Network Infrastructure", href: "/case-studies/case-studies/secure-node-zero-trust", cardImage: "/images/mockups/portrait%20images/SecureNode.png" },
    { name: "Custom Mobile Platforms & User Engagement Systems", href: "/case-studies/case-studies/fitness-track-mobile-platform", cardImage: "/images/mockups/portrait%20images/FitnessTrack.png" },
    { name: "Digital Transformation & Real Estate Web Portals", href: "/case-studies/case-studies/neev-realty-digital-transformation", cardImage: "/images/mockups/portrait%20images/NeevRealty.png" },
    { name: "Scalable Educational Platforms & EdTech Solutions", href: "/case-studies/case-studies/interview-prep-edu-scaling", cardImage: "/images/mockups/portrait%20images/InterviewPrepEdu.png" },
    { name: "Institutional Digital Infrastructure & Modernization", href: "/case-studies/case-studies/st-andrews-college-infrastructure", cardImage: "/images/mockups/portrait%20images/St.%20Andrew's%20College.png" },
    { name: "Premium E-Commerce Experiences & Digital Luxury Retail", href: "/case-studies/case-studies/teppich-art-ecommerce", cardImage: "/images/mockups/portrait%20images/TeppichArt.png" },
    { name: "Strategic Data Analytics & Global Operational Solutions", href: "/case-studies/case-studies/azal-international-analytics", cardImage: "/images/mockups/portrait%20images/Azal%20International.png" },
];

const caseStudiesClientsLinks: NavLink[] = [
    { name: "Neev Realty", href: "/case-studies", image: "/images/clients/neev-realty.webp" },
    { name: "Delhi Police", href: "/case-studies", image: "/images/clients/delhi-police.webp" },
    { name: "Income Tax", href: "/case-studies", image: "/images/clients/income-tax.webp" },
    { name: "Azal International", href: "/case-studies", image: "/images/clients/azal-international.webp" },
    { name: "InterviewPrep Edu", href: "/case-studies", image: "/images/clients/prepedu.webp" },
    { name: "TDS", href: "/case-studies", image: "/images/clients/tds.webp" },
];

export const caseStudiesCategories: MegaCategory[] = [
    {
        title: "Latest",
        links: caseStudiesLinks.slice(0, 6),
    },
    {
        title: "Case Studies",
        links: caseStudiesLinks,
    },
    {
        title: "Clients",
        links: caseStudiesClientsLinks,
    },
];

export const mainNavLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Company", href: "/company" },
];
