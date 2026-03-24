import { ServiceCategory } from "./types";

export const cybersecurityData: ServiceCategory = {
    title: "Cybersecurity & Infosec",
    slug: "cybersecurity",
    heroDescription: "Proactive defense for your digital perimeter.",
    heroImage: "/hero_cybersecurity.webp",
    overview: "We provide military-grade security audits, penetration testing, and 24/7 monitoring to protect your enterprise from evolving global threats.",
    whyChooseUs: [
        { title: "Defensive Excellence", desc: "Our team consists of former government intelligence security specialists.", icon: "ShieldCheck" },
        { title: "24/7 Monitoring", desc: "Global Security Operations Centers (SOC) protecting your data while you sleep.", icon: "Activity" },
        { title: "Compliance Ready", desc: "We ensure you meet and exceed ISO 27001, SOC 2, and GDPR standards.", icon: "Lock" }
    ],
    testimonials: [
        {
            content: "After their security audit, we identified and patched three critical vulnerabilities that our internal team had missed for months.",
            author: "Robert Vance",
            role: "Head of Infrastructure, FinSecure",
            rating: 5
        },
        {
            content: "The SOC-as-a-Service has given our board peace of mind. Their response time to incidents is consistently under 5 minutes.",
            author: "Elena Rossi",
            role: "CISO, Global Manufacturing Group",
            rating: 5
        },
        {
            content: "Highly professional penetration testing. Their report was the most detailed and actionable we've ever received.",
            author: "David Chang",
            role: "Security Director, HealthFirst Systems",
            rating: 5
        }
    ],
    process: [
        { step: "01", title: "Assessment", desc: "Vulnerability scanning and surface area mapping." },
        { step: "02", title: "Strategy", desc: "Design of a custom security roadmap and policy framework." },
        { step: "03", title: "Hardening", desc: "Implementing technical controls, encryption, and firewalls." },
        { step: "04", title: "Monitoring", desc: "Transition to 24/7 managed detection and response." }
    ],
    technologies: {
        "Defensive": [
            { name: "CrowdStrike", desc: "Endpoint protection & MDR" },
            { name: "Splunk", desc: "SIEM & observability platform" },
            { name: "Cloudflare", desc: "WAF & DDoS protection" },
            { name: "Okta", desc: "Identity & access management" }
        ],
        "Offensive": [
            { name: "Burp Suite", desc: "Web vulnerability scanner" },
            { name: "Metasploit", desc: "Penetration testing framework" },
            { name: "Kali Linux", desc: "Advanced forensic OS" },
            { name: "Nessus", desc: "Network vulnerability scanner" }
        ],
        "Compliance": [
            { name: "Vanta", desc: "Automated compliance platform" },
            { name: "Drata", desc: "Security & compliance automation" },
            { name: "OneTrust", desc: "Privacy & risk management" }
        ]
    },
    metrics: [
        { value: "SOC 2", label: "COMPLIANT" },
        { value: "0", label: "CRITICAL BREACHES" },
        { value: "<5m", label: "INCIDENT RESPONSE" },
        { value: "100%", label: "ENCRYPTION" }
    ],
    certifications: ["CISSP", "CISM", "CEH", "OSCP", "ISO 27001 Lead Auditor"],
    subcategories: [
        {
            title: "Security Audits & Vulnerability Assessments",
            slug: "security-audits",
            heroTitle: "Find Your Weak Points Before They Do",
            heroDescription: "Comprehensive technical audits and vulnerability scans tailored to your architecture.",
            heroImage: "/mockup_audit.webp",
            details: "Detailed assessments of your network, applications, and cloud environments to identify and prioritize security risks.",
            features: [
                { icon: "Shield", title: "Deep network scanning", desc: "Scanning every port and protocol for unauthorized entry points." },
                { icon: "Search", title: "Application security testing", desc: "Identifying SQL injection, XSS, and broken authentication." },
                { icon: "Lock", title: "Cloud configuration audit", desc: "Detecting misconfigured S3 buckets and IAM permissions." },
                { icon: "FileText", title: "Compliance gap analysis", desc: "Mapping current security state against HIPAA, PCI-DSS, and SOC 2." },
                { icon: "Activity", title: "Risk prioritization reporting", desc: "Actionable summaries focusing on the most critical fixes first." },
                { icon: "Zap", title: "Automated continuous scanning", desc: "Ongoing monitoring for new vulnerabilities as they emerge." }
            ],
            process: [
                { step: "01", title: "Scope", desc: "Defining audit boundaries and critical assets." },
                { step: "02", title: "Scan", desc: "Running advanced automated vulnerability scanners." },
                { step: "03", title: "Manual Review", desc: "Expert verification of findings to eliminate false positives." },
                { step: "04", title: "Analyze", desc: "Categorizing risks based on impact and likelihood." },
                { step: "05", title: "Report", desc: "Delivering a comprehensive remediation roadmap." }
            ],
            portfolio: [
                { title: "Financial Institution Audit", metrics: [{ label: "Vulnerabilities Found", value: "450+" }, { label: "Critical Patched", value: "100%" }] },
                { title: "Healthcare SaaS Assessment", metrics: [{ label: "Compliance Score", value: "98/100" }, { label: "S3 Risks Found", value: "12" }] },
                { title: "E-Commerce Security Review", metrics: [{ label: "Network Ports", value: "65K+" }, { label: "Risks Mitigated", value: "34" }] }
            ]
        },
        {
            title: "Penetration Testing (Ethical Hacking)",
            slug: "penetration-testing",
            heroTitle: "The Ultimate Test of Your Defenses",
            heroDescription: "High-end manual penetration testing by elite ethical hackers. We think like the attacker.",
            heroImage: "/mockup_pentest.webp",
            details: "Simulated attacks against your external, internal, and wireless networks to prove what's actually exploitable.",
            features: [
                { icon: "Zap", title: "Black-box web testing", desc: "Testing with zero prior knowledge to simulate outside hackers." },
                { icon: "Search", title: "Internal network pivoting", desc: "Proving how far an attacker could move once inside your network." },
                { icon: "Smartphone", title: "Mobile app exploitation", desc: "Decompiling and testing iOS/Android apps for data leaks." },
                { icon: "Target", title: "Social engineering simulations", desc: "Phishing and physical bypass tests to evaluate human risk." },
                { icon: "Code", title: "API exploitation", desc: "Bypassing auth and logic checks on your backend services." },
                { icon: "Shield", title: "Remediated re-testing", desc: "Verifying your fixes are actually effective after the test." }
            ],
            process: [
                { step: "01", title: "Recon", desc: "Gathering OSINT and surface area intel." },
                { step: "02", title: "Identify", desc: "Scanning for entry points and weak services." },
                { step: "03", title: "Exploit", desc: "Safely attempting to bypass security controls." },
                { step: "04", title: "Pivot", desc: "Escalating privileges and navigating the network." },
                { step: "05", title: "Brief", desc: "Technical and executive-level findings walkthrough." }
            ],
            portfolio: [
                { title: "Global Bank Red Team", metrics: [{ label: "Active Directory", value: "Compromised" }, { label: "Domain Admin", value: "Achieved" }] },
                { title: "Tech Unicorn Web Pentest", metrics: [{ label: "P1 Bugs Found", value: "8" }, { label: "Data Access", value: "Full Root" }] },
                { title: "Retail Chain WiFi Audit", metrics: [{ label: "Store Locations", value: "50+" }, { label: "Encryption Bypass", value: "Secured" }] }
            ]
        },
        {
            title: "Managed SOC & 24/7 Monitoring",
            slug: "managed-soc-monitoring",
            heroTitle: "Global Threat Watch, 24/7",
            heroDescription: "Constant vigilance over your digital assets. Detection, response, and containment.",
            heroImage: "/mockup_soc.webp",
            details: "Full-service Security Operations Center (SOC) as a Service. We watch your logs so you don't have to.",
            features: [
                { icon: "Activity", title: "Real-time threat detection", desc: "AI-driven monitoring of logs, traffic, and user behavior." },
                { icon: "Zap", title: "Incident response & triage", desc: "Expert analysts investigating every alert within minutes." },
                { icon: "Shield", title: "MDR (Managed Detection & Response)", desc: "Proactive isolation of infected endpoints and accounts." },
                { icon: "Database", title: "SIEM management", desc: "Optimizing Splunk, Sentinel, or ELK for maximum visibility." },
                { icon: "Lock", title: "Threat hunting", desc: "Manual investigation for dormant attackers missed by triggers." },
                { icon: "FileText", title: "Weekly security posture reports", desc: "Executive summaries of threats blocked and risks found." }
            ],
            process: [
                { step: "01", title: "Ingest", desc: "Connecting logs from cloud, network, and endpoints." },
                { step: "02", title: "Baseline", desc: "Mapping normal behavior to identify anomalies." },
                { step: "03", title: "Monitor", desc: "24/7 eyes-on-glass monitoring by expert analysts." },
                { step: "04", title: "Alert", desc: "Instant notification for confirmed security incidents." },
                { step: "05", title: "Contain", desc: "Guided or automated response to stop the attack." }
            ],
            portfolio: [
                { title: "Logistics SaaS SOC", metrics: [{ label: "Avg Response", value: "<3min" }, { label: "Threats Blocked", value: "1.2M/yr" }] },
                { title: "Legal Firm MDR", metrics: [{ label: "Endpoints", value: "1,500+" }, { label: "Ransomware Stopped", value: "2" }] },
                { title: "Government Agency Monitoring", metrics: [{ label: "Uptime", value: "100%" }, { label: "SLA Adherence", value: "99.9%" }] }
            ]
        },
        {
            title: "Cloud Security Configuration",
            slug: "cloud-security-configuration",
            heroTitle: "Secure Your Cloud Perimeter",
            heroDescription: "Hardening AWS, Azure, and GCP environments against misconfiguration and data leaks.",
            heroImage: "/mockup_cloudsec.webp",
            details: "Specialized hardening for containerized and serverless environments. IAM, VPC, and S3 security experts.",
            features: [
                { icon: "Lock", title: "IAM & access policy hardening", desc: "Implementing least-privilege models for all cloud users." },
                { icon: "Shield", title: "VPC & security group audit", desc: "Locking down network paths and public entry points." },
                { icon: "Database", title: "S3 & bucket security", desc: "Ensuring storage is encrypted and not publicly accessible." },
                { icon: "Zap", title: "Kubernetes & container security", desc: "Hardening pods, images, and cluster configurations." },
                { icon: "Search", title: "Cloud compliance automation", desc: "Continuous mapping to CIS Benchmarks and SOC 2." },
                { icon: "Activity", title: "Drift detection", desc: "Alerting when cloud configuration deviates from master state." }
            ],
            process: [
                { step: "01", title: "Audit", desc: "Deep dive into current cloud architecture and permissions." },
                { step: "02", title: "Design", desc: "Creating a secure landing zone and IAM framework." },
                { step: "03", title: "Implement", desc: "Automating security controls with Infrastructure as Code." },
                { step: "04", title: "Secure", desc: "Enabling native cloud security tools (GuardDuty, Sentinel)." },
                { step: "05", title: "Monitor", desc: "Transition to continuous compliance monitoring." }
            ],
            portfolio: [
                { title: "AWS Multi-Account Hardening", metrics: [{ label: "Accounts", value: "25+" }, { label: "Compliance Score", value: "100%" }] },
                { title: "Azure Enterprise Landing Zone", metrics: [{ label: "Migration", value: "Complete" }, { label: "Security Gaps", value: "Fixed" }] },
                { title: "Kubernetes Security Rollout", metrics: [{ label: "Clusters", value: "12" }, { label: "Pods Secured", value: "500+" }] }
            ]
        },
        {
            title: "Identity & Access Management (IAM)",
            slug: "identity-access-management",
            heroTitle: "Master Your Digital Identity",
            heroDescription: "Zero Trust architectures ensuring the right people have the right access at the right time.",
            heroImage: "/mockup_iam.webp",
            details: "Implementation of Okta, Azure AD, and Auth0. SSO, Multi-Factor Authentication (MFA), and Identity Governance.",
            features: [
                { icon: "Lock", title: "SSO (Single Sign-On) rollout", desc: "One secure login for all corporate applications." },
                { icon: "Zap", title: "Adaptive MFA implementation", desc: "Factor-based security relying on location, IP, and device." },
                { icon: "Target", title: "Privileged Access Management", desc: "Locking down admin credentials with just-in-time access." },
                { icon: "Activity", title: "Identity Governance & lifecycle", desc: "Automated user onboarding and secure offboarding." },
                { icon: "Shield", title: "Zero-trust architecture", desc: "Verifying every request, inside or outside the network." },
                { icon: "Code", title: "CIAM (Customer Identity)", desc: "Building secure, scalable logins for your end-users." }
            ],
            process: [
                { step: "01", title: "Strategy", desc: "Mapping user personas and access requirements." },
                { step: "02", title: "Select", desc: "Choosing the right IAM platform (Okta, Azure, etc.)." },
                { step: "03", title: "Integrate", desc: "Connecting all apps and directories to the core SSO." },
                { step: "04", title: "Enforce", desc: "Rolling out MFA and conditional access policies." },
                { step: "05", title: "Audit", desc: "Setting up continuous access reviews and reporting." }
            ],
            portfolio: [
                { title: "Okta Enterprise Rollout", metrics: [{ label: "Users", value: "10K+" }, { label: "Apps Integrated", value: "150+" }] },
                { title: "Zero Trust Architecture", metrics: [{ label: "VPN Usage", value: "-90%" }, { label: "Security Risk", value: "-75%" }] },
                { title: "IAM Lifecycle Automation", metrics: [{ label: "Provisioning", value: "Instant" }, { label: "Admin Time", value: "-60%" }] }
            ]
        },
        {
            title: "Security Awareness Training",
            slug: "security-awareness-training",
            heroTitle: "Hardening Your Human Firewall",
            heroDescription: "Engaging, data-driven security training and phishing simulations for your employees.",
            heroImage: "/mockup_training.webp",
            details: "Simulated phishing attacks and bite-sized training modules that change employee behavior and reduce risk.",
            features: [
                { icon: "Target", title: "Custom phishing simulations", desc: "Safe, realistic phishing tests to measure employee risk." },
                { icon: "Layout", title: "Bite-sized video modules", desc: "Engaging training content that employees actually enjoy." },
                { icon: "Activity", title: "Departmental risk scoring", desc: "Identifying which teams need more support and education." },
                { icon: "Shield", title: "Executive-specific grooming", desc: "White-glove training for high-value targets (Whaling ops)." },
                { icon: "Smartphone", title: "Compliance-based curriculum", desc: "Training that meets HIPAA, PCI, and GDPR requirements." },
                { icon: "FileText", title: "Automated reporting", desc: "Tracking progress and certification across the enterprise." }
            ],
            process: [
                { step: "01", title: "Baseline", desc: "Initial phishing test to measure the 'Click Rate'." },
                { step: "02", title: "Enroll", desc: "Automated onboarding into the training platform." },
                { step: "03", title: "Educate", desc: "Regular delivery of training modules and tests." },
                { step: "04", title: "Simulate", desc: "Ongoing phishing tests to reinforce learning." },
                { step: "05", title: "Refine", desc: "Adjusting training based on departmental performance." }
            ],
            portfolio: [
                { title: "Enterprise Phishing Program", metrics: [{ label: "Click Rate", value: "25% → 2%" }, { label: "Report Rate", value: "+400%" }] },
                { title: "Healthcare Compliance Training", metrics: [{ label: "Completion", value: "100%" }, { label: "Audits Passed", value: "All" }] },
                { title: "Global Sales Team Grooming", metrics: [{ label: "Whaling Stopped", value: "4" }, { label: "Risk Score", value: "Low" }] }
            ]
        }
    ]
};
