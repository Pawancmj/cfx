import { ServiceCategory } from "./servicesData";

export const solutionsData: Record<string, ServiceCategory> = {
    "digital-commerce": {
        title: "Digital Commerce & Platform Businesses",
        slug: "digital-commerce",
        heroDescription: "Secure, scalable platforms engineered for high-volume transactions.",
        heroImage: "/hero_commerce.png",
        overview: "We build and secure high-performance digital commerce platforms, client portals, and SaaS ecosystems designed for complex enterprise requirements.",
        whyChooseUs: [
            { title: "High-Volume Scalability", desc: "Cloud-native architectures built to handle massive concurrent transaction loads.", icon: "Activity" },
            { title: "Zero-Trust Security", desc: "Built-in protection against fraud, data breaches, and payment processing vulnerabilities.", icon: "Lock" },
            { title: "Seamless Integration", desc: "Flawless connections between your storefronts, ERPs, CRMs, and payment gateways.", icon: "Zap" }
        ],
        testimonials: [
            {
                content: "Our transaction volume tripled during the holiday season, and the platform didn't skip a beat. The zero-trust architecture gave us complete peace of mind.",
                author: "Sarah Jenkins",
                role: "CTO, GlobalRetail Inc.",
                rating: 5
            },
            {
                content: "The custom vendor portal reduced our onboarding time by 75% while maintaining strict compliance standards.",
                author: "Michael Chen",
                role: "VP Operations, SupplyChain Logistics",
                rating: 5
            }
        ],
        process: [
            { step: "01", title: "Discovery", desc: "Analyzing high-volume transaction points and security requirements." },
            { step: "02", title: "Architecture", desc: "Designing scalable, decoupled microservices for commerce." },
            { step: "03", title: "Development", desc: "Iterative sprints focusing on performance and core workflows." },
            { step: "04", title: "Deployment", desc: "Zero-downtime cutover and continuous monitoring." }
        ],
        technologies: {
            "Frontend": [
                { name: "Next.js", desc: "React framework for production" },
                { name: "React", desc: "Component-based UI library" },
                { name: "Tailwind CSS", desc: "Utility-first CSS framework" }
            ],
            "Backend": [
                { name: "Node.js", desc: "JavaScript runtime environment" },
                { name: "PostgreSQL", desc: "Advanced relational database" },
                { name: "Redis", desc: "In-memory data structure store" }
            ],
            "Security": [
                { name: "OAuth 2.0", desc: "Industry-standard authorization" },
                { name: "Stripe Connect", desc: "Secure payment infrastructure" }
            ]
        },
        metrics: [
            { value: "0", label: "TRANSACTION FAILURES" },
            { value: "99.99%", label: "PLATFORM UPTIME" },
            { value: "PCI-DSS", label: "COMPLIANCE MAINTAINED" },
            { value: "24/7", label: "THREAT MONITORING" }
        ],
        subcategories: [
            {
                title: "Custom Web & Mobile Platforms",
                slug: "custom-web-mobile-platforms",
                heroTitle: "Bespoke Platforms Built for Scale",
                heroDescription: "High-performance digital experiences tailored to your unique commerce workflows.",
                heroImage: "/mockup_custom_commerce.png",
                details: "We architect custom web and mobile platforms that combine beautiful interfaces with rock-solid, secure backends.",
                features: [
                    { icon: "Smartphone", title: "Omnichannel experiences", desc: "Seamless user journeys across desktop, tablet, and mobile apps." },
                    { icon: "Lock", title: "Secure authentication", desc: "Biometric and multi-factor authentication for user protection." },
                    { icon: "Zap", title: "Micro-second latency", desc: "Edge network deployment for lightning-fast catalog browsing." }
                ],
                challengesVsSolutions: [
                    { challenge: "Legacy platforms buckle under holiday traffic spikes, causing cart abandonment.", solution: "Auto-scaling, cloud-native architecture ensuring zero-downtime during peak loads." },
                    { challenge: "Disjointed codebases across mobile and web creating inconsistent user experiences.", solution: "A unified, API-first omnichannel approach delivering identical enterprise quality." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Custom environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Custom framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Custom solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Custom deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Custom Web & Mobile Platforms Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Custom Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Custom Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ]
            },
            {
                title: "Client & Vendor Portal Development",
                slug: "client-vendor-portal",
                heroTitle: "Secure Ecosystem Collaboration",
                heroDescription: "Streamline B2B interactions with highly secure, role-based access portals.",
                heroImage: "/mockup_vendor_portal.png",
                details: "Custom portals designed to securely handle sensitive document exchanges, inventory management, and financial reporting.",
                features: [
                    { icon: "ShieldCheck", title: "Role-based access control", desc: "Granular permissions down to the individual document level." },
                    { icon: "FileText", title: "Automated compliance", desc: "Built-in SOX and GDPR compliance reporting and audit trails." },
                    { icon: "Activity", title: "Real-time sync", desc: "Instant updates synced directly to your central ERP systems." }
                ],
                challengesVsSolutions: [
                    { challenge: "Sensitive vendor documents emailed insecurely, creating massive compliance liabilities.", solution: "End-to-end encrypted portal enforcing strict access controls and immediate revocation." },
                    { challenge: "Manual invoice processing causing 20+ day delays in accounts payable syncs.", solution: "Automated ERP bridging ensuring real-time financial ledger mirroring." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Client environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Client framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Client solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Client deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Client & Vendor Portal Development Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Client Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Client Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ]
            },
            {
                title: "SaaS-Based Business Platforms",
                slug: "saas-platforms",
                heroTitle: "Scalable SaaS Architectures",
                heroDescription: "Multi-tenant platforms engineered for recurring revenue and infinite scalability.",
                heroImage: "/mockup_saas_commerce.png",
                details: "End-to-end SaaS infrastructure handling subscription logic, tenant isolation, and enterprise-grade SLA requirements.",
                features: [
                    { icon: "Database", title: "Isolated multi-tenancy", desc: "Strict data separation ensuring zero cross-tenant leakage." },
                    { icon: "Code", title: "Automated billing pipelines", desc: "Usage-based and tiered subscription processing via Stripe." },
                    { icon: "Lock", title: "Enterprise SSO", desc: "SAML and OpenID Connect integration for corporate clients." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current SaaS-Based environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke SaaS-Based framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the SaaS-Based solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the SaaS-Based deployment." }
                                        ],
                portfolio: [
                                            { title: "Global SaaS-Based Business Platforms Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise SaaS-Based Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable SaaS-Based Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity SaaS-Based operations.", solution: "A completely bespoke, cloud-native SaaS-Based ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard SaaS-Based workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all SaaS-Based pipelines." }
                                        ]
            },
            {
                title: "API Integration & Automation",
                slug: "api-integration",
                heroTitle: "Connect Your Commerce Ecosystem",
                heroDescription: "Seamless, secure API bridges eliminating data silos and manual workflows.",
                heroImage: "/mockup_api_commerce.png",
                details: "We build resilient middleware connecting legacy systems with modern commerce APIs, featuring advanced rate-limiting and error handling.",
                features: [
                    { icon: "Layout", title: "Data transformation", desc: "Real-time mapping between incompatible system formats." },
                    { icon: "Shield", title: "API gateway security", desc: "Protection against DDoS, injection, and unauthorized access." },
                    { icon: "Zap", title: "Event-driven automation", desc: "Webhook architectures triggering instant downstream actions." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current API Integration environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke API Integration framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the API Integration solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the API Integration deployment." }
                                        ],
                portfolio: [
                                            { title: "Global API Integration & Automation Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise API Integration Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable API Integration Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity API Integration operations.", solution: "A completely bespoke, cloud-native API Integration ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard API Integration workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all API Integration pipelines." }
                                        ]
            },
            {
                title: "Multi-User Management Systems",
                slug: "multi-user-management",
                heroTitle: "Complex Hierarchies Simplified",
                heroDescription: "Centralized identity and access management for large-scale commerce operations.",
                heroImage: "/mockup_user_management.png",
                details: "Robust IAM platforms capable of handling thousands of users, complex approval chains, and delegated administration.",
                features: [
                    { icon: "Target", title: "Delegated administration", desc: "Allowing B2B clients to manage their own user hierarchies." },
                    { icon: "Lock", title: "Zero-trust verification", desc: "Continuous authentication checks throughout the user session." },
                    { icon: "Search", title: "Comprehensive audit logs", desc: "Immutable records of every login, modification, and access event." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Multi-User environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Multi-User framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Multi-User solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Multi-User deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Multi-User Management Systems Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Multi-User Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Multi-User Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Multi-User operations.", solution: "A completely bespoke, cloud-native Multi-User ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Multi-User workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Multi-User pipelines." }
                                        ]
            },
            {
                title: "Secure Transaction Workflows",
                slug: "secure-transaction-workflows",
                heroTitle: "Bulletproof Payment Pipelines",
                heroDescription: "Frictionless checkout experiences fortified by anti-fraud machine learning.",
                heroImage: "/mockup_transactions.png",
                details: "PCI-compliant transaction flows that maximize conversion rates while actively blocking malicious actors.",
                features: [
                    { icon: "Activity", title: "AI fraud scoring", desc: "Real-time transaction analysis blocking suspicious activity." },
                    { icon: "Code", title: "PCI DSS Level 1", desc: "Architecture that completely removes your servers from PCI scope." },
                    { icon: "RefreshCw", title: "Automated reconciliation", desc: "Instant matching of payments to invoices across multiple currencies." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Secure environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Secure framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Secure solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Secure deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Secure Transaction Workflows Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Secure Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Secure Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Secure operations.", solution: "A completely bespoke, cloud-native Secure ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Secure workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Secure pipelines." }
                                        ]
            },
            {
                title: "Scalable Digital Infrastructure",
                slug: "scalable-digital-infrastructure",
                heroTitle: "Infrastructure Built for Peak Loads",
                heroDescription: "Cloud-native architectures that automatically scale during Black Friday events.",
                heroImage: "/mockup_infrastructure.png",
                details: "Kubernetes and serverless deployments across AWS and Azure, ensuring your platform never goes down under pressure.",
                features: [
                    { icon: "Database", title: "Auto-scaling compute", desc: "Dynamically adding resources the millisecond traffic spikes." },
                    { icon: "Shield", title: "Multi-region redundancy", desc: "Active-active deployments preventing regional outage impacts." },
                    { icon: "Activity", title: "Infrastructure as Code", desc: "Terraform deployments ensuring perfectly reproducible environments." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Scalable environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Scalable framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Scalable solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Scalable deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Scalable Digital Infrastructure Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Scalable Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Scalable Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Scalable operations.", solution: "A completely bespoke, cloud-native Scalable ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Scalable workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Scalable pipelines." }
                                        ]
            },
            {
                title: "Platform Performance Optimization",
                slug: "platform-performance-optimization",
                heroTitle: "Millisecond Responses, Maximum Conversions",
                heroDescription: "Deep technical audits and optimizations pushing your platform to the edge.",
                heroImage: "/mockup_optimization.png",
                details: "We analyze bottlenecks from the database level up to the frontend render cycle, implementing caching and CDN strategies.",
                features: [
                    { icon: "Zap", title: "Edge caching strategy", desc: "Serving dynamic content from locations inches away from your users." },
                    { icon: "Code", title: "Database query tuning", desc: "Rewriting inefficient ORM queries and implementing read-replicas." },
                    { icon: "Search", title: "Core Web Vitals", desc: "Optimizing LCP, FID, and CLS for maximum SEO performance." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Platform environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Platform framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Platform solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Platform deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Platform Performance Optimization Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Platform Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Platform Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Platform operations.", solution: "A completely bespoke, cloud-native Platform ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Platform workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Platform pipelines." }
                                        ]
            }
        ]
    },
    "government": {
        title: "Government & Regulatory Agencies",
        slug: "government",
        heroDescription: "Clearance-ready digital forensics and investigation support for the public sector.",
        heroImage: "/hero_gov.png",
        overview: "We provide highly secure, court-admissible forensic collections, analysis, and infrastructure solutions compliant with strict government protocols.",
        whyChooseUs: [
            { title: "Cleared Personnel", desc: "Analysts holding advanced government security clearances.", icon: "ShieldCheck" },
            { title: "Court-Admissible Evidence", desc: "Flawless chain-of-custody documentation holding up under highest scrutiny.", icon: "FileText" },
            { title: "Air-Gapped Labs", desc: "Secure facilities designed specifically for classified material handling.", icon: "Lock" }
        ],
        process: [
            { step: "01", title: "Authorization", desc: "Securing legal warrants and establishing strict operational parameters." },
            { step: "02", title: "Preservation", desc: "Bit-for-bit imaging of target systems under isolated conditions." },
            { step: "03", title: "Analysis", desc: "Deep forensic processing using proprietary and classified methodologies." },
            { step: "04", title: "Reporting", desc: "Producing expert witness testimony and detailed technical readouts." }
        ],
        metrics: [
            { value: "100+", label: "AGENCY ASSISTANCES" },
            { value: "100%", label: "CHAIN OF CUSTODY" },
            { value: "0", label: "EVIDENCE TAMPERING" },
            { value: "24h", label: "DEPLOYMENT READY" }
        ],
        subcategories: [
            {
                title: "Digital Evidence Identification & Collection",
                slug: "digital-evidence-collection",
                heroTitle: "Flawless Evidence Acquisition",
                heroDescription: "Forensically sound data extraction from servers, mobile devices, and dark web infrastructure.",
                heroImage: "/mockup_gov_evidence.png",
                details: "Deployment of specialized teams to secure volatile data and physical devices while maintaining absolute legal integrity.",
                features: [
                    { icon: "Database", title: "Live memory capture", desc: "Extracting RAM data containing decryption keys and active malware." },
                    { icon: "Lock", title: "Write-blocking technology", desc: "Hardware safeguards physically preventing data alteration." },
                    { icon: "Shield", title: "Cloud extraction", desc: "Securing Office365 and AWS data via legal compliance API channels." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Digital environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Digital framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Digital solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Digital deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Digital Evidence Identification & Collection Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Digital Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Digital Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Digital operations.", solution: "A completely bespoke, cloud-native Digital ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Digital workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Digital pipelines." }
                                        ]
            },
            {
                title: "On-Site Investigation & Forensic Support",
                slug: "on-site-investigation",
                heroTitle: "Tactical Field Deployments",
                heroDescription: "Expert forensic technicians embedded directly with law enforcement raid teams.",
                heroImage: "/mockup_gov_field.png",
                details: "Immediate on-scene triage, circumventing booby-trapped systems and securing encrypted devices before they are locked.",
                features: [
                    { icon: "Zap", title: "Rapid triage", desc: "On-site intelligence extraction to guide ongoing physical operations." },
                    { icon: "Target", title: "Anti-forensic defeat", desc: "Bypassing biometric and software-based self-destruct mechanisms." },
                    { icon: "Activity", title: "Network isolation", desc: "Severing remote wipe capabilities without triggering shutdown scripts." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current On-Site environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke On-Site framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the On-Site solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the On-Site deployment." }
                                        ],
                portfolio: [
                                            { title: "Global On-Site Investigation & Forensic Support Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise On-Site Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable On-Site Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity On-Site operations.", solution: "A completely bespoke, cloud-native On-Site ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard On-Site workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all On-Site pipelines." }
                                        ]
            },
            {
                title: "Mobile & Computer Data Extraction",
                slug: "data-extraction",
                heroTitle: "Bypassing Advanced Encryption",
                heroDescription: "Extracting critical intelligence from locked iOS, Android, and encrypted desktop systems.",
                heroImage: "/mockup_gov_mobile.png",
                details: "Utilizing advanced exploits and chip-off methodologies to recover data from severely damaged or maliciously locked devices.",
                features: [
                    { icon: "Smartphone", title: "Chip-off extraction", desc: "Physically removing memory chips from destroyed motherboards." },
                    { icon: "Code", title: "0-day exploitation", desc: "Leveraging unpatched vulnerabilities to bypass lock screens." },
                    { icon: "Search", title: "Deleted app recovery", desc: "Reconstructing secure messaging app databases (Signal, Telegram)." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Mobile environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Mobile framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Mobile solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Mobile deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Mobile & Computer Data Extraction Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Mobile Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Mobile Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Mobile operations.", solution: "A completely bespoke, cloud-native Mobile ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Mobile workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Mobile pipelines." }
                                        ]
            },
            {
                title: "Deleted Data Recovery & Analysis",
                slug: "data-recovery-analysis",
                heroTitle: "Resurrecting Destroyed Evidence",
                heroDescription: "Advanced file carving recovering intelligence from formatted and damaged storage.",
                heroImage: "/mockup_gov_recovery.png",
                details: "Deep-sector analysis reconstructing fragmented data remnants into actionable intelligence.",
                features: [
                    { icon: "FileText", title: "Raw sector carving", desc: "Identifying file signatures in unallocated disk space." },
                    { icon: "Database", title: "RAID reconstruction", desc: "Rebuilding enterprise storage arrays after intentional wiping." },
                    { icon: "Activity", title: "Shadow copy analysis", desc: "Extracting historical system states from hidden Windows artifacts." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Deleted environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Deleted framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Deleted solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Deleted deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Deleted Data Recovery & Analysis Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Deleted Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Deleted Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Deleted operations.", solution: "A completely bespoke, cloud-native Deleted ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Deleted workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Deleted pipelines." }
                                        ]
            },
            {
                title: "Email & Communication Forensics",
                slug: "email-communication-forensics",
                heroTitle: "Mapping the Conspiracy",
                heroDescription: "Tracing corporate espionage and threat actor communication networks.",
                heroImage: "/mockup_gov_email.png",
                details: "Analyzing headers, attachments, and metadata across thousands of inboxes to prove intent and attribution.",
                features: [
                    { icon: "Target", title: "Attribution mapping", desc: "Linking spoofed identities to physical locations and individuals." },
                    { icon: "Search", title: "Deep metadata analysis", desc: "Extracting GPS, author, and revision history from attached documents." },
                    { icon: "Lock", title: "Encrypted mail analysis", desc: "Bypassing PGP and recovering deleted draft communications." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Email environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Email framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Email solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Email deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Email & Communication Forensics Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Email Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Email Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Email operations.", solution: "A completely bespoke, cloud-native Email ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Email workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Email pipelines." }
                                        ]
            },
            {
                title: "Financial & Transaction Data Investigation",
                slug: "financial-data-investigation",
                heroTitle: "Following the Digital Money",
                heroDescription: "Cryptocurrency tracing and complex financial fraud analysis.",
                heroImage: "/mockup_gov_finance.png",
                details: "Tracing laundered funds through blockchain mixers, shell company networks, and decentralized exchanges.",
                features: [
                    { icon: "Activity", title: "Blockchain analysis", desc: "Mapping wallet movements across Bitcoin, Ethereum, and Monero protocols." },
                    { icon: "Database", title: "ERP database forensics", desc: "Identifying manipulated ledger entries in SAP and Oracle." },
                    { icon: "Shield", title: "Sanction evasion tracking", desc: "Identifying dark web transactions violating OFAC regulations." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Financial environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Financial framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Financial solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Financial deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Financial & Transaction Data Investigation Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Financial Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Financial Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Financial operations.", solution: "A completely bespoke, cloud-native Financial ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Financial workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Financial pipelines." }
                                        ]
            },
            {
                title: "Digital Activity & Evidence Trail Analysis",
                slug: "evidence-trail-analysis",
                heroTitle: "Reconstructing the Timeline",
                heroDescription: "Pasting together a second-by-second timeline of illicit activity.",
                heroImage: "/mockup_gov_timeline.png",
                details: "Correlating system logs, router traffic, and application artifacts to definitively prove what occurred and when.",
                features: [
                    { icon: "Layout", title: "Event correlation", desc: "Merging disparate log sources into a unified chronological narrative." },
                    { icon: "Code", title: "Registry analysis", desc: "Determining exactly when specific USB drives were connected." },
                    { icon: "Search", title: "Browser artifact review", desc: "Reconstructing deleted search histories and incognito sessions." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Digital environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Digital framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Digital solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Digital deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Digital Activity & Evidence Trail Analysis Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Digital Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Digital Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Digital operations.", solution: "A completely bespoke, cloud-native Digital ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Digital workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Digital pipelines." }
                                        ]
            },
            {
                title: "Forensic Reporting & Compliance Documentation",
                slug: "forensic-reporting",
                heroTitle: "Expert Witness Readiness",
                heroDescription: "Translating complex binary analysis into courtroom-ready documentation.",
                heroImage: "/mockup_gov_reporting.png",
                details: "Generating comprehensive, legally defensible reports supported by our GIAC-certified expert witnesses.",
                features: [
                    { icon: "FileText", title: "Jury-ready narratives", desc: "Simplifying complex cyber concepts for non-technical audiences." },
                    { icon: "ShieldCheck", title: "Peer-reviewed methodology", desc: "Ensuring all findings adhere strictly to Daubert standards." },
                    { icon: "Lock", title: "Chain of custody logs", desc: "Immutable documentation tracking physical evidence handling." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Forensic environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Forensic framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Forensic solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Forensic deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Forensic Reporting & Compliance Documentation Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Forensic Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Forensic Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Forensic operations.", solution: "A completely bespoke, cloud-native Forensic ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Forensic workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Forensic pipelines." }
                                        ]
            },
            {
                title: "Evidence Preservation & Secure Archival",
                slug: "evidence-preservation",
                heroTitle: "Immutable Digital Vaults",
                heroDescription: "Long-term cold storage preserving evidence integrity for decades.",
                heroImage: "/mockup_gov_archival.png",
                details: "Military-grade physical and digital facilities protecting highly sensitive findings throughout lengthy appeals processes.",
                features: [
                    { icon: "Database", title: "Air-gapped storage", desc: "Offline vaulting preventing remote tampering or ransomware." },
                    { icon: "Code", title: "Cryptographic hashing", desc: "Continuous automated auditing verifying data hasn't suffered bit-rot." },
                    { icon: "Lock", title: "SCIF environment", desc: "Physical security exceeding standard government requirements." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Evidence environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Evidence framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Evidence solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Evidence deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Evidence Preservation & Secure Archival Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Evidence Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Evidence Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Evidence operations.", solution: "A completely bespoke, cloud-native Evidence ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Evidence workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Evidence pipelines." }
                                        ]
            },
            {
                title: "Investigation Case Management Systems",
                slug: "case-management-systems",
                heroTitle: "Centralized Intelligence Hubs",
                heroDescription: "Secure software solutions for managing complex, multi-jurisdictional investigations.",
                heroImage: "/mockup_gov_cms.png",
                details: "Custom-built platforms enabling secure collaboration between different alphabet agencies without compromising compartmented information.",
                features: [
                    { icon: "Shield", title: "Compartmented access", desc: "Need-to-know access controls preventing intelligence leaks." },
                    { icon: "Layout", title: "Link analysis visualization", desc: "Automated graphing of connections between suspects and assets." },
                    { icon: "Activity", title: "Secure evidence sharing", desc: "Encrypted, auditable portals for transferring terabytes of data." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Investigation environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Investigation framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Investigation solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Investigation deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Investigation Case Management Systems Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Investigation Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Investigation Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Investigation operations.", solution: "A completely bespoke, cloud-native Investigation ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Investigation workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Investigation pipelines." }
                                        ]
            }
        ]
    },
    "finance": {
        title: "Financial & Tax Compliance",
        slug: "finance",
        heroDescription: "Precision forensic accounting and regulatory compliance systems.",
        heroImage: "/hero_finance.png",
        overview: "Securing financial operations against fraud while ensuring strict adherence to global tax and regulatory frameworks.",
        whyChooseUs: [
            { title: "Precision Accounting", desc: "Automated auditing at the transaction level.", icon: "Database" },
            { title: "Immutable Ledgers", desc: "Cryptographically verified financial histories.", icon: "Lock" },
            { title: "Compliance Automations", desc: "Real-time updates to regulatory changes.", icon: "Activity" }
        ],
        process: [
            { step: "01", title: "Audit", desc: "Deep-dive financial data extraction." },
            { step: "02", title: "Analyze", desc: "Algorithmic pattern recognition." },
            { step: "03", title: "Report", desc: "Compliance documentation." },
            { step: "04", title: "Optimize", desc: "Workflow automation implementation." }
        ],
        metrics: [
            { value: "$10B+", label: "TRANSACTIONS AUDITED" },
            { value: "0", label: "COMPLIANCE BREACHES" },
            { value: "50+", label: "TAX CODES MAPPED" },
            { value: "100%", label: "ACCURACY RATE" }
        ],
        subcategories: [
            {
                title: "TDS & Financial Data Examination",
                slug: "tds-financial-examination",
                heroTitle: "Automated Tax Compliance",
                heroDescription: "Automated TDS reconciliation and error detection.",
                heroImage: "/mockup_finance_tds.png",
                details: "Streamlined algorithms managing complex tax deductions at source across millions of ledger entries seamlessly.",
                features: [
                    { icon: "Database", title: "Automated reconciliation", desc: "Matching ledger entries to bank statements in real-time." },
                    { icon: "Search", title: "Error tracking", desc: "Identifying anomalous deductions instantly." },
                    { icon: "ShieldCheck", title: "Regulatory proof", desc: "Generating audit-ready documentation automatically." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current TDS & environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke TDS & framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the TDS & solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the TDS & deployment." }
                                        ],
                portfolio: [
                                            { title: "Global TDS & Financial Data Examination Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise TDS & Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable TDS & Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity TDS & operations.", solution: "A completely bespoke, cloud-native TDS & ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard TDS & workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all TDS & pipelines." }
                                        ]
            },
            {
                title: "Transaction & Fraud Pattern Analysis",
                slug: "fraud-pattern-analysis",
                heroTitle: "Predictive Anti-Fraud Modeling",
                heroDescription: "AI-driven anomaly detection in high-frequency trading.",
                heroImage: "/mockup_finance_fraud.png",
                details: "Deploying machine learning to identify hidden relationships in transaction graphs to halt money laundering before settlement.",
                features: [
                    { icon: "Activity", title: "Behavioral analytics", desc: "Identifying deviations from baseline trading behaviors." },
                    { icon: "Zap", title: "Real-time mitigation", desc: "Freezing suspicious accounts at the microsecond level." },
                    { icon: "Layout", title: "Graph databases", desc: "Visualizing complex networks of illicit fund transfers." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Transaction environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Transaction framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Transaction solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Transaction deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Transaction & Fraud Pattern Analysis Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Transaction Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Transaction Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Transaction operations.", solution: "A completely bespoke, cloud-native Transaction ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Transaction workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Transaction pipelines." }
                                        ]
            },
            {
                title: "Digital Evidence Verification & Validation",
                slug: "evidence-verification",
                heroTitle: "Cryptographic Evidence Validation",
                heroDescription: "Cryptographic validation of financial ledgers.",
                heroImage: "/mockup_finance_evidence.png",
                details: "Mathematical proof of data integrity ensuring financial records have not been altered post-creation.",
                features: [
                    { icon: "Lock", title: "Hash verification", desc: "Comparing live databases against immutable blockchain anchors." },
                    { icon: "Code", title: "Log analysis", desc: "Tracing database manipulations back to root users." },
                    { icon: "Shield", title: "Non-repudiation", desc: "Ensuring transaction authors cannot deny their actions." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Digital environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Digital framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Digital solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Digital deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Digital Evidence Verification & Validation Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Digital Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Digital Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Digital operations.", solution: "A completely bespoke, cloud-native Digital ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Digital workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Digital pipelines." }
                                        ]
            },
            {
                title: "Financial Audit & Compliance Support",
                slug: "audit-compliance-support",
                heroTitle: "Frictionless Financial Auditing",
                heroDescription: "End-to-end support for external SOX/PCI audits.",
                heroImage: "/mockup_finance_audit.png",
                details: "Centralizing disparate financial data into unified formats required by Big Four accounting firms.",
                features: [
                    { icon: "FileText", title: "Data mapping", desc: "Translating legacy mainframe data into standard audit formats." },
                    { icon: "Target", title: "Control testing", desc: "Automated verification of separation of duties." },
                    { icon: "Search", title: "Continuous auditing", desc: "Moving away from periodic checks to real-time compliance." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Financial environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Financial framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Financial solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Financial deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Financial Audit & Compliance Support Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Financial Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Financial Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Financial operations.", solution: "A completely bespoke, cloud-native Financial ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Financial workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Financial pipelines." }
                                        ]
            },
            {
                title: "Risk Identification & Regulatory Review",
                slug: "risk-identification",
                heroTitle: "Proactive Risk Mitigation",
                heroDescription: "Proactive mapping of exposure to changing tax codes.",
                heroImage: "/mockup_finance_risk.png",
                details: "Algorithmic review of business operations against thousands of global regulatory frameworks.",
                features: [
                    { icon: "Activity", title: "Scenario modeling", desc: "Stress-testing financial data against simulated market shocks." },
                    { icon: "Smartphone", title: "Real-time alerts", desc: "Push notifications on sudden regulatory exposure." },
                    { icon: "ShieldCheck", title: "Automated adapting", desc: "Dynamic adjustment of tax calculation parameters." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Risk environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Risk framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Risk solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Risk deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Risk Identification & Regulatory Review Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Risk Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Risk Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Risk operations.", solution: "A completely bespoke, cloud-native Risk ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Risk workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Risk pipelines." }
                                        ]
            },
            {
                title: "Investigation Reporting & Documentation",
                slug: "investigation-reporting",
                heroTitle: "Executable Intelligence",
                heroDescription: "SEC-ready fraud investigation readouts.",
                heroImage: "/mockup_finance_reporting.png",
                details: "Transforming dense forensic data into clear narratives supporting legal actions against financial crimes.",
                features: [
                    { icon: "FileText", title: "Executive summaries", desc: "High-level overviews for C-suite decision making." },
                    { icon: "Database", title: "Data appendices", desc: "Exhaustive raw data logs attached for legal discovery." },
                    { icon: "Layout", title: "Visual narratives", desc: "Infographics breaking down complex money trails." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Investigation environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Investigation framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Investigation solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Investigation deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Investigation Reporting & Documentation Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Investigation Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Investigation Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Investigation operations.", solution: "A completely bespoke, cloud-native Investigation ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Investigation workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Investigation pipelines." }
                                        ]
            },
            {
                title: "Regulatory Submission Assistance",
                slug: "regulatory-submission",
                heroTitle: "Automated Regulatory Filings",
                heroDescription: "Automated aggregation for quarterly filings.",
                heroImage: "/mockup_finance_submission.png",
                details: "Software pipelines collecting data across disparate global branches to format XML files for regulators.",
                features: [
                    { icon: "Zap", title: "API integrations", desc: "Direct connections to regulatory reporting gateways." },
                    { icon: "Code", title: "Format validation", desc: "Pre-flight checks ensuring submission acceptances." },
                    { icon: "Lock", title: "Submission encryption", desc: "Securing data in transit to government agencies." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Regulatory environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Regulatory framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Regulatory solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Regulatory deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Regulatory Submission Assistance Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Regulatory Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Regulatory Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Regulatory operations.", solution: "A completely bespoke, cloud-native Regulatory ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Regulatory workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Regulatory pipelines." }
                                        ]
            },
            {
                title: "Compliance Workflow & Analysis Systems",
                slug: "compliance-workflow",
                heroTitle: "Digitized Compliance Operations",
                heroDescription: "Custom software replacing manual spreadsheet compliance.",
                heroImage: "/mockup_finance_workflow.png",
                details: "Architecting centralized dashboards that orchestrate compliance tasks across multi-national organizations.",
                features: [
                    { icon: "Layout", title: "Unified dashboards", desc: "Single pane of glass for global compliance status." },
                    { icon: "Activity", title: "Task orchestration", desc: "Automated assignment and tracking of compliance duties." },
                    { icon: "Target", title: "Bottleneck analysis", desc: "Identifying efficiency drops in compliance procedures." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Compliance environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Compliance framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Compliance solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Compliance deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Compliance Workflow & Analysis Systems Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Compliance Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Compliance Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Compliance operations.", solution: "A completely bespoke, cloud-native Compliance ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Compliance workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Compliance pipelines." }
                                        ]
            }
        ]
    },
    "security": {
        title: "Security-Sensitive Organizations",
        slug: "security",
        heroDescription: "Hardened infrastructure for organizations where compromise is not an option.",
        heroImage: "/hero_security.png",
        overview: "Providing zero-trust architecture, continuous threat hunting, and compliance governance for critical infrastructure and defense contractors.",
        whyChooseUs: [
            { title: "Zero-Trust Architecture", desc: "Continuous verification for every user and device.", icon: "Lock" },
            { title: "Military-Grade Defense", desc: "Defeating state-sponsored APTs on a daily basis.", icon: "Shield" },
            { title: "Rapid Remediation", desc: "Isolating active threats in milliseconds.", icon: "Zap" }
        ],
        process: [
            { step: "01", title: "Assess", desc: "Red-team penetration testing." },
            { step: "02", title: "Harden", desc: "Zero-trust architecture deployment." },
            { step: "03", title: "Monitor", desc: "24/7 SIEM monitoring." },
            { step: "04", title: "Respond", desc: "Automated incident containment." }
        ],
        metrics: [
            { value: "0", label: "DATA BREACHES" },
            { value: "< 1ms", label: "THREAT DETECTION" },
            { value: "NIST 800", label: "COMPLIANT" },
            { value: "100%", label: "ASSET VISIBILITY" }
        ],
        subcategories: [
            {
                title: "Security Risk Assessment",
                slug: "security-risk-assessment",
                heroTitle: "Complete Attack Surface Mapping",
                heroDescription: "Comprehensive vulnerability mapping.",
                heroImage: "/mockup_security_assessment.png",
                details: "Identifying hidden exposures across cloud, on-prem, and hybrid environments before they can be exploited.",
                features: [
                    { icon: "Search", title: "External footprinting", desc: "Mapping public-facing assets visible to attackers." },
                    { icon: "Database", title: "Internal scanning", desc: "Identifying misconfigurations within protected zones." },
                    { icon: "Activity", title: "Risk scoring", desc: "Prioritizing remediation based on CVSS and business impact." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Security environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Security framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Security solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Security deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Security Risk Assessment Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Security Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Security Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Security operations.", solution: "A completely bespoke, cloud-native Security ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Security workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Security pipelines." }
                                        ]
            },
            {
                title: "Vulnerability & Compliance Audits",
                slug: "vulnerability-audits",
                heroTitle: "Framework Alignment Verification",
                heroDescription: "CMMC and NIST framework gap analysis.",
                heroImage: "/mockup_security_audit.png",
                details: "Mapping existing technical controls strictly against advanced defense contracting requirements.",
                features: [
                    { icon: "ShieldCheck", title: "Framework cross-walking", desc: "Mapping overlapping controls across multiple regulations." },
                    { icon: "FileText", title: "Automated POAM", desc: "Auto-generating Plans of Action and Milestones." },
                    { icon: "Target", title: "Continuous adherence", desc: "Tracking configuration drift ruining compliance states." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Vulnerability environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Vulnerability framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Vulnerability solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Vulnerability deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Vulnerability & Compliance Audits Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Vulnerability Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Vulnerability Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Vulnerability operations.", solution: "A completely bespoke, cloud-native Vulnerability ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Vulnerability workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Vulnerability pipelines." }
                                        ]
            },
            {
                title: "Threat Monitoring & Incident Response",
                slug: "threat-monitoring",
                heroTitle: "Active Defense Operations",
                heroDescription: "Global SOC operations with rapid containment.",
                heroImage: "/mockup_security_soc.png",
                details: "24/7 eyes-on-glass monitoring coupled with automated SOAR playbooks for immediate isolation of ransomware.",
                features: [
                    { icon: "Zap", title: "Automated isolation", desc: "Severing infected endpoints from the network instantly." },
                    { icon: "Activity", title: "Behavioral heuristics", desc: "Catching zero-days based on anomalous execution." },
                    { icon: "Code", title: "Malware reverse-engineering", desc: "Decompiling threats to build bespoke IOCs." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Threat environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Threat framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Threat solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Threat deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Threat Monitoring & Incident Response Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Threat Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Threat Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Threat operations.", solution: "A completely bespoke, cloud-native Threat ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Threat workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Threat pipelines." }
                                        ]
            },
            {
                title: "Access Control & Data Protection",
                slug: "access-control",
                heroTitle: "Zero-Trust Identity Vaults",
                heroDescription: "Biometric and hardware-token IAM implementations.",
                heroImage: "/mockup_security_iam.png",
                details: "Ensuring only mathematically verified identities can access segmented critical data enclaves.",
                features: [
                    { icon: "Lock", title: "FIDO2 integration", desc: "Phishing-resistant hardware token authentication." },
                    { icon: "Smartphone", title: "Contextual access", desc: "Denying logins based on device posture or geofencing." },
                    { icon: "Database", title: "Data-in-use encryption", desc: "Protecting information while actively being processed." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Access environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Access framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Access solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Access deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Access Control & Data Protection Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Access Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Access Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Access operations.", solution: "A completely bespoke, cloud-native Access ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Access workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Access pipelines." }
                                        ]
            },
            {
                title: "Security Governance Support",
                slug: "security-governance",
                heroTitle: "Board-Level Cyber Strategy",
                heroDescription: "vCISO support for board-level strategy.",
                heroImage: "/mockup_security_vciso.png",
                details: "Translating deep technical risks into localized business impacts for executive decision making.",
                features: [
                    { icon: "Layout", title: "Strategic roadmapping", desc: "Multi-year plans aligning security with business growth." },
                    { icon: "Target", title: "Budget optimization", desc: "Consolidating overlapping security tools for ROI." },
                    { icon: "FileText", title: "Policy development", desc: "Writing enforceable corporate security directives." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Security environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Security framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Security solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Security deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Security Governance Support Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Security Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Security Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Security operations.", solution: "A completely bespoke, cloud-native Security ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Security workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Security pipelines." }
                                        ]
            },
            {
                title: "Compliance Tracking Systems",
                slug: "compliance-tracking",
                heroTitle: "Automated Audit Readiness",
                heroDescription: "Software for continuous audit readiness.",
                heroImage: "/mockup_security_tracking.png",
                details: "Dashboards ingesting telemetry to prove compliance states to auditors without manual evidence gathering.",
                features: [
                    { icon: "Code", title: "API ingestions", desc: "Pulling configuration states directly from firewalls." },
                    { icon: "Shield", title: "Evidence mapping", desc: "Tying specific logs to specific compliance controls." },
                    { icon: "Activity", title: "Drift alerting", desc: "Notifying engineers when systems fall out of compliance." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Compliance environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Compliance framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Compliance solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Compliance deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Compliance Tracking Systems Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Compliance Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Compliance Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Compliance operations.", solution: "A completely bespoke, cloud-native Compliance ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Compliance workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Compliance pipelines." }
                                        ]
            },
            {
                title: "Risk Reporting Dashboards",
                slug: "risk-reporting",
                heroTitle: "Visualizing the Attack Surface",
                heroDescription: "Real-time visualization of attack surface telemetry.",
                heroImage: "/mockup_security_dashboards.png",
                details: "Single-pane-of-glass views into patching latency, alert volumes, and overall enterprise risk scores.",
                features: [
                    { icon: "Layout", title: "Custom widgets", desc: "Tailoring views for engineers versus executives." },
                    { icon: "Target", title: "SLA tracking", desc: "Monitoring Mean-Time-To-Remediate metrics." },
                    { icon: "Zap", title: "Dynamic risk scoring", desc: "Calculating live risk based on current threat intelligence." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Risk environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Risk framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Risk solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Risk deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Risk Reporting Dashboards Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Risk Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Risk Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Risk operations.", solution: "A completely bespoke, cloud-native Risk ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Risk workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Risk pipelines." }
                                        ]
            },
            {
                title: "Secure Infrastructure Solutions",
                slug: "secure-infrastructure",
                heroTitle: "Air-Gapped Sovereign Cloud",
                heroDescription: "Air-gapped and hardened cloud deployments.",
                heroImage: "/mockup_security_infra.png",
                details: "Architecting physically and logically isolated environments for the processing of heavily restricted data classes.",
                features: [
                    { icon: "Code", title: "Infrastructure-as-Code", desc: "Deploying secure baseline environments via Terraform." },
                    { icon: "Database", title: "Micro-segmentation", desc: "Isolating workloads to prevent lateral movement." },
                    { icon: "Lock", title: "Hardware security modules", desc: "Dedicated physical appliances for key generation." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Secure environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Secure framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Secure solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Secure deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Secure Infrastructure Solutions Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Secure Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Secure Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Secure operations.", solution: "A completely bespoke, cloud-native Secure ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Secure workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Secure pipelines." }
                                        ]
            }
        ]
    },
    "enterprise": {
        title: "Enterprise & Corporate Operations",
        slug: "enterprise",
        heroDescription: "Streamlining massive operational scale securely.",
        heroImage: "/hero_enterprise.png",
        overview: "Replacing legacy friction with automated, secure, and infinitely scalable business process solutions.",
        whyChooseUs: [
            { title: "Silo Elimination", desc: "Connecting fragmented systems into unified platforms.", icon: "Layout" },
            { title: "Cognitive Automation", desc: "Deploying AI to handle complex decision trees.", icon: "Activity" },
            { title: "Agile Scalability", desc: "Infrastructure that grows lockstep with your workforce.", icon: "Zap" }
        ],
        process: [
            { step: "01", title: "Map", desc: "Process flow documentation." },
            { step: "02", title: "Architect", desc: "Designing automation pipelines." },
            { step: "03", title: "Build", desc: "Developing custom enterprise tools." },
            { step: "04", title: "Deploy", desc: "Change management and training." }
        ],
        metrics: [
            { value: "50%", label: "COST REDUCTION" },
            { value: "10x", label: "PROCESS SPEED" },
            { value: "0", label: "MANUAL ERRORS" },
            { value: "24/7", label: "UPTIME TARGETS" }
        ],
        subcategories: [
            {
                title: "Business Process Automation",
                slug: "business-process-automation",
                heroTitle: "Hyper-Automated Workflows",
                heroDescription: "RPA and script-based workflow replacements.",
                heroImage: "/mockup_enterprise_rpa.png",
                details: "Removing human bottlenecks from data entry, approval chains, and inter-departmental communications.",
                features: [
                    { icon: "Zap", title: "Robotic Process Automation", desc: "Software bots mimicking user actions across legacy UI applications." },
                    { icon: "Code", title: "API orchestrations", desc: "Direct system-to-system integrations bypassing manual interfaces." },
                    { icon: "Activity", title: "Event-driven triggers", desc: "Firing workflows instantly upon database updates." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Business environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Business framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Business solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Business deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Business Process Automation Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Business Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Business Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Business operations.", solution: "A completely bespoke, cloud-native Business ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Business workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Business pipelines." }
                                        ]
            },
            {
                title: "Back Office & Workflow Management",
                slug: "back-office-management",
                heroTitle: "Centralized Back-Office Hubs",
                heroDescription: "Centralized platforms for distributed teams.",
                heroImage: "/mockup_enterprise_backoffice.png",
                details: "Custom software unifying HR, finance, and legal workflows into a single, cohesive interface.",
                features: [
                    { icon: "Layout", title: "Unified portals", desc: "A single login for employees to access all backend tools." },
                    { icon: "Database", title: "Centralized master data", desc: "A single source of truth for employee and vendor records." },
                    { icon: "Lock", title: "Granular ACLs", desc: "Ensuring employees only see data relevant to their role." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Back environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Back framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Back solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Back deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Back Office & Workflow Management Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Back Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Back Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Back operations.", solution: "A completely bespoke, cloud-native Back ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Back workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Back pipelines." }
                                        ]
            },
            {
                title: "Customer Support Operations",
                slug: "customer-support",
                heroTitle: "AI-Augmented Support Platforms",
                heroDescription: "AI-augmented omnichannel support platforms.",
                heroImage: "/mockup_enterprise_support.png",
                details: "Intelligent routing, automated ticketing, and conversational AI chatbots reducing human agent loads globally.",
                features: [
                    { icon: "Target", title: "Intelligent routing", desc: "Sending tickets to specific agents based on NLP sentiment analysis." },
                    { icon: "Smartphone", title: "Omnichannel presence", desc: "Merging SMS, email, and live chat into one queue." },
                    { icon: "Search", title: "Automated KB suggestions", desc: "Serving agents relevant manual pages instantly." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Customer environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Customer framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Customer solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Customer deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Customer Support Operations Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Customer Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Customer Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Customer operations.", solution: "A completely bespoke, cloud-native Customer ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Customer workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Customer pipelines." }
                                        ]
            },
            {
                title: "Document & Data Processing Systems",
                slug: "data-processing",
                heroTitle: "Unstructured Data Mining",
                heroDescription: "OCR and NLP-driven document sorting.",
                heroImage: "/mockup_enterprise_doc.png",
                details: "Transforming millions of physical pages and raw PDFs into searchable, actionable database records automatically.",
                features: [
                    { icon: "FileText", title: "Computer vision OCR", desc: "Extracting text from low-quality scans and handwritten forms." },
                    { icon: "Search", title: "Entity extraction", desc: "Automatically tagging people, places, and monetary values in documents." },
                    { icon: "Database", title: "Automated routing", desc: "Sending processed forms to the correct department based on content." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Document environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Document framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Document solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Document deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Document & Data Processing Systems Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Document Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Document Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Document operations.", solution: "A completely bespoke, cloud-native Document ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Document workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Document pipelines." }
                                        ]
            },
            {
                title: "Workforce & Performance Monitoring",
                slug: "workforce-monitoring",
                heroTitle: "Remote Force Telemetry",
                heroDescription: "Privacy-compliant telematics and KPI tracking.",
                heroImage: "/mockup_enterprise_telemetry.png",
                details: "Monitoring remote employee productivity and identifying process bottlenecks without violating corporate privacy policies.",
                features: [
                    { icon: "Activity", title: "Application tracking", desc: "Measuring time spent in approved vs unapproved software." },
                    { icon: "Lock", title: "Anonymized aggregation", desc: "Analyzing trends across teams without targeting individuals." },
                    { icon: "Target", title: "Burnout prediction", desc: "Identifying anomalous working hours pointing to over-utilization." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Workforce environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Workforce framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Workforce solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Workforce deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Workforce & Performance Monitoring Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Workforce Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Workforce Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Workforce operations.", solution: "A completely bespoke, cloud-native Workforce ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Workforce workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Workforce pipelines." }
                                        ]
            },
            {
                title: "Operational Reporting Dashboards",
                slug: "operational-reporting",
                heroTitle: "Executive Visibility Arrays",
                heroDescription: "C-suite visibility into ground-level metrics.",
                heroImage: "/mockup_enterprise_dashboards.png",
                details: "Real-time extraction of data from factory floors, supply chains, and server racks translated into business logic.",
                features: [
                    { icon: "Layout", title: "Live metrics", desc: "Instantaneous updates replacing weekly spreadsheet rollups." },
                    { icon: "Database", title: "Drill-down capabilities", desc: "Moving from global views down to individual asset performance." },
                    { icon: "Zap", title: "Automated alerting", desc: "SMS alerts when defined thresholds are crossed." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Operational environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Operational framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Operational solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Operational deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Operational Reporting Dashboards Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Operational Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Operational Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Operational operations.", solution: "A completely bespoke, cloud-native Operational ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Operational workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Operational pipelines." }
                                        ]
            },
            {
                title: "Process Optimization Solutions",
                slug: "process-optimization",
                heroTitle: "Lean-Sigma Engineering",
                heroDescription: "Lean-six sigma tech implementations.",
                heroImage: "/mockup_enterprise_optimization.png",
                details: "Utilizing software to enforce optimized process paths, preventing procedural deviations that cause latency.",
                features: [
                    { icon: "Activity", title: "Process mining", desc: "Analyzing system logs to discover actual vs intended workflows." },
                    { icon: "Shield", title: "Guardrail enforcement", desc: "Hard-coding critical steps so they cannot be bypassed." },
                    { icon: "RefreshCw", title: "Continuous feedback loops", desc: "Automated capturing of process friction points." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Process environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Process framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Process solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Process deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Process Optimization Solutions Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Process Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Process Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Process operations.", solution: "A completely bespoke, cloud-native Process ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Process workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Process pipelines." }
                                        ]
            },
            {
                title: "Enterprise Workflow Platforms",
                slug: "workflow-platforms",
                heroTitle: "Custom Monolith Replacements",
                heroDescription: "Custom monolithic ERP replacements.",
                heroImage: "/mockup_enterprise_erp.png",
                details: "Shedding licensing costs from massive ERP vendors by building customized, lightweight software exactly tailored to your needs.",
                features: [
                    { icon: "Code", title: "Microservices transition", desc: "Strangling the monolith slowly to reduce migration risk." },
                    { icon: "Zap", title: "Cloud-native deployment", desc: "Utilizing serverless functions for zero-maintenance compute." },
                    { icon: "Lock", title: "Custom integrations", desc: "Building bridges to obscure proprietary internal systems." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Enterprise environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Enterprise framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Enterprise solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Enterprise deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Enterprise Workflow Platforms Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Enterprise Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Enterprise Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Enterprise operations.", solution: "A completely bespoke, cloud-native Enterprise ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Enterprise workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Enterprise pipelines." }
                                        ]
            }
        ]
    },
    "data": {
        title: "Data-Driven Enterprises",
        slug: "data",
        heroDescription: "Transforming raw data into decisive strategic advantage.",
        heroImage: "/hero_data.png",
        overview: "Secure data pipelines, machine learning models, and executive dashboards designed to extract immense value from organizational data.",
        whyChooseUs: [
            { title: "Predictive Advantage", desc: "Seeing market shifts before they happen.", icon: "Activity" },
            { title: "Data Integrity", desc: "Ensuring your models train on pure truth.", icon: "Database" },
            { title: "Visual Clarity", desc: "Making complex insights immediately understandable.", icon: "Layout" }
        ],
        process: [
            { step: "01", title: "Extract", desc: "Connecting to disparate data silos." },
            { step: "02", title: "Cleanse", desc: "Sanitizing and normalizing datasets." },
            { step: "03", title: "Visualize", desc: "Building interactive Tableau/PowerBI layers." },
            { step: "04", title: "Predict", desc: "Deploying ML forecasting models." }
        ],
        metrics: [
            { value: "PB+", label: "DATA PROCESSED" },
            { value: "99%", label: "ACCURACY RATE" },
            { value: "Real-time", label: "STREAM PROCESSING" },
            { value: "10x", label: "ROI MULTIPLIER" }
        ],
        subcategories: [
            {
                title: "Business Intelligence Dashboards",
                slug: "bi-dashboards",
                heroTitle: "Interactive Corporate Reality",
                heroDescription: "Interactive aggregations of corporate reality.",
                heroImage: "/mockup_data_bi.png",
                details: "Connecting live endpoints to custom BI interfaces so executives can query the heartbeat of the organization instantly.",
                features: [
                    { icon: "Layout", title: "Custom visualizations", desc: "Bespoke D3.js charting for unique data relationships." },
                    { icon: "Zap", title: "Live querying", desc: "Bypassing caching to interrogate the database at the exact second." },
                    { icon: "Smartphone", title: "Mobile-first reporting", desc: "Optimizing dashboards for iPad and executive mobile devices." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Business environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Business framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Business solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Business deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Business Intelligence Dashboards Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Business Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Business Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Business operations.", solution: "A completely bespoke, cloud-native Business ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Business workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Business pipelines." }
                                        ]
            },
            {
                title: "Data Analytics & Visualization",
                slug: "data-analytics",
                heroTitle: "Painting with Big Data",
                heroDescription: "Turning big data into comprehensible narratives.",
                heroImage: "/mockup_data_visualization.png",
                details: "Breaking down billions of rows of metadata into distinct visual groupings uncovering hidden patterns.",
                features: [
                    { icon: "Search", title: "Cohort analysis", desc: "Isolating behavioral trends across segmented user groups." },
                    { icon: "Activity", title: "Funnel visualization", desc: "Mapping exactly where users drop off in complex processes." },
                    { icon: "Target", title: "A/B testing analytics", desc: "Statistical validation of optimization experiments." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Data environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Data framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Data solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Data deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Data Analytics & Visualization Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Data Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Data Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Data operations.", solution: "A completely bespoke, cloud-native Data ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Data workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Data pipelines." }
                                        ]
            },
            {
                title: "Performance & KPI Monitoring",
                slug: "kpi-monitoring",
                heroTitle: "Pulse Checks on the Enterprise",
                heroDescription: "Real-time alerting on critical business metrics.",
                heroImage: "/mockup_data_kpi.png",
                details: "Hard-coding your specific Key Performance Indicators into autonomous tracking systems resistant to manipulation.",
                features: [
                    { icon: "Database", title: "Immutable metric storage", desc: "Storing historical KPI data to prevent retroactive adjustments." },
                    { icon: "Zap", title: "Threshold triggers", desc: "Firing serverless functions when KPIs dip below critical levels." },
                    { icon: "Layout", title: "Leaderboarding", desc: "Gamifying metrics across distributed sales and operations teams." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Performance environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Performance framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Performance solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Performance deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Performance & KPI Monitoring Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Performance Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Performance Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Performance operations.", solution: "A completely bespoke, cloud-native Performance ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Performance workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Performance pipelines." }
                                        ]
            },
            {
                title: "Predictive Insights & Reporting",
                slug: "predictive-insights",
                heroTitle: "Algorithmic Forecasting",
                heroDescription: "Forecasting churn, revenue, and security events.",
                heroImage: "/mockup_data_predictive.png",
                details: "Training deep neural networks on historical corporate data to predict future quarterly outcomes with staggering accuracy.",
                features: [
                    { icon: "Code", title: "Custom ML models", desc: "Building TensorFlow architectures specific to your industry." },
                    { icon: "Activity", title: "Churn prediction", desc: "Flagging at-risk accounts weeks before they cancel." },
                    { icon: "Target", title: "Demand forecasting", desc: "Optimizing supply chain purchasing based on predictive inputs." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Predictive environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Predictive framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Predictive solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Predictive deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Predictive Insights & Reporting Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Predictive Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Predictive Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Predictive operations.", solution: "A completely bespoke, cloud-native Predictive ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Predictive workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Predictive pipelines." }
                                        ]
            },
            {
                title: "Data Processing & Validation",
                slug: "data-processing",
                heroTitle: "Sanitizing the Data Lake",
                heroDescription: "Ensuring zero garbage-in across your data lakes.",
                heroImage: "/mockup_data_validation.png",
                details: "Constructing massive ETL pipelines that strip corrupt, duplicated, or non-compliant data before it enters your analytics engine.",
                features: [
                    { icon: "Database", title: "Distributed ETL", desc: "Utilizing Apache Spark to process terabytes of data horizontally." },
                    { icon: "Shield", title: "PII redaction", desc: "Automatically scrubbing personally identifiable information to maintain GDPR." },
                    { icon: "Search", title: "Schema enforcement", desc: "Rejecting malformed inputs from third-party APIs instantly." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Data environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Data framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Data solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Data deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Data Processing & Validation Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Data Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Data Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Data operations.", solution: "A completely bespoke, cloud-native Data ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Data workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Data pipelines." }
                                        ]
            },
            {
                title: "Executive Decision Support Systems",
                slug: "decision-support",
                heroTitle: "Algorithmic Board Advisors",
                heroDescription: "High-level modeling for Board decisions.",
                heroImage: "/mockup_data_decision.png",
                details: "Scenario simulators allowing executives to adjust virtual parameters (price, headcount) and observe massive simulated outcomes.",
                features: [
                    { icon: "Layout", title: "What-If modeling", desc: "Adjusting slider variables to alter predictive outcomes." },
                    { icon: "Activity", title: "Market ingestion", desc: "Piping in external economic indicators to weight the model." },
                    { icon: "FileText", title: "Board-ready exporting", desc: "One-click generation of beautifully formatted PDF presentations." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Executive environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Executive framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Executive solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Executive deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Executive Decision Support Systems Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Executive Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Executive Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Executive operations.", solution: "A completely bespoke, cloud-native Executive ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Executive workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Executive pipelines." }
                                        ]
            },
            {
                title: "Operational Analytics Platforms",
                slug: "operational-analytics",
                heroTitle: "Ground-Truth Telemetry",
                heroDescription: "Granular data access for department heads.",
                heroImage: "/mockup_data_operational.png",
                details: "Empowering mid-level managers with specific, tightly scoped data tools to optimize their immediate departments.",
                features: [
                    { icon: "Target", title: "Scoped access", desc: "Row-level security ensuring managers only see their division's data." },
                    { icon: "Zap", title: "Real-time sync", desc: "Continuous replication from primary databases." },
                    { icon: "Code", title: "Self-service querying", desc: "No-code interfaces allowing managers to build their own reports." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Operational environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Operational framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Operational solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Operational deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Operational Analytics Platforms Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Operational Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Operational Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Operational operations.", solution: "A completely bespoke, cloud-native Operational ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Operational workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Operational pipelines." }
                                        ]
            },
            {
                title: "Data-Driven Reporting Solutions",
                slug: "driven-reporting",
                heroTitle: "Automated Data Journalism",
                heroDescription: "Automated generation of quarterly readouts.",
                heroImage: "/mockup_data_reporting.png",
                details: "LLM-driven systems that analyze metric changes and automatically write human-readable summaries explaining the 'why' behind the numbers.",
                features: [
                    { icon: "FileText", title: "NLG text generation", desc: "Natural Language Generation converting graphs into paragraphs." },
                    { icon: "Activity", title: "Trend highlighting", desc: "Automatically surfacing the most anomalous data points of the week." },
                    { icon: "Search", title: "Automated email distribution", desc: "Routing tailored reports to different teams every Monday at 8 AM." }
                ],
                process: [
                                            { step: "01", title: "Assessment", desc: "Deep-dive analysis of your current Data-Driven environment." },
                                            { step: "02", title: "Architecture", desc: "Designing a bespoke Data-Driven framework." },
                                            { step: "03", title: "Deployment", desc: "Implementing the Data-Driven solution with zero-trust guardrails." },
                                            { step: "04", title: "Optimization", desc: "Continuous mapping and refinement of the Data-Driven deployment." }
                                        ],
                portfolio: [
                                            { title: "Global Data-Driven Reporting Solutions Rollout", metrics: [{ label: "Efficiency Gain", value: "40%" }, { label: "Compliance", value: "100%" }] },
                                            { title: "Enterprise Data-Driven Ecosystem", metrics: [{ label: "Threats Blocked", value: "∞" }, { label: "Uptime", value: "99.99%" }] },
                                            { title: "Scalable Data-Driven Infrastructure", metrics: [{ label: "Latency Drop", value: "60%" }, { label: "ROI", value: "10x" }] }
                                        ],
                challengesVsSolutions: [
                                            { challenge: "Legacy architectures inherently struggle to support modern, high-velocity Data-Driven operations.", solution: "A completely bespoke, cloud-native Data-Driven ecosystem engineered for immediate impact and infinite scalability." },
                                            { challenge: "Mounting security vulnerabilities and compliance drift exposed within standard Data-Driven workflows.", solution: "Military-grade encryption and zero-trust verification applied fundamentally to all Data-Driven pipelines." }
                                        ]
            }
        ]
    }
};
