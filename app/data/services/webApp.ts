import { ServiceCategory } from "./types";

export const webAppData: ServiceCategory = {
    title: "Web & App Development",
    slug: "web-app-development",
    heroDescription: "Build scalable, secure, and beautiful digital experiences.",
    heroImage: "/hero_web_app.webp",
    overview: "Our engineering team specializes in crafting high-performance enterprise applications and mobile platforms tailored to your business needs.",
    whyChooseUs: [
        { title: "Modern Tech Stacks", desc: "We use the latest frameworks like Next.js and React to ensure blazing-fast performance.", icon: "Code" },
        { title: "Agile Methodology", desc: "Iterative development cycles guarantee flexibility and alignment with your goals.", icon: "Activity" },
        { title: "Enterprise Security", desc: "Security is baked into our architecture from day one, not bolted on later.", icon: "Shield" }
    ],
    testimonials: [
        {
            content: "CyberForenX delivered our SaaS platform 3 weeks ahead of schedule. Their technical depth in Next.js and AWS is truly world-class.",
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
            { name: "Tailwind CSS", desc: "Utility-first CSS framework" },
            { name: "HTML5 / CSS3", desc: "Core web technologies" }
        ],
        "Backend": [
            { name: "Node.js", desc: "JavaScript runtime environment" },
            { name: "Express", desc: "Fast, unopinionated web framework" },
            { name: "PostgreSQL", desc: "Advanced relational database" },
            { name: "MongoDB", desc: "Document-based NoSQL database" },
            { name: "GraphQL", desc: "Query language for APIs" }
        ],
        "Cloud & DevOps": [
            { name: "AWS", desc: "Comprehensive cloud platform" },
            { name: "Docker", desc: "Containerization platform" },
            { name: "Kubernetes", desc: "Container orchestration system" },
            { name: "CI/CD", desc: "Continuous integration & deployment" },
            { name: "Vercel", desc: "Frontend cloud platform" }
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
        { value: "24/7", label: "THREAT MONITORING" },
        { value: "<5m", label: "DISASTER RECOVERY" }
    ],
    certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "PCI DSS", "AWS Certified"],
    subcategories: [
        {
            title: "Custom Web Application Development",
            slug: "custom-web-application-development",
            heroTitle: "Custom Web Apps Built for Your Vision",
            heroDescription: "Scalable, secure apps with CyberforneX cybersecurity DNA. From prototype to production.",
            heroImage: "/mockup_web_app.webp",
            details: "Fully bespoke web apps using React/Node.js/PostgreSQL. Perfect for startups scaling workflows.",
            features: [
                { icon: "Zap", title: "Progressive Web App (PWA) support", desc: "Reliable, fast, and engaging mobile-first web experiences." },
                { icon: "Code", title: "Web-assembly for speed", desc: "Near-native performance for intense browser computations." },
                { icon: "Lock", title: "Blockchain auth integration", desc: "Decentralized, untamperable authentication mechanisms." },
                { icon: "Smartphone", title: "AI chatbots embedded", desc: "Intelligent, context-aware user assistance built right in." },
                { icon: "Activity", title: "Edge computing deployment", desc: "Global distribution for minimal latency and maximum uptime." },
                { icon: "ShieldCheck", title: "SOC 3 audited code", desc: "Rigorously tested and certified security architectures." }
            ],
            process: [
                { step: "Requirements", title: "Requirements", desc: "Defining the scope and technical needs." },
                { step: "2. Design", title: "Design", desc: "UI/UX wireframing and prototyping." },
                { step: "3. Develop", title: "Develop", desc: "Agile engineering and iterative builds." },
                { step: "4. Secure", title: "Secure", desc: "Rigorous penetration testing." },
                { step: "5. Deploy", title: "Deploy", desc: "Launch and ongoing optimization." }
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
            title: "UI/UX Design & Prototyping",
            slug: "ui-ux-design-prototyping",
            heroTitle: "Interfaces That Convert & Delight",
            heroDescription: "Human-centered design systems engineered for maximum engagement and conversion.",
            heroImage: "/mockup_uiux.webp",
            details: "Research-driven UI/UX using Figma, user testing, and accessibility-first design principles for enterprise products.",
            features: [
                { icon: "Layout", title: "High-fidelity prototyping", desc: "Interactive Figma prototypes with micro-animations and transitions." },
                { icon: "Target", title: "User research & testing", desc: "A/B testing and heatmap analysis to validate every design decision." },
                { icon: "Smartphone", title: "Responsive design systems", desc: "Pixel-perfect layouts across mobile, tablet, and desktop." },
                { icon: "Code", title: "Design-to-code handoff", desc: "Developer-ready specs with precise spacing and component tokens." },
                { icon: "Activity", title: "Accessibility (WCAG 2.1)", desc: "AA-compliant designs ensuring inclusivity for all users." },
                { icon: "ShieldCheck", title: "Brand consistency audits", desc: "Systematic reviews ensuring every pixel aligns with brand guidelines." }
            ],
            process: [
                { step: "01", title: "Discovery", desc: "Stakeholder interviews and competitive analysis." },
                { step: "02", title: "Wireframe", desc: "Low-fidelity layouts mapping core user flows." },
                { step: "03", title: "Prototype", desc: "Interactive high-fidelity mock-ups for testing." },
                { step: "04", title: "Validate", desc: "Usability testing with real target users." },
                { step: "05", title: "Handoff", desc: "Developer-ready assets and design system documentation." }
            ],
            portfolio: [
                { title: "Banking App Redesign", metrics: [{ label: "Conversion Lift", value: "42%" }, { label: "Task Completion", value: "95%" }] },
                { title: "Healthcare Patient Portal", metrics: [{ label: "User Satisfaction", value: "4.8/5" }, { label: "Onboarding Time", value: "-60%" }] },
                { title: "E-Commerce Checkout Flow", metrics: [{ label: "Cart Abandonment", value: "-35%" }, { label: "Revenue Impact", value: "+$1.2M" }] }
            ]
        },
        {
            title: "SaaS Platform Development",
            slug: "saas-platform-development",
            heroTitle: "SaaS Built for Scale & Revenue",
            heroDescription: "Multi-tenant cloud platforms engineered for recurring revenue and infinite scalability.",
            heroImage: "/mockup_saas.webp",
            details: "End-to-end SaaS architecture with multi-tenancy, subscription billing, and enterprise-grade security.",
            features: [
                { icon: "Database", title: "Multi-tenant architecture", desc: "Isolated, secure data structures for every customer instance." },
                { icon: "Zap", title: "Stripe & billing integration", desc: "Automated subscription management with usage-based pricing." },
                { icon: "Activity", title: "Auto-scaling infrastructure", desc: "Cloud-native backends that scale with zero manual intervention." },
                { icon: "Lock", title: "Role-based access control", desc: "Granular permissions for admins, managers, and end-users." },
                { icon: "Code", title: "Webhook & event systems", desc: "Real-time event-driven pipelines for third-party integrations." },
                { icon: "ShieldCheck", title: "SOC 2 compliant pipelines", desc: "Audit-ready infrastructure meeting enterprise compliance standards." }
            ],
            process: [
                { step: "01", title: "Market Fit", desc: "Validating product-market fit and feature prioritization." },
                { step: "02", title: "Architecture", desc: "Designing scalable multi-tenant data models." },
                { step: "03", title: "MVP Build", desc: "Shipping a minimum lovable product in 8 weeks." },
                { step: "04", title: "Iterate", desc: "User feedback loops and rapid feature shipping." },
                { step: "05", title: "Scale", desc: "Auto-scaling infrastructure and global CDN deployment." }
            ],
            portfolio: [
                { title: "HR Tech SaaS Platform", metrics: [{ label: "Active Tenants", value: "2,500+" }, { label: "MRR Growth", value: "180%" }] },
                { title: "Project Management Tool", metrics: [{ label: "DAU", value: "50K+" }, { label: "Uptime", value: "99.99%" }] },
                { title: "EdTech Learning Platform", metrics: [{ label: "Students Served", value: "1M+" }, { label: "NPS Score", value: "72" }] }
            ]
        },
        {
            title: "API Development & Integration",
            slug: "api-development-integration",
            heroTitle: "APIs that Power Your Ecosystem",
            heroDescription: "Secure, lightning-fast APIs connecting your disparate systems into a unified platform.",
            heroImage: "/mockup_api.webp",
            details: "RESTful & GraphQL API design with OAuth 2.0, rate limiting, and comprehensive Swagger documentation.",
            features: [
                { icon: "Code", title: "REST & GraphQL APIs", desc: "Modern API standards tailored to your data architecture." },
                { icon: "Shield", title: "OAuth 2.0 & JWT security", desc: "Industry-standard token-based authentication and authorization." },
                { icon: "FileText", title: "Auto-generated docs", desc: "Swagger/OpenAPI specs with interactive developer playgrounds." },
                { icon: "Zap", title: "Rate limiting & throttling", desc: "Protecting your endpoints from abuse and DDoS attacks." },
                { icon: "Activity", title: "Webhook event streams", desc: "Real-time push notifications for third-party integrations." },
                { icon: "Database", title: "Data transformation layers", desc: "ETL middleware connecting legacy systems to modern stacks." }
            ],
            process: [
                { step: "01", title: "Audit", desc: "Mapping existing systems and integration requirements." },
                { step: "02", title: "Design", desc: "API contract-first design with schema validation." },
                { step: "03", title: "Develop", desc: "Building versioned, backward-compatible endpoints." },
                { step: "04", title: "Test", desc: "Automated integration testing and load testing." },
                { step: "05", title: "Document", desc: "Publishing interactive API docs and SDKs." }
            ],
            portfolio: [
                { title: "Payment Gateway Integration", metrics: [{ label: "Transactions/sec", value: "10K+" }, { label: "Latency", value: "<80ms" }] },
                { title: "Healthcare Data Exchange", metrics: [{ label: "Systems Connected", value: "45+" }, { label: "Compliance", value: "HL7/FHIR" }] },
                { title: "Logistics API Platform", metrics: [{ label: "API Calls/day", value: "5M+" }, { label: "Uptime", value: "99.99%" }] }
            ]
        },
        {
            title: "E-Commerce Solutions",
            slug: "e-commerce-solutions",
            heroTitle: "Digital Storefronts That Sell",
            heroDescription: "High-converting e-commerce platforms with secure checkout and real-time inventory.",
            heroImage: "/mockup_ecommerce.webp",
            details: "Headless commerce with Next.js storefronts, PCI-compliant payments, and AI-powered product recommendations.",
            features: [
                { icon: "Layout", title: "Headless commerce architecture", desc: "Blazing-fast storefronts decoupled from backend systems." },
                { icon: "Lock", title: "PCI-DSS secure checkout", desc: "Enterprise-grade payment processing with fraud detection." },
                { icon: "Target", title: "AI product recommendations", desc: "ML-powered suggestions increasing average order value." },
                { icon: "Database", title: "Real-time inventory sync", desc: "Multi-warehouse stock management across all channels." },
                { icon: "Zap", title: "One-click purchase flows", desc: "Frictionless checkout reducing cart abandonment rates." },
                { icon: "Activity", title: "Analytics & conversion tracking", desc: "End-to-end purchase funnel visibility and optimization." }
            ],
            process: [
                { step: "01", title: "Audit", desc: "Analyzing current sales funnels and drop-off points." },
                { step: "02", title: "Design", desc: "High-converting storefront UX with mobile-first approach." },
                { step: "03", title: "Integrate", desc: "Payment gateways, shipping APIs, and CRM connections." },
                { step: "04", title: "Optimize", desc: "A/B testing and conversion rate optimization." },
                { step: "05", title: "Launch", desc: "Go-live with real-time monitoring and support." }
            ],
            portfolio: [
                { title: "Fashion D2C Brand", metrics: [{ label: "Revenue Growth", value: "250%" }, { label: "Conversion Rate", value: "4.2%" }] },
                { title: "B2B Industrial Marketplace", metrics: [{ label: "SKUs Managed", value: "50K+" }, { label: "Order Volume", value: "3x" }] },
                { title: "Subscription Box Platform", metrics: [{ label: "Subscribers", value: "25K+" }, { label: "Churn Rate", value: "<3%" }] }
            ]
        },
        {
            title: "Cloud-Based Applications",
            slug: "cloud-based-applications",
            heroTitle: "Cloud-Native Apps at Scale",
            heroDescription: "Serverless, containerized applications deployed across AWS, Azure, and GCP.",
            heroImage: "/mockup_cloud_app.webp",
            details: "Cloud-native development with serverless functions, Kubernetes orchestration, and multi-region deployments.",
            features: [
                { icon: "Database", title: "Serverless architecture", desc: "Pay-per-execution compute with infinite auto-scaling." },
                { icon: "Activity", title: "CI/CD automation", desc: "Zero-downtime deployments with automated testing pipelines." },
                { icon: "ShieldCheck", title: "Multi-region redundancy", desc: "Geographically distributed deployments for 99.99% uptime." },
                { icon: "Lock", title: "Cloud IAM & encryption", desc: "Fine-grained access control with at-rest and in-transit encryption." },
                { icon: "Code", title: "Infrastructure as code", desc: "Terraform and Pulumi for reproducible cloud environments." },
                { icon: "Zap", title: "Edge computing nodes", desc: "Low-latency processing at CDN edge locations worldwide." }
            ],
            process: [
                { step: "01", title: "Assess", desc: "Cloud readiness assessment and migration planning." },
                { step: "02", title: "Architect", desc: "Designing cloud-native service mesh architecture." },
                { step: "03", title: "Containerize", desc: "Docker packaging and Kubernetes orchestration." },
                { step: "04", title: "Deploy", desc: "Multi-region deployment with auto-scaling policies." },
                { step: "05", title: "Monitor", desc: "Observability stack with alerts and cost optimization." }
            ],
            portfolio: [
                { title: "Media Streaming Platform", metrics: [{ label: "Concurrent Users", value: "100K+" }, { label: "Latency", value: "<30ms" }] },
                { title: "IoT Data Pipeline", metrics: [{ label: "Events/sec", value: "1M+" }, { label: "Cost Reduction", value: "60%" }] },
                { title: "Enterprise CRM Migration", metrics: [{ label: "Uptime", value: "99.999%" }, { label: "Migration Time", value: "4 weeks" }] }
            ]
        }
    ]
};
