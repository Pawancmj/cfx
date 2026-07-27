import { ServiceCategory } from "./types";

export const customSoftwareData: ServiceCategory = {
    title: "Custom Software Development",
    slug: "custom-software",
    heroDescription: "Scalable web applications, mobile apps, CRM, ERP, and custom software solutions designed to meet your business goals.",
    heroImage: "/hero_web_app.webp",
    overview: "Our engineering team specializes in crafting high-performance enterprise applications, mobile platforms, and business systems tailored to your unique requirements.",
    whyChooseUs: [
        { title: "Modern Tech Stacks", desc: "We use the latest frameworks like Next.js and React to ensure blazing-fast performance.", icon: "Code" },
        { title: "Agile Methodology", desc: "Iterative development cycles guarantee flexibility and alignment with your goals.", icon: "Activity" },
        { title: "Enterprise Security", desc: "Security is baked into our architecture from day one, not bolted on later.", icon: "Shield" }
    ],
    testimonials: [
        {
            content: "CyberForenX & Associates delivered our SaaS platform 3 weeks ahead of schedule. Their technical depth in Next.js and AWS is truly world-class.",
            author: "James Wilson",
            role: "CTO, CloudScale AI",
            rating: 5
        },
        {
            content: "The custom dashboard they built for our logistics team has reduced operational friction by 60%. Highly recommend their enterprise solutions.",
            author: "Sarah Jenkins",
            role: "COO, Global Logistics Corp",
            rating: 5
        },
        {
            content: "Intuitive UI and robust backend. They didn't just write code; they understood our business model and improved it.",
            author: "Michael Chen",
            role: "Founder, Fintech Synergy",
            rating: 5
        }
    ],
    process: [
        { step: "01", title: "Discovery", desc: "We analyze your business requirements and technical feasibility." },
        { step: "02", title: "Design", desc: "Creating wireframes and high-fidelity prototypes for visual alignment." },
        { step: "03", title: "Development", desc: "Agile coding sprints with continuous integration and testing." },
        { step: "04", title: "Deployment", desc: "Secure launch and ongoing maintenance and performance optimization." }
    ],
    technologies: {
        "Frontend": [
            { name: "React", desc: "Component-based UI library" },
            { name: "Next.js", desc: "React framework for production" },
            { name: "TypeScript", desc: "Strongly typed JavaScript" },
            { name: "Tailwind CSS", desc: "Utility-first CSS framework" }
        ],
        "Backend": [
            { name: "Node.js", desc: "JavaScript runtime environment" },
            { name: "Express", desc: "Fast, unopinionated web framework" },
            { name: "PostgreSQL", desc: "Advanced relational database" },
            { name: "MongoDB", desc: "Document-based NoSQL database" }
        ],
        "Cloud & DevOps": [
            { name: "AWS", desc: "Comprehensive cloud platform" },
            { name: "Docker", desc: "Containerization platform" },
            { name: "Kubernetes", desc: "Container orchestration system" },
            { name: "CI/CD", desc: "Continuous integration & deployment" }
        ],
        "Mobile": [
            { name: "React Native", desc: "Cross-platform mobile framework" },
            { name: "Flutter", desc: "UI toolkit by Google" },
            { name: "Swift", desc: "Native iOS development" },
            { name: "Kotlin", desc: "Native Android development" }
        ]
    },
    metrics: [
        { value: "99.9%", label: "SLA UPTIME" },
        { value: "SOC 2", label: "READY ARCHITECTURE" },
        { value: "24/7", label: "SUPPORT" },
        { value: "500+", label: "APPS DELIVERED" }
    ],
    certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "PCI DSS", "AWS Certified"],
    subcategories: [
        {
            title: "Custom Web Application Development",
            slug: "custom-web-application-development",
            heroTitle: "Custom Web Apps Built for Your Vision",
            heroDescription: "Scalable, secure apps with CyberForenX & Associates cybersecurity DNA. From prototype to production.",
            heroImage: "/mockup_web_app.webp",
            details: "Fully bespoke web apps using React/Node.js/PostgreSQL. Perfect for enterprises scaling their digital workflows.",
            features: [
                { icon: "Zap", title: "Progressive Web App (PWA) support", desc: "Reliable, fast, and engaging mobile-first web experiences." },
                { icon: "Code", title: "High-performance frontends", desc: "Blazing-fast interfaces built with modern frameworks." },
                { icon: "Lock", title: "Enterprise-grade authentication", desc: "SSO, MFA, and role-based access control built-in." },
                { icon: "Smartphone", title: "Responsive by default", desc: "Pixel-perfect across every device and screen size." },
                { icon: "Activity", title: "Real-time data synchronization", desc: "Live updates and collaborative features out of the box." },
                { icon: "ShieldCheck", title: "SOC 3 audited code", desc: "Rigorously tested and certified security architectures." }
            ],
            process: [
                { step: "01", title: "Requirements", desc: "Defining the scope and technical needs." },
                { step: "02", title: "Design", desc: "UI/UX wireframing and prototyping." },
                { step: "03", title: "Develop", desc: "Agile engineering and iterative builds." },
                { step: "04", title: "Secure", desc: "Rigorous penetration testing and hardening." },
                { step: "05", title: "Deploy", desc: "Launch and ongoing optimization." }
            ],
            portfolio: [
                { title: "Fintech Startup Portal", metrics: [{ label: "User Growth", value: "300%" }, { label: "Uptime", value: "99.99%" }] },
                { title: "Healthcare SaaS Platform", metrics: [{ label: "Data Processed", value: "5PB+" }, { label: "Compliance", value: "HIPAA" }] },
                { title: "Global Logistics Dashboard", metrics: [{ label: "Cost Saved", value: "$2M+" }, { label: "Latency", value: "<50ms" }] }
            ]
        },
        {
            title: "Enterprise Software Solutions",
            slug: "enterprise-software-solutions",
            heroTitle: "Enterprise-Grade Software That Scales",
            heroDescription: "Mission-critical systems engineered for complex workflows, compliance, and thousands of concurrent users.",
            heroImage: "/mockup_enterprise.webp",
            details: "Custom ERP, CRM, and workflow automation platforms built with microservices architecture and enterprise security standards.",
            features: [
                { icon: "Database", title: "Microservices architecture", desc: "Loosely coupled services enabling independent deployment and scaling." },
                { icon: "Lock", title: "Enterprise SSO & LDAP", desc: "Active Directory, SAML, and OpenID Connect integration for secure access." },
                { icon: "Activity", title: "Workflow automation engines", desc: "Custom business logic pipelines replacing manual approval chains." },
                { icon: "Code", title: "Legacy system modernization", desc: "Migrating monoliths to modern cloud-native architectures." },
                { icon: "Shield", title: "Audit trail & compliance", desc: "Immutable logging and SOX/HIPAA-compliant data governance." },
                { icon: "Zap", title: "Real-time data processing", desc: "Event-driven streams handling millions of transactions per hour." }
            ],
            process: [
                { step: "01", title: "Discovery", desc: "Mapping existing infrastructure and business processes." },
                { step: "02", title: "Architect", desc: "Designing microservices topology and data models." },
                { step: "03", title: "Build", desc: "Iterative sprints with stakeholder review at every milestone." },
                { step: "04", title: "Integrate", desc: "Connecting with ERP, CRM, and third-party enterprise systems." },
                { step: "05", title: "Deploy", desc: "Blue-green deployment with zero-downtime cutover." }
            ],
            portfolio: [
                { title: "Manufacturing ERP Platform", metrics: [{ label: "Users", value: "5,000+" }, { label: "Process Automation", value: "85%" }] },
                { title: "Insurance Claims Engine", metrics: [{ label: "Claims/Day", value: "50K+" }, { label: "Processing Time", value: "-70%" }] },
                { title: "Corporate Intranet Suite", metrics: [{ label: "Departments", value: "120+" }, { label: "Adoption Rate", value: "94%" }] }
            ]
        },
        {
            title: "Mobile App Development",
            slug: "mobile-app-development",
            heroTitle: "Apps Users Can't Put Down",
            heroDescription: "Native and cross-platform mobile experiences with flawless performance and intuitive UX.",
            heroImage: "/mockup_mobile.webp",
            details: "React Native and Flutter apps with native-level performance, offline-first architecture, and biometric security.",
            features: [
                { icon: "Smartphone", title: "Cross-platform development", desc: "Single codebase for iOS and Android with native performance." },
                { icon: "Zap", title: "Offline-first architecture", desc: "Full functionality without internet using local sync and caching." },
                { icon: "Lock", title: "Biometric authentication", desc: "Face ID, Touch ID, and fingerprint security integration." },
                { icon: "Activity", title: "Push notification systems", desc: "Targeted, behavior-based push campaigns with rich media." },
                { icon: "Layout", title: "Gesture-driven interfaces", desc: "Swipe, pinch, and drag interactions that feel native and smooth." },
                { icon: "Code", title: "App Store optimization", desc: "Metadata, screenshots, and A/B testing for maximum downloads." }
            ],
            process: [
                { step: "01", title: "Strategize", desc: "Platform selection and feature prioritization." },
                { step: "02", title: "Design", desc: "Mobile-first UI/UX following iOS and Material guidelines." },
                { step: "03", title: "Develop", desc: "Sprint-based development with device testing." },
                { step: "04", title: "Test", desc: "QA across 50+ device and OS combinations." },
                { step: "05", title: "Launch", desc: "App Store and Play Store submission with ASO." }
            ],
            portfolio: [
                { title: "Fitness Tracking App", metrics: [{ label: "Downloads", value: "500K+" }, { label: "Rating", value: "4.8★" }] },
                { title: "Food Delivery Platform", metrics: [{ label: "Orders/Day", value: "25K+" }, { label: "Crash Rate", value: "<0.1%" }] },
                { title: "Banking Mobile App", metrics: [{ label: "Active Users", value: "200K+" }, { label: "Transaction Speed", value: "<1s" }] }
            ]
        },
        {
            title: "CRM & ERP Solutions",
            slug: "crm-erp-solutions",
            heroTitle: "Unify Your Business Operations",
            heroDescription: "Custom CRM and ERP platforms that streamline sales, operations, and decision-making.",
            heroImage: "/mockup_enterprise.webp",
            details: "Tailored CRM and ERP systems that integrate with your existing workflows and provide real-time business intelligence.",
            features: [
                { icon: "Database", title: "Unified data platform", desc: "Single source of truth across sales, inventory, and finance." },
                { icon: "Activity", title: "Automated reporting", desc: "Scheduled executive dashboards with real-time KPI tracking." },
                { icon: "Target", title: "Sales pipeline management", desc: "End-to-end lead tracking with AI-powered forecasting." },
                { icon: "Code", title: "API-first integration", desc: "Connect with any third-party tool via RESTful APIs." },
                { icon: "Lock", title: "Role-based permissions", desc: "Granular access control for multi-department deployments." },
                { icon: "Zap", title: "Workflow automation", desc: "Automate approvals, notifications, and data syncs." }
            ],
            process: [
                { step: "01", title: "Audit", desc: "Assessing current business processes and pain points." },
                { step: "02", title: "Design", desc: "Mapping custom workflows and data models." },
                { step: "03", title: "Configure", desc: "Building and integrating the platform." },
                { step: "04", title: "Migrate", desc: "Secure data migration from legacy systems." },
                { step: "05", title: "Train", desc: "Team onboarding and go-live support." }
            ],
            portfolio: [
                { title: "Real Estate CRM Platform", metrics: [{ label: "Leads Managed", value: "100K+" }, { label: "Conversion Rate", value: "+45%" }] },
                { title: "Manufacturing ERP System", metrics: [{ label: "Inventory Accuracy", value: "99.5%" }, { label: "Cost Savings", value: "$1.5M" }] },
                { title: "Healthcare Practice CRM", metrics: [{ label: "Patients Served", value: "50K+" }, { label: "Admin Time", value: "-60%" }] }
            ]
        }
    ]
};
