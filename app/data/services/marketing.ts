import { ServiceCategory } from "./types";

export const marketingData: ServiceCategory = {
    title: "Digital Marketing",
    slug: "marketing",
    heroDescription: "Data-driven marketing to dominate your market share.",
    heroImage: "/hero_marketing.webp",
    overview: "We execute highly targeted, omnichannel marketing campaigns built on technical precision and creative excellence to drive measurable ROI.",
    whyChooseUs: [
        { title: "ROI Obsessed", desc: "We track every dollar spent down to the final conversion event.", icon: "Target" },
        { title: "Omnichannel Approach", desc: "Seamless campaigns running across Search, Social, and Programmatic.", icon: "Activity" },
        { title: "Technical SEO", desc: "Leveraging our engineering background to build technically flawless, ranking websites.", icon: "Code" }
    ],
    testimonials: [
        {
            content: "CyberForenX & Associates didn't just run ads; they built a conversion engine. Our ROAS has stayed consistently above 4x for the last six months.",
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
            heroImage: "/mockup_seo.webp",
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
            heroImage: "/mockup_social.webp",
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
            heroImage: "/mockup_ppc.webp",
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
            heroImage: "/mockup_content.webp",
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
            heroImage: "/mockup_email.webp",
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
            heroImage: "/mockup_brand.webp",
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
            heroImage: "/mockup_leadgen.webp",
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
            heroImage: "/mockup_martech.webp",
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
};
