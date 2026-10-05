export interface SkillCategory {
    name: string;
    description: string;
    icon: string;
    skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        name: "Programming Language",
        description: "Core statistical programming, data querying, and computing languages.",
        icon: "Code",
        skills: ["Python", "R", "SQL", "STATA", "C++"],
    },
    {
        name: "Machine Learning",
        description: "End-to-end exploratory data analysis, feature engineering, and model deployment.",
        icon: "Brain",
        skills: ["EDA", "Feature Engineering", "Model Training and Evaluation", "Model Deployment"],
    },
    {
        name: "NLP",
        description: "Natural language processing pipelines, linguistic representations, and transformers.",
        icon: "Brain",
        skills: ["Text preprocessing", "Embedding", "Transformer", "Hugging Face"],
    },
    {
        name: "GenAI",
        description: "Generative artificial intelligence, retrieval-augmented generation, and LLM applications.",
        icon: "Brain",
        skills: ["LLM", "Vector Database", "RAG", "Google API", "Ollama"],
    },
    {
        name: "Statistics",
        description: "Theoretical probability, multivariate inference, econometric time series, and biostatistics.",
        icon: "ChartBar",
        skills: [
            "Probability Theory",
            "Multivariate Analysis",
            "Hypothesis Testing",
            "Estimation",
            "Time Series Analysis",
            "Survival Analysis",
            "Epidemiology",
        ],
    },
    {
        name: "Tools",
        description: "Development environments, version control, containerization, and cloud platforms.",
        icon: "Terminal",
        skills: ["Git", "Linux/Bash", "Jupyter", "SPSS", "VScode", "Docker", "AWS"],
    },
    {
        name: "Web Framework",
        description: "Rapid data prototyping, RESTful backends, and machine learning application frameworks.",
        icon: "Globe",
        skills: ["Streamlit", "Flask", "FastAPI"],
    },
];
