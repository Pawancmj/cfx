import { ServiceCategory } from "./types";

export const trainingData: ServiceCategory = {
    title: "Training & Internship Programs",
    slug: "training",
    heroDescription: "Industry-oriented training, live projects, mentorship, certification, and internship programs to develop future-ready professionals.",
    heroImage: "/hero_web_app.webp",
    overview: "Our training and internship programs bridge the gap between academic knowledge and industry expertise, producing job-ready professionals equipped with real-world skills.",
    whyChooseUs: [
        { title: "Industry-Driven Curriculum", desc: "Programs designed in collaboration with enterprise partners to match current market needs.", icon: "Target" },
        { title: "Live Project Experience", desc: "Hands-on training with real enterprise projects and production-grade tools.", icon: "Activity" },
        { title: "Mentorship & Certification", desc: "One-on-one guidance from industry experts and globally recognized certifications.", icon: "ShieldCheck" }
    ],
    testimonials: [
        {
            content: "The internship program gave me hands-on experience with enterprise cybersecurity tools that I now use daily in my full-time role.",
            author: "Arjun Mehta",
            role: "Security Analyst, CyberDefense Inc",
            rating: 5
        },
        {
            content: "CyberForenX & Associates training transformed our team's cloud security capabilities. The practical labs were incredibly effective.",
            author: "Linda Park",
            role: "VP Engineering, CloudStack Technologies",
            rating: 5
        },
        {
            content: "The mentorship I received during the program was invaluable. My mentor guided me through complex forensics cases that prepared me for real investigations.",
            author: "Kevin Okonkwo",
            role: "Forensic Investigator, DigitalTrust Ltd",
            rating: 5
        }
    ],
    process: [
        { step: "01", title: "Assessment", desc: "Evaluating current skill levels and defining learning objectives." },
        { step: "02", title: "Curriculum", desc: "Tailoring the training path to individual or team requirements." },
        { step: "03", title: "Execute", desc: "Delivering live sessions, labs, and project-based assignments." },
        { step: "04", title: "Certify", desc: "Assessment, feedback, and industry-recognized certification." }
    ],
    technologies: {
        "Security & Forensics": [
            { name: "Kali Linux", desc: "Penetration testing distribution" },
            { name: "Wireshark", desc: "Network analysis tool" },
            { name: "Metasploit", desc: "Exploitation framework" },
            { name: "EnCase", desc: "Forensic investigation platform" }
        ],
        "Cloud & DevOps": [
            { name: "AWS", desc: "Cloud infrastructure platform" },
            { name: "Docker", desc: "Containerization platform" },
            { name: "Kubernetes", desc: "Container orchestration" },
            { name: "Terraform", desc: "Infrastructure as code" }
        ],
        "Development": [
            { name: "Python", desc: "Programming & automation" },
            { name: "JavaScript", desc: "Web development" },
            { name: "React", desc: "Frontend framework" },
            { name: "Node.js", desc: "Backend runtime" }
        ],
        "Learning Platforms": [
            { name: "Moodle", desc: "LMS platform" },
            { name: "Cyber Range", desc: "Virtual lab environment" },
            { name: "TryHackMe", desc: "Cybersecurity training" },
            { name: "Hack The Box", desc: "Penetration testing labs" }
        ]
    },
    metrics: [
        { value: "5,000+", label: "PROFESSIONALS TRAINED" },
        { value: "92%", label: "PLACEMENT RATE" },
        { value: "50+", label: "CORPORATE CLIENTS" },
        { value: "4.8/5", label: "AVG RATING" }
    ],
    certifications: ["CEH", "CompTIA Security+", "AWS Certified", "ISC2 CC", "Google Cybersecurity"],
    subcategories: [
        {
            title: "Technical Training Programs",
            slug: "technical-training-programs",
            heroTitle: "Enterprise-Grade Technical Training",
            heroDescription: "Comprehensive technical training across cybersecurity, development, cloud, and data disciplines.",
            heroImage: "/mockup_web_app.webp",
            details: "Structured training programs delivered by industry experts with hands-on labs, real-world scenarios, and continuous assessment.",
            features: [
                { icon: "Code", title: "Cybersecurity bootcamps", desc: "Intensive hands-on security training with live range exercises." },
                { icon: "Database", title: "Cloud architecture training", desc: "AWS, Azure, and GCP certification preparation with labs." },
                { icon: "Zap", title: "Full-stack development", desc: "End-to-end web development with modern frameworks." },
                { icon: "Activity", title: "Data science & analytics", desc: "Python, ML, and data visualization mastery programs." },
                { icon: "Shield", title: "Digital forensics workshops", desc: "Practical evidence handling and analysis training." },
                { icon: "Target", title: "DevOps & CI/CD pipelines", desc: "Automation, containerization, and deployment strategies." }
            ],
            process: [
                { step: "01", title: "Skill Gap", desc: "Assessing current competencies and target roles." },
                { step: "02", title: "Roadmap", desc: "Designing a personalized learning path with milestones." },
                { step: "03", title: "Execute", desc: "Live instruction with hands-on labs and projects." },
                { step: "04", title: "Assess", desc: "Regular evaluations and performance tracking." },
                { step: "05", title: "Certify", desc: "Industry-recognized certification and portfolio review." }
            ],
            portfolio: [
                { title: "Enterprise Security Upskilling", metrics: [{ label: "Employees", value: "500+" }, { label: "Certification Rate", value: "94%" }] },
                { title: "Government Cyber Academy", metrics: [{ label: "Graduates", value: "200+" }, { label: "Placement", value: "100%" }] },
                { title: "University Partnership Program", metrics: [{ label: "Students", value: "1,200+" }, { label: "Curriculum", value: "8 Courses" }] }
            ]
        },
        {
            title: "Internship Placements",
            slug: "internship-placements",
            heroTitle: "Real Experience, Real Impact",
            heroDescription: "Structured internship programs that give you hands-on experience with live enterprise projects.",
            heroImage: "/mockup_web_app.webp",
            details: "Paid internship opportunities with CyberForenX & Associates and our partner network, working on real client engagements.",
            features: [
                { icon: "Target", title: "Live project assignments", desc: "Work on actual client projects with real deliverables." },
                { icon: "Activity", title: "Structured mentorship", desc: "Weekly one-on-one sessions with experienced professionals." },
                { icon: "Code", title: "Technical skill development", desc: "Build production-grade code and security assessments." },
                { icon: "FileText", title: "Portfolio building", desc: "Create a compelling project portfolio for job applications." },
                { icon: "Shield", title: "Industry exposure", desc: "Client interactions, standups, and enterprise tooling access." },
                { icon: "Zap", title: "Fast-track to full-time", desc: "High performers receive priority consideration for openings." }
            ],
            process: [
                { step: "01", title: "Apply", desc: "Submit application and complete technical assessment." },
                { step: "02", title: "Onboard", desc: "Orientation, tooling setup, and team introduction." },
                { step: "03", title: "Execute", desc: "Work on real projects with mentor guidance." },
                { step: "04", title: "Review", desc: "Mid-point and final performance evaluations." },
                { step: "05", title: "Graduate", desc: "Portfolio showcase and full-time placement consideration." }
            ],
            portfolio: [
                { title: "Summer Internship Cohort", metrics: [{ label: "Interns", value: "45" }, { label: "Hired Full-Time", value: "70%" }] },
                { title: "Cybersecurity Residency", metrics: [{ label: "Duration", value: "6 months" }, { label: "Certifications", value: "3 per intern" }] },
                { title: "Corporate Partnership Program", metrics: [{ label: "Partner Companies", value: "25+" }, { label: "Placements", value: "150+" }] }
            ]
        },
        {
            title: "Corporate Training Solutions",
            slug: "corporate-training-solutions",
            heroTitle: "Upskill Your Workforce, Transform Your Business",
            heroDescription: "Customized corporate training programs designed to close skill gaps and accelerate team performance.",
            heroImage: "/mockup_web_app.webp",
            details: "Tailored training solutions for enterprises looking to upskill their teams in cybersecurity, cloud, development, and data analytics.",
            features: [
                { icon: "Target", title: "Custom curriculum design", desc: "Training content tailored to your tech stack and business needs." },
                { icon: "Activity", title: "Flexible delivery modes", desc: "On-site, virtual, or hybrid training to suit your team." },
                { icon: "Code", title: "Hands-on labs", desc: "Practice environments mirroring your actual infrastructure." },
                { icon: "Shield", title: "Security awareness programs", desc: "Employee security training with phishing simulations." },
                { icon: "FileText", title: "Progress tracking", desc: "Detailed analytics on team performance and skill gains." },
                { icon: "Zap", title: "Certification pathways", desc: "Structured paths to industry certifications." }
            ],
            process: [
                { step: "01", title: "Discovery", desc: "Assessing team skills, gaps, and business objectives." },
                { step: "02", title: "Design", desc: "Creating a custom training curriculum and schedule." },
                { step: "03", title: "Deliver", desc: "Expert-led sessions with hands-on exercises." },
                { step: "04", title: "Measure", desc: "Pre and post-training assessments to track improvement." },
                { step: "05", title: "Support", desc: "Post-training resources and ongoing mentorship." }
            ],
            portfolio: [
                { title: "Bank Security Team Upskilling", metrics: [{ label: "Team Size", value: "120+" }, { label: "Certification Pass Rate", value: "96%" }] },
                { title: "SaaS Company Cloud Migration", metrics: [{ label: "Engineers Trained", value: "80+" }, { label: "Migration Time", value: "-40%" }] },
                { title: "Healthcare Data Privacy Program", metrics: [{ label: "Employees", value: "2,000+" }, { label: "Compliance Score", value: "100%" }] }
            ]
        },
        {
            title: "Certification Preparation",
            slug: "certification-preparation",
            heroTitle: "Earn Your Industry Badge",
            heroDescription: "Structured exam preparation programs for leading cybersecurity, cloud, and technology certifications.",
            heroImage: "/mockup_web_app.webp",
            details: "Comprehensive certification prep with practice exams, study materials, and expert coaching for top industry credentials.",
            features: [
                { icon: "Target", title: "Exam-focused curriculum", desc: "Content aligned exactly with certification exam blueprints." },
                { icon: "Activity", title: "Practice exams & labs", desc: "Realistic mock exams and hands-on lab environments." },
                { icon: "Code", title: "Expert coaching", desc: "Live sessions with certified professionals and trainers." },
                { icon: "FileText", title: "Study materials", desc: "Comprehensive guides, flashcards, and cheat sheets." },
                { icon: "Shield", title: "Exam vouchers", desc: "Discounted exam vouchers for select certifications." },
                { icon: "Zap", title: "Guaranteed pass support", desc: "Free retake support and additional resources if needed." }
            ],
            process: [
                { step: "01", title: "Assess", desc: "Baseline knowledge assessment and gap analysis." },
                { step: "02", title: "Plan", desc: "Customized study plan and exam scheduling." },
                { step: "03", title: "Learn", desc: "Structured content delivery and hands-on practice." },
                { step: "04", title: "Practice", desc: "Mock exams and performance analytics." },
                { step: "05", title: "Certify", desc: "Exam day preparation and post-certification support." }
            ],
            portfolio: [
                { title: "CEH Certification Batch", metrics: [{ label: "Students", value: "200+" }, { label: "Pass Rate", value: "91%" }] },
                { title: "AWS Solutions Architect Program", metrics: [{ label: "Cohorts", value: "12" }, { label: "Avg Score", value: "880/1000" }] },
                { title: "CompTIA Security+ Bootcamp", metrics: [{ label: "Completion", value: "98%" }, { label: "First Attempt Pass", value: "87%" }] }
            ]
        }
    ]
};
