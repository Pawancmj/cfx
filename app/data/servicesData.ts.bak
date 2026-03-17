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

export const servicesData: Record<string, ServiceCategory> = {
    "web-app-development": {
        title: "Web & App Development",
        slug: "web-app-development",
        heroDescription: "Build scalable, secure, and beautiful digital experiences.",
        heroImage: "/hero_web_app.png",
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
                heroImage: "/mockup_web_app.png",
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
                heroImage: "/mockup_enterprise.png",
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
                heroImage: "/mockup_mobile.png",
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
                heroImage: "/mockup_uiux.png",
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
                heroImage: "/mockup_saas.png",
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
                heroImage: "/mockup_api.png",
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
                heroImage: "/mockup_ecommerce.png",
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
                heroImage: "/mockup_cloud_app.png",
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
    },
    "cybersecurity": {
        title: "Cybersecurity",
        slug: "cybersecurity",
        heroDescription: "Protect your digital assets with military-grade security protocols.",
        heroImage: "/hero_cybersecurity.png",
        overview: "Comprehensive threat detection, risk assessment, and incident response to keep your operations secure.",
        whyChooseUs: [
            { title: "Zero-Day Intelligence", desc: "Proactive monitoring to identify and neutralize threats before they execute.", icon: "Target" },
            { title: "Certified Experts", desc: "Our team consists of CEH, CISSP, and OSCP certified security professionals.", icon: "ShieldCheck" },
            { title: "24/7 Global SOC", desc: "Round-the-clock monitoring and rapid incident response capabilities.", icon: "Activity" }
        ],
        testimonials: [
            {
                content: "After a major breach attempt, CyberForenX stabilized our entire network within 4 hours. Their incident response is unmatched.",
                author: "Robert Taylor",
                role: "CIO, Apex Bank",
                rating: 5
            },
            {
                content: "The most thorough VAPT we've ever had. They found critical vulnerabilities that our previous providers had missed for years.",
                author: "Lisa Moore",
                role: "Security Lead, HealthLink Systems",
                rating: 5
            },
            {
                content: "Military-grade protection and professional advisory. They helped us achieve SOC2 compliance in record time.",
                author: "David Vane",
                role: "CEO, SecureData Solutions",
                rating: 5
            }
        ],
        process: [
            { step: "01", title: "Assessment", desc: "Deep-dive vulnerability scanning and penetration testing of your infrastructure." },
            { step: "02", title: "Strategy", desc: "Development of a customized security architecture and risk mitigation plan." },
            { step: "03", title: "Remediation", desc: "Patching vulnerabilities, implementing WAFs, and hardening systems." },
            { step: "04", title: "Monitoring", desc: "Continuous 24/7 threat hunting and compliance management." }
        ],
        technologies: {
            "SIEM & Monitoring": [
                { name: "Splunk", desc: "Data platform for security" },
                { name: "CrowdStrike", desc: "Endpoint security platform" },
                { name: "QRadar", desc: "Enterprise SIEM solution" },
                { name: "Elastic SIEM", desc: "Security intelligence platform" }
            ],
            "Penetration Testing": [
                { name: "Kali Linux", desc: "Advanced penetration testing OS" },
                { name: "Burp Suite", desc: "Web vulnerability scanner" },
                { name: "Metasploit", desc: "Penetration testing framework" },
                { name: "Nmap", desc: "Network discovery & security auditing" }
            ],
            "Network Analysis": [
                { name: "Wireshark", desc: "Network protocol analyzer" },
                { name: "Snort", desc: "Network intrusion detection" },
                { name: "Suricata", desc: "Network threat detection engine" },
                { name: "Zeek", desc: "Network security monitor" }
            ],
            "Cloud Security": [
                { name: "AWS Security Hub", desc: "Cloud security posture management" },
                { name: "Azure Sentinel", desc: "Cloud-native SIEM" },
                { name: "GCP Security", desc: "Google Cloud security tools" },
                { name: "Tenable", desc: "Vulnerability management platform" }
            ]
        },
        metrics: [
            { value: "100%", label: "THREAT DETECTION" },
            { value: "ISO 27001", label: "CERTIFIED EXPERTS" },
            { value: "24/7", label: "ACTIVE MITIGATION" },
            { value: "<1m", label: "INCIDENT RESPONSE" }
        ],
        certifications: ["CEH Certified", "CISSP", "OSCP", "NIST Framework", "HIPAA Compliant"],
        subcategories: [
            {
                title: "Cyber Risk Assessment",
                slug: "cyber-risk-assessment",
                heroTitle: "Know Your Risk Before Attackers Do",
                heroDescription: "Comprehensive vulnerability mapping and threat intelligence for proactive defense.",
                heroImage: "/mockup_risk.png",
                details: "Deep-dive risk assessments covering infrastructure, applications, and human factors with actionable remediation roadmaps.",
                features: [
                    { icon: "Search", title: "Full-spectrum scanning", desc: "Comprehensive analysis of your entire digital footprint and attack surface." },
                    { icon: "FileText", title: "Executive risk reports", desc: "Board-ready reports translating technical risk into business impact." },
                    { icon: "ShieldCheck", title: "Compliance mapping", desc: "Alignment with ISO 27001, HIPAA, SOC 2, and NIST frameworks." },
                    { icon: "Target", title: "Threat modeling", desc: "STRIDE and DREAD frameworks to prioritize critical threats." },
                    { icon: "Activity", title: "Continuous monitoring", desc: "Ongoing risk scoring with real-time threat intelligence feeds." },
                    { icon: "Lock", title: "Supply chain risk audit", desc: "Third-party vendor security assessments and scoring." }
                ],
                process: [
                    { step: "01", title: "Scope", desc: "Defining assessment boundaries and critical assets." },
                    { step: "02", title: "Discover", desc: "Automated and manual vulnerability scanning." },
                    { step: "03", title: "Analyze", desc: "Risk scoring and threat prioritization." },
                    { step: "04", title: "Report", desc: "Delivering actionable remediation roadmaps." },
                    { step: "05", title: "Monitor", desc: "Continuous risk posture tracking." }
                ],
                portfolio: [
                    { title: "Banking Infrastructure Audit", metrics: [{ label: "Vulnerabilities Found", value: "340+" }, { label: "Critical Fixed", value: "100%" }] },
                    { title: "Healthcare Network Assessment", metrics: [{ label: "HIPAA Gaps Closed", value: "28" }, { label: "Risk Reduction", value: "85%" }] },
                    { title: "E-Commerce Platform Review", metrics: [{ label: "Attack Surface", value: "-60%" }, { label: "Compliance", value: "PCI-DSS" }] }
                ]
            },
            {
                title: "Vulnerability Assessment & Penetration Testing",
                slug: "vulnerability-assessment",
                heroTitle: "Elite Ethical Hacking at Scale",
                heroDescription: "Rigorous offensive security testing by certified ethical hackers to validate your defenses.",
                heroImage: "/mockup_vapt.png",
                details: "Black-box, grey-box, and white-box penetration testing across web, mobile, network, and cloud infrastructure.",
                features: [
                    { icon: "Target", title: "Red team simulations", desc: "Realistic adversarial attacks mimicking nation-state threat actors." },
                    { icon: "Lock", title: "Exploit validation", desc: "Proof-of-concept demonstrations for every identified vulnerability." },
                    { icon: "Activity", title: "Continuous pentesting", desc: "Ongoing assessments integrated into your CI/CD pipeline." },
                    { icon: "Code", title: "Source code review", desc: "Manual SAST identifying logic flaws automated tools miss." },
                    { icon: "Shield", title: "Social engineering tests", desc: "Phishing campaigns and physical security assessments." },
                    { icon: "Search", title: "API security testing", desc: "OWASP API Top 10 coverage for all your endpoints." }
                ],
                process: [
                    { step: "01", title: "Reconnaissance", desc: "Passive and active intelligence gathering." },
                    { step: "02", title: "Exploitation", desc: "Controlled attacks to validate vulnerabilities." },
                    { step: "03", title: "Escalation", desc: "Privilege escalation and lateral movement testing." },
                    { step: "04", title: "Report", desc: "Detailed findings with CVSS scoring and PoC evidence." },
                    { step: "05", title: "Retest", desc: "Validating patches and remediation effectiveness." }
                ],
                portfolio: [
                    { title: "Fortune 500 Financial Institution", metrics: [{ label: "Critical Vulns", value: "47 Found" }, { label: "Patch Rate", value: "100%" }] },
                    { title: "Government Agency Network", metrics: [{ label: "Systems Tested", value: "2,000+" }, { label: "Zero-Days", value: "3 Found" }] },
                    { title: "SaaS Platform Pentest", metrics: [{ label: "OWASP Coverage", value: "100%" }, { label: "Time to Fix", value: "<72h" }] }
                ]
            },
            {
                title: "Security Architecture Review",
                slug: "security-architecture-review",
                heroTitle: "Fortify Your Digital Infrastructure",
                heroDescription: "Structural evaluation and hardening of your entire IT security architecture.",
                heroImage: "/mockup_arch_review.png",
                details: "End-to-end architecture reviews aligned with NIST, CIS, and Zero Trust frameworks for resilient infrastructure.",
                features: [
                    { icon: "Search", title: "Framework alignment", desc: "Gap analysis against NIST CSF, CIS Controls, and ISO 27001." },
                    { icon: "Layout", title: "Network topology review", desc: "In-depth analysis of segmentation, firewalls, and data flows." },
                    { icon: "Lock", title: "Cryptography audit", desc: "Validating encryption standards across all environments." },
                    { icon: "Shield", title: "Zero Trust assessment", desc: "Evaluating identity-centric security architecture maturity." },
                    { icon: "Database", title: "Data flow mapping", desc: "Tracing sensitive data movement across systems and borders." },
                    { icon: "Activity", title: "Resilience testing", desc: "Disaster recovery and business continuity validation." }
                ],
                process: [
                    { step: "01", title: "Inventory", desc: "Cataloging all assets, services, and data stores." },
                    { step: "02", title: "Analyze", desc: "Reviewing architecture against security frameworks." },
                    { step: "03", title: "Model", desc: "Threat modeling and attack path analysis." },
                    { step: "04", title: "Recommend", desc: "Prioritized hardening recommendations." },
                    { step: "05", title: "Validate", desc: "Post-implementation verification testing." }
                ],
                portfolio: [
                    { title: "Multi-Cloud Enterprise Review", metrics: [{ label: "Misconfigs Fixed", value: "180+" }, { label: "Compliance", value: "SOC 2" }] },
                    { title: "Manufacturing OT/IT Review", metrics: [{ label: "Attack Paths", value: "-90%" }, { label: "Segmentation", value: "100%" }] },
                    { title: "Fintech Zero Trust Migration", metrics: [{ label: "Breach Risk", value: "-75%" }, { label: "Framework", value: "NIST CSF" }] }
                ]
            },
            {
                title: "Network & Application Security",
                slug: "network-application-security",
                heroTitle: "Perimeter to Code-Level Defense",
                heroDescription: "Multi-layered protection against sophisticated network and application-level threats.",
                heroImage: "/mockup_netsec.png",
                details: "WAF deployment, DDoS mitigation, secure code reviews, and network hardening for uninterrupted operations.",
                features: [
                    { icon: "Shield", title: "WAF implementation", desc: "Web Application Firewalls blocking OWASP Top 10 attacks." },
                    { icon: "Code", title: "Secure code review", desc: "Manual and automated analysis of proprietary source code." },
                    { icon: "Activity", title: "DDoS protection", desc: "Multi-layer mitigation against volumetric and application attacks." },
                    { icon: "Lock", title: "TLS/SSL hardening", desc: "Enforcing modern cipher suites and certificate management." },
                    { icon: "Search", title: "IDS/IPS deployment", desc: "Intrusion detection and prevention at network boundaries." },
                    { icon: "Zap", title: "Micro-segmentation", desc: "Isolating critical workloads to contain lateral movement." }
                ],
                process: [
                    { step: "01", title: "Map", desc: "Network topology and application inventory mapping." },
                    { step: "02", title: "Assess", desc: "Vulnerability scanning and traffic analysis." },
                    { step: "03", title: "Harden", desc: "Deploying WAFs, IDS/IPS, and firewall rules." },
                    { step: "04", title: "Test", desc: "Penetration testing to validate defenses." },
                    { step: "05", title: "Monitor", desc: "24/7 traffic analysis and anomaly detection." }
                ],
                portfolio: [
                    { title: "E-Commerce DDoS Defense", metrics: [{ label: "Attacks Blocked", value: "10K+/mo" }, { label: "Downtime", value: "0 min" }] },
                    { title: "Banking App Security", metrics: [{ label: "Code Vulns Fixed", value: "200+" }, { label: "OWASP Score", value: "A+" }] },
                    { title: "Enterprise Network Hardening", metrics: [{ label: "Lateral Movement", value: "-95%" }, { label: "Response Time", value: "<5min" }] }
                ]
            },
            {
                title: "Compliance & Governance Support",
                slug: "compliance-governance-support",
                heroTitle: "Navigate Regulatory Complexity",
                heroDescription: "Expert guidance through complex regulatory landscapes with audit-ready deliverables.",
                heroImage: "/mockup_compliance.png",
                details: "End-to-end compliance programs for GDPR, HIPAA, PCI-DSS, SOC 2, and DPDP with policy creation and audit prep.",
                features: [
                    { icon: "FileText", title: "Policy framework creation", desc: "Drafting comprehensive Information Security Policies and procedures." },
                    { icon: "ShieldCheck", title: "Audit preparation", desc: "Readiness assessments and evidence collection for external audits." },
                    { icon: "Target", title: "GDPR/CCPA/DPDP compliance", desc: "Data privacy programs ensuring global regulatory adherence." },
                    { icon: "Lock", title: "PCI-DSS certification", desc: "Achieving and maintaining payment card industry compliance." },
                    { icon: "Search", title: "Gap analysis", desc: "Identifying compliance shortfalls with prioritized remediation." },
                    { icon: "Activity", title: "Continuous compliance", desc: "Automated monitoring tools tracking compliance drift in real-time." }
                ],
                process: [
                    { step: "01", title: "Assess", desc: "Current compliance posture and gap identification." },
                    { step: "02", title: "Design", desc: "Creating policies, procedures, and control frameworks." },
                    { step: "03", title: "Implement", desc: "Deploying technical and administrative controls." },
                    { step: "04", title: "Audit", desc: "Internal audit simulation and evidence preparation." },
                    { step: "05", title: "Maintain", desc: "Ongoing compliance monitoring and annual reviews." }
                ],
                portfolio: [
                    { title: "Healthcare SOC 2 Certification", metrics: [{ label: "Time to Certify", value: "90 days" }, { label: "Findings", value: "0 Critical" }] },
                    { title: "Fintech GDPR Program", metrics: [{ label: "Data Subjects", value: "5M+" }, { label: "Fine Risk", value: "-100%" }] },
                    { title: "Retail PCI-DSS Compliance", metrics: [{ label: "Stores Covered", value: "500+" }, { label: "Audit Result", value: "Pass" }] }
                ]
            },
            {
                title: "Threat Monitoring & Incident Response",
                slug: "threat-monitoring-incident-response",
                heroTitle: "24/7 Vigilance & Rapid Response",
                heroDescription: "Round-the-clock threat detection with military-grade incident response capabilities.",
                heroImage: "/mockup_soc.png",
                details: "Global SOC operations with SIEM integration, threat hunting, and automated incident response playbooks.",
                features: [
                    { icon: "Activity", title: "24/7 SOC monitoring", desc: "Continuous surveillance by our Security Operations Center analysts." },
                    { icon: "Zap", title: "Rapid containment", desc: "Immediate isolation of compromised assets within minutes." },
                    { icon: "Search", title: "Root cause analysis", desc: "Detailed forensic investigation and timeline reconstruction." },
                    { icon: "Shield", title: "Threat intelligence feeds", desc: "Real-time IOC integration from global threat databases." },
                    { icon: "Code", title: "SOAR automation", desc: "Automated playbooks for common incident response scenarios." },
                    { icon: "Target", title: "Threat hunting", desc: "Proactive searching for hidden adversaries in your network." }
                ],
                process: [
                    { step: "01", title: "Onboard", desc: "SIEM integration and baseline behavior profiling." },
                    { step: "02", title: "Detect", desc: "Real-time alerting on suspicious activities." },
                    { step: "03", title: "Contain", desc: "Immediate isolation and threat neutralization." },
                    { step: "04", title: "Investigate", desc: "Root cause analysis and impact assessment." },
                    { step: "05", title: "Recover", desc: "System restoration and defense hardening." }
                ],
                portfolio: [
                    { title: "Global Bank SOC Deployment", metrics: [{ label: "MTTR", value: "<15min" }, { label: "Threats Blocked", value: "50K+/mo" }] },
                    { title: "Ransomware Incident Response", metrics: [{ label: "Recovery Time", value: "4 hours" }, { label: "Data Loss", value: "0 bytes" }] },
                    { title: "Enterprise Threat Hunting", metrics: [{ label: "APTs Detected", value: "12" }, { label: "Dwell Time", value: "<24h" }] }
                ]
            },
            {
                title: "Security Policy & Advisory",
                slug: "security-policy-advisory",
                heroTitle: "Strategic Security Leadership",
                heroDescription: "Virtual CISO services and executive-level security strategy without full-time overhead.",
                heroImage: "/mockup_advisory.png",
                details: "vCISO services, board-level reporting, security awareness training, and strategic roadmap development.",
                features: [
                    { icon: "Target", title: "Virtual CISO (vCISO)", desc: "Executive security leadership on a fractional basis." },
                    { icon: "FileText", title: "Board-level reporting", desc: "Translating technical risks into business impact for stakeholders." },
                    { icon: "ShieldCheck", title: "Security awareness training", desc: "Combating social engineering through employee education programs." },
                    { icon: "Layout", title: "Security roadmap design", desc: "Multi-year strategic plans aligned with business objectives." },
                    { icon: "Lock", title: "Vendor risk management", desc: "Third-party security assessment and ongoing monitoring." },
                    { icon: "Activity", title: "Tabletop exercises", desc: "Incident response simulations testing organizational readiness." }
                ],
                process: [
                    { step: "01", title: "Assess", desc: "Current security maturity and organizational gaps." },
                    { step: "02", title: "Strategize", desc: "Developing a multi-year security transformation roadmap." },
                    { step: "03", title: "Implement", desc: "Rolling out policies, training, and governance frameworks." },
                    { step: "04", title: "Train", desc: "Security awareness programs for all employees." },
                    { step: "05", title: "Review", desc: "Quarterly strategy reviews and board presentations." }
                ],
                portfolio: [
                    { title: "Series B Startup vCISO", metrics: [{ label: "SOC 2 Timeline", value: "60 days" }, { label: "Cost vs FTE", value: "-70%" }] },
                    { title: "Enterprise Training Program", metrics: [{ label: "Phishing Click Rate", value: "-85%" }, { label: "Employees Trained", value: "10K+" }] },
                    { title: "Board Security Advisory", metrics: [{ label: "Risk Visibility", value: "100%" }, { label: "Budget Secured", value: "$5M" }] }
                ]
            },
            {
                title: "Cloud Security Solutions",
                slug: "cloud-security-solutions",
                heroTitle: "Secure Your Cloud, Everywhere",
                heroDescription: "Comprehensive security across AWS, Azure, and GCP multi-cloud environments.",
                heroImage: "/mockup_cloud_sec.png",
                details: "Cloud security posture management, container security, and data loss prevention across all major cloud providers.",
                features: [
                    { icon: "Search", title: "Misconfiguration detection", desc: "Identifying exposed buckets, overly permissive IAM, and open ports." },
                    { icon: "Shield", title: "Container & K8s security", desc: "Securing Docker images and Kubernetes cluster configurations." },
                    { icon: "Lock", title: "Data loss prevention", desc: "Preventing sensitive data exfiltration from cloud environments." },
                    { icon: "Activity", title: "CSPM continuous scanning", desc: "Real-time cloud security posture management and drift detection." },
                    { icon: "Code", title: "IaC security scanning", desc: "Scanning Terraform and CloudFormation templates before deployment." },
                    { icon: "Database", title: "Cloud workload protection", desc: "Runtime security for serverless, VMs, and container workloads." }
                ],
                process: [
                    { step: "01", title: "Discover", desc: "Inventorying all cloud assets and configurations." },
                    { step: "02", title: "Assess", desc: "CIS benchmark scanning and compliance checks." },
                    { step: "03", title: "Remediate", desc: "Auto-fixing misconfigurations and hardening policies." },
                    { step: "04", title: "Monitor", desc: "Continuous CSPM with real-time alerting." },
                    { step: "05", title: "Govern", desc: "Policy-as-code enforcement and compliance reporting." }
                ],
                portfolio: [
                    { title: "Multi-Cloud Enterprise Security", metrics: [{ label: "Misconfigs Fixed", value: "500+" }, { label: "Cloud Accounts", value: "50+" }] },
                    { title: "Kubernetes Security Program", metrics: [{ label: "Clusters Secured", value: "30+" }, { label: "CVEs Patched", value: "200+" }] },
                    { title: "Cloud Migration Security", metrics: [{ label: "Compliance", value: "SOC 2 + ISO" }, { label: "Incidents", value: "0 Post-Migration" }] }
                ]
            }
        ]
    },
    "digital-forensics": {
        title: "Digital Forensics",
        slug: "digital-forensics",
        heroDescription: "Uncover hidden truths with precise digital evidence investigation.",
        heroImage: "/hero_forensics.png",
        overview: "Our certified forensic investigators utilize state-of-the-art technology to extract, analyze, and preserve electronic evidence for litigation, compliance, and incident response.",
        whyChooseUs: [
            { title: "Defensible Evidence", desc: "We maintain strict chain-of-custody protocols ensuring all findings hold up in court.", icon: "Shield" },
            { title: "Rapid Deployment", desc: "Our emergency response teams can be mobilized within hours of a cyber incident.", icon: "Zap" },
            { title: "Advanced Extraction", desc: "Proprietary methods to recover hidden, deleted, or encrypted data from any device.", icon: "Database" }
        ],
        testimonials: [
            {
                content: "Their expert witness testimony was the turning point in our litigation. Extreme technical depth explained simply.",
                author: "Katherine Ross",
                role: "Senior Partner, Ross & Associates Law",
                rating: 5
            },
            {
                content: "Recovered encrypted evidence that we thought was gone forever. A truly elite forensic capability.",
                author: "William Grant",
                role: "Director of Investigations, Federal Agency",
                rating: 5
            },
            {
                content: "Impeccable chain of custody and professional reporting. CyberForenX is our first call for any digital investigation.",
                author: "Marcus Thorne",
                role: "Head of Compliance, Fortune 500 Retailer",
                rating: 5
            }
        ],
        process: [
            { step: "01", title: "Preservation", desc: "Securing the device and creating a forensically sound bit-by-bit image." },
            { step: "02", title: "Collection", desc: "Extracting volatile memory and hard drive data without altering the source." },
            { step: "03", title: "Analysis", desc: "Deep-dive investigation to reconstruct timelines and identify anomalies." },
            { step: "04", title: "Reporting", desc: "Delivering a comprehensive, courtroom-ready expert witness report." }
        ],
        technologies: {
            "Disk & Image": [
                { name: "EnCase", desc: "Digital forensics suite" },
                { name: "FTK Imager", desc: "Forensic image creation tool" },
                { name: "X-Ways Forensics", desc: "Advanced data recovery" },
                { name: "dd / dcfldd", desc: "Command-line secure copying" }
            ],
            "Mobile Forensics": [
                { name: "Cellebrite", desc: "Mobile device extraction" },
                { name: "Magnet AXIOM", desc: "Digital investigation platform" },
                { name: "Oxygen Forensic", desc: "Mobile device data extraction" },
                { name: "MOBILedit", desc: "Mobile forensics tool" }
            ],
            "Memory & Network": [
                { name: "Volatility", desc: "Memory forensics framework" },
                { name: "Wireshark", desc: "Network protocol analyzer" },
                { name: "NetworkMiner", desc: "Network forensics analysis" },
                { name: "Autopsy", desc: "Digital forensics platform" }
            ],
            "Malware Analysis": [
                { name: "IDA Pro", desc: "Reverse engineering tool" },
                { name: "Ghidra", desc: "Software reverse engineering" },
                { name: "YARA", desc: "Malware identification tool" },
                { name: "Cuckoo Sandbox", desc: "Automated malware analysis" }
            ]
        },
        metrics: [
            { value: "100%", label: "CHAIN OF CUSTODY" },
            { value: "0", label: "DATA TAMPERING" },
            { value: "48h", label: "INITIAL REPORT" },
            { value: "GIAC", label: "CERTIFIED ANALYSTS" }
        ],
        certifications: ["GIAC Certified Forensic Analyst (GCFA)", "EnCE", "CFCE", "ISO 27037", "Law Enforcement Trusted"],
        subcategories: [
            {
                title: "Digital Evidence Collection",
                slug: "digital-evidence-collection",
                heroTitle: "Forensically Sound Data Acquisition",
                heroDescription: "Court-admissible evidence collection from computers, servers, and cloud environments.",
                heroImage: "/mockup_evidence.png",
                details: "Bit-for-bit imaging, live memory capture, and cloud evidence preservation maintaining strict chain-of-custody protocols.",
                features: [
                    { icon: "Database", title: "Bit-for-bit disk imaging", desc: "Creating forensically exact replicas of hard drives for analysis." },
                    { icon: "Activity", title: "Live RAM capture", desc: "Extracting volatile memory data before system shutdown." },
                    { icon: "Lock", title: "Chain of custody protocols", desc: "Meticulous documentation ensuring evidence admissibility." },
                    { icon: "Shield", title: "Cloud evidence preservation", desc: "Collecting data from AWS, Azure, and GCP environments." },
                    { icon: "Code", title: "Hash verification (MD5/SHA)", desc: "Cryptographic proof that evidence was not altered." },
                    { icon: "FileText", title: "Evidence cataloging", desc: "Comprehensive inventory of all collected digital artifacts." }
                ],
                process: [
                    { step: "01", title: "Secure", desc: "Isolating devices and preventing data modification." },
                    { step: "02", title: "Image", desc: "Creating forensically sound bit-by-bit copies." },
                    { step: "03", title: "Verify", desc: "Hash validation of all acquired evidence." },
                    { step: "04", title: "Catalog", desc: "Comprehensive evidence inventory and documentation." },
                    { step: "05", title: "Store", desc: "Secure, tamper-proof evidence storage." }
                ],
                portfolio: [
                    { title: "Corporate Fraud Investigation", metrics: [{ label: "Devices Imaged", value: "200+" }, { label: "Evidence Integrity", value: "100%" }] },
                    { title: "Government Agency Collection", metrics: [{ label: "Data Collected", value: "50TB+" }, { label: "Court Admissible", value: "100%" }] },
                    { title: "Cloud Evidence Preservation", metrics: [{ label: "Accounts Preserved", value: "500+" }, { label: "Chain of Custody", value: "Maintained" }] }
                ]
            },
            {
                title: "Incident Investigation & Analysis",
                slug: "incident-investigation-analysis",
                heroTitle: "Uncover the Who, What & How",
                heroDescription: "Precision forensic analysis determining the full scope and origin of security breaches.",
                heroImage: "/mockup_investigation.png",
                details: "Timeline reconstruction, attacker attribution, and comprehensive breach scope assessment for incident response.",
                features: [
                    { icon: "Search", title: "Timeline reconstruction", desc: "Mapping attacker movements with second-by-second precision." },
                    { icon: "ShieldCheck", title: "Root cause identification", desc: "Determining the exact vulnerability exploited in the breach." },
                    { icon: "Target", title: "Breach scope assessment", desc: "Identifying precisely what data and systems were compromised." },
                    { icon: "Activity", title: "Lateral movement analysis", desc: "Tracing attacker pathways through your network infrastructure." },
                    { icon: "Code", title: "Artifact examination", desc: "Analyzing registry, prefetch, and event logs for indicators." },
                    { icon: "Lock", title: "Attacker attribution", desc: "Linking TTPs to known threat actor groups and campaigns." }
                ],
                process: [
                    { step: "01", title: "Triage", desc: "Rapid assessment of incident severity and scope." },
                    { step: "02", title: "Collect", desc: "Gathering logs, memory dumps, and disk images." },
                    { step: "03", title: "Analyze", desc: "Deep forensic examination of all evidence." },
                    { step: "04", title: "Correlate", desc: "Cross-referencing findings with threat intelligence." },
                    { step: "05", title: "Report", desc: "Delivering comprehensive investigation findings." }
                ],
                portfolio: [
                    { title: "Ransomware Attack Investigation", metrics: [{ label: "Root Cause", value: "Found in 6h" }, { label: "Data Recovery", value: "98%" }] },
                    { title: "Insider Threat Investigation", metrics: [{ label: "Evidence Items", value: "10K+" }, { label: "Attribution", value: "Confirmed" }] },
                    { title: "APT Breach Analysis", metrics: [{ label: "Dwell Time Mapped", value: "180 days" }, { label: "IOCs Generated", value: "500+" }] }
                ]
            },
            {
                title: "Data Recovery & Preservation",
                slug: "data-recovery-preservation",
                heroTitle: "Recover What Others Can't",
                heroDescription: "Extracting deleted, encrypted, or physically damaged data with elite forensic methods.",
                heroImage: "/mockup_recovery.png",
                details: "Advanced file carving, ransomware decryption attempts, and physical drive repair in cleanroom environments.",
                features: [
                    { icon: "FileText", title: "Deleted file carving", desc: "Reconstructing files from raw disk sectors and unallocated space." },
                    { icon: "Lock", title: "Ransomware recovery", desc: "Decryption attempts and critical backup restoration." },
                    { icon: "Database", title: "Physical drive repair", desc: "Cleanroom recovery from physically damaged storage media." },
                    { icon: "Code", title: "RAID reconstruction", desc: "Rebuilding failed RAID arrays and recovering virtual disks." },
                    { icon: "Shield", title: "Encrypted volume access", desc: "Legal forensic access to BitLocker, FileVault, and VeraCrypt." },
                    { icon: "Activity", title: "Database recovery", desc: "Restoring corrupted SQL, MongoDB, and exchange databases." }
                ],
                process: [
                    { step: "01", title: "Assess", desc: "Evaluating damage severity and recovery probability." },
                    { step: "02", title: "Image", desc: "Creating working copies to protect original media." },
                    { step: "03", title: "Recover", desc: "Applying advanced recovery techniques and tools." },
                    { step: "04", title: "Verify", desc: "Validating recovered data integrity and completeness." },
                    { step: "05", title: "Deliver", desc: "Secure transfer of recovered data to the client." }
                ],
                portfolio: [
                    { title: "Enterprise Ransomware Recovery", metrics: [{ label: "Data Recovered", value: "15TB" }, { label: "Recovery Rate", value: "99.2%" }] },
                    { title: "Water-Damaged Server Farm", metrics: [{ label: "Drives Repaired", value: "48" }, { label: "Data Salvaged", value: "95%" }] },
                    { title: "Deleted Evidence Recovery", metrics: [{ label: "Files Carved", value: "50K+" }, { label: "Court Admitted", value: "100%" }] }
                ]
            },
            {
                title: "Malware & Threat Investigation",
                slug: "malware-threat-investigation",
                heroTitle: "Reverse Engineer Every Threat",
                heroDescription: "Deep analysis of malicious payloads to understand capabilities, origins, and mitigation strategies.",
                heroImage: "/mockup_malware.png",
                details: "Static and dynamic malware analysis, sandboxing, IOC generation, and attacker TTP documentation.",
                features: [
                    { icon: "Code", title: "Static binary analysis", desc: "Disassembling malware without execution to understand structure." },
                    { icon: "Activity", title: "Dynamic sandboxing", desc: "Observing malware behavior in isolated, controlled environments." },
                    { icon: "Shield", title: "IOC generation", desc: "Creating Indicators of Compromise to sweep your entire network." },
                    { icon: "Search", title: "TTP documentation", desc: "Mapping attacker tactics to the MITRE ATT&CK framework." },
                    { icon: "Lock", title: "Encryption analysis", desc: "Analyzing custom encryption algorithms used by threat actors." },
                    { icon: "Target", title: "C2 infrastructure mapping", desc: "Identifying command-and-control servers and communication channels." }
                ],
                process: [
                    { step: "01", title: "Contain", desc: "Isolating the malware sample in a secure environment." },
                    { step: "02", title: "Decompile", desc: "Static analysis and code disassembly." },
                    { step: "03", title: "Execute", desc: "Controlled dynamic analysis in sandboxed environments." },
                    { step: "04", title: "Document", desc: "Comprehensive TTP and IOC documentation." },
                    { step: "05", title: "Remediate", desc: "Providing targeted cleanup and defense recommendations." }
                ],
                portfolio: [
                    { title: "Zero-Day Malware Analysis", metrics: [{ label: "Variants Identified", value: "15" }, { label: "IOCs Generated", value: "300+" }] },
                    { title: "Banking Trojan Investigation", metrics: [{ label: "C2 Servers Found", value: "8" }, { label: "Accounts Saved", value: "$12M" }] },
                    { title: "Ransomware Family Analysis", metrics: [{ label: "Decryption Keys", value: "Found" }, { label: "Network Sweep", value: "100%" }] }
                ]
            },
            {
                title: "Cyber Crime Investigation Support",
                slug: "cyber-crime-investigation-support",
                heroTitle: "Technical Firepower for Legal Teams",
                heroDescription: "Expert forensic support for law enforcement, litigation, and regulatory investigations.",
                heroImage: "/mockup_cybercrime.png",
                details: "Fraud tracing, IP theft investigation, expert witness testimony, and courtroom-ready evidence packages.",
                features: [
                    { icon: "Target", title: "Financial fraud tracing", desc: "Digital trail analysis for cryptocurrency and wire fraud cases." },
                    { icon: "Search", title: "IP theft investigation", desc: "Proving corporate espionage and unauthorized data exfiltration." },
                    { icon: "FileText", title: "Expert witness testimony", desc: "Sworn technical testimony explaining digital evidence in court." },
                    { icon: "Shield", title: "eDiscovery support", desc: "Large-scale document review and privilege analysis." },
                    { icon: "Lock", title: "Dark web monitoring", desc: "Tracking stolen data and credentials on underground markets." },
                    { icon: "Activity", title: "Crypto tracing", desc: "Blockchain analysis tracking cryptocurrency transactions." }
                ],
                process: [
                    { step: "01", title: "Engage", desc: "Initial case assessment and scope definition." },
                    { step: "02", title: "Investigate", desc: "Forensic analysis of all relevant digital evidence." },
                    { step: "03", title: "Document", desc: "Creating courtroom-ready reports and affidavits." },
                    { step: "04", title: "Testify", desc: "Expert witness testimony and cross-examination prep." },
                    { step: "05", title: "Close", desc: "Final evidence packaging and case archiving." }
                ],
                portfolio: [
                    { title: "Multi-Million Dollar Fraud Case", metrics: [{ label: "Funds Traced", value: "$8M" }, { label: "Conviction", value: "Secured" }] },
                    { title: "Corporate Espionage Investigation", metrics: [{ label: "Evidence Items", value: "25K+" }, { label: "Verdict", value: "Favorable" }] },
                    { title: "Cryptocurrency Theft Recovery", metrics: [{ label: "BTC Traced", value: "150+" }, { label: "Recovery Rate", value: "85%" }] }
                ]
            },
            {
                title: "Log Analysis & Event Reconstruction",
                slug: "log-analysis-event-reconstruction",
                heroTitle: "Find the Needle in Billions of Logs",
                heroDescription: "Advanced SIEM analysis and event correlation to reconstruct complex security incidents.",
                heroImage: "/mockup_log_analysis.png",
                details: "Parsing millions of log entries with advanced correlation engines to build precise incident timelines.",
                features: [
                    { icon: "Database", title: "SIEM log aggregation", desc: "Analyzing consolidated logs from firewalls, endpoints, and servers." },
                    { icon: "Activity", title: "Behavioral anomaly detection", desc: "Machine learning-powered identification of suspicious patterns." },
                    { icon: "Layout", title: "Visual timeline creation", desc: "Interactive attack chain visualizations for stakeholder briefings." },
                    { icon: "Search", title: "Cross-source correlation", desc: "Linking events across disparate systems and time zones." },
                    { icon: "Code", title: "Custom parser development", desc: "Building log parsers for proprietary application formats." },
                    { icon: "Zap", title: "Real-time streaming analysis", desc: "Processing live log streams for immediate threat detection." }
                ],
                process: [
                    { step: "01", title: "Ingest", desc: "Collecting and normalizing logs from all sources." },
                    { step: "02", title: "Parse", desc: "Structuring unstructured log data for analysis." },
                    { step: "03", title: "Correlate", desc: "Cross-referencing events across systems and timelines." },
                    { step: "04", title: "Visualize", desc: "Creating interactive timelines and attack chain maps." },
                    { step: "05", title: "Report", desc: "Delivering findings with actionable recommendations." }
                ],
                portfolio: [
                    { title: "Enterprise SIEM Investigation", metrics: [{ label: "Log Lines Analyzed", value: "2B+" }, { label: "Threats Found", value: "23" }] },
                    { title: "Cloud Breach Timeline", metrics: [{ label: "Events Correlated", value: "500M+" }, { label: "Root Cause", value: "Identified" }] },
                    { title: "Compliance Audit Log Review", metrics: [{ label: "Systems Reviewed", value: "150+" }, { label: "Gaps Found", value: "34" }] }
                ]
            },
            {
                title: "Device & Network Forensics",
                slug: "device-network-forensics",
                heroTitle: "Deep Device & Traffic Analysis",
                heroDescription: "Comprehensive forensic examination of mobile devices, IoT, and network communications.",
                heroImage: "/mockup_device_forensics.png",
                details: "Mobile extraction, PCAP analysis, IoT investigation, and network traffic forensics for complete endpoint visibility.",
                features: [
                    { icon: "Smartphone", title: "Mobile device extraction", desc: "Bypassing locks to recover SMS, app data, and location history." },
                    { icon: "Activity", title: "Network packet analysis", desc: "Deep PCAP analysis identifying malicious communications." },
                    { icon: "Zap", title: "IoT device investigation", desc: "Extracting data from smart devices and embedded systems." },
                    { icon: "Lock", title: "Encrypted app analysis", desc: "Decrypting Signal, WhatsApp, and Telegram message databases." },
                    { icon: "Database", title: "GPS & location forensics", desc: "Reconstructing movement patterns from device location data." },
                    { icon: "Search", title: "Deleted data recovery", desc: "Recovering wiped data from mobile and IoT devices." }
                ],
                process: [
                    { step: "01", title: "Acquire", desc: "Secure device acquisition and imaging." },
                    { step: "02", title: "Extract", desc: "Physical and logical data extraction." },
                    { step: "03", title: "Decode", desc: "Parsing app databases and communication logs." },
                    { step: "04", title: "Analyze", desc: "Cross-referencing device data with network traffic." },
                    { step: "05", title: "Report", desc: "Comprehensive findings with visual evidence." }
                ],
                portfolio: [
                    { title: "Corporate Mobile Investigation", metrics: [{ label: "Devices Analyzed", value: "75+" }, { label: "Messages Recovered", value: "100K+" }] },
                    { title: "IoT Breach Forensics", metrics: [{ label: "IoT Devices", value: "500+" }, { label: "Compromised Found", value: "12" }] },
                    { title: "Network Traffic Analysis", metrics: [{ label: "PCAP Data", value: "10TB+" }, { label: "C2 Channels", value: "5 Found" }] }
                ]
            },
            {
                title: "Legal & Compliance Reporting",
                slug: "legal-compliance-reporting",
                heroTitle: "Courtroom-Ready Documentation",
                heroDescription: "Converting complex technical findings into legally defensible, stakeholder-ready reports.",
                heroImage: "/mockup_legal_report.png",
                details: "Expert affidavits, regulatory breach notifications, executive summaries, and complete litigation support packages.",
                features: [
                    { icon: "FileText", title: "Expert affidavits", desc: "Drafting sworn statements of technical facts for court." },
                    { icon: "ShieldCheck", title: "Regulatory disclosures", desc: "GDPR, HIPAA, and SEC breach notification compliance." },
                    { icon: "Layout", title: "Executive summaries", desc: "Board-ready reports translating technical depth simply." },
                    { icon: "Target", title: "Litigation support packages", desc: "Complete evidence bundles with cross-references and exhibits." },
                    { icon: "Lock", title: "Privilege review", desc: "Attorney-client privilege screening of collected data." },
                    { icon: "Search", title: "Deposition preparation", desc: "Technical briefings preparing legal teams for depositions." }
                ],
                process: [
                    { step: "01", title: "Gather", desc: "Compiling all forensic findings and supporting evidence." },
                    { step: "02", title: "Draft", desc: "Creating legally precise technical reports." },
                    { step: "03", title: "Review", desc: "Legal team collaboration and privilege checks." },
                    { step: "04", title: "Finalize", desc: "Court-formatting and evidence exhibit preparation." },
                    { step: "05", title: "Support", desc: "Ongoing testimony and deposition support." }
                ],
                portfolio: [
                    { title: "SEC Investigation Support", metrics: [{ label: "Reports Delivered", value: "12" }, { label: "Accepted by SEC", value: "100%" }] },
                    { title: "GDPR Breach Notification", metrics: [{ label: "Notification Time", value: "<48h" }, { label: "Regulatory Fine", value: "$0" }] },
                    { title: "Class Action Litigation", metrics: [{ label: "Evidence Exhibits", value: "500+" }, { label: "Case Outcome", value: "Won" }] }
                ]
            }
        ]
    },
    "bpo": {
        title: "BPO / BPS Services",
        slug: "bpo",
        heroDescription: "Scale your operations with premium offshore talent.",
        heroImage: "/hero_bpo.png",
        overview: "We construct dedicated, college-educated teams to handle your back-office, customer success, and technical support operations seamlessly.",
        whyChooseUs: [
            { title: "Top 1% Talent", desc: "We hire college-educated professionals with fluent English and specific domain expertise.", icon: "Target" },
            { title: "Seamless Integration", desc: "Our teams use your software and adapt to your company culture as an extension of your brand.", icon: "Activity" },
            { title: "Data Privacy", desc: "Strict clean-desk policies and enterprise security protocols protect your customer data.", icon: "ShieldCheck" }
        ],
        testimonials: [
            {
                content: "Their offshore support team feels like a natural extension of our brand. Our CSAT scores have improved by 25% since we partnered with CyberForenX.",
                author: "Sarah Thompson",
                role: "Director of Operations, RetailFlow",
                rating: 5
            },
            {
                content: "Professional, punctual, and highly skilled in technical troubleshooting. They handled our Tier 1 support transition flawlessly.",
                author: "David Miller",
                role: "Head of Support, TechStream SaaS",
                rating: 5
            },
            {
                content: "Significant cost savings without any compromise on quality. Their document verification team is extremely thorough and accurate.",
                author: "Elena Rodriguez",
                role: "Compliance Officer, FinSecure Ltd",
                rating: 5
            }
        ],
        process: [
            { step: "01", title: "Consultation", desc: "We audit your current processes and identify outsourcing opportunities." },
            { step: "02", title: "Recruitment", desc: "Hand-picking candidates that perfectly match your brand voice and technical needs." },
            { step: "03", title: "Training", desc: "Intensive 4-week onboarding to master your SOPs and software tools." },
            { step: "04", title: "Live Ops", desc: "Go-live with continuous QA monitoring and daily performance reports." }
        ],
        technologies: {
            "CRM & Helpdesk": [
                { name: "Zendesk", desc: "Customer service platform" },
                { name: "Salesforce", desc: "Enterprise CRM solution" },
                { name: "Freshdesk", desc: "Cloud-based support software" },
                { name: "HubSpot", desc: "Inbound marketing CRM" }
            ],
            "Communication": [
                { name: "Intercom", desc: "Customer communication platform" },
                { name: "Five9", desc: "Cloud contact center" },
                { name: "Twilio", desc: "Cloud communications platform" },
                { name: "RingCentral", desc: "Cloud-based communications" }
            ],
            "Project & Workflow": [
                { name: "Jira", desc: "Issue & project tracking" },
                { name: "Asana", desc: "Work management platform" },
                { name: "Monday.com", desc: "Work OS platform" },
                { name: "Slack", desc: "Business communication platform" }
            ],
            "Automation": [
                { name: "UiPath", desc: "Robotic process automation" },
                { name: "Zapier", desc: "App automation platform" },
                { name: "Power Automate", desc: "Microsoft workflow automation" },
                { name: "Make", desc: "Visual automation platform" }
            ]
        },
        metrics: [
            { value: "40%", label: "COST REDUCTION" },
            { value: "<30s", label: "AVG RESPONSE TIME" },
            { value: "95%", label: "CSAT SCORE" },
            { value: "24/7", label: "COVERAGE" }
        ],
        certifications: ["ISO 9001: Quality Management", "PCI DSS Level 1", "HIPAA Compliant", "GDPR Ready", "Six Sigma Certified QA"],
        subcategories: [
            {
                title: "Customer Support Services",
                slug: "customer-support-services",
                heroTitle: "Support That Builds Loyalty",
                heroDescription: "Omnichannel customer care that turns complaints into brand advocates.",
                heroImage: "/mockup_support.png",
                details: "24/7 voice, email, and chat support with trained agents who embody your brand voice and resolve issues fast.",
                features: [
                    { icon: "Smartphone", title: "Omnichannel voice support", desc: "Professional inbound and outbound call center services." },
                    { icon: "FileText", title: "Ticket management", desc: "Expert Zendesk/Freshdesk resolution with SLA adherence." },
                    { icon: "Target", title: "Customer retention programs", desc: "Proactive outreach campaigns to reduce churn and save accounts." },
                    { icon: "Activity", title: "Quality assurance monitoring", desc: "Real-time call scoring and agent performance analytics." },
                    { icon: "Search", title: "Sentiment analysis", desc: "AI-powered customer mood tracking across all interactions." },
                    { icon: "ShieldCheck", title: "Escalation management", desc: "Tiered escalation workflows ensuring swift critical issue resolution." }
                ],
                process: [
                    { step: "01", title: "Audit", desc: "Analyzing current support workflows and pain points." },
                    { step: "02", title: "Recruit", desc: "Selecting agents matched to your brand personality." },
                    { step: "03", title: "Train", desc: "Intensive product and brand voice training." },
                    { step: "04", title: "Launch", desc: "Go-live with real-time QA and performance tracking." },
                    { step: "05", title: "Optimize", desc: "Continuous improvement based on CSAT and NPS data." }
                ],
                portfolio: [
                    { title: "SaaS Customer Success", metrics: [{ label: "CSAT Score", value: "96%" }, { label: "First Response", value: "<30s" }] },
                    { title: "E-Commerce Support Hub", metrics: [{ label: "Ticket Volume", value: "50K/mo" }, { label: "Resolution Rate", value: "94%" }] },
                    { title: "Fintech Support Operations", metrics: [{ label: "Churn Reduction", value: "25%" }, { label: "NPS Increase", value: "+18" }] }
                ]
            },
            {
                title: "Technical Support Operations",
                slug: "technical-support-operations",
                heroTitle: "Elite IT Helpdesk at Scale",
                heroDescription: "Tier 1, 2, and 3 technical support with deep SaaS and infrastructure expertise.",
                heroImage: "/mockup_techsupport.png",
                details: "Expert software troubleshooting, bug triaging, and remote diagnostics keeping your engineering team focused on building.",
                features: [
                    { icon: "Code", title: "SaaS platform support", desc: "Helping users navigate complex enterprise software." },
                    { icon: "Zap", title: "Bug triaging & replication", desc: "Detailed Jira tickets with reproduction steps and logs." },
                    { icon: "Activity", title: "Remote diagnostics", desc: "Screen-sharing troubleshooting for hardware and network issues." },
                    { icon: "Database", title: "Knowledge base management", desc: "Creating and maintaining self-service documentation." },
                    { icon: "Shield", title: "Security incident triage", desc: "First-response handling of security-related user reports." },
                    { icon: "Search", title: "Root cause documentation", desc: "Systematic tracking of recurring issues for engineering teams." }
                ],
                process: [
                    { step: "01", title: "Assess", desc: "Understanding your tech stack and common issues." },
                    { step: "02", title: "Staff", desc: "Matching technical skill sets to your product." },
                    { step: "03", title: "Train", desc: "Deep product training and SOP mastery." },
                    { step: "04", title: "Deploy", desc: "Go-live with tiered support workflows." },
                    { step: "05", title: "Report", desc: "Weekly performance and trend analytics." }
                ],
                portfolio: [
                    { title: "Enterprise SaaS Helpdesk", metrics: [{ label: "Resolution Time", value: "<2hrs" }, { label: "Eng Tickets Saved", value: "70%" }] },
                    { title: "Cloud Platform Support", metrics: [{ label: "Uptime Impact", value: "99.95%" }, { label: "Tickets/Month", value: "8K+" }] },
                    { title: "IoT Device Support", metrics: [{ label: "First Call Resolution", value: "85%" }, { label: "CSAT", value: "4.7/5" }] }
                ]
            },
            {
                title: "Data Processing & Data Entry",
                slug: "data-processing-entry",
                heroTitle: "Precision Data at Scale",
                heroDescription: "99.9% accurate data processing, digitization, and management of massive datasets.",
                heroImage: "/mockup_dataentry.png",
                details: "CRM cleansing, document digitization, web scraping, and structured data pipeline management by trained analysts.",
                features: [
                    { icon: "Database", title: "CRM data cleansing", desc: "Deduping and enriching Salesforce/HubSpot records." },
                    { icon: "Layout", title: "Document digitization", desc: "OCR and manual transcription of legacy documents." },
                    { icon: "Search", title: "Web data mining", desc: "Structured scraping and organization of web data." },
                    { icon: "ShieldCheck", title: "Data quality assurance", desc: "Multi-tier validation ensuring 99.9% accuracy rates." },
                    { icon: "Code", title: "Automated pipeline setup", desc: "Building ETL scripts for recurring data tasks." },
                    { icon: "Lock", title: "PII handling compliance", desc: "GDPR and HIPAA-compliant sensitive data processing." }
                ],
                process: [
                    { step: "01", title: "Scope", desc: "Understanding data volumes, formats, and quality." },
                    { step: "02", title: "Design", desc: "Creating processing workflows and validation rules." },
                    { step: "03", title: "Process", desc: "Executing data entry and transformation tasks." },
                    { step: "04", title: "Validate", desc: "Multi-layer quality checks and error correction." },
                    { step: "05", title: "Deliver", desc: "Clean data delivery with processing reports." }
                ],
                portfolio: [
                    { title: "Insurance Claims Processing", metrics: [{ label: "Records Processed", value: "2M+" }, { label: "Accuracy", value: "99.97%" }] },
                    { title: "Healthcare Data Digitization", metrics: [{ label: "Documents Scanned", value: "500K+" }, { label: "Turnaround", value: "48hrs" }] },
                    { title: "CRM Migration & Cleansing", metrics: [{ label: "Contacts Cleaned", value: "1.5M" }, { label: "Duplicates Removed", value: "35%" }] }
                ]
            },
            {
                title: "Back Office Management",
                slug: "back-office-management",
                heroTitle: "Streamline Your Operations",
                heroDescription: "Administrative excellence freeing your core team to focus on growth and strategy.",
                heroImage: "/mockup_backoffice.png",
                details: "Invoice processing, HR administration, order fulfillment, and bookkeeping by trained back-office professionals.",
                features: [
                    { icon: "FileText", title: "Accounts payable/receivable", desc: "Invoice processing, reconciliation, and payment tracking." },
                    { icon: "Target", title: "HR administration", desc: "Payroll inputs, leave management, and onboarding documentation." },
                    { icon: "Activity", title: "Order fulfillment management", desc: "E-commerce backend operations and logistics coordination." },
                    { icon: "Database", title: "Vendor management", desc: "Purchase order processing and supplier communication." },
                    { icon: "Lock", title: "Compliance documentation", desc: "Maintaining regulatory files and audit-ready records." },
                    { icon: "Layout", title: "Reporting & analytics", desc: "Monthly operational reports with KPI dashboards." }
                ],
                process: [
                    { step: "01", title: "Map", desc: "Documenting all back-office workflows and pain points." },
                    { step: "02", title: "Staff", desc: "Assigning specialized admin professionals." },
                    { step: "03", title: "Systematize", desc: "Implementing SOPs and quality checkpoints." },
                    { step: "04", title: "Execute", desc: "Daily operations with real-time progress tracking." },
                    { step: "05", title: "Report", desc: "Weekly performance reviews and process improvements." }
                ],
                portfolio: [
                    { title: "E-Commerce Back Office", metrics: [{ label: "Orders Processed", value: "100K/mo" }, { label: "Error Rate", value: "<0.1%" }] },
                    { title: "Startup HR Operations", metrics: [{ label: "Employees Managed", value: "500+" }, { label: "Cost Savings", value: "45%" }] },
                    { title: "Accounting Support Services", metrics: [{ label: "Invoices/Month", value: "15K+" }, { label: "Reconciliation", value: "100%" }] }
                ]
            },
            {
                title: "Document Verification",
                slug: "document-verification",
                heroTitle: "Eagle-Eyed Compliance Checks",
                heroDescription: "KYC, AML, and regulatory document verification by certified compliance analysts.",
                heroImage: "/mockup_docverify.png",
                details: "Identity verification, fraud detection, and regulatory compliance checks with multi-tier validation protocols.",
                features: [
                    { icon: "Search", title: "KYC/AML verification", desc: "Passport, ID, and financial document authentication." },
                    { icon: "Shield", title: "Fraud detection", desc: "Spotting forged documents and suspicious applications." },
                    { icon: "ShieldCheck", title: "Regulatory compliance checks", desc: "Ensuring submissions meet industry-specific requirements." },
                    { icon: "Target", title: "Sanctions screening", desc: "Cross-referencing against global watchlists and PEP databases." },
                    { icon: "Database", title: "Document management", desc: "Organized digital archiving with instant retrieval." },
                    { icon: "Zap", title: "Automated pre-screening", desc: "AI-assisted filtering before manual expert review." }
                ],
                process: [
                    { step: "01", title: "Intake", desc: "Receiving and cataloging submitted documents." },
                    { step: "02", title: "Screen", desc: "Automated pre-screening and flagging." },
                    { step: "03", title: "Verify", desc: "Manual expert verification and cross-referencing." },
                    { step: "04", title: "Decide", desc: "Approval, rejection, or escalation determination." },
                    { step: "05", title: "Archive", desc: "Compliant storage and audit trail maintenance." }
                ],
                portfolio: [
                    { title: "Neobank KYC Program", metrics: [{ label: "Verifications/Day", value: "10K+" }, { label: "Fraud Caught", value: "99.5%" }] },
                    { title: "Insurance Claims Verification", metrics: [{ label: "Claims Reviewed", value: "50K/mo" }, { label: "False Claims", value: "-80%" }] },
                    { title: "Crypto Exchange Compliance", metrics: [{ label: "Users Verified", value: "2M+" }, { label: "Regulatory Fines", value: "$0" }] }
                ]
            },
            {
                title: "Process Automation Support",
                slug: "process-automation-support",
                heroTitle: "Human Intelligence Meets RPA",
                heroDescription: "Combining trained operators with robotic process automation for maximum efficiency.",
                heroImage: "/mockup_rpa.png",
                details: "Workflow mapping, RPA bot maintenance, exception handling, and macro development for operational excellence.",
                features: [
                    { icon: "Zap", title: "Workflow analysis & mapping", desc: "Identifying and documenting tasks ripe for automation." },
                    { icon: "Code", title: "RPA bot monitoring", desc: "24/7 oversight of automated bots with exception handling." },
                    { icon: "Database", title: "Custom macro development", desc: "Building VBA, Python, and Power Automate scripts." },
                    { icon: "Activity", title: "Process optimization", desc: "Continuous improvement of automated and manual workflows." },
                    { icon: "Target", title: "ROI tracking", desc: "Measuring automation impact on time and cost savings." },
                    { icon: "Shield", title: "Compliance integration", desc: "Ensuring automated processes meet regulatory requirements." }
                ],
                process: [
                    { step: "01", title: "Discover", desc: "Mapping current manual processes and bottlenecks." },
                    { step: "02", title: "Design", desc: "Creating automation blueprints and logic flows." },
                    { step: "03", title: "Build", desc: "Developing and testing RPA bots and scripts." },
                    { step: "04", title: "Deploy", desc: "Launching automation with human oversight." },
                    { step: "05", title: "Maintain", desc: "Ongoing monitoring, optimization, and scaling." }
                ],
                portfolio: [
                    { title: "Invoice Processing Automation", metrics: [{ label: "Processing Time", value: "-85%" }, { label: "Accuracy", value: "99.9%" }] },
                    { title: "HR Onboarding Automation", metrics: [{ label: "Manual Steps", value: "-90%" }, { label: "Onboarding Time", value: "1 day" }] },
                    { title: "Report Generation RPA", metrics: [{ label: "Reports/Month", value: "5K+" }, { label: "Time Saved", value: "200hrs/mo" }] }
                ]
            },
            {
                title: "Email & Chat Support",
                slug: "email-chat-support",
                heroTitle: "Lightning-Fast Written Support",
                heroDescription: "High-volume email and live chat handling with perfect grammar and brand consistency.",
                heroImage: "/mockup_chat.png",
                details: "Concurrent live chat management, email triage, and social media moderation by trained communication specialists.",
                features: [
                    { icon: "Activity", title: "Multi-concurrent live chat", desc: "Handling 3+ simultaneous conversations with quality." },
                    { icon: "FileText", title: "Email inbox management", desc: "Categorizing and responding to high-volume inboxes." },
                    { icon: "Smartphone", title: "Social media moderation", desc: "Monitoring and responding across all social platforms." },
                    { icon: "Zap", title: "Canned response optimization", desc: "Creating and refining template libraries for speed." },
                    { icon: "Target", title: "Conversion-focused chat", desc: "Proactive sales chat increasing website conversion rates." },
                    { icon: "Search", title: "Chatbot escalation handling", desc: "Seamless handoff from AI chatbots to human agents." }
                ],
                process: [
                    { step: "01", title: "Audit", desc: "Analyzing current communication channels and volumes." },
                    { step: "02", title: "Configure", desc: "Setting up tools, templates, and routing rules." },
                    { step: "03", title: "Train", desc: "Brand voice and product knowledge intensive training." },
                    { step: "04", title: "Launch", desc: "Go-live with real-time quality monitoring." },
                    { step: "05", title: "Scale", desc: "Volume-based team scaling with maintained quality." }
                ],
                portfolio: [
                    { title: "D2C Brand Chat Support", metrics: [{ label: "Response Time", value: "<15s" }, { label: "Conversion Lift", value: "+22%" }] },
                    { title: "SaaS Email Support", metrics: [{ label: "Emails/Day", value: "3K+" }, { label: "CSAT", value: "4.8/5" }] },
                    { title: "Social Media Management", metrics: [{ label: "Platforms", value: "5+" }, { label: "Response Rate", value: "99%" }] }
                ]
            },
            {
                title: "24/7 Operational Assistance",
                slug: "operational-assistance",
                heroTitle: "Never Sleep, Never Stop",
                heroDescription: "Round-the-clock operational coverage across all time zones for global businesses.",
                heroImage: "/mockup_247ops.png",
                details: "Night shift coverage, system monitoring, emergency dispatch, and global time zone support for continuous operations.",
                features: [
                    { icon: "Activity", title: "Follow-the-sun coverage", desc: "Supporting APAC, EMEA, and Americas around the clock." },
                    { icon: "Lock", title: "Infrastructure monitoring", desc: "Alerting engineering teams for server/network anomalies." },
                    { icon: "Target", title: "Emergency dispatch", desc: "Handling critical escalations during off-hours instantly." },
                    { icon: "Zap", title: "Shift handoff protocols", desc: "Seamless context transfer between shift rotations." },
                    { icon: "Shield", title: "Security watch", desc: "After-hours security monitoring and incident first response." },
                    { icon: "Database", title: "Operational reporting", desc: "Detailed shift logs and overnight activity summaries." }
                ],
                process: [
                    { step: "01", title: "Plan", desc: "Designing shift schedules and coverage models." },
                    { step: "02", title: "Staff", desc: "Recruiting and training overnight/weekend teams." },
                    { step: "03", title: "Integrate", desc: "Connecting with your monitoring and alerting systems." },
                    { step: "04", title: "Operate", desc: "24/7 execution with real-time escalation paths." },
                    { step: "05", title: "Review", desc: "Daily handoff reports and performance analytics." }
                ],
                portfolio: [
                    { title: "Global SaaS NOC", metrics: [{ label: "Coverage", value: "24/7/365" }, { label: "Incident Response", value: "<5min" }] },
                    { title: "E-Commerce Holiday Support", metrics: [{ label: "Peak Orders", value: "50K/day" }, { label: "Uptime", value: "100%" }] },
                    { title: "Healthcare After-Hours", metrics: [{ label: "Calls Handled", value: "10K/mo" }, { label: "Patient Satisfaction", value: "97%" }] }
                ]
            }
        ]
    },
    "analytics": {
        title: "Data Analytics & Intelligence",
        slug: "analytics",
        heroDescription: "Transform raw data into actionable business intelligence.",
        heroImage: "/hero_analytics.png",
        overview: "Our data scientists engineer custom dashboarding and predictive models to help you make informed, revenue-generating decisions.",
        whyChooseUs: [
            { title: "Predictive Models", desc: "We utilize advanced machine learning algorithms to forecast future market behaviors.", icon: "Activity" },
            { title: "Beautiful Visualizations", desc: "Say goodbye to clunky spreadsheets; we build intuitive, interactive heatmaps and charts.", icon: "Layout" },
            { title: "Data Security", desc: "End-to-end encryption ensures your proprietary business intelligence remains strictly confidential.", icon: "Lock" }
        ],
        testimonials: [
            {
                content: "We went from guessing our quarterly projections to having 98% accuracy thanks to their predictive models. A complete game-changer for our finance team.",
                author: "Mark Henderson",
                role: "CFO, Global Ventures",
                rating: 5
            },
            {
                content: "The real-time dashboards allow us to respond to market shifts in minutes rather than days. The level of insight they provide is incredible.",
                author: "Emily Chen",
                role: "VP of Marketing, Alpha Retail",
                rating: 5
            },
            {
                content: "They took a decade of messy, disparate data and turned it into a pristine warehouse. Their ETL pipelines are robust and perfectly engineered.",
                author: "Gregory Vance",
                role: "Chief Data Officer, InsureCorp",
                rating: 5
            }
        ],
        process: [
            { step: "01", title: "Audit", desc: "Assessing your current data lakes, pipelines, and reporting tools." },
            { step: "02", title: "Engineering", desc: "Cleaning messy datasets and establishing automated ETL pipelines." },
            { step: "03", title: "Development", desc: "Building custom ML models and hooking data into BI visualization software." },
            { step: "04", title: "Insights", desc: "Training your executive team on how to read and leverage the new dashboards." }
        ],
        technologies: {
            "Visualization": [
                { name: "Tableau", desc: "Interactive data visualization" },
                { name: "Power BI", desc: "Microsoft business analytics" },
                { name: "Looker", desc: "Enterprise BI platform" },
                { name: "D3.js", desc: "JavaScript library for data-driven documents" }
            ],
            "Data Engineering": [
                { name: "Snowflake", desc: "Cloud data platform" },
                { name: "Apache Spark", desc: "Unified analytics engine" },
                { name: "Airflow", desc: "Workflow automation platform" },
                { name: "dbt", desc: "Data transformation framework" }
            ],
            "Languages & ML": [
                { name: "Python", desc: "Primary data science language" },
                { name: "R", desc: "Statistical computing language" },
                { name: "TensorFlow", desc: "Machine learning framework" },
                { name: "PyTorch", desc: "Deep learning research platform" }
            ],
            "Cloud Data": [
                { name: "AWS Redshift", desc: "Cloud data warehouse" },
                { name: "BigQuery", desc: "Serverless enterprise analytics" },
                { name: "Azure Synapse", desc: "Enterprise analytics service" },
                { name: "Databricks", desc: "Unified data & AI platform" }
            ]
        },
        metrics: [
            { value: "10x", label: "FASTER REPORTING" },
            { value: "99%", label: "DATA ACCURACY" },
            { value: "AWS", label: "CERTIFIED PARTNER" },
            { value: "Real-Time", label: "STREAM PROCESSING" }
        ],
        certifications: ["AWS Certified Data Analytics", "Microsoft Certified: Data Analyst", "Snowflake SnowPro", "Databricks Certified"],
        subcategories: [
            {
                title: "Business Intelligence Dashboards",
                slug: "business-intelligence-dashboards",
                heroTitle: "Executive Intelligence at a Glance",
                heroDescription: "Real-time dashboards delivering your most critical KPIs to decision-makers.",
                heroImage: "/mockup_bi.png",
                details: "Custom Tableau, Power BI, and Looker dashboards with live data integration from all your business systems.",
                features: [
                    { icon: "Layout", title: "Executive dashboard design", desc: "C-suite views built for instant strategic decision-making." },
                    { icon: "Zap", title: "Real-time data integration", desc: "Live sync with Salesforce, Stripe, and internal databases." },
                    { icon: "Smartphone", title: "Mobile-optimized views", desc: "Secure access to business vitals from any device." },
                    { icon: "Code", title: "Embedded analytics", desc: "White-label dashboards embedded directly into your product." },
                    { icon: "Target", title: "Alert automation", desc: "Threshold-based notifications for critical metric changes." },
                    { icon: "Database", title: "Data warehouse integration", desc: "Connecting Snowflake, BigQuery, and Redshift sources." }
                ],
                process: [
                    { step: "01", title: "Discover", desc: "Understanding key metrics and decision-making needs." },
                    { step: "02", title: "Design", desc: "Creating wireframes and data architecture plans." },
                    { step: "03", title: "Build", desc: "Developing dashboards with live data connections." },
                    { step: "04", title: "Test", desc: "Validating data accuracy and user experience." },
                    { step: "05", title: "Train", desc: "Executive onboarding and self-service enablement." }
                ],
                portfolio: [
                    { title: "SaaS Revenue Dashboard", metrics: [{ label: "Data Sources", value: "15+" }, { label: "Reporting Time", value: "-95%" }] },
                    { title: "Retail Operations BI", metrics: [{ label: "Stores Tracked", value: "500+" }, { label: "Decision Speed", value: "10x" }] },
                    { title: "Healthcare Analytics Hub", metrics: [{ label: "Patient Metrics", value: "50+" }, { label: "Compliance", value: "HIPAA" }] }
                ]
            },
            {
                title: "Data Visualization",
                slug: "data-visualization",
                heroTitle: "Data Stories That Drive Action",
                heroDescription: "Transforming complex datasets into compelling, interactive visual narratives.",
                heroImage: "/mockup_dataviz.png",
                details: "Custom D3.js visualizations, interactive charts, and board-ready presentations from your raw data.",
                features: [
                    { icon: "Search", title: "Anomaly highlighting", desc: "Visual patterns that reveal insights hidden in raw numbers." },
                    { icon: "Activity", title: "Interactive drill-downs", desc: "Click-to-explore capabilities for deep data investigation." },
                    { icon: "FileText", title: "Board-ready exports", desc: "Publication-quality visuals for executive presentations." },
                    { icon: "Layout", title: "Geographic heat maps", desc: "Location-based data visualization on interactive maps." },
                    { icon: "Code", title: "Custom D3.js charts", desc: "Bespoke visualizations beyond standard charting libraries." },
                    { icon: "Zap", title: "Real-time streaming visuals", desc: "Live-updating visualizations for operational monitoring." }
                ],
                process: [
                    { step: "01", title: "Understand", desc: "Identifying the story your data needs to tell." },
                    { step: "02", title: "Design", desc: "Creating visual prototypes and interaction patterns." },
                    { step: "03", title: "Develop", desc: "Building interactive charts and dashboards." },
                    { step: "04", title: "Polish", desc: "Refining aesthetics and user experience." },
                    { step: "05", title: "Deploy", desc: "Publishing with training and documentation." }
                ],
                portfolio: [
                    { title: "Financial Market Visualizer", metrics: [{ label: "Data Points", value: "10M+" }, { label: "Render Time", value: "<100ms" }] },
                    { title: "Supply Chain Map", metrics: [{ label: "Nodes Tracked", value: "2K+" }, { label: "Anomaly Detection", value: "Real-time" }] },
                    { title: "Election Data Platform", metrics: [{ label: "Voters Visualized", value: "50M+" }, { label: "Media Citations", value: "100+" }] }
                ]
            },
            {
                title: "Performance Reporting",
                slug: "performance-reporting",
                heroTitle: "Automated Insights, Delivered",
                heroDescription: "Scheduled, automated reports tracking performance against your strategic goals.",
                heroImage: "/mockup_reporting.png",
                details: "Custom OKR tracking, YoY analysis, and automated report generation delivered to stakeholder inboxes.",
                features: [
                    { icon: "Target", title: "OKR & goal tracking", desc: "Continuous mapping of performance against quarterly objectives." },
                    { icon: "Code", title: "Custom metric formulas", desc: "Industry-specific calculations and proprietary KPI logic." },
                    { icon: "Database", title: "Historical trend analysis", desc: "Automatic YoY and MoM growth trajectory comparisons." },
                    { icon: "Zap", title: "Scheduled delivery", desc: "Automated weekly and monthly reports to stakeholder inboxes." },
                    { icon: "Activity", title: "Anomaly flagging", desc: "AI-powered early warning systems for metric deviations." },
                    { icon: "Layout", title: "Executive summaries", desc: "One-page strategic overviews alongside detailed data." }
                ],
                process: [
                    { step: "01", title: "Define", desc: "Establishing KPIs, OKRs, and reporting requirements." },
                    { step: "02", title: "Connect", desc: "Integrating all data sources and building pipelines." },
                    { step: "03", title: "Build", desc: "Designing report templates and automation rules." },
                    { step: "04", title: "Validate", desc: "Testing accuracy against manual calculations." },
                    { step: "05", title: "Automate", desc: "Scheduling delivery and maintenance procedures." }
                ],
                portfolio: [
                    { title: "SaaS Metrics Automation", metrics: [{ label: "Reports/Month", value: "200+" }, { label: "Analyst Hours Saved", value: "160hrs" }] },
                    { title: "Supply Chain KPI Suite", metrics: [{ label: "Metrics Tracked", value: "75+" }, { label: "Accuracy", value: "99.8%" }] },
                    { title: "Marketing ROI Reports", metrics: [{ label: "Channels Tracked", value: "12+" }, { label: "Attribution", value: "Multi-touch" }] }
                ]
            },
            {
                title: "Data Cleaning & Processing",
                slug: "data-cleaning-processing",
                heroTitle: "Pristine Data, Trusted Decisions",
                heroDescription: "Transforming messy, disparate data sources into clean, queryable warehouses.",
                heroImage: "/mockup_datacleaning.png",
                details: "Deduplication, PII anonymization, automated ETL pipelines, and data quality scoring for reliable analytics.",
                features: [
                    { icon: "ShieldCheck", title: "Algorithmic deduplication", desc: "AI-powered removal of duplicate entries across databases." },
                    { icon: "Lock", title: "PII anonymization", desc: "GDPR-compliant scrubbing of personally identifiable information." },
                    { icon: "Zap", title: "Automated ETL pipelines", desc: "Scheduled Extract, Transform, Load workflows." },
                    { icon: "Database", title: "Schema normalization", desc: "Standardizing data formats across disparate sources." },
                    { icon: "Search", title: "Data quality scoring", desc: "Continuous monitoring of data completeness and accuracy." },
                    { icon: "Code", title: "Custom transformation logic", desc: "Business-specific data enrichment and derivation rules." }
                ],
                process: [
                    { step: "01", title: "Audit", desc: "Profiling data sources to understand quality issues." },
                    { step: "02", title: "Design", desc: "Architecting the target schema and transformation logic." },
                    { step: "03", title: "Clean", desc: "Executing deduplication, normalization, and enrichment." },
                    { step: "04", title: "Automate", desc: "Building recurring ETL pipelines and monitors." },
                    { step: "05", title: "Validate", desc: "Ongoing data quality checks and drift detection." }
                ],
                portfolio: [
                    { title: "Insurance Data Warehouse", metrics: [{ label: "Records Cleaned", value: "50M+" }, { label: "Duplicates Removed", value: "12%" }] },
                    { title: "Healthcare Data Lake", metrics: [{ label: "Sources Unified", value: "25+" }, { label: "Query Speed", value: "10x" }] },
                    { title: "Retail ETL Pipeline", metrics: [{ label: "Daily Volume", value: "100GB+" }, { label: "Accuracy", value: "99.95%" }] }
                ]
            },
            {
                title: "KPI Monitoring Solutions",
                slug: "kpi-monitoring-solutions",
                heroTitle: "Track What Truly Matters",
                heroDescription: "Real-time KPI monitoring with intelligent alerting and predictive forecasting.",
                heroImage: "/mockup_kpi.png",
                details: "Automated threshold alerts, predictive capacity planning, and cross-team KPI alignment dashboards.",
                features: [
                    { icon: "Activity", title: "Threshold alert systems", desc: "Automated Slack and email triggers when KPIs breach limits." },
                    { icon: "Shield", title: "Data integrity monitoring", desc: "Continuous verification of tracking code accuracy." },
                    { icon: "Target", title: "Predictive forecasting", desc: "ML models forecasting capacity and inventory breaches." },
                    { icon: "Layout", title: "Cross-team alignment", desc: "Unified KPI views ensuring organizational goal alignment." },
                    { icon: "Code", title: "Custom metric engines", desc: "Building proprietary KPI calculations and composite indexes." },
                    { icon: "Search", title: "Root cause analysis", desc: "Drill-down capability to investigate KPI movements." }
                ],
                process: [
                    { step: "01", title: "Identify", desc: "Defining the KPIs that drive your business outcomes." },
                    { step: "02", title: "Instrument", desc: "Setting up tracking and data collection." },
                    { step: "03", title: "Visualize", desc: "Building monitoring dashboards and scoreboards." },
                    { step: "04", title: "Alert", desc: "Configuring intelligent notification systems." },
                    { step: "05", title: "Optimize", desc: "Refining thresholds and adding predictive models." }
                ],
                portfolio: [
                    { title: "SaaS Metrics Command Center", metrics: [{ label: "KPIs Tracked", value: "50+" }, { label: "Alert Accuracy", value: "98%" }] },
                    { title: "Manufacturing OEE Monitor", metrics: [{ label: "Machines Tracked", value: "200+" }, { label: "Downtime Reduction", value: "30%" }] },
                    { title: "E-Commerce Health Dashboard", metrics: [{ label: "Revenue Impact", value: "+15%" }, { label: "Issue Detection", value: "<2min" }] }
                ]
            },
            {
                title: "Customer Behavior Analytics",
                slug: "customer-behavior-analytics",
                heroTitle: "Understand Your Users Deeply",
                heroDescription: "Product usage insights and behavioral psychology mapped to actionable growth strategies.",
                heroImage: "/mockup_behavior.png",
                details: "Funnel analysis, session replays, cohort tracking, and churn prediction to optimize your product experience.",
                features: [
                    { icon: "Search", title: "Funnel drop-off analysis", desc: "Pinpointing exactly where users abandon your product." },
                    { icon: "Smartphone", title: "Session replay analysis", desc: "Reconstructing user journeys to identify UX friction." },
                    { icon: "FileText", title: "Cohort retention tracking", desc: "Comparing retention across acquisition channels and segments." },
                    { icon: "Activity", title: "Churn prediction models", desc: "ML algorithms identifying at-risk customers before they leave." },
                    { icon: "Target", title: "Feature adoption tracking", desc: "Measuring new feature impact on engagement and retention." },
                    { icon: "Code", title: "A/B test analytics", desc: "Statistical analysis of experiment results with confidence intervals." }
                ],
                process: [
                    { step: "01", title: "Instrument", desc: "Setting up event tracking and analytics SDKs." },
                    { step: "02", title: "Collect", desc: "Gathering behavioral data across all touchpoints." },
                    { step: "03", title: "Analyze", desc: "Running cohort, funnel, and segmentation analysis." },
                    { step: "04", title: "Recommend", desc: "Delivering actionable insights for product improvements." },
                    { step: "05", title: "Measure", desc: "Tracking the impact of implemented changes." }
                ],
                portfolio: [
                    { title: "SaaS Onboarding Optimization", metrics: [{ label: "Activation Rate", value: "+40%" }, { label: "Time to Value", value: "-60%" }] },
                    { title: "E-Commerce Conversion Lift", metrics: [{ label: "Cart Abandonment", value: "-35%" }, { label: "Revenue/User", value: "+25%" }] },
                    { title: "Mobile App Engagement", metrics: [{ label: "DAU/MAU Ratio", value: "+50%" }, { label: "Churn", value: "-20%" }] }
                ]
            },
            {
                title: "Decision Support Systems",
                slug: "decision-support-systems",
                heroTitle: "AI-Powered Decision Intelligence",
                heroDescription: "Machine learning platforms that recommend the most profitable business actions.",
                heroImage: "/mockup_dss.png",
                details: "Predictive ML models, scenario simulation, and algorithmic resource optimization for strategic decision-making.",
                features: [
                    { icon: "Code", title: "Custom ML models", desc: "Proprietary algorithms trained on your historical outcomes." },
                    { icon: "Layout", title: "Scenario simulation", desc: "What-if analysis modeling financial and operational outcomes." },
                    { icon: "Database", title: "Resource optimization", desc: "Algorithmic budget allocation and capacity recommendations." },
                    { icon: "Activity", title: "Demand forecasting", desc: "Predicting future demand patterns with statistical models." },
                    { icon: "Target", title: "Risk scoring", desc: "Quantifying business risks with probabilistic models." },
                    { icon: "Zap", title: "Real-time recommendations", desc: "Live decisioning APIs integrated into your workflows." }
                ],
                process: [
                    { step: "01", title: "Frame", desc: "Defining the business decision to be optimized." },
                    { step: "02", title: "Data", desc: "Preparing historical datasets for model training." },
                    { step: "03", title: "Model", desc: "Building and validating predictive algorithms." },
                    { step: "04", title: "Deploy", desc: "Integrating models into business workflows." },
                    { step: "05", title: "Learn", desc: "Continuous model refinement with new data." }
                ],
                portfolio: [
                    { title: "Pricing Optimization Engine", metrics: [{ label: "Revenue Lift", value: "+18%" }, { label: "Margin Improvement", value: "+12%" }] },
                    { title: "Supply Chain Forecasting", metrics: [{ label: "Forecast Accuracy", value: "95%" }, { label: "Waste Reduction", value: "-40%" }] },
                    { title: "Credit Risk Scoring", metrics: [{ label: "Default Prediction", value: "92%" }, { label: "False Positives", value: "-50%" }] }
                ]
            }
        ]
    },
    "marketing": {
        title: "Digital Marketing",
        slug: "marketing",
        heroDescription: "Data-driven marketing to dominate your market share.",
        heroImage: "/hero_marketing.png",
        overview: "We execute highly targeted, omnichannel marketing campaigns built on technical precision and creative excellence to drive measurable ROI.",
        whyChooseUs: [
            { title: "ROI Obsessed", desc: "We track every dollar spent down to the final conversion event.", icon: "Target" },
            { title: "Omnichannel Approach", desc: "Seamless campaigns running across Search, Social, and Programmatic.", icon: "Activity" },
            { title: "Technical SEO", desc: "Leveraging our engineering background to build technically flawless, ranking websites.", icon: "Code" }
        ],
        testimonials: [
            {
                content: "CyberForenX didn't just run ads; they built a conversion engine. Our ROAS has stayed consistently above 4x for the last six months.",
                author: "Julian Drake",
                role: "Marketing Director, LuxStay",
                rating: 5
            },
            {
                content: "Technically brilliant SEO. We moved from page 4 to the top 3 spots for our most competitive keywords in less than a quarter.",
                author: "Sophia Martinez",
                role: "E-commerce Manager, Trendify",
                rating: 5
            },
            {
                content: "Their omnichannel approach synchronized our message across platforms. We've seen a 30% reduction in CPA while scaling our budget.",
                author: "Alan Wright",
                role: "Founder, NexGen Fitness",
                rating: 5
            }
        ],
        process: [
            { step: "01", title: "Research", desc: "Deep competitor analysis and keyword volume mapping." },
            { step: "02", title: "Strategy", desc: "Developing the cross-channel marketing plan and creative assets." },
            { step: "03", title: "Execution", desc: "Launching campaigns, publishing content, and rapid A/B testing." },
            { step: "04", title: "Optimization", desc: "Cutting underperforming keywords and scaling winning creatives." }
        ],
        technologies: {
            "Paid Media": [
                { name: "Google Ads", desc: "Search engine advertising" },
                { name: "Meta Ads", desc: "Social media advertising" },
                { name: "LinkedIn Ads", desc: "B2B advertising platform" },
                { name: "TikTok Ads", desc: "Short-form video advertising" }
            ],
            "SEO & Research": [
                { name: "Ahrefs", desc: "SEO toolset" },
                { name: "Semrush", desc: "Online visibility management" },
                { name: "Screaming Frog", desc: "Website crawler" },
                { name: "Moz", desc: "SEO software suite" }
            ],
            "Analytics": [
                { name: "Google Analytics 4", desc: "Cross-platform analytics" },
                { name: "Hotjar", desc: "Website heatmaps & behavior" },
                { name: "Mixpanel", desc: "Product analytics platform" },
                { name: "Looker Studio", desc: "Data visualization tool" }
            ],
            "Marketing Ops": [
                { name: "HubSpot", desc: "Marketing automation CRM" },
                { name: "Mailchimp", desc: "Email marketing platform" },
                { name: "Klaviyo", desc: "Marketing automation platform" },
                { name: "ActiveCampaign", desc: "Customer experience automation" }
            ]
        },
        metrics: [
            { value: "3x", label: "AVG ROAS" },
            { value: "50%", label: "LOWER CPA" },
            { value: "Top 3", label: "SERP RANKINGS" },
            { value: "Meta", label: "BUSINESS PARTNER" }
        ],
        certifications: ["Google Premier Partner", "Meta Business Partner", "HubSpot Solutions Partner", "Bing Ads Certified"],
        subcategories: [
            {
                title: "Search Engine Optimization (SEO)",
                slug: "seo",
                heroTitle: "Dominate Search Results",
                heroDescription: "Technical SEO mastery and content strategies that capture high-intent organic traffic.",
                heroImage: "/mockup_seo.png",
                details: "Core Web Vitals optimization, content strategy, and authority link building to own your search rankings.",
                features: [
                    { icon: "Search", title: "Technical SEO audits", desc: "Fixing Core Web Vitals, crawl errors, and site architecture." },
                    { icon: "FileText", title: "Content strategy & creation", desc: "Keyword-rich authoritative blogs and landing pages." },
                    { icon: "Zap", title: "Authority link building", desc: "Acquiring high-DR backlinks to boost domain authority." },
                    { icon: "Code", title: "Schema markup implementation", desc: "Structured data for rich snippets and enhanced SERP visibility." },
                    { icon: "Activity", title: "Rank tracking & reporting", desc: "Real-time keyword position monitoring across search engines." },
                    { icon: "Target", title: "Local SEO optimization", desc: "Google Business Profile and local citation management." }
                ],
                process: [
                    { step: "01", title: "Audit", desc: "Comprehensive technical and content SEO analysis." },
                    { step: "02", title: "Research", desc: "Keyword mapping and competitor gap analysis." },
                    { step: "03", title: "Optimize", desc: "On-page, technical, and content optimization." },
                    { step: "04", title: "Build", desc: "Authority link acquisition and content publishing." },
                    { step: "05", title: "Track", desc: "Weekly rank tracking and performance reporting." }
                ],
                portfolio: [
                    { title: "SaaS Organic Growth", metrics: [{ label: "Organic Traffic", value: "+300%" }, { label: "Keywords Top 3", value: "150+" }] },
                    { title: "E-Commerce SEO Campaign", metrics: [{ label: "Revenue from SEO", value: "+$2M" }, { label: "Pages Indexed", value: "10K+" }] },
                    { title: "B2B Lead Generation SEO", metrics: [{ label: "Qualified Leads", value: "+200%" }, { label: "Domain Rating", value: "65→82" }] }
                ]
            },
            {
                title: "Social Media Marketing",
                slug: "social-media-marketing",
                heroTitle: "Build Communities, Go Viral",
                heroDescription: "Engaging content strategies that build loyal communities across every major platform.",
                heroImage: "/mockup_social.png",
                details: "Multi-platform management, short-form video production, and community engagement strategies.",
                features: [
                    { icon: "Smartphone", title: "Multi-platform management", desc: "Daily content curation across LinkedIn, X, Instagram, and TikTok." },
                    { icon: "Layout", title: "Short-form video production", desc: "Scripting, filming, and editing viral-ready video hooks." },
                    { icon: "Activity", title: "Community management", desc: "Real-time engagement with comments, DMs, and mentions." },
                    { icon: "Target", title: "Influencer partnerships", desc: "Identifying and managing micro and macro influencer campaigns." },
                    { icon: "Search", title: "Social listening", desc: "Monitoring brand mentions and industry conversations." },
                    { icon: "Zap", title: "Trend hijacking", desc: "Rapid content creation capitalizing on trending topics." }
                ],
                process: [
                    { step: "01", title: "Audit", desc: "Analyzing current social presence and competitors." },
                    { step: "02", title: "Strategize", desc: "Creating content pillars and posting schedules." },
                    { step: "03", title: "Create", desc: "Producing high-quality content and creative assets." },
                    { step: "04", title: "Engage", desc: "Active community management and conversation." },
                    { step: "05", title: "Analyze", desc: "Performance reporting and strategy optimization." }
                ],
                portfolio: [
                    { title: "D2C Brand Launch", metrics: [{ label: "Followers Growth", value: "0→100K" }, { label: "Engagement Rate", value: "8.5%" }] },
                    { title: "B2B LinkedIn Strategy", metrics: [{ label: "Impressions/mo", value: "2M+" }, { label: "Leads Generated", value: "500+" }] },
                    { title: "Viral TikTok Campaign", metrics: [{ label: "Views", value: "15M+" }, { label: "Sales Lift", value: "+180%" }] }
                ]
            },
            {
                title: "Performance Marketing & Paid Ads",
                slug: "performance-marketing",
                heroTitle: "Scale Revenue with Precision",
                heroDescription: "Data-driven media buying across Google, Meta, and programmatic to maximize ROAS.",
                heroImage: "/mockup_ppc.png",
                details: "Google Search/Display, Meta/TikTok ads, retargeting, and conversion rate optimization for scalable growth.",
                features: [
                    { icon: "Target", title: "Google Search & Shopping ads", desc: "Capturing high-intent users at the moment of search." },
                    { icon: "Layout", title: "Meta & TikTok ad campaigns", desc: "Scroll-stopping creative with advanced audience targeting." },
                    { icon: "Activity", title: "Dynamic retargeting", desc: "Following visitors across the web to drive conversions." },
                    { icon: "Code", title: "Conversion tracking setup", desc: "Server-side tracking bypassing ad-blockers for accuracy." },
                    { icon: "Search", title: "Audience segmentation", desc: "Lookalike modeling and custom audience creation." },
                    { icon: "Zap", title: "Creative A/B testing", desc: "Rapid iteration on ad copy, visuals, and landing pages." }
                ],
                process: [
                    { step: "01", title: "Research", desc: "Competitor analysis and audience profiling." },
                    { step: "02", title: "Build", desc: "Campaign structure, creative, and tracking setup." },
                    { step: "03", title: "Launch", desc: "Controlled rollout with initial testing budgets." },
                    { step: "04", title: "Optimize", desc: "Daily bid management and creative performance analysis." },
                    { step: "05", title: "Scale", desc: "Proven winners scaled with maintained ROAS targets." }
                ],
                portfolio: [
                    { title: "D2C E-Commerce Campaign", metrics: [{ label: "ROAS", value: "5.2x" }, { label: "Revenue", value: "$3M+" }] },
                    { title: "SaaS Lead Gen Campaign", metrics: [{ label: "Cost Per Lead", value: "-60%" }, { label: "MQLs/Month", value: "500+" }] },
                    { title: "App Install Campaign", metrics: [{ label: "Installs", value: "100K+" }, { label: "CPI", value: "$0.45" }] }
                ]
            },
            {
                title: "Content Marketing Strategy",
                slug: "content-marketing-strategy",
                heroTitle: "Content That Converts",
                heroDescription: "Strategic content programs that educate, nurture, and convert your target audience.",
                heroImage: "/mockup_content.png",
                details: "Whitepapers, case studies, video content, and blog strategies positioning you as a thought leader.",
                features: [
                    { icon: "FileText", title: "Whitepapers & eBooks", desc: "Deep-dive lead magnets capturing qualified B2B emails." },
                    { icon: "Zap", title: "Video content production", desc: "VSLs, testimonials, and educational content at scale." },
                    { icon: "Search", title: "Case study development", desc: "Documenting client wins with data-driven storytelling." },
                    { icon: "Layout", title: "Content calendar management", desc: "Strategic planning and editorial scheduling." },
                    { icon: "Target", title: "SEO content optimization", desc: "Keyword-optimized articles driving organic discovery." },
                    { icon: "Activity", title: "Content repurposing", desc: "Transforming one piece into multi-format distribution." }
                ],
                process: [
                    { step: "01", title: "Research", desc: "Audience persona development and topic mapping." },
                    { step: "02", title: "Plan", desc: "Content calendar and editorial strategy creation." },
                    { step: "03", title: "Create", desc: "Writing, filming, and designing content assets." },
                    { step: "04", title: "Distribute", desc: "Publishing and promoting across all channels." },
                    { step: "05", title: "Measure", desc: "Tracking engagement, leads, and attribution." }
                ],
                portfolio: [
                    { title: "SaaS Content Engine", metrics: [{ label: "Blog Traffic", value: "+400%" }, { label: "MQLs from Content", value: "300/mo" }] },
                    { title: "B2B Whitepaper Series", metrics: [{ label: "Downloads", value: "10K+" }, { label: "Pipeline Value", value: "$5M" }] },
                    { title: "Video Marketing Program", metrics: [{ label: "Views", value: "2M+" }, { label: "Conversion Rate", value: "12%" }] }
                ]
            },
            {
                title: "Email Marketing Campaigns",
                slug: "email-marketing-campaigns",
                heroTitle: "Revenue in Every Inbox",
                heroDescription: "Sophisticated email automation and conversion copywriting to monetize your list.",
                heroImage: "/mockup_email.png",
                details: "Welcome flows, abandoned cart sequences, segmentation, and A/B testing for maximum email revenue.",
                features: [
                    { icon: "Zap", title: "Automated email flows", desc: "Welcome series, abandoned cart, and post-purchase sequences." },
                    { icon: "Code", title: "Dynamic segmentation", desc: "Behavioral and demographic targeting for personalization." },
                    { icon: "Activity", title: "Subject line A/B testing", desc: "Data-driven optimization of open rates and click-throughs." },
                    { icon: "FileText", title: "Conversion copywriting", desc: "Persuasive email copy that drives click-throughs and sales." },
                    { icon: "Target", title: "List growth strategies", desc: "Opt-in forms, lead magnets, and referral programs." },
                    { icon: "Search", title: "Deliverability optimization", desc: "Domain warming, list cleaning, and inbox placement." }
                ],
                process: [
                    { step: "01", title: "Audit", desc: "Reviewing current email performance and list health." },
                    { step: "02", title: "Segment", desc: "Building audience segments and personas." },
                    { step: "03", title: "Create", desc: "Writing copy and designing email templates." },
                    { step: "04", title: "Automate", desc: "Building trigger-based flows and sequences." },
                    { step: "05", title: "Optimize", desc: "Ongoing A/B testing and performance tuning." }
                ],
                portfolio: [
                    { title: "E-Commerce Email Revenue", metrics: [{ label: "Email Revenue", value: "+$1.5M" }, { label: "Open Rate", value: "42%" }] },
                    { title: "SaaS Onboarding Flows", metrics: [{ label: "Activation Rate", value: "+35%" }, { label: "Churn Reduction", value: "20%" }] },
                    { title: "B2B Nurture Sequences", metrics: [{ label: "Reply Rate", value: "12%" }, { label: "Pipeline Value", value: "$2M" }] }
                ]
            },
            {
                title: "Brand Awareness & Online Presence",
                slug: "brand-awareness",
                heroTitle: "Own Your Market Category",
                heroDescription: "Strategic brand positioning making you the undisputed leader in your niche.",
                heroImage: "/mockup_brand.png",
                details: "PR campaigns, brand identity design, influencer partnerships, and thought leadership for market dominance.",
                features: [
                    { icon: "Shield", title: "PR & media placements", desc: "Securing features in major industry publications." },
                    { icon: "Layout", title: "Brand identity systems", desc: "Modernizing logos, guidelines, and visual identity." },
                    { icon: "Target", title: "Influencer partnerships", desc: "Collaborating with industry voices for authentic endorsements." },
                    { icon: "FileText", title: "Thought leadership content", desc: "Executive bylines and speaking opportunity placement." },
                    { icon: "Activity", title: "Reputation management", desc: "Monitoring and managing online brand perception." },
                    { icon: "Search", title: "Brand monitoring", desc: "Real-time tracking of brand mentions across the web." }
                ],
                process: [
                    { step: "01", title: "Assess", desc: "Current brand perception and competitive positioning." },
                    { step: "02", title: "Define", desc: "Brand strategy, messaging, and visual identity." },
                    { step: "03", title: "Launch", desc: "Multi-channel brand awareness campaigns." },
                    { step: "04", title: "Amplify", desc: "PR, influencer, and content distribution." },
                    { step: "05", title: "Measure", desc: "Brand recall studies and sentiment analysis." }
                ],
                portfolio: [
                    { title: "Startup Brand Launch", metrics: [{ label: "Brand Awareness", value: "0→65%" }, { label: "Media Mentions", value: "200+" }] },
                    { title: "Corporate Rebrand", metrics: [{ label: "Perception Shift", value: "+40%" }, { label: "NPS Increase", value: "+25" }] },
                    { title: "Thought Leadership Program", metrics: [{ label: "Speaking Events", value: "30+" }, { label: "Inbound Leads", value: "+150%" }] }
                ]
            },
            {
                title: "Lead Generation Campaigns",
                slug: "lead-generation-campaigns",
                heroTitle: "Fill Your Sales Pipeline",
                heroDescription: "Systematic B2B lead generation filling your calendar with qualified appointments.",
                heroImage: "/mockup_leadgen.png",
                details: "Cold outreach automation, high-converting landing pages, and ICP-targeted list building for predictable pipeline.",
                features: [
                    { icon: "Smartphone", title: "Automated cold outreach", desc: "Personalized email and LinkedIn sequences at scale." },
                    { icon: "Layout", title: "Landing page optimization", desc: "High-converting squeeze pages designed to capture leads." },
                    { icon: "Database", title: "ICP list building", desc: "Precision-targeted contact data for your ideal customer profile." },
                    { icon: "Target", title: "Account-based marketing", desc: "Targeted campaigns for named enterprise accounts." },
                    { icon: "Activity", title: "Lead scoring & routing", desc: "Automated qualification and sales team assignment." },
                    { icon: "Zap", title: "Webinar & event funnels", desc: "Registration pages and follow-up sequences that convert." }
                ],
                process: [
                    { step: "01", title: "Define", desc: "ICP development and targeting criteria." },
                    { step: "02", title: "Build", desc: "Creating lists, landing pages, and sequences." },
                    { step: "03", title: "Launch", desc: "Multi-channel outreach campaign activation." },
                    { step: "04", title: "Qualify", desc: "Lead scoring and sales-ready qualification." },
                    { step: "05", title: "Optimize", desc: "A/B testing and conversion rate improvement." }
                ],
                portfolio: [
                    { title: "SaaS Pipeline Builder", metrics: [{ label: "SQLs/Month", value: "150+" }, { label: "Cost Per SQL", value: "$45" }] },
                    { title: "Enterprise ABM Campaign", metrics: [{ label: "Target Accounts", value: "500" }, { label: "Meetings Booked", value: "85" }] },
                    { title: "Webinar Lead Engine", metrics: [{ label: "Registrants", value: "5K+" }, { label: "Conversion to Demo", value: "22%" }] }
                ]
            },
            {
                title: "Analytics & Marketing Performance",
                slug: "analytics-marketing-performance",
                heroTitle: "Every Dollar, Tracked",
                heroDescription: "Full-funnel attribution connecting ad spend to bottom-line revenue with precision.",
                heroImage: "/mockup_martech.png",
                details: "Server-side tracking, multi-touch attribution, and real-time dashboards for data-driven scaling decisions.",
                features: [
                    { icon: "Database", title: "Server-side tracking", desc: "Bypassing ad-blockers for 100% accurate conversion data." },
                    { icon: "Search", title: "Multi-touch attribution", desc: "Understanding the complete path to purchase across channels." },
                    { icon: "Layout", title: "Real-time performance dashboards", desc: "Live views of spend, ROAS, and pipeline metrics." },
                    { icon: "Code", title: "Tag management (GTM)", desc: "Clean Google Tag Manager configurations for tracking accuracy." },
                    { icon: "Activity", title: "Marketing mix modeling", desc: "Statistical analysis of channel contribution to revenue." },
                    { icon: "Target", title: "Budget optimization", desc: "Data-driven recommendations for spend reallocation." }
                ],
                process: [
                    { step: "01", title: "Audit", desc: "Reviewing current tracking and data accuracy." },
                    { step: "02", title: "Implement", desc: "Setting up server-side tracking and attribution." },
                    { step: "03", title: "Dashboard", desc: "Building real-time performance views." },
                    { step: "04", title: "Analyze", desc: "Channel performance and budget optimization." },
                    { step: "05", title: "Report", desc: "Ongoing insights and strategic recommendations." }
                ],
                portfolio: [
                    { title: "E-Commerce Attribution Project", metrics: [{ label: "Tracking Accuracy", value: "99.5%" }, { label: "Wasted Spend Found", value: "$500K" }] },
                    { title: "SaaS Marketing Dashboard", metrics: [{ label: "Data Sources", value: "15+" }, { label: "Reporting Time", value: "-90%" }] },
                    { title: "Multi-Channel Attribution", metrics: [{ label: "Channels Tracked", value: "8+" }, { label: "ROAS Improvement", value: "+35%" }] }
                ]
            }
        ]
    }
};
