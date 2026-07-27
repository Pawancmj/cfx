import { ServiceCategory } from "./types";

export const dataAnnotationData: ServiceCategory = {
    title: "Intelligent Data Annotation",
    slug: "data-annotation",
    heroDescription: "High-quality image, text, audio, video, document, and AI data annotation services for machine learning and computer vision projects.",
    heroImage: "/hero_analytics.webp",
    overview: "We deliver precision-labeled training data that powers your AI and ML models with accuracy, consistency, and scalability across every data modality.",
    whyChooseUs: [
        { title: "Human-in-the-Loop", desc: "Expert annotators combined with AI-assisted pre-labeling for maximum throughput.", icon: "Target" },
        { title: "Quality Assured", desc: "Multi-stage validation with inter-annotator agreement scoring and random sampling.", icon: "ShieldCheck" },
        { title: "Scale on Demand", desc: "Flexible team scaling from hundreds to thousands of annotators within days.", icon: "Activity" }
    ],
    testimonials: [
        {
            content: "The annotation quality from CyberForenX & Associates is consistently above 98% accuracy. Our computer vision models have never performed better.",
            author: "Dr. Priya Sharma",
            role: "Head of AI, VisionTech Labs",
            rating: 5
        },
        {
            content: "They handled our 2 million image dataset with incredible speed and precision. The project was delivered two weeks ahead of schedule.",
            author: "Alex Kowalski",
            role: "ML Engineering Lead, AutoDrive AI",
            rating: 5
        },
        {
            content: "Their team understood our NLP requirements immediately. The entity recognition labels were exactly what our model needed.",
            author: "Rachel Park",
            role: "NLP Research Scientist, LinguaAI",
            rating: 5
        }
    ],
    process: [
        { step: "01", title: "Requirements", desc: "Understanding your data schema, labeling ontology, and quality thresholds." },
        { step: "02", title: "Tooling", desc: "Setting up annotation pipelines and custom labeling interfaces." },
        { step: "03", title: "Annotate", desc: "Expert human annotation with AI-assisted pre-labeling." },
        { step: "04", title: "Validate", desc: "Multi-stage quality control and inter-annotator agreement scoring." }
    ],
    technologies: {
        "Annotation Platforms": [
            { name: "Labelbox", desc: "Training data platform" },
            { name: "Supervisely", desc: "Computer vision platform" },
            { name: "Scale AI", desc: "Data annotation platform" },
            { name: "Prodigy", desc: "Active learning platform" }
        ],
        "Computer Vision": [
            { name: "CVAT", desc: "Open-source annotation tool" },
            { name: "LabelImg", desc: "Image annotation tool" },
            { name: "Roboflow", desc: "Computer vision pipeline" },
            { name: "FiftyOne", desc: "Dataset management" }
        ],
        "NLP & Text": [
            { name: "Label Studio", desc: "Multi-modal annotation" },
            { name: "BRAT", desc: "Text annotation tool" },
            { name: "Doccano", desc: "Text annotation platform" },
            { name: "spaCy", desc: "NLP library & training" }
        ],
        "Quality & Analytics": [
            { name: "AWS SageMaker GT", desc: "Ground truth platform" },
            { name: "Superb AI", desc: "ML data platform" },
            { name: "Kili Technology", desc: "Data-centric AI platform" },
            { name: "Samasource", desc: "Ethical data annotation" }
        ]
    },
    metrics: [
        { value: "99%+", label: "ANNOTATION ACCURACY" },
        { value: "2M+", label: "IMAGES LABELED" },
        { value: "500K+", label: "TEXT DOCUMENTS" },
        { value: "50+", label: "LANGUAGES SUPPORTED" }
    ],
    certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "HIPAA Eligible"],
    subcategories: [
        {
            title: "Image & Video Annotation",
            slug: "image-video-annotation",
            heroTitle: "Pixel-Perfect Visual Data Labeling",
            heroDescription: "Bounding boxes, polygons, keypoints, and semantic segmentation for computer vision models.",
            heroImage: "/mockup_web_app.webp",
            details: "High-precision image and video annotation for object detection, instance segmentation, and tracking across industries.",
            features: [
                { icon: "Target", title: "Bounding box annotation", desc: "Precise object localization for detection models." },
                { icon: "Layout", title: "Semantic segmentation", desc: "Pixel-level classification for scene understanding." },
                { icon: "Zap", title: "Keypoint & landmark labeling", desc: "Skeletal and facial landmark annotation." },
                { icon: "Activity", title: "Video object tracking", desc: "Frame-by-frame consistent object tracking." },
                { icon: "Smartphone", title: "3D cuboid annotation", desc: "Depth-aware 3D bounding boxes for autonomous systems." },
                { icon: "Code", title: "Polyline & polygon labeling", desc: "Irregular shape annotation for complex objects." }
            ],
            process: [
                { step: "01", title: "Ontology", desc: "Defining the classification hierarchy and attributes." },
                { step: "02", title: "Setup", desc: "Configuring the labeling interface and hotkeys." },
                { step: "03", title: "Label", desc: "Human annotation with AI-assisted pre-labeling." },
                { step: "04", title: "Review", desc: "Expert quality audit and consensus validation." },
                { step: "05", title: "Export", desc: "Delivery in COCO, YOLO, or custom format." }
            ],
            portfolio: [
                { title: "Autonomous Vehicle Dataset", metrics: [{ label: "Images", value: "1.5M+" }, { label: "Classes", value: "150+" }] },
                { title: "Medical Imaging Project", metrics: [{ label: "Scans Labeled", value: "250K+" }, { label: "Accuracy", value: "99.2%" }] },
                { title: "Retail Shelf Analysis", metrics: [{ label: "SKUs Covered", value: "50K+" }, { label: "Stores", value: "1,000+" }] }
            ]
        },
        {
            title: "Text & NLP Data Labeling",
            slug: "text-nlp-labeling",
            heroTitle: "Language Data Your NLP Models Crave",
            heroDescription: "Entity recognition, sentiment analysis, and text classification for natural language processing.",
            heroImage: "/mockup_web_app.webp",
            details: "High-quality text annotation services for training NLP models across domains and languages.",
            features: [
                { icon: "FileText", title: "Named entity recognition", desc: "Person, organization, location, and custom entity tagging." },
                { icon: "Target", title: "Sentiment classification", desc: "Fine-grained emotion and opinion labeling." },
                { icon: "Code", title: "Text classification", desc: "Multi-label and hierarchical document categorization." },
                { icon: "Search", title: "Relation extraction", desc: "Identifying semantic relationships between entities." },
                { icon: "Activity", title: "Coreference resolution", desc: "Linking pronouns and expressions to their referents." },
                { icon: "Zap", title: "Summarization pairs", desc: "Human-written reference summaries for abstractive models." }
            ],
            process: [
                { step: "01", title: "Guidelines", desc: "Creating detailed annotation guidelines with examples." },
                { step: "02", title: "Pilot", desc: "Small batch labeling and guideline refinement." },
                { step: "03", title: "Scale", desc: "Full dataset annotation with parallel teams." },
                { step: "04", title: "Review", desc: "Random sampling and inter-annotator agreement checks." },
                { step: "05", title: "Deliver", desc: "Formatted export with confidence scores." }
            ],
            portfolio: [
                { title: "Legal Document NER", metrics: [{ label: "Documents", value: "500K+" }, { label: "Entity Types", value: "25+" }] },
                { title: "Customer Review Sentiment", metrics: [{ label: "Reviews", value: "2M+" }, { label: "Languages", value: "12" }] },
                { title: "Medical Literature Classification", metrics: [{ label: "Articles", value: "1M+" }, { label: "Categories", value: "50+" }] }
            ]
        },
        {
            title: "Audio & Speech Annotation",
            slug: "audio-speech-annotation",
            heroTitle: "Teaching Machines to Listen",
            heroDescription: "Transcription, speaker diarization, and audio event detection for speech and sound AI.",
            heroImage: "/mockup_web_app.webp",
            details: "Professional audio annotation for ASR, speaker identification, and acoustic event detection systems.",
            features: [
                { icon: "Zap", title: "Speech transcription", desc: "Word-perfect transcription with timestamps and punctuation." },
                { icon: "Activity", title: "Speaker diarization", desc: "Labeling who spoke when in multi-speaker recordings." },
                { icon: "Target", title: "Emotion tagging", desc: "Detecting sentiment and emotional tone in speech." },
                { icon: "Code", title: "Language identification", desc: "Tagging code-switching and multilingual segments." },
                { icon: "Search", title: "Acoustic event detection", desc: "Identifying sounds, alarms, and environmental noises." },
                { icon: "Layout", title: "Phonetic alignment", desc: "Time-aligned phonetic transcription for TTS systems." }
            ],
            process: [
                { step: "01", title: "Audio Prep", desc: "Noise reduction and audio quality assessment." },
                { step: "02", title: "Transcribe", desc: "Human transcription with quality benchmarks." },
                { step: "03", title: "Validate", desc: "Second-pass review and corrections." },
                { step: "04", title: "Annotate", desc: "Adding speaker labels, emotions, and events." },
                { step: "05", title: "Format", desc: "Delivery in JSON, CSV, or custom schema." }
            ],
            portfolio: [
                { title: "Call Center ASR Dataset", metrics: [{ label: "Hours", value: "100K+" }, { label: "Languages", value: "8" }] },
                { title: "Voice Assistant Training", metrics: [{ label: "Utterances", value: "5M+" }, { label: "Accuracy", value: "98.5%" }] },
                { title: "Surveillance Audio Analysis", metrics: [{ label: "Events Tagged", value: "500K+" }, { label: "Detection Rate", value: "96%" }] }
            ]
        },
        {
            title: "3D Point Cloud & LiDAR Annotation",
            slug: "point-cloud-annotation",
            heroTitle: "3D Perception Training Data",
            heroDescription: "LiDAR point cloud annotation for autonomous vehicles, robotics, and spatial AI applications.",
            heroImage: "/mockup_web_app.webp",
            details: "Comprehensive 3D annotation services including cuboid fitting, semantic segmentation, and multi-sensor fusion labeling.",
            features: [
                { icon: "Target", title: "3D cuboid annotation", desc: "Accurate 3D bounding boxes for objects in point clouds." },
                { icon: "Layout", title: "Semantic segmentation", desc: "Point-level classification of scenes and objects." },
                { icon: "Activity", title: "Multi-sensor fusion", desc: "Cross-referencing LiDAR with camera and radar data." },
                { icon: "Code", title: "Track consistency", desc: "Maintaining object identity across temporal frames." },
                { icon: "Zap", title: "Ground surface labeling", desc: "Road, sidewalk, and terrain classification." },
                { icon: "Database", title: "Scene flow annotation", desc: "Motion vectors for dynamic object tracking." }
            ],
            process: [
                { step: "01", title: "Calibrate", desc: "Sensor calibration and coordinate system alignment." },
                { step: "02", title: "Annotate", desc: "3D object labeling in point cloud sequences." },
                { step: "03", title: "Fuse", desc: "Cross-referencing with camera imagery for validation." },
                { step: "04", title: "Track", desc: "Maintaining label consistency across frames." },
                { step: "05", title: "Export", desc: "KITTI, NuScenes, or custom format delivery." }
            ],
            portfolio: [
                { title: "Autonomous Driving Dataset", metrics: [{ label: "Scenes", value: "50K+" }, { label: "Objects Labeled", value: "10M+" }] },
                { title: "Warehouse Robotics Project", metrics: [{ label: "Environments", value: "25+" }, { label: "Accuracy", value: "99.1%" }] },
                { title: "Urban Planning LiDAR Scan", metrics: [{ label: "Area Covered", value: "500 km²" }, { label: "Point Density", value: "200 pts/m²" }] }
            ]
        }
    ]
};
