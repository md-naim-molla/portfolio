export interface SkillCategory {
    name: string;
    description: string;
    icon: string;
    skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        name: "Machine Learning & Generative AI",
        description: "Deep learning architectures, transformer pipelines, RAG systems, and predictive modeling.",
        icon: "Brain",
        skills: ["PyTorch", "scikit-learn", "Hugging Face", "Transformers", "RAG", "LangChain", "Vector Databases", "Ollama"],
    },
    {
        name: "Statistical Modeling & Biostatistics",
        description: "Probabilistic inference, causal analysis, time-series econometrics, and epidemiological data.",
        icon: "ChartBar",
        skills: ["Bayesian Inference", "Panel VAR", "Survival Analysis", "Causal Inference", "Multivariate Analysis", "Hypothesis Testing", "Epidemiology"],
    },
    {
        name: "Programming & Data Science",
        description: "Core computing languages, statistical computation, scientific workflows, and scripting.",
        icon: "Code",
        skills: ["Python", "R", "SQL", "STATA", "C++", "JavaScript", "TypeScript", "Jupyter"],
    },
    {
        name: "Engineering, Tools & Cloud",
        description: "Version control, containerization, reproducible scientific environments, and cloud infrastructure.",
        icon: "Terminal",
        skills: ["Git", "Linux / Bash", "Docker", "AWS", "LaTeX", "SPSS", "VS Code"],
    },
    {
        name: "Web Development & Frameworks",
        description: "Interactive data-driven apps, RESTful web services, and modern static site architectures.",
        icon: "Globe",
        skills: ["FastAPI", "Flask", "Streamlit", "Astro", "React", "HTML/CSS"],
    },
    {
        name: "Design & Multimedia Production",
        description: "Scientific publication figures, UI/UX prototyping, visual branding, and video post-production.",
        icon: "Palette",
        skills: ["Adobe Illustrator", "Photoshop", "InDesign", "Lightroom", "Figma", "Premiere Pro", "After Effects"],
    },
];
