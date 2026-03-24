import { ServiceCategory } from "./types";

export const bpoData: ServiceCategory = {
    title: "BPO / BPS Services",
    slug: "bpo",
    heroDescription: "Scale your operations with premium offshore talent.",
    heroImage: "/hero_bpo.webp",
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
            heroImage: "/mockup_support.webp",
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
            heroImage: "/mockup_techsupport.webp",
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
            heroImage: "/mockup_dataentry.webp",
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
            heroImage: "/mockup_backoffice.webp",
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
            heroImage: "/mockup_docverify.webp",
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
            heroImage: "/mockup_rpa.webp",
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
            heroImage: "/mockup_chat.webp",
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
            heroImage: "/mockup_247ops.webp",
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
};
