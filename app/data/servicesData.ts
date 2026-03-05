export interface ServiceDetail {
    title: string;
    slug: string;
    heroDescription: string;
    features: { icon: string; title: string; desc: string }[];
    benefits: string[];
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
                heroDescription: "End-to-end custom web applications designed for performance and scale.",
                features: [
                    { icon: "Code", title: "Modern Stacks", desc: "Built with React, Next.js, and Node.js for lightning performance." },
                    { icon: "Shield", title: "Secure by Design", desc: "Enterprise-grade security protocols built into every layer." },
                    { icon: "Zap", title: "High Performance", desc: "Optimized for speed and Core Web Vitals to maximize engagement." }
                ],
                benefits: ["Improved Operational Efficiency", "Scalable Infrastructure", "Enhanced User Experience"]
            },
            {
                title: "Enterprise Software Solutions",
                slug: "enterprise-software-solutions",
                heroDescription: "Robust software architecture designed to streamline massive corporate operations.",
                features: [
                    { icon: "Database", title: "Data Integration", desc: "Seamlessly connect legacy systems with modern interfaces." },
                    { icon: "Activity", title: "Workflow Automation", desc: "Reduce manual overhead with intelligent process automation." },
                    { icon: "Lock", title: "Enterprise Security", desc: "Role-based access controls and encrypted data pipelines." }
                ],
                benefits: ["Centralized Operations", "Reduced Friction", "Data-Driven Insights"]
            },
            {
                title: "Mobile App Development",
                slug: "mobile-app-development",
                heroDescription: "Native and cross-platform mobile experiences for iOS and Android.",
                features: [
                    { icon: "Smartphone", title: "Cross-Platform", desc: "Reach users on both iOS and Android efficiently." },
                    { icon: "Layout", title: "Intuitive UI", desc: "User-centric design principles for maximum retention." },
                    { icon: "Database", title: "Offline Capabilities", desc: "Robust local databases and synchronization." }
                ],
                benefits: ["Increased Market Reach", "Direct Customer Engagement", "Brand Loyalty"]
            },
            {
                title: "UI/UX Design & Prototyping",
                slug: "ui-ux-design-prototyping",
                heroDescription: "Beautiful, conversion-optimized interfaces that your users will love.",
                features: [
                    { icon: "Layout", title: "Wireframing", desc: "Rapid prototyping to visualize user journeys." },
                    { icon: "Target", title: "User Research", desc: "Data-backed design decisions based on real user behavior." },
                    { icon: "Smartphone", title: "Responsive Design", desc: "Flawless aesthetics across all device sizes." }
                ],
                benefits: ["Higher Conversion Rates", "Reduced Churn", "Stronger Brand Identity"]
            },
            {
                title: "SaaS Platform Development",
                slug: "saas-platform-development",
                heroDescription: "Architecting multitenant cloud software built for recurring revenue.",
                features: [
                    { icon: "Database", title: "Multitenancy", desc: "Secure, isolated data structures for all your clients." },
                    { icon: "Zap", title: "Billing Integration", desc: "Seamless Stripe or custom payment gateway connections." },
                    { icon: "Activity", title: "Scalable Architecture", desc: "Built to handle thousands of concurrent users smoothly." }
                ],
                benefits: ["Faster Time to Market", "Subscription Revenue Model", "Infinite Scalability"]
            },
            {
                title: "API Development & Integration",
                slug: "api-development-integration",
                heroDescription: "Connect your disparate systems with secure, lightning-fast APIs.",
                features: [
                    { icon: "Code", title: "REST & GraphQL", desc: "Modern API standards tailored to your technical needs." },
                    { icon: "Shield", title: "OAuth Security", desc: "Industry-standard authentication and authorization." },
                    { icon: "FileText", title: "Comprehensive Documentation", desc: "Clear Swagger/OpenAPI specs for developer ease." }
                ],
                benefits: ["System Interoperability", "Reduced Data Silos", "Future-Proof Architecture"]
            },
            {
                title: "E-Commerce Solutions",
                slug: "e-commerce-solutions",
                heroDescription: "High-converting digital storefronts and custom cart integrations.",
                features: [
                    { icon: "Layout", title: "Custom Storefronts", desc: "Headless commerce architecture for maximum speed." },
                    { icon: "Lock", title: "Secure Checkout", desc: "PCI-compliant payment processing flows." },
                    { icon: "Target", title: "Inventory Management", desc: "Real-time stock syncing across all platforms." }
                ],
                benefits: ["Increased Online Sales", "Global Customer Reach", "Streamlined Fulfillment"]
            },
            {
                title: "Cloud-Based Applications",
                slug: "cloud-based-applications",
                heroDescription: "Cloud-native solutions leveraging AWS, Azure, and Google Cloud.",
                features: [
                    { icon: "Database", title: "Serverless Architecture", desc: "Pay only for what you use with massive scalability." },
                    { icon: "Activity", title: "Continuous Deployment", desc: "Automated CI/CD pipelines for rapid iteration." },
                    { icon: "ShieldCheck", title: "High Availability", desc: "Geographically redundant deployments for 99.99% uptime." }
                ],
                benefits: ["Reduced Infrastructure Costs", "Zero Downtime Deployments", "Global Reach"]
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
                heroDescription: "Identify vulnerabilities before attackers do.",
                features: [
                    { icon: "Search", title: "Deep Scanning", desc: "Comprehensive analysis of your entire digital footprint." },
                    { icon: "FileText", title: "Actionable Reports", desc: "Clear, prioritized remediation strategies." },
                    { icon: "ShieldCheck", title: "Compliance Mapping", desc: "Ensure alignment with ISO, HIPAA, and SOC2 standards." }
                ],
                benefits: ["Proactive Threat Mitigation", "Regulatory Compliance", "Risk Visibility"]
            },
            {
                title: "Vulnerability Assessment & Penetration Testing",
                slug: "vulnerability-assessment",
                heroDescription: "Rigorous testing by elite ethical hackers.",
                features: [
                    { icon: "Target", title: "Targeted Attacks", desc: "Simulated real-world cyberattacks on your infrastructure." },
                    { icon: "Lock", title: "Exploit Validation", desc: "Proof of concept for identified vulnerabilities." },
                    { icon: "Activity", title: "Continuous Monitoring", desc: "Ongoing assessments to maintain security posture." }
                ],
                benefits: ["Validated Security Posture", "Prevention of Data Breaches", "Enhanced Trust"]
            },
            {
                title: "Security Architecture Review",
                slug: "security-architecture-review",
                heroDescription: "Evaluate and reinforce the structural integrity of your IT systems.",
                features: [
                    { icon: "Search", title: "Framework Analysis", desc: "Alignment with NIST and CIS frameworks." },
                    { icon: "Layout", title: "Topology Review", desc: "In-depth review of network segmentation and data flows." },
                    { icon: "Lock", title: "Cryptography Audit", desc: "Ensuring modern encryption standards across environments." }
                ],
                benefits: ["Resilient Infrastructure", "Cost-Effective Defenses", "Strategic Security Planning"]
            },
            {
                title: "Network & Application Security",
                slug: "network-application-security",
                heroDescription: "Perimeter and code-level defenses against sophisticated threats.",
                features: [
                    { icon: "Shield", title: "WAF Implementation", desc: "Web Application Firewalls to block malicious traffic." },
                    { icon: "Code", title: "Secure Code Review", desc: "Identifying vulnerabilities inside your proprietary source code." },
                    { icon: "Activity", title: "DDoS Mitigation", desc: "Protection against distributed denial of service attacks." }
                ],
                benefits: ["Uninterrupted Business Operations", "Data Integrity", "Protection of Intellectual Property"]
            },
            {
                title: "Compliance & Governance Support",
                slug: "compliance-governance-support",
                heroDescription: "Navigate complex regulatory landscapes with expert guidance.",
                features: [
                    { icon: "FileText", title: "Policy Creation", desc: "Drafting robust Information Security Policies." },
                    { icon: "ShieldCheck", title: "Audit Preparation", desc: "Readiness assessments for external compliance audits." },
                    { icon: "Target", title: "Data Privacy", desc: "Ensuring GDPR, CCPA, and DPDP compliance." }
                ],
                benefits: ["Avoidance of Regulatory Fines", "Streamlined Audits", "Improved Board Confidence"]
            },
            {
                title: "Threat Monitoring & Incident Response",
                slug: "threat-monitoring-incident-response",
                heroDescription: "24/7 vigilant oversight and rapid reaction capabilities.",
                features: [
                    { icon: "Activity", title: "24/7 SOC", desc: "Continuous monitoring by our Security Operations Center." },
                    { icon: "Zap", title: "Rapid Containment", desc: "Immediate isolation of compromised assets during an attack." },
                    { icon: "Search", title: "Root Cause Analysis", desc: "Detailed forensic investigation post-incident." }
                ],
                benefits: ["Minimized Downtime", "Reduced Breach Impact", "Peace of Mind"]
            },
            {
                title: "Security Policy & Advisory",
                slug: "security-policy-advisory",
                heroDescription: "Virtual CISO services and strategic security leadership.",
                features: [
                    { icon: "Target", title: "vCISO", desc: "Executive-level security strategy without the full-time overhead." },
                    { icon: "FileText", title: "Board Reporting", desc: "Translating technical risks into business impact for stakeholders." },
                    { icon: "ShieldCheck", title: "Awareness Training", desc: "Combating social engineering through employee education." }
                ],
                benefits: ["Strategic Alignment", "Improved Security Culture", "Expert Leadership"]
            },
            {
                title: "Cloud Security Solutions",
                slug: "cloud-security-solutions",
                heroDescription: "Securing your cloud environments across AWS, Azure, and GCP.",
                features: [
                    { icon: "Search", title: "Misconfiguration Detection", desc: "Identifying exposed buckets and overly permissive IAM roles." },
                    { icon: "Shield", title: "Container Security", desc: "Securing Docker and Kubernetes deployments." },
                    { icon: "Lock", title: "Data Loss Prevention", desc: "Preventing sensitive data exfiltration from cloud environments." }
                ],
                benefits: ["Safe Cloud Adoption", "Regulatory Compliance in the Cloud", "Visibility Across Multi-Cloud Environments"]
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
                heroDescription: "Forensically sound acquisition of data from computers, servers, and cloud environments.",
                features: [
                    { icon: "Database", title: "Disk Imaging", desc: "Creating exact replicas of hard drives for analysis." },
                    { icon: "Activity", title: "Live Capture", desc: "Capturing volatile RAM data before system shutdown." },
                    { icon: "Lock", title: "Chain of Custody", desc: "Meticulous documentation of evidence handling." }
                ],
                benefits: ["Court-Admissible Evidence", "Zero Data Alteration", "Comprehensive Capture"]
            },
            {
                title: "Incident Investigation & Analysis",
                slug: "incident-investigation-analysis",
                heroDescription: "Determining the who, what, where, and how of security breaches.",
                features: [
                    { icon: "Search", title: "Timeline Reconstruction", desc: "Mapping attacker movements down to the second." },
                    { icon: "ShieldCheck", title: "Vulnerability Identification", desc: "Finding exactly how the breach occurred." },
                    { icon: "Target", title: "Scope Assessment", desc: "Determining exactly what data was compromised." }
                ],
                benefits: ["Actionable Intelligence", "Clear Liability", "Prevent Future Attacks"]
            },
            {
                title: "Data Recovery & Preservation",
                slug: "data-recovery-preservation",
                heroDescription: "Extracting deleted, corrupted, or intentionally destroyed files.",
                features: [
                    { icon: "FileText", title: "Deleted File Carving", desc: "Reconstructing files from raw disk sectors." },
                    { icon: "Lock", title: "Ransomware Recovery", desc: "Attempting decryption and restoring critical backups." },
                    { icon: "Database", title: "Physical Repair", desc: "Recovering data from physically damaged drives." }
                ],
                benefits: ["Business Continuity", "Asset Retrieval", "Minimized Data Loss"]
            },
            {
                title: "Malware & Threat Investigation",
                slug: "malware-threat-investigation",
                heroDescription: "Reverse engineering malicious payloads to understand their capabilities.",
                features: [
                    { icon: "Code", title: "Static Analysis", desc: "Examining malware source code without execution." },
                    { icon: "Activity", title: "Dynamic Sandboxing", desc: "Observing malware behavior in a controlled environment." },
                    { icon: "Shield", title: "Indicator of Compromise (IOC)", desc: "Generating IOCs to sweep the rest of your network." }
                ],
                benefits: ["Targeted Remediation", "Attacker Attribution", "Enhanced Network Defenses"]
            },
            {
                title: "Cyber Crime Investigation Support",
                slug: "cyber-crime-investigation-support",
                heroDescription: "Technical support for law enforcement and legal teams in criminal investigations.",
                features: [
                    { icon: "Target", title: "Fraud Analysis", desc: "Tracing digital communications in financial crimes." },
                    { icon: "Search", title: "IP Theft Investigation", desc: "Proving corporate espionage and data exfiltration." },
                    { icon: "FileText", title: "Expert Witness", desc: "Providing sworn testimony regarding digital findings." }
                ],
                benefits: ["Litigation Support", "Dispute Resolution", "Regulatory Defensibility"]
            },
            {
                title: "Log Analysis & Event Reconstruction",
                slug: "log-analysis-event-reconstruction",
                heroDescription: "Parsing through millions of log lines to find the needle in the haystack.",
                features: [
                    { icon: "Database", title: "SIEM Review", desc: "Analyzing aggregated logs from multiple network sources." },
                    { icon: "Activity", title: "Anomaly Detection", desc: "Spotting deviations from baseline network behavior." },
                    { icon: "Layout", title: "Visual Timelines", desc: "Creating easy-to-understand visual maps of incidents." }
                ],
                benefits: ["Clear Narratives", "Hidden Threat Discovery", "Architectural Weakness Identification"]
            },
            {
                title: "Device & Network Forensics",
                slug: "device-network-forensics",
                heroDescription: "Deep analysis of mobile devices, IoT, and network traffic.",
                features: [
                    { icon: "Smartphone", title: "Mobile Extraction", desc: "Bypassing locks to pull SMS, app data, and location history." },
                    { icon: "Activity", title: "Packet Sniffing", desc: "Analyzing PCAP files for malicious network communications." },
                    { icon: "Zap", title: "IoT Investigation", desc: "Pulling data from smart devices and embedded systems." }
                ],
                benefits: ["Comprehensive Visibility", "Endpoint Insight", "Advanced Threat Hunting"]
            },
            {
                title: "Legal & Compliance Reporting",
                slug: "legal-compliance-reporting",
                heroDescription: "Translating extreme technical depth into courtroom-ready documentation.",
                features: [
                    { icon: "FileText", title: "Affidavits", desc: "Drafting sworn statements of technical facts." },
                    { icon: "ShieldCheck", title: "Regulatory Disclosures", desc: "Fulfilling GDPR/HIPAA breach notification requirements." },
                    { icon: "Layout", title: "Executive Summaries", desc: "High-level reports for C-Suite and Board members." }
                ],
                benefits: ["Legal Defensibility", "Regulatory Compliance", "Stakeholder Communication"]
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
                heroDescription: "Omnichannel customer care that turns complaints into brand loyalty.",
                features: [
                    { icon: "Smartphone", title: "Voice Support", desc: "Professional inbound and outbound call center services." },
                    { icon: "FileText", title: "Ticket Management", desc: "Resolving complex Zendesk/Freshdesk queries efficiently." },
                    { icon: "Target", title: "Customer Retention", desc: "Proactive outreach to reduce churn and save accounts." }
                ],
                benefits: ["Higher CSAT Scores", "Reduced Wait Times", "Brand Protection"]
            },
            {
                title: "Technical Support Operations",
                slug: "technical-support-operations",
                heroDescription: "Tier 1, 2, and 3 IT helpdesk and software troubleshooting.",
                features: [
                    { icon: "Code", title: "SaaS Support", desc: "Helping users navigate complex software platforms." },
                    { icon: "Zap", title: "Bug Triaging", desc: "Replicating issues and escalating beautifully written Jira tickets." },
                    { icon: "Activity", title: "Remote Troubleshooting", desc: "Guiding users through hardware and network resets." }
                ],
                benefits: ["Lower Engineering Distraction", "Faster Resolution Rate", "Happy End-Users"]
            },
            {
                title: "Data Processing & Data Entry",
                slug: "data-processing-entry",
                heroDescription: "Accurate, rapid digitization and management of massive data sets.",
                features: [
                    { icon: "Database", title: "CRM Cleansing", desc: "Updating and deduping Salesforce/HubSpot records." },
                    { icon: "Layout", title: "Form Digitization", desc: "Transcribing handwritten or legacy documents." },
                    { icon: "Search", title: "Data Mining", desc: "Scraping and organizing web data into structured sheets." }
                ],
                benefits: ["99.9% Accuracy Rate", "Operational Efficiency", "Clean Data Lakes"]
            },
            {
                title: "Back Office Management",
                slug: "back-office-management",
                heroDescription: "Handling the administrative burden so your local team can focus on strategy.",
                features: [
                    { icon: "FileText", title: "Accounting Support", desc: "Invoice processing, AR/AP, and basic bookkeeping." },
                    { icon: "Target", title: "HR Administration", desc: "Managing payroll inputs, leave tracking, and onboarding docs." },
                    { icon: "Activity", title: "Order Fulfillment", desc: "Managing e-commerce backends and logistics coordination." }
                ],
                benefits: ["Reduced Overhead", "Error-Free Admin", "Scalable Growth"]
            },
            {
                title: "Document Verification",
                slug: "document-verification",
                heroDescription: "KYC and compliance checks performed by eagle-eyed analysts.",
                features: [
                    { icon: "Search", title: "KYC / AML", desc: "Verifying passports, IDs, and financial documents." },
                    { icon: "Shield", title: "Fraud Prevention", desc: "Spotting forged documents and suspicious applications." },
                    { icon: "ShieldCheck", title: "Compliance Audits", desc: "Ensuring all user submitted data meets regulatory requirements." }
                ],
                benefits: ["Regulatory Safety", "Fraud Reduction", "Rapid User Onboarding"]
            },
            {
                title: "Process Automation Support",
                slug: "process-automation-support",
                heroDescription: "Combining human intelligence with RPA (Robotic Process Automation).",
                features: [
                    { icon: "Zap", title: "Workflow Mapping", desc: "Identifying manual tasks ripe for automation." },
                    { icon: "Code", title: "RPA Maintenance", desc: "Monitoring bots and handling complex exceptions." },
                    { icon: "Database", title: "Macro Creation", desc: "Building internal scripts to speed up data handling." }
                ],
                benefits: ["Hyper-Efficiency", "Elimination of Drudgery", "Cost Savings"]
            },
            {
                title: "Email & Chat Support",
                slug: "email-chat-support",
                heroDescription: "Lightning-fast written communication for the modern consumer.",
                features: [
                    { icon: "Activity", title: "Live Chat", desc: "Handling 3+ concurrent chats with perfect grammar." },
                    { icon: "FileText", title: "Email Triage", desc: "Categorizing and responding to massive inboxes." },
                    { icon: "Smartphone", title: "Social Media Moderation", desc: "Answering DMs and monitoring comments on social channels." }
                ],
                benefits: ["Instant Gratification for Users", "High Volume Handling", "Consistent Brand Voice"]
            },
            {
                title: "24/7 Operational Assistance",
                slug: "operational-assistance",
                heroDescription: "Keep your business running around the clock, across all time zones.",
                features: [
                    { icon: "Activity", title: "Night Shift Coverage", desc: "Supporting your APAC/EMEA clients while you sleep." },
                    { icon: "Lock", title: "System Monitoring", desc: "Pinging engineers if servers go down at 3 AM." },
                    { icon: "Target", title: "Emergency Dispatch", desc: "Handling critical escalations during off-hours." }
                ],
                benefits: ["Global Expansion", "Zero Downtime", "Competitive Edge"]
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
                heroDescription: "Executive-level views of your most critical company metrics.",
                features: [
                    { icon: "Layout", title: "Custom UI", desc: "Dashboards built specifically for CEO and CFO oversight." },
                    { icon: "Zap", title: "Real-Time Sync", desc: "Live integration with Salesforce, Stripe, and proprietary databases." },
                    { icon: "Smartphone", title: "Mobile Ready", desc: "Check business vitals securely from your phone anywhere." }
                ],
                benefits: ["Instant Decision Making", "Unified Data Source", "Reduced Reporting Lag"]
            },
            {
                title: "Data Visualization",
                slug: "data-visualization",
                heroDescription: "Turning complex datasets into compelling visual narratives.",
                features: [
                    { icon: "Search", title: "Pattern Recognition", desc: "Highlight anomalies and trends that raw numbers hide." },
                    { icon: "Activity", title: "Interactive Charts", desc: "Drill-down capabilities allowing users to explore data depth." },
                    { icon: "FileText", title: "Presentation Ready", desc: "Export perfect visualizations directly for board meetings." }
                ],
                benefits: ["Easier Comprehension", "Faster Alignment", "Improved Stakeholder Communication"]
            },
            {
                title: "Performance Reporting",
                slug: "performance-reporting",
                heroDescription: "Automated, scheduled reports delivered straight to your inbox.",
                features: [
                    { icon: "Target", title: "Goal Tracking", desc: "Continuous mapping of current performance against quarterly OKRs." },
                    { icon: "Code", title: "Custom Logic", desc: "Implementing industry-specific formulas and proprietary metrics." },
                    { icon: "Database", title: "Historical Comparisons", desc: "Automatic YoY and MoM growth trajectory analysis." }
                ],
                benefits: ["Saved Analyst Hours", "Consistent Tracking", "Early Warning Systems"]
            },
            {
                title: "Data Cleaning & Processing",
                slug: "data-cleaning-processing",
                heroDescription: "Structuring messy, disparate data sources into a pristine warehouse.",
                features: [
                    { icon: "ShieldCheck", title: "De-duplication", desc: "Algorithmic removal of duplicate database entries." },
                    { icon: "Lock", title: "Anonymization", desc: "Scrubbing PII for secure analytics and compliance." },
                    { icon: "Zap", title: "ETL Pipelines", desc: "Automated Extract, Transform, Load processes." }
                ],
                benefits: ["Trustworthy Data", "Reduced Storage Costs", "Faster Queries"]
            },
            {
                title: "KPI Monitoring Solutions",
                slug: "kpi-monitoring-solutions",
                heroDescription: "Laser-focused tracking of the indicators that actually matter.",
                features: [
                    { icon: "Activity", title: "Alert Systems", desc: "Automated Slack/Email triggers when KPIs drop below thresholds." },
                    { icon: "Shield", title: "Data Integrity Check", desc: "Continual verification that KPI tracking code is firing correctly." },
                    { icon: "Target", title: "Predictive Scaling", desc: "Forecasting when server or inventory capacity will be breached." }
                ],
                benefits: ["Proactive Management", "Silo Reduction", "Goal Alignment"]
            },
            {
                title: "Customer Behavior Analytics",
                slug: "customer-behavior-analytics",
                heroDescription: "Deep psychological insights mapped directly from product usage data.",
                features: [
                    { icon: "Search", title: "Funnel Drop-off Analysis", desc: "Identifying exactly where users abandon your application." },
                    { icon: "Smartphone", title: "Session Replay", desc: "Reconstructing user journeys to find UX bottlenecks." },
                    { icon: "FileText", title: "Cohort Analysis", desc: "Tracking retention rates across different acquisition channels." }
                ],
                benefits: ["Lower Churn Rate", "Higher LTV", "Optimized Product Roadmap"]
            },
            {
                title: "Decision Support Systems",
                slug: "decision-support-systems",
                heroDescription: "AI-augmented platforms that recommend the most profitable actions.",
                features: [
                    { icon: "Code", title: "Machine Learning", desc: "Proprietary models that learn from historical outcomes." },
                    { icon: "Layout", title: "Scenario Modeling", desc: "Simulating 'What If' financial scenarios instantly." },
                    { icon: "Database", title: "Resource Optimization", desc: "Algorithmic recommendations for budget allocations." }
                ],
                benefits: ["Risk Reduction", "Maximized ROI", "Data-Backed Strategy"]
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
                heroDescription: "Dominate search results and capture high-intent organic traffic.",
                features: [
                    { icon: "Search", title: "Technical SEO", desc: "Fixing core web vitals, crawl errors, and site architecture." },
                    { icon: "FileText", title: "Content Strategy", desc: "Writing authoritative, keyword-rich blogs and landing pages." },
                    { icon: "Zap", title: "Link Building", desc: "Acquiring high-DR backlinks to boost domain authority." }
                ],
                benefits: ["Free Recurring Traffic", "Brand Authority", "Long-Term ROI"]
            },
            {
                title: "Social Media Marketing",
                slug: "social-media-marketing",
                heroDescription: "Building engaged communities and going viral on massive platforms.",
                features: [
                    { icon: "Smartphone", title: "Platform Management", desc: "Curating daily posts on LinkedIn, X, Insta, and TikTok." },
                    { icon: "Layout", title: "Creative Production", desc: "Filming and editing short-form video hooks." },
                    { icon: "Activity", title: "Community Moderation", desc: "Engaging quickly with comments and brand mentions." }
                ],
                benefits: ["Brand Loyalty", "Virality", "Direct Customer Access"]
            },
            {
                title: "Performance Marketing & Paid Ads",
                slug: "performance-marketing",
                heroDescription: "Scaling revenue rapidly through highly targeted media buying.",
                features: [
                    { icon: "Target", title: "Google Search Ads", desc: "Capturing users exactly when they search for your solutions." },
                    { icon: "Layout", title: "Meta/TikTok Ads", desc: "Interrupting scrollers with high-conversion video ads." },
                    { icon: "Activity", title: "Retargeting", desc: "Following website visitors to bring them back to checkout." }
                ],
                benefits: ["Immediate Traffic", "Scalable Growth", "Precise Audience Targeting"]
            },
            {
                title: "Content Marketing Strategy",
                slug: "content-marketing-strategy",
                heroDescription: "Educating and nurturing your audience into paying customers.",
                features: [
                    { icon: "FileText", title: "Whitepapers & eBooks", desc: "Deep-dive lead magnets to capture B2B emails." },
                    { icon: "Zap", title: "Video Sales Letters", desc: "High-producing VSLs that sell your product 24/7." },
                    { icon: "Search", title: "Case Studies", desc: "Documenting your past wins to prove competency." }
                ],
                benefits: ["Lead Generation", "Thought Leadership", "Shorter Sales Cycles"]
            },
            {
                title: "Email Marketing Campaigns",
                slug: "email-marketing-campaigns",
                heroDescription: "Monetizing your list through sophisticated automation and copy.",
                features: [
                    { icon: "Zap", title: "Automated Flows", desc: "Welcome series, abandoned cart, and post-purchase sequences." },
                    { icon: "Code", title: "Dynamic Segmentation", desc: "Sending personalized emails based on user behavior." },
                    { icon: "Activity", title: "A/B Testing", desc: "Testing subject lines and CTAs to maximize open rates." }
                ],
                benefits: ["Highest Marketing ROI", "Audience Ownership", "Repeat Purchases"]
            },
            {
                title: "Brand Awareness & Online Presence",
                slug: "brand-awareness",
                heroDescription: "Making your company the undisputed household name in your niche.",
                features: [
                    { icon: "Shield", title: "PR & Media Placements", desc: "Getting your founders featured in major publications." },
                    { icon: "Layout", title: "Brand Identity Redesign", desc: "Modernizing your logos, fonts, and visual guidelines." },
                    { icon: "Target", title: "Influencer Marketing", desc: "Partnering with industry voices to vouch for your tools." }
                ],
                benefits: ["Market Dominance", "Higher Premium Pricing", "Increased Trust"]
            },
            {
                title: "Lead Generation Campaigns",
                slug: "lead-generation-campaigns",
                heroDescription: "Filling your sales team's calendar with qualified B2B appointments.",
                features: [
                    { icon: "Smartphone", title: "Cold Outreach", desc: "Highly personalized automated email and LinkedIn cadences." },
                    { icon: "Layout", title: "High-Converting Landing Pages", desc: "Building squeeze pages designed strictly to capture info." },
                    { icon: "Database", title: "List Building", desc: "Scraping highly accurate contact data for your ICP." }
                ],
                benefits: ["Predictable Pipeline", "Sales Team Efficiency", "Rapid Scaling"]
            },
            {
                title: "Analytics & Marketing Performance",
                slug: "analytics-marketing-performance",
                heroDescription: "Connecting the dots between ad spend and bottom-line revenue.",
                features: [
                    { icon: "Database", title: "Server-Side Tracking", desc: "Bypassing ad-blockers for 100% accurate conversion data." },
                    { icon: "Search", title: "Attribution Modeling", desc: "Understanding the exact multi-touch path to purchase." },
                    { icon: "Layout", title: "Live Dashboards", desc: "Real-time looker studio views of your marketing spend." }
                ],
                benefits: ["Wasted Ad Spend Identification", "Clear ROI Tracking", "Data-Driven Scaling"]
            }
        ]
    }
};
