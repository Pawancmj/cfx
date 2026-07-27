import { ServiceCategory } from "./types";

export const talentAcquisitionData: ServiceCategory = {
    title: "Talent Acquisition & Staffing",
    slug: "talent-acquisition",
    heroDescription: "End-to-end recruitment and staffing solutions, connecting organizations with skilled technical and non-technical professionals.",
    heroImage: "/hero_web_app.webp",
    overview: "We provide strategic talent acquisition services that help organizations build high-performing teams through our extensive network of pre-vetted professionals.",
    whyChooseUs: [
        { title: "Pre-Vetted Talent Pool", desc: "Rigorous technical and soft-skill assessments before any candidate reaches your desk.", icon: "Target" },
        { title: "Rapid Deployment", desc: "Average time-to-offer of 2 weeks for technical roles and 5 days for support positions.", icon: "Zap" },
        { title: "Global Reach", desc: "Access to top-tier talent across multiple time zones and geographies.", icon: "Activity" }
    ],
    testimonials: [
        {
            content: "CyberForenX & Associates found us a senior security architect within 10 days. The candidate was a perfect technical and cultural fit.",
            author: "Mark Sullivan",
            role: "VP Engineering, SecureNet Corp",
            rating: 5
        },
        {
            content: "Their understanding of our technical requirements was remarkable. Every candidate they presented was interview-ready and highly qualified.",
            author: "Nina Patel",
            role: "CTO, DataFlow Systems",
            rating: 5
        },
        {
            content: "We scaled our support team from 5 to 50 in just 3 months. CyberForenX & Associates handled the entire recruitment and onboarding process seamlessly.",
            author: "Tom Harrison",
            role: "COO, ServiceFirst Global",
            rating: 5
        }
    ],
    process: [
        { step: "01", title: "Sourcing", desc: "Active and passive candidate identification across multiple channels." },
        { step: "02", title: "Screen", desc: "Technical assessments, behavioral interviews, and background verification." },
        { step: "03", title: "Present", desc: "Curated shortlist of matched candidates with detailed profiles." },
        { step: "04", title: "Close", desc: "Offer management, negotiation support, and seamless onboarding." }
    ],
    technologies: {
        "Recruitment Platforms": [
            { name: "LinkedIn Recruiter", desc: "Professional network sourcing" },
            { name: "Greenhouse", desc: "Applicant tracking system" },
            { name: "Lever", desc: "Talent management platform" },
            { name: "Workday", desc: "HR & recruitment platform" }
        ],
        "Assessment Tools": [
            { name: "HackerRank", desc: "Technical skill assessment" },
            { name: "Codility", desc: "Coding evaluation platform" },
            { name: "TestGorilla", desc: "Pre-employment testing" },
            { name: "Pluralsight IQ", desc: "Skill validation" }
        ],
        "Background & Compliance": [
            { name: "Checkr", desc: "Background check platform" },
            { name: "GoodHire", desc: "Employment screening" },
            { name: "Sterling", desc: "Global background checks" },
            { name: "VeraScreening", desc: "Compliance verification" }
        ],
        "Onboarding & HRIS": [
            { name: "BambooHR", desc: "HR management system" },
            { name: "Rippling", desc: "Unified HR & IT platform" },
            { name: "Gusto", desc: "Payroll & benefits platform" },
            { name: "DocuSign", desc: "Digital signature platform" }
        ]
    },
    metrics: [
        { value: "2 weeks", label: "AVG TIME-TO-HIRE" },
        { value: "95%", label: "RETENTION RATE" },
        { value: "10,000+", label: "PROFESSIONALS PLACED" },
        { value: "500+", label: "ENTERPRISE CLIENTS" }
    ],
    certifications: ["ISO 27001", "GDPR Compliant", "SOC 2 Type II", "EEOC Compliant"],
    subcategories: [
        {
            title: "Technical Recruitment & Staffing",
            slug: "technical-recruitment",
            heroTitle: "Elite Technical Talent, Delivered",
            heroDescription: "Specialized recruitment for software engineers, security professionals, cloud architects, and data scientists.",
            heroImage: "/mockup_web_app.webp",
            details: "Deep technical screening and matching for specialized technology roles across cybersecurity, development, cloud, and data domains.",
            features: [
                { icon: "Code", title: "Software engineering hiring", desc: "Full-stack, backend, frontend, and mobile developers." },
                { icon: "Shield", title: "Cybersecurity specialists", desc: "SOC analysts, pen-testers, forensic investigators, CISOs." },
                { icon: "Database", title: "Cloud & DevOps engineers", desc: "AWS, Azure, GCP, Kubernetes, and CI/CD experts." },
                { icon: "Activity", title: "Data science & ML roles", desc: "Data engineers, ML engineers, and data analysts." },
                { icon: "Target", title: "AI & automation experts", desc: "NLP engineers, computer vision specialists, RPA developers." },
                { icon: "Layout", title: "UI/UX & product designers", desc: "Product designers, UX researchers, and design leads." }
            ],
            process: [
                { step: "01", title: "Define", desc: "Understanding role requirements, tech stack, and team culture." },
                { step: "02", title: "Source", desc: "Multi-channel candidate sourcing and passive outreach." },
                { step: "03", title: "Screen", desc: "Technical assessments, coding challenges, and portfolio review." },
                { step: "04", title: "Match", desc: "Presenting top candidates with detailed evaluation reports." },
                { step: "05", title: "Close", desc: "Interview coordination, offer negotiation, and onboarding." }
            ],
            portfolio: [
                { title: "Tech Startup Scaling", metrics: [{ label: "Hires", value: "35 in 2 months" }, { label: "Retention", value: "100%" }] },
                { title: "Enterprise SOC Buildout", metrics: [{ label: "Analysts Placed", value: "25" }, { label: "Avg Experience", value: "7 years" }] },
                { title: "Cloud Migration Team", metrics: [{ label: "Engineers", value: "15" }, { label: "Migration Complete", value: "On time" }] }
            ]
        },
        {
            title: "Executive Search & Headhunting",
            slug: "executive-search",
            heroTitle: "C-Suite and Leadership Hiring",
            heroDescription: "Discreet executive search for senior leadership positions including CTO, CISO, VP Engineering, and Director roles.",
            heroImage: "/mockup_web_app.webp",
            details: "Retained and contingency executive search services leveraging our extensive network of senior technology and security leaders.",
            features: [
                { icon: "Target", title: "C-suite recruitment", desc: "CTO, CISO, CIO, and VP-level technology leadership." },
                { icon: "Shield", title: "Board advisory placements", desc: "Independent directors and advisory board members." },
                { icon: "Activity", title: "Confidential searches", desc: "Discreet recruitment for sensitive or replacement roles." },
                { icon: "FileText", title: "Leadership assessment", desc: "In-depth executive evaluation and reference verification." },
                { icon: "Code", title: "Succession planning", desc: "Identifying and grooming future leaders within your org." },
                { icon: "Zap", title: "Market intelligence", desc: "Compensation benchmarking and talent market analysis." }
            ],
            process: [
                { step: "01", title: "Engage", desc: "Understanding strategic objectives and leadership requirements." },
                { step: "02", title: "Map", desc: "Target company analysis and candidate identification." },
                { step: "03", title: "Approach", desc: "Discreet outreach and relationship building." },
                { step: "04", title: "Assess", desc: "Deep-dive interviews, references, and psychometric testing." },
                { step: "05", title: "Integrate", desc: "Offer management and post-hire integration support." }
            ],
            portfolio: [
                { title: "CISO Placement - FinTech", metrics: [{ label: "Search Time", value: "4 weeks" }, { label: "Candidate Retained", value: "3 years+" }] },
                { title: "VP Engineering - SaaS", metrics: [{ label: "Team Size", value: "200+" }, { label: "Product Launch", value: "Successful" }] },
                { title: "Director of AI - Healthcare", metrics: [{ label: "Candidates Vetted", value: "150+" }, { label: "Offer Accepted", value: "Top choice" }] }
            ]
        },
        {
            title: "Contract & Temporary Staffing",
            slug: "contract-staffing",
            heroTitle: "Flexible Staffing, On Demand",
            heroDescription: "Rapidly deploy contract and temporary professionals for project-based work, seasonal peaks, and specialized engagements.",
            heroImage: "/mockup_web_app.webp",
            details: "Flexible staffing solutions for short-term projects, seasonal scale-ups, and specialized expertise requirements.",
            features: [
                { icon: "Zap", title: "Rapid deployment", desc: "Pre-vetted contractors available within 48 hours." },
                { icon: "Activity", title: "Project-based staffing", desc: "Dedicated teams for specific initiatives and timelines." },
                { icon: "Code", title: "Specialized expertise", desc: "Hard-to-find skills for niche technology requirements." },
                { icon: "FileText", title: "Compliance management", desc: "Full W2/C2C compliance, insurance, and tax handling." },
                { icon: "Target", title: "Scale up/down flexibility", desc: "Elastic workforce that adjusts to your business needs." },
                { icon: "Shield", title: "Extension & conversion", desc: "Seamless contract extensions and permanent conversion." }
            ],
            process: [
                { step: "01", title: "Requirements", desc: "Defining role, duration, and skill requirements." },
                { step: "02", title: "Match", desc: "Identifying available contractors from pre-vetted pool." },
                { step: "03", title: "Deploy", desc: "Rapid onboarding and project integration." },
                { step: "04", title: "Manage", desc: "Ongoing time tracking, performance monitoring, and support." },
                { step: "05", title: "Transition", desc: "Extension, conversion, or ramp-down as needed." }
            ],
            portfolio: [
                { title: "Post-Breach IR Team", metrics: [{ label: "Contractors", value: "12" }, { label: "Deployment Time", value: "24 hours" }] },
                { title: "Cloud Migration Project", metrics: [{ label: "Duration", value: "6 months" }, { label: "Team Size", value: "20" }] },
                { title: "Holiday Support Scale-up", metrics: [{ label: "Agents Deployed", value: "150" }, { label: "Season", value: "Q4 2025" }] }
            ]
        },
        {
            title: "Recruitment Process Outsourcing",
            slug: "recruitment-process-outsourcing",
            heroTitle: "Your Recruitment Engine, Outsourced",
            heroDescription: "End-to-end RPO solutions that handle your entire hiring process from sourcing to onboarding.",
            heroImage: "/mockup_web_app.webp",
            details: "Full-cycle recruitment process outsourcing that scales with your hiring needs while reducing cost-per-hire and time-to-fill.",
            features: [
                { icon: "Activity", title: "End-to-end RPO", desc: "Full recruitment lifecycle management from sourcing to offer." },
                { icon: "Target", title: "Employer branding", desc: "Building your talent brand across job boards and social media." },
                { icon: "Database", title: "ATS management", desc: "Applicant tracking system setup, optimization, and maintenance." },
                { icon: "FileText", title: "Screening & assessment", desc: "Structured technical and behavioral evaluation processes." },
                { icon: "Zap", title: "Volume hiring", desc: "Scalable recruitment for large-scale hiring initiatives." },
                { icon: "Code", title: "Analytics & reporting", desc: "Data-driven insights on hiring funnel and KPIs." }
            ],
            process: [
                { step: "01", title: "Setup", desc: "Process design, ATS configuration, and team alignment." },
                { step: "02", title: "Source", desc: "Multi-channel candidate generation and employer branding." },
                { step: "03", title: "Screen", desc: "Structured assessments and interview coordination." },
                { step: "04", title: "Offer", desc: "Offer management, negotiation, and acceptance." },
                { step: "05", title: "Onboard", desc: "Seamless new hire onboarding and integration." }
            ],
            portfolio: [
                { title: "Global Tech Company RPO", metrics: [{ label: "Annual Hires", value: "500+" }, { label: "Cost-per-Hire", value: "-40%" }] },
                { title: "Startup Scale-up RPO", metrics: [{ label: "Time-to-Fill", value: "12 days" }, { label: "Offers Accepted", value: "95%" }] },
                { title: "Healthcare System RPO", metrics: [{ label: "Roles Filled", value: "300+" }, { label: "Compliance Rate", value: "100%" }] }
            ]
        },
        {
            title: "Workforce Planning & Talent Strategy",
            slug: "workforce-planning",
            heroTitle: "Strategic Workforce for the Future",
            heroDescription: "Strategic workforce planning and talent strategy consulting to align your people with your business goals.",
            heroImage: "/mockup_web_app.webp",
            details: "Data-driven workforce planning services that help organizations forecast talent needs, optimize team structures, and build future-ready workforces.",
            features: [
                { icon: "Target", title: "Workforce forecasting", desc: "Predictive modeling of future talent needs by role and skill." },
                { icon: "Activity", title: "Org design consulting", desc: "Team structure optimization for maximum efficiency." },
                { icon: "Database", title: "Skills gap analysis", desc: "Identifying critical skill gaps and closure strategies." },
                { icon: "Code", title: "Compensation benchmarking", desc: "Market-competitive salary and benefits analysis." },
                { icon: "Shield", title: "DEI strategy", desc: "Diversity, equity, and inclusion program development." },
                { icon: "FileText", title: "Talent analytics", desc: "Data-driven insights on workforce trends and metrics." }
            ],
            process: [
                { step: "01", title: "Assess", desc: "Current state analysis and business objective alignment." },
                { step: "02", title: "Model", desc: "Creating workforce scenarios and capacity models." },
                { step: "03", title: "Plan", desc: "Developing hiring roadmaps and talent strategies." },
                { step: "04", title: "Execute", desc: "Implementing recommendations and tracking progress." },
                { step: "05", title: "Optimize", desc: "Continuous refinement based on metrics and feedback." }
            ],
            portfolio: [
                { title: "Tech Company Workforce Plan", metrics: [{ label: "Headcount Growth", value: "300%" }, { label: "Plan Accuracy", value: "95%" }] },
                { title: "Financial Services Org Design", metrics: [{ label: "Teams Restructured", value: "15" }, { label: "Efficiency Gain", value: "30%" }] },
                { title: "Healthcare Talent Strategy", metrics: [{ label: "Roles Analyzed", value: "200+" }, { label: "Retention Improvement", value: "+25%" }] }
            ]
        }
    ]
};
