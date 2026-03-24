import { ServiceCategory } from "./types";

export const digitalForensicsData: ServiceCategory = {
    title: "Digital Forensics & IR",
    slug: "digital-forensics",
    heroDescription: "Uncover the truth with scientific digital evidence.",
    heroImage: "/hero_forensics.webp",
    overview: "Our labs combine cutting-edge technology with forensic precision to investigate breaches, recover data, and provide expert testimony.",
    whyChooseUs: [
        { title: "Evidence Integrity", desc: "Adherence to strict chain-of-custody protocols for legal admissibility.", icon: "Shield" },
        { title: "Rapid Response", desc: "Global IR teams deployed within hours of a confirmed security incident.", icon: "Zap" },
        { title: "Expert Witness", desc: "Our analysts are seasoned experts in providing technical testimony in court.", icon: "FileText" }
    ],
    testimonials: [
        {
            content: "In a high-stakes litigation case, their forensic report was pivotal. The level of detail in their timeline reconstruction was incredible.",
            author: "Sarah Lewis",
            role: "Partner, Sterling Legal",
            rating: 5
        },
        {
            content: "They handled our ransomware recovery with extreme professionalism. Not only did they recover the data, but they found the entry point.",
            author: "Mark Drummond",
            role: "CTO, RetailStream",
            rating: 5
        },
        {
            content: "Fast, discreet, and technically brilliant. Their mobile forensics helped us resolve an internal investigation in days.",
            author: "Jennifer Wu",
            role: "HR Director, TechNova",
            rating: 5
        }
    ],
    process: [
        { step: "01", title: "Preservation", desc: "Secure imaging and hashing of all digital evidence." },
        { step: "02", title: "Analysis", desc: "Deep-dive investigation of artifacts, logs, and files." },
        { step: "03", title: "Timeline", desc: "Reconstructing the exact sequence of events." },
        { step: "04", title: "Reporting", desc: "Courtroom-ready documentation of findings and evidence." }
    ],
    technologies: {
        "Forensic Tools": [
            { name: "EnCase", desc: "Enterprise forensic software" },
            { name: "Cellebrite", desc: "Mobile data extraction" },
            { name: "Magnet AXIOM", desc: "Artifact-first investigation" },
            { name: "FTK", desc: "Forensic Toolkit" }
        ],
        "Incident Response": [
            { name: "Velociraptor", desc: "Endpoint visibility & IR" },
            { name: "ELK Stack", desc: "Log analysis & visualization" },
            { name: "TheHive", desc: "Security incident response" }
        ],
        "Network Forensics": [
            { name: "Wireshark", desc: "Packet analysis" },
            { name: "Zeek (Bro)", desc: "Network security monitoring" },
            { name: "Tcpdump", desc: "Command-line packet analyzer" }
        ]
    },
    metrics: [
        { value: "Chain-of-Custody", label: "CERTIFIED" },
        { value: "48hr", label: "RESPONSE TIME" },
        { value: "100+", label: "COURT TESTIMONIES" },
        { value: "Lab", label: "ISO 17025 READY" }
    ],
    certifications: ["GCFE", "GCFA", "EnCE", "CCFE", "CCE"],
    subcategories: [
        {
            title: "Incident Response (IR)",
            slug: "incident-response",
            heroTitle: "Stopping the Bleeding, Fast",
            heroDescription: "Elite rapid-response teams to contain, eradicate, and recover from security breaches.",
            heroImage: "/mockup_ir.webp",
            details: "24/7 global IR teams specialized in ransomware, business email compromise (BEC), and advanced persistent threats (APT).",
            features: [
                { icon: "Zap", title: "Immediate threat containment", desc: "Rapid isolation of infected systems and compromised accounts." },
                { icon: "Search", title: "Root cause analysis", desc: "Identifying exactly how and when the attacker gained access." },
                { icon: "Shield", title: "Malware reverse engineering", desc: "Decompiling attacker code to understand its capabilities." },
                { icon: "Activity", title: "Compromise assessment", desc: "Scanning the entire network for signs of dormant attackers." },
                { icon: "Database", title: "Data exfiltration tracing", desc: "Determining what data was viewed, modified, or stolen." },
                { icon: "Lock", title: "Ransomware negotiation support", desc: "Expert guidance on handling extortion and decryption." }
            ],
            process: [
                { step: "01", title: "Triage", desc: "Assessing the scope and severity of the incident." },
                { step: "02", title: "Contain", desc: "Stopping the attacker's progress and isolating systems." },
                { step: "03", title: "Eradicate", desc: "Removing attacker tools and closing entry points." },
                { step: "04", title: "Recover", desc: "Restoring systems from clean backups and monitoring." },
                { step: "05", title: "Post-Mortem", desc: "Detailed report with lessons learned and hardening steps." }
            ],
            portfolio: [
                { title: "Ransomware Total Recovery", metrics: [{ label: "Systems Saved", value: "450+" }, { label: "Data Restored", value: "100%" }] },
                { title: "BEC Fraud Investigation", metrics: [{ label: "Funds Recovered", value: "$450K" }, { label: "Attack Traced", value: "Global" }] },
                { title: "APT APT Suppression", metrics: [{ label: "Dormancy Time", value: "14 months" }, { label: "Containment", value: "<4hrs" }] }
            ]
        },
        {
            title: "Malware Analysis & Reverse Engineering",
            slug: "malware-analysis",
            heroTitle: "Dissecting the Digital Weapon",
            heroDescription: "Understanding the DNA of custom malware, ransomware, and spyware.",
            heroImage: "/mockup_malware.webp",
            details: "Static and dynamic analysis of suspicious files to determine intent, C2 infrastructure, and IOCs.",
            features: [
                { icon: "Lock", title: "Dynamic sandbox analysis", desc: "Observing malware behavior in a controlled, isolated environment." },
                { icon: "Search", title: "Static binary dissection", desc: "Analyzing code without executing it to find hidden logic." },
                { icon: "Zap", title: "C2 infrastructure mapping", desc: "Identifying the servers the malware communicates with." },
                { icon: "Shield", title: "De-obfuscation & unpacking", desc: "Stripping away protection layers to reveal the core code." },
                { icon: "Code", title: "Custom exploit analysis", desc: "Understanding the specific vulnerabilities being targeted." },
                { icon: "Activity", title: "TTP & IOC generation", desc: "Creating signatures and indicators for your defense systems." }
            ],
            process: [
                { step: "01", title: "Capture", desc: "Securely acquiring the suspicious binary or script." },
                { step: "02", title: "Static", desc: "Reviewing strings, imports, and code structure." },
                { step: "03", title: "Dynamic", desc: "Executing in a sandbox and monitoring syscalls/network." },
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
            heroImage: "/mockup_cybercrime.webp",
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
            heroImage: "/mockup_log_analysis.webp",
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
            heroImage: "/mockup_device_forensics.webp",
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
            heroImage: "/mockup_legal_report.webp",
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
};
