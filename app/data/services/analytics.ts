import { ServiceCategory } from "./types";

export const analyticsData: ServiceCategory = {
    title: "Data & Analytics",
    slug: "analytics",
    heroDescription: "Transforming raw data into strategic business intelligence.",
    heroImage: "/hero_analytics.webp",
    overview: "We help organizations build robust data infrastructure and analytical models that turn complex datasets into clear, actionable growth strategies.",
    whyChooseUs: [
        { title: "Real-time Insights", desc: "Building low-latency data pipelines for immediate decision making.", icon: "Zap" },
        { title: "Predictive Analytics", desc: "Leveraging ML to forecast market trends and customer behavior.", icon: "Target" },
        { title: "Cross-platform Unified", desc: "Merging data from web, app, and offline sources into one source of truth.", icon: "Database" }
    ],
    testimonials: [
        {
            content: "The custom dashboard CyberForenX built for our executive team has completely changed how we allocate our quarterly budget. We now move with 100% confidence.",
            author: "Marcus Chen",
            role: "CTO, FinFlow",
            rating: 5
        },
        {
            content: "They didn't just give us data; they gave us answers. Their churn prediction model saved us over $200k in potential lost revenue this year alone.",
            author: "Elena Rodriguez",
            role: "Head of Product, SaaSly",
            rating: 5
        },
        {
            content: "Technical mastery of the modern data stack. Our data is finally clean, unified, and actually useful.",
            author: "David Park",
            role: "VP Operations, OmniRetail",
            rating: 5
        }
    ],
    process: [
        { step: "01", title: "Audit", desc: "Evaluating current data sources, quality, and tracking gaps." },
        { step: "02", title: "Infrastructure", desc: "Setting up data warehouses and ETL pipelines." },
        { step: "03", title: "Modeling", desc: "Building custom metric engines and ML models." },
        { step: "04", title: "Visualization", desc: "Designing intuitive dashboards for various stakeholders." }
    ],
    technologies: {
        "Data Warehousing": [
            { name: "BigQuery", desc: "Serverless data warehouse" },
            { name: "Snowflake", desc: "Cloud data platform" },
            { name: "Redshift", desc: "Fast cloud data warehouse" },
            { name: "PostgreSQL", desc: "Relational database" }
        ],
        "Visualization": [
            { name: "Tableau", desc: "Data visualization software" },
            { name: "Looker", desc: "Modern BI platform" },
            { name: "Power BI", desc: "Business analytics service" },
            { name: "Grafana", desc: "Monitoring and observability" }
        ],
        "ETL & Pipelines": [
            { name: "dbt", desc: "Data transformation tool" },
            { name: "Airflow", desc: "Workflow orchestration" },
            { name: "Fivetran", desc: "Automated data movement" },
            { name: "Segment", desc: "Customer data platform" }
        ],
        "Machine Learning": [
            { name: "TensorFlow", desc: "ML library" },
            { name: "PyTorch", desc: "Deep learning framework" },
            { name: "Scikit-learn", desc: "Data mining & analysis" },
            { name: "Vertex AI", desc: "ML platform" }
        ]
    },
    metrics: [
        { value: "99.9%", label: "DATA ACCURACY" },
        { value: "Sub-1s", label: "QUERY LATENCY" },
        { value: "50+", label: "ETL PIPELINES" },
        { value: "MLOps", label: "CERTIFIED" }
    ],
    certifications: ["Google Cloud Data Engineer", "AWS Certified Data Analytics", "dbt Analytics Engineering", "Tableau Desktop Specialist"],
    subcategories: [
        {
            title: "Data Engineering & ETL",
            slug: "data-engineering",
            heroTitle: "Build a Scalable Data Foundation",
            heroDescription: "Robust data pipelines that ensure your business runs on clean, reliable, and real-time data.",
            heroImage: "/mockup_etl.webp",
            details: "Enterprise-grade data warehousing, automated ETL processes, and database optimization for massive scale.",
            features: [
                { icon: "Database", title: "Cloud data warehousing", desc: "Setting up BigQuery, Snowflake, or Redshift for petabyte-scale analytics." },
                { icon: "Zap", title: "Automated ETL pipelines", desc: "Real-time data ingestion from APIs, DBs, and third-party tools." },
                { icon: "Shield", title: "Data quality & governance", desc: "Implementing validation layers to ensure 100% data integrity." },
                { icon: "Code", title: "Custom API integrations", desc: "Building proprietary connectors for niche data sources." },
                { icon: "Activity", title: "Performance tuning", desc: "Optimizing SQL queries and database schemas for speed." },
                { icon: "Search", title: "Historical data migration", desc: "Safely moving legacy data into modern cloud environments." }
            ],
            process: [
                { step: "01", title: "Map", desc: "Identifying all data sources and required destinations." },
                { step: "02", title: "Design", desc: "Architecting the warehouse schema and pipeline logic." },
                { step: "03", title: "Develop", desc: "Coding the ETL processes and integrations." },
                { step: "04", title: "Test", desc: "Rigorous data validation and stress testing." },
                { step: "05", title: "Deploy", desc: "Going live with automated monitoring and alerting." }
            ],
            portfolio: [
                { title: "FinTech Data Warehouse", metrics: [{ label: "Data Volume", value: "50TB+" }, { label: "Uptime", value: "99.99%" }] },
                { title: "Healthcare Data Lake", metrics: [{ label: "Sources Unified", value: "25+" }, { label: "Query Speed", value: "10x" }] },
                { title: "Retail ETL Pipeline", metrics: [{ label: "Daily Volume", value: "100GB+" }, { label: "Accuracy", value: "99.95%" }] }
            ]
        },
        {
            title: "KPI Monitoring Solutions",
            slug: "kpi-monitoring-solutions",
            heroTitle: "Track What Truly Matters",
            heroDescription: "Real-time KPI monitoring with intelligent alerting and predictive forecasting.",
            heroImage: "/mockup_kpi.webp",
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
            heroImage: "/mockup_behavior.webp",
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
            heroImage: "/mockup_dss.webp",
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
};
